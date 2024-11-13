import{r as a,O as $t,P as Ft,Q as jt,R as Vt,z as zt,N as Dt,J as A,aH as ct,V as Ot,T as qt,D as gt,C as ir,U as Tt,A as W,au as Me,x as Gt,aL as It,Z as Qe,aM as vt,K as wt,aN as ft,_ as Ut}from"./index-BPNOnu4i.js";import{i as Kt,e as Jt,P as xt}from"./useId-CHcgfaXS.js";var dt=a.createContext(null);function Qt(e){var t=e.children,r=e.onBatchResize,n=a.useRef(0),i=a.useRef([]),o=a.useContext(dt),u=a.useCallback(function(c,v,f){n.current+=1;var y=n.current;i.current.push({size:c,element:v,data:f}),Promise.resolve().then(function(){y===n.current&&(r==null||r(i.current),i.current=[])}),o==null||o(c,v,f)},[r,o]);return a.createElement(dt.Provider,{value:u},t)}var Lt=function(){if(typeof Map<"u")return Map;function e(t,r){var n=-1;return t.some(function(i,o){return i[0]===r?(n=o,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var n=e(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(r,n){var i=e(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},t.prototype.delete=function(r){var n=this.__entries__,i=e(n,r);~i&&n.splice(i,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,o=this.__entries__;i<o.length;i++){var u=o[i];r.call(n,u[1],u[0])}},t}()}(),ht=typeof window<"u"&&typeof document<"u"&&window.document===document,$r=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Zt=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind($r):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Yt=2;function Xt(e,t){var r=!1,n=!1,i=0;function o(){r&&(r=!1,e()),n&&c()}function u(){Zt(o)}function c(){var v=Date.now();if(r){if(v-i<Yt)return;n=!0}else r=!0,n=!1,setTimeout(u,t);i=v}return c}var pt=20,en=["top","right","bottom","left","width","height","size","weight"],rn=typeof MutationObserver<"u",tn=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Xt(this.refresh.bind(this),pt)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,n=r.indexOf(t);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!ht||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),rn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!ht||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,n=r===void 0?"":r,i=en.some(function(o){return!!~n.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Nt=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},ar=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||$r},Wt=jr(0,0,0,0);function Fr(e){return parseFloat(e)||0}function Mt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(n,i){var o=e["border-"+i+"-width"];return n+Fr(o)},0)}function nn(e){for(var t=["top","right","bottom","left"],r={},n=0,i=t;n<i.length;n++){var o=i[n],u=e["padding-"+o];r[o]=Fr(u)}return r}function an(e){var t=e.getBBox();return jr(0,0,t.width,t.height)}function on(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return Wt;var n=ar(e).getComputedStyle(e),i=nn(n),o=i.left+i.right,u=i.top+i.bottom,c=Fr(n.width),v=Fr(n.height);if(n.boxSizing==="border-box"&&(Math.round(c+o)!==t&&(c-=Mt(n,"left","right")+o),Math.round(v+u)!==r&&(v-=Mt(n,"top","bottom")+u)),!un(e)){var f=Math.round(c+o)-t,y=Math.round(v+u)-r;Math.abs(f)!==1&&(c-=f),Math.abs(y)!==1&&(v-=y)}return jr(i.left,i.top,c,v)}var sn=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof ar(e).SVGGraphicsElement}:function(e){return e instanceof ar(e).SVGElement&&typeof e.getBBox=="function"}}();function un(e){return e===ar(e).document.documentElement}function ln(e){return ht?sn(e)?an(e):on(e):Wt}function cn(e){var t=e.x,r=e.y,n=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,u=Object.create(o.prototype);return Nt(u,{x:t,y:r,width:n,height:i,top:r,right:t+n,bottom:i+r,left:t}),u}function jr(e,t,r,n){return{x:e,y:t,width:r,height:n}}var vn=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=jr(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=ln(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),fn=function(){function e(t,r){var n=cn(r);Nt(this,{target:t,contentRect:n})}return e}(),dn=function(){function e(t,r,n){if(this.activeObservations_=[],this.observations_=new Lt,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ar(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new vn(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ar(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new fn(n.target,n.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),At=typeof WeakMap<"u"?new WeakMap:new Lt,Ht=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=tn.getInstance(),n=new dn(t,r,this);At.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Ht.prototype[e]=function(){var t;return(t=At.get(this))[e].apply(t,arguments)}});var hn=function(){return typeof $r.ResizeObserver<"u"?$r.ResizeObserver:Ht}(),Ne=new Map;function mn(e){e.forEach(function(t){var r,n=t.target;(r=Ne.get(n))===null||r===void 0||r.forEach(function(i){return i(n)})})}var Bt=new hn(mn);function gn(e,t){Ne.has(e)||(Ne.set(e,new Set),Bt.observe(e)),Ne.get(e).add(t)}function yn(e,t){Ne.has(e)&&(Ne.get(e).delete(t),Ne.get(e).size||(Bt.unobserve(e),Ne.delete(e)))}var bn=function(e){$t(r,e);var t=Ft(r);function r(){return jt(this,r),t.apply(this,arguments)}return Vt(r,[{key:"render",value:function(){return this.props.children}}]),r}(a.Component);function wn(e,t){var r=e.children,n=e.disabled,i=a.useRef(null),o=a.useRef(null),u=a.useContext(dt),c=typeof r=="function",v=c?r(i):r,f=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),y=!c&&a.isValidElement(v)&&zt(v),m=y?v.ref:null,T=Dt(m,i),h=function(){var R;return ct(i.current)||(i.current&&Ot(i.current)==="object"?ct((R=i.current)===null||R===void 0?void 0:R.nativeElement):null)||ct(o.current)};a.useImperativeHandle(t,function(){return h()});var C=a.useRef(e);C.current=e;var x=a.useCallback(function(g){var R=C.current,D=R.onResize,k=R.data,H=g.getBoundingClientRect(),L=H.width,d=H.height,I=g.offsetWidth,U=g.offsetHeight,p=Math.floor(L),ae=Math.floor(d);if(f.current.width!==p||f.current.height!==ae||f.current.offsetWidth!==I||f.current.offsetHeight!==U){var de={width:p,height:ae,offsetWidth:I,offsetHeight:U};f.current=de;var oe=I===Math.round(L)?L:I,se=U===Math.round(d)?d:U,K=A(A({},de),{},{offsetWidth:oe,offsetHeight:se});u==null||u(K,g,k),D&&Promise.resolve().then(function(){D(K,g)})}},[]);return a.useEffect(function(){var g=h();return g&&!n&&gn(g,x),function(){return yn(g,x)}},[i.current,n]),a.createElement(bn,{ref:o},y?a.cloneElement(v,{ref:T}):v)}var Mn=a.forwardRef(wn),Cn="rc-observer-key";function _n(e,t){var r=e.children,n=typeof r=="function"?[r]:qt(r);return n.map(function(i,o){var u=(i==null?void 0:i.key)||"".concat(Cn,"-").concat(o);return a.createElement(Mn,gt({},e,{key:u,ref:o===0?t:void 0}),i)})}var yt=a.forwardRef(_n);yt.Collection=Qt;const Pn=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};function Sn(e){var t=e.prefixCls,r=e.align,n=e.arrow,i=e.arrowPos,o=n||{},u=o.className,c=o.content,v=i.x,f=v===void 0?0:v,y=i.y,m=y===void 0?0:y,T=a.useRef();if(!r||!r.points)return null;var h={position:"absolute"};if(r.autoArrow!==!1){var C=r.points[0],x=r.points[1],g=C[0],R=C[1],D=x[0],k=x[1];g===D||!["t","b"].includes(g)?h.top=m:g==="t"?h.top=0:h.bottom=0,R===k||!["l","r"].includes(R)?h.left=f:R==="l"?h.left=0:h.right=0}return a.createElement("div",{ref:T,className:ir("".concat(t,"-arrow"),u),style:h},c)}function kn(e){var t=e.prefixCls,r=e.open,n=e.zIndex,i=e.mask,o=e.motion;return i?a.createElement(Tt,gt({},o,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(u){var c=u.className;return a.createElement("div",{style:{zIndex:n},className:ir("".concat(t,"-mask"),c)})}):null}var Rn=a.memo(function(e){var t=e.children;return t},function(e,t){return t.cache}),En=a.forwardRef(function(e,t){var r=e.popup,n=e.className,i=e.prefixCls,o=e.style,u=e.target,c=e.onVisibleChanged,v=e.open,f=e.keepDom,y=e.fresh,m=e.onClick,T=e.mask,h=e.arrow,C=e.arrowPos,x=e.align,g=e.motion,R=e.maskMotion,D=e.forceRender,k=e.getPopupContainer,H=e.autoDestroy,L=e.portal,d=e.zIndex,I=e.onMouseEnter,U=e.onMouseLeave,p=e.onPointerEnter,ae=e.ready,de=e.offsetX,oe=e.offsetY,se=e.offsetR,K=e.offsetB,Ce=e.onAlign,O=e.onPrepare,ee=e.stretch,$=e.targetWidth,F=e.targetHeight,b=typeof r=="function"?r():r,We=v||f,J=(k==null?void 0:k.length)>0,q=a.useState(!k||!J),w=W(q,2),G=w[0],or=w[1];if(Me(function(){!G&&J&&u&&or(!0)},[G,J,u]),!G)return null;var he="auto",Q={left:"-1000vw",top:"-1000vh",right:he,bottom:he};if(ae||!v){var Ae,He=x.points,Be=x.dynamicInset||((Ae=x._experimental)===null||Ae===void 0?void 0:Ae.dynamicInset),ue=Be&&He[0][1]==="r",me=Be&&He[0][0]==="b";ue?(Q.right=se,Q.left=he):(Q.left=de,Q.right=he),me?(Q.bottom=K,Q.top=he):(Q.top=oe,Q.bottom=he)}var B={};return ee&&(ee.includes("height")&&F?B.height=F:ee.includes("minHeight")&&F&&(B.minHeight=F),ee.includes("width")&&$?B.width=$:ee.includes("minWidth")&&$&&(B.minWidth=$)),v||(B.pointerEvents="none"),a.createElement(L,{open:D||We,getContainer:k&&function(){return k(u)},autoDestroy:H},a.createElement(kn,{prefixCls:i,open:v,zIndex:d,mask:T,motion:R}),a.createElement(yt,{onResize:Ce,disabled:!v},function(_e){return a.createElement(Tt,gt({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:D,leavedClassName:"".concat(i,"-hidden")},g,{onAppearPrepare:O,onEnterPrepare:O,visible:v,onVisibleChanged:function(Pe){var Z;g==null||(Z=g.onVisibleChanged)===null||Z===void 0||Z.call(g,Pe),c(Pe)}}),function($e,Pe){var Z=$e.className,Ze=$e.style,Fe=ir(i,Z,n);return a.createElement("div",{ref:Gt(_e,t,Pe),className:Fe,style:A(A(A(A({"--arrow-x":"".concat(C.x||0,"px"),"--arrow-y":"".concat(C.y||0,"px")},Q),B),Ze),{},{boxSizing:"border-box",zIndex:d},o),onMouseEnter:I,onMouseLeave:U,onPointerEnter:p,onClick:m},h&&a.createElement(Sn,{prefixCls:i,arrow:h,arrowPos:C,align:x}),a.createElement(Rn,{cache:!v&&!y},b))})}))}),zn=a.forwardRef(function(e,t){var r=e.children,n=e.getTriggerDOMNode,i=zt(r),o=a.useCallback(function(c){It(t,n?n(c):c)},[n]),u=Dt(o,r.ref);return i?a.cloneElement(r,{ref:u}):r}),Ct=a.createContext(null);function _t(e){return e?Array.isArray(e)?e:[e]:[]}function Dn(e,t,r,n){return a.useMemo(function(){var i=_t(r??t),o=_t(n??t),u=new Set(i),c=new Set(o);return e&&(u.has("hover")&&(u.delete("hover"),u.add("click")),c.has("hover")&&(c.delete("hover"),c.add("click"))),[u,c]},[e,t,r,n])}function Tn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function xn(e,t,r,n){for(var i=r.points,o=Object.keys(e),u=0;u<o.length;u+=1){var c,v=o[u];if(Tn((c=e[v])===null||c===void 0?void 0:c.points,i,n))return"".concat(t,"-placement-").concat(v)}return""}function Pt(e,t,r,n){return t||(r?{motionName:"".concat(e,"-").concat(r)}:n?{motionName:n}:null)}function yr(e){return e.ownerDocument.defaultView}function mt(e){for(var t=[],r=e==null?void 0:e.parentElement,n=["hidden","scroll","clip","auto"];r;){var i=yr(r).getComputedStyle(r),o=i.overflowX,u=i.overflowY,c=i.overflow;[o,u,c].some(function(v){return n.includes(v)})&&t.push(r),r=r.parentElement}return t}function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?t:e}function mr(e){return gr(parseFloat(e),0)}function St(e,t){var r=A({},e);return(t||[]).forEach(function(n){if(!(n instanceof HTMLBodyElement||n instanceof HTMLHtmlElement)){var i=yr(n).getComputedStyle(n),o=i.overflow,u=i.overflowClipMargin,c=i.borderTopWidth,v=i.borderBottomWidth,f=i.borderLeftWidth,y=i.borderRightWidth,m=n.getBoundingClientRect(),T=n.offsetHeight,h=n.clientHeight,C=n.offsetWidth,x=n.clientWidth,g=mr(c),R=mr(v),D=mr(f),k=mr(y),H=gr(Math.round(m.width/C*1e3)/1e3),L=gr(Math.round(m.height/T*1e3)/1e3),d=(C-x-D-k)*H,I=(T-h-g-R)*L,U=g*L,p=R*L,ae=D*H,de=k*H,oe=0,se=0;if(o==="clip"){var K=mr(u);oe=K*H,se=K*L}var Ce=m.x+ae-oe,O=m.y+U-se,ee=Ce+m.width+2*oe-ae-de-d,$=O+m.height+2*se-U-p-I;r.left=Math.max(r.left,Ce),r.top=Math.max(r.top,O),r.right=Math.min(r.right,ee),r.bottom=Math.min(r.bottom,$)}}),r}function kt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(t),n=r.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(r)}function Rt(e,t){var r=t||[],n=W(r,2),i=n[0],o=n[1];return[kt(e.width,i),kt(e.height,o)]}function Et(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function nr(e,t){var r=t[0],n=t[1],i,o;return r==="t"?o=e.y:r==="b"?o=e.y+e.height:o=e.y+e.height/2,n==="l"?i=e.x:n==="r"?i=e.x+e.width:i=e.x+e.width/2,{x:i,y:o}}function Le(e,t){var r={t:"b",b:"t",l:"r",r:"l"};return e.map(function(n,i){return i===t?r[n]||"c":n}).join("")}function Ln(e,t,r,n,i,o,u){var c=a.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:i[n]||{}}),v=W(c,2),f=v[0],y=v[1],m=a.useRef(0),T=a.useMemo(function(){return t?mt(t):[]},[t]),h=a.useRef({}),C=function(){h.current={}};e||C();var x=Qe(function(){if(t&&r&&e){let ie=function(hr,Ee){var Je=arguments.length>2&&arguments[2]!==void 0?arguments[2]:br,Wr=w.x+hr,Ar=w.y+Ee,st=Wr+me,ut=Ar+ue,s=Math.max(Wr,Je.left),l=Math.max(Ar,Je.top),S=Math.min(st,Je.right),z=Math.min(ut,Je.bottom);return Math.max(0,(S-s)*(z-l))},tr=function(){qe=w.y+P,Ge=qe+ue,ke=w.x+M,Xe=ke+me};var D,k,H,L,d=t,I=d.ownerDocument,U=yr(d),p=U.getComputedStyle(d),ae=p.width,de=p.height,oe=p.position,se=d.style.left,K=d.style.top,Ce=d.style.right,O=d.style.bottom,ee=d.style.overflow,$=A(A({},i[n]),o),F=I.createElement("div");(D=d.parentElement)===null||D===void 0||D.appendChild(F),F.style.left="".concat(d.offsetLeft,"px"),F.style.top="".concat(d.offsetTop,"px"),F.style.position=oe,F.style.height="".concat(d.offsetHeight,"px"),F.style.width="".concat(d.offsetWidth,"px"),d.style.left="0",d.style.top="0",d.style.right="auto",d.style.bottom="auto",d.style.overflow="hidden";var b;if(Array.isArray(r))b={x:r[0],y:r[1],width:0,height:0};else{var We,J,q=r.getBoundingClientRect();q.x=(We=q.x)!==null&&We!==void 0?We:q.left,q.y=(J=q.y)!==null&&J!==void 0?J:q.top,b={x:q.x,y:q.y,width:q.width,height:q.height}}var w=d.getBoundingClientRect();w.x=(k=w.x)!==null&&k!==void 0?k:w.left,w.y=(H=w.y)!==null&&H!==void 0?H:w.top;var G=I.documentElement,or=G.clientWidth,he=G.clientHeight,Q=G.scrollWidth,Ae=G.scrollHeight,He=G.scrollTop,Be=G.scrollLeft,ue=w.height,me=w.width,B=b.height,_e=b.width,$e={left:0,top:0,right:or,bottom:he},Pe={left:-Be,top:-He,right:Q-Be,bottom:Ae-He},Z=$.htmlRegion,Ze="visible",Fe="visibleFirst";Z!=="scroll"&&Z!==Fe&&(Z=Ze);var Y=Z===Fe,Vr=St(Pe,T),_=St($e,T),br=Z===Ze?_:Vr,je=Y?_:br;d.style.left="auto",d.style.top="auto",d.style.right="0",d.style.bottom="0";var j=d.getBoundingClientRect();d.style.left=se,d.style.top=K,d.style.right=Ce,d.style.bottom=O,d.style.overflow=ee,(L=d.parentElement)===null||L===void 0||L.removeChild(F);var ze=gr(Math.round(me/parseFloat(ae)*1e3)/1e3),Se=gr(Math.round(ue/parseFloat(de)*1e3)/1e3);if(ze===0||Se===0||vt(r)&&!Kt(r))return;var Or=$.offset,qr=$.targetOffset,wr=Rt(w,Or),le=W(wr,2),ce=le[0],re=le[1],Gr=Rt(b,qr),Ve=W(Gr,2),te=Ve[0],De=Ve[1];b.x-=te,b.y-=De;var Ir=$.points||[],Mr=W(Ir,2),Ur=Mr[0],Kr=Mr[1],ge=Et(Kr),X=Et(Ur),sr=nr(b,ge),V=nr(w,X),Te=A({},$),M=sr.x-V.x+ce,P=sr.y-V.y+re,ve=ie(M,P),Oe=ie(M,P,_),ur=nr(b,["t","l"]),ne=nr(w,["t","l"]),Cr=nr(b,["b","r"]),lr=nr(w,["b","r"]),xe=$.overflow||{},_r=xe.adjustX,Jr=xe.adjustY,cr=xe.shiftX,Ye=xe.shiftY,vr=function(Ee){return typeof Ee=="boolean"?Ee:Ee>=0},qe,Ge,ke,Xe;tr();var Ie=vr(Jr),Pr=X[0]===ge[0];if(Ie&&X[0]==="t"&&(Ge>je.bottom||h.current.bt)){var N=P;Pr?N-=ue-B:N=ur.y-lr.y-re;var Sr=ie(M,N),Qr=ie(M,N,_);Sr>ve||Sr===ve&&(!Y||Qr>=Oe)?(h.current.bt=!0,P=N,re=-re,Te.points=[Le(X,0),Le(ge,0)]):h.current.bt=!1}if(Ie&&X[0]==="b"&&(qe<je.top||h.current.tb)){var Ue=P;Pr?Ue+=ue-B:Ue=Cr.y-ne.y-re;var kr=ie(M,Ue),Zr=ie(M,Ue,_);kr>ve||kr===ve&&(!Y||Zr>=Oe)?(h.current.tb=!0,P=Ue,re=-re,Te.points=[Le(X,0),Le(ge,0)]):h.current.tb=!1}var Rr=vr(_r),Er=X[1]===ge[1];if(Rr&&X[1]==="l"&&(Xe>je.right||h.current.rl)){var Ke=M;Er?Ke-=me-_e:Ke=ur.x-lr.x-ce;var zr=ie(Ke,P),pe=ie(Ke,P,_);zr>ve||zr===ve&&(!Y||pe>=Oe)?(h.current.rl=!0,M=Ke,ce=-ce,Te.points=[Le(X,1),Le(ge,1)]):h.current.rl=!1}if(Rr&&X[1]==="r"&&(ke<je.left||h.current.lr)){var Re=M;Er?Re+=me-_e:Re=Cr.x-ne.x-ce;var Dr=ie(Re,P),Tr=ie(Re,P,_);Dr>ve||Dr===ve&&(!Y||Tr>=Oe)?(h.current.lr=!0,M=Re,ce=-ce,Te.points=[Le(X,1),Le(ge,1)]):h.current.lr=!1}tr();var ye=cr===!0?0:cr;typeof ye=="number"&&(ke<_.left&&(M-=ke-_.left-ce,b.x+_e<_.left+ye&&(M+=b.x-_.left+_e-ye)),Xe>_.right&&(M-=Xe-_.right-ce,b.x>_.right-ye&&(M+=b.x-_.right+ye)));var fe=Ye===!0?0:Ye;typeof fe=="number"&&(qe<_.top&&(P-=qe-_.top-re,b.y+B<_.top+fe&&(P+=b.y-_.top+B-fe)),Ge>_.bottom&&(P-=Ge-_.bottom-re,b.y>_.bottom-fe&&(P+=b.y-_.bottom+fe)));var er=w.x+M,rr=er+me,be=w.y+P,Yr=be+ue,xr=b.x,Xr=xr+_e,fr=b.y,pr=fr+B,et=Math.max(er,xr),rt=Math.min(rr,Xr),Lr=(et+rt)/2,tt=Lr-er,nt=Math.max(be,fr),Nr=Math.min(Yr,pr),it=(nt+Nr)/2,at=it-be;u==null||u(t,Te);var dr=j.right-w.x-(M+w.width),we=j.bottom-w.y-(P+w.height);ze===1&&(M=Math.round(M),dr=Math.round(dr)),Se===1&&(P=Math.round(P),we=Math.round(we));var ot={ready:!0,offsetX:M/ze,offsetY:P/Se,offsetR:dr/ze,offsetB:we/Se,arrowX:tt/ze,arrowY:at/Se,scaleX:ze,scaleY:Se,align:Te};y(ot)}}),g=function(){m.current+=1;var k=m.current;Promise.resolve().then(function(){m.current===k&&x()})},R=function(){y(function(k){return A(A({},k),{},{ready:!1})})};return Me(R,[n]),Me(function(){e||R()},[e]),[f.ready,f.offsetX,f.offsetY,f.offsetR,f.offsetB,f.arrowX,f.arrowY,f.scaleX,f.scaleY,f.align,g]}function Nn(e,t,r,n,i){Me(function(){if(e&&t&&r){let m=function(){n(),i()};var o=t,u=r,c=mt(o),v=mt(u),f=yr(u),y=new Set([f].concat(wt(c),wt(v)));return y.forEach(function(T){T.addEventListener("scroll",m,{passive:!0})}),f.addEventListener("resize",m,{passive:!0}),n(),function(){y.forEach(function(T){T.removeEventListener("scroll",m),f.removeEventListener("resize",m)})}}},[e,t,r])}function Wn(e,t,r,n,i,o,u,c){var v=a.useRef(e);v.current=e,a.useEffect(function(){if(t&&n&&(!i||o)){var f=function(h){var C;v.current&&!u(((C=h.composedPath)===null||C===void 0||(C=C.call(h))===null||C===void 0?void 0:C[0])||h.target)&&c(!1)},y=yr(n);y.addEventListener("mousedown",f,!0),y.addEventListener("contextmenu",f,!0);var m=ft(r);return m&&(m.addEventListener("mousedown",f,!0),m.addEventListener("contextmenu",f,!0)),function(){y.removeEventListener("mousedown",f,!0),y.removeEventListener("contextmenu",f,!0),m&&(m.removeEventListener("mousedown",f,!0),m.removeEventListener("contextmenu",f,!0))}}},[t,r,n,i,o])}var An=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function Hn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xt,t=a.forwardRef(function(r,n){var i=r.prefixCls,o=i===void 0?"rc-trigger-popup":i,u=r.children,c=r.action,v=c===void 0?"hover":c,f=r.showAction,y=r.hideAction,m=r.popupVisible,T=r.defaultPopupVisible,h=r.onPopupVisibleChange,C=r.afterPopupVisibleChange,x=r.mouseEnterDelay,g=r.mouseLeaveDelay,R=g===void 0?.1:g,D=r.focusDelay,k=r.blurDelay,H=r.mask,L=r.maskClosable,d=L===void 0?!0:L,I=r.getPopupContainer,U=r.forceRender,p=r.autoDestroy,ae=r.destroyPopupOnHide,de=r.popup,oe=r.popupClassName,se=r.popupStyle,K=r.popupPlacement,Ce=r.builtinPlacements,O=Ce===void 0?{}:Ce,ee=r.popupAlign,$=r.zIndex,F=r.stretch,b=r.getPopupClassNameFromAlign,We=r.fresh,J=r.alignPoint,q=r.onPopupClick,w=r.onPopupAlign,G=r.arrow,or=r.popupMotion,he=r.maskMotion,Q=r.popupTransitionName,Ae=r.popupAnimation,He=r.maskTransitionName,Be=r.maskAnimation,ue=r.className,me=r.getTriggerDOMNode,B=Ut(r,An),_e=p||ae||!1,$e=a.useState(!1),Pe=W($e,2),Z=Pe[0],Ze=Pe[1];Me(function(){Ze(Pn())},[]);var Fe=a.useRef({}),Y=a.useContext(Ct),Vr=a.useMemo(function(){return{registerSubPopup:function(l,S){Fe.current[l]=S,Y==null||Y.registerSubPopup(l,S)}}},[Y]),_=Jt(),br=a.useState(null),je=W(br,2),j=je[0],ze=je[1],Se=a.useRef(null),Or=Qe(function(s){Se.current=s,vt(s)&&j!==s&&ze(s),Y==null||Y.registerSubPopup(_,s)}),qr=a.useState(null),wr=W(qr,2),le=wr[0],ce=wr[1],re=a.useRef(null),Gr=Qe(function(s){vt(s)&&le!==s&&(ce(s),re.current=s)}),Ve=a.Children.only(u),te=(Ve==null?void 0:Ve.props)||{},De={},Ir=Qe(function(s){var l,S,z=le;return(z==null?void 0:z.contains(s))||((l=ft(z))===null||l===void 0?void 0:l.host)===s||s===z||(j==null?void 0:j.contains(s))||((S=ft(j))===null||S===void 0?void 0:S.host)===s||s===j||Object.values(Fe.current).some(function(E){return(E==null?void 0:E.contains(s))||s===E})}),Mr=Pt(o,or,Ae,Q),Ur=Pt(o,he,Be,He),Kr=a.useState(T||!1),ge=W(Kr,2),X=ge[0],sr=ge[1],V=m??X,Te=Qe(function(s){m===void 0&&sr(s)});Me(function(){sr(m||!1)},[m]);var M=a.useRef(V);M.current=V;var P=a.useRef([]);P.current=[];var ve=Qe(function(s){var l;Te(s),((l=P.current[P.current.length-1])!==null&&l!==void 0?l:V)!==s&&(P.current.push(s),h==null||h(s))}),Oe=a.useRef(),ur=function(){clearTimeout(Oe.current)},ne=function(l){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;ur(),S===0?ve(l):Oe.current=setTimeout(function(){ve(l)},S*1e3)};a.useEffect(function(){return ur},[]);var Cr=a.useState(!1),lr=W(Cr,2),xe=lr[0],_r=lr[1];Me(function(s){(!s||V)&&_r(!0)},[V]);var Jr=a.useState(null),cr=W(Jr,2),Ye=cr[0],vr=cr[1],qe=a.useState(null),Ge=W(qe,2),ke=Ge[0],Xe=Ge[1],Ie=function(l){Xe([l.clientX,l.clientY])},Pr=Ln(V,j,J&&ke!==null?ke:le,K,O,ee,w),N=W(Pr,11),Sr=N[0],Qr=N[1],Ue=N[2],kr=N[3],Zr=N[4],Rr=N[5],Er=N[6],Ke=N[7],zr=N[8],pe=N[9],Re=N[10],Dr=Dn(Z,v,f,y),Tr=W(Dr,2),ye=Tr[0],fe=Tr[1],er=ye.has("click"),rr=fe.has("click")||fe.has("contextMenu"),be=Qe(function(){xe||Re()}),Yr=function(){M.current&&J&&rr&&ne(!1)};Nn(V,le,j,be,Yr),Me(function(){be()},[ke,K]),Me(function(){V&&!(O!=null&&O[K])&&be()},[JSON.stringify(ee)]);var xr=a.useMemo(function(){var s=xn(O,o,pe,J);return ir(s,b==null?void 0:b(pe))},[pe,b,O,o,J]);a.useImperativeHandle(n,function(){return{nativeElement:re.current,popupElement:Se.current,forceAlign:be}});var Xr=a.useState(0),fr=W(Xr,2),pr=fr[0],et=fr[1],rt=a.useState(0),Lr=W(rt,2),tt=Lr[0],nt=Lr[1],Nr=function(){if(F&&le){var l=le.getBoundingClientRect();et(l.width),nt(l.height)}},it=function(){Nr(),be()},at=function(l){_r(!1),Re(),C==null||C(l)},dr=function(){return new Promise(function(l){Nr(),vr(function(){return l})})};Me(function(){Ye&&(Re(),Ye(),vr(null))},[Ye]);function we(s,l,S,z){De[s]=function(E){var Hr;z==null||z(E),ne(l,S);for(var lt=arguments.length,bt=new Array(lt>1?lt-1:0),Br=1;Br<lt;Br++)bt[Br-1]=arguments[Br];(Hr=te[s])===null||Hr===void 0||Hr.call.apply(Hr,[te,E].concat(bt))}}(er||rr)&&(De.onClick=function(s){var l;M.current&&rr?ne(!1):!M.current&&er&&(Ie(s),ne(!0));for(var S=arguments.length,z=new Array(S>1?S-1:0),E=1;E<S;E++)z[E-1]=arguments[E];(l=te.onClick)===null||l===void 0||l.call.apply(l,[te,s].concat(z))}),Wn(V,rr,le,j,H,d,Ir,ne);var ot=ye.has("hover"),ie=fe.has("hover"),tr,hr;ot&&(we("onMouseEnter",!0,x,function(s){Ie(s)}),we("onPointerEnter",!0,x,function(s){Ie(s)}),tr=function(l){(V||xe)&&j!==null&&j!==void 0&&j.contains(l.target)&&ne(!0,x)},J&&(De.onMouseMove=function(s){var l;(l=te.onMouseMove)===null||l===void 0||l.call(te,s)})),ie&&(we("onMouseLeave",!1,R),we("onPointerLeave",!1,R),hr=function(){ne(!1,R)}),ye.has("focus")&&we("onFocus",!0,D),fe.has("focus")&&we("onBlur",!1,k),ye.has("contextMenu")&&(De.onContextMenu=function(s){var l;M.current&&fe.has("contextMenu")?ne(!1):(Ie(s),ne(!0)),s.preventDefault();for(var S=arguments.length,z=new Array(S>1?S-1:0),E=1;E<S;E++)z[E-1]=arguments[E];(l=te.onContextMenu)===null||l===void 0||l.call.apply(l,[te,s].concat(z))}),ue&&(De.className=ir(te.className,ue));var Ee=A(A({},te),De),Je={},Wr=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];Wr.forEach(function(s){B[s]&&(Je[s]=function(){for(var l,S=arguments.length,z=new Array(S),E=0;E<S;E++)z[E]=arguments[E];(l=Ee[s])===null||l===void 0||l.call.apply(l,[Ee].concat(z)),B[s].apply(B,z)})});var Ar=a.cloneElement(Ve,A(A({},Ee),Je)),st={x:Rr,y:Er},ut=G?A({},G!==!0?G:{}):null;return a.createElement(a.Fragment,null,a.createElement(yt,{disabled:!V,ref:Gr,onResize:it},a.createElement(zn,{getTriggerDOMNode:me},Ar)),a.createElement(Ct.Provider,{value:Vr},a.createElement(En,{portal:e,ref:Or,prefixCls:o,popup:de,className:ir(oe,xr),style:se,target:le,onMouseEnter:tr,onMouseLeave:hr,onPointerEnter:tr,zIndex:$,open:V,keepDom:xe,fresh:We,onClick:q,mask:H,motion:Mr,maskMotion:Ur,onVisibleChanged:at,onPrepare:dr,forceRender:U,autoDestroy:_e,getPopupContainer:I,align:pe,arrow:ut,arrowPos:st,ready:Sr,offsetX:Qr,offsetY:Ue,offsetR:kr,offsetB:Zr,onAlign:be,stretch:F,targetWidth:pr/Ke,targetHeight:tt/zr})))});return t}const Fn=Hn(xt);export{yt as R,Fn as T,Pn as i};