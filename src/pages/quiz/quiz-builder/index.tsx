import { useFieldArray, FormProvider, useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/atoms/button';
import Input from '../../../components/molecule/input/Input';
import Select from '../../../components/molecule/select/Select';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { createQuizWithQuestions } from '../../../redux/slices/quizSlice';
import { AppDispatch } from '../../../redux/store';
import { FaArrowLeft } from 'react-icons/fa';

interface QuizFormValues {
    quizName: string;
    quizDescription: string;
    questions: {
        questionType: 'single' | 'multiple' | 'text';
        question: string;
        options: { option: string }[];
        correctAnswer: string | string[];
    }[];
}

function QuizBuilder() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { courseId } = useParams<{ courseId: string }>();

    const methods = useForm<QuizFormValues>({
        defaultValues: {
            quizName: '',
            quizDescription: '',
            questions: [
                {
                    questionType: 'multiple',
                    question: '',
                    options: [
                        { option: '' },
                        { option: '' },
                        { option: '' },
                        { option: '' },
                    ],
                    correctAnswer: [],
                },
            ],
        },
    });

    const { control, handleSubmit } = methods;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'questions',
    });

    const onAddQuestion = () => {
        append({
            questionType: 'multiple',
            question: '',
            options: [
                { option: '' },
                { option: '' },
                { option: '' },
                { option: '' },
            ],
            correctAnswer: [],
        });
    };

    const onSubmit = async (data: QuizFormValues) => {
        const formattedQuizData = {
            title: data.quizName,
            description: data.quizDescription,
            questions: data.questions.map((q) => {
                const questionType: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TEXT" =
                    q.questionType === 'single' ? 'SINGLE_CHOICE' :
                        q.questionType === 'multiple' ? 'MULTIPLE_CHOICE' :
                            'TEXT';

                return {
                    questionType,
                    content: q.question,
                    solution: {
                        solution: questionType === 'SINGLE_CHOICE'
                            ? q.correctAnswer
                            : Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer],
                        options: q.questionType !== 'text' ? q.options.map(option => option.option) : undefined,
                    },
                };
            }),
        };

        try {
            if (!courseId) {
                console.error("Course ID is undefined");
                return;
            }
            await dispatch(createQuizWithQuestions({ courseId, quizData: formattedQuizData })).unwrap();
            navigate(`/quiz-dashboard/${courseId}`);
        } catch (error) {
            console.error("Error creating quiz:", error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen px-[62px] py-[40px]">
                <button
                    onClick={() => navigate(`/course-details/${courseId}`)}
                    className="flex items-center gap-2 text-primary hover:text-orange-500 mb-6 transition-all">
                    <FaArrowLeft className="text-lg" />
                    <span>Go Back</span>
                </button>
                <div className="flex justify-start items-center mb-8">
                    <h1 className="text-[24px] font-semibold">Quiz Builder</h1>
                </div>

                <div className="mb-8">
                    <Input
                        name="quizName"
                        label="Quiz Name"
                        placeholder="Enter quiz name"
                        className="mb-6"
                    />
                    <Input
                        name="quizDescription"
                        label="Quiz Description"
                        placeholder="Enter quiz description"
                    />
                </div>

                <div className="mb-8">
                    <h2 className="text-[20px] font-semibold mb-4">Add Questions</h2>
                    {fields.map((item, index) => (
                        <div key={item.id} className="mb-10">
                            <Controller
                                name={`questions.${index}.questionType`}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        name={`questions.${index}.questionType`}
                                        value={field.value}
                                        onChange={(value) => field.onChange(value as 'single' | 'multiple' | 'text')}
                                        label="Question Type"
                                        placeholder="Select Question Type"
                                        options={[
                                            { label: 'Single Choice', value: 'single' },
                                            { label: 'Multiple Choice', value: 'multiple' },
                                            { label: 'Text', value: 'text' },
                                        ]}
                                        className="mb-4"
                                    />
                                )}
                            />

                            <Input
                                name={`questions.${index}.question`}
                                label={`Question ${index + 1}`}
                                placeholder="Enter your question"
                                className="mb-6"
                            />

                            {methods.watch(`questions.${index}.questionType`) !== 'text' && (
                                <div className="grid grid-cols-2 gap-4">
                                    {['A', 'B', 'C', 'D'].map((optionLabel, idx) => (
                                        <Input
                                            key={idx}
                                            name={`questions.${index}.options.${idx}.option`}
                                            label={`Option ${optionLabel}`}
                                            placeholder={`Enter option ${optionLabel}`}
                                            className="mb-6"
                                        />
                                    ))}
                                </div>
                            )}
                            {methods.watch(`questions.${index}.questionType`) === 'multiple' ? (
                                <Controller
                                    name={`questions.${index}.correctAnswer`}
                                    control={control}
                                    render={({ field }) => (
                                        <div>
                                            {Array.isArray(field.value) && field.value.map((answer, ansIdx) => (
                                                <Input
                                                    name={`questions.${index}.correctAnswer.${ansIdx}`}
                                                    key={ansIdx}
                                                    value={answer}
                                                    onChange={(e) => {
                                                        const updatedAnswers = [...field.value];
                                                        updatedAnswers[ansIdx] = e.target.value;
                                                        field.onChange(updatedAnswers);
                                                    }}
                                                    label={`Correct Answer ${ansIdx + 1}`}
                                                    placeholder="Enter a correct answer"
                                                    className="mb-4"
                                                />
                                            ))}
                                            <Button
                                                type="button"
                                                variant="outlined"
                                                onClick={() => field.onChange([...(field.value || []), ''])}
                                            >
                                                Add Answer
                                            </Button>
                                        </div>
                                    )}
                                />
                            ) : (
                                <Controller
                                    name={`questions.${index}.correctAnswer`}
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            name={`questions.${index}.correctAnswer`}
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.value)}
                                            label="Correct Answer"
                                            placeholder="Enter the correct answer"
                                            className="mb-4"
                                        />
                                    )}
                                />
                            )}

                            <div className="flex justify-end mt-4">
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() => remove(index)}
                                >
                                    Remove Question
                                </Button>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-between">
                        <Button
                            type="button"
                            variant="outlined"
                            className="flex items-center gap-2"
                            onClick={onAddQuestion}
                        >
                            <IoMdAdd /> Add Question
                        </Button>
                        <Button type="submit" variant="outlined" className="flex items-center gap-2">
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
}

export default QuizBuilder;
