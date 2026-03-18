(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function u(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(f){if(f.ep)return;f.ep=!0;const d=u(f);fetch(f.href,d)}})();function Um(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Yu={exports:{}},li={};var Lh;function px(){if(Lh)return li;Lh=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(s,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var x in f)x!=="key"&&(d[x]=f[x])}else d=f;return f=d.ref,{$$typeof:l,type:s,key:h,ref:f!==void 0?f:null,props:d}}return li.Fragment=i,li.jsx=u,li.jsxs=u,li}var Hh;function hx(){return Hh||(Hh=1,Yu.exports=px()),Yu.exports}var c=hx(),Vu={exports:{}},oe={};var qh;function mx(){if(qh)return oe;qh=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),D=Symbol.iterator;function q(v){return v===null||typeof v!="object"?null:(v=D&&v[D]||v["@@iterator"],typeof v=="function"?v:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,T={};function V(v,k,Q){this.props=v,this.context=k,this.refs=T,this.updater=Q||C}V.prototype.isReactComponent={},V.prototype.setState=function(v,k){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,k,"setState")},V.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function X(){}X.prototype=V.prototype;function G(v,k,Q){this.props=v,this.context=k,this.refs=T,this.updater=Q||C}var F=G.prototype=new X;F.constructor=G,N(F,V.prototype),F.isPureReactComponent=!0;var $=Array.isArray;function ee(){}var J={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function me(v,k,Q){var W=Q.ref;return{$$typeof:l,type:v,key:k,ref:W!==void 0?W:null,props:Q}}function Re(v,k){return me(v.type,k,v.props)}function Z(v){return typeof v=="object"&&v!==null&&v.$$typeof===l}function fe(v){var k={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Q){return k[Q]})}var Ae=/\/+/g;function ke(v,k){return typeof v=="object"&&v!==null&&v.key!=null?fe(""+v.key):k.toString(36)}function Ve(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ee,ee):(v.status="pending",v.then(function(k){v.status==="pending"&&(v.status="fulfilled",v.value=k)},function(k){v.status==="pending"&&(v.status="rejected",v.reason=k)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function B(v,k,Q,W,re){var de=typeof v;(de==="undefined"||de==="boolean")&&(v=null);var we=!1;if(v===null)we=!0;else switch(de){case"bigint":case"string":case"number":we=!0;break;case"object":switch(v.$$typeof){case l:case i:we=!0;break;case y:return we=v._init,B(we(v._payload),k,Q,W,re)}}if(we)return re=re(v),we=W===""?"."+ke(v,0):W,$(re)?(Q="",we!=null&&(Q=we.replace(Ae,"$&/")+"/"),B(re,k,Q,"",function(fl){return fl})):re!=null&&(Z(re)&&(re=Re(re,Q+(re.key==null||v&&v.key===re.key?"":(""+re.key).replace(Ae,"$&/")+"/")+we)),k.push(re)),1;we=0;var lt=W===""?".":W+":";if($(v))for(var Le=0;Le<v.length;Le++)W=v[Le],de=lt+ke(W,Le),we+=B(W,k,Q,de,re);else if(Le=q(v),typeof Le=="function")for(v=Le.call(v),Le=0;!(W=v.next()).done;)W=W.value,de=lt+ke(W,Le++),we+=B(W,k,Q,de,re);else if(de==="object"){if(typeof v.then=="function")return B(Ve(v),k,Q,W,re);throw k=String(v),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return we}function K(v,k,Q){if(v==null)return v;var W=[],re=0;return B(v,W,"","",function(de){return k.call(Q,de,re++)}),W}function te(v){if(v._status===-1){var k=v._result;k=k(),k.then(function(Q){(v._status===0||v._status===-1)&&(v._status=1,v._result=Q)},function(Q){(v._status===0||v._status===-1)&&(v._status=2,v._result=Q)}),v._status===-1&&(v._status=0,v._result=k)}if(v._status===1)return v._result.default;throw v._result}var P=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},O={map:K,forEach:function(v,k,Q){K(v,function(){k.apply(this,arguments)},Q)},count:function(v){var k=0;return K(v,function(){k++}),k},toArray:function(v){return K(v,function(k){return k})||[]},only:function(v){if(!Z(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return oe.Activity=S,oe.Children=O,oe.Component=V,oe.Fragment=u,oe.Profiler=f,oe.PureComponent=G,oe.StrictMode=s,oe.Suspense=b,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,oe.__COMPILER_RUNTIME={__proto__:null,c:function(v){return J.H.useMemoCache(v)}},oe.cache=function(v){return function(){return v.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(v,k,Q){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var W=N({},v.props),re=v.key;if(k!=null)for(de in k.key!==void 0&&(re=""+k.key),k)!le.call(k,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&k.ref===void 0||(W[de]=k[de]);var de=arguments.length-2;if(de===1)W.children=Q;else if(1<de){for(var we=Array(de),lt=0;lt<de;lt++)we[lt]=arguments[lt+2];W.children=we}return me(v.type,re,W)},oe.createContext=function(v){return v={$$typeof:h,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:d,_context:v},v},oe.createElement=function(v,k,Q){var W,re={},de=null;if(k!=null)for(W in k.key!==void 0&&(de=""+k.key),k)le.call(k,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(re[W]=k[W]);var we=arguments.length-2;if(we===1)re.children=Q;else if(1<we){for(var lt=Array(we),Le=0;Le<we;Le++)lt[Le]=arguments[Le+2];re.children=lt}if(v&&v.defaultProps)for(W in we=v.defaultProps,we)re[W]===void 0&&(re[W]=we[W]);return me(v,de,re)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(v){return{$$typeof:x,render:v}},oe.isValidElement=Z,oe.lazy=function(v){return{$$typeof:y,_payload:{_status:-1,_result:v},_init:te}},oe.memo=function(v,k){return{$$typeof:g,type:v,compare:k===void 0?null:k}},oe.startTransition=function(v){var k=J.T,Q={};J.T=Q;try{var W=v(),re=J.S;re!==null&&re(Q,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(ee,P)}catch(de){P(de)}finally{k!==null&&Q.types!==null&&(k.types=Q.types),J.T=k}},oe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},oe.use=function(v){return J.H.use(v)},oe.useActionState=function(v,k,Q){return J.H.useActionState(v,k,Q)},oe.useCallback=function(v,k){return J.H.useCallback(v,k)},oe.useContext=function(v){return J.H.useContext(v)},oe.useDebugValue=function(){},oe.useDeferredValue=function(v,k){return J.H.useDeferredValue(v,k)},oe.useEffect=function(v,k){return J.H.useEffect(v,k)},oe.useEffectEvent=function(v){return J.H.useEffectEvent(v)},oe.useId=function(){return J.H.useId()},oe.useImperativeHandle=function(v,k,Q){return J.H.useImperativeHandle(v,k,Q)},oe.useInsertionEffect=function(v,k){return J.H.useInsertionEffect(v,k)},oe.useLayoutEffect=function(v,k){return J.H.useLayoutEffect(v,k)},oe.useMemo=function(v,k){return J.H.useMemo(v,k)},oe.useOptimistic=function(v,k){return J.H.useOptimistic(v,k)},oe.useReducer=function(v,k,Q){return J.H.useReducer(v,k,Q)},oe.useRef=function(v){return J.H.useRef(v)},oe.useState=function(v){return J.H.useState(v)},oe.useSyncExternalStore=function(v,k,Q){return J.H.useSyncExternalStore(v,k,Q)},oe.useTransition=function(){return J.H.useTransition()},oe.version="19.2.3",oe}var Yh;function oo(){return Yh||(Yh=1,Vu.exports=mx()),Vu.exports}var E=oo();const gx=Um(E);var Gu={exports:{}},ii={},Xu={exports:{}},Qu={};var Vh;function bx(){return Vh||(Vh=1,(function(l){function i(B,K){var te=B.length;B.push(K);e:for(;0<te;){var P=te-1>>>1,O=B[P];if(0<f(O,K))B[P]=K,B[te]=O,te=P;else break e}}function u(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var K=B[0],te=B.pop();if(te!==K){B[0]=te;e:for(var P=0,O=B.length,v=O>>>1;P<v;){var k=2*(P+1)-1,Q=B[k],W=k+1,re=B[W];if(0>f(Q,te))W<O&&0>f(re,Q)?(B[P]=re,B[W]=te,P=W):(B[P]=Q,B[k]=te,P=k);else if(W<O&&0>f(re,te))B[P]=re,B[W]=te,P=W;else break e}}return K}function f(B,K){var te=B.sortIndex-K.sortIndex;return te!==0?te:B.id-K.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,x=h.now();l.unstable_now=function(){return h.now()-x}}var b=[],g=[],y=1,S=null,D=3,q=!1,C=!1,N=!1,T=!1,V=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function F(B){for(var K=u(g);K!==null;){if(K.callback===null)s(g);else if(K.startTime<=B)s(g),K.sortIndex=K.expirationTime,i(b,K);else break;K=u(g)}}function $(B){if(N=!1,F(B),!C)if(u(b)!==null)C=!0,ee||(ee=!0,fe());else{var K=u(g);K!==null&&Ve($,K.startTime-B)}}var ee=!1,J=-1,le=5,me=-1;function Re(){return T?!0:!(l.unstable_now()-me<le)}function Z(){if(T=!1,ee){var B=l.unstable_now();me=B;var K=!0;try{e:{C=!1,N&&(N=!1,X(J),J=-1),q=!0;var te=D;try{t:{for(F(B),S=u(b);S!==null&&!(S.expirationTime>B&&Re());){var P=S.callback;if(typeof P=="function"){S.callback=null,D=S.priorityLevel;var O=P(S.expirationTime<=B);if(B=l.unstable_now(),typeof O=="function"){S.callback=O,F(B),K=!0;break t}S===u(b)&&s(b),F(B)}else s(b);S=u(b)}if(S!==null)K=!0;else{var v=u(g);v!==null&&Ve($,v.startTime-B),K=!1}}break e}finally{S=null,D=te,q=!1}K=void 0}}finally{K?fe():ee=!1}}}var fe;if(typeof G=="function")fe=function(){G(Z)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,ke=Ae.port2;Ae.port1.onmessage=Z,fe=function(){ke.postMessage(null)}}else fe=function(){V(Z,0)};function Ve(B,K){J=V(function(){B(l.unstable_now())},K)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_next=function(B){switch(D){case 1:case 2:case 3:var K=3;break;default:K=D}var te=D;D=K;try{return B()}finally{D=te}},l.unstable_requestPaint=function(){T=!0},l.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=D;D=B;try{return K()}finally{D=te}},l.unstable_scheduleCallback=function(B,K,te){var P=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?P+te:P):te=P,B){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=te+O,B={id:y++,callback:K,priorityLevel:B,startTime:te,expirationTime:O,sortIndex:-1},te>P?(B.sortIndex=te,i(g,B),u(b)===null&&B===u(g)&&(N?(X(J),J=-1):N=!0,Ve($,te-P))):(B.sortIndex=O,i(b,B),C||q||(C=!0,ee||(ee=!0,fe()))),B},l.unstable_shouldYield=Re,l.unstable_wrapCallback=function(B){var K=D;return function(){var te=D;D=K;try{return B.apply(this,arguments)}finally{D=te}}}})(Qu)),Qu}var Gh;function xx(){return Gh||(Gh=1,Xu.exports=bx()),Xu.exports}var Zu={exports:{}},nt={};var Xh;function yx(){if(Xh)return nt;Xh=1;var l=oo();function i(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(b,g,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:b,containerInfo:g,implementation:y}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nt.createPortal=function(b,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return d(b,g,null,y)},nt.flushSync=function(b){var g=h.T,y=s.p;try{if(h.T=null,s.p=2,b)return b()}finally{h.T=g,s.p=y,s.d.f()}},nt.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(b,g))},nt.prefetchDNS=function(b){typeof b=="string"&&s.d.D(b)},nt.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var y=g.as,S=x(y,g.crossOrigin),D=typeof g.integrity=="string"?g.integrity:void 0,q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:D,fetchPriority:q}):y==="script"&&s.d.X(b,{crossOrigin:S,integrity:D,fetchPriority:q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nt.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=x(g.as,g.crossOrigin);s.d.M(b,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(b)},nt.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,S=x(y,g.crossOrigin);s.d.L(b,y,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nt.preloadModule=function(b,g){if(typeof b=="string")if(g){var y=x(g.as,g.crossOrigin);s.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(b)},nt.requestFormReset=function(b){s.d.r(b)},nt.unstable_batchedUpdates=function(b,g){return b(g)},nt.useFormState=function(b,g,y){return h.H.useFormState(b,g,y)},nt.useFormStatus=function(){return h.H.useHostTransitionStatus()},nt.version="19.2.3",nt}var Qh;function vx(){if(Qh)return Zu.exports;Qh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Zu.exports=yx(),Zu.exports}var Zh;function Sx(){if(Zh)return ii;Zh=1;var l=xx(),i=oo(),u=vx();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return b(r),e;if(o===a)return b(r),t;o=o.sibling}throw Error(s(188))}if(n.return!==a.return)n=r,a=o;else{for(var p=!1,m=r.child;m;){if(m===n){p=!0,n=r,a=o;break}if(m===a){p=!0,a=r,n=o;break}m=m.sibling}if(!p){for(m=o.child;m;){if(m===n){p=!0,n=o,a=r;break}if(m===a){p=!0,a=o,n=r;break}m=m.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,D=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),G=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),Re=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function fe(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case V:return"Profiler";case T:return"StrictMode";case $:return"Suspense";case ee:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case G:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var Ve=Array.isArray,B=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},P=[],O=-1;function v(e){return{current:e}}function k(e){0>O||(e.current=P[O],P[O]=null,O--)}function Q(e,t){O++,P[O]=e.current,e.current=t}var W=v(null),re=v(null),de=v(null),we=v(null);function lt(e,t){switch(Q(de,t),Q(re,e),Q(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?oh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=oh(t),e=sh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(W),Q(W,e)}function Le(){k(W),k(re),k(de)}function fl(e){e.memoizedState!==null&&Q(we,e);var t=W.current,n=sh(t,e.type);t!==n&&(Q(re,e),Q(W,n))}function vi(e){re.current===e&&(k(W),k(re)),we.current===e&&(k(we),ei._currentValue=te)}var jo,Uc;function Kn(e){if(jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jo=t&&t[1]||"",Uc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jo+e+Uc}var No=!1;function Eo(e,t){if(!e||No)return"";No=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(U){var _=U}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(U){_=U}e.call(Y.prototype)}}else{try{throw Error()}catch(U){_=U}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(U){if(U&&_&&typeof U.stack=="string")return[U.stack,_.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),p=o[0],m=o[1];if(p&&m){var w=p.split(`
`),R=m.split(`
`);for(r=a=0;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;for(;r<R.length&&!R[r].includes("DetermineComponentFrameRoot");)r++;if(a===w.length||r===R.length)for(a=w.length-1,r=R.length-1;1<=a&&0<=r&&w[a]!==R[r];)r--;for(;1<=a&&0<=r;a--,r--)if(w[a]!==R[r]){if(a!==1||r!==1)do if(a--,r--,0>r||w[a]!==R[r]){var L=`
`+w[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=r);break}}}finally{No=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Kn(n):""}function Xg(e,t){switch(e.tag){case 26:case 27:case 5:return Kn(e.type);case 16:return Kn("Lazy");case 13:return e.child!==t&&t!==null?Kn("Suspense Fallback"):Kn("Suspense");case 19:return Kn("SuspenseList");case 0:case 15:return Eo(e.type,!1);case 11:return Eo(e.type.render,!1);case 1:return Eo(e.type,!0);case 31:return Kn("Activity");default:return""}}function Bc(e){try{var t="",n=null;do t+=Xg(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var zo=Object.prototype.hasOwnProperty,To=l.unstable_scheduleCallback,Co=l.unstable_cancelCallback,Qg=l.unstable_shouldYield,Zg=l.unstable_requestPaint,gt=l.unstable_now,Jg=l.unstable_getCurrentPriorityLevel,Lc=l.unstable_ImmediatePriority,Hc=l.unstable_UserBlockingPriority,Si=l.unstable_NormalPriority,Kg=l.unstable_LowPriority,qc=l.unstable_IdlePriority,Fg=l.log,$g=l.unstable_setDisableYieldValue,dl=null,bt=null;function jn(e){if(typeof Fg=="function"&&$g(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(dl,e)}catch{}}var xt=Math.clz32?Math.clz32:Ig,Wg=Math.log,Pg=Math.LN2;function Ig(e){return e>>>=0,e===0?32:31-(Wg(e)/Pg|0)|0}var wi=256,ji=262144,Ni=4194304;function Fn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ei(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~o,a!==0?r=Fn(a):(p&=m,p!==0?r=Fn(p):n||(n=m&~e,n!==0&&(r=Fn(n))))):(m=a&~o,m!==0?r=Fn(m):p!==0?r=Fn(p):n||(n=a&~e,n!==0&&(r=Fn(n)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:r}function pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function e0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(){var e=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),e}function Ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function t0(e,t,n,a,r,o){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,w=e.expirationTimes,R=e.hiddenUpdates;for(n=p&~n;0<n;){var L=31-xt(n),Y=1<<L;m[L]=0,w[L]=-1;var _=R[L];if(_!==null)for(R[L]=null,L=0;L<_.length;L++){var U=_[L];U!==null&&(U.lane&=-536870913)}n&=~Y}a!==0&&Vc(e,a,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(p&~t))}function Vc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-xt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-xt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Xc(e,t){var n=t&-t;return n=(n&42)!==0?1:Ro(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ro(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qc(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:_h(e.type))}function Zc(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Nn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Nn,ot="__reactProps$"+Nn,ya="__reactContainer$"+Nn,Oo="__reactEvents$"+Nn,n0="__reactListeners$"+Nn,a0="__reactHandles$"+Nn,Jc="__reactResources$"+Nn,ml="__reactMarker$"+Nn;function Do(e){delete e[$e],delete e[ot],delete e[Oo],delete e[n0],delete e[a0]}function va(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ya]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mh(e);e!==null;){if(n=e[$e])return n;e=mh(e)}return t}e=n,n=e.parentNode}return null}function Sa(e){if(e=e[$e]||e[ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function wa(e){var t=e[Jc];return t||(t=e[Jc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[ml]=!0}var Kc=new Set,Fc={};function $n(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(Fc[e]=t,e=0;e<t.length;e++)Kc.add(t[e])}var l0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$c={},Wc={};function i0(e){return zo.call(Wc,e)?!0:zo.call($c,e)?!1:l0.test(e)?Wc[e]=!0:($c[e]=!0,!1)}function zi(e,t,n){if(i0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ti(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Wt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function r0(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,o.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mo(e){if(!e._valueTracker){var t=Pc(e)?"checked":"value";e._valueTracker=r0(e,t,""+e[t])}}function Ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Pc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var o0=/[\n"\\]/g;function At(e){return e.replace(o0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ko(e,t,n,a,r,o,p,m){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Uo(e,p,Ct(t)):n!=null?Uo(e,p,Ct(n)):a!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ct(m):e.removeAttribute("name")}function ef(e,t,n,a,r,o,p,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Mo(e);return}n=n!=null?""+Ct(n):"",t=t!=null?""+Ct(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Mo(e)}function Uo(e,t,n){t==="number"&&Ci(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Na(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function tf(e,t,n){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ct(n):""}function nf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Ve(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ct(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Mo(e)}function Ea(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var s0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function af(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||s0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function lf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&af(e,r,a)}else for(var o in t)t.hasOwnProperty(o)&&af(e,o,t[o])}function Bo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ai(e){return c0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pt(){}var Lo=null;function Ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,Ta=null;function rf(e){var t=Sa(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(ko(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[ot]||null;if(!r)throw Error(s(90));ko(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ic(a)}break e;case"textarea":tf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Na(e,!!n.multiple,t,!1)}}}var qo=!1;function of(e,t,n){if(qo)return e(t,n);qo=!0;try{var a=e(t);return a}finally{if(qo=!1,(za!==null||Ta!==null)&&(gr(),za&&(t=za,e=Ta,Ta=za=null,rf(t),e)))for(t=0;t<e.length;t++)rf(e[t])}}function bl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ot]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(It)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{Yo=!1}var En=null,Vo=null,Ri=null;function sf(){if(Ri)return Ri;var e,t=Vo,n=t.length,a,r="value"in En?En.value:En.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===r[o-a];a++);return Ri=r.slice(e,1<a?1-a:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function uf(){return!1}function st(e){function t(n,a,r,o,p){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=p,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oi:uf,this.isPropagationStopped=uf,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Di=st(Wn),yl=S({},Wn,{view:0,detail:0}),f0=st(yl),Go,Xo,vl,Mi=S({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vl&&(vl&&e.type==="mousemove"?(Go=e.screenX-vl.screenX,Xo=e.screenY-vl.screenY):Xo=Go=0,vl=e),Go)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),cf=st(Mi),d0=S({},Mi,{dataTransfer:0}),p0=st(d0),h0=S({},yl,{relatedTarget:0}),Qo=st(h0),m0=S({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=st(m0),b0=S({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x0=st(b0),y0=S({},Wn,{data:0}),ff=st(y0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w0[e])?!!t[e]:!1}function Zo(){return j0}var N0=S({},yl,{key:function(e){if(e.key){var t=v0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zo,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E0=st(N0),z0=S({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=st(z0),T0=S({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zo}),C0=st(T0),A0=S({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=st(A0),_0=S({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=st(_0),D0=S({},Wn,{newState:0,oldState:0}),M0=st(D0),k0=[9,13,27,32],Jo=It&&"CompositionEvent"in window,Sl=null;It&&"documentMode"in document&&(Sl=document.documentMode);var U0=It&&"TextEvent"in window&&!Sl,pf=It&&(!Jo||Sl&&8<Sl&&11>=Sl),hf=" ",mf=!1;function gf(e,t){switch(e){case"keyup":return k0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function B0(e,t){switch(e){case"compositionend":return bf(t);case"keypress":return t.which!==32?null:(mf=!0,hf);case"textInput":return e=t.data,e===hf&&mf?null:e;default:return null}}function L0(e,t){if(Ca)return e==="compositionend"||!Jo&&gf(e,t)?(e=sf(),Ri=Vo=En=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pf&&t.locale!=="ko"?null:t.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H0[e.type]:t==="textarea"}function yf(e,t,n,a){za?Ta?Ta.push(a):Ta=[a]:za=a,t=jr(t,"onChange"),0<t.length&&(n=new Di("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var wl=null,jl=null;function q0(e){th(e,0)}function ki(e){var t=gl(e);if(Ic(t))return e}function vf(e,t){if(e==="change")return t}var Sf=!1;if(It){var Ko;if(It){var Fo="oninput"in document;if(!Fo){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),Fo=typeof wf.oninput=="function"}Ko=Fo}else Ko=!1;Sf=Ko&&(!document.documentMode||9<document.documentMode)}function jf(){wl&&(wl.detachEvent("onpropertychange",Nf),jl=wl=null)}function Nf(e){if(e.propertyName==="value"&&ki(jl)){var t=[];yf(t,jl,e,Ho(e)),of(q0,t)}}function Y0(e,t,n){e==="focusin"?(jf(),wl=t,jl=n,wl.attachEvent("onpropertychange",Nf)):e==="focusout"&&jf()}function V0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(jl)}function G0(e,t){if(e==="click")return ki(t)}function X0(e,t){if(e==="input"||e==="change")return ki(t)}function Q0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Q0;function Nl(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!zo.call(t,r)||!yt(e[r],t[r]))return!1}return!0}function Ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var n=Ef(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ef(n)}}function Tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ci(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ci(e.document)}return t}function $o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Z0=It&&"documentMode"in document&&11>=document.documentMode,Aa=null,Wo=null,El=null,Po=!1;function Af(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||Aa==null||Aa!==Ci(a)||(a=Aa,"selectionStart"in a&&$o(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),El&&Nl(El,a)||(El=a,a=jr(Wo,"onSelect"),0<a.length&&(t=new Di("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Aa)))}function Pn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ra={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionrun:Pn("Transition","TransitionRun"),transitionstart:Pn("Transition","TransitionStart"),transitioncancel:Pn("Transition","TransitionCancel"),transitionend:Pn("Transition","TransitionEnd")},Io={},Rf={};It&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function In(e){if(Io[e])return Io[e];if(!Ra[e])return e;var t=Ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rf)return Io[e]=t[n];return e}var _f=In("animationend"),Of=In("animationiteration"),Df=In("animationstart"),J0=In("transitionrun"),K0=In("transitionstart"),F0=In("transitioncancel"),Mf=In("transitionend"),kf=new Map,es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");es.push("scrollEnd");function Ht(e,t){kf.set(e,t),$n(t,[e])}var Ui=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],_a=0,ts=0;function Bi(){for(var e=_a,t=ts=_a=0;t<e;){var n=Rt[t];Rt[t++]=null;var a=Rt[t];Rt[t++]=null;var r=Rt[t];Rt[t++]=null;var o=Rt[t];if(Rt[t++]=null,a!==null&&r!==null){var p=a.pending;p===null?r.next=r:(r.next=p.next,p.next=r),a.pending=r}o!==0&&Uf(n,r,o)}}function Li(e,t,n,a){Rt[_a++]=e,Rt[_a++]=t,Rt[_a++]=n,Rt[_a++]=a,ts|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ns(e,t,n,a){return Li(e,t,n,a),Hi(e)}function ea(e,t){return Li(e,null,null,t),Hi(e)}function Uf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-xt(n),e=o.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),o):null}function Hi(e){if(50<Jl)throw Jl=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Oa={};function $0(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,a){return new $0(e,t,n,a)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function en(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qi(e,t,n,a,r,o){var p=0;if(a=e,typeof e=="function")as(e)&&(p=1);else if(typeof e=="string")p=tx(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case me:return e=vt(31,n,t,r),e.elementType=me,e.lanes=o,e;case N:return ta(n.children,r,o,t);case T:p=8,r|=24;break;case V:return e=vt(12,n,t,r|2),e.elementType=V,e.lanes=o,e;case $:return e=vt(13,n,t,r),e.elementType=$,e.lanes=o,e;case ee:return e=vt(19,n,t,r),e.elementType=ee,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:p=10;break e;case X:p=9;break e;case F:p=11;break e;case J:p=14;break e;case le:p=16,a=null;break e}p=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=vt(p,n,t,r),t.elementType=e,t.type=a,t.lanes=o,t}function ta(e,t,n,a){return e=vt(7,e,a,t),e.lanes=n,e}function ls(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Lf(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function is(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hf=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=Hf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Bc(t)},Hf.set(e,t),t)}return{value:e,source:t,stack:Bc(t)}}var Da=[],Ma=0,Yi=null,zl=0,Ot=[],Dt=0,zn=null,Qt=1,Zt="";function tn(e,t){Da[Ma++]=zl,Da[Ma++]=Yi,Yi=e,zl=t}function qf(e,t,n){Ot[Dt++]=Qt,Ot[Dt++]=Zt,Ot[Dt++]=zn,zn=e;var a=Qt;e=Zt;var r=32-xt(a)-1;a&=~(1<<r),n+=1;var o=32-xt(t)+r;if(30<o){var p=r-r%5;o=(a&(1<<p)-1).toString(32),a>>=p,r-=p,Qt=1<<32-xt(t)+r|n<<r|a,Zt=o+e}else Qt=1<<o|n<<r|a,Zt=e}function rs(e){e.return!==null&&(tn(e,1),qf(e,1,0))}function os(e){for(;e===Yi;)Yi=Da[--Ma],Da[Ma]=null,zl=Da[--Ma],Da[Ma]=null;for(;e===zn;)zn=Ot[--Dt],Ot[Dt]=null,Zt=Ot[--Dt],Ot[Dt]=null,Qt=Ot[--Dt],Ot[Dt]=null}function Yf(e,t){Ot[Dt++]=Qt,Ot[Dt++]=Zt,Ot[Dt++]=zn,Qt=t.id,Zt=t.overflow,zn=e}var We=null,_e=null,xe=!1,Tn=null,Mt=!1,ss=Error(s(519));function Cn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Tl(_t(t,e)),ss}function Vf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[$e]=e,t[ot]=a,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(n=0;n<Fl.length;n++)he(Fl[n],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),ef(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),nf(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||ih(t.textContent,n)?(a.popover!=null&&(he("beforetoggle",t),he("toggle",t)),a.onScroll!=null&&he("scroll",t),a.onScrollEnd!=null&&he("scrollend",t),a.onClick!=null&&(t.onclick=Pt),t=!0):t=!1,t||Cn(e,!0)}function Gf(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:We=We.return}}function ka(e){if(e!==We)return!1;if(!xe)return Gf(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zu(e.type,e.memoizedProps)),n=!n),n&&_e&&Cn(e),Gf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_e=hh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_e=hh(e)}else t===27?(t=_e,Vn(e.type)?(e=_u,_u=null,_e=e):_e=t):_e=We?Ut(e.stateNode.nextSibling):null;return!0}function na(){_e=We=null,xe=!1}function us(){var e=Tn;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),Tn=null),e}function Tl(e){Tn===null?Tn=[e]:Tn.push(e)}var cs=v(null),aa=null,nn=null;function An(e,t,n){Q(cs,t._currentValue),t._currentValue=n}function an(e){e._currentValue=cs.current,k(cs)}function fs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ds(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var p=r.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=r;for(var w=0;w<t.length;w++)if(m.context===t[w]){o.lanes|=n,m=o.alternate,m!==null&&(m.lanes|=n),fs(o.return,n,e),a||(p=null);break e}o=m.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(s(341));p.lanes|=n,o=p.alternate,o!==null&&(o.lanes|=n),fs(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ua(e,t,n,a){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var m=r.type;yt(r.pendingProps.value,p.value)||(e!==null?e.push(m):e=[m])}}else if(r===we.current){if(p=r.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ei):e=[ei])}r=r.return}e!==null&&ds(t,e,n,a),t.flags|=262144}function Vi(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){aa=e,nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return Xf(aa,e)}function Gi(e,t){return aa===null&&la(e),Xf(e,t)}function Xf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},nn===null){if(e===null)throw Error(s(308));nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else nn=nn.next=t;return n}var W0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},P0=l.unstable_scheduleCallback,I0=l.unstable_NormalPriority,Ge={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ps(){return{controller:new W0,data:new Map,refCount:0}}function Cl(e){e.refCount--,e.refCount===0&&P0(I0,function(){e.controller.abort()})}var Al=null,hs=0,Ba=0,La=null;function eb(e,t){if(Al===null){var n=Al=[];hs=0,Ba=bu(),La={status:"pending",value:void 0,then:function(a){n.push(a)}}}return hs++,t.then(Qf,Qf),t}function Qf(){if(--hs===0&&Al!==null){La!==null&&(La.status="fulfilled");var e=Al;Al=null,Ba=0,La=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tb(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Zf=B.S;B.S=function(e,t){Ap=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&eb(e,t),Zf!==null&&Zf(e,t)};var ia=v(null);function ms(){var e=ia.current;return e!==null?e:Ce.pooledCache}function Xi(e,t){t===null?Q(ia,ia.current):Q(ia,t.pool)}function Jf(){var e=ms();return e===null?null:{parent:Ge._currentValue,pool:e}}var Ha=Error(s(460)),gs=Error(s(474)),Qi=Error(s(542)),Zi={then:function(){}};function Kf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ff(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Pt,Pt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wf(e),e;default:if(typeof t.status=="string")t.then(Pt,Pt);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wf(e),e}throw oa=t,Ha}}function ra(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(oa=n,Ha):n}}var oa=null;function $f(){if(oa===null)throw Error(s(459));var e=oa;return oa=null,e}function Wf(e){if(e===Ha||e===Qi)throw Error(s(483))}var qa=null,Rl=0;function Ji(e){var t=Rl;return Rl+=1,qa===null&&(qa=[]),Ff(qa,e,t)}function _l(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ki(e,t){throw t.$$typeof===D?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Pf(e){function t(z,j){if(e){var A=z.deletions;A===null?(z.deletions=[j],z.flags|=16):A.push(j)}}function n(z,j){if(!e)return null;for(;j!==null;)t(z,j),j=j.sibling;return null}function a(z){for(var j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function r(z,j){return z=en(z,j),z.index=0,z.sibling=null,z}function o(z,j,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<j?(z.flags|=67108866,j):A):(z.flags|=67108866,j)):(z.flags|=1048576,j)}function p(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,j,A,H){return j===null||j.tag!==6?(j=ls(A,z.mode,H),j.return=z,j):(j=r(j,A),j.return=z,j)}function w(z,j,A,H){var ae=A.type;return ae===N?L(z,j,A.props.children,H,A.key):j!==null&&(j.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===le&&ra(ae)===j.type)?(j=r(j,A.props),_l(j,A),j.return=z,j):(j=qi(A.type,A.key,A.props,null,z.mode,H),_l(j,A),j.return=z,j)}function R(z,j,A,H){return j===null||j.tag!==4||j.stateNode.containerInfo!==A.containerInfo||j.stateNode.implementation!==A.implementation?(j=is(A,z.mode,H),j.return=z,j):(j=r(j,A.children||[]),j.return=z,j)}function L(z,j,A,H,ae){return j===null||j.tag!==7?(j=ta(A,z.mode,H,ae),j.return=z,j):(j=r(j,A),j.return=z,j)}function Y(z,j,A){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ls(""+j,z.mode,A),j.return=z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case q:return A=qi(j.type,j.key,j.props,null,z.mode,A),_l(A,j),A.return=z,A;case C:return j=is(j,z.mode,A),j.return=z,j;case le:return j=ra(j),Y(z,j,A)}if(Ve(j)||fe(j))return j=ta(j,z.mode,A,null),j.return=z,j;if(typeof j.then=="function")return Y(z,Ji(j),A);if(j.$$typeof===G)return Y(z,Gi(z,j),A);Ki(z,j)}return null}function _(z,j,A,H){var ae=j!==null?j.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ae!==null?null:m(z,j,""+A,H);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case q:return A.key===ae?w(z,j,A,H):null;case C:return A.key===ae?R(z,j,A,H):null;case le:return A=ra(A),_(z,j,A,H)}if(Ve(A)||fe(A))return ae!==null?null:L(z,j,A,H,null);if(typeof A.then=="function")return _(z,j,Ji(A),H);if(A.$$typeof===G)return _(z,j,Gi(z,A),H);Ki(z,A)}return null}function U(z,j,A,H,ae){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return z=z.get(A)||null,m(j,z,""+H,ae);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case q:return z=z.get(H.key===null?A:H.key)||null,w(j,z,H,ae);case C:return z=z.get(H.key===null?A:H.key)||null,R(j,z,H,ae);case le:return H=ra(H),U(z,j,A,H,ae)}if(Ve(H)||fe(H))return z=z.get(A)||null,L(j,z,H,ae,null);if(typeof H.then=="function")return U(z,j,A,Ji(H),ae);if(H.$$typeof===G)return U(z,j,A,Gi(j,H),ae);Ki(j,H)}return null}function I(z,j,A,H){for(var ae=null,ye=null,ne=j,ce=j=0,be=null;ne!==null&&ce<A.length;ce++){ne.index>ce?(be=ne,ne=null):be=ne.sibling;var ve=_(z,ne,A[ce],H);if(ve===null){ne===null&&(ne=be);break}e&&ne&&ve.alternate===null&&t(z,ne),j=o(ve,j,ce),ye===null?ae=ve:ye.sibling=ve,ye=ve,ne=be}if(ce===A.length)return n(z,ne),xe&&tn(z,ce),ae;if(ne===null){for(;ce<A.length;ce++)ne=Y(z,A[ce],H),ne!==null&&(j=o(ne,j,ce),ye===null?ae=ne:ye.sibling=ne,ye=ne);return xe&&tn(z,ce),ae}for(ne=a(ne);ce<A.length;ce++)be=U(ne,z,ce,A[ce],H),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?ce:be.key),j=o(be,j,ce),ye===null?ae=be:ye.sibling=be,ye=be);return e&&ne.forEach(function(Jn){return t(z,Jn)}),xe&&tn(z,ce),ae}function ie(z,j,A,H){if(A==null)throw Error(s(151));for(var ae=null,ye=null,ne=j,ce=j=0,be=null,ve=A.next();ne!==null&&!ve.done;ce++,ve=A.next()){ne.index>ce?(be=ne,ne=null):be=ne.sibling;var Jn=_(z,ne,ve.value,H);if(Jn===null){ne===null&&(ne=be);break}e&&ne&&Jn.alternate===null&&t(z,ne),j=o(Jn,j,ce),ye===null?ae=Jn:ye.sibling=Jn,ye=Jn,ne=be}if(ve.done)return n(z,ne),xe&&tn(z,ce),ae;if(ne===null){for(;!ve.done;ce++,ve=A.next())ve=Y(z,ve.value,H),ve!==null&&(j=o(ve,j,ce),ye===null?ae=ve:ye.sibling=ve,ye=ve);return xe&&tn(z,ce),ae}for(ne=a(ne);!ve.done;ce++,ve=A.next())ve=U(ne,z,ce,ve.value,H),ve!==null&&(e&&ve.alternate!==null&&ne.delete(ve.key===null?ce:ve.key),j=o(ve,j,ce),ye===null?ae=ve:ye.sibling=ve,ye=ve);return e&&ne.forEach(function(dx){return t(z,dx)}),xe&&tn(z,ce),ae}function Te(z,j,A,H){if(typeof A=="object"&&A!==null&&A.type===N&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case q:e:{for(var ae=A.key;j!==null;){if(j.key===ae){if(ae=A.type,ae===N){if(j.tag===7){n(z,j.sibling),H=r(j,A.props.children),H.return=z,z=H;break e}}else if(j.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===le&&ra(ae)===j.type){n(z,j.sibling),H=r(j,A.props),_l(H,A),H.return=z,z=H;break e}n(z,j);break}else t(z,j);j=j.sibling}A.type===N?(H=ta(A.props.children,z.mode,H,A.key),H.return=z,z=H):(H=qi(A.type,A.key,A.props,null,z.mode,H),_l(H,A),H.return=z,z=H)}return p(z);case C:e:{for(ae=A.key;j!==null;){if(j.key===ae)if(j.tag===4&&j.stateNode.containerInfo===A.containerInfo&&j.stateNode.implementation===A.implementation){n(z,j.sibling),H=r(j,A.children||[]),H.return=z,z=H;break e}else{n(z,j);break}else t(z,j);j=j.sibling}H=is(A,z.mode,H),H.return=z,z=H}return p(z);case le:return A=ra(A),Te(z,j,A,H)}if(Ve(A))return I(z,j,A,H);if(fe(A)){if(ae=fe(A),typeof ae!="function")throw Error(s(150));return A=ae.call(A),ie(z,j,A,H)}if(typeof A.then=="function")return Te(z,j,Ji(A),H);if(A.$$typeof===G)return Te(z,j,Gi(z,A),H);Ki(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,j!==null&&j.tag===6?(n(z,j.sibling),H=r(j,A),H.return=z,z=H):(n(z,j),H=ls(A,z.mode,H),H.return=z,z=H),p(z)):n(z,j)}return function(z,j,A,H){try{Rl=0;var ae=Te(z,j,A,H);return qa=null,ae}catch(ne){if(ne===Ha||ne===Qi)throw ne;var ye=vt(29,ne,null,z.mode);return ye.lanes=H,ye.return=z,ye}}}var sa=Pf(!0),If=Pf(!1),Rn=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function On(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Se&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Hi(e),Uf(e,null,n),t}return Li(e,a,t,n),Hi(e)}function Ol(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Gc(e,n)}}function ys(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?r=o=p:o=o.next=p,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var vs=!1;function Dl(){if(vs){var e=La;if(e!==null)throw e}}function Ml(e,t,n,a){vs=!1;var r=e.updateQueue;Rn=!1;var o=r.firstBaseUpdate,p=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var w=m,R=w.next;w.next=null,p===null?o=R:p.next=R,p=w;var L=e.alternate;L!==null&&(L=L.updateQueue,m=L.lastBaseUpdate,m!==p&&(m===null?L.firstBaseUpdate=R:m.next=R,L.lastBaseUpdate=w))}if(o!==null){var Y=r.baseState;p=0,L=R=w=null,m=o;do{var _=m.lane&-536870913,U=_!==m.lane;if(U?(ge&_)===_:(a&_)===_){_!==0&&_===Ba&&(vs=!0),L!==null&&(L=L.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var I=e,ie=m;_=t;var Te=n;switch(ie.tag){case 1:if(I=ie.payload,typeof I=="function"){Y=I.call(Te,Y,_);break e}Y=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=ie.payload,_=typeof I=="function"?I.call(Te,Y,_):I,_==null)break e;Y=S({},Y,_);break e;case 2:Rn=!0}}_=m.callback,_!==null&&(e.flags|=64,U&&(e.flags|=8192),U=r.callbacks,U===null?r.callbacks=[_]:U.push(_))}else U={lane:_,tag:m.tag,payload:m.payload,callback:m.callback,next:null},L===null?(R=L=U,w=Y):L=L.next=U,p|=_;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;U=m,m=U.next,U.next=null,r.lastBaseUpdate=U,r.shared.pending=null}}while(!0);L===null&&(w=Y),r.baseState=w,r.firstBaseUpdate=R,r.lastBaseUpdate=L,o===null&&(r.shared.lanes=0),Bn|=p,e.lanes=p,e.memoizedState=Y}}function ed(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function td(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ed(n[e],t)}var Ya=v(null),Fi=v(0);function nd(e,t){e=pn,Q(Fi,e),Q(Ya,t),pn=e|t.baseLanes}function Ss(){Q(Fi,pn),Q(Ya,Ya.current)}function ws(){pn=Fi.current,k(Ya),k(Fi)}var St=v(null),kt=null;function Dn(e){var t=e.alternate;Q(He,He.current&1),Q(St,e),kt===null&&(t===null||Ya.current!==null||t.memoizedState!==null)&&(kt=e)}function js(e){Q(He,He.current),Q(St,e),kt===null&&(kt=e)}function ad(e){e.tag===22?(Q(He,He.current),Q(St,e),kt===null&&(kt=e)):Mn()}function Mn(){Q(He,He.current),Q(St,St.current)}function wt(e){k(St),kt===e&&(kt=null),k(He)}var He=v(0);function $i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Au(n)||Ru(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ln=0,se=null,Ee=null,Xe=null,Wi=!1,Va=!1,ua=!1,Pi=0,kl=0,Ga=null,nb=0;function Ue(){throw Error(s(321))}function Ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Es(e,t,n,a,r,o){return ln=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?qd:qs,ua=!1,o=n(a,r),ua=!1,Va&&(o=id(t,n,a,r)),ld(e),o}function ld(e){B.H=Ll;var t=Ee!==null&&Ee.next!==null;if(ln=0,Xe=Ee=se=null,Wi=!1,kl=0,Ga=null,t)throw Error(s(300));e===null||Qe||(e=e.dependencies,e!==null&&Vi(e)&&(Qe=!0))}function id(e,t,n,a){se=e;var r=0;do{if(Va&&(Ga=null),kl=0,Va=!1,25<=r)throw Error(s(301));if(r+=1,Xe=Ee=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=Yd,o=t(n,a)}while(Va);return o}function ab(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Ul(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(se.flags|=1024),t}function zs(){var e=Pi!==0;return Pi=0,e}function Ts(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Cs(e){if(Wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wi=!1}ln=0,Xe=Ee=se=null,Va=!1,kl=Pi=0,Ga=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?se.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function qe(){if(Ee===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Xe===null?se.memoizedState:Xe.next;if(t!==null)Xe=t,Ee=e;else{if(e===null)throw se.alternate===null?Error(s(467)):Error(s(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Xe===null?se.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ii(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ul(e){var t=kl;return kl+=1,Ga===null&&(Ga=[]),e=Ff(Ga,e,t),t=se,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?qd:qs),e}function er(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ul(e);if(e.$$typeof===G)return Pe(e)}throw Error(s(438,String(e)))}function As(e){var t=null,n=se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=se.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ii(),se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Re;return t.index++,n}function rn(e,t){return typeof t=="function"?t(e):t}function tr(e){var t=qe();return Rs(t,Ee,e)}function Rs(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var r=e.baseQueue,o=a.pending;if(o!==null){if(r!==null){var p=r.next;r.next=o.next,o.next=p}t.baseQueue=r=o,a.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var m=p=null,w=null,R=t,L=!1;do{var Y=R.lane&-536870913;if(Y!==R.lane?(ge&Y)===Y:(ln&Y)===Y){var _=R.revertLane;if(_===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),Y===Ba&&(L=!0);else if((ln&_)===_){R=R.next,_===Ba&&(L=!0);continue}else Y={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(m=w=Y,p=o):w=w.next=Y,se.lanes|=_,Bn|=_;Y=R.action,ua&&n(o,Y),o=R.hasEagerState?R.eagerState:n(o,Y)}else _={lane:Y,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(m=w=_,p=o):w=w.next=_,se.lanes|=Y,Bn|=Y;R=R.next}while(R!==null&&R!==t);if(w===null?p=o:w.next=m,!yt(o,e.memoizedState)&&(Qe=!0,L&&(n=La,n!==null)))throw n;e.memoizedState=o,e.baseState=p,e.baseQueue=w,a.lastRenderedState=o}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function _s(e){var t=qe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do o=e(o,p.action),p=p.next;while(p!==r);yt(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function rd(e,t,n){var a=se,r=qe(),o=xe;if(o){if(n===void 0)throw Error(s(407));n=n()}else n=t();var p=!yt((Ee||r).memoizedState,n);if(p&&(r.memoizedState=n,Qe=!0),r=r.queue,Ms(ud.bind(null,a,r,e),[e]),r.getSnapshot!==t||p||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,Xa(9,{destroy:void 0},sd.bind(null,a,r,n,t),null),Ce===null)throw Error(s(349));o||(ln&127)!==0||od(a,t,n)}return n}function od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t=Ii(),se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sd(e,t,n,a){t.value=n,t.getSnapshot=a,cd(t)&&fd(e)}function ud(e,t,n){return n(function(){cd(t)&&fd(e)})}function cd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function fd(e){var t=ea(e,2);t!==null&&pt(t,e,2)}function Os(e){var t=it();if(typeof e=="function"){var n=e;if(e=n(),ua){jn(!0);try{n()}finally{jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:e},t}function dd(e,t,n,a){return e.baseState=n,Rs(e,Ee,typeof a=="function"?a:rn)}function lb(e,t,n,a,r){if(lr(e))throw Error(s(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){o.listeners.push(p)}};B.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,pd(t,o)):(o.next=n.next,t.pending=n.next=o)}}function pd(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var o=B.T,p={};B.T=p;try{var m=n(r,a),w=B.S;w!==null&&w(p,m),hd(e,t,m)}catch(R){Ds(e,t,R)}finally{o!==null&&p.types!==null&&(o.types=p.types),B.T=o}}else try{o=n(r,a),hd(e,t,o)}catch(R){Ds(e,t,R)}}function hd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){md(e,t,a)},function(a){return Ds(e,t,a)}):md(e,t,n)}function md(e,t,n){t.status="fulfilled",t.value=n,gd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,pd(e,n)))}function Ds(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,gd(t),t=t.next;while(t!==a)}e.action=null}function gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bd(e,t){return t}function xd(e,t){if(xe){var n=Ce.formState;if(n!==null){e:{var a=se;if(xe){if(_e){t:{for(var r=_e,o=Mt;r.nodeType!==8;){if(!o){r=null;break t}if(r=Ut(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){_e=Ut(r.nextSibling),a=r.data==="F!";break e}}Cn(a)}a=!1}a&&(t=n[0])}}return n=it(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bd,lastRenderedState:t},n.queue=a,n=Bd.bind(null,se,a),a.dispatch=n,a=Os(!1),o=Hs.bind(null,se,!1,a.queue),a=it(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=lb.bind(null,se,r,o,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function yd(e){var t=qe();return vd(t,Ee,e)}function vd(e,t,n){if(t=Rs(e,t,bd)[0],e=tr(rn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ul(t)}catch(p){throw p===Ha?Qi:p}else a=t;t=qe();var r=t.queue,o=r.dispatch;return n!==t.memoizedState&&(se.flags|=2048,Xa(9,{destroy:void 0},ib.bind(null,r,n),null)),[a,o,e]}function ib(e,t){e.action=t}function Sd(e){var t=qe(),n=Ee;if(n!==null)return vd(t,n,e);qe(),t=t.memoizedState,n=qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Xa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=se.updateQueue,t===null&&(t=Ii(),se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function wd(){return qe().memoizedState}function nr(e,t,n,a){var r=it();se.flags|=e,r.memoizedState=Xa(1|t,{destroy:void 0},n,a===void 0?null:a)}function ar(e,t,n,a){var r=qe();a=a===void 0?null:a;var o=r.memoizedState.inst;Ee!==null&&a!==null&&Ns(a,Ee.memoizedState.deps)?r.memoizedState=Xa(t,o,n,a):(se.flags|=e,r.memoizedState=Xa(1|t,o,n,a))}function jd(e,t){nr(8390656,8,e,t)}function Ms(e,t){ar(2048,8,e,t)}function rb(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=Ii(),se.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Nd(e){var t=qe().memoizedState;return rb({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Ed(e,t){return ar(4,2,e,t)}function zd(e,t){return ar(4,4,e,t)}function Td(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,n){n=n!=null?n.concat([e]):null,ar(4,4,Td.bind(null,t,e),n)}function ks(){}function Ad(e,t){var n=qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ns(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Rd(e,t){var n=qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ns(t,a[1]))return a[0];if(a=e(),ua){jn(!0);try{e()}finally{jn(!1)}}return n.memoizedState=[a,t],a}function Us(e,t,n){return n===void 0||(ln&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=_p(),se.lanes|=e,Bn|=e,n)}function _d(e,t,n,a){return yt(n,t)?n:Ya.current!==null?(e=Us(e,n,a),yt(e,t)||(Qe=!0),e):(ln&42)===0||(ln&1073741824)!==0&&(ge&261930)===0?(Qe=!0,e.memoizedState=n):(e=_p(),se.lanes|=e,Bn|=e,t)}function Od(e,t,n,a,r){var o=K.p;K.p=o!==0&&8>o?o:8;var p=B.T,m={};B.T=m,Hs(e,!1,t,n);try{var w=r(),R=B.S;if(R!==null&&R(m,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var L=tb(w,a);Bl(e,t,L,Et(e))}else Bl(e,t,a,Et(e))}catch(Y){Bl(e,t,{then:function(){},status:"rejected",reason:Y},Et())}finally{K.p=o,p!==null&&m.types!==null&&(p.types=m.types),B.T=p}}function ob(){}function Bs(e,t,n,a){if(e.tag!==5)throw Error(s(476));var r=Dd(e).queue;Od(e,r,t,te,n===null?ob:function(){return Md(e),n(a)})}function Dd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Md(e){var t=Dd(e);t.next===null&&(t=e.alternate.memoizedState),Bl(e,t.next.queue,{},Et())}function Ls(){return Pe(ei)}function kd(){return qe().memoizedState}function Ud(){return qe().memoizedState}function sb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Et();e=_n(n);var a=On(t,e,n);a!==null&&(pt(a,t,n),Ol(a,t,n)),t={cache:ps()},e.payload=t;return}t=t.return}}function ub(e,t,n){var a=Et();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},lr(e)?Ld(t,n):(n=ns(e,t,n,a),n!==null&&(pt(n,e,a),Hd(n,t,a)))}function Bd(e,t,n){var a=Et();Bl(e,t,n,a)}function Bl(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(lr(e))Ld(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var p=t.lastRenderedState,m=o(p,n);if(r.hasEagerState=!0,r.eagerState=m,yt(m,p))return Li(e,t,r,0),Ce===null&&Bi(),!1}catch{}if(n=ns(e,t,r,a),n!==null)return pt(n,e,a),Hd(n,t,a),!0}return!1}function Hs(e,t,n,a){if(a={lane:2,revertLane:bu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lr(e)){if(t)throw Error(s(479))}else t=ns(e,n,a,2),t!==null&&pt(t,e,2)}function lr(e){var t=e.alternate;return e===se||t!==null&&t===se}function Ld(e,t){Va=Wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Gc(e,n)}}var Ll={readContext:Pe,use:er,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Ll.useEffectEvent=Ue;var qd={readContext:Pe,use:er,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:jd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,nr(4194308,4,Td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nr(4194308,4,e,t)},useInsertionEffect:function(e,t){nr(4,2,e,t)},useMemo:function(e,t){var n=it();t=t===void 0?null:t;var a=e();if(ua){jn(!0);try{e()}finally{jn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=it();if(n!==void 0){var r=n(t);if(ua){jn(!0);try{n(t)}finally{jn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=ub.bind(null,se,e),[a.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=Os(e);var t=e.queue,n=Bd.bind(null,se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ks,useDeferredValue:function(e,t){var n=it();return Us(n,e,t)},useTransition:function(){var e=Os(!1);return e=Od.bind(null,se,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=se,r=it();if(xe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ce===null)throw Error(s(349));(ge&127)!==0||od(a,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,jd(ud.bind(null,a,o,e),[e]),a.flags|=2048,Xa(9,{destroy:void 0},sd.bind(null,a,o,n,t),null),n},useId:function(){var e=it(),t=Ce.identifierPrefix;if(xe){var n=Zt,a=Qt;n=(a&~(1<<32-xt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=nb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ls,useFormState:xd,useActionState:xd,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hs.bind(null,se,!0,n),n.dispatch=t,[e,t]},useMemoCache:As,useCacheRefresh:function(){return it().memoizedState=sb.bind(null,se)},useEffectEvent:function(e){var t=it(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},qs={readContext:Pe,use:er,useCallback:Ad,useContext:Pe,useEffect:Ms,useImperativeHandle:Cd,useInsertionEffect:Ed,useLayoutEffect:zd,useMemo:Rd,useReducer:tr,useRef:wd,useState:function(){return tr(rn)},useDebugValue:ks,useDeferredValue:function(e,t){var n=qe();return _d(n,Ee.memoizedState,e,t)},useTransition:function(){var e=tr(rn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Ul(e),t]},useSyncExternalStore:rd,useId:kd,useHostTransitionStatus:Ls,useFormState:yd,useActionState:yd,useOptimistic:function(e,t){var n=qe();return dd(n,Ee,e,t)},useMemoCache:As,useCacheRefresh:Ud};qs.useEffectEvent=Nd;var Yd={readContext:Pe,use:er,useCallback:Ad,useContext:Pe,useEffect:Ms,useImperativeHandle:Cd,useInsertionEffect:Ed,useLayoutEffect:zd,useMemo:Rd,useReducer:_s,useRef:wd,useState:function(){return _s(rn)},useDebugValue:ks,useDeferredValue:function(e,t){var n=qe();return Ee===null?Us(n,e,t):_d(n,Ee.memoizedState,e,t)},useTransition:function(){var e=_s(rn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Ul(e),t]},useSyncExternalStore:rd,useId:kd,useHostTransitionStatus:Ls,useFormState:Sd,useActionState:Sd,useOptimistic:function(e,t){var n=qe();return Ee!==null?dd(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:As,useCacheRefresh:Ud};Yd.useEffectEvent=Nd;function Ys(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Et(),r=_n(a);r.payload=t,n!=null&&(r.callback=n),t=On(e,r,a),t!==null&&(pt(t,e,a),Ol(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Et(),r=_n(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=On(e,r,a),t!==null&&(pt(t,e,a),Ol(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),a=_n(n);a.tag=2,t!=null&&(a.callback=t),t=On(e,a,n),t!==null&&(pt(t,e,n),Ol(t,e,n))}};function Vd(e,t,n,a,r,o,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,p):t.prototype&&t.prototype.isPureReactComponent?!Nl(n,a)||!Nl(r,o):!0}function Gd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function ca(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Xd(e){Ui(e)}function Qd(e){console.error(e)}function Zd(e){Ui(e)}function ir(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Jd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Gs(e,t,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){ir(e,t)},n}function Kd(e){return e=_n(e),e.tag=3,e}function Fd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=a.value;e.payload=function(){return r(o)},e.callback=function(){Jd(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Jd(t,n,a),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function cb(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ua(t,n,r,!0),n=St.current,n!==null){switch(n.tag){case 31:case 13:return kt===null?br():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Zi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),hu(e,a,r)),!1;case 22:return n.flags|=65536,a===Zi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),hu(e,a,r)),!1}throw Error(s(435,n.tag))}return hu(e,a,r),br(),!1}if(xe)return t=St.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==ss&&(e=Error(s(422),{cause:a}),Tl(_t(e,n)))):(a!==ss&&(t=Error(s(423),{cause:a}),Tl(_t(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=_t(a,n),r=Gs(e.stateNode,a,r),ys(e,r),Be!==4&&(Be=2)),!1;var o=Error(s(520),{cause:a});if(o=_t(o,n),Zl===null?Zl=[o]:Zl.push(o),Be!==4&&(Be=2),t===null)return!0;a=_t(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Gs(n.stateNode,a,e),ys(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ln===null||!Ln.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Kd(r),Fd(r,e,n,a),ys(n,r),!1}n=n.return}while(n!==null);return!1}var Xs=Error(s(461)),Qe=!1;function Ie(e,t,n,a){t.child=e===null?If(t,null,n,a):sa(t,e.child,n,a)}function $d(e,t,n,a,r){n=n.render;var o=t.ref;if("ref"in a){var p={};for(var m in a)m!=="ref"&&(p[m]=a[m])}else p=a;return la(t),a=Es(e,t,n,p,o,r),m=zs(),e!==null&&!Qe?(Ts(e,t,r),on(e,t,r)):(xe&&m&&rs(t),t.flags|=1,Ie(e,t,a,r),t.child)}function Wd(e,t,n,a,r){if(e===null){var o=n.type;return typeof o=="function"&&!as(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Pd(e,t,o,a,r)):(e=qi(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Ps(e,r)){var p=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nl,n(p,a)&&e.ref===t.ref)return on(e,t,r)}return t.flags|=1,e=en(o,a),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,a,r){if(e!==null){var o=e.memoizedProps;if(Nl(o,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=o,Ps(e,r))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,on(e,t,r)}return Qs(e,t,n,a,r)}function Id(e,t,n,a){var r=a.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~o}else a=0,t.child=null;return ep(e,t,o,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xi(t,o!==null?o.cachePool:null),o!==null?nd(t,o):Ss(),ad(t);else return a=t.lanes=536870912,ep(e,t,o!==null?o.baseLanes|n:n,n,a)}else o!==null?(Xi(t,o.cachePool),nd(t,o),Mn(),t.memoizedState=null):(e!==null&&Xi(t,null),Ss(),Mn());return Ie(e,t,r,n),t.child}function Hl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ep(e,t,n,a,r){var o=ms();return o=o===null?null:{parent:Ge._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Xi(t,null),Ss(),ad(t),e!==null&&Ua(e,t,a,!0),t.childLanes=r,null}function rr(e,t){return t=sr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function tp(e,t,n){return sa(t,e.child,null,n),e=rr(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function fb(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(a.mode==="hidden")return e=rr(t,a),t.lanes=536870912,Hl(null,e);if(js(t),(e=_e)?(e=ph(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},n=Lf(e),n.return=t,t.child=n,We=t,_e=null)):e=null,e===null)throw Cn(t);return t.lanes=536870912,null}return rr(t,a)}var o=e.memoizedState;if(o!==null){var p=o.dehydrated;if(js(t),r)if(t.flags&256)t.flags&=-257,t=tp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Qe||Ua(e,t,n,!1),r=(n&e.childLanes)!==0,Qe||r){if(a=Ce,a!==null&&(p=Xc(a,n),p!==0&&p!==o.retryLane))throw o.retryLane=p,ea(e,p),pt(a,e,p),Xs;br(),t=tp(e,t,n)}else e=o.treeContext,_e=Ut(p.nextSibling),We=t,xe=!0,Tn=null,Mt=!1,e!==null&&Yf(t,e),t=rr(t,a),t.flags|=4096;return t}return e=en(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function or(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Qs(e,t,n,a,r){return la(t),n=Es(e,t,n,a,void 0,r),a=zs(),e!==null&&!Qe?(Ts(e,t,r),on(e,t,r)):(xe&&a&&rs(t),t.flags|=1,Ie(e,t,n,r),t.child)}function np(e,t,n,a,r,o){return la(t),t.updateQueue=null,n=id(t,a,n,r),ld(e),a=zs(),e!==null&&!Qe?(Ts(e,t,o),on(e,t,o)):(xe&&a&&rs(t),t.flags|=1,Ie(e,t,n,o),t.child)}function ap(e,t,n,a,r){if(la(t),t.stateNode===null){var o=Oa,p=n.contextType;typeof p=="object"&&p!==null&&(o=Pe(p)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Vs,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},bs(t),p=n.contextType,o.context=typeof p=="object"&&p!==null?Pe(p):Oa,o.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Ys(t,n,p,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(p=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),p!==o.state&&Vs.enqueueReplaceState(o,o.state,null),Ml(t,a,o,r),Dl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var m=t.memoizedProps,w=ca(n,m);o.props=w;var R=o.context,L=n.contextType;p=Oa,typeof L=="object"&&L!==null&&(p=Pe(L));var Y=n.getDerivedStateFromProps;L=typeof Y=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,L||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||R!==p)&&Gd(t,o,a,p),Rn=!1;var _=t.memoizedState;o.state=_,Ml(t,a,o,r),Dl(),R=t.memoizedState,m||_!==R||Rn?(typeof Y=="function"&&(Ys(t,n,Y,a),R=t.memoizedState),(w=Rn||Vd(t,n,w,a,_,R,p))?(L||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),o.props=a,o.state=R,o.context=p,a=w):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,xs(e,t),p=t.memoizedProps,L=ca(n,p),o.props=L,Y=t.pendingProps,_=o.context,R=n.contextType,w=Oa,typeof R=="object"&&R!==null&&(w=Pe(R)),m=n.getDerivedStateFromProps,(R=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==Y||_!==w)&&Gd(t,o,a,w),Rn=!1,_=t.memoizedState,o.state=_,Ml(t,a,o,r),Dl();var U=t.memoizedState;p!==Y||_!==U||Rn||e!==null&&e.dependencies!==null&&Vi(e.dependencies)?(typeof m=="function"&&(Ys(t,n,m,a),U=t.memoizedState),(L=Rn||Vd(t,n,L,a,_,U,w)||e!==null&&e.dependencies!==null&&Vi(e.dependencies))?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,U,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,U,w)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=U),o.props=a,o.state=U,o.context=w,a=L):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,or(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=sa(t,e.child,null,r),t.child=sa(t,null,n,r)):Ie(e,t,n,r),t.memoizedState=o.state,e=t.child):e=on(e,t,r),e}function lp(e,t,n,a){return na(),t.flags|=256,Ie(e,t,n,a),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Js(e){return{baseLanes:e,cachePool:Jf()}}function Ks(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nt),e}function ip(e,t,n){var a=t.pendingProps,r=!1,o=(t.flags&128)!==0,p;if((p=o)||(p=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(r?Dn(t):Mn(),(e=_e)?(e=ph(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},n=Lf(e),n.return=t,t.child=n,We=t,_e=null)):e=null,e===null)throw Cn(t);return Ru(e)?t.lanes=32:t.lanes=536870912,null}var m=a.children;return a=a.fallback,r?(Mn(),r=t.mode,m=sr({mode:"hidden",children:m},r),a=ta(a,r,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,a=t.child,a.memoizedState=Js(n),a.childLanes=Ks(e,p,n),t.memoizedState=Zs,Hl(null,a)):(Dn(t),Fs(t,m))}var w=e.memoizedState;if(w!==null&&(m=w.dehydrated,m!==null)){if(o)t.flags&256?(Dn(t),t.flags&=-257,t=$s(e,t,n)):t.memoizedState!==null?(Mn(),t.child=e.child,t.flags|=128,t=null):(Mn(),m=a.fallback,r=t.mode,a=sr({mode:"visible",children:a.children},r),m=ta(m,r,n,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,sa(t,e.child,null,n),a=t.child,a.memoizedState=Js(n),a.childLanes=Ks(e,p,n),t.memoizedState=Zs,t=Hl(null,a));else if(Dn(t),Ru(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var R=p.dgst;p=R,a=Error(s(419)),a.stack="",a.digest=p,Tl({value:a,source:null,stack:null}),t=$s(e,t,n)}else if(Qe||Ua(e,t,n,!1),p=(n&e.childLanes)!==0,Qe||p){if(p=Ce,p!==null&&(a=Xc(p,n),a!==0&&a!==w.retryLane))throw w.retryLane=a,ea(e,a),pt(p,e,a),Xs;Au(m)||br(),t=$s(e,t,n)}else Au(m)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,_e=Ut(m.nextSibling),We=t,xe=!0,Tn=null,Mt=!1,e!==null&&Yf(t,e),t=Fs(t,a.children),t.flags|=4096);return t}return r?(Mn(),m=a.fallback,r=t.mode,w=e.child,R=w.sibling,a=en(w,{mode:"hidden",children:a.children}),a.subtreeFlags=w.subtreeFlags&65011712,R!==null?m=en(R,m):(m=ta(m,r,n,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,Hl(null,a),a=t.child,m=e.child.memoizedState,m===null?m=Js(n):(r=m.cachePool,r!==null?(w=Ge._currentValue,r=r.parent!==w?{parent:w,pool:w}:r):r=Jf(),m={baseLanes:m.baseLanes|n,cachePool:r}),a.memoizedState=m,a.childLanes=Ks(e,p,n),t.memoizedState=Zs,Hl(e.child,a)):(Dn(t),n=e.child,e=n.sibling,n=en(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Fs(e,t){return t=sr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function sr(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function $s(e,t,n){return sa(t,e.child,null,n),e=Fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rp(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),fs(e.return,t,n)}function Ws(e,t,n,a,r,o){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:o}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=n,p.tailMode=r,p.treeForkCount=o)}function op(e,t,n){var a=t.pendingProps,r=a.revealOrder,o=a.tail;a=a.children;var p=He.current,m=(p&2)!==0;if(m?(p=p&1|2,t.flags|=128):p&=1,Q(He,p),Ie(e,t,a,n),a=xe?zl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,n,t);else if(e.tag===19)rp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&$i(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ws(t,!1,r,n,o,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&$i(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ws(t,!0,n,null,o,a);break;case"together":Ws(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ua(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ps(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vi(e)))}function db(e,t,n){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),An(t,Ge,e.memoizedState.cache),na();break;case 27:case 5:fl(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:An(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,js(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Dn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ip(e,t,n):(Dn(t),e=on(e,t,n),e!==null?e.sibling:null);Dn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ua(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return op(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(He,He.current),a)break;return null;case 22:return t.lanes=0,Id(e,t,n,t.pendingProps);case 24:An(t,Ge,e.memoizedState.cache)}return on(e,t,n)}function sp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ps(e,n)&&(t.flags&128)===0)return Qe=!1,db(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,xe&&(t.flags&1048576)!==0&&qf(t,zl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ra(t.elementType),t.type=e,typeof e=="function")as(e)?(a=ca(e,a),t.tag=1,t=ap(null,t,e,a,n)):(t.tag=0,t=Qs(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===F){t.tag=11,t=$d(null,t,e,a,n);break e}else if(r===J){t.tag=14,t=Wd(null,t,e,a,n);break e}}throw t=ke(e)||e,Error(s(306,t,""))}}return t;case 0:return Qs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=ca(a,t.pendingProps),ap(e,t,a,r,n);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var o=t.memoizedState;r=o.element,xs(e,t),Ml(t,a,null,n);var p=t.memoizedState;if(a=p.cache,An(t,Ge,a),a!==o.cache&&ds(t,[Ge],n,!0),Dl(),a=p.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=lp(e,t,a,n);break e}else if(a!==r){r=_t(Error(s(424)),t),Tl(r),t=lp(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=Ut(e.firstChild),We=t,xe=!0,Tn=null,Mt=!0,n=If(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(na(),a===r){t=on(e,t,n);break e}Ie(e,t,a,n)}t=t.child}return t;case 26:return or(e,t),e===null?(n=yh(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,a=Nr(de.current).createElement(n),a[$e]=t,a[ot]=e,et(a,n,e),Ke(a),t.stateNode=a):t.memoizedState=yh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fl(t),e===null&&xe&&(a=t.stateNode=gh(t.type,t.pendingProps,de.current),We=t,Mt=!0,r=_e,Vn(t.type)?(_u=r,_e=Ut(a.firstChild)):_e=r),Ie(e,t,t.pendingProps.children,n),or(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((r=a=_e)&&(a=Vb(a,t.type,t.pendingProps,Mt),a!==null?(t.stateNode=a,We=t,_e=Ut(a.firstChild),Mt=!1,r=!0):r=!1),r||Cn(t)),fl(t),r=t.type,o=t.pendingProps,p=e!==null?e.memoizedProps:null,a=o.children,zu(r,o)?a=null:p!==null&&zu(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=Es(e,t,ab,null,null,n),ei._currentValue=r),or(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&xe&&((e=n=_e)&&(n=Gb(n,t.pendingProps,Mt),n!==null?(t.stateNode=n,We=t,_e=null,e=!0):e=!1),e||Cn(t)),null;case 13:return ip(e,t,n);case 4:return lt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=sa(t,null,a,n):Ie(e,t,a,n),t.child;case 11:return $d(e,t,t.type,t.pendingProps,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,An(t,t.type,a.value),Ie(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,la(t),r=Pe(r),a=a(r),t.flags|=1,Ie(e,t,a,n),t.child;case 14:return Wd(e,t,t.type,t.pendingProps,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 19:return op(e,t,n);case 31:return fb(e,t,n);case 22:return Id(e,t,n,t.pendingProps);case 24:return la(t),a=Pe(Ge),e===null?(r=ms(),r===null&&(r=Ce,o=ps(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=n),r=o),t.memoizedState={parent:a,cache:r},bs(t),An(t,Ge,r)):((e.lanes&n)!==0&&(xs(e,t),Ml(t,null,null,n),Dl()),r=e.memoizedState,o=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),An(t,Ge,a)):(a=o.cache,An(t,Ge,a),a!==r.cache&&ds(t,[Ge],n,!0))),Ie(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function sn(e){e.flags|=4}function Is(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(kp())e.flags|=8192;else throw oa=Zi,gs}else e.flags&=-16777217}function up(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Nh(t))if(kp())e.flags|=8192;else throw oa=Zi,gs}function ur(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yc():536870912,e.lanes|=t,Ka|=t)}function ql(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function pb(e,t,n){var a=t.pendingProps;switch(os(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),an(Ge),Le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ka(t)?sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,us())),Oe(t),null;case 26:var r=t.type,o=t.memoizedState;return e===null?(sn(t),o!==null?(Oe(t),up(t,o)):(Oe(t),Is(t,r,null,a,n))):o?o!==e.memoizedState?(sn(t),Oe(t),up(t,o)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&sn(t),Oe(t),Is(t,r,e,a,n)),null;case 27:if(vi(t),n=de.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Oe(t),null}e=W.current,ka(t)?Vf(t):(e=gh(r,a,n),t.stateNode=e,sn(t))}return Oe(t),null;case 5:if(vi(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Oe(t),null}if(o=W.current,ka(t))Vf(t);else{var p=Nr(de.current);switch(o){case 1:o=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=p.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?p.createElement("select",{is:a.is}):p.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?p.createElement(r,{is:a.is}):p.createElement(r)}}o[$e]=t,o[ot]=a;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)o.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=o;e:switch(et(o,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&sn(t)}}return Oe(t),Is(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=de.current,ka(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=We,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||ih(e.nodeValue,n)),e||Cn(t,!0)}else e=Nr(e).createTextNode(a),e[$e]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=ka(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[$e]=t}else na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Oe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[$e]=t}else na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),r=!1}else r=us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ur(t,t.updateQueue),Oe(t),null);case 4:return Le(),e===null&&Su(t.stateNode.containerInfo),Oe(t),null;case 10:return an(t.type),Oe(t),null;case 19:if(k(He),a=t.memoizedState,a===null)return Oe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ql(a,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=$i(e),o!==null){for(t.flags|=128,ql(a,!1),e=o.updateQueue,t.updateQueue=e,ur(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bf(n,e),n=n.sibling;return Q(He,He.current&1|2),xe&&tn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&gt()>hr&&(t.flags|=128,r=!0,ql(a,!1),t.lanes=4194304)}else{if(!r)if(e=$i(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ur(t,e),ql(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!xe)return Oe(t),null}else 2*gt()-a.renderingStartTime>hr&&n!==536870912&&(t.flags|=128,r=!0,ql(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=gt(),e.sibling=null,n=He.current,Q(He,r?n&1|2:n&1),xe&&tn(t,a.treeForkCount),e):(Oe(t),null);case 22:case 23:return wt(t),ws(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&ur(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&k(ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),an(Ge),Oe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function hb(e,t){switch(os(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(Ge),Le(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return vi(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(s(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(He),null;case 4:return Le(),null;case 10:return an(t.type),null;case 22:case 23:return wt(t),ws(),e!==null&&k(ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return an(Ge),null;case 25:return null;default:return null}}function cp(e,t){switch(os(t),t.tag){case 3:an(Ge),Le();break;case 26:case 27:case 5:vi(t);break;case 4:Le();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:k(He);break;case 10:an(t.type);break;case 22:case 23:wt(t),ws(),e!==null&&k(ia);break;case 24:an(Ge)}}function Yl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var o=n.create,p=n.inst;a=o(),p.destroy=a}n=n.next}while(n!==r)}}catch(m){Ne(t,t.return,m)}}function kn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){var p=a.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,r=t;var w=n,R=m;try{R()}catch(L){Ne(r,w,L)}}}a=a.next}while(a!==o)}}catch(L){Ne(t,t.return,L)}}function fp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{td(t,n)}catch(a){Ne(e,e.return,a)}}}function dp(e,t,n){n.props=ca(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ne(e,t,a)}}function Vl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Ne(e,t,r)}}function Jt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Ne(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function pp(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Ne(e,e.return,r)}}function eu(e,t,n){try{var a=e.stateNode;Ub(a,e.type,n,t),a[ot]=t}catch(r){Ne(e,e.return,r)}}function hp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vn(e.type)||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pt));else if(a!==4&&(a===27&&Vn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}function cr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Vn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cr(e,t,n),e=e.sibling;e!==null;)cr(e,t,n),e=e.sibling}function mp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);et(t,a,n),t[$e]=e,t[ot]=n}catch(o){Ne(e,e.return,o)}}var un=!1,Ze=!1,au=!1,gp=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function mb(e,t){if(e=e.containerInfo,Nu=_r,e=Cf(e),$o(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var p=0,m=-1,w=-1,R=0,L=0,Y=e,_=null;t:for(;;){for(var U;Y!==n||r!==0&&Y.nodeType!==3||(m=p+r),Y!==o||a!==0&&Y.nodeType!==3||(w=p+a),Y.nodeType===3&&(p+=Y.nodeValue.length),(U=Y.firstChild)!==null;)_=Y,Y=U;for(;;){if(Y===e)break t;if(_===n&&++R===r&&(m=p),_===o&&++L===a&&(w=p),(U=Y.nextSibling)!==null)break;Y=_,_=Y.parentNode}Y=U}n=m===-1||w===-1?null:{start:m,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:e,selectionRange:n},_r=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,r=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var I=ca(n.type,r);e=a.getSnapshotBeforeUpdate(I,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ne(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Cu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function bp(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:fn(e,n),a&4&&Yl(5,n);break;case 1:if(fn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Ne(n,n.return,p)}else{var r=ca(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ne(n,n.return,p)}}a&64&&fp(n),a&512&&Vl(n,n.return);break;case 3:if(fn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{td(e,t)}catch(p){Ne(n,n.return,p)}}break;case 27:t===null&&a&4&&mp(n);case 26:case 5:fn(e,n),t===null&&a&4&&pp(n),a&512&&Vl(n,n.return);break;case 12:fn(e,n);break;case 31:fn(e,n),a&4&&vp(e,n);break;case 13:fn(e,n),a&4&&Sp(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Nb.bind(null,n),Xb(e,n))));break;case 22:if(a=n.memoizedState!==null||un,!a){t=t!==null&&t.memoizedState!==null||Ze,r=un;var o=Ze;un=a,(Ze=t)&&!o?dn(e,n,(n.subtreeFlags&8772)!==0):fn(e,n),un=r,Ze=o}break;case 30:break;default:fn(e,n)}}function xp(e){var t=e.alternate;t!==null&&(e.alternate=null,xp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Do(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,ut=!1;function cn(e,t,n){for(n=n.child;n!==null;)yp(e,t,n),n=n.sibling}function yp(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 26:Ze||Jt(n,t),cn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||Jt(n,t);var a=De,r=ut;Vn(n.type)&&(De=n.stateNode,ut=!1),cn(e,t,n),Wl(n.stateNode),De=a,ut=r;break;case 5:Ze||Jt(n,t);case 6:if(a=De,r=ut,De=null,cn(e,t,n),De=a,ut=r,De!==null)if(ut)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(n.stateNode)}catch(o){Ne(n,t,o)}else try{De.removeChild(n.stateNode)}catch(o){Ne(n,t,o)}break;case 18:De!==null&&(ut?(e=De,fh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),nl(e)):fh(De,n.stateNode));break;case 4:a=De,r=ut,De=n.stateNode.containerInfo,ut=!0,cn(e,t,n),De=a,ut=r;break;case 0:case 11:case 14:case 15:kn(2,n,t),Ze||kn(4,n,t),cn(e,t,n);break;case 1:Ze||(Jt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&dp(n,t,a)),cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:Ze=(a=Ze)||n.memoizedState!==null,cn(e,t,n),Ze=a;break;default:cn(e,t,n)}}function vp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{nl(e)}catch(n){Ne(t,t.return,n)}}}function Sp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nl(e)}catch(n){Ne(t,t.return,n)}}function gb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gp),t;default:throw Error(s(435,e.tag))}}function fr(e,t){var n=gb(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=Eb.bind(null,e,a);a.then(r,r)}})}function ct(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],o=e,p=t,m=p;e:for(;m!==null;){switch(m.tag){case 27:if(Vn(m.type)){De=m.stateNode,ut=!1;break e}break;case 5:De=m.stateNode,ut=!1;break e;case 3:case 4:De=m.stateNode.containerInfo,ut=!0;break e}m=m.return}if(De===null)throw Error(s(160));yp(o,p,r),De=null,ut=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wp(t,e),t=t.sibling}var qt=null;function wp(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ft(e),a&4&&(kn(3,e,e.return),Yl(3,e),kn(5,e,e.return));break;case 1:ct(t,e),ft(e),a&512&&(Ze||n===null||Jt(n,n.return)),a&64&&un&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=qt;if(ct(t,e),ft(e),a&512&&(Ze||n===null||Jt(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":o=r.getElementsByTagName("title")[0],(!o||o[ml]||o[$e]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(a),r.head.insertBefore(o,r.querySelector("head > title"))),et(o,a,n),o[$e]=e,Ke(o),a=o;break e;case"link":var p=wh("link","href",r).get(a+(n.href||""));if(p){for(var m=0;m<p.length;m++)if(o=p[m],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(m,1);break t}}o=r.createElement(a),et(o,a,n),r.head.appendChild(o);break;case"meta":if(p=wh("meta","content",r).get(a+(n.content||""))){for(m=0;m<p.length;m++)if(o=p[m],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(m,1);break t}}o=r.createElement(a),et(o,a,n),r.head.appendChild(o);break;default:throw Error(s(468,a))}o[$e]=e,Ke(o),a=o}e.stateNode=a}else jh(r,e.type,e.stateNode);else e.stateNode=Sh(r,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?jh(r,e.type,e.stateNode):Sh(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&eu(e,e.memoizedProps,n.memoizedProps)}break;case 27:ct(t,e),ft(e),a&512&&(Ze||n===null||Jt(n,n.return)),n!==null&&a&4&&eu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ct(t,e),ft(e),a&512&&(Ze||n===null||Jt(n,n.return)),e.flags&32){r=e.stateNode;try{Ea(r,"")}catch(I){Ne(e,e.return,I)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,eu(e,r,n!==null?n.memoizedProps:r)),a&1024&&(au=!0);break;case 6:if(ct(t,e),ft(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(I){Ne(e,e.return,I)}}break;case 3:if(Tr=null,r=qt,qt=Er(t.containerInfo),ct(t,e),qt=r,ft(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(t.containerInfo)}catch(I){Ne(e,e.return,I)}au&&(au=!1,jp(e));break;case 4:a=qt,qt=Er(e.stateNode.containerInfo),ct(t,e),ft(e),qt=a;break;case 12:ct(t,e),ft(e);break;case 31:ct(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fr(e,a)));break;case 13:ct(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(pr=gt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fr(e,a)));break;case 22:r=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,R=un,L=Ze;if(un=R||r,Ze=L||w,ct(t,e),Ze=L,un=R,ft(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||w||un||Ze||fa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(o=w.stateNode,r)p=o.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=w.stateNode;var Y=w.memoizedProps.style,_=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;m.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(I){Ne(w,w.return,I)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=r?"":w.memoizedProps}catch(I){Ne(w,w.return,I)}}}else if(t.tag===18){if(n===null){w=t;try{var U=w.stateNode;r?dh(U,!0):dh(w.stateNode,!1)}catch(I){Ne(w,w.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,fr(e,n))));break;case 19:ct(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fr(e,a)));break;case 30:break;case 21:break;default:ct(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(hp(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,o=tu(e);cr(e,o,r);break;case 5:var p=n.stateNode;n.flags&32&&(Ea(p,""),n.flags&=-33);var m=tu(e);cr(e,m,p);break;case 3:case 4:var w=n.stateNode.containerInfo,R=tu(e);nu(e,R,w);break;default:throw Error(s(161))}}catch(L){Ne(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;jp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bp(e,t.alternate,t),t=t.sibling}function fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:kn(4,t,t.return),fa(t);break;case 1:Jt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&dp(t,t.return,n),fa(t);break;case 27:Wl(t.stateNode);case 26:case 5:Jt(t,t.return),fa(t);break;case 22:t.memoizedState===null&&fa(t);break;case 30:fa(t);break;default:fa(t)}e=e.sibling}}function dn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,o=t,p=o.flags;switch(o.tag){case 0:case 11:case 15:dn(r,o,n),Yl(4,o);break;case 1:if(dn(r,o,n),a=o,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(R){Ne(a,a.return,R)}if(a=o,r=a.updateQueue,r!==null){var m=a.stateNode;try{var w=r.shared.hiddenCallbacks;if(w!==null)for(r.shared.hiddenCallbacks=null,r=0;r<w.length;r++)ed(w[r],m)}catch(R){Ne(a,a.return,R)}}n&&p&64&&fp(o),Vl(o,o.return);break;case 27:mp(o);case 26:case 5:dn(r,o,n),n&&a===null&&p&4&&pp(o),Vl(o,o.return);break;case 12:dn(r,o,n);break;case 31:dn(r,o,n),n&&p&4&&vp(r,o);break;case 13:dn(r,o,n),n&&p&4&&Sp(r,o);break;case 22:o.memoizedState===null&&dn(r,o,n),Vl(o,o.return);break;case 30:break;default:dn(r,o,n)}t=t.sibling}}function lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cl(n))}function iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cl(e))}function Yt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Np(e,t,n,a),t=t.sibling}function Np(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,n,a),r&2048&&Yl(9,t);break;case 1:Yt(e,t,n,a);break;case 3:Yt(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cl(e)));break;case 12:if(r&2048){Yt(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,p=o.id,m=o.onPostCommit;typeof m=="function"&&m(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ne(t,t.return,w)}}else Yt(e,t,n,a);break;case 31:Yt(e,t,n,a);break;case 13:Yt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,p=t.alternate,t.memoizedState!==null?o._visibility&2?Yt(e,t,n,a):Gl(e,t):o._visibility&2?Yt(e,t,n,a):(o._visibility|=2,Qa(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&lu(p,t);break;case 24:Yt(e,t,n,a),r&2048&&iu(t.alternate,t);break;default:Yt(e,t,n,a)}}function Qa(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,p=t,m=n,w=a,R=p.flags;switch(p.tag){case 0:case 11:case 15:Qa(o,p,m,w,r),Yl(8,p);break;case 23:break;case 22:var L=p.stateNode;p.memoizedState!==null?L._visibility&2?Qa(o,p,m,w,r):Gl(o,p):(L._visibility|=2,Qa(o,p,m,w,r)),r&&R&2048&&lu(p.alternate,p);break;case 24:Qa(o,p,m,w,r),r&&R&2048&&iu(p.alternate,p);break;default:Qa(o,p,m,w,r)}t=t.sibling}}function Gl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Gl(n,a),r&2048&&lu(a.alternate,a);break;case 24:Gl(n,a),r&2048&&iu(a.alternate,a);break;default:Gl(n,a)}t=t.sibling}}var Xl=8192;function Za(e,t,n){if(e.subtreeFlags&Xl)for(e=e.child;e!==null;)Ep(e,t,n),e=e.sibling}function Ep(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&Xl&&e.memoizedState!==null&&nx(n,qt,e.memoizedState,e.memoizedProps);break;case 5:Za(e,t,n);break;case 3:case 4:var a=qt;qt=Er(e.stateNode.containerInfo),Za(e,t,n),qt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Xl,Xl=16777216,Za(e,t,n),Xl=a):Za(e,t,n));break;default:Za(e,t,n)}}function zp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ql(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,Cp(a,e)}zp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tp(e),e=e.sibling}function Tp(e){switch(e.tag){case 0:case 11:case 15:Ql(e),e.flags&2048&&kn(9,e,e.return);break;case 3:Ql(e);break;case 12:Ql(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,dr(e)):Ql(e);break;default:Ql(e)}}function dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,Cp(a,e)}zp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:kn(8,t,t.return),dr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,dr(t));break;default:dr(t)}e=e.sibling}}function Cp(e,t){for(;Fe!==null;){var n=Fe;switch(n.tag){case 0:case 11:case 15:kn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Cl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Fe=a;else e:for(n=e;Fe!==null;){a=Fe;var r=a.sibling,o=a.return;if(xp(a),a===n){Fe=null;break e}if(r!==null){r.return=o,Fe=r;break e}Fe=o}}}var bb={getCacheForType:function(e){var t=Pe(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Pe(Ge).controller.signal}},xb=typeof WeakMap=="function"?WeakMap:Map,Se=0,Ce=null,pe=null,ge=0,je=0,jt=null,Un=!1,Ja=!1,ru=!1,pn=0,Be=0,Bn=0,da=0,ou=0,Nt=0,Ka=0,Zl=null,dt=null,su=!1,pr=0,Ap=0,hr=1/0,mr=null,Ln=null,Je=0,Hn=null,Fa=null,hn=0,uu=0,cu=null,Rp=null,Jl=0,fu=null;function Et(){return(Se&2)!==0&&ge!==0?ge&-ge:B.T!==null?bu():Qc()}function _p(){if(Nt===0)if((ge&536870912)===0||xe){var e=ji;ji<<=1,(ji&3932160)===0&&(ji=262144),Nt=e}else Nt=536870912;return e=St.current,e!==null&&(e.flags|=32),Nt}function pt(e,t,n){(e===Ce&&(je===2||je===9)||e.cancelPendingCommit!==null)&&($a(e,0),qn(e,ge,Nt,!1)),hl(e,n),((Se&2)===0||e!==Ce)&&(e===Ce&&((Se&2)===0&&(da|=n),Be===4&&qn(e,ge,Nt,!1)),Kt(e))}function Op(e,t,n){if((Se&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||pl(e,t),r=a?Sb(e,t):pu(e,t,!0),o=a;do{if(r===0){Ja&&!a&&qn(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!yb(n)){r=pu(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var m=e;r=Zl;var w=m.current.memoizedState.isDehydrated;if(w&&($a(m,p).flags|=256),p=pu(m,p,!1),p!==2){if(ru&&!w){m.errorRecoveryDisabledLanes|=o,da|=o,r=4;break e}o=dt,dt=r,o!==null&&(dt===null?dt=o:dt.push.apply(dt,o))}r=p}if(o=!1,r!==2)continue}}if(r===1){$a(e,0),qn(e,t,0,!0);break}e:{switch(a=e,o=r,o){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:qn(a,t,Nt,!Un);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(r=pr+300-gt(),10<r)){if(qn(a,t,Nt,!Un),Ei(a,0,!0)!==0)break e;hn=t,a.timeoutHandle=uh(Dp.bind(null,a,n,dt,mr,su,t,Nt,da,Ka,Un,o,"Throttled",-0,0),r);break e}Dp(a,n,dt,mr,su,t,Nt,da,Ka,Un,o,null,-0,0)}}break}while(!0);Kt(e)}function Dp(e,t,n,a,r,o,p,m,w,R,L,Y,_,U){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pt},Ep(t,o,Y);var I=(o&62914560)===o?pr-gt():(o&4194048)===o?Ap-gt():0;if(I=ax(Y,I),I!==null){hn=o,e.cancelPendingCommit=I(Yp.bind(null,e,t,o,n,a,r,p,m,w,L,Y,null,_,U)),qn(e,o,p,!R);return}}Yp(e,t,o,n,a,r,p,m,w)}function yb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],o=r.getSnapshot;r=r.value;try{if(!yt(o(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qn(e,t,n,a){t&=~ou,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var o=31-xt(r),p=1<<o;a[o]=-1,r&=~p}n!==0&&Vc(e,n,t)}function gr(){return(Se&6)===0?(Kl(0),!1):!0}function du(){if(pe!==null){if(je===0)var e=pe.return;else e=pe,nn=aa=null,Cs(e),qa=null,Rl=0,e=pe;for(;e!==null;)cp(e.alternate,e),e=e.return;pe=null}}function $a(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Hb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),hn=0,du(),Ce=e,pe=n=en(e.current,null),ge=t,je=0,jt=null,Un=!1,Ja=pl(e,t),ru=!1,Ka=Nt=ou=da=Bn=Be=0,dt=Zl=null,su=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-xt(a),o=1<<r;t|=e[r],a&=~o}return pn=t,Bi(),n}function Mp(e,t){se=null,B.H=Ll,t===Ha||t===Qi?(t=$f(),je=3):t===gs?(t=$f(),je=4):je=t===Xs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,pe===null&&(Be=1,ir(e,_t(t,e.current)))}function kp(){var e=St.current;return e===null?!0:(ge&4194048)===ge?kt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===kt:!1}function Up(){var e=B.H;return B.H=Ll,e===null?Ll:e}function Bp(){var e=B.A;return B.A=bb,e}function br(){Be=4,Un||(ge&4194048)!==ge&&St.current!==null||(Ja=!0),(Bn&134217727)===0&&(da&134217727)===0||Ce===null||qn(Ce,ge,Nt,!1)}function pu(e,t,n){var a=Se;Se|=2;var r=Up(),o=Bp();(Ce!==e||ge!==t)&&(mr=null,$a(e,t)),t=!1;var p=Be;e:do try{if(je!==0&&pe!==null){var m=pe,w=jt;switch(je){case 8:du(),p=6;break e;case 3:case 2:case 9:case 6:St.current===null&&(t=!0);var R=je;if(je=0,jt=null,Wa(e,m,w,R),n&&Ja){p=0;break e}break;default:R=je,je=0,jt=null,Wa(e,m,w,R)}}vb(),p=Be;break}catch(L){Mp(e,L)}while(!0);return t&&e.shellSuspendCounter++,nn=aa=null,Se=a,B.H=r,B.A=o,pe===null&&(Ce=null,ge=0,Bi()),p}function vb(){for(;pe!==null;)Lp(pe)}function Sb(e,t){var n=Se;Se|=2;var a=Up(),r=Bp();Ce!==e||ge!==t?(mr=null,hr=gt()+500,$a(e,t)):Ja=pl(e,t);e:do try{if(je!==0&&pe!==null){t=pe;var o=jt;t:switch(je){case 1:je=0,jt=null,Wa(e,t,o,1);break;case 2:case 9:if(Kf(o)){je=0,jt=null,Hp(t);break}t=function(){je!==2&&je!==9||Ce!==e||(je=7),Kt(e)},o.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:Kf(o)?(je=0,jt=null,Hp(t)):(je=0,jt=null,Wa(e,t,o,7));break;case 5:var p=null;switch(pe.tag){case 26:p=pe.memoizedState;case 5:case 27:var m=pe;if(p?Nh(p):m.stateNode.complete){je=0,jt=null;var w=m.sibling;if(w!==null)pe=w;else{var R=m.return;R!==null?(pe=R,xr(R)):pe=null}break t}}je=0,jt=null,Wa(e,t,o,5);break;case 6:je=0,jt=null,Wa(e,t,o,6);break;case 8:du(),Be=6;break e;default:throw Error(s(462))}}wb();break}catch(L){Mp(e,L)}while(!0);return nn=aa=null,B.H=a,B.A=r,Se=n,pe!==null?0:(Ce=null,ge=0,Bi(),Be)}function wb(){for(;pe!==null&&!Qg();)Lp(pe)}function Lp(e){var t=sp(e.alternate,e,pn);e.memoizedProps=e.pendingProps,t===null?xr(e):pe=t}function Hp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=np(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=np(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Cs(t);default:cp(n,t),t=pe=Bf(t,pn),t=sp(n,t,pn)}e.memoizedProps=e.pendingProps,t===null?xr(e):pe=t}function Wa(e,t,n,a){nn=aa=null,Cs(t),qa=null,Rl=0;var r=t.return;try{if(cb(e,r,t,n,ge)){Be=1,ir(e,_t(n,e.current)),pe=null;return}}catch(o){if(r!==null)throw pe=r,o;Be=1,ir(e,_t(n,e.current)),pe=null;return}t.flags&32768?(xe||a===1?e=!0:Ja||(ge&536870912)!==0?e=!1:(Un=e=!0,(a===2||a===9||a===3||a===6)&&(a=St.current,a!==null&&a.tag===13&&(a.flags|=16384))),qp(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){qp(t,Un);return}e=t.return;var n=pb(t.alternate,t,pn);if(n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Be===0&&(Be=5)}function qp(e,t){do{var n=hb(e.alternate,e);if(n!==null){n.flags&=32767,pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=n}while(e!==null);Be=6,pe=null}function Yp(e,t,n,a,r,o,p,m,w){e.cancelPendingCommit=null;do yr();while(Je!==0);if((Se&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(o=t.lanes|t.childLanes,o|=ts,t0(e,n,o,p,m,w),e===Ce&&(pe=Ce=null,ge=0),Fa=t,Hn=e,hn=n,uu=o,cu=r,Rp=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zb(Si,function(){return Zp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,r=K.p,K.p=2,p=Se,Se|=4;try{mb(e,t,n)}finally{Se=p,K.p=r,B.T=a}}Je=1,Vp(),Gp(),Xp()}}function Vp(){if(Je===1){Je=0;var e=Hn,t=Fa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=K.p;K.p=2;var r=Se;Se|=4;try{wp(t,e);var o=Eu,p=Cf(e.containerInfo),m=o.focusedElem,w=o.selectionRange;if(p!==m&&m&&m.ownerDocument&&Tf(m.ownerDocument.documentElement,m)){if(w!==null&&$o(m)){var R=w.start,L=w.end;if(L===void 0&&(L=R),"selectionStart"in m)m.selectionStart=R,m.selectionEnd=Math.min(L,m.value.length);else{var Y=m.ownerDocument||document,_=Y&&Y.defaultView||window;if(_.getSelection){var U=_.getSelection(),I=m.textContent.length,ie=Math.min(w.start,I),Te=w.end===void 0?ie:Math.min(w.end,I);!U.extend&&ie>Te&&(p=Te,Te=ie,ie=p);var z=zf(m,ie),j=zf(m,Te);if(z&&j&&(U.rangeCount!==1||U.anchorNode!==z.node||U.anchorOffset!==z.offset||U.focusNode!==j.node||U.focusOffset!==j.offset)){var A=Y.createRange();A.setStart(z.node,z.offset),U.removeAllRanges(),ie>Te?(U.addRange(A),U.extend(j.node,j.offset)):(A.setEnd(j.node,j.offset),U.addRange(A))}}}}for(Y=[],U=m;U=U.parentNode;)U.nodeType===1&&Y.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Y.length;m++){var H=Y[m];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}_r=!!Nu,Eu=Nu=null}finally{Se=r,K.p=a,B.T=n}}e.current=t,Je=2}}function Gp(){if(Je===2){Je=0;var e=Hn,t=Fa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=K.p;K.p=2;var r=Se;Se|=4;try{bp(e,t.alternate,t)}finally{Se=r,K.p=a,B.T=n}}Je=3}}function Xp(){if(Je===4||Je===3){Je=0,Zg();var e=Hn,t=Fa,n=hn,a=Rp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Fa=Hn=null,Qp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Ln=null),_o(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(dl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,r=K.p,K.p=2,B.T=null;try{for(var o=e.onRecoverableError,p=0;p<a.length;p++){var m=a[p];o(m.value,{componentStack:m.stack})}}finally{B.T=t,K.p=r}}(hn&3)!==0&&yr(),Kt(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===fu?Jl++:(Jl=0,fu=e):Jl=0,Kl(0)}}function Qp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cl(t)))}function yr(){return Vp(),Gp(),Xp(),Zp()}function Zp(){if(Je!==5)return!1;var e=Hn,t=uu;uu=0;var n=_o(hn),a=B.T,r=K.p;try{K.p=32>n?32:n,B.T=null,n=cu,cu=null;var o=Hn,p=hn;if(Je=0,Fa=Hn=null,hn=0,(Se&6)!==0)throw Error(s(331));var m=Se;if(Se|=4,Tp(o.current),Np(o,o.current,p,n),Se=m,Kl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(dl,o)}catch{}return!0}finally{K.p=r,B.T=a,Qp(e,t)}}function Jp(e,t,n){t=_t(n,t),t=Gs(e.stateNode,t,2),e=On(e,t,2),e!==null&&(hl(e,2),Kt(e))}function Ne(e,t,n){if(e.tag===3)Jp(e,e,n);else for(;t!==null;){if(t.tag===3){Jp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){e=_t(n,e),n=Kd(2),a=On(t,n,2),a!==null&&(Fd(n,a,t,e),hl(a,2),Kt(a));break}}t=t.return}}function hu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new xb;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(ru=!0,r.add(n),e=jb.bind(null,e,t,n),t.then(e,e))}function jb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ce===e&&(ge&n)===n&&(Be===4||Be===3&&(ge&62914560)===ge&&300>gt()-pr?(Se&2)===0&&$a(e,0):ou|=n,Ka===ge&&(Ka=0)),Kt(e)}function Kp(e,t){t===0&&(t=Yc()),e=ea(e,t),e!==null&&(hl(e,t),Kt(e))}function Nb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kp(e,n)}function Eb(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Kp(e,n)}function zb(e,t){return To(e,t)}var vr=null,Pa=null,mu=!1,Sr=!1,gu=!1,Yn=0;function Kt(e){e!==Pa&&e.next===null&&(Pa===null?vr=Pa=e:Pa=Pa.next=e),Sr=!0,mu||(mu=!0,Cb())}function Kl(e,t){if(!gu&&Sr){gu=!0;do for(var n=!1,a=vr;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var o=0;else{var p=a.suspendedLanes,m=a.pingedLanes;o=(1<<31-xt(42|e)+1)-1,o&=r&~(p&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Pp(a,o))}else o=ge,o=Ei(a,a===Ce?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||pl(a,o)||(n=!0,Pp(a,o));a=a.next}while(n);gu=!1}}function Tb(){Fp()}function Fp(){Sr=mu=!1;var e=0;Yn!==0&&Lb()&&(e=Yn);for(var t=gt(),n=null,a=vr;a!==null;){var r=a.next,o=$p(a,t);o===0?(a.next=null,n===null?vr=r:n.next=r,r===null&&(Pa=n)):(n=a,(e!==0||(o&3)!==0)&&(Sr=!0)),a=r}Je!==0&&Je!==5||Kl(e),Yn!==0&&(Yn=0)}function $p(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var p=31-xt(o),m=1<<p,w=r[p];w===-1?((m&n)===0||(m&a)!==0)&&(r[p]=e0(m,t)):w<=t&&(e.expiredLanes|=m),o&=~m}if(t=Ce,n=ge,n=Ei(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Co(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||pl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Co(a),_o(n)){case 2:case 8:n=Hc;break;case 32:n=Si;break;case 268435456:n=qc;break;default:n=Si}return a=Wp.bind(null,e),n=To(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Co(a),e.callbackPriority=2,e.callbackNode=null,2}function Wp(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var a=ge;return a=Ei(e,e===Ce?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Op(e,a,t),$p(e,gt()),e.callbackNode!=null&&e.callbackNode===n?Wp.bind(null,e):null)}function Pp(e,t){if(yr())return null;Op(e,t,!0)}function Cb(){qb(function(){(Se&6)!==0?To(Lc,Tb):Fp()})}function bu(){if(Yn===0){var e=Ba;e===0&&(e=wi,wi<<=1,(wi&261888)===0&&(wi=256)),Yn=e}return Yn}function Ip(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ai(""+e)}function eh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ab(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var o=Ip((r[ot]||null).action),p=a.submitter;p&&(t=(t=p[ot]||null)?Ip(t.formAction):p.getAttribute("formAction"),t!==null&&(o=t,p=null));var m=new Di("action","action",null,a,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Yn!==0){var w=p?eh(r,p):new FormData(r);Bs(n,{pending:!0,data:w,method:r.method,action:o},null,w)}}else typeof o=="function"&&(m.preventDefault(),w=p?eh(r,p):new FormData(r),Bs(n,{pending:!0,data:w,method:r.method,action:o},o,w))},currentTarget:r}]})}}for(var xu=0;xu<es.length;xu++){var yu=es[xu],Rb=yu.toLowerCase(),_b=yu[0].toUpperCase()+yu.slice(1);Ht(Rb,"on"+_b)}Ht(_f,"onAnimationEnd"),Ht(Of,"onAnimationIteration"),Ht(Df,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(J0,"onTransitionRun"),Ht(K0,"onTransitionStart"),Ht(F0,"onTransitionCancel"),Ht(Mf,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function th(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var p=a.length-1;0<=p;p--){var m=a[p],w=m.instance,R=m.currentTarget;if(m=m.listener,w!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=R;try{o(r)}catch(L){Ui(L)}r.currentTarget=null,o=w}else for(p=0;p<a.length;p++){if(m=a[p],w=m.instance,R=m.currentTarget,m=m.listener,w!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=R;try{o(r)}catch(L){Ui(L)}r.currentTarget=null,o=w}}}}function he(e,t){var n=t[Oo];n===void 0&&(n=t[Oo]=new Set);var a=e+"__bubble";n.has(a)||(nh(t,e,2,!1),n.add(a))}function vu(e,t,n){var a=0;t&&(a|=4),nh(n,e,a,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Su(e){if(!e[wr]){e[wr]=!0,Kc.forEach(function(n){n!=="selectionchange"&&(Ob.has(n)||vu(n,!1,e),vu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,vu("selectionchange",!1,t))}}function nh(e,t,n,a){switch(_h(t)){case 2:var r=rx;break;case 8:r=ox;break;default:r=Uu}n=r.bind(null,t,n,e),r=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function wu(e,t,n,a,r){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var m=a.stateNode.containerInfo;if(m===r)break;if(p===4)for(p=a.return;p!==null;){var w=p.tag;if((w===3||w===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;m!==null;){if(p=va(m),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){a=o=p;continue e}m=m.parentNode}}a=a.return}of(function(){var R=o,L=Ho(n),Y=[];e:{var _=kf.get(e);if(_!==void 0){var U=Di,I=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":U=E0;break;case"focusin":I="focus",U=Qo;break;case"focusout":I="blur",U=Qo;break;case"beforeblur":case"afterblur":U=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=C0;break;case _f:case Of:case Df:U=g0;break;case Mf:U=R0;break;case"scroll":case"scrollend":U=f0;break;case"wheel":U=O0;break;case"copy":case"cut":case"paste":U=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=df;break;case"toggle":case"beforetoggle":U=M0}var ie=(t&4)!==0,Te=!ie&&(e==="scroll"||e==="scrollend"),z=ie?_!==null?_+"Capture":null:_;ie=[];for(var j=R,A;j!==null;){var H=j;if(A=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||A===null||z===null||(H=bl(j,z),H!=null&&ie.push($l(j,H,A))),Te)break;j=j.return}0<ie.length&&(_=new U(_,I,null,n,L),Y.push({event:_,listeners:ie}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",_&&n!==Lo&&(I=n.relatedTarget||n.fromElement)&&(va(I)||I[ya]))break e;if((U||_)&&(_=L.window===L?L:(_=L.ownerDocument)?_.defaultView||_.parentWindow:window,U?(I=n.relatedTarget||n.toElement,U=R,I=I?va(I):null,I!==null&&(Te=d(I),ie=I.tag,I!==Te||ie!==5&&ie!==27&&ie!==6)&&(I=null)):(U=null,I=R),U!==I)){if(ie=cf,H="onMouseLeave",z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ie=df,H="onPointerLeave",z="onPointerEnter",j="pointer"),Te=U==null?_:gl(U),A=I==null?_:gl(I),_=new ie(H,j+"leave",U,n,L),_.target=Te,_.relatedTarget=A,H=null,va(L)===R&&(ie=new ie(z,j+"enter",I,n,L),ie.target=A,ie.relatedTarget=Te,H=ie),Te=H,U&&I)t:{for(ie=Db,z=U,j=I,A=0,H=z;H;H=ie(H))A++;H=0;for(var ae=j;ae;ae=ie(ae))H++;for(;0<A-H;)z=ie(z),A--;for(;0<H-A;)j=ie(j),H--;for(;A--;){if(z===j||j!==null&&z===j.alternate){ie=z;break t}z=ie(z),j=ie(j)}ie=null}else ie=null;U!==null&&ah(Y,_,U,ie,!1),I!==null&&Te!==null&&ah(Y,Te,I,ie,!0)}}e:{if(_=R?gl(R):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var ye=vf;else if(xf(_))if(Sf)ye=X0;else{ye=V0;var ne=Y0}else U=_.nodeName,!U||U.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?R&&Bo(R.elementType)&&(ye=vf):ye=G0;if(ye&&(ye=ye(e,R))){yf(Y,ye,n,L);break e}ne&&ne(e,_,R),e==="focusout"&&R&&_.type==="number"&&R.memoizedProps.value!=null&&Uo(_,"number",_.value)}switch(ne=R?gl(R):window,e){case"focusin":(xf(ne)||ne.contentEditable==="true")&&(Aa=ne,Wo=R,El=null);break;case"focusout":El=Wo=Aa=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Af(Y,n,L);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":Af(Y,n,L)}var ce;if(Jo)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Ca?gf(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&(pf&&n.locale!=="ko"&&(Ca||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ca&&(ce=sf()):(En=L,Vo="value"in En?En.value:En.textContent,Ca=!0)),ne=jr(R,be),0<ne.length&&(be=new ff(be,e,null,n,L),Y.push({event:be,listeners:ne}),ce?be.data=ce:(ce=bf(n),ce!==null&&(be.data=ce)))),(ce=U0?B0(e,n):L0(e,n))&&(be=jr(R,"onBeforeInput"),0<be.length&&(ne=new ff("onBeforeInput","beforeinput",null,n,L),Y.push({event:ne,listeners:be}),ne.data=ce)),Ab(Y,e,R,n,L)}th(Y,t)})}function $l(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jr(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=bl(e,n),r!=null&&a.unshift($l(e,r,o)),r=bl(e,t),r!=null&&a.push($l(e,r,o))),e.tag===3)return a;e=e.return}return[]}function Db(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ah(e,t,n,a,r){for(var o=t._reactName,p=[];n!==null&&n!==a;){var m=n,w=m.alternate,R=m.stateNode;if(m=m.tag,w!==null&&w===a)break;m!==5&&m!==26&&m!==27||R===null||(w=R,r?(R=bl(n,o),R!=null&&p.unshift($l(n,R,w))):r||(R=bl(n,o),R!=null&&p.push($l(n,R,w)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Mb=/\r\n?/g,kb=/\u0000|\uFFFD/g;function lh(e){return(typeof e=="string"?e:""+e).replace(Mb,`
`).replace(kb,"")}function ih(e,t){return t=lh(t),lh(e)===t}function ze(e,t,n,a,r,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ea(e,""+a);break;case"className":Ti(e,"class",a);break;case"tabIndex":Ti(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(e,n,a);break;case"style":lf(e,a,o);break;case"data":if(t!=="object"){Ti(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ai(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",r.name,r,null),ze(e,t,"formEncType",r.formEncType,r,null),ze(e,t,"formMethod",r.formMethod,r,null),ze(e,t,"formTarget",r.formTarget,r,null)):(ze(e,t,"encType",r.encType,r,null),ze(e,t,"method",r.method,r,null),ze(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ai(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Pt);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ai(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":he("beforetoggle",e),he("toggle",e),zi(e,"popover",a);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":zi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=u0.get(n)||n,zi(e,n,a))}}function ju(e,t,n,a,r,o){switch(n){case"style":lf(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&Ea(e,""+a);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Pt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),o=e[ot]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):zi(e,n,a)}}}function et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var a=!1,r=!1,o;for(o in n)if(n.hasOwnProperty(o)){var p=n[o];if(p!=null)switch(o){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,o,p,n,null)}}r&&ze(e,t,"srcSet",n.srcSet,n,null),a&&ze(e,t,"src",n.src,n,null);return;case"input":he("invalid",e);var m=o=p=r=null,w=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var L=n[a];if(L!=null)switch(a){case"name":r=L;break;case"type":p=L;break;case"checked":w=L;break;case"defaultChecked":R=L;break;case"value":o=L;break;case"defaultValue":m=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,t));break;default:ze(e,t,a,L,n,null)}}ef(e,o,m,w,R,p,r,!1);return;case"select":he("invalid",e),a=p=o=null;for(r in n)if(n.hasOwnProperty(r)&&(m=n[r],m!=null))switch(r){case"value":o=m;break;case"defaultValue":p=m;break;case"multiple":a=m;default:ze(e,t,r,m,n,null)}t=o,n=p,e.multiple=!!a,t!=null?Na(e,!!a,t,!1):n!=null&&Na(e,!!a,n,!0);return;case"textarea":he("invalid",e),o=r=a=null;for(p in n)if(n.hasOwnProperty(p)&&(m=n[p],m!=null))switch(p){case"value":a=m;break;case"defaultValue":r=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(s(91));break;default:ze(e,t,p,m,n,null)}nf(e,a,r,o);return;case"option":for(w in n)n.hasOwnProperty(w)&&(a=n[w],a!=null)&&(w==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ze(e,t,w,a,n,null));return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(a=0;a<Fl.length;a++)he(Fl[a],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,R,a,n,null)}return;default:if(Bo(t)){for(L in n)n.hasOwnProperty(L)&&(a=n[L],a!==void 0&&ju(e,t,L,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&ze(e,t,m,a,n,null))}function Ub(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,p=null,m=null,w=null,R=null,L=null;for(U in n){var Y=n[U];if(n.hasOwnProperty(U)&&Y!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":w=Y;default:a.hasOwnProperty(U)||ze(e,t,U,null,a,Y)}}for(var _ in a){var U=a[_];if(Y=n[_],a.hasOwnProperty(_)&&(U!=null||Y!=null))switch(_){case"type":o=U;break;case"name":r=U;break;case"checked":R=U;break;case"defaultChecked":L=U;break;case"value":p=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:U!==Y&&ze(e,t,_,U,a,Y)}}ko(e,p,m,w,R,L,o,r);return;case"select":U=p=m=_=null;for(o in n)if(w=n[o],n.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":U=w;default:a.hasOwnProperty(o)||ze(e,t,o,null,a,w)}for(r in a)if(o=a[r],w=n[r],a.hasOwnProperty(r)&&(o!=null||w!=null))switch(r){case"value":_=o;break;case"defaultValue":m=o;break;case"multiple":p=o;default:o!==w&&ze(e,t,r,o,a,w)}t=m,n=p,a=U,_!=null?Na(e,!!n,_,!1):!!a!=!!n&&(t!=null?Na(e,!!n,t,!0):Na(e,!!n,n?[]:"",!1));return;case"textarea":U=_=null;for(m in n)if(r=n[m],n.hasOwnProperty(m)&&r!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ze(e,t,m,null,a,r)}for(p in a)if(r=a[p],o=n[p],a.hasOwnProperty(p)&&(r!=null||o!=null))switch(p){case"value":_=r;break;case"defaultValue":U=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==o&&ze(e,t,p,r,a,o)}tf(e,_,U);return;case"option":for(var I in n)_=n[I],n.hasOwnProperty(I)&&_!=null&&!a.hasOwnProperty(I)&&(I==="selected"?e.selected=!1:ze(e,t,I,null,a,_));for(w in a)_=a[w],U=n[w],a.hasOwnProperty(w)&&_!==U&&(_!=null||U!=null)&&(w==="selected"?e.selected=_&&typeof _!="function"&&typeof _!="symbol":ze(e,t,w,_,a,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)_=n[ie],n.hasOwnProperty(ie)&&_!=null&&!a.hasOwnProperty(ie)&&ze(e,t,ie,null,a,_);for(R in a)if(_=a[R],U=n[R],a.hasOwnProperty(R)&&_!==U&&(_!=null||U!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,t));break;default:ze(e,t,R,_,a,U)}return;default:if(Bo(t)){for(var Te in n)_=n[Te],n.hasOwnProperty(Te)&&_!==void 0&&!a.hasOwnProperty(Te)&&ju(e,t,Te,void 0,a,_);for(L in a)_=a[L],U=n[L],!a.hasOwnProperty(L)||_===U||_===void 0&&U===void 0||ju(e,t,L,_,a,U);return}}for(var z in n)_=n[z],n.hasOwnProperty(z)&&_!=null&&!a.hasOwnProperty(z)&&ze(e,t,z,null,a,_);for(Y in a)_=a[Y],U=n[Y],!a.hasOwnProperty(Y)||_===U||_==null&&U==null||ze(e,t,Y,_,a,U)}function rh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],o=r.transferSize,p=r.initiatorType,m=r.duration;if(o&&m&&rh(p)){for(p=0,m=r.responseEnd,a+=1;a<n.length;a++){var w=n[a],R=w.startTime;if(R>m)break;var L=w.transferSize,Y=w.initiatorType;L&&rh(Y)&&(w=w.responseEnd,p+=L*(w<m?1:(m-R)/(w-R)))}if(--a,t+=8*(o+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nu=null,Eu=null;function Nr(e){return e.nodeType===9?e:e.ownerDocument}function oh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tu=null;function Lb(){var e=window.event;return e&&e.type==="popstate"?e===Tu?!1:(Tu=e,!0):(Tu=null,!1)}var uh=typeof setTimeout=="function"?setTimeout:void 0,Hb=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,qb=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(e){return ch.resolve(null).then(e).catch(Yb)}:uh;function Yb(e){setTimeout(function(){throw e})}function Vn(e){return e==="head"}function fh(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),nl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Wl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Wl(n);for(var o=n.firstChild;o;){var p=o.nextSibling,m=o.nodeName;o[ml]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=p}}else n==="body"&&Wl(e.ownerDocument.body);n=r}while(n);nl(t)}function dh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Cu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Cu(n),Do(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Vb(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ml])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Gb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function ph(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ut(e.nextSibling),e===null))return null;return e}function Au(e){return e.data==="$?"||e.data==="$~"}function Ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Xb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _u=null;function hh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ut(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function mh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function gh(e,t,n){switch(t=Nr(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Wl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Do(e)}var Bt=new Map,bh=new Set;function Er(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var mn=K.d;K.d={f:Qb,r:Zb,D:Jb,C:Kb,L:Fb,m:$b,X:Pb,S:Wb,M:Ib};function Qb(){var e=mn.f(),t=gr();return e||t}function Zb(e){var t=Sa(e);t!==null&&t.tag===5&&t.type==="form"?Md(t):mn.r(e)}var Ia=typeof document>"u"?null:document;function xh(e,t,n){var a=Ia;if(a&&typeof t=="string"&&t){var r=At(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),bh.has(r)||(bh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),et(t,"link",e),Ke(t),a.head.appendChild(t)))}}function Jb(e){mn.D(e),xh("dns-prefetch",e,null)}function Kb(e,t){mn.C(e,t),xh("preconnect",e,t)}function Fb(e,t,n){mn.L(e,t,n);var a=Ia;if(a&&e&&t){var r='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+At(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+At(n.imageSizes)+'"]')):r+='[href="'+At(e)+'"]';var o=r;switch(t){case"style":o=el(e);break;case"script":o=tl(e)}Bt.has(o)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bt.set(o,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Pl(o))||t==="script"&&a.querySelector(Il(o))||(t=a.createElement("link"),et(t,"link",e),Ke(t),a.head.appendChild(t)))}}function $b(e,t){mn.m(e,t);var n=Ia;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+At(a)+'"][href="'+At(e)+'"]',o=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=tl(e)}if(!Bt.has(o)&&(e=S({rel:"modulepreload",href:e},t),Bt.set(o,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Il(o)))return}a=n.createElement("link"),et(a,"link",e),Ke(a),n.head.appendChild(a)}}}function Wb(e,t,n){mn.S(e,t,n);var a=Ia;if(a&&e){var r=wa(a).hoistableStyles,o=el(e);t=t||"default";var p=r.get(o);if(!p){var m={loading:0,preload:null};if(p=a.querySelector(Pl(o)))m.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bt.get(o))&&Ou(e,n);var w=p=a.createElement("link");Ke(w),et(w,"link",e),w._p=new Promise(function(R,L){w.onload=R,w.onerror=L}),w.addEventListener("load",function(){m.loading|=1}),w.addEventListener("error",function(){m.loading|=2}),m.loading|=4,zr(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:m},r.set(o,p)}}}function Pb(e,t){mn.X(e,t);var n=Ia;if(n&&e){var a=wa(n).hoistableScripts,r=tl(e),o=a.get(r);o||(o=n.querySelector(Il(r)),o||(e=S({src:e,async:!0},t),(t=Bt.get(r))&&Du(e,t),o=n.createElement("script"),Ke(o),et(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Ib(e,t){mn.M(e,t);var n=Ia;if(n&&e){var a=wa(n).hoistableScripts,r=tl(e),o=a.get(r);o||(o=n.querySelector(Il(r)),o||(e=S({src:e,async:!0,type:"module"},t),(t=Bt.get(r))&&Du(e,t),o=n.createElement("script"),Ke(o),et(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function yh(e,t,n,a){var r=(r=de.current)?Er(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=el(n.href),n=wa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=el(n.href);var o=wa(r).hoistableStyles,p=o.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,p),(o=r.querySelector(Pl(e)))&&!o._p&&(p.instance=o,p.state.loading=5),Bt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bt.set(e,n),o||ex(r,e,n,p.state))),t&&a===null)throw Error(s(528,""));return p}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=tl(n),n=wa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function el(e){return'href="'+At(e)+'"'}function Pl(e){return'link[rel="stylesheet"]['+e+"]"}function vh(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function ex(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),et(t,"link",n),Ke(t),e.head.appendChild(t))}function tl(e){return'[src="'+At(e)+'"]'}function Il(e){return"script[async]"+e}function Sh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+At(n.href)+'"]');if(a)return t.instance=a,Ke(a),a;var r=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ke(a),et(a,"style",r),zr(a,n.precedence,e),t.instance=a;case"stylesheet":r=el(n.href);var o=e.querySelector(Pl(r));if(o)return t.state.loading|=4,t.instance=o,Ke(o),o;a=vh(n),(r=Bt.get(r))&&Ou(a,r),o=(e.ownerDocument||e).createElement("link"),Ke(o);var p=o;return p._p=new Promise(function(m,w){p.onload=m,p.onerror=w}),et(o,"link",a),t.state.loading|=4,zr(o,n.precedence,e),t.instance=o;case"script":return o=tl(n.src),(r=e.querySelector(Il(o)))?(t.instance=r,Ke(r),r):(a=n,(r=Bt.get(o))&&(a=S({},n),Du(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ke(r),et(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,zr(a,n.precedence,e));return t.instance}function zr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,o=r,p=0;p<a.length;p++){var m=a[p];if(m.dataset.precedence===t)o=m;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ou(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Du(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Tr=null;function wh(e,t,n){if(Tr===null){var a=new Map,r=Tr=new Map;r.set(n,a)}else r=Tr,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var o=n[r];if(!(o[ml]||o[$e]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var p=o.getAttribute(t)||"";p=e+p;var m=a.get(p);m?m.push(o):a.set(p,[o])}}return a}function jh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function tx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Nh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nx(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=el(a.href),o=t.querySelector(Pl(r));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Cr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,Ke(o);return}o=t.ownerDocument||t,a=vh(a),(r=Bt.get(r))&&Ou(a,r),o=o.createElement("link"),Ke(o);var p=o;p._p=new Promise(function(m,w){p.onload=m,p.onerror=w}),et(o,"link",a),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Cr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Mu=0;function ax(e,t){return e.stylesheets&&e.count===0&&Rr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Rr(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Mu===0&&(Mu=62500*Bb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rr(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Mu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Cr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ar=null;function Rr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ar=new Map,t.forEach(lx,e),Ar=null,Cr.call(e))}function lx(e,t){if(!(t.state.loading&4)){var n=Ar.get(e);if(n)var a=n.get(null);else{n=new Map,Ar.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var p=r[o];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}r=t.instance,p=r.getAttribute("data-precedence"),o=n.get(p)||a,o===a&&n.set(null,r),n.set(p,r),this.count++,a=Cr.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ei={$$typeof:G,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ix(e,t,n,a,r,o,p,m,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ao(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.hiddenUpdates=Ao(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Eh(e,t,n,a,r,o,p,m,w,R,L,Y){return e=new ix(e,t,n,p,w,R,L,Y,m),t=1,o===!0&&(t|=24),o=vt(3,null,null,t),e.current=o,o.stateNode=e,t=ps(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},bs(o),e}function zh(e){return e?(e=Oa,e):Oa}function Th(e,t,n,a,r,o){r=zh(r),a.context===null?a.context=r:a.pendingContext=r,a=_n(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=On(e,a,t),n!==null&&(pt(n,e,t),Ol(n,e,t))}function Ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ku(e,t){Ch(e,t),(e=e.alternate)&&Ch(e,t)}function Ah(e){if(e.tag===13||e.tag===31){var t=ea(e,67108864);t!==null&&pt(t,e,67108864),ku(e,67108864)}}function Rh(e){if(e.tag===13||e.tag===31){var t=Et();t=Ro(t);var n=ea(e,t);n!==null&&pt(n,e,t),ku(e,t)}}var _r=!0;function rx(e,t,n,a){var r=B.T;B.T=null;var o=K.p;try{K.p=2,Uu(e,t,n,a)}finally{K.p=o,B.T=r}}function ox(e,t,n,a){var r=B.T;B.T=null;var o=K.p;try{K.p=8,Uu(e,t,n,a)}finally{K.p=o,B.T=r}}function Uu(e,t,n,a){if(_r){var r=Bu(a);if(r===null)wu(e,t,a,Or,n),Oh(e,a);else if(ux(r,e,t,n,a))a.stopPropagation();else if(Oh(e,a),t&4&&-1<sx.indexOf(e)){for(;r!==null;){var o=Sa(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var p=Fn(o.pendingLanes);if(p!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var w=1<<31-xt(p);m.entanglements[1]|=w,p&=~w}Kt(o),(Se&6)===0&&(hr=gt()+500,Kl(0))}}break;case 31:case 13:m=ea(o,2),m!==null&&pt(m,o,2),gr(),ku(o,2)}if(o=Bu(a),o===null&&wu(e,t,a,Or,n),o===r)break;r=o}r!==null&&a.stopPropagation()}else wu(e,t,a,null,n)}}function Bu(e){return e=Ho(e),Lu(e)}var Or=null;function Lu(e){if(Or=null,e=va(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Or=e,null}function _h(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jg()){case Lc:return 2;case Hc:return 8;case Si:case Kg:return 32;case qc:return 268435456;default:return 32}default:return 32}}var Hu=!1,Gn=null,Xn=null,Qn=null,ti=new Map,ni=new Map,Zn=[],sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function ai(e,t,n,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Sa(t),t!==null&&Ah(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function ux(e,t,n,a,r){switch(t){case"focusin":return Gn=ai(Gn,e,t,n,a,r),!0;case"dragenter":return Xn=ai(Xn,e,t,n,a,r),!0;case"mouseover":return Qn=ai(Qn,e,t,n,a,r),!0;case"pointerover":var o=r.pointerId;return ti.set(o,ai(ti.get(o)||null,e,t,n,a,r)),!0;case"gotpointercapture":return o=r.pointerId,ni.set(o,ai(ni.get(o)||null,e,t,n,a,r)),!0}return!1}function Dh(e){var t=va(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){Rh(n)});return}}else if(t===31){if(t=x(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){Rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Lo=a,n.target.dispatchEvent(a),Lo=null}else return t=Sa(n),t!==null&&Ah(t),e.blockedOn=n,!1;t.shift()}return!0}function Mh(e,t,n){Dr(e)&&n.delete(t)}function cx(){Hu=!1,Gn!==null&&Dr(Gn)&&(Gn=null),Xn!==null&&Dr(Xn)&&(Xn=null),Qn!==null&&Dr(Qn)&&(Qn=null),ti.forEach(Mh),ni.forEach(Mh)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Hu||(Hu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,cx)))}var kr=null;function kh(e){kr!==e&&(kr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){kr===e&&(kr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Lu(a||n)===null)continue;break}var o=Sa(n);o!==null&&(e.splice(t,3),t-=3,Bs(o,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function nl(e){function t(w){return Mr(w,e)}Gn!==null&&Mr(Gn,e),Xn!==null&&Mr(Xn,e),Qn!==null&&Mr(Qn,e),ti.forEach(t),ni.forEach(t);for(var n=0;n<Zn.length;n++){var a=Zn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)Dh(n),n.blockedOn===null&&Zn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],o=n[a+1],p=r[ot]||null;if(typeof o=="function")p||kh(n);else if(p){var m=null;if(o&&o.hasAttribute("formAction")){if(r=o,p=o[ot]||null)m=p.formAction;else if(Lu(r)!==null)continue}else m=p.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),kh(n)}}}function Uh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function qu(e){this._internalRoot=e}Ur.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Et();Th(n,a,e,t,null,null)},Ur.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Th(e.current,2,null,e,null,null),gr(),t[ya]=null}};function Ur(e){this._internalRoot=e}Ur.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zn.length&&t!==0&&t<Zn[n].priority;n++);Zn.splice(n,0,e),n===0&&Dh(e)}};var Bh=i.version;if(Bh!=="19.2.3")throw Error(s(527,Bh,"19.2.3"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var fx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Br.isDisabled&&Br.supportsFiber)try{dl=Br.inject(fx),bt=Br}catch{}}return ii.createRoot=function(e,t){if(!f(e))throw Error(s(299));var n=!1,a="",r=Xd,o=Qd,p=Zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Eh(e,1,!1,null,null,n,a,null,r,o,p,Uh),e[ya]=t.current,Su(e),new qu(t)},ii.hydrateRoot=function(e,t,n){if(!f(e))throw Error(s(299));var a=!1,r="",o=Xd,p=Qd,m=Zd,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Eh(e,1,!0,t,n??null,a,r,w,o,p,m,Uh),t.context=zh(null),n=t.current,a=Et(),a=Ro(a),r=_n(a),r.callback=null,On(n,r,a),n=a,t.current.lanes=n,hl(t,n),Kt(t),e[ya]=t.current,Su(e),new Ur(t)},ii.version="19.2.3",ii}var Jh;function wx(){if(Jh)return Gu.exports;Jh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Gu.exports=Sx(),Gu.exports}var jx=wx();const Nx=Um(jx);var Kh="popstate";function Ex(l={}){function i(s,f){let{pathname:d,search:h,hash:x}=s.location;return rc("",{pathname:d,search:h,hash:x},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(s,f){return typeof f=="string"?f:ui(f)}return Tx(i,u,null,l)}function Me(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function Lt(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function zx(){return Math.random().toString(36).substring(2,10)}function Fh(l,i){return{usr:l.state,key:l.key,idx:i}}function rc(l,i,u=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?rl(i):i,state:u,key:i&&i.key||s||zx()}}function ui({pathname:l="/",search:i="",hash:u=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function rl(l){let i={};if(l){let u=l.indexOf("#");u>=0&&(i.hash=l.substring(u),l=l.substring(0,u));let s=l.indexOf("?");s>=0&&(i.search=l.substring(s),l=l.substring(0,s)),l&&(i.pathname=l)}return i}function Tx(l,i,u,s={}){let{window:f=document.defaultView,v5Compat:d=!1}=s,h=f.history,x="POP",b=null,g=y();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function y(){return(h.state||{idx:null}).idx}function S(){x="POP";let T=y(),V=T==null?null:T-g;g=T,b&&b({action:x,location:N.location,delta:V})}function D(T,V){x="PUSH";let X=rc(N.location,T,V);g=y()+1;let G=Fh(X,g),F=N.createHref(X);try{h.pushState(G,"",F)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;f.location.assign(F)}d&&b&&b({action:x,location:N.location,delta:1})}function q(T,V){x="REPLACE";let X=rc(N.location,T,V);g=y();let G=Fh(X,g),F=N.createHref(X);h.replaceState(G,"",F),d&&b&&b({action:x,location:N.location,delta:0})}function C(T){return Cx(T)}let N={get action(){return x},get location(){return l(f,h)},listen(T){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(Kh,S),b=T,()=>{f.removeEventListener(Kh,S),b=null}},createHref(T){return i(f,T)},createURL:C,encodeLocation(T){let V=C(T);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:D,replace:q,go(T){return h.go(T)}};return N}function Cx(l,i=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Me(u,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:ui(l);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=u+s),new URL(s,u)}function Bm(l,i,u="/"){return Ax(l,i,u,!1)}function Ax(l,i,u,s){let f=typeof i=="string"?rl(i):i,d=yn(f.pathname||"/",u);if(d==null)return null;let h=Lm(l);Rx(h);let x=null;for(let b=0;x==null&&b<h.length;++b){let g=Yx(d);x=Hx(h[b],g,s)}return x}function Lm(l,i=[],u=[],s="",f=!1){let d=(h,x,b=f,g)=>{let y={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:x,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&b)return;Me(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let S=bn([s,y.relativePath]),D=u.concat(y);h.children&&h.children.length>0&&(Me(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),Lm(h.children,i,D,S,b)),!(h.path==null&&!h.index)&&i.push({path:S,score:Bx(S,h.index),routesMeta:D})};return l.forEach((h,x)=>{if(h.path===""||!h.path?.includes("?"))d(h,x);else for(let b of Hm(h.path))d(h,x,!0,b)}),i}function Hm(l){let i=l.split("/");if(i.length===0)return[];let[u,...s]=i,f=u.endsWith("?"),d=u.replace(/\?$/,"");if(s.length===0)return f?[d,""]:[d];let h=Hm(s.join("/")),x=[];return x.push(...h.map(b=>b===""?d:[d,b].join("/"))),f&&x.push(...h),x.map(b=>l.startsWith("/")&&b===""?"/":b)}function Rx(l){l.sort((i,u)=>i.score!==u.score?u.score-i.score:Lx(i.routesMeta.map(s=>s.childrenIndex),u.routesMeta.map(s=>s.childrenIndex)))}var _x=/^:[\w-]+$/,Ox=3,Dx=2,Mx=1,kx=10,Ux=-2,$h=l=>l==="*";function Bx(l,i){let u=l.split("/"),s=u.length;return u.some($h)&&(s+=Ux),i&&(s+=Dx),u.filter(f=>!$h(f)).reduce((f,d)=>f+(_x.test(d)?Ox:d===""?Mx:kx),s)}function Lx(l,i){return l.length===i.length&&l.slice(0,-1).every((s,f)=>s===i[f])?l[l.length-1]-i[i.length-1]:0}function Hx(l,i,u=!1){let{routesMeta:s}=l,f={},d="/",h=[];for(let x=0;x<s.length;++x){let b=s[x],g=x===s.length-1,y=d==="/"?i:i.slice(d.length)||"/",S=Wr({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},y),D=b.route;if(!S&&g&&u&&!s[s.length-1].route.index&&(S=Wr({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},y)),!S)return null;Object.assign(f,S.params),h.push({params:f,pathname:bn([d,S.pathname]),pathnameBase:Qx(bn([d,S.pathnameBase])),route:D}),S.pathnameBase!=="/"&&(d=bn([d,S.pathnameBase]))}return h}function Wr(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,s]=qx(l.path,l.caseSensitive,l.end),f=i.match(u);if(!f)return null;let d=f[0],h=d.replace(/(.)\/+$/,"$1"),x=f.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:S},D)=>{if(y==="*"){let C=x[D]||"";h=d.slice(0,d.length-C.length).replace(/(.)\/+$/,"$1")}const q=x[D];return S&&!q?g[y]=void 0:g[y]=(q||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:h,pattern:l}}function qx(l,i=!1,u=!0){Lt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,x,b)=>(s.push({paramName:x,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(s.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),s]}function Yx(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Lt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function yn(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,s=l.charAt(u);return s&&s!=="/"?null:l.slice(u)||"/"}var qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vx=l=>qm.test(l);function Gx(l,i="/"){let{pathname:u,search:s="",hash:f=""}=typeof l=="string"?rl(l):l,d;if(u)if(Vx(u))d=u;else{if(u.includes("//")){let h=u;u=u.replace(/\/\/+/g,"/"),Lt(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${u}`)}u.startsWith("/")?d=Wh(u.substring(1),"/"):d=Wh(u,i)}else d=i;return{pathname:d,search:Zx(s),hash:Jx(f)}}function Wh(l,i){let u=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Ju(l,i,u,s){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xx(l){return l.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function vc(l){let i=Xx(l);return i.map((u,s)=>s===i.length-1?u.pathname:u.pathnameBase)}function Sc(l,i,u,s=!1){let f;typeof l=="string"?f=rl(l):(f={...l},Me(!f.pathname||!f.pathname.includes("?"),Ju("?","pathname","search",f)),Me(!f.pathname||!f.pathname.includes("#"),Ju("#","pathname","hash",f)),Me(!f.search||!f.search.includes("#"),Ju("#","search","hash",f)));let d=l===""||f.pathname==="",h=d?"/":f.pathname,x;if(h==null)x=u;else{let S=i.length-1;if(!s&&h.startsWith("..")){let D=h.split("/");for(;D[0]==="..";)D.shift(),S-=1;f.pathname=D.join("/")}x=S>=0?i[S]:"/"}let b=Gx(f,x),g=h&&h!=="/"&&h.endsWith("/"),y=(d||h===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(g||y)&&(b.pathname+="/"),b}var bn=l=>l.join("/").replace(/\/\/+/g,"/"),Qx=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Zx=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Jx=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Kx=class{constructor(l,i,u,s=!1){this.status=l,this.statusText=i||"",this.internal=s,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Fx(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function $x(l){return l.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Vm(l,i){let u=l;if(typeof u!="string"||!qm.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let s=u,f=!1;if(Ym)try{let d=new URL(window.location.href),h=u.startsWith("//")?new URL(d.protocol+u):new URL(u),x=yn(h.pathname,i);h.origin===d.origin&&x!=null?u=x+h.search+h.hash:f=!0}catch{Lt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Gm=["POST","PUT","PATCH","DELETE"];new Set(Gm);var Wx=["GET",...Gm];new Set(Wx);var ol=E.createContext(null);ol.displayName="DataRouter";var so=E.createContext(null);so.displayName="DataRouterState";var Px=E.createContext(!1),Xm=E.createContext({isTransitioning:!1});Xm.displayName="ViewTransition";var Ix=E.createContext(new Map);Ix.displayName="Fetchers";var e1=E.createContext(null);e1.displayName="Await";var Tt=E.createContext(null);Tt.displayName="Navigation";var pi=E.createContext(null);pi.displayName="Location";var $t=E.createContext({outlet:null,matches:[],isDataRoute:!1});$t.displayName="Route";var wc=E.createContext(null);wc.displayName="RouteError";var Qm="REACT_ROUTER_ERROR",t1="REDIRECT",n1="ROUTE_ERROR_RESPONSE";function a1(l){if(l.startsWith(`${Qm}:${t1}:{`))try{let i=JSON.parse(l.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function l1(l){if(l.startsWith(`${Qm}:${n1}:{`))try{let i=JSON.parse(l.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new Kx(i.status,i.statusText,i.data)}catch{}}function i1(l,{relative:i}={}){Me(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:s}=E.useContext(Tt),{hash:f,pathname:d,search:h}=hi(l,{relative:i}),x=d;return u!=="/"&&(x=d==="/"?u:bn([u,d])),s.createHref({pathname:x,search:h,hash:f})}function sl(){return E.useContext(pi)!=null}function Sn(){return Me(sl(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(pi).location}var Zm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Jm(l){E.useContext(Tt).static||E.useLayoutEffect(l)}function wn(){let{isDataRoute:l}=E.useContext($t);return l?x1():r1()}function r1(){Me(sl(),"useNavigate() may be used only in the context of a <Router> component.");let l=E.useContext(ol),{basename:i,navigator:u}=E.useContext(Tt),{matches:s}=E.useContext($t),{pathname:f}=Sn(),d=JSON.stringify(vc(s)),h=E.useRef(!1);return Jm(()=>{h.current=!0}),E.useCallback((b,g={})=>{if(Lt(h.current,Zm),!h.current)return;if(typeof b=="number"){u.go(b);return}let y=Sc(b,JSON.parse(d),f,g.relative==="path");l==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:bn([i,y.pathname])),(g.replace?u.replace:u.push)(y,g.state,g)},[i,u,d,f,l])}E.createContext(null);function hi(l,{relative:i}={}){let{matches:u}=E.useContext($t),{pathname:s}=Sn(),f=JSON.stringify(vc(u));return E.useMemo(()=>Sc(l,JSON.parse(f),s,i==="path"),[l,f,s,i])}function o1(l,i){return Km(l,i)}function Km(l,i,u,s,f){Me(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=E.useContext(Tt),{matches:h}=E.useContext($t),x=h[h.length-1],b=x?x.params:{},g=x?x.pathname:"/",y=x?x.pathnameBase:"/",S=x&&x.route;{let X=S&&S.path||"";$m(g,!S||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let D=Sn(),q;if(i){let X=typeof i=="string"?rl(i):i;Me(y==="/"||X.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${X.pathname}" was given in the \`location\` prop.`),q=X}else q=D;let C=q.pathname||"/",N=C;if(y!=="/"){let X=y.replace(/^\//,"").split("/");N="/"+C.replace(/^\//,"").split("/").slice(X.length).join("/")}let T=Bm(l,{pathname:N});Lt(S||T!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),Lt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=d1(T&&T.map(X=>Object.assign({},X,{params:Object.assign({},b,X.params),pathname:bn([y,d.encodeLocation?d.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?y:bn([y,d.encodeLocation?d.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),h,u,s,f);return i&&V?E.createElement(pi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...q},navigationType:"POP"}},V):V}function s1(){let l=b1(),i=Fx(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:d},"ErrorBoundary")," or"," ",E.createElement("code",{style:d},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},i),u?E.createElement("pre",{style:f},u):null,h)}var u1=E.createElement(s1,null),Fm=class extends E.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){this.props.onError?this.props.onError(l,i):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=l1(l.digest);u&&(l=u)}let i=l!==void 0?E.createElement($t.Provider,{value:this.props.routeContext},E.createElement(wc.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?E.createElement(c1,{error:l},i):i}};Fm.contextType=Px;var Ku=new WeakMap;function c1({children:l,error:i}){let{basename:u}=E.useContext(Tt);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let s=a1(i.digest);if(s){let f=Ku.get(i);if(f)throw f;let d=Vm(s.location,u);if(Ym&&!Ku.get(i))if(d.isExternal||s.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:s.replace}));throw Ku.set(i,h),h}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return l}function f1({routeContext:l,match:i,children:u}){let s=E.useContext(ol);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),E.createElement($t.Provider,{value:l},u)}function d1(l,i=[],u=null,s=null,f=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let d=l,h=u?.errors;if(h!=null){let y=d.findIndex(S=>S.route.id&&h?.[S.route.id]!==void 0);Me(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let x=!1,b=-1;if(u)for(let y=0;y<d.length;y++){let S=d[y];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(b=y),S.route.id){let{loaderData:D,errors:q}=u,C=S.route.loader&&!D.hasOwnProperty(S.route.id)&&(!q||q[S.route.id]===void 0);if(S.route.lazy||C){x=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}let g=u&&s?(y,S)=>{s(y,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:$x(u.matches),errorInfo:S})}:void 0;return d.reduceRight((y,S,D)=>{let q,C=!1,N=null,T=null;u&&(q=h&&S.route.id?h[S.route.id]:void 0,N=S.route.errorElement||u1,x&&(b<0&&D===0?($m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,T=null):b===D&&(C=!0,T=S.route.hydrateFallbackElement||null)));let V=i.concat(d.slice(0,D+1)),X=()=>{let G;return q?G=N:C?G=T:S.route.Component?G=E.createElement(S.route.Component,null):S.route.element?G=S.route.element:G=y,E.createElement(f1,{match:S,routeContext:{outlet:y,matches:V,isDataRoute:u!=null},children:G})};return u&&(S.route.ErrorBoundary||S.route.errorElement||D===0)?E.createElement(Fm,{location:u.location,revalidation:u.revalidation,component:N,error:q,children:X(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:g}):X()},null)}function jc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p1(l){let i=E.useContext(ol);return Me(i,jc(l)),i}function h1(l){let i=E.useContext(so);return Me(i,jc(l)),i}function m1(l){let i=E.useContext($t);return Me(i,jc(l)),i}function Nc(l){let i=m1(l),u=i.matches[i.matches.length-1];return Me(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function g1(){return Nc("useRouteId")}function b1(){let l=E.useContext(wc),i=h1("useRouteError"),u=Nc("useRouteError");return l!==void 0?l:i.errors?.[u]}function x1(){let{router:l}=p1("useNavigate"),i=Nc("useNavigate"),u=E.useRef(!1);return Jm(()=>{u.current=!0}),E.useCallback(async(f,d={})=>{Lt(u.current,Zm),u.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:i,...d}))},[l,i])}var Ph={};function $m(l,i,u){!i&&!Ph[l]&&(Ph[l]=!0,Lt(!1,u))}E.memo(y1);function y1({routes:l,future:i,state:u,onError:s}){return Km(l,void 0,u,s,i)}function Wm({to:l,replace:i,state:u,relative:s}){Me(sl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=E.useContext(Tt);Lt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=E.useContext($t),{pathname:h}=Sn(),x=wn(),b=Sc(l,vc(d),h,s==="path"),g=JSON.stringify(b);return E.useEffect(()=>{x(JSON.parse(g),{replace:i,state:u,relative:s})},[x,g,s,i,u]),null}function pa(l){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function v1({basename:l="/",children:i=null,location:u,navigationType:s="POP",navigator:f,static:d=!1,unstable_useTransitions:h}){Me(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=l.replace(/^\/*/,"/"),b=E.useMemo(()=>({basename:x,navigator:f,static:d,unstable_useTransitions:h,future:{}}),[x,f,d,h]);typeof u=="string"&&(u=rl(u));let{pathname:g="/",search:y="",hash:S="",state:D=null,key:q="default"}=u,C=E.useMemo(()=>{let N=yn(g,x);return N==null?null:{location:{pathname:N,search:y,hash:S,state:D,key:q},navigationType:s}},[x,g,y,S,D,q,s]);return Lt(C!=null,`<Router basename="${x}"> is not able to match the URL "${g}${y}${S}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:E.createElement(Tt.Provider,{value:b},E.createElement(pi.Provider,{children:i,value:C}))}function S1({children:l,location:i}){return o1(oc(l),i)}function oc(l,i=[]){let u=[];return E.Children.forEach(l,(s,f)=>{if(!E.isValidElement(s))return;let d=[...i,f];if(s.type===E.Fragment){u.push.apply(u,oc(s.props.children,d));return}Me(s.type===pa,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||d.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=oc(s.props.children,d)),u.push(h)}),u}var Xr="get",Qr="application/x-www-form-urlencoded";function uo(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function w1(l){return uo(l)&&l.tagName.toLowerCase()==="button"}function j1(l){return uo(l)&&l.tagName.toLowerCase()==="form"}function N1(l){return uo(l)&&l.tagName.toLowerCase()==="input"}function E1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function z1(l,i){return l.button===0&&(!i||i==="_self")&&!E1(l)}var Lr=null;function T1(){if(Lr===null)try{new FormData(document.createElement("form"),0),Lr=!1}catch{Lr=!0}return Lr}var C1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fu(l){return l!=null&&!C1.has(l)?(Lt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qr}"`),null):l}function A1(l,i){let u,s,f,d,h;if(j1(l)){let x=l.getAttribute("action");s=x?yn(x,i):null,u=l.getAttribute("method")||Xr,f=Fu(l.getAttribute("enctype"))||Qr,d=new FormData(l)}else if(w1(l)||N1(l)&&(l.type==="submit"||l.type==="image")){let x=l.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||x.getAttribute("action");if(s=b?yn(b,i):null,u=l.getAttribute("formmethod")||x.getAttribute("method")||Xr,f=Fu(l.getAttribute("formenctype"))||Fu(x.getAttribute("enctype"))||Qr,d=new FormData(x,l),!T1()){let{name:g,type:y,value:S}=l;if(y==="image"){let D=g?`${g}.`:"";d.append(`${D}x`,"0"),d.append(`${D}y`,"0")}else g&&d.append(g,S)}}else{if(uo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Xr,s=null,f=Qr,h=l}return d&&f==="text/plain"&&(h=d,d=void 0),{action:s,method:u.toLowerCase(),encType:f,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ec(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function R1(l,i,u,s){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${s}`:f.pathname=`${f.pathname}.${s}`:f.pathname==="/"?f.pathname=`_root.${s}`:i&&yn(f.pathname,i)==="/"?f.pathname=`${i.replace(/\/$/,"")}/_root.${s}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${s}`,f}async function _1(l,i){if(l.id in i)return i[l.id];try{let u=await import(l.module);return i[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function O1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function D1(l,i,u){let s=await Promise.all(l.map(async f=>{let d=i.routes[f.route.id];if(d){let h=await _1(d,u);return h.links?h.links():[]}return[]}));return B1(s.flat(1).filter(O1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Ih(l,i,u,s,f,d){let h=(b,g)=>u[g]?b.route.id!==u[g].route.id:!0,x=(b,g)=>u[g].pathname!==b.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==b.params["*"];return d==="assets"?i.filter((b,g)=>h(b,g)||x(b,g)):d==="data"?i.filter((b,g)=>{let y=s.routes[b.route.id];if(!y||!y.hasLoader)return!1;if(h(b,g)||x(b,g))return!0;if(b.route.shouldRevalidate){let S=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function M1(l,i,{includeHydrateFallback:u}={}){return k1(l.map(s=>{let f=i.routes[s.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function k1(l){return[...new Set(l)]}function U1(l){let i={},u=Object.keys(l).sort();for(let s of u)i[s]=l[s];return i}function B1(l,i){let u=new Set;return new Set(i),l.reduce((s,f)=>{let d=JSON.stringify(U1(f));return u.has(d)||(u.add(d),s.push({key:d,link:f})),s},[])}function Pm(){let l=E.useContext(ol);return Ec(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function L1(){let l=E.useContext(so);return Ec(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var zc=E.createContext(void 0);zc.displayName="FrameworkContext";function Im(){let l=E.useContext(zc);return Ec(l,"You must render this element inside a <HydratedRouter> element"),l}function H1(l,i){let u=E.useContext(zc),[s,f]=E.useState(!1),[d,h]=E.useState(!1),{onFocus:x,onBlur:b,onMouseEnter:g,onMouseLeave:y,onTouchStart:S}=i,D=E.useRef(null);E.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let N=V=>{V.forEach(X=>{h(X.isIntersecting)})},T=new IntersectionObserver(N,{threshold:.5});return D.current&&T.observe(D.current),()=>{T.disconnect()}}},[l]),E.useEffect(()=>{if(s){let N=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(N)}}},[s]);let q=()=>{f(!0)},C=()=>{f(!1),h(!1)};return u?l!=="intent"?[d,D,{}]:[d,D,{onFocus:ri(x,q),onBlur:ri(b,C),onMouseEnter:ri(g,q),onMouseLeave:ri(y,C),onTouchStart:ri(S,q)}]:[!1,D,{}]}function ri(l,i){return u=>{l&&l(u),u.defaultPrevented||i(u)}}function q1({page:l,...i}){let{router:u}=Pm(),s=E.useMemo(()=>Bm(u.routes,l,u.basename),[u.routes,l,u.basename]);return s?E.createElement(V1,{page:l,matches:s,...i}):null}function Y1(l){let{manifest:i,routeModules:u}=Im(),[s,f]=E.useState([]);return E.useEffect(()=>{let d=!1;return D1(l,i,u).then(h=>{d||f(h)}),()=>{d=!0}},[l,i,u]),s}function V1({page:l,matches:i,...u}){let s=Sn(),{future:f,manifest:d,routeModules:h}=Im(),{basename:x}=Pm(),{loaderData:b,matches:g}=L1(),y=E.useMemo(()=>Ih(l,i,g,d,s,"data"),[l,i,g,d,s]),S=E.useMemo(()=>Ih(l,i,g,d,s,"assets"),[l,i,g,d,s]),D=E.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let N=new Set,T=!1;if(i.forEach(X=>{let G=d.routes[X.route.id];!G||!G.hasLoader||(!y.some(F=>F.route.id===X.route.id)&&X.route.id in b&&h[X.route.id]?.shouldRevalidate||G.hasClientLoader?T=!0:N.add(X.route.id))}),N.size===0)return[];let V=R1(l,x,f.unstable_trailingSlashAwareDataRequests,"data");return T&&N.size>0&&V.searchParams.set("_routes",i.filter(X=>N.has(X.route.id)).map(X=>X.route.id).join(",")),[V.pathname+V.search]},[x,f.unstable_trailingSlashAwareDataRequests,b,s,d,y,i,l,h]),q=E.useMemo(()=>M1(S,d),[S,d]),C=Y1(S);return E.createElement(E.Fragment,null,D.map(N=>E.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...u})),q.map(N=>E.createElement("link",{key:N,rel:"modulepreload",href:N,...u})),C.map(({key:N,link:T})=>E.createElement("link",{key:N,nonce:u.nonce,...T})))}function G1(...l){return i=>{l.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var X1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X1&&(window.__reactRouterVersion="7.12.0")}catch{}function Q1({basename:l,children:i,unstable_useTransitions:u,window:s}){let f=E.useRef();f.current==null&&(f.current=Ex({window:s,v5Compat:!0}));let d=f.current,[h,x]=E.useState({action:d.action,location:d.location}),b=E.useCallback(g=>{u===!1?x(g):E.startTransition(()=>x(g))},[u]);return E.useLayoutEffect(()=>d.listen(b),[d,b]),E.createElement(v1,{basename:l,children:i,location:h.location,navigationType:h.action,navigator:d,unstable_useTransitions:u})}var eg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tg=E.forwardRef(function({onClick:i,discover:u="render",prefetch:s="none",relative:f,reloadDocument:d,replace:h,state:x,target:b,to:g,preventScrollReset:y,viewTransition:S,unstable_defaultShouldRevalidate:D,...q},C){let{basename:N,unstable_useTransitions:T}=E.useContext(Tt),V=typeof g=="string"&&eg.test(g),X=Vm(g,N);g=X.to;let G=i1(g,{relative:f}),[F,$,ee]=H1(s,q),J=F1(g,{replace:h,state:x,target:b,preventScrollReset:y,relative:f,viewTransition:S,unstable_defaultShouldRevalidate:D,unstable_useTransitions:T});function le(Re){i&&i(Re),Re.defaultPrevented||J(Re)}let me=E.createElement("a",{...q,...ee,href:X.absoluteURL||G,onClick:X.isExternal||d?i:le,ref:G1(C,$),target:b,"data-discover":!V&&u==="render"?"true":void 0});return F&&!V?E.createElement(E.Fragment,null,me,E.createElement(q1,{page:G})):me});tg.displayName="Link";var Z1=E.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:s="",end:f=!1,style:d,to:h,viewTransition:x,children:b,...g},y){let S=hi(h,{relative:g.relative}),D=Sn(),q=E.useContext(so),{navigator:C,basename:N}=E.useContext(Tt),T=q!=null&&ey(S)&&x===!0,V=C.encodeLocation?C.encodeLocation(S).pathname:S.pathname,X=D.pathname,G=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;u||(X=X.toLowerCase(),G=G?G.toLowerCase():null,V=V.toLowerCase()),G&&N&&(G=yn(G,N)||G);const F=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let $=X===V||!f&&X.startsWith(V)&&X.charAt(F)==="/",ee=G!=null&&(G===V||!f&&G.startsWith(V)&&G.charAt(V.length)==="/"),J={isActive:$,isPending:ee,isTransitioning:T},le=$?i:void 0,me;typeof s=="function"?me=s(J):me=[s,$?"active":null,ee?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Re=typeof d=="function"?d(J):d;return E.createElement(tg,{...g,"aria-current":le,className:me,ref:y,style:Re,to:h,viewTransition:x},typeof b=="function"?b(J):b)});Z1.displayName="NavLink";var J1=E.forwardRef(({discover:l="render",fetcherKey:i,navigate:u,reloadDocument:s,replace:f,state:d,method:h=Xr,action:x,onSubmit:b,relative:g,preventScrollReset:y,viewTransition:S,unstable_defaultShouldRevalidate:D,...q},C)=>{let{unstable_useTransitions:N}=E.useContext(Tt),T=P1(),V=I1(x,{relative:g}),X=h.toLowerCase()==="get"?"get":"post",G=typeof x=="string"&&eg.test(x),F=$=>{if(b&&b($),$.defaultPrevented)return;$.preventDefault();let ee=$.nativeEvent.submitter,J=ee?.getAttribute("formmethod")||h,le=()=>T(ee||$.currentTarget,{fetcherKey:i,method:J,navigate:u,replace:f,state:d,relative:g,preventScrollReset:y,viewTransition:S,unstable_defaultShouldRevalidate:D});N&&u!==!1?E.startTransition(()=>le()):le()};return E.createElement("form",{ref:C,method:X,action:V,onSubmit:s?b:F,...q,"data-discover":!G&&l==="render"?"true":void 0})});J1.displayName="Form";function K1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ng(l){let i=E.useContext(ol);return Me(i,K1(l)),i}function F1(l,{target:i,replace:u,state:s,preventScrollReset:f,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:x,unstable_useTransitions:b}={}){let g=wn(),y=Sn(),S=hi(l,{relative:d});return E.useCallback(D=>{if(z1(D,i)){D.preventDefault();let q=u!==void 0?u:ui(y)===ui(S),C=()=>g(l,{replace:q,state:s,preventScrollReset:f,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:x});b?E.startTransition(()=>C()):C()}},[y,g,S,u,s,i,l,f,d,h,x,b])}var $1=0,W1=()=>`__${String(++$1)}__`;function P1(){let{router:l}=ng("useSubmit"),{basename:i}=E.useContext(Tt),u=g1(),s=l.fetch,f=l.navigate;return E.useCallback(async(d,h={})=>{let{action:x,method:b,encType:g,formData:y,body:S}=A1(d,i);if(h.navigate===!1){let D=h.fetcherKey||W1();await s(D,u,h.action||x,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:S,formMethod:h.method||b,formEncType:h.encType||g,flushSync:h.flushSync})}else await f(h.action||x,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:S,formMethod:h.method||b,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:u,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,f,i,u])}function I1(l,{relative:i}={}){let{basename:u}=E.useContext(Tt),s=E.useContext($t);Me(s,"useFormAction must be used inside a RouteContext");let[f]=s.matches.slice(-1),d={...hi(l||".",{relative:i})},h=Sn();if(l==null){d.search=h.search;let x=new URLSearchParams(d.search),b=x.getAll("index");if(b.some(y=>y==="")){x.delete("index"),b.filter(S=>S).forEach(S=>x.append("index",S));let y=x.toString();d.search=y?`?${y}`:""}}return(!l||l===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:bn([u,d.pathname])),ui(d)}function ey(l,{relative:i}={}){let u=E.useContext(Xm);Me(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ng("useViewTransitionState"),f=hi(l,{relative:i});if(!u.isTransitioning)return!1;let d=yn(u.currentLocation.pathname,s)||u.currentLocation.pathname,h=yn(u.nextLocation.pathname,s)||u.nextLocation.pathname;return Wr(f.pathname,h)!=null||Wr(f.pathname,d)!=null}const ag="/assets/vvcmclogo-C6hbLrf7.jpg";function ty(){const l=wn(),i=Sn(),[u,s]=E.useState(!1),[f,d]=E.useState(!1),h=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})();E.useEffect(()=>{const g=()=>d(window.scrollY>20);return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const x=()=>{localStorage.removeItem("citizenUser"),l("/login"),s(!1)},b=g=>i.pathname===g;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

        .cn-outer {
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .cn-outer.scrolled { padding: 6px 20px; }

        /* ── Main pill navbar ── */
        .cn-nav {
          background: linear-gradient(135deg, #187484 0%, #114e59 100%);
          padding: 0 16px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          border-radius: 100px;
          width: 97%;
          max-width: 1300px;
          border: 2px solid rgba(202,157,40,0.5);
          box-shadow: 0 10px 36px rgba(0,0,0,0.3);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          overflow: visible;
        }
        .cn-outer.scrolled .cn-nav {
          height: 70px;
          width: 93%;
        }

        /* ── Brand pill — large protruding left section ── */
        .cn-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          cursor: pointer;
          background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
          border: 2.5px solid rgba(202,157,40,0.75);
          border-radius: 100px;
          /* big protrusion top and bottom */
          padding: 10px 32px 10px 10px;
          margin-left: -3px;
          height: 110px;
          box-shadow:
            0 10px 30px rgba(0,0,0,0.4),
            0 0 0 5px rgba(202,157,40,0.1),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: all 0.3s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .cn-outer.scrolled .cn-brand {
          height: 86px;
          padding: 8px 26px 8px 8px;
          gap: 14px;
        }
        .cn-brand:hover {
          background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
          box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
          transform: translateY(-2px);
        }

        /* ── Logo — VERY BIG ── */
        .cn-logo-wrap {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          overflow: hidden;
          border: 3.5px solid #CA9D28;
          background: #fff;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow:
            0 0 0 5px rgba(202,157,40,0.2),
            0 0 0 8px rgba(202,157,40,0.07),
            0 6px 20px rgba(0,0,0,0.35);
        }
        .cn-outer.scrolled .cn-logo-wrap {
          width: 66px;
          height: 66px;
        }
        .cn-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Brand text ── */
        .cn-brand-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        /* "वसई-विरार शहर महानगरपालिका" — very large bold */
        .cn-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          white-space: nowrap;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

        /* "जन संवाद" — large bold golden */
        .cn-brand-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 20px;
          font-weight: 700;
          color: #F5C030;
          line-height: 1.2;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
        }
        .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

        /* ── Nav Links ── */
        .cn-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cn-link {
          padding: 9px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          color: rgba(245,231,194,0.88);
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
        .cn-link.active {
          background: #CA9D28;
          color: #114e59;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(202,157,40,0.35);
        }

        .cn-citizen-name {
          font-size: 14px;
          color: #F5E7C2;
          font-weight: 700;
          padding: 0 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }

        /* ── Buttons ── */
        .cn-btn-solid {
          padding: 9px 24px;
          border-radius: 50px;
          border: none;
          background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
          color: #1a3a44;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(202,157,40,0.3);
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .cn-btn-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(202,157,40,0.5);
          filter: brightness(1.1);
        }
        .cn-btn-outline {
          padding: 9px 22px;
          border-radius: 50px;
          border: 1.5px solid #CA9D28;
          background: transparent;
          color: #CA9D28;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

        .cn-btn-danger {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(248,113,113,0.5);
          background: rgba(248,113,113,0.1);
          color: #f87171;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

        /* ── Hamburger ── */
        .cn-ham {
          display: none;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid #CA9D28;
          color: #CA9D28;
          font-size: 20px;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 50px;
          margin-right: 4px;
          flex-shrink: 0;
        }

        /* ── Mobile dropdown ── */
        .cn-mobile-menu {
          display: none;
          position: fixed;
          top: 112px;
          left: 16px;
          right: 16px;
          background: #187484;
          z-index: 999;
          padding: 14px;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          flex-direction: column;
          gap: 8px;
          border: 1.5px solid #CA9D28;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cn-mobile-menu.open { display: flex; }
        .cn-mobile-link {
          padding: 12px 20px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          color: #F5E7C2;
          background: rgba(255,255,255,0.05);
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
        .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

        /* ── Responsive ── */
        @media(max-width:960px){
          .cn-links { display: none; }
          .cn-ham { display: block; }
          .cn-nav { width: 96%; height: 80px; }
          .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
          .cn-logo-wrap { width: 72px; height: 72px; }
          .cn-brand-name { font-size: 19px; }
          .cn-brand-sub { font-size: 16px; }
        }
        @media(max-width:640px){
          .cn-outer { padding: 8px 10px; }
          .cn-nav { width: 100%; height: 72px; }
          .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
          .cn-logo-wrap { width: 62px; height: 62px; }
          .cn-brand-name { font-size: 16px; }
          .cn-brand-sub { font-size: 14px; }
        }
        @media(max-width:420px){
          .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
          .cn-logo-wrap { width: 54px; height: 54px; }
          .cn-brand-name { font-size: 14px; }
          .cn-brand-sub { font-size: 12px; }
        }
      `}),c.jsx("div",{className:`cn-outer${f?" scrolled":""}`,children:c.jsxs("nav",{className:"cn-nav",children:[c.jsxs("div",{className:"cn-brand",onClick:()=>l("/"),children:[c.jsx("div",{className:"cn-logo-wrap",children:c.jsx("img",{src:ag,alt:"VVCMC"})}),c.jsxs("div",{className:"cn-brand-text",children:[c.jsx("span",{className:"cn-brand-name",children:"वसई-विरार शहर महानगरपालिका"}),c.jsx("span",{className:"cn-brand-sub",children:"जन संवाद"})]})]}),c.jsxs("div",{className:"cn-links",children:[c.jsx("button",{className:`cn-link${b("/")?" active":""}`,onClick:()=>l("/"),children:"Home"}),h&&c.jsx("button",{className:`cn-link${b("/my-appointments")?" active":""}`,onClick:()=>l("/my-appointments"),children:"My Appointments"}),h?c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:"cn-citizen-name",children:["👋 ",h.fullName?.split(" ")[0]]}),c.jsx("button",{className:"cn-btn-solid",onClick:()=>l("/book-appointment"),children:"+ Book"}),c.jsx("button",{className:"cn-btn-danger",onClick:x,title:"Logout",children:c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M18.36 6.64A9 9 0 1 1 5.64 6.64"}),c.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]})})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"cn-btn-outline",onClick:()=>l("/login"),children:"Login"}),c.jsx("button",{className:"cn-btn-solid",onClick:()=>l("/register"),children:"Register"})]})]}),c.jsx("button",{className:"cn-ham",onClick:()=>s(g=>!g),children:u?"✕":"☰"})]})}),c.jsxs("div",{className:`cn-mobile-menu${u?" open":""}`,children:[c.jsx("button",{className:`cn-mobile-link${b("/")?" active":""}`,onClick:()=>{l("/"),s(!1)},children:"🏠 Home"}),h&&c.jsx("button",{className:`cn-mobile-link${b("/my-appointments")?" active":""}`,onClick:()=>{l("/my-appointments"),s(!1)},children:"📅 My Appointments"}),h?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"cn-mobile-link",style:{color:"#CA9D28"},onClick:()=>{l("/book-appointment"),s(!1)},children:"+ Book Appointment"}),c.jsx("button",{className:"cn-mobile-link",style:{color:"#f87171"},onClick:x,children:"🚪 Logout"})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"cn-mobile-link",onClick:()=>{l("/login"),s(!1)},children:"🔐 Login"}),c.jsx("button",{className:"cn-mobile-link",onClick:()=>{l("/register"),s(!1)},children:"📝 Register"})]})]})]})}const Tc="/assets/vvcmcbuildingbanner-DtzkCcP_.png",ny="/assets/ajivsir1-DtAuu40c.jpeg",ay="/assets/meeting2-BpgpR0FZ.jpeg",ly="/assets/narangibridgeahani-Ct7_szRG.jpeg";function $u({src:l,style:i,loop:u=!0}){const s=E.useRef(null);return E.useEffect(()=>{let f;const d=()=>{window.lottie&&s.current&&(s.current.innerHTML="",f=window.lottie.loadAnimation({container:s.current,renderer:"svg",loop:u,autoplay:!0,path:l}))};if(window.lottie)d();else{const h=document.createElement("script");h.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js",h.onload=d,document.head.appendChild(h)}return()=>f&&f.destroy()},[l]),c.jsx("div",{ref:s,style:i})}function iy(){const l=wn(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[u,s]=E.useState(null),[f,d]=E.useState(0),[h,x]=E.useState(!0),b=[{icon:":🌉",tag:"पायाभूत सुविधा",title:"नारंगी उड्डाणपूल प्रकल्प पाहणी",desc:"नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या. हा उड्डाणपूल चालू महिन्याच्या अखेरीपर्यंत वाहतुकीसाठी खुला करण्याचा प्रयत्न सुरू आहे.",progress:68,status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 42 कोटी",deadline:"डिसेंबर 2025",stat:"",statLbl:"मार्च २०२६ अखेर वाहतुकीसाठी खुले",accent:"#51ABAC",bg:"#e8f7f7",bgimg:ly},{icon:"🏛️",title:"समिती गठनाबाबत चर्चा",desc:"स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत  चर्चा सुरू आहे.",progress:45,status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"",statLbl:"",accent:"#028945",bg:"#e8f5ef",bgimg:ay},{icon:"💧",tag:"पाणीपुरवठा",title:"24×7 पाणीपुरवठा योजना — वसई विभाग",desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",progress:45,status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"1.2 लाख",statLbl:"लाभार्थी कुटुंबे",accent:"#028945",bg:"#e8f5ef"},{icon:"🏫",tag:"शिक्षण",title:"VVCMC शाळा डिजिटलायझेशन उपक्रम",desc:"महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.",progress:30,status:"planning",statusLabel:"नियोजन",budget:"₹ 18 कोटी",deadline:"जून 2026",stat:"94",statLbl:"शाळा डिजिटल",accent:"#D09A50",bg:"#fdf3e0"},{icon:"🌳",tag:"पर्यावरण",title:"हरित वसई-विरार — वृक्षारोपण मोहीम",desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",progress:55,status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 8 कोटी",deadline:"ऑगस्ट 2025",stat:"5 लाख",statLbl:"झाडे लावणार",accent:"#028945",bg:"#e8f5ef"}];E.useEffect(()=>{if(!h)return;const S=setInterval(()=>{d(D=>(D+1)%b.length)},4e3);return()=>clearInterval(S)},[h,b.length]);const g=[{lottie:"https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json",title:"Register करा",desc:"Mobile number वापरून account तयार करा — फक्त 1 मिनिट"},{lottie:"https://assets4.lottiefiles.com/packages/lf20_tljjahng.json",title:"Date निवडा",desc:"Mayor च्या available dates आणि time slots मधून निवडा"},{lottie:"https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json",title:"Details भरा",desc:"भेटीचे कारण, visitors संख्या आणि photo द्या"},{lottie:"https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title:"Token मिळवा",desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"}],y=b[f];return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

        /* ══ HERO ══ */
        .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 72px; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background-image:url(${Tc}); background-size:cover; background-position:center top; background-repeat:no-repeat; z-index:0; }
        .hero::after { content:''; position:absolute; inset:0; background:rgba(40,120,120,0.72); z-index:1; }
        .hero > * { position:relative; z-index:2; }
        .hero-orbit { position:absolute; inset:0; z-index:2; pointer-events:none; }
        .hero-float { position:absolute; background:rgba(208,154,80,0.92); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; box-shadow:0 4px 20px rgba(0,0,0,0.25); animation:floatBob 3s ease-in-out infinite; }
        .hero-float.f1{width:52px;height:52px;top:28%;left:8%;animation-delay:0s}
        .hero-float.f2{width:44px;height:44px;top:60%;left:16%;animation-delay:0.7s}
        .hero-float.f3{width:52px;height:52px;top:22%;right:8%;animation-delay:1.1s}
        .hero-float.f4{width:44px;height:44px;top:58%;right:14%;animation-delay:0.4s}
        @keyframes floatBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .hero-jansanwad { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(52px,10vw,96px); font-weight:800; color:#F5D87A; line-height:1.05; margin-bottom:18px; text-shadow:0 4px 32px rgba(0,0,0,0.3),0 2px 8px rgba(0,0,0,0.2); letter-spacing:-1px; }
        .hero-title-underline { width:80px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A,#D09A50); border-radius:2px; margin:0 auto 22px; animation:shimmer 2.5s ease-in-out infinite; }
        @keyframes shimmer{0%,100%{opacity:1}50%{opacity:0.6}}
        .hero-desc { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(14px,2.2vw,19px); font-weight:600; color:rgba(255,255,255,0.93); max-width:620px; margin:0 auto 40px; line-height:1.7; text-shadow:0 2px 12px rgba(0,0,0,0.25); }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .hero-btn-primary { padding:14px 36px; border-radius:12px; border:none; background:#028945; color:#fff; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; box-shadow:0 4px 20px rgba(2,137,69,0.45); }
        .hero-btn-primary:hover { background:#016d38; transform:translateY(-2px); }
        .hero-btn-outline { padding:14px 36px; border-radius:12px; border:2px solid rgba(245,216,122,0.85); background:transparent; color:#F5D87A; font-weight:700; font-size:15px; font-family:'DM Sans',sans-serif; cursor:pointer; transition:all .2s; }
        .hero-btn-outline:hover { background:rgba(245,216,122,0.15); transform:translateY(-2px); }

        /* ══ HOW IT WORKS ══ */
        .hiw-section { padding:72px 24px 80px; background:#ffffff; position:relative; }
        .hiw-section::before { content:''; position:absolute; inset:0; background-image:radial-gradient(circle at 15% 50%,rgba(81,171,172,0.06) 0%,transparent 55%),radial-gradient(circle at 85% 20%,rgba(2,137,69,0.05) 0%,transparent 50%); pointer-events:none; }
        .hiw-inner { max-width:1080px; margin:0 auto; position:relative; z-index:1; }
        .hiw-header { text-align:center; margin-bottom:52px; }
        .hiw-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4.5vw,44px); font-weight:800; color:#1a1a1a; margin-bottom:12px; line-height:1.2; }
        .hiw-title-bar { width:64px; height:4px; background:linear-gradient(90deg,#D09A50,#F5D87A); border-radius:2px; margin:0 auto 14px; }
        .hiw-sub { font-family:'DM Sans',sans-serif; color:#6b7280; font-size:15px; }
        .hiw-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; align-items:stretch; }
        .hiw-grid-wrap { position:relative; }
        .hiw-connector { position:absolute; top:52px; left:calc(12.5% + 20px); right:calc(12.5% + 20px); height:2px; background:linear-gradient(90deg,rgba(81,171,172,0.3),rgba(81,171,172,0.6),rgba(81,171,172,0.3)); z-index:0; pointer-events:none; }
        .hiw-card { background:#ffffff; border-radius:20px; padding:36px 22px 28px; text-align:center; border:1.5px solid rgba(81,171,172,0.18); box-shadow:0 4px 24px rgba(81,171,172,0.10),0 1px 4px rgba(0,0,0,0.04); transition:transform .25s,box-shadow .25s,border-color .25s; position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; }
        .hiw-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,var(--teal),var(--green)); border-radius:20px 20px 0 0; }
        .hiw-card:hover { transform:translateY(-8px); box-shadow:0 16px 40px rgba(81,171,172,0.22),0 4px 12px rgba(0,0,0,0.06); border-color:rgba(81,171,172,0.4); }
        .hiw-icon-wrap { width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#51ABAC,#028945); display:flex; align-items:center; justify-content:center; margin:0 auto 20px; box-shadow:0 6px 20px rgba(81,171,172,0.35); flex-shrink:0; }
        .hiw-num { position:absolute; top:14px; right:16px; width:26px; height:26px; border-radius:50%; background:linear-gradient(135deg,var(--teal),var(--green)); color:#fff; font-size:11px; font-weight:800; font-family:'DM Sans',sans-serif; display:flex; align-items:center; justify-content:center; }
        .hiw-step-title { font-family:'DM Sans',sans-serif; font-weight:700; color:#1a4a2e; font-size:15px; margin-bottom:10px; line-height:1.3; }
        .hiw-step-desc { font-family:'DM Sans',sans-serif; font-size:13px; color:#6b7280; line-height:1.65; flex:1; }

        /* ══════════════════════════════════════════════════
           MAYOR SECTION — EXACT SCREENSHOT MATCH
           LEFT: cream/beige bg | RIGHT: dark teal bg
        ══════════════════════════════════════════════════ */
        .mayor-section {
          width: 100%;
          display: flex;
          align-items: stretch;
          min-height: 480px;
          overflow: hidden;
        }

        /* ── LEFT PANEL: cream/beige background ── */
        .mayor-left {
          flex: 0 0 48%;
          background: #f5ead8;
          padding: 60px 52px 60px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* subtle warm texture on left */
        .mayor-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(200,160,80,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Dark teal heading line 1 — "मा. महापौर" */
        .mayor-heading-line1 {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 800;
          color: #1a5050;
          line-height: 1.15;
          margin: 0 0 2px 0;
          position: relative;
          z-index: 1;
        }

        /* Golden heading line 2 — "श्री. अजीव पाटील" */
        .mayor-heading-line2 {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 800;
          color: #C8922A;
          line-height: 1.15;
          margin: 0 0 28px 0;
          position: relative;
          z-index: 1;
        }

        .mayor-bio {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13.5px;
          color: #3a3a3a;
          line-height: 1.9;
          margin-bottom: 36px;
          max-width: 400px;
          position: relative;
          z-index: 1;
        }

        .mayor-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 8px;
          border: none;
          background: #028945;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all .2s;
          box-shadow: 0 4px 16px rgba(2,137,69,0.35);
          width: fit-content;
          position: relative;
          z-index: 1;
        }
        .mayor-btn-primary:hover { background:#016d38; transform:translateY(-2px); box-shadow:0 8px 22px rgba(2,137,69,0.45); }

        /* ── RIGHT PANEL: dark teal background ── */
        .mayor-right {
          flex: 1;
          background: linear-gradient(145deg, #1e7a7a 0%, #155e5e 40%, #0d4040 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px 40px 0;
        }

        /* Gold top border line on right panel */
        .mayor-right::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #C9963A 20%, #e8b84b 60%, transparent 100%);
          z-index: 4;
        }

        /* Chevron arrows — top right of right panel */
        .mayor-chevrons {
          position: absolute;
          top: 0; right: 0;
          width: 200px; height: 200px;
          pointer-events: none;
          z-index: 2;
        }

        /* Small diamond decorations */
        .mayor-diamond-tl {
          position: absolute;
          top: 18%; left: 6%;
          pointer-events: none; z-index: 2;
        }
        .mayor-diamond-mid {
          position: absolute;
          top: 48%; left: 3%;
          pointer-events: none; z-index: 2;
        }

        /* Teal circle decoration top-right corner */
        .mayor-circle-tr {
          position: absolute;
          top: -30px; right: -30px;
          width: 100px; height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(81,200,200,0.35) 0%, transparent 70%);
          pointer-events: none; z-index: 2;
        }

        /* Gold triangle — bottom right */
        .mayor-gold-tri {
          position: absolute;
          bottom: 0; right: 0;
          pointer-events: none; z-index: 2;
        }

        /* White sparkle — bottom right */
        .mayor-sparkle {
          position: absolute;
          bottom: 12%; right: 2%;
          pointer-events: none; z-index: 3;
        }

        /* Teal glow behind phone */
        .mayor-phone-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-40%, -50%);
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(81,200,200,0.18) 0%, transparent 65%);
          pointer-events: none; z-index: 1;
        }

        /* 3 bubbles column — left of phone */
        .mayor-bubbles-col {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-right: 20px;
          flex-shrink: 0;
        }

        .mayor-bubble-item {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.12);
          animation: mBob 3.5s ease-in-out infinite;
          cursor: default;
        }
        .mayor-bubble-item:nth-child(1){animation-delay:0s}
        .mayor-bubble-item:nth-child(2){animation-delay:0.75s}
        .mayor-bubble-item:nth-child(3){animation-delay:1.5s}
        @keyframes mBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        /* Phone mockup */
        .mayor-phone-wrap {
          position: relative;
          z-index: 4;
          flex-shrink: 0;
        }

        .mayor-phone {
          width: 200px;
          background: #051515;
          border-radius: 34px;
          padding: 8px;
          box-shadow:
            0 0 0 2px rgba(100,210,210,0.5),
            0 0 0 5px rgba(81,171,172,0.12),
            0 28px 70px rgba(0,0,0,0.55),
            0 6px 20px rgba(0,0,0,0.3);
          transform: rotate(-2deg);
        }

        /* Phone notch */
        .mayor-phone::before {
          content: '';
          position: absolute;
          top: 14px; left: 50%;
          transform: translateX(-50%);
          width: 44px; height: 5px;
          background: #051515;
          border-radius: 3px;
          z-index: 5;
        }

        .mayor-phone-inner {
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }

        .mayor-phone-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .mayor-phone-badge {
          padding: 10px 12px 12px;
          background: #fff;
          border-top: 1px solid #f0f0f0;
        }

        .mayor-phone-badge-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11px;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.4;
        }

        .mayor-phone-badge-title {
          font-size: 9px;
          color: #51ABAC;
          font-weight: 700;
          margin-top: 2px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        /* ══ PROJECTS ══ */
        .projects-section{padding:72px 32px;background:#fff;border-top:1px solid rgba(81,171,172,0.1);border-bottom:1px solid rgba(81,171,172,0.1)}
        .projects-inner{max-width:1060px;margin:0 auto}
        .section-header{text-align:center;margin-bottom:56px}
        .section-tag{display:inline-block;background:rgba(76,171,191,0.12);color:var(--blue);font-size:12px;font-weight:700;padding:5px 16px;border-radius:999px;margin-bottom:14px;letter-spacing:0.6px;text-transform:uppercase}
        .section-title{font-family:'Crimson Pro',serif;font-size:clamp(28px,4vw,40px);font-weight:800;color:#1a4a2e;margin-bottom:8px}
        .section-sub{color:#6b7280;font-size:15px}
        .proj-card{display:flex;border-radius:24px;overflow:hidden;box-shadow:0 12px 48px rgba(0,0,0,0.1);min-height:300px;transition:box-shadow .3s;background:#fff}
        .proj-left{flex:1;padding:44px 48px;background:transparent;display:flex;flex-direction:column;justify-content:center;border:1px solid rgba(81,171,172,0.12);border-right:none;border-radius:24px 0 0 24px;background-size:cover;background-position:top;background-repeat:no-repeat}
        .proj-tag{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;padding:4px 14px;border-radius:999px;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:16px;width:fit-content}
        .proj-title{font-family:'Tiro Devanagari Marathi',serif;font-size:clamp(17px,2.4vw,24px);font-weight:800;color:#1a1a1a;margin-bottom:14px;line-height:1.35}
        .proj-desc{font-family:'Tiro Devanagari Marathi',serif;font-size:13.5px;color:#6b7280;line-height:1.8;margin-bottom:22px;max-width:480px}
        .proj-progress-row{display:flex;justify-content:space-between;margin-bottom:6px}
        .proj-progress-lbl{font-size:12px;font-weight:600;color:#4b5563}
        .proj-progress-pct{font-size:13px;font-weight:800}
        .proj-bar{height:10px;background:#f1f5f9;border-radius:999px;overflow:hidden;margin-bottom:20px}
        .proj-bar-fill{height:100%;border-radius:999px;transition:width 0.6s ease}
        .proj-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
        .proj-meta-item{font-size:12.5px;color:#6b7280;display:flex;align-items:center;gap:5px}
        .proj-meta-item strong{color:#1a1a1a}
        .proj-chip{font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;text-transform:uppercase}
        .chip-ongoing{background:rgba(2,137,69,0.1);color:#028945}
        .chip-planning{background:rgba(208,154,80,0.15);color:#b8860b}
        .proj-right{width:220px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:32px 20px;border-radius:0 24px 24px 0;transition:background 0.5s}
        .proj-icon{font-size:64px;line-height:1;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15))}
        .proj-stat-num{font-family:'Crimson Pro',serif;font-size:38px;font-weight:800;color:#fff;text-align:center;line-height:1}
        .proj-stat-lbl{font-size:11px;color:rgba(255,255,255,0.82);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;text-align:center}
        .proj-nav{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:28px}
        .proj-btn{width:42px;height:42px;border-radius:50%;border:1.5px solid rgba(81,171,172,0.4);background:#fff;color:#51ABAC;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
        .proj-btn:hover{background:#51ABAC;color:#fff;border-color:#51ABAC;transform:scale(1.08)}
        .proj-dots{display:flex;gap:7px;align-items:center}
        .proj-dot{width:9px;height:9px;border-radius:50%;background:rgba(81,171,172,0.3);border:none;cursor:pointer;padding:0;transition:all .25s}
        .proj-dot.active{background:#51ABAC;width:26px;border-radius:5px}
        .proj-counter{font-size:12px;font-weight:600;color:#9ca3af}

        /* ══ FAQ ══ */
        .faq-section{width:100%;background:var(--teal);padding:80px 24px;position:relative;overflow:hidden}
        .faq-section::before{content:'';position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:700px;height:500px;background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%);pointer-events:none}
        .faq-inner{max-width:720px;margin:0 auto;position:relative;z-index:1}
        .faq-label{text-align:center;font-size:13px;font-weight:700;color:rgba(255,255,255,0.75);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:14px}
        .faq-title{font-family:'Crimson Pro',serif;font-size:clamp(26px,4vw,42px);font-weight:800;color:#fff;text-align:center;line-height:1.25;margin-bottom:48px}
        .faq-list{display:flex;flex-direction:column;gap:12px}
        .faq-item{background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.22);border-radius:16px;overflow:hidden;transition:all 0.25s}
        .faq-item.faq-active{background:rgba(255,255,255,0.18);border-color:rgba(255,255,255,0.5)}
        .faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;padding:20px 24px;background:none;border:none;cursor:pointer;text-align:left;gap:16px}
        .faq-q-text{font-family:'Tiro Devanagari Marathi',serif;font-size:16px;font-weight:600;color:#fff;line-height:1.5;flex:1}
        .faq-icon{flex-shrink:0;width:32px;height:32px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.55);display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px;font-weight:300;transition:transform 0.3s,background 0.3s}
        .faq-item.faq-active .faq-icon{background:#fff;color:var(--teal);transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height 0.4s ease,padding 0.3s;padding:0 24px}
        .faq-item.faq-active .faq-answer{max-height:300px;padding:0 24px 20px}
        .faq-a-text{font-family:'Tiro Devanagari Marathi',serif;font-size:14px;color:rgba(255,255,255,0.88);line-height:1.85;border-top:1px solid rgba(255,255,255,0.18);padding-top:16px}

        /* ══ NOTICE ══ */
        .notice{background:linear-gradient(135deg,#fef9c3,#fef3c7);border:1px solid #fde68a;border-radius:16px;padding:24px 28px;margin:40px auto;display:flex;gap:16px;align-items:flex-start;max-width:1036px}
        .notice-icon{font-size:28px;flex-shrink:0}
        .notice-title{font-weight:700;color:#92400e;font-size:15px;margin-bottom:6px}
        .notice-text{font-size:13px;color:#a16207;line-height:1.6}

        /* ══ CTA ══ */
        .cta{background:linear-gradient(135deg,var(--green) 0%,#014d28 100%);color:#fff;padding:72px 32px;text-align:center;position:relative;overflow:hidden}
        .cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(76,171,191,0.25) 0%,transparent 65%);pointer-events:none}
        .cta-inner{position:relative;z-index:1}
        .cta-title{font-family:'Crimson Pro',serif;font-size:clamp(28px,4vw,40px);font-weight:800;margin-bottom:12px}
        .cta-sub{color:rgba(255,255,255,0.8);font-size:16px;margin-bottom:36px}
        .cta-btn{padding:15px 48px;border-radius:14px;border:none;background:#fff;color:var(--green);font-weight:800;font-size:16px;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,0.18);transition:all .2s}
        .cta-btn:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,0,0,0.25)}

        /* ══ RESPONSIVE ══ */
        @media(max-width:1024px){
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:20px}
          .hiw-connector{display:none}
          .mayor-phone{width:175px}
          .mayor-phone-img{height:220px}
          .mayor-bubble-item{width:52px;height:52px}
          .mayor-left{padding:48px 36px 48px 40px}
        }
        @media(max-width:768px){
          .hero{min-height:calc(100svh - 64px);padding:60px 20px 56px}
          .hero-float.f1,.hero-float.f2{left:3%}
          .hero-float.f3,.hero-float.f4{right:3%}
          .hero-float.f1,.hero-float.f3{width:40px;height:40px;font-size:15px}
          .hero-float.f2,.hero-float.f4{width:36px;height:36px;font-size:13px}
          .hiw-section{padding:52px 16px 60px}
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:16px}
          .hiw-card{padding:28px 16px 22px}
          .hiw-icon-wrap{width:60px;height:60px}

          /* Mayor stacks vertically on tablet */
          .mayor-section{flex-direction:column}
          .mayor-left{flex:0 0 auto;width:100%;padding:44px 28px}
          .mayor-right{flex:0 0 auto;width:100%;min-height:420px;padding:40px 20px}
          .mayor-bubbles-col{flex-direction:row;gap:14px;margin-right:0;margin-bottom:20px}
          .mayor-right{flex-direction:column;align-items:center;justify-content:center;gap:0}

          .proj-card{flex-direction:column}
          .proj-left{border-radius:24px 24px 0 0;border-right:1px solid rgba(81,171,172,0.12);border-bottom:none;padding:28px 24px}
          .proj-right{width:100%;border-radius:0 0 24px 24px;flex-direction:row;justify-content:center;gap:24px;padding:20px 24px}
          .notice{margin:24px 16px}
          .faq-section{padding:60px 16px}
        }
        @media(max-width:480px){
          .hero{padding:48px 16px 48px}
          .hero-btns{flex-direction:column;align-items:center}
          .hero-btn-primary,.hero-btn-outline{width:100%;max-width:300px;text-align:center}
          .hiw-section{padding:44px 14px 52px}
          .hiw-grid{grid-template-columns:1fr;gap:14px}
          .hiw-connector{display:none}
          .hiw-title{font-size:26px}
          .mayor-left{padding:36px 20px}
          .mayor-heading-line1,.mayor-heading-line2{font-size:clamp(26px,7.5vw,40px)}
          .mayor-phone{width:155px;transform:none}
          .mayor-phone-img{height:190px}
          .mayor-btn-primary{width:100%;justify-content:center}
          .proj-right{flex-direction:column;gap:12px}
          .proj-stat-num{font-size:28px}
          .faq-q-text{font-size:14px}
        }
        @media(max-width:360px){
          .hero-jansanwad{font-size:40px}
          .hero-float{display:none}
          .mayor-bubble-item{width:44px;height:44px}
        }
      `}),c.jsxs("div",{className:"home-root",children:[c.jsxs("div",{className:"hero",children:[c.jsxs("div",{className:"hero-orbit","aria-hidden":"true",children:[c.jsx("div",{className:"hero-float f1",children:"📅"}),c.jsx("div",{className:"hero-float f2",children:"👥"}),c.jsx("div",{className:"hero-float f3",children:"📅"}),c.jsx("div",{className:"hero-float f4",children:"👤"})]}),c.jsx("h1",{className:"hero-jansanwad",children:"जन संवाद"}),c.jsx("div",{className:"hero-title-underline"}),c.jsx("p",{className:"hero-desc",children:"नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"}),c.jsx("div",{className:"hero-btns",children:i?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"hero-btn-primary",onClick:()=>l("/book-appointment"),children:"📅 Book Appointment"}),c.jsx("button",{className:"hero-btn-outline",onClick:()=>l("/my-appointments"),children:"📋 My Appointments"})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"hero-btn-primary",onClick:()=>l("/register"),children:"🚀 Get Started — Register"}),c.jsx("button",{className:"hero-btn-outline",onClick:()=>l("/login"),children:"Login करा"})]})})]}),c.jsx("div",{className:"hiw-section",children:c.jsxs("div",{className:"hiw-inner",children:[c.jsxs("div",{className:"hiw-header",children:[c.jsx("h2",{className:"hiw-title",children:"कसे काम करते?"}),c.jsx("div",{className:"hiw-title-bar"}),c.jsx("p",{className:"hiw-sub",children:"फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा"})]}),c.jsxs("div",{className:"hiw-grid-wrap",children:[c.jsx("div",{className:"hiw-connector","aria-hidden":"true"}),c.jsx("div",{className:"hiw-grid",children:g.map((S,D)=>c.jsxs("div",{className:"hiw-card",children:[c.jsx("div",{className:"hiw-num",children:D+1}),c.jsx("div",{className:"hiw-icon-wrap",children:c.jsx($u,{src:S.lottie,style:{width:44,height:44}})}),c.jsx("div",{className:"hiw-step-title",children:S.title}),c.jsx("div",{className:"hiw-step-desc",children:S.desc})]},D))})]})]})}),c.jsxs("div",{className:"mayor-section",children:[c.jsxs("div",{className:"mayor-left",children:[c.jsx("p",{className:"mayor-heading-line1",children:"मा. महापौर"}),c.jsx("p",{className:"mayor-heading-line2",children:"श्री. अजीव पाटील"}),c.jsx("p",{className:"mayor-bio",children:"३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."}),c.jsx("button",{className:"mayor-btn-primary",onClick:()=>l(i?"/book-appointment":"/register"),children:"📅 Appointment बुक करा"})]}),c.jsxs("div",{className:"mayor-right",children:[c.jsx("div",{className:"mayor-chevrons","aria-hidden":"true",children:c.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",children:[c.jsxs("g",{opacity:"0.2",stroke:"#7edede",strokeWidth:"1.4",fill:"none",children:[c.jsx("polyline",{points:"160,8 178,26 160,44"}),c.jsx("polyline",{points:"142,8 160,26 142,44"}),c.jsx("polyline",{points:"124,8 142,26 124,44"}),c.jsx("polyline",{points:"160,44 178,62 160,80"}),c.jsx("polyline",{points:"142,44 160,62 142,80"}),c.jsx("polyline",{points:"124,44 142,62 124,80"}),c.jsx("polyline",{points:"168,80 186,98 168,116"}),c.jsx("polyline",{points:"150,80 168,98 150,116"}),c.jsx("polyline",{points:"168,116 186,134 168,152"}),c.jsx("polyline",{points:"150,116 168,134 150,152"})]}),c.jsx("circle",{cx:"182",cy:"18",r:"16",fill:"rgba(81,200,200,0.3)",stroke:"rgba(81,200,200,0.4)",strokeWidth:"1"}),c.jsx("rect",{x:"108",y:"4",width:"10",height:"10",rx:"1",transform:"rotate(45 113 9)",fill:"#7edede",opacity:"0.3"})]})}),c.jsx("div",{className:"mayor-diamond-tl","aria-hidden":"true",children:c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:c.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",transform:"rotate(45 8 8)",fill:"#7edede",opacity:"0.45"})})}),c.jsx("div",{className:"mayor-diamond-mid","aria-hidden":"true",children:c.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:c.jsx("rect",{x:"1.5",y:"1.5",width:"9",height:"9",rx:"1",transform:"rotate(45 6 6)",fill:"#c9a040",opacity:"0.4"})})}),c.jsx("div",{className:"mayor-gold-tri","aria-hidden":"true",children:c.jsxs("svg",{width:"160",height:"110",viewBox:"0 0 160 110",fill:"none",children:[c.jsx("polygon",{points:"160,110 160,0 50,110",fill:"#C9963A",opacity:"0.25"}),c.jsx("polygon",{points:"160,110 160,40 95,110",fill:"#e8b84b",opacity:"0.18"})]})}),c.jsx("div",{className:"mayor-sparkle","aria-hidden":"true",children:c.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:c.jsx("path",{d:"M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z",fill:"white",opacity:"0.7"})})}),c.jsx("div",{className:"mayor-phone-glow","aria-hidden":"true"}),c.jsxs("div",{className:"mayor-bubbles-col",children:[c.jsx("div",{className:"mayor-bubble-item",children:c.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[c.jsx("rect",{x:"4",y:"4",width:"18",height:"13",rx:"3",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),c.jsx("path",{d:"M8 20 L8 17",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",strokeLinecap:"round"}),c.jsx("path",{d:"M7 7h12M7 10h8M7 13h10",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",strokeLinecap:"round"}),c.jsx("circle",{cx:"19",cy:"6",r:"4",fill:"#028945",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),c.jsx("path",{d:"M17 6h4M19 4v4",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})}),c.jsx("div",{className:"mayor-bubble-item",children:c.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[c.jsx("polyline",{points:"5,19 10,12 15,15 21,7",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),c.jsx("polyline",{points:"17,7 21,7 21,11",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),c.jsx("line",{x1:"5",y1:"21",x2:"21",y2:"21",stroke:"rgba(255,255,255,0.45)",strokeWidth:"1.2",strokeLinecap:"round"})]})}),c.jsx("div",{className:"mayor-bubble-item",children:c.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[c.jsx("circle",{cx:"13",cy:"8",r:"3.2",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),c.jsx("path",{d:"M7 21 C7 16.5 19 16.5 19 21",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"6.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),c.jsx("path",{d:"M3 20 C3 16.8 10 16.8 10 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),c.jsx("circle",{cx:"19.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),c.jsx("path",{d:"M16 20 C16 16.8 23 16.8 23 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),c.jsx("path",{d:"M10 22.5 Q13 25 16 22.5",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1",strokeLinecap:"round",fill:"none"})]})})]}),c.jsx("div",{className:"mayor-phone-wrap",children:c.jsx("div",{className:"mayor-phone",children:c.jsxs("div",{className:"mayor-phone-inner",children:[c.jsx("img",{src:ny,alt:"मा. महापौर श्री. अजीव पाटील",className:"mayor-phone-img"}),c.jsxs("div",{className:"mayor-phone-badge",children:[c.jsx("div",{className:"mayor-phone-badge-name",children:"मा. महापौर श्री. अजीव पाटील"}),c.jsx("div",{className:"mayor-phone-badge-title",children:"वसई-विरार शहर महानगरपालिका"})]})]})})})]})]}),c.jsx("div",{className:"projects-section",children:c.jsxs("div",{className:"projects-inner",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("div",{className:"section-tag",children:"✦ सध्या सुरू"}),c.jsx("h2",{className:"section-title",children:"चालू प्रकल्प"}),c.jsx("p",{className:"section-sub",children:"वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"})]}),c.jsxs("div",{className:"proj-card",onMouseEnter:()=>x(!1),onMouseLeave:()=>x(!0),style:y.bgimg?{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${y.accent}99 100%), url(${y.bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[c.jsxs("div",{className:"proj-left",style:{background:"transparent",border:y.bgimg?"none":"1px solid rgba(81,171,172,0.12)",borderRight:"none"},children:[c.jsxs("div",{className:"proj-tag",style:{background:`${y.accent}18`,color:y.accent},children:[y.icon," ",y.tag]}),c.jsx("div",{className:"proj-title",children:y.title}),c.jsx("p",{className:"proj-desc",children:y.desc}),c.jsxs("div",{className:"proj-progress-row",children:[c.jsx("span",{className:"proj-progress-lbl",children:"प्रगती"}),c.jsxs("span",{className:"proj-progress-pct",style:{color:y.accent},children:[y.progress,"%"]})]}),c.jsx("div",{className:"proj-bar",children:c.jsx("div",{className:"proj-bar-fill",style:{width:`${y.progress}%`,background:`linear-gradient(90deg,${y.accent}88,${y.accent})`}})}),c.jsxs("div",{className:"proj-meta",children:[c.jsxs("div",{className:"proj-meta-item",children:["💰 ",c.jsx("strong",{children:y.budget})]}),c.jsxs("div",{className:"proj-meta-item",children:["📅 ",c.jsx("strong",{children:y.deadline})]}),c.jsx("span",{className:`proj-chip ${y.status==="ongoing"?"chip-ongoing":"chip-planning"}`,children:y.statusLabel})]})]}),c.jsxs("div",{className:"proj-right",style:{background:`linear-gradient(160deg,${y.accent},${y.accent}bb)`},children:[c.jsx("div",{className:"proj-icon",children:y.icon}),c.jsxs("div",{children:[c.jsx("div",{className:"proj-stat-num",children:y.stat}),c.jsx("div",{className:"proj-stat-lbl",children:y.statLbl})]})]})]}),c.jsxs("div",{className:"proj-nav",children:[c.jsx("button",{className:"proj-btn",onClick:()=>{x(!1),d(S=>(S-1+b.length)%b.length)},children:"‹"}),c.jsx("div",{className:"proj-dots",children:b.map((S,D)=>c.jsx("button",{className:`proj-dot${f===D?" active":""}`,onClick:()=>{x(!1),d(D)}},D))}),c.jsxs("span",{className:"proj-counter",children:[f+1," / ",b.length]}),c.jsx("button",{className:"proj-btn",onClick:()=>{x(!1),d(S=>(S+1)%b.length)},children:"›"})]})]})}),c.jsxs("div",{className:"notice",children:[c.jsx("span",{className:"notice-icon",children:"⚠️"}),c.jsxs("div",{children:[c.jsx("div",{className:"notice-title",children:"महत्त्वाची सूचना"}),c.jsx("div",{className:"notice-text",children:"भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."})]})]}),c.jsxs("div",{className:"cta",children:[c.jsx($u,{src:"https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",style:{position:"absolute",left:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}}),c.jsx($u,{src:"https://assets9.lottiefiles.com/packages/lf20_touohxv0.json",style:{position:"absolute",right:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}})]})]})]})}function lg(l,i){return function(){return l.apply(i,arguments)}}const{toString:ry}=Object.prototype,{getPrototypeOf:Cc}=Object,{iterator:co,toStringTag:ig}=Symbol,fo=(l=>i=>{const u=ry.call(i);return l[u]||(l[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),Xt=l=>(l=l.toLowerCase(),i=>fo(i)===l),po=l=>i=>typeof i===l,{isArray:ul}=Array,ll=po("undefined");function mi(l){return l!==null&&!ll(l)&&l.constructor!==null&&!ll(l.constructor)&&ht(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const rg=Xt("ArrayBuffer");function oy(l){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(l):i=l&&l.buffer&&rg(l.buffer),i}const sy=po("string"),ht=po("function"),og=po("number"),gi=l=>l!==null&&typeof l=="object",uy=l=>l===!0||l===!1,Zr=l=>{if(fo(l)!=="object")return!1;const i=Cc(l);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(ig in l)&&!(co in l)},cy=l=>{if(!gi(l)||mi(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},fy=Xt("Date"),dy=Xt("File"),py=Xt("Blob"),hy=Xt("FileList"),my=l=>gi(l)&&ht(l.pipe),gy=l=>{let i;return l&&(typeof FormData=="function"&&l instanceof FormData||ht(l.append)&&((i=fo(l))==="formdata"||i==="object"&&ht(l.toString)&&l.toString()==="[object FormData]"))},by=Xt("URLSearchParams"),[xy,yy,vy,Sy]=["ReadableStream","Request","Response","Headers"].map(Xt),wy=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bi(l,i,{allOwnKeys:u=!1}={}){if(l===null||typeof l>"u")return;let s,f;if(typeof l!="object"&&(l=[l]),ul(l))for(s=0,f=l.length;s<f;s++)i.call(null,l[s],s,l);else{if(mi(l))return;const d=u?Object.getOwnPropertyNames(l):Object.keys(l),h=d.length;let x;for(s=0;s<h;s++)x=d[s],i.call(null,l[x],x,l)}}function sg(l,i){if(mi(l))return null;i=i.toLowerCase();const u=Object.keys(l);let s=u.length,f;for(;s-- >0;)if(f=u[s],i===f.toLowerCase())return f;return null}const ha=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ug=l=>!ll(l)&&l!==ha;function sc(){const{caseless:l,skipUndefined:i}=ug(this)&&this||{},u={},s=(f,d)=>{const h=l&&sg(u,d)||d;Zr(u[h])&&Zr(f)?u[h]=sc(u[h],f):Zr(f)?u[h]=sc({},f):ul(f)?u[h]=f.slice():(!i||!ll(f))&&(u[h]=f)};for(let f=0,d=arguments.length;f<d;f++)arguments[f]&&bi(arguments[f],s);return u}const jy=(l,i,u,{allOwnKeys:s}={})=>(bi(i,(f,d)=>{u&&ht(f)?l[d]=lg(f,u):l[d]=f},{allOwnKeys:s}),l),Ny=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),Ey=(l,i,u,s)=>{l.prototype=Object.create(i.prototype,s),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:i.prototype}),u&&Object.assign(l.prototype,u)},zy=(l,i,u,s)=>{let f,d,h;const x={};if(i=i||{},l==null)return i;do{for(f=Object.getOwnPropertyNames(l),d=f.length;d-- >0;)h=f[d],(!s||s(h,l,i))&&!x[h]&&(i[h]=l[h],x[h]=!0);l=u!==!1&&Cc(l)}while(l&&(!u||u(l,i))&&l!==Object.prototype);return i},Ty=(l,i,u)=>{l=String(l),(u===void 0||u>l.length)&&(u=l.length),u-=i.length;const s=l.indexOf(i,u);return s!==-1&&s===u},Cy=l=>{if(!l)return null;if(ul(l))return l;let i=l.length;if(!og(i))return null;const u=new Array(i);for(;i-- >0;)u[i]=l[i];return u},Ay=(l=>i=>l&&i instanceof l)(typeof Uint8Array<"u"&&Cc(Uint8Array)),Ry=(l,i)=>{const s=(l&&l[co]).call(l);let f;for(;(f=s.next())&&!f.done;){const d=f.value;i.call(l,d[0],d[1])}},_y=(l,i)=>{let u;const s=[];for(;(u=l.exec(i))!==null;)s.push(u);return s},Oy=Xt("HTMLFormElement"),Dy=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,s,f){return s.toUpperCase()+f}),em=(({hasOwnProperty:l})=>(i,u)=>l.call(i,u))(Object.prototype),My=Xt("RegExp"),cg=(l,i)=>{const u=Object.getOwnPropertyDescriptors(l),s={};bi(u,(f,d)=>{let h;(h=i(f,d,l))!==!1&&(s[d]=h||f)}),Object.defineProperties(l,s)},ky=l=>{cg(l,(i,u)=>{if(ht(l)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const s=l[u];if(ht(s)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},Uy=(l,i)=>{const u={},s=f=>{f.forEach(d=>{u[d]=!0})};return ul(l)?s(l):s(String(l).split(i)),u},By=()=>{},Ly=(l,i)=>l!=null&&Number.isFinite(l=+l)?l:i;function Hy(l){return!!(l&&ht(l.append)&&l[ig]==="FormData"&&l[co])}const qy=l=>{const i=new Array(10),u=(s,f)=>{if(gi(s)){if(i.indexOf(s)>=0)return;if(mi(s))return s;if(!("toJSON"in s)){i[f]=s;const d=ul(s)?[]:{};return bi(s,(h,x)=>{const b=u(h,f+1);!ll(b)&&(d[x]=b)}),i[f]=void 0,d}}return s};return u(l,0)},Yy=Xt("AsyncFunction"),Vy=l=>l&&(gi(l)||ht(l))&&ht(l.then)&&ht(l.catch),fg=((l,i)=>l?setImmediate:i?((u,s)=>(ha.addEventListener("message",({source:f,data:d})=>{f===ha&&d===u&&s.length&&s.shift()()},!1),f=>{s.push(f),ha.postMessage(u,"*")}))(`axios@${Math.random()}`,[]):u=>setTimeout(u))(typeof setImmediate=="function",ht(ha.postMessage)),Gy=typeof queueMicrotask<"u"?queueMicrotask.bind(ha):typeof process<"u"&&process.nextTick||fg,Xy=l=>l!=null&&ht(l[co]),M={isArray:ul,isArrayBuffer:rg,isBuffer:mi,isFormData:gy,isArrayBufferView:oy,isString:sy,isNumber:og,isBoolean:uy,isObject:gi,isPlainObject:Zr,isEmptyObject:cy,isReadableStream:xy,isRequest:yy,isResponse:vy,isHeaders:Sy,isUndefined:ll,isDate:fy,isFile:dy,isBlob:py,isRegExp:My,isFunction:ht,isStream:my,isURLSearchParams:by,isTypedArray:Ay,isFileList:hy,forEach:bi,merge:sc,extend:jy,trim:wy,stripBOM:Ny,inherits:Ey,toFlatObject:zy,kindOf:fo,kindOfTest:Xt,endsWith:Ty,toArray:Cy,forEachEntry:Ry,matchAll:_y,isHTMLForm:Oy,hasOwnProperty:em,hasOwnProp:em,reduceDescriptors:cg,freezeMethods:ky,toObjectSet:Uy,toCamelCase:Dy,noop:By,toFiniteNumber:Ly,findKey:sg,global:ha,isContextDefined:ug,isSpecCompliantForm:Hy,toJSONObject:qy,isAsyncFn:Yy,isThenable:Vy,setImmediate:fg,asap:Gy,isIterable:Xy};function ue(l,i,u,s,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",i&&(this.code=i),u&&(this.config=u),s&&(this.request=s),f&&(this.response=f,this.status=f.status?f.status:null)}M.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.status}}});const dg=ue.prototype,pg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{pg[l]={value:l}});Object.defineProperties(ue,pg);Object.defineProperty(dg,"isAxiosError",{value:!0});ue.from=(l,i,u,s,f,d)=>{const h=Object.create(dg);M.toFlatObject(l,h,function(y){return y!==Error.prototype},g=>g!=="isAxiosError");const x=l&&l.message?l.message:"Error",b=i==null&&l?l.code:i;return ue.call(h,x,b,u,s,f),l&&h.cause==null&&Object.defineProperty(h,"cause",{value:l,configurable:!0}),h.name=l&&l.name||"Error",d&&Object.assign(h,d),h};const Qy=null;function uc(l){return M.isPlainObject(l)||M.isArray(l)}function hg(l){return M.endsWith(l,"[]")?l.slice(0,-2):l}function tm(l,i,u){return l?l.concat(i).map(function(f,d){return f=hg(f),!u&&d?"["+f+"]":f}).join(u?".":""):i}function Zy(l){return M.isArray(l)&&!l.some(uc)}const Jy=M.toFlatObject(M,{},null,function(i){return/^is[A-Z]/.test(i)});function ho(l,i,u){if(!M.isObject(l))throw new TypeError("target must be an object");i=i||new FormData,u=M.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,T){return!M.isUndefined(T[N])});const s=u.metaTokens,f=u.visitor||y,d=u.dots,h=u.indexes,b=(u.Blob||typeof Blob<"u"&&Blob)&&M.isSpecCompliantForm(i);if(!M.isFunction(f))throw new TypeError("visitor must be a function");function g(C){if(C===null)return"";if(M.isDate(C))return C.toISOString();if(M.isBoolean(C))return C.toString();if(!b&&M.isBlob(C))throw new ue("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(C)||M.isTypedArray(C)?b&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function y(C,N,T){let V=C;if(C&&!T&&typeof C=="object"){if(M.endsWith(N,"{}"))N=s?N:N.slice(0,-2),C=JSON.stringify(C);else if(M.isArray(C)&&Zy(C)||(M.isFileList(C)||M.endsWith(N,"[]"))&&(V=M.toArray(C)))return N=hg(N),V.forEach(function(G,F){!(M.isUndefined(G)||G===null)&&i.append(h===!0?tm([N],F,d):h===null?N:N+"[]",g(G))}),!1}return uc(C)?!0:(i.append(tm(T,N,d),g(C)),!1)}const S=[],D=Object.assign(Jy,{defaultVisitor:y,convertValue:g,isVisitable:uc});function q(C,N){if(!M.isUndefined(C)){if(S.indexOf(C)!==-1)throw Error("Circular reference detected in "+N.join("."));S.push(C),M.forEach(C,function(V,X){(!(M.isUndefined(V)||V===null)&&f.call(i,V,M.isString(X)?X.trim():X,N,D))===!0&&q(V,N?N.concat(X):[X])}),S.pop()}}if(!M.isObject(l))throw new TypeError("data must be an object");return q(l),i}function nm(l){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(s){return i[s]})}function Ac(l,i){this._pairs=[],l&&ho(l,this,i)}const mg=Ac.prototype;mg.append=function(i,u){this._pairs.push([i,u])};mg.toString=function(i){const u=i?function(s){return i.call(this,s,nm)}:nm;return this._pairs.map(function(f){return u(f[0])+"="+u(f[1])},"").join("&")};function Ky(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function gg(l,i,u){if(!i)return l;const s=u&&u.encode||Ky;M.isFunction(u)&&(u={serialize:u});const f=u&&u.serialize;let d;if(f?d=f(i,u):d=M.isURLSearchParams(i)?i.toString():new Ac(i,u).toString(s),d){const h=l.indexOf("#");h!==-1&&(l=l.slice(0,h)),l+=(l.indexOf("?")===-1?"?":"&")+d}return l}class am{constructor(){this.handlers=[]}use(i,u,s){return this.handlers.push({fulfilled:i,rejected:u,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){M.forEach(this.handlers,function(s){s!==null&&i(s)})}}const bg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Fy=typeof URLSearchParams<"u"?URLSearchParams:Ac,$y=typeof FormData<"u"?FormData:null,Wy=typeof Blob<"u"?Blob:null,Py={isBrowser:!0,classes:{URLSearchParams:Fy,FormData:$y,Blob:Wy},protocols:["http","https","file","blob","url","data"]},Rc=typeof window<"u"&&typeof document<"u",cc=typeof navigator=="object"&&navigator||void 0,Iy=Rc&&(!cc||["ReactNative","NativeScript","NS"].indexOf(cc.product)<0),ev=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tv=Rc&&window.location.href||"http://localhost",nv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rc,hasStandardBrowserEnv:Iy,hasStandardBrowserWebWorkerEnv:ev,navigator:cc,origin:tv},Symbol.toStringTag,{value:"Module"})),at={...nv,...Py};function av(l,i){return ho(l,new at.classes.URLSearchParams,{visitor:function(u,s,f,d){return at.isNode&&M.isBuffer(u)?(this.append(s,u.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...i})}function lv(l){return M.matchAll(/\w+|\[(\w*)]/g,l).map(i=>i[0]==="[]"?"":i[1]||i[0])}function iv(l){const i={},u=Object.keys(l);let s;const f=u.length;let d;for(s=0;s<f;s++)d=u[s],i[d]=l[d];return i}function xg(l){function i(u,s,f,d){let h=u[d++];if(h==="__proto__")return!0;const x=Number.isFinite(+h),b=d>=u.length;return h=!h&&M.isArray(f)?f.length:h,b?(M.hasOwnProp(f,h)?f[h]=[f[h],s]:f[h]=s,!x):((!f[h]||!M.isObject(f[h]))&&(f[h]=[]),i(u,s,f[h],d)&&M.isArray(f[h])&&(f[h]=iv(f[h])),!x)}if(M.isFormData(l)&&M.isFunction(l.entries)){const u={};return M.forEachEntry(l,(s,f)=>{i(lv(s),f,u,0)}),u}return null}function rv(l,i,u){if(M.isString(l))try{return(i||JSON.parse)(l),M.trim(l)}catch(s){if(s.name!=="SyntaxError")throw s}return(u||JSON.stringify)(l)}const xi={transitional:bg,adapter:["xhr","http","fetch"],transformRequest:[function(i,u){const s=u.getContentType()||"",f=s.indexOf("application/json")>-1,d=M.isObject(i);if(d&&M.isHTMLForm(i)&&(i=new FormData(i)),M.isFormData(i))return f?JSON.stringify(xg(i)):i;if(M.isArrayBuffer(i)||M.isBuffer(i)||M.isStream(i)||M.isFile(i)||M.isBlob(i)||M.isReadableStream(i))return i;if(M.isArrayBufferView(i))return i.buffer;if(M.isURLSearchParams(i))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let x;if(d){if(s.indexOf("application/x-www-form-urlencoded")>-1)return av(i,this.formSerializer).toString();if((x=M.isFileList(i))||s.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return ho(x?{"files[]":i}:i,b&&new b,this.formSerializer)}}return d||f?(u.setContentType("application/json",!1),rv(i)):i}],transformResponse:[function(i){const u=this.transitional||xi.transitional,s=u&&u.forcedJSONParsing,f=this.responseType==="json";if(M.isResponse(i)||M.isReadableStream(i))return i;if(i&&M.isString(i)&&(s&&!this.responseType||f)){const h=!(u&&u.silentJSONParsing)&&f;try{return JSON.parse(i,this.parseReviver)}catch(x){if(h)throw x.name==="SyntaxError"?ue.from(x,ue.ERR_BAD_RESPONSE,this,null,this.response):x}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:at.classes.FormData,Blob:at.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],l=>{xi.headers[l]={}});const ov=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sv=l=>{const i={};let u,s,f;return l&&l.split(`
`).forEach(function(h){f=h.indexOf(":"),u=h.substring(0,f).trim().toLowerCase(),s=h.substring(f+1).trim(),!(!u||i[u]&&ov[u])&&(u==="set-cookie"?i[u]?i[u].push(s):i[u]=[s]:i[u]=i[u]?i[u]+", "+s:s)}),i},lm=Symbol("internals");function oi(l){return l&&String(l).trim().toLowerCase()}function Jr(l){return l===!1||l==null?l:M.isArray(l)?l.map(Jr):String(l)}function uv(l){const i=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=u.exec(l);)i[s[1]]=s[2];return i}const cv=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function Wu(l,i,u,s,f){if(M.isFunction(s))return s.call(this,i,u);if(f&&(i=u),!!M.isString(i)){if(M.isString(s))return i.indexOf(s)!==-1;if(M.isRegExp(s))return s.test(i)}}function fv(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,u,s)=>u.toUpperCase()+s)}function dv(l,i){const u=M.toCamelCase(" "+i);["get","set","has"].forEach(s=>{Object.defineProperty(l,s+u,{value:function(f,d,h){return this[s].call(this,i,f,d,h)},configurable:!0})})}let mt=class{constructor(i){i&&this.set(i)}set(i,u,s){const f=this;function d(x,b,g){const y=oi(b);if(!y)throw new Error("header name must be a non-empty string");const S=M.findKey(f,y);(!S||f[S]===void 0||g===!0||g===void 0&&f[S]!==!1)&&(f[S||b]=Jr(x))}const h=(x,b)=>M.forEach(x,(g,y)=>d(g,y,b));if(M.isPlainObject(i)||i instanceof this.constructor)h(i,u);else if(M.isString(i)&&(i=i.trim())&&!cv(i))h(sv(i),u);else if(M.isObject(i)&&M.isIterable(i)){let x={},b,g;for(const y of i){if(!M.isArray(y))throw TypeError("Object iterator must return a key-value pair");x[g=y[0]]=(b=x[g])?M.isArray(b)?[...b,y[1]]:[b,y[1]]:y[1]}h(x,u)}else i!=null&&d(u,i,s);return this}get(i,u){if(i=oi(i),i){const s=M.findKey(this,i);if(s){const f=this[s];if(!u)return f;if(u===!0)return uv(f);if(M.isFunction(u))return u.call(this,f,s);if(M.isRegExp(u))return u.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,u){if(i=oi(i),i){const s=M.findKey(this,i);return!!(s&&this[s]!==void 0&&(!u||Wu(this,this[s],s,u)))}return!1}delete(i,u){const s=this;let f=!1;function d(h){if(h=oi(h),h){const x=M.findKey(s,h);x&&(!u||Wu(s,s[x],x,u))&&(delete s[x],f=!0)}}return M.isArray(i)?i.forEach(d):d(i),f}clear(i){const u=Object.keys(this);let s=u.length,f=!1;for(;s--;){const d=u[s];(!i||Wu(this,this[d],d,i,!0))&&(delete this[d],f=!0)}return f}normalize(i){const u=this,s={};return M.forEach(this,(f,d)=>{const h=M.findKey(s,d);if(h){u[h]=Jr(f),delete u[d];return}const x=i?fv(d):String(d).trim();x!==d&&delete u[d],u[x]=Jr(f),s[x]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const u=Object.create(null);return M.forEach(this,(s,f)=>{s!=null&&s!==!1&&(u[f]=i&&M.isArray(s)?s.join(", "):s)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,u])=>i+": "+u).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...u){const s=new this(i);return u.forEach(f=>s.set(f)),s}static accessor(i){const s=(this[lm]=this[lm]={accessors:{}}).accessors,f=this.prototype;function d(h){const x=oi(h);s[x]||(dv(f,h),s[x]=!0)}return M.isArray(i)?i.forEach(d):d(i),this}};mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);M.reduceDescriptors(mt.prototype,({value:l},i)=>{let u=i[0].toUpperCase()+i.slice(1);return{get:()=>l,set(s){this[u]=s}}});M.freezeMethods(mt);function Pu(l,i){const u=this||xi,s=i||u,f=mt.from(s.headers);let d=s.data;return M.forEach(l,function(x){d=x.call(u,d,f.normalize(),i?i.status:void 0)}),f.normalize(),d}function yg(l){return!!(l&&l.__CANCEL__)}function cl(l,i,u){ue.call(this,l??"canceled",ue.ERR_CANCELED,i,u),this.name="CanceledError"}M.inherits(cl,ue,{__CANCEL__:!0});function vg(l,i,u){const s=u.config.validateStatus;!u.status||!s||s(u.status)?l(u):i(new ue("Request failed with status code "+u.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}function pv(l){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return i&&i[1]||""}function hv(l,i){l=l||10;const u=new Array(l),s=new Array(l);let f=0,d=0,h;return i=i!==void 0?i:1e3,function(b){const g=Date.now(),y=s[d];h||(h=g),u[f]=b,s[f]=g;let S=d,D=0;for(;S!==f;)D+=u[S++],S=S%l;if(f=(f+1)%l,f===d&&(d=(d+1)%l),g-h<i)return;const q=y&&g-y;return q?Math.round(D*1e3/q):void 0}}function mv(l,i){let u=0,s=1e3/i,f,d;const h=(g,y=Date.now())=>{u=y,f=null,d&&(clearTimeout(d),d=null),l(...g)};return[(...g)=>{const y=Date.now(),S=y-u;S>=s?h(g,y):(f=g,d||(d=setTimeout(()=>{d=null,h(f)},s-S)))},()=>f&&h(f)]}const Pr=(l,i,u=3)=>{let s=0;const f=hv(50,250);return mv(d=>{const h=d.loaded,x=d.lengthComputable?d.total:void 0,b=h-s,g=f(b),y=h<=x;s=h;const S={loaded:h,total:x,progress:x?h/x:void 0,bytes:b,rate:g||void 0,estimated:g&&x&&y?(x-h)/g:void 0,event:d,lengthComputable:x!=null,[i?"download":"upload"]:!0};l(S)},u)},im=(l,i)=>{const u=l!=null;return[s=>i[0]({lengthComputable:u,total:l,loaded:s}),i[1]]},rm=l=>(...i)=>M.asap(()=>l(...i)),gv=at.hasStandardBrowserEnv?((l,i)=>u=>(u=new URL(u,at.origin),l.protocol===u.protocol&&l.host===u.host&&(i||l.port===u.port)))(new URL(at.origin),at.navigator&&/(msie|trident)/i.test(at.navigator.userAgent)):()=>!0,bv=at.hasStandardBrowserEnv?{write(l,i,u,s,f,d,h){if(typeof document>"u")return;const x=[`${l}=${encodeURIComponent(i)}`];M.isNumber(u)&&x.push(`expires=${new Date(u).toUTCString()}`),M.isString(s)&&x.push(`path=${s}`),M.isString(f)&&x.push(`domain=${f}`),d===!0&&x.push("secure"),M.isString(h)&&x.push(`SameSite=${h}`),document.cookie=x.join("; ")},read(l){if(typeof document>"u")return null;const i=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return i?decodeURIComponent(i[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function xv(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function yv(l,i){return i?l.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):l}function Sg(l,i,u){let s=!xv(i);return l&&(s||u==!1)?yv(l,i):i}const om=l=>l instanceof mt?{...l}:l;function ga(l,i){i=i||{};const u={};function s(g,y,S,D){return M.isPlainObject(g)&&M.isPlainObject(y)?M.merge.call({caseless:D},g,y):M.isPlainObject(y)?M.merge({},y):M.isArray(y)?y.slice():y}function f(g,y,S,D){if(M.isUndefined(y)){if(!M.isUndefined(g))return s(void 0,g,S,D)}else return s(g,y,S,D)}function d(g,y){if(!M.isUndefined(y))return s(void 0,y)}function h(g,y){if(M.isUndefined(y)){if(!M.isUndefined(g))return s(void 0,g)}else return s(void 0,y)}function x(g,y,S){if(S in i)return s(g,y);if(S in l)return s(void 0,g)}const b={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:x,headers:(g,y,S)=>f(om(g),om(y),S,!0)};return M.forEach(Object.keys({...l,...i}),function(y){const S=b[y]||f,D=S(l[y],i[y],y);M.isUndefined(D)&&S!==x||(u[y]=D)}),u}const wg=l=>{const i=ga({},l);let{data:u,withXSRFToken:s,xsrfHeaderName:f,xsrfCookieName:d,headers:h,auth:x}=i;if(i.headers=h=mt.from(h),i.url=gg(Sg(i.baseURL,i.url,i.allowAbsoluteUrls),l.params,l.paramsSerializer),x&&h.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),M.isFormData(u)){if(at.hasStandardBrowserEnv||at.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(M.isFunction(u.getHeaders)){const b=u.getHeaders(),g=["content-type","content-length"];Object.entries(b).forEach(([y,S])=>{g.includes(y.toLowerCase())&&h.set(y,S)})}}if(at.hasStandardBrowserEnv&&(s&&M.isFunction(s)&&(s=s(i)),s||s!==!1&&gv(i.url))){const b=f&&d&&bv.read(d);b&&h.set(f,b)}return i},vv=typeof XMLHttpRequest<"u",Sv=vv&&function(l){return new Promise(function(u,s){const f=wg(l);let d=f.data;const h=mt.from(f.headers).normalize();let{responseType:x,onUploadProgress:b,onDownloadProgress:g}=f,y,S,D,q,C;function N(){q&&q(),C&&C(),f.cancelToken&&f.cancelToken.unsubscribe(y),f.signal&&f.signal.removeEventListener("abort",y)}let T=new XMLHttpRequest;T.open(f.method.toUpperCase(),f.url,!0),T.timeout=f.timeout;function V(){if(!T)return;const G=mt.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),$={data:!x||x==="text"||x==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:G,config:l,request:T};vg(function(J){u(J),N()},function(J){s(J),N()},$),T=null}"onloadend"in T?T.onloadend=V:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(V)},T.onabort=function(){T&&(s(new ue("Request aborted",ue.ECONNABORTED,l,T)),T=null)},T.onerror=function(F){const $=F&&F.message?F.message:"Network Error",ee=new ue($,ue.ERR_NETWORK,l,T);ee.event=F||null,s(ee),T=null},T.ontimeout=function(){let F=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const $=f.transitional||bg;f.timeoutErrorMessage&&(F=f.timeoutErrorMessage),s(new ue(F,$.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,l,T)),T=null},d===void 0&&h.setContentType(null),"setRequestHeader"in T&&M.forEach(h.toJSON(),function(F,$){T.setRequestHeader($,F)}),M.isUndefined(f.withCredentials)||(T.withCredentials=!!f.withCredentials),x&&x!=="json"&&(T.responseType=f.responseType),g&&([D,C]=Pr(g,!0),T.addEventListener("progress",D)),b&&T.upload&&([S,q]=Pr(b),T.upload.addEventListener("progress",S),T.upload.addEventListener("loadend",q)),(f.cancelToken||f.signal)&&(y=G=>{T&&(s(!G||G.type?new cl(null,l,T):G),T.abort(),T=null)},f.cancelToken&&f.cancelToken.subscribe(y),f.signal&&(f.signal.aborted?y():f.signal.addEventListener("abort",y)));const X=pv(f.url);if(X&&at.protocols.indexOf(X)===-1){s(new ue("Unsupported protocol "+X+":",ue.ERR_BAD_REQUEST,l));return}T.send(d||null)})},wv=(l,i)=>{const{length:u}=l=l?l.filter(Boolean):[];if(i||u){let s=new AbortController,f;const d=function(g){if(!f){f=!0,x();const y=g instanceof Error?g:this.reason;s.abort(y instanceof ue?y:new cl(y instanceof Error?y.message:y))}};let h=i&&setTimeout(()=>{h=null,d(new ue(`timeout ${i} of ms exceeded`,ue.ETIMEDOUT))},i);const x=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),l=null)};l.forEach(g=>g.addEventListener("abort",d));const{signal:b}=s;return b.unsubscribe=()=>M.asap(x),b}},jv=function*(l,i){let u=l.byteLength;if(u<i){yield l;return}let s=0,f;for(;s<u;)f=s+i,yield l.slice(s,f),s=f},Nv=async function*(l,i){for await(const u of Ev(l))yield*jv(u,i)},Ev=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const i=l.getReader();try{for(;;){const{done:u,value:s}=await i.read();if(u)break;yield s}}finally{await i.cancel()}},sm=(l,i,u,s)=>{const f=Nv(l,i);let d=0,h,x=b=>{h||(h=!0,s&&s(b))};return new ReadableStream({async pull(b){try{const{done:g,value:y}=await f.next();if(g){x(),b.close();return}let S=y.byteLength;if(u){let D=d+=S;u(D)}b.enqueue(new Uint8Array(y))}catch(g){throw x(g),g}},cancel(b){return x(b),f.return()}},{highWaterMark:2})},um=64*1024,{isFunction:Hr}=M,zv=(({Request:l,Response:i})=>({Request:l,Response:i}))(M.global),{ReadableStream:cm,TextEncoder:fm}=M.global,dm=(l,...i)=>{try{return!!l(...i)}catch{return!1}},Tv=l=>{l=M.merge.call({skipUndefined:!0},zv,l);const{fetch:i,Request:u,Response:s}=l,f=i?Hr(i):typeof fetch=="function",d=Hr(u),h=Hr(s);if(!f)return!1;const x=f&&Hr(cm),b=f&&(typeof fm=="function"?(C=>N=>C.encode(N))(new fm):async C=>new Uint8Array(await new u(C).arrayBuffer())),g=d&&x&&dm(()=>{let C=!1;const N=new u(at.origin,{body:new cm,method:"POST",get duplex(){return C=!0,"half"}}).headers.has("Content-Type");return C&&!N}),y=h&&x&&dm(()=>M.isReadableStream(new s("").body)),S={stream:y&&(C=>C.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(C=>{!S[C]&&(S[C]=(N,T)=>{let V=N&&N[C];if(V)return V.call(N);throw new ue(`Response type '${C}' is not supported`,ue.ERR_NOT_SUPPORT,T)})});const D=async C=>{if(C==null)return 0;if(M.isBlob(C))return C.size;if(M.isSpecCompliantForm(C))return(await new u(at.origin,{method:"POST",body:C}).arrayBuffer()).byteLength;if(M.isArrayBufferView(C)||M.isArrayBuffer(C))return C.byteLength;if(M.isURLSearchParams(C)&&(C=C+""),M.isString(C))return(await b(C)).byteLength},q=async(C,N)=>{const T=M.toFiniteNumber(C.getContentLength());return T??D(N)};return async C=>{let{url:N,method:T,data:V,signal:X,cancelToken:G,timeout:F,onDownloadProgress:$,onUploadProgress:ee,responseType:J,headers:le,withCredentials:me="same-origin",fetchOptions:Re}=wg(C),Z=i||fetch;J=J?(J+"").toLowerCase():"text";let fe=wv([X,G&&G.toAbortSignal()],F),Ae=null;const ke=fe&&fe.unsubscribe&&(()=>{fe.unsubscribe()});let Ve;try{if(ee&&g&&T!=="get"&&T!=="head"&&(Ve=await q(le,V))!==0){let v=new u(N,{method:"POST",body:V,duplex:"half"}),k;if(M.isFormData(V)&&(k=v.headers.get("content-type"))&&le.setContentType(k),v.body){const[Q,W]=im(Ve,Pr(rm(ee)));V=sm(v.body,um,Q,W)}}M.isString(me)||(me=me?"include":"omit");const B=d&&"credentials"in u.prototype,K={...Re,signal:fe,method:T.toUpperCase(),headers:le.normalize().toJSON(),body:V,duplex:"half",credentials:B?me:void 0};Ae=d&&new u(N,K);let te=await(d?Z(Ae,Re):Z(N,K));const P=y&&(J==="stream"||J==="response");if(y&&($||P&&ke)){const v={};["status","statusText","headers"].forEach(re=>{v[re]=te[re]});const k=M.toFiniteNumber(te.headers.get("content-length")),[Q,W]=$&&im(k,Pr(rm($),!0))||[];te=new s(sm(te.body,um,Q,()=>{W&&W(),ke&&ke()}),v)}J=J||"text";let O=await S[M.findKey(S,J)||"text"](te,C);return!P&&ke&&ke(),await new Promise((v,k)=>{vg(v,k,{data:O,headers:mt.from(te.headers),status:te.status,statusText:te.statusText,config:C,request:Ae})})}catch(B){throw ke&&ke(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new ue("Network Error",ue.ERR_NETWORK,C,Ae),{cause:B.cause||B}):ue.from(B,B&&B.code,C,Ae)}}},Cv=new Map,jg=l=>{let i=l&&l.env||{};const{fetch:u,Request:s,Response:f}=i,d=[s,f,u];let h=d.length,x=h,b,g,y=Cv;for(;x--;)b=d[x],g=y.get(b),g===void 0&&y.set(b,g=x?new Map:Tv(i)),y=g;return g};jg();const _c={http:Qy,xhr:Sv,fetch:{get:jg}};M.forEach(_c,(l,i)=>{if(l){try{Object.defineProperty(l,"name",{value:i})}catch{}Object.defineProperty(l,"adapterName",{value:i})}});const pm=l=>`- ${l}`,Av=l=>M.isFunction(l)||l===null||l===!1;function Rv(l,i){l=M.isArray(l)?l:[l];const{length:u}=l;let s,f;const d={};for(let h=0;h<u;h++){s=l[h];let x;if(f=s,!Av(s)&&(f=_c[(x=String(s)).toLowerCase()],f===void 0))throw new ue(`Unknown adapter '${x}'`);if(f&&(M.isFunction(f)||(f=f.get(i))))break;d[x||"#"+h]=f}if(!f){const h=Object.entries(d).map(([b,g])=>`adapter ${b} `+(g===!1?"is not supported by the environment":"is not available in the build"));let x=u?h.length>1?`since :
`+h.map(pm).join(`
`):" "+pm(h[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+x,"ERR_NOT_SUPPORT")}return f}const Ng={getAdapter:Rv,adapters:_c};function Iu(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new cl(null,l)}function hm(l){return Iu(l),l.headers=mt.from(l.headers),l.data=Pu.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),Ng.getAdapter(l.adapter||xi.adapter,l)(l).then(function(s){return Iu(l),s.data=Pu.call(l,l.transformResponse,s),s.headers=mt.from(s.headers),s},function(s){return yg(s)||(Iu(l),s&&s.response&&(s.response.data=Pu.call(l,l.transformResponse,s.response),s.response.headers=mt.from(s.response.headers))),Promise.reject(s)})}const Eg="1.13.2",mo={};["object","boolean","number","function","string","symbol"].forEach((l,i)=>{mo[l]=function(s){return typeof s===l||"a"+(i<1?"n ":" ")+l}});const mm={};mo.transitional=function(i,u,s){function f(d,h){return"[Axios v"+Eg+"] Transitional option '"+d+"'"+h+(s?". "+s:"")}return(d,h,x)=>{if(i===!1)throw new ue(f(h," has been removed"+(u?" in "+u:"")),ue.ERR_DEPRECATED);return u&&!mm[h]&&(mm[h]=!0,console.warn(f(h," has been deprecated since v"+u+" and will be removed in the near future"))),i?i(d,h,x):!0}};mo.spelling=function(i){return(u,s)=>(console.warn(`${s} is likely a misspelling of ${i}`),!0)};function _v(l,i,u){if(typeof l!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const s=Object.keys(l);let f=s.length;for(;f-- >0;){const d=s[f],h=i[d];if(h){const x=l[d],b=x===void 0||h(x,d,l);if(b!==!0)throw new ue("option "+d+" must be "+b,ue.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new ue("Unknown option "+d,ue.ERR_BAD_OPTION)}}const Kr={assertOptions:_v,validators:mo},Ft=Kr.validators;let ma=class{constructor(i){this.defaults=i||{},this.interceptors={request:new am,response:new am}}async request(i,u){try{return await this._request(i,u)}catch(s){if(s instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const d=f.stack?f.stack.replace(/^.+\n/,""):"";try{s.stack?d&&!String(s.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+d):s.stack=d}catch{}}throw s}}_request(i,u){typeof i=="string"?(u=u||{},u.url=i):u=i||{},u=ga(this.defaults,u);const{transitional:s,paramsSerializer:f,headers:d}=u;s!==void 0&&Kr.assertOptions(s,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),f!=null&&(M.isFunction(f)?u.paramsSerializer={serialize:f}:Kr.assertOptions(f,{encode:Ft.function,serialize:Ft.function},!0)),u.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?u.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:u.allowAbsoluteUrls=!0),Kr.assertOptions(u,{baseUrl:Ft.spelling("baseURL"),withXsrfToken:Ft.spelling("withXSRFToken")},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase();let h=d&&M.merge(d.common,d[u.method]);d&&M.forEach(["delete","get","head","post","put","patch","common"],C=>{delete d[C]}),u.headers=mt.concat(h,d);const x=[];let b=!0;this.interceptors.request.forEach(function(N){typeof N.runWhen=="function"&&N.runWhen(u)===!1||(b=b&&N.synchronous,x.unshift(N.fulfilled,N.rejected))});const g=[];this.interceptors.response.forEach(function(N){g.push(N.fulfilled,N.rejected)});let y,S=0,D;if(!b){const C=[hm.bind(this),void 0];for(C.unshift(...x),C.push(...g),D=C.length,y=Promise.resolve(u);S<D;)y=y.then(C[S++],C[S++]);return y}D=x.length;let q=u;for(;S<D;){const C=x[S++],N=x[S++];try{q=C(q)}catch(T){N.call(this,T);break}}try{y=hm.call(this,q)}catch(C){return Promise.reject(C)}for(S=0,D=g.length;S<D;)y=y.then(g[S++],g[S++]);return y}getUri(i){i=ga(this.defaults,i);const u=Sg(i.baseURL,i.url,i.allowAbsoluteUrls);return gg(u,i.params,i.paramsSerializer)}};M.forEach(["delete","get","head","options"],function(i){ma.prototype[i]=function(u,s){return this.request(ga(s||{},{method:i,url:u,data:(s||{}).data}))}});M.forEach(["post","put","patch"],function(i){function u(s){return function(d,h,x){return this.request(ga(x||{},{method:i,headers:s?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}ma.prototype[i]=u(),ma.prototype[i+"Form"]=u(!0)});let Ov=class zg{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(d){u=d});const s=this;this.promise.then(f=>{if(!s._listeners)return;let d=s._listeners.length;for(;d-- >0;)s._listeners[d](f);s._listeners=null}),this.promise.then=f=>{let d;const h=new Promise(x=>{s.subscribe(x),d=x}).then(f);return h.cancel=function(){s.unsubscribe(d)},h},i(function(d,h,x){s.reason||(s.reason=new cl(d,h,x),u(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const u=this._listeners.indexOf(i);u!==-1&&this._listeners.splice(u,1)}toAbortSignal(){const i=new AbortController,u=s=>{i.abort(s)};return this.subscribe(u),i.signal.unsubscribe=()=>this.unsubscribe(u),i.signal}static source(){let i;return{token:new zg(function(f){i=f}),cancel:i}}};function Dv(l){return function(u){return l.apply(null,u)}}function Mv(l){return M.isObject(l)&&l.isAxiosError===!0}const fc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(fc).forEach(([l,i])=>{fc[i]=l});function Tg(l){const i=new ma(l),u=lg(ma.prototype.request,i);return M.extend(u,ma.prototype,i,{allOwnKeys:!0}),M.extend(u,i,null,{allOwnKeys:!0}),u.create=function(f){return Tg(ga(l,f))},u}const Ye=Tg(xi);Ye.Axios=ma;Ye.CanceledError=cl;Ye.CancelToken=Ov;Ye.isCancel=yg;Ye.VERSION=Eg;Ye.toFormData=ho;Ye.AxiosError=ue;Ye.Cancel=Ye.CanceledError;Ye.all=function(i){return Promise.all(i)};Ye.spread=Dv;Ye.isAxiosError=Mv;Ye.mergeConfig=ga;Ye.AxiosHeaders=mt;Ye.formToJSON=l=>xg(M.isHTMLForm(l)?new FormData(l):l);Ye.getAdapter=Ng.getAdapter;Ye.HttpStatusCode=fc;Ye.default=Ye;const{Axios:a5,AxiosError:l5,CanceledError:i5,isCancel:r5,CancelToken:o5,VERSION:s5,all:u5,Cancel:c5,isAxiosError:f5,spread:d5,toFormData:p5,AxiosHeaders:h5,HttpStatusCode:m5,formToJSON:g5,getAdapter:b5,mergeConfig:x5}=Ye,ba=Ye.create({baseURL:"https://jansanwadserver.onrender.com/api",headers:{"Content-Type":"application/json"}});ba.interceptors.request.use(l=>(l.data instanceof FormData&&delete l.headers["Content-Type"],l));const Cg="/assets/ajivir5-DJJi1rt9.jpeg";function kv(){const l=wn(),[i,u]=E.useState("password"),[s,f]=E.useState({username:"",password:""}),[d,h]=E.useState(!1),[x,b]=E.useState(""),[g,y]=E.useState(!1),[S,D]=E.useState("mobile"),[q,C]=E.useState(""),[N,T]=E.useState(["","","","","",""]),[V,X]=E.useState(""),[G,F]=E.useState(0),[$,ee]=E.useState(!1),[J,le]=E.useState(!1),me=E.useRef([]),Re=P=>O=>f(v=>({...v,[P]:O.target.value}));E.useEffect(()=>{if(G<=0){ee(!0);return}const P=setTimeout(()=>F(O=>O-1),1e3);return()=>clearTimeout(P)},[G]);const Z=P=>`${String(Math.floor(P/60)).padStart(2,"0")}:${String(P%60).padStart(2,"0")}`,fe=async P=>{if(P.preventDefault(),b(""),!s.username||!s.password){b("सर्व fields भरा ❌");return}try{h(!0);const O=await ba.post("/citizen/login",{username:s.username.trim(),password:s.password});if(!O.data.success){b(O.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(O.data.citizen)),localStorage.setItem("citizenToken",O.data.token||""),l("/my-appointments")}catch(O){b(O?.response?.data?.message||"Server Error ❌")}finally{h(!1)}},Ae=async()=>{const P=q.trim();if(!/^[0-9]{10}$/.test(P)){b("10 अंकी valid mobile number टाका!");return}b(""),le(!0);const O=Math.floor(1e5+Math.random()*9e5).toString();X(O),F(60),ee(!1),T(["","","","","",""]);const v=`Dear Citizen ${O} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`,k=`https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${P}&text=${encodeURIComponent(v)}`;fetch(k,{method:"GET",mode:"no-cors"}).catch(()=>{}),D("otp"),le(!1),setTimeout(()=>me.current[0]?.focus(),120)},ke=async()=>{const P=N.join("");if(P.length<6){b("6 अंकी OTP टाका!");return}if(G<=0){b("OTP expire झाला! पुन्हा पाठवा.");return}if(P!==V){b("❌ चुकीचा OTP! पुन्हा try करा."),T(["","","","","",""]),setTimeout(()=>me.current[0]?.focus(),50);return}try{le(!0),b("");const O=await ba.post("/citizen/citizenLoginByMobile",{mobileNo:q.trim()});if(!O.data.success){b(O.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(O.data.citizen)),localStorage.setItem("citizenToken",O.data.token||""),l("/my-appointments")}catch(O){b(O?.response?.data?.message||"Server Error ❌")}finally{le(!1)}},Ve=(P,O)=>{if(!/^[0-9]?$/.test(O))return;const v=[...N];v[P]=O,T(v),O&&P<5&&me.current[P+1]?.focus()},B=(P,O)=>{O.key==="Backspace"&&!N[P]&&P>0&&me.current[P-1]?.focus()},K=P=>{P.preventDefault();const O=P.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),v=[...N];O.split("").forEach((k,Q)=>{v[Q]=k}),T(v),me.current[Math.min(O.length,5)]?.focus()},te=P=>{u(P),b(""),D("mobile"),T(["","","","","",""]),C(""),F(0),y(!1)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${Tc});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          font-family: 'Inter', 'Noto Sans Devanagari', sans-serif;
        }
        .login-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(22, 101, 52, 0.75);
        }

        .login-card-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          max-width: 950px;
          width: 95%;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .login-left {
          flex: 1;
          padding: 40px 45px;
          background: #fff;
        }

        .login-right {
          flex: 1;
          background: linear-gradient(135deg, #14b8a6, #0891b2);
          padding: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .login-right::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }
        .login-right::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 250px;
          height: 250px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .vvcmc-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .vvcmc-logo {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        .vvcmc-text h3 {
          font-size: 15px;
          color: #b45309;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }
        .vvcmc-text p {
          font-size: 13px;
          color: #92400e;
          font-family: 'Noto Sans Devanagari', sans-serif;
          margin: 0;
        }

        .login-heading {
          margin-bottom: 8px;
        }
        .login-heading h1 {
          font-size: 32px;
          font-weight: 800;
          color: #111827;
          margin: 0;
        }
        .login-subheading {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 28px;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .login-tabs {
          display: flex;
          background: #f3f4f6;
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 24px;
        }
        .login-tab {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          color: #6b7280;
          background: transparent;
          font-family: 'Inter', sans-serif;
        }
        .login-tab.active {
          background: #fff;
          color: #166534;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .login-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 10px;
          padding: 12px;
          font-size: 13px;
          color: #dc2626;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .login-field {
          margin-bottom: 20px;
        }
        .login-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        .login-input-wrapper {
          position: relative;
        }
        .login-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          font-size: 18px;
        }
        .login-input {
          width: 100%;
          padding: 12px 14px 12px 45px;
          font-size: 14px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          background: #f9fafb;
          color: #111827;
        }
        .login-input:focus {
          border-color: #166534;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
          background: #fff;
        }
        .login-input::placeholder {
          color: #9ca3af;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .login-pass-toggle {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #6b7280;
          padding: 0;
        }
        .login-pass-toggle:hover {
          color: #374151;
        }

        .login-btn {
          width: 100%;
          padding: 13px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #166534, #16a34a);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(22, 101, 52, 0.3);
          font-family: 'Inter', sans-serif;
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22, 101, 52, 0.4);
        }
        .login-btn:disabled {
          background: #d1d5db;
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }

        .login-footer {
          text-align: center;
          margin-top: 24px;
          font-size: 13px;
          color: #6b7280;
        }
        .login-link {
          color: #166534;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
        }
        .login-link:hover {
          text-decoration: underline;
        }

        .mayor-section {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .mayor-img-wrapper {
          width: 180px;
          height: 180px;
          margin: 0 auto 20px;
          position: relative;
        }
        .mayor-img-border {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          padding: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .mayor-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          border: 4px solid #fff;
          transform: none !important;
        }
        .mayor-chair-badge {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 45px;
          height: 45px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .mayor-name {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 8px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .mayor-title {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .mayor-progress {
          width: 160px;
          height: 8px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 10px;
          overflow: hidden;
          margin: 0 auto;
        }
        .mayor-progress-bar {
          height: 100%;
          width: 65%;
          background: linear-gradient(90deg, #16a34a, #4ade80);
          border-radius: 10px;
        }

        .mayor-decorations {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        .mayor-icon {
          position: absolute;
          font-size: 50px;
          opacity: 0.15;
          color: #fff;
        }
        .mayor-icon-1 { top: 15%; left: 8%; }
        .mayor-icon-2 { top: 25%; right: 12%; }
        .mayor-icon-3 { bottom: 20%; left: 10%; }
        .mayor-icon-4 { bottom: 15%; right: 8%; }

        .otp-mobile-prefix {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 13px;
          font-weight: 700;
          color: #374151;
        }
        .login-input.with-prefix {
          padding-left: 75px;
        }

        .otp-boxes {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 20px;
        }
        .otp-box {
          width: 45px;
          height: 52px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          font-size: 22px;
          font-weight: 800;
          text-align: center;
          color: #111827;
          outline: none;
          background: #f9fafb;
          transition: all 0.2s;
        }
        .otp-box:focus {
          border-color: #166534;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
        }

        .otp-timer {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 16px;
        }
        .otp-timer strong {
          font-size: 14px;
        }

        .otp-back-btn {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 16px;
          padding: 0;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }
        .otp-back-btn:hover {
          color: #166534;
        }

        .resend-btn {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }
        .resend-btn:disabled {
          color: #94a3b8;
          cursor: not-allowed;
        }
        .resend-btn:not(:disabled) {
          color: #f97316;
        }
        .resend-btn:not(:disabled):hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .login-card-wrapper {
            flex-direction: column;
          }
          .login-right {
            padding: 40px 30px;
          }
          .mayor-img-wrapper {
            width: 140px;
            height: 140px;
          }
        }
      `}),c.jsx("div",{className:"login-container",children:c.jsxs("div",{className:"login-card-wrapper",children:[c.jsxs("div",{className:"login-left",children:[c.jsxs("div",{className:"vvcmc-header",children:[c.jsx("div",{className:"vvcmc-logo",children:"🏛️"}),c.jsxs("div",{className:"vvcmc-text",children:[c.jsx("h3",{children:"Vasai-Virar City Municipal Corporation"}),c.jsx("p",{children:"जन संवाद"})]})]}),c.jsx("div",{className:"login-heading",children:c.jsx("h1",{children:"Welcome Back"})}),c.jsx("div",{className:"login-subheading",children:"Mayor Appointment Portal वर login करा"}),c.jsxs("div",{className:"login-tabs",children:[c.jsx("button",{className:`login-tab ${i==="password"?"active":""}`,onClick:()=>te("password"),children:"🔒 Password Login"}),c.jsx("button",{className:`login-tab ${i==="otp"?"active":""}`,onClick:()=>te("otp"),children:"📱 OTP Login"})]}),x&&c.jsxs("div",{className:"login-error",children:["⚠️ ",x]}),i==="password"&&c.jsx("div",{children:c.jsxs("form",{onSubmit:fe,children:[c.jsxs("div",{className:"login-field",children:[c.jsx("label",{className:"login-label",children:"Username"}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"login-input-icon",children:"👤"}),c.jsx("input",{className:"login-input",type:"text",placeholder:"Username टाका",value:s.username,onChange:Re("username"),autoComplete:"username",autoFocus:!0})]})]}),c.jsxs("div",{className:"login-field",children:[c.jsx("label",{className:"login-label",children:"Password"}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"login-input-icon",children:"🔒"}),c.jsx("input",{className:"login-input",type:g?"text":"password",placeholder:"Password टाका",value:s.password,onChange:Re("password"),autoComplete:"current-password"}),c.jsx("button",{type:"button",className:"login-pass-toggle",onClick:()=>y(!g),tabIndex:-1,children:g?"👁️":"👁️‍🗨️"})]})]}),c.jsx("button",{type:"submit",className:"login-btn",disabled:d||!s.username||!s.password,children:d?"⏳ Logging in...":"🔐 Login"}),c.jsxs("div",{className:"login-footer",children:["Account नाही?"," ",c.jsx("span",{className:"login-link",onClick:()=>l("/register"),children:"Register करा"})]})]})}),i==="otp"&&c.jsxs("div",{children:[S==="mobile"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"login-field",children:[c.jsx("label",{className:"login-label",children:"Mobile Number"}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"otp-mobile-prefix",children:"🇮🇳 +91"}),c.jsx("input",{className:"login-input with-prefix",type:"tel",maxLength:10,placeholder:"10 अंकी नंबर",value:q,onChange:P=>C(P.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:P=>P.key==="Enter"&&Ae(),autoFocus:!0})]})]}),c.jsx("button",{className:"login-btn",onClick:Ae,disabled:q.length!==10||J,children:J?"⏳ पाठवत आहे...":"OTP पाठवा →"}),c.jsxs("div",{className:"login-footer",children:["Account नाही?"," ",c.jsx("span",{className:"login-link",onClick:()=>l("/register"),children:"Register करा"})]})]}),S==="otp"&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"otp-back-btn",onClick:()=>{D("mobile"),T(["","","","","",""]),b("")},children:"← मागे जा"}),c.jsxs("div",{style:{fontSize:13,color:"#64748b",marginBottom:16},children:[c.jsxs("span",{style:{color:"#f97316",fontWeight:700},children:["+91 ******",q.slice(-3)]})," ","वर OTP पाठवला"]}),c.jsx("div",{className:"otp-boxes",onPaste:K,children:N.map((P,O)=>c.jsx("input",{ref:v=>me.current[O]=v,className:"otp-box",type:"tel",maxLength:1,value:P,placeholder:"·",onChange:v=>Ve(O,v.target.value),onKeyDown:v=>B(O,v)},O))}),c.jsxs("div",{className:"otp-timer",children:[G>0?c.jsxs(c.Fragment,{children:["OTP expire होईल:"," ",c.jsx("strong",{style:{color:G<=15?"#dc2626":"#f97316"},children:Z(G)})]}):c.jsx("span",{style:{color:"#dc2626",fontWeight:600},children:"OTP expire झाला!"}),c.jsxs("div",{style:{marginTop:6},children:["OTP नाही मिळाला?"," ",c.jsx("button",{className:"resend-btn",onClick:Ae,disabled:!$,children:"पुन्हा पाठवा"})]})]}),c.jsx("button",{className:"login-btn",onClick:ke,disabled:N.join("").length<6||J,children:J?"⏳ Verifying...":"✅ Verify & Login"})]})]})]}),c.jsxs("div",{className:"login-right",children:[c.jsxs("div",{className:"mayor-decorations",children:[c.jsx("div",{className:"mayor-icon mayor-icon-1",children:"🏛️"}),c.jsx("div",{className:"mayor-icon mayor-icon-2",children:"🤝"}),c.jsx("div",{className:"mayor-icon mayor-icon-3",children:"🏢"}),c.jsx("div",{className:"mayor-icon mayor-icon-4",children:"🏙️"})]}),c.jsxs("div",{className:"mayor-section",children:[c.jsxs("div",{className:"mayor-img-wrapper",children:[c.jsx("div",{className:"mayor-img-border",children:c.jsx("img",{src:Cg,alt:"Mayor",className:"mayor-img"})}),c.jsx("div",{className:"mayor-chair-badge",children:"🪑"})]}),c.jsx("h2",{className:"mayor-name",children:"मा. श्री.अजीव पाटील"}),c.jsx("p",{className:"mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),c.jsx("div",{className:"mayor-progress",children:c.jsx("div",{className:"mayor-progress-bar"})})]})]})]})})]})}function Uv(){const l=wn(),[i,u]=E.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:"",confirmPassword:""}),[s,f]=E.useState(!1),[d,h]=E.useState(""),[x,b]=E.useState(!1),[g,y]=E.useState(!1),[S,D]=E.useState(!1),q=N=>T=>u(V=>({...V,[N]:T.target.value})),C=async N=>{if(N.preventDefault(),h(""),!i.fullName||!i.mobileNumber||!i.password){h("सर्व required fields भरा ❌");return}if(!/^\d{10}$/.test(i.mobileNumber)){h("Mobile number 10 digits असावा ❌");return}if(i.password.length<6){h("Password किमान 6 characters असावा ❌");return}if(i.password!==i.confirmPassword){h("Passwords जुळत नाहीत ❌");return}try{f(!0);const T=await ba.post("/citizen/register",{fullName:i.fullName,userName:i.userName,mobileNumber:i.mobileNumber,email:i.email,password:i.password});if(!T.data.success){h(T.data.message||"Registration failed ❌");return}b(!0),setTimeout(()=>l("/login"),2e3)}catch(T){h(T?.response?.data?.message||"Server Error ❌")}finally{f(!1)}};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${Tc});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          font-family: 'Inter', 'Noto Sans Devanagari', sans-serif;
        }
        .login-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(22, 101, 52, 0.75);
        }

        .login-card-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          max-width: 980px;
          width: 95%;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          my: 32px;
        }

        /* ── Left Panel ── */
        .login-left {
          flex: 1.2;
          padding: 36px 42px;
          background: #fff;
          overflow-y: auto;
        }

        /* ── Right Panel ── */
        .login-right {
          flex: 0.8;
          background: linear-gradient(135deg, #14b8a6, #0891b2);
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .login-right::before {
          content: '';
          position: absolute;
          top: -50px; right: -50px;
          width: 300px; height: 300px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }
        .login-right::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 250px; height: 250px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        /* ── VVCMC Header ── */
        .vvcmc-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }
        .vvcmc-logo {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }
        .vvcmc-text h3 { font-size: 15px; color: #b45309; font-weight: 700; margin: 0; line-height: 1.3; }
        .vvcmc-text p  { font-size: 13px; color: #92400e; font-family: 'Noto Sans Devanagari', sans-serif; margin: 0; }

        /* ── Heading ── */
        .login-heading { margin-bottom: 4px; }
        .login-heading h1 { font-size: 28px; font-weight: 800; color: #111827; margin: 0; }
        .login-subheading {
          font-size: 14px; color: #6b7280;
          margin-bottom: 20px;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        /* ── Error / Success ── */
        .login-error {
          background: #fef2f2; border: 1px solid #fecaca;
          border-radius: 10px; padding: 12px;
          font-size: 13px; color: #dc2626; margin-bottom: 16px; font-weight: 500;
        }
        .login-success {
          background: #f0fdf4; border: 1px solid #86efac;
          border-radius: 10px; padding: 18px;
          font-size: 14px; color: #166534; font-weight: 600;
          text-align: center; margin-bottom: 16px;
        }

        /* ── 2-col grid ── */
        .reg-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 18px;
        }
        .reg-field      { margin-bottom: 16px; }
        .reg-field.full { grid-column: 1 / -1; }

        /* ── Label ── */
        .login-label {
          display: block; font-size: 13px; font-weight: 600;
          color: #374151; margin-bottom: 6px;
        }
        .req { color: #ef4444; margin-left: 2px; }

        /* ── Input wrapper ── */
        .login-input-wrapper { position: relative; }
        .login-input-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          color: #6b7280; font-size: 16px; pointer-events: none;
        }
        .login-input {
          width: 100%;
          padding: 11px 14px 11px 42px;
          font-size: 13.5px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          background: #f9fafb;
          color: #111827;
        }
        .login-input.no-icon { padding-left: 14px; }
        .login-input:focus {
          border-color: #166534;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
          background: #fff;
        }
        .login-input::placeholder { color: #9ca3af; font-family: 'Noto Sans Devanagari', sans-serif; }

        .login-pass-toggle {
          position: absolute; right: 12px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          font-size: 16px; color: #6b7280; padding: 0;
        }
        .login-pass-toggle:hover { color: #374151; }

        .input-hint { font-size: 11px; color: #9ca3af; margin-top: 4px; }

        /* ── Button ── */
        .login-btn {
          width: 100%; padding: 13px; border-radius: 10px; border: none;
          background: linear-gradient(135deg, #166534, #16a34a);
          color: #fff; font-weight: 700; font-size: 14px;
          cursor: pointer; transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(22, 101, 52, 0.3);
          font-family: 'Inter', sans-serif;
          margin-top: 4px;
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22, 101, 52, 0.4);
        }
        .login-btn:disabled { background: #d1d5db; cursor: not-allowed; box-shadow: none; transform: none; }

        /* ── Footer ── */
        .login-footer { text-align: center; margin-top: 20px; font-size: 13px; color: #6b7280; }
        .login-link { color: #166534; font-weight: 700; cursor: pointer; }
        .login-link:hover { text-decoration: underline; }

        /* ── Right panel ── */
        .mayor-section { position: relative; z-index: 1; text-align: center; }
        .mayor-img-wrapper {
          width: 170px; height: 170px;
          margin: 0 auto 20px; position: relative;
        }
        .mayor-img-border {
          width: 100%; height: 100%; border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          padding: 6px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .mayor-img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: top center; border: 4px solid #fff; transform: none !important; scale: 1 !important; direction: ltr !important; }
        .mayor-chair-badge {
          position: absolute; bottom: 5px; right: 5px;
          width: 42px; height: 42px; background: #fff;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .mayor-name {
          font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 8px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          text-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .mayor-title { font-size: 14px; color: rgba(255,255,255,0.9); margin-bottom: 20px; font-family: 'Noto Sans Devanagari', sans-serif; }
        .mayor-progress { width: 160px; height: 8px; background: rgba(255,255,255,0.25); border-radius: 10px; overflow: hidden; margin: 0 auto 24px; }
        .mayor-progress-bar { height: 100%; width: 65%; background: linear-gradient(90deg, #16a34a, #4ade80); border-radius: 10px; }

        .mayor-info-card {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          padding: 16px 20px;
          text-align: left;
        }
        .mayor-info-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: rgba(255,255,255,0.9);
          font-family: 'Noto Sans Devanagari', sans-serif;
          padding: 6px 0;
        }
        .mayor-info-item:not(:last-child) { border-bottom: 1px solid rgba(255,255,255,0.12); }
        .mayor-info-icon { font-size: 18px; flex-shrink: 0; }

        .mayor-decorations { position: absolute; width: 100%; height: 100%; top: 0; left: 0; pointer-events: none; }
        .mayor-icon { position: absolute; font-size: 50px; opacity: 0.12; color: #fff; }
        .mayor-icon-1 { top: 10%; left: 6%; }
        .mayor-icon-2 { top: 20%; right: 8%; }
        .mayor-icon-3 { bottom: 22%; left: 8%; }
        .mayor-icon-4 { bottom: 12%; right: 6%; }

        @media (max-width: 768px) {
          .login-card-wrapper { flex-direction: column; }
          .login-left { padding: 28px 24px; }
          .login-right { padding: 40px 24px; }
          .reg-grid { grid-template-columns: 1fr; }
          .reg-field.full { grid-column: 1; }
          .mayor-img-wrapper { width: 130px; height: 130px; }
        }
      `}),c.jsx("div",{className:"login-container",children:c.jsxs("div",{className:"login-card-wrapper",children:[c.jsxs("div",{className:"login-left",children:[c.jsxs("div",{className:"vvcmc-header",children:[c.jsx("div",{className:"vvcmc-logo",children:"🏛️"}),c.jsxs("div",{className:"vvcmc-text",children:[c.jsx("h3",{children:"Vasai-Virar City Municipal Corporation"}),c.jsx("p",{children:"जन संवाद"})]})]}),c.jsx("div",{className:"login-heading",children:c.jsx("h1",{children:"Account तयार करा"})}),c.jsx("div",{className:"login-subheading",children:"Mayor Appointment बुक करण्यासाठी register करा"}),x?c.jsxs("div",{className:"login-success",children:["✅ Registration successful!",c.jsx("br",{}),c.jsx("span",{style:{fontSize:13,fontWeight:400},children:"Login page वर redirect होत आहे..."})]}):c.jsxs(c.Fragment,{children:[d&&c.jsxs("div",{className:"login-error",children:["⚠️ ",d]}),c.jsxs("form",{onSubmit:C,children:[c.jsxs("div",{className:"reg-grid",children:[c.jsxs("div",{className:"reg-field",children:[c.jsxs("label",{className:"login-label",children:["Full Name ",c.jsx("span",{className:"req",children:"*"})]}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"login-input-icon",children:"👤"}),c.jsx("input",{className:"login-input",type:"text",placeholder:"आपले पूर्ण नाव",value:i.fullName,onChange:q("fullName"),autoFocus:!0})]})]}),c.jsxs("div",{className:"reg-field",children:[c.jsx("label",{className:"login-label",children:"User Name"}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"login-input-icon",children:"🪪"}),c.jsx("input",{className:"login-input",type:"text",placeholder:"Username",value:i.userName,onChange:q("userName")})]})]}),c.jsxs("div",{className:"reg-field",children:[c.jsxs("label",{className:"login-label",children:["Mobile Number ",c.jsx("span",{className:"req",children:"*"})]}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"login-input-icon",children:"📱"}),c.jsx("input",{className:"login-input",type:"tel",placeholder:"10 digit mobile",value:i.mobileNumber,onChange:q("mobileNumber"),maxLength:10})]})]}),c.jsxs("div",{className:"reg-field",children:[c.jsx("label",{className:"login-label",children:"Email"}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"login-input-icon",children:"✉️"}),c.jsx("input",{className:"login-input",type:"email",placeholder:"Email (optional)",value:i.email,onChange:q("email")})]})]}),c.jsxs("div",{className:"reg-field",children:[c.jsxs("label",{className:"login-label",children:["Password ",c.jsx("span",{className:"req",children:"*"})]}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"login-input-icon",children:"🔒"}),c.jsx("input",{className:"login-input",type:g?"text":"password",placeholder:"Min. 6 characters",value:i.password,onChange:q("password")}),c.jsx("button",{type:"button",className:"login-pass-toggle",onClick:()=>y(!g),tabIndex:-1,children:g?"👁️":"👁️‍🗨️"})]}),c.jsx("div",{className:"input-hint",children:"किमान 6 characters"})]}),c.jsxs("div",{className:"reg-field",children:[c.jsxs("label",{className:"login-label",children:["Confirm Password ",c.jsx("span",{className:"req",children:"*"})]}),c.jsxs("div",{className:"login-input-wrapper",children:[c.jsx("span",{className:"login-input-icon",children:"🔐"}),c.jsx("input",{className:"login-input",type:S?"text":"password",placeholder:"Password परत टाका",value:i.confirmPassword,onChange:q("confirmPassword")}),c.jsx("button",{type:"button",className:"login-pass-toggle",onClick:()=>D(!S),tabIndex:-1,children:S?"👁️":"👁️‍🗨️"})]})]})]}),c.jsx("button",{type:"submit",className:"login-btn",disabled:s||!i.fullName||!i.mobileNumber||!i.password||!i.confirmPassword,children:s?"⏳ Registering...":"✅ Register करा"})]}),c.jsxs("div",{className:"login-footer",children:["आधीच account आहे?"," ",c.jsx("span",{className:"login-link",onClick:()=>l("/login"),children:"Login करा"})]})]})]}),c.jsxs("div",{className:"login-right",children:[c.jsxs("div",{className:"mayor-decorations",children:[c.jsx("div",{className:"mayor-icon mayor-icon-1",children:"🏛️"}),c.jsx("div",{className:"mayor-icon mayor-icon-2",children:"🤝"}),c.jsx("div",{className:"mayor-icon mayor-icon-3",children:"🏢"}),c.jsx("div",{className:"mayor-icon mayor-icon-4",children:"🏙️"})]}),c.jsxs("div",{className:"mayor-section",children:[c.jsxs("div",{className:"mayor-img-wrapper",children:[c.jsx("div",{className:"mayor-img-border",children:c.jsx("img",{src:Cg,alt:"Mayor",className:"mayor-img"})}),c.jsx("div",{className:"mayor-chair-badge",children:"🪑"})]}),c.jsx("h2",{className:"mayor-name",children:"मा. श्री.अजीव पाटील"}),c.jsx("p",{className:"mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),c.jsx("div",{className:"mayor-progress",children:c.jsx("div",{className:"mayor-progress-bar"})}),c.jsxs("div",{className:"mayor-info-card",children:[c.jsxs("div",{className:"mayor-info-item",children:[c.jsx("span",{className:"mayor-info-icon",children:"📅"}),c.jsx("span",{children:"Appointment सहज बुक करा"})]}),c.jsxs("div",{className:"mayor-info-item",children:[c.jsx("span",{className:"mayor-info-icon",children:"🔔"}),c.jsx("span",{children:"SMS द्वारे notification मिळवा"})]}),c.jsxs("div",{className:"mayor-info-item",children:[c.jsx("span",{className:"mayor-info-icon",children:"🛡️"}),c.jsx("span",{children:"Secure Government Portal"})]})]})]})]})]})})]})}const ec=[{label:"Personal Details",icon:"👤"},{label:"Appointment",icon:"📅"},{label:"Details",icon:"ℹ️"},{label:"Photo",icon:"📷"},{label:"Review & Submit",icon:"📋"}];function qr(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—"}function Bv(){const l=wn(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[u,s]=E.useState(0),[f,d]=E.useState(!1),[h,x]=E.useState([]),[b,g]=E.useState(null),[y,S]=E.useState(null),[D,q]=E.useState("forward"),C=(O,v="success")=>{g({msg:O,type:v}),setTimeout(()=>g(null),3500)},[N,T]=E.useState({fullName:i?.fullName||"",mobileNumber:i?.mobileNumber||"",email:i?.email||"",address:"",pincode:"",preferredDate:"",slotTime:"",slotStart:"",slotEnd:"",purpose:"",numberOfVisitors:"1",visitedBefore:!1,ward:"",visitorPhoto:null,photoPreview:null}),V=O=>v=>T(k=>({...k,[O]:v.target.value}));E.useEffect(()=>{ba.get("/availability/get").then(O=>{O.data&&x(Array.isArray(O.data)?O.data:O.data.data||[])}).catch(()=>{})},[]);const X=E.useRef(null),G=E.useRef(null),F=E.useRef(null),[$,ee]=E.useState(!1),[J,le]=E.useState(""),me=async()=>{le("");try{const O=await navigator.mediaDevices.getUserMedia({video:!0});F.current=O,ee(!0),setTimeout(()=>{X.current&&(X.current.srcObject=O,X.current.play())},100)}catch{le("Camera access denied. Browser permission द्या.")}},Re=()=>{const O=X.current,v=G.current;!O||!v||(v.width=O.videoWidth,v.height=O.videoHeight,v.getContext("2d").drawImage(O,0,0),v.toBlob(k=>{const Q=new File([k],`photo-${Date.now()}.jpg`,{type:"image/jpeg"}),W=URL.createObjectURL(k);T(re=>({...re,visitorPhoto:Q,photoPreview:W})),Z()},"image/jpeg"))},Z=()=>{F.current&&(F.current.getTracks().forEach(O=>O.stop()),F.current=null),ee(!1)},fe=new Date().toISOString().split("T")[0],Ae=h.filter(O=>O.date>=fe),Ve=Ae.find(O=>O.date===N.preferredDate)?.timeSlots||[],B=u===0?!N.fullName||!N.mobileNumber||!N.address:u===1?!N.preferredDate||!N.slotTime:u===2?!N.purpose||!N.ward:u===3?!N.visitorPhoto:!1,K=()=>{q("forward"),s(O=>O+1)},te=()=>{q("back"),s(O=>O-1)},P=async()=>{if(!i){l("/login");return}try{d(!0);const O=new FormData;O.append("citizenId",i._id||""),O.append("fullName",N.fullName),O.append("mobileNumber",N.mobileNumber),O.append("email",N.email||""),O.append("address",N.address),O.append("pincode",N.pincode||""),O.append("preferredDate",N.preferredDate),O.append("slotTime",N.slotTime),O.append("purpose",N.purpose),O.append("numberOfVisitors",N.numberOfVisitors),O.append("visitedBefore",String(N.visitedBefore)),O.append("ward",N.ward),O.append("submittedById",i._id||""),O.append("submittedByName",i.fullName||""),N.visitorPhoto&&O.append("visitorPhoto",N.visitorPhoto);const v=await ba.post("/citizen/book-appointment",O,{headers:{"Content-Type":void 0}});if(!v.data.success){C(v.data.message||"Booking failed ❌","error");return}S(v.data.data)}catch(O){C(O?.response?.data?.message||"Server Error ❌","error")}finally{d(!1)}};return y?c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
          @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        `}),c.jsx("div",{className:"book-root",children:c.jsxs("div",{style:{background:"#fff",borderRadius:20,padding:"48px 40px",maxWidth:520,width:"100%",textAlign:"center",boxShadow:"0 8px 40px rgba(76,171,193,0.18)",border:"1.5px solid #b2e4ee",animation:"fadeUpIn .5s ease"},children:[c.jsx("div",{style:{width:90,height:90,borderRadius:"50%",background:"linear-gradient(135deg,#4CABC1,#66A962)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,margin:"0 auto 20px",animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both",boxShadow:"0 8px 24px rgba(76,171,193,0.35)"},children:"✅"}),c.jsx("h2",{style:{fontSize:26,fontWeight:800,color:"#18748",marginBottom:8,fontFamily:"'Plus Jakarta Sans',sans-serif",background:"linear-gradient(135deg,#4CABC1,#66A962)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Appointment Booked!"}),c.jsx("p",{style:{color:"#4a5568",marginBottom:24,fontSize:14,fontWeight:500},children:"तुमची appointment successfully book झाली आहे"}),c.jsx("div",{style:{background:"linear-gradient(135deg,#f0faf9,#f5fef5)",border:"1.5px solid #b2e4ee",borderRadius:12,padding:"20px 24px",marginBottom:24,textAlign:"left"},children:[["Token ID",y.tokenId],["Date",qr(y.preferredDate)],["Slot",y.slotTime],["Status","⏳ Pending — Admin approval बाकी आहे"]].map(([O,v])=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid #d4eff5",fontSize:13},children:[c.jsx("span",{style:{color:"#5a7a88",fontWeight:600},children:O}),c.jsx("span",{style:{color:"#18748",fontWeight:700},children:v})]},O))}),y.qrCode&&c.jsxs("div",{style:{marginBottom:20},children:[c.jsx("p",{style:{fontSize:12,color:"#6b7280",marginBottom:8,fontWeight:600},children:"QR Code — भेटीच्या दिवशी दाखवा"}),c.jsx("img",{src:y.qrCode,alt:"QR",style:{width:130,height:130}})]}),c.jsx("button",{onClick:()=>l("/my-appointments"),style:{width:"100%",padding:"13px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#4CABC1,#49ACC3)",color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)",transition:"transform .15s"},onMouseEnter:O=>O.target.style.transform="translateY(-1px)",onMouseLeave:O=>O.target.style.transform="none",children:"📋 My Appointments बघा"})]})})]}):c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; }

        /* ── Theme variables — screenshot matched ── */
        :root {
          --teal:    #3a9aaf;
          --teal2:   #2e8a9e;
          --teal-dk: #1d6e80;
          --gold:    #C9963A;
          --gold2:   #b8851f;
          --gold-lt: #e8c47a;
          --green:   #5a9656;
          --cream:   #F5E7C2;
          --cream2:  #fdf6e3;
          --text-hd: #2c4a2e;
          --text-bd: #3a3a2a;
          --text-sm: #5a5a3a;
          --border:  #d4b870;
          --bg-form: #fdf8ee;
        }

        .book-root {
          min-height: calc(100vh - 64px);
          background: #f0ece0;
          padding: 32px 24px;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }

        .book-wrapper {
          width: 90%;
          margin: 0 auto;
          background: var(--cream2);
          border-radius: 14px;
          box-shadow: 0 6px 40px rgba(0,0,0,0.15);
          border: 1.5px solid #c8b870;
          overflow: hidden;
        }

        /* ── Title bar — teal like screenshot ── */
        .book-titlebar {
          padding: 26px 40px 0;
          border-bottom: 2px solid #c8b870;
          background: linear-gradient(135deg, #3a9aaf 0%, #2a7a8e 100%);
        }
        .book-titlebar h1 {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 20px;
          letter-spacing: 0px;
          position: relative;
          display: inline-block;
          text-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .book-titlebar h1::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 48px;
          height: 3px;
          background: var(--gold);
          border-radius: 2px;
        }

        /* ── Stepper — gold/cream pills like screenshot ── */
        .stepper { display: flex; gap: 6px; padding-bottom: 0; }
        .step-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.65);
          border-bottom: 3px solid transparent;
          cursor: default;
          white-space: nowrap;
          transition: all .25s;
          margin-bottom: -2px;
          border-radius: 8px 8px 0 0;
          background: rgba(255,255,255,0.1);
        }
        .step-tab.done  {
          background: rgba(255,255,255,0.15);
          color: #c8e8d0;
        }
        .step-tab.active {
          background: var(--cream);
          color: var(--teal-dk);
          border-bottom-color: var(--gold);
        }
        .step-dot {
          width: 22px; height: 22px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800;
          flex-shrink: 0;
          transition: all .25s;
        }
        .step-dot.done   { background: var(--green); color: #fff; }
        .step-dot.active { background: var(--gold); color: #fff; box-shadow: 0 2px 8px rgba(201,150,58,0.5); }
        .step-dot.pending{ background: rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); }

        /* ── Body ── */
        .book-body {
          padding: 32px 40px 0;
          background: var(--cream2);
        }
        .section-title {
          font-size: 17px;
          font-weight: 800;
          color: var(--text-hd);
          margin: 0 0 5px;
        }
        .section-sub {
          font-size: 13px;
          color: var(--text-sm);
          font-weight: 500;
          margin: 0 0 24px;
        }

        /* ── Fields ── */
        .field { margin-bottom: 20px; }

        .field label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-hd);
          margin-bottom: 7px;
        }
        .field label .req { color: #c0392b; margin-left: 2px; }

        .f-input {
          width: 100%;
          padding: 11px 14px;
          font-size: 14px;
          font-weight: 500;
          border: 1.5px solid var(--border);
          border-radius: 8px;
          outline: none;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          box-sizing: border-box;
          transition: border-color .18s, box-shadow .18s;
          background: #fffef8;
          color: var(--text-bd);
        }
        .f-input:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(58,154,175,0.14);
          background: #fff;
        }
        .f-input::placeholder { color: #b0a070; font-weight: 400; }

        .f-grid-2    { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 20px; }
        .f-grid-2-col{ display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
        @media(max-width:640px){
          .f-grid-2{ grid-template-columns:1fr; }
          .f-grid-2-col{ grid-template-columns:1fr; }
        }

        /* ── Date / Slot buttons — gold bordered like screenshot ── */
        .date-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px,1fr)); gap: 10px; }
        .date-btn {
          padding: 11px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          font-size: 13px;
          border: 1.5px solid var(--border);
          background: #fffef8;
          color: var(--text-bd);
          transition: all .18s;
          text-align: left;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .date-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); box-shadow: 0 3px 10px rgba(58,154,175,0.15); }
        .date-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 3px 10px rgba(58,154,175,0.2); font-weight: 800; }
        .date-btn .sub  { font-size: 11.5px; color: #8a7a50; font-weight: 500; margin-top: 3px; }

        .slot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 10px; }
        .slot-btn {
          padding: 10px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          font-size: 12.5px;
          border: 1.5px solid var(--border);
          background: #fffef8;
          color: var(--text-bd);
          transition: all .18s;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .slot-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); }
        .slot-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 2px 8px rgba(58,154,175,0.2); font-weight: 800; }

        /* ── Info boxes ── */
        .info-box {
          background: #edf6f9;
          border: 1.5px solid #8acada;
          border-radius: 8px;
          padding: 11px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #1a5f7a;
          margin-bottom: 16px;
        }
        .selected-box {
          background: #eaf7ee;
          border: 1.5px solid #7ec89a;
          border-radius: 8px;
          padding: 11px 16px;
          font-weight: 700;
          color: #1a5e2a;
          font-size: 13px;
          margin-bottom: 16px;
        }
        .empty-box {
          background: linear-gradient(135deg,#fffbeb,#fef3c7);
          border: 1.5px solid #e8c070;
          border-radius: 10px;
          padding: 28px;
          text-align: center;
          margin-bottom: 16px;
        }

        /* ── Review cards ── */
        .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media(max-width:640px){ .review-grid{ grid-template-columns:1fr; } }
        .review-card {
          background: #fffef5;
          border: 1.5px solid #d4c070;
          border-radius: 10px;
          padding: 16px 18px;
        }
        .review-card-title {
          font-size: 11.5px;
          font-weight: 800;
          color: var(--teal-dk);
          text-transform: uppercase;
          letter-spacing: .8px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .review-card-title::before {
          content: '';
          display: inline-block;
          width: 14px; height: 3px;
          background: var(--gold);
          border-radius: 2px;
        }
        .review-row { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid #e8dfa0; font-size: 13.5px; }
        .review-row:last-child { border-bottom: none; }
        .review-key { color: #6a5a30; font-weight: 600; }
        .review-val { color: var(--text-hd); font-weight: 700; text-align: right; max-width: 55%; word-break: break-word; }

        .form-note {
          font-size: 12.5px;
          color: #7a6a3a;
          font-weight: 500;
          margin: 12px 0 0;
        }

        /* ── Nav ── */
        .book-nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          padding: 24px 40px 32px;
          border-top: 1.5px solid #d4c070;
          margin-top: 28px;
          background: #fdf8ee;
        }
        .nav-cancel {
          padding: 11px 30px;
          border-radius: 8px;
          border: 1.5px solid #c0a850;
          background: #fffef0;
          color: var(--text-sm);
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          transition: all .18s;
        }
        .nav-cancel:hover { background: #f5edd0; border-color: var(--gold); color: var(--gold2); }
        .nav-continue {
          padding: 11px 34px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #3a9aaf, #2e8a9e);
          color: #fff;
          font-weight: 800;
          font-size: 13.5px;
          cursor: pointer;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          display: flex; align-items: center; gap: 7px;
          transition: all .2s;
          box-shadow: 0 4px 14px rgba(58,154,175,0.4);
          letter-spacing: 0.2px;
        }
        .nav-continue:hover:not(:disabled) {
          background: linear-gradient(135deg, #2e8a9e, #1d6e80);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(58,154,175,0.45);
        }
        .nav-continue:disabled { background: #c8c0a0; cursor: not-allowed; box-shadow: none; color: #888070; }

        /* ── Step progress bar — gold ── */
        .step-progress-bar {
          height: 4px;
          background: #e8dfa0;
        }
        .step-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--teal), var(--gold));
          transition: width .4s cubic-bezier(.4,0,.2,1);
        }

        /* ── Step body animation ── */
        @keyframes slideInForward {
          from { opacity:0; transform:translateX(28px); }
          to   { opacity:1; transform:none; }
        }
        @keyframes slideInBack {
          from { opacity:0; transform:translateX(-28px); }
          to   { opacity:1; transform:none; }
        }
        .step-body-forward { animation: slideInForward .3s cubic-bezier(.4,0,.2,1) both; }
        .step-body-back    { animation: slideInBack    .3s cubic-bezier(.4,0,.2,1) both; }

        /* ── Toast ── */
        .toast {
          position:fixed; top:80px; right:20px; z-index:9999;
          padding:12px 24px; border-radius:10px; font-weight:700; font-size:14px;
          color:#fff; box-shadow:0 6px 24px rgba(0,0,0,0.18);
          animation:toastIn .3s; font-family:'Plus Jakarta Sans',sans-serif;
        }
        @keyframes toastIn  { from{opacity:0;transform:translateY(-10px) scale(.95)} to{opacity:1;transform:none} }
        @keyframes spin      { to{transform:rotate(360deg)} }

        /* ── Photo buttons ── */
        .photo-btn-primary {
          padding: 11px 24px;
          border-radius: 8px;
          background: linear-gradient(135deg, #3a9aaf, #2e8a9e);
          color: #fff;
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          border: none;
          box-shadow: 0 3px 10px rgba(58,154,175,0.3);
          transition: all .18s;
        }
        .photo-btn-primary:hover { transform:translateY(-1px); box-shadow:0 5px 14px rgba(58,154,175,0.4); }
        .photo-btn-secondary {
          padding: 11px 24px;
          border-radius: 8px;
          border: 1.5px solid var(--teal);
          background: #fffef8;
          color: var(--teal-dk);
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          transition: all .18s;
        }
        .photo-btn-secondary:hover { background:#dff2f6; }

        /* ── Radio custom ── */
        .radio-group { display:flex; gap:16px; margin-top:8px; }
        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          color: var(--text-bd);
          padding: 8px 20px;
          border-radius: 8px;
          border: 1.5px solid var(--border);
          background: #fffef8;
          transition: all .15s;
        }
        .radio-label.selected { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); }
        .radio-label input { accentColor: var(--teal); width:15px; height:15px; }
      `}),b&&c.jsx("div",{className:"toast",style:{background:b.type==="success"?"var(--teal)":"#dc2626"},children:b.msg}),c.jsx("div",{className:"book-root",children:c.jsxs("div",{className:"book-wrapper",children:[c.jsxs("div",{className:"book-titlebar",children:[c.jsx("h1",{children:"जनसंपर्क – Application Form"}),c.jsx("div",{className:"stepper",children:ec.map((O,v)=>{const k=v<u?"done":v===u?"active":"pending";return c.jsxs("div",{className:`step-tab ${k}`,children:[c.jsx("div",{className:`step-dot ${k}`,children:k==="done"?"✓":v+1}),O.label]},v)})})]}),c.jsx("div",{className:"step-progress-bar",children:c.jsx("div",{className:"step-progress-fill",style:{width:`${(u+1)/ec.length*100}%`}})}),c.jsx("div",{className:"book-body",children:c.jsxs("div",{className:D==="forward"?"step-body-forward":"step-body-back",children:[u===0&&c.jsxs("div",{children:[c.jsx("p",{className:"section-title",children:"Personal Information"}),c.jsx("p",{className:"section-sub",children:"Please provide your basic details to proceed"}),c.jsxs("div",{className:"f-grid-2",children:[c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Full Name ",c.jsx("span",{className:"req",children:"*"})]}),c.jsx("input",{className:"f-input",value:N.fullName,onChange:V("fullName"),placeholder:"आपले पूर्ण नाव"})]}),c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Mobile Number ",c.jsx("span",{className:"req",children:"*"})]}),c.jsx("input",{className:"f-input",type:"tel",value:N.mobileNumber,onChange:V("mobileNumber"),maxLength:10,placeholder:"10 digit mobile"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Email Address"}),c.jsx("input",{className:"f-input",type:"email",value:N.email,onChange:V("email"),placeholder:"Email (optional)"})]})]}),c.jsxs("div",{className:"f-grid-2-col",children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Pincode"}),c.jsx("input",{className:"f-input",value:N.pincode,onChange:V("pincode"),maxLength:6,placeholder:"Pincode"})]}),c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Address ",c.jsx("span",{className:"req",children:"*"})]}),c.jsx("input",{className:"f-input",value:N.address,onChange:V("address"),placeholder:"पूर्ण पत्ता"})]})]}),c.jsx("p",{className:"form-note",children:"* In order to process your appointment, all fields marked with an asterisk (*) are required."})]}),u===1&&c.jsxs("div",{children:[c.jsx("p",{className:"section-title",children:"Appointment Scheduling"}),c.jsx("p",{className:"section-sub",children:"Select your preferred date and time slot for the Mayor's visit"}),Ae.length===0?c.jsxs("div",{className:"empty-box",children:[c.jsx("div",{style:{fontSize:36,marginBottom:8},children:"📅"}),c.jsx("p",{style:{color:"#92400e",fontWeight:700,margin:"0 0 4px",fontSize:15},children:"सध्या कोणत्याही dates available नाहीत"}),c.jsx("p",{style:{color:"#a16207",fontSize:13.5,margin:0,fontWeight:500},children:"Admin कडून availability add होण्याची वाट पाहा"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Available Dates ",c.jsx("span",{className:"req",children:"*"})]}),c.jsx("div",{className:"date-grid",children:Ae.map((O,v)=>c.jsxs("button",{type:"button",className:`date-btn${N.preferredDate===O.date?" sel":""}`,onClick:()=>T(k=>({...k,preferredDate:O.date,slotTime:"",slotStart:"",slotEnd:""})),children:["📅 ",qr(O.date),c.jsxs("div",{className:"sub",children:[O.timeSlots?.length," slot",O.timeSlots?.length!==1?"s":""," available"]})]},v))})]}),N.preferredDate&&c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Select Time Slot ",c.jsx("span",{className:"req",children:"*"})]}),c.jsx("div",{className:"slot-grid",children:Ve.map((O,v)=>{const k=`${O.start} - ${O.end}`;return c.jsxs("button",{type:"button",className:`slot-btn${N.slotTime===k?" sel":""}`,onClick:()=>T(Q=>({...Q,slotTime:k,slotStart:O.start,slotEnd:O.end})),children:["⏰ ",k]},v)})})]}),N.preferredDate&&N.slotTime&&c.jsxs("div",{className:"selected-box",children:["✅ Selected: ",qr(N.preferredDate)," — ",N.slotTime]})]}),c.jsxs("div",{className:"info-box",children:["ℹ️ ",c.jsx("strong",{children:"Date निवडण्यासाठी:"})," वरील available dates मधून date निवडा → नंतर time slot निवडा"]})]}),u===2&&c.jsxs("div",{children:[c.jsx("p",{className:"section-title",children:"Visit Information"}),c.jsx("p",{className:"section-sub",children:"Provide details about your visit to the Mayor"}),c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Reason for Visit ",c.jsx("span",{className:"req",children:"*"})]}),c.jsx("textarea",{className:"f-input",rows:4,value:N.purpose,onChange:V("purpose"),placeholder:"Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा",style:{resize:"vertical"}})]}),c.jsxs("div",{className:"f-grid-2",children:[c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Number of Visitors ",c.jsx("span",{className:"req",children:"*"})]}),c.jsx("input",{className:"f-input",type:"number",min:"1",max:"10",value:N.numberOfVisitors,onChange:V("numberOfVisitors")})]}),c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Ward ",c.jsx("span",{className:"req",children:"*"})]}),c.jsxs("select",{className:"f-input",value:N.ward,onChange:V("ward"),style:{cursor:"pointer"},children:[c.jsx("option",{value:"",children:"Select Ward"}),["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(O=>c.jsx("option",{children:O},O))]})]}),c.jsxs("div",{className:"field",children:[c.jsxs("label",{children:["Have you visited before? ",c.jsx("span",{className:"req",children:"*"})]}),c.jsx("div",{className:"radio-group",children:["No","Yes"].map(O=>c.jsxs("label",{className:`radio-label${N.visitedBefore===(O==="Yes")?" selected":""}`,children:[c.jsx("input",{type:"radio",name:"vb",value:O,checked:N.visitedBefore===(O==="Yes"),onChange:()=>T(v=>({...v,visitedBefore:O==="Yes"})),style:{accentColor:"var(--teal)",width:15,height:15}}),O]},O))})]})]})]}),u===3&&c.jsxs("div",{children:[c.jsx("p",{className:"section-title",children:"Visitor Photo"}),c.jsx("p",{className:"section-sub",children:"Please upload or capture a clear photo for identification at the Mayor's office"}),c.jsxs("div",{style:{display:"flex",gap:12,marginBottom:20},children:[c.jsxs("label",{className:"photo-btn-primary",children:["📁 Upload Photo",c.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:O=>{const v=O.target.files[0];v&&T(k=>({...k,visitorPhoto:v,photoPreview:URL.createObjectURL(v)}))}})]}),c.jsx("button",{type:"button",onClick:me,className:"photo-btn-secondary",children:"📷 Use Webcam"})]}),$?c.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",border:"2px solid var(--border)",marginBottom:16},children:[c.jsx("button",{type:"button",onClick:Z,style:{position:"absolute",top:10,right:10,zIndex:10,width:30,height:30,borderRadius:"50%",background:"#ef4444",color:"#fff",border:"none",cursor:"pointer",fontWeight:800},children:"✕"}),c.jsx("video",{ref:X,autoPlay:!0,playsInline:!0,style:{width:"100%",maxHeight:340,objectFit:"cover",display:"block"}}),c.jsx("canvas",{ref:G,style:{display:"none"}}),c.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:16,background:"linear-gradient(transparent,rgba(0,0,0,0.55))",display:"flex",justifyContent:"center"},children:c.jsx("button",{type:"button",onClick:Re,style:{padding:"11px 30px",borderRadius:9,border:"none",background:"linear-gradient(135deg,var(--teal),var(--green))",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)"},children:"📸 Capture Photo"})})]}):c.jsx("div",{style:{border:"2.5px dashed #b2d8e4",borderRadius:14,padding:36,textAlign:"center",background:"linear-gradient(135deg,#f7fcfe,#f5fef5)",marginBottom:16,transition:"all .2s"},children:N.photoPreview?c.jsxs(c.Fragment,{children:[c.jsx("img",{src:N.photoPreview,alt:"preview",style:{width:110,height:110,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginBottom:14,boxShadow:"0 4px 20px rgba(76,171,193,0.3)"}}),c.jsx("p",{style:{color:"var(--green)",fontWeight:700,fontSize:14,margin:"0 0 4px"},children:"✅ Photo selected"}),c.jsx("p",{style:{color:"#6a9aaa",fontSize:12.5,margin:0,fontWeight:500},children:'Click "Upload Photo" to change'})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{fontSize:44,marginBottom:12,color:"#b2d8e4"},children:"📷"}),c.jsx("p",{style:{color:"#6a9aaa",fontSize:14,margin:0,fontWeight:600},children:"Upload किंवा camera वापरून photo द्या"})]})}),J&&c.jsx("p",{style:{color:"#ef4444",fontSize:13,marginTop:4,fontWeight:600},children:J})]}),u===4&&c.jsxs("div",{children:[c.jsx("p",{className:"section-title",children:"Review & Submit"}),c.jsx("p",{className:"section-sub",children:"सर्व माहिती verify करा आणि submit करा"}),c.jsxs("div",{className:"review-grid",children:[[{title:"Personal Info",rows:[["Name",N.fullName],["Mobile",N.mobileNumber],["Email",N.email||"—"],["Address",N.address],["Pincode",N.pincode||"—"]]},{title:"Appointment",rows:[["Date",qr(N.preferredDate)],["Slot",N.slotTime]]},{title:"Visit Details",rows:[["Purpose",N.purpose],["Visitors",N.numberOfVisitors],["Visited Before",N.visitedBefore?"Yes":"No"],["Ward",N.ward]]}].map((O,v)=>c.jsxs("div",{className:"review-card",style:{animationDelay:`${v*80}ms`},children:[c.jsx("div",{className:"review-card-title",children:O.title}),O.rows.map(([k,Q])=>c.jsxs("div",{className:"review-row",children:[c.jsx("span",{className:"review-key",children:k}),c.jsx("span",{className:"review-val",children:Q})]},k))]},v)),N.photoPreview&&c.jsxs("div",{className:"review-card",style:{textAlign:"center"},children:[c.jsx("div",{className:"review-card-title",children:"Visitor Photo"}),c.jsx("img",{src:N.photoPreview,alt:"v",style:{width:88,height:88,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginTop:8,boxShadow:"0 4px 16px rgba(76,171,193,0.25)"}})]})]}),c.jsx("div",{style:{background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",borderRadius:10,padding:"13px 18px",margin:"16px 0 0",fontSize:13.5,color:"#92400e",fontWeight:600},children:"⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."})]})]},u)}),c.jsxs("div",{className:"book-nav",children:[c.jsx("button",{className:"nav-cancel",onClick:()=>u>0?te():l(-1),children:u>0?"← Back":"CANCEL"}),u<ec.length-1?c.jsx("button",{className:"nav-continue",disabled:B,onClick:K,children:"CONTINUE →"}):c.jsx("button",{className:"nav-continue",disabled:f,onClick:P,children:f?c.jsxs(c.Fragment,{children:[c.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Submitting..."]}):"✔ Submit Appointment"})]})]})})]})}function Lv(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function Hv(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function qv(l){return l?new Date(l).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}const gm={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",label:"⏳ Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",label:"✅ Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",label:"❌ Rejected"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",label:"🕰️ Expired"}};function bm({name:l,photo:i,size:u=40}){const s=l?l.split(" ").map(h=>h[0]).join("").toUpperCase().slice(0,2):"?",f=["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"],d=l?l.charCodeAt(0)%f.length:0;return i?c.jsx("img",{src:i.startsWith("http")?i:`http://localhost:5000/${i}`,alt:l,style:{width:u,height:u,borderRadius:"50%",objectFit:"cover",border:"2px solid #e2e8f0",flexShrink:0}}):c.jsx("div",{style:{width:u,height:u,borderRadius:"50%",background:f[d],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:u*.35,fontWeight:700,fontFamily:"'DM Sans',sans-serif",flexShrink:0,border:"2px solid rgba(255,255,255,0.3)"},children:s})}function Yv({appt:l,onView:i}){const[u,s]=E.useState(!1),f=E.useRef();return E.useEffect(()=>{const d=h=>{f.current&&!f.current.contains(h.target)&&s(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),c.jsxs("div",{ref:f,style:{position:"relative",display:"flex",justifyContent:"center"},children:[c.jsx("button",{onClick:d=>{d.stopPropagation(),s(h=>!h)},style:{background:"none",border:"1px solid #e2e8f0",cursor:"pointer",padding:"4px 8px",borderRadius:6,color:"#6b7280",fontSize:18,lineHeight:1,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:d=>{d.target.style.borderColor="#16a34a",d.target.style.color="#16a34a"},onMouseLeave:d=>{d.target.style.borderColor="#e2e8f0",d.target.style.color="#6b7280"},title:"Actions",children:"⋮"}),u&&c.jsx("div",{style:{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:100,minWidth:150,overflow:"hidden"},children:c.jsx("button",{onClick:d=>{d.stopPropagation(),i(l),s(!1)},style:{display:"block",width:"100%",padding:"10px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:13,color:"#374151",fontFamily:"'DM Sans',sans-serif",fontWeight:500},onMouseEnter:d=>d.target.style.background="#f9fafb",onMouseLeave:d=>d.target.style.background="none",children:"👁 View Details"})})]})}const Vv=[10,25,50],xm="160px 1fr 130px 200px 150px 60px";function Gv(){const l=wn(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[u,s]=E.useState([]),[f,d]=E.useState(!0),[h,x]=E.useState(null),[b,g]=E.useState("all"),[y,S]=E.useState([]),[D,q]=E.useState(!1),[C,N]=E.useState(""),[T,V]=E.useState(1),[X,G]=E.useState(10);E.useEffect(()=>{if(!i){l("/login");return}F()},[]);const F=async()=>{try{d(!0);const Z=await ba.get("/citizen/my-appointments",{params:{citizenId:i._id,mobileNumber:i.mobileNumber}});Z.data.success&&s(Z.data.appointments||[])}catch{}finally{d(!1)}},$=u.filter(Z=>b==="all"||Z.status===b).filter(Z=>{if(!C)return!0;const fe=C.toLowerCase();return Z.tokenId?.toLowerCase().includes(fe)||Z.purpose?.toLowerCase().includes(fe)||Z.fullName?.toLowerCase().includes(fe)}),ee=Math.max(1,Math.ceil($.length/X)),J=$.slice((T-1)*X,T*X),le=Z=>gm[Z?.toLowerCase()]||gm.pending,me=()=>ee<=5?Array.from({length:ee},(Z,fe)=>fe+1):T<=3?[1,2,3,"...",ee]:T>=ee-2?[1,"...",ee-2,ee-1,ee]:[1,"...",T-1,T,T+1,"...",ee],Re=()=>x(null);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&family=Mukta:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

        .ma-root {
          min-height: calc(100vh - 64px);
          background: #f0ece0;
          padding: 32px 24px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
        }

        /* ── inner 90% centered ── */
        .ma-inner {
          width: 95%;
          max-width: 95%;
          margin: 0 auto;
        }

        /* ── Header ── */
        .ma-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 14px;
        }
        .ma-title {
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #2c4a2e;
          letter-spacing: 0px;
          line-height: 1.3;
        }
        .ma-sub {
          font-size: 14px;
          color: #5a5a3a;
          margin-top: 5px;
          font-weight: 500;
        }
        .ma-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .ma-icon-btn {
          width: 42px; height: 42px;
          border-radius: 10px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
          transition: all .15s;
          color: #3a3a2a;
        }
        .ma-icon-btn:hover { border-color: #3a9aaf; background: #edf9fc; color: #1d6e80; }
        .ma-book-btn {
          padding: 11px 22px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #3a9aaf, #2e8a9e);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          display: flex; align-items: center; gap: 7px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          transition: all .2s;
          white-space: nowrap;
          box-shadow: 0 3px 12px rgba(58,154,175,0.35);
        }
        .ma-book-btn:hover { background: linear-gradient(135deg, #2e8a9e, #1d6e80); transform: translateY(-1px); box-shadow: 0 5px 16px rgba(58,154,175,0.45); }

        /* ── Search ── */
        .search-wrap { position: relative; }
        .search-input {
          height: 42px;
          padding: 0 16px 0 40px;
          border: 1.5px solid #d4b870;
          border-radius: 10px;
          font-size: 13px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          background: #fffef8;
          outline: none;
          width: 240px;
          transition: border-color .2s, box-shadow .2s;
          color: #3a3a2a;
        }
        .search-input:focus { border-color: #3a9aaf; box-shadow: 0 0 0 3px rgba(58,154,175,0.12); }
        .search-icon {
          position: absolute; left: 12px; top: 50%;
          transform: translateY(-50%);
          color: #a09060; font-size: 15px; pointer-events: none;
        }

        /* ── Filter row ── */
        .filter-search-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .filter-tabs { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .filter-label { font-size: 12px; font-weight: 700; color: #6a5a30; text-transform: uppercase; letter-spacing: .5px; }
        .ftab {
          padding: 7px 18px;
          border-radius: 20px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all .15s;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          color: #5a5a3a;
        }
        .ftab:hover { border-color: #3a9aaf; color: #1d6e80; background: #edf9fc; }
        .ftab.active { background: linear-gradient(135deg, #3a9aaf, #2e8a9e); border-color: #3a9aaf; color: #fff; }

        /* ── Table card ── */
        .table-card {
          background: #fffef8;
          border-radius: 14px;
          border: 1.5px solid #d4b870;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          width: 100%;
        }

        /* ── FIX: Horizontal scroll wrapper for small screens ── */
        .table-scroll-wrapper {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .table-scroll-inner {
          min-width: 780px;
        }

        /* ── Table header ── */
        .tbl-head {
          display: grid;
          grid-template-columns: ${xm};
          align-items: center;
          padding: 0 24px;
          background: linear-gradient(135deg, #3a9aaf, #2a7a8e);
          min-height: 52px;
          width: 100%;
        }
        .tbl-head-cell {
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: .8px;
          display: flex;
          align-items: center;
          gap: 5px;
          user-select: none;
        }
        .sort-icon { font-size: 11px; opacity: .7; cursor: pointer; }

        /* ── Table rows — same grid ── */
        .tbl-row {
          display: grid;
          grid-template-columns: ${xm};
          align-items: center;
          padding: 0 24px;
          min-height: 72px;
          border-bottom: 1px solid #e8dfa0;
          cursor: pointer;
          transition: background .12s;
          width: 100%;
        }
        .tbl-row:last-child { border-bottom: none; }
        .tbl-row:hover { background: #fdf8ee; }
        .tbl-row.row-checked { background: #edf9fc; }

        /* ── Cells ── */
        .cell-token {
          font-size: 13px;
          font-weight: 700;
          color: #2c4a2e;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          letter-spacing: -0.2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cell-purpose-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-right: 16px;
          overflow: hidden;
          min-width: 0;
        }
        .cell-purpose-text { overflow: hidden; min-width: 0; }
        .cell-purpose-text .purpose-title {
          font-size: 15px;
          font-weight: 700;
          color: #2c3e28;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.3;
        }
        .cell-purpose-text .purpose-sub {
          font-size: 12px;
          color: #8a7a50;
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cell-date {
          font-size: 14px;
          font-weight: 600;
          color: #3a3a2a;
        }
        .cell-slot {
          font-size: 13px;
          color: #3a3a2a;
          font-weight: 500;
        }
        .status-badge {
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          border: 1.5px solid;
        }

        /* ── Footer ── */
        .tbl-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          border-top: 1px solid #e8dfa0;
          flex-wrap: wrap;
          gap: 10px;
          background: #fffef8;
          border-radius: 0 0 14px 14px;
          width: 100%;
        }
        .footer-left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #6a5a30;
          font-weight: 500;
        }
        .page-size-select {
          height: 32px;
          padding: 0 8px;
          border: 1.5px solid #d4b870;
          border-radius: 8px;
          font-size: 13px;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          background: #fffef8;
          cursor: pointer;
          outline: none;
          color: #3a3a2a;
          font-weight: 600;
        }
        .pagination { display: flex; align-items: center; gap: 6px; }
        .pg-btn {
          width: 34px; height: 34px;
          border-radius: 8px;
          border: 1.5px solid #d4b870;
          background: #fffef8;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Noto Sans', 'Mukta', sans-serif;
          color: #3a3a2a;
          transition: all .15s;
          display: flex; align-items: center; justify-content: center;
        }
        .pg-btn:hover:not(:disabled):not(.pg-ellipsis) { border-color: #3a9aaf; color: #1d6e80; background: #edf9fc; }
        .pg-btn.active { background: linear-gradient(135deg, #3a9aaf, #2e8a9e); border-color: #3a9aaf; color: #fff; }
        .pg-btn:disabled { opacity: .4; cursor: not-allowed; }
        .pg-btn.pg-ellipsis { border-color: transparent; background: none; cursor: default; pointer-events: none; }
        .pg-arrow { font-size: 16px; }

        /* ── Empty ── */
        .empty-box { padding: 64px 32px; text-align: center; }

        /* ── FIX: Modal overlay — sits below navbar (64px) and scrolls within remaining viewport ── */
        .modal-overlay {
          position: fixed;
          top: 64px;        /* offset for navbar height */
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15,23,42,0.6);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          backdrop-filter: blur(4px);
          overflow-y: auto;  /* allow scroll if modal is taller than remaining space */
        }
        .modal-card {
          background: #fffef8;
          border-radius: 18px;
          width: 100%;
          max-width: 500px;
          max-height: calc(100vh - 96px); /* viewport minus navbar (64px) minus some padding (32px) */
          overflow-y: auto;
          box-shadow: 0 24px 64px rgba(0,0,0,0.25);
          border: 1.5px solid #d4b870;
          position: relative; /* ensure it stacks correctly above overlay */
        }
        .modal-header {
          background: linear-gradient(135deg, #3a9aaf 0%, #2a7a8e 60%, #C9963A 100%);
          padding: 22px 24px;
          color: #fff;
          border-radius: 18px 18px 0 0;
          display: flex; justify-content: space-between; align-items: center;
        }
        /* ── FIX: Close button — explicit type, pointer-events ensured ── */
        .modal-close {
          background: rgba(255,255,255,0.15);
          border: none;
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background .15s;
          flex-shrink: 0;
          pointer-events: all;
          line-height: 1;
          padding: 0;
        }
        .modal-close:hover { background: rgba(255,255,255,0.3); }
        .modal-body { padding: 24px; }
        .modal-row {
          display: flex; justify-content: space-between;
          padding: 10px 0; border-bottom: 1px solid #e8dfa0;
          font-size: 13px;
        }
        .modal-row:last-child { border-bottom: none; }
        .modal-key { color: #7a6a3a; font-weight: 600; }
        .modal-val { color: #2c3e28; font-weight: 700; text-align: right; max-width: 60%; word-break: break-word; }

        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }
        .tbl-row { animation: fadeIn .2s ease both; }
      `}),c.jsx("div",{className:"ma-root",children:c.jsxs("div",{className:"ma-inner",children:[c.jsxs("div",{className:"ma-header",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"ma-title",children:"My Appointments"}),c.jsxs("p",{className:"ma-sub",children:["Hello,",i?.fullName||`Citizen  ${i?.citizenId||""}`," 👋 — all your appointments are here."]})]}),c.jsxs("div",{className:"ma-actions",children:[c.jsx("button",{className:"ma-icon-btn",title:"Refresh",onClick:F,children:"↻"}),c.jsxs("button",{className:"ma-book-btn",onClick:()=>l("/book-appointment"),children:[c.jsx("span",{style:{fontSize:18,lineHeight:1},children:"+"})," New Appointment"]})]})]}),c.jsxs("div",{className:"filter-search-row",children:[c.jsxs("div",{className:"filter-tabs",children:[c.jsx("span",{className:"filter-label",children:"Status"}),[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"approved",label:"Approved"},{key:"rejected",label:"Rejected"},{key:"expired",label:"Expired"}].map(Z=>c.jsxs("button",{className:`ftab${b===Z.key?" active":""}`,onClick:()=>{g(Z.key),S([]),q(!1),V(1)},children:[Z.label," (",Z.key==="all"?u.length:u.filter(fe=>fe.status===Z.key).length,")"]},Z.key))]}),c.jsxs("div",{className:"search-wrap",children:[c.jsx("span",{className:"search-icon",children:"🔍"}),c.jsx("input",{className:"search-input",type:"text",placeholder:"Search appointment",value:C,onChange:Z=>{N(Z.target.value),V(1)}})]})]}),c.jsxs("div",{className:"table-card",children:[c.jsx("div",{className:"table-scroll-wrapper",children:c.jsxs("div",{className:"table-scroll-inner",children:[c.jsxs("div",{className:"tbl-head",children:[c.jsxs("div",{className:"tbl-head-cell",children:["# TOKEN ID ",c.jsx("span",{className:"sort-icon",children:"⇅"})]}),c.jsx("div",{className:"tbl-head-cell",children:"PURPOSE"}),c.jsxs("div",{className:"tbl-head-cell",children:["DATE ",c.jsx("span",{className:"sort-icon",children:"⇅"})]}),c.jsx("div",{className:"tbl-head-cell",children:"SLOT"}),c.jsxs("div",{className:"tbl-head-cell",children:["STATUS ",c.jsx("span",{className:"sort-icon",children:"⇅"})]}),c.jsx("div",{className:"tbl-head-cell",children:"ACTIONS"})]}),f?c.jsxs("div",{style:{textAlign:"center",padding:"56px 0"},children:[c.jsx("div",{style:{width:34,height:34,border:"3px solid #e2e8f0",borderTopColor:"#16a34a",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 14px"}}),c.jsx("p",{style:{color:"#94a3b8",fontSize:14},children:"Appointments लोड होत आहेत..."})]}):J.length===0?c.jsxs("div",{className:"empty-box",children:[c.jsx("div",{style:{fontSize:48,marginBottom:14},children:"📅"}),c.jsx("p",{style:{color:"#374151",fontWeight:700,fontSize:16,marginBottom:6},children:b==="all"&&!C?"कोणतेही appointments नाहीत":`No ${b!=="all"?b:""} appointments found`}),c.jsx("p",{style:{color:"#94a3b8",fontSize:14,marginBottom:20},children:b==="all"&&!C?"Book your first appointment to get started.":"Try a different filter or search term."}),b==="all"&&!C&&c.jsx("button",{className:"ma-book-btn",style:{margin:"0 auto",display:"inline-flex"},onClick:()=>l("/book-appointment"),children:"+ Book Appointment"})]}):J.map((Z,fe)=>{const Ae=le(Z.status),ke=y.includes(fe),Ve=Z.purpose?Z.purpose.length>40?Z.purpose.slice(0,40)+"…":Z.purpose:"—";return c.jsxs("div",{className:`tbl-row${ke?" row-checked":""}`,style:{animationDelay:`${fe*40}ms`},onClick:()=>x(Z),children:[c.jsx("div",{className:"cell-token",children:Z.tokenId||"—"}),c.jsxs("div",{className:"cell-purpose-wrap",children:[c.jsx(bm,{name:Z.fullName,photo:Z.visitorPhoto,size:38}),c.jsxs("div",{className:"cell-purpose-text",children:[c.jsx("div",{className:"purpose-title",children:Ve}),c.jsx("div",{className:"purpose-sub",children:Z.fullName||"नागरिक"})]})]}),c.jsx("div",{className:"cell-date",children:Hv(Z.preferredDate)}),c.jsx("div",{className:"cell-slot",children:Z.slotTime||"—"}),c.jsx("div",{children:c.jsx("span",{className:"status-badge",style:{background:Ae.bg,color:Ae.color,borderColor:Ae.border},children:Ae.label})}),c.jsx("div",{onClick:B=>B.stopPropagation(),children:c.jsx(Yv,{appt:Z,onView:x})})]},fe)})]})}),!f&&$.length>0&&c.jsxs("div",{className:"tbl-footer",children:[c.jsxs("div",{className:"footer-left",children:[c.jsx("span",{children:"Show"}),c.jsx("select",{className:"page-size-select",value:X,onChange:Z=>{G(Number(Z.target.value)),V(1)},children:Vv.map(Z=>c.jsx("option",{value:Z,children:Z},Z))}),c.jsxs("span",{children:["of ",c.jsx("strong",{children:$.length})," results"]}),y.length>0&&c.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:["· ",y.length," selected"]})]}),c.jsxs("div",{className:"pagination",children:[c.jsx("button",{className:"pg-btn",onClick:()=>V(Z=>Math.max(1,Z-1)),disabled:T===1,children:c.jsx("span",{className:"pg-arrow",children:"‹"})}),me().map((Z,fe)=>Z==="..."?c.jsx("button",{className:"pg-btn pg-ellipsis",children:"…"},`ell-${fe}`):c.jsx("button",{className:`pg-btn${T===Z?" active":""}`,onClick:()=>V(Z),children:Z},Z)),c.jsx("button",{className:"pg-btn",onClick:()=>V(Z=>Math.min(ee,Z+1)),disabled:T===ee,children:c.jsx("span",{className:"pg-arrow",children:"›"})})]})]})]})]})}),h&&c.jsx("div",{className:"modal-overlay",onClick:Re,children:c.jsxs("div",{className:"modal-card",onClick:Z=>Z.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("div",{children:[c.jsx("p",{style:{margin:0,fontSize:10,opacity:.6,textTransform:"uppercase",letterSpacing:1},children:"Appointment Details"}),c.jsx("h3",{style:{margin:"4px 0 0",fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"},children:h.tokenId})]}),c.jsx("button",{type:"button",className:"modal-close",onClick:Re,children:"✕"})]}),c.jsxs("div",{className:"modal-body",children:[c.jsx("div",{style:{textAlign:"center",marginBottom:20},children:c.jsx(bm,{name:h.fullName,photo:h.visitorPhoto,size:80})}),(()=>{const Z=le(h.status);return c.jsx("div",{style:{textAlign:"center",marginBottom:16},children:c.jsx("span",{className:"status-badge",style:{background:Z.bg,color:Z.color,borderColor:Z.border,fontSize:13,padding:"6px 20px"},children:Z.label})})})(),[["Name",h.fullName],["Mobile",h.mobileNumber],["Email",h.email||"—"],["Address",h.address||"—"],["Date",Lv(h.preferredDate)],["Slot",h.slotTime],["Purpose",h.purpose],["Visitors",h.numberOfVisitors],["Visited Before",h.visitedBefore?"Yes":"No"],["Ward",h.ward||"—"],["Booked On",qv(h.createdAt)]].map(([Z,fe])=>fe?c.jsxs("div",{className:"modal-row",children:[c.jsx("span",{className:"modal-key",children:Z}),c.jsx("span",{className:"modal-val",children:fe})]},Z):null),h.adminNote&&c.jsxs("div",{style:{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:13,color:"#92400e"},children:[c.jsx("strong",{children:"Admin Note:"})," ",h.adminNote]}),h.qrCode&&c.jsxs("div",{style:{textAlign:"center",marginTop:20,paddingTop:16,borderTop:"1px solid #f1f5f9"},children:[c.jsx("p",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"QR Code — भेटीच्या दिवशी दाखवा"}),c.jsx("img",{src:h.qrCode,alt:"QR",style:{width:130,height:130}})]})]})]})})]})}const Xv="/assets/vvcmcmap-CYqCsd68.png";function Qv(){const l=wn(),i=new Date().getFullYear(),u=()=>window.scrollTo({top:0,behavior:"smooth"});return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --foot-bg:    #0d2e2a;
          --foot-mid:   #102e2b;
          --foot-line:  rgba(81,171,172,0.18);
          --gold:       #F5E6BF;
          --teal:       #51ABAC;
          --blue:       #4CABBF;
          --green:      #028945;
          --gold-strip: #D09A50;
        }

        /* ══ FOOTER WRAPPER ═══════════════════════════════════ */
        .footer {
          background: var(--foot-bg);
          color: rgba(255,255,255,0.82);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* subtle diagonal line decoration like Ataraxis */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            linear-gradient(135deg, rgba(81,171,172,0.04) 0%, transparent 50%),
            repeating-linear-gradient(
              135deg,
              transparent 0px, transparent 80px,
              rgba(81,171,172,0.04) 80px, rgba(81,171,172,0.04) 81px
            );
          pointer-events: none;
          z-index: 0;
        }

        .footer-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 72px 48px 48px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 48px;
        }

        /* ── Column 1: Brand + address ── */
        .footer-brand { }
        .footer-logo-row {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
        }
        .footer-logo-circle {
          width: 48px; height: 48px; border-radius: 50%;
          background: var(--teal);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(81,171,172,0.3);
        }
        .footer-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px; font-weight: 700;
          color: var(--gold); line-height: 1.3;
        }
        .footer-brand-sub {
          font-size: 10px; color: var(--teal);
          letter-spacing: 1px; text-transform: uppercase;
          font-weight: 600; margin-top: 2px;
        }

        .footer-tagline {
          font-size: 13px; color: rgba(255,255,255,0.55);
          line-height: 1.75; margin-bottom: 24px;
          max-width: 280px;
        }

        /* address block */
        .footer-address { margin-bottom: 24px; }
        .footer-address-title {
          font-size: 11px; font-weight: 700; color: var(--teal);
          text-transform: uppercase; letter-spacing: 0.8px;
          margin-bottom: 10px;
        }
        .footer-address-text {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px; color: rgba(255,255,255,0.7);
          line-height: 1.85;
        }

        /* contact numbers */
        .footer-contacts { display: flex; flex-direction: column; gap: 6px; }
        .footer-contact-row {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; color: rgba(255,255,255,0.65);
        }
        .footer-contact-icon { color: var(--teal); font-size: 14px; flex-shrink: 0; margin-top: 1px; }
        .footer-contact-label { color: rgba(255,255,255,0.4); font-size: 11px; }

        /* ── Column 2: Site Map ── */
        .footer-col-title {
          font-size: 13px; font-weight: 700; color: #fff;
          letter-spacing: 0.5px; margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--foot-line);
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links li a,
        .footer-links li button {
          font-size: 13px; color: rgba(255,255,255,0.6);
          text-decoration: none; background: none; border: none;
          cursor: pointer; padding: 0;
          transition: color .18s, padding-left .18s;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-links li a:hover,
        .footer-links li button:hover { color: var(--teal); padding-left: 4px; }
        .footer-links li a::before,
        .footer-links li button::before { content: '›'; color: var(--teal); font-size: 15px; }

        /* ── Column 3: Contact / Social ── */
        .footer-social { display: flex; gap: 10px; margin-bottom: 24px; }
        .footer-social-btn {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(81,171,172,0.3);
          background: rgba(81,171,172,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6); font-size: 15px;
          cursor: pointer; transition: all .18s; text-decoration: none;
        }
        .footer-social-btn:hover { background: var(--teal); color: #fff; border-color: var(--teal); }

        .footer-whatsapp-chip {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(37,211,102,0.12);
          border: 1px solid rgba(37,211,102,0.25);
          border-radius: 999px; padding: 8px 16px;
          font-size: 13px; color: #25d366; font-weight: 600;
          text-decoration: none; transition: all .18s;
          margin-bottom: 16px;
        }
        .footer-whatsapp-chip:hover { background: rgba(37,211,102,0.22); }

        /* ── Column 4: Map ── */
        .footer-map-wrap {
          border-radius: 14px; overflow: hidden;
          border: 1px solid rgba(81,171,172,0.2);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          position: relative;
        }
        .footer-map-wrap img { width: 100%; display: block; object-fit: cover; height: 220px; opacity: 0.85; }
        .footer-map-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(0deg, rgba(13,46,42,0.95) 0%, transparent 100%);
          padding: 14px 14px 10px;
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 12px; color: var(--gold); font-weight: 600;
          text-align: center;
        }

        /* ══ DIVIDER ══════════════════════════════════════════ */
        .footer-divider {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          height: 1px; background: var(--foot-line);
          margin-left: 48px; margin-right: 48px;
        }

        /* ══ FOOTER BOTTOM ════════════════════════════════════ */
        .footer-bottom {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 20px 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 12px; color: rgba(255,255,255,0.38);
        }
        .footer-back-top {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(81,171,172,0.35);
          background: transparent;
          border-radius: 999px; padding: 8px 20px;
          font-size: 12px; font-weight: 700; color: var(--teal);
          cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .footer-back-top:hover { background: rgba(81,171,172,0.12); transform: translateY(-2px); }
        .footer-back-top svg { transition: transform .2s; }
        .footer-back-top:hover svg { transform: translateY(-3px); }

        /* ══ GOLD STRIP at very bottom ════════════════════════ */
        .footer-gold-strip {
          background: var(--gold-strip);
          text-align: center; padding: 8px 24px;
          font-size: 11px; color: rgba(0,0,0,0.55);
          font-weight: 600; letter-spacing: 0.3px;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media(max-width:1024px){
          .footer-body { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media(max-width:640px){
          .footer-body { grid-template-columns: 1fr; padding: 48px 24px 32px; }
          .footer-bottom { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .footer-divider { margin-left: 24px; margin-right: 24px; }
        }
      `}),c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"footer-body",children:[c.jsxs("div",{className:"footer-brand",children:[c.jsxs("div",{className:"footer-logo-row",children:[c.jsx("div",{className:"cn-logo-wrap",children:c.jsx("img",{src:ag,alt:"VVCMC"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"footer-brand-name",children:["वसई-विरार शहर",c.jsx("br",{}),"महानगरपालिका"]}),c.jsx("div",{className:"footer-brand-sub",children:"VVCMC — जन संवाद"})]})]}),c.jsx("p",{className:"footer-tagline",children:"नागरिकांसाठी, नागरिकांकडून — पारदर्शक, जलद आणि डिजिटल सेवा देण्यासाठी वचनबद्ध."}),c.jsxs("div",{className:"footer-address",children:[c.jsx("div",{className:"footer-address-title",children:"मुख्य कार्यालय"}),c.jsxs("div",{className:"footer-address-text",children:["विराट नगर, म्हाडा कॉलनी जवळ,",c.jsx("br",{}),"विरार पश्चिम.",c.jsx("br",{}),"पिन : 401303"]})]}),c.jsxs("div",{className:"footer-contacts",children:[c.jsxs("div",{className:"footer-contact-row",children:[c.jsx("span",{className:"footer-contact-icon",children:"📞"}),c.jsxs("div",{children:[c.jsx("div",{className:"footer-contact-label",children:"मुख्य कार्यालय"}),c.jsx("div",{children:"0250-6630000"})]})]}),c.jsxs("div",{className:"footer-contact-row",children:[c.jsx("span",{className:"footer-contact-icon",children:"🚨"}),c.jsxs("div",{children:[c.jsx("div",{className:"footer-contact-label",children:"आपत्ती व्यवस्थापन"}),c.jsx("div",{children:"0250-2334546 / 0250-2334547"})]})]}),c.jsxs("div",{className:"footer-contact-row",children:[c.jsx("span",{className:"footer-contact-icon",children:"📱"}),c.jsxs("div",{children:[c.jsx("div",{className:"footer-contact-label",children:"Helpline"}),c.jsx("div",{children:"7058911125 / 7058991430 / 8446427643"})]})]})]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"footer-col-title",children:"Site Map"}),c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{children:c.jsx("button",{onClick:()=>l("/"),children:"Home"})}),c.jsx("li",{children:c.jsx("button",{onClick:()=>l("/book-appointment"),children:"Appointment बुक करा"})}),c.jsx("li",{children:c.jsx("button",{onClick:()=>l("/my-appointments"),children:"My Appointments"})}),c.jsx("li",{children:c.jsx("button",{onClick:()=>l("/register"),children:"Register"})}),c.jsx("li",{children:c.jsx("button",{onClick:()=>l("/login"),children:"Login"})})]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"footer-col-title",children:"संपर्क साधा"}),c.jsxs("a",{className:"footer-whatsapp-chip",href:"https://wa.me/919665877727",target:"_blank",rel:"noreferrer",children:[c.jsx("span",{children:"💬"})," WhatsApp Chatbot"]}),c.jsxs("div",{className:"footer-contact-row",style:{marginBottom:"14px"},children:[c.jsx("span",{className:"footer-contact-icon",children:"💬"}),c.jsxs("div",{children:[c.jsx("div",{className:"footer-contact-label",children:"WhatsApp"}),c.jsx("div",{children:"9665877727"})]})]}),c.jsx("div",{className:"footer-col-title",style:{marginTop:"20px"},children:"Follow Us"}),c.jsxs("div",{className:"footer-social",children:[c.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Facebook",children:"𝑓"}),c.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Twitter",children:"𝕏"}),c.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Instagram",children:"◎"}),c.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"YouTube",children:"▶"})]}),c.jsx("div",{className:"footer-col-title",style:{marginTop:"8px"},children:"Legal"}),c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{children:c.jsx("a",{href:"#",children:"Privacy Policy"})}),c.jsx("li",{children:c.jsx("a",{href:"#",children:"Terms of Service"})}),c.jsx("li",{children:c.jsx("a",{href:"#",children:"RTI माहिती"})})]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"footer-col-title",children:"VVCMC क्षेत्र नकाशा"}),c.jsxs("div",{className:"footer-map-wrap",children:[c.jsx("img",{src:Xv,alt:"वसई विरार महानगरपालिका नकाशा"}),c.jsx("div",{className:"footer-map-label",children:"वसई-विरार शहर महानगरपालिका — Ward Map"})]})]})]}),c.jsx("div",{className:"footer-divider"}),c.jsxs("div",{className:"footer-bottom",children:[c.jsxs("div",{className:"footer-copy",children:["© ",i," वसई-विरार शहर महानगरपालिका. सर्व हक्क राखीव."]}),c.jsxs("button",{className:"footer-back-top",onClick:u,children:[c.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:c.jsx("path",{d:"M6 10V2M6 2L2 6M6 2L10 6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Top"]})]}),c.jsx("div",{className:"footer-gold-strip",children:"Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — जन संवाद"})]})]})}function ym({children:l}){return localStorage.getItem("citizenUser")?l:c.jsx(Wm,{to:"/login",replace:!0})}function Zv(){return c.jsxs(c.Fragment,{children:[c.jsx(ty,{}),c.jsxs(S1,{children:[c.jsx(pa,{path:"/",element:c.jsx(iy,{})}),c.jsx(pa,{path:"/login",element:c.jsx(kv,{})}),c.jsx(pa,{path:"/register",element:c.jsx(Uv,{})}),c.jsx(pa,{path:"/book-appointment",element:c.jsx(ym,{children:c.jsx(Bv,{})})}),c.jsx(pa,{path:"/my-appointments",element:c.jsx(ym,{children:c.jsx(Gv,{})})}),c.jsx(pa,{path:"*",element:c.jsx(Wm,{to:"/",replace:!0})})]}),c.jsx(Qv,{})]})}var tc={exports:{}},nc={};var vm;function Jv(){if(vm)return nc;vm=1;var l=oo();function i(b,g){return b===g&&(b!==0||1/b===1/g)||b!==b&&g!==g}var u=typeof Object.is=="function"?Object.is:i,s=l.useSyncExternalStore,f=l.useRef,d=l.useEffect,h=l.useMemo,x=l.useDebugValue;return nc.useSyncExternalStoreWithSelector=function(b,g,y,S,D){var q=f(null);if(q.current===null){var C={hasValue:!1,value:null};q.current=C}else C=q.current;q=h(function(){function T($){if(!V){if(V=!0,X=$,$=S($),D!==void 0&&C.hasValue){var ee=C.value;if(D(ee,$))return G=ee}return G=$}if(ee=G,u(X,$))return ee;var J=S($);return D!==void 0&&D(ee,J)?(X=$,ee):(X=$,G=J)}var V=!1,X,G,F=y===void 0?null:y;return[function(){return T(g())},F===null?void 0:function(){return T(F())}]},[g,y,S,D]);var N=s(b,q[0],q[1]);return d(function(){C.hasValue=!0,C.value=N},[N]),x(N),N},nc}var Sm;function Kv(){return Sm||(Sm=1,tc.exports=Jv()),tc.exports}Kv();function Fv(l){l()}function $v(){let l=null,i=null;return{clear(){l=null,i=null},notify(){Fv(()=>{let u=l;for(;u;)u.callback(),u=u.next})},get(){const u=[];let s=l;for(;s;)u.push(s),s=s.next;return u},subscribe(u){let s=!0;const f=i={callback:u,next:null,prev:i};return f.prev?f.prev.next=f:l=f,function(){!s||l===null||(s=!1,f.next?f.next.prev=f.prev:i=f.prev,f.prev?f.prev.next=f.next:l=f.next)}}}}var wm={notify(){},get:()=>[]};function Wv(l,i){let u,s=wm,f=0,d=!1;function h(N){y();const T=s.subscribe(N);let V=!1;return()=>{V||(V=!0,T(),S())}}function x(){s.notify()}function b(){C.onStateChange&&C.onStateChange()}function g(){return d}function y(){f++,u||(u=l.subscribe(b),s=$v())}function S(){f--,u&&f===0&&(u(),u=void 0,s.clear(),s=wm)}function D(){d||(d=!0,y())}function q(){d&&(d=!1,S())}const C={addNestedSub:h,notifyNestedSubs:x,handleChangeWrapper:b,isSubscribed:g,trySubscribe:D,tryUnsubscribe:q,getListeners:()=>s};return C}var Pv=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Iv=Pv(),e2=()=>typeof navigator<"u"&&navigator.product==="ReactNative",t2=e2(),n2=()=>Iv||t2?E.useLayoutEffect:E.useEffect,a2=n2(),l2=Symbol.for("react-redux-context"),i2=typeof globalThis<"u"?globalThis:{};function r2(){if(!E.createContext)return{};const l=i2[l2]??=new Map;let i=l.get(E.createContext);return i||(i=E.createContext(null),l.set(E.createContext,i)),i}var o2=r2();function s2(l){const{children:i,context:u,serverState:s,store:f}=l,d=E.useMemo(()=>{const b=Wv(f);return{store:f,subscription:b,getServerState:s?()=>s:void 0}},[f,s]),h=E.useMemo(()=>f.getState(),[f]);a2(()=>{const{subscription:b}=d;return b.onStateChange=b.notifyNestedSubs,b.trySubscribe(),h!==f.getState()&&b.notifyNestedSubs(),()=>{b.tryUnsubscribe(),b.onStateChange=void 0}},[d,h]);const x=u||o2;return E.createElement(x.Provider,{value:d},i)}var u2=s2;function tt(l){return`Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}var c2=typeof Symbol=="function"&&Symbol.observable||"@@observable",jm=c2,ac=()=>Math.random().toString(36).substring(7).split("").join("."),f2={INIT:`@@redux/INIT${ac()}`,REPLACE:`@@redux/REPLACE${ac()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ac()}`},Ir=f2;function Oc(l){if(typeof l!="object"||l===null)return!1;let i=l;for(;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return Object.getPrototypeOf(l)===i||Object.getPrototypeOf(l)===null}function Ag(l,i,u){if(typeof l!="function")throw new Error(tt(2));if(typeof i=="function"&&typeof u=="function"||typeof u=="function"&&typeof arguments[3]=="function")throw new Error(tt(0));if(typeof i=="function"&&typeof u>"u"&&(u=i,i=void 0),typeof u<"u"){if(typeof u!="function")throw new Error(tt(1));return u(Ag)(l,i)}let s=l,f=i,d=new Map,h=d,x=0,b=!1;function g(){h===d&&(h=new Map,d.forEach((T,V)=>{h.set(V,T)}))}function y(){if(b)throw new Error(tt(3));return f}function S(T){if(typeof T!="function")throw new Error(tt(4));if(b)throw new Error(tt(5));let V=!0;g();const X=x++;return h.set(X,T),function(){if(V){if(b)throw new Error(tt(6));V=!1,g(),h.delete(X),d=null}}}function D(T){if(!Oc(T))throw new Error(tt(7));if(typeof T.type>"u")throw new Error(tt(8));if(typeof T.type!="string")throw new Error(tt(17));if(b)throw new Error(tt(9));try{b=!0,f=s(f,T)}finally{b=!1}return(d=h).forEach(X=>{X()}),T}function q(T){if(typeof T!="function")throw new Error(tt(10));s=T,D({type:Ir.REPLACE})}function C(){const T=S;return{subscribe(V){if(typeof V!="object"||V===null)throw new Error(tt(11));function X(){const F=V;F.next&&F.next(y())}return X(),{unsubscribe:T(X)}},[jm](){return this}}}return D({type:Ir.INIT}),{dispatch:D,subscribe:S,getState:y,replaceReducer:q,[jm]:C}}function d2(l){Object.keys(l).forEach(i=>{const u=l[i];if(typeof u(void 0,{type:Ir.INIT})>"u")throw new Error(tt(12));if(typeof u(void 0,{type:Ir.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(tt(13))})}function p2(l){const i=Object.keys(l),u={};for(let d=0;d<i.length;d++){const h=i[d];typeof l[h]=="function"&&(u[h]=l[h])}const s=Object.keys(u);let f;try{d2(u)}catch(d){f=d}return function(h={},x){if(f)throw f;let b=!1;const g={};for(let y=0;y<s.length;y++){const S=s[y],D=u[S],q=h[S],C=D(q,x);if(typeof C>"u")throw x&&x.type,new Error(tt(14));g[S]=C,b=b||C!==q}return b=b||s.length!==Object.keys(h).length,b?g:h}}function eo(...l){return l.length===0?i=>i:l.length===1?l[0]:l.reduce((i,u)=>(...s)=>i(u(...s)))}function h2(...l){return i=>(u,s)=>{const f=i(u,s);let d=()=>{throw new Error(tt(15))};const h={getState:f.getState,dispatch:(b,...g)=>d(b,...g)},x=l.map(b=>b(h));return d=eo(...x)(f.dispatch),{...f,dispatch:d}}}function m2(l){return Oc(l)&&"type"in l&&typeof l.type=="string"}var Rg=Symbol.for("immer-nothing"),Nm=Symbol.for("immer-draftable"),rt=Symbol.for("immer-state");function Vt(l,...i){throw new Error(`[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`)}var zt=Object,il=zt.getPrototypeOf,to="constructor",go="prototype",dc="configurable",no="enumerable",Fr="writable",ci="value",vn=l=>!!l&&!!l[rt];function Gt(l){return l?_g(l)||xo(l)||!!l[Nm]||!!l[to]?.[Nm]||yo(l)||vo(l):!1}var g2=zt[go][to].toString(),Em=new WeakMap;function _g(l){if(!l||!Dc(l))return!1;const i=il(l);if(i===null||i===zt[go])return!0;const u=zt.hasOwnProperty.call(i,to)&&i[to];if(u===Object)return!0;if(!al(u))return!1;let s=Em.get(u);return s===void 0&&(s=Function.toString.call(u),Em.set(u,s)),s===g2}function bo(l,i,u=!0){yi(l)===0?(u?Reflect.ownKeys(l):zt.keys(l)).forEach(f=>{i(f,l[f],l)}):l.forEach((s,f)=>i(f,s,l))}function yi(l){const i=l[rt];return i?i.type_:xo(l)?1:yo(l)?2:vo(l)?3:0}var zm=(l,i,u=yi(l))=>u===2?l.has(i):zt[go].hasOwnProperty.call(l,i),pc=(l,i,u=yi(l))=>u===2?l.get(i):l[i],ao=(l,i,u,s=yi(l))=>{s===2?l.set(i,u):s===3?l.add(u):l[i]=u};function b2(l,i){return l===i?l!==0||1/l===1/i:l!==l&&i!==i}var xo=Array.isArray,yo=l=>l instanceof Map,vo=l=>l instanceof Set,Dc=l=>typeof l=="object",al=l=>typeof l=="function",lc=l=>typeof l=="boolean";function x2(l){const i=+l;return Number.isInteger(i)&&String(i)===l}var gn=l=>l.copy_||l.base_,Mc=l=>l.modified_?l.copy_:l.base_;function hc(l,i){if(yo(l))return new Map(l);if(vo(l))return new Set(l);if(xo(l))return Array[go].slice.call(l);const u=_g(l);if(i===!0||i==="class_only"&&!u){const s=zt.getOwnPropertyDescriptors(l);delete s[rt];let f=Reflect.ownKeys(s);for(let d=0;d<f.length;d++){const h=f[d],x=s[h];x[Fr]===!1&&(x[Fr]=!0,x[dc]=!0),(x.get||x.set)&&(s[h]={[dc]:!0,[Fr]:!0,[no]:x[no],[ci]:l[h]})}return zt.create(il(l),s)}else{const s=il(l);if(s!==null&&u)return{...l};const f=zt.create(s);return zt.assign(f,l)}}function kc(l,i=!1){return So(l)||vn(l)||!Gt(l)||(yi(l)>1&&zt.defineProperties(l,{set:Yr,add:Yr,clear:Yr,delete:Yr}),zt.freeze(l),i&&bo(l,(u,s)=>{kc(s,!0)},!1)),l}function y2(){Vt(2)}var Yr={[ci]:y2};function So(l){return l===null||!Dc(l)?!0:zt.isFrozen(l)}var lo="MapSet",mc="Patches",Tm="ArrayMethods",Og={};function xa(l){const i=Og[l];return i||Vt(0,l),i}var Cm=l=>!!Og[l],fi,Dg=()=>fi,v2=(l,i)=>({drafts_:[],parent_:l,immer_:i,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Cm(lo)?xa(lo):void 0,arrayMethodsPlugin_:Cm(Tm)?xa(Tm):void 0});function Am(l,i){i&&(l.patchPlugin_=xa(mc),l.patches_=[],l.inversePatches_=[],l.patchListener_=i)}function gc(l){bc(l),l.drafts_.forEach(S2),l.drafts_=null}function bc(l){l===fi&&(fi=l.parent_)}var Rm=l=>fi=v2(fi,l);function S2(l){const i=l[rt];i.type_===0||i.type_===1?i.revoke_():i.revoked_=!0}function _m(l,i){i.unfinalizedDrafts_=i.drafts_.length;const u=i.drafts_[0];if(l!==void 0&&l!==u){u[rt].modified_&&(gc(i),Vt(4)),Gt(l)&&(l=Om(i,l));const{patchPlugin_:f}=i;f&&f.generateReplacementPatches_(u[rt].base_,l,i)}else l=Om(i,u);return w2(i,l,!0),gc(i),i.patches_&&i.patchListener_(i.patches_,i.inversePatches_),l!==Rg?l:void 0}function Om(l,i){if(So(i))return i;const u=i[rt];if(!u)return io(i,l.handledSet_,l);if(!wo(u,l))return i;if(!u.modified_)return u.base_;if(!u.finalized_){const{callbacks_:s}=u;if(s)for(;s.length>0;)s.pop()(l);Ug(u,l)}return u.copy_}function w2(l,i,u=!1){!l.parent_&&l.immer_.autoFreeze_&&l.canAutoFreeze_&&kc(i,u)}function Mg(l){l.finalized_=!0,l.scope_.unfinalizedDrafts_--}var wo=(l,i)=>l.scope_===i,j2=[];function kg(l,i,u,s){const f=gn(l),d=l.type_;if(s!==void 0&&pc(f,s,d)===i){ao(f,s,u,d);return}if(!l.draftLocations_){const x=l.draftLocations_=new Map;bo(f,(b,g)=>{if(vn(g)){const y=x.get(g)||[];y.push(b),x.set(g,y)}})}const h=l.draftLocations_.get(i)??j2;for(const x of h)ao(f,x,u,d)}function N2(l,i,u){l.callbacks_.push(function(f){const d=i;if(!d||!wo(d,f))return;f.mapSetPlugin_?.fixSetContents(d);const h=Mc(d);kg(l,d.draft_??d,h,u),Ug(d,f)})}function Ug(l,i){if(l.modified_&&!l.finalized_&&(l.type_===3||l.type_===1&&l.allIndicesReassigned_||(l.assigned_?.size??0)>0)){const{patchPlugin_:s}=i;if(s){const f=s.getPath(l);f&&s.generatePatches_(l,f,i)}Mg(l)}}function E2(l,i,u){const{scope_:s}=l;if(vn(u)){const f=u[rt];wo(f,s)&&f.callbacks_.push(function(){$r(l);const h=Mc(f);kg(l,u,h,i)})}else Gt(u)&&l.callbacks_.push(function(){const d=gn(l);l.type_===3?d.has(u)&&io(u,s.handledSet_,s):pc(d,i,l.type_)===u&&s.drafts_.length>1&&(l.assigned_.get(i)??!1)===!0&&l.copy_&&io(pc(l.copy_,i,l.type_),s.handledSet_,s)})}function io(l,i,u){return!u.immer_.autoFreeze_&&u.unfinalizedDrafts_<1||vn(l)||i.has(l)||!Gt(l)||So(l)||(i.add(l),bo(l,(s,f)=>{if(vn(f)){const d=f[rt];if(wo(d,u)){const h=Mc(d);ao(l,s,h,l.type_),Mg(d)}}else Gt(f)&&io(f,i,u)})),l}function z2(l,i){const u=xo(l),s={type_:u?1:0,scope_:i?i.scope_:Dg(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:i,base_:l,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let f=s,d=ro;u&&(f=[s],d=di);const{revoke:h,proxy:x}=Proxy.revocable(f,d);return s.draft_=x,s.revoke_=h,[x,s]}var ro={get(l,i){if(i===rt)return l;let u=l.scope_.arrayMethodsPlugin_;const s=l.type_===1&&typeof i=="string";if(s&&u?.isArrayOperationMethod(i))return u.createMethodInterceptor(l,i);const f=gn(l);if(!zm(f,i,l.type_))return T2(l,f,i);const d=f[i];if(l.finalized_||!Gt(d)||s&&l.operationMethod&&u?.isMutatingArrayMethod(l.operationMethod)&&x2(i))return d;if(d===ic(l.base_,i)){$r(l);const h=l.type_===1?+i:i,x=yc(l.scope_,d,l,h);return l.copy_[h]=x}return d},has(l,i){return i in gn(l)},ownKeys(l){return Reflect.ownKeys(gn(l))},set(l,i,u){const s=Bg(gn(l),i);if(s?.set)return s.set.call(l.draft_,u),!0;if(!l.modified_){const f=ic(gn(l),i),d=f?.[rt];if(d&&d.base_===u)return l.copy_[i]=u,l.assigned_.set(i,!1),!0;if(b2(u,f)&&(u!==void 0||zm(l.base_,i,l.type_)))return!0;$r(l),xc(l)}return l.copy_[i]===u&&(u!==void 0||i in l.copy_)||Number.isNaN(u)&&Number.isNaN(l.copy_[i])||(l.copy_[i]=u,l.assigned_.set(i,!0),E2(l,i,u)),!0},deleteProperty(l,i){return $r(l),ic(l.base_,i)!==void 0||i in l.base_?(l.assigned_.set(i,!1),xc(l)):l.assigned_.delete(i),l.copy_&&delete l.copy_[i],!0},getOwnPropertyDescriptor(l,i){const u=gn(l),s=Reflect.getOwnPropertyDescriptor(u,i);return s&&{[Fr]:!0,[dc]:l.type_!==1||i!=="length",[no]:s[no],[ci]:u[i]}},defineProperty(){Vt(11)},getPrototypeOf(l){return il(l.base_)},setPrototypeOf(){Vt(12)}},di={};for(let l in ro){let i=ro[l];di[l]=function(){const u=arguments;return u[0]=u[0][0],i.apply(this,u)}}di.deleteProperty=function(l,i){return di.set.call(this,l,i,void 0)};di.set=function(l,i,u){return ro.set.call(this,l[0],i,u,l[0])};function ic(l,i){const u=l[rt];return(u?gn(u):l)[i]}function T2(l,i,u){const s=Bg(i,u);return s?ci in s?s[ci]:s.get?.call(l.draft_):void 0}function Bg(l,i){if(!(i in l))return;let u=il(l);for(;u;){const s=Object.getOwnPropertyDescriptor(u,i);if(s)return s;u=il(u)}}function xc(l){l.modified_||(l.modified_=!0,l.parent_&&xc(l.parent_))}function $r(l){l.copy_||(l.assigned_=new Map,l.copy_=hc(l.base_,l.scope_.immer_.useStrictShallowCopy_))}var C2=class{constructor(l){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(i,u,s)=>{if(al(i)&&!al(u)){const d=u;u=i;const h=this;return function(b=d,...g){return h.produce(b,y=>u.call(this,y,...g))}}al(u)||Vt(6),s!==void 0&&!al(s)&&Vt(7);let f;if(Gt(i)){const d=Rm(this),h=yc(d,i,void 0);let x=!0;try{f=u(h),x=!1}finally{x?gc(d):bc(d)}return Am(d,s),_m(f,d)}else if(!i||!Dc(i)){if(f=u(i),f===void 0&&(f=i),f===Rg&&(f=void 0),this.autoFreeze_&&kc(f,!0),s){const d=[],h=[];xa(mc).generateReplacementPatches_(i,f,{patches_:d,inversePatches_:h}),s(d,h)}return f}else Vt(1,i)},this.produceWithPatches=(i,u)=>{if(al(i))return(h,...x)=>this.produceWithPatches(h,b=>i(b,...x));let s,f;return[this.produce(i,u,(h,x)=>{s=h,f=x}),s,f]},lc(l?.autoFreeze)&&this.setAutoFreeze(l.autoFreeze),lc(l?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(l.useStrictShallowCopy),lc(l?.useStrictIteration)&&this.setUseStrictIteration(l.useStrictIteration)}createDraft(l){Gt(l)||Vt(8),vn(l)&&(l=A2(l));const i=Rm(this),u=yc(i,l,void 0);return u[rt].isManual_=!0,bc(i),u}finishDraft(l,i){const u=l&&l[rt];(!u||!u.isManual_)&&Vt(9);const{scope_:s}=u;return Am(s,i),_m(void 0,s)}setAutoFreeze(l){this.autoFreeze_=l}setUseStrictShallowCopy(l){this.useStrictShallowCopy_=l}setUseStrictIteration(l){this.useStrictIteration_=l}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(l,i){let u;for(u=i.length-1;u>=0;u--){const f=i[u];if(f.path.length===0&&f.op==="replace"){l=f.value;break}}u>-1&&(i=i.slice(u+1));const s=xa(mc).applyPatches_;return vn(l)?s(l,i):this.produce(l,f=>s(f,i))}};function yc(l,i,u,s){const[f,d]=yo(i)?xa(lo).proxyMap_(i,u):vo(i)?xa(lo).proxySet_(i,u):z2(i,u);return(u?.scope_??Dg()).drafts_.push(f),d.callbacks_=u?.callbacks_??[],d.key_=s,u&&s!==void 0?N2(u,d,s):d.callbacks_.push(function(b){b.mapSetPlugin_?.fixSetContents(d);const{patchPlugin_:g}=b;d.modified_&&g&&g.generatePatches_(d,[],b)}),f}function A2(l){return vn(l)||Vt(10,l),Lg(l)}function Lg(l){if(!Gt(l)||So(l))return l;const i=l[rt];let u,s=!0;if(i){if(!i.modified_)return i.base_;i.finalized_=!0,u=hc(l,i.scope_.immer_.useStrictShallowCopy_),s=i.scope_.immer_.shouldUseStrictIteration()}else u=hc(l,!0);return bo(u,(f,d)=>{ao(u,f,Lg(d))},s),i&&(i.finalized_=!1),u}var R2=new C2,Hg=R2.produce;function qg(l){return({dispatch:u,getState:s})=>f=>d=>typeof d=="function"?d(u,s,l):f(d)}var _2=qg(),O2=qg,D2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?eo:eo.apply(null,arguments)};function Dm(l,i){function u(...s){if(i){let f=i(...s);if(!f)throw new Error(xn(0));return{type:l,payload:f.payload,..."meta"in f&&{meta:f.meta},..."error"in f&&{error:f.error}}}return{type:l,payload:s[0]}}return u.toString=()=>`${l}`,u.type=l,u.match=s=>m2(s)&&s.type===l,u}var Yg=class si extends Array{constructor(...i){super(...i),Object.setPrototypeOf(this,si.prototype)}static get[Symbol.species](){return si}concat(...i){return super.concat.apply(this,i)}prepend(...i){return i.length===1&&Array.isArray(i[0])?new si(...i[0].concat(this)):new si(...i.concat(this))}};function Mm(l){return Gt(l)?Hg(l,()=>{}):l}function Vr(l,i,u){return l.has(i)?l.get(i):l.set(i,u(i)).get(i)}function M2(l){return typeof l=="boolean"}var k2=()=>function(i){const{thunk:u=!0,immutableCheck:s=!0,serializableCheck:f=!0,actionCreatorCheck:d=!0}=i??{};let h=new Yg;return u&&(M2(u)?h.push(_2):h.push(O2(u.extraArgument))),h},U2="RTK_autoBatch",km=l=>i=>{setTimeout(i,l)},B2=(l={type:"raf"})=>i=>(...u)=>{const s=i(...u);let f=!0,d=!1,h=!1;const x=new Set,b=l.type==="tick"?queueMicrotask:l.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:km(10):l.type==="callback"?l.queueNotification:km(l.timeout),g=()=>{h=!1,d&&(d=!1,x.forEach(y=>y()))};return Object.assign({},s,{subscribe(y){const S=()=>f&&y(),D=s.subscribe(S);return x.add(y),()=>{D(),x.delete(y)}},dispatch(y){try{return f=!y?.meta?.[U2],d=!f,d&&(h||(h=!0,b(g))),s.dispatch(y)}finally{f=!0}}})},L2=l=>function(u){const{autoBatch:s=!0}=u??{};let f=new Yg(l);return s&&f.push(B2(typeof s=="object"?s:void 0)),f};function H2(l){const i=k2(),{reducer:u=void 0,middleware:s,devTools:f=!0,preloadedState:d=void 0,enhancers:h=void 0}=l||{};let x;if(typeof u=="function")x=u;else if(Oc(u))x=p2(u);else throw new Error(xn(1));let b;typeof s=="function"?b=s(i):b=i();let g=eo;f&&(g=D2({trace:!1,...typeof f=="object"&&f}));const y=h2(...b),S=L2(y);let D=typeof h=="function"?h(S):S();const q=g(...D);return Ag(x,d,q)}function Vg(l){const i={},u=[];let s;const f={addCase(d,h){const x=typeof d=="string"?d:d.type;if(!x)throw new Error(xn(28));if(x in i)throw new Error(xn(29));return i[x]=h,f},addAsyncThunk(d,h){return h.pending&&(i[d.pending.type]=h.pending),h.rejected&&(i[d.rejected.type]=h.rejected),h.fulfilled&&(i[d.fulfilled.type]=h.fulfilled),h.settled&&u.push({matcher:d.settled,reducer:h.settled}),f},addMatcher(d,h){return u.push({matcher:d,reducer:h}),f},addDefaultCase(d){return s=d,f}};return l(f),[i,u,s]}function q2(l){return typeof l=="function"}function Y2(l,i){let[u,s,f]=Vg(i),d;if(q2(l))d=()=>Mm(l());else{const x=Mm(l);d=()=>x}function h(x=d(),b){let g=[u[b.type],...s.filter(({matcher:y})=>y(b)).map(({reducer:y})=>y)];return g.filter(y=>!!y).length===0&&(g=[f]),g.reduce((y,S)=>{if(S)if(vn(y)){const q=S(y,b);return q===void 0?y:q}else{if(Gt(y))return Hg(y,D=>S(D,b));{const D=S(y,b);if(D===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return D}}return y},x)}return h.getInitialState=d,h}var V2=Symbol.for("rtk-slice-createasyncthunk");function G2(l,i){return`${l}/${i}`}function X2({creators:l}={}){const i=l?.asyncThunk?.[V2];return function(s){const{name:f,reducerPath:d=f}=s;if(!f)throw new Error(xn(11));const h=(typeof s.reducers=="function"?s.reducers(J2()):s.reducers)||{},x=Object.keys(h),b={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},g={addCase(G,F){const $=typeof G=="string"?G:G.type;if(!$)throw new Error(xn(12));if($ in b.sliceCaseReducersByType)throw new Error(xn(13));return b.sliceCaseReducersByType[$]=F,g},addMatcher(G,F){return b.sliceMatchers.push({matcher:G,reducer:F}),g},exposeAction(G,F){return b.actionCreators[G]=F,g},exposeCaseReducer(G,F){return b.sliceCaseReducersByName[G]=F,g}};x.forEach(G=>{const F=h[G],$={reducerName:G,type:G2(f,G),createNotation:typeof s.reducers=="function"};F2(F)?W2($,F,g,i):K2($,F,g)});function y(){const[G={},F=[],$=void 0]=typeof s.extraReducers=="function"?Vg(s.extraReducers):[s.extraReducers],ee={...G,...b.sliceCaseReducersByType};return Y2(s.initialState,J=>{for(let le in ee)J.addCase(le,ee[le]);for(let le of b.sliceMatchers)J.addMatcher(le.matcher,le.reducer);for(let le of F)J.addMatcher(le.matcher,le.reducer);$&&J.addDefaultCase($)})}const S=G=>G,D=new Map,q=new WeakMap;let C;function N(G,F){return C||(C=y()),C(G,F)}function T(){return C||(C=y()),C.getInitialState()}function V(G,F=!1){function $(J){let le=J[G];return typeof le>"u"&&F&&(le=Vr(q,$,T)),le}function ee(J=S){const le=Vr(D,F,()=>new WeakMap);return Vr(le,J,()=>{const me={};for(const[Re,Z]of Object.entries(s.selectors??{}))me[Re]=Q2(Z,J,()=>Vr(q,J,T),F);return me})}return{reducerPath:G,getSelectors:ee,get selectors(){return ee($)},selectSlice:$}}const X={name:f,reducer:N,actions:b.actionCreators,caseReducers:b.sliceCaseReducersByName,getInitialState:T,...V(d),injectInto(G,{reducerPath:F,...$}={}){const ee=F??d;return G.inject({reducerPath:ee,reducer:N},$),{...X,...V(ee,!0)}}};return X}}function Q2(l,i,u,s){function f(d,...h){let x=i(d);return typeof x>"u"&&s&&(x=u()),l(x,...h)}return f.unwrapped=l,f}var Z2=X2();function J2(){function l(i,u){return{_reducerDefinitionType:"asyncThunk",payloadCreator:i,...u}}return l.withTypes=()=>l,{reducer(i){return Object.assign({[i.name](...u){return i(...u)}}[i.name],{_reducerDefinitionType:"reducer"})},preparedReducer(i,u){return{_reducerDefinitionType:"reducerWithPrepare",prepare:i,reducer:u}},asyncThunk:l}}function K2({type:l,reducerName:i,createNotation:u},s,f){let d,h;if("reducer"in s){if(u&&!$2(s))throw new Error(xn(17));d=s.reducer,h=s.prepare}else d=s;f.addCase(l,d).exposeCaseReducer(i,d).exposeAction(i,h?Dm(l,h):Dm(l))}function F2(l){return l._reducerDefinitionType==="asyncThunk"}function $2(l){return l._reducerDefinitionType==="reducerWithPrepare"}function W2({type:l,reducerName:i},u,s,f){if(!f)throw new Error(xn(18));const{payloadCreator:d,fulfilled:h,pending:x,rejected:b,settled:g,options:y}=u,S=f(l,d,y);s.exposeAction(i,S),h&&s.addCase(S.fulfilled,h),x&&s.addCase(S.pending,x),b&&s.addCase(S.rejected,b),g&&s.addMatcher(S.settled,g),s.exposeCaseReducer(i,{fulfilled:h||Gr,pending:x||Gr,rejected:b||Gr,settled:g||Gr})}function Gr(){}function xn(l){return`Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}const P2={user:null,isLoggedIn:!1},Gg=Z2({name:"auth",initialState:P2,reducers:{loginSuccess:(l,i)=>{l.user=i.payload,l.isLoggedIn=!0},logout:l=>{l.user=null,l.isLoggedIn=!1,localStorage.removeItem("authUser"),localStorage.removeItem("token"),localStorage.removeItem("userRole")}}}),{loginSuccess:y5,logout:v5}=Gg.actions,I2=Gg.reducer,e5=H2({reducer:{auth:I2}});Nx.createRoot(document.getElementById("root")).render(c.jsx(gx.StrictMode,{children:c.jsx(u2,{store:e5,children:c.jsx(Q1,{children:c.jsx(Zv,{})})})}));
