import{u as C,b as w,r as a,ae as T,j as t,af as E,ag as I,L as k,ah as F}from"./index-BPNOnu4i.js";import{u as O,F as A}from"./index.esm-Bae_MGDG.js";import{I as z}from"./Input-C4p4FEP5.js";import{C as D}from"./CourseCard-udxgpsCg.js";import"./PurePanel-DnULl68u.js";import"./useId-CHcgfaXS.js";import"./index-DzMSRXFW.js";import"./useClosable-DPOJKCrc.js";import"./index-BLl8_7Zi.js";import"./index-D1mxud5J.js";import"./SearchOutlined-Cmj8FuB3.js";function J(){const d=O(),n=C(),{courses:l,loading:o,error:x}=w(e=>e.mentor),[p,f]=a.useState(""),[i,g]=a.useState([]),[u,j]=a.useState([]),[c,b]=a.useState(null),[r,y]=a.useState(!1),N=async e=>{f(e),c&&clearTimeout(c);const s=setTimeout(()=>{n(F({keyword:e,tags:i.join(",")}))},500);b(s)},S=e=>{g(s=>s.includes(e)?s.filter(m=>m!==e):[...s,e])};a.useEffect(()=>{n(T())},[n]),a.useEffect(()=>{const e=l.reduce((s,m)=>(m.tags.forEach(h=>{s.includes(h)||s.push(h)}),s),[]);j(e)},[l]);const v=()=>{y(!r)};return t.jsxs("div",{className:"min-h-screen flex",children:[t.jsx("button",{className:"sm:hidden fixed top-[21px] left-4 z-50 text-2xl p-2 bg-primary text-white rounded-md",onClick:v,children:r?t.jsx(E,{}):t.jsx(I,{})}),t.jsxs("div",{className:`${r?"translate-x-0":"-translate-x-full"} sm:translate-x-0 fixed sm:relative sm:w-[240px] bg-white p-6 border-r border-gray-200  overflow-yauto transition-transform duration-300 ease-in-out z-40`,children:[t.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Filter by Tags"}),t.jsx("div",{className:"flex flex-col gap-3",children:u.map(e=>t.jsxs("label",{className:"flex items-center space-x-3 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:i.includes(e),onChange:()=>S(e),className:"h-5 w-5 rounded text-orange-500 border-gray-300"}),t.jsx("span",{className:"text-gray-700 font-medium",children:e})]},e))})]}),t.jsxs("div",{className:"flex-1 p-6",children:[t.jsx("div",{className:"flex sm:flex-row flex-col justify-start items-center gap-3",children:t.jsx("h1",{className:"text-[#202224] text-[28px] leading-[40px] font-semibold",children:"Explore Courses"})}),t.jsx(A,{...d,children:t.jsxs("form",{onSubmit:d.handleSubmit(e=>console.log(e)),children:[t.jsx("div",{className:"flex justify-center items-center mt-8",children:t.jsx(z,{label:"Search",type:"text",name:"search",placeholder:"Search in your courses...",value:p,onChange:e=>N(e.target.value),className:"w-[340px] sm:w-[580px]"})}),t.jsx("div",{className:`${o?"flex justify-center items-center min-h-[55vh]":"grid sm:grid-cols-3 gap-4 items-center justify-center mt-[30px]"}`,children:o?t.jsx(k,{}):x?t.jsx("p",{className:"text-red-500",children:x}):l.filter(e=>i.length>0?e.tags.some(s=>i.includes(s)):!0).map(e=>t.jsx(D,{title:e==null?void 0:e.title,tags:e==null?void 0:e.tags,chapters:3,students:1250,price:e==null?void 0:e.price,rating:4.5,imageUrl:e==null?void 0:e.imageUrl,description:e==null?void 0:e.description,courseId:e==null?void 0:e._id},e==null?void 0:e._id))})]})})]})]})}export{J as default};