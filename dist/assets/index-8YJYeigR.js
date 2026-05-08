(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function Q0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ic={exports:{}},xi={};var Jh;function gb(){if(Jh)return xi;Jh=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(c,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var b in f)b!=="key"&&(d[b]=f[b])}else d=f;return f=d.ref,{$$typeof:l,type:c,key:h,ref:f!==void 0?f:null,props:d}}return xi.Fragment=i,xi.jsx=s,xi.jsxs=s,xi}var Kh;function xb(){return Kh||(Kh=1,Ic.exports=gb()),Ic.exports}var u=xb(),eu={exports:{}},de={};var Fh;function bb(){if(Fh)return de;Fh=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),M=Symbol.iterator;function U(w){return w===null||typeof w!="object"?null:(w=M&&w[M]||w["@@iterator"],typeof w=="function"?w:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,T={};function _(w,L,F){this.props=w,this.context=L,this.refs=T,this.updater=F||z}_.prototype.isReactComponent={},_.prototype.setState=function(w,L){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,L,"setState")},_.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function H(){}H.prototype=_.prototype;function V(w,L,F){this.props=w,this.context=L,this.refs=T,this.updater=F||z}var W=V.prototype=new H;W.constructor=V,B(W,_.prototype),W.isPureReactComponent=!0;var I=Array.isArray;function ae(){}var P={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function xe(w,L,F){var ee=F.ref;return{$$typeof:l,type:w,key:L,ref:ee!==void 0?ee:null,props:F}}function Ee(w,L){return xe(w.type,L,w.props)}function K(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function oe(w){var L={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(F){return L[F]})}var X=/\/+/g;function be(w,L){return typeof w=="object"&&w!==null&&w.key!=null?oe(""+w.key):L.toString(36)}function ze(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ae,ae):(w.status="pending",w.then(function(L){w.status==="pending"&&(w.status="fulfilled",w.value=L)},function(L){w.status==="pending"&&(w.status="rejected",w.reason=L)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function O(w,L,F,ee,ue){var ge=typeof w;(ge==="undefined"||ge==="boolean")&&(w=null);var Te=!1;if(w===null)Te=!0;else switch(ge){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(w.$$typeof){case l:case i:Te=!0;break;case y:return Te=w._init,O(Te(w._payload),L,F,ee,ue)}}if(Te)return ue=ue(w),Te=ee===""?"."+be(w,0):ee,I(ue)?(F="",Te!=null&&(F=Te.replace(X,"$&/")+"/"),O(ue,L,F,"",function(rn){return rn})):ue!=null&&(K(ue)&&(ue=Ee(ue,F+(ue.key==null||w&&w.key===ue.key?"":(""+ue.key).replace(X,"$&/")+"/")+Te)),L.push(ue)),1;Te=0;var at=ee===""?".":ee+":";if(I(w))for(var He=0;He<w.length;He++)ee=w[He],ge=at+be(ee,He),Te+=O(ee,L,F,ge,ue);else if(He=U(w),typeof He=="function")for(w=He.call(w),He=0;!(ee=w.next()).done;)ee=ee.value,ge=at+be(ee,He++),Te+=O(ee,L,F,ge,ue);else if(ge==="object"){if(typeof w.then=="function")return O(ze(w),L,F,ee,ue);throw L=String(w),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Te}function $(w,L,F){if(w==null)return w;var ee=[],ue=0;return O(w,ee,"","",function(ge){return L.call(F,ge,ue++)}),ee}function ne(w){if(w._status===-1){var L=w._result;L=L(),L.then(function(F){(w._status===0||w._status===-1)&&(w._status=1,w._result=F)},function(F){(w._status===0||w._status===-1)&&(w._status=2,w._result=F)}),w._status===-1&&(w._status=0,w._result=L)}if(w._status===1)return w._result.default;throw w._result}var Q=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},J={map:$,forEach:function(w,L,F){$(w,function(){L.apply(this,arguments)},F)},count:function(w){var L=0;return $(w,function(){L++}),L},toArray:function(w){return $(w,function(L){return L})||[]},only:function(w){if(!K(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return de.Activity=v,de.Children=J,de.Component=_,de.Fragment=s,de.Profiler=f,de.PureComponent=V,de.StrictMode=c,de.Suspense=x,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,de.__COMPILER_RUNTIME={__proto__:null,c:function(w){return P.H.useMemoCache(w)}},de.cache=function(w){return function(){return w.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(w,L,F){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ee=B({},w.props),ue=w.key;if(L!=null)for(ge in L.key!==void 0&&(ue=""+L.key),L)!re.call(L,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&L.ref===void 0||(ee[ge]=L[ge]);var ge=arguments.length-2;if(ge===1)ee.children=F;else if(1<ge){for(var Te=Array(ge),at=0;at<ge;at++)Te[at]=arguments[at+2];ee.children=Te}return xe(w.type,ue,ee)},de.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},de.createElement=function(w,L,F){var ee,ue={},ge=null;if(L!=null)for(ee in L.key!==void 0&&(ge=""+L.key),L)re.call(L,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(ue[ee]=L[ee]);var Te=arguments.length-2;if(Te===1)ue.children=F;else if(1<Te){for(var at=Array(Te),He=0;He<Te;He++)at[He]=arguments[He+2];ue.children=at}if(w&&w.defaultProps)for(ee in Te=w.defaultProps,Te)ue[ee]===void 0&&(ue[ee]=Te[ee]);return xe(w,ge,ue)},de.createRef=function(){return{current:null}},de.forwardRef=function(w){return{$$typeof:b,render:w}},de.isValidElement=K,de.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:ne}},de.memo=function(w,L){return{$$typeof:g,type:w,compare:L===void 0?null:L}},de.startTransition=function(w){var L=P.T,F={};P.T=F;try{var ee=w(),ue=P.S;ue!==null&&ue(F,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(ae,Q)}catch(ge){Q(ge)}finally{L!==null&&F.types!==null&&(L.types=F.types),P.T=L}},de.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},de.use=function(w){return P.H.use(w)},de.useActionState=function(w,L,F){return P.H.useActionState(w,L,F)},de.useCallback=function(w,L){return P.H.useCallback(w,L)},de.useContext=function(w){return P.H.useContext(w)},de.useDebugValue=function(){},de.useDeferredValue=function(w,L){return P.H.useDeferredValue(w,L)},de.useEffect=function(w,L){return P.H.useEffect(w,L)},de.useEffectEvent=function(w){return P.H.useEffectEvent(w)},de.useId=function(){return P.H.useId()},de.useImperativeHandle=function(w,L,F){return P.H.useImperativeHandle(w,L,F)},de.useInsertionEffect=function(w,L){return P.H.useInsertionEffect(w,L)},de.useLayoutEffect=function(w,L){return P.H.useLayoutEffect(w,L)},de.useMemo=function(w,L){return P.H.useMemo(w,L)},de.useOptimistic=function(w,L){return P.H.useOptimistic(w,L)},de.useReducer=function(w,L,F){return P.H.useReducer(w,L,F)},de.useRef=function(w){return P.H.useRef(w)},de.useState=function(w){return P.H.useState(w)},de.useSyncExternalStore=function(w,L,F){return P.H.useSyncExternalStore(w,L,F)},de.useTransition=function(){return P.H.useTransition()},de.version="19.2.3",de}var $h;function jo(){return $h||($h=1,eu.exports=bb()),eu.exports}var j=jo();const yu=Q0(j);var tu={exports:{}},bi={},au={exports:{}},nu={};var Wh;function yb(){return Wh||(Wh=1,(function(l){function i(O,$){var ne=O.length;O.push($);e:for(;0<ne;){var Q=ne-1>>>1,J=O[Q];if(0<f(J,$))O[Q]=$,O[ne]=J,ne=Q;else break e}}function s(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var $=O[0],ne=O.pop();if(ne!==$){O[0]=ne;e:for(var Q=0,J=O.length,w=J>>>1;Q<w;){var L=2*(Q+1)-1,F=O[L],ee=L+1,ue=O[ee];if(0>f(F,ne))ee<J&&0>f(ue,F)?(O[Q]=ue,O[ee]=ne,Q=ee):(O[Q]=F,O[L]=ne,Q=L);else if(ee<J&&0>f(ue,ne))O[Q]=ue,O[ee]=ne,Q=ee;else break e}}return $}function f(O,$){var ne=O.sortIndex-$.sortIndex;return ne!==0?ne:O.id-$.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,b=h.now();l.unstable_now=function(){return h.now()-b}}var x=[],g=[],y=1,v=null,M=3,U=!1,z=!1,B=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function W(O){for(var $=s(g);$!==null;){if($.callback===null)c(g);else if($.startTime<=O)c(g),$.sortIndex=$.expirationTime,i(x,$);else break;$=s(g)}}function I(O){if(B=!1,W(O),!z)if(s(x)!==null)z=!0,ae||(ae=!0,oe());else{var $=s(g);$!==null&&ze(I,$.startTime-O)}}var ae=!1,P=-1,re=5,xe=-1;function Ee(){return T?!0:!(l.unstable_now()-xe<re)}function K(){if(T=!1,ae){var O=l.unstable_now();xe=O;var $=!0;try{e:{z=!1,B&&(B=!1,H(P),P=-1),U=!0;var ne=M;try{t:{for(W(O),v=s(x);v!==null&&!(v.expirationTime>O&&Ee());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,M=v.priorityLevel;var J=Q(v.expirationTime<=O);if(O=l.unstable_now(),typeof J=="function"){v.callback=J,W(O),$=!0;break t}v===s(x)&&c(x),W(O)}else c(x);v=s(x)}if(v!==null)$=!0;else{var w=s(g);w!==null&&ze(I,w.startTime-O),$=!1}}break e}finally{v=null,M=ne,U=!1}$=void 0}}finally{$?oe():ae=!1}}}var oe;if(typeof V=="function")oe=function(){V(K)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,be=X.port2;X.port1.onmessage=K,oe=function(){be.postMessage(null)}}else oe=function(){_(K,0)};function ze(O,$){P=_(function(){O(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return M},l.unstable_next=function(O){switch(M){case 1:case 2:case 3:var $=3;break;default:$=M}var ne=M;M=$;try{return O()}finally{M=ne}},l.unstable_requestPaint=function(){T=!0},l.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ne=M;M=O;try{return $()}finally{M=ne}},l.unstable_scheduleCallback=function(O,$,ne){var Q=l.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Q+ne:Q):ne=Q,O){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ne+J,O={id:y++,callback:$,priorityLevel:O,startTime:ne,expirationTime:J,sortIndex:-1},ne>Q?(O.sortIndex=ne,i(g,O),s(x)===null&&O===s(g)&&(B?(H(P),P=-1):B=!0,ze(I,ne-Q))):(O.sortIndex=J,i(x,O),z||U||(z=!0,ae||(ae=!0,oe()))),O},l.unstable_shouldYield=Ee,l.unstable_wrapCallback=function(O){var $=M;return function(){var ne=M;M=$;try{return O.apply(this,arguments)}finally{M=ne}}}})(nu)),nu}var Ph;function vb(){return Ph||(Ph=1,au.exports=yb()),au.exports}var lu={exports:{}},ct={};var Ih;function wb(){if(Ih)return ct;Ih=1;var l=jo();function i(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(x,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:x,containerInfo:g,implementation:y}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ct.createPortal=function(x,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return d(x,g,null,y)},ct.flushSync=function(x){var g=h.T,y=c.p;try{if(h.T=null,c.p=2,x)return x()}finally{h.T=g,c.p=y,c.d.f()}},ct.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(x,g))},ct.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},ct.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var y=g.as,v=b(y,g.crossOrigin),M=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?c.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:M,fetchPriority:U}):y==="script"&&c.d.X(x,{crossOrigin:v,integrity:M,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ct.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=b(g.as,g.crossOrigin);c.d.M(x,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(x)},ct.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=b(y,g.crossOrigin);c.d.L(x,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ct.preloadModule=function(x,g){if(typeof x=="string")if(g){var y=b(g.as,g.crossOrigin);c.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(x)},ct.requestFormReset=function(x){c.d.r(x)},ct.unstable_batchedUpdates=function(x,g){return x(g)},ct.useFormState=function(x,g,y){return h.H.useFormState(x,g,y)},ct.useFormStatus=function(){return h.H.useHostTransitionStatus()},ct.version="19.2.3",ct}var e0;function Sb(){if(e0)return lu.exports;e0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),lu.exports=wb(),lu.exports}var t0;function jb(){if(t0)return bi;t0=1;var l=vb(),i=jo(),s=Sb();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var r=a.return;if(r===null)break;var o=r.alternate;if(o===null){if(n=r.return,n!==null){a=n;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===a)return x(r),e;if(o===n)return x(r),t;o=o.sibling}throw Error(c(188))}if(a.return!==n.return)a=r,n=o;else{for(var p=!1,m=r.child;m;){if(m===a){p=!0,a=r,n=o;break}if(m===n){p=!0,n=r,a=o;break}m=m.sibling}if(!p){for(m=o.child;m;){if(m===a){p=!0,a=o,n=r;break}if(m===n){p=!0,n=o,a=r;break}m=m.sibling}if(!p)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,M=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),V=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),Ee=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case _:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case ae:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case V:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var ze=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Q=[],J=-1;function w(e){return{current:e}}function L(e){0>J||(e.current=Q[J],Q[J]=null,J--)}function F(e,t){J++,Q[J]=e.current,e.current=t}var ee=w(null),ue=w(null),ge=w(null),Te=w(null);function at(e,t){switch(F(ge,t),F(ue,e),F(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gh(t),e=xh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(ee),F(ee,e)}function He(){L(ee),L(ue),L(ge)}function rn(e){e.memoizedState!==null&&F(Te,e);var t=ee.current,a=xh(t,e.type);t!==a&&(F(ue,e),F(ee,a))}function ka(e){ue.current===e&&(L(ee),L(ue)),Te.current===e&&(L(Te),pi._currentValue=ne)}var _i,Di;function ra(e){if(_i===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);_i=t&&t[1]||"",Di=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_i+e+Di}var Nl=!1;function El(e,t){if(!e||Nl)return"";Nl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(D){var R=D}Reflect.construct(e,[],G)}else{try{G.call()}catch(D){R=D}e.call(G.prototype)}}else{try{throw Error()}catch(D){R=D}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(D){if(D&&R&&typeof D.stack=="string")return[D.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),p=o[0],m=o[1];if(p&&m){var S=p.split(`
`),A=m.split(`
`);for(r=n=0;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(n===S.length||r===A.length)for(n=S.length-1,r=A.length-1;1<=n&&0<=r&&S[n]!==A[r];)r--;for(;1<=n&&0<=r;n--,r--)if(S[n]!==A[r]){if(n!==1||r!==1)do if(n--,r--,0>r||S[n]!==A[r]){var q=`
`+S[n].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=n&&0<=r);break}}}finally{Nl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ra(a):""}function Lo(e,t){switch(e.tag){case 26:case 27:case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return e.child!==t&&t!==null?ra("Suspense Fallback"):ra("Suspense");case 19:return ra("SuspenseList");case 0:case 15:return El(e.type,!1);case 11:return El(e.type.render,!1);case 1:return El(e.type,!0);case 31:return ra("Activity");default:return""}}function Z(e){try{var t="",a=null;do t+=Lo(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var te=Object.prototype.hasOwnProperty,fe=l.unstable_scheduleCallback,ye=l.unstable_cancelCallback,It=l.unstable_shouldYield,Xt=l.unstable_requestPaint,Pe=l.unstable_now,on=l.unstable_getCurrentPriorityLevel,_a=l.unstable_ImmediatePriority,Qt=l.unstable_UserBlockingPriority,Zt=l.unstable_NormalPriority,Ho=l.unstable_LowPriority,Mi=l.unstable_IdlePriority,qo=l.log,Ui=l.unstable_setDisableYieldValue,sn=null,Je=null;function Da(e){if(typeof qo=="function"&&Ui(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(sn,e)}catch{}}var St=Math.clz32?Math.clz32:ag,eg=Math.log,tg=Math.LN2;function ag(e){return e>>>=0,e===0?32:31-(eg(e)/tg|0)|0}var Bi=256,Li=262144,Hi=4194304;function cn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~o,n!==0?r=cn(n):(p&=m,p!==0?r=cn(p):a||(a=m&~e,a!==0&&(r=cn(a))))):(m=n&~o,m!==0?r=cn(m):p!==0?r=cn(p):a||(a=n&~e,a!==0&&(r=cn(a)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:r}function zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ng(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $u(){var e=Hi;return Hi<<=1,(Hi&62914560)===0&&(Hi=4194304),e}function Yo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Tl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lg(e,t,a,n,r,o){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,S=e.expirationTimes,A=e.hiddenUpdates;for(a=p&~a;0<a;){var q=31-St(a),G=1<<q;m[q]=0,S[q]=-1;var R=A[q];if(R!==null)for(A[q]=null,q=0;q<R.length;q++){var D=R[q];D!==null&&(D.lane&=-536870913)}a&=~G}n!==0&&Wu(e,n,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(p&~t))}function Wu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-St(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Pu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-St(a),r=1<<n;r&t|e[n]&t&&(e[n]|=t),a&=~r}}function Iu(e,t){var a=t&-t;return a=(a&42)!==0?1:Vo(a),(a&(e.suspendedLanes|t))!==0?0:a}function Vo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Go(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ef(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:qh(e.type))}function tf(e,t){var a=$.p;try{return $.p=e,t()}finally{$.p=a}}var Ma=Math.random().toString(36).slice(2),nt="__reactFiber$"+Ma,pt="__reactProps$"+Ma,kn="__reactContainer$"+Ma,Xo="__reactEvents$"+Ma,ig="__reactListeners$"+Ma,rg="__reactHandles$"+Ma,af="__reactResources$"+Ma,Cl="__reactMarker$"+Ma;function Qo(e){delete e[nt],delete e[pt],delete e[Xo],delete e[ig],delete e[rg]}function _n(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[kn]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Nh(e);e!==null;){if(a=e[nt])return a;e=Nh(e)}return t}e=a,a=e.parentNode}return null}function Dn(e){if(e=e[nt]||e[kn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Mn(e){var t=e[af];return t||(t=e[af]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Cl]=!0}var nf=new Set,lf={};function un(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(lf[e]=t,e=0;e<t.length;e++)nf.add(t[e])}var og=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rf={},of={};function sg(e){return te.call(of,e)?!0:te.call(rf,e)?!1:og.test(e)?of[e]=!0:(rf[e]=!0,!1)}function Yi(e,t,a){if(sg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function oa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cg(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,o.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zo(e){if(!e._valueTracker){var t=sf(e)?"checked":"value";e._valueTracker=cg(e,t,""+e[t])}}function cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=sf(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ug=/[\n"\\]/g;function _t(e){return e.replace(ug,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jo(e,t,a,n,r,o,p,m){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kt(t)):e.value!==""+kt(t)&&(e.value=""+kt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Ko(e,p,kt(t)):a!=null?Ko(e,p,kt(a)):n!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+kt(m):e.removeAttribute("name")}function uf(e,t,a,n,r,o,p,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Zo(e);return}a=a!=null?""+kt(a):"",t=t!=null?""+kt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Zo(e)}function Ko(e,t,a){t==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Bn(e,t,a,n){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&n&&(e[a].defaultSelected=!0)}else{for(a=""+kt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ff(e,t,a){if(t!=null&&(t=""+kt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+kt(a):""}function df(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(ze(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=kt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Zo(e)}function Ln(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var fg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pf(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||fg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hf(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&a[r]!==n&&pf(e,r,n)}else for(var o in t)t.hasOwnProperty(o)&&pf(e,o,t[o])}function Fo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xi(e){return pg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var $o=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hn=null,qn=null;function mf(e){var t=Dn(e);if(t&&(e=t.stateNode)){var a=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var r=n[pt]||null;if(!r)throw Error(c(90));Jo(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&cf(n)}break e;case"textarea":ff(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Bn(e,!!a.multiple,t,!1)}}}var Po=!1;function gf(e,t,a){if(Po)return e(t,a);Po=!0;try{var n=e(t);return n}finally{if(Po=!1,(Hn!==null||qn!==null)&&(Or(),Hn&&(t=Hn,e=qn,qn=Hn=null,mf(t),e)))for(t=0;t<e.length;t++)mf(e[t])}}function Rl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[pt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=!1;if(ca)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){Io=!0}}),window.addEventListener("test",Ol,Ol),window.removeEventListener("test",Ol,Ol)}catch{Io=!1}var Ua=null,es=null,Qi=null;function xf(){if(Qi)return Qi;var e,t=es,a=t.length,n,r="value"in Ua?Ua.value:Ua.textContent,o=r.length;for(e=0;e<a&&t[e]===r[e];e++);var p=a-e;for(n=1;n<=p&&t[a-n]===r[o-n];n++);return Qi=r.slice(e,1<n?1-n:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ji(){return!0}function bf(){return!1}function ht(e){function t(a,n,r,o,p){this._reactName=a,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=p,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ji:bf,this.isPropagationStopped=bf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=ht(fn),kl=v({},fn,{view:0,detail:0}),hg=ht(kl),ts,as,_l,Fi=v({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(ts=e.screenX-_l.screenX,as=e.screenY-_l.screenY):as=ts=0,_l=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:as}}),yf=ht(Fi),mg=v({},Fi,{dataTransfer:0}),gg=ht(mg),xg=v({},kl,{relatedTarget:0}),ns=ht(xg),bg=v({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=ht(bg),vg=v({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wg=ht(vg),Sg=v({},fn,{data:0}),vf=ht(Sg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eg[e])?!!t[e]:!1}function ls(){return zg}var Tg=v({},kl,{key:function(e){if(e.key){var t=jg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cg=ht(Tg),Ag=v({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=ht(Ag),Rg=v({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),Og=ht(Rg),kg=v({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=ht(kg),Dg=v({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=ht(Dg),Ug=v({},fn,{newState:0,oldState:0}),Bg=ht(Ug),Lg=[9,13,27,32],is=ca&&"CompositionEvent"in window,Dl=null;ca&&"documentMode"in document&&(Dl=document.documentMode);var Hg=ca&&"TextEvent"in window&&!Dl,Sf=ca&&(!is||Dl&&8<Dl&&11>=Dl),jf=" ",Nf=!1;function Ef(e,t){switch(e){case"keyup":return Lg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function qg(e,t){switch(e){case"compositionend":return zf(t);case"keypress":return t.which!==32?null:(Nf=!0,jf);case"textInput":return e=t.data,e===jf&&Nf?null:e;default:return null}}function Yg(e,t){if(Yn)return e==="compositionend"||!is&&Ef(e,t)?(e=xf(),Qi=es=Ua=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vg[e.type]:t==="textarea"}function Cf(e,t,a,n){Hn?qn?qn.push(n):qn=[n]:Hn=n,t=Lr(t,"onChange"),0<t.length&&(a=new Ki("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ml=null,Ul=null;function Gg(e){uh(e,0)}function $i(e){var t=Al(e);if(cf(t))return e}function Af(e,t){if(e==="change")return t}var Rf=!1;if(ca){var rs;if(ca){var os="oninput"in document;if(!os){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),os=typeof Of.oninput=="function"}rs=os}else rs=!1;Rf=rs&&(!document.documentMode||9<document.documentMode)}function kf(){Ml&&(Ml.detachEvent("onpropertychange",_f),Ul=Ml=null)}function _f(e){if(e.propertyName==="value"&&$i(Ul)){var t=[];Cf(t,Ul,e,Wo(e)),gf(Gg,t)}}function Xg(e,t,a){e==="focusin"?(kf(),Ml=t,Ul=a,Ml.attachEvent("onpropertychange",_f)):e==="focusout"&&kf()}function Qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Ul)}function Zg(e,t){if(e==="click")return $i(t)}function Jg(e,t){if(e==="input"||e==="change")return $i(t)}function Kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Kg;function Bl(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!te.call(t,r)||!jt(e[r],t[r]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mf(e,t){var a=Df(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Df(a)}}function Uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Gi(e.document)}return t}function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fg=ca&&"documentMode"in document&&11>=document.documentMode,Vn=null,cs=null,Ll=null,us=!1;function Lf(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;us||Vn==null||Vn!==Gi(n)||(n=Vn,"selectionStart"in n&&ss(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ll&&Bl(Ll,n)||(Ll=n,n=Lr(cs,"onSelect"),0<n.length&&(t=new Ki("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Vn)))}function dn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Gn={animationend:dn("Animation","AnimationEnd"),animationiteration:dn("Animation","AnimationIteration"),animationstart:dn("Animation","AnimationStart"),transitionrun:dn("Transition","TransitionRun"),transitionstart:dn("Transition","TransitionStart"),transitioncancel:dn("Transition","TransitionCancel"),transitionend:dn("Transition","TransitionEnd")},fs={},Hf={};ca&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function pn(e){if(fs[e])return fs[e];if(!Gn[e])return e;var t=Gn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Hf)return fs[e]=t[a];return e}var qf=pn("animationend"),Yf=pn("animationiteration"),Vf=pn("animationstart"),$g=pn("transitionrun"),Wg=pn("transitionstart"),Pg=pn("transitioncancel"),Gf=pn("transitionend"),Xf=new Map,ds="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ds.push("scrollEnd");function Jt(e,t){Xf.set(e,t),un(t,[e])}var Wi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],Xn=0,ps=0;function Pi(){for(var e=Xn,t=ps=Xn=0;t<e;){var a=Dt[t];Dt[t++]=null;var n=Dt[t];Dt[t++]=null;var r=Dt[t];Dt[t++]=null;var o=Dt[t];if(Dt[t++]=null,n!==null&&r!==null){var p=n.pending;p===null?r.next=r:(r.next=p.next,p.next=r),n.pending=r}o!==0&&Qf(a,r,o)}}function Ii(e,t,a,n){Dt[Xn++]=e,Dt[Xn++]=t,Dt[Xn++]=a,Dt[Xn++]=n,ps|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function hs(e,t,a,n){return Ii(e,t,a,n),er(e)}function hn(e,t){return Ii(e,null,null,t),er(e)}function Qf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var r=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-St(a),e=o.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=a|536870912),o):null}function er(e){if(50<ri)throw ri=0,jc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qn={};function Ig(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,a,n){return new Ig(e,t,a,n)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,t){var a=e.alternate;return a===null?(a=Nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tr(e,t,a,n,r,o){var p=0;if(n=e,typeof e=="function")ms(e)&&(p=1);else if(typeof e=="string")p=lb(e,a,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=Nt(31,a,t,r),e.elementType=xe,e.lanes=o,e;case B:return mn(a.children,r,o,t);case T:p=8,r|=24;break;case _:return e=Nt(12,a,t,r|2),e.elementType=_,e.lanes=o,e;case I:return e=Nt(13,a,t,r),e.elementType=I,e.lanes=o,e;case ae:return e=Nt(19,a,t,r),e.elementType=ae,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:p=10;break e;case H:p=9;break e;case W:p=11;break e;case P:p=14;break e;case re:p=16,n=null;break e}p=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=Nt(p,a,t,r),t.elementType=e,t.type=n,t.lanes=o,t}function mn(e,t,a,n){return e=Nt(7,e,n,t),e.lanes=a,e}function gs(e,t,a){return e=Nt(6,e,null,t),e.lanes=a,e}function Jf(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function xs(e,t,a){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kf=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var a=Kf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Z(t)},Kf.set(e,t),t)}return{value:e,source:t,stack:Z(t)}}var Zn=[],Jn=0,ar=null,Hl=0,Ut=[],Bt=0,Ba=null,ea=1,ta="";function fa(e,t){Zn[Jn++]=Hl,Zn[Jn++]=ar,ar=e,Hl=t}function Ff(e,t,a){Ut[Bt++]=ea,Ut[Bt++]=ta,Ut[Bt++]=Ba,Ba=e;var n=ea;e=ta;var r=32-St(n)-1;n&=~(1<<r),a+=1;var o=32-St(t)+r;if(30<o){var p=r-r%5;o=(n&(1<<p)-1).toString(32),n>>=p,r-=p,ea=1<<32-St(t)+r|a<<r|n,ta=o+e}else ea=1<<o|a<<r|n,ta=e}function bs(e){e.return!==null&&(fa(e,1),Ff(e,1,0))}function ys(e){for(;e===ar;)ar=Zn[--Jn],Zn[Jn]=null,Hl=Zn[--Jn],Zn[Jn]=null;for(;e===Ba;)Ba=Ut[--Bt],Ut[Bt]=null,ta=Ut[--Bt],Ut[Bt]=null,ea=Ut[--Bt],Ut[Bt]=null}function $f(e,t){Ut[Bt++]=ea,Ut[Bt++]=ta,Ut[Bt++]=Ba,ea=t.id,ta=t.overflow,Ba=e}var lt=null,Be=null,Ne=!1,La=null,Lt=!1,vs=Error(c(519));function Ha(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ql(Mt(t,e)),vs}function Wf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[nt]=e,t[pt]=n,a){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(a=0;a<si.length;a++)we(si[a],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),uf(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),df(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||hh(t.textContent,a)?(n.popover!=null&&(we("beforetoggle",t),we("toggle",t)),n.onScroll!=null&&we("scroll",t),n.onScrollEnd!=null&&we("scrollend",t),n.onClick!=null&&(t.onclick=sa),t=!0):t=!1,t||Ha(e,!0)}function Pf(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:lt=lt.return}}function Kn(e){if(e!==lt)return!1;if(!Ne)return Pf(e),Ne=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Lc(e.type,e.memoizedProps)),a=!a),a&&Be&&Ha(e),Pf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Be=jh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Be=jh(e)}else t===27?(t=Be,Ia(e.type)?(e=Gc,Gc=null,Be=e):Be=t):Be=lt?qt(e.stateNode.nextSibling):null;return!0}function gn(){Be=lt=null,Ne=!1}function ws(){var e=La;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),La=null),e}function ql(e){La===null?La=[e]:La.push(e)}var Ss=w(null),xn=null,da=null;function qa(e,t,a){F(Ss,t._currentValue),t._currentValue=a}function pa(e){e._currentValue=Ss.current,L(Ss)}function js(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ns(e,t,a,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var p=r.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=r;for(var S=0;S<t.length;S++)if(m.context===t[S]){o.lanes|=a,m=o.alternate,m!==null&&(m.lanes|=a),js(o.return,a,e),n||(p=null);break e}o=m.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(c(341));p.lanes|=a,o=p.alternate,o!==null&&(o.lanes|=a),js(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Fn(e,t,a,n){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(c(387));if(p=p.memoizedProps,p!==null){var m=r.type;jt(r.pendingProps.value,p.value)||(e!==null?e.push(m):e=[m])}}else if(r===Te.current){if(p=r.alternate,p===null)throw Error(c(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(pi):e=[pi])}r=r.return}e!==null&&Ns(t,e,a,n),t.flags|=262144}function nr(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bn(e){xn=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return If(xn,e)}function lr(e,t){return xn===null&&bn(e),If(e,t)}function If(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(c(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var ex=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},tx=l.unstable_scheduleCallback,ax=l.unstable_NormalPriority,Ke={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Es(){return{controller:new ex,data:new Map,refCount:0}}function Yl(e){e.refCount--,e.refCount===0&&tx(ax,function(){e.controller.abort()})}var Vl=null,zs=0,$n=0,Wn=null;function nx(e,t){if(Vl===null){var a=Vl=[];zs=0,$n=Ac(),Wn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return zs++,t.then(ed,ed),t}function ed(){if(--zs===0&&Vl!==null){Wn!==null&&(Wn.status="fulfilled");var e=Vl;Vl=null,$n=0,Wn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lx(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),n}var td=O.S;O.S=function(e,t){Lp=Pe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&nx(e,t),td!==null&&td(e,t)};var yn=w(null);function Ts(){var e=yn.current;return e!==null?e:Ue.pooledCache}function ir(e,t){t===null?F(yn,yn.current):F(yn,t.pool)}function ad(){var e=Ts();return e===null?null:{parent:Ke._currentValue,pool:e}}var Pn=Error(c(460)),Cs=Error(c(474)),rr=Error(c(542)),or={then:function(){}};function nd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ld(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sa,sa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rd(e),e;default:if(typeof t.status=="string")t.then(sa,sa);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rd(e),e}throw wn=t,Pn}}function vn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(wn=a,Pn):a}}var wn=null;function id(){if(wn===null)throw Error(c(459));var e=wn;return wn=null,e}function rd(e){if(e===Pn||e===rr)throw Error(c(483))}var In=null,Gl=0;function sr(e){var t=Gl;return Gl+=1,In===null&&(In=[]),ld(In,e,t)}function Xl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cr(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function od(e){function t(E,N){if(e){var C=E.deletions;C===null?(E.deletions=[N],E.flags|=16):C.push(N)}}function a(E,N){if(!e)return null;for(;N!==null;)t(E,N),N=N.sibling;return null}function n(E){for(var N=new Map;E!==null;)E.key!==null?N.set(E.key,E):N.set(E.index,E),E=E.sibling;return N}function r(E,N){return E=ua(E,N),E.index=0,E.sibling=null,E}function o(E,N,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<N?(E.flags|=67108866,N):C):(E.flags|=67108866,N)):(E.flags|=1048576,N)}function p(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function m(E,N,C,Y){return N===null||N.tag!==6?(N=gs(C,E.mode,Y),N.return=E,N):(N=r(N,C),N.return=E,N)}function S(E,N,C,Y){var se=C.type;return se===B?q(E,N,C.props.children,Y,C.key):N!==null&&(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===re&&vn(se)===N.type)?(N=r(N,C.props),Xl(N,C),N.return=E,N):(N=tr(C.type,C.key,C.props,null,E.mode,Y),Xl(N,C),N.return=E,N)}function A(E,N,C,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==C.containerInfo||N.stateNode.implementation!==C.implementation?(N=xs(C,E.mode,Y),N.return=E,N):(N=r(N,C.children||[]),N.return=E,N)}function q(E,N,C,Y,se){return N===null||N.tag!==7?(N=mn(C,E.mode,Y,se),N.return=E,N):(N=r(N,C),N.return=E,N)}function G(E,N,C){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=gs(""+N,E.mode,C),N.return=E,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case U:return C=tr(N.type,N.key,N.props,null,E.mode,C),Xl(C,N),C.return=E,C;case z:return N=xs(N,E.mode,C),N.return=E,N;case re:return N=vn(N),G(E,N,C)}if(ze(N)||oe(N))return N=mn(N,E.mode,C,null),N.return=E,N;if(typeof N.then=="function")return G(E,sr(N),C);if(N.$$typeof===V)return G(E,lr(E,N),C);cr(E,N)}return null}function R(E,N,C,Y){var se=N!==null?N.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return se!==null?null:m(E,N,""+C,Y);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case U:return C.key===se?S(E,N,C,Y):null;case z:return C.key===se?A(E,N,C,Y):null;case re:return C=vn(C),R(E,N,C,Y)}if(ze(C)||oe(C))return se!==null?null:q(E,N,C,Y,null);if(typeof C.then=="function")return R(E,N,sr(C),Y);if(C.$$typeof===V)return R(E,N,lr(E,C),Y);cr(E,C)}return null}function D(E,N,C,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return E=E.get(C)||null,m(N,E,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:return E=E.get(Y.key===null?C:Y.key)||null,S(N,E,Y,se);case z:return E=E.get(Y.key===null?C:Y.key)||null,A(N,E,Y,se);case re:return Y=vn(Y),D(E,N,C,Y,se)}if(ze(Y)||oe(Y))return E=E.get(C)||null,q(N,E,Y,se,null);if(typeof Y.then=="function")return D(E,N,C,sr(Y),se);if(Y.$$typeof===V)return D(E,N,C,lr(N,Y),se);cr(N,Y)}return null}function le(E,N,C,Y){for(var se=null,Ce=null,ie=N,me=N=0,je=null;ie!==null&&me<C.length;me++){ie.index>me?(je=ie,ie=null):je=ie.sibling;var Ae=R(E,ie,C[me],Y);if(Ae===null){ie===null&&(ie=je);break}e&&ie&&Ae.alternate===null&&t(E,ie),N=o(Ae,N,me),Ce===null?se=Ae:Ce.sibling=Ae,Ce=Ae,ie=je}if(me===C.length)return a(E,ie),Ne&&fa(E,me),se;if(ie===null){for(;me<C.length;me++)ie=G(E,C[me],Y),ie!==null&&(N=o(ie,N,me),Ce===null?se=ie:Ce.sibling=ie,Ce=ie);return Ne&&fa(E,me),se}for(ie=n(ie);me<C.length;me++)je=D(ie,E,me,C[me],Y),je!==null&&(e&&je.alternate!==null&&ie.delete(je.key===null?me:je.key),N=o(je,N,me),Ce===null?se=je:Ce.sibling=je,Ce=je);return e&&ie.forEach(function(ln){return t(E,ln)}),Ne&&fa(E,me),se}function ce(E,N,C,Y){if(C==null)throw Error(c(151));for(var se=null,Ce=null,ie=N,me=N=0,je=null,Ae=C.next();ie!==null&&!Ae.done;me++,Ae=C.next()){ie.index>me?(je=ie,ie=null):je=ie.sibling;var ln=R(E,ie,Ae.value,Y);if(ln===null){ie===null&&(ie=je);break}e&&ie&&ln.alternate===null&&t(E,ie),N=o(ln,N,me),Ce===null?se=ln:Ce.sibling=ln,Ce=ln,ie=je}if(Ae.done)return a(E,ie),Ne&&fa(E,me),se;if(ie===null){for(;!Ae.done;me++,Ae=C.next())Ae=G(E,Ae.value,Y),Ae!==null&&(N=o(Ae,N,me),Ce===null?se=Ae:Ce.sibling=Ae,Ce=Ae);return Ne&&fa(E,me),se}for(ie=n(ie);!Ae.done;me++,Ae=C.next())Ae=D(ie,E,me,Ae.value,Y),Ae!==null&&(e&&Ae.alternate!==null&&ie.delete(Ae.key===null?me:Ae.key),N=o(Ae,N,me),Ce===null?se=Ae:Ce.sibling=Ae,Ce=Ae);return e&&ie.forEach(function(mb){return t(E,mb)}),Ne&&fa(E,me),se}function Me(E,N,C,Y){if(typeof C=="object"&&C!==null&&C.type===B&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case U:e:{for(var se=C.key;N!==null;){if(N.key===se){if(se=C.type,se===B){if(N.tag===7){a(E,N.sibling),Y=r(N,C.props.children),Y.return=E,E=Y;break e}}else if(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===re&&vn(se)===N.type){a(E,N.sibling),Y=r(N,C.props),Xl(Y,C),Y.return=E,E=Y;break e}a(E,N);break}else t(E,N);N=N.sibling}C.type===B?(Y=mn(C.props.children,E.mode,Y,C.key),Y.return=E,E=Y):(Y=tr(C.type,C.key,C.props,null,E.mode,Y),Xl(Y,C),Y.return=E,E=Y)}return p(E);case z:e:{for(se=C.key;N!==null;){if(N.key===se)if(N.tag===4&&N.stateNode.containerInfo===C.containerInfo&&N.stateNode.implementation===C.implementation){a(E,N.sibling),Y=r(N,C.children||[]),Y.return=E,E=Y;break e}else{a(E,N);break}else t(E,N);N=N.sibling}Y=xs(C,E.mode,Y),Y.return=E,E=Y}return p(E);case re:return C=vn(C),Me(E,N,C,Y)}if(ze(C))return le(E,N,C,Y);if(oe(C)){if(se=oe(C),typeof se!="function")throw Error(c(150));return C=se.call(C),ce(E,N,C,Y)}if(typeof C.then=="function")return Me(E,N,sr(C),Y);if(C.$$typeof===V)return Me(E,N,lr(E,C),Y);cr(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,N!==null&&N.tag===6?(a(E,N.sibling),Y=r(N,C),Y.return=E,E=Y):(a(E,N),Y=gs(C,E.mode,Y),Y.return=E,E=Y),p(E)):a(E,N)}return function(E,N,C,Y){try{Gl=0;var se=Me(E,N,C,Y);return In=null,se}catch(ie){if(ie===Pn||ie===rr)throw ie;var Ce=Nt(29,ie,null,E.mode);return Ce.lanes=Y,Ce.return=E,Ce}}}var Sn=od(!0),sd=od(!1),Ya=!1;function As(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Re&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=er(e),Qf(e,null,a),t}return Ii(e,n,t,a),er(e)}function Ql(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Pu(e,a)}}function Os(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var r=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?r=o=p:o=o.next=p,a=a.next}while(a!==null);o===null?r=o=t:o=o.next=t}else r=o=t;a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ks=!1;function Zl(){if(ks){var e=Wn;if(e!==null)throw e}}function Jl(e,t,a,n){ks=!1;var r=e.updateQueue;Ya=!1;var o=r.firstBaseUpdate,p=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var S=m,A=S.next;S.next=null,p===null?o=A:p.next=A,p=S;var q=e.alternate;q!==null&&(q=q.updateQueue,m=q.lastBaseUpdate,m!==p&&(m===null?q.firstBaseUpdate=A:m.next=A,q.lastBaseUpdate=S))}if(o!==null){var G=r.baseState;p=0,q=A=S=null,m=o;do{var R=m.lane&-536870913,D=R!==m.lane;if(D?(Se&R)===R:(n&R)===R){R!==0&&R===$n&&(ks=!0),q!==null&&(q=q.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var le=e,ce=m;R=t;var Me=a;switch(ce.tag){case 1:if(le=ce.payload,typeof le=="function"){G=le.call(Me,G,R);break e}G=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ce.payload,R=typeof le=="function"?le.call(Me,G,R):le,R==null)break e;G=v({},G,R);break e;case 2:Ya=!0}}R=m.callback,R!==null&&(e.flags|=64,D&&(e.flags|=8192),D=r.callbacks,D===null?r.callbacks=[R]:D.push(R))}else D={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},q===null?(A=q=D,S=G):q=q.next=D,p|=R;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;D=m,m=D.next,D.next=null,r.lastBaseUpdate=D,r.shared.pending=null}}while(!0);q===null&&(S=G),r.baseState=S,r.firstBaseUpdate=A,r.lastBaseUpdate=q,o===null&&(r.shared.lanes=0),Ka|=p,e.lanes=p,e.memoizedState=G}}function cd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ud(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cd(a[e],t)}var el=w(null),ur=w(0);function fd(e,t){e=Sa,F(ur,e),F(el,t),Sa=e|t.baseLanes}function _s(){F(ur,Sa),F(el,el.current)}function Ds(){Sa=ur.current,L(el),L(ur)}var Et=w(null),Ht=null;function Xa(e){var t=e.alternate;F(Xe,Xe.current&1),F(Et,e),Ht===null&&(t===null||el.current!==null||t.memoizedState!==null)&&(Ht=e)}function Ms(e){F(Xe,Xe.current),F(Et,e),Ht===null&&(Ht=e)}function dd(e){e.tag===22?(F(Xe,Xe.current),F(Et,e),Ht===null&&(Ht=e)):Qa()}function Qa(){F(Xe,Xe.current),F(Et,Et.current)}function zt(e){L(Et),Ht===e&&(Ht=null),L(Xe)}var Xe=w(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yc(a)||Vc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,pe=null,_e=null,Fe=null,dr=!1,tl=!1,jn=!1,pr=0,Kl=0,al=null,ix=0;function Ve(){throw Error(c(321))}function Us(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!jt(e[a],t[a]))return!1;return!0}function Bs(e,t,a,n,r,o){return ha=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Fd:Ps,jn=!1,o=a(n,r),jn=!1,tl&&(o=hd(t,a,n,r)),pd(e),o}function pd(e){O.H=Wl;var t=_e!==null&&_e.next!==null;if(ha=0,Fe=_e=pe=null,dr=!1,Kl=0,al=null,t)throw Error(c(300));e===null||$e||(e=e.dependencies,e!==null&&nr(e)&&($e=!0))}function hd(e,t,a,n){pe=e;var r=0;do{if(tl&&(al=null),Kl=0,tl=!1,25<=r)throw Error(c(301));if(r+=1,Fe=_e=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=$d,o=t(a,n)}while(tl);return o}function rx(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(pe.flags|=1024),t}function Ls(){var e=pr!==0;return pr=0,e}function Hs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function qs(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}ha=0,Fe=_e=pe=null,tl=!1,Kl=pr=0,al=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?pe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Qe(){if(_e===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Fe===null?pe.memoizedState:Fe.next;if(t!==null)Fe=t,_e=e;else{if(e===null)throw pe.alternate===null?Error(c(467)):Error(c(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Fe===null?pe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function hr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Kl;return Kl+=1,al===null&&(al=[]),e=ld(al,e,t),t=pe,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Fd:Ps),e}function mr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===V)return it(e)}throw Error(c(438,String(e)))}function Ys(e){var t=null,a=pe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=pe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=hr(),pe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ee;return t.index++,a}function ma(e,t){return typeof t=="function"?t(e):t}function gr(e){var t=Qe();return Vs(t,_e,e)}function Vs(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var r=e.baseQueue,o=n.pending;if(o!==null){if(r!==null){var p=r.next;r.next=o.next,o.next=p}t.baseQueue=r=o,n.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var m=p=null,S=null,A=t,q=!1;do{var G=A.lane&-536870913;if(G!==A.lane?(Se&G)===G:(ha&G)===G){var R=A.revertLane;if(R===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),G===$n&&(q=!0);else if((ha&R)===R){A=A.next,R===$n&&(q=!0);continue}else G={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(m=S=G,p=o):S=S.next=G,pe.lanes|=R,Ka|=R;G=A.action,jn&&a(o,G),o=A.hasEagerState?A.eagerState:a(o,G)}else R={lane:G,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(m=S=R,p=o):S=S.next=R,pe.lanes|=G,Ka|=G;A=A.next}while(A!==null&&A!==t);if(S===null?p=o:S.next=m,!jt(o,e.memoizedState)&&($e=!0,q&&(a=Wn,a!==null)))throw a;e.memoizedState=o,e.baseState=p,e.baseQueue=S,n.lastRenderedState=o}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Gs(e){var t=Qe(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,r=a.pending,o=t.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do o=e(o,p.action),p=p.next;while(p!==r);jt(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function md(e,t,a){var n=pe,r=Qe(),o=Ne;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var p=!jt((_e||r).memoizedState,a);if(p&&(r.memoizedState=a,$e=!0),r=r.queue,Zs(bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||p||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,nl(9,{destroy:void 0},xd.bind(null,n,r,a,t),null),Ue===null)throw Error(c(349));o||(ha&127)!==0||gd(n,t,a)}return a}function gd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=pe.updateQueue,t===null?(t=hr(),pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function xd(e,t,a,n){t.value=a,t.getSnapshot=n,yd(t)&&vd(e)}function bd(e,t,a){return a(function(){yd(t)&&vd(e)})}function yd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!jt(e,a)}catch{return!0}}function vd(e){var t=hn(e,2);t!==null&&yt(t,e,2)}function Xs(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),jn){Da(!0);try{a()}finally{Da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t}function wd(e,t,a,n){return e.baseState=a,Vs(e,_e,typeof n=="function"?n:ma)}function ox(e,t,a,n,r){if(yr(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){o.listeners.push(p)}};O.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Sd(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Sd(e,t){var a=t.action,n=t.payload,r=e.state;if(t.isTransition){var o=O.T,p={};O.T=p;try{var m=a(r,n),S=O.S;S!==null&&S(p,m),jd(e,t,m)}catch(A){Qs(e,t,A)}finally{o!==null&&p.types!==null&&(o.types=p.types),O.T=o}}else try{o=a(r,n),jd(e,t,o)}catch(A){Qs(e,t,A)}}function jd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Nd(e,t,n)},function(n){return Qs(e,t,n)}):Nd(e,t,a)}function Nd(e,t,a){t.status="fulfilled",t.value=a,Ed(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Sd(e,a)))}function Qs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Ed(t),t=t.next;while(t!==n)}e.action=null}function Ed(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zd(e,t){return t}function Td(e,t){if(Ne){var a=Ue.formState;if(a!==null){e:{var n=pe;if(Ne){if(Be){t:{for(var r=Be,o=Lt;r.nodeType!==8;){if(!o){r=null;break t}if(r=qt(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){Be=qt(r.nextSibling),n=r.data==="F!";break e}}Ha(n)}n=!1}n&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zd,lastRenderedState:t},a.queue=n,a=Zd.bind(null,pe,n),n.dispatch=a,n=Xs(!1),o=Ws.bind(null,pe,!1,n.queue),n=ft(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,a=ox.bind(null,pe,r,o,a),r.dispatch=a,n.memoizedState=e,[t,a,!1]}function Cd(e){var t=Qe();return Ad(t,_e,e)}function Ad(e,t,a){if(t=Vs(e,t,zd)[0],e=gr(ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Fl(t)}catch(p){throw p===Pn?rr:p}else n=t;t=Qe();var r=t.queue,o=r.dispatch;return a!==t.memoizedState&&(pe.flags|=2048,nl(9,{destroy:void 0},sx.bind(null,r,a),null)),[n,o,e]}function sx(e,t){e.action=t}function Rd(e){var t=Qe(),a=_e;if(a!==null)return Ad(t,a,e);Qe(),t=t.memoizedState,a=Qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function nl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=pe.updateQueue,t===null&&(t=hr(),pe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Od(){return Qe().memoizedState}function xr(e,t,a,n){var r=ft();pe.flags|=e,r.memoizedState=nl(1|t,{destroy:void 0},a,n===void 0?null:n)}function br(e,t,a,n){var r=Qe();n=n===void 0?null:n;var o=r.memoizedState.inst;_e!==null&&n!==null&&Us(n,_e.memoizedState.deps)?r.memoizedState=nl(t,o,a,n):(pe.flags|=e,r.memoizedState=nl(1|t,o,a,n))}function kd(e,t){xr(8390656,8,e,t)}function Zs(e,t){br(2048,8,e,t)}function cx(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=hr(),pe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function _d(e){var t=Qe().memoizedState;return cx({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Dd(e,t){return br(4,2,e,t)}function Md(e,t){return br(4,4,e,t)}function Ud(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bd(e,t,a){a=a!=null?a.concat([e]):null,br(4,4,Ud.bind(null,t,e),a)}function Js(){}function Ld(e,t){var a=Qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Us(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Hd(e,t){var a=Qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Us(t,n[1]))return n[0];if(n=e(),jn){Da(!0);try{e()}finally{Da(!1)}}return a.memoizedState=[n,t],n}function Ks(e,t,a){return a===void 0||(ha&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=qp(),pe.lanes|=e,Ka|=e,a)}function qd(e,t,a,n){return jt(a,t)?a:el.current!==null?(e=Ks(e,a,n),jt(e,t)||($e=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(Se&261930)===0?($e=!0,e.memoizedState=a):(e=qp(),pe.lanes|=e,Ka|=e,t)}function Yd(e,t,a,n,r){var o=$.p;$.p=o!==0&&8>o?o:8;var p=O.T,m={};O.T=m,Ws(e,!1,t,a);try{var S=r(),A=O.S;if(A!==null&&A(m,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var q=lx(S,n);$l(e,t,q,At(e))}else $l(e,t,n,At(e))}catch(G){$l(e,t,{then:function(){},status:"rejected",reason:G},At())}finally{$.p=o,p!==null&&m.types!==null&&(p.types=m.types),O.T=p}}function ux(){}function Fs(e,t,a,n){if(e.tag!==5)throw Error(c(476));var r=Vd(e).queue;Yd(e,r,t,ne,a===null?ux:function(){return Gd(e),a(n)})}function Vd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Gd(e){var t=Vd(e);t.next===null&&(t=e.alternate.memoizedState),$l(e,t.next.queue,{},At())}function $s(){return it(pi)}function Xd(){return Qe().memoizedState}function Qd(){return Qe().memoizedState}function fx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=At();e=Va(a);var n=Ga(t,e,a);n!==null&&(yt(n,t,a),Ql(n,t,a)),t={cache:Es()},e.payload=t;return}t=t.return}}function dx(e,t,a){var n=At();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yr(e)?Jd(t,a):(a=hs(e,t,a,n),a!==null&&(yt(a,e,n),Kd(a,t,n)))}function Zd(e,t,a){var n=At();$l(e,t,a,n)}function $l(e,t,a,n){var r={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yr(e))Jd(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var p=t.lastRenderedState,m=o(p,a);if(r.hasEagerState=!0,r.eagerState=m,jt(m,p))return Ii(e,t,r,0),Ue===null&&Pi(),!1}catch{}if(a=hs(e,t,r,n),a!==null)return yt(a,e,n),Kd(a,t,n),!0}return!1}function Ws(e,t,a,n){if(n={lane:2,revertLane:Ac(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yr(e)){if(t)throw Error(c(479))}else t=hs(e,a,n,2),t!==null&&yt(t,e,2)}function yr(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Jd(e,t){tl=dr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Kd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Pu(e,a)}}var Wl={readContext:it,use:mr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};Wl.useEffectEvent=Ve;var Fd={readContext:it,use:mr,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:kd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,xr(4194308,4,Ud.bind(null,t,e),a)},useLayoutEffect:function(e,t){return xr(4194308,4,e,t)},useInsertionEffect:function(e,t){xr(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var n=e();if(jn){Da(!0);try{e()}finally{Da(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ft();if(a!==void 0){var r=a(t);if(jn){Da(!0);try{a(t)}finally{Da(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=dx.bind(null,pe,e),[n.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=Xs(e);var t=e.queue,a=Zd.bind(null,pe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Js,useDeferredValue:function(e,t){var a=ft();return Ks(a,e,t)},useTransition:function(){var e=Xs(!1);return e=Yd.bind(null,pe,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=pe,r=ft();if(Ne){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ue===null)throw Error(c(349));(Se&127)!==0||gd(n,t,a)}r.memoizedState=a;var o={value:a,getSnapshot:t};return r.queue=o,kd(bd.bind(null,n,o,e),[e]),n.flags|=2048,nl(9,{destroy:void 0},xd.bind(null,n,o,a,t),null),a},useId:function(){var e=ft(),t=Ue.identifierPrefix;if(Ne){var a=ta,n=ea;a=(n&~(1<<32-St(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=pr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=ix++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:Td,useActionState:Td,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ws.bind(null,pe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ys,useCacheRefresh:function(){return ft().memoizedState=fx.bind(null,pe)},useEffectEvent:function(e){var t=ft(),a={impl:e};return t.memoizedState=a,function(){if((Re&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Ps={readContext:it,use:mr,useCallback:Ld,useContext:it,useEffect:Zs,useImperativeHandle:Bd,useInsertionEffect:Dd,useLayoutEffect:Md,useMemo:Hd,useReducer:gr,useRef:Od,useState:function(){return gr(ma)},useDebugValue:Js,useDeferredValue:function(e,t){var a=Qe();return qd(a,_e.memoizedState,e,t)},useTransition:function(){var e=gr(ma)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:md,useId:Xd,useHostTransitionStatus:$s,useFormState:Cd,useActionState:Cd,useOptimistic:function(e,t){var a=Qe();return wd(a,_e,e,t)},useMemoCache:Ys,useCacheRefresh:Qd};Ps.useEffectEvent=_d;var $d={readContext:it,use:mr,useCallback:Ld,useContext:it,useEffect:Zs,useImperativeHandle:Bd,useInsertionEffect:Dd,useLayoutEffect:Md,useMemo:Hd,useReducer:Gs,useRef:Od,useState:function(){return Gs(ma)},useDebugValue:Js,useDeferredValue:function(e,t){var a=Qe();return _e===null?Ks(a,e,t):qd(a,_e.memoizedState,e,t)},useTransition:function(){var e=Gs(ma)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:md,useId:Xd,useHostTransitionStatus:$s,useFormState:Rd,useActionState:Rd,useOptimistic:function(e,t){var a=Qe();return _e!==null?wd(a,_e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ys,useCacheRefresh:Qd};$d.useEffectEvent=_d;function Is(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ec={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=At(),r=Va(n);r.payload=t,a!=null&&(r.callback=a),t=Ga(e,r,n),t!==null&&(yt(t,e,n),Ql(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=At(),r=Va(n);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Ga(e,r,n),t!==null&&(yt(t,e,n),Ql(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=At(),n=Va(a);n.tag=2,t!=null&&(n.callback=t),t=Ga(e,n,a),t!==null&&(yt(t,e,a),Ql(t,e,a))}};function Wd(e,t,a,n,r,o,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,p):t.prototype&&t.prototype.isPureReactComponent?!Bl(a,n)||!Bl(r,o):!0}function Pd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ec.enqueueReplaceState(t,t.state,null)}function Nn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Id(e){Wi(e)}function ep(e){console.error(e)}function tp(e){Wi(e)}function vr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ap(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function tc(e,t,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){vr(e,t)},a}function np(e){return e=Va(e),e.tag=3,e}function lp(e,t,a,n){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;e.payload=function(){return r(o)},e.callback=function(){ap(t,a,n)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){ap(t,a,n),typeof r!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function px(e,t,a,n,r){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Fn(t,a,r,!0),a=Et.current,a!==null){switch(a.tag){case 31:case 13:return Ht===null?kr():a.alternate===null&&Ge===0&&(Ge=3),a.flags&=-257,a.flags|=65536,a.lanes=r,n===or?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),zc(e,n,r)),!1;case 22:return a.flags|=65536,n===or?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),zc(e,n,r)),!1}throw Error(c(435,a.tag))}return zc(e,n,r),kr(),!1}if(Ne)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==vs&&(e=Error(c(422),{cause:n}),ql(Mt(e,a)))):(n!==vs&&(t=Error(c(423),{cause:n}),ql(Mt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=Mt(n,a),r=tc(e.stateNode,n,r),Os(e,r),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:n});if(o=Mt(o,a),ii===null?ii=[o]:ii.push(o),Ge!==4&&(Ge=2),t===null)return!0;n=Mt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=tc(a.stateNode,n,e),Os(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Fa===null||!Fa.has(o))))return a.flags|=65536,r&=-r,a.lanes|=r,r=np(r),lp(r,e,a,n),Os(a,r),!1}a=a.return}while(a!==null);return!1}var ac=Error(c(461)),$e=!1;function rt(e,t,a,n){t.child=e===null?sd(t,null,a,n):Sn(t,e.child,a,n)}function ip(e,t,a,n,r){a=a.render;var o=t.ref;if("ref"in n){var p={};for(var m in n)m!=="ref"&&(p[m]=n[m])}else p=n;return bn(t),n=Bs(e,t,a,p,o,r),m=Ls(),e!==null&&!$e?(Hs(e,t,r),ga(e,t,r)):(Ne&&m&&bs(t),t.flags|=1,rt(e,t,n,r),t.child)}function rp(e,t,a,n,r){if(e===null){var o=a.type;return typeof o=="function"&&!ms(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,op(e,t,o,n,r)):(e=tr(a.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!uc(e,r)){var p=o.memoizedProps;if(a=a.compare,a=a!==null?a:Bl,a(p,n)&&e.ref===t.ref)return ga(e,t,r)}return t.flags|=1,e=ua(o,n),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,a,n,r){if(e!==null){var o=e.memoizedProps;if(Bl(o,n)&&e.ref===t.ref)if($e=!1,t.pendingProps=n=o,uc(e,r))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,ga(e,t,r)}return nc(e,t,a,n,r)}function sp(e,t,a,n){var r=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~o}else n=0,t.child=null;return cp(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ir(t,o!==null?o.cachePool:null),o!==null?fd(t,o):_s(),dd(t);else return n=t.lanes=536870912,cp(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(ir(t,o.cachePool),fd(t,o),Qa(),t.memoizedState=null):(e!==null&&ir(t,null),_s(),Qa());return rt(e,t,r,a),t.child}function Pl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cp(e,t,a,n,r){var o=Ts();return o=o===null?null:{parent:Ke._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&ir(t,null),_s(),dd(t),e!==null&&Fn(e,t,n,!0),t.childLanes=r,null}function wr(e,t){return t=jr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function up(e,t,a){return Sn(t,e.child,null,a),e=wr(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function hx(e,t,a){var n=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(n.mode==="hidden")return e=wr(t,n),t.lanes=536870912,Pl(null,e);if(Ms(t),(e=Be)?(e=Sh(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=Jf(e),a.return=t,t.child=a,lt=t,Be=null)):e=null,e===null)throw Ha(t);return t.lanes=536870912,null}return wr(t,n)}var o=e.memoizedState;if(o!==null){var p=o.dehydrated;if(Ms(t),r)if(t.flags&256)t.flags&=-257,t=up(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if($e||Fn(e,t,a,!1),r=(a&e.childLanes)!==0,$e||r){if(n=Ue,n!==null&&(p=Iu(n,a),p!==0&&p!==o.retryLane))throw o.retryLane=p,hn(e,p),yt(n,e,p),ac;kr(),t=up(e,t,a)}else e=o.treeContext,Be=qt(p.nextSibling),lt=t,Ne=!0,La=null,Lt=!1,e!==null&&$f(t,e),t=wr(t,n),t.flags|=4096;return t}return e=ua(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function nc(e,t,a,n,r){return bn(t),a=Bs(e,t,a,n,void 0,r),n=Ls(),e!==null&&!$e?(Hs(e,t,r),ga(e,t,r)):(Ne&&n&&bs(t),t.flags|=1,rt(e,t,a,r),t.child)}function fp(e,t,a,n,r,o){return bn(t),t.updateQueue=null,a=hd(t,n,a,r),pd(e),n=Ls(),e!==null&&!$e?(Hs(e,t,o),ga(e,t,o)):(Ne&&n&&bs(t),t.flags|=1,rt(e,t,a,o),t.child)}function dp(e,t,a,n,r){if(bn(t),t.stateNode===null){var o=Qn,p=a.contextType;typeof p=="object"&&p!==null&&(o=it(p)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ec,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},As(t),p=a.contextType,o.context=typeof p=="object"&&p!==null?it(p):Qn,o.state=t.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(Is(t,a,p,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(p=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),p!==o.state&&ec.enqueueReplaceState(o,o.state,null),Jl(t,n,o,r),Zl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var m=t.memoizedProps,S=Nn(a,m);o.props=S;var A=o.context,q=a.contextType;p=Qn,typeof q=="object"&&q!==null&&(p=it(q));var G=a.getDerivedStateFromProps;q=typeof G=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,q||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||A!==p)&&Pd(t,o,n,p),Ya=!1;var R=t.memoizedState;o.state=R,Jl(t,n,o,r),Zl(),A=t.memoizedState,m||R!==A||Ya?(typeof G=="function"&&(Is(t,a,G,n),A=t.memoizedState),(S=Ya||Wd(t,a,S,n,R,A,p))?(q||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=A),o.props=n,o.state=A,o.context=p,n=S):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Rs(e,t),p=t.memoizedProps,q=Nn(a,p),o.props=q,G=t.pendingProps,R=o.context,A=a.contextType,S=Qn,typeof A=="object"&&A!==null&&(S=it(A)),m=a.getDerivedStateFromProps,(A=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==G||R!==S)&&Pd(t,o,n,S),Ya=!1,R=t.memoizedState,o.state=R,Jl(t,n,o,r),Zl();var D=t.memoizedState;p!==G||R!==D||Ya||e!==null&&e.dependencies!==null&&nr(e.dependencies)?(typeof m=="function"&&(Is(t,a,m,n),D=t.memoizedState),(q=Ya||Wd(t,a,q,n,R,D,S)||e!==null&&e.dependencies!==null&&nr(e.dependencies))?(A||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,D,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,D,S)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=D),o.props=n,o.state=D,o.context=S,n=q):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Sr(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Sn(t,e.child,null,r),t.child=Sn(t,null,a,r)):rt(e,t,a,r),t.memoizedState=o.state,e=t.child):e=ga(e,t,r),e}function pp(e,t,a,n){return gn(),t.flags|=256,rt(e,t,a,n),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ic(e){return{baseLanes:e,cachePool:ad()}}function rc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ct),e}function hp(e,t,a){var n=t.pendingProps,r=!1,o=(t.flags&128)!==0,p;if((p=o)||(p=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(r?Xa(t):Qa(),(e=Be)?(e=Sh(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=Jf(e),a.return=t,t.child=a,lt=t,Be=null)):e=null,e===null)throw Ha(t);return Vc(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,r?(Qa(),r=t.mode,m=jr({mode:"hidden",children:m},r),n=mn(n,r,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=ic(a),n.childLanes=rc(e,p,a),t.memoizedState=lc,Pl(null,n)):(Xa(t),oc(t,m))}var S=e.memoizedState;if(S!==null&&(m=S.dehydrated,m!==null)){if(o)t.flags&256?(Xa(t),t.flags&=-257,t=sc(e,t,a)):t.memoizedState!==null?(Qa(),t.child=e.child,t.flags|=128,t=null):(Qa(),m=n.fallback,r=t.mode,n=jr({mode:"visible",children:n.children},r),m=mn(m,r,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,Sn(t,e.child,null,a),n=t.child,n.memoizedState=ic(a),n.childLanes=rc(e,p,a),t.memoizedState=lc,t=Pl(null,n));else if(Xa(t),Vc(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var A=p.dgst;p=A,n=Error(c(419)),n.stack="",n.digest=p,ql({value:n,source:null,stack:null}),t=sc(e,t,a)}else if($e||Fn(e,t,a,!1),p=(a&e.childLanes)!==0,$e||p){if(p=Ue,p!==null&&(n=Iu(p,a),n!==0&&n!==S.retryLane))throw S.retryLane=n,hn(e,n),yt(p,e,n),ac;Yc(m)||kr(),t=sc(e,t,a)}else Yc(m)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Be=qt(m.nextSibling),lt=t,Ne=!0,La=null,Lt=!1,e!==null&&$f(t,e),t=oc(t,n.children),t.flags|=4096);return t}return r?(Qa(),m=n.fallback,r=t.mode,S=e.child,A=S.sibling,n=ua(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&65011712,A!==null?m=ua(A,m):(m=mn(m,r,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,Pl(null,n),n=t.child,m=e.child.memoizedState,m===null?m=ic(a):(r=m.cachePool,r!==null?(S=Ke._currentValue,r=r.parent!==S?{parent:S,pool:S}:r):r=ad(),m={baseLanes:m.baseLanes|a,cachePool:r}),n.memoizedState=m,n.childLanes=rc(e,p,a),t.memoizedState=lc,Pl(e.child,n)):(Xa(t),a=e.child,e=a.sibling,a=ua(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=a,t.memoizedState=null,a)}function oc(e,t){return t=jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function jr(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function sc(e,t,a){return Sn(t,e.child,null,a),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),js(e.return,t,a)}function cc(e,t,a,n,r,o){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r,treeForkCount:o}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=n,p.tail=a,p.tailMode=r,p.treeForkCount=o)}function gp(e,t,a){var n=t.pendingProps,r=n.revealOrder,o=n.tail;n=n.children;var p=Xe.current,m=(p&2)!==0;if(m?(p=p&1|2,t.flags|=128):p&=1,F(Xe,p),rt(e,t,n,a),n=Ne?Hl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mp(e,a,t);else if(e.tag===19)mp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&fr(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),cc(t,!1,r,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&fr(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}cc(t,!0,a,null,o,n);break;case"together":cc(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ga(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ka|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Fn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ua(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ua(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function uc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nr(e)))}function mx(e,t,a){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),qa(t,Ke,e.memoizedState.cache),gn();break;case 27:case 5:rn(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:qa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ms(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?hp(e,t,a):(Xa(t),e=ga(e,t,a),e!==null?e.sibling:null);Xa(t);break;case 19:var r=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Fn(e,t,a,!1),n=(a&t.childLanes)!==0),r){if(n)return gp(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F(Xe,Xe.current),n)break;return null;case 22:return t.lanes=0,sp(e,t,a,t.pendingProps);case 24:qa(t,Ke,e.memoizedState.cache)}return ga(e,t,a)}function xp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!uc(e,a)&&(t.flags&128)===0)return $e=!1,mx(e,t,a);$e=(e.flags&131072)!==0}else $e=!1,Ne&&(t.flags&1048576)!==0&&Ff(t,Hl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=vn(t.elementType),t.type=e,typeof e=="function")ms(e)?(n=Nn(e,n),t.tag=1,t=dp(null,t,e,n,a)):(t.tag=0,t=nc(null,t,e,n,a));else{if(e!=null){var r=e.$$typeof;if(r===W){t.tag=11,t=ip(null,t,e,n,a);break e}else if(r===P){t.tag=14,t=rp(null,t,e,n,a);break e}}throw t=be(e)||e,Error(c(306,t,""))}}return t;case 0:return nc(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,r=Nn(n,t.pendingProps),dp(e,t,n,r,a);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;r=o.element,Rs(e,t),Jl(t,n,null,a);var p=t.memoizedState;if(n=p.cache,qa(t,Ke,n),n!==o.cache&&Ns(t,[Ke],a,!0),Zl(),n=p.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=pp(e,t,n,a);break e}else if(n!==r){r=Mt(Error(c(424)),t),ql(r),t=pp(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=qt(e.firstChild),lt=t,Ne=!0,La=null,Lt=!0,a=sd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gn(),n===r){t=ga(e,t,a);break e}rt(e,t,n,a)}t=t.child}return t;case 26:return Sr(e,t),e===null?(a=Ch(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ne||(a=t.type,e=t.pendingProps,n=Hr(ge.current).createElement(a),n[nt]=t,n[pt]=e,ot(n,a,e),et(n),t.stateNode=n):t.memoizedState=Ch(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rn(t),e===null&&Ne&&(n=t.stateNode=Eh(t.type,t.pendingProps,ge.current),lt=t,Lt=!0,r=Be,Ia(t.type)?(Gc=r,Be=qt(n.firstChild)):Be=r),rt(e,t,t.pendingProps.children,a),Sr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((r=n=Be)&&(n=Qx(n,t.type,t.pendingProps,Lt),n!==null?(t.stateNode=n,lt=t,Be=qt(n.firstChild),Lt=!1,r=!0):r=!1),r||Ha(t)),rn(t),r=t.type,o=t.pendingProps,p=e!==null?e.memoizedProps:null,n=o.children,Lc(r,o)?n=null:p!==null&&Lc(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=Bs(e,t,rx,null,null,a),pi._currentValue=r),Sr(e,t),rt(e,t,n,a),t.child;case 6:return e===null&&Ne&&((e=a=Be)&&(a=Zx(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,lt=t,Be=null,e=!0):e=!1),e||Ha(t)),null;case 13:return hp(e,t,a);case 4:return at(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Sn(t,null,n,a):rt(e,t,n,a),t.child;case 11:return ip(e,t,t.type,t.pendingProps,a);case 7:return rt(e,t,t.pendingProps,a),t.child;case 8:return rt(e,t,t.pendingProps.children,a),t.child;case 12:return rt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,qa(t,t.type,n.value),rt(e,t,n.children,a),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,bn(t),r=it(r),n=n(r),t.flags|=1,rt(e,t,n,a),t.child;case 14:return rp(e,t,t.type,t.pendingProps,a);case 15:return op(e,t,t.type,t.pendingProps,a);case 19:return gp(e,t,a);case 31:return hx(e,t,a);case 22:return sp(e,t,a,t.pendingProps);case 24:return bn(t),n=it(Ke),e===null?(r=Ts(),r===null&&(r=Ue,o=Es(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=a),r=o),t.memoizedState={parent:n,cache:r},As(t),qa(t,Ke,r)):((e.lanes&a)!==0&&(Rs(e,t),Jl(t,null,null,a),Zl()),r=e.memoizedState,o=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),qa(t,Ke,n)):(n=o.cache,qa(t,Ke,n),n!==r.cache&&Ns(t,[Ke],a,!0))),rt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function xa(e){e.flags|=4}function fc(e,t,a,n,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Xp())e.flags|=8192;else throw wn=or,Cs}else e.flags&=-16777217}function bp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_h(t))if(Xp())e.flags|=8192;else throw wn=or,Cs}function Nr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$u():536870912,e.lanes|=t,ol|=t)}function Il(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function gx(e,t,a){var n=t.pendingProps;switch(ys(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pa(Ke),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Kn(t)?xa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ws())),Le(t),null;case 26:var r=t.type,o=t.memoizedState;return e===null?(xa(t),o!==null?(Le(t),bp(t,o)):(Le(t),fc(t,r,null,n,a))):o?o!==e.memoizedState?(xa(t),Le(t),bp(t,o)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&xa(t),Le(t),fc(t,r,e,n,a)),null;case 27:if(ka(t),a=ge.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&xa(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Le(t),null}e=ee.current,Kn(t)?Wf(t):(e=Eh(r,n,a),t.stateNode=e,xa(t))}return Le(t),null;case 5:if(ka(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&xa(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(o=ee.current,Kn(t))Wf(t);else{var p=Hr(ge.current);switch(o){case 1:o=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=p.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?p.createElement("select",{is:n.is}):p.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?p.createElement(r,{is:n.is}):p.createElement(r)}}o[nt]=t,o[pt]=n;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)o.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=o;e:switch(ot(o,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&xa(t)}}return Le(t),fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&xa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=ge.current,Kn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,r=lt,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||hh(e.nodeValue,a)),e||Ha(t,!0)}else e=Hr(e).createTextNode(n),e[nt]=t,t.stateNode=e}return Le(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Kn(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[nt]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else a=ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Le(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Kn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[nt]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),r=!1}else r=ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Nr(t,t.updateQueue),Le(t),null);case 4:return He(),e===null&&_c(t.stateNode.containerInfo),Le(t),null;case 10:return pa(t.type),Le(t),null;case 19:if(L(Xe),n=t.memoizedState,n===null)return Le(t),null;if(r=(t.flags&128)!==0,o=n.rendering,o===null)if(r)Il(n,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=fr(e),o!==null){for(t.flags|=128,Il(n,!1),e=o.updateQueue,t.updateQueue=e,Nr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Zf(a,e),a=a.sibling;return F(Xe,Xe.current&1|2),Ne&&fa(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Pe()>Ar&&(t.flags|=128,r=!0,Il(n,!1),t.lanes=4194304)}else{if(!r)if(e=fr(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Nr(t,e),Il(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!Ne)return Le(t),null}else 2*Pe()-n.renderingStartTime>Ar&&a!==536870912&&(t.flags|=128,r=!0,Il(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Pe(),e.sibling=null,a=Xe.current,F(Xe,r?a&1|2:a&1),Ne&&fa(t,n.treeForkCount),e):(Le(t),null);case 22:case 23:return zt(t),Ds(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),a=t.updateQueue,a!==null&&Nr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&L(yn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),pa(Ke),Le(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function xx(e,t){switch(ys(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Ke),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ka(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(c(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Xe),null;case 4:return He(),null;case 10:return pa(t.type),null;case 22:case 23:return zt(t),Ds(),e!==null&&L(yn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Ke),null;case 25:return null;default:return null}}function yp(e,t){switch(ys(t),t.tag){case 3:pa(Ke),He();break;case 26:case 27:case 5:ka(t);break;case 4:He();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:L(Xe);break;case 10:pa(t.type);break;case 22:case 23:zt(t),Ds(),e!==null&&L(yn);break;case 24:pa(Ke)}}function ei(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var r=n.next;a=r;do{if((a.tag&e)===e){n=void 0;var o=a.create,p=a.inst;n=o(),p.destroy=n}a=a.next}while(a!==r)}}catch(m){ke(t,t.return,m)}}function Za(e,t,a){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&e)===e){var p=n.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,r=t;var S=a,A=m;try{A()}catch(q){ke(r,S,q)}}}n=n.next}while(n!==o)}}catch(q){ke(t,t.return,q)}}function vp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ud(t,a)}catch(n){ke(e,e.return,n)}}}function wp(e,t,a){a.props=Nn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ke(e,t,n)}}function ti(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(r){ke(e,t,r)}}function aa(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(r){ke(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){ke(e,t,r)}else a.current=null}function Sp(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(r){ke(e,e.return,r)}}function dc(e,t,a){try{var n=e.stateNode;Hx(n,e.type,a,t),n[pt]=t}catch(r){ke(e,e.return,r)}}function jp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=sa));else if(n!==4&&(n===27&&Ia(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(hc(e,t,a),e=e.sibling;e!==null;)hc(e,t,a),e=e.sibling}function Er(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Er(e,t,a),e=e.sibling;e!==null;)Er(e,t,a),e=e.sibling}function Np(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ot(t,n,a),t[nt]=e,t[pt]=a}catch(o){ke(e,e.return,o)}}var ba=!1,We=!1,mc=!1,Ep=typeof WeakSet=="function"?WeakSet:Set,tt=null;function bx(e,t){if(e=e.containerInfo,Uc=Zr,e=Bf(e),ss(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var p=0,m=-1,S=-1,A=0,q=0,G=e,R=null;t:for(;;){for(var D;G!==a||r!==0&&G.nodeType!==3||(m=p+r),G!==o||n!==0&&G.nodeType!==3||(S=p+n),G.nodeType===3&&(p+=G.nodeValue.length),(D=G.firstChild)!==null;)R=G,G=D;for(;;){if(G===e)break t;if(R===a&&++A===r&&(m=p),R===o&&++q===n&&(S=p),(D=G.nextSibling)!==null)break;G=R,R=G.parentNode}G=D}a=m===-1||S===-1?null:{start:m,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:e,selectionRange:a},Zr=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,r=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var le=Nn(a.type,r);e=n.getSnapshotBeforeUpdate(le,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(ce){ke(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)qc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function zp(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),n&4&&ei(5,a);break;case 1:if(va(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(p){ke(a,a.return,p)}else{var r=Nn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ke(a,a.return,p)}}n&64&&vp(a),n&512&&ti(a,a.return);break;case 3:if(va(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ud(e,t)}catch(p){ke(a,a.return,p)}}break;case 27:t===null&&n&4&&Np(a);case 26:case 5:va(e,a),t===null&&n&4&&Sp(a),n&512&&ti(a,a.return);break;case 12:va(e,a);break;case 31:va(e,a),n&4&&Ap(e,a);break;case 13:va(e,a),n&4&&Rp(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Tx.bind(null,a),Jx(e,a))));break;case 22:if(n=a.memoizedState!==null||ba,!n){t=t!==null&&t.memoizedState!==null||We,r=ba;var o=We;ba=n,(We=t)&&!o?wa(e,a,(a.subtreeFlags&8772)!==0):va(e,a),ba=r,We=o}break;case 30:break;default:va(e,a)}}function Tp(e){var t=e.alternate;t!==null&&(e.alternate=null,Tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,mt=!1;function ya(e,t,a){for(a=a.child;a!==null;)Cp(e,t,a),a=a.sibling}function Cp(e,t,a){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(sn,a)}catch{}switch(a.tag){case 26:We||aa(a,t),ya(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||aa(a,t);var n=qe,r=mt;Ia(a.type)&&(qe=a.stateNode,mt=!1),ya(e,t,a),ui(a.stateNode),qe=n,mt=r;break;case 5:We||aa(a,t);case 6:if(n=qe,r=mt,qe=null,ya(e,t,a),qe=n,mt=r,qe!==null)if(mt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(o){ke(a,t,o)}else try{qe.removeChild(a.stateNode)}catch(o){ke(a,t,o)}break;case 18:qe!==null&&(mt?(e=qe,vh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):vh(qe,a.stateNode));break;case 4:n=qe,r=mt,qe=a.stateNode.containerInfo,mt=!0,ya(e,t,a),qe=n,mt=r;break;case 0:case 11:case 14:case 15:Za(2,a,t),We||Za(4,a,t),ya(e,t,a);break;case 1:We||(aa(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&wp(a,t,n)),ya(e,t,a);break;case 21:ya(e,t,a);break;case 22:We=(n=We)||a.memoizedState!==null,ya(e,t,a),We=n;break;default:ya(e,t,a)}}function Ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(a){ke(t,t.return,a)}}}function Rp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){ke(t,t.return,a)}}function yx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ep),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ep),t;default:throw Error(c(435,e.tag))}}function zr(e,t){var a=yx(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var r=Cx.bind(null,e,n);n.then(r,r)}})}function gt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var r=a[n],o=e,p=t,m=p;e:for(;m!==null;){switch(m.tag){case 27:if(Ia(m.type)){qe=m.stateNode,mt=!1;break e}break;case 5:qe=m.stateNode,mt=!1;break e;case 3:case 4:qe=m.stateNode.containerInfo,mt=!0;break e}m=m.return}if(qe===null)throw Error(c(160));Cp(o,p,r),qe=null,mt=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Op(t,e),t=t.sibling}var Kt=null;function Op(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),xt(e),n&4&&(Za(3,e,e.return),ei(3,e),Za(5,e,e.return));break;case 1:gt(t,e),xt(e),n&512&&(We||a===null||aa(a,a.return)),n&64&&ba&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var r=Kt;if(gt(t,e),xt(e),n&512&&(We||a===null||aa(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":o=r.getElementsByTagName("title")[0],(!o||o[Cl]||o[nt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(n),r.head.insertBefore(o,r.querySelector("head > title"))),ot(o,n,a),o[nt]=e,et(o),n=o;break e;case"link":var p=Oh("link","href",r).get(n+(a.href||""));if(p){for(var m=0;m<p.length;m++)if(o=p[m],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(m,1);break t}}o=r.createElement(n),ot(o,n,a),r.head.appendChild(o);break;case"meta":if(p=Oh("meta","content",r).get(n+(a.content||""))){for(m=0;m<p.length;m++)if(o=p[m],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(m,1);break t}}o=r.createElement(n),ot(o,n,a),r.head.appendChild(o);break;default:throw Error(c(468,n))}o[nt]=e,et(o),n=o}e.stateNode=n}else kh(r,e.type,e.stateNode);else e.stateNode=Rh(r,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?kh(r,e.type,e.stateNode):Rh(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&dc(e,e.memoizedProps,a.memoizedProps)}break;case 27:gt(t,e),xt(e),n&512&&(We||a===null||aa(a,a.return)),a!==null&&n&4&&dc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(gt(t,e),xt(e),n&512&&(We||a===null||aa(a,a.return)),e.flags&32){r=e.stateNode;try{Ln(r,"")}catch(le){ke(e,e.return,le)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,dc(e,r,a!==null?a.memoizedProps:r)),n&1024&&(mc=!0);break;case 6:if(gt(t,e),xt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(le){ke(e,e.return,le)}}break;case 3:if(Vr=null,r=Kt,Kt=qr(t.containerInfo),gt(t,e),Kt=r,xt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(t.containerInfo)}catch(le){ke(e,e.return,le)}mc&&(mc=!1,kp(e));break;case 4:n=Kt,Kt=qr(e.stateNode.containerInfo),gt(t,e),xt(e),Kt=n;break;case 12:gt(t,e),xt(e);break;case 31:gt(t,e),xt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zr(e,n)));break;case 13:gt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cr=Pe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zr(e,n)));break;case 22:r=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,A=ba,q=We;if(ba=A||r,We=q||S,gt(t,e),We=q,ba=A,xt(e),n&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||S||ba||We||En(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){S=a=t;try{if(o=S.stateNode,r)p=o.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=S.stateNode;var G=S.memoizedProps.style,R=G!=null&&G.hasOwnProperty("display")?G.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(le){ke(S,S.return,le)}}}else if(t.tag===6){if(a===null){S=t;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(le){ke(S,S.return,le)}}}else if(t.tag===18){if(a===null){S=t;try{var D=S.stateNode;r?wh(D,!0):wh(S.stateNode,!1)}catch(le){ke(S,S.return,le)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,zr(e,a))));break;case 19:gt(t,e),xt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,zr(e,n)));break;case 30:break;case 21:break;default:gt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(jp(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var r=a.stateNode,o=pc(e);Er(e,o,r);break;case 5:var p=a.stateNode;a.flags&32&&(Ln(p,""),a.flags&=-33);var m=pc(e);Er(e,m,p);break;case 3:case 4:var S=a.stateNode.containerInfo,A=pc(e);hc(e,A,S);break;default:throw Error(c(161))}}catch(q){ke(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zp(e,t.alternate,t),t=t.sibling}function En(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Za(4,t,t.return),En(t);break;case 1:aa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wp(t,t.return,a),En(t);break;case 27:ui(t.stateNode);case 26:case 5:aa(t,t.return),En(t);break;case 22:t.memoizedState===null&&En(t);break;case 30:En(t);break;default:En(t)}e=e.sibling}}function wa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=e,o=t,p=o.flags;switch(o.tag){case 0:case 11:case 15:wa(r,o,a),ei(4,o);break;case 1:if(wa(r,o,a),n=o,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(A){ke(n,n.return,A)}if(n=o,r=n.updateQueue,r!==null){var m=n.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)cd(S[r],m)}catch(A){ke(n,n.return,A)}}a&&p&64&&vp(o),ti(o,o.return);break;case 27:Np(o);case 26:case 5:wa(r,o,a),a&&n===null&&p&4&&Sp(o),ti(o,o.return);break;case 12:wa(r,o,a);break;case 31:wa(r,o,a),a&&p&4&&Ap(r,o);break;case 13:wa(r,o,a),a&&p&4&&Rp(r,o);break;case 22:o.memoizedState===null&&wa(r,o,a),ti(o,o.return);break;case 30:break;default:wa(r,o,a)}t=t.sibling}}function gc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yl(a))}function xc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e))}function Ft(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_p(e,t,a,n),t=t.sibling}function _p(e,t,a,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(e,t,a,n),r&2048&&ei(9,t);break;case 1:Ft(e,t,a,n);break;case 3:Ft(e,t,a,n),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e)));break;case 12:if(r&2048){Ft(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,p=o.id,m=o.onPostCommit;typeof m=="function"&&m(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){ke(t,t.return,S)}}else Ft(e,t,a,n);break;case 31:Ft(e,t,a,n);break;case 13:Ft(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,p=t.alternate,t.memoizedState!==null?o._visibility&2?Ft(e,t,a,n):ai(e,t):o._visibility&2?Ft(e,t,a,n):(o._visibility|=2,ll(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),r&2048&&gc(p,t);break;case 24:Ft(e,t,a,n),r&2048&&xc(t.alternate,t);break;default:Ft(e,t,a,n)}}function ll(e,t,a,n,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,p=t,m=a,S=n,A=p.flags;switch(p.tag){case 0:case 11:case 15:ll(o,p,m,S,r),ei(8,p);break;case 23:break;case 22:var q=p.stateNode;p.memoizedState!==null?q._visibility&2?ll(o,p,m,S,r):ai(o,p):(q._visibility|=2,ll(o,p,m,S,r)),r&&A&2048&&gc(p.alternate,p);break;case 24:ll(o,p,m,S,r),r&&A&2048&&xc(p.alternate,p);break;default:ll(o,p,m,S,r)}t=t.sibling}}function ai(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,r=n.flags;switch(n.tag){case 22:ai(a,n),r&2048&&gc(n.alternate,n);break;case 24:ai(a,n),r&2048&&xc(n.alternate,n);break;default:ai(a,n)}t=t.sibling}}var ni=8192;function il(e,t,a){if(e.subtreeFlags&ni)for(e=e.child;e!==null;)Dp(e,t,a),e=e.sibling}function Dp(e,t,a){switch(e.tag){case 26:il(e,t,a),e.flags&ni&&e.memoizedState!==null&&ib(a,Kt,e.memoizedState,e.memoizedProps);break;case 5:il(e,t,a);break;case 3:case 4:var n=Kt;Kt=qr(e.stateNode.containerInfo),il(e,t,a),Kt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ni,ni=16777216,il(e,t,a),ni=n):il(e,t,a));break;default:il(e,t,a)}}function Mp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];tt=n,Bp(n,e)}Mp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Up(e),e=e.sibling}function Up(e){switch(e.tag){case 0:case 11:case 15:li(e),e.flags&2048&&Za(9,e,e.return);break;case 3:li(e);break;case 12:li(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tr(e)):li(e);break;default:li(e)}}function Tr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];tt=n,Bp(n,e)}Mp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Za(8,t,t.return),Tr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Tr(t));break;default:Tr(t)}e=e.sibling}}function Bp(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Za(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Yl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,tt=n;else e:for(a=e;tt!==null;){n=tt;var r=n.sibling,o=n.return;if(Tp(n),n===a){tt=null;break e}if(r!==null){r.return=o,tt=r;break e}tt=o}}}var vx={getCacheForType:function(e){var t=it(Ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return it(Ke).controller.signal}},wx=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ue=null,ve=null,Se=0,Oe=0,Tt=null,Ja=!1,rl=!1,bc=!1,Sa=0,Ge=0,Ka=0,zn=0,yc=0,Ct=0,ol=0,ii=null,bt=null,vc=!1,Cr=0,Lp=0,Ar=1/0,Rr=null,Fa=null,Ie=0,$a=null,sl=null,ja=0,wc=0,Sc=null,Hp=null,ri=0,jc=null;function At(){return(Re&2)!==0&&Se!==0?Se&-Se:O.T!==null?Ac():ef()}function qp(){if(Ct===0)if((Se&536870912)===0||Ne){var e=Li;Li<<=1,(Li&3932160)===0&&(Li=262144),Ct=e}else Ct=536870912;return e=Et.current,e!==null&&(e.flags|=32),Ct}function yt(e,t,a){(e===Ue&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(cl(e,0),Wa(e,Se,Ct,!1)),Tl(e,a),((Re&2)===0||e!==Ue)&&(e===Ue&&((Re&2)===0&&(zn|=a),Ge===4&&Wa(e,Se,Ct,!1)),na(e))}function Yp(e,t,a){if((Re&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||zl(e,t),r=n?Nx(e,t):Ec(e,t,!0),o=n;do{if(r===0){rl&&!n&&Wa(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Sx(a)){r=Ec(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var m=e;r=ii;var S=m.current.memoizedState.isDehydrated;if(S&&(cl(m,p).flags|=256),p=Ec(m,p,!1),p!==2){if(bc&&!S){m.errorRecoveryDisabledLanes|=o,zn|=o,r=4;break e}o=bt,bt=r,o!==null&&(bt===null?bt=o:bt.push.apply(bt,o))}r=p}if(o=!1,r!==2)continue}}if(r===1){cl(e,0),Wa(e,t,0,!0);break}e:{switch(n=e,o=r,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Wa(n,t,Ct,!Ja);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=Cr+300-Pe(),10<r)){if(Wa(n,t,Ct,!Ja),qi(n,0,!0)!==0)break e;ja=t,n.timeoutHandle=bh(Vp.bind(null,n,a,bt,Rr,vc,t,Ct,zn,ol,Ja,o,"Throttled",-0,0),r);break e}Vp(n,a,bt,Rr,vc,t,Ct,zn,ol,Ja,o,null,-0,0)}}break}while(!0);na(e)}function Vp(e,t,a,n,r,o,p,m,S,A,q,G,R,D){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},Dp(t,o,G);var le=(o&62914560)===o?Cr-Pe():(o&4194048)===o?Lp-Pe():0;if(le=rb(G,le),le!==null){ja=o,e.cancelPendingCommit=le($p.bind(null,e,t,o,a,n,r,p,m,S,q,G,null,R,D)),Wa(e,o,p,!A);return}}$p(e,t,o,a,n,r,p,m,S)}function Sx(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var r=a[n],o=r.getSnapshot;r=r.value;try{if(!jt(o(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wa(e,t,a,n){t&=~yc,t&=~zn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var o=31-St(r),p=1<<o;n[o]=-1,r&=~p}a!==0&&Wu(e,a,t)}function Or(){return(Re&6)===0?(oi(0),!1):!0}function Nc(){if(ve!==null){if(Oe===0)var e=ve.return;else e=ve,da=xn=null,qs(e),In=null,Gl=0,e=ve;for(;e!==null;)yp(e.alternate,e),e=e.return;ve=null}}function cl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ja=0,Nc(),Ue=e,ve=a=ua(e.current,null),Se=t,Oe=0,Tt=null,Ja=!1,rl=zl(e,t),bc=!1,ol=Ct=yc=zn=Ka=Ge=0,bt=ii=null,vc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-St(n),o=1<<r;t|=e[r],n&=~o}return Sa=t,Pi(),a}function Gp(e,t){pe=null,O.H=Wl,t===Pn||t===rr?(t=id(),Oe=3):t===Cs?(t=id(),Oe=4):Oe=t===ac?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,ve===null&&(Ge=1,vr(e,Mt(t,e.current)))}function Xp(){var e=Et.current;return e===null?!0:(Se&4194048)===Se?Ht===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Ht:!1}function Qp(){var e=O.H;return O.H=Wl,e===null?Wl:e}function Zp(){var e=O.A;return O.A=vx,e}function kr(){Ge=4,Ja||(Se&4194048)!==Se&&Et.current!==null||(rl=!0),(Ka&134217727)===0&&(zn&134217727)===0||Ue===null||Wa(Ue,Se,Ct,!1)}function Ec(e,t,a){var n=Re;Re|=2;var r=Qp(),o=Zp();(Ue!==e||Se!==t)&&(Rr=null,cl(e,t)),t=!1;var p=Ge;e:do try{if(Oe!==0&&ve!==null){var m=ve,S=Tt;switch(Oe){case 8:Nc(),p=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var A=Oe;if(Oe=0,Tt=null,ul(e,m,S,A),a&&rl){p=0;break e}break;default:A=Oe,Oe=0,Tt=null,ul(e,m,S,A)}}jx(),p=Ge;break}catch(q){Gp(e,q)}while(!0);return t&&e.shellSuspendCounter++,da=xn=null,Re=n,O.H=r,O.A=o,ve===null&&(Ue=null,Se=0,Pi()),p}function jx(){for(;ve!==null;)Jp(ve)}function Nx(e,t){var a=Re;Re|=2;var n=Qp(),r=Zp();Ue!==e||Se!==t?(Rr=null,Ar=Pe()+500,cl(e,t)):rl=zl(e,t);e:do try{if(Oe!==0&&ve!==null){t=ve;var o=Tt;t:switch(Oe){case 1:Oe=0,Tt=null,ul(e,t,o,1);break;case 2:case 9:if(nd(o)){Oe=0,Tt=null,Kp(t);break}t=function(){Oe!==2&&Oe!==9||Ue!==e||(Oe=7),na(e)},o.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:nd(o)?(Oe=0,Tt=null,Kp(t)):(Oe=0,Tt=null,ul(e,t,o,7));break;case 5:var p=null;switch(ve.tag){case 26:p=ve.memoizedState;case 5:case 27:var m=ve;if(p?_h(p):m.stateNode.complete){Oe=0,Tt=null;var S=m.sibling;if(S!==null)ve=S;else{var A=m.return;A!==null?(ve=A,_r(A)):ve=null}break t}}Oe=0,Tt=null,ul(e,t,o,5);break;case 6:Oe=0,Tt=null,ul(e,t,o,6);break;case 8:Nc(),Ge=6;break e;default:throw Error(c(462))}}Ex();break}catch(q){Gp(e,q)}while(!0);return da=xn=null,O.H=n,O.A=r,Re=a,ve!==null?0:(Ue=null,Se=0,Pi(),Ge)}function Ex(){for(;ve!==null&&!It();)Jp(ve)}function Jp(e){var t=xp(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,t===null?_r(e):ve=t}function Kp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=fp(a,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=fp(a,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:qs(t);default:yp(a,t),t=ve=Zf(t,Sa),t=xp(a,t,Sa)}e.memoizedProps=e.pendingProps,t===null?_r(e):ve=t}function ul(e,t,a,n){da=xn=null,qs(t),In=null,Gl=0;var r=t.return;try{if(px(e,r,t,a,Se)){Ge=1,vr(e,Mt(a,e.current)),ve=null;return}}catch(o){if(r!==null)throw ve=r,o;Ge=1,vr(e,Mt(a,e.current)),ve=null;return}t.flags&32768?(Ne||n===1?e=!0:rl||(Se&536870912)!==0?e=!1:(Ja=e=!0,(n===2||n===9||n===3||n===6)&&(n=Et.current,n!==null&&n.tag===13&&(n.flags|=16384))),Fp(t,e)):_r(t)}function _r(e){var t=e;do{if((t.flags&32768)!==0){Fp(t,Ja);return}e=t.return;var a=gx(t.alternate,t,Sa);if(a!==null){ve=a;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ge===0&&(Ge=5)}function Fp(e,t){do{var a=xx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Ge=6,ve=null}function $p(e,t,a,n,r,o,p,m,S){e.cancelPendingCommit=null;do Dr();while(Ie!==0);if((Re&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=ps,lg(e,a,o,p,m,S),e===Ue&&(ve=Ue=null,Se=0),sl=t,$a=e,ja=a,wc=o,Sc=r,Hp=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ax(Zt,function(){return th(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null,r=$.p,$.p=2,p=Re,Re|=4;try{bx(e,t,a)}finally{Re=p,$.p=r,O.T=n}}Ie=1,Wp(),Pp(),Ip()}}function Wp(){if(Ie===1){Ie=0;var e=$a,t=sl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var n=$.p;$.p=2;var r=Re;Re|=4;try{Op(t,e);var o=Bc,p=Bf(e.containerInfo),m=o.focusedElem,S=o.selectionRange;if(p!==m&&m&&m.ownerDocument&&Uf(m.ownerDocument.documentElement,m)){if(S!==null&&ss(m)){var A=S.start,q=S.end;if(q===void 0&&(q=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(q,m.value.length);else{var G=m.ownerDocument||document,R=G&&G.defaultView||window;if(R.getSelection){var D=R.getSelection(),le=m.textContent.length,ce=Math.min(S.start,le),Me=S.end===void 0?ce:Math.min(S.end,le);!D.extend&&ce>Me&&(p=Me,Me=ce,ce=p);var E=Mf(m,ce),N=Mf(m,Me);if(E&&N&&(D.rangeCount!==1||D.anchorNode!==E.node||D.anchorOffset!==E.offset||D.focusNode!==N.node||D.focusOffset!==N.offset)){var C=G.createRange();C.setStart(E.node,E.offset),D.removeAllRanges(),ce>Me?(D.addRange(C),D.extend(N.node,N.offset)):(C.setEnd(N.node,N.offset),D.addRange(C))}}}}for(G=[],D=m;D=D.parentNode;)D.nodeType===1&&G.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<G.length;m++){var Y=G[m];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Zr=!!Uc,Bc=Uc=null}finally{Re=r,$.p=n,O.T=a}}e.current=t,Ie=2}}function Pp(){if(Ie===2){Ie=0;var e=$a,t=sl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var n=$.p;$.p=2;var r=Re;Re|=4;try{zp(e,t.alternate,t)}finally{Re=r,$.p=n,O.T=a}}Ie=3}}function Ip(){if(Ie===4||Ie===3){Ie=0,Xt();var e=$a,t=sl,a=ja,n=Hp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,sl=$a=null,eh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Fa=null),Go(a),t=t.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(sn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=O.T,r=$.p,$.p=2,O.T=null;try{for(var o=e.onRecoverableError,p=0;p<n.length;p++){var m=n[p];o(m.value,{componentStack:m.stack})}}finally{O.T=t,$.p=r}}(ja&3)!==0&&Dr(),na(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===jc?ri++:(ri=0,jc=e):ri=0,oi(0)}}function eh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yl(t)))}function Dr(){return Wp(),Pp(),Ip(),th()}function th(){if(Ie!==5)return!1;var e=$a,t=wc;wc=0;var a=Go(ja),n=O.T,r=$.p;try{$.p=32>a?32:a,O.T=null,a=Sc,Sc=null;var o=$a,p=ja;if(Ie=0,sl=$a=null,ja=0,(Re&6)!==0)throw Error(c(331));var m=Re;if(Re|=4,Up(o.current),_p(o,o.current,p,a),Re=m,oi(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(sn,o)}catch{}return!0}finally{$.p=r,O.T=n,eh(e,t)}}function ah(e,t,a){t=Mt(a,t),t=tc(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(Tl(e,2),na(e))}function ke(e,t,a){if(e.tag===3)ah(e,e,a);else for(;t!==null;){if(t.tag===3){ah(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Fa===null||!Fa.has(n))){e=Mt(a,e),a=np(2),n=Ga(t,a,2),n!==null&&(lp(a,n,t,e),Tl(n,2),na(n));break}}t=t.return}}function zc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new wx;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(a)||(bc=!0,r.add(a),e=zx.bind(null,e,t,a),t.then(e,e))}function zx(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ue===e&&(Se&a)===a&&(Ge===4||Ge===3&&(Se&62914560)===Se&&300>Pe()-Cr?(Re&2)===0&&cl(e,0):yc|=a,ol===Se&&(ol=0)),na(e)}function nh(e,t){t===0&&(t=$u()),e=hn(e,t),e!==null&&(Tl(e,t),na(e))}function Tx(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),nh(e,a)}function Cx(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),nh(e,a)}function Ax(e,t){return fe(e,t)}var Mr=null,fl=null,Tc=!1,Ur=!1,Cc=!1,Pa=0;function na(e){e!==fl&&e.next===null&&(fl===null?Mr=fl=e:fl=fl.next=e),Ur=!0,Tc||(Tc=!0,Ox())}function oi(e,t){if(!Cc&&Ur){Cc=!0;do for(var a=!1,n=Mr;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var o=0;else{var p=n.suspendedLanes,m=n.pingedLanes;o=(1<<31-St(42|e)+1)-1,o&=r&~(p&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,oh(n,o))}else o=Se,o=qi(n,n===Ue?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||zl(n,o)||(a=!0,oh(n,o));n=n.next}while(a);Cc=!1}}function Rx(){lh()}function lh(){Ur=Tc=!1;var e=0;Pa!==0&&Yx()&&(e=Pa);for(var t=Pe(),a=null,n=Mr;n!==null;){var r=n.next,o=ih(n,t);o===0?(n.next=null,a===null?Mr=r:a.next=r,r===null&&(fl=a)):(a=n,(e!==0||(o&3)!==0)&&(Ur=!0)),n=r}Ie!==0&&Ie!==5||oi(e),Pa!==0&&(Pa=0)}function ih(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var p=31-St(o),m=1<<p,S=r[p];S===-1?((m&a)===0||(m&n)!==0)&&(r[p]=ng(m,t)):S<=t&&(e.expiredLanes|=m),o&=~m}if(t=Ue,a=Se,a=qi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ye(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ye(n),Go(a)){case 2:case 8:a=Qt;break;case 32:a=Zt;break;case 268435456:a=Mi;break;default:a=Zt}return n=rh.bind(null,e),a=fe(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ye(n),e.callbackPriority=2,e.callbackNode=null,2}function rh(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dr()&&e.callbackNode!==a)return null;var n=Se;return n=qi(e,e===Ue?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Yp(e,n,t),ih(e,Pe()),e.callbackNode!=null&&e.callbackNode===a?rh.bind(null,e):null)}function oh(e,t){if(Dr())return null;Yp(e,t,!0)}function Ox(){Gx(function(){(Re&6)!==0?fe(_a,Rx):lh()})}function Ac(){if(Pa===0){var e=$n;e===0&&(e=Bi,Bi<<=1,(Bi&261888)===0&&(Bi=256)),Pa=e}return Pa}function sh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xi(""+e)}function ch(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function kx(e,t,a,n,r){if(t==="submit"&&a&&a.stateNode===r){var o=sh((r[pt]||null).action),p=n.submitter;p&&(t=(t=p[pt]||null)?sh(t.formAction):p.getAttribute("formAction"),t!==null&&(o=t,p=null));var m=new Ki("action","action",null,n,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Pa!==0){var S=p?ch(r,p):new FormData(r);Fs(a,{pending:!0,data:S,method:r.method,action:o},null,S)}}else typeof o=="function"&&(m.preventDefault(),S=p?ch(r,p):new FormData(r),Fs(a,{pending:!0,data:S,method:r.method,action:o},o,S))},currentTarget:r}]})}}for(var Rc=0;Rc<ds.length;Rc++){var Oc=ds[Rc],_x=Oc.toLowerCase(),Dx=Oc[0].toUpperCase()+Oc.slice(1);Jt(_x,"on"+Dx)}Jt(qf,"onAnimationEnd"),Jt(Yf,"onAnimationIteration"),Jt(Vf,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt($g,"onTransitionRun"),Jt(Wg,"onTransitionStart"),Jt(Pg,"onTransitionCancel"),Jt(Gf,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function uh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],r=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var p=n.length-1;0<=p;p--){var m=n[p],S=m.instance,A=m.currentTarget;if(m=m.listener,S!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=A;try{o(r)}catch(q){Wi(q)}r.currentTarget=null,o=S}else for(p=0;p<n.length;p++){if(m=n[p],S=m.instance,A=m.currentTarget,m=m.listener,S!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=A;try{o(r)}catch(q){Wi(q)}r.currentTarget=null,o=S}}}}function we(e,t){var a=t[Xo];a===void 0&&(a=t[Xo]=new Set);var n=e+"__bubble";a.has(n)||(fh(t,e,2,!1),a.add(n))}function kc(e,t,a){var n=0;t&&(n|=4),fh(a,e,n,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function _c(e){if(!e[Br]){e[Br]=!0,nf.forEach(function(a){a!=="selectionchange"&&(Mx.has(a)||kc(a,!1,e),kc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,kc("selectionchange",!1,t))}}function fh(e,t,a,n){switch(qh(t)){case 2:var r=cb;break;case 8:r=ub;break;default:r=Kc}a=r.bind(null,t,a,e),r=void 0,!Io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Dc(e,t,a,n,r){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var p=n.tag;if(p===3||p===4){var m=n.stateNode.containerInfo;if(m===r)break;if(p===4)for(p=n.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;m!==null;){if(p=_n(m),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){n=o=p;continue e}m=m.parentNode}}n=n.return}gf(function(){var A=o,q=Wo(a),G=[];e:{var R=Xf.get(e);if(R!==void 0){var D=Ki,le=e;switch(e){case"keypress":if(Zi(a)===0)break e;case"keydown":case"keyup":D=Cg;break;case"focusin":le="focus",D=ns;break;case"focusout":le="blur",D=ns;break;case"beforeblur":case"afterblur":D=ns;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Og;break;case qf:case Yf:case Vf:D=yg;break;case Gf:D=_g;break;case"scroll":case"scrollend":D=hg;break;case"wheel":D=Mg;break;case"copy":case"cut":case"paste":D=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=wf;break;case"toggle":case"beforetoggle":D=Bg}var ce=(t&4)!==0,Me=!ce&&(e==="scroll"||e==="scrollend"),E=ce?R!==null?R+"Capture":null:R;ce=[];for(var N=A,C;N!==null;){var Y=N;if(C=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||C===null||E===null||(Y=Rl(N,E),Y!=null&&ce.push(ci(N,Y,C))),Me)break;N=N.return}0<ce.length&&(R=new D(R,le,null,a,q),G.push({event:R,listeners:ce}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",R&&a!==$o&&(le=a.relatedTarget||a.fromElement)&&(_n(le)||le[kn]))break e;if((D||R)&&(R=q.window===q?q:(R=q.ownerDocument)?R.defaultView||R.parentWindow:window,D?(le=a.relatedTarget||a.toElement,D=A,le=le?_n(le):null,le!==null&&(Me=d(le),ce=le.tag,le!==Me||ce!==5&&ce!==27&&ce!==6)&&(le=null)):(D=null,le=A),D!==le)){if(ce=yf,Y="onMouseLeave",E="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ce=wf,Y="onPointerLeave",E="onPointerEnter",N="pointer"),Me=D==null?R:Al(D),C=le==null?R:Al(le),R=new ce(Y,N+"leave",D,a,q),R.target=Me,R.relatedTarget=C,Y=null,_n(q)===A&&(ce=new ce(E,N+"enter",le,a,q),ce.target=C,ce.relatedTarget=Me,Y=ce),Me=Y,D&&le)t:{for(ce=Ux,E=D,N=le,C=0,Y=E;Y;Y=ce(Y))C++;Y=0;for(var se=N;se;se=ce(se))Y++;for(;0<C-Y;)E=ce(E),C--;for(;0<Y-C;)N=ce(N),Y--;for(;C--;){if(E===N||N!==null&&E===N.alternate){ce=E;break t}E=ce(E),N=ce(N)}ce=null}else ce=null;D!==null&&dh(G,R,D,ce,!1),le!==null&&Me!==null&&dh(G,Me,le,ce,!0)}}e:{if(R=A?Al(A):window,D=R.nodeName&&R.nodeName.toLowerCase(),D==="select"||D==="input"&&R.type==="file")var Ce=Af;else if(Tf(R))if(Rf)Ce=Jg;else{Ce=Qg;var ie=Xg}else D=R.nodeName,!D||D.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&Fo(A.elementType)&&(Ce=Af):Ce=Zg;if(Ce&&(Ce=Ce(e,A))){Cf(G,Ce,a,q);break e}ie&&ie(e,R,A),e==="focusout"&&A&&R.type==="number"&&A.memoizedProps.value!=null&&Ko(R,"number",R.value)}switch(ie=A?Al(A):window,e){case"focusin":(Tf(ie)||ie.contentEditable==="true")&&(Vn=ie,cs=A,Ll=null);break;case"focusout":Ll=cs=Vn=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,Lf(G,a,q);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":Lf(G,a,q)}var me;if(is)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Yn?Ef(e,a)&&(je="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(je="onCompositionStart");je&&(Sf&&a.locale!=="ko"&&(Yn||je!=="onCompositionStart"?je==="onCompositionEnd"&&Yn&&(me=xf()):(Ua=q,es="value"in Ua?Ua.value:Ua.textContent,Yn=!0)),ie=Lr(A,je),0<ie.length&&(je=new vf(je,e,null,a,q),G.push({event:je,listeners:ie}),me?je.data=me:(me=zf(a),me!==null&&(je.data=me)))),(me=Hg?qg(e,a):Yg(e,a))&&(je=Lr(A,"onBeforeInput"),0<je.length&&(ie=new vf("onBeforeInput","beforeinput",null,a,q),G.push({event:ie,listeners:je}),ie.data=me)),kx(G,e,A,a,q)}uh(G,t)})}function ci(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Lr(e,t){for(var a=t+"Capture",n=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Rl(e,a),r!=null&&n.unshift(ci(e,r,o)),r=Rl(e,t),r!=null&&n.push(ci(e,r,o))),e.tag===3)return n;e=e.return}return[]}function Ux(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dh(e,t,a,n,r){for(var o=t._reactName,p=[];a!==null&&a!==n;){var m=a,S=m.alternate,A=m.stateNode;if(m=m.tag,S!==null&&S===n)break;m!==5&&m!==26&&m!==27||A===null||(S=A,r?(A=Rl(a,o),A!=null&&p.unshift(ci(a,A,S))):r||(A=Rl(a,o),A!=null&&p.push(ci(a,A,S)))),a=a.return}p.length!==0&&e.push({event:t,listeners:p})}var Bx=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function ph(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(Lx,"")}function hh(e,t){return t=ph(t),ph(e)===t}function De(e,t,a,n,r,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ln(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ln(e,""+n);break;case"className":Vi(e,"class",n);break;case"tabIndex":Vi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Vi(e,a,n);break;case"style":hf(e,n,o);break;case"data":if(t!=="object"){Vi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Xi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&De(e,t,"name",r.name,r,null),De(e,t,"formEncType",r.formEncType,r,null),De(e,t,"formMethod",r.formMethod,r,null),De(e,t,"formTarget",r.formTarget,r,null)):(De(e,t,"encType",r.encType,r,null),De(e,t,"method",r.method,r,null),De(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Xi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=sa);break;case"onScroll":n!=null&&we("scroll",e);break;case"onScrollEnd":n!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Xi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":we("beforetoggle",e),we("toggle",e),Yi(e,"popover",n);break;case"xlinkActuate":oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":oa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":oa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":oa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":oa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Yi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dg.get(a)||a,Yi(e,a,n))}}function Mc(e,t,a,n,r,o){switch(a){case"style":hf(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ln(e,n):(typeof n=="number"||typeof n=="bigint")&&Ln(e,""+n);break;case"onScroll":n!=null&&we("scroll",e);break;case"onScrollEnd":n!=null&&we("scrollend",e);break;case"onClick":n!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),o=e[pt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,r);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Yi(e,a,n)}}}function ot(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var n=!1,r=!1,o;for(o in a)if(a.hasOwnProperty(o)){var p=a[o];if(p!=null)switch(o){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:De(e,t,o,p,a,null)}}r&&De(e,t,"srcSet",a.srcSet,a,null),n&&De(e,t,"src",a.src,a,null);return;case"input":we("invalid",e);var m=o=p=r=null,S=null,A=null;for(n in a)if(a.hasOwnProperty(n)){var q=a[n];if(q!=null)switch(n){case"name":r=q;break;case"type":p=q;break;case"checked":S=q;break;case"defaultChecked":A=q;break;case"value":o=q;break;case"defaultValue":m=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(c(137,t));break;default:De(e,t,n,q,a,null)}}uf(e,o,m,S,A,p,r,!1);return;case"select":we("invalid",e),n=p=o=null;for(r in a)if(a.hasOwnProperty(r)&&(m=a[r],m!=null))switch(r){case"value":o=m;break;case"defaultValue":p=m;break;case"multiple":n=m;default:De(e,t,r,m,a,null)}t=o,a=p,e.multiple=!!n,t!=null?Bn(e,!!n,t,!1):a!=null&&Bn(e,!!n,a,!0);return;case"textarea":we("invalid",e),o=r=n=null;for(p in a)if(a.hasOwnProperty(p)&&(m=a[p],m!=null))switch(p){case"value":n=m;break;case"defaultValue":r=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:De(e,t,p,m,a,null)}df(e,n,r,o);return;case"option":for(S in a)a.hasOwnProperty(S)&&(n=a[S],n!=null)&&(S==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":De(e,t,S,n,a,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(n=0;n<si.length;n++)we(si[n],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(n=a[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:De(e,t,A,n,a,null)}return;default:if(Fo(t)){for(q in a)a.hasOwnProperty(q)&&(n=a[q],n!==void 0&&Mc(e,t,q,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&De(e,t,m,n,a,null))}function Hx(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,p=null,m=null,S=null,A=null,q=null;for(D in a){var G=a[D];if(a.hasOwnProperty(D)&&G!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":S=G;default:n.hasOwnProperty(D)||De(e,t,D,null,n,G)}}for(var R in n){var D=n[R];if(G=a[R],n.hasOwnProperty(R)&&(D!=null||G!=null))switch(R){case"type":o=D;break;case"name":r=D;break;case"checked":A=D;break;case"defaultChecked":q=D;break;case"value":p=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:D!==G&&De(e,t,R,D,n,G)}}Jo(e,p,m,S,A,q,o,r);return;case"select":D=p=m=R=null;for(o in a)if(S=a[o],a.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":D=S;default:n.hasOwnProperty(o)||De(e,t,o,null,n,S)}for(r in n)if(o=n[r],S=a[r],n.hasOwnProperty(r)&&(o!=null||S!=null))switch(r){case"value":R=o;break;case"defaultValue":m=o;break;case"multiple":p=o;default:o!==S&&De(e,t,r,o,n,S)}t=m,a=p,n=D,R!=null?Bn(e,!!a,R,!1):!!n!=!!a&&(t!=null?Bn(e,!!a,t,!0):Bn(e,!!a,a?[]:"",!1));return;case"textarea":D=R=null;for(m in a)if(r=a[m],a.hasOwnProperty(m)&&r!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:De(e,t,m,null,n,r)}for(p in n)if(r=n[p],o=a[p],n.hasOwnProperty(p)&&(r!=null||o!=null))switch(p){case"value":R=r;break;case"defaultValue":D=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==o&&De(e,t,p,r,n,o)}ff(e,R,D);return;case"option":for(var le in a)R=a[le],a.hasOwnProperty(le)&&R!=null&&!n.hasOwnProperty(le)&&(le==="selected"?e.selected=!1:De(e,t,le,null,n,R));for(S in n)R=n[S],D=a[S],n.hasOwnProperty(S)&&R!==D&&(R!=null||D!=null)&&(S==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":De(e,t,S,R,n,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)R=a[ce],a.hasOwnProperty(ce)&&R!=null&&!n.hasOwnProperty(ce)&&De(e,t,ce,null,n,R);for(A in n)if(R=n[A],D=a[A],n.hasOwnProperty(A)&&R!==D&&(R!=null||D!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:De(e,t,A,R,n,D)}return;default:if(Fo(t)){for(var Me in a)R=a[Me],a.hasOwnProperty(Me)&&R!==void 0&&!n.hasOwnProperty(Me)&&Mc(e,t,Me,void 0,n,R);for(q in n)R=n[q],D=a[q],!n.hasOwnProperty(q)||R===D||R===void 0&&D===void 0||Mc(e,t,q,R,n,D);return}}for(var E in a)R=a[E],a.hasOwnProperty(E)&&R!=null&&!n.hasOwnProperty(E)&&De(e,t,E,null,n,R);for(G in n)R=n[G],D=a[G],!n.hasOwnProperty(G)||R===D||R==null&&D==null||De(e,t,G,R,n,D)}function mh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var r=a[n],o=r.transferSize,p=r.initiatorType,m=r.duration;if(o&&m&&mh(p)){for(p=0,m=r.responseEnd,n+=1;n<a.length;n++){var S=a[n],A=S.startTime;if(A>m)break;var q=S.transferSize,G=S.initiatorType;q&&mh(G)&&(S=S.responseEnd,p+=q*(S<m?1:(m-A)/(S-A)))}if(--n,t+=8*(o+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uc=null,Bc=null;function Hr(e){return e.nodeType===9?e:e.ownerDocument}function gh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function Yx(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var bh=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(e){return yh.resolve(null).then(e).catch(Xx)}:bh;function Xx(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function vh(e,t){var a=t,n=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(r),ml(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")ui(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ui(a);for(var o=a.firstChild;o;){var p=o.nextSibling,m=o.nodeName;o[Cl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=p}}else a==="body"&&ui(e.ownerDocument.body);a=r}while(a);ml(t)}function wh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function qc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qc(a),Qo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qx(e,t,a,n){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=qt(e.nextSibling),e===null)break}return null}function Zx(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qt(e.nextSibling),e===null))return null;return e}function Sh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qt(e.nextSibling),e===null))return null;return e}function Yc(e){return e.data==="$?"||e.data==="$~"}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jx(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Gc=null;function jh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return qt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Eh(e,t,a){switch(t=Hr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qo(e)}var Yt=new Map,zh=new Set;function qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Na=$.d;$.d={f:Kx,r:Fx,D:$x,C:Wx,L:Px,m:Ix,X:tb,S:eb,M:ab};function Kx(){var e=Na.f(),t=Or();return e||t}function Fx(e){var t=Dn(e);t!==null&&t.tag===5&&t.type==="form"?Gd(t):Na.r(e)}var dl=typeof document>"u"?null:document;function Th(e,t,a){var n=dl;if(n&&typeof t=="string"&&t){var r=_t(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),zh.has(r)||(zh.add(r),e={rel:e,crossOrigin:a,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),ot(t,"link",e),et(t),n.head.appendChild(t)))}}function $x(e){Na.D(e),Th("dns-prefetch",e,null)}function Wx(e,t){Na.C(e,t),Th("preconnect",e,t)}function Px(e,t,a){Na.L(e,t,a);var n=dl;if(n&&e&&t){var r='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+_t(a.imageSizes)+'"]')):r+='[href="'+_t(e)+'"]';var o=r;switch(t){case"style":o=pl(e);break;case"script":o=hl(e)}Yt.has(o)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Yt.set(o,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(fi(o))||t==="script"&&n.querySelector(di(o))||(t=n.createElement("link"),ot(t,"link",e),et(t),n.head.appendChild(t)))}}function Ix(e,t){Na.m(e,t);var a=dl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+_t(n)+'"][href="'+_t(e)+'"]',o=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=hl(e)}if(!Yt.has(o)&&(e=v({rel:"modulepreload",href:e},t),Yt.set(o,e),a.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(di(o)))return}n=a.createElement("link"),ot(n,"link",e),et(n),a.head.appendChild(n)}}}function eb(e,t,a){Na.S(e,t,a);var n=dl;if(n&&e){var r=Mn(n).hoistableStyles,o=pl(e);t=t||"default";var p=r.get(o);if(!p){var m={loading:0,preload:null};if(p=n.querySelector(fi(o)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Yt.get(o))&&Xc(e,a);var S=p=n.createElement("link");et(S),ot(S,"link",e),S._p=new Promise(function(A,q){S.onload=A,S.onerror=q}),S.addEventListener("load",function(){m.loading|=1}),S.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Yr(p,t,n)}p={type:"stylesheet",instance:p,count:1,state:m},r.set(o,p)}}}function tb(e,t){Na.X(e,t);var a=dl;if(a&&e){var n=Mn(a).hoistableScripts,r=hl(e),o=n.get(r);o||(o=a.querySelector(di(r)),o||(e=v({src:e,async:!0},t),(t=Yt.get(r))&&Qc(e,t),o=a.createElement("script"),et(o),ot(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function ab(e,t){Na.M(e,t);var a=dl;if(a&&e){var n=Mn(a).hoistableScripts,r=hl(e),o=n.get(r);o||(o=a.querySelector(di(r)),o||(e=v({src:e,async:!0,type:"module"},t),(t=Yt.get(r))&&Qc(e,t),o=a.createElement("script"),et(o),ot(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function Ch(e,t,a,n){var r=(r=ge.current)?qr(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=pl(a.href),a=Mn(r).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=pl(a.href);var o=Mn(r).hoistableStyles,p=o.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,p),(o=r.querySelector(fi(e)))&&!o._p&&(p.instance=o,p.state.loading=5),Yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yt.set(e,a),o||nb(r,e,a,p.state))),t&&n===null)throw Error(c(528,""));return p}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hl(a),a=Mn(r).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function pl(e){return'href="'+_t(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function Ah(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function nb(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ot(t,"link",a),et(t),e.head.appendChild(t))}function hl(e){return'[src="'+_t(e)+'"]'}function di(e){return"script[async]"+e}function Rh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+_t(a.href)+'"]');if(n)return t.instance=n,et(n),n;var r=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),et(n),ot(n,"style",r),Yr(n,a.precedence,e),t.instance=n;case"stylesheet":r=pl(a.href);var o=e.querySelector(fi(r));if(o)return t.state.loading|=4,t.instance=o,et(o),o;n=Ah(a),(r=Yt.get(r))&&Xc(n,r),o=(e.ownerDocument||e).createElement("link"),et(o);var p=o;return p._p=new Promise(function(m,S){p.onload=m,p.onerror=S}),ot(o,"link",n),t.state.loading|=4,Yr(o,a.precedence,e),t.instance=o;case"script":return o=hl(a.src),(r=e.querySelector(di(o)))?(t.instance=r,et(r),r):(n=a,(r=Yt.get(o))&&(n=v({},a),Qc(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),et(r),ot(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Yr(n,a.precedence,e));return t.instance}function Yr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,o=r,p=0;p<n.length;p++){var m=n[p];if(m.dataset.precedence===t)o=m;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vr=null;function Oh(e,t,a){if(Vr===null){var n=new Map,r=Vr=new Map;r.set(a,n)}else r=Vr,n=r.get(a),n||(n=new Map,r.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var o=a[r];if(!(o[Cl]||o[nt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var p=o.getAttribute(t)||"";p=e+p;var m=n.get(p);m?m.push(o):n.set(p,[o])}}return n}function kh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function lb(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _h(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ib(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=pl(n.href),o=t.querySelector(fi(r));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,et(o);return}o=t.ownerDocument||t,n=Ah(n),(r=Yt.get(r))&&Xc(n,r),o=o.createElement("link"),et(o);var p=o;p._p=new Promise(function(m,S){p.onload=m,p.onerror=S}),ot(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Gr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Zc=0;function rb(e,t){return e.stylesheets&&e.count===0&&Qr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Zc===0&&(Zc=62500*qx());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Zc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function Gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xr=null;function Qr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xr=new Map,t.forEach(ob,e),Xr=null,Gr.call(e))}function ob(e,t){if(!(t.state.loading&4)){var a=Xr.get(e);if(a)var n=a.get(null);else{a=new Map,Xr.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var p=r[o];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),n=p)}n&&a.set(null,n)}r=t.instance,p=r.getAttribute("data-precedence"),o=a.get(p)||n,o===n&&a.set(null,r),a.set(p,r),this.count++,n=Gr.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var pi={$$typeof:V,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function sb(e,t,a,n,r,o,p,m,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.hiddenUpdates=Yo(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Dh(e,t,a,n,r,o,p,m,S,A,q,G){return e=new sb(e,t,a,p,S,A,q,G,m),t=1,o===!0&&(t|=24),o=Nt(3,null,null,t),e.current=o,o.stateNode=e,t=Es(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},As(o),e}function Mh(e){return e?(e=Qn,e):Qn}function Uh(e,t,a,n,r,o){r=Mh(r),n.context===null?n.context=r:n.pendingContext=r,n=Va(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Ga(e,n,t),a!==null&&(yt(a,e,t),Ql(a,e,t))}function Bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Jc(e,t){Bh(e,t),(e=e.alternate)&&Bh(e,t)}function Lh(e){if(e.tag===13||e.tag===31){var t=hn(e,67108864);t!==null&&yt(t,e,67108864),Jc(e,67108864)}}function Hh(e){if(e.tag===13||e.tag===31){var t=At();t=Vo(t);var a=hn(e,t);a!==null&&yt(a,e,t),Jc(e,t)}}var Zr=!0;function cb(e,t,a,n){var r=O.T;O.T=null;var o=$.p;try{$.p=2,Kc(e,t,a,n)}finally{$.p=o,O.T=r}}function ub(e,t,a,n){var r=O.T;O.T=null;var o=$.p;try{$.p=8,Kc(e,t,a,n)}finally{$.p=o,O.T=r}}function Kc(e,t,a,n){if(Zr){var r=Fc(n);if(r===null)Dc(e,t,n,Jr,a),Yh(e,n);else if(db(r,e,t,a,n))n.stopPropagation();else if(Yh(e,n),t&4&&-1<fb.indexOf(e)){for(;r!==null;){var o=Dn(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var p=cn(o.pendingLanes);if(p!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var S=1<<31-St(p);m.entanglements[1]|=S,p&=~S}na(o),(Re&6)===0&&(Ar=Pe()+500,oi(0))}}break;case 31:case 13:m=hn(o,2),m!==null&&yt(m,o,2),Or(),Jc(o,2)}if(o=Fc(n),o===null&&Dc(e,t,n,Jr,a),o===r)break;r=o}r!==null&&n.stopPropagation()}else Dc(e,t,n,null,a)}}function Fc(e){return e=Wo(e),$c(e)}var Jr=null;function $c(e){if(Jr=null,e=_n(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jr=e,null}function qh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(on()){case _a:return 2;case Qt:return 8;case Zt:case Ho:return 32;case Mi:return 268435456;default:return 32}default:return 32}}var Wc=!1,en=null,tn=null,an=null,hi=new Map,mi=new Map,nn=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yh(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function gi(e,t,a,n,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Dn(t),t!==null&&Lh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function db(e,t,a,n,r){switch(t){case"focusin":return en=gi(en,e,t,a,n,r),!0;case"dragenter":return tn=gi(tn,e,t,a,n,r),!0;case"mouseover":return an=gi(an,e,t,a,n,r),!0;case"pointerover":var o=r.pointerId;return hi.set(o,gi(hi.get(o)||null,e,t,a,n,r)),!0;case"gotpointercapture":return o=r.pointerId,mi.set(o,gi(mi.get(o)||null,e,t,a,n,r)),!0}return!1}function Vh(e){var t=_n(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,tf(e.priority,function(){Hh(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,tf(e.priority,function(){Hh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Fc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);$o=n,a.target.dispatchEvent(n),$o=null}else return t=Dn(a),t!==null&&Lh(t),e.blockedOn=a,!1;t.shift()}return!0}function Gh(e,t,a){Kr(e)&&a.delete(t)}function pb(){Wc=!1,en!==null&&Kr(en)&&(en=null),tn!==null&&Kr(tn)&&(tn=null),an!==null&&Kr(an)&&(an=null),hi.forEach(Gh),mi.forEach(Gh)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,pb)))}var $r=null;function Xh(e){$r!==e&&($r=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){$r===e&&($r=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if($c(n||a)===null)continue;break}var o=Dn(a);o!==null&&(e.splice(t,3),t-=3,Fs(o,{pending:!0,data:r,method:a.method,action:n},n,r))}}))}function ml(e){function t(S){return Fr(S,e)}en!==null&&Fr(en,e),tn!==null&&Fr(tn,e),an!==null&&Fr(an,e),hi.forEach(t),mi.forEach(t);for(var a=0;a<nn.length;a++){var n=nn[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)Vh(a),a.blockedOn===null&&nn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var r=a[n],o=a[n+1],p=r[pt]||null;if(typeof o=="function")p||Xh(a);else if(p){var m=null;if(o&&o.hasAttribute("formAction")){if(r=o,p=o[pt]||null)m=p.formAction;else if($c(r)!==null)continue}else m=p.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Xh(a)}}}function Qh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Pc(e){this._internalRoot=e}Wr.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=At();Uh(a,n,e,t,null,null)},Wr.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Uh(e.current,2,null,e,null,null),Or(),t[kn]=null}};function Wr(e){this._internalRoot=e}Wr.prototype.unstable_scheduleHydration=function(e){if(e){var t=ef();e={blockedOn:null,target:e,priority:t};for(var a=0;a<nn.length&&t!==0&&t<nn[a].priority;a++);nn.splice(a,0,e),a===0&&Vh(e)}};var Zh=i.version;if(Zh!=="19.2.3")throw Error(c(527,Zh,"19.2.3"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var hb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{sn=Pr.inject(hb),Je=Pr}catch{}}return bi.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",r=Id,o=ep,p=tp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Dh(e,1,!1,null,null,a,n,null,r,o,p,Qh),e[kn]=t.current,_c(e),new Pc(t)},bi.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,r="",o=Id,p=ep,m=tp,S=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),t=Dh(e,1,!0,t,a??null,n,r,S,o,p,m,Qh),t.context=Mh(null),a=t.current,n=At(),n=Vo(n),r=Va(n),r.callback=null,Ga(a,r,n),a=n,t.current.lanes=a,Tl(t,a),na(t),e[kn]=t.current,_c(e),new Wr(t)},bi.version="19.2.3",bi}var a0;function Nb(){if(a0)return tu.exports;a0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),tu.exports=jb(),tu.exports}var Eb=Nb();const zb=Q0(Eb);var n0="popstate";function Tb(l={}){function i(c,f){let{pathname:d,search:h,hash:b}=c.location;return vu("",{pathname:d,search:h,hash:b},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(c,f){return typeof f=="string"?f:Si(f)}return Ab(i,s,null,l)}function Ye(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function Gt(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Cb(){return Math.random().toString(36).substring(2,10)}function l0(l,i){return{usr:l.state,key:l.key,idx:i}}function vu(l,i,s=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?yl(i):i,state:s,key:i&&i.key||c||Cb()}}function Si({pathname:l="/",search:i="",hash:s=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function yl(l){let i={};if(l){let s=l.indexOf("#");s>=0&&(i.hash=l.substring(s),l=l.substring(0,s));let c=l.indexOf("?");c>=0&&(i.search=l.substring(c),l=l.substring(0,c)),l&&(i.pathname=l)}return i}function Ab(l,i,s,c={}){let{window:f=document.defaultView,v5Compat:d=!1}=c,h=f.history,b="POP",x=null,g=y();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function y(){return(h.state||{idx:null}).idx}function v(){b="POP";let T=y(),_=T==null?null:T-g;g=T,x&&x({action:b,location:B.location,delta:_})}function M(T,_){b="PUSH";let H=vu(B.location,T,_);g=y()+1;let V=l0(H,g),W=B.createHref(H);try{h.pushState(V,"",W)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;f.location.assign(W)}d&&x&&x({action:b,location:B.location,delta:1})}function U(T,_){b="REPLACE";let H=vu(B.location,T,_);g=y();let V=l0(H,g),W=B.createHref(H);h.replaceState(V,"",W),d&&x&&x({action:b,location:B.location,delta:0})}function z(T){return Rb(T)}let B={get action(){return b},get location(){return l(f,h)},listen(T){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(n0,v),x=T,()=>{f.removeEventListener(n0,v),x=null}},createHref(T){return i(f,T)},createURL:z,encodeLocation(T){let _=z(T);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:M,replace:U,go(T){return h.go(T)}};return B}function Rb(l,i=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(s,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Si(l);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function Z0(l,i,s="/"){return Ob(l,i,s,!1)}function Ob(l,i,s,c){let f=typeof i=="string"?yl(i):i,d=Ca(f.pathname||"/",s);if(d==null)return null;let h=J0(l);kb(h);let b=null;for(let x=0;b==null&&x<h.length;++x){let g=Gb(d);b=Yb(h[x],g,c)}return b}function J0(l,i=[],s=[],c="",f=!1){let d=(h,b,x=f,g)=>{let y={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(c)&&x)return;Ye(y.relativePath.startsWith(c),`Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(c.length)}let v=za([c,y.relativePath]),M=s.concat(y);h.children&&h.children.length>0&&(Ye(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),J0(h.children,i,M,v,x)),!(h.path==null&&!h.index)&&i.push({path:v,score:Hb(v,h.index),routesMeta:M})};return l.forEach((h,b)=>{if(h.path===""||!h.path?.includes("?"))d(h,b);else for(let x of K0(h.path))d(h,b,!0,x)}),i}function K0(l){let i=l.split("/");if(i.length===0)return[];let[s,...c]=i,f=s.endsWith("?"),d=s.replace(/\?$/,"");if(c.length===0)return f?[d,""]:[d];let h=K0(c.join("/")),b=[];return b.push(...h.map(x=>x===""?d:[d,x].join("/"))),f&&b.push(...h),b.map(x=>l.startsWith("/")&&x===""?"/":x)}function kb(l){l.sort((i,s)=>i.score!==s.score?s.score-i.score:qb(i.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var _b=/^:[\w-]+$/,Db=3,Mb=2,Ub=1,Bb=10,Lb=-2,i0=l=>l==="*";function Hb(l,i){let s=l.split("/"),c=s.length;return s.some(i0)&&(c+=Lb),i&&(c+=Mb),s.filter(f=>!i0(f)).reduce((f,d)=>f+(_b.test(d)?Db:d===""?Ub:Bb),c)}function qb(l,i){return l.length===i.length&&l.slice(0,-1).every((c,f)=>c===i[f])?l[l.length-1]-i[i.length-1]:0}function Yb(l,i,s=!1){let{routesMeta:c}=l,f={},d="/",h=[];for(let b=0;b<c.length;++b){let x=c[b],g=b===c.length-1,y=d==="/"?i:i.slice(d.length)||"/",v=po({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},y),M=x.route;if(!v&&g&&s&&!c[c.length-1].route.index&&(v=po({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},y)),!v)return null;Object.assign(f,v.params),h.push({params:f,pathname:za([d,v.pathname]),pathnameBase:Jb(za([d,v.pathnameBase])),route:M}),v.pathnameBase!=="/"&&(d=za([d,v.pathnameBase]))}return h}function po(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,c]=Vb(l.path,l.caseSensitive,l.end),f=i.match(s);if(!f)return null;let d=f[0],h=d.replace(/(.)\/+$/,"$1"),b=f.slice(1);return{params:c.reduce((g,{paramName:y,isOptional:v},M)=>{if(y==="*"){let z=b[M]||"";h=d.slice(0,d.length-z.length).replace(/(.)\/+$/,"$1")}const U=b[M];return v&&!U?g[y]=void 0:g[y]=(U||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:h,pattern:l}}function Vb(l,i=!1,s=!0){Gt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,b,x)=>(c.push({paramName:b,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),c]}function Gb(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Gt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function Ca(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,c=l.charAt(s);return c&&c!=="/"?null:l.slice(s)||"/"}var F0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xb=l=>F0.test(l);function Qb(l,i="/"){let{pathname:s,search:c="",hash:f=""}=typeof l=="string"?yl(l):l,d;if(s)if(Xb(s))d=s;else{if(s.includes("//")){let h=s;s=s.replace(/\/\/+/g,"/"),Gt(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`)}s.startsWith("/")?d=r0(s.substring(1),"/"):d=r0(s,i)}else d=i;return{pathname:d,search:Kb(c),hash:Fb(f)}}function r0(l,i){let s=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function iu(l,i,s,c){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zb(l){return l.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function Mu(l){let i=Zb(l);return i.map((s,c)=>c===i.length-1?s.pathname:s.pathnameBase)}function Uu(l,i,s,c=!1){let f;typeof l=="string"?f=yl(l):(f={...l},Ye(!f.pathname||!f.pathname.includes("?"),iu("?","pathname","search",f)),Ye(!f.pathname||!f.pathname.includes("#"),iu("#","pathname","hash",f)),Ye(!f.search||!f.search.includes("#"),iu("#","search","hash",f)));let d=l===""||f.pathname==="",h=d?"/":f.pathname,b;if(h==null)b=s;else{let v=i.length-1;if(!c&&h.startsWith("..")){let M=h.split("/");for(;M[0]==="..";)M.shift(),v-=1;f.pathname=M.join("/")}b=v>=0?i[v]:"/"}let x=Qb(f,b),g=h&&h!=="/"&&h.endsWith("/"),y=(d||h===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(g||y)&&(x.pathname+="/"),x}var za=l=>l.join("/").replace(/\/\/+/g,"/"),Jb=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Kb=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Fb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,$b=class{constructor(l,i,s,c=!1){this.status=l,this.statusText=i||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Wb(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Pb(l){return l.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var $0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function W0(l,i){let s=l;if(typeof s!="string"||!F0.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let c=s,f=!1;if($0)try{let d=new URL(window.location.href),h=s.startsWith("//")?new URL(d.protocol+s):new URL(s),b=Ca(h.pathname,i);h.origin===d.origin&&b!=null?s=b+h.search+h.hash:f=!0}catch{Gt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var P0=["POST","PUT","PATCH","DELETE"];new Set(P0);var Ib=["GET",...P0];new Set(Ib);var vl=j.createContext(null);vl.displayName="DataRouter";var No=j.createContext(null);No.displayName="DataRouterState";var e1=j.createContext(!1),I0=j.createContext({isTransitioning:!1});I0.displayName="ViewTransition";var t1=j.createContext(new Map);t1.displayName="Fetchers";var a1=j.createContext(null);a1.displayName="Await";var Ot=j.createContext(null);Ot.displayName="Navigation";var zi=j.createContext(null);zi.displayName="Location";var ia=j.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var Bu=j.createContext(null);Bu.displayName="RouteError";var em="REACT_ROUTER_ERROR",n1="REDIRECT",l1="ROUTE_ERROR_RESPONSE";function i1(l){if(l.startsWith(`${em}:${n1}:{`))try{let i=JSON.parse(l.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function r1(l){if(l.startsWith(`${em}:${l1}:{`))try{let i=JSON.parse(l.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new $b(i.status,i.statusText,i.data)}catch{}}function o1(l,{relative:i}={}){Ye(wl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=j.useContext(Ot),{hash:f,pathname:d,search:h}=Ti(l,{relative:i}),b=d;return s!=="/"&&(b=d==="/"?s:za([s,d])),c.createHref({pathname:b,search:h,hash:f})}function wl(){return j.useContext(zi)!=null}function Ra(){return Ye(wl(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(zi).location}var tm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function am(l){j.useContext(Ot).static||j.useLayoutEffect(l)}function Oa(){let{isDataRoute:l}=j.useContext(ia);return l?v1():s1()}function s1(){Ye(wl(),"useNavigate() may be used only in the context of a <Router> component.");let l=j.useContext(vl),{basename:i,navigator:s}=j.useContext(Ot),{matches:c}=j.useContext(ia),{pathname:f}=Ra(),d=JSON.stringify(Mu(c)),h=j.useRef(!1);return am(()=>{h.current=!0}),j.useCallback((x,g={})=>{if(Gt(h.current,tm),!h.current)return;if(typeof x=="number"){s.go(x);return}let y=Uu(x,JSON.parse(d),f,g.relative==="path");l==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:za([i,y.pathname])),(g.replace?s.replace:s.push)(y,g.state,g)},[i,s,d,f,l])}j.createContext(null);function Ti(l,{relative:i}={}){let{matches:s}=j.useContext(ia),{pathname:c}=Ra(),f=JSON.stringify(Mu(s));return j.useMemo(()=>Uu(l,JSON.parse(f),c,i==="path"),[l,f,c,i])}function c1(l,i){return nm(l,i)}function nm(l,i,s,c,f){Ye(wl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=j.useContext(Ot),{matches:h}=j.useContext(ia),b=h[h.length-1],x=b?b.params:{},g=b?b.pathname:"/",y=b?b.pathnameBase:"/",v=b&&b.route;{let H=v&&v.path||"";im(g,!v||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let M=Ra(),U;if(i){let H=typeof i=="string"?yl(i):i;Ye(y==="/"||H.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=M;let z=U.pathname||"/",B=z;if(y!=="/"){let H=y.replace(/^\//,"").split("/");B="/"+z.replace(/^\//,"").split("/").slice(H.length).join("/")}let T=Z0(l,{pathname:B});Gt(v||T!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Gt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=h1(T&&T.map(H=>Object.assign({},H,{params:Object.assign({},x,H.params),pathname:za([y,d.encodeLocation?d.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?y:za([y,d.encodeLocation?d.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),h,s,c,f);return i&&_?j.createElement(zi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},_):_}function u1(){let l=y1(),i=Wb(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:d},"ErrorBoundary")," or"," ",j.createElement("code",{style:d},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},i),s?j.createElement("pre",{style:f},s):null,h)}var f1=j.createElement(u1,null),lm=class extends j.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){this.props.onError?this.props.onError(l,i):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const s=r1(l.digest);s&&(l=s)}let i=l!==void 0?j.createElement(ia.Provider,{value:this.props.routeContext},j.createElement(Bu.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?j.createElement(d1,{error:l},i):i}};lm.contextType=e1;var ru=new WeakMap;function d1({children:l,error:i}){let{basename:s}=j.useContext(Ot);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let c=i1(i.digest);if(c){let f=ru.get(i);if(f)throw f;let d=W0(c.location,s);if($0&&!ru.get(i))if(d.isExternal||c.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:c.replace}));throw ru.set(i,h),h}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return l}function p1({routeContext:l,match:i,children:s}){let c=j.useContext(vl);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),j.createElement(ia.Provider,{value:l},s)}function h1(l,i=[],s=null,c=null,f=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let d=l,h=s?.errors;if(h!=null){let y=d.findIndex(v=>v.route.id&&h?.[v.route.id]!==void 0);Ye(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let b=!1,x=-1;if(s)for(let y=0;y<d.length;y++){let v=d[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(x=y),v.route.id){let{loaderData:M,errors:U}=s,z=v.route.loader&&!M.hasOwnProperty(v.route.id)&&(!U||U[v.route.id]===void 0);if(v.route.lazy||z){b=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}let g=s&&c?(y,v)=>{c(y,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Pb(s.matches),errorInfo:v})}:void 0;return d.reduceRight((y,v,M)=>{let U,z=!1,B=null,T=null;s&&(U=h&&v.route.id?h[v.route.id]:void 0,B=v.route.errorElement||f1,b&&(x<0&&M===0?(im("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,T=null):x===M&&(z=!0,T=v.route.hydrateFallbackElement||null)));let _=i.concat(d.slice(0,M+1)),H=()=>{let V;return U?V=B:z?V=T:v.route.Component?V=j.createElement(v.route.Component,null):v.route.element?V=v.route.element:V=y,j.createElement(p1,{match:v,routeContext:{outlet:y,matches:_,isDataRoute:s!=null},children:V})};return s&&(v.route.ErrorBoundary||v.route.errorElement||M===0)?j.createElement(lm,{location:s.location,revalidation:s.revalidation,component:B,error:U,children:H(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:g}):H()},null)}function Lu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m1(l){let i=j.useContext(vl);return Ye(i,Lu(l)),i}function g1(l){let i=j.useContext(No);return Ye(i,Lu(l)),i}function x1(l){let i=j.useContext(ia);return Ye(i,Lu(l)),i}function Hu(l){let i=x1(l),s=i.matches[i.matches.length-1];return Ye(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function b1(){return Hu("useRouteId")}function y1(){let l=j.useContext(Bu),i=g1("useRouteError"),s=Hu("useRouteError");return l!==void 0?l:i.errors?.[s]}function v1(){let{router:l}=m1("useNavigate"),i=Hu("useNavigate"),s=j.useRef(!1);return am(()=>{s.current=!0}),j.useCallback(async(f,d={})=>{Gt(s.current,tm),s.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:i,...d}))},[l,i])}var o0={};function im(l,i,s){!i&&!o0[l]&&(o0[l]=!0,Gt(!1,s))}j.memo(w1);function w1({routes:l,future:i,state:s,onError:c}){return nm(l,void 0,s,c,i)}function rm({to:l,replace:i,state:s,relative:c}){Ye(wl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=j.useContext(Ot);Gt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=j.useContext(ia),{pathname:h}=Ra(),b=Oa(),x=Uu(l,Mu(d),h,c==="path"),g=JSON.stringify(x);return j.useEffect(()=>{b(JSON.parse(g),{replace:i,state:s,relative:c})},[b,g,c,i,s]),null}function Tn(l){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function S1({basename:l="/",children:i=null,location:s,navigationType:c="POP",navigator:f,static:d=!1,unstable_useTransitions:h}){Ye(!wl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),x=j.useMemo(()=>({basename:b,navigator:f,static:d,unstable_useTransitions:h,future:{}}),[b,f,d,h]);typeof s=="string"&&(s=yl(s));let{pathname:g="/",search:y="",hash:v="",state:M=null,key:U="default"}=s,z=j.useMemo(()=>{let B=Ca(g,b);return B==null?null:{location:{pathname:B,search:y,hash:v,state:M,key:U},navigationType:c}},[b,g,y,v,M,U,c]);return Gt(z!=null,`<Router basename="${b}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:j.createElement(Ot.Provider,{value:x},j.createElement(zi.Provider,{children:i,value:z}))}function j1({children:l,location:i}){return c1(wu(l),i)}function wu(l,i=[]){let s=[];return j.Children.forEach(l,(c,f)=>{if(!j.isValidElement(c))return;let d=[...i,f];if(c.type===j.Fragment){s.push.apply(s,wu(c.props.children,d));return}Ye(c.type===Tn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=wu(c.props.children,d)),s.push(h)}),s}var io="get",ro="application/x-www-form-urlencoded";function Eo(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function N1(l){return Eo(l)&&l.tagName.toLowerCase()==="button"}function E1(l){return Eo(l)&&l.tagName.toLowerCase()==="form"}function z1(l){return Eo(l)&&l.tagName.toLowerCase()==="input"}function T1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function C1(l,i){return l.button===0&&(!i||i==="_self")&&!T1(l)}var Ir=null;function A1(){if(Ir===null)try{new FormData(document.createElement("form"),0),Ir=!1}catch{Ir=!0}return Ir}var R1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ou(l){return l!=null&&!R1.has(l)?(Gt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ro}"`),null):l}function O1(l,i){let s,c,f,d,h;if(E1(l)){let b=l.getAttribute("action");c=b?Ca(b,i):null,s=l.getAttribute("method")||io,f=ou(l.getAttribute("enctype"))||ro,d=new FormData(l)}else if(N1(l)||z1(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=l.getAttribute("formaction")||b.getAttribute("action");if(c=x?Ca(x,i):null,s=l.getAttribute("formmethod")||b.getAttribute("method")||io,f=ou(l.getAttribute("formenctype"))||ou(b.getAttribute("enctype"))||ro,d=new FormData(b,l),!A1()){let{name:g,type:y,value:v}=l;if(y==="image"){let M=g?`${g}.`:"";d.append(`${M}x`,"0"),d.append(`${M}y`,"0")}else g&&d.append(g,v)}}else{if(Eo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=io,c=null,f=ro,h=l}return d&&f==="text/plain"&&(h=d,d=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qu(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function k1(l,i,s,c){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:i&&Ca(f.pathname,i)==="/"?f.pathname=`${i.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function _1(l,i){if(l.id in i)return i[l.id];try{let s=await import(l.module);return i[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function D1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function M1(l,i,s){let c=await Promise.all(l.map(async f=>{let d=i.routes[f.route.id];if(d){let h=await _1(d,s);return h.links?h.links():[]}return[]}));return H1(c.flat(1).filter(D1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function s0(l,i,s,c,f,d){let h=(x,g)=>s[g]?x.route.id!==s[g].route.id:!0,b=(x,g)=>s[g].pathname!==x.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==x.params["*"];return d==="assets"?i.filter((x,g)=>h(x,g)||b(x,g)):d==="data"?i.filter((x,g)=>{let y=c.routes[x.route.id];if(!y||!y.hasLoader)return!1;if(h(x,g)||b(x,g))return!0;if(x.route.shouldRevalidate){let v=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function U1(l,i,{includeHydrateFallback:s}={}){return B1(l.map(c=>{let f=i.routes[c.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function B1(l){return[...new Set(l)]}function L1(l){let i={},s=Object.keys(l).sort();for(let c of s)i[c]=l[c];return i}function H1(l,i){let s=new Set;return new Set(i),l.reduce((c,f)=>{let d=JSON.stringify(L1(f));return s.has(d)||(s.add(d),c.push({key:d,link:f})),c},[])}function om(){let l=j.useContext(vl);return qu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function q1(){let l=j.useContext(No);return qu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Yu=j.createContext(void 0);Yu.displayName="FrameworkContext";function sm(){let l=j.useContext(Yu);return qu(l,"You must render this element inside a <HydratedRouter> element"),l}function Y1(l,i){let s=j.useContext(Yu),[c,f]=j.useState(!1),[d,h]=j.useState(!1),{onFocus:b,onBlur:x,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=i,M=j.useRef(null);j.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let B=_=>{_.forEach(H=>{h(H.isIntersecting)})},T=new IntersectionObserver(B,{threshold:.5});return M.current&&T.observe(M.current),()=>{T.disconnect()}}},[l]),j.useEffect(()=>{if(c){let B=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(B)}}},[c]);let U=()=>{f(!0)},z=()=>{f(!1),h(!1)};return s?l!=="intent"?[d,M,{}]:[d,M,{onFocus:yi(b,U),onBlur:yi(x,z),onMouseEnter:yi(g,U),onMouseLeave:yi(y,z),onTouchStart:yi(v,U)}]:[!1,M,{}]}function yi(l,i){return s=>{l&&l(s),s.defaultPrevented||i(s)}}function V1({page:l,...i}){let{router:s}=om(),c=j.useMemo(()=>Z0(s.routes,l,s.basename),[s.routes,l,s.basename]);return c?j.createElement(X1,{page:l,matches:c,...i}):null}function G1(l){let{manifest:i,routeModules:s}=sm(),[c,f]=j.useState([]);return j.useEffect(()=>{let d=!1;return M1(l,i,s).then(h=>{d||f(h)}),()=>{d=!0}},[l,i,s]),c}function X1({page:l,matches:i,...s}){let c=Ra(),{future:f,manifest:d,routeModules:h}=sm(),{basename:b}=om(),{loaderData:x,matches:g}=q1(),y=j.useMemo(()=>s0(l,i,g,d,c,"data"),[l,i,g,d,c]),v=j.useMemo(()=>s0(l,i,g,d,c,"assets"),[l,i,g,d,c]),M=j.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let B=new Set,T=!1;if(i.forEach(H=>{let V=d.routes[H.route.id];!V||!V.hasLoader||(!y.some(W=>W.route.id===H.route.id)&&H.route.id in x&&h[H.route.id]?.shouldRevalidate||V.hasClientLoader?T=!0:B.add(H.route.id))}),B.size===0)return[];let _=k1(l,b,f.unstable_trailingSlashAwareDataRequests,"data");return T&&B.size>0&&_.searchParams.set("_routes",i.filter(H=>B.has(H.route.id)).map(H=>H.route.id).join(",")),[_.pathname+_.search]},[b,f.unstable_trailingSlashAwareDataRequests,x,c,d,y,i,l,h]),U=j.useMemo(()=>U1(v,d),[v,d]),z=G1(v);return j.createElement(j.Fragment,null,M.map(B=>j.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...s})),U.map(B=>j.createElement("link",{key:B,rel:"modulepreload",href:B,...s})),z.map(({key:B,link:T})=>j.createElement("link",{key:B,nonce:s.nonce,...T})))}function Q1(...l){return i=>{l.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var Z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z1&&(window.__reactRouterVersion="7.12.0")}catch{}function J1({basename:l,children:i,unstable_useTransitions:s,window:c}){let f=j.useRef();f.current==null&&(f.current=Tb({window:c,v5Compat:!0}));let d=f.current,[h,b]=j.useState({action:d.action,location:d.location}),x=j.useCallback(g=>{s===!1?b(g):j.startTransition(()=>b(g))},[s]);return j.useLayoutEffect(()=>d.listen(x),[d,x]),j.createElement(S1,{basename:l,children:i,location:h.location,navigationType:h.action,navigator:d,unstable_useTransitions:s})}var cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,um=j.forwardRef(function({onClick:i,discover:s="render",prefetch:c="none",relative:f,reloadDocument:d,replace:h,state:b,target:x,to:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:M,...U},z){let{basename:B,unstable_useTransitions:T}=j.useContext(Ot),_=typeof g=="string"&&cm.test(g),H=W0(g,B);g=H.to;let V=o1(g,{relative:f}),[W,I,ae]=Y1(c,U),P=W1(g,{replace:h,state:b,target:x,preventScrollReset:y,relative:f,viewTransition:v,unstable_defaultShouldRevalidate:M,unstable_useTransitions:T});function re(Ee){i&&i(Ee),Ee.defaultPrevented||P(Ee)}let xe=j.createElement("a",{...U,...ae,href:H.absoluteURL||V,onClick:H.isExternal||d?i:re,ref:Q1(z,I),target:x,"data-discover":!_&&s==="render"?"true":void 0});return W&&!_?j.createElement(j.Fragment,null,xe,j.createElement(V1,{page:V})):xe});um.displayName="Link";var K1=j.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:c="",end:f=!1,style:d,to:h,viewTransition:b,children:x,...g},y){let v=Ti(h,{relative:g.relative}),M=Ra(),U=j.useContext(No),{navigator:z,basename:B}=j.useContext(Ot),T=U!=null&&ay(v)&&b===!0,_=z.encodeLocation?z.encodeLocation(v).pathname:v.pathname,H=M.pathname,V=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;s||(H=H.toLowerCase(),V=V?V.toLowerCase():null,_=_.toLowerCase()),V&&B&&(V=Ca(V,B)||V);const W=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=H===_||!f&&H.startsWith(_)&&H.charAt(W)==="/",ae=V!=null&&(V===_||!f&&V.startsWith(_)&&V.charAt(_.length)==="/"),P={isActive:I,isPending:ae,isTransitioning:T},re=I?i:void 0,xe;typeof c=="function"?xe=c(P):xe=[c,I?"active":null,ae?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Ee=typeof d=="function"?d(P):d;return j.createElement(um,{...g,"aria-current":re,className:xe,ref:y,style:Ee,to:h,viewTransition:b},typeof x=="function"?x(P):x)});K1.displayName="NavLink";var F1=j.forwardRef(({discover:l="render",fetcherKey:i,navigate:s,reloadDocument:c,replace:f,state:d,method:h=io,action:b,onSubmit:x,relative:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:M,...U},z)=>{let{unstable_useTransitions:B}=j.useContext(Ot),T=ey(),_=ty(b,{relative:g}),H=h.toLowerCase()==="get"?"get":"post",V=typeof b=="string"&&cm.test(b),W=I=>{if(x&&x(I),I.defaultPrevented)return;I.preventDefault();let ae=I.nativeEvent.submitter,P=ae?.getAttribute("formmethod")||h,re=()=>T(ae||I.currentTarget,{fetcherKey:i,method:P,navigate:s,replace:f,state:d,relative:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:M});B&&s!==!1?j.startTransition(()=>re()):re()};return j.createElement("form",{ref:z,method:H,action:_,onSubmit:c?x:W,...U,"data-discover":!V&&l==="render"?"true":void 0})});F1.displayName="Form";function $1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fm(l){let i=j.useContext(vl);return Ye(i,$1(l)),i}function W1(l,{target:i,replace:s,state:c,preventScrollReset:f,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:b,unstable_useTransitions:x}={}){let g=Oa(),y=Ra(),v=Ti(l,{relative:d});return j.useCallback(M=>{if(C1(M,i)){M.preventDefault();let U=s!==void 0?s:Si(y)===Si(v),z=()=>g(l,{replace:U,state:c,preventScrollReset:f,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:b});x?j.startTransition(()=>z()):z()}},[y,g,v,s,c,i,l,f,d,h,b,x])}var P1=0,I1=()=>`__${String(++P1)}__`;function ey(){let{router:l}=fm("useSubmit"),{basename:i}=j.useContext(Ot),s=b1(),c=l.fetch,f=l.navigate;return j.useCallback(async(d,h={})=>{let{action:b,method:x,encType:g,formData:y,body:v}=O1(d,i);if(h.navigate===!1){let M=h.fetcherKey||I1();await c(M,s,h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:v,formMethod:h.method||x,formEncType:h.encType||g,flushSync:h.flushSync})}else await f(h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:v,formMethod:h.method||x,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:s,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,f,i,s])}function ty(l,{relative:i}={}){let{basename:s}=j.useContext(Ot),c=j.useContext(ia);Ye(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),d={...Ti(l||".",{relative:i})},h=Ra();if(l==null){d.search=h.search;let b=new URLSearchParams(d.search),x=b.getAll("index");if(x.some(y=>y==="")){b.delete("index"),x.filter(v=>v).forEach(v=>b.append("index",v));let y=b.toString();d.search=y?`?${y}`:""}}return(!l||l===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:za([s,d.pathname])),Si(d)}function ay(l,{relative:i}={}){let s=j.useContext(I0);Ye(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=fm("useViewTransitionState"),f=Ti(l,{relative:i});if(!s.isTransitioning)return!1;let d=Ca(s.currentLocation.pathname,c)||s.currentLocation.pathname,h=Ca(s.nextLocation.pathname,c)||s.nextLocation.pathname;return po(f.pathname,h)!=null||po(f.pathname,d)!=null}const dm="/assets/vvcmclogo-C6hbLrf7.jpg";function ny(){const l=Oa(),i=Ra(),[s,c]=j.useState(!1),[f,d]=j.useState(!1),h=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})();j.useEffect(()=>{const g=()=>d(window.scrollY>20);return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const b=()=>{localStorage.removeItem("citizenUser"),l("/login"),c(!1)},x=g=>i.pathname===g;return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx("div",{className:`cn-outer${f?" scrolled":""}`,children:u.jsxs("nav",{className:"cn-nav",children:[u.jsxs("div",{className:"cn-brand",onClick:()=>l("/"),children:[u.jsx("div",{className:"cn-logo-wrap",children:u.jsx("img",{src:dm,alt:"VVCMC"})}),u.jsxs("div",{className:"cn-brand-text",children:[u.jsx("span",{className:"cn-brand-name",children:"वसई-विरार शहर महानगरपालिका"}),u.jsx("span",{className:"cn-brand-sub",children:"जन संवाद"})]})]}),u.jsxs("div",{className:"cn-links",children:[u.jsx("button",{className:`cn-link${x("/")?" active":""}`,onClick:()=>l("/"),children:"Home"}),h&&u.jsx("button",{className:`cn-link${x("/my-appointments")?" active":""}`,onClick:()=>l("/my-appointments"),children:"My Appointments"}),h?u.jsxs(u.Fragment,{children:[u.jsxs("span",{className:"cn-citizen-name",children:["👋 ",h.fullName?.split(" ")[0]]}),u.jsx("button",{className:"cn-btn-solid",onClick:()=>l("/book-appointment"),children:"+ Book"}),u.jsx("button",{className:"cn-btn-danger",onClick:b,title:"Logout",children:u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18.36 6.64A9 9 0 1 1 5.64 6.64"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]})})]}):u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"cn-btn-outline",onClick:()=>l("/login"),children:"Login"}),u.jsx("button",{className:"cn-btn-solid",onClick:()=>l("/register"),children:"Register"})]})]}),u.jsx("button",{className:"cn-ham",onClick:()=>c(g=>!g),children:s?"✕":"☰"})]})}),u.jsxs("div",{className:`cn-mobile-menu${s?" open":""}`,children:[u.jsx("button",{className:`cn-mobile-link${x("/")?" active":""}`,onClick:()=>{l("/"),c(!1)},children:"🏠 Home"}),h&&u.jsx("button",{className:`cn-mobile-link${x("/my-appointments")?" active":""}`,onClick:()=>{l("/my-appointments"),c(!1)},children:"📅 My Appointments"}),h?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"cn-mobile-link",style:{color:"#CA9D28"},onClick:()=>{l("/book-appointment"),c(!1)},children:"+ Book Appointment"}),u.jsx("button",{className:"cn-mobile-link",style:{color:"#f87171"},onClick:b,children:"🚪 Logout"})]}):u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"cn-mobile-link",onClick:()=>{l("/login"),c(!1)},children:"🔐 Login"}),u.jsx("button",{className:"cn-mobile-link",onClick:()=>{l("/register"),c(!1)},children:"📝 Register"})]})]})]})}const ly="/assets/ajivsir8-CVMwJ6TC.jpeg",iy="/assets/ajivsir1-DtAuu40c.jpeg",ry="/assets/meeting2-BpgpR0FZ.jpeg",oy="/assets/tree-BGxUfGTP.jfif",sy="/assets/pani3-tuXII5q-.jpg",cy="/assets/narangibridgeahani-Ct7_szRG.jpeg",pm="/assets/logo2new-CpqCFyo_.jpeg";function su({src:l,style:i,loop:s=!0}){const c=j.useRef(null);return j.useEffect(()=>{let f;const d=()=>{window.lottie&&c.current&&(c.current.innerHTML="",f=window.lottie.loadAnimation({container:c.current,renderer:"svg",loop:s,autoplay:!0,path:l}))};if(window.lottie)d();else{const h=document.createElement("script");h.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js",h.onload=d,document.head.appendChild(h)}return()=>f&&f.destroy()},[l]),u.jsx("div",{ref:c,style:i})}function uy(){const l=Oa(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),s=j.useRef(null),[c,f]=j.useState(0),[d,h]=j.useState(!0),[b,x]=yu.useState(0),[g,y]=yu.useState(!0),v=[{icon:"🌉",tag:"पायाभूत सुविधा",title:"नारंगी उड्डाणपूल प्रकल्प पाहणी",desc:"नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 42 कोटी",deadline:"डिसेंबर 2025",stat:"",statLbl:"मार्च २०२६ अखेर वाहतुकीसाठी खुले",accent:"#51ABAC",bgimg:cy},{icon:"🏛️",tag:"प्रशासन",title:"समिती गठनाबाबत चर्चा",desc:"स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"",statLbl:"",accent:"#028945",bgimg:ry},{icon:"💧",tag:"पाणीपुरवठा",title:"24×7 पाणीपुरवठा योजना — वसई विभाग",desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"1.2 लाख",statLbl:"लाभार्थी कुटुंबे",accent:"#028945",bgimg:sy},{icon:"🌳",tag:"पर्यावरण",title:"हरित वसई-विरार — वृक्षारोपण मोहीम",desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 8 कोटी",deadline:"ऑगस्ट 2025",stat:"5 लाख",statLbl:"झाडे लावणार",accent:"#028945",bgimg:oy}];j.useEffect(()=>{if(!d)return;const _=setInterval(()=>{f(H=>(H+1)%v.length)},4e3);return()=>clearInterval(_)},[d,v.length]),j.useEffect(()=>{if(!g)return;const _=setInterval(()=>{x(H=>H>=B?0:H+1)},5e3);return()=>clearInterval(_)},[g]),j.useEffect(()=>{if(!s.current)return;const _=s.current,H=(_.offsetWidth-40)/3;_.scrollTo({left:b*(H+20),behavior:"smooth"})},[b]);const M=[{lottie:"https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json",title:"नोंदणी करा",desc:"Mobile number वापरून account तयार करा."},{lottie:"https://assets4.lottiefiles.com/packages/lf20_tljjahng.json",title:"तारीख निवडा",desc:"मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"},{lottie:"https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json",title:"तपशील भरा",desc:"भेटीचे कारण, visitors संख्या आणि photo द्या"},{lottie:"https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title:"टोकन मिळवा",desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"}],U=v[c],z=[{tag:"🌿 शिबिर प्रदर्शन",title:"घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन",rows:["घनकचरा व्यवस्थापन प्रदर्शन","खत निर्मिती तंत्रज्ञान प्रदर्शन"],date:"२८ फेब्रुवारी २०२६",accent:"#4CABC1",bg:"linear-gradient(160deg,#b8e2ec 0%,#d0eff7 40%,#aad8e8 100%)",dotColors:["#4CABC1","#66A962"]},{tag:"🧹 स्वच्छता आढावा",title:"दैनंदिन कचरा संकलन व स्वच्छता बैठक",rows:["कचरा संकलन व वर्गीकरण","गटार व नाले साफसफाई"],date:"११ मार्च २०२६",accent:"#66A962",bg:"linear-gradient(160deg,#b5d9b3 0%,#d2edd0 40%,#a8cfaa 100%)",dotColors:["#66A962","#CA9D28"]},{tag:"🛣️ रस्ते विकास",title:"रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक",rows:["रस्ते दुरुस्ती व बांधकाम","फुटपाथ उभारणी नियोजन"],date:"१० मार्च २०२६",accent:"#CA9D28",bg:"linear-gradient(160deg,#f0d6a8 0%,#f7e6c2 40%,#e8c87a 100%)",dotColors:["#CA9D28","#CE9A54"]},{tag:"⚡ वीज विकास",title:"MSEDCL वसई मंडळ आढावा बैठक",rows:["MSEDCL विकास कामे आढावा","महापौर व नगर सेवक बैठक"],date:"५ मार्च २०२६",accent:"#49ACC3",bg:"linear-gradient(160deg,#a8d4dc 0%,#c8e8f0 40%,#8ec4d0 100%)",dotColors:["#49ACC3","#187480"]}],B=1,T=Math.min(b,B);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --teal:#51ABAC; --green:#028945; --gold:#F5E6BF; --blue:#4CABBF; }

        /* ══ HERO ══ */
        .hero { position:relative; min-height:calc(100vh - 64px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 72px; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background-image:url(${ly}); background-size:cover; background-position:left; background-repeat:no-repeat; z-index:0; }
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

        /* ══ MAYOR SECTION ══ */
        .mayor-section {
          width: 100%;
          display: flex;
          align-items: stretch;
          min-height: 480px;
          overflow: hidden;
        }

        /* ── LEFT PANEL ── */
        .mayor-left {
          flex: 0 0 42%;
          background: #f5ead8;
          padding: 60px 52px 60px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .mayor-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(200,160,80,0.08) 0%, transparent 50%);
          pointer-events: none;
        }
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

        /* ── RIGHT PANEL ── */
        .mayor-right {
          flex: 1;
          background: linear-gradient(145deg, #1e7a7a 0%, #155e5e 40%, #0d4040 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          min-height: 480px;
        }
        .mayor-right::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #C9963A 20%, #e8b84b 60%, transparent 100%);
          z-index: 4;
        }

        /* Decorations */
        .mayor-chevrons { position:absolute; top:0; right:0; width:200px; height:200px; pointer-events:none; z-index:2; }
        .mayor-diamond-tl { position:absolute; top:18%; left:6%; pointer-events:none; z-index:2; }
        .mayor-diamond-mid { position:absolute; top:48%; left:3%; pointer-events:none; z-index:2; }
        .mayor-gold-tri { position:absolute; bottom:0; right:0; pointer-events:none; z-index:2; }
        .mayor-sparkle { position:absolute; bottom:12%; right:2%; pointer-events:none; z-index:3; }
        .mayor-phone-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(81,200,200,0.15) 0%, transparent 65%);
          pointer-events: none; z-index: 1;
        }

        /* Content wrap */
        .mayor-content-wrap {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        /* Brand row */
        .mayor-brand-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.18);
          width: 100%;
          justify-content: center;
        }
        .mayor-brand-logo-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        }
        .mayor-brand-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mayor-brand-text {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px;
          font-weight: 700;
          color: rgba(255,255,255,0.95);
          line-height: 1.5;
          max-width: 260px;
        }

        /* Bottom row */
        .mayor-bottom-row {
          display: flex;
          align-items: center;
          gap: 18px;
          width: 100%;
          justify-content: center;
        }

        /* Data columns */
        .mayor-data-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 120px;
          flex-shrink: 0;
        }
        .mayor-data-col-head {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 9.5px;
          font-weight: 700;
          color: #F5D87A;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(245,216,122,0.35);
          padding-bottom: 5px;
          margin-bottom: 2px;
        }
        .mayor-data-text {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 10px;
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          padding: 7px 9px;
          background: rgba(255,255,255,0.07);
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* Center phone area */
        .mayor-phone-center {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        /* Bubbles */
        .mayor-bubbles-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-shrink: 0;
          z-index: 4;
        }
        .mayor-bubble-item {
          width: 58px;
          height: 58px;
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
        .mayor-phone-wrap { position:relative; z-index:4; flex-shrink:0; }
        .mayor-phone {
          width: 195px;
          background: #051515;
          border-radius: 34px;
          padding: 8px;
          position: relative;
          box-shadow:
            0 0 0 2px rgba(100,210,210,0.5),
            0 0 0 5px rgba(81,171,172,0.12),
            0 28px 70px rgba(0,0,0,0.55),
            0 6px 20px rgba(0,0,0,0.3);
          transform: rotate(-2deg);
        }
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
        .mayor-phone-inner { border-radius:28px; overflow:hidden; background:#fff; }
        .mayor-phone-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .mayor-phone-badge { padding:10px 12px 12px; background:#fff; border-top:1px solid #f0f0f0; }
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
.projects-section {
  padding: 80px 32px;
  background: linear-gradient(160deg, #eef8f4 0%, #FFFCF2 50%, #fff 100%);
  position: relative;
  overflow: hidden;
}

/* Decorative background blobs */
.projects-section::before {
  content: '';
  position: absolute;
  top: -80px; left: -80px;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(76,171,193,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.projects-section::after {
  content: '';
  position: absolute;
  bottom: -60px; right: -60px;
  width: 280px; height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(202,157,40,0.10) 0%, transparent 70%);
  pointer-events: none;
}

.projects-inner { max-width:1060px; margin:0 auto; position:relative; z-index:1; }

.section-header { text-align:center; margin-bottom:48px; }
.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, rgba(76,171,193,0.15), rgba(202,157,40,0.12));
  color: #187480;
  font-size: 12px; font-weight: 700;
  padding: 6px 18px; border-radius: 999px;
  margin-bottom: 14px; letter-spacing: 0.6px; text-transform: uppercase;
  border: 1px solid rgba(76,171,193,0.3);
}
.section-title {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(28px,4vw,42px); font-weight: 800;
  color: #1a4a2e; margin-bottom: 8px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.section-sub { color: #6b7280; font-size: 15px; }

/* ── CARD ── */
.proj-card {
  display: flex;
  border-radius: 28px;
  overflow: hidden;
  box-shadow:
    0 4px 0 0 rgba(76,171,193,0.35),
    0 16px 56px rgba(0,0,0,0.10),
    0 4px 16px rgba(0,0,0,0.06);
  min-height: 320px;
  transition: box-shadow .35s, transform .35s;
  background: #fff;
  border: 1.5px solid rgba(76,171,193,0.18);
}
.proj-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 4px 0 0 rgba(76,171,193,0.5),
    0 28px 72px rgba(0,0,0,0.14),
    0 8px 24px rgba(0,0,0,0.08);
}

.proj-left {
  flex: 1; padding: 44px 48px;
  display: flex; flex-direction: column; justify-content: center;
  border-radius: 28px 0 0 28px;
  background-size: cover; background-position: top; background-repeat: no-repeat;
}

.proj-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 700;
  padding: 5px 16px; border-radius: 999px;
  text-transform: uppercase; letter-spacing: 0.6px;
  margin-bottom: 16px; width: fit-content;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.proj-title {
  font-family: 'Tiro Devanagari Marathi', serif;
  font-size: clamp(18px,2.4vw,26px); font-weight: 800;
  color: #1a1a1a; margin-bottom: 14px; line-height: 1.35;
}

.proj-desc {
  font-family: 'Tiro Devanagari Marathi', serif;
  font-size: 13.5px; color: #555;
  line-height: 1.85; margin-bottom: 24px; max-width: 480px;
}

.proj-progress-row { display:flex; justify-content:space-between; margin-bottom:8px; }
.proj-progress-lbl { font-size:12px; font-weight:700; color:#4b5563; letter-spacing:0.3px; }
.proj-progress-pct { font-size:13px; font-weight:800; }

.proj-bar {
  height: 12px;
  background: rgba(0,0,0,0.06);
  border-radius: 999px; overflow: hidden;
  margin-bottom: 22px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.08);
}
.proj-bar-fill {
  height: 100%; border-radius: 999px;
  transition: width 0.7s cubic-bezier(0.22,1,0.36,1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  position: relative;
}
/* shimmer on bar */
.proj-bar-fill::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: barShimmer 2s ease-in-out infinite;
  border-radius: 999px;
}
@keyframes barShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

.proj-meta { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
.proj-meta-item {
  font-size: 12.5px; color: #6b7280;
  display: flex; align-items: center; gap: 5px;
  background: rgba(0,0,0,0.04);
  padding: 4px 10px; border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.06);
}
.proj-meta-item strong { color:#1a1a1a; }

.proj-chip {
  font-size: 11px; font-weight: 700;
  padding: 5px 14px; border-radius: 999px; text-transform: uppercase;
  letter-spacing: 0.4px;
}
.chip-ongoing  { background: rgba(102,169,98,0.15); color:#1a7a40; border:1px solid rgba(102,169,98,0.3); }
.chip-planning { background: rgba(202,157,40,0.15); color:#8a6010; border:1px solid rgba(202,157,40,0.3); }

/* ── RIGHT PANEL ── */
.proj-right {
  width: 230px; flex-shrink: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 16px; padding: 36px 20px;
  border-radius: 0 28px 28px 0;
  transition: background 0.5s;
  position: relative; overflow: hidden;
}
/* diagonal pattern overlay */
.proj-right::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px,
    transparent 1px, transparent 18px
  );
  pointer-events: none;
}
/* sparkle top-right */
.proj-right::after {
  content: '✦';
  position: absolute; top: 16px; right: 18px;
  font-size: 18px; color: rgba(255,255,255,0.35);
  pointer-events: none;
}

.proj-icon {
  font-size: 68px; line-height: 1;
  filter: drop-shadow(0 6px 16px rgba(0,0,0,0.2));
  animation: iconFloat 3s ease-in-out infinite;
}
@keyframes iconFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

.proj-stat-num {
  font-family: 'Crimson Pro', serif;
  font-size: 40px; font-weight: 800; color: #fff;
  text-align: center; line-height: 1;
  text-shadow: 0 2px 12px rgba(0,0,0,0.2);
}
.proj-stat-lbl {
  font-size: 11px; color: rgba(255,255,255,0.88);
  font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.5px; text-align: center;
  line-height: 1.5;
}

/* ── NAV ── */
.proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:32px; }

.proj-btn {
  width: 44px; height: 44px; border-radius: 50%;
  border: 1.5px solid rgba(76,171,193,0.35);
  background: rgba(255,255,255,0.9);
  color: #187480; font-size: 20px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s;
  box-shadow: 0 2px 12px rgba(76,171,193,0.15);
  backdrop-filter: blur(4px);
}
.proj-btn:hover {
  background: linear-gradient(135deg, #4CABC1, #187480);
  color: #fff; border-color: transparent;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(76,171,193,0.35);
}

.proj-dots { display:flex; gap:7px; align-items:center; }
.proj-dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: rgba(76,171,193,0.25); border: none;
  cursor: pointer; padding: 0; transition: all .3s;
}
.proj-dot.active {
  background: linear-gradient(135deg, #4CABC1, #CA9D28);
  width: 28px; border-radius: 5px;
  box-shadow: 0 2px 8px rgba(76,171,193,0.4);
}

.proj-counter {
  font-size: 12px; font-weight: 700;
  color: #187480; font-family: 'DM Sans', sans-serif;
  background: rgba(76,171,193,0.1);
  padding: 3px 10px; border-radius: 20px;
  border: 1px solid rgba(76,171,193,0.2);
}

        /* ══ NOTICE ══ */
        .notice{background:linear-gradient(135deg,#fef9c3,#fef3c7);border:1px solid #fde68a;border-radius:16px;padding:24px 28px;margin:40px auto;display:flex;gap:16px;align-items:flex-start;max-width:1036px}
        .notice-icon{font-size:28px;flex-shrink:0}
        .notice-title{font-weight:700;color:#92400e;font-size:15px;margin-bottom:6px}
        .notice-text{font-size:13px;color:#a16207;line-height:1.6}

        /* ══ CTA ══ */
        // .cta{background:linear-gradient(135deg,var(--green) 0%,#014d28 100%);color:#fff;padding:72px 32px;text-align:center;position:relative;overflow:hidden}
        // .cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(76,171,191,0.25) 0%,transparent 65%);pointer-events:none}
        // .cta-inner{position:relative;z-index:1}
        // .cta-title{font-family:'Crimson Pro',serif;font-size:clamp(28px,4vw,40px);font-weight:800;margin-bottom:12px}
        // .cta-sub{color:rgba(255,255,255,0.8);font-size:16px;margin-bottom:36px}
        // .cta-btn{padding:15px 48px;border-radius:14px;border:none;background:#fff;color:var(--green);font-weight:800;font-size:16px;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,0.18);transition:all .2s}
        // .cta-btn:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,0,0,0.25)}

        /* ══ RESPONSIVE ══ */
        @media(max-width:1100px){
          .mayor-data-col{width:100px}
          .mayor-data-text{font-size:9.5px}
          .mayor-brand-text{font-size:13px}
          .mayor-phone{width:175px}
          .mayor-phone-img{height:210px}
        }
        @media(max-width:1024px){
          .hiw-grid{grid-template-columns:repeat(2,1fr);gap:20px}
          .hiw-connector{display:none}
          .mayor-left{padding:48px 36px 48px 40px}
        }
        @media(max-width:900px){
          .mayor-data-col:last-child{display:none}
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
          .mayor-section{flex-direction:column}
          .mayor-left{flex:0 0 auto;width:100%;padding:44px 28px}
          .mayor-right{flex:0 0 auto;width:100%;min-height:460px;padding:36px 16px}
          .mayor-data-col:last-child{display:flex}
          .mayor-data-col{width:90px}
          .proj-card{flex-direction:column}
          .proj-left{border-radius:24px 24px 0 0;border-right:1px solid rgba(81,171,172,0.12);border-bottom:none;padding:28px 24px}
          .proj-right{width:100%;border-radius:0 0 24px 24px;flex-direction:row;justify-content:center;gap:24px;padding:20px 24px}
          .notice{margin:24px 16px}
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
          .mayor-btn-primary{width:100%;justify-content:center}
          .mayor-bottom-row{flex-direction:column;align-items:center}
          .mayor-data-col{display:none}
          .mayor-phone{width:155px;transform:none}
          .mayor-phone-img{height:190px}
          .mayor-bubble-item{width:48px;height:48px}
          .mayor-brand-text{font-size:12px;max-width:200px}
          .mayor-brand-logo-wrap{width:46px;height:46px}
          .proj-right{flex-direction:column;gap:12px}
          .proj-stat-num{font-size:28px}
        }
        @media(max-width:360px){
          .hero-jansanwad{font-size:40px}
          .hero-float{display:none}
        }

        /* ══ NEWS SLIDER ══ */
        /* ══ STAGGERED CARD ANIMATION ══ */

/* ══ NEWS SLIDER ══ */
/* ══ STAGGERED CARD ANIMATION ══ */

@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.news-card {
  animation: cardSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Staggered delays - each card appears 1 second after the previous */
.news-card:nth-child(1) { animation-delay: 0s;    }
.news-card:nth-child(2) { animation-delay: 1s;    }
.news-card:nth-child(3) { animation-delay: 2s;    }
.news-card:nth-child(4) { animation-delay: 3s;    }

        .news-section { background:#F4E7BE; padding:72px 32px 80px; position:relative; overflow:hidden; }
        .news-section::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 15% 60%,rgba(76,171,193,0.08) 0%,transparent 50%),radial-gradient(circle at 85% 20%,rgba(102,169,98,0.07) 0%,transparent 50%); pointer-events:none; }
        .news-inner { max-width:1060px; margin:0 auto; position:relative; z-index:1; }
        .news-header { text-align:center; margin-bottom:48px; }
        .news-section-tag { display:inline-block; background:rgba(202,157,40,0.15); color:#8a6010; font-size:12px; font-weight:700; padding:5px 16px; border-radius:999px; margin-bottom:14px; letter-spacing:0.6px; text-transform:uppercase; }
        .news-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4vw,40px); font-weight:800; color:#1a3a2a; margin-bottom:8px; }
        .news-title-bar { width:64px; height:4px; background:linear-gradient(90deg,#CA9D28,#F5D87A); border-radius:2px; margin:0 auto 10px; }
        .news-sub { color:#7a6535; font-size:15px; }
       .news-viewport { overflow-x:scroll; scrollbar-width:none; -ms-overflow-style:none; }
.news-viewport::-webkit-scrollbar { display:none; }
/* REPLACE current .news-track — remove transition and will-change */
.news-track { display:flex; gap:20px; }
        .news-card { flex:0 0 calc(33.333% - 14px); border-radius:24px; overflow:hidden; position:relative; cursor:pointer; transition:transform .35s,box-shadow .35s; display:flex; flex-direction:column; min-height:300px; box-shadow:0 4px 20px rgba(0,0,0,0.07); }
        .news-card:hover { transform:translateY(-8px); box-shadow:0 20px 48px rgba(0,0,0,0.13); }
        .news-card::before { content:''; position:absolute; width:110px; height:110px; border-radius:20px; top:8px; right:-18px; opacity:0.18; filter:blur(3px); transform:rotate(15deg); background:var(--nc-accent); }
        .news-card::after { content:''; position:absolute; width:72px; height:72px; border-radius:14px; top:52px; right:18px; opacity:0.12; filter:blur(4px); transform:rotate(8deg); background:var(--nc-accent); }
        .nc-widget { margin:20px 20px 0; background:rgba(255,255,255,0.82); border-radius:16px; padding:14px 16px 16px; backdrop-filter:blur(8px); position:relative; z-index:2; box-shadow:0 4px 20px rgba(0,0,0,0.08); flex-shrink:0; }
        .nc-widget-day { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; color:#1a2a2a; line-height:1; margin-bottom:12px; }
        .nc-widget-rows { display:flex; flex-direction:column; gap:8px; }
        .nc-widget-row { display:flex; align-items:center; gap:8px; font-family:'DM Sans',sans-serif; font-size:16px; font-weight:600; color:#2a3a3a; }
        .nc-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
        .nc-caption { margin-top:auto; padding:16px 20px 20px; position:relative; z-index:2; }
        .nc-tag { display:inline-flex; align-items:center; gap:5px; background:rgba(255,255,255,0.55); border:1px solid rgba(255,255,255,0.8); color:#1a3a3a; font-size:10px; font-weight:700; padding:3px 10px; border-radius:20px; margin-bottom:9px; letter-spacing:.5px; text-transform:uppercase; backdrop-filter:blur(4px); font-family:'DM Sans',sans-serif; }
        .nc-title { font-family:'Tiro Devanagari Marathi',serif; font-size:14.5px; font-weight:700; color:#1a2a2a; line-height:1.45; margin-bottom:10px; }
        .nc-date-row { display:flex; align-items:center; justify-content:space-between; }
        .nc-date { font-family:'DM Sans',sans-serif; font-size:11px; font-weight:700; color:#3a2a0a; opacity:0.65; display:flex; align-items:center; gap:5px; }
        .nc-arrow { width:30px; height:30px; background:rgba(255,255,255,0.7); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; color:#1a3a3a; transition:background .2s,transform .2s; border:1px solid rgba(255,255,255,0.9); }
        .news-card:hover .nc-arrow { background:#fff; transform:translateX(3px); }
        .news-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:32px; }
        .news-btn { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(26,42,42,0.2); background:rgba(255,255,255,0.7); color:#1a2a2a; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06); backdrop-filter:blur(4px); }
        .news-btn:hover { border-color:#CA9D28; color:#CA9D28; background:rgba(255,255,255,0.95); }
        .news-dots { display:flex; gap:7px; align-items:center; }
        .news-dot { width:9px; height:9px; border-radius:50%; background:rgba(26,42,42,0.2); border:none; cursor:pointer; padding:0; transition:all .25s; }
        .news-dot.active { background:#CA9D28; width:26px; border-radius:5px; }
        .news-counter { font-size:12px; font-weight:600; color:#9ca3af; font-family:'DM Sans',sans-serif; }
        /* ══ NEWS SLIDER — MOBILE RESPONSIVE ══ */
@media(max-width: 900px) {
  .news-section { padding: 56px 24px 64px; }
  .news-card { flex: 0 0 calc(50% - 10px); }
}

@media(max-width: 600px) {
  .news-section { padding: 48px 16px 56px; }
  .news-title { font-size: 22px; }
  .news-sub { font-size: 13px; }
  .news-header { margin-bottom: 32px; }

  /* Single card — full width on mobile */
  .news-card { flex: 0 0 calc(100% - 0px); min-height: 260px; }

  .nc-widget { margin: 16px 16px 0; padding: 12px 14px 14px; }
  .nc-widget-day { font-size: 26px; margin-bottom: 10px; }
  .nc-widget-row { font-size: 11px; }

  .nc-caption { padding: 14px 16px 16px; }
  .nc-title { font-size: 13.5px; }
  .nc-date { font-size: 10.5px; }
  .nc-arrow { width: 26px; height: 26px; font-size: 12px; }

  .news-nav { gap: 10px; margin-top: 24px; }
  .news-btn { width: 38px; height: 38px; font-size: 18px; }
  .news-counter { font-size: 11px; }
}

@media(max-width: 400px) {
  .news-section { padding: 40px 12px 48px; }
  .news-title { font-size: 20px; }
  .news-card { border-radius: 18px; }
  .nc-widget { border-radius: 12px; }
}

      `}),u.jsxs("div",{className:"home-root",children:[u.jsxs("div",{className:"hero",children:[u.jsxs("div",{className:"hero-orbit","aria-hidden":"true",children:[u.jsx("div",{className:"hero-float f1",children:"📅"}),u.jsx("div",{className:"hero-float f2",children:"👥"}),u.jsx("div",{className:"hero-float f3",children:"📅"}),u.jsx("div",{className:"hero-float f4",children:"👤"})]}),u.jsx("h1",{className:"hero-jansanwad",children:"जन संवाद"}),u.jsx("div",{className:"hero-title-underline"}),u.jsx("p",{className:"hero-desc",children:"नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"}),u.jsx("div",{className:"hero-btns",children:i?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"hero-btn-primary",onClick:()=>l("/book-appointment"),children:"📅 Book Appointment"}),u.jsx("button",{className:"hero-btn-outline",onClick:()=>l("/my-appointments"),children:"📋 My Appointments"})]}):u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"hero-btn-primary",onClick:()=>l("/register"),children:"🚀 Get Started — Register"}),u.jsx("button",{className:"hero-btn-outline",onClick:()=>l("/login"),children:"Login करा"})]})})]}),u.jsx("div",{className:"hiw-section",children:u.jsxs("div",{className:"hiw-inner",children:[u.jsxs("div",{className:"hiw-header",children:[u.jsx("h2",{className:"hiw-title",children:"कसे काम करते?"}),u.jsx("div",{className:"hiw-title-bar"}),u.jsx("p",{className:"hiw-sub",children:"४ टप्प्यांमध्ये महापौरांची भेट बुक करा."})]}),u.jsxs("div",{className:"hiw-grid-wrap",children:[u.jsx("div",{className:"hiw-connector","aria-hidden":"true"}),u.jsx("div",{className:"hiw-grid",children:M.map((_,H)=>u.jsxs("div",{className:"hiw-card",children:[u.jsx("div",{className:"hiw-num",children:H+1}),u.jsx("div",{className:"hiw-icon-wrap",children:u.jsx(su,{src:_.lottie,style:{width:44,height:44}})}),u.jsx("div",{className:"hiw-step-title",children:_.title}),u.jsx("div",{className:"hiw-step-desc",children:_.desc})]},H))})]})]})}),u.jsxs("div",{className:"mayor-section",children:[u.jsxs("div",{className:"mayor-left",children:[u.jsx("p",{className:"mayor-heading-line1",children:"मा. महापौर"}),u.jsx("p",{className:"mayor-heading-line2",children:"श्री. अजीव पाटील"}),u.jsx("p",{className:"mayor-bio",children:"३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."}),u.jsx("button",{className:"mayor-btn-primary",onClick:()=>l(i?"/book-appointment":"/register"),children:"📅 Appointment बुक करा"})]}),u.jsxs("div",{className:"mayor-right",children:[u.jsx("div",{className:"mayor-chevrons","aria-hidden":"true",children:u.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",children:[u.jsxs("g",{opacity:"0.2",stroke:"#7edede",strokeWidth:"1.4",fill:"none",children:[u.jsx("polyline",{points:"160,8 178,26 160,44"}),u.jsx("polyline",{points:"142,8 160,26 142,44"}),u.jsx("polyline",{points:"124,8 142,26 124,44"}),u.jsx("polyline",{points:"160,44 178,62 160,80"}),u.jsx("polyline",{points:"142,44 160,62 142,80"}),u.jsx("polyline",{points:"124,44 142,62 124,80"}),u.jsx("polyline",{points:"168,80 186,98 168,116"}),u.jsx("polyline",{points:"150,80 168,98 150,116"}),u.jsx("polyline",{points:"168,116 186,134 168,152"}),u.jsx("polyline",{points:"150,116 168,134 150,152"})]}),u.jsx("circle",{cx:"182",cy:"18",r:"16",fill:"rgba(81,200,200,0.3)",stroke:"rgba(81,200,200,0.4)",strokeWidth:"1"}),u.jsx("rect",{x:"108",y:"4",width:"10",height:"10",rx:"1",transform:"rotate(45 113 9)",fill:"#7edede",opacity:"0.3"})]})}),u.jsx("div",{className:"mayor-diamond-tl","aria-hidden":"true",children:u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:u.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",transform:"rotate(45 8 8)",fill:"#7edede",opacity:"0.45"})})}),u.jsx("div",{className:"mayor-diamond-mid","aria-hidden":"true",children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:u.jsx("rect",{x:"1.5",y:"1.5",width:"9",height:"9",rx:"1",transform:"rotate(45 6 6)",fill:"#c9a040",opacity:"0.4"})})}),u.jsx("div",{className:"mayor-gold-tri","aria-hidden":"true",children:u.jsxs("svg",{width:"160",height:"110",viewBox:"0 0 160 110",fill:"none",children:[u.jsx("polygon",{points:"160,110 160,0 50,110",fill:"#C9963A",opacity:"0.25"}),u.jsx("polygon",{points:"160,110 160,40 95,110",fill:"#e8b84b",opacity:"0.18"})]})}),u.jsx("div",{className:"mayor-sparkle","aria-hidden":"true",children:u.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:u.jsx("path",{d:"M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z",fill:"white",opacity:"0.7"})})}),u.jsx("div",{className:"mayor-phone-glow","aria-hidden":"true"}),u.jsxs("div",{className:"mayor-content-wrap",children:[u.jsxs("div",{className:"mayor-brand-row",children:[u.jsx("div",{className:"mayor-brand-logo-wrap",children:u.jsx("img",{src:pm,alt:"VVCMC Logo"})}),u.jsx("div",{className:"mayor-brand-text",children:"वसई-विरार शहर महानगरपालिका, जन संवाद"})]}),u.jsxs("div",{className:"mayor-bottom-row",children:[u.jsxs("div",{className:"mayor-data-col",children:[u.jsx("div",{className:"mayor-data-col-head",children:"नागरिक सहभाग"}),u.jsx("div",{className:"mayor-data-text",children:"नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."}),u.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"वसई स्मार्ट सिटी प्रकल्प"}),u.jsx("div",{className:"mayor-data-text",children:"वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."})]}),u.jsxs("div",{className:"mayor-phone-center",children:[u.jsxs("div",{className:"mayor-bubbles-col",children:[u.jsx("div",{className:"mayor-bubble-item",children:u.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[u.jsx("rect",{x:"4",y:"4",width:"18",height:"13",rx:"3",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),u.jsx("path",{d:"M8 20 L8 17",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M7 7h12M7 10h8M7 13h10",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",strokeLinecap:"round"}),u.jsx("circle",{cx:"19",cy:"6",r:"4",fill:"#028945",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),u.jsx("path",{d:"M17 6h4M19 4v4",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})}),u.jsx("div",{className:"mayor-bubble-item",children:u.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[u.jsx("polyline",{points:"5,19 10,12 15,15 21,7",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),u.jsx("polyline",{points:"17,7 21,7 21,11",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),u.jsx("line",{x1:"5",y1:"21",x2:"21",y2:"21",stroke:"rgba(255,255,255,0.45)",strokeWidth:"1.2",strokeLinecap:"round"})]})}),u.jsx("div",{className:"mayor-bubble-item",children:u.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[u.jsx("circle",{cx:"13",cy:"8",r:"3.2",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),u.jsx("path",{d:"M7 21 C7 16.5 19 16.5 19 21",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),u.jsx("circle",{cx:"6.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),u.jsx("path",{d:"M3 20 C3 16.8 10 16.8 10 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),u.jsx("circle",{cx:"19.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),u.jsx("path",{d:"M16 20 C16 16.8 23 16.8 23 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),u.jsx("path",{d:"M10 22.5 Q13 25 16 22.5",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1",strokeLinecap:"round",fill:"none"})]})})]}),u.jsx("div",{className:"mayor-phone-wrap",children:u.jsx("div",{className:"mayor-phone",children:u.jsxs("div",{className:"mayor-phone-inner",children:[u.jsx("img",{src:iy,alt:"मा. महापौर श्री. अजीव पाटील",className:"mayor-phone-img"}),u.jsxs("div",{className:"mayor-phone-badge",children:[u.jsx("div",{className:"mayor-phone-badge-name",children:"मा. महापौर श्री. अजीव पाटील"}),u.jsx("div",{className:"mayor-phone-badge-title",children:"वसई-विरार शहर महानगरपालिका"})]})]})})})]}),u.jsxs("div",{className:"mayor-data-col",children:[u.jsx("div",{className:"mayor-data-col-head",children:"पायाभूत सुविधा"}),u.jsx("div",{className:"mayor-data-text",children:"वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"}),u.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"सुरक्षित व स्वच्छ शहर"}),u.jsx("div",{className:"mayor-data-text",children:"सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."})]})]})]})]})]}),u.jsx("div",{className:"projects-section",style:{backgroundColor:"#F9FCFB"},children:u.jsxs("div",{className:"projects-inner",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("div",{className:"section-tag",children:"✦ सध्या सुरू"}),u.jsx("h2",{className:"section-title",children:"चालू प्रकल्प"}),u.jsx("p",{className:"section-sub",children:"वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"})]}),u.jsxs("div",{className:"proj-card",onMouseEnter:()=>h(!1),onMouseLeave:()=>h(!0),style:U.bgimg?{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${U.accent}99 100%), url(${U.bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[u.jsxs("div",{className:"proj-left",style:{background:"transparent",border:U.bgimg?"none":"1px solid rgba(81,171,172,0.12)",borderRight:"none"},children:[u.jsxs("div",{className:"proj-tag",style:{background:`${U.accent}18`,color:U.accent},children:[U.icon," ",U.tag]}),u.jsx("div",{className:"proj-title",children:U.title}),u.jsx("p",{className:"proj-desc",children:U.desc}),u.jsxs("div",{className:"proj-progress-row",children:[u.jsx("span",{className:"proj-progress-lbl",children:"प्रगती"}),u.jsx("span",{className:"proj-progress-pct",style:{color:U.accent},children:U.progress})]}),u.jsx("div",{className:"proj-bar",children:u.jsx("div",{className:"proj-bar-fill",style:{width:`${U.progress}%`,background:`linear-gradient(90deg,${U.accent}88,${U.accent})`}})}),u.jsxs("div",{className:"proj-meta",children:[u.jsxs("div",{className:"proj-meta-item",children:["💰 ",u.jsx("strong",{children:U.budget})]}),u.jsxs("div",{className:"proj-meta-item",children:["📅 ",u.jsx("strong",{children:U.deadline})]}),u.jsx("span",{className:`proj-chip ${U.status==="ongoing"?"chip-ongoing":"chip-planning"}`,children:U.statusLabel})]})]}),u.jsxs("div",{className:"proj-right",style:{background:`linear-gradient(160deg,${U.accent},${U.accent}bb)`},children:[u.jsx("div",{className:"proj-icon",children:U.icon}),u.jsxs("div",{children:[u.jsx("div",{className:"proj-stat-num",children:U.stat}),u.jsx("div",{className:"proj-stat-lbl",children:U.statLbl})]})]})]}),u.jsxs("div",{className:"proj-nav",children:[u.jsx("button",{className:"proj-btn",onClick:()=>{h(!1),f(_=>(_-1+v.length)%v.length)},children:"‹"}),u.jsx("div",{className:"proj-dots",children:v.map((_,H)=>u.jsx("button",{className:`proj-dot${c===H?" active":""}`,onClick:()=>{h(!1),f(H)}},H))}),u.jsxs("span",{className:"proj-counter",children:[c+1," / ",v.length]}),u.jsx("button",{className:"proj-btn",onClick:()=>{h(!1),f(_=>(_+1)%v.length)},children:"›"})]})]})}),u.jsxs("div",{className:"notice",children:[u.jsx("span",{className:"notice-icon",children:"⚠️"}),u.jsxs("div",{children:[u.jsx("div",{className:"notice-title",children:"महत्त्वाची सूचना"}),u.jsx("div",{className:"notice-text",children:"भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."})]})]}),u.jsxs("div",{className:"cta",children:[u.jsx(su,{src:"https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",style:{position:"absolute",left:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}}),u.jsx(su,{src:"https://assets9.lottiefiles.com/packages/lf20_touohxv0.json",style:{position:"absolute",right:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}})]}),u.jsx("div",{className:"news-section",children:u.jsxs("div",{className:"news-inner",children:[u.jsxs("div",{className:"news-header",children:[u.jsx("div",{className:"news-section-tag",children:"✦ ताज्या बातम्या"}),u.jsx("h2",{className:"news-title",children:"महापौर कार्यालयाच्या ताज्या बातम्या"}),u.jsx("div",{className:"news-title-bar"}),u.jsx("p",{className:"news-sub",children:"Mayor's Office Latest Updates & Activities"})]}),u.jsx("div",{className:"news-viewport",ref:s,onMouseEnter:()=>y(!1),onMouseLeave:()=>y(!0),children:u.jsx("div",{className:"news-track",children:z.map((_,H)=>u.jsxs("div",{className:"news-card",style:{background:_.bg,"--nc-accent":_.accent},children:[u.jsxs("div",{className:"nc-widget",children:[u.jsx("div",{className:"nc-widget-day",children:_.day}),u.jsx("div",{className:"nc-widget-rows",children:_.rows.map((V,W)=>u.jsxs("div",{className:"nc-widget-row",children:[u.jsx("span",{className:"nc-dot",style:{background:_.dotColors[W]}}),V]},W))})]}),u.jsxs("div",{className:"nc-caption",children:[u.jsx("div",{className:"nc-tag",children:_.tag}),u.jsx("div",{className:"nc-title",children:_.title}),u.jsxs("div",{className:"nc-date-row",children:[u.jsxs("div",{className:"nc-date",children:["📅 ",_.date]}),u.jsx("div",{className:"nc-arrow",children:"→"})]})]})]},H))},b)}),u.jsxs("div",{className:"news-nav",children:[u.jsx("button",{className:"news-btn",onClick:()=>{y(!1),x(_=>Math.max(0,_-1))},children:"‹"}),u.jsx("div",{className:"news-dots",children:Array.from({length:2}).map((_,H)=>u.jsx("button",{className:`news-dot${T===H?" active":""}`,onClick:()=>{y(!1),x(H)}},H))}),u.jsxs("span",{className:"news-counter",children:[T+1," / 2"]}),u.jsx("button",{className:"news-btn",onClick:()=>{y(!1),x(_=>Math.min(B,_+1))},children:"›"})]})]})})]})]})}function hm(l,i){return function(){return l.apply(i,arguments)}}const{toString:fy}=Object.prototype,{getPrototypeOf:Vu}=Object,{iterator:zo,toStringTag:mm}=Symbol,To=(l=>i=>{const s=fy.call(i);return l[s]||(l[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Pt=l=>(l=l.toLowerCase(),i=>To(i)===l),Co=l=>i=>typeof i===l,{isArray:Sl}=Array,xl=Co("undefined");function Ci(l){return l!==null&&!xl(l)&&l.constructor!==null&&!xl(l.constructor)&&vt(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const gm=Pt("ArrayBuffer");function dy(l){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(l):i=l&&l.buffer&&gm(l.buffer),i}const py=Co("string"),vt=Co("function"),xm=Co("number"),Ai=l=>l!==null&&typeof l=="object",hy=l=>l===!0||l===!1,oo=l=>{if(To(l)!=="object")return!1;const i=Vu(l);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(mm in l)&&!(zo in l)},my=l=>{if(!Ai(l)||Ci(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},gy=Pt("Date"),xy=Pt("File"),by=Pt("Blob"),yy=Pt("FileList"),vy=l=>Ai(l)&&vt(l.pipe),wy=l=>{let i;return l&&(typeof FormData=="function"&&l instanceof FormData||vt(l.append)&&((i=To(l))==="formdata"||i==="object"&&vt(l.toString)&&l.toString()==="[object FormData]"))},Sy=Pt("URLSearchParams"),[jy,Ny,Ey,zy]=["ReadableStream","Request","Response","Headers"].map(Pt),Ty=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ri(l,i,{allOwnKeys:s=!1}={}){if(l===null||typeof l>"u")return;let c,f;if(typeof l!="object"&&(l=[l]),Sl(l))for(c=0,f=l.length;c<f;c++)i.call(null,l[c],c,l);else{if(Ci(l))return;const d=s?Object.getOwnPropertyNames(l):Object.keys(l),h=d.length;let b;for(c=0;c<h;c++)b=d[c],i.call(null,l[b],b,l)}}function bm(l,i){if(Ci(l))return null;i=i.toLowerCase();const s=Object.keys(l);let c=s.length,f;for(;c-- >0;)if(f=s[c],i===f.toLowerCase())return f;return null}const Cn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ym=l=>!xl(l)&&l!==Cn;function Su(){const{caseless:l,skipUndefined:i}=ym(this)&&this||{},s={},c=(f,d)=>{const h=l&&bm(s,d)||d;oo(s[h])&&oo(f)?s[h]=Su(s[h],f):oo(f)?s[h]=Su({},f):Sl(f)?s[h]=f.slice():(!i||!xl(f))&&(s[h]=f)};for(let f=0,d=arguments.length;f<d;f++)arguments[f]&&Ri(arguments[f],c);return s}const Cy=(l,i,s,{allOwnKeys:c}={})=>(Ri(i,(f,d)=>{s&&vt(f)?l[d]=hm(f,s):l[d]=f},{allOwnKeys:c}),l),Ay=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),Ry=(l,i,s,c)=>{l.prototype=Object.create(i.prototype,c),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:i.prototype}),s&&Object.assign(l.prototype,s)},Oy=(l,i,s,c)=>{let f,d,h;const b={};if(i=i||{},l==null)return i;do{for(f=Object.getOwnPropertyNames(l),d=f.length;d-- >0;)h=f[d],(!c||c(h,l,i))&&!b[h]&&(i[h]=l[h],b[h]=!0);l=s!==!1&&Vu(l)}while(l&&(!s||s(l,i))&&l!==Object.prototype);return i},ky=(l,i,s)=>{l=String(l),(s===void 0||s>l.length)&&(s=l.length),s-=i.length;const c=l.indexOf(i,s);return c!==-1&&c===s},_y=l=>{if(!l)return null;if(Sl(l))return l;let i=l.length;if(!xm(i))return null;const s=new Array(i);for(;i-- >0;)s[i]=l[i];return s},Dy=(l=>i=>l&&i instanceof l)(typeof Uint8Array<"u"&&Vu(Uint8Array)),My=(l,i)=>{const c=(l&&l[zo]).call(l);let f;for(;(f=c.next())&&!f.done;){const d=f.value;i.call(l,d[0],d[1])}},Uy=(l,i)=>{let s;const c=[];for(;(s=l.exec(i))!==null;)c.push(s);return c},By=Pt("HTMLFormElement"),Ly=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,c,f){return c.toUpperCase()+f}),c0=(({hasOwnProperty:l})=>(i,s)=>l.call(i,s))(Object.prototype),Hy=Pt("RegExp"),vm=(l,i)=>{const s=Object.getOwnPropertyDescriptors(l),c={};Ri(s,(f,d)=>{let h;(h=i(f,d,l))!==!1&&(c[d]=h||f)}),Object.defineProperties(l,c)},qy=l=>{vm(l,(i,s)=>{if(vt(l)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const c=l[s];if(vt(c)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},Yy=(l,i)=>{const s={},c=f=>{f.forEach(d=>{s[d]=!0})};return Sl(l)?c(l):c(String(l).split(i)),s},Vy=()=>{},Gy=(l,i)=>l!=null&&Number.isFinite(l=+l)?l:i;function Xy(l){return!!(l&&vt(l.append)&&l[mm]==="FormData"&&l[zo])}const Qy=l=>{const i=new Array(10),s=(c,f)=>{if(Ai(c)){if(i.indexOf(c)>=0)return;if(Ci(c))return c;if(!("toJSON"in c)){i[f]=c;const d=Sl(c)?[]:{};return Ri(c,(h,b)=>{const x=s(h,f+1);!xl(x)&&(d[b]=x)}),i[f]=void 0,d}}return c};return s(l,0)},Zy=Pt("AsyncFunction"),Jy=l=>l&&(Ai(l)||vt(l))&&vt(l.then)&&vt(l.catch),wm=((l,i)=>l?setImmediate:i?((s,c)=>(Cn.addEventListener("message",({source:f,data:d})=>{f===Cn&&d===s&&c.length&&c.shift()()},!1),f=>{c.push(f),Cn.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",vt(Cn.postMessage)),Ky=typeof queueMicrotask<"u"?queueMicrotask.bind(Cn):typeof process<"u"&&process.nextTick||wm,Fy=l=>l!=null&&vt(l[zo]),k={isArray:Sl,isArrayBuffer:gm,isBuffer:Ci,isFormData:wy,isArrayBufferView:dy,isString:py,isNumber:xm,isBoolean:hy,isObject:Ai,isPlainObject:oo,isEmptyObject:my,isReadableStream:jy,isRequest:Ny,isResponse:Ey,isHeaders:zy,isUndefined:xl,isDate:gy,isFile:xy,isBlob:by,isRegExp:Hy,isFunction:vt,isStream:vy,isURLSearchParams:Sy,isTypedArray:Dy,isFileList:yy,forEach:Ri,merge:Su,extend:Cy,trim:Ty,stripBOM:Ay,inherits:Ry,toFlatObject:Oy,kindOf:To,kindOfTest:Pt,endsWith:ky,toArray:_y,forEachEntry:My,matchAll:Uy,isHTMLForm:By,hasOwnProperty:c0,hasOwnProp:c0,reduceDescriptors:vm,freezeMethods:qy,toObjectSet:Yy,toCamelCase:Ly,noop:Vy,toFiniteNumber:Gy,findKey:bm,global:Cn,isContextDefined:ym,isSpecCompliantForm:Xy,toJSONObject:Qy,isAsyncFn:Zy,isThenable:Jy,setImmediate:wm,asap:Ky,isIterable:Fy};function he(l,i,s,c,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",i&&(this.code=i),s&&(this.config=s),c&&(this.request=c),f&&(this.response=f,this.status=f.status?f.status:null)}k.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const Sm=he.prototype,jm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{jm[l]={value:l}});Object.defineProperties(he,jm);Object.defineProperty(Sm,"isAxiosError",{value:!0});he.from=(l,i,s,c,f,d)=>{const h=Object.create(Sm);k.toFlatObject(l,h,function(y){return y!==Error.prototype},g=>g!=="isAxiosError");const b=l&&l.message?l.message:"Error",x=i==null&&l?l.code:i;return he.call(h,b,x,s,c,f),l&&h.cause==null&&Object.defineProperty(h,"cause",{value:l,configurable:!0}),h.name=l&&l.name||"Error",d&&Object.assign(h,d),h};const $y=null;function ju(l){return k.isPlainObject(l)||k.isArray(l)}function Nm(l){return k.endsWith(l,"[]")?l.slice(0,-2):l}function u0(l,i,s){return l?l.concat(i).map(function(f,d){return f=Nm(f),!s&&d?"["+f+"]":f}).join(s?".":""):i}function Wy(l){return k.isArray(l)&&!l.some(ju)}const Py=k.toFlatObject(k,{},null,function(i){return/^is[A-Z]/.test(i)});function Ao(l,i,s){if(!k.isObject(l))throw new TypeError("target must be an object");i=i||new FormData,s=k.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(B,T){return!k.isUndefined(T[B])});const c=s.metaTokens,f=s.visitor||y,d=s.dots,h=s.indexes,x=(s.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(i);if(!k.isFunction(f))throw new TypeError("visitor must be a function");function g(z){if(z===null)return"";if(k.isDate(z))return z.toISOString();if(k.isBoolean(z))return z.toString();if(!x&&k.isBlob(z))throw new he("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(z)||k.isTypedArray(z)?x&&typeof Blob=="function"?new Blob([z]):Buffer.from(z):z}function y(z,B,T){let _=z;if(z&&!T&&typeof z=="object"){if(k.endsWith(B,"{}"))B=c?B:B.slice(0,-2),z=JSON.stringify(z);else if(k.isArray(z)&&Wy(z)||(k.isFileList(z)||k.endsWith(B,"[]"))&&(_=k.toArray(z)))return B=Nm(B),_.forEach(function(V,W){!(k.isUndefined(V)||V===null)&&i.append(h===!0?u0([B],W,d):h===null?B:B+"[]",g(V))}),!1}return ju(z)?!0:(i.append(u0(T,B,d),g(z)),!1)}const v=[],M=Object.assign(Py,{defaultVisitor:y,convertValue:g,isVisitable:ju});function U(z,B){if(!k.isUndefined(z)){if(v.indexOf(z)!==-1)throw Error("Circular reference detected in "+B.join("."));v.push(z),k.forEach(z,function(_,H){(!(k.isUndefined(_)||_===null)&&f.call(i,_,k.isString(H)?H.trim():H,B,M))===!0&&U(_,B?B.concat(H):[H])}),v.pop()}}if(!k.isObject(l))throw new TypeError("data must be an object");return U(l),i}function f0(l){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(c){return i[c]})}function Gu(l,i){this._pairs=[],l&&Ao(l,this,i)}const Em=Gu.prototype;Em.append=function(i,s){this._pairs.push([i,s])};Em.toString=function(i){const s=i?function(c){return i.call(this,c,f0)}:f0;return this._pairs.map(function(f){return s(f[0])+"="+s(f[1])},"").join("&")};function Iy(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function zm(l,i,s){if(!i)return l;const c=s&&s.encode||Iy;k.isFunction(s)&&(s={serialize:s});const f=s&&s.serialize;let d;if(f?d=f(i,s):d=k.isURLSearchParams(i)?i.toString():new Gu(i,s).toString(c),d){const h=l.indexOf("#");h!==-1&&(l=l.slice(0,h)),l+=(l.indexOf("?")===-1?"?":"&")+d}return l}class d0{constructor(){this.handlers=[]}use(i,s,c){return this.handlers.push({fulfilled:i,rejected:s,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){k.forEach(this.handlers,function(c){c!==null&&i(c)})}}const Tm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},e2=typeof URLSearchParams<"u"?URLSearchParams:Gu,t2=typeof FormData<"u"?FormData:null,a2=typeof Blob<"u"?Blob:null,n2={isBrowser:!0,classes:{URLSearchParams:e2,FormData:t2,Blob:a2},protocols:["http","https","file","blob","url","data"]},Xu=typeof window<"u"&&typeof document<"u",Nu=typeof navigator=="object"&&navigator||void 0,l2=Xu&&(!Nu||["ReactNative","NativeScript","NS"].indexOf(Nu.product)<0),i2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",r2=Xu&&window.location.href||"http://localhost",o2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xu,hasStandardBrowserEnv:l2,hasStandardBrowserWebWorkerEnv:i2,navigator:Nu,origin:r2},Symbol.toStringTag,{value:"Module"})),ut={...o2,...n2};function s2(l,i){return Ao(l,new ut.classes.URLSearchParams,{visitor:function(s,c,f,d){return ut.isNode&&k.isBuffer(s)?(this.append(c,s.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...i})}function c2(l){return k.matchAll(/\w+|\[(\w*)]/g,l).map(i=>i[0]==="[]"?"":i[1]||i[0])}function u2(l){const i={},s=Object.keys(l);let c;const f=s.length;let d;for(c=0;c<f;c++)d=s[c],i[d]=l[d];return i}function Cm(l){function i(s,c,f,d){let h=s[d++];if(h==="__proto__")return!0;const b=Number.isFinite(+h),x=d>=s.length;return h=!h&&k.isArray(f)?f.length:h,x?(k.hasOwnProp(f,h)?f[h]=[f[h],c]:f[h]=c,!b):((!f[h]||!k.isObject(f[h]))&&(f[h]=[]),i(s,c,f[h],d)&&k.isArray(f[h])&&(f[h]=u2(f[h])),!b)}if(k.isFormData(l)&&k.isFunction(l.entries)){const s={};return k.forEachEntry(l,(c,f)=>{i(c2(c),f,s,0)}),s}return null}function f2(l,i,s){if(k.isString(l))try{return(i||JSON.parse)(l),k.trim(l)}catch(c){if(c.name!=="SyntaxError")throw c}return(s||JSON.stringify)(l)}const Oi={transitional:Tm,adapter:["xhr","http","fetch"],transformRequest:[function(i,s){const c=s.getContentType()||"",f=c.indexOf("application/json")>-1,d=k.isObject(i);if(d&&k.isHTMLForm(i)&&(i=new FormData(i)),k.isFormData(i))return f?JSON.stringify(Cm(i)):i;if(k.isArrayBuffer(i)||k.isBuffer(i)||k.isStream(i)||k.isFile(i)||k.isBlob(i)||k.isReadableStream(i))return i;if(k.isArrayBufferView(i))return i.buffer;if(k.isURLSearchParams(i))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let b;if(d){if(c.indexOf("application/x-www-form-urlencoded")>-1)return s2(i,this.formSerializer).toString();if((b=k.isFileList(i))||c.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return Ao(b?{"files[]":i}:i,x&&new x,this.formSerializer)}}return d||f?(s.setContentType("application/json",!1),f2(i)):i}],transformResponse:[function(i){const s=this.transitional||Oi.transitional,c=s&&s.forcedJSONParsing,f=this.responseType==="json";if(k.isResponse(i)||k.isReadableStream(i))return i;if(i&&k.isString(i)&&(c&&!this.responseType||f)){const h=!(s&&s.silentJSONParsing)&&f;try{return JSON.parse(i,this.parseReviver)}catch(b){if(h)throw b.name==="SyntaxError"?he.from(b,he.ERR_BAD_RESPONSE,this,null,this.response):b}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],l=>{Oi.headers[l]={}});const d2=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),p2=l=>{const i={};let s,c,f;return l&&l.split(`
`).forEach(function(h){f=h.indexOf(":"),s=h.substring(0,f).trim().toLowerCase(),c=h.substring(f+1).trim(),!(!s||i[s]&&d2[s])&&(s==="set-cookie"?i[s]?i[s].push(c):i[s]=[c]:i[s]=i[s]?i[s]+", "+c:c)}),i},p0=Symbol("internals");function vi(l){return l&&String(l).trim().toLowerCase()}function so(l){return l===!1||l==null?l:k.isArray(l)?l.map(so):String(l)}function h2(l){const i=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=s.exec(l);)i[c[1]]=c[2];return i}const m2=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function cu(l,i,s,c,f){if(k.isFunction(c))return c.call(this,i,s);if(f&&(i=s),!!k.isString(i)){if(k.isString(c))return i.indexOf(c)!==-1;if(k.isRegExp(c))return c.test(i)}}function g2(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,s,c)=>s.toUpperCase()+c)}function x2(l,i){const s=k.toCamelCase(" "+i);["get","set","has"].forEach(c=>{Object.defineProperty(l,c+s,{value:function(f,d,h){return this[c].call(this,i,f,d,h)},configurable:!0})})}let wt=class{constructor(i){i&&this.set(i)}set(i,s,c){const f=this;function d(b,x,g){const y=vi(x);if(!y)throw new Error("header name must be a non-empty string");const v=k.findKey(f,y);(!v||f[v]===void 0||g===!0||g===void 0&&f[v]!==!1)&&(f[v||x]=so(b))}const h=(b,x)=>k.forEach(b,(g,y)=>d(g,y,x));if(k.isPlainObject(i)||i instanceof this.constructor)h(i,s);else if(k.isString(i)&&(i=i.trim())&&!m2(i))h(p2(i),s);else if(k.isObject(i)&&k.isIterable(i)){let b={},x,g;for(const y of i){if(!k.isArray(y))throw TypeError("Object iterator must return a key-value pair");b[g=y[0]]=(x=b[g])?k.isArray(x)?[...x,y[1]]:[x,y[1]]:y[1]}h(b,s)}else i!=null&&d(s,i,c);return this}get(i,s){if(i=vi(i),i){const c=k.findKey(this,i);if(c){const f=this[c];if(!s)return f;if(s===!0)return h2(f);if(k.isFunction(s))return s.call(this,f,c);if(k.isRegExp(s))return s.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,s){if(i=vi(i),i){const c=k.findKey(this,i);return!!(c&&this[c]!==void 0&&(!s||cu(this,this[c],c,s)))}return!1}delete(i,s){const c=this;let f=!1;function d(h){if(h=vi(h),h){const b=k.findKey(c,h);b&&(!s||cu(c,c[b],b,s))&&(delete c[b],f=!0)}}return k.isArray(i)?i.forEach(d):d(i),f}clear(i){const s=Object.keys(this);let c=s.length,f=!1;for(;c--;){const d=s[c];(!i||cu(this,this[d],d,i,!0))&&(delete this[d],f=!0)}return f}normalize(i){const s=this,c={};return k.forEach(this,(f,d)=>{const h=k.findKey(c,d);if(h){s[h]=so(f),delete s[d];return}const b=i?g2(d):String(d).trim();b!==d&&delete s[d],s[b]=so(f),c[b]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const s=Object.create(null);return k.forEach(this,(c,f)=>{c!=null&&c!==!1&&(s[f]=i&&k.isArray(c)?c.join(", "):c)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,s])=>i+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...s){const c=new this(i);return s.forEach(f=>c.set(f)),c}static accessor(i){const c=(this[p0]=this[p0]={accessors:{}}).accessors,f=this.prototype;function d(h){const b=vi(h);c[b]||(x2(f,h),c[b]=!0)}return k.isArray(i)?i.forEach(d):d(i),this}};wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(wt.prototype,({value:l},i)=>{let s=i[0].toUpperCase()+i.slice(1);return{get:()=>l,set(c){this[s]=c}}});k.freezeMethods(wt);function uu(l,i){const s=this||Oi,c=i||s,f=wt.from(c.headers);let d=c.data;return k.forEach(l,function(b){d=b.call(s,d,f.normalize(),i?i.status:void 0)}),f.normalize(),d}function Am(l){return!!(l&&l.__CANCEL__)}function jl(l,i,s){he.call(this,l??"canceled",he.ERR_CANCELED,i,s),this.name="CanceledError"}k.inherits(jl,he,{__CANCEL__:!0});function Rm(l,i,s){const c=s.config.validateStatus;!s.status||!c||c(s.status)?l(s):i(new he("Request failed with status code "+s.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function b2(l){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return i&&i[1]||""}function y2(l,i){l=l||10;const s=new Array(l),c=new Array(l);let f=0,d=0,h;return i=i!==void 0?i:1e3,function(x){const g=Date.now(),y=c[d];h||(h=g),s[f]=x,c[f]=g;let v=d,M=0;for(;v!==f;)M+=s[v++],v=v%l;if(f=(f+1)%l,f===d&&(d=(d+1)%l),g-h<i)return;const U=y&&g-y;return U?Math.round(M*1e3/U):void 0}}function v2(l,i){let s=0,c=1e3/i,f,d;const h=(g,y=Date.now())=>{s=y,f=null,d&&(clearTimeout(d),d=null),l(...g)};return[(...g)=>{const y=Date.now(),v=y-s;v>=c?h(g,y):(f=g,d||(d=setTimeout(()=>{d=null,h(f)},c-v)))},()=>f&&h(f)]}const ho=(l,i,s=3)=>{let c=0;const f=y2(50,250);return v2(d=>{const h=d.loaded,b=d.lengthComputable?d.total:void 0,x=h-c,g=f(x),y=h<=b;c=h;const v={loaded:h,total:b,progress:b?h/b:void 0,bytes:x,rate:g||void 0,estimated:g&&b&&y?(b-h)/g:void 0,event:d,lengthComputable:b!=null,[i?"download":"upload"]:!0};l(v)},s)},h0=(l,i)=>{const s=l!=null;return[c=>i[0]({lengthComputable:s,total:l,loaded:c}),i[1]]},m0=l=>(...i)=>k.asap(()=>l(...i)),w2=ut.hasStandardBrowserEnv?((l,i)=>s=>(s=new URL(s,ut.origin),l.protocol===s.protocol&&l.host===s.host&&(i||l.port===s.port)))(new URL(ut.origin),ut.navigator&&/(msie|trident)/i.test(ut.navigator.userAgent)):()=>!0,S2=ut.hasStandardBrowserEnv?{write(l,i,s,c,f,d,h){if(typeof document>"u")return;const b=[`${l}=${encodeURIComponent(i)}`];k.isNumber(s)&&b.push(`expires=${new Date(s).toUTCString()}`),k.isString(c)&&b.push(`path=${c}`),k.isString(f)&&b.push(`domain=${f}`),d===!0&&b.push("secure"),k.isString(h)&&b.push(`SameSite=${h}`),document.cookie=b.join("; ")},read(l){if(typeof document>"u")return null;const i=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return i?decodeURIComponent(i[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function j2(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function N2(l,i){return i?l.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):l}function Om(l,i,s){let c=!j2(i);return l&&(c||s==!1)?N2(l,i):i}const g0=l=>l instanceof wt?{...l}:l;function Rn(l,i){i=i||{};const s={};function c(g,y,v,M){return k.isPlainObject(g)&&k.isPlainObject(y)?k.merge.call({caseless:M},g,y):k.isPlainObject(y)?k.merge({},y):k.isArray(y)?y.slice():y}function f(g,y,v,M){if(k.isUndefined(y)){if(!k.isUndefined(g))return c(void 0,g,v,M)}else return c(g,y,v,M)}function d(g,y){if(!k.isUndefined(y))return c(void 0,y)}function h(g,y){if(k.isUndefined(y)){if(!k.isUndefined(g))return c(void 0,g)}else return c(void 0,y)}function b(g,y,v){if(v in i)return c(g,y);if(v in l)return c(void 0,g)}const x={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:b,headers:(g,y,v)=>f(g0(g),g0(y),v,!0)};return k.forEach(Object.keys({...l,...i}),function(y){const v=x[y]||f,M=v(l[y],i[y],y);k.isUndefined(M)&&v!==b||(s[y]=M)}),s}const km=l=>{const i=Rn({},l);let{data:s,withXSRFToken:c,xsrfHeaderName:f,xsrfCookieName:d,headers:h,auth:b}=i;if(i.headers=h=wt.from(h),i.url=zm(Om(i.baseURL,i.url,i.allowAbsoluteUrls),l.params,l.paramsSerializer),b&&h.set("Authorization","Basic "+btoa((b.username||"")+":"+(b.password?unescape(encodeURIComponent(b.password)):""))),k.isFormData(s)){if(ut.hasStandardBrowserEnv||ut.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(k.isFunction(s.getHeaders)){const x=s.getHeaders(),g=["content-type","content-length"];Object.entries(x).forEach(([y,v])=>{g.includes(y.toLowerCase())&&h.set(y,v)})}}if(ut.hasStandardBrowserEnv&&(c&&k.isFunction(c)&&(c=c(i)),c||c!==!1&&w2(i.url))){const x=f&&d&&S2.read(d);x&&h.set(f,x)}return i},E2=typeof XMLHttpRequest<"u",z2=E2&&function(l){return new Promise(function(s,c){const f=km(l);let d=f.data;const h=wt.from(f.headers).normalize();let{responseType:b,onUploadProgress:x,onDownloadProgress:g}=f,y,v,M,U,z;function B(){U&&U(),z&&z(),f.cancelToken&&f.cancelToken.unsubscribe(y),f.signal&&f.signal.removeEventListener("abort",y)}let T=new XMLHttpRequest;T.open(f.method.toUpperCase(),f.url,!0),T.timeout=f.timeout;function _(){if(!T)return;const V=wt.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),I={data:!b||b==="text"||b==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:V,config:l,request:T};Rm(function(P){s(P),B()},function(P){c(P),B()},I),T=null}"onloadend"in T?T.onloadend=_:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(_)},T.onabort=function(){T&&(c(new he("Request aborted",he.ECONNABORTED,l,T)),T=null)},T.onerror=function(W){const I=W&&W.message?W.message:"Network Error",ae=new he(I,he.ERR_NETWORK,l,T);ae.event=W||null,c(ae),T=null},T.ontimeout=function(){let W=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const I=f.transitional||Tm;f.timeoutErrorMessage&&(W=f.timeoutErrorMessage),c(new he(W,I.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,l,T)),T=null},d===void 0&&h.setContentType(null),"setRequestHeader"in T&&k.forEach(h.toJSON(),function(W,I){T.setRequestHeader(I,W)}),k.isUndefined(f.withCredentials)||(T.withCredentials=!!f.withCredentials),b&&b!=="json"&&(T.responseType=f.responseType),g&&([M,z]=ho(g,!0),T.addEventListener("progress",M)),x&&T.upload&&([v,U]=ho(x),T.upload.addEventListener("progress",v),T.upload.addEventListener("loadend",U)),(f.cancelToken||f.signal)&&(y=V=>{T&&(c(!V||V.type?new jl(null,l,T):V),T.abort(),T=null)},f.cancelToken&&f.cancelToken.subscribe(y),f.signal&&(f.signal.aborted?y():f.signal.addEventListener("abort",y)));const H=b2(f.url);if(H&&ut.protocols.indexOf(H)===-1){c(new he("Unsupported protocol "+H+":",he.ERR_BAD_REQUEST,l));return}T.send(d||null)})},T2=(l,i)=>{const{length:s}=l=l?l.filter(Boolean):[];if(i||s){let c=new AbortController,f;const d=function(g){if(!f){f=!0,b();const y=g instanceof Error?g:this.reason;c.abort(y instanceof he?y:new jl(y instanceof Error?y.message:y))}};let h=i&&setTimeout(()=>{h=null,d(new he(`timeout ${i} of ms exceeded`,he.ETIMEDOUT))},i);const b=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),l=null)};l.forEach(g=>g.addEventListener("abort",d));const{signal:x}=c;return x.unsubscribe=()=>k.asap(b),x}},C2=function*(l,i){let s=l.byteLength;if(s<i){yield l;return}let c=0,f;for(;c<s;)f=c+i,yield l.slice(c,f),c=f},A2=async function*(l,i){for await(const s of R2(l))yield*C2(s,i)},R2=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const i=l.getReader();try{for(;;){const{done:s,value:c}=await i.read();if(s)break;yield c}}finally{await i.cancel()}},x0=(l,i,s,c)=>{const f=A2(l,i);let d=0,h,b=x=>{h||(h=!0,c&&c(x))};return new ReadableStream({async pull(x){try{const{done:g,value:y}=await f.next();if(g){b(),x.close();return}let v=y.byteLength;if(s){let M=d+=v;s(M)}x.enqueue(new Uint8Array(y))}catch(g){throw b(g),g}},cancel(x){return b(x),f.return()}},{highWaterMark:2})},b0=64*1024,{isFunction:eo}=k,O2=(({Request:l,Response:i})=>({Request:l,Response:i}))(k.global),{ReadableStream:y0,TextEncoder:v0}=k.global,w0=(l,...i)=>{try{return!!l(...i)}catch{return!1}},k2=l=>{l=k.merge.call({skipUndefined:!0},O2,l);const{fetch:i,Request:s,Response:c}=l,f=i?eo(i):typeof fetch=="function",d=eo(s),h=eo(c);if(!f)return!1;const b=f&&eo(y0),x=f&&(typeof v0=="function"?(z=>B=>z.encode(B))(new v0):async z=>new Uint8Array(await new s(z).arrayBuffer())),g=d&&b&&w0(()=>{let z=!1;const B=new s(ut.origin,{body:new y0,method:"POST",get duplex(){return z=!0,"half"}}).headers.has("Content-Type");return z&&!B}),y=h&&b&&w0(()=>k.isReadableStream(new c("").body)),v={stream:y&&(z=>z.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(z=>{!v[z]&&(v[z]=(B,T)=>{let _=B&&B[z];if(_)return _.call(B);throw new he(`Response type '${z}' is not supported`,he.ERR_NOT_SUPPORT,T)})});const M=async z=>{if(z==null)return 0;if(k.isBlob(z))return z.size;if(k.isSpecCompliantForm(z))return(await new s(ut.origin,{method:"POST",body:z}).arrayBuffer()).byteLength;if(k.isArrayBufferView(z)||k.isArrayBuffer(z))return z.byteLength;if(k.isURLSearchParams(z)&&(z=z+""),k.isString(z))return(await x(z)).byteLength},U=async(z,B)=>{const T=k.toFiniteNumber(z.getContentLength());return T??M(B)};return async z=>{let{url:B,method:T,data:_,signal:H,cancelToken:V,timeout:W,onDownloadProgress:I,onUploadProgress:ae,responseType:P,headers:re,withCredentials:xe="same-origin",fetchOptions:Ee}=km(z),K=i||fetch;P=P?(P+"").toLowerCase():"text";let oe=T2([H,V&&V.toAbortSignal()],W),X=null;const be=oe&&oe.unsubscribe&&(()=>{oe.unsubscribe()});let ze;try{if(ae&&g&&T!=="get"&&T!=="head"&&(ze=await U(re,_))!==0){let w=new s(B,{method:"POST",body:_,duplex:"half"}),L;if(k.isFormData(_)&&(L=w.headers.get("content-type"))&&re.setContentType(L),w.body){const[F,ee]=h0(ze,ho(m0(ae)));_=x0(w.body,b0,F,ee)}}k.isString(xe)||(xe=xe?"include":"omit");const O=d&&"credentials"in s.prototype,$={...Ee,signal:oe,method:T.toUpperCase(),headers:re.normalize().toJSON(),body:_,duplex:"half",credentials:O?xe:void 0};X=d&&new s(B,$);let ne=await(d?K(X,Ee):K(B,$));const Q=y&&(P==="stream"||P==="response");if(y&&(I||Q&&be)){const w={};["status","statusText","headers"].forEach(ue=>{w[ue]=ne[ue]});const L=k.toFiniteNumber(ne.headers.get("content-length")),[F,ee]=I&&h0(L,ho(m0(I),!0))||[];ne=new c(x0(ne.body,b0,F,()=>{ee&&ee(),be&&be()}),w)}P=P||"text";let J=await v[k.findKey(v,P)||"text"](ne,z);return!Q&&be&&be(),await new Promise((w,L)=>{Rm(w,L,{data:J,headers:wt.from(ne.headers),status:ne.status,statusText:ne.statusText,config:z,request:X})})}catch(O){throw be&&be(),O&&O.name==="TypeError"&&/Load failed|fetch/i.test(O.message)?Object.assign(new he("Network Error",he.ERR_NETWORK,z,X),{cause:O.cause||O}):he.from(O,O&&O.code,z,X)}}},_2=new Map,_m=l=>{let i=l&&l.env||{};const{fetch:s,Request:c,Response:f}=i,d=[c,f,s];let h=d.length,b=h,x,g,y=_2;for(;b--;)x=d[b],g=y.get(x),g===void 0&&y.set(x,g=b?new Map:k2(i)),y=g;return g};_m();const Qu={http:$y,xhr:z2,fetch:{get:_m}};k.forEach(Qu,(l,i)=>{if(l){try{Object.defineProperty(l,"name",{value:i})}catch{}Object.defineProperty(l,"adapterName",{value:i})}});const S0=l=>`- ${l}`,D2=l=>k.isFunction(l)||l===null||l===!1;function M2(l,i){l=k.isArray(l)?l:[l];const{length:s}=l;let c,f;const d={};for(let h=0;h<s;h++){c=l[h];let b;if(f=c,!D2(c)&&(f=Qu[(b=String(c)).toLowerCase()],f===void 0))throw new he(`Unknown adapter '${b}'`);if(f&&(k.isFunction(f)||(f=f.get(i))))break;d[b||"#"+h]=f}if(!f){const h=Object.entries(d).map(([x,g])=>`adapter ${x} `+(g===!1?"is not supported by the environment":"is not available in the build"));let b=s?h.length>1?`since :
`+h.map(S0).join(`
`):" "+S0(h[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+b,"ERR_NOT_SUPPORT")}return f}const Dm={getAdapter:M2,adapters:Qu};function fu(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new jl(null,l)}function j0(l){return fu(l),l.headers=wt.from(l.headers),l.data=uu.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),Dm.getAdapter(l.adapter||Oi.adapter,l)(l).then(function(c){return fu(l),c.data=uu.call(l,l.transformResponse,c),c.headers=wt.from(c.headers),c},function(c){return Am(c)||(fu(l),c&&c.response&&(c.response.data=uu.call(l,l.transformResponse,c.response),c.response.headers=wt.from(c.response.headers))),Promise.reject(c)})}const Mm="1.13.2",Ro={};["object","boolean","number","function","string","symbol"].forEach((l,i)=>{Ro[l]=function(c){return typeof c===l||"a"+(i<1?"n ":" ")+l}});const N0={};Ro.transitional=function(i,s,c){function f(d,h){return"[Axios v"+Mm+"] Transitional option '"+d+"'"+h+(c?". "+c:"")}return(d,h,b)=>{if(i===!1)throw new he(f(h," has been removed"+(s?" in "+s:"")),he.ERR_DEPRECATED);return s&&!N0[h]&&(N0[h]=!0,console.warn(f(h," has been deprecated since v"+s+" and will be removed in the near future"))),i?i(d,h,b):!0}};Ro.spelling=function(i){return(s,c)=>(console.warn(`${c} is likely a misspelling of ${i}`),!0)};function U2(l,i,s){if(typeof l!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const c=Object.keys(l);let f=c.length;for(;f-- >0;){const d=c[f],h=i[d];if(h){const b=l[d],x=b===void 0||h(b,d,l);if(x!==!0)throw new he("option "+d+" must be "+x,he.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new he("Unknown option "+d,he.ERR_BAD_OPTION)}}const co={assertOptions:U2,validators:Ro},la=co.validators;let An=class{constructor(i){this.defaults=i||{},this.interceptors={request:new d0,response:new d0}}async request(i,s){try{return await this._request(i,s)}catch(c){if(c instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const d=f.stack?f.stack.replace(/^.+\n/,""):"";try{c.stack?d&&!String(c.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(c.stack+=`
`+d):c.stack=d}catch{}}throw c}}_request(i,s){typeof i=="string"?(s=s||{},s.url=i):s=i||{},s=Rn(this.defaults,s);const{transitional:c,paramsSerializer:f,headers:d}=s;c!==void 0&&co.assertOptions(c,{silentJSONParsing:la.transitional(la.boolean),forcedJSONParsing:la.transitional(la.boolean),clarifyTimeoutError:la.transitional(la.boolean)},!1),f!=null&&(k.isFunction(f)?s.paramsSerializer={serialize:f}:co.assertOptions(f,{encode:la.function,serialize:la.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),co.assertOptions(s,{baseUrl:la.spelling("baseURL"),withXsrfToken:la.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let h=d&&k.merge(d.common,d[s.method]);d&&k.forEach(["delete","get","head","post","put","patch","common"],z=>{delete d[z]}),s.headers=wt.concat(h,d);const b=[];let x=!0;this.interceptors.request.forEach(function(B){typeof B.runWhen=="function"&&B.runWhen(s)===!1||(x=x&&B.synchronous,b.unshift(B.fulfilled,B.rejected))});const g=[];this.interceptors.response.forEach(function(B){g.push(B.fulfilled,B.rejected)});let y,v=0,M;if(!x){const z=[j0.bind(this),void 0];for(z.unshift(...b),z.push(...g),M=z.length,y=Promise.resolve(s);v<M;)y=y.then(z[v++],z[v++]);return y}M=b.length;let U=s;for(;v<M;){const z=b[v++],B=b[v++];try{U=z(U)}catch(T){B.call(this,T);break}}try{y=j0.call(this,U)}catch(z){return Promise.reject(z)}for(v=0,M=g.length;v<M;)y=y.then(g[v++],g[v++]);return y}getUri(i){i=Rn(this.defaults,i);const s=Om(i.baseURL,i.url,i.allowAbsoluteUrls);return zm(s,i.params,i.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(i){An.prototype[i]=function(s,c){return this.request(Rn(c||{},{method:i,url:s,data:(c||{}).data}))}});k.forEach(["post","put","patch"],function(i){function s(c){return function(d,h,b){return this.request(Rn(b||{},{method:i,headers:c?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}An.prototype[i]=s(),An.prototype[i+"Form"]=s(!0)});let B2=class Um{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(d){s=d});const c=this;this.promise.then(f=>{if(!c._listeners)return;let d=c._listeners.length;for(;d-- >0;)c._listeners[d](f);c._listeners=null}),this.promise.then=f=>{let d;const h=new Promise(b=>{c.subscribe(b),d=b}).then(f);return h.cancel=function(){c.unsubscribe(d)},h},i(function(d,h,b){c.reason||(c.reason=new jl(d,h,b),s(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const s=this._listeners.indexOf(i);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const i=new AbortController,s=c=>{i.abort(c)};return this.subscribe(s),i.signal.unsubscribe=()=>this.unsubscribe(s),i.signal}static source(){let i;return{token:new Um(function(f){i=f}),cancel:i}}};function L2(l){return function(s){return l.apply(null,s)}}function H2(l){return k.isObject(l)&&l.isAxiosError===!0}const Eu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Eu).forEach(([l,i])=>{Eu[i]=l});function Bm(l){const i=new An(l),s=hm(An.prototype.request,i);return k.extend(s,An.prototype,i,{allOwnKeys:!0}),k.extend(s,i,null,{allOwnKeys:!0}),s.create=function(f){return Bm(Rn(l,f))},s}const Ze=Bm(Oi);Ze.Axios=An;Ze.CanceledError=jl;Ze.CancelToken=B2;Ze.isCancel=Am;Ze.VERSION=Mm;Ze.toFormData=Ao;Ze.AxiosError=he;Ze.Cancel=Ze.CanceledError;Ze.all=function(i){return Promise.all(i)};Ze.spread=L2;Ze.isAxiosError=H2;Ze.mergeConfig=Rn;Ze.AxiosHeaders=wt;Ze.formToJSON=l=>Cm(k.isHTMLForm(l)?new FormData(l):l);Ze.getAdapter=Dm.getAdapter;Ze.HttpStatusCode=Eu;Ze.default=Ze;const{Axios:o5,AxiosError:s5,CanceledError:c5,isCancel:u5,CancelToken:f5,VERSION:d5,all:p5,Cancel:h5,isAxiosError:m5,spread:g5,toFormData:x5,AxiosHeaders:b5,HttpStatusCode:y5,formToJSON:v5,getAdapter:w5,mergeConfig:S5}=Ze,Vt=Ze.create({baseURL:"https://jansamvad.saavi.co.in/api",headers:{"Content-Type":"application/json"}});Vt.interceptors.request.use(l=>(l.data instanceof FormData&&delete l.headers["Content-Type"],l));const Lm="/assets/bg1-BQodPINJ.jpeg",zu="/assets/ajivir5-DJJi1rt9.jpeg";function q2(){const l=Oa(),[i,s]=j.useState("password"),[c,f]=j.useState({username:"",password:""}),[d,h]=j.useState(!1),[b,x]=j.useState(""),[g,y]=j.useState(!1),[v,M]=j.useState("mobile"),[U,z]=j.useState(""),[B,T]=j.useState(["","","","","",""]),[_,H]=j.useState(""),[V,W]=j.useState(0),[I,ae]=j.useState(!1),[P,re]=j.useState(!1),xe=j.useRef([]),Ee=Q=>J=>f(w=>({...w,[Q]:J.target.value}));j.useEffect(()=>{if(V<=0){ae(!0);return}const Q=setTimeout(()=>W(J=>J-1),1e3);return()=>clearTimeout(Q)},[V]);const K=Q=>`${String(Math.floor(Q/60)).padStart(2,"0")}:${String(Q%60).padStart(2,"0")}`,oe=async Q=>{if(Q.preventDefault(),x(""),!c.username||!c.password){x("सर्व fields भरा ❌");return}try{h(!0);const J=await Vt.post("/citizen/login",{username:c.username.trim(),password:c.password});if(!J.data.success){x(J.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(J.data.citizen)),localStorage.setItem("citizenToken",J.data.token||""),l("/my-appointments")}catch(J){x(J?.response?.data?.message||"Server Error ❌")}finally{h(!1)}},X=async()=>{const Q=U.trim();if(!/^[0-9]{10}$/.test(Q)){x("10 digit valid mobile number enter करा!");return}x(""),re(!0);try{const F=await Vt.post("/citizen/check-mobile",{mobileNo:Q});if(!F.data.success){x(F.data.message||"Mobile not registered ❌"),re(!1);return}}catch(F){x(F?.response?.data?.message||"Mobile number not registered. Please Register first ❌"),re(!1);return}const J=Math.floor(1e5+Math.random()*9e5).toString();H(J),W(60),ae(!1),T(["","","","","",""]);const w=`Dear Citizen, Your OTP for VVCMC Jan Samvaad Portal login is ${J}. This OTP is valid for 60 seconds. Do not share this OTP with anyone. SAAVI INFINET`,L=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379315&number=${Q}&message=${w}`;fetch(L,{method:"GET",mode:"no-cors"}).catch(()=>{}),M("otp"),re(!1),setTimeout(()=>xe.current[0]?.focus(),120)},be=async()=>{const Q=B.join("");if(Q.length<6){x("6 अंकी OTP टाका!");return}if(V<=0){x("OTP expire झाला! पुन्हा पाठवा.");return}if(Q!==_){x("❌ चुकीचा OTP! पुन्हा try करा."),T(["","","","","",""]),setTimeout(()=>xe.current[0]?.focus(),50);return}try{re(!0),x("");const J=await Vt.post("/citizen/citizenLoginByMobile",{mobileNo:U.trim()});if(!J.data.success){x(J.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(J.data.citizen)),localStorage.setItem("citizenToken",J.data.token||""),l("/my-appointments")}catch(J){x(J?.response?.data?.message||"Server Error ❌")}finally{re(!1)}},ze=(Q,J)=>{if(!/^[0-9]?$/.test(J))return;const w=[...B];w[Q]=J,T(w),J&&Q<5&&xe.current[Q+1]?.focus()},O=(Q,J)=>{J.key==="Backspace"&&!B[Q]&&Q>0&&xe.current[Q-1]?.focus()},$=Q=>{Q.preventDefault();const J=Q.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),w=[...B];J.split("").forEach((L,F)=>{w[F]=L}),T(w),xe.current[Math.min(J.length,5)]?.focus()},ne=Q=>{s(Q),x(""),M("mobile"),T(["","","","","",""]),z(""),W(0),y(!1)};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --teal:       #4CABC1;
          --teal-dark:  #49ACC3;
          --gold:       #CA9D28;
          --gold-light: #CE9A54;
          --cream:      #F5E7C2;
          --green:      #66A962;
          --deep:       #187480;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cl-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .cl-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .cl-root:hover .cl-bg { transform: scale(1.02); }

        .cl-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(24,116,128,0.45) 0%,
            rgba(73,172,195,0.38) 30%,
            rgba(24,116,128,0.60) 60%,
            rgba(12,70,80,0.82) 100%
          );
        }

        .cl-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%,
            var(--gold-light) 22%,
            var(--teal) 45%,
            var(--teal-dark) 65%,
            var(--green) 85%,
            var(--cream) 100%
          );
          z-index: 20;
        }

        /* ── WRAPPER ── */
        .cl-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: stretch;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.52),
            0 0 0 1px rgba(202,157,40,0.20),
            inset 0 1px 0 rgba(245,231,194,0.07);
          animation: wrapperIn .5s cubic-bezier(.22,.9,.36,1) both;
        }
        @keyframes wrapperIn {
          from { opacity:0; transform:translateY(26px) scale(0.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        /* ── LEFT CARD ── */
        .cl-card {
          width: 410px;
          background: linear-gradient(
            160deg,
            rgba(12,68,80,0.80) 0%,
            rgba(24,116,128,0.62) 50%,
            rgba(12,68,80,0.85) 100%
          );
          backdrop-filter: blur(38px) saturate(2);
          -webkit-backdrop-filter: blur(38px) saturate(2);
          border: 1px solid rgba(76,171,193,0.20);
          border-right: 1px solid rgba(202,157,40,0.18);
          padding: 34px 32px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .cl-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .cl-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
        }
        .cl-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .cl-logo-img {
          width: 54px; height: 54px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow:
            0 0 0 3px rgba(202,157,40,0.15),
            0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .cl-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .cl-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .cl-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(245,231,194,0.60);
          letter-spacing: 0.4px;
        }

        /* ── Page title ── */
        .cl-page-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--cream);
          margin-bottom: 4px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.5px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }
        .cl-page-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          color: rgba(245,231,194,0.55);
          margin-bottom: 18px;
        }

        /* ── TABS ── */
        .cl-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 18px;
          background: rgba(0,0,0,0.34);
          border-radius: 14px;
          padding: 4px;
          border: 1px solid rgba(76,171,193,0.16);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.22);
        }
        .cl-tab {
          flex: 1;
          padding: 9px 0;
          border: none;
          border-radius: 11px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: all .25s;
          color: rgba(245,231,194,0.48);
          background: transparent;
          letter-spacing: 0.2px;
        }
        .cl-tab.active {
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          box-shadow:
            0 2px 14px rgba(76,171,193,0.42),
            inset 0 1px 0 rgba(245,231,194,0.14);
          font-weight: 700;
        }
        .cl-tab:not(.active):hover {
          color: var(--cream);
          background: rgba(76,171,193,0.12);
        }

        /* ── ERROR BOX ── */
        .cl-error {
          background: rgba(220,38,38,0.18);
          border: 1px solid rgba(220,38,38,0.38);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 12.5px;
          color: #fca5a5;
          margin-bottom: 14px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
        }

        /* ── FORM FIELDS ── */
        .cl-fld { margin-bottom: 14px; }

        .cl-flbl {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          color: rgba(245,231,194,0.72);
          margin-bottom: 7px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .cl-fwrap { position: relative; }

        .cl-finput {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 12px;
          font-size: 14px;
          color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          outline: none;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .cl-finput:focus {
          background: rgba(24,116,128,0.62);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .cl-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 13px; font-family: 'Tiro Devanagari Marathi', serif; }
        .cl-finput.has-icon { padding-left: 42px; }

        .cl-ficon {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          pointer-events: none;
          opacity: 0.48;
        }
        .cl-pbtn {
          position: absolute;
          right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; font-size: 15px;
          color: rgba(245,231,194,0.42);
          padding: 0; display: flex; align-items: center;
          transition: color .2s;
        }
        .cl-pbtn:hover { color: var(--cream); }

        .cl-prefix {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          font-size: 12px; font-weight: 700;
          color: rgba(245,231,194,0.68);
          pointer-events: none; white-space: nowrap;
        }
        .cl-finput.with-prefix { padding-left: 74px; }

        /* ── BUTTONS ── */
        .cl-sbtn {
          width: 100%;
          padding: 13px;
          margin-top: 6px;
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          color: #fff;
          font-size: 13px; font-weight: 800;
          letter-spacing: 1.5px;
          border: none; border-radius: 12px;
          cursor: pointer; transition: all 0.22s;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(76,171,193,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
          font-family: 'Outfit', sans-serif;
          text-transform: uppercase;
        }
        .cl-sbtn::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .cl-sbtn::after {
          content: '';
          position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg);
          transition: left 0.55s ease;
        }
        .cl-sbtn:hover::after { left: 140%; }
        .cl-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(76,171,193,0.52);
        }
        .cl-sbtn:active:not(:disabled) { transform: translateY(0); }
        .cl-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .cl-sbtn.orange {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          box-shadow: 0 4px 20px rgba(202,157,40,0.40);
        }
        .cl-sbtn.orange:hover:not(:disabled) {
          background: linear-gradient(135deg, #b5841f 0%, var(--gold) 100%);
          box-shadow: 0 10px 28px rgba(202,157,40,0.52);
        }

        .cl-sbtn.green {
          background: linear-gradient(135deg, #4e9148 0%, var(--green) 100%);
          box-shadow: 0 4px 20px rgba(102,169,98,0.40);
        }
        .cl-sbtn.green:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7a39 0%, #4e9148 100%);
          box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }

        /* ── OTP boxes ── */
        .otp-row {
          display: flex; gap: 8px;
          justify-content: center; margin-bottom: 16px;
        }
        .otp-box {
          width: 46px; height: 52px;
          border: 1px solid rgba(76,171,193,0.22);
          border-radius: 12px;
          font-size: 22px; font-weight: 800;
          text-align: center;
          color: var(--cream);
          font-family: 'Outfit', sans-serif;
          outline: none;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          transition: all .18s;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06);
        }
        .otp-box:focus {
          background: rgba(24,116,128,0.65);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.20);
          color: #fff;
        }
        .otp-box:not(:placeholder-shown) {
          background: rgba(24,116,128,0.55);
          border-color: var(--green);
          box-shadow: 0 0 0 2px rgba(102,169,98,0.28);
        }

        /* ── Timer & resend ── */
        .otp-timer {
          text-align: center; font-size: 12px;
          color: rgba(245,231,194,0.60);
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .otp-timer strong { font-size: 13.5px; }
        .resend-btn {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px; font-weight: 700;
          cursor: pointer; transition: all .2s;
        }
        .resend-btn:disabled { color: rgba(245,231,194,0.22); cursor: not-allowed; }
        .resend-btn:not(:disabled) { color: var(--gold-light); }
        .resend-btn:not(:disabled):hover { color: var(--gold); text-decoration: underline; }

        /* ── Back button ── */
        .otp-back {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 600;
          color: rgba(245,231,194,0.52);
          cursor: pointer;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 14px; padding: 0;
          transition: color .2s;
        }
        .otp-back:hover { color: var(--teal); }

        /* ── OR divider ── */
        .cl-or {
          display: flex; align-items: center;
          gap: 10px; margin: 16px 0 0;
        }
        .cl-orl { flex: 1; height: 1px; background: rgba(202,157,40,0.18); }
        .cl-or span {
          font-size: 10.5px; color: rgba(245,231,194,0.36);
          letter-spacing: 0.8px; text-transform: uppercase;
        }

        /* ── Register link ── */
        .cl-reg {
          margin-top: 12px; text-align: center;
          font-size: 13px; color: rgba(245,231,194,0.58);
          font-family: 'Outfit', sans-serif;
        }
        .cl-reg a, .cl-reg span.cl-link {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px;
          padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light);
          transition: all .2s;
          cursor: pointer;
        }
        .cl-reg a:hover, .cl-reg span.cl-link:hover { color: var(--gold-light); border-color: var(--gold); }

        /* ── Card footer ── */
        .cl-cfooter {
          margin-top: auto; padding-top: 16px;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center;
          justify-content: center; gap: 7px;
        }
        .cl-cfdot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: dotPulse 2.5s infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.7); }
        }
        .cl-cfooter span {
          font-size: 10.5px; color: rgba(245,231,194,0.28);
          letter-spacing: 0.3px;
        }

        /* ══════════════════════════════════════
           MAYOR PANEL
        ══════════════════════════════════════ */
        .cl-mayor-panel {
          width: 300px;
          background: linear-gradient(
            155deg,
            var(--teal-dark) 0%,
            var(--deep) 38%,
            #0b5e6b 72%,
            #093e4a 100%
          );
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 26px;
          position: relative; overflow: hidden;
        }

        .cl-mayor-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg,
            var(--gold), var(--gold-light), var(--cream),
            var(--gold-light), var(--gold)
          );
          background-size: 250%;
          animation: shimmerBar 3.5s linear infinite;
        }
        @keyframes shimmerBar {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        .cl-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .cl-mp-icon {
          position: absolute; font-size: 30px;
          opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: opacity .35s;
        }
        .cl-mayor-panel:hover .cl-mp-icon { opacity: 0.24; }
        .cl-mp-icon.tl { top: 26px;  left: 20px; }
        .cl-mp-icon.tr { top: 26px;  right: 20px; }
        .cl-mp-icon.bl { bottom: 48px; left: 20px; }
        .cl-mp-icon.br { bottom: 48px; right: 20px; }

        .cl-mayor-photo-wrap {
          position: relative; margin-bottom: 20px; z-index: 2;
        }
        .cl-mayor-ring {
          width: 152px; height: 152px;
          border-radius: 50%; padding: 5px;
          background: conic-gradient(
            var(--gold) 0deg,
            var(--gold-light) 90deg,
            var(--cream) 180deg,
            var(--gold-light) 260deg,
            var(--gold) 360deg
          );
          box-shadow:
            0 8px 36px rgba(0,0,0,0.38),
            0 0 0 3px rgba(202,157,40,0.18);
        }
        .cl-mayor-photo {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92);
          display: block;
        }
        .cl-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28);
          border: 2px solid rgba(255,255,255,0.95);
        }

        .cl-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700;
          color: #fff; text-align: center;
          margin-bottom: 6px;
          text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .cl-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px;
          color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 22px; z-index: 2; position: relative;
        }

        .cl-mayor-bar-wrap {
          width: 110px; height: 5px;
          background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden;
          z-index: 2; position: relative;
        }
        .cl-mayor-bar {
          width: 65%; height: 100%;
          background: linear-gradient(90deg, var(--green), #7dd87a);
          border-radius: 999px;
          box-shadow: 0 0 10px rgba(102,169,98,0.65);
          animation: barGlow 2.5s ease-in-out infinite;
        }
        @keyframes barGlow {
          0%,100% { opacity:1; }
          50% { opacity:0.60; }
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .28s ease both; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .cl-mayor-panel { display: none; }
          .cl-card {
            border-right: 1px solid rgba(76,171,193,0.20);
            border-radius: 24px; width: 92%; max-width: 410px;
          }
          .cl-wrapper { border-radius: 24px; }
        }
      `}),u.jsxs("div",{className:"cl-root",children:[u.jsx("div",{className:"cl-bg",style:{backgroundImage:`url(${Lm})`}}),u.jsx("div",{className:"cl-overlay"}),u.jsx("div",{className:"cl-stripe"}),u.jsxs("div",{className:"cl-wrapper",children:[u.jsxs("div",{className:"cl-card",children:[u.jsxs("div",{className:"cl-logo-row",children:[u.jsx("img",{src:pm,alt:"VVCMC",className:"cl-logo-img"}),u.jsxs("div",{className:"cl-logo-texts",children:[u.jsx("div",{className:"cl-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),u.jsx("div",{className:"cl-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),u.jsx("p",{className:"cl-page-title",children:"Welcome Back"}),u.jsx("p",{className:"cl-page-sub",children:"Mayor Appointment Portal वर login करा"}),u.jsxs("div",{className:"cl-tabs",children:[u.jsx("button",{className:`cl-tab ${i==="password"?"active":""}`,onClick:()=>ne("password"),children:"🔒 Password Login"}),u.jsx("button",{className:`cl-tab ${i==="otp"?"active":""}`,onClick:()=>ne("otp"),children:"📱 OTP Login"})]}),b&&u.jsxs("div",{className:"cl-error",children:["⚠️ ",b]}),i==="password"&&u.jsxs("div",{className:"fade-up",children:[u.jsxs("form",{onSubmit:oe,children:[u.jsxs("div",{className:"cl-fld",children:[u.jsx("label",{className:"cl-flbl",children:"Username"}),u.jsxs("div",{className:"cl-fwrap",children:[u.jsx("span",{className:"cl-ficon",children:"👤"}),u.jsx("input",{className:"cl-finput has-icon",type:"text",placeholder:"Username टाका",value:c.username,onChange:Ee("username"),autoComplete:"username",autoFocus:!0})]})]}),u.jsxs("div",{className:"cl-fld",children:[u.jsx("label",{className:"cl-flbl",children:"Password"}),u.jsxs("div",{className:"cl-fwrap",children:[u.jsx("span",{className:"cl-ficon",children:"🔒"}),u.jsx("input",{className:"cl-finput has-icon",type:g?"text":"password",placeholder:"Password टाका",value:c.password,onChange:Ee("password"),autoComplete:"current-password",style:{paddingRight:42}}),u.jsx("button",{type:"button",className:"cl-pbtn",onClick:()=>y(!g),tabIndex:-1,children:g?"🙈":"👁️"})]})]}),u.jsx("button",{type:"submit",className:"cl-sbtn",disabled:d||!c.username||!c.password,children:d?"⏳ Logging in...":"🔐 SIGN IN →"})]}),u.jsxs("div",{className:"cl-or",children:[u.jsx("div",{className:"cl-orl"}),u.jsx("span",{children:"or"}),u.jsx("div",{className:"cl-orl"})]}),u.jsxs("p",{className:"cl-reg",children:["Account नाही?",u.jsx("span",{className:"cl-link",onClick:()=>l("/register"),children:"Register करा"})]})]}),i==="otp"&&u.jsxs("div",{className:"fade-up",children:[v==="mobile"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"cl-fld",children:[u.jsx("label",{className:"cl-flbl",children:"Mobile Number"}),u.jsxs("div",{className:"cl-fwrap",children:[u.jsx("span",{className:"cl-prefix",children:"🇮🇳 +91"}),u.jsx("input",{className:"cl-finput with-prefix",type:"tel",maxLength:10,placeholder:"10 अंकी नंबर",value:U,onChange:Q=>z(Q.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:Q=>Q.key==="Enter"&&X(),autoFocus:!0})]})]}),u.jsx("button",{className:"cl-sbtn orange",onClick:X,disabled:U.length!==10||P,children:P?"⏳ पाठवत आहे...":"OTP पाठवा →"}),u.jsxs("div",{className:"cl-or",children:[u.jsx("div",{className:"cl-orl"}),u.jsx("span",{children:"or"}),u.jsx("div",{className:"cl-orl"})]}),u.jsxs("p",{className:"cl-reg",children:["Account नाही?",u.jsx("span",{className:"cl-link",onClick:()=>l("/register"),children:"Register करा"})]})]}),v==="otp"&&u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"otp-back",onClick:()=>{M("mobile"),T(["","","","","",""]),x("")},children:"← मागे जा"}),u.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:[u.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",U.slice(-3)]})," ","वर OTP पाठवला"]}),u.jsx("div",{className:"otp-row",onPaste:$,children:B.map((Q,J)=>u.jsx("input",{ref:w=>xe.current[J]=w,className:"otp-box",type:"tel",maxLength:1,value:Q,placeholder:"·",onChange:w=>ze(J,w.target.value),onKeyDown:w=>O(J,w)},J))}),u.jsxs("div",{className:"otp-timer",children:[V>0?u.jsxs(u.Fragment,{children:["OTP expire होईल:"," ",u.jsx("strong",{style:{color:V<=15?"#ff6b6b":"#CE9A54"},children:K(V)})]}):u.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP expire झाला!"}),u.jsxs("div",{style:{marginTop:6},children:["OTP नाही मिळाला?"," ",u.jsx("button",{className:"resend-btn",onClick:X,disabled:!I,children:"पुन्हा पाठवा"})]})]}),u.jsx("button",{className:"cl-sbtn green",onClick:be,disabled:B.join("").length<6||P,children:P?"⏳ Verifying...":"✅ Verify & Login"})]})]}),u.jsxs("div",{className:"cl-cfooter",children:[u.jsx("div",{className:"cl-cfdot"}),u.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),u.jsxs("div",{className:"cl-mayor-panel",children:[u.jsx("span",{className:"cl-mp-icon tl",children:"🏛️"}),u.jsx("span",{className:"cl-mp-icon tr",children:"🤝"}),u.jsx("span",{className:"cl-mp-icon bl",children:"🏢"}),u.jsx("span",{className:"cl-mp-icon br",children:"🏙️"}),u.jsx("div",{className:"cl-mayor-photo-wrap",children:u.jsx("div",{className:"cl-mayor-ring",children:u.jsx("img",{src:zu,alt:"Mayor",className:"cl-mayor-photo"})})}),u.jsx("p",{className:"cl-mayor-name",children:"मा. श्री.अजीव पाटील"}),u.jsx("p",{className:"cl-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),u.jsx("div",{className:"cl-mayor-bar-wrap",children:u.jsx("div",{className:"cl-mayor-bar"})})]})]})]})]})}function Y2(){const l=Oa(),[i,s]=j.useState({fullName:"",userName:"",mobileNumber:"",email:"",address:"",pincode:"",password:"",confirmPassword:""}),[c,f]=j.useState(!1),[d,h]=j.useState(""),[b,x]=j.useState(!1),[g,y]=j.useState(!1),[v,M]=j.useState(!1),[U,z]=j.useState(!1),[B,T]=j.useState("form"),[_,H]=j.useState(["","","","","",""]),[V,W]=j.useState(""),[I,ae]=j.useState(0),[P,re]=j.useState(!1),[xe,Ee]=j.useState(!1),K=j.useRef([]),oe=Q=>J=>s(w=>({...w,[Q]:J.target.value}));j.useEffect(()=>{const Q=setTimeout(()=>z(!0),60);return()=>clearTimeout(Q)},[]),j.useEffect(()=>{if(I<=0){re(!0);return}const Q=setTimeout(()=>ae(J=>J-1),1e3);return()=>clearTimeout(Q)},[I]);const X=Q=>`${String(Math.floor(Q/60)).padStart(2,"0")}:${String(Q%60).padStart(2,"0")}`,be=async Q=>{if(Q&&Q.preventDefault&&Q.preventDefault(),h(""),!i.fullName||!i.mobileNumber||!i.password){h("All required fields must be filled ❌");return}if(!/^\d{10}$/.test(i.mobileNumber)){h("Mobile number must be 10 digits ❌");return}if(i.password.length<6){h("Password must be at least 6 characters ❌");return}if(i.password!==i.confirmPassword){h("Passwords do not match ❌");return}try{if(Ee(!0),(await Vt.post("/citizen/check-mobile",{mobileNo:i.mobileNumber})).data.success){h("हा mobile number already registered आहे ❌ Please Login करा."),Ee(!1);return}}catch(F){if(F?.response?.status!==404){h("Server Error. Please try again ❌"),Ee(!1);return}}const J=Math.floor(1e5+Math.random()*9e5).toString();W(J),ae(60),re(!1),H(["","","","","",""]);const w=`Dear Citizen ${J} is OTP for VVCMC Jan Samvaad Portal login for citizen registration.VVCMC SAAVI INFINET`,L=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379312&number=${i.mobileNumber}&message=${encodeURIComponent(w)}`;fetch(L,{method:"GET",mode:"no-cors"}).catch(()=>{}),T("otp"),Ee(!1),setTimeout(()=>K.current[0]?.focus(),120)},ze=async()=>{const Q=_.join("");if(Q.length<6){h("Enter 6 digit OTP ❌");return}if(I<=0){h("OTP expired! Please resend ❌");return}if(Q!==V){h("Wrong OTP! Please try again ❌"),H(["","","","","",""]),setTimeout(()=>K.current[0]?.focus(),50);return}try{f(!0),h("");const J=await Vt.post("/citizen/register",{fullName:i.fullName,userName:i.userName,mobileNumber:i.mobileNumber,address:i.address,pincode:i.pincode,email:i.email,password:i.password});if(!J.data.success){h(J.data.message||"Registration failed ❌");return}x(!0),setTimeout(()=>l("/login"),2e3)}catch(J){h(J?.response?.data?.message||"Server Error ❌")}finally{f(!1)}},O=(Q,J)=>{if(!/^[0-9]?$/.test(J))return;const w=[..._];w[Q]=J,H(w),J&&Q<5&&K.current[Q+1]?.focus()},$=(Q,J)=>{J.key==="Backspace"&&!_[Q]&&Q>0&&K.current[Q-1]?.focus()},ne=Q=>{Q.preventDefault();const J=Q.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),w=[..._];J.split("").forEach((L,F)=>{w[F]=L}),H(w),K.current[Math.min(J.length,5)]?.focus()};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Playfair+Display:wght@500;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --teal:       #4CABC1;
          --teal-dark:  #49ACC3;
          --gold:       #CA9D28;
          --gold-light: #CE9A54;
          --cream:      #F5E7C2;
          --green:      #66A962;
          --deep:       #187480;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .rp-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          padding: 24px 0;
        }

        .rp-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.75) saturate(1.15);
          transition: transform 14s ease;
        }
        .rp-root:hover .rp-bg { transform: scale(1.02); }

        .rp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(24,116,128,0.45) 0%,
            rgba(73,172,195,0.38) 30%,
            rgba(24,116,128,0.60) 60%,
            rgba(12,70,80,0.82) 100%
          );
        }

        .rp-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--gold) 0%, var(--gold-light) 22%,
            var(--teal) 45%, var(--teal-dark) 65%,
            var(--green) 85%, var(--cream) 100%
          );
          z-index: 20;
        }

        /* ── WRAPPER ── */
        .rp-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: stretch;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.52),
            0 0 0 1px rgba(202,157,40,0.20),
            inset 0 1px 0 rgba(245,231,194,0.07);
          transition: transform 0.85s cubic-bezier(0.22,0.9,0.36,1),
                      opacity   0.60s ease;
        }

        /* ── LEFT CARD ── */
        .rp-card {
          width: 500px;
          background: linear-gradient(
            160deg,
            rgba(12,68,80,0.80) 0%,
            rgba(24,116,128,0.62) 50%,
            rgba(12,68,80,0.85) 100%
          );
          backdrop-filter: blur(38px) saturate(2);
          -webkit-backdrop-filter: blur(38px) saturate(2);
          border: 1px solid rgba(76,171,193,0.20);
          border-right: 1px solid rgba(202,157,40,0.18);
          padding: 28px 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-y: auto;
          max-height: 96vh;
        }
        .rp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }

        /* ── Logo row ── */
        .rp-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(202,157,40,0.22);
          position: relative;
          flex-shrink: 0;
        }
        .rp-logo-row::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 55px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
        }
        .rp-logo-img {
          width: 50px; height: 50px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--gold-light);
          box-shadow: 0 0 0 3px rgba(202,157,40,0.15), 0 4px 20px rgba(0,0,0,0.32);
          flex-shrink: 0;
        }
        .rp-logo-texts { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .rp-logo-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px; font-weight: 700;
          color: var(--gold-light); line-height: 1.3;
          text-shadow: 0 1px 10px rgba(0,0,0,0.4);
        }
        .rp-logo-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px; font-weight: 500;
          color: rgba(245,231,194,0.60); letter-spacing: 0.4px;
        }

        /* Page heading */
        .rp-page-title {
          font-size: 24px; font-weight: 800;
          color: var(--cream); margin-bottom: 2px;
          font-family: 'Outfit', sans-serif; letter-spacing: -0.5px;
          text-shadow: 0 1px 12px rgba(0,0,0,0.3);
        }
        .rp-page-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px;
          color: rgba(245,231,194,0.52);
          margin-bottom: 16px;
        }

        /* ── ERROR / SUCCESS boxes ── */
        .rp-error {
          background: rgba(220,38,38,0.18);
          border: 1px solid rgba(220,38,38,0.38);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 12.5px;
          color: #fca5a5;
          margin-bottom: 14px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
        }
        .rp-success {
          background: rgba(102,169,98,0.18);
          border: 1px solid rgba(102,169,98,0.40);
          border-radius: 12px;
          padding: 20px;
          font-size: 14px;
          color: #86efac;
          font-weight: 600;
          text-align: center;
          margin-bottom: 16px;
          font-family: 'Outfit', sans-serif;
        }

        /* ── 2-column grid ── */
        .rp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 16px;
        }
        .rp-fld      { margin-bottom: 12px; }
        .rp-fld.full { grid-column: 1 / -1; }

        .rp-flbl {
          display: block; font-size: 11px; font-weight: 700;
          color: rgba(245,231,194,0.72); margin-bottom: 6px;
          font-family: 'Outfit', sans-serif; letter-spacing: 0.8px;
          text-transform: uppercase;
        }
        .rp-req { color: #fca5a5; margin-left: 2px; }

        .rp-fwrap { position: relative; }

        .rp-finput {
          width: 100%;
          padding: 10px 14px 10px 40px;
          border: 1px solid rgba(76,171,193,0.20);
          border-radius: 10px;
          font-size: 13px; color: #fff;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          outline: none; transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06), 0 2px 8px rgba(0,0,0,0.14);
        }
        .rp-finput:focus {
          background: rgba(24,116,128,0.62);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.18), inset 0 1px 0 rgba(245,231,194,0.08);
        }
        .rp-finput::placeholder { color: rgba(245,231,194,0.28); font-size: 12px; font-family: 'Tiro Devanagari Marathi', serif; }
        .rp-finput.no-icon { padding-left: 14px; }

        .rp-ficon {
          position: absolute; left: 12px; top: 50%;
          transform: translateY(-50%); font-size: 14px;
          pointer-events: none; opacity: 0.48;
        }
        .rp-pbtn {
          position: absolute; right: 11px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer; font-size: 14px;
          color: rgba(245,231,194,0.42); padding: 0;
          display: flex; align-items: center; transition: color .2s;
        }
        .rp-pbtn:hover { color: var(--cream); }

        .rp-input-hint {
          font-size: 10.5px;
          color: rgba(245,231,194,0.32);
          margin-top: 4px;
          font-family: 'Outfit', sans-serif;
        }

        /* ── BUTTONS ── */
        .rp-sbtn {
          width: 100%; padding: 13px; margin-top: 6px;
          background: linear-gradient(135deg, var(--green) 0%, #4e9148 100%);
          color: #fff; font-size: 13px; font-weight: 800; letter-spacing: 1.2px;
          border: none; border-radius: 12px; cursor: pointer; transition: all 0.22s;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(102,169,98,0.42), inset 0 1px 0 rgba(245,231,194,0.10);
          font-family: 'Outfit', sans-serif; text-transform: uppercase;
        }
        .rp-sbtn::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,231,194,0.30), transparent);
        }
        .rp-sbtn::after {
          content: ''; position: absolute; top: 0; left: -120%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg); transition: left 0.55s ease;
        }
        .rp-sbtn:hover::after { left: 140%; }
        .rp-sbtn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3d7a39 0%, var(--green) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(102,169,98,0.52);
        }
        .rp-sbtn:active:not(:disabled) { transform: translateY(0); }
        .rp-sbtn:disabled { opacity: 0.42; cursor: not-allowed; }

        .rp-sbtn.teal {
          background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
          box-shadow: 0 4px 20px rgba(76,171,193,0.42);
        }
        .rp-sbtn.teal:hover:not(:disabled) {
          background: linear-gradient(135deg, #3796ae 0%, var(--teal) 100%);
          box-shadow: 0 10px 28px rgba(76,171,193,0.52);
        }

        /* ── OTP boxes ── */
        .otp-row {
          display: flex; gap: 8px;
          justify-content: center; margin-bottom: 16px;
        }
        .otp-box {
          width: 46px; height: 52px;
          border: 1px solid rgba(76,171,193,0.22);
          border-radius: 12px;
          font-size: 22px; font-weight: 800;
          text-align: center;
          color: var(--cream);
          font-family: 'Outfit', sans-serif;
          outline: none;
          background: rgba(12,68,80,0.58);
          backdrop-filter: blur(10px);
          transition: all .18s;
          box-shadow: inset 0 1px 0 rgba(245,231,194,0.06);
        }
        .otp-box:focus {
          background: rgba(24,116,128,0.65);
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(76,171,193,0.20);
          color: #fff;
        }
        .otp-box:not(:placeholder-shown) {
          background: rgba(24,116,128,0.55);
          border-color: var(--green);
          box-shadow: 0 0 0 2px rgba(102,169,98,0.28);
        }

        /* Timer */
        .otp-timer {
          text-align: center; font-size: 12px;
          color: rgba(245,231,194,0.60);
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .otp-timer strong { font-size: 13.5px; }
        .resend-btn {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px; font-weight: 700;
          cursor: pointer; transition: all .2s;
        }
        .resend-btn:disabled { color: rgba(245,231,194,0.22); cursor: not-allowed; }
        .resend-btn:not(:disabled) { color: var(--gold-light); }
        .resend-btn:not(:disabled):hover { color: var(--gold); text-decoration: underline; }

        /* Back btn */
        .otp-back {
          background: none; border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 600;
          color: rgba(245,231,194,0.52);
          cursor: pointer;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 14px; padding: 0;
          transition: color .2s;
        }
        .otp-back:hover { color: var(--teal); }

        /* Footer */
        .rp-signin {
          margin-top: 14px; text-align: center; font-size: 13px;
          color: rgba(245,231,194,0.58); font-family: 'Outfit', sans-serif;
        }
        .rp-signin span.rp-link {
          color: var(--cream); font-weight: 700;
          text-decoration: none; margin-left: 5px; padding-bottom: 1px;
          border-bottom: 1.5px solid var(--gold-light); transition: all .2s; cursor: pointer;
        }
        .rp-signin span.rp-link:hover { color: var(--gold-light); border-color: var(--gold); }

        .rp-cfooter {
          margin-top: auto; padding-top: 14px; flex-shrink: 0;
          border-top: 1px solid rgba(202,157,40,0.14);
          display: flex; align-items: center; justify-content: center; gap: 7px;
        }
        .rp-cfdot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--green); box-shadow: 0 0 8px var(--green);
          animation: dotPulse 2.5s infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.45; transform:scale(1.7); }
        }
        .rp-cfooter span { font-size: 10.5px; color: rgba(245,231,194,0.28); letter-spacing: 0.3px; }

        /* ══════════════ MAYOR PANEL ══════════════ */
        .rp-mayor-panel {
          width: 300px;
          background: linear-gradient(155deg, var(--teal-dark) 0%, var(--deep) 38%, #0b5e6b 72%, #093e4a 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 26px;
          position: relative; overflow: hidden;
          transition: transform 0.80s cubic-bezier(0.22,0.9,0.36,1) 0.10s,
                      opacity   0.65s ease 0.10s;
        }

        .rp-mayor-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--cream), var(--gold-light), var(--gold));
          background-size: 250%;
          animation: shimmerBar 3.5s linear infinite;
        }
        @keyframes shimmerBar {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        .rp-mayor-panel::after {
          content: '';
          position: absolute; top: 42%; left: 50%;
          transform: translate(-50%, -50%);
          width: 250px; height: 250px; border-radius: 50%;
          background: radial-gradient(circle, rgba(76,171,193,0.16) 0%, transparent 68%);
          pointer-events: none;
        }

        .rp-mp-icon {
          position: absolute; font-size: 30px; opacity: 0.14;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); transition: opacity .35s;
        }
        .rp-mayor-panel:hover .rp-mp-icon { opacity: 0.24; }
        .rp-mp-icon.tl { top: 26px;  left: 20px; }
        .rp-mp-icon.tr { top: 26px;  right: 20px; }
        .rp-mp-icon.bl { bottom: 48px; left: 20px; }
        .rp-mp-icon.br { bottom: 48px; right: 20px; }

        .rp-mayor-photo-wrap { position: relative; margin-bottom: 20px; z-index: 2; }
        .rp-mayor-ring {
          width: 152px; height: 152px; border-radius: 50%; padding: 5px;
          background: conic-gradient(var(--gold) 0deg, var(--gold-light) 90deg, var(--cream) 180deg, var(--gold-light) 260deg, var(--gold) 360deg);
          box-shadow: 0 8px 36px rgba(0,0,0,0.38), 0 0 0 3px rgba(202,157,40,0.18);
        }
        .rp-mayor-photo {
          width: 100%; height: 100%; border-radius: 50%;
          object-fit: cover; object-position: top center;
          border: 3px solid rgba(255,255,255,0.92); display: block;
        }
        .rp-mayor-badge {
          position: absolute; bottom: 3px; right: 3px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #fff 0%, var(--cream) 100%);
          display: flex; align-items: center; justify-content: center; font-size: 17px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.28); border: 2px solid rgba(255,255,255,0.95);
        }

        .rp-mayor-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 21px; font-weight: 700; color: #fff; text-align: center;
          margin-bottom: 6px; text-shadow: 0 2px 14px rgba(0,0,0,0.30);
          line-height: 1.3; z-index: 2; position: relative;
        }
        .rp-mayor-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 11.5px; color: rgba(245,231,194,0.72);
          text-align: center; line-height: 1.6;
          margin-bottom: 18px; z-index: 2; position: relative;
        }

        /* Info card in mayor panel */
        .rp-mayor-info {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 14px 16px;
          width: 100%;
          z-index: 2; position: relative;
        }
        .rp-mayor-info-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 12.5px;
          color: rgba(245,231,194,0.88);
          font-family: 'Tiro Devanagari Marathi', serif;
          padding: 7px 0;
        }
        .rp-mayor-info-item:not(:last-child) {
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }
        .rp-mayor-info-icon { font-size: 17px; flex-shrink: 0; }

        .rp-mayor-bar-wrap {
          width: 110px; height: 5px; background: rgba(255,255,255,0.14);
          border-radius: 999px; overflow: hidden; z-index: 2; position: relative;
          margin-bottom: 18px;
        }
        .rp-mayor-bar {
          width: 65%; height: 100%;
          background: linear-gradient(90deg, var(--green), #7dd87a);
          border-radius: 999px; box-shadow: 0 0 10px rgba(102,169,98,0.65);
          animation: barGlow 2.5s ease-in-out infinite;
        }
        @keyframes barGlow { 0%,100% { opacity:1; } 50% { opacity:0.60; } }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp .28s ease both; }

        @media (max-width: 768px) {
          .rp-mayor-panel { display: none; }
          .rp-card { border-right: 1px solid rgba(76,171,193,0.20); border-radius: 24px; width: 92%; max-width: 500px; }
          .rp-wrapper { border-radius: 24px; }
          .rp-grid { grid-template-columns: 1fr; }
          .rp-fld.full { grid-column: 1; }
        }
      `}),u.jsxs("div",{className:"rp-root",children:[u.jsx("div",{className:"rp-bg",style:{backgroundImage:`url(${Lm})`}}),u.jsx("div",{className:"rp-overlay"}),u.jsx("div",{className:"rp-stripe"}),u.jsxs("div",{className:"rp-wrapper",style:{opacity:U?1:0,transform:U?"translateX(0)":"translateX(160px)"},children:[u.jsxs("div",{className:"rp-card",children:[u.jsxs("div",{className:"rp-logo-row",children:[u.jsx("img",{src:zu,alt:"VVCMC",className:"rp-logo-img",style:{objectPosition:"top center"}}),u.jsxs("div",{className:"rp-logo-texts",children:[u.jsx("div",{className:"rp-logo-name",children:"वसई-विरार शहर महानगरपालिका"}),u.jsx("div",{className:"rp-logo-sub",children:"जन संवाद · Citizen Portal"})]})]}),u.jsxs("div",{className:"fade-up",children:[u.jsx("p",{className:"rp-page-title",children:"Account तयार करा"}),u.jsx("p",{className:"rp-page-sub",children:"Mayor Appointment बुक करण्यासाठी register करा"}),b?u.jsxs("div",{className:"rp-success",children:["✅ Registration successful!",u.jsx("br",{}),u.jsx("span",{style:{fontSize:13,fontWeight:400,opacity:.8},children:"Login page वर redirect होत आहे..."})]}):B==="otp"?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"otp-back",onClick:()=>{T("form"),H(["","","","","",""]),h("")},children:"← Go Back"}),u.jsxs("p",{style:{fontSize:12.5,color:"rgba(245,231,194,0.62)",marginBottom:16,fontFamily:"'Outfit',sans-serif"},children:["OTP sent to"," ",u.jsxs("span",{style:{color:"#CE9A54",fontWeight:700},children:["+91 ******",i.mobileNumber.slice(-3)]})]}),d&&u.jsxs("div",{className:"rp-error",children:["⚠️ ",d]}),u.jsx("div",{className:"otp-row",onPaste:ne,children:_.map((Q,J)=>u.jsx("input",{ref:w=>K.current[J]=w,className:"otp-box",type:"tel",maxLength:1,value:Q,placeholder:"·",onChange:w=>O(J,w.target.value),onKeyDown:w=>$(J,w)},J))}),u.jsxs("div",{className:"otp-timer",children:[I>0?u.jsxs(u.Fragment,{children:["OTP expires in:"," ",u.jsx("strong",{style:{color:I<=15?"#ff6b6b":"#CE9A54"},children:X(I)})]}):u.jsx("span",{style:{color:"#ff6b6b",fontWeight:600},children:"OTP expired!"}),u.jsxs("div",{style:{marginTop:6},children:["Did not receive OTP?"," ",u.jsx("button",{className:"resend-btn",onClick:be,disabled:!P,children:"Resend OTP"})]})]}),u.jsx("button",{className:"rp-sbtn teal",onClick:ze,disabled:_.join("").length<6||c,children:c?"⏳ Registering...":"✅ Verify & Register"})]}):u.jsxs(u.Fragment,{children:[d&&u.jsxs("div",{className:"rp-error",children:["⚠️ ",d]}),u.jsxs("form",{onSubmit:be,children:[u.jsxs("div",{className:"rp-grid",children:[u.jsxs("div",{className:"rp-fld",children:[u.jsxs("label",{className:"rp-flbl",children:["Full Name ",u.jsx("span",{className:"rp-req",children:"*"})]}),u.jsxs("div",{className:"rp-fwrap",children:[u.jsx("span",{className:"rp-ficon",children:"👤"}),u.jsx("input",{className:"rp-finput",type:"text",placeholder:"आपले पूर्ण नाव",value:i.fullName,onChange:oe("fullName"),autoFocus:!0})]})]}),u.jsxs("div",{className:"rp-fld",children:[u.jsx("label",{className:"rp-flbl",children:"User Name"}),u.jsxs("div",{className:"rp-fwrap",children:[u.jsx("span",{className:"rp-ficon",children:"🪪"}),u.jsx("input",{className:"rp-finput",type:"text",placeholder:"Username",value:i.userName,onChange:oe("userName")})]})]}),u.jsxs("div",{className:"rp-fld",children:[u.jsxs("label",{className:"rp-flbl",children:["Mobile Number ",u.jsx("span",{className:"rp-req",children:"*"})]}),u.jsxs("div",{className:"rp-fwrap",children:[u.jsx("span",{className:"rp-ficon",children:"📱"}),u.jsx("input",{className:"rp-finput",type:"tel",placeholder:"10 digit mobile",value:i.mobileNumber,onChange:oe("mobileNumber"),maxLength:10})]})]}),u.jsxs("div",{className:"rp-fld",children:[u.jsx("label",{className:"rp-flbl",children:"Email"}),u.jsxs("div",{className:"rp-fwrap",children:[u.jsx("span",{className:"rp-ficon",children:"✉️"}),u.jsx("input",{className:"rp-finput",type:"email",placeholder:"Email (optional)",value:i.email,onChange:oe("email")})]})]}),u.jsxs("div",{className:"rp-fld",children:[u.jsx("label",{className:"rp-flbl",children:"Address"}),u.jsxs("div",{className:"rp-fwrap",children:[u.jsx("span",{className:"rp-ficon",children:"🏠"}),u.jsx("input",{className:"rp-finput",type:"text",placeholder:"Address",value:i.address,onChange:oe("address")})]})]}),u.jsxs("div",{className:"rp-fld",children:[u.jsx("label",{className:"rp-flbl",children:"Pincode"}),u.jsxs("div",{className:"rp-fwrap",children:[u.jsx("span",{className:"rp-ficon",children:"📍"}),u.jsx("input",{className:"rp-finput",type:"text",placeholder:"Pincode",value:i.pincode,onChange:oe("pincode"),maxLength:6})]})]}),u.jsxs("div",{className:"rp-fld",children:[u.jsxs("label",{className:"rp-flbl",children:["Password ",u.jsx("span",{className:"rp-req",children:"*"})]}),u.jsxs("div",{className:"rp-fwrap",children:[u.jsx("span",{className:"rp-ficon",children:"🔒"}),u.jsx("input",{className:"rp-finput",type:g?"text":"password",placeholder:"Min. 6 characters",value:i.password,onChange:oe("password"),style:{paddingRight:38}}),u.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>y(!g),tabIndex:-1,children:g?"🙈":"👁️"})]}),u.jsx("div",{className:"rp-input-hint",children:"किमान 6 characters"})]}),u.jsxs("div",{className:"rp-fld",children:[u.jsxs("label",{className:"rp-flbl",children:["Confirm Password ",u.jsx("span",{className:"rp-req",children:"*"})]}),u.jsxs("div",{className:"rp-fwrap",children:[u.jsx("span",{className:"rp-ficon",children:"🔐"}),u.jsx("input",{className:"rp-finput",type:v?"text":"password",placeholder:"Password परत टाका",value:i.confirmPassword,onChange:oe("confirmPassword"),style:{paddingRight:38}}),u.jsx("button",{type:"button",className:"rp-pbtn",onClick:()=>M(!v),tabIndex:-1,children:v?"🙈":"👁️"})]})]})]}),u.jsx("button",{type:"submit",className:"rp-sbtn",disabled:xe||!i.fullName||!i.mobileNumber||!i.password||!i.confirmPassword,children:xe?"⏳ Sending OTP...":"📱 Send OTP & Register"})]}),u.jsxs("p",{className:"rp-signin",children:["Already have an account?",u.jsx("span",{className:"rp-link",onClick:()=>l("/login"),children:"Login"})]})]})]}),u.jsxs("div",{className:"rp-cfooter",children:[u.jsx("div",{className:"rp-cfdot"}),u.jsx("span",{children:"Secure Citizen Portal · All rights reserved"})]})]}),u.jsxs("div",{className:"rp-mayor-panel",style:{opacity:U?1:0,transform:U?"translate(0,0)":"translate(80px,-60px)"},children:[u.jsx("span",{className:"rp-mp-icon tl",children:"🏛️"}),u.jsx("span",{className:"rp-mp-icon tr",children:"🤝"}),u.jsx("span",{className:"rp-mp-icon bl",children:"🏢"}),u.jsx("span",{className:"rp-mp-icon br",children:"🏙️"}),u.jsxs("div",{className:"rp-mayor-photo-wrap",children:[u.jsx("div",{className:"rp-mayor-ring",children:u.jsx("img",{src:zu,alt:"Mayor",className:"rp-mayor-photo"})}),u.jsx("div",{className:"rp-mayor-badge",children:"🪑"})]}),u.jsx("p",{className:"rp-mayor-name",children:"मा. श्री.अजीव पाटील"}),u.jsx("p",{className:"rp-mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),u.jsx("div",{className:"rp-mayor-bar-wrap",children:u.jsx("div",{className:"rp-mayor-bar"})}),u.jsxs("div",{className:"rp-mayor-info",children:[u.jsxs("div",{className:"rp-mayor-info-item",children:[u.jsx("span",{className:"rp-mayor-info-icon",children:"📅"}),u.jsx("span",{children:"Appointment सहज बुक करा"})]}),u.jsxs("div",{className:"rp-mayor-info-item",children:[u.jsx("span",{className:"rp-mayor-info-icon",children:"🔔"}),u.jsx("span",{children:"SMS द्वारे notification मिळवा"})]}),u.jsxs("div",{className:"rp-mayor-info-item",children:[u.jsx("span",{className:"rp-mayor-info-icon",children:"🛡️"}),u.jsx("span",{children:"Secure Government Portal"})]})]})]})]})]})]})}const du=[{label:"Personal Details",icon:"👤"},{label:"Appointment",icon:"📅"},{label:"Details",icon:"ℹ️"},{label:"Photo",icon:"📷"},{label:"Review & Submit",icon:"📋"}];function to(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—"}function pu(l){if(!l)return[];const i=l.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);if(!i)return[];const s=parseInt(i[1]),c=parseInt(i[2]),f=parseInt(i[3]),d=parseInt(i[4]),h=[];let b=s*60+c;const x=f*60+d;for(;b+15<=x;){const g=String(Math.floor(b/60)).padStart(2,"0"),y=String(b%60).padStart(2,"0"),v=String(Math.floor((b+15)/60)).padStart(2,"0"),M=String((b+15)%60).padStart(2,"0");h.push(`${g}:${y} - ${v}:${M}`),b+=15}return h}function V2(){const l=Oa(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[s,c]=j.useState(0),[f,d]=j.useState(!1),[h,b]=j.useState([]),[x,g]=j.useState(null),[y,v]=j.useState(null),[M,U]=j.useState("forward"),[z,B]=j.useState([]),[T,_]=j.useState(!1),[H,V]=j.useState(!1),[W,I]=j.useState(!1),[ae,P]=j.useState(!1),[re,xe]=j.useState(null),[Ee,K]=j.useState(null),oe=(Z,te="success")=>{g({msg:Z,type:te}),setTimeout(()=>g(null),3500)},[X,be]=j.useState({username:i?.username||"",fullName:i?.fullName||"",mobileNumber:i?.mobileNumber||"",email:i?.email||"",address:"",pincode:"",preferredDate:"",slotTime:"",slotStart:"",slotEnd:"",microSlot:"",purpose:"",numberOfVisitors:"1",visitedBefore:!1,ward:"",visitorPhoto:null,photoPreview:null}),ze=Z=>te=>be(fe=>({...fe,[Z]:te.target.value})),O=j.useRef("");j.useEffect(()=>{O.current=X.microSlot},[X.microSlot]),j.useEffect(()=>{if(!i?._id)return;(async()=>{try{I(!0);const te=await Vt.get(`/citizen/by-id/${i._id}`);if(te.data?.success&&te.data?.citizen){const fe=te.data.citizen;be(ye=>({...ye,username:fe.username||ye.username,fullName:fe.fullName||ye.fullName,mobileNumber:fe.mobileNumber||ye.mobileNumber,email:fe.email||ye.email,pincode:fe.pincode||ye.pincode,address:fe.address||ye.address,ward:te.data.lastWard||ye.ward})),te.data.lastPhoto&&K(te.data.lastPhoto),xe(te.data.nextVisitNumber),P(!0)}}catch{}finally{I(!1)}})()},[]),j.useEffect(()=>{Vt.get("/availability/get").then(Z=>{Z.data&&b(Array.isArray(Z.data)?Z.data:Z.data.data||[])}).catch(()=>{})},[]);const $=Z=>(Z||"").replace(/\s*-\s*/g,"-").trim(),ne=Z=>{if(Z?.success===!1)return new Set;const te=Z?.data?.slots||Z?.slots||[];return new Set(te.filter(fe=>fe.booked).map(fe=>$(fe.microSlot)))},Q=async(Z,te,fe,ye)=>{try{const It=Z.replace(/ /g,"%20"),Xt=te.replace(/ /g,"%20"),Pe=await Vt.get(`/citizen/micro-slots?date=${It}&slotTime=${Xt}`),on=ne(Pe.data),_a=fe.map(Qt=>({...Qt,booked:on.has($(Qt.microSlot))}));return B(_a),V(_a.length>0&&_a.every(Qt=>Qt.booked)),ye&&on.has($(ye))&&(oe("⚠️ तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा.","error"),be(Qt=>({...Qt,microSlot:""}))),on}catch{return new Set}};j.useEffect(()=>{if(s!==1||!X.preferredDate||!X.slotTime){(!X.preferredDate||!X.slotTime)&&(B([]),V(!1));return}let Z=!1;const te=X.preferredDate,fe=X.slotTime,ye=pu(fe).map(Xt=>({microSlot:Xt,booked:!1}));B(ye),V(!1),_(!0),Q(te,fe,ye,O.current).finally(()=>{Z||_(!1)});const It=setInterval(()=>{if(Z)return;const Xt=pu(fe).map(Pe=>({microSlot:Pe,booked:!1}));Q(te,fe,Xt,O.current)},3e4);return()=>{Z=!0,clearInterval(It)}},[X.preferredDate,X.slotTime,s]);const J=j.useRef(null),w=j.useRef(null),L=j.useRef(null),[F,ee]=j.useState(!1),[ue,ge]=j.useState(""),Te=async()=>{ge("");try{const Z=await navigator.mediaDevices.getUserMedia({video:!0});L.current=Z,ee(!0),setTimeout(()=>{J.current&&(J.current.srcObject=Z,J.current.play())},100)}catch{ge("Camera access denied. Browser permission द्या.")}},at=()=>{const Z=J.current,te=w.current;!Z||!te||(te.width=Z.videoWidth,te.height=Z.videoHeight,te.getContext("2d").drawImage(Z,0,0),te.toBlob(fe=>{const ye=new File([fe],`photo-${Date.now()}.jpg`,{type:"image/jpeg"}),It=URL.createObjectURL(fe);be(Xt=>({...Xt,visitorPhoto:ye,photoPreview:It})),He()},"image/jpeg"))},He=()=>{L.current&&(L.current.getTracks().forEach(Z=>Z.stop()),L.current=null),ee(!1)},rn=new Date().toISOString().split("T")[0],ka=h.filter(Z=>Z.date>=rn),Di=ka.find(Z=>Z.date===X.preferredDate)?.timeSlots||[],ra=s===0?!X.fullName||!X.mobileNumber||!X.address:s===1?!X.preferredDate||!X.slotTime||!X.microSlot:s===2?!X.purpose||!X.ward:s===3?!X.visitorPhoto:!1,Nl=()=>{U("forward"),c(Z=>Z+1)},El=()=>{U("back"),c(Z=>Z-1)},Lo=async()=>{if(!i){l("/login");return}try{d(!0);try{const Zt=pu(X.slotTime).map(Je=>({microSlot:Je,booked:!1})),Ho=X.preferredDate.replace(/ /g,"%20"),Mi=X.slotTime.replace(/ /g,"%20"),qo=await Vt.get(`/citizen/micro-slots?date=${Ho}&slotTime=${Mi}`),Ui=ne(qo.data),sn=Zt.map(Je=>({...Je,booked:Ui.has($(Je.microSlot))}));if(B(sn),Ui.has($(X.microSlot))){oe("❌ हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा.","error"),be(Je=>({...Je,microSlot:""})),d(!1);return}}catch{}const Z=i?._id&&i._id!=="undefined"?i._id:"",te=new FormData;te.append("citizenId",Z),te.append("fullName",X.fullName),te.append("mobileNumber",X.mobileNumber),te.append("email",X.email||""),te.append("address",X.address),te.append("pincode",X.pincode||""),te.append("preferredDate",X.preferredDate),te.append("slotTime",X.slotTime),te.append("microSlot",X.microSlot),te.append("purpose",X.purpose),te.append("numberOfVisitors",X.numberOfVisitors),te.append("visitedBefore",String(X.visitedBefore)),te.append("ward",X.ward),te.append("submittedById",Z),te.append("submittedByName",i.fullName||""),X.visitorPhoto&&te.append("visitorPhoto",X.visitorPhoto);const fe=await Vt.post("/citizen/book-appointment",te,{headers:{"Content-Type":void 0}});if(!fe.data.success){oe(fe.data.message||"Booking failed ❌","error");return}const ye=fe.data.data,It=ye.mobileNumber||X.mobileNumber,Xt=ye.fullName||X.fullName,Pe=Zt=>Zt?new Date(Zt+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—",on={pending:"Pending — Awaiting Mayor's Approval",approved:"Approved by Respected Mayor Ajiv Patil Sir",rejected:"Rejected by Admin",cancelled:"Cancelled"}[ye.status]||ye.status,_a=`Dear ${Xt}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been successfully booked. Appointment Status: ${on} Date: ${Pe(ye.preferredDate)} Time Slot: ${ye.microSlot} Token No: ${ye.tokenId} Please carry this Token No on your visit day. SAAVI INFINET`,Qt=`https://smsfortius.work/V2/apikey.php?apikey=dWaYXxSkYneCVvUL&senderid=SAAVIT&templateid=1607100000000379324&number=${It}&message=${encodeURIComponent(_a)}`;fetch(Qt,{method:"GET",mode:"no-cors"}).then(()=>console.log(`✅ SMS sent to ${It}`)).catch(Zt=>console.error("SMS error:",Zt)),v(ye)}catch(Z){oe(Z?.response?.data?.message||"Server Error ❌","error")}finally{d(!1)}};return y?u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
          @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        `}),u.jsx("div",{className:"book-root",children:u.jsxs("div",{style:{background:"#fff",borderRadius:20,padding:"48px 40px",maxWidth:520,width:"100%",textAlign:"center",boxShadow:"0 8px 40px rgba(76,171,193,0.18)",border:"1.5px solid #b2e4ee",animation:"fadeUpIn .5s ease"},children:[u.jsx("div",{style:{width:90,height:90,borderRadius:"50%",background:"linear-gradient(135deg,#4CABC1,#66A962)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,margin:"0 auto 20px",animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both",boxShadow:"0 8px 24px rgba(76,171,193,0.35)"},children:"✅"}),u.jsx("h2",{style:{fontSize:26,fontWeight:800,color:"#187488",marginBottom:8,fontFamily:"'Plus Jakarta Sans',sans-serif",background:"linear-gradient(135deg,#4CABC1,#66A962)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Appointment Booked!"}),u.jsx("p",{style:{color:"#4a5568",marginBottom:24,fontSize:14,fontWeight:500},children:"तुमची appointment successfully book झाली आहे"}),u.jsx("div",{style:{background:"linear-gradient(135deg,#f0faf9,#f5fef5)",border:"1.5px solid #b2e4ee",borderRadius:12,padding:"20px 24px",marginBottom:24,textAlign:"left"},children:[["Token ID",y.tokenId],["Date",to(y.preferredDate)],["Slot",y.slotTime],["Your Time",y.microSlot||"—"],["Status","⏳ Pending — Admin approval बाकी आहे"]].map(([Z,te])=>u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid #d4eff5",fontSize:13},children:[u.jsx("span",{style:{color:"#5a7a88",fontWeight:600},children:Z}),u.jsx("span",{style:{color:"#187488",fontWeight:700},children:te})]},Z))}),y.qrCode&&u.jsxs("div",{style:{marginBottom:20},children:[u.jsx("p",{style:{fontSize:12,color:"#6b7280",marginBottom:8,fontWeight:600},children:"QR Code — भेटीच्या दिवशी दाखवा"}),u.jsx("img",{src:y.qrCode,alt:"QR",style:{width:130,height:130}})]}),u.jsx("button",{onClick:()=>l("/my-appointments"),style:{width:"100%",padding:"13px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#4CABC1,#49ACC3)",color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)",transition:"transform .15s"},onMouseEnter:Z=>Z.target.style.transform="translateY(-1px)",onMouseLeave:Z=>Z.target.style.transform="none",children:"📋 My Appointments बघा"})]})})]}):u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; }

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

        .book-titlebar {
          padding: 26px 40px 0;
          border-bottom: 2px solid #c8b870;
          background: linear-gradient(135deg, #3a9aaf 0%, #2a7a8e 100%);
        }
        .book-titlebar h1 {
          font-size: 22px; font-weight: 800; color: #ffffff;
          margin: 0 0 20px; position: relative; display: inline-block;
          text-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .book-titlebar h1::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 48px; height: 3px; background: var(--gold); border-radius: 2px;
        }

        .stepper { display: flex; gap: 6px; padding-bottom: 0; }
        .step-tab {
          display: flex; align-items: center; gap: 8px; padding: 10px 20px;
          font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.65);
          border-bottom: 3px solid transparent; cursor: default; white-space: nowrap;
          transition: all .25s; margin-bottom: -2px; border-radius: 8px 8px 0 0;
          background: rgba(255,255,255,0.1);
        }
        .step-tab.done   { background: rgba(255,255,255,0.15); color: #c8e8d0; }
        .step-tab.active { background: var(--cream); color: var(--teal-dk); border-bottom-color: var(--gold); }
        .step-dot {
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; flex-shrink: 0; transition: all .25s;
        }
        .step-dot.done    { background: var(--green); color: #fff; }
        .step-dot.active  { background: var(--gold); color: #fff; box-shadow: 0 2px 8px rgba(201,150,58,0.5); }
        .step-dot.pending { background: rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); }

        .book-body { padding: 32px 40px 0; background: var(--cream2); }
        .section-title { font-size: 17px; font-weight: 800; color: var(--text-hd); margin: 0 0 5px; }
        .section-sub   { font-size: 13px; color: var(--text-sm); font-weight: 500; margin: 0 0 24px; }

        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 13px; font-weight: 700; color: var(--text-hd); margin-bottom: 7px; }
        .field label .req { color: #c0392b; margin-left: 2px; }

        .f-input {
          width: 100%; padding: 11px 14px; font-size: 14px; font-weight: 500;
          border: 1.5px solid var(--border); border-radius: 8px; outline: none;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          box-sizing: border-box; transition: border-color .18s, box-shadow .18s;
          background: #fffef8; color: var(--text-bd);
        }
        .f-input:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(58,154,175,0.14); background: #fff; }
        .f-input::placeholder { color: #b0a070; font-weight: 400; }

        .f-grid-2     { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 20px; }
        .f-grid-2-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
        @media(max-width:640px){ .f-grid-2{ grid-template-columns:1fr; } .f-grid-2-col{ grid-template-columns:1fr; } }

        .date-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px,1fr)); gap: 10px; }
        .date-btn {
          padding: 11px 14px; border-radius: 8px; cursor: pointer; font-weight: 700;
          font-size: 13px; border: 1.5px solid var(--border); background: #fffef8;
          color: var(--text-bd); transition: all .18s; text-align: left;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .date-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); box-shadow: 0 3px 10px rgba(58,154,175,0.15); }
        .date-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 3px 10px rgba(58,154,175,0.2); font-weight: 800; }
        .date-btn .sub  { font-size: 11.5px; color: #8a7a50; font-weight: 500; margin-top: 3px; }

        .slot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 10px; }
        .slot-btn {
          padding: 10px 12px; border-radius: 8px; cursor: pointer; font-weight: 700;
          font-size: 12.5px; border: 1.5px solid var(--border); background: #fffef8;
          color: var(--text-bd); transition: all .18s;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .slot-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); }
        .slot-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 2px 8px rgba(58,154,175,0.2); font-weight: 800; }

        .info-box { background: #edf6f9; border: 1.5px solid #8acada; border-radius: 8px; padding: 11px 16px; font-size: 13px; font-weight: 600; color: #1a5f7a; margin-bottom: 16px; }
        .selected-box { background: #eaf7ee; border: 1.5px solid #7ec89a; border-radius: 8px; padding: 11px 16px; font-weight: 700; color: #1a5e2a; font-size: 13px; margin-bottom: 16px; }
        .empty-box { background: linear-gradient(135deg,#fffbeb,#fef3c7); border: 1.5px solid #e8c070; border-radius: 10px; padding: 28px; text-align: center; margin-bottom: 16px; }

        .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media(max-width:640px){ .review-grid{ grid-template-columns:1fr; } }
        .review-card { background: #fffef5; border: 1.5px solid #d4c070; border-radius: 10px; padding: 16px 18px; }
        .review-card-title { font-size: 11.5px; font-weight: 800; color: var(--teal-dk); text-transform: uppercase; letter-spacing: .8px; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
        .review-card-title::before { content:''; display:inline-block; width:14px; height:3px; background:var(--gold); border-radius:2px; }
        .review-row { display:flex; justify-content:space-between; padding:7px 0; border-bottom:1px solid #e8dfa0; font-size:13.5px; }
        .review-row:last-child { border-bottom:none; }
        .review-key { color:#6a5a30; font-weight:600; }
        .review-val { color:var(--text-hd); font-weight:700; text-align:right; max-width:55%; word-break:break-word; }

        .form-note { font-size:12.5px; color:#7a6a3a; font-weight:500; margin:12px 0 0; }

        .book-nav {
          display: flex; justify-content: flex-end; align-items: center; gap: 12px;
          padding: 24px 40px 32px; border-top: 1.5px solid #d4c070; margin-top: 28px; background: #fdf8ee;
        }
        .nav-cancel { padding: 11px 30px; border-radius: 8px; border: 1.5px solid #c0a850; background: #fffef0; color: var(--text-sm); font-weight: 700; font-size: 13.5px; cursor: pointer; font-family: 'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; transition: all .18s; }
        .nav-cancel:hover { background:#f5edd0; border-color:var(--gold); color:var(--gold2); }
        .nav-continue { padding: 11px 34px; border-radius: 8px; border: none; background: linear-gradient(135deg,#3a9aaf,#2e8a9e); color: #fff; font-weight: 800; font-size: 13.5px; cursor: pointer; font-family: 'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; display: flex; align-items: center; gap: 7px; transition: all .2s; box-shadow: 0 4px 14px rgba(58,154,175,0.4); letter-spacing: 0.2px; }
        .nav-continue:hover:not(:disabled) { background:linear-gradient(135deg,#2e8a9e,#1d6e80); transform:translateY(-1px); box-shadow:0 6px 18px rgba(58,154,175,0.45); }
        .nav-continue:disabled { background:#c8c0a0; cursor:not-allowed; box-shadow:none; color:#888070; }

        .step-progress-bar  { height:4px; background:#e8dfa0; }
        .step-progress-fill { height:100%; background:linear-gradient(90deg,var(--teal),var(--gold)); transition:width .4s cubic-bezier(.4,0,.2,1); }

        @keyframes slideInForward { from{opacity:0;transform:translateX(28px)} to{opacity:1;transform:none} }
        @keyframes slideInBack    { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:none} }
        .step-body-forward { animation: slideInForward .3s cubic-bezier(.4,0,.2,1) both; }
        .step-body-back    { animation: slideInBack    .3s cubic-bezier(.4,0,.2,1) both; }

        .toast { position:fixed; top:80px; right:20px; z-index:9999; padding:12px 24px; border-radius:10px; font-weight:700; font-size:14px; color:#fff; box-shadow:0 6px 24px rgba(0,0,0,0.18); animation:toastIn .3s; font-family:'Plus Jakarta Sans',sans-serif; }
        @keyframes toastIn { from{opacity:0;transform:translateY(-10px) scale(.95)} to{opacity:1;transform:none} }
        @keyframes spin     { to{transform:rotate(360deg)} }

        .photo-btn-primary { padding:11px 24px; border-radius:8px; background:linear-gradient(135deg,#3a9aaf,#2e8a9e); color:#fff; font-weight:700; font-size:13.5px; cursor:pointer; font-family:'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; border:none; box-shadow:0 3px 10px rgba(58,154,175,0.3); transition:all .18s; }
        .photo-btn-primary:hover { transform:translateY(-1px); box-shadow:0 5px 14px rgba(58,154,175,0.4); }
        .photo-btn-secondary { padding:11px 24px; border-radius:8px; border:1.5px solid var(--teal); background:#fffef8; color:var(--teal-dk); font-weight:700; font-size:13.5px; cursor:pointer; font-family:'Noto Sans','Mukta','Plus Jakarta Sans',sans-serif; transition:all .18s; }
        .photo-btn-secondary:hover { background:#dff2f6; }

        .radio-group { display:flex; gap:16px; margin-top:8px; }
        .radio-label { display:flex; align-items:center; gap:8px; cursor:pointer; font-size:14px; font-weight:700; color:var(--text-bd); padding:8px 20px; border-radius:8px; border:1.5px solid var(--border); background:#fffef8; transition:all .15s; }
        .radio-label.selected { border-color:var(--teal); background:#dff2f6; color:var(--teal-dk); }
        .radio-label input { accentColor:var(--teal); width:15px; height:15px; }

        .visit-badge { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#1d6e80,#3a9aaf); color:#fff; padding:10px 18px; border-radius:10px; font-size:13.5px; font-weight:700; margin-top:4px; box-shadow:0 3px 12px rgba(58,154,175,0.35); letter-spacing:0.2px; }
        .visit-badge .badge-number { background:var(--gold); color:#fff; font-size:15px; font-weight:800; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 6px rgba(201,150,58,0.5); flex-shrink:0; }

        .last-photo-hint { display:flex; align-items:center; gap:10px; background:#edf9f0; border:1.5px solid #7ec89a; border-radius:10px; padding:10px 14px; margin-bottom:14px; font-size:13px; font-weight:600; color:#1a5e2a; }
      `}),x&&u.jsx("div",{className:"toast",style:{background:x.type==="success"?"var(--teal)":"#dc2626"},children:x.msg}),u.jsx("div",{className:"book-root",children:u.jsxs("div",{className:"book-wrapper",children:[u.jsxs("div",{className:"book-titlebar",children:[u.jsx("h1",{children:"जनसंपर्क – Application Form"}),u.jsx("div",{className:"stepper",children:du.map((Z,te)=>{const fe=te<s?"done":te===s?"active":"pending";return u.jsxs("div",{className:`step-tab ${fe}`,children:[u.jsx("div",{className:`step-dot ${fe}`,children:fe==="done"?"✓":te+1}),Z.label]},te)})})]}),u.jsx("div",{className:"step-progress-bar",children:u.jsx("div",{className:"step-progress-fill",style:{width:`${(s+1)/du.length*100}%`}})}),u.jsx("div",{className:"book-body",children:u.jsxs("div",{className:M==="forward"?"step-body-forward":"step-body-back",children:[s===0&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Personal Information"}),u.jsx("p",{className:"section-sub",children:"Please provide your basic details to proceed"}),W&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--teal)",fontSize:13,fontWeight:600,marginBottom:16},children:[u.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"माहिती लोड होत आहे..."]}),ae&&re!==null&&u.jsxs("div",{className:"visit-badge",style:{marginBottom:20,display:"inline-flex"},children:[u.jsx("span",{className:"badge-number",children:re}),u.jsx("span",{children:re===1?"हे या नागरिकाचे पहिले भेट असेल 🎉":`हे या नागरिकाचे ${re}वे भेट असेल`})]}),u.jsxs("div",{className:"f-grid-2",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"User Name"}),u.jsx("input",{className:"f-input",value:X.username,onChange:ze("username"),placeholder:"Username"})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Full Name ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("input",{className:"f-input",value:X.fullName,onChange:ze("fullName"),placeholder:"आपले पूर्ण नाव"})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Mobile Number ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("input",{className:"f-input",type:"tel",value:X.mobileNumber,onChange:ze("mobileNumber"),maxLength:10,placeholder:"10 digit mobile"})]})]}),u.jsxs("div",{className:"f-grid-2",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Email Address"}),u.jsx("input",{className:"f-input",type:"email",value:X.email,onChange:ze("email"),placeholder:"Email (optional)"})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Pincode"}),u.jsx("input",{className:"f-input",value:X.pincode,onChange:ze("pincode"),maxLength:6,placeholder:"Pincode"})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Address ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("input",{className:"f-input",value:X.address,onChange:ze("address"),placeholder:"पूर्ण पत्ता"})]})]}),u.jsx("p",{className:"form-note",children:"* In order to process your appointment, all fields marked with an asterisk (*) are required."})]}),s===1&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Appointment Scheduling"}),u.jsx("p",{className:"section-sub",children:"Select your preferred date, time slot, and 15-minute appointment window"}),ka.length===0?u.jsxs("div",{className:"empty-box",children:[u.jsx("div",{style:{fontSize:36,marginBottom:8},children:"📅"}),u.jsx("p",{style:{color:"#92400e",fontWeight:700,margin:"0 0 4px",fontSize:15},children:"सध्या कोणत्याही dates available नाहीत"}),u.jsx("p",{style:{color:"#a16207",fontSize:13.5,margin:0,fontWeight:500},children:"Admin कडून availability add होण्याची वाट पाहा"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Available Dates ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("div",{className:"date-grid",children:ka.map((Z,te)=>u.jsxs("button",{type:"button",className:`date-btn${X.preferredDate===Z.date?" sel":""}`,onClick:()=>be(fe=>({...fe,preferredDate:Z.date,slotTime:"",slotStart:"",slotEnd:"",microSlot:""})),children:["📅 ",to(Z.date),u.jsxs("div",{className:"sub",children:[Z.timeSlots?.length," slot",Z.timeSlots?.length!==1?"s":""," available"]})]},te))})]}),X.preferredDate&&u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Select Time Slot ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("div",{className:"slot-grid",children:Di.map((Z,te)=>{const fe=`${Z.start} - ${Z.end}`;return u.jsxs("button",{type:"button",className:`slot-btn${X.slotTime===fe?" sel":""}`,onClick:()=>be(ye=>({...ye,slotTime:fe,slotStart:Z.start,slotEnd:Z.end,microSlot:""})),children:["⏰ ",fe]},te)})})]}),X.preferredDate&&X.slotTime&&u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["15-Minute Appointment Slot निवडा ",u.jsx("span",{className:"req",children:"*"})]}),T?u.jsxs("div",{style:{color:"var(--teal)",fontSize:13,fontWeight:600,padding:"12px 0",display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"Slots loading..."]}):H?u.jsx("div",{style:{background:"#fee2e2",border:"1.5px solid #f87171",borderRadius:8,padding:"12px 16px",color:"#dc2626",fontWeight:700,fontSize:13},children:"❌ या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा."}):u.jsxs(u.Fragment,{children:[u.jsxs("select",{className:"f-input",style:{cursor:"pointer"},value:X.microSlot,onChange:Z=>{const te=Z.target.value;if(z.find(ye=>ye.microSlot===te)?.booked){oe("❌ हा slot आधीच book झाला आहे. कृपया दुसरा निवडा.","error");return}be(ye=>({...ye,microSlot:te}))},children:[u.jsx("option",{value:"",children:"-- 15-minute slot निवडा --"}),z.map(Z=>u.jsxs("option",{value:Z.microSlot,disabled:Z.booked,children:[Z.booked?"🔴":"🟢"," ",Z.microSlot,Z.booked?" (Booked)":""]},Z.microSlot))]}),z.length>0&&u.jsxs("p",{style:{fontSize:12,color:"var(--text-sm)",marginTop:8,fontWeight:500},children:["🟢 Available  |  🔴 Booked  | ",u.jsx("strong",{children:z.filter(Z=>!Z.booked).length})," of ",u.jsx("strong",{children:z.length})," slots available"]}),X.microSlot&&u.jsxs("div",{className:"selected-box",style:{marginTop:10,marginBottom:0},children:["✅ तुमचा appointment time: ",u.jsx("strong",{children:X.microSlot})]})]})]}),X.preferredDate&&X.slotTime&&X.microSlot&&u.jsxs("div",{className:"selected-box",children:["📅 ",to(X.preferredDate),"  |  ⏰ ",X.slotTime,"  |  🕐 ",X.microSlot]})]}),u.jsxs("div",{className:"info-box",children:["ℹ️ ",u.jsx("strong",{children:"Date निवडण्यासाठी:"})," वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा"]})]}),s===2&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Visit Information"}),u.jsx("p",{className:"section-sub",children:"Provide details about your visit to the Mayor"}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Reason for Visit ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("textarea",{className:"f-input",rows:4,value:X.purpose,onChange:ze("purpose"),placeholder:"Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा",style:{resize:"vertical"}})]}),u.jsxs("div",{className:"f-grid-2",children:[u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Number of Visitors ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("input",{className:"f-input",type:"number",min:"1",max:"10",value:X.numberOfVisitors,onChange:ze("numberOfVisitors")})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Ward ",u.jsx("span",{className:"req",children:"*"})]}),u.jsxs("select",{className:"f-input",value:X.ward,onChange:ze("ward"),style:{cursor:"pointer"},children:[u.jsx("option",{value:"",children:"Select Ward"}),["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(Z=>u.jsx("option",{children:Z},Z))]}),X.ward&&ae&&u.jsx("p",{style:{fontSize:12,color:"#16a34a",fontWeight:600,marginTop:4},children:"✅ मागील भेटीवरून auto-filled"})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Have you visited before? ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("div",{className:"radio-group",children:["No","Yes"].map(Z=>u.jsxs("label",{className:`radio-label${X.visitedBefore===(Z==="Yes")?" selected":""}`,children:[u.jsx("input",{type:"radio",name:"vb",value:Z,checked:X.visitedBefore===(Z==="Yes"),onChange:()=>be(te=>({...te,visitedBefore:Z==="Yes"})),style:{accentColor:"var(--teal)",width:15,height:15}}),Z]},Z))})]})]})]}),s===3&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Visitor Photo"}),u.jsx("p",{className:"section-sub",children:"Please upload or capture a clear photo for identification at the Mayor's office"}),Ee&&!X.photoPreview&&u.jsxs("div",{className:"last-photo-hint",children:[u.jsx("img",{src:`${Ee}`,alt:"last visit",style:{width:48,height:48,borderRadius:"50%",objectFit:"cover",border:"2px solid #7ec89a",flexShrink:0},onError:Z=>{Z.target.style.display="none"}}),u.jsxs("div",{children:[u.jsx("p",{style:{margin:0,fontWeight:700,fontSize:13},children:"मागील भेटीचा फोटो उपलब्ध आहे"}),u.jsx("button",{type:"button",style:{marginTop:4,fontSize:12,color:"var(--teal)",fontWeight:700,background:"none",border:"none",cursor:"pointer",padding:0,textDecoration:"underline"},onClick:()=>{be(Z=>({...Z,photoPreview:Ee,visitorPhoto:Ee}))},children:"हाच फोटो वापरा ↗"})]})]}),u.jsxs("div",{style:{display:"flex",gap:12,marginBottom:20},children:[u.jsxs("label",{className:"photo-btn-primary",children:["📁 Upload Photo",u.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:Z=>{const te=Z.target.files[0];te&&be(fe=>({...fe,visitorPhoto:te,photoPreview:URL.createObjectURL(te)}))}})]}),u.jsx("button",{type:"button",onClick:Te,className:"photo-btn-secondary",children:"📷 Use Webcam"})]}),F?u.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",border:"2px solid var(--border)",marginBottom:16},children:[u.jsx("button",{type:"button",onClick:He,style:{position:"absolute",top:10,right:10,zIndex:10,width:30,height:30,borderRadius:"50%",background:"#ef4444",color:"#fff",border:"none",cursor:"pointer",fontWeight:800},children:"✕"}),u.jsx("video",{ref:J,autoPlay:!0,playsInline:!0,style:{width:"100%",maxHeight:340,objectFit:"cover",display:"block"}}),u.jsx("canvas",{ref:w,style:{display:"none"}}),u.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:16,background:"linear-gradient(transparent,rgba(0,0,0,0.55))",display:"flex",justifyContent:"center"},children:u.jsx("button",{type:"button",onClick:at,style:{padding:"11px 30px",borderRadius:9,border:"none",background:"linear-gradient(135deg,var(--teal),var(--green))",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)"},children:"📸 Capture Photo"})})]}):u.jsx("div",{style:{border:"2.5px dashed #b2d8e4",borderRadius:14,padding:36,textAlign:"center",background:"linear-gradient(135deg,#f7fcfe,#f5fef5)",marginBottom:16,transition:"all .2s"},children:X.photoPreview?u.jsxs(u.Fragment,{children:[u.jsx("img",{src:X.photoPreview,alt:"preview",style:{width:110,height:110,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginBottom:14,boxShadow:"0 4px 20px rgba(76,171,193,0.3)"}}),u.jsx("p",{style:{color:"var(--green)",fontWeight:700,fontSize:14,margin:"0 0 4px"},children:"✅ Photo selected"}),u.jsx("p",{style:{color:"#6a9aaa",fontSize:12.5,margin:0,fontWeight:500},children:'Click "Upload Photo" to change'})]}):u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{fontSize:44,marginBottom:12,color:"#b2d8e4"},children:"📷"}),u.jsx("p",{style:{color:"#6a9aaa",fontSize:14,margin:0,fontWeight:600},children:"Upload किंवा camera वापरून photo द्या"})]})}),ue&&u.jsx("p",{style:{color:"#ef4444",fontSize:13,marginTop:4,fontWeight:600},children:ue})]}),s===4&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Review & Submit"}),u.jsx("p",{className:"section-sub",children:"सर्व माहिती verify करा आणि submit करा"}),u.jsxs("div",{className:"review-grid",children:[[{title:"Personal Info",rows:[["Name",X.fullName],["Mobile",X.mobileNumber],["Email",X.email||"—"],["Address",X.address],["Pincode",X.pincode||"—"]]},{title:"Appointment",rows:[["Date",to(X.preferredDate)],["Slot",X.slotTime],["My Time",X.microSlot]]},{title:"Visit Details",rows:[["Purpose",X.purpose],["Visitors",X.numberOfVisitors],["Visited Before",X.visitedBefore?"Yes":"No"],["Ward",X.ward],...re!==null?[["Visit Number",`#${re}`]]:[]]}].map((Z,te)=>u.jsxs("div",{className:"review-card",style:{animationDelay:`${te*80}ms`},children:[u.jsx("div",{className:"review-card-title",children:Z.title}),Z.rows.map(([fe,ye])=>u.jsxs("div",{className:"review-row",children:[u.jsx("span",{className:"review-key",children:fe}),u.jsx("span",{className:"review-val",children:ye})]},fe))]},te)),X.photoPreview&&u.jsxs("div",{className:"review-card",style:{textAlign:"center"},children:[u.jsx("div",{className:"review-card-title",children:"Visitor Photo"}),u.jsx("img",{src:X.photoPreview,alt:"v",style:{width:88,height:88,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginTop:8,boxShadow:"0 4px 16px rgba(76,171,193,0.25)"}})]})]}),u.jsx("div",{style:{background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",borderRadius:10,padding:"13px 18px",margin:"16px 0 0",fontSize:13.5,color:"#92400e",fontWeight:600},children:"⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."})]})]},s)}),u.jsxs("div",{className:"book-nav",children:[u.jsx("button",{className:"nav-cancel",onClick:()=>s>0?El():l(-1),children:s>0?"← Back":"CANCEL"}),s<du.length-1?u.jsx("button",{className:"nav-continue",disabled:ra,onClick:Nl,children:"CONTINUE →"}):u.jsx("button",{className:"nav-continue",disabled:f,onClick:Lo,children:f?u.jsxs(u.Fragment,{children:[u.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Submitting..."]}):"✔ Submit Appointment"})]})]})})]})}function G2(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function X2(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function Q2(l){return l?new Date(l).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}const E0={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",label:"⏳ Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",label:"✅ Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",label:"❌ Rejected"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",label:"🕰️ Expired"}};function z0({name:l,photo:i,size:s=40}){const[c,f]=j.useState(!1),d=l?l.split(" ").map(g=>g[0]).join("").toUpperCase().slice(0,2):"?",h=["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"],b=l?l.charCodeAt(0)%h.length:0,x=i?i.startsWith("http")?i.replace("http://localhost:5000","https://jansamvad.saavi.co.in"):`https://jansamvad.saavi.co.in/${i}`:null;return x&&!c?u.jsx("img",{src:x,alt:l,onError:()=>f(!0),style:{width:s,height:s,borderRadius:"50%",objectFit:"cover",border:"2px solid #e2e8f0",flexShrink:0}}):u.jsx("div",{style:{width:s,height:s,borderRadius:"50%",background:h[b],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:s*.35,fontWeight:700,fontFamily:"'DM Sans',sans-serif",flexShrink:0,border:"2px solid rgba(255,255,255,0.3)"},children:d})}function Z2({appt:l,onView:i}){const[s,c]=j.useState(!1),f=j.useRef();return j.useEffect(()=>{const d=h=>{f.current&&!f.current.contains(h.target)&&c(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),u.jsxs("div",{ref:f,style:{position:"relative",display:"flex",justifyContent:"center"},children:[u.jsx("button",{onClick:d=>{d.stopPropagation(),c(h=>!h)},style:{background:"none",border:"1px solid #e2e8f0",cursor:"pointer",padding:"4px 8px",borderRadius:6,color:"#6b7280",fontSize:18,lineHeight:1,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:d=>{d.target.style.borderColor="#16a34a",d.target.style.color="#16a34a"},onMouseLeave:d=>{d.target.style.borderColor="#e2e8f0",d.target.style.color="#6b7280"},title:"Actions",children:"⋮"}),s&&u.jsx("div",{style:{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:100,minWidth:150,overflow:"hidden"},children:u.jsx("button",{onClick:d=>{d.stopPropagation(),i(l),c(!1)},style:{display:"block",width:"100%",padding:"10px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:13,color:"#374151",fontFamily:"'DM Sans',sans-serif",fontWeight:500},onMouseEnter:d=>d.target.style.background="#f9fafb",onMouseLeave:d=>d.target.style.background="none",children:"👁 View Details"})})]})}const J2=[10,25,50],T0="160px 1fr 130px 200px 150px 60px";function K2(){const l=Oa(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[s,c]=j.useState([]),[f,d]=j.useState(!0),[h,b]=j.useState(null),[x,g]=j.useState("all"),[y,v]=j.useState([]),[M,U]=j.useState(!1),[z,B]=j.useState(""),[T,_]=j.useState(1),[H,V]=j.useState(10);j.useEffect(()=>{if(!i){l("/login");return}W()},[]);const W=async()=>{try{d(!0);const K=await Vt.get("/citizen/my-appointments",{params:{citizenId:i._id,mobileNumber:i.mobileNumber}});K.data.success&&c(K.data.appointments||[])}catch{}finally{d(!1)}},I=s.filter(K=>x==="all"||K.status===x).filter(K=>{if(!z)return!0;const oe=z.toLowerCase();return K.tokenId?.toLowerCase().includes(oe)||K.purpose?.toLowerCase().includes(oe)||K.fullName?.toLowerCase().includes(oe)}),ae=Math.max(1,Math.ceil(I.length/H)),P=I.slice((T-1)*H,T*H),re=K=>E0[K?.toLowerCase()]||E0.pending,xe=()=>ae<=5?Array.from({length:ae},(K,oe)=>oe+1):T<=3?[1,2,3,"...",ae]:T>=ae-2?[1,"...",ae-2,ae-1,ae]:[1,"...",T-1,T,T+1,"...",ae],Ee=()=>b(null);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
          grid-template-columns: ${T0};
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
          grid-template-columns: ${T0};
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
      `}),u.jsx("div",{className:"ma-root",children:u.jsxs("div",{className:"ma-inner",children:[u.jsxs("div",{className:"ma-header",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"ma-title",children:"My Appointments"}),u.jsxs("p",{className:"ma-sub",children:["Hello,",i?.fullName||`Citizen  ${i?.citizenId||""}`," 👋 — all your appointments are here."]})]}),u.jsxs("div",{className:"ma-actions",children:[u.jsx("button",{className:"ma-icon-btn",title:"Refresh",onClick:W,children:"↻"}),u.jsxs("button",{className:"ma-book-btn",onClick:()=>l("/book-appointment"),children:[u.jsx("span",{style:{fontSize:18,lineHeight:1},children:"+"})," New Appointment"]})]})]}),u.jsxs("div",{className:"filter-search-row",children:[u.jsxs("div",{className:"filter-tabs",children:[u.jsx("span",{className:"filter-label",children:"Status"}),[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"approved",label:"Approved"},{key:"rejected",label:"Rejected"},{key:"expired",label:"Expired"}].map(K=>u.jsxs("button",{className:`ftab${x===K.key?" active":""}`,onClick:()=>{g(K.key),v([]),U(!1),_(1)},children:[K.label," (",K.key==="all"?s.length:s.filter(oe=>oe.status===K.key).length,")"]},K.key))]}),u.jsxs("div",{className:"search-wrap",children:[u.jsx("span",{className:"search-icon",children:"🔍"}),u.jsx("input",{className:"search-input",type:"text",placeholder:"Search appointment",value:z,onChange:K=>{B(K.target.value),_(1)}})]})]}),u.jsxs("div",{className:"table-card",children:[u.jsx("div",{className:"table-scroll-wrapper",children:u.jsxs("div",{className:"table-scroll-inner",children:[u.jsxs("div",{className:"tbl-head",children:[u.jsxs("div",{className:"tbl-head-cell",children:["# TOKEN ID ",u.jsx("span",{className:"sort-icon",children:"⇅"})]}),u.jsx("div",{className:"tbl-head-cell",children:"PURPOSE"}),u.jsxs("div",{className:"tbl-head-cell",children:["DATE ",u.jsx("span",{className:"sort-icon",children:"⇅"})]}),u.jsx("div",{className:"tbl-head-cell",children:"SLOT"}),u.jsx("div",{className:"tbl-head-cell",children:"APPOINTMENT_TIME"}),u.jsxs("div",{className:"tbl-head-cell",children:["STATUS ",u.jsx("span",{className:"sort-icon",children:"⇅"})]}),u.jsx("div",{className:"tbl-head-cell",children:"ACTIONS"})]}),f?u.jsxs("div",{style:{textAlign:"center",padding:"56px 0"},children:[u.jsx("div",{style:{width:34,height:34,border:"3px solid #e2e8f0",borderTopColor:"#16a34a",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 14px"}}),u.jsx("p",{style:{color:"#94a3b8",fontSize:14},children:"Appointments लोड होत आहेत..."})]}):P.length===0?u.jsxs("div",{className:"empty-box",children:[u.jsx("div",{style:{fontSize:48,marginBottom:14},children:"📅"}),u.jsx("p",{style:{color:"#374151",fontWeight:700,fontSize:16,marginBottom:6},children:x==="all"&&!z?"कोणतेही appointments नाहीत":`No ${x!=="all"?x:""} appointments found`}),u.jsx("p",{style:{color:"#94a3b8",fontSize:14,marginBottom:20},children:x==="all"&&!z?"Book your first appointment to get started.":"Try a different filter or search term."}),x==="all"&&!z&&u.jsx("button",{className:"ma-book-btn",style:{margin:"0 auto",display:"inline-flex"},onClick:()=>l("/book-appointment"),children:"+ Book Appointment"})]}):P.map((K,oe)=>{const X=re(K.status),be=y.includes(oe),ze=K.purpose?K.purpose.length>40?K.purpose.slice(0,40)+"…":K.purpose:"—";return u.jsxs("div",{className:`tbl-row${be?" row-checked":""}`,style:{animationDelay:`${oe*40}ms`},onClick:()=>b(K),children:[u.jsx("div",{className:"cell-token",children:K.tokenId||"—"}),u.jsxs("div",{className:"cell-purpose-wrap",children:[u.jsx(z0,{name:K.fullName,photo:K.visitorPhoto,size:38}),u.jsxs("div",{className:"cell-purpose-text",children:[u.jsx("div",{className:"purpose-title",children:ze}),u.jsx("div",{className:"purpose-sub",children:K.fullName||"नागरिक"})]})]}),u.jsx("div",{className:"cell-date",children:X2(K.preferredDate)}),u.jsx("div",{className:"cell-slot",children:K.slotTime||"—"}),u.jsx("div",{className:"cell-slot",children:K.microSlot||"—"}),u.jsx("div",{children:u.jsx("span",{className:"status-badge",style:{background:X.bg,color:X.color,borderColor:X.border},children:X.label})}),u.jsx("div",{onClick:O=>O.stopPropagation(),children:u.jsx(Z2,{appt:K,onView:b})})]},oe)})]})}),!f&&I.length>0&&u.jsxs("div",{className:"tbl-footer",children:[u.jsxs("div",{className:"footer-left",children:[u.jsx("span",{children:"Show"}),u.jsx("select",{className:"page-size-select",value:H,onChange:K=>{V(Number(K.target.value)),_(1)},children:J2.map(K=>u.jsx("option",{value:K,children:K},K))}),u.jsxs("span",{children:["of ",u.jsx("strong",{children:I.length})," results"]}),y.length>0&&u.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:["· ",y.length," selected"]})]}),u.jsxs("div",{className:"pagination",children:[u.jsx("button",{className:"pg-btn",onClick:()=>_(K=>Math.max(1,K-1)),disabled:T===1,children:u.jsx("span",{className:"pg-arrow",children:"‹"})}),xe().map((K,oe)=>K==="..."?u.jsx("button",{className:"pg-btn pg-ellipsis",children:"…"},`ell-${oe}`):u.jsx("button",{className:`pg-btn${T===K?" active":""}`,onClick:()=>_(K),children:K},K)),u.jsx("button",{className:"pg-btn",onClick:()=>_(K=>Math.min(ae,K+1)),disabled:T===ae,children:u.jsx("span",{className:"pg-arrow",children:"›"})})]})]})]})]})}),h&&u.jsx("div",{className:"modal-overlay",onClick:Ee,children:u.jsxs("div",{className:"modal-card",onClick:K=>K.stopPropagation(),children:[u.jsxs("div",{className:"modal-header",children:[u.jsxs("div",{children:[u.jsx("p",{style:{margin:0,fontSize:10,opacity:.6,textTransform:"uppercase",letterSpacing:1},children:"Appointment Details"}),u.jsx("h3",{style:{margin:"4px 0 0",fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"},children:h.tokenId})]}),u.jsx("button",{type:"button",className:"modal-close",onClick:Ee,children:"✕"})]}),u.jsxs("div",{className:"modal-body",children:[u.jsx("div",{style:{textAlign:"center",marginBottom:20},children:u.jsx(z0,{name:h.fullName,photo:h.visitorPhoto,size:80})}),(()=>{const K=re(h.status);return u.jsx("div",{style:{textAlign:"center",marginBottom:16},children:u.jsx("span",{className:"status-badge",style:{background:K.bg,color:K.color,borderColor:K.border,fontSize:13,padding:"6px 20px"},children:K.label})})})(),[["Name",h.fullName],["Mobile",h.mobileNumber],["Email",h.email||"—"],["Address",h.address||"—"],["Date",G2(h.preferredDate)],["Slot",h.slotTime],["Purpose",h.purpose],["Visitors",h.numberOfVisitors],["Visited Before",h.visitedBefore?"Yes":"No"],["Ward",h.ward||"—"],["Booked On",Q2(h.createdAt)]].map(([K,oe])=>oe?u.jsxs("div",{className:"modal-row",children:[u.jsx("span",{className:"modal-key",children:K}),u.jsx("span",{className:"modal-val",children:oe})]},K):null),h.adminNote&&u.jsxs("div",{style:{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:13,color:"#92400e"},children:[u.jsx("strong",{children:"Admin Note:"})," ",h.adminNote]}),h.replyDocument&&u.jsxs("div",{style:{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:13},children:[u.jsx("p",{style:{color:"#166534",fontWeight:700,margin:"0 0 6px"},children:"📎 Document from Admin"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[u.jsx("button",{onClick:()=>{if(h.replyDocument?.toLowerCase().includes(".pdf")||h.replyDocument?.toLowerCase().includes("inward_pdf")){const oe=`https://docs.google.com/gview?url=${encodeURIComponent(h.replyDocument)}&embedded=true`;window.open(oe,"_blank")}else window.open(h.replyDocument,"_blank")},style:{color:"#16a34a",fontWeight:600,fontSize:13,background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0},children:"📄 View Document"}),u.jsx("button",{onClick:async()=>{try{const oe=await(await fetch(h.replyDocument)).blob(),X=h.replyDocument?.toLowerCase().includes(".pdf")||h.replyDocument?.toLowerCase().includes("inward_pdf"),be=new Blob([oe],{type:X?"application/pdf":oe.type}),ze=window.URL.createObjectURL(be),O=document.createElement("a");O.href=ze,O.download=X?"document.pdf":"document",document.body.appendChild(O),O.click(),document.body.removeChild(O),window.URL.revokeObjectURL(ze)}catch(K){console.error("Download failed",K)}},style:{color:"#64748b",background:"none",border:"none",cursor:"pointer",fontSize:16},title:"Download",children:"⬇"})]})]}),h.qrCode&&u.jsxs("div",{style:{textAlign:"center",marginTop:20,paddingTop:16,borderTop:"1px solid #f1f5f9"},children:[u.jsx("p",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"QR Code — भेटीच्या दिवशी दाखवा"}),u.jsx("img",{src:h.qrCode,alt:"QR",style:{width:130,height:130}})]})]})]})})]})}function F2(){const l=Oa(),i=new Date().getFullYear(),s=()=>window.scrollTo({top:0,behavior:"smooth"});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --foot-bg:    #0d2e2a;
          --foot-line:  rgba(81,171,172,0.18);
          --gold:       #F5E6BF;
          --teal:       #51ABAC;
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

        /* top teal accent line */
        .footer::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--teal) 30%, var(--gold-strip) 70%, transparent 100%);
        }

        /* diagonal line texture */
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

        /* ══ BODY GRID — 3 columns ════════════════════════════ */
        .footer-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 68px 48px 48px;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.15fr;
          gap: 56px;
        }

        /* ── Col 1: Brand + Address ── */
        .footer-logo-row {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 22px;
        }
        .cn-logo-wrap {
          width: 62px; height: 62px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid rgba(81,171,172,0.45);
          box-shadow: 0 0 0 4px rgba(81,171,172,0.1);
        }
        .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .footer-brand-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 19px; font-weight: 700;
          color: var(--gold); line-height: 1.35;
        }
        .footer-brand-sub {
          font-size: 11px; color: var(--teal);
          letter-spacing: 1.2px; text-transform: uppercase;
          font-weight: 600; margin-top: 4px;
        }

        .footer-tagline {
          font-size: 15px; color: rgba(255,255,255,0.58);
          line-height: 1.85; margin-bottom: 26px;
          max-width: 310px;
          border-left: 2px solid rgba(81,171,172,0.35);
          padding-left: 14px;
        }

        .footer-address { margin-bottom: 22px; }
        .footer-address-title {
          font-size: 11.5px; font-weight: 700; color: var(--teal);
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 10px;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-address-title::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(81,171,172,0.25);
        }
        .footer-address-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: rgba(255,255,255,0.72);
          line-height: 1.9;
        }

        .footer-contacts { display: flex; flex-direction: column; gap: 10px; }
        .footer-contact-row {
          display: flex; align-items: flex-start; gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(81,171,172,0.1);
          border-radius: 10px;
          padding: 9px 12px;
        }
        .footer-contact-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
        .footer-contact-label {
          color: rgba(255,255,255,0.42); font-size: 11.5px;
          margin-bottom: 2px; font-weight: 500;
        }
        .footer-contact-num {
          font-size: 14.5px; color: rgba(255,255,255,0.82);
          font-weight: 500;
        }

        /* ── Col 2 & 3: Titles ── */
        .footer-col-title {
          font-size: 13.5px; font-weight: 700; color: #fff;
          letter-spacing: 0.5px; margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--foot-line);
          display: flex; align-items: center; gap: 8px;
        }
        .footer-col-title-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--teal); flex-shrink: 0;
        }

        /* ── Nav Links ── */
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 4px; padding: 0; margin: 0; }
        .footer-links li a,
        .footer-links li button {
          font-size: 15px; color: rgba(255,255,255,0.62);
          text-decoration: none; background: none; border: none;
          cursor: pointer; padding: 7px 10px;
          transition: color .18s, background .18s, padding-left .18s;
          display: flex; align-items: center; gap: 8px;
          border-radius: 8px; width: 100%;
          font-family: 'DM Sans', sans-serif;
        }
        .footer-links li a:hover,
        .footer-links li button:hover {
          color: var(--teal);
          background: rgba(81,171,172,0.08);
          padding-left: 14px;
        }
        .footer-links li a::before,
        .footer-links li button::before {
          content: '›'; color: var(--teal); font-size: 18px; line-height: 1;
        }

        /* ── Social ── */
        .footer-social { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }
        .footer-social-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid rgba(81,171,172,0.3);
          background: rgba(81,171,172,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.65); font-size: 16px;
          cursor: pointer; transition: all .2s; text-decoration: none;
        }
        .footer-social-btn:hover {
          background: var(--teal); color: #fff;
          border-color: var(--teal);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(81,171,172,0.35);
        }

        /* ── WhatsApp Chip ── */
        .footer-whatsapp-chip {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(37,211,102,0.1);
          border: 1px solid rgba(37,211,102,0.28);
          border-radius: 999px; padding: 10px 18px;
          font-size: 14.5px; color: #25d366; font-weight: 600;
          text-decoration: none; transition: all .2s;
          margin-bottom: 18px; width: fit-content;
        }
        .footer-whatsapp-chip:hover {
          background: rgba(37,211,102,0.2);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37,211,102,0.2);
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
          padding: 22px 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 13px; color: rgba(255,255,255,0.4);
        }
        .footer-back-top {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(81,171,172,0.35);
          background: transparent;
          border-radius: 999px; padding: 9px 22px;
          font-size: 12.5px; font-weight: 700; color: var(--teal);
          cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
          text-transform: uppercase; font-family: 'DM Sans', sans-serif;
        }
        .footer-back-top:hover {
          background: rgba(81,171,172,0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(81,171,172,0.2);
        }
        .footer-back-top svg { transition: transform .2s; }
        .footer-back-top:hover svg { transform: translateY(-3px); }

        /* ══ GOLD STRIP ════════════════════════════════════════ */
        .footer-gold-strip {
          background: var(--gold-strip);
          text-align: center; padding: 9px 24px;
          font-size: 12px; color: rgba(0,0,0,0.55);
          font-weight: 600; letter-spacing: 0.4px;
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
      `}),u.jsxs("footer",{className:"footer",children:[u.jsxs("div",{className:"footer-body",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsxs("div",{className:"footer-logo-row",children:[u.jsx("div",{className:"cn-logo-wrap",children:u.jsx("img",{src:dm,alt:"VVCMC"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"footer-brand-name",children:["Vasai-Virar City",u.jsx("br",{}),"Municipal Corporation"]}),u.jsx("div",{className:"footer-brand-sub",children:"VVCMC — Jan Samvad"})]})]}),u.jsx("p",{className:"footer-tagline",children:"For the citizens, by the citizens — committed to transparent, fast and digital public services."}),u.jsxs("div",{className:"footer-address",children:[u.jsx("div",{className:"footer-address-title",children:"Head Office"}),u.jsxs("div",{className:"footer-address-text",children:["Virat Nagar, Near MHADA Colony,",u.jsx("br",{}),"Virar West. PIN: 401303"]})]}),u.jsxs("div",{className:"footer-contacts",children:[u.jsxs("div",{className:"footer-contact-row",children:[u.jsx("span",{className:"footer-contact-icon",children:"📞"}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-contact-label",children:"Main Office"}),u.jsx("div",{className:"footer-contact-num",children:"0250-6630000"})]})]}),u.jsxs("div",{className:"footer-contact-row",children:[u.jsx("span",{className:"footer-contact-icon",children:"🚨"}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-contact-label",children:"Disaster Management"}),u.jsx("div",{className:"footer-contact-num",children:"0250-2334546 / 0250-2334547"})]})]}),u.jsxs("div",{className:"footer-contact-row",children:[u.jsx("span",{className:"footer-contact-icon",children:"📱"}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-contact-label",children:"Helpline"}),u.jsx("div",{className:"footer-contact-num",children:"7058911125 / 7058991430 / 8446427643"})]})]})]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"footer-col-title",children:[u.jsx("span",{className:"footer-col-title-dot"}),"Site Map"]}),u.jsxs("ul",{className:"footer-links",children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/"),children:"Home"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/book-appointment"),children:"Book Appointment"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/my-appointments"),children:"My Appointments"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/register"),children:"Register"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/login"),children:"Login"})})]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"footer-col-title",children:[u.jsx("span",{className:"footer-col-title-dot"}),"Contact Us"]}),u.jsxs("a",{className:"footer-whatsapp-chip",href:"https://wa.me/919665877727",target:"_blank",rel:"noreferrer",children:[u.jsx("span",{children:"💬"})," WhatsApp Chatbot"]}),u.jsxs("div",{className:"footer-contact-row",style:{marginBottom:"20px"},children:[u.jsx("span",{className:"footer-contact-icon",children:"💬"}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-contact-label",children:"WhatsApp"}),u.jsx("div",{className:"footer-contact-num",children:"9665877727"})]})]}),u.jsxs("div",{className:"footer-col-title",style:{marginTop:"20px"},children:[u.jsx("span",{className:"footer-col-title-dot"}),"Follow Us"]}),u.jsxs("div",{className:"footer-social",children:[u.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Facebook",children:"𝑓"}),u.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Twitter",children:"𝕏"}),u.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Instagram",children:"◎"}),u.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"YouTube",children:"▶"})]})]})]}),u.jsx("div",{className:"footer-divider"}),u.jsxs("div",{className:"footer-bottom",children:[u.jsxs("div",{className:"footer-copy",children:["© ",i," Vasai-Virar City Municipal Corporation. All rights reserved."]}),u.jsxs("button",{className:"footer-back-top",onClick:s,children:[u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:u.jsx("path",{d:"M6 10V2M6 2L2 6M6 2L10 6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Top"]})]}),u.jsx("div",{className:"footer-gold-strip",children:"Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad"})]})]})}function C0({children:l}){return localStorage.getItem("citizenUser")?l:u.jsx(rm,{to:"/login",replace:!0})}function $2(){return u.jsxs(u.Fragment,{children:[u.jsx(ny,{}),u.jsxs(j1,{children:[u.jsx(Tn,{path:"/",element:u.jsx(uy,{})}),u.jsx(Tn,{path:"/login",element:u.jsx(q2,{})}),u.jsx(Tn,{path:"/register",element:u.jsx(Y2,{})}),u.jsx(Tn,{path:"/book-appointment",element:u.jsx(C0,{children:u.jsx(V2,{})})}),u.jsx(Tn,{path:"/my-appointments",element:u.jsx(C0,{children:u.jsx(K2,{})})}),u.jsx(Tn,{path:"*",element:u.jsx(rm,{to:"/",replace:!0})})]}),u.jsx(F2,{})]})}var hu={exports:{}},mu={};var A0;function W2(){if(A0)return mu;A0=1;var l=jo();function i(x,g){return x===g&&(x!==0||1/x===1/g)||x!==x&&g!==g}var s=typeof Object.is=="function"?Object.is:i,c=l.useSyncExternalStore,f=l.useRef,d=l.useEffect,h=l.useMemo,b=l.useDebugValue;return mu.useSyncExternalStoreWithSelector=function(x,g,y,v,M){var U=f(null);if(U.current===null){var z={hasValue:!1,value:null};U.current=z}else z=U.current;U=h(function(){function T(I){if(!_){if(_=!0,H=I,I=v(I),M!==void 0&&z.hasValue){var ae=z.value;if(M(ae,I))return V=ae}return V=I}if(ae=V,s(H,I))return ae;var P=v(I);return M!==void 0&&M(ae,P)?(H=I,ae):(H=I,V=P)}var _=!1,H,V,W=y===void 0?null:y;return[function(){return T(g())},W===null?void 0:function(){return T(W())}]},[g,y,v,M]);var B=c(x,U[0],U[1]);return d(function(){z.hasValue=!0,z.value=B},[B]),b(B),B},mu}var R0;function P2(){return R0||(R0=1,hu.exports=W2()),hu.exports}P2();function I2(l){l()}function ev(){let l=null,i=null;return{clear(){l=null,i=null},notify(){I2(()=>{let s=l;for(;s;)s.callback(),s=s.next})},get(){const s=[];let c=l;for(;c;)s.push(c),c=c.next;return s},subscribe(s){let c=!0;const f=i={callback:s,next:null,prev:i};return f.prev?f.prev.next=f:l=f,function(){!c||l===null||(c=!1,f.next?f.next.prev=f.prev:i=f.prev,f.prev?f.prev.next=f.next:l=f.next)}}}}var O0={notify(){},get:()=>[]};function tv(l,i){let s,c=O0,f=0,d=!1;function h(B){y();const T=c.subscribe(B);let _=!1;return()=>{_||(_=!0,T(),v())}}function b(){c.notify()}function x(){z.onStateChange&&z.onStateChange()}function g(){return d}function y(){f++,s||(s=l.subscribe(x),c=ev())}function v(){f--,s&&f===0&&(s(),s=void 0,c.clear(),c=O0)}function M(){d||(d=!0,y())}function U(){d&&(d=!1,v())}const z={addNestedSub:h,notifyNestedSubs:b,handleChangeWrapper:x,isSubscribed:g,trySubscribe:M,tryUnsubscribe:U,getListeners:()=>c};return z}var av=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nv=av(),lv=()=>typeof navigator<"u"&&navigator.product==="ReactNative",iv=lv(),rv=()=>nv||iv?j.useLayoutEffect:j.useEffect,ov=rv(),sv=Symbol.for("react-redux-context"),cv=typeof globalThis<"u"?globalThis:{};function uv(){if(!j.createContext)return{};const l=cv[sv]??=new Map;let i=l.get(j.createContext);return i||(i=j.createContext(null),l.set(j.createContext,i)),i}var fv=uv();function dv(l){const{children:i,context:s,serverState:c,store:f}=l,d=j.useMemo(()=>{const x=tv(f);return{store:f,subscription:x,getServerState:c?()=>c:void 0}},[f,c]),h=j.useMemo(()=>f.getState(),[f]);ov(()=>{const{subscription:x}=d;return x.onStateChange=x.notifyNestedSubs,x.trySubscribe(),h!==f.getState()&&x.notifyNestedSubs(),()=>{x.tryUnsubscribe(),x.onStateChange=void 0}},[d,h]);const b=s||fv;return j.createElement(b.Provider,{value:d},i)}var pv=dv;function st(l){return`Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}var hv=typeof Symbol=="function"&&Symbol.observable||"@@observable",k0=hv,gu=()=>Math.random().toString(36).substring(7).split("").join("."),mv={INIT:`@@redux/INIT${gu()}`,REPLACE:`@@redux/REPLACE${gu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${gu()}`},mo=mv;function Zu(l){if(typeof l!="object"||l===null)return!1;let i=l;for(;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return Object.getPrototypeOf(l)===i||Object.getPrototypeOf(l)===null}function Hm(l,i,s){if(typeof l!="function")throw new Error(st(2));if(typeof i=="function"&&typeof s=="function"||typeof s=="function"&&typeof arguments[3]=="function")throw new Error(st(0));if(typeof i=="function"&&typeof s>"u"&&(s=i,i=void 0),typeof s<"u"){if(typeof s!="function")throw new Error(st(1));return s(Hm)(l,i)}let c=l,f=i,d=new Map,h=d,b=0,x=!1;function g(){h===d&&(h=new Map,d.forEach((T,_)=>{h.set(_,T)}))}function y(){if(x)throw new Error(st(3));return f}function v(T){if(typeof T!="function")throw new Error(st(4));if(x)throw new Error(st(5));let _=!0;g();const H=b++;return h.set(H,T),function(){if(_){if(x)throw new Error(st(6));_=!1,g(),h.delete(H),d=null}}}function M(T){if(!Zu(T))throw new Error(st(7));if(typeof T.type>"u")throw new Error(st(8));if(typeof T.type!="string")throw new Error(st(17));if(x)throw new Error(st(9));try{x=!0,f=c(f,T)}finally{x=!1}return(d=h).forEach(H=>{H()}),T}function U(T){if(typeof T!="function")throw new Error(st(10));c=T,M({type:mo.REPLACE})}function z(){const T=v;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(st(11));function H(){const W=_;W.next&&W.next(y())}return H(),{unsubscribe:T(H)}},[k0](){return this}}}return M({type:mo.INIT}),{dispatch:M,subscribe:v,getState:y,replaceReducer:U,[k0]:z}}function gv(l){Object.keys(l).forEach(i=>{const s=l[i];if(typeof s(void 0,{type:mo.INIT})>"u")throw new Error(st(12));if(typeof s(void 0,{type:mo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(st(13))})}function xv(l){const i=Object.keys(l),s={};for(let d=0;d<i.length;d++){const h=i[d];typeof l[h]=="function"&&(s[h]=l[h])}const c=Object.keys(s);let f;try{gv(s)}catch(d){f=d}return function(h={},b){if(f)throw f;let x=!1;const g={};for(let y=0;y<c.length;y++){const v=c[y],M=s[v],U=h[v],z=M(U,b);if(typeof z>"u")throw b&&b.type,new Error(st(14));g[v]=z,x=x||z!==U}return x=x||c.length!==Object.keys(h).length,x?g:h}}function go(...l){return l.length===0?i=>i:l.length===1?l[0]:l.reduce((i,s)=>(...c)=>i(s(...c)))}function bv(...l){return i=>(s,c)=>{const f=i(s,c);let d=()=>{throw new Error(st(15))};const h={getState:f.getState,dispatch:(x,...g)=>d(x,...g)},b=l.map(x=>x(h));return d=go(...b)(f.dispatch),{...f,dispatch:d}}}function yv(l){return Zu(l)&&"type"in l&&typeof l.type=="string"}var qm=Symbol.for("immer-nothing"),_0=Symbol.for("immer-draftable"),dt=Symbol.for("immer-state");function $t(l,...i){throw new Error(`[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`)}var Rt=Object,bl=Rt.getPrototypeOf,xo="constructor",Oo="prototype",Tu="configurable",bo="enumerable",uo="writable",ji="value",Aa=l=>!!l&&!!l[dt];function Wt(l){return l?Ym(l)||_o(l)||!!l[_0]||!!l[xo]?.[_0]||Do(l)||Mo(l):!1}var vv=Rt[Oo][xo].toString(),D0=new WeakMap;function Ym(l){if(!l||!Ju(l))return!1;const i=bl(l);if(i===null||i===Rt[Oo])return!0;const s=Rt.hasOwnProperty.call(i,xo)&&i[xo];if(s===Object)return!0;if(!gl(s))return!1;let c=D0.get(s);return c===void 0&&(c=Function.toString.call(s),D0.set(s,c)),c===vv}function ko(l,i,s=!0){ki(l)===0?(s?Reflect.ownKeys(l):Rt.keys(l)).forEach(f=>{i(f,l[f],l)}):l.forEach((c,f)=>i(f,c,l))}function ki(l){const i=l[dt];return i?i.type_:_o(l)?1:Do(l)?2:Mo(l)?3:0}var M0=(l,i,s=ki(l))=>s===2?l.has(i):Rt[Oo].hasOwnProperty.call(l,i),Cu=(l,i,s=ki(l))=>s===2?l.get(i):l[i],yo=(l,i,s,c=ki(l))=>{c===2?l.set(i,s):c===3?l.add(s):l[i]=s};function wv(l,i){return l===i?l!==0||1/l===1/i:l!==l&&i!==i}var _o=Array.isArray,Do=l=>l instanceof Map,Mo=l=>l instanceof Set,Ju=l=>typeof l=="object",gl=l=>typeof l=="function",xu=l=>typeof l=="boolean";function Sv(l){const i=+l;return Number.isInteger(i)&&String(i)===l}var Ea=l=>l.copy_||l.base_,Ku=l=>l.modified_?l.copy_:l.base_;function Au(l,i){if(Do(l))return new Map(l);if(Mo(l))return new Set(l);if(_o(l))return Array[Oo].slice.call(l);const s=Ym(l);if(i===!0||i==="class_only"&&!s){const c=Rt.getOwnPropertyDescriptors(l);delete c[dt];let f=Reflect.ownKeys(c);for(let d=0;d<f.length;d++){const h=f[d],b=c[h];b[uo]===!1&&(b[uo]=!0,b[Tu]=!0),(b.get||b.set)&&(c[h]={[Tu]:!0,[uo]:!0,[bo]:b[bo],[ji]:l[h]})}return Rt.create(bl(l),c)}else{const c=bl(l);if(c!==null&&s)return{...l};const f=Rt.create(c);return Rt.assign(f,l)}}function Fu(l,i=!1){return Uo(l)||Aa(l)||!Wt(l)||(ki(l)>1&&Rt.defineProperties(l,{set:ao,add:ao,clear:ao,delete:ao}),Rt.freeze(l),i&&ko(l,(s,c)=>{Fu(c,!0)},!1)),l}function jv(){$t(2)}var ao={[ji]:jv};function Uo(l){return l===null||!Ju(l)?!0:Rt.isFrozen(l)}var vo="MapSet",Ru="Patches",U0="ArrayMethods",Vm={};function On(l){const i=Vm[l];return i||$t(0,l),i}var B0=l=>!!Vm[l],Ni,Gm=()=>Ni,Nv=(l,i)=>({drafts_:[],parent_:l,immer_:i,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:B0(vo)?On(vo):void 0,arrayMethodsPlugin_:B0(U0)?On(U0):void 0});function L0(l,i){i&&(l.patchPlugin_=On(Ru),l.patches_=[],l.inversePatches_=[],l.patchListener_=i)}function Ou(l){ku(l),l.drafts_.forEach(Ev),l.drafts_=null}function ku(l){l===Ni&&(Ni=l.parent_)}var H0=l=>Ni=Nv(Ni,l);function Ev(l){const i=l[dt];i.type_===0||i.type_===1?i.revoke_():i.revoked_=!0}function q0(l,i){i.unfinalizedDrafts_=i.drafts_.length;const s=i.drafts_[0];if(l!==void 0&&l!==s){s[dt].modified_&&(Ou(i),$t(4)),Wt(l)&&(l=Y0(i,l));const{patchPlugin_:f}=i;f&&f.generateReplacementPatches_(s[dt].base_,l,i)}else l=Y0(i,s);return zv(i,l,!0),Ou(i),i.patches_&&i.patchListener_(i.patches_,i.inversePatches_),l!==qm?l:void 0}function Y0(l,i){if(Uo(i))return i;const s=i[dt];if(!s)return wo(i,l.handledSet_,l);if(!Bo(s,l))return i;if(!s.modified_)return s.base_;if(!s.finalized_){const{callbacks_:c}=s;if(c)for(;c.length>0;)c.pop()(l);Zm(s,l)}return s.copy_}function zv(l,i,s=!1){!l.parent_&&l.immer_.autoFreeze_&&l.canAutoFreeze_&&Fu(i,s)}function Xm(l){l.finalized_=!0,l.scope_.unfinalizedDrafts_--}var Bo=(l,i)=>l.scope_===i,Tv=[];function Qm(l,i,s,c){const f=Ea(l),d=l.type_;if(c!==void 0&&Cu(f,c,d)===i){yo(f,c,s,d);return}if(!l.draftLocations_){const b=l.draftLocations_=new Map;ko(f,(x,g)=>{if(Aa(g)){const y=b.get(g)||[];y.push(x),b.set(g,y)}})}const h=l.draftLocations_.get(i)??Tv;for(const b of h)yo(f,b,s,d)}function Cv(l,i,s){l.callbacks_.push(function(f){const d=i;if(!d||!Bo(d,f))return;f.mapSetPlugin_?.fixSetContents(d);const h=Ku(d);Qm(l,d.draft_??d,h,s),Zm(d,f)})}function Zm(l,i){if(l.modified_&&!l.finalized_&&(l.type_===3||l.type_===1&&l.allIndicesReassigned_||(l.assigned_?.size??0)>0)){const{patchPlugin_:c}=i;if(c){const f=c.getPath(l);f&&c.generatePatches_(l,f,i)}Xm(l)}}function Av(l,i,s){const{scope_:c}=l;if(Aa(s)){const f=s[dt];Bo(f,c)&&f.callbacks_.push(function(){fo(l);const h=Ku(f);Qm(l,s,h,i)})}else Wt(s)&&l.callbacks_.push(function(){const d=Ea(l);l.type_===3?d.has(s)&&wo(s,c.handledSet_,c):Cu(d,i,l.type_)===s&&c.drafts_.length>1&&(l.assigned_.get(i)??!1)===!0&&l.copy_&&wo(Cu(l.copy_,i,l.type_),c.handledSet_,c)})}function wo(l,i,s){return!s.immer_.autoFreeze_&&s.unfinalizedDrafts_<1||Aa(l)||i.has(l)||!Wt(l)||Uo(l)||(i.add(l),ko(l,(c,f)=>{if(Aa(f)){const d=f[dt];if(Bo(d,s)){const h=Ku(d);yo(l,c,h,l.type_),Xm(d)}}else Wt(f)&&wo(f,i,s)})),l}function Rv(l,i){const s=_o(l),c={type_:s?1:0,scope_:i?i.scope_:Gm(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:i,base_:l,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let f=c,d=So;s&&(f=[c],d=Ei);const{revoke:h,proxy:b}=Proxy.revocable(f,d);return c.draft_=b,c.revoke_=h,[b,c]}var So={get(l,i){if(i===dt)return l;let s=l.scope_.arrayMethodsPlugin_;const c=l.type_===1&&typeof i=="string";if(c&&s?.isArrayOperationMethod(i))return s.createMethodInterceptor(l,i);const f=Ea(l);if(!M0(f,i,l.type_))return Ov(l,f,i);const d=f[i];if(l.finalized_||!Wt(d)||c&&l.operationMethod&&s?.isMutatingArrayMethod(l.operationMethod)&&Sv(i))return d;if(d===bu(l.base_,i)){fo(l);const h=l.type_===1?+i:i,b=Du(l.scope_,d,l,h);return l.copy_[h]=b}return d},has(l,i){return i in Ea(l)},ownKeys(l){return Reflect.ownKeys(Ea(l))},set(l,i,s){const c=Jm(Ea(l),i);if(c?.set)return c.set.call(l.draft_,s),!0;if(!l.modified_){const f=bu(Ea(l),i),d=f?.[dt];if(d&&d.base_===s)return l.copy_[i]=s,l.assigned_.set(i,!1),!0;if(wv(s,f)&&(s!==void 0||M0(l.base_,i,l.type_)))return!0;fo(l),_u(l)}return l.copy_[i]===s&&(s!==void 0||i in l.copy_)||Number.isNaN(s)&&Number.isNaN(l.copy_[i])||(l.copy_[i]=s,l.assigned_.set(i,!0),Av(l,i,s)),!0},deleteProperty(l,i){return fo(l),bu(l.base_,i)!==void 0||i in l.base_?(l.assigned_.set(i,!1),_u(l)):l.assigned_.delete(i),l.copy_&&delete l.copy_[i],!0},getOwnPropertyDescriptor(l,i){const s=Ea(l),c=Reflect.getOwnPropertyDescriptor(s,i);return c&&{[uo]:!0,[Tu]:l.type_!==1||i!=="length",[bo]:c[bo],[ji]:s[i]}},defineProperty(){$t(11)},getPrototypeOf(l){return bl(l.base_)},setPrototypeOf(){$t(12)}},Ei={};for(let l in So){let i=So[l];Ei[l]=function(){const s=arguments;return s[0]=s[0][0],i.apply(this,s)}}Ei.deleteProperty=function(l,i){return Ei.set.call(this,l,i,void 0)};Ei.set=function(l,i,s){return So.set.call(this,l[0],i,s,l[0])};function bu(l,i){const s=l[dt];return(s?Ea(s):l)[i]}function Ov(l,i,s){const c=Jm(i,s);return c?ji in c?c[ji]:c.get?.call(l.draft_):void 0}function Jm(l,i){if(!(i in l))return;let s=bl(l);for(;s;){const c=Object.getOwnPropertyDescriptor(s,i);if(c)return c;s=bl(s)}}function _u(l){l.modified_||(l.modified_=!0,l.parent_&&_u(l.parent_))}function fo(l){l.copy_||(l.assigned_=new Map,l.copy_=Au(l.base_,l.scope_.immer_.useStrictShallowCopy_))}var kv=class{constructor(l){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(i,s,c)=>{if(gl(i)&&!gl(s)){const d=s;s=i;const h=this;return function(x=d,...g){return h.produce(x,y=>s.call(this,y,...g))}}gl(s)||$t(6),c!==void 0&&!gl(c)&&$t(7);let f;if(Wt(i)){const d=H0(this),h=Du(d,i,void 0);let b=!0;try{f=s(h),b=!1}finally{b?Ou(d):ku(d)}return L0(d,c),q0(f,d)}else if(!i||!Ju(i)){if(f=s(i),f===void 0&&(f=i),f===qm&&(f=void 0),this.autoFreeze_&&Fu(f,!0),c){const d=[],h=[];On(Ru).generateReplacementPatches_(i,f,{patches_:d,inversePatches_:h}),c(d,h)}return f}else $t(1,i)},this.produceWithPatches=(i,s)=>{if(gl(i))return(h,...b)=>this.produceWithPatches(h,x=>i(x,...b));let c,f;return[this.produce(i,s,(h,b)=>{c=h,f=b}),c,f]},xu(l?.autoFreeze)&&this.setAutoFreeze(l.autoFreeze),xu(l?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(l.useStrictShallowCopy),xu(l?.useStrictIteration)&&this.setUseStrictIteration(l.useStrictIteration)}createDraft(l){Wt(l)||$t(8),Aa(l)&&(l=_v(l));const i=H0(this),s=Du(i,l,void 0);return s[dt].isManual_=!0,ku(i),s}finishDraft(l,i){const s=l&&l[dt];(!s||!s.isManual_)&&$t(9);const{scope_:c}=s;return L0(c,i),q0(void 0,c)}setAutoFreeze(l){this.autoFreeze_=l}setUseStrictShallowCopy(l){this.useStrictShallowCopy_=l}setUseStrictIteration(l){this.useStrictIteration_=l}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(l,i){let s;for(s=i.length-1;s>=0;s--){const f=i[s];if(f.path.length===0&&f.op==="replace"){l=f.value;break}}s>-1&&(i=i.slice(s+1));const c=On(Ru).applyPatches_;return Aa(l)?c(l,i):this.produce(l,f=>c(f,i))}};function Du(l,i,s,c){const[f,d]=Do(i)?On(vo).proxyMap_(i,s):Mo(i)?On(vo).proxySet_(i,s):Rv(i,s);return(s?.scope_??Gm()).drafts_.push(f),d.callbacks_=s?.callbacks_??[],d.key_=c,s&&c!==void 0?Cv(s,d,c):d.callbacks_.push(function(x){x.mapSetPlugin_?.fixSetContents(d);const{patchPlugin_:g}=x;d.modified_&&g&&g.generatePatches_(d,[],x)}),f}function _v(l){return Aa(l)||$t(10,l),Km(l)}function Km(l){if(!Wt(l)||Uo(l))return l;const i=l[dt];let s,c=!0;if(i){if(!i.modified_)return i.base_;i.finalized_=!0,s=Au(l,i.scope_.immer_.useStrictShallowCopy_),c=i.scope_.immer_.shouldUseStrictIteration()}else s=Au(l,!0);return ko(s,(f,d)=>{yo(s,f,Km(d))},c),i&&(i.finalized_=!1),s}var Dv=new kv,Fm=Dv.produce;function $m(l){return({dispatch:s,getState:c})=>f=>d=>typeof d=="function"?d(s,c,l):f(d)}var Mv=$m(),Uv=$m,Bv=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?go:go.apply(null,arguments)};function V0(l,i){function s(...c){if(i){let f=i(...c);if(!f)throw new Error(Ta(0));return{type:l,payload:f.payload,..."meta"in f&&{meta:f.meta},..."error"in f&&{error:f.error}}}return{type:l,payload:c[0]}}return s.toString=()=>`${l}`,s.type=l,s.match=c=>yv(c)&&c.type===l,s}var Wm=class wi extends Array{constructor(...i){super(...i),Object.setPrototypeOf(this,wi.prototype)}static get[Symbol.species](){return wi}concat(...i){return super.concat.apply(this,i)}prepend(...i){return i.length===1&&Array.isArray(i[0])?new wi(...i[0].concat(this)):new wi(...i.concat(this))}};function G0(l){return Wt(l)?Fm(l,()=>{}):l}function no(l,i,s){return l.has(i)?l.get(i):l.set(i,s(i)).get(i)}function Lv(l){return typeof l=="boolean"}var Hv=()=>function(i){const{thunk:s=!0,immutableCheck:c=!0,serializableCheck:f=!0,actionCreatorCheck:d=!0}=i??{};let h=new Wm;return s&&(Lv(s)?h.push(Mv):h.push(Uv(s.extraArgument))),h},qv="RTK_autoBatch",X0=l=>i=>{setTimeout(i,l)},Yv=(l={type:"raf"})=>i=>(...s)=>{const c=i(...s);let f=!0,d=!1,h=!1;const b=new Set,x=l.type==="tick"?queueMicrotask:l.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:X0(10):l.type==="callback"?l.queueNotification:X0(l.timeout),g=()=>{h=!1,d&&(d=!1,b.forEach(y=>y()))};return Object.assign({},c,{subscribe(y){const v=()=>f&&y(),M=c.subscribe(v);return b.add(y),()=>{M(),b.delete(y)}},dispatch(y){try{return f=!y?.meta?.[qv],d=!f,d&&(h||(h=!0,x(g))),c.dispatch(y)}finally{f=!0}}})},Vv=l=>function(s){const{autoBatch:c=!0}=s??{};let f=new Wm(l);return c&&f.push(Yv(typeof c=="object"?c:void 0)),f};function Gv(l){const i=Hv(),{reducer:s=void 0,middleware:c,devTools:f=!0,preloadedState:d=void 0,enhancers:h=void 0}=l||{};let b;if(typeof s=="function")b=s;else if(Zu(s))b=xv(s);else throw new Error(Ta(1));let x;typeof c=="function"?x=c(i):x=i();let g=go;f&&(g=Bv({trace:!1,...typeof f=="object"&&f}));const y=bv(...x),v=Vv(y);let M=typeof h=="function"?h(v):v();const U=g(...M);return Hm(b,d,U)}function Pm(l){const i={},s=[];let c;const f={addCase(d,h){const b=typeof d=="string"?d:d.type;if(!b)throw new Error(Ta(28));if(b in i)throw new Error(Ta(29));return i[b]=h,f},addAsyncThunk(d,h){return h.pending&&(i[d.pending.type]=h.pending),h.rejected&&(i[d.rejected.type]=h.rejected),h.fulfilled&&(i[d.fulfilled.type]=h.fulfilled),h.settled&&s.push({matcher:d.settled,reducer:h.settled}),f},addMatcher(d,h){return s.push({matcher:d,reducer:h}),f},addDefaultCase(d){return c=d,f}};return l(f),[i,s,c]}function Xv(l){return typeof l=="function"}function Qv(l,i){let[s,c,f]=Pm(i),d;if(Xv(l))d=()=>G0(l());else{const b=G0(l);d=()=>b}function h(b=d(),x){let g=[s[x.type],...c.filter(({matcher:y})=>y(x)).map(({reducer:y})=>y)];return g.filter(y=>!!y).length===0&&(g=[f]),g.reduce((y,v)=>{if(v)if(Aa(y)){const U=v(y,x);return U===void 0?y:U}else{if(Wt(y))return Fm(y,M=>v(M,x));{const M=v(y,x);if(M===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return M}}return y},b)}return h.getInitialState=d,h}var Zv=Symbol.for("rtk-slice-createasyncthunk");function Jv(l,i){return`${l}/${i}`}function Kv({creators:l}={}){const i=l?.asyncThunk?.[Zv];return function(c){const{name:f,reducerPath:d=f}=c;if(!f)throw new Error(Ta(11));const h=(typeof c.reducers=="function"?c.reducers(Wv()):c.reducers)||{},b=Object.keys(h),x={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},g={addCase(V,W){const I=typeof V=="string"?V:V.type;if(!I)throw new Error(Ta(12));if(I in x.sliceCaseReducersByType)throw new Error(Ta(13));return x.sliceCaseReducersByType[I]=W,g},addMatcher(V,W){return x.sliceMatchers.push({matcher:V,reducer:W}),g},exposeAction(V,W){return x.actionCreators[V]=W,g},exposeCaseReducer(V,W){return x.sliceCaseReducersByName[V]=W,g}};b.forEach(V=>{const W=h[V],I={reducerName:V,type:Jv(f,V),createNotation:typeof c.reducers=="function"};Iv(W)?t5(I,W,g,i):Pv(I,W,g)});function y(){const[V={},W=[],I=void 0]=typeof c.extraReducers=="function"?Pm(c.extraReducers):[c.extraReducers],ae={...V,...x.sliceCaseReducersByType};return Qv(c.initialState,P=>{for(let re in ae)P.addCase(re,ae[re]);for(let re of x.sliceMatchers)P.addMatcher(re.matcher,re.reducer);for(let re of W)P.addMatcher(re.matcher,re.reducer);I&&P.addDefaultCase(I)})}const v=V=>V,M=new Map,U=new WeakMap;let z;function B(V,W){return z||(z=y()),z(V,W)}function T(){return z||(z=y()),z.getInitialState()}function _(V,W=!1){function I(P){let re=P[V];return typeof re>"u"&&W&&(re=no(U,I,T)),re}function ae(P=v){const re=no(M,W,()=>new WeakMap);return no(re,P,()=>{const xe={};for(const[Ee,K]of Object.entries(c.selectors??{}))xe[Ee]=Fv(K,P,()=>no(U,P,T),W);return xe})}return{reducerPath:V,getSelectors:ae,get selectors(){return ae(I)},selectSlice:I}}const H={name:f,reducer:B,actions:x.actionCreators,caseReducers:x.sliceCaseReducersByName,getInitialState:T,..._(d),injectInto(V,{reducerPath:W,...I}={}){const ae=W??d;return V.inject({reducerPath:ae,reducer:B},I),{...H,..._(ae,!0)}}};return H}}function Fv(l,i,s,c){function f(d,...h){let b=i(d);return typeof b>"u"&&c&&(b=s()),l(b,...h)}return f.unwrapped=l,f}var $v=Kv();function Wv(){function l(i,s){return{_reducerDefinitionType:"asyncThunk",payloadCreator:i,...s}}return l.withTypes=()=>l,{reducer(i){return Object.assign({[i.name](...s){return i(...s)}}[i.name],{_reducerDefinitionType:"reducer"})},preparedReducer(i,s){return{_reducerDefinitionType:"reducerWithPrepare",prepare:i,reducer:s}},asyncThunk:l}}function Pv({type:l,reducerName:i,createNotation:s},c,f){let d,h;if("reducer"in c){if(s&&!e5(c))throw new Error(Ta(17));d=c.reducer,h=c.prepare}else d=c;f.addCase(l,d).exposeCaseReducer(i,d).exposeAction(i,h?V0(l,h):V0(l))}function Iv(l){return l._reducerDefinitionType==="asyncThunk"}function e5(l){return l._reducerDefinitionType==="reducerWithPrepare"}function t5({type:l,reducerName:i},s,c,f){if(!f)throw new Error(Ta(18));const{payloadCreator:d,fulfilled:h,pending:b,rejected:x,settled:g,options:y}=s,v=f(l,d,y);c.exposeAction(i,v),h&&c.addCase(v.fulfilled,h),b&&c.addCase(v.pending,b),x&&c.addCase(v.rejected,x),g&&c.addMatcher(v.settled,g),c.exposeCaseReducer(i,{fulfilled:h||lo,pending:b||lo,rejected:x||lo,settled:g||lo})}function lo(){}function Ta(l){return`Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}const a5={user:null,isLoggedIn:!1},Im=$v({name:"auth",initialState:a5,reducers:{loginSuccess:(l,i)=>{l.user=i.payload,l.isLoggedIn=!0},logout:l=>{l.user=null,l.isLoggedIn=!1,localStorage.removeItem("authUser"),localStorage.removeItem("token"),localStorage.removeItem("userRole")}}}),{loginSuccess:j5,logout:N5}=Im.actions,n5=Im.reducer,l5=Gv({reducer:{auth:n5}});zb.createRoot(document.getElementById("root")).render(u.jsx(yu.StrictMode,{children:u.jsx(pv,{store:l5,children:u.jsx(J1,{children:u.jsx($2,{})})})}));
