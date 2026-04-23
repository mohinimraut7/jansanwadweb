(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function Xm(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ic={exports:{}},yi={};var Zh;function gb(){if(Zh)return yi;Zh=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(c,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var b in f)b!=="key"&&(d[b]=f[b])}else d=f;return f=d.ref,{$$typeof:l,type:c,key:h,ref:f!==void 0?f:null,props:d}}return yi.Fragment=i,yi.jsx=s,yi.jsxs=s,yi}var Jh;function xb(){return Jh||(Jh=1,Ic.exports=gb()),Ic.exports}var u=xb(),eu={exports:{}},de={};var Kh;function bb(){if(Kh)return de;Kh=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),U=Symbol.iterator;function D(w){return w===null||typeof w!="object"?null:(w=U&&w[U]||w["@@iterator"],typeof w=="function"?w:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,C={};function B(w,L,K){this.props=w,this.context=L,this.refs=C,this.updater=K||z}B.prototype.isReactComponent={},B.prototype.setState=function(w,L){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,L,"setState")},B.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function q(){}q.prototype=B.prototype;function V(w,L,K){this.props=w,this.context=L,this.refs=C,this.updater=K||z}var F=V.prototype=new q;F.constructor=V,k(F,B.prototype),F.isPureReactComponent=!0;var W=Array.isArray;function ae(){}var $={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function ve(w,L,K){var I=K.ref;return{$$typeof:l,type:w,key:L,ref:I!==void 0?I:null,props:K}}function Oe(w,L){return ve(w.type,L,w.props)}function Z(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function ce(w){var L={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(K){return L[K]})}var X=/\/+/g;function je(w,L){return typeof w=="object"&&w!==null&&w.key!=null?ce(""+w.key):L.toString(36)}function Te(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ae,ae):(w.status="pending",w.then(function(L){w.status==="pending"&&(w.status="fulfilled",w.value=L)},function(L){w.status==="pending"&&(w.status="rejected",w.reason=L)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function _(w,L,K,I,ue){var ge=typeof w;(ge==="undefined"||ge==="boolean")&&(w=null);var Ee=!1;if(w===null)Ee=!0;else switch(ge){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(w.$$typeof){case l:case i:Ee=!0;break;case y:return Ee=w._init,_(Ee(w._payload),L,K,I,ue)}}if(Ee)return ue=ue(w),Ee=I===""?"."+je(w,0):I,W(ue)?(K="",Ee!=null&&(K=Ee.replace(X,"$&/")+"/"),_(ue,L,K,"",function(ra){return ra})):ue!=null&&(Z(ue)&&(ue=Oe(ue,K+(ue.key==null||w&&w.key===ue.key?"":(""+ue.key).replace(X,"$&/")+"/")+Ee)),L.push(ue)),1;Ee=0;var tt=I===""?".":I+":";if(W(w))for(var He=0;He<w.length;He++)I=w[He],ge=tt+je(I,He),Ee+=_(I,L,K,ge,ue);else if(He=D(w),typeof He=="function")for(w=He.call(w),He=0;!(I=w.next()).done;)I=I.value,ge=tt+je(I,He++),Ee+=_(I,L,K,ge,ue);else if(ge==="object"){if(typeof w.then=="function")return _(Te(w),L,K,I,ue);throw L=String(w),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function J(w,L,K){if(w==null)return w;var I=[],ue=0;return _(w,I,"","",function(ge){return L.call(K,ge,ue++)}),I}function le(w){if(w._status===-1){var L=w._result;L=L(),L.then(function(K){(w._status===0||w._status===-1)&&(w._status=1,w._result=K)},function(K){(w._status===0||w._status===-1)&&(w._status=2,w._result=K)}),w._status===-1&&(w._status=0,w._result=L)}if(w._status===1)return w._result.default;throw w._result}var te=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},P={map:J,forEach:function(w,L,K){J(w,function(){L.apply(this,arguments)},K)},count:function(w){var L=0;return J(w,function(){L++}),L},toArray:function(w){return J(w,function(L){return L})||[]},only:function(w){if(!Z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return de.Activity=v,de.Children=P,de.Component=B,de.Fragment=s,de.Profiler=f,de.PureComponent=V,de.StrictMode=c,de.Suspense=x,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,de.__COMPILER_RUNTIME={__proto__:null,c:function(w){return $.H.useMemoCache(w)}},de.cache=function(w){return function(){return w.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(w,L,K){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var I=k({},w.props),ue=w.key;if(L!=null)for(ge in L.key!==void 0&&(ue=""+L.key),L)!re.call(L,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&L.ref===void 0||(I[ge]=L[ge]);var ge=arguments.length-2;if(ge===1)I.children=K;else if(1<ge){for(var Ee=Array(ge),tt=0;tt<ge;tt++)Ee[tt]=arguments[tt+2];I.children=Ee}return ve(w.type,ue,I)},de.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},de.createElement=function(w,L,K){var I,ue={},ge=null;if(L!=null)for(I in L.key!==void 0&&(ge=""+L.key),L)re.call(L,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ue[I]=L[I]);var Ee=arguments.length-2;if(Ee===1)ue.children=K;else if(1<Ee){for(var tt=Array(Ee),He=0;He<Ee;He++)tt[He]=arguments[He+2];ue.children=tt}if(w&&w.defaultProps)for(I in Ee=w.defaultProps,Ee)ue[I]===void 0&&(ue[I]=Ee[I]);return ve(w,ge,ue)},de.createRef=function(){return{current:null}},de.forwardRef=function(w){return{$$typeof:b,render:w}},de.isValidElement=Z,de.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:le}},de.memo=function(w,L){return{$$typeof:g,type:w,compare:L===void 0?null:L}},de.startTransition=function(w){var L=$.T,K={};$.T=K;try{var I=w(),ue=$.S;ue!==null&&ue(K,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(ae,te)}catch(ge){te(ge)}finally{L!==null&&K.types!==null&&(L.types=K.types),$.T=L}},de.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},de.use=function(w){return $.H.use(w)},de.useActionState=function(w,L,K){return $.H.useActionState(w,L,K)},de.useCallback=function(w,L){return $.H.useCallback(w,L)},de.useContext=function(w){return $.H.useContext(w)},de.useDebugValue=function(){},de.useDeferredValue=function(w,L){return $.H.useDeferredValue(w,L)},de.useEffect=function(w,L){return $.H.useEffect(w,L)},de.useEffectEvent=function(w){return $.H.useEffectEvent(w)},de.useId=function(){return $.H.useId()},de.useImperativeHandle=function(w,L,K){return $.H.useImperativeHandle(w,L,K)},de.useInsertionEffect=function(w,L){return $.H.useInsertionEffect(w,L)},de.useLayoutEffect=function(w,L){return $.H.useLayoutEffect(w,L)},de.useMemo=function(w,L){return $.H.useMemo(w,L)},de.useOptimistic=function(w,L){return $.H.useOptimistic(w,L)},de.useReducer=function(w,L,K){return $.H.useReducer(w,L,K)},de.useRef=function(w){return $.H.useRef(w)},de.useState=function(w){return $.H.useState(w)},de.useSyncExternalStore=function(w,L,K){return $.H.useSyncExternalStore(w,L,K)},de.useTransition=function(){return $.H.useTransition()},de.version="19.2.3",de}var Fh;function jo(){return Fh||(Fh=1,eu.exports=bb()),eu.exports}var N=jo();const yu=Xm(N);var tu={exports:{}},vi={},nu={exports:{}},au={};var $h;function yb(){return $h||($h=1,(function(l){function i(_,J){var le=_.length;_.push(J);e:for(;0<le;){var te=le-1>>>1,P=_[te];if(0<f(P,J))_[te]=J,_[le]=P,le=te;else break e}}function s(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var J=_[0],le=_.pop();if(le!==J){_[0]=le;e:for(var te=0,P=_.length,w=P>>>1;te<w;){var L=2*(te+1)-1,K=_[L],I=L+1,ue=_[I];if(0>f(K,le))I<P&&0>f(ue,K)?(_[te]=ue,_[I]=le,te=I):(_[te]=K,_[L]=le,te=L);else if(I<P&&0>f(ue,le))_[te]=ue,_[I]=le,te=I;else break e}}return J}function f(_,J){var le=_.sortIndex-J.sortIndex;return le!==0?le:_.id-J.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,b=h.now();l.unstable_now=function(){return h.now()-b}}var x=[],g=[],y=1,v=null,U=3,D=!1,z=!1,k=!1,C=!1,B=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function F(_){for(var J=s(g);J!==null;){if(J.callback===null)c(g);else if(J.startTime<=_)c(g),J.sortIndex=J.expirationTime,i(x,J);else break;J=s(g)}}function W(_){if(k=!1,F(_),!z)if(s(x)!==null)z=!0,ae||(ae=!0,ce());else{var J=s(g);J!==null&&Te(W,J.startTime-_)}}var ae=!1,$=-1,re=5,ve=-1;function Oe(){return C?!0:!(l.unstable_now()-ve<re)}function Z(){if(C=!1,ae){var _=l.unstable_now();ve=_;var J=!0;try{e:{z=!1,k&&(k=!1,q($),$=-1),D=!0;var le=U;try{t:{for(F(_),v=s(x);v!==null&&!(v.expirationTime>_&&Oe());){var te=v.callback;if(typeof te=="function"){v.callback=null,U=v.priorityLevel;var P=te(v.expirationTime<=_);if(_=l.unstable_now(),typeof P=="function"){v.callback=P,F(_),J=!0;break t}v===s(x)&&c(x),F(_)}else c(x);v=s(x)}if(v!==null)J=!0;else{var w=s(g);w!==null&&Te(W,w.startTime-_),J=!1}}break e}finally{v=null,U=le,D=!1}J=void 0}}finally{J?ce():ae=!1}}}var ce;if(typeof V=="function")ce=function(){V(Z)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,je=X.port2;X.port1.onmessage=Z,ce=function(){je.postMessage(null)}}else ce=function(){B(Z,0)};function Te(_,J){$=B(function(){_(l.unstable_now())},J)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(_){_.callback=null},l.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<_?Math.floor(1e3/_):5},l.unstable_getCurrentPriorityLevel=function(){return U},l.unstable_next=function(_){switch(U){case 1:case 2:case 3:var J=3;break;default:J=U}var le=U;U=J;try{return _()}finally{U=le}},l.unstable_requestPaint=function(){C=!0},l.unstable_runWithPriority=function(_,J){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var le=U;U=_;try{return J()}finally{U=le}},l.unstable_scheduleCallback=function(_,J,le){var te=l.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?te+le:te):le=te,_){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=le+P,_={id:y++,callback:J,priorityLevel:_,startTime:le,expirationTime:P,sortIndex:-1},le>te?(_.sortIndex=le,i(g,_),s(x)===null&&_===s(g)&&(k?(q($),$=-1):k=!0,Te(W,le-te))):(_.sortIndex=P,i(x,_),z||D||(z=!0,ae||(ae=!0,ce()))),_},l.unstable_shouldYield=Oe,l.unstable_wrapCallback=function(_){var J=U;return function(){var le=U;U=J;try{return _.apply(this,arguments)}finally{U=le}}}})(au)),au}var Wh;function vb(){return Wh||(Wh=1,nu.exports=yb()),nu.exports}var lu={exports:{}},st={};var Ph;function Sb(){if(Ph)return st;Ph=1;var l=jo();function i(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(x,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:x,containerInfo:g,implementation:y}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,st.createPortal=function(x,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return d(x,g,null,y)},st.flushSync=function(x){var g=h.T,y=c.p;try{if(h.T=null,c.p=2,x)return x()}finally{h.T=g,c.p=y,c.d.f()}},st.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(x,g))},st.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},st.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var y=g.as,v=b(y,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?c.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:U,fetchPriority:D}):y==="script"&&c.d.X(x,{crossOrigin:v,integrity:U,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},st.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=b(g.as,g.crossOrigin);c.d.M(x,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(x)},st.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=b(y,g.crossOrigin);c.d.L(x,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},st.preloadModule=function(x,g){if(typeof x=="string")if(g){var y=b(g.as,g.crossOrigin);c.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(x)},st.requestFormReset=function(x){c.d.r(x)},st.unstable_batchedUpdates=function(x,g){return x(g)},st.useFormState=function(x,g,y){return h.H.useFormState(x,g,y)},st.useFormStatus=function(){return h.H.useHostTransitionStatus()},st.version="19.2.3",st}var Ih;function wb(){if(Ih)return lu.exports;Ih=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),lu.exports=Sb(),lu.exports}var em;function jb(){if(em)return vi;em=1;var l=vb(),i=jo(),s=wb();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return x(r),e;if(o===a)return x(r),t;o=o.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=o;else{for(var p=!1,m=r.child;m;){if(m===n){p=!0,n=r,a=o;break}if(m===a){p=!0,a=r,n=o;break}m=m.sibling}if(!p){for(m=o.child;m;){if(m===n){p=!0,n=o,a=r;break}if(m===a){p=!0,a=o,n=r;break}m=m.sibling}if(!p)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,U=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),V=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),Oe=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case B:return"Profiler";case C:return"StrictMode";case W:return"Suspense";case ae:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case V:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:je(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return je(e(t))}catch{}}return null}var Te=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},te=[],P=-1;function w(e){return{current:e}}function L(e){0>P||(e.current=te[P],te[P]=null,P--)}function K(e,t){P++,te[P]=e.current,e.current=t}var I=w(null),ue=w(null),ge=w(null),Ee=w(null);function tt(e,t){switch(K(ge,t),K(ue,e),K(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mh(t),e=gh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(I),K(I,e)}function He(){L(I),L(ue),L(ge)}function ra(e){e.memoizedState!==null&&K(Ee,e);var t=I.current,n=gh(t,e.type);t!==n&&(K(ue,e),K(I,n))}function On(e){ue.current===e&&(L(I),L(ue)),Ee.current===e&&(L(Ee),mi._currentValue=le)}var ki,Ui;function ln(e){if(ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ki=t&&t[1]||"",Ui=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ki+e+Ui}var Nl=!1;function El(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(M){var R=M}Reflect.construct(e,[],G)}else{try{G.call()}catch(M){R=M}e.call(G.prototype)}}else{try{throw Error()}catch(M){R=M}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(M){if(M&&R&&typeof M.stack=="string")return[M.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),p=o[0],m=o[1];if(p&&m){var S=p.split(`
`),A=m.split(`
`);for(r=a=0;a<S.length&&!S[a].includes("DetermineComponentFrameRoot");)a++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(a===S.length||r===A.length)for(a=S.length-1,r=A.length-1;1<=a&&0<=r&&S[a]!==A[r];)r--;for(;1<=a&&0<=r;a--,r--)if(S[a]!==A[r]){if(a!==1||r!==1)do if(a--,r--,0>r||S[a]!==A[r]){var H=`
`+S[a].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=a&&0<=r);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ln(n):""}function Lo(e,t){switch(e.tag){case 26:case 27:case 5:return ln(e.type);case 16:return ln("Lazy");case 13:return e.child!==t&&t!==null?ln("Suspense Fallback"):ln("Suspense");case 19:return ln("SuspenseList");case 0:case 15:return El(e.type,!1);case 11:return El(e.type.render,!1);case 1:return El(e.type,!0);case 31:return ln("Activity");default:return""}}function Q(e){try{var t="",n=null;do t+=Lo(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ee=Object.prototype.hasOwnProperty,fe=l.unstable_scheduleCallback,xe=l.unstable_cancelCallback,rn=l.unstable_shouldYield,Gt=l.unstable_requestPaint,We=l.unstable_now,oa=l.unstable_getCurrentPriorityLevel,Dn=l.unstable_ImmediatePriority,Xt=l.unstable_UserBlockingPriority,_a=l.unstable_NormalPriority,Ho=l.unstable_LowPriority,zl=l.unstable_IdlePriority,qo=l.log,Mn=l.unstable_setDisableYieldValue,Cl=null,St=null;function kn(e){if(typeof qo=="function"&&Mn(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Cl,e)}catch{}}var wt=Math.clz32?Math.clz32:ng,eg=Math.log,tg=Math.LN2;function ng(e){return e>>>=0,e===0?32:31-(eg(e)/tg|0)|0}var Bi=256,Li=262144,Hi=4194304;function sa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~o,a!==0?r=sa(a):(p&=m,p!==0?r=sa(p):n||(n=m&~e,n!==0&&(r=sa(n))))):(m=a&~o,m!==0?r=sa(m):p!==0?r=sa(p):n||(n=a&~e,n!==0&&(r=sa(n)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:r}function Tl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ag(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fu(){var e=Hi;return Hi<<=1,(Hi&62914560)===0&&(Hi=4194304),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Al(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lg(e,t,n,a,r,o){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,S=e.expirationTimes,A=e.hiddenUpdates;for(n=p&~n;0<n;){var H=31-wt(n),G=1<<H;m[H]=0,S[H]=-1;var R=A[H];if(R!==null)for(A[H]=null,H=0;H<R.length;H++){var M=R[H];M!==null&&(M.lane&=-536870913)}n&=~G}a!==0&&$u(e,a,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(p&~t))}function $u(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-wt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-wt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Pu(e,t){var n=t&-t;return n=(n&42)!==0?1:Vo(n),(n&(e.suspendedLanes|t))!==0?0:n}function Vo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Go(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Iu(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Hh(e.type))}function ef(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Un=Math.random().toString(36).slice(2),nt="__reactFiber$"+Un,dt="__reactProps$"+Un,Oa="__reactContainer$"+Un,Xo="__reactEvents$"+Un,ig="__reactListeners$"+Un,rg="__reactHandles$"+Un,tf="__reactResources$"+Un,Rl="__reactMarker$"+Un;function Qo(e){delete e[nt],delete e[dt],delete e[Xo],delete e[ig],delete e[rg]}function Da(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oa]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jh(e);e!==null;){if(n=e[nt])return n;e=jh(e)}return t}e=n,n=e.parentNode}return null}function Ma(e){if(e=e[nt]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ka(e){var t=e[tf];return t||(t=e[tf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Rl]=!0}var nf=new Set,af={};function ca(e,t){Ua(e,t),Ua(e+"Capture",t)}function Ua(e,t){for(af[e]=t,e=0;e<t.length;e++)nf.add(t[e])}var og=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lf={},rf={};function sg(e){return ee.call(rf,e)?!0:ee.call(lf,e)?!1:og.test(e)?rf[e]=!0:(lf[e]=!0,!1)}function Yi(e,t,n){if(sg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Vi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function on(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cg(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,o.call(this,p)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zo(e){if(!e._valueTracker){var t=of(e)?"checked":"value";e._valueTracker=cg(e,t,""+e[t])}}function sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=of(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ug=/[\n"\\]/g;function Dt(e){return e.replace(ug,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jo(e,t,n,a,r,o,p,m){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Ko(e,p,Ot(t)):n!=null?Ko(e,p,Ot(n)):a!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ot(m):e.removeAttribute("name")}function cf(e,t,n,a,r,o,p,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Zo(e);return}n=n!=null?""+Ot(n):"",t=t!=null?""+Ot(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Zo(e)}function Ko(e,t,n){t==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ba(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function uf(e,t,n){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ot(n):""}function ff(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(Te(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ot(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Zo(e)}function La(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function df(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||fg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function pf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&df(e,r,a)}else for(var o in t)t.hasOwnProperty(o)&&df(e,o,t[o])}function Fo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xi(e){return pg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sn(){}var $o=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,qa=null;function hf(e){var t=Ma(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[dt]||null;if(!r)throw Error(c(90));Jo(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&sf(a)}break e;case"textarea":uf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ba(e,!!n.multiple,t,!1)}}}var Po=!1;function mf(e,t,n){if(Po)return e(t,n);Po=!0;try{var a=e(t);return a}finally{if(Po=!1,(Ha!==null||qa!==null)&&(_r(),Ha&&(t=Ha,e=qa,qa=Ha=null,hf(t),e)))for(t=0;t<e.length;t++)hf(e[t])}}function Ol(e,t){var n=e.stateNode;if(n===null)return null;var a=n[dt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=!1;if(cn)try{var Dl={};Object.defineProperty(Dl,"passive",{get:function(){Io=!0}}),window.addEventListener("test",Dl,Dl),window.removeEventListener("test",Dl,Dl)}catch{Io=!1}var Bn=null,es=null,Qi=null;function gf(){if(Qi)return Qi;var e,t=es,n=t.length,a,r="value"in Bn?Bn.value:Bn.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(a=1;a<=p&&t[n-a]===r[o-a];a++);return Qi=r.slice(e,1<a?1-a:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ji(){return!0}function xf(){return!1}function pt(e){function t(n,a,r,o,p){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=p,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ji:xf,this.isPropagationStopped=xf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),t}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=pt(ua),Ml=v({},ua,{view:0,detail:0}),hg=pt(Ml),ts,ns,kl,Fi=v({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kl&&(kl&&e.type==="mousemove"?(ts=e.screenX-kl.screenX,ns=e.screenY-kl.screenY):ns=ts=0,kl=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),bf=pt(Fi),mg=v({},Fi,{dataTransfer:0}),gg=pt(mg),xg=v({},Ml,{relatedTarget:0}),as=pt(xg),bg=v({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=pt(bg),vg=v({},ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sg=pt(vg),wg=v({},ua,{data:0}),yf=pt(wg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eg[e])?!!t[e]:!1}function ls(){return zg}var Cg=v({},Ml,{key:function(e){if(e.key){var t=jg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tg=pt(Cg),Ag=v({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=pt(Ag),Rg=v({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),_g=pt(Rg),Og=v({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=pt(Og),Mg=v({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=pt(Mg),Ug=v({},ua,{newState:0,oldState:0}),Bg=pt(Ug),Lg=[9,13,27,32],is=cn&&"CompositionEvent"in window,Ul=null;cn&&"documentMode"in document&&(Ul=document.documentMode);var Hg=cn&&"TextEvent"in window&&!Ul,Sf=cn&&(!is||Ul&&8<Ul&&11>=Ul),wf=" ",jf=!1;function Nf(e,t){switch(e){case"keyup":return Lg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function qg(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(jf=!0,wf);case"textInput":return e=t.data,e===wf&&jf?null:e;default:return null}}function Yg(e,t){if(Ya)return e==="compositionend"||!is&&Nf(e,t)?(e=gf(),Qi=es=Bn=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vg[e.type]:t==="textarea"}function Cf(e,t,n,a){Ha?qa?qa.push(a):qa=[a]:Ha=a,t=Lr(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Bl=null,Ll=null;function Gg(e){ch(e,0)}function $i(e){var t=_l(e);if(sf(t))return e}function Tf(e,t){if(e==="change")return t}var Af=!1;if(cn){var rs;if(cn){var os="oninput"in document;if(!os){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),os=typeof Rf.oninput=="function"}rs=os}else rs=!1;Af=rs&&(!document.documentMode||9<document.documentMode)}function _f(){Bl&&(Bl.detachEvent("onpropertychange",Of),Ll=Bl=null)}function Of(e){if(e.propertyName==="value"&&$i(Ll)){var t=[];Cf(t,Ll,e,Wo(e)),mf(Gg,t)}}function Xg(e,t,n){e==="focusin"?(_f(),Bl=t,Ll=n,Bl.attachEvent("onpropertychange",Of)):e==="focusout"&&_f()}function Qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Ll)}function Zg(e,t){if(e==="click")return $i(t)}function Jg(e,t){if(e==="input"||e==="change")return $i(t)}function Kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Kg;function Hl(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!ee.call(t,r)||!jt(e[r],t[r]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mf(e,t){var n=Df(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Df(n)}}function kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fg=cn&&"documentMode"in document&&11>=document.documentMode,Va=null,cs=null,ql=null,us=!1;function Bf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;us||Va==null||Va!==Gi(a)||(a=Va,"selectionStart"in a&&ss(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ql&&Hl(ql,a)||(ql=a,a=Lr(cs,"onSelect"),0<a.length&&(t=new Ki("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Va)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ga={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},fs={},Lf={};cn&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function da(e){if(fs[e])return fs[e];if(!Ga[e])return e;var t=Ga[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lf)return fs[e]=t[n];return e}var Hf=da("animationend"),qf=da("animationiteration"),Yf=da("animationstart"),$g=da("transitionrun"),Wg=da("transitionstart"),Pg=da("transitioncancel"),Vf=da("transitionend"),Gf=new Map,ds="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ds.push("scrollEnd");function Qt(e,t){Gf.set(e,t),ca(t,[e])}var Wi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mt=[],Xa=0,ps=0;function Pi(){for(var e=Xa,t=ps=Xa=0;t<e;){var n=Mt[t];Mt[t++]=null;var a=Mt[t];Mt[t++]=null;var r=Mt[t];Mt[t++]=null;var o=Mt[t];if(Mt[t++]=null,a!==null&&r!==null){var p=a.pending;p===null?r.next=r:(r.next=p.next,p.next=r),a.pending=r}o!==0&&Xf(n,r,o)}}function Ii(e,t,n,a){Mt[Xa++]=e,Mt[Xa++]=t,Mt[Xa++]=n,Mt[Xa++]=a,ps|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function hs(e,t,n,a){return Ii(e,t,n,a),er(e)}function pa(e,t){return Ii(e,null,null,t),er(e)}function Xf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-wt(n),e=o.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),o):null}function er(e){if(50<si)throw si=0,jc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qa={};function Ig(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,a){return new Ig(e,t,n,a)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function un(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Qf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tr(e,t,n,a,r,o){var p=0;if(a=e,typeof e=="function")ms(e)&&(p=1);else if(typeof e=="string")p=lb(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=Nt(31,n,t,r),e.elementType=ve,e.lanes=o,e;case k:return ha(n.children,r,o,t);case C:p=8,r|=24;break;case B:return e=Nt(12,n,t,r|2),e.elementType=B,e.lanes=o,e;case W:return e=Nt(13,n,t,r),e.elementType=W,e.lanes=o,e;case ae:return e=Nt(19,n,t,r),e.elementType=ae,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:p=10;break e;case q:p=9;break e;case F:p=11;break e;case $:p=14;break e;case re:p=16,a=null;break e}p=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Nt(p,n,t,r),t.elementType=e,t.type=a,t.lanes=o,t}function ha(e,t,n,a){return e=Nt(7,e,a,t),e.lanes=n,e}function gs(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function Zf(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function xs(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jf=new WeakMap;function kt(e,t){if(typeof e=="object"&&e!==null){var n=Jf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Q(t)},Jf.set(e,t),t)}return{value:e,source:t,stack:Q(t)}}var Za=[],Ja=0,nr=null,Yl=0,Ut=[],Bt=0,Ln=null,Wt=1,Pt="";function fn(e,t){Za[Ja++]=Yl,Za[Ja++]=nr,nr=e,Yl=t}function Kf(e,t,n){Ut[Bt++]=Wt,Ut[Bt++]=Pt,Ut[Bt++]=Ln,Ln=e;var a=Wt;e=Pt;var r=32-wt(a)-1;a&=~(1<<r),n+=1;var o=32-wt(t)+r;if(30<o){var p=r-r%5;o=(a&(1<<p)-1).toString(32),a>>=p,r-=p,Wt=1<<32-wt(t)+r|n<<r|a,Pt=o+e}else Wt=1<<o|n<<r|a,Pt=e}function bs(e){e.return!==null&&(fn(e,1),Kf(e,1,0))}function ys(e){for(;e===nr;)nr=Za[--Ja],Za[Ja]=null,Yl=Za[--Ja],Za[Ja]=null;for(;e===Ln;)Ln=Ut[--Bt],Ut[Bt]=null,Pt=Ut[--Bt],Ut[Bt]=null,Wt=Ut[--Bt],Ut[Bt]=null}function Ff(e,t){Ut[Bt++]=Wt,Ut[Bt++]=Pt,Ut[Bt++]=Ln,Wt=t.id,Pt=t.overflow,Ln=e}var at=null,Be=null,Ne=!1,Hn=null,Lt=!1,vs=Error(c(519));function qn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(kt(t,e)),vs}function $f(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[nt]=e,t[dt]=a,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(n=0;n<ui.length;n++)ye(ui[n],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),cf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),ff(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||ph(t.textContent,n)?(a.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),a.onScroll!=null&&ye("scroll",t),a.onScrollEnd!=null&&ye("scrollend",t),a.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||qn(e,!0)}function Wf(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:at=at.return}}function Ka(e){if(e!==at)return!1;if(!Ne)return Wf(e),Ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lc(e.type,e.memoizedProps)),n=!n),n&&Be&&qn(e),Wf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Be=wh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Be=wh(e)}else t===27?(t=Be,ea(e.type)?(e=Gc,Gc=null,Be=e):Be=t):Be=at?qt(e.stateNode.nextSibling):null;return!0}function ma(){Be=at=null,Ne=!1}function Ss(){var e=Hn;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),Hn=null),e}function Vl(e){Hn===null?Hn=[e]:Hn.push(e)}var ws=w(null),ga=null,dn=null;function Yn(e,t,n){K(ws,t._currentValue),t._currentValue=n}function pn(e){e._currentValue=ws.current,L(ws)}function js(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ns(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var p=r.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=r;for(var S=0;S<t.length;S++)if(m.context===t[S]){o.lanes|=n,m=o.alternate,m!==null&&(m.lanes|=n),js(o.return,n,e),a||(p=null);break e}o=m.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(c(341));p.lanes|=n,o=p.alternate,o!==null&&(o.lanes|=n),js(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Fa(e,t,n,a){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(c(387));if(p=p.memoizedProps,p!==null){var m=r.type;jt(r.pendingProps.value,p.value)||(e!==null?e.push(m):e=[m])}}else if(r===Ee.current){if(p=r.alternate,p===null)throw Error(c(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}r=r.return}e!==null&&Ns(t,e,n,a),t.flags|=262144}function ar(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){ga=e,dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return Pf(ga,e)}function lr(e,t){return ga===null&&xa(e),Pf(e,t)}function Pf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},dn===null){if(e===null)throw Error(c(308));dn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else dn=dn.next=t;return n}var ex=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},tx=l.unstable_scheduleCallback,nx=l.unstable_NormalPriority,Je={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Es(){return{controller:new ex,data:new Map,refCount:0}}function Gl(e){e.refCount--,e.refCount===0&&tx(nx,function(){e.controller.abort()})}var Xl=null,zs=0,$a=0,Wa=null;function ax(e,t){if(Xl===null){var n=Xl=[];zs=0,$a=Ac(),Wa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return zs++,t.then(If,If),t}function If(){if(--zs===0&&Xl!==null){Wa!==null&&(Wa.status="fulfilled");var e=Xl;Xl=null,$a=0,Wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lx(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var ed=_.S;_.S=function(e,t){Bp=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ax(e,t),ed!==null&&ed(e,t)};var ba=w(null);function Cs(){var e=ba.current;return e!==null?e:Ue.pooledCache}function ir(e,t){t===null?K(ba,ba.current):K(ba,t.pool)}function td(){var e=Cs();return e===null?null:{parent:Je._currentValue,pool:e}}var Pa=Error(c(460)),Ts=Error(c(474)),rr=Error(c(542)),or={then:function(){}};function nd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ad(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,id(e),e;default:if(typeof t.status=="string")t.then(sn,sn);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,id(e),e}throw va=t,Pa}}function ya(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(va=n,Pa):n}}var va=null;function ld(){if(va===null)throw Error(c(459));var e=va;return va=null,e}function id(e){if(e===Pa||e===rr)throw Error(c(483))}var Ia=null,Ql=0;function sr(e){var t=Ql;return Ql+=1,Ia===null&&(Ia=[]),ad(Ia,e,t)}function Zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cr(e,t){throw t.$$typeof===U?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rd(e){function t(E,j){if(e){var T=E.deletions;T===null?(E.deletions=[j],E.flags|=16):T.push(j)}}function n(E,j){if(!e)return null;for(;j!==null;)t(E,j),j=j.sibling;return null}function a(E){for(var j=new Map;E!==null;)E.key!==null?j.set(E.key,E):j.set(E.index,E),E=E.sibling;return j}function r(E,j){return E=un(E,j),E.index=0,E.sibling=null,E}function o(E,j,T){return E.index=T,e?(T=E.alternate,T!==null?(T=T.index,T<j?(E.flags|=67108866,j):T):(E.flags|=67108866,j)):(E.flags|=1048576,j)}function p(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function m(E,j,T,Y){return j===null||j.tag!==6?(j=gs(T,E.mode,Y),j.return=E,j):(j=r(j,T),j.return=E,j)}function S(E,j,T,Y){var oe=T.type;return oe===k?H(E,j,T.props.children,Y,T.key):j!==null&&(j.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===re&&ya(oe)===j.type)?(j=r(j,T.props),Zl(j,T),j.return=E,j):(j=tr(T.type,T.key,T.props,null,E.mode,Y),Zl(j,T),j.return=E,j)}function A(E,j,T,Y){return j===null||j.tag!==4||j.stateNode.containerInfo!==T.containerInfo||j.stateNode.implementation!==T.implementation?(j=xs(T,E.mode,Y),j.return=E,j):(j=r(j,T.children||[]),j.return=E,j)}function H(E,j,T,Y,oe){return j===null||j.tag!==7?(j=ha(T,E.mode,Y,oe),j.return=E,j):(j=r(j,T),j.return=E,j)}function G(E,j,T){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=gs(""+j,E.mode,T),j.return=E,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case D:return T=tr(j.type,j.key,j.props,null,E.mode,T),Zl(T,j),T.return=E,T;case z:return j=xs(j,E.mode,T),j.return=E,j;case re:return j=ya(j),G(E,j,T)}if(Te(j)||ce(j))return j=ha(j,E.mode,T,null),j.return=E,j;if(typeof j.then=="function")return G(E,sr(j),T);if(j.$$typeof===V)return G(E,lr(E,j),T);cr(E,j)}return null}function R(E,j,T,Y){var oe=j!==null?j.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return oe!==null?null:m(E,j,""+T,Y);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case D:return T.key===oe?S(E,j,T,Y):null;case z:return T.key===oe?A(E,j,T,Y):null;case re:return T=ya(T),R(E,j,T,Y)}if(Te(T)||ce(T))return oe!==null?null:H(E,j,T,Y,null);if(typeof T.then=="function")return R(E,j,sr(T),Y);if(T.$$typeof===V)return R(E,j,lr(E,T),Y);cr(E,T)}return null}function M(E,j,T,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return E=E.get(T)||null,m(j,E,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return E=E.get(Y.key===null?T:Y.key)||null,S(j,E,Y,oe);case z:return E=E.get(Y.key===null?T:Y.key)||null,A(j,E,Y,oe);case re:return Y=ya(Y),M(E,j,T,Y,oe)}if(Te(Y)||ce(Y))return E=E.get(T)||null,H(j,E,Y,oe,null);if(typeof Y.then=="function")return M(E,j,T,sr(Y),oe);if(Y.$$typeof===V)return M(E,j,T,lr(j,Y),oe);cr(j,Y)}return null}function ne(E,j,T,Y){for(var oe=null,ze=null,ie=j,me=j=0,we=null;ie!==null&&me<T.length;me++){ie.index>me?(we=ie,ie=null):we=ie.sibling;var Ce=R(E,ie,T[me],Y);if(Ce===null){ie===null&&(ie=we);break}e&&ie&&Ce.alternate===null&&t(E,ie),j=o(Ce,j,me),ze===null?oe=Ce:ze.sibling=Ce,ze=Ce,ie=we}if(me===T.length)return n(E,ie),Ne&&fn(E,me),oe;if(ie===null){for(;me<T.length;me++)ie=G(E,T[me],Y),ie!==null&&(j=o(ie,j,me),ze===null?oe=ie:ze.sibling=ie,ze=ie);return Ne&&fn(E,me),oe}for(ie=a(ie);me<T.length;me++)we=M(ie,E,me,T[me],Y),we!==null&&(e&&we.alternate!==null&&ie.delete(we.key===null?me:we.key),j=o(we,j,me),ze===null?oe=we:ze.sibling=we,ze=we);return e&&ie.forEach(function(ia){return t(E,ia)}),Ne&&fn(E,me),oe}function se(E,j,T,Y){if(T==null)throw Error(c(151));for(var oe=null,ze=null,ie=j,me=j=0,we=null,Ce=T.next();ie!==null&&!Ce.done;me++,Ce=T.next()){ie.index>me?(we=ie,ie=null):we=ie.sibling;var ia=R(E,ie,Ce.value,Y);if(ia===null){ie===null&&(ie=we);break}e&&ie&&ia.alternate===null&&t(E,ie),j=o(ia,j,me),ze===null?oe=ia:ze.sibling=ia,ze=ia,ie=we}if(Ce.done)return n(E,ie),Ne&&fn(E,me),oe;if(ie===null){for(;!Ce.done;me++,Ce=T.next())Ce=G(E,Ce.value,Y),Ce!==null&&(j=o(Ce,j,me),ze===null?oe=Ce:ze.sibling=Ce,ze=Ce);return Ne&&fn(E,me),oe}for(ie=a(ie);!Ce.done;me++,Ce=T.next())Ce=M(ie,E,me,Ce.value,Y),Ce!==null&&(e&&Ce.alternate!==null&&ie.delete(Ce.key===null?me:Ce.key),j=o(Ce,j,me),ze===null?oe=Ce:ze.sibling=Ce,ze=Ce);return e&&ie.forEach(function(mb){return t(E,mb)}),Ne&&fn(E,me),oe}function ke(E,j,T,Y){if(typeof T=="object"&&T!==null&&T.type===k&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case D:e:{for(var oe=T.key;j!==null;){if(j.key===oe){if(oe=T.type,oe===k){if(j.tag===7){n(E,j.sibling),Y=r(j,T.props.children),Y.return=E,E=Y;break e}}else if(j.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===re&&ya(oe)===j.type){n(E,j.sibling),Y=r(j,T.props),Zl(Y,T),Y.return=E,E=Y;break e}n(E,j);break}else t(E,j);j=j.sibling}T.type===k?(Y=ha(T.props.children,E.mode,Y,T.key),Y.return=E,E=Y):(Y=tr(T.type,T.key,T.props,null,E.mode,Y),Zl(Y,T),Y.return=E,E=Y)}return p(E);case z:e:{for(oe=T.key;j!==null;){if(j.key===oe)if(j.tag===4&&j.stateNode.containerInfo===T.containerInfo&&j.stateNode.implementation===T.implementation){n(E,j.sibling),Y=r(j,T.children||[]),Y.return=E,E=Y;break e}else{n(E,j);break}else t(E,j);j=j.sibling}Y=xs(T,E.mode,Y),Y.return=E,E=Y}return p(E);case re:return T=ya(T),ke(E,j,T,Y)}if(Te(T))return ne(E,j,T,Y);if(ce(T)){if(oe=ce(T),typeof oe!="function")throw Error(c(150));return T=oe.call(T),se(E,j,T,Y)}if(typeof T.then=="function")return ke(E,j,sr(T),Y);if(T.$$typeof===V)return ke(E,j,lr(E,T),Y);cr(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,j!==null&&j.tag===6?(n(E,j.sibling),Y=r(j,T),Y.return=E,E=Y):(n(E,j),Y=gs(T,E.mode,Y),Y.return=E,E=Y),p(E)):n(E,j)}return function(E,j,T,Y){try{Ql=0;var oe=ke(E,j,T,Y);return Ia=null,oe}catch(ie){if(ie===Pa||ie===rr)throw ie;var ze=Nt(29,ie,null,E.mode);return ze.lanes=Y,ze.return=E,ze}}}var Sa=rd(!0),od=rd(!1),Vn=!1;function As(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ae&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=er(e),Xf(e,null,n),t}return Ii(e,a,t,n),er(e)}function Jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Wu(e,n)}}function _s(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?r=o=p:o=o.next=p,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Os=!1;function Kl(){if(Os){var e=Wa;if(e!==null)throw e}}function Fl(e,t,n,a){Os=!1;var r=e.updateQueue;Vn=!1;var o=r.firstBaseUpdate,p=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var S=m,A=S.next;S.next=null,p===null?o=A:p.next=A,p=S;var H=e.alternate;H!==null&&(H=H.updateQueue,m=H.lastBaseUpdate,m!==p&&(m===null?H.firstBaseUpdate=A:m.next=A,H.lastBaseUpdate=S))}if(o!==null){var G=r.baseState;p=0,H=A=S=null,m=o;do{var R=m.lane&-536870913,M=R!==m.lane;if(M?(Se&R)===R:(a&R)===R){R!==0&&R===$a&&(Os=!0),H!==null&&(H=H.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ne=e,se=m;R=t;var ke=n;switch(se.tag){case 1:if(ne=se.payload,typeof ne=="function"){G=ne.call(ke,G,R);break e}G=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=se.payload,R=typeof ne=="function"?ne.call(ke,G,R):ne,R==null)break e;G=v({},G,R);break e;case 2:Vn=!0}}R=m.callback,R!==null&&(e.flags|=64,M&&(e.flags|=8192),M=r.callbacks,M===null?r.callbacks=[R]:M.push(R))}else M={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},H===null?(A=H=M,S=G):H=H.next=M,p|=R;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;M=m,m=M.next,M.next=null,r.lastBaseUpdate=M,r.shared.pending=null}}while(!0);H===null&&(S=G),r.baseState=S,r.firstBaseUpdate=A,r.lastBaseUpdate=H,o===null&&(r.shared.lanes=0),Fn|=p,e.lanes=p,e.memoizedState=G}}function sd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function cd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)sd(n[e],t)}var el=w(null),ur=w(0);function ud(e,t){e=wn,K(ur,e),K(el,t),wn=e|t.baseLanes}function Ds(){K(ur,wn),K(el,el.current)}function Ms(){wn=ur.current,L(el),L(ur)}var Et=w(null),Ht=null;function Qn(e){var t=e.alternate;K(Xe,Xe.current&1),K(Et,e),Ht===null&&(t===null||el.current!==null||t.memoizedState!==null)&&(Ht=e)}function ks(e){K(Xe,Xe.current),K(Et,e),Ht===null&&(Ht=e)}function fd(e){e.tag===22?(K(Xe,Xe.current),K(Et,e),Ht===null&&(Ht=e)):Zn()}function Zn(){K(Xe,Xe.current),K(Et,Et.current)}function zt(e){L(Et),Ht===e&&(Ht=null),L(Xe)}var Xe=w(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Yc(n)||Vc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hn=0,pe=null,De=null,Ke=null,dr=!1,tl=!1,wa=!1,pr=0,$l=0,nl=null,ix=0;function Ve(){throw Error(c(321))}function Us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Bs(e,t,n,a,r,o){return hn=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Kd:Ps,wa=!1,o=n(a,r),wa=!1,tl&&(o=pd(t,n,a,r)),dd(e),o}function dd(e){_.H=Il;var t=De!==null&&De.next!==null;if(hn=0,Ke=De=pe=null,dr=!1,$l=0,nl=null,t)throw Error(c(300));e===null||Fe||(e=e.dependencies,e!==null&&ar(e)&&(Fe=!0))}function pd(e,t,n,a){pe=e;var r=0;do{if(tl&&(nl=null),$l=0,tl=!1,25<=r)throw Error(c(301));if(r+=1,Ke=De=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}_.H=Fd,o=t(n,a)}while(tl);return o}function rx(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Wl(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(pe.flags|=1024),t}function Ls(){var e=pr!==0;return pr=0,e}function Hs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function qs(e){if(dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dr=!1}hn=0,Ke=De=pe=null,tl=!1,$l=pr=0,nl=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?pe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(De===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ke===null?pe.memoizedState:Ke.next;if(t!==null)Ke=t,De=e;else{if(e===null)throw pe.alternate===null?Error(c(467)):Error(c(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ke===null?pe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function hr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var t=$l;return $l+=1,nl===null&&(nl=[]),e=ad(nl,e,t),t=pe,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Kd:Ps),e}function mr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===V)return lt(e)}throw Error(c(438,String(e)))}function Ys(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=hr(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Oe;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function gr(e){var t=Qe();return Vs(t,De,e)}function Vs(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,o=a.pending;if(o!==null){if(r!==null){var p=r.next;r.next=o.next,o.next=p}t.baseQueue=r=o,a.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var m=p=null,S=null,A=t,H=!1;do{var G=A.lane&-536870913;if(G!==A.lane?(Se&G)===G:(hn&G)===G){var R=A.revertLane;if(R===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),G===$a&&(H=!0);else if((hn&R)===R){A=A.next,R===$a&&(H=!0);continue}else G={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(m=S=G,p=o):S=S.next=G,pe.lanes|=R,Fn|=R;G=A.action,wa&&n(o,G),o=A.hasEagerState?A.eagerState:n(o,G)}else R={lane:G,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(m=S=R,p=o):S=S.next=R,pe.lanes|=G,Fn|=G;A=A.next}while(A!==null&&A!==t);if(S===null?p=o:S.next=m,!jt(o,e.memoizedState)&&(Fe=!0,H&&(n=Wa,n!==null)))throw n;e.memoizedState=o,e.baseState=p,e.baseQueue=S,a.lastRenderedState=o}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Gs(e){var t=Qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do o=e(o,p.action),p=p.next;while(p!==r);jt(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function hd(e,t,n){var a=pe,r=Qe(),o=Ne;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var p=!jt((De||r).memoizedState,n);if(p&&(r.memoizedState=n,Fe=!0),r=r.queue,Zs(xd.bind(null,a,r,e),[e]),r.getSnapshot!==t||p||Ke!==null&&Ke.memoizedState.tag&1){if(a.flags|=2048,al(9,{destroy:void 0},gd.bind(null,a,r,n,t),null),Ue===null)throw Error(c(349));o||(hn&127)!==0||md(a,t,n)}return n}function md(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=hr(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gd(e,t,n,a){t.value=n,t.getSnapshot=a,bd(t)&&yd(e)}function xd(e,t,n){return n(function(){bd(t)&&yd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function yd(e){var t=pa(e,2);t!==null&&bt(t,e,2)}function Xs(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),wa){kn(!0);try{n()}finally{kn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function vd(e,t,n,a){return e.baseState=n,Vs(e,De,typeof a=="function"?a:mn)}function ox(e,t,n,a,r){if(yr(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){o.listeners.push(p)}};_.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,Sd(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Sd(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var o=_.T,p={};_.T=p;try{var m=n(r,a),S=_.S;S!==null&&S(p,m),wd(e,t,m)}catch(A){Qs(e,t,A)}finally{o!==null&&p.types!==null&&(o.types=p.types),_.T=o}}else try{o=n(r,a),wd(e,t,o)}catch(A){Qs(e,t,A)}}function wd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){jd(e,t,a)},function(a){return Qs(e,t,a)}):jd(e,t,n)}function jd(e,t,n){t.status="fulfilled",t.value=n,Nd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sd(e,n)))}function Qs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Nd(t),t=t.next;while(t!==a)}e.action=null}function Nd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ed(e,t){return t}function zd(e,t){if(Ne){var n=Ue.formState;if(n!==null){e:{var a=pe;if(Ne){if(Be){t:{for(var r=Be,o=Lt;r.nodeType!==8;){if(!o){r=null;break t}if(r=qt(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){Be=qt(r.nextSibling),a=r.data==="F!";break e}}qn(a)}a=!1}a&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ed,lastRenderedState:t},n.queue=a,n=Qd.bind(null,pe,a),a.dispatch=n,a=Xs(!1),o=Ws.bind(null,pe,!1,a.queue),a=ut(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=ox.bind(null,pe,r,o,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Cd(e){var t=Qe();return Td(t,De,e)}function Td(e,t,n){if(t=Vs(e,t,Ed)[0],e=gr(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Wl(t)}catch(p){throw p===Pa?rr:p}else a=t;t=Qe();var r=t.queue,o=r.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,al(9,{destroy:void 0},sx.bind(null,r,n),null)),[a,o,e]}function sx(e,t){e.action=t}function Ad(e){var t=Qe(),n=De;if(n!==null)return Td(t,n,e);Qe(),t=t.memoizedState,n=Qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function al(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=pe.updateQueue,t===null&&(t=hr(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Rd(){return Qe().memoizedState}function xr(e,t,n,a){var r=ut();pe.flags|=e,r.memoizedState=al(1|t,{destroy:void 0},n,a===void 0?null:a)}function br(e,t,n,a){var r=Qe();a=a===void 0?null:a;var o=r.memoizedState.inst;De!==null&&a!==null&&Us(a,De.memoizedState.deps)?r.memoizedState=al(t,o,n,a):(pe.flags|=e,r.memoizedState=al(1|t,o,n,a))}function _d(e,t){xr(8390656,8,e,t)}function Zs(e,t){br(2048,8,e,t)}function cx(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=hr(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Od(e){var t=Qe().memoizedState;return cx({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Dd(e,t){return br(4,2,e,t)}function Md(e,t){return br(4,4,e,t)}function kd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ud(e,t,n){n=n!=null?n.concat([e]):null,br(4,4,kd.bind(null,t,e),n)}function Js(){}function Bd(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Us(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ld(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Us(t,a[1]))return a[0];if(a=e(),wa){kn(!0);try{e()}finally{kn(!1)}}return n.memoizedState=[a,t],a}function Ks(e,t,n){return n===void 0||(hn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Hp(),pe.lanes|=e,Fn|=e,n)}function Hd(e,t,n,a){return jt(n,t)?n:el.current!==null?(e=Ks(e,n,a),jt(e,t)||(Fe=!0),e):(hn&42)===0||(hn&1073741824)!==0&&(Se&261930)===0?(Fe=!0,e.memoizedState=n):(e=Hp(),pe.lanes|=e,Fn|=e,t)}function qd(e,t,n,a,r){var o=J.p;J.p=o!==0&&8>o?o:8;var p=_.T,m={};_.T=m,Ws(e,!1,t,n);try{var S=r(),A=_.S;if(A!==null&&A(m,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=lx(S,a);Pl(e,t,H,At(e))}else Pl(e,t,a,At(e))}catch(G){Pl(e,t,{then:function(){},status:"rejected",reason:G},At())}finally{J.p=o,p!==null&&m.types!==null&&(p.types=m.types),_.T=p}}function ux(){}function Fs(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=Yd(e).queue;qd(e,r,t,le,n===null?ux:function(){return Vd(e),n(a)})}function Yd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vd(e){var t=Yd(e);t.next===null&&(t=e.alternate.memoizedState),Pl(e,t.next.queue,{},At())}function $s(){return lt(mi)}function Gd(){return Qe().memoizedState}function Xd(){return Qe().memoizedState}function fx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=At();e=Gn(n);var a=Xn(t,e,n);a!==null&&(bt(a,t,n),Jl(a,t,n)),t={cache:Es()},e.payload=t;return}t=t.return}}function dx(e,t,n){var a=At();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yr(e)?Zd(t,n):(n=hs(e,t,n,a),n!==null&&(bt(n,e,a),Jd(n,t,a)))}function Qd(e,t,n){var a=At();Pl(e,t,n,a)}function Pl(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yr(e))Zd(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var p=t.lastRenderedState,m=o(p,n);if(r.hasEagerState=!0,r.eagerState=m,jt(m,p))return Ii(e,t,r,0),Ue===null&&Pi(),!1}catch{}if(n=hs(e,t,r,a),n!==null)return bt(n,e,a),Jd(n,t,a),!0}return!1}function Ws(e,t,n,a){if(a={lane:2,revertLane:Ac(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yr(e)){if(t)throw Error(c(479))}else t=hs(e,n,a,2),t!==null&&bt(t,e,2)}function yr(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Zd(e,t){tl=dr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Wu(e,n)}}var Il={readContext:lt,use:mr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};Il.useEffectEvent=Ve;var Kd={readContext:lt,use:mr,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:_d,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,xr(4194308,4,kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xr(4194308,4,e,t)},useInsertionEffect:function(e,t){xr(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var a=e();if(wa){kn(!0);try{e()}finally{kn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ut();if(n!==void 0){var r=n(t);if(wa){kn(!0);try{n(t)}finally{kn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=dx.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Xs(e);var t=e.queue,n=Qd.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Js,useDeferredValue:function(e,t){var n=ut();return Ks(n,e,t)},useTransition:function(){var e=Xs(!1);return e=qd.bind(null,pe,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=pe,r=ut();if(Ne){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ue===null)throw Error(c(349));(Se&127)!==0||md(a,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,_d(xd.bind(null,a,o,e),[e]),a.flags|=2048,al(9,{destroy:void 0},gd.bind(null,a,o,n,t),null),n},useId:function(){var e=ut(),t=Ue.identifierPrefix;if(Ne){var n=Pt,a=Wt;n=(a&~(1<<32-wt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ix++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:zd,useActionState:zd,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ws.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ys,useCacheRefresh:function(){return ut().memoizedState=fx.bind(null,pe)},useEffectEvent:function(e){var t=ut(),n={impl:e};return t.memoizedState=n,function(){if((Ae&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:lt,use:mr,useCallback:Bd,useContext:lt,useEffect:Zs,useImperativeHandle:Ud,useInsertionEffect:Dd,useLayoutEffect:Md,useMemo:Ld,useReducer:gr,useRef:Rd,useState:function(){return gr(mn)},useDebugValue:Js,useDeferredValue:function(e,t){var n=Qe();return Hd(n,De.memoizedState,e,t)},useTransition:function(){var e=gr(mn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:hd,useId:Gd,useHostTransitionStatus:$s,useFormState:Cd,useActionState:Cd,useOptimistic:function(e,t){var n=Qe();return vd(n,De,e,t)},useMemoCache:Ys,useCacheRefresh:Xd};Ps.useEffectEvent=Od;var Fd={readContext:lt,use:mr,useCallback:Bd,useContext:lt,useEffect:Zs,useImperativeHandle:Ud,useInsertionEffect:Dd,useLayoutEffect:Md,useMemo:Ld,useReducer:Gs,useRef:Rd,useState:function(){return Gs(mn)},useDebugValue:Js,useDeferredValue:function(e,t){var n=Qe();return De===null?Ks(n,e,t):Hd(n,De.memoizedState,e,t)},useTransition:function(){var e=Gs(mn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:hd,useId:Gd,useHostTransitionStatus:$s,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,t){var n=Qe();return De!==null?vd(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ys,useCacheRefresh:Xd};Fd.useEffectEvent=Od;function Is(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ec={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=At(),r=Gn(a);r.payload=t,n!=null&&(r.callback=n),t=Xn(e,r,a),t!==null&&(bt(t,e,a),Jl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=At(),r=Gn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Xn(e,r,a),t!==null&&(bt(t,e,a),Jl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),a=Gn(n);a.tag=2,t!=null&&(a.callback=t),t=Xn(e,a,n),t!==null&&(bt(t,e,n),Jl(t,e,n))}};function $d(e,t,n,a,r,o,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,p):t.prototype&&t.prototype.isPureReactComponent?!Hl(n,a)||!Hl(r,o):!0}function Wd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ec.enqueueReplaceState(t,t.state,null)}function ja(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Pd(e){Wi(e)}function Id(e){console.error(e)}function ep(e){Wi(e)}function vr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function tp(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function tc(e,t,n){return n=Gn(n),n.tag=3,n.payload={element:null},n.callback=function(){vr(e,t)},n}function np(e){return e=Gn(e),e.tag=3,e}function ap(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=a.value;e.payload=function(){return r(o)},e.callback=function(){tp(t,n,a)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){tp(t,n,a),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function px(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Fa(t,n,r,!0),n=Et.current,n!==null){switch(n.tag){case 31:case 13:return Ht===null?Or():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===or?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),zc(e,a,r)),!1;case 22:return n.flags|=65536,a===or?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),zc(e,a,r)),!1}throw Error(c(435,n.tag))}return zc(e,a,r),Or(),!1}if(Ne)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==vs&&(e=Error(c(422),{cause:a}),Vl(kt(e,n)))):(a!==vs&&(t=Error(c(423),{cause:a}),Vl(kt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=kt(a,n),r=tc(e.stateNode,a,r),_s(e,r),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:a});if(o=kt(o,n),oi===null?oi=[o]:oi.push(o),Ge!==4&&(Ge=2),t===null)return!0;a=kt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=tc(n.stateNode,a,e),_s(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&($n===null||!$n.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,r=np(r),ap(r,e,n,a),_s(n,r),!1}n=n.return}while(n!==null);return!1}var nc=Error(c(461)),Fe=!1;function it(e,t,n,a){t.child=e===null?od(t,null,n,a):Sa(t,e.child,n,a)}function lp(e,t,n,a,r){n=n.render;var o=t.ref;if("ref"in a){var p={};for(var m in a)m!=="ref"&&(p[m]=a[m])}else p=a;return xa(t),a=Bs(e,t,n,p,o,r),m=Ls(),e!==null&&!Fe?(Hs(e,t,r),gn(e,t,r)):(Ne&&m&&bs(t),t.flags|=1,it(e,t,a,r),t.child)}function ip(e,t,n,a,r){if(e===null){var o=n.type;return typeof o=="function"&&!ms(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,rp(e,t,o,a,r)):(e=tr(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!uc(e,r)){var p=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hl,n(p,a)&&e.ref===t.ref)return gn(e,t,r)}return t.flags|=1,e=un(o,a),e.ref=t.ref,e.return=t,t.child=e}function rp(e,t,n,a,r){if(e!==null){var o=e.memoizedProps;if(Hl(o,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=o,uc(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,gn(e,t,r)}return ac(e,t,n,a,r)}function op(e,t,n,a){var r=a.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~o}else a=0,t.child=null;return sp(e,t,o,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ir(t,o!==null?o.cachePool:null),o!==null?ud(t,o):Ds(),fd(t);else return a=t.lanes=536870912,sp(e,t,o!==null?o.baseLanes|n:n,n,a)}else o!==null?(ir(t,o.cachePool),ud(t,o),Zn(),t.memoizedState=null):(e!==null&&ir(t,null),Ds(),Zn());return it(e,t,r,n),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sp(e,t,n,a,r){var o=Cs();return o=o===null?null:{parent:Je._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&ir(t,null),Ds(),fd(t),e!==null&&Fa(e,t,a,!0),t.childLanes=r,null}function Sr(e,t){return t=jr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cp(e,t,n){return Sa(t,e.child,null,n),e=Sr(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function hx(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(a.mode==="hidden")return e=Sr(t,a),t.lanes=536870912,ei(null,e);if(ks(t),(e=Be)?(e=Sh(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:Wt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=Zf(e),n.return=t,t.child=n,at=t,Be=null)):e=null,e===null)throw qn(t);return t.lanes=536870912,null}return Sr(t,a)}var o=e.memoizedState;if(o!==null){var p=o.dehydrated;if(ks(t),r)if(t.flags&256)t.flags&=-257,t=cp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Fe||Fa(e,t,n,!1),r=(n&e.childLanes)!==0,Fe||r){if(a=Ue,a!==null&&(p=Pu(a,n),p!==0&&p!==o.retryLane))throw o.retryLane=p,pa(e,p),bt(a,e,p),nc;Or(),t=cp(e,t,n)}else e=o.treeContext,Be=qt(p.nextSibling),at=t,Ne=!0,Hn=null,Lt=!1,e!==null&&Ff(t,e),t=Sr(t,a),t.flags|=4096;return t}return e=un(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ac(e,t,n,a,r){return xa(t),n=Bs(e,t,n,a,void 0,r),a=Ls(),e!==null&&!Fe?(Hs(e,t,r),gn(e,t,r)):(Ne&&a&&bs(t),t.flags|=1,it(e,t,n,r),t.child)}function up(e,t,n,a,r,o){return xa(t),t.updateQueue=null,n=pd(t,a,n,r),dd(e),a=Ls(),e!==null&&!Fe?(Hs(e,t,o),gn(e,t,o)):(Ne&&a&&bs(t),t.flags|=1,it(e,t,n,o),t.child)}function fp(e,t,n,a,r){if(xa(t),t.stateNode===null){var o=Qa,p=n.contextType;typeof p=="object"&&p!==null&&(o=lt(p)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ec,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},As(t),p=n.contextType,o.context=typeof p=="object"&&p!==null?lt(p):Qa,o.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Is(t,n,p,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(p=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),p!==o.state&&ec.enqueueReplaceState(o,o.state,null),Fl(t,a,o,r),Kl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var m=t.memoizedProps,S=ja(n,m);o.props=S;var A=o.context,H=n.contextType;p=Qa,typeof H=="object"&&H!==null&&(p=lt(H));var G=n.getDerivedStateFromProps;H=typeof G=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,H||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||A!==p)&&Wd(t,o,a,p),Vn=!1;var R=t.memoizedState;o.state=R,Fl(t,a,o,r),Kl(),A=t.memoizedState,m||R!==A||Vn?(typeof G=="function"&&(Is(t,n,G,a),A=t.memoizedState),(S=Vn||$d(t,n,S,a,R,A,p))?(H||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),o.props=a,o.state=A,o.context=p,a=S):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Rs(e,t),p=t.memoizedProps,H=ja(n,p),o.props=H,G=t.pendingProps,R=o.context,A=n.contextType,S=Qa,typeof A=="object"&&A!==null&&(S=lt(A)),m=n.getDerivedStateFromProps,(A=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==G||R!==S)&&Wd(t,o,a,S),Vn=!1,R=t.memoizedState,o.state=R,Fl(t,a,o,r),Kl();var M=t.memoizedState;p!==G||R!==M||Vn||e!==null&&e.dependencies!==null&&ar(e.dependencies)?(typeof m=="function"&&(Is(t,n,m,a),M=t.memoizedState),(H=Vn||$d(t,n,H,a,R,M,S)||e!==null&&e.dependencies!==null&&ar(e.dependencies))?(A||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,M,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,M,S)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),o.props=a,o.state=M,o.context=S,a=H):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,wr(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=Sa(t,e.child,null,r),t.child=Sa(t,null,n,r)):it(e,t,n,r),t.memoizedState=o.state,e=t.child):e=gn(e,t,r),e}function dp(e,t,n,a){return ma(),t.flags|=256,it(e,t,n,a),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ic(e){return{baseLanes:e,cachePool:td()}}function rc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Tt),e}function pp(e,t,n){var a=t.pendingProps,r=!1,o=(t.flags&128)!==0,p;if((p=o)||(p=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(r?Qn(t):Zn(),(e=Be)?(e=Sh(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:Wt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=Zf(e),n.return=t,t.child=n,at=t,Be=null)):e=null,e===null)throw qn(t);return Vc(e)?t.lanes=32:t.lanes=536870912,null}var m=a.children;return a=a.fallback,r?(Zn(),r=t.mode,m=jr({mode:"hidden",children:m},r),a=ha(a,r,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,a=t.child,a.memoizedState=ic(n),a.childLanes=rc(e,p,n),t.memoizedState=lc,ei(null,a)):(Qn(t),oc(t,m))}var S=e.memoizedState;if(S!==null&&(m=S.dehydrated,m!==null)){if(o)t.flags&256?(Qn(t),t.flags&=-257,t=sc(e,t,n)):t.memoizedState!==null?(Zn(),t.child=e.child,t.flags|=128,t=null):(Zn(),m=a.fallback,r=t.mode,a=jr({mode:"visible",children:a.children},r),m=ha(m,r,n,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,Sa(t,e.child,null,n),a=t.child,a.memoizedState=ic(n),a.childLanes=rc(e,p,n),t.memoizedState=lc,t=ei(null,a));else if(Qn(t),Vc(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var A=p.dgst;p=A,a=Error(c(419)),a.stack="",a.digest=p,Vl({value:a,source:null,stack:null}),t=sc(e,t,n)}else if(Fe||Fa(e,t,n,!1),p=(n&e.childLanes)!==0,Fe||p){if(p=Ue,p!==null&&(a=Pu(p,n),a!==0&&a!==S.retryLane))throw S.retryLane=a,pa(e,a),bt(p,e,a),nc;Yc(m)||Or(),t=sc(e,t,n)}else Yc(m)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Be=qt(m.nextSibling),at=t,Ne=!0,Hn=null,Lt=!1,e!==null&&Ff(t,e),t=oc(t,a.children),t.flags|=4096);return t}return r?(Zn(),m=a.fallback,r=t.mode,S=e.child,A=S.sibling,a=un(S,{mode:"hidden",children:a.children}),a.subtreeFlags=S.subtreeFlags&65011712,A!==null?m=un(A,m):(m=ha(m,r,n,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,ei(null,a),a=t.child,m=e.child.memoizedState,m===null?m=ic(n):(r=m.cachePool,r!==null?(S=Je._currentValue,r=r.parent!==S?{parent:S,pool:S}:r):r=td(),m={baseLanes:m.baseLanes|n,cachePool:r}),a.memoizedState=m,a.childLanes=rc(e,p,n),t.memoizedState=lc,ei(e.child,a)):(Qn(t),n=e.child,e=n.sibling,n=un(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function oc(e,t){return t=jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function jr(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function sc(e,t,n){return Sa(t,e.child,null,n),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),js(e.return,t,n)}function cc(e,t,n,a,r,o){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:o}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=n,p.tailMode=r,p.treeForkCount=o)}function mp(e,t,n){var a=t.pendingProps,r=a.revealOrder,o=a.tail;a=a.children;var p=Xe.current,m=(p&2)!==0;if(m?(p=p&1|2,t.flags|=128):p&=1,K(Xe,p),it(e,t,a,n),a=Ne?Yl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,n,t);else if(e.tag===19)hp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&fr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),cc(t,!1,r,n,o,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&fr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}cc(t,!0,n,null,o,a);break;case"together":cc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Fa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ar(e)))}function mx(e,t,n){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),Yn(t,Je,e.memoizedState.cache),ma();break;case 27:case 5:ra(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ks(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?pp(e,t,n):(Qn(t),e=gn(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Fa(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return mp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(Xe,Xe.current),a)break;return null;case 22:return t.lanes=0,op(e,t,n,t.pendingProps);case 24:Yn(t,Je,e.memoizedState.cache)}return gn(e,t,n)}function gp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!uc(e,n)&&(t.flags&128)===0)return Fe=!1,mx(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,Ne&&(t.flags&1048576)!==0&&Kf(t,Yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e=="function")ms(e)?(a=ja(e,a),t.tag=1,t=fp(null,t,e,a,n)):(t.tag=0,t=ac(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===F){t.tag=11,t=lp(null,t,e,a,n);break e}else if(r===$){t.tag=14,t=ip(null,t,e,a,n);break e}}throw t=je(e)||e,Error(c(306,t,""))}}return t;case 0:return ac(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=ja(a,t.pendingProps),fp(e,t,a,r,n);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var o=t.memoizedState;r=o.element,Rs(e,t),Fl(t,a,null,n);var p=t.memoizedState;if(a=p.cache,Yn(t,Je,a),a!==o.cache&&Ns(t,[Je],n,!0),Kl(),a=p.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=dp(e,t,a,n);break e}else if(a!==r){r=kt(Error(c(424)),t),Vl(r),t=dp(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=qt(e.firstChild),at=t,Ne=!0,Hn=null,Lt=!0,n=od(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ma(),a===r){t=gn(e,t,n);break e}it(e,t,a,n)}t=t.child}return t;case 26:return wr(e,t),e===null?(n=Ch(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ne||(n=t.type,e=t.pendingProps,a=Hr(ge.current).createElement(n),a[nt]=t,a[dt]=e,rt(a,n,e),Ie(a),t.stateNode=a):t.memoizedState=Ch(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ra(t),e===null&&Ne&&(a=t.stateNode=Nh(t.type,t.pendingProps,ge.current),at=t,Lt=!0,r=Be,ea(t.type)?(Gc=r,Be=qt(a.firstChild)):Be=r),it(e,t,t.pendingProps.children,n),wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((r=a=Be)&&(a=Qx(a,t.type,t.pendingProps,Lt),a!==null?(t.stateNode=a,at=t,Be=qt(a.firstChild),Lt=!1,r=!0):r=!1),r||qn(t)),ra(t),r=t.type,o=t.pendingProps,p=e!==null?e.memoizedProps:null,a=o.children,Lc(r,o)?a=null:p!==null&&Lc(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=Bs(e,t,rx,null,null,n),mi._currentValue=r),wr(e,t),it(e,t,a,n),t.child;case 6:return e===null&&Ne&&((e=n=Be)&&(n=Zx(n,t.pendingProps,Lt),n!==null?(t.stateNode=n,at=t,Be=null,e=!0):e=!1),e||qn(t)),null;case 13:return pp(e,t,n);case 4:return tt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Sa(t,null,a,n):it(e,t,a,n),t.child;case 11:return lp(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Yn(t,t.type,a.value),it(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,xa(t),r=lt(r),a=a(r),t.flags|=1,it(e,t,a,n),t.child;case 14:return ip(e,t,t.type,t.pendingProps,n);case 15:return rp(e,t,t.type,t.pendingProps,n);case 19:return mp(e,t,n);case 31:return hx(e,t,n);case 22:return op(e,t,n,t.pendingProps);case 24:return xa(t),a=lt(Je),e===null?(r=Cs(),r===null&&(r=Ue,o=Es(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=n),r=o),t.memoizedState={parent:a,cache:r},As(t),Yn(t,Je,r)):((e.lanes&n)!==0&&(Rs(e,t),Fl(t,null,null,n),Kl()),r=e.memoizedState,o=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Yn(t,Je,a)):(a=o.cache,Yn(t,Je,a),a!==r.cache&&Ns(t,[Je],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function xn(e){e.flags|=4}function fc(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Gp())e.flags|=8192;else throw va=or,Ts}else e.flags&=-16777217}function xp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Oh(t))if(Gp())e.flags|=8192;else throw va=or,Ts}function Nr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fu():536870912,e.lanes|=t,ol|=t)}function ti(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function gx(e,t,n){var a=t.pendingProps;switch(ys(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),pn(Je),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ss())),Le(t),null;case 26:var r=t.type,o=t.memoizedState;return e===null?(xn(t),o!==null?(Le(t),xp(t,o)):(Le(t),fc(t,r,null,a,n))):o?o!==e.memoizedState?(xn(t),Le(t),xp(t,o)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&xn(t),Le(t),fc(t,r,e,a,n)),null;case 27:if(On(t),n=ge.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&xn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Le(t),null}e=I.current,Ka(t)?$f(t):(e=Nh(r,a,n),t.stateNode=e,xn(t))}return Le(t),null;case 5:if(On(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&xn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(o=I.current,Ka(t))$f(t);else{var p=Hr(ge.current);switch(o){case 1:o=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=p.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?p.createElement("select",{is:a.is}):p.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?p.createElement(r,{is:a.is}):p.createElement(r)}}o[nt]=t,o[dt]=a;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)o.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=o;e:switch(rt(o,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&xn(t)}}return Le(t),fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&xn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ge.current,Ka(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=at,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[nt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||ph(e.nodeValue,n)),e||qn(t,!0)}else e=Hr(e).createTextNode(a),e[nt]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ka(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[nt]=t}else ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=Ss(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Le(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[nt]=t}else ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),r=!1}else r=Ss(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nr(t,t.updateQueue),Le(t),null);case 4:return He(),e===null&&Dc(t.stateNode.containerInfo),Le(t),null;case 10:return pn(t.type),Le(t),null;case 19:if(L(Xe),a=t.memoizedState,a===null)return Le(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ti(a,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=fr(e),o!==null){for(t.flags|=128,ti(a,!1),e=o.updateQueue,t.updateQueue=e,Nr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Qf(n,e),n=n.sibling;return K(Xe,Xe.current&1|2),Ne&&fn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&We()>Ar&&(t.flags|=128,r=!0,ti(a,!1),t.lanes=4194304)}else{if(!r)if(e=fr(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Nr(t,e),ti(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ne)return Le(t),null}else 2*We()-a.renderingStartTime>Ar&&n!==536870912&&(t.flags|=128,r=!0,ti(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=We(),e.sibling=null,n=Xe.current,K(Xe,r?n&1|2:n&1),Ne&&fn(t,a.treeForkCount),e):(Le(t),null);case 22:case 23:return zt(t),Ms(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Nr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pn(Je),Le(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function xx(e,t){switch(ys(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(Je),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return On(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(c(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Xe),null;case 4:return He(),null;case 10:return pn(t.type),null;case 22:case 23:return zt(t),Ms(),e!==null&&L(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pn(Je),null;case 25:return null;default:return null}}function bp(e,t){switch(ys(t),t.tag){case 3:pn(Je),He();break;case 26:case 27:case 5:On(t);break;case 4:He();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:L(Xe);break;case 10:pn(t.type);break;case 22:case 23:zt(t),Ms(),e!==null&&L(ba);break;case 24:pn(Je)}}function ni(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var o=n.create,p=n.inst;a=o(),p.destroy=a}n=n.next}while(n!==r)}}catch(m){_e(t,t.return,m)}}function Jn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){var p=a.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,r=t;var S=n,A=m;try{A()}catch(H){_e(r,S,H)}}}a=a.next}while(a!==o)}}catch(H){_e(t,t.return,H)}}function yp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{cd(t,n)}catch(a){_e(e,e.return,a)}}}function vp(e,t,n){n.props=ja(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function ai(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){_e(e,t,r)}}function It(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Sp(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){_e(e,e.return,r)}}function dc(e,t,n){try{var a=e.stateNode;Hx(a,e.type,n,t),a[dt]=t}catch(r){_e(e,e.return,r)}}function wp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(a!==4&&(a===27&&ea(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}function Er(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ea(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Er(e,t,n),e=e.sibling;e!==null;)Er(e,t,n),e=e.sibling}function jp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);rt(t,a,n),t[nt]=e,t[dt]=n}catch(o){_e(e,e.return,o)}}var bn=!1,$e=!1,mc=!1,Np=typeof WeakSet=="function"?WeakSet:Set,et=null;function bx(e,t){if(e=e.containerInfo,Uc=Zr,e=Uf(e),ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var p=0,m=-1,S=-1,A=0,H=0,G=e,R=null;t:for(;;){for(var M;G!==n||r!==0&&G.nodeType!==3||(m=p+r),G!==o||a!==0&&G.nodeType!==3||(S=p+a),G.nodeType===3&&(p+=G.nodeValue.length),(M=G.firstChild)!==null;)R=G,G=M;for(;;){if(G===e)break t;if(R===n&&++A===r&&(m=p),R===o&&++H===a&&(S=p),(M=G.nextSibling)!==null)break;G=R,R=G.parentNode}G=M}n=m===-1||S===-1?null:{start:m,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:e,selectionRange:n},Zr=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,r=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var ne=ja(n.type,r);e=a.getSnapshotBeforeUpdate(ne,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(se){_e(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function Ep(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:vn(e,n),a&4&&ni(5,n);break;case 1:if(vn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){_e(n,n.return,p)}else{var r=ja(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){_e(n,n.return,p)}}a&64&&yp(n),a&512&&ai(n,n.return);break;case 3:if(vn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{cd(e,t)}catch(p){_e(n,n.return,p)}}break;case 27:t===null&&a&4&&jp(n);case 26:case 5:vn(e,n),t===null&&a&4&&Sp(n),a&512&&ai(n,n.return);break;case 12:vn(e,n);break;case 31:vn(e,n),a&4&&Tp(e,n);break;case 13:vn(e,n),a&4&&Ap(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Cx.bind(null,n),Jx(e,n))));break;case 22:if(a=n.memoizedState!==null||bn,!a){t=t!==null&&t.memoizedState!==null||$e,r=bn;var o=$e;bn=a,($e=t)&&!o?Sn(e,n,(n.subtreeFlags&8772)!==0):vn(e,n),bn=r,$e=o}break;case 30:break;default:vn(e,n)}}function zp(e){var t=e.alternate;t!==null&&(e.alternate=null,zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,ht=!1;function yn(e,t,n){for(n=n.child;n!==null;)Cp(e,t,n),n=n.sibling}function Cp(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 26:$e||It(n,t),yn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$e||It(n,t);var a=qe,r=ht;ea(n.type)&&(qe=n.stateNode,ht=!1),yn(e,t,n),di(n.stateNode),qe=a,ht=r;break;case 5:$e||It(n,t);case 6:if(a=qe,r=ht,qe=null,yn(e,t,n),qe=a,ht=r,qe!==null)if(ht)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode)}catch(o){_e(n,t,o)}else try{qe.removeChild(n.stateNode)}catch(o){_e(n,t,o)}break;case 18:qe!==null&&(ht?(e=qe,yh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ml(e)):yh(qe,n.stateNode));break;case 4:a=qe,r=ht,qe=n.stateNode.containerInfo,ht=!0,yn(e,t,n),qe=a,ht=r;break;case 0:case 11:case 14:case 15:Jn(2,n,t),$e||Jn(4,n,t),yn(e,t,n);break;case 1:$e||(It(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&vp(n,t,a)),yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:$e=(a=$e)||n.memoizedState!==null,yn(e,t,n),$e=a;break;default:yn(e,t,n)}}function Tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(n){_e(t,t.return,n)}}}function Ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(n){_e(t,t.return,n)}}function yx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Np),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Np),t;default:throw Error(c(435,e.tag))}}function zr(e,t){var n=yx(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=Tx.bind(null,e,a);a.then(r,r)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],o=e,p=t,m=p;e:for(;m!==null;){switch(m.tag){case 27:if(ea(m.type)){qe=m.stateNode,ht=!1;break e}break;case 5:qe=m.stateNode,ht=!1;break e;case 3:case 4:qe=m.stateNode.containerInfo,ht=!0;break e}m=m.return}if(qe===null)throw Error(c(160));Cp(o,p,r),qe=null,ht=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rp(t,e),t=t.sibling}var Zt=null;function Rp(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),gt(e),a&4&&(Jn(3,e,e.return),ni(3,e),Jn(5,e,e.return));break;case 1:mt(t,e),gt(e),a&512&&($e||n===null||It(n,n.return)),a&64&&bn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=Zt;if(mt(t,e),gt(e),a&512&&($e||n===null||It(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":o=r.getElementsByTagName("title")[0],(!o||o[Rl]||o[nt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(a),r.head.insertBefore(o,r.querySelector("head > title"))),rt(o,a,n),o[nt]=e,Ie(o),a=o;break e;case"link":var p=Rh("link","href",r).get(a+(n.href||""));if(p){for(var m=0;m<p.length;m++)if(o=p[m],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(m,1);break t}}o=r.createElement(a),rt(o,a,n),r.head.appendChild(o);break;case"meta":if(p=Rh("meta","content",r).get(a+(n.content||""))){for(m=0;m<p.length;m++)if(o=p[m],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(m,1);break t}}o=r.createElement(a),rt(o,a,n),r.head.appendChild(o);break;default:throw Error(c(468,a))}o[nt]=e,Ie(o),a=o}e.stateNode=a}else _h(r,e.type,e.stateNode);else e.stateNode=Ah(r,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?_h(r,e.type,e.stateNode):Ah(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&dc(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),gt(e),a&512&&($e||n===null||It(n,n.return)),n!==null&&a&4&&dc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),gt(e),a&512&&($e||n===null||It(n,n.return)),e.flags&32){r=e.stateNode;try{La(r,"")}catch(ne){_e(e,e.return,ne)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,dc(e,r,n!==null?n.memoizedProps:r)),a&1024&&(mc=!0);break;case 6:if(mt(t,e),gt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ne){_e(e,e.return,ne)}}break;case 3:if(Vr=null,r=Zt,Zt=qr(t.containerInfo),mt(t,e),Zt=r,gt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ml(t.containerInfo)}catch(ne){_e(e,e.return,ne)}mc&&(mc=!1,_p(e));break;case 4:a=Zt,Zt=qr(e.stateNode.containerInfo),mt(t,e),gt(e),Zt=a;break;case 12:mt(t,e),gt(e);break;case 31:mt(t,e),gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,zr(e,a)));break;case 13:mt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Tr=We()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,zr(e,a)));break;case 22:r=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,A=bn,H=$e;if(bn=A||r,$e=H||S,mt(t,e),$e=H,bn=A,gt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||S||bn||$e||Na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(o=S.stateNode,r)p=o.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=S.stateNode;var G=S.memoizedProps.style,R=G!=null&&G.hasOwnProperty("display")?G.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(ne){_e(S,S.return,ne)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(ne){_e(S,S.return,ne)}}}else if(t.tag===18){if(n===null){S=t;try{var M=S.stateNode;r?vh(M,!0):vh(S.stateNode,!1)}catch(ne){_e(S,S.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,zr(e,n))));break;case 19:mt(t,e),gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,zr(e,a)));break;case 30:break;case 21:break;default:mt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(wp(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,o=pc(e);Er(e,o,r);break;case 5:var p=n.stateNode;n.flags&32&&(La(p,""),n.flags&=-33);var m=pc(e);Er(e,m,p);break;case 3:case 4:var S=n.stateNode.containerInfo,A=pc(e);hc(e,A,S);break;default:throw Error(c(161))}}catch(H){_e(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _p(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_p(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function vn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ep(e,t.alternate,t),t=t.sibling}function Na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),Na(t);break;case 1:It(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&vp(t,t.return,n),Na(t);break;case 27:di(t.stateNode);case 26:case 5:It(t,t.return),Na(t);break;case 22:t.memoizedState===null&&Na(t);break;case 30:Na(t);break;default:Na(t)}e=e.sibling}}function Sn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,o=t,p=o.flags;switch(o.tag){case 0:case 11:case 15:Sn(r,o,n),ni(4,o);break;case 1:if(Sn(r,o,n),a=o,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(A){_e(a,a.return,A)}if(a=o,r=a.updateQueue,r!==null){var m=a.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)sd(S[r],m)}catch(A){_e(a,a.return,A)}}n&&p&64&&yp(o),ai(o,o.return);break;case 27:jp(o);case 26:case 5:Sn(r,o,n),n&&a===null&&p&4&&Sp(o),ai(o,o.return);break;case 12:Sn(r,o,n);break;case 31:Sn(r,o,n),n&&p&4&&Tp(r,o);break;case 13:Sn(r,o,n),n&&p&4&&Ap(r,o);break;case 22:o.memoizedState===null&&Sn(r,o,n),ai(o,o.return);break;case 30:break;default:Sn(r,o,n)}t=t.sibling}}function gc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Gl(n))}function xc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e))}function Jt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Op(e,t,n,a),t=t.sibling}function Op(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,n,a),r&2048&&ni(9,t);break;case 1:Jt(e,t,n,a);break;case 3:Jt(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e)));break;case 12:if(r&2048){Jt(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,p=o.id,m=o.onPostCommit;typeof m=="function"&&m(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){_e(t,t.return,S)}}else Jt(e,t,n,a);break;case 31:Jt(e,t,n,a);break;case 13:Jt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,p=t.alternate,t.memoizedState!==null?o._visibility&2?Jt(e,t,n,a):li(e,t):o._visibility&2?Jt(e,t,n,a):(o._visibility|=2,ll(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&gc(p,t);break;case 24:Jt(e,t,n,a),r&2048&&xc(t.alternate,t);break;default:Jt(e,t,n,a)}}function ll(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,p=t,m=n,S=a,A=p.flags;switch(p.tag){case 0:case 11:case 15:ll(o,p,m,S,r),ni(8,p);break;case 23:break;case 22:var H=p.stateNode;p.memoizedState!==null?H._visibility&2?ll(o,p,m,S,r):li(o,p):(H._visibility|=2,ll(o,p,m,S,r)),r&&A&2048&&gc(p.alternate,p);break;case 24:ll(o,p,m,S,r),r&&A&2048&&xc(p.alternate,p);break;default:ll(o,p,m,S,r)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:li(n,a),r&2048&&gc(a.alternate,a);break;case 24:li(n,a),r&2048&&xc(a.alternate,a);break;default:li(n,a)}t=t.sibling}}var ii=8192;function il(e,t,n){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)Dp(e,t,n),e=e.sibling}function Dp(e,t,n){switch(e.tag){case 26:il(e,t,n),e.flags&ii&&e.memoizedState!==null&&ib(n,Zt,e.memoizedState,e.memoizedProps);break;case 5:il(e,t,n);break;case 3:case 4:var a=Zt;Zt=qr(e.stateNode.containerInfo),il(e,t,n),Zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ii,ii=16777216,il(e,t,n),ii=a):il(e,t,n));break;default:il(e,t,n)}}function Mp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];et=a,Up(a,e)}Mp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kp(e),e=e.sibling}function kp(e){switch(e.tag){case 0:case 11:case 15:ri(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:ri(e);break;case 12:ri(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cr(e)):ri(e);break;default:ri(e)}}function Cr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];et=a,Up(a,e)}Mp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),Cr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Cr(t));break;default:Cr(t)}e=e.sibling}}function Up(e,t){for(;et!==null;){var n=et;switch(n.tag){case 0:case 11:case 15:Jn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Gl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,et=a;else e:for(n=e;et!==null;){a=et;var r=a.sibling,o=a.return;if(zp(a),a===n){et=null;break e}if(r!==null){r.return=o,et=r;break e}et=o}}}var vx={getCacheForType:function(e){var t=lt(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return lt(Je).controller.signal}},Sx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ue=null,be=null,Se=0,Re=0,Ct=null,Kn=!1,rl=!1,bc=!1,wn=0,Ge=0,Fn=0,Ea=0,yc=0,Tt=0,ol=0,oi=null,xt=null,vc=!1,Tr=0,Bp=0,Ar=1/0,Rr=null,$n=null,Pe=0,Wn=null,sl=null,jn=0,Sc=0,wc=null,Lp=null,si=0,jc=null;function At(){return(Ae&2)!==0&&Se!==0?Se&-Se:_.T!==null?Ac():Iu()}function Hp(){if(Tt===0)if((Se&536870912)===0||Ne){var e=Li;Li<<=1,(Li&3932160)===0&&(Li=262144),Tt=e}else Tt=536870912;return e=Et.current,e!==null&&(e.flags|=32),Tt}function bt(e,t,n){(e===Ue&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(cl(e,0),Pn(e,Se,Tt,!1)),Al(e,n),((Ae&2)===0||e!==Ue)&&(e===Ue&&((Ae&2)===0&&(Ea|=n),Ge===4&&Pn(e,Se,Tt,!1)),en(e))}function qp(e,t,n){if((Ae&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Tl(e,t),r=a?Nx(e,t):Ec(e,t,!0),o=a;do{if(r===0){rl&&!a&&Pn(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!wx(n)){r=Ec(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var m=e;r=oi;var S=m.current.memoizedState.isDehydrated;if(S&&(cl(m,p).flags|=256),p=Ec(m,p,!1),p!==2){if(bc&&!S){m.errorRecoveryDisabledLanes|=o,Ea|=o,r=4;break e}o=xt,xt=r,o!==null&&(xt===null?xt=o:xt.push.apply(xt,o))}r=p}if(o=!1,r!==2)continue}}if(r===1){cl(e,0),Pn(e,t,0,!0);break}e:{switch(a=e,o=r,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Pn(a,t,Tt,!Kn);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=Tr+300-We(),10<r)){if(Pn(a,t,Tt,!Kn),qi(a,0,!0)!==0)break e;jn=t,a.timeoutHandle=xh(Yp.bind(null,a,n,xt,Rr,vc,t,Tt,Ea,ol,Kn,o,"Throttled",-0,0),r);break e}Yp(a,n,xt,Rr,vc,t,Tt,Ea,ol,Kn,o,null,-0,0)}}break}while(!0);en(e)}function Yp(e,t,n,a,r,o,p,m,S,A,H,G,R,M){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Dp(t,o,G);var ne=(o&62914560)===o?Tr-We():(o&4194048)===o?Bp-We():0;if(ne=rb(G,ne),ne!==null){jn=o,e.cancelPendingCommit=ne(Fp.bind(null,e,t,o,n,a,r,p,m,S,H,G,null,R,M)),Pn(e,o,p,!A);return}}Fp(e,t,o,n,a,r,p,m,S)}function wx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],o=r.getSnapshot;r=r.value;try{if(!jt(o(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t,n,a){t&=~yc,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var o=31-wt(r),p=1<<o;a[o]=-1,r&=~p}n!==0&&$u(e,n,t)}function _r(){return(Ae&6)===0?(ci(0),!1):!0}function Nc(){if(be!==null){if(Re===0)var e=be.return;else e=be,dn=ga=null,qs(e),Ia=null,Ql=0,e=be;for(;e!==null;)bp(e.alternate,e),e=e.return;be=null}}function cl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Vx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jn=0,Nc(),Ue=e,be=n=un(e.current,null),Se=t,Re=0,Ct=null,Kn=!1,rl=Tl(e,t),bc=!1,ol=Tt=yc=Ea=Fn=Ge=0,xt=oi=null,vc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-wt(a),o=1<<r;t|=e[r],a&=~o}return wn=t,Pi(),n}function Vp(e,t){pe=null,_.H=Il,t===Pa||t===rr?(t=ld(),Re=3):t===Ts?(t=ld(),Re=4):Re=t===nc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,be===null&&(Ge=1,vr(e,kt(t,e.current)))}function Gp(){var e=Et.current;return e===null?!0:(Se&4194048)===Se?Ht===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Ht:!1}function Xp(){var e=_.H;return _.H=Il,e===null?Il:e}function Qp(){var e=_.A;return _.A=vx,e}function Or(){Ge=4,Kn||(Se&4194048)!==Se&&Et.current!==null||(rl=!0),(Fn&134217727)===0&&(Ea&134217727)===0||Ue===null||Pn(Ue,Se,Tt,!1)}function Ec(e,t,n){var a=Ae;Ae|=2;var r=Xp(),o=Qp();(Ue!==e||Se!==t)&&(Rr=null,cl(e,t)),t=!1;var p=Ge;e:do try{if(Re!==0&&be!==null){var m=be,S=Ct;switch(Re){case 8:Nc(),p=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var A=Re;if(Re=0,Ct=null,ul(e,m,S,A),n&&rl){p=0;break e}break;default:A=Re,Re=0,Ct=null,ul(e,m,S,A)}}jx(),p=Ge;break}catch(H){Vp(e,H)}while(!0);return t&&e.shellSuspendCounter++,dn=ga=null,Ae=a,_.H=r,_.A=o,be===null&&(Ue=null,Se=0,Pi()),p}function jx(){for(;be!==null;)Zp(be)}function Nx(e,t){var n=Ae;Ae|=2;var a=Xp(),r=Qp();Ue!==e||Se!==t?(Rr=null,Ar=We()+500,cl(e,t)):rl=Tl(e,t);e:do try{if(Re!==0&&be!==null){t=be;var o=Ct;t:switch(Re){case 1:Re=0,Ct=null,ul(e,t,o,1);break;case 2:case 9:if(nd(o)){Re=0,Ct=null,Jp(t);break}t=function(){Re!==2&&Re!==9||Ue!==e||(Re=7),en(e)},o.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:nd(o)?(Re=0,Ct=null,Jp(t)):(Re=0,Ct=null,ul(e,t,o,7));break;case 5:var p=null;switch(be.tag){case 26:p=be.memoizedState;case 5:case 27:var m=be;if(p?Oh(p):m.stateNode.complete){Re=0,Ct=null;var S=m.sibling;if(S!==null)be=S;else{var A=m.return;A!==null?(be=A,Dr(A)):be=null}break t}}Re=0,Ct=null,ul(e,t,o,5);break;case 6:Re=0,Ct=null,ul(e,t,o,6);break;case 8:Nc(),Ge=6;break e;default:throw Error(c(462))}}Ex();break}catch(H){Vp(e,H)}while(!0);return dn=ga=null,_.H=a,_.A=r,Ae=n,be!==null?0:(Ue=null,Se=0,Pi(),Ge)}function Ex(){for(;be!==null&&!rn();)Zp(be)}function Zp(e){var t=gp(e.alternate,e,wn);e.memoizedProps=e.pendingProps,t===null?Dr(e):be=t}function Jp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=up(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=up(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:qs(t);default:bp(n,t),t=be=Qf(t,wn),t=gp(n,t,wn)}e.memoizedProps=e.pendingProps,t===null?Dr(e):be=t}function ul(e,t,n,a){dn=ga=null,qs(t),Ia=null,Ql=0;var r=t.return;try{if(px(e,r,t,n,Se)){Ge=1,vr(e,kt(n,e.current)),be=null;return}}catch(o){if(r!==null)throw be=r,o;Ge=1,vr(e,kt(n,e.current)),be=null;return}t.flags&32768?(Ne||a===1?e=!0:rl||(Se&536870912)!==0?e=!1:(Kn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Et.current,a!==null&&a.tag===13&&(a.flags|=16384))),Kp(t,e)):Dr(t)}function Dr(e){var t=e;do{if((t.flags&32768)!==0){Kp(t,Kn);return}e=t.return;var n=gx(t.alternate,t,wn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ge===0&&(Ge=5)}function Kp(e,t){do{var n=xx(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ge=6,be=null}function Fp(e,t,n,a,r,o,p,m,S){e.cancelPendingCommit=null;do Mr();while(Pe!==0);if((Ae&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=ps,lg(e,n,o,p,m,S),e===Ue&&(be=Ue=null,Se=0),sl=t,Wn=e,jn=n,Sc=o,wc=r,Lp=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ax(_a,function(){return eh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,r=J.p,J.p=2,p=Ae,Ae|=4;try{bx(e,t,n)}finally{Ae=p,J.p=r,_.T=a}}Pe=1,$p(),Wp(),Pp()}}function $p(){if(Pe===1){Pe=0;var e=Wn,t=sl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var a=J.p;J.p=2;var r=Ae;Ae|=4;try{Rp(t,e);var o=Bc,p=Uf(e.containerInfo),m=o.focusedElem,S=o.selectionRange;if(p!==m&&m&&m.ownerDocument&&kf(m.ownerDocument.documentElement,m)){if(S!==null&&ss(m)){var A=S.start,H=S.end;if(H===void 0&&(H=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(H,m.value.length);else{var G=m.ownerDocument||document,R=G&&G.defaultView||window;if(R.getSelection){var M=R.getSelection(),ne=m.textContent.length,se=Math.min(S.start,ne),ke=S.end===void 0?se:Math.min(S.end,ne);!M.extend&&se>ke&&(p=ke,ke=se,se=p);var E=Mf(m,se),j=Mf(m,ke);if(E&&j&&(M.rangeCount!==1||M.anchorNode!==E.node||M.anchorOffset!==E.offset||M.focusNode!==j.node||M.focusOffset!==j.offset)){var T=G.createRange();T.setStart(E.node,E.offset),M.removeAllRanges(),se>ke?(M.addRange(T),M.extend(j.node,j.offset)):(T.setEnd(j.node,j.offset),M.addRange(T))}}}}for(G=[],M=m;M=M.parentNode;)M.nodeType===1&&G.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<G.length;m++){var Y=G[m];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Zr=!!Uc,Bc=Uc=null}finally{Ae=r,J.p=a,_.T=n}}e.current=t,Pe=2}}function Wp(){if(Pe===2){Pe=0;var e=Wn,t=sl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var a=J.p;J.p=2;var r=Ae;Ae|=4;try{Ep(e,t.alternate,t)}finally{Ae=r,J.p=a,_.T=n}}Pe=3}}function Pp(){if(Pe===4||Pe===3){Pe=0,Gt();var e=Wn,t=sl,n=jn,a=Lp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,sl=Wn=null,Ip(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&($n=null),Go(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,r=J.p,J.p=2,_.T=null;try{for(var o=e.onRecoverableError,p=0;p<a.length;p++){var m=a[p];o(m.value,{componentStack:m.stack})}}finally{_.T=t,J.p=r}}(jn&3)!==0&&Mr(),en(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===jc?si++:(si=0,jc=e):si=0,ci(0)}}function Ip(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gl(t)))}function Mr(){return $p(),Wp(),Pp(),eh()}function eh(){if(Pe!==5)return!1;var e=Wn,t=Sc;Sc=0;var n=Go(jn),a=_.T,r=J.p;try{J.p=32>n?32:n,_.T=null,n=wc,wc=null;var o=Wn,p=jn;if(Pe=0,sl=Wn=null,jn=0,(Ae&6)!==0)throw Error(c(331));var m=Ae;if(Ae|=4,kp(o.current),Op(o,o.current,p,n),Ae=m,ci(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Cl,o)}catch{}return!0}finally{J.p=r,_.T=a,Ip(e,t)}}function th(e,t,n){t=kt(n,t),t=tc(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(Al(e,2),en(e))}function _e(e,t,n){if(e.tag===3)th(e,e,n);else for(;t!==null;){if(t.tag===3){th(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($n===null||!$n.has(a))){e=kt(n,e),n=np(2),a=Xn(t,n,2),a!==null&&(ap(n,a,t,e),Al(a,2),en(a));break}}t=t.return}}function zc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Sx;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(bc=!0,r.add(n),e=zx.bind(null,e,t,n),t.then(e,e))}function zx(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ue===e&&(Se&n)===n&&(Ge===4||Ge===3&&(Se&62914560)===Se&&300>We()-Tr?(Ae&2)===0&&cl(e,0):yc|=n,ol===Se&&(ol=0)),en(e)}function nh(e,t){t===0&&(t=Fu()),e=pa(e,t),e!==null&&(Al(e,t),en(e))}function Cx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nh(e,n)}function Tx(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),nh(e,n)}function Ax(e,t){return fe(e,t)}var kr=null,fl=null,Cc=!1,Ur=!1,Tc=!1,In=0;function en(e){e!==fl&&e.next===null&&(fl===null?kr=fl=e:fl=fl.next=e),Ur=!0,Cc||(Cc=!0,_x())}function ci(e,t){if(!Tc&&Ur){Tc=!0;do for(var n=!1,a=kr;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var o=0;else{var p=a.suspendedLanes,m=a.pingedLanes;o=(1<<31-wt(42|e)+1)-1,o&=r&~(p&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,rh(a,o))}else o=Se,o=qi(a,a===Ue?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Tl(a,o)||(n=!0,rh(a,o));a=a.next}while(n);Tc=!1}}function Rx(){ah()}function ah(){Ur=Cc=!1;var e=0;In!==0&&Yx()&&(e=In);for(var t=We(),n=null,a=kr;a!==null;){var r=a.next,o=lh(a,t);o===0?(a.next=null,n===null?kr=r:n.next=r,r===null&&(fl=n)):(n=a,(e!==0||(o&3)!==0)&&(Ur=!0)),a=r}Pe!==0&&Pe!==5||ci(e),In!==0&&(In=0)}function lh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var p=31-wt(o),m=1<<p,S=r[p];S===-1?((m&n)===0||(m&a)!==0)&&(r[p]=ag(m,t)):S<=t&&(e.expiredLanes|=m),o&=~m}if(t=Ue,n=Se,n=qi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&xe(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Tl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&xe(a),Go(n)){case 2:case 8:n=Xt;break;case 32:n=_a;break;case 268435456:n=zl;break;default:n=_a}return a=ih.bind(null,e),n=fe(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&xe(a),e.callbackPriority=2,e.callbackNode=null,2}function ih(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var a=Se;return a=qi(e,e===Ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(qp(e,a,t),lh(e,We()),e.callbackNode!=null&&e.callbackNode===n?ih.bind(null,e):null)}function rh(e,t){if(Mr())return null;qp(e,t,!0)}function _x(){Gx(function(){(Ae&6)!==0?fe(Dn,Rx):ah()})}function Ac(){if(In===0){var e=$a;e===0&&(e=Bi,Bi<<=1,(Bi&261888)===0&&(Bi=256)),In=e}return In}function oh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xi(""+e)}function sh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ox(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var o=oh((r[dt]||null).action),p=a.submitter;p&&(t=(t=p[dt]||null)?oh(t.formAction):p.getAttribute("formAction"),t!==null&&(o=t,p=null));var m=new Ki("action","action",null,a,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(In!==0){var S=p?sh(r,p):new FormData(r);Fs(n,{pending:!0,data:S,method:r.method,action:o},null,S)}}else typeof o=="function"&&(m.preventDefault(),S=p?sh(r,p):new FormData(r),Fs(n,{pending:!0,data:S,method:r.method,action:o},o,S))},currentTarget:r}]})}}for(var Rc=0;Rc<ds.length;Rc++){var _c=ds[Rc],Dx=_c.toLowerCase(),Mx=_c[0].toUpperCase()+_c.slice(1);Qt(Dx,"on"+Mx)}Qt(Hf,"onAnimationEnd"),Qt(qf,"onAnimationIteration"),Qt(Yf,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt($g,"onTransitionRun"),Qt(Wg,"onTransitionStart"),Qt(Pg,"onTransitionCancel"),Qt(Vf,"onTransitionEnd"),Ua("onMouseEnter",["mouseout","mouseover"]),Ua("onMouseLeave",["mouseout","mouseover"]),Ua("onPointerEnter",["pointerout","pointerover"]),Ua("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function ch(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var p=a.length-1;0<=p;p--){var m=a[p],S=m.instance,A=m.currentTarget;if(m=m.listener,S!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=A;try{o(r)}catch(H){Wi(H)}r.currentTarget=null,o=S}else for(p=0;p<a.length;p++){if(m=a[p],S=m.instance,A=m.currentTarget,m=m.listener,S!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=A;try{o(r)}catch(H){Wi(H)}r.currentTarget=null,o=S}}}}function ye(e,t){var n=t[Xo];n===void 0&&(n=t[Xo]=new Set);var a=e+"__bubble";n.has(a)||(uh(t,e,2,!1),n.add(a))}function Oc(e,t,n){var a=0;t&&(a|=4),uh(n,e,a,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[Br]){e[Br]=!0,nf.forEach(function(n){n!=="selectionchange"&&(kx.has(n)||Oc(n,!1,e),Oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,Oc("selectionchange",!1,t))}}function uh(e,t,n,a){switch(Hh(t)){case 2:var r=cb;break;case 8:r=ub;break;default:r=Kc}n=r.bind(null,t,n,e),r=void 0,!Io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Mc(e,t,n,a,r){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var m=a.stateNode.containerInfo;if(m===r)break;if(p===4)for(p=a.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;m!==null;){if(p=Da(m),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){a=o=p;continue e}m=m.parentNode}}a=a.return}mf(function(){var A=o,H=Wo(n),G=[];e:{var R=Gf.get(e);if(R!==void 0){var M=Ki,ne=e;switch(e){case"keypress":if(Zi(n)===0)break e;case"keydown":case"keyup":M=Tg;break;case"focusin":ne="focus",M=as;break;case"focusout":ne="blur",M=as;break;case"beforeblur":case"afterblur":M=as;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=_g;break;case Hf:case qf:case Yf:M=yg;break;case Vf:M=Dg;break;case"scroll":case"scrollend":M=hg;break;case"wheel":M=kg;break;case"copy":case"cut":case"paste":M=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=vf;break;case"toggle":case"beforetoggle":M=Bg}var se=(t&4)!==0,ke=!se&&(e==="scroll"||e==="scrollend"),E=se?R!==null?R+"Capture":null:R;se=[];for(var j=A,T;j!==null;){var Y=j;if(T=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||T===null||E===null||(Y=Ol(j,E),Y!=null&&se.push(fi(j,Y,T))),ke)break;j=j.return}0<se.length&&(R=new M(R,ne,null,n,H),G.push({event:R,listeners:se}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",R&&n!==$o&&(ne=n.relatedTarget||n.fromElement)&&(Da(ne)||ne[Oa]))break e;if((M||R)&&(R=H.window===H?H:(R=H.ownerDocument)?R.defaultView||R.parentWindow:window,M?(ne=n.relatedTarget||n.toElement,M=A,ne=ne?Da(ne):null,ne!==null&&(ke=d(ne),se=ne.tag,ne!==ke||se!==5&&se!==27&&se!==6)&&(ne=null)):(M=null,ne=A),M!==ne)){if(se=bf,Y="onMouseLeave",E="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(se=vf,Y="onPointerLeave",E="onPointerEnter",j="pointer"),ke=M==null?R:_l(M),T=ne==null?R:_l(ne),R=new se(Y,j+"leave",M,n,H),R.target=ke,R.relatedTarget=T,Y=null,Da(H)===A&&(se=new se(E,j+"enter",ne,n,H),se.target=T,se.relatedTarget=ke,Y=se),ke=Y,M&&ne)t:{for(se=Ux,E=M,j=ne,T=0,Y=E;Y;Y=se(Y))T++;Y=0;for(var oe=j;oe;oe=se(oe))Y++;for(;0<T-Y;)E=se(E),T--;for(;0<Y-T;)j=se(j),Y--;for(;T--;){if(E===j||j!==null&&E===j.alternate){se=E;break t}E=se(E),j=se(j)}se=null}else se=null;M!==null&&fh(G,R,M,se,!1),ne!==null&&ke!==null&&fh(G,ke,ne,se,!0)}}e:{if(R=A?_l(A):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var ze=Tf;else if(zf(R))if(Af)ze=Jg;else{ze=Qg;var ie=Xg}else M=R.nodeName,!M||M.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&Fo(A.elementType)&&(ze=Tf):ze=Zg;if(ze&&(ze=ze(e,A))){Cf(G,ze,n,H);break e}ie&&ie(e,R,A),e==="focusout"&&A&&R.type==="number"&&A.memoizedProps.value!=null&&Ko(R,"number",R.value)}switch(ie=A?_l(A):window,e){case"focusin":(zf(ie)||ie.contentEditable==="true")&&(Va=ie,cs=A,ql=null);break;case"focusout":ql=cs=Va=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,Bf(G,n,H);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":Bf(G,n,H)}var me;if(is)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ya?Nf(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(Sf&&n.locale!=="ko"&&(Ya||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ya&&(me=gf()):(Bn=H,es="value"in Bn?Bn.value:Bn.textContent,Ya=!0)),ie=Lr(A,we),0<ie.length&&(we=new yf(we,e,null,n,H),G.push({event:we,listeners:ie}),me?we.data=me:(me=Ef(n),me!==null&&(we.data=me)))),(me=Hg?qg(e,n):Yg(e,n))&&(we=Lr(A,"onBeforeInput"),0<we.length&&(ie=new yf("onBeforeInput","beforeinput",null,n,H),G.push({event:ie,listeners:we}),ie.data=me)),Ox(G,e,A,n,H)}ch(G,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lr(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Ol(e,n),r!=null&&a.unshift(fi(e,r,o)),r=Ol(e,t),r!=null&&a.push(fi(e,r,o))),e.tag===3)return a;e=e.return}return[]}function Ux(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fh(e,t,n,a,r){for(var o=t._reactName,p=[];n!==null&&n!==a;){var m=n,S=m.alternate,A=m.stateNode;if(m=m.tag,S!==null&&S===a)break;m!==5&&m!==26&&m!==27||A===null||(S=A,r?(A=Ol(n,o),A!=null&&p.unshift(fi(n,A,S))):r||(A=Ol(n,o),A!=null&&p.push(fi(n,A,S)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Bx=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function dh(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(Lx,"")}function ph(e,t){return t=dh(t),dh(e)===t}function Me(e,t,n,a,r,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||La(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&La(e,""+a);break;case"className":Vi(e,"class",a);break;case"tabIndex":Vi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Vi(e,n,a);break;case"style":pf(e,a,o);break;case"data":if(t!=="object"){Vi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Xi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Me(e,t,"name",r.name,r,null),Me(e,t,"formEncType",r.formEncType,r,null),Me(e,t,"formMethod",r.formMethod,r,null),Me(e,t,"formTarget",r.formTarget,r,null)):(Me(e,t,"encType",r.encType,r,null),Me(e,t,"method",r.method,r,null),Me(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Xi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=sn);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Xi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Yi(e,"popover",a);break;case"xlinkActuate":on(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":on(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":on(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":on(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":on(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":on(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":on(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":on(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":on(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dg.get(n)||n,Yi(e,n,a))}}function kc(e,t,n,a,r,o){switch(n){case"style":pf(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?La(e,a):(typeof a=="number"||typeof a=="bigint")&&La(e,""+a);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!af.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),o=e[dt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Yi(e,n,a)}}}function rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var a=!1,r=!1,o;for(o in n)if(n.hasOwnProperty(o)){var p=n[o];if(p!=null)switch(o){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Me(e,t,o,p,n,null)}}r&&Me(e,t,"srcSet",n.srcSet,n,null),a&&Me(e,t,"src",n.src,n,null);return;case"input":ye("invalid",e);var m=o=p=r=null,S=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var H=n[a];if(H!=null)switch(a){case"name":r=H;break;case"type":p=H;break;case"checked":S=H;break;case"defaultChecked":A=H;break;case"value":o=H;break;case"defaultValue":m=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:Me(e,t,a,H,n,null)}}cf(e,o,m,S,A,p,r,!1);return;case"select":ye("invalid",e),a=p=o=null;for(r in n)if(n.hasOwnProperty(r)&&(m=n[r],m!=null))switch(r){case"value":o=m;break;case"defaultValue":p=m;break;case"multiple":a=m;default:Me(e,t,r,m,n,null)}t=o,n=p,e.multiple=!!a,t!=null?Ba(e,!!a,t,!1):n!=null&&Ba(e,!!a,n,!0);return;case"textarea":ye("invalid",e),o=r=a=null;for(p in n)if(n.hasOwnProperty(p)&&(m=n[p],m!=null))switch(p){case"value":a=m;break;case"defaultValue":r=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:Me(e,t,p,m,n,null)}ff(e,a,r,o);return;case"option":for(S in n)n.hasOwnProperty(S)&&(a=n[S],a!=null)&&(S==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Me(e,t,S,a,n,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(a=0;a<ui.length;a++)ye(ui[a],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Me(e,t,A,a,n,null)}return;default:if(Fo(t)){for(H in n)n.hasOwnProperty(H)&&(a=n[H],a!==void 0&&kc(e,t,H,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&Me(e,t,m,a,n,null))}function Hx(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,p=null,m=null,S=null,A=null,H=null;for(M in n){var G=n[M];if(n.hasOwnProperty(M)&&G!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":S=G;default:a.hasOwnProperty(M)||Me(e,t,M,null,a,G)}}for(var R in a){var M=a[R];if(G=n[R],a.hasOwnProperty(R)&&(M!=null||G!=null))switch(R){case"type":o=M;break;case"name":r=M;break;case"checked":A=M;break;case"defaultChecked":H=M;break;case"value":p=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==G&&Me(e,t,R,M,a,G)}}Jo(e,p,m,S,A,H,o,r);return;case"select":M=p=m=R=null;for(o in n)if(S=n[o],n.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":M=S;default:a.hasOwnProperty(o)||Me(e,t,o,null,a,S)}for(r in a)if(o=a[r],S=n[r],a.hasOwnProperty(r)&&(o!=null||S!=null))switch(r){case"value":R=o;break;case"defaultValue":m=o;break;case"multiple":p=o;default:o!==S&&Me(e,t,r,o,a,S)}t=m,n=p,a=M,R!=null?Ba(e,!!n,R,!1):!!a!=!!n&&(t!=null?Ba(e,!!n,t,!0):Ba(e,!!n,n?[]:"",!1));return;case"textarea":M=R=null;for(m in n)if(r=n[m],n.hasOwnProperty(m)&&r!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Me(e,t,m,null,a,r)}for(p in a)if(r=a[p],o=n[p],a.hasOwnProperty(p)&&(r!=null||o!=null))switch(p){case"value":R=r;break;case"defaultValue":M=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==o&&Me(e,t,p,r,a,o)}uf(e,R,M);return;case"option":for(var ne in n)R=n[ne],n.hasOwnProperty(ne)&&R!=null&&!a.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Me(e,t,ne,null,a,R));for(S in a)R=a[S],M=n[S],a.hasOwnProperty(S)&&R!==M&&(R!=null||M!=null)&&(S==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Me(e,t,S,R,a,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)R=n[se],n.hasOwnProperty(se)&&R!=null&&!a.hasOwnProperty(se)&&Me(e,t,se,null,a,R);for(A in a)if(R=a[A],M=n[A],a.hasOwnProperty(A)&&R!==M&&(R!=null||M!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Me(e,t,A,R,a,M)}return;default:if(Fo(t)){for(var ke in n)R=n[ke],n.hasOwnProperty(ke)&&R!==void 0&&!a.hasOwnProperty(ke)&&kc(e,t,ke,void 0,a,R);for(H in a)R=a[H],M=n[H],!a.hasOwnProperty(H)||R===M||R===void 0&&M===void 0||kc(e,t,H,R,a,M);return}}for(var E in n)R=n[E],n.hasOwnProperty(E)&&R!=null&&!a.hasOwnProperty(E)&&Me(e,t,E,null,a,R);for(G in a)R=a[G],M=n[G],!a.hasOwnProperty(G)||R===M||R==null&&M==null||Me(e,t,G,R,a,M)}function hh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],o=r.transferSize,p=r.initiatorType,m=r.duration;if(o&&m&&hh(p)){for(p=0,m=r.responseEnd,a+=1;a<n.length;a++){var S=n[a],A=S.startTime;if(A>m)break;var H=S.transferSize,G=S.initiatorType;H&&hh(G)&&(S=S.responseEnd,p+=H*(S<m?1:(m-A)/(S-A)))}if(--a,t+=8*(o+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uc=null,Bc=null;function Hr(e){return e.nodeType===9?e:e.ownerDocument}function mh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function Yx(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var xh=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(e){return bh.resolve(null).then(e).catch(Xx)}:xh;function Xx(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function yh(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),ml(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")di(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,di(n);for(var o=n.firstChild;o;){var p=o.nextSibling,m=o.nodeName;o[Rl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=p}}else n==="body"&&di(e.ownerDocument.body);n=r}while(n);ml(t)}function vh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function qc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qc(n),Qo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Qx(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=qt(e.nextSibling),e===null)break}return null}function Zx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=qt(e.nextSibling),e===null))return null;return e}function Sh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qt(e.nextSibling),e===null))return null;return e}function Yc(e){return e.data==="$?"||e.data==="$~"}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Gc=null;function wh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return qt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function jh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Nh(e,t,n){switch(t=Hr(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function di(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qo(e)}var Yt=new Map,Eh=new Set;function qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=J.d;J.d={f:Kx,r:Fx,D:$x,C:Wx,L:Px,m:Ix,X:tb,S:eb,M:nb};function Kx(){var e=Nn.f(),t=_r();return e||t}function Fx(e){var t=Ma(e);t!==null&&t.tag===5&&t.type==="form"?Vd(t):Nn.r(e)}var dl=typeof document>"u"?null:document;function zh(e,t,n){var a=dl;if(a&&typeof t=="string"&&t){var r=Dt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Eh.has(r)||(Eh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),rt(t,"link",e),Ie(t),a.head.appendChild(t)))}}function $x(e){Nn.D(e),zh("dns-prefetch",e,null)}function Wx(e,t){Nn.C(e,t),zh("preconnect",e,t)}function Px(e,t,n){Nn.L(e,t,n);var a=dl;if(a&&e&&t){var r='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Dt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Dt(n.imageSizes)+'"]')):r+='[href="'+Dt(e)+'"]';var o=r;switch(t){case"style":o=pl(e);break;case"script":o=hl(e)}Yt.has(o)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Yt.set(o,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(pi(o))||t==="script"&&a.querySelector(hi(o))||(t=a.createElement("link"),rt(t,"link",e),Ie(t),a.head.appendChild(t)))}}function Ix(e,t){Nn.m(e,t);var n=dl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Dt(a)+'"][href="'+Dt(e)+'"]',o=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=hl(e)}if(!Yt.has(o)&&(e=v({rel:"modulepreload",href:e},t),Yt.set(o,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(hi(o)))return}a=n.createElement("link"),rt(a,"link",e),Ie(a),n.head.appendChild(a)}}}function eb(e,t,n){Nn.S(e,t,n);var a=dl;if(a&&e){var r=ka(a).hoistableStyles,o=pl(e);t=t||"default";var p=r.get(o);if(!p){var m={loading:0,preload:null};if(p=a.querySelector(pi(o)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Yt.get(o))&&Xc(e,n);var S=p=a.createElement("link");Ie(S),rt(S,"link",e),S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),S.addEventListener("load",function(){m.loading|=1}),S.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Yr(p,t,a)}p={type:"stylesheet",instance:p,count:1,state:m},r.set(o,p)}}}function tb(e,t){Nn.X(e,t);var n=dl;if(n&&e){var a=ka(n).hoistableScripts,r=hl(e),o=a.get(r);o||(o=n.querySelector(hi(r)),o||(e=v({src:e,async:!0},t),(t=Yt.get(r))&&Qc(e,t),o=n.createElement("script"),Ie(o),rt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function nb(e,t){Nn.M(e,t);var n=dl;if(n&&e){var a=ka(n).hoistableScripts,r=hl(e),o=a.get(r);o||(o=n.querySelector(hi(r)),o||(e=v({src:e,async:!0,type:"module"},t),(t=Yt.get(r))&&Qc(e,t),o=n.createElement("script"),Ie(o),rt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Ch(e,t,n,a){var r=(r=ge.current)?qr(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=pl(n.href),n=ka(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=pl(n.href);var o=ka(r).hoistableStyles,p=o.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,p),(o=r.querySelector(pi(e)))&&!o._p&&(p.instance=o,p.state.loading=5),Yt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Yt.set(e,n),o||ab(r,e,n,p.state))),t&&a===null)throw Error(c(528,""));return p}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hl(n),n=ka(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function pl(e){return'href="'+Dt(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function Th(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function ab(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),rt(t,"link",n),Ie(t),e.head.appendChild(t))}function hl(e){return'[src="'+Dt(e)+'"]'}function hi(e){return"script[async]"+e}function Ah(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Dt(n.href)+'"]');if(a)return t.instance=a,Ie(a),a;var r=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ie(a),rt(a,"style",r),Yr(a,n.precedence,e),t.instance=a;case"stylesheet":r=pl(n.href);var o=e.querySelector(pi(r));if(o)return t.state.loading|=4,t.instance=o,Ie(o),o;a=Th(n),(r=Yt.get(r))&&Xc(a,r),o=(e.ownerDocument||e).createElement("link"),Ie(o);var p=o;return p._p=new Promise(function(m,S){p.onload=m,p.onerror=S}),rt(o,"link",a),t.state.loading|=4,Yr(o,n.precedence,e),t.instance=o;case"script":return o=hl(n.src),(r=e.querySelector(hi(o)))?(t.instance=r,Ie(r),r):(a=n,(r=Yt.get(o))&&(a=v({},n),Qc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ie(r),rt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Yr(a,n.precedence,e));return t.instance}function Yr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,o=r,p=0;p<a.length;p++){var m=a[p];if(m.dataset.precedence===t)o=m;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vr=null;function Rh(e,t,n){if(Vr===null){var a=new Map,r=Vr=new Map;r.set(n,a)}else r=Vr,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var o=n[r];if(!(o[Rl]||o[nt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var p=o.getAttribute(t)||"";p=e+p;var m=a.get(p);m?m.push(o):a.set(p,[o])}}return a}function _h(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function lb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Oh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ib(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=pl(a.href),o=t.querySelector(pi(r));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,Ie(o);return}o=t.ownerDocument||t,a=Th(a),(r=Yt.get(r))&&Xc(a,r),o=o.createElement("link"),Ie(o);var p=o;p._p=new Promise(function(m,S){p.onload=m,p.onerror=S}),rt(o,"link",a),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Gr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Zc=0;function rb(e,t){return e.stylesheets&&e.count===0&&Qr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Zc===0&&(Zc=62500*qx());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Zc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xr=null;function Qr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xr=new Map,t.forEach(ob,e),Xr=null,Gr.call(e))}function ob(e,t){if(!(t.state.loading&4)){var n=Xr.get(e);if(n)var a=n.get(null);else{n=new Map,Xr.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var p=r[o];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),a=p)}a&&n.set(null,a)}r=t.instance,p=r.getAttribute("data-precedence"),o=n.get(p)||a,o===a&&n.set(null,r),n.set(p,r),this.count++,a=Gr.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:V,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function sb(e,t,n,a,r,o,p,m,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.hiddenUpdates=Yo(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Dh(e,t,n,a,r,o,p,m,S,A,H,G){return e=new sb(e,t,n,p,S,A,H,G,m),t=1,o===!0&&(t|=24),o=Nt(3,null,null,t),e.current=o,o.stateNode=e,t=Es(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},As(o),e}function Mh(e){return e?(e=Qa,e):Qa}function kh(e,t,n,a,r,o){r=Mh(r),a.context===null?a.context=r:a.pendingContext=r,a=Gn(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=Xn(e,a,t),n!==null&&(bt(n,e,t),Jl(n,e,t))}function Uh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jc(e,t){Uh(e,t),(e=e.alternate)&&Uh(e,t)}function Bh(e){if(e.tag===13||e.tag===31){var t=pa(e,67108864);t!==null&&bt(t,e,67108864),Jc(e,67108864)}}function Lh(e){if(e.tag===13||e.tag===31){var t=At();t=Vo(t);var n=pa(e,t);n!==null&&bt(n,e,t),Jc(e,t)}}var Zr=!0;function cb(e,t,n,a){var r=_.T;_.T=null;var o=J.p;try{J.p=2,Kc(e,t,n,a)}finally{J.p=o,_.T=r}}function ub(e,t,n,a){var r=_.T;_.T=null;var o=J.p;try{J.p=8,Kc(e,t,n,a)}finally{J.p=o,_.T=r}}function Kc(e,t,n,a){if(Zr){var r=Fc(a);if(r===null)Mc(e,t,a,Jr,n),qh(e,a);else if(db(r,e,t,n,a))a.stopPropagation();else if(qh(e,a),t&4&&-1<fb.indexOf(e)){for(;r!==null;){var o=Ma(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var p=sa(o.pendingLanes);if(p!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var S=1<<31-wt(p);m.entanglements[1]|=S,p&=~S}en(o),(Ae&6)===0&&(Ar=We()+500,ci(0))}}break;case 31:case 13:m=pa(o,2),m!==null&&bt(m,o,2),_r(),Jc(o,2)}if(o=Fc(a),o===null&&Mc(e,t,a,Jr,n),o===r)break;r=o}r!==null&&a.stopPropagation()}else Mc(e,t,a,null,n)}}function Fc(e){return e=Wo(e),$c(e)}var Jr=null;function $c(e){if(Jr=null,e=Da(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jr=e,null}function Hh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oa()){case Dn:return 2;case Xt:return 8;case _a:case Ho:return 32;case zl:return 268435456;default:return 32}default:return 32}}var Wc=!1,ta=null,na=null,aa=null,gi=new Map,xi=new Map,la=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qh(e,t){switch(e){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function bi(e,t,n,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Ma(t),t!==null&&Bh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function db(e,t,n,a,r){switch(t){case"focusin":return ta=bi(ta,e,t,n,a,r),!0;case"dragenter":return na=bi(na,e,t,n,a,r),!0;case"mouseover":return aa=bi(aa,e,t,n,a,r),!0;case"pointerover":var o=r.pointerId;return gi.set(o,bi(gi.get(o)||null,e,t,n,a,r)),!0;case"gotpointercapture":return o=r.pointerId,xi.set(o,bi(xi.get(o)||null,e,t,n,a,r)),!0}return!1}function Yh(e){var t=Da(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,ef(e.priority,function(){Lh(n)});return}}else if(t===31){if(t=b(n),t!==null){e.blockedOn=t,ef(e.priority,function(){Lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);$o=a,n.target.dispatchEvent(a),$o=null}else return t=Ma(n),t!==null&&Bh(t),e.blockedOn=n,!1;t.shift()}return!0}function Vh(e,t,n){Kr(e)&&n.delete(t)}function pb(){Wc=!1,ta!==null&&Kr(ta)&&(ta=null),na!==null&&Kr(na)&&(na=null),aa!==null&&Kr(aa)&&(aa=null),gi.forEach(Vh),xi.forEach(Vh)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,pb)))}var $r=null;function Gh(e){$r!==e&&($r=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){$r===e&&($r=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if($c(a||n)===null)continue;break}var o=Ma(n);o!==null&&(e.splice(t,3),t-=3,Fs(o,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function ml(e){function t(S){return Fr(S,e)}ta!==null&&Fr(ta,e),na!==null&&Fr(na,e),aa!==null&&Fr(aa,e),gi.forEach(t),xi.forEach(t);for(var n=0;n<la.length;n++){var a=la[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<la.length&&(n=la[0],n.blockedOn===null);)Yh(n),n.blockedOn===null&&la.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],o=n[a+1],p=r[dt]||null;if(typeof o=="function")p||Gh(n);else if(p){var m=null;if(o&&o.hasAttribute("formAction")){if(r=o,p=o[dt]||null)m=p.formAction;else if($c(r)!==null)continue}else m=p.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),Gh(n)}}}function Xh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Pc(e){this._internalRoot=e}Wr.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=At();kh(n,a,e,t,null,null)},Wr.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kh(e.current,2,null,e,null,null),_r(),t[Oa]=null}};function Wr(e){this._internalRoot=e}Wr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<la.length&&t!==0&&t<la[n].priority;n++);la.splice(n,0,e),n===0&&Yh(e)}};var Qh=i.version;if(Qh!=="19.2.3")throw Error(c(527,Qh,"19.2.3"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var hb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{Cl=Pr.inject(hb),St=Pr}catch{}}return vi.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,a="",r=Pd,o=Id,p=ep;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Dh(e,1,!1,null,null,n,a,null,r,o,p,Xh),e[Oa]=t.current,Dc(e),new Pc(t)},vi.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var a=!1,r="",o=Pd,p=Id,m=ep,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=Dh(e,1,!0,t,n??null,a,r,S,o,p,m,Xh),t.context=Mh(null),n=t.current,a=At(),a=Vo(a),r=Gn(a),r.callback=null,Xn(n,r,a),n=a,t.current.lanes=n,Al(t,n),en(t),e[Oa]=t.current,Dc(e),new Wr(t)},vi.version="19.2.3",vi}var tm;function Nb(){if(tm)return tu.exports;tm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),tu.exports=jb(),tu.exports}var Eb=Nb();const zb=Xm(Eb);var nm="popstate";function Cb(l={}){function i(c,f){let{pathname:d,search:h,hash:b}=c.location;return vu("",{pathname:d,search:h,hash:b},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(c,f){return typeof f=="string"?f:Ni(f)}return Ab(i,s,null,l)}function Ye(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function Vt(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Tb(){return Math.random().toString(36).substring(2,10)}function am(l,i){return{usr:l.state,key:l.key,idx:i}}function vu(l,i,s=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?yl(i):i,state:s,key:i&&i.key||c||Tb()}}function Ni({pathname:l="/",search:i="",hash:s=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function yl(l){let i={};if(l){let s=l.indexOf("#");s>=0&&(i.hash=l.substring(s),l=l.substring(0,s));let c=l.indexOf("?");c>=0&&(i.search=l.substring(c),l=l.substring(0,c)),l&&(i.pathname=l)}return i}function Ab(l,i,s,c={}){let{window:f=document.defaultView,v5Compat:d=!1}=c,h=f.history,b="POP",x=null,g=y();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function y(){return(h.state||{idx:null}).idx}function v(){b="POP";let C=y(),B=C==null?null:C-g;g=C,x&&x({action:b,location:k.location,delta:B})}function U(C,B){b="PUSH";let q=vu(k.location,C,B);g=y()+1;let V=am(q,g),F=k.createHref(q);try{h.pushState(V,"",F)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;f.location.assign(F)}d&&x&&x({action:b,location:k.location,delta:1})}function D(C,B){b="REPLACE";let q=vu(k.location,C,B);g=y();let V=am(q,g),F=k.createHref(q);h.replaceState(V,"",F),d&&x&&x({action:b,location:k.location,delta:0})}function z(C){return Rb(C)}let k={get action(){return b},get location(){return l(f,h)},listen(C){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(nm,v),x=C,()=>{f.removeEventListener(nm,v),x=null}},createHref(C){return i(f,C)},createURL:z,encodeLocation(C){let B=z(C);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:U,replace:D,go(C){return h.go(C)}};return k}function Rb(l,i=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(s,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Ni(l);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function Qm(l,i,s="/"){return _b(l,i,s,!1)}function _b(l,i,s,c){let f=typeof i=="string"?yl(i):i,d=Tn(f.pathname||"/",s);if(d==null)return null;let h=Zm(l);Ob(h);let b=null;for(let x=0;b==null&&x<h.length;++x){let g=Gb(d);b=Yb(h[x],g,c)}return b}function Zm(l,i=[],s=[],c="",f=!1){let d=(h,b,x=f,g)=>{let y={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(c)&&x)return;Ye(y.relativePath.startsWith(c),`Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(c.length)}let v=zn([c,y.relativePath]),U=s.concat(y);h.children&&h.children.length>0&&(Ye(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Zm(h.children,i,U,v,x)),!(h.path==null&&!h.index)&&i.push({path:v,score:Hb(v,h.index),routesMeta:U})};return l.forEach((h,b)=>{if(h.path===""||!h.path?.includes("?"))d(h,b);else for(let x of Jm(h.path))d(h,b,!0,x)}),i}function Jm(l){let i=l.split("/");if(i.length===0)return[];let[s,...c]=i,f=s.endsWith("?"),d=s.replace(/\?$/,"");if(c.length===0)return f?[d,""]:[d];let h=Jm(c.join("/")),b=[];return b.push(...h.map(x=>x===""?d:[d,x].join("/"))),f&&b.push(...h),b.map(x=>l.startsWith("/")&&x===""?"/":x)}function Ob(l){l.sort((i,s)=>i.score!==s.score?s.score-i.score:qb(i.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var Db=/^:[\w-]+$/,Mb=3,kb=2,Ub=1,Bb=10,Lb=-2,lm=l=>l==="*";function Hb(l,i){let s=l.split("/"),c=s.length;return s.some(lm)&&(c+=Lb),i&&(c+=kb),s.filter(f=>!lm(f)).reduce((f,d)=>f+(Db.test(d)?Mb:d===""?Ub:Bb),c)}function qb(l,i){return l.length===i.length&&l.slice(0,-1).every((c,f)=>c===i[f])?l[l.length-1]-i[i.length-1]:0}function Yb(l,i,s=!1){let{routesMeta:c}=l,f={},d="/",h=[];for(let b=0;b<c.length;++b){let x=c[b],g=b===c.length-1,y=d==="/"?i:i.slice(d.length)||"/",v=po({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},y),U=x.route;if(!v&&g&&s&&!c[c.length-1].route.index&&(v=po({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},y)),!v)return null;Object.assign(f,v.params),h.push({params:f,pathname:zn([d,v.pathname]),pathnameBase:Jb(zn([d,v.pathnameBase])),route:U}),v.pathnameBase!=="/"&&(d=zn([d,v.pathnameBase]))}return h}function po(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,c]=Vb(l.path,l.caseSensitive,l.end),f=i.match(s);if(!f)return null;let d=f[0],h=d.replace(/(.)\/+$/,"$1"),b=f.slice(1);return{params:c.reduce((g,{paramName:y,isOptional:v},U)=>{if(y==="*"){let z=b[U]||"";h=d.slice(0,d.length-z.length).replace(/(.)\/+$/,"$1")}const D=b[U];return v&&!D?g[y]=void 0:g[y]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:h,pattern:l}}function Vb(l,i=!1,s=!0){Vt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,b,x)=>(c.push({paramName:b,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),c]}function Gb(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Vt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function Tn(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,c=l.charAt(s);return c&&c!=="/"?null:l.slice(s)||"/"}var Km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xb=l=>Km.test(l);function Qb(l,i="/"){let{pathname:s,search:c="",hash:f=""}=typeof l=="string"?yl(l):l,d;if(s)if(Xb(s))d=s;else{if(s.includes("//")){let h=s;s=s.replace(/\/\/+/g,"/"),Vt(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`)}s.startsWith("/")?d=im(s.substring(1),"/"):d=im(s,i)}else d=i;return{pathname:d,search:Kb(c),hash:Fb(f)}}function im(l,i){let s=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function iu(l,i,s,c){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zb(l){return l.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function Mu(l){let i=Zb(l);return i.map((s,c)=>c===i.length-1?s.pathname:s.pathnameBase)}function ku(l,i,s,c=!1){let f;typeof l=="string"?f=yl(l):(f={...l},Ye(!f.pathname||!f.pathname.includes("?"),iu("?","pathname","search",f)),Ye(!f.pathname||!f.pathname.includes("#"),iu("#","pathname","hash",f)),Ye(!f.search||!f.search.includes("#"),iu("#","search","hash",f)));let d=l===""||f.pathname==="",h=d?"/":f.pathname,b;if(h==null)b=s;else{let v=i.length-1;if(!c&&h.startsWith("..")){let U=h.split("/");for(;U[0]==="..";)U.shift(),v-=1;f.pathname=U.join("/")}b=v>=0?i[v]:"/"}let x=Qb(f,b),g=h&&h!=="/"&&h.endsWith("/"),y=(d||h===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(g||y)&&(x.pathname+="/"),x}var zn=l=>l.join("/").replace(/\/\/+/g,"/"),Jb=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Kb=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Fb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,$b=class{constructor(l,i,s,c=!1){this.status=l,this.statusText=i||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Wb(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Pb(l){return l.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $m(l,i){let s=l;if(typeof s!="string"||!Km.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let c=s,f=!1;if(Fm)try{let d=new URL(window.location.href),h=s.startsWith("//")?new URL(d.protocol+s):new URL(s),b=Tn(h.pathname,i);h.origin===d.origin&&b!=null?s=b+h.search+h.hash:f=!0}catch{Vt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Wm=["POST","PUT","PATCH","DELETE"];new Set(Wm);var Ib=["GET",...Wm];new Set(Ib);var vl=N.createContext(null);vl.displayName="DataRouter";var No=N.createContext(null);No.displayName="DataRouterState";var e1=N.createContext(!1),Pm=N.createContext({isTransitioning:!1});Pm.displayName="ViewTransition";var t1=N.createContext(new Map);t1.displayName="Fetchers";var n1=N.createContext(null);n1.displayName="Await";var _t=N.createContext(null);_t.displayName="Navigation";var Ti=N.createContext(null);Ti.displayName="Location";var an=N.createContext({outlet:null,matches:[],isDataRoute:!1});an.displayName="Route";var Uu=N.createContext(null);Uu.displayName="RouteError";var Im="REACT_ROUTER_ERROR",a1="REDIRECT",l1="ROUTE_ERROR_RESPONSE";function i1(l){if(l.startsWith(`${Im}:${a1}:{`))try{let i=JSON.parse(l.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function r1(l){if(l.startsWith(`${Im}:${l1}:{`))try{let i=JSON.parse(l.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new $b(i.status,i.statusText,i.data)}catch{}}function o1(l,{relative:i}={}){Ye(Sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=N.useContext(_t),{hash:f,pathname:d,search:h}=Ai(l,{relative:i}),b=d;return s!=="/"&&(b=d==="/"?s:zn([s,d])),c.createHref({pathname:b,search:h,hash:f})}function Sl(){return N.useContext(Ti)!=null}function Rn(){return Ye(Sl(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ti).location}var e0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function t0(l){N.useContext(_t).static||N.useLayoutEffect(l)}function _n(){let{isDataRoute:l}=N.useContext(an);return l?v1():s1()}function s1(){Ye(Sl(),"useNavigate() may be used only in the context of a <Router> component.");let l=N.useContext(vl),{basename:i,navigator:s}=N.useContext(_t),{matches:c}=N.useContext(an),{pathname:f}=Rn(),d=JSON.stringify(Mu(c)),h=N.useRef(!1);return t0(()=>{h.current=!0}),N.useCallback((x,g={})=>{if(Vt(h.current,e0),!h.current)return;if(typeof x=="number"){s.go(x);return}let y=ku(x,JSON.parse(d),f,g.relative==="path");l==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:zn([i,y.pathname])),(g.replace?s.replace:s.push)(y,g.state,g)},[i,s,d,f,l])}N.createContext(null);function Ai(l,{relative:i}={}){let{matches:s}=N.useContext(an),{pathname:c}=Rn(),f=JSON.stringify(Mu(s));return N.useMemo(()=>ku(l,JSON.parse(f),c,i==="path"),[l,f,c,i])}function c1(l,i){return n0(l,i)}function n0(l,i,s,c,f){Ye(Sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=N.useContext(_t),{matches:h}=N.useContext(an),b=h[h.length-1],x=b?b.params:{},g=b?b.pathname:"/",y=b?b.pathnameBase:"/",v=b&&b.route;{let q=v&&v.path||"";l0(g,!v||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let U=Rn(),D;if(i){let q=typeof i=="string"?yl(i):i;Ye(y==="/"||q.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),D=q}else D=U;let z=D.pathname||"/",k=z;if(y!=="/"){let q=y.replace(/^\//,"").split("/");k="/"+z.replace(/^\//,"").split("/").slice(q.length).join("/")}let C=Qm(l,{pathname:k});Vt(v||C!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Vt(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=h1(C&&C.map(q=>Object.assign({},q,{params:Object.assign({},x,q.params),pathname:zn([y,d.encodeLocation?d.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:zn([y,d.encodeLocation?d.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),h,s,c,f);return i&&B?N.createElement(Ti.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},B):B}function u1(){let l=y1(),i=Wb(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:d},"ErrorBoundary")," or"," ",N.createElement("code",{style:d},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},i),s?N.createElement("pre",{style:f},s):null,h)}var f1=N.createElement(u1,null),a0=class extends N.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){this.props.onError?this.props.onError(l,i):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const s=r1(l.digest);s&&(l=s)}let i=l!==void 0?N.createElement(an.Provider,{value:this.props.routeContext},N.createElement(Uu.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?N.createElement(d1,{error:l},i):i}};a0.contextType=e1;var ru=new WeakMap;function d1({children:l,error:i}){let{basename:s}=N.useContext(_t);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let c=i1(i.digest);if(c){let f=ru.get(i);if(f)throw f;let d=$m(c.location,s);if(Fm&&!ru.get(i))if(d.isExternal||c.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:c.replace}));throw ru.set(i,h),h}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return l}function p1({routeContext:l,match:i,children:s}){let c=N.useContext(vl);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),N.createElement(an.Provider,{value:l},s)}function h1(l,i=[],s=null,c=null,f=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let d=l,h=s?.errors;if(h!=null){let y=d.findIndex(v=>v.route.id&&h?.[v.route.id]!==void 0);Ye(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let b=!1,x=-1;if(s)for(let y=0;y<d.length;y++){let v=d[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(x=y),v.route.id){let{loaderData:U,errors:D}=s,z=v.route.loader&&!U.hasOwnProperty(v.route.id)&&(!D||D[v.route.id]===void 0);if(v.route.lazy||z){b=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}let g=s&&c?(y,v)=>{c(y,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Pb(s.matches),errorInfo:v})}:void 0;return d.reduceRight((y,v,U)=>{let D,z=!1,k=null,C=null;s&&(D=h&&v.route.id?h[v.route.id]:void 0,k=v.route.errorElement||f1,b&&(x<0&&U===0?(l0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,C=null):x===U&&(z=!0,C=v.route.hydrateFallbackElement||null)));let B=i.concat(d.slice(0,U+1)),q=()=>{let V;return D?V=k:z?V=C:v.route.Component?V=N.createElement(v.route.Component,null):v.route.element?V=v.route.element:V=y,N.createElement(p1,{match:v,routeContext:{outlet:y,matches:B,isDataRoute:s!=null},children:V})};return s&&(v.route.ErrorBoundary||v.route.errorElement||U===0)?N.createElement(a0,{location:s.location,revalidation:s.revalidation,component:k,error:D,children:q(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:g}):q()},null)}function Bu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m1(l){let i=N.useContext(vl);return Ye(i,Bu(l)),i}function g1(l){let i=N.useContext(No);return Ye(i,Bu(l)),i}function x1(l){let i=N.useContext(an);return Ye(i,Bu(l)),i}function Lu(l){let i=x1(l),s=i.matches[i.matches.length-1];return Ye(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function b1(){return Lu("useRouteId")}function y1(){let l=N.useContext(Uu),i=g1("useRouteError"),s=Lu("useRouteError");return l!==void 0?l:i.errors?.[s]}function v1(){let{router:l}=m1("useNavigate"),i=Lu("useNavigate"),s=N.useRef(!1);return t0(()=>{s.current=!0}),N.useCallback(async(f,d={})=>{Vt(s.current,e0),s.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:i,...d}))},[l,i])}var rm={};function l0(l,i,s){!i&&!rm[l]&&(rm[l]=!0,Vt(!1,s))}N.memo(S1);function S1({routes:l,future:i,state:s,onError:c}){return n0(l,void 0,s,c,i)}function i0({to:l,replace:i,state:s,relative:c}){Ye(Sl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=N.useContext(_t);Vt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=N.useContext(an),{pathname:h}=Rn(),b=_n(),x=ku(l,Mu(d),h,c==="path"),g=JSON.stringify(x);return N.useEffect(()=>{b(JSON.parse(g),{replace:i,state:s,relative:c})},[b,g,c,i,s]),null}function za(l){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function w1({basename:l="/",children:i=null,location:s,navigationType:c="POP",navigator:f,static:d=!1,unstable_useTransitions:h}){Ye(!Sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),x=N.useMemo(()=>({basename:b,navigator:f,static:d,unstable_useTransitions:h,future:{}}),[b,f,d,h]);typeof s=="string"&&(s=yl(s));let{pathname:g="/",search:y="",hash:v="",state:U=null,key:D="default"}=s,z=N.useMemo(()=>{let k=Tn(g,b);return k==null?null:{location:{pathname:k,search:y,hash:v,state:U,key:D},navigationType:c}},[b,g,y,v,U,D,c]);return Vt(z!=null,`<Router basename="${b}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:N.createElement(_t.Provider,{value:x},N.createElement(Ti.Provider,{children:i,value:z}))}function j1({children:l,location:i}){return c1(Su(l),i)}function Su(l,i=[]){let s=[];return N.Children.forEach(l,(c,f)=>{if(!N.isValidElement(c))return;let d=[...i,f];if(c.type===N.Fragment){s.push.apply(s,Su(c.props.children,d));return}Ye(c.type===za,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=Su(c.props.children,d)),s.push(h)}),s}var io="get",ro="application/x-www-form-urlencoded";function Eo(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function N1(l){return Eo(l)&&l.tagName.toLowerCase()==="button"}function E1(l){return Eo(l)&&l.tagName.toLowerCase()==="form"}function z1(l){return Eo(l)&&l.tagName.toLowerCase()==="input"}function C1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function T1(l,i){return l.button===0&&(!i||i==="_self")&&!C1(l)}var Ir=null;function A1(){if(Ir===null)try{new FormData(document.createElement("form"),0),Ir=!1}catch{Ir=!0}return Ir}var R1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ou(l){return l!=null&&!R1.has(l)?(Vt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ro}"`),null):l}function _1(l,i){let s,c,f,d,h;if(E1(l)){let b=l.getAttribute("action");c=b?Tn(b,i):null,s=l.getAttribute("method")||io,f=ou(l.getAttribute("enctype"))||ro,d=new FormData(l)}else if(N1(l)||z1(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=l.getAttribute("formaction")||b.getAttribute("action");if(c=x?Tn(x,i):null,s=l.getAttribute("formmethod")||b.getAttribute("method")||io,f=ou(l.getAttribute("formenctype"))||ou(b.getAttribute("enctype"))||ro,d=new FormData(b,l),!A1()){let{name:g,type:y,value:v}=l;if(y==="image"){let U=g?`${g}.`:"";d.append(`${U}x`,"0"),d.append(`${U}y`,"0")}else g&&d.append(g,v)}}else{if(Eo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=io,c=null,f=ro,h=l}return d&&f==="text/plain"&&(h=d,d=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hu(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function O1(l,i,s,c){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:i&&Tn(f.pathname,i)==="/"?f.pathname=`${i.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function D1(l,i){if(l.id in i)return i[l.id];try{let s=await import(l.module);return i[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function M1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function k1(l,i,s){let c=await Promise.all(l.map(async f=>{let d=i.routes[f.route.id];if(d){let h=await D1(d,s);return h.links?h.links():[]}return[]}));return H1(c.flat(1).filter(M1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function om(l,i,s,c,f,d){let h=(x,g)=>s[g]?x.route.id!==s[g].route.id:!0,b=(x,g)=>s[g].pathname!==x.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==x.params["*"];return d==="assets"?i.filter((x,g)=>h(x,g)||b(x,g)):d==="data"?i.filter((x,g)=>{let y=c.routes[x.route.id];if(!y||!y.hasLoader)return!1;if(h(x,g)||b(x,g))return!0;if(x.route.shouldRevalidate){let v=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function U1(l,i,{includeHydrateFallback:s}={}){return B1(l.map(c=>{let f=i.routes[c.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function B1(l){return[...new Set(l)]}function L1(l){let i={},s=Object.keys(l).sort();for(let c of s)i[c]=l[c];return i}function H1(l,i){let s=new Set;return new Set(i),l.reduce((c,f)=>{let d=JSON.stringify(L1(f));return s.has(d)||(s.add(d),c.push({key:d,link:f})),c},[])}function r0(){let l=N.useContext(vl);return Hu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function q1(){let l=N.useContext(No);return Hu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var qu=N.createContext(void 0);qu.displayName="FrameworkContext";function o0(){let l=N.useContext(qu);return Hu(l,"You must render this element inside a <HydratedRouter> element"),l}function Y1(l,i){let s=N.useContext(qu),[c,f]=N.useState(!1),[d,h]=N.useState(!1),{onFocus:b,onBlur:x,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=i,U=N.useRef(null);N.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let k=B=>{B.forEach(q=>{h(q.isIntersecting)})},C=new IntersectionObserver(k,{threshold:.5});return U.current&&C.observe(U.current),()=>{C.disconnect()}}},[l]),N.useEffect(()=>{if(c){let k=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(k)}}},[c]);let D=()=>{f(!0)},z=()=>{f(!1),h(!1)};return s?l!=="intent"?[d,U,{}]:[d,U,{onFocus:Si(b,D),onBlur:Si(x,z),onMouseEnter:Si(g,D),onMouseLeave:Si(y,z),onTouchStart:Si(v,D)}]:[!1,U,{}]}function Si(l,i){return s=>{l&&l(s),s.defaultPrevented||i(s)}}function V1({page:l,...i}){let{router:s}=r0(),c=N.useMemo(()=>Qm(s.routes,l,s.basename),[s.routes,l,s.basename]);return c?N.createElement(X1,{page:l,matches:c,...i}):null}function G1(l){let{manifest:i,routeModules:s}=o0(),[c,f]=N.useState([]);return N.useEffect(()=>{let d=!1;return k1(l,i,s).then(h=>{d||f(h)}),()=>{d=!0}},[l,i,s]),c}function X1({page:l,matches:i,...s}){let c=Rn(),{future:f,manifest:d,routeModules:h}=o0(),{basename:b}=r0(),{loaderData:x,matches:g}=q1(),y=N.useMemo(()=>om(l,i,g,d,c,"data"),[l,i,g,d,c]),v=N.useMemo(()=>om(l,i,g,d,c,"assets"),[l,i,g,d,c]),U=N.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let k=new Set,C=!1;if(i.forEach(q=>{let V=d.routes[q.route.id];!V||!V.hasLoader||(!y.some(F=>F.route.id===q.route.id)&&q.route.id in x&&h[q.route.id]?.shouldRevalidate||V.hasClientLoader?C=!0:k.add(q.route.id))}),k.size===0)return[];let B=O1(l,b,f.unstable_trailingSlashAwareDataRequests,"data");return C&&k.size>0&&B.searchParams.set("_routes",i.filter(q=>k.has(q.route.id)).map(q=>q.route.id).join(",")),[B.pathname+B.search]},[b,f.unstable_trailingSlashAwareDataRequests,x,c,d,y,i,l,h]),D=N.useMemo(()=>U1(v,d),[v,d]),z=G1(v);return N.createElement(N.Fragment,null,U.map(k=>N.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...s})),D.map(k=>N.createElement("link",{key:k,rel:"modulepreload",href:k,...s})),z.map(({key:k,link:C})=>N.createElement("link",{key:k,nonce:s.nonce,...C})))}function Q1(...l){return i=>{l.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var Z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z1&&(window.__reactRouterVersion="7.12.0")}catch{}function J1({basename:l,children:i,unstable_useTransitions:s,window:c}){let f=N.useRef();f.current==null&&(f.current=Cb({window:c,v5Compat:!0}));let d=f.current,[h,b]=N.useState({action:d.action,location:d.location}),x=N.useCallback(g=>{s===!1?b(g):N.startTransition(()=>b(g))},[s]);return N.useLayoutEffect(()=>d.listen(x),[d,x]),N.createElement(w1,{basename:l,children:i,location:h.location,navigationType:h.action,navigator:d,unstable_useTransitions:s})}var s0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,c0=N.forwardRef(function({onClick:i,discover:s="render",prefetch:c="none",relative:f,reloadDocument:d,replace:h,state:b,target:x,to:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:U,...D},z){let{basename:k,unstable_useTransitions:C}=N.useContext(_t),B=typeof g=="string"&&s0.test(g),q=$m(g,k);g=q.to;let V=o1(g,{relative:f}),[F,W,ae]=Y1(c,D),$=W1(g,{replace:h,state:b,target:x,preventScrollReset:y,relative:f,viewTransition:v,unstable_defaultShouldRevalidate:U,unstable_useTransitions:C});function re(Oe){i&&i(Oe),Oe.defaultPrevented||$(Oe)}let ve=N.createElement("a",{...D,...ae,href:q.absoluteURL||V,onClick:q.isExternal||d?i:re,ref:Q1(z,W),target:x,"data-discover":!B&&s==="render"?"true":void 0});return F&&!B?N.createElement(N.Fragment,null,ve,N.createElement(V1,{page:V})):ve});c0.displayName="Link";var K1=N.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:c="",end:f=!1,style:d,to:h,viewTransition:b,children:x,...g},y){let v=Ai(h,{relative:g.relative}),U=Rn(),D=N.useContext(No),{navigator:z,basename:k}=N.useContext(_t),C=D!=null&&ny(v)&&b===!0,B=z.encodeLocation?z.encodeLocation(v).pathname:v.pathname,q=U.pathname,V=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;s||(q=q.toLowerCase(),V=V?V.toLowerCase():null,B=B.toLowerCase()),V&&k&&(V=Tn(V,k)||V);const F=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let W=q===B||!f&&q.startsWith(B)&&q.charAt(F)==="/",ae=V!=null&&(V===B||!f&&V.startsWith(B)&&V.charAt(B.length)==="/"),$={isActive:W,isPending:ae,isTransitioning:C},re=W?i:void 0,ve;typeof c=="function"?ve=c($):ve=[c,W?"active":null,ae?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let Oe=typeof d=="function"?d($):d;return N.createElement(c0,{...g,"aria-current":re,className:ve,ref:y,style:Oe,to:h,viewTransition:b},typeof x=="function"?x($):x)});K1.displayName="NavLink";var F1=N.forwardRef(({discover:l="render",fetcherKey:i,navigate:s,reloadDocument:c,replace:f,state:d,method:h=io,action:b,onSubmit:x,relative:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:U,...D},z)=>{let{unstable_useTransitions:k}=N.useContext(_t),C=ey(),B=ty(b,{relative:g}),q=h.toLowerCase()==="get"?"get":"post",V=typeof b=="string"&&s0.test(b),F=W=>{if(x&&x(W),W.defaultPrevented)return;W.preventDefault();let ae=W.nativeEvent.submitter,$=ae?.getAttribute("formmethod")||h,re=()=>C(ae||W.currentTarget,{fetcherKey:i,method:$,navigate:s,replace:f,state:d,relative:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:U});k&&s!==!1?N.startTransition(()=>re()):re()};return N.createElement("form",{ref:z,method:q,action:B,onSubmit:c?x:F,...D,"data-discover":!V&&l==="render"?"true":void 0})});F1.displayName="Form";function $1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function u0(l){let i=N.useContext(vl);return Ye(i,$1(l)),i}function W1(l,{target:i,replace:s,state:c,preventScrollReset:f,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:b,unstable_useTransitions:x}={}){let g=_n(),y=Rn(),v=Ai(l,{relative:d});return N.useCallback(U=>{if(T1(U,i)){U.preventDefault();let D=s!==void 0?s:Ni(y)===Ni(v),z=()=>g(l,{replace:D,state:c,preventScrollReset:f,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:b});x?N.startTransition(()=>z()):z()}},[y,g,v,s,c,i,l,f,d,h,b,x])}var P1=0,I1=()=>`__${String(++P1)}__`;function ey(){let{router:l}=u0("useSubmit"),{basename:i}=N.useContext(_t),s=b1(),c=l.fetch,f=l.navigate;return N.useCallback(async(d,h={})=>{let{action:b,method:x,encType:g,formData:y,body:v}=_1(d,i);if(h.navigate===!1){let U=h.fetcherKey||I1();await c(U,s,h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:v,formMethod:h.method||x,formEncType:h.encType||g,flushSync:h.flushSync})}else await f(h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:v,formMethod:h.method||x,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:s,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,f,i,s])}function ty(l,{relative:i}={}){let{basename:s}=N.useContext(_t),c=N.useContext(an);Ye(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),d={...Ai(l||".",{relative:i})},h=Rn();if(l==null){d.search=h.search;let b=new URLSearchParams(d.search),x=b.getAll("index");if(x.some(y=>y==="")){b.delete("index"),x.filter(v=>v).forEach(v=>b.append("index",v));let y=b.toString();d.search=y?`?${y}`:""}}return(!l||l===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:zn([s,d.pathname])),Ni(d)}function ny(l,{relative:i}={}){let s=N.useContext(Pm);Ye(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=u0("useViewTransitionState"),f=Ai(l,{relative:i});if(!s.isTransitioning)return!1;let d=Tn(s.currentLocation.pathname,c)||s.currentLocation.pathname,h=Tn(s.nextLocation.pathname,c)||s.nextLocation.pathname;return po(f.pathname,h)!=null||po(f.pathname,d)!=null}const f0="/assets/vvcmclogo-C6hbLrf7.jpg";function ay(){const l=_n(),i=Rn(),[s,c]=N.useState(!1),[f,d]=N.useState(!1),h=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})();N.useEffect(()=>{const g=()=>d(window.scrollY>20);return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const b=()=>{localStorage.removeItem("citizenUser"),l("/login"),c(!1)},x=g=>i.pathname===g;return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsx("div",{className:`cn-outer${f?" scrolled":""}`,children:u.jsxs("nav",{className:"cn-nav",children:[u.jsxs("div",{className:"cn-brand",onClick:()=>l("/"),children:[u.jsx("div",{className:"cn-logo-wrap",children:u.jsx("img",{src:f0,alt:"VVCMC"})}),u.jsxs("div",{className:"cn-brand-text",children:[u.jsx("span",{className:"cn-brand-name",children:"वसई-विरार शहर महानगरपालिका"}),u.jsx("span",{className:"cn-brand-sub",children:"जन संवाद"})]})]}),u.jsxs("div",{className:"cn-links",children:[u.jsx("button",{className:`cn-link${x("/")?" active":""}`,onClick:()=>l("/"),children:"Home"}),h&&u.jsx("button",{className:`cn-link${x("/my-appointments")?" active":""}`,onClick:()=>l("/my-appointments"),children:"My Appointments"}),h?u.jsxs(u.Fragment,{children:[u.jsxs("span",{className:"cn-citizen-name",children:["👋 ",h.fullName?.split(" ")[0]]}),u.jsx("button",{className:"cn-btn-solid",onClick:()=>l("/book-appointment"),children:"+ Book"}),u.jsx("button",{className:"cn-btn-danger",onClick:b,title:"Logout",children:u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18.36 6.64A9 9 0 1 1 5.64 6.64"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]})})]}):u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"cn-btn-outline",onClick:()=>l("/login"),children:"Login"}),u.jsx("button",{className:"cn-btn-solid",onClick:()=>l("/register"),children:"Register"})]})]}),u.jsx("button",{className:"cn-ham",onClick:()=>c(g=>!g),children:s?"✕":"☰"})]})}),u.jsxs("div",{className:`cn-mobile-menu${s?" open":""}`,children:[u.jsx("button",{className:`cn-mobile-link${x("/")?" active":""}`,onClick:()=>{l("/"),c(!1)},children:"🏠 Home"}),h&&u.jsx("button",{className:`cn-mobile-link${x("/my-appointments")?" active":""}`,onClick:()=>{l("/my-appointments"),c(!1)},children:"📅 My Appointments"}),h?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"cn-mobile-link",style:{color:"#CA9D28"},onClick:()=>{l("/book-appointment"),c(!1)},children:"+ Book Appointment"}),u.jsx("button",{className:"cn-mobile-link",style:{color:"#f87171"},onClick:b,children:"🚪 Logout"})]}):u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"cn-mobile-link",onClick:()=>{l("/login"),c(!1)},children:"🔐 Login"}),u.jsx("button",{className:"cn-mobile-link",onClick:()=>{l("/register"),c(!1)},children:"📝 Register"})]})]})]})}const ly="/assets/ajivsir8-CVMwJ6TC.jpeg",iy="/assets/ajivsir1-DtAuu40c.jpeg",ry="/assets/meeting2-BpgpR0FZ.jpeg",oy="/assets/tree-BGxUfGTP.jfif",sy="/assets/pani3-tuXII5q-.jpg",cy="/assets/narangibridgeahani-Ct7_szRG.jpeg",d0="/assets/logo2new-CpqCFyo_.jpeg";function su({src:l,style:i,loop:s=!0}){const c=N.useRef(null);return N.useEffect(()=>{let f;const d=()=>{window.lottie&&c.current&&(c.current.innerHTML="",f=window.lottie.loadAnimation({container:c.current,renderer:"svg",loop:s,autoplay:!0,path:l}))};if(window.lottie)d();else{const h=document.createElement("script");h.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js",h.onload=d,document.head.appendChild(h)}return()=>f&&f.destroy()},[l]),u.jsx("div",{ref:c,style:i})}function uy(){const l=_n(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),s=N.useRef(null),[c,f]=N.useState(0),[d,h]=N.useState(!0),[b,x]=yu.useState(0),[g,y]=yu.useState(!0),v=[{icon:"🌉",tag:"पायाभूत सुविधा",title:"नारंगी उड्डाणपूल प्रकल्प पाहणी",desc:"नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 42 कोटी",deadline:"डिसेंबर 2025",stat:"",statLbl:"मार्च २०२६ अखेर वाहतुकीसाठी खुले",accent:"#51ABAC",bgimg:cy},{icon:"🏛️",tag:"प्रशासन",title:"समिती गठनाबाबत चर्चा",desc:"स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत चर्चा सुरू आहे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"",statLbl:"",accent:"#028945",bgimg:ry},{icon:"💧",tag:"पाणीपुरवठा",title:"24×7 पाणीपुरवठा योजना — वसई विभाग",desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 85 कोटी",deadline:"मार्च 2026",stat:"1.2 लाख",statLbl:"लाभार्थी कुटुंबे",accent:"#028945",bgimg:sy},{icon:"🌳",tag:"पर्यावरण",title:"हरित वसई-विरार — वृक्षारोपण मोहीम",desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",progress:"",status:"ongoing",statusLabel:"सुरू आहे",budget:"₹ 8 कोटी",deadline:"ऑगस्ट 2025",stat:"5 लाख",statLbl:"झाडे लावणार",accent:"#028945",bgimg:oy}];N.useEffect(()=>{if(!d)return;const B=setInterval(()=>{f(q=>(q+1)%v.length)},4e3);return()=>clearInterval(B)},[d,v.length]),N.useEffect(()=>{if(!g)return;const B=setInterval(()=>{x(q=>q>=k?0:q+1)},5e3);return()=>clearInterval(B)},[g]),N.useEffect(()=>{if(!s.current)return;const B=s.current,q=(B.offsetWidth-40)/3;B.scrollTo({left:b*(q+20),behavior:"smooth"})},[b]);const U=[{lottie:"https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json",title:"नोंदणी करा",desc:"Mobile number वापरून account तयार करा."},{lottie:"https://assets4.lottiefiles.com/packages/lf20_tljjahng.json",title:"तारीख निवडा",desc:"मा. श्री महापौर यांच्या available dates आणि time slots मधून निवडा"},{lottie:"https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json",title:"तपशील भरा",desc:"भेटीचे कारण, visitors संख्या आणि photo द्या"},{lottie:"https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title:"टोकन मिळवा",desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा"}],D=v[c],z=[{tag:"🌿 शिबिर प्रदर्शन",title:"घनकचरा व्यवस्थापन शिबिर-प्रदर्शन उद्घाटन",rows:["घनकचरा व्यवस्थापन प्रदर्शन","खत निर्मिती तंत्रज्ञान प्रदर्शन"],date:"२८ फेब्रुवारी २०२६",accent:"#4CABC1",bg:"linear-gradient(160deg,#b8e2ec 0%,#d0eff7 40%,#aad8e8 100%)",dotColors:["#4CABC1","#66A962"]},{tag:"🧹 स्वच्छता आढावा",title:"दैनंदिन कचरा संकलन व स्वच्छता बैठक",rows:["कचरा संकलन व वर्गीकरण","गटार व नाले साफसफाई"],date:"११ मार्च २०२६",accent:"#66A962",bg:"linear-gradient(160deg,#b5d9b3 0%,#d2edd0 40%,#a8cfaa 100%)",dotColors:["#66A962","#CA9D28"]},{tag:"🛣️ रस्ते विकास",title:"रस्ते दुरुस्ती व पायाभूत सुविधा नियोजन बैठक",rows:["रस्ते दुरुस्ती व बांधकाम","फुटपाथ उभारणी नियोजन"],date:"१० मार्च २०२६",accent:"#CA9D28",bg:"linear-gradient(160deg,#f0d6a8 0%,#f7e6c2 40%,#e8c87a 100%)",dotColors:["#CA9D28","#CE9A54"]},{tag:"⚡ वीज विकास",title:"MSEDCL वसई मंडळ आढावा बैठक",rows:["MSEDCL विकास कामे आढावा","महापौर व नगर सेवक बैठक"],date:"५ मार्च २०२६",accent:"#49ACC3",bg:"linear-gradient(160deg,#a8d4dc 0%,#c8e8f0 40%,#8ec4d0 100%)",dotColors:["#49ACC3","#187480"]}],k=1,C=Math.min(b,k);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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

      `}),u.jsxs("div",{className:"home-root",children:[u.jsxs("div",{className:"hero",children:[u.jsxs("div",{className:"hero-orbit","aria-hidden":"true",children:[u.jsx("div",{className:"hero-float f1",children:"📅"}),u.jsx("div",{className:"hero-float f2",children:"👥"}),u.jsx("div",{className:"hero-float f3",children:"📅"}),u.jsx("div",{className:"hero-float f4",children:"👤"})]}),u.jsx("h1",{className:"hero-jansanwad",children:"जन संवाद"}),u.jsx("div",{className:"hero-title-underline"}),u.jsx("p",{className:"hero-desc",children:"नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ"}),u.jsx("div",{className:"hero-btns",children:i?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"hero-btn-primary",onClick:()=>l("/book-appointment"),children:"📅 Book Appointment"}),u.jsx("button",{className:"hero-btn-outline",onClick:()=>l("/my-appointments"),children:"📋 My Appointments"})]}):u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"hero-btn-primary",onClick:()=>l("/register"),children:"🚀 Get Started — Register"}),u.jsx("button",{className:"hero-btn-outline",onClick:()=>l("/login"),children:"Login करा"})]})})]}),u.jsx("div",{className:"hiw-section",children:u.jsxs("div",{className:"hiw-inner",children:[u.jsxs("div",{className:"hiw-header",children:[u.jsx("h2",{className:"hiw-title",children:"कसे काम करते?"}),u.jsx("div",{className:"hiw-title-bar"}),u.jsx("p",{className:"hiw-sub",children:"४ टप्प्यांमध्ये महापौरांची भेट बुक करा."})]}),u.jsxs("div",{className:"hiw-grid-wrap",children:[u.jsx("div",{className:"hiw-connector","aria-hidden":"true"}),u.jsx("div",{className:"hiw-grid",children:U.map((B,q)=>u.jsxs("div",{className:"hiw-card",children:[u.jsx("div",{className:"hiw-num",children:q+1}),u.jsx("div",{className:"hiw-icon-wrap",children:u.jsx(su,{src:B.lottie,style:{width:44,height:44}})}),u.jsx("div",{className:"hiw-step-title",children:B.title}),u.jsx("div",{className:"hiw-step-desc",children:B.desc})]},q))})]})]})}),u.jsxs("div",{className:"mayor-section",children:[u.jsxs("div",{className:"mayor-left",children:[u.jsx("p",{className:"mayor-heading-line1",children:"मा. महापौर"}),u.jsx("p",{className:"mayor-heading-line2",children:"श्री. अजीव पाटील"}),u.jsx("p",{className:"mayor-bio",children:"३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे."}),u.jsx("button",{className:"mayor-btn-primary",onClick:()=>l(i?"/book-appointment":"/register"),children:"📅 Appointment बुक करा"})]}),u.jsxs("div",{className:"mayor-right",children:[u.jsx("div",{className:"mayor-chevrons","aria-hidden":"true",children:u.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",children:[u.jsxs("g",{opacity:"0.2",stroke:"#7edede",strokeWidth:"1.4",fill:"none",children:[u.jsx("polyline",{points:"160,8 178,26 160,44"}),u.jsx("polyline",{points:"142,8 160,26 142,44"}),u.jsx("polyline",{points:"124,8 142,26 124,44"}),u.jsx("polyline",{points:"160,44 178,62 160,80"}),u.jsx("polyline",{points:"142,44 160,62 142,80"}),u.jsx("polyline",{points:"124,44 142,62 124,80"}),u.jsx("polyline",{points:"168,80 186,98 168,116"}),u.jsx("polyline",{points:"150,80 168,98 150,116"}),u.jsx("polyline",{points:"168,116 186,134 168,152"}),u.jsx("polyline",{points:"150,116 168,134 150,152"})]}),u.jsx("circle",{cx:"182",cy:"18",r:"16",fill:"rgba(81,200,200,0.3)",stroke:"rgba(81,200,200,0.4)",strokeWidth:"1"}),u.jsx("rect",{x:"108",y:"4",width:"10",height:"10",rx:"1",transform:"rotate(45 113 9)",fill:"#7edede",opacity:"0.3"})]})}),u.jsx("div",{className:"mayor-diamond-tl","aria-hidden":"true",children:u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:u.jsx("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",transform:"rotate(45 8 8)",fill:"#7edede",opacity:"0.45"})})}),u.jsx("div",{className:"mayor-diamond-mid","aria-hidden":"true",children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:u.jsx("rect",{x:"1.5",y:"1.5",width:"9",height:"9",rx:"1",transform:"rotate(45 6 6)",fill:"#c9a040",opacity:"0.4"})})}),u.jsx("div",{className:"mayor-gold-tri","aria-hidden":"true",children:u.jsxs("svg",{width:"160",height:"110",viewBox:"0 0 160 110",fill:"none",children:[u.jsx("polygon",{points:"160,110 160,0 50,110",fill:"#C9963A",opacity:"0.25"}),u.jsx("polygon",{points:"160,110 160,40 95,110",fill:"#e8b84b",opacity:"0.18"})]})}),u.jsx("div",{className:"mayor-sparkle","aria-hidden":"true",children:u.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:u.jsx("path",{d:"M14 2 L15.5 12.5 L26 14 L15.5 15.5 L14 26 L12.5 15.5 L2 14 L12.5 12.5 Z",fill:"white",opacity:"0.7"})})}),u.jsx("div",{className:"mayor-phone-glow","aria-hidden":"true"}),u.jsxs("div",{className:"mayor-content-wrap",children:[u.jsxs("div",{className:"mayor-brand-row",children:[u.jsx("div",{className:"mayor-brand-logo-wrap",children:u.jsx("img",{src:d0,alt:"VVCMC Logo"})}),u.jsx("div",{className:"mayor-brand-text",children:"वसई-विरार शहर महानगरपालिका, जन संवाद"})]}),u.jsxs("div",{className:"mayor-bottom-row",children:[u.jsxs("div",{className:"mayor-data-col",children:[u.jsx("div",{className:"mayor-data-col-head",children:"नागरिक सहभाग"}),u.jsx("div",{className:"mayor-data-text",children:"नागरिकांचा सक्रिय सहभाग वाढवून शहर विकासात त्यांचे मत आणि सूचना महत्वाच्या ठरत आहेत."}),u.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"वसई स्मार्ट सिटी प्रकल्प"}),u.jsx("div",{className:"mayor-data-text",children:"वसई स्मार्ट सिटी प्रकल्पांतर्गत शहराचा डिजिटल, सुरक्षित आणि सुसज्ज विकास करण्यावर भर देण्यात आला आहे."})]}),u.jsxs("div",{className:"mayor-phone-center",children:[u.jsxs("div",{className:"mayor-bubbles-col",children:[u.jsx("div",{className:"mayor-bubble-item",children:u.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[u.jsx("rect",{x:"4",y:"4",width:"18",height:"13",rx:"3",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),u.jsx("path",{d:"M8 20 L8 17",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M7 7h12M7 10h8M7 13h10",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",strokeLinecap:"round"}),u.jsx("circle",{cx:"19",cy:"6",r:"4",fill:"#028945",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),u.jsx("path",{d:"M17 6h4M19 4v4",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})}),u.jsx("div",{className:"mayor-bubble-item",children:u.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[u.jsx("polyline",{points:"5,19 10,12 15,15 21,7",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),u.jsx("polyline",{points:"17,7 21,7 21,11",stroke:"rgba(255,255,255,0.88)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),u.jsx("line",{x1:"5",y1:"21",x2:"21",y2:"21",stroke:"rgba(255,255,255,0.45)",strokeWidth:"1.2",strokeLinecap:"round"})]})}),u.jsx("div",{className:"mayor-bubble-item",children:u.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",children:[u.jsx("circle",{cx:"13",cy:"8",r:"3.2",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",fill:"none"}),u.jsx("path",{d:"M7 21 C7 16.5 19 16.5 19 21",stroke:"rgba(255,255,255,0.85)",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),u.jsx("circle",{cx:"6.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),u.jsx("path",{d:"M3 20 C3 16.8 10 16.8 10 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),u.jsx("circle",{cx:"19.5",cy:"10",r:"2.2",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.2",fill:"none"}),u.jsx("path",{d:"M16 20 C16 16.8 23 16.8 23 20",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.2",strokeLinecap:"round",fill:"none"}),u.jsx("path",{d:"M10 22.5 Q13 25 16 22.5",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1",strokeLinecap:"round",fill:"none"})]})})]}),u.jsx("div",{className:"mayor-phone-wrap",children:u.jsx("div",{className:"mayor-phone",children:u.jsxs("div",{className:"mayor-phone-inner",children:[u.jsx("img",{src:iy,alt:"मा. महापौर श्री. अजीव पाटील",className:"mayor-phone-img"}),u.jsxs("div",{className:"mayor-phone-badge",children:[u.jsx("div",{className:"mayor-phone-badge-name",children:"मा. महापौर श्री. अजीव पाटील"}),u.jsx("div",{className:"mayor-phone-badge-title",children:"वसई-विरार शहर महानगरपालिका"})]})]})})})]}),u.jsxs("div",{className:"mayor-data-col",children:[u.jsx("div",{className:"mayor-data-col-head",children:"पायाभूत सुविधा"}),u.jsx("div",{className:"mayor-data-text",children:"वसई-विरार शहर महानगरपालिका महापौर, आरोग्य, विरार शहर, सुधार बैठक, कार्यालय उपाध्यक्ष"}),u.jsx("div",{className:"mayor-data-col-head",style:{marginTop:"6px"},children:"सुरक्षित व स्वच्छ शहर"}),u.jsx("div",{className:"mayor-data-text",children:"सुरक्षितता, स्वच्छता आणि पर्यावरणपूरक उपक्रमांद्वारे शहर अधिक राहण्यायोग्य बनवले जात आहे."})]})]})]})]})]}),u.jsx("div",{className:"projects-section",style:{backgroundColor:"#F9FCFB"},children:u.jsxs("div",{className:"projects-inner",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("div",{className:"section-tag",children:"✦ सध्या सुरू"}),u.jsx("h2",{className:"section-title",children:"चालू प्रकल्प"}),u.jsx("p",{className:"section-sub",children:"वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प"})]}),u.jsxs("div",{className:"proj-card",onMouseEnter:()=>h(!1),onMouseLeave:()=>h(!0),style:D.bgimg?{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${D.accent}99 100%), url(${D.bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[u.jsxs("div",{className:"proj-left",style:{background:"transparent",border:D.bgimg?"none":"1px solid rgba(81,171,172,0.12)",borderRight:"none"},children:[u.jsxs("div",{className:"proj-tag",style:{background:`${D.accent}18`,color:D.accent},children:[D.icon," ",D.tag]}),u.jsx("div",{className:"proj-title",children:D.title}),u.jsx("p",{className:"proj-desc",children:D.desc}),u.jsxs("div",{className:"proj-progress-row",children:[u.jsx("span",{className:"proj-progress-lbl",children:"प्रगती"}),u.jsx("span",{className:"proj-progress-pct",style:{color:D.accent},children:D.progress})]}),u.jsx("div",{className:"proj-bar",children:u.jsx("div",{className:"proj-bar-fill",style:{width:`${D.progress}%`,background:`linear-gradient(90deg,${D.accent}88,${D.accent})`}})}),u.jsxs("div",{className:"proj-meta",children:[u.jsxs("div",{className:"proj-meta-item",children:["💰 ",u.jsx("strong",{children:D.budget})]}),u.jsxs("div",{className:"proj-meta-item",children:["📅 ",u.jsx("strong",{children:D.deadline})]}),u.jsx("span",{className:`proj-chip ${D.status==="ongoing"?"chip-ongoing":"chip-planning"}`,children:D.statusLabel})]})]}),u.jsxs("div",{className:"proj-right",style:{background:`linear-gradient(160deg,${D.accent},${D.accent}bb)`},children:[u.jsx("div",{className:"proj-icon",children:D.icon}),u.jsxs("div",{children:[u.jsx("div",{className:"proj-stat-num",children:D.stat}),u.jsx("div",{className:"proj-stat-lbl",children:D.statLbl})]})]})]}),u.jsxs("div",{className:"proj-nav",children:[u.jsx("button",{className:"proj-btn",onClick:()=>{h(!1),f(B=>(B-1+v.length)%v.length)},children:"‹"}),u.jsx("div",{className:"proj-dots",children:v.map((B,q)=>u.jsx("button",{className:`proj-dot${c===q?" active":""}`,onClick:()=>{h(!1),f(q)}},q))}),u.jsxs("span",{className:"proj-counter",children:[c+1," / ",v.length]}),u.jsx("button",{className:"proj-btn",onClick:()=>{h(!1),f(B=>(B+1)%v.length)},children:"›"})]})]})}),u.jsxs("div",{className:"notice",children:[u.jsx("span",{className:"notice-icon",children:"⚠️"}),u.jsxs("div",{children:[u.jsx("div",{className:"notice-title",children:"महत्त्वाची सूचना"}),u.jsx("div",{className:"notice-text",children:"भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही. Appointment confirm होण्यासाठी admin approval आवश्यक आहे. कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा."})]})]}),u.jsxs("div",{className:"cta",children:[u.jsx(su,{src:"https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",style:{position:"absolute",left:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}}),u.jsx(su,{src:"https://assets9.lottiefiles.com/packages/lf20_touohxv0.json",style:{position:"absolute",right:60,top:"50%",transform:"translateY(-50%)",width:150,height:150,opacity:.1,pointerEvents:"none"}})]}),u.jsx("div",{className:"news-section",children:u.jsxs("div",{className:"news-inner",children:[u.jsxs("div",{className:"news-header",children:[u.jsx("div",{className:"news-section-tag",children:"✦ ताज्या बातम्या"}),u.jsx("h2",{className:"news-title",children:"महापौर कार्यालयाच्या ताज्या बातम्या"}),u.jsx("div",{className:"news-title-bar"}),u.jsx("p",{className:"news-sub",children:"Mayor's Office Latest Updates & Activities"})]}),u.jsx("div",{className:"news-viewport",ref:s,onMouseEnter:()=>y(!1),onMouseLeave:()=>y(!0),children:u.jsx("div",{className:"news-track",children:z.map((B,q)=>u.jsxs("div",{className:"news-card",style:{background:B.bg,"--nc-accent":B.accent},children:[u.jsxs("div",{className:"nc-widget",children:[u.jsx("div",{className:"nc-widget-day",children:B.day}),u.jsx("div",{className:"nc-widget-rows",children:B.rows.map((V,F)=>u.jsxs("div",{className:"nc-widget-row",children:[u.jsx("span",{className:"nc-dot",style:{background:B.dotColors[F]}}),V]},F))})]}),u.jsxs("div",{className:"nc-caption",children:[u.jsx("div",{className:"nc-tag",children:B.tag}),u.jsx("div",{className:"nc-title",children:B.title}),u.jsxs("div",{className:"nc-date-row",children:[u.jsxs("div",{className:"nc-date",children:["📅 ",B.date]}),u.jsx("div",{className:"nc-arrow",children:"→"})]})]})]},q))},b)}),u.jsxs("div",{className:"news-nav",children:[u.jsx("button",{className:"news-btn",onClick:()=>{y(!1),x(B=>Math.max(0,B-1))},children:"‹"}),u.jsx("div",{className:"news-dots",children:Array.from({length:2}).map((B,q)=>u.jsx("button",{className:`news-dot${C===q?" active":""}`,onClick:()=>{y(!1),x(q)}},q))}),u.jsxs("span",{className:"news-counter",children:[C+1," / 2"]}),u.jsx("button",{className:"news-btn",onClick:()=>{y(!1),x(B=>Math.min(k,B+1))},children:"›"})]})]})})]})]})}function p0(l,i){return function(){return l.apply(i,arguments)}}const{toString:fy}=Object.prototype,{getPrototypeOf:Yu}=Object,{iterator:zo,toStringTag:h0}=Symbol,Co=(l=>i=>{const s=fy.call(i);return l[s]||(l[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),$t=l=>(l=l.toLowerCase(),i=>Co(i)===l),To=l=>i=>typeof i===l,{isArray:wl}=Array,xl=To("undefined");function Ri(l){return l!==null&&!xl(l)&&l.constructor!==null&&!xl(l.constructor)&&yt(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const m0=$t("ArrayBuffer");function dy(l){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(l):i=l&&l.buffer&&m0(l.buffer),i}const py=To("string"),yt=To("function"),g0=To("number"),_i=l=>l!==null&&typeof l=="object",hy=l=>l===!0||l===!1,oo=l=>{if(Co(l)!=="object")return!1;const i=Yu(l);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(h0 in l)&&!(zo in l)},my=l=>{if(!_i(l)||Ri(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},gy=$t("Date"),xy=$t("File"),by=$t("Blob"),yy=$t("FileList"),vy=l=>_i(l)&&yt(l.pipe),Sy=l=>{let i;return l&&(typeof FormData=="function"&&l instanceof FormData||yt(l.append)&&((i=Co(l))==="formdata"||i==="object"&&yt(l.toString)&&l.toString()==="[object FormData]"))},wy=$t("URLSearchParams"),[jy,Ny,Ey,zy]=["ReadableStream","Request","Response","Headers"].map($t),Cy=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Oi(l,i,{allOwnKeys:s=!1}={}){if(l===null||typeof l>"u")return;let c,f;if(typeof l!="object"&&(l=[l]),wl(l))for(c=0,f=l.length;c<f;c++)i.call(null,l[c],c,l);else{if(Ri(l))return;const d=s?Object.getOwnPropertyNames(l):Object.keys(l),h=d.length;let b;for(c=0;c<h;c++)b=d[c],i.call(null,l[b],b,l)}}function x0(l,i){if(Ri(l))return null;i=i.toLowerCase();const s=Object.keys(l);let c=s.length,f;for(;c-- >0;)if(f=s[c],i===f.toLowerCase())return f;return null}const Ca=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,b0=l=>!xl(l)&&l!==Ca;function wu(){const{caseless:l,skipUndefined:i}=b0(this)&&this||{},s={},c=(f,d)=>{const h=l&&x0(s,d)||d;oo(s[h])&&oo(f)?s[h]=wu(s[h],f):oo(f)?s[h]=wu({},f):wl(f)?s[h]=f.slice():(!i||!xl(f))&&(s[h]=f)};for(let f=0,d=arguments.length;f<d;f++)arguments[f]&&Oi(arguments[f],c);return s}const Ty=(l,i,s,{allOwnKeys:c}={})=>(Oi(i,(f,d)=>{s&&yt(f)?l[d]=p0(f,s):l[d]=f},{allOwnKeys:c}),l),Ay=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),Ry=(l,i,s,c)=>{l.prototype=Object.create(i.prototype,c),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:i.prototype}),s&&Object.assign(l.prototype,s)},_y=(l,i,s,c)=>{let f,d,h;const b={};if(i=i||{},l==null)return i;do{for(f=Object.getOwnPropertyNames(l),d=f.length;d-- >0;)h=f[d],(!c||c(h,l,i))&&!b[h]&&(i[h]=l[h],b[h]=!0);l=s!==!1&&Yu(l)}while(l&&(!s||s(l,i))&&l!==Object.prototype);return i},Oy=(l,i,s)=>{l=String(l),(s===void 0||s>l.length)&&(s=l.length),s-=i.length;const c=l.indexOf(i,s);return c!==-1&&c===s},Dy=l=>{if(!l)return null;if(wl(l))return l;let i=l.length;if(!g0(i))return null;const s=new Array(i);for(;i-- >0;)s[i]=l[i];return s},My=(l=>i=>l&&i instanceof l)(typeof Uint8Array<"u"&&Yu(Uint8Array)),ky=(l,i)=>{const c=(l&&l[zo]).call(l);let f;for(;(f=c.next())&&!f.done;){const d=f.value;i.call(l,d[0],d[1])}},Uy=(l,i)=>{let s;const c=[];for(;(s=l.exec(i))!==null;)c.push(s);return c},By=$t("HTMLFormElement"),Ly=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,c,f){return c.toUpperCase()+f}),sm=(({hasOwnProperty:l})=>(i,s)=>l.call(i,s))(Object.prototype),Hy=$t("RegExp"),y0=(l,i)=>{const s=Object.getOwnPropertyDescriptors(l),c={};Oi(s,(f,d)=>{let h;(h=i(f,d,l))!==!1&&(c[d]=h||f)}),Object.defineProperties(l,c)},qy=l=>{y0(l,(i,s)=>{if(yt(l)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const c=l[s];if(yt(c)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},Yy=(l,i)=>{const s={},c=f=>{f.forEach(d=>{s[d]=!0})};return wl(l)?c(l):c(String(l).split(i)),s},Vy=()=>{},Gy=(l,i)=>l!=null&&Number.isFinite(l=+l)?l:i;function Xy(l){return!!(l&&yt(l.append)&&l[h0]==="FormData"&&l[zo])}const Qy=l=>{const i=new Array(10),s=(c,f)=>{if(_i(c)){if(i.indexOf(c)>=0)return;if(Ri(c))return c;if(!("toJSON"in c)){i[f]=c;const d=wl(c)?[]:{};return Oi(c,(h,b)=>{const x=s(h,f+1);!xl(x)&&(d[b]=x)}),i[f]=void 0,d}}return c};return s(l,0)},Zy=$t("AsyncFunction"),Jy=l=>l&&(_i(l)||yt(l))&&yt(l.then)&&yt(l.catch),v0=((l,i)=>l?setImmediate:i?((s,c)=>(Ca.addEventListener("message",({source:f,data:d})=>{f===Ca&&d===s&&c.length&&c.shift()()},!1),f=>{c.push(f),Ca.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",yt(Ca.postMessage)),Ky=typeof queueMicrotask<"u"?queueMicrotask.bind(Ca):typeof process<"u"&&process.nextTick||v0,Fy=l=>l!=null&&yt(l[zo]),O={isArray:wl,isArrayBuffer:m0,isBuffer:Ri,isFormData:Sy,isArrayBufferView:dy,isString:py,isNumber:g0,isBoolean:hy,isObject:_i,isPlainObject:oo,isEmptyObject:my,isReadableStream:jy,isRequest:Ny,isResponse:Ey,isHeaders:zy,isUndefined:xl,isDate:gy,isFile:xy,isBlob:by,isRegExp:Hy,isFunction:yt,isStream:vy,isURLSearchParams:wy,isTypedArray:My,isFileList:yy,forEach:Oi,merge:wu,extend:Ty,trim:Cy,stripBOM:Ay,inherits:Ry,toFlatObject:_y,kindOf:Co,kindOfTest:$t,endsWith:Oy,toArray:Dy,forEachEntry:ky,matchAll:Uy,isHTMLForm:By,hasOwnProperty:sm,hasOwnProp:sm,reduceDescriptors:y0,freezeMethods:qy,toObjectSet:Yy,toCamelCase:Ly,noop:Vy,toFiniteNumber:Gy,findKey:x0,global:Ca,isContextDefined:b0,isSpecCompliantForm:Xy,toJSONObject:Qy,isAsyncFn:Zy,isThenable:Jy,setImmediate:v0,asap:Ky,isIterable:Fy};function he(l,i,s,c,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",i&&(this.code=i),s&&(this.config=s),c&&(this.request=c),f&&(this.response=f,this.status=f.status?f.status:null)}O.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const S0=he.prototype,w0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{w0[l]={value:l}});Object.defineProperties(he,w0);Object.defineProperty(S0,"isAxiosError",{value:!0});he.from=(l,i,s,c,f,d)=>{const h=Object.create(S0);O.toFlatObject(l,h,function(y){return y!==Error.prototype},g=>g!=="isAxiosError");const b=l&&l.message?l.message:"Error",x=i==null&&l?l.code:i;return he.call(h,b,x,s,c,f),l&&h.cause==null&&Object.defineProperty(h,"cause",{value:l,configurable:!0}),h.name=l&&l.name||"Error",d&&Object.assign(h,d),h};const $y=null;function ju(l){return O.isPlainObject(l)||O.isArray(l)}function j0(l){return O.endsWith(l,"[]")?l.slice(0,-2):l}function cm(l,i,s){return l?l.concat(i).map(function(f,d){return f=j0(f),!s&&d?"["+f+"]":f}).join(s?".":""):i}function Wy(l){return O.isArray(l)&&!l.some(ju)}const Py=O.toFlatObject(O,{},null,function(i){return/^is[A-Z]/.test(i)});function Ao(l,i,s){if(!O.isObject(l))throw new TypeError("target must be an object");i=i||new FormData,s=O.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,C){return!O.isUndefined(C[k])});const c=s.metaTokens,f=s.visitor||y,d=s.dots,h=s.indexes,x=(s.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(i);if(!O.isFunction(f))throw new TypeError("visitor must be a function");function g(z){if(z===null)return"";if(O.isDate(z))return z.toISOString();if(O.isBoolean(z))return z.toString();if(!x&&O.isBlob(z))throw new he("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(z)||O.isTypedArray(z)?x&&typeof Blob=="function"?new Blob([z]):Buffer.from(z):z}function y(z,k,C){let B=z;if(z&&!C&&typeof z=="object"){if(O.endsWith(k,"{}"))k=c?k:k.slice(0,-2),z=JSON.stringify(z);else if(O.isArray(z)&&Wy(z)||(O.isFileList(z)||O.endsWith(k,"[]"))&&(B=O.toArray(z)))return k=j0(k),B.forEach(function(V,F){!(O.isUndefined(V)||V===null)&&i.append(h===!0?cm([k],F,d):h===null?k:k+"[]",g(V))}),!1}return ju(z)?!0:(i.append(cm(C,k,d),g(z)),!1)}const v=[],U=Object.assign(Py,{defaultVisitor:y,convertValue:g,isVisitable:ju});function D(z,k){if(!O.isUndefined(z)){if(v.indexOf(z)!==-1)throw Error("Circular reference detected in "+k.join("."));v.push(z),O.forEach(z,function(B,q){(!(O.isUndefined(B)||B===null)&&f.call(i,B,O.isString(q)?q.trim():q,k,U))===!0&&D(B,k?k.concat(q):[q])}),v.pop()}}if(!O.isObject(l))throw new TypeError("data must be an object");return D(l),i}function um(l){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(c){return i[c]})}function Vu(l,i){this._pairs=[],l&&Ao(l,this,i)}const N0=Vu.prototype;N0.append=function(i,s){this._pairs.push([i,s])};N0.toString=function(i){const s=i?function(c){return i.call(this,c,um)}:um;return this._pairs.map(function(f){return s(f[0])+"="+s(f[1])},"").join("&")};function Iy(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function E0(l,i,s){if(!i)return l;const c=s&&s.encode||Iy;O.isFunction(s)&&(s={serialize:s});const f=s&&s.serialize;let d;if(f?d=f(i,s):d=O.isURLSearchParams(i)?i.toString():new Vu(i,s).toString(c),d){const h=l.indexOf("#");h!==-1&&(l=l.slice(0,h)),l+=(l.indexOf("?")===-1?"?":"&")+d}return l}class fm{constructor(){this.handlers=[]}use(i,s,c){return this.handlers.push({fulfilled:i,rejected:s,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){O.forEach(this.handlers,function(c){c!==null&&i(c)})}}const z0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ev=typeof URLSearchParams<"u"?URLSearchParams:Vu,tv=typeof FormData<"u"?FormData:null,nv=typeof Blob<"u"?Blob:null,av={isBrowser:!0,classes:{URLSearchParams:ev,FormData:tv,Blob:nv},protocols:["http","https","file","blob","url","data"]},Gu=typeof window<"u"&&typeof document<"u",Nu=typeof navigator=="object"&&navigator||void 0,lv=Gu&&(!Nu||["ReactNative","NativeScript","NS"].indexOf(Nu.product)<0),iv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rv=Gu&&window.location.href||"http://localhost",ov=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Gu,hasStandardBrowserEnv:lv,hasStandardBrowserWebWorkerEnv:iv,navigator:Nu,origin:rv},Symbol.toStringTag,{value:"Module"})),ct={...ov,...av};function sv(l,i){return Ao(l,new ct.classes.URLSearchParams,{visitor:function(s,c,f,d){return ct.isNode&&O.isBuffer(s)?(this.append(c,s.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...i})}function cv(l){return O.matchAll(/\w+|\[(\w*)]/g,l).map(i=>i[0]==="[]"?"":i[1]||i[0])}function uv(l){const i={},s=Object.keys(l);let c;const f=s.length;let d;for(c=0;c<f;c++)d=s[c],i[d]=l[d];return i}function C0(l){function i(s,c,f,d){let h=s[d++];if(h==="__proto__")return!0;const b=Number.isFinite(+h),x=d>=s.length;return h=!h&&O.isArray(f)?f.length:h,x?(O.hasOwnProp(f,h)?f[h]=[f[h],c]:f[h]=c,!b):((!f[h]||!O.isObject(f[h]))&&(f[h]=[]),i(s,c,f[h],d)&&O.isArray(f[h])&&(f[h]=uv(f[h])),!b)}if(O.isFormData(l)&&O.isFunction(l.entries)){const s={};return O.forEachEntry(l,(c,f)=>{i(cv(c),f,s,0)}),s}return null}function fv(l,i,s){if(O.isString(l))try{return(i||JSON.parse)(l),O.trim(l)}catch(c){if(c.name!=="SyntaxError")throw c}return(s||JSON.stringify)(l)}const Di={transitional:z0,adapter:["xhr","http","fetch"],transformRequest:[function(i,s){const c=s.getContentType()||"",f=c.indexOf("application/json")>-1,d=O.isObject(i);if(d&&O.isHTMLForm(i)&&(i=new FormData(i)),O.isFormData(i))return f?JSON.stringify(C0(i)):i;if(O.isArrayBuffer(i)||O.isBuffer(i)||O.isStream(i)||O.isFile(i)||O.isBlob(i)||O.isReadableStream(i))return i;if(O.isArrayBufferView(i))return i.buffer;if(O.isURLSearchParams(i))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let b;if(d){if(c.indexOf("application/x-www-form-urlencoded")>-1)return sv(i,this.formSerializer).toString();if((b=O.isFileList(i))||c.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return Ao(b?{"files[]":i}:i,x&&new x,this.formSerializer)}}return d||f?(s.setContentType("application/json",!1),fv(i)):i}],transformResponse:[function(i){const s=this.transitional||Di.transitional,c=s&&s.forcedJSONParsing,f=this.responseType==="json";if(O.isResponse(i)||O.isReadableStream(i))return i;if(i&&O.isString(i)&&(c&&!this.responseType||f)){const h=!(s&&s.silentJSONParsing)&&f;try{return JSON.parse(i,this.parseReviver)}catch(b){if(h)throw b.name==="SyntaxError"?he.from(b,he.ERR_BAD_RESPONSE,this,null,this.response):b}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],l=>{Di.headers[l]={}});const dv=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pv=l=>{const i={};let s,c,f;return l&&l.split(`
`).forEach(function(h){f=h.indexOf(":"),s=h.substring(0,f).trim().toLowerCase(),c=h.substring(f+1).trim(),!(!s||i[s]&&dv[s])&&(s==="set-cookie"?i[s]?i[s].push(c):i[s]=[c]:i[s]=i[s]?i[s]+", "+c:c)}),i},dm=Symbol("internals");function wi(l){return l&&String(l).trim().toLowerCase()}function so(l){return l===!1||l==null?l:O.isArray(l)?l.map(so):String(l)}function hv(l){const i=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=s.exec(l);)i[c[1]]=c[2];return i}const mv=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function cu(l,i,s,c,f){if(O.isFunction(c))return c.call(this,i,s);if(f&&(i=s),!!O.isString(i)){if(O.isString(c))return i.indexOf(c)!==-1;if(O.isRegExp(c))return c.test(i)}}function gv(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,s,c)=>s.toUpperCase()+c)}function xv(l,i){const s=O.toCamelCase(" "+i);["get","set","has"].forEach(c=>{Object.defineProperty(l,c+s,{value:function(f,d,h){return this[c].call(this,i,f,d,h)},configurable:!0})})}let vt=class{constructor(i){i&&this.set(i)}set(i,s,c){const f=this;function d(b,x,g){const y=wi(x);if(!y)throw new Error("header name must be a non-empty string");const v=O.findKey(f,y);(!v||f[v]===void 0||g===!0||g===void 0&&f[v]!==!1)&&(f[v||x]=so(b))}const h=(b,x)=>O.forEach(b,(g,y)=>d(g,y,x));if(O.isPlainObject(i)||i instanceof this.constructor)h(i,s);else if(O.isString(i)&&(i=i.trim())&&!mv(i))h(pv(i),s);else if(O.isObject(i)&&O.isIterable(i)){let b={},x,g;for(const y of i){if(!O.isArray(y))throw TypeError("Object iterator must return a key-value pair");b[g=y[0]]=(x=b[g])?O.isArray(x)?[...x,y[1]]:[x,y[1]]:y[1]}h(b,s)}else i!=null&&d(s,i,c);return this}get(i,s){if(i=wi(i),i){const c=O.findKey(this,i);if(c){const f=this[c];if(!s)return f;if(s===!0)return hv(f);if(O.isFunction(s))return s.call(this,f,c);if(O.isRegExp(s))return s.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,s){if(i=wi(i),i){const c=O.findKey(this,i);return!!(c&&this[c]!==void 0&&(!s||cu(this,this[c],c,s)))}return!1}delete(i,s){const c=this;let f=!1;function d(h){if(h=wi(h),h){const b=O.findKey(c,h);b&&(!s||cu(c,c[b],b,s))&&(delete c[b],f=!0)}}return O.isArray(i)?i.forEach(d):d(i),f}clear(i){const s=Object.keys(this);let c=s.length,f=!1;for(;c--;){const d=s[c];(!i||cu(this,this[d],d,i,!0))&&(delete this[d],f=!0)}return f}normalize(i){const s=this,c={};return O.forEach(this,(f,d)=>{const h=O.findKey(c,d);if(h){s[h]=so(f),delete s[d];return}const b=i?gv(d):String(d).trim();b!==d&&delete s[d],s[b]=so(f),c[b]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const s=Object.create(null);return O.forEach(this,(c,f)=>{c!=null&&c!==!1&&(s[f]=i&&O.isArray(c)?c.join(", "):c)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,s])=>i+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...s){const c=new this(i);return s.forEach(f=>c.set(f)),c}static accessor(i){const c=(this[dm]=this[dm]={accessors:{}}).accessors,f=this.prototype;function d(h){const b=wi(h);c[b]||(xv(f,h),c[b]=!0)}return O.isArray(i)?i.forEach(d):d(i),this}};vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(vt.prototype,({value:l},i)=>{let s=i[0].toUpperCase()+i.slice(1);return{get:()=>l,set(c){this[s]=c}}});O.freezeMethods(vt);function uu(l,i){const s=this||Di,c=i||s,f=vt.from(c.headers);let d=c.data;return O.forEach(l,function(b){d=b.call(s,d,f.normalize(),i?i.status:void 0)}),f.normalize(),d}function T0(l){return!!(l&&l.__CANCEL__)}function jl(l,i,s){he.call(this,l??"canceled",he.ERR_CANCELED,i,s),this.name="CanceledError"}O.inherits(jl,he,{__CANCEL__:!0});function A0(l,i,s){const c=s.config.validateStatus;!s.status||!c||c(s.status)?l(s):i(new he("Request failed with status code "+s.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function bv(l){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return i&&i[1]||""}function yv(l,i){l=l||10;const s=new Array(l),c=new Array(l);let f=0,d=0,h;return i=i!==void 0?i:1e3,function(x){const g=Date.now(),y=c[d];h||(h=g),s[f]=x,c[f]=g;let v=d,U=0;for(;v!==f;)U+=s[v++],v=v%l;if(f=(f+1)%l,f===d&&(d=(d+1)%l),g-h<i)return;const D=y&&g-y;return D?Math.round(U*1e3/D):void 0}}function vv(l,i){let s=0,c=1e3/i,f,d;const h=(g,y=Date.now())=>{s=y,f=null,d&&(clearTimeout(d),d=null),l(...g)};return[(...g)=>{const y=Date.now(),v=y-s;v>=c?h(g,y):(f=g,d||(d=setTimeout(()=>{d=null,h(f)},c-v)))},()=>f&&h(f)]}const ho=(l,i,s=3)=>{let c=0;const f=yv(50,250);return vv(d=>{const h=d.loaded,b=d.lengthComputable?d.total:void 0,x=h-c,g=f(x),y=h<=b;c=h;const v={loaded:h,total:b,progress:b?h/b:void 0,bytes:x,rate:g||void 0,estimated:g&&b&&y?(b-h)/g:void 0,event:d,lengthComputable:b!=null,[i?"download":"upload"]:!0};l(v)},s)},pm=(l,i)=>{const s=l!=null;return[c=>i[0]({lengthComputable:s,total:l,loaded:c}),i[1]]},hm=l=>(...i)=>O.asap(()=>l(...i)),Sv=ct.hasStandardBrowserEnv?((l,i)=>s=>(s=new URL(s,ct.origin),l.protocol===s.protocol&&l.host===s.host&&(i||l.port===s.port)))(new URL(ct.origin),ct.navigator&&/(msie|trident)/i.test(ct.navigator.userAgent)):()=>!0,wv=ct.hasStandardBrowserEnv?{write(l,i,s,c,f,d,h){if(typeof document>"u")return;const b=[`${l}=${encodeURIComponent(i)}`];O.isNumber(s)&&b.push(`expires=${new Date(s).toUTCString()}`),O.isString(c)&&b.push(`path=${c}`),O.isString(f)&&b.push(`domain=${f}`),d===!0&&b.push("secure"),O.isString(h)&&b.push(`SameSite=${h}`),document.cookie=b.join("; ")},read(l){if(typeof document>"u")return null;const i=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return i?decodeURIComponent(i[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function jv(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function Nv(l,i){return i?l.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):l}function R0(l,i,s){let c=!jv(i);return l&&(c||s==!1)?Nv(l,i):i}const mm=l=>l instanceof vt?{...l}:l;function Aa(l,i){i=i||{};const s={};function c(g,y,v,U){return O.isPlainObject(g)&&O.isPlainObject(y)?O.merge.call({caseless:U},g,y):O.isPlainObject(y)?O.merge({},y):O.isArray(y)?y.slice():y}function f(g,y,v,U){if(O.isUndefined(y)){if(!O.isUndefined(g))return c(void 0,g,v,U)}else return c(g,y,v,U)}function d(g,y){if(!O.isUndefined(y))return c(void 0,y)}function h(g,y){if(O.isUndefined(y)){if(!O.isUndefined(g))return c(void 0,g)}else return c(void 0,y)}function b(g,y,v){if(v in i)return c(g,y);if(v in l)return c(void 0,g)}const x={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:b,headers:(g,y,v)=>f(mm(g),mm(y),v,!0)};return O.forEach(Object.keys({...l,...i}),function(y){const v=x[y]||f,U=v(l[y],i[y],y);O.isUndefined(U)&&v!==b||(s[y]=U)}),s}const _0=l=>{const i=Aa({},l);let{data:s,withXSRFToken:c,xsrfHeaderName:f,xsrfCookieName:d,headers:h,auth:b}=i;if(i.headers=h=vt.from(h),i.url=E0(R0(i.baseURL,i.url,i.allowAbsoluteUrls),l.params,l.paramsSerializer),b&&h.set("Authorization","Basic "+btoa((b.username||"")+":"+(b.password?unescape(encodeURIComponent(b.password)):""))),O.isFormData(s)){if(ct.hasStandardBrowserEnv||ct.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(O.isFunction(s.getHeaders)){const x=s.getHeaders(),g=["content-type","content-length"];Object.entries(x).forEach(([y,v])=>{g.includes(y.toLowerCase())&&h.set(y,v)})}}if(ct.hasStandardBrowserEnv&&(c&&O.isFunction(c)&&(c=c(i)),c||c!==!1&&Sv(i.url))){const x=f&&d&&wv.read(d);x&&h.set(f,x)}return i},Ev=typeof XMLHttpRequest<"u",zv=Ev&&function(l){return new Promise(function(s,c){const f=_0(l);let d=f.data;const h=vt.from(f.headers).normalize();let{responseType:b,onUploadProgress:x,onDownloadProgress:g}=f,y,v,U,D,z;function k(){D&&D(),z&&z(),f.cancelToken&&f.cancelToken.unsubscribe(y),f.signal&&f.signal.removeEventListener("abort",y)}let C=new XMLHttpRequest;C.open(f.method.toUpperCase(),f.url,!0),C.timeout=f.timeout;function B(){if(!C)return;const V=vt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),W={data:!b||b==="text"||b==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:V,config:l,request:C};A0(function($){s($),k()},function($){c($),k()},W),C=null}"onloadend"in C?C.onloadend=B:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(B)},C.onabort=function(){C&&(c(new he("Request aborted",he.ECONNABORTED,l,C)),C=null)},C.onerror=function(F){const W=F&&F.message?F.message:"Network Error",ae=new he(W,he.ERR_NETWORK,l,C);ae.event=F||null,c(ae),C=null},C.ontimeout=function(){let F=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const W=f.transitional||z0;f.timeoutErrorMessage&&(F=f.timeoutErrorMessage),c(new he(F,W.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,l,C)),C=null},d===void 0&&h.setContentType(null),"setRequestHeader"in C&&O.forEach(h.toJSON(),function(F,W){C.setRequestHeader(W,F)}),O.isUndefined(f.withCredentials)||(C.withCredentials=!!f.withCredentials),b&&b!=="json"&&(C.responseType=f.responseType),g&&([U,z]=ho(g,!0),C.addEventListener("progress",U)),x&&C.upload&&([v,D]=ho(x),C.upload.addEventListener("progress",v),C.upload.addEventListener("loadend",D)),(f.cancelToken||f.signal)&&(y=V=>{C&&(c(!V||V.type?new jl(null,l,C):V),C.abort(),C=null)},f.cancelToken&&f.cancelToken.subscribe(y),f.signal&&(f.signal.aborted?y():f.signal.addEventListener("abort",y)));const q=bv(f.url);if(q&&ct.protocols.indexOf(q)===-1){c(new he("Unsupported protocol "+q+":",he.ERR_BAD_REQUEST,l));return}C.send(d||null)})},Cv=(l,i)=>{const{length:s}=l=l?l.filter(Boolean):[];if(i||s){let c=new AbortController,f;const d=function(g){if(!f){f=!0,b();const y=g instanceof Error?g:this.reason;c.abort(y instanceof he?y:new jl(y instanceof Error?y.message:y))}};let h=i&&setTimeout(()=>{h=null,d(new he(`timeout ${i} of ms exceeded`,he.ETIMEDOUT))},i);const b=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),l=null)};l.forEach(g=>g.addEventListener("abort",d));const{signal:x}=c;return x.unsubscribe=()=>O.asap(b),x}},Tv=function*(l,i){let s=l.byteLength;if(s<i){yield l;return}let c=0,f;for(;c<s;)f=c+i,yield l.slice(c,f),c=f},Av=async function*(l,i){for await(const s of Rv(l))yield*Tv(s,i)},Rv=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const i=l.getReader();try{for(;;){const{done:s,value:c}=await i.read();if(s)break;yield c}}finally{await i.cancel()}},gm=(l,i,s,c)=>{const f=Av(l,i);let d=0,h,b=x=>{h||(h=!0,c&&c(x))};return new ReadableStream({async pull(x){try{const{done:g,value:y}=await f.next();if(g){b(),x.close();return}let v=y.byteLength;if(s){let U=d+=v;s(U)}x.enqueue(new Uint8Array(y))}catch(g){throw b(g),g}},cancel(x){return b(x),f.return()}},{highWaterMark:2})},xm=64*1024,{isFunction:eo}=O,_v=(({Request:l,Response:i})=>({Request:l,Response:i}))(O.global),{ReadableStream:bm,TextEncoder:ym}=O.global,vm=(l,...i)=>{try{return!!l(...i)}catch{return!1}},Ov=l=>{l=O.merge.call({skipUndefined:!0},_v,l);const{fetch:i,Request:s,Response:c}=l,f=i?eo(i):typeof fetch=="function",d=eo(s),h=eo(c);if(!f)return!1;const b=f&&eo(bm),x=f&&(typeof ym=="function"?(z=>k=>z.encode(k))(new ym):async z=>new Uint8Array(await new s(z).arrayBuffer())),g=d&&b&&vm(()=>{let z=!1;const k=new s(ct.origin,{body:new bm,method:"POST",get duplex(){return z=!0,"half"}}).headers.has("Content-Type");return z&&!k}),y=h&&b&&vm(()=>O.isReadableStream(new c("").body)),v={stream:y&&(z=>z.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(z=>{!v[z]&&(v[z]=(k,C)=>{let B=k&&k[z];if(B)return B.call(k);throw new he(`Response type '${z}' is not supported`,he.ERR_NOT_SUPPORT,C)})});const U=async z=>{if(z==null)return 0;if(O.isBlob(z))return z.size;if(O.isSpecCompliantForm(z))return(await new s(ct.origin,{method:"POST",body:z}).arrayBuffer()).byteLength;if(O.isArrayBufferView(z)||O.isArrayBuffer(z))return z.byteLength;if(O.isURLSearchParams(z)&&(z=z+""),O.isString(z))return(await x(z)).byteLength},D=async(z,k)=>{const C=O.toFiniteNumber(z.getContentLength());return C??U(k)};return async z=>{let{url:k,method:C,data:B,signal:q,cancelToken:V,timeout:F,onDownloadProgress:W,onUploadProgress:ae,responseType:$,headers:re,withCredentials:ve="same-origin",fetchOptions:Oe}=_0(z),Z=i||fetch;$=$?($+"").toLowerCase():"text";let ce=Cv([q,V&&V.toAbortSignal()],F),X=null;const je=ce&&ce.unsubscribe&&(()=>{ce.unsubscribe()});let Te;try{if(ae&&g&&C!=="get"&&C!=="head"&&(Te=await D(re,B))!==0){let w=new s(k,{method:"POST",body:B,duplex:"half"}),L;if(O.isFormData(B)&&(L=w.headers.get("content-type"))&&re.setContentType(L),w.body){const[K,I]=pm(Te,ho(hm(ae)));B=gm(w.body,xm,K,I)}}O.isString(ve)||(ve=ve?"include":"omit");const _=d&&"credentials"in s.prototype,J={...Oe,signal:ce,method:C.toUpperCase(),headers:re.normalize().toJSON(),body:B,duplex:"half",credentials:_?ve:void 0};X=d&&new s(k,J);let le=await(d?Z(X,Oe):Z(k,J));const te=y&&($==="stream"||$==="response");if(y&&(W||te&&je)){const w={};["status","statusText","headers"].forEach(ue=>{w[ue]=le[ue]});const L=O.toFiniteNumber(le.headers.get("content-length")),[K,I]=W&&pm(L,ho(hm(W),!0))||[];le=new c(gm(le.body,xm,K,()=>{I&&I(),je&&je()}),w)}$=$||"text";let P=await v[O.findKey(v,$)||"text"](le,z);return!te&&je&&je(),await new Promise((w,L)=>{A0(w,L,{data:P,headers:vt.from(le.headers),status:le.status,statusText:le.statusText,config:z,request:X})})}catch(_){throw je&&je(),_&&_.name==="TypeError"&&/Load failed|fetch/i.test(_.message)?Object.assign(new he("Network Error",he.ERR_NETWORK,z,X),{cause:_.cause||_}):he.from(_,_&&_.code,z,X)}}},Dv=new Map,O0=l=>{let i=l&&l.env||{};const{fetch:s,Request:c,Response:f}=i,d=[c,f,s];let h=d.length,b=h,x,g,y=Dv;for(;b--;)x=d[b],g=y.get(x),g===void 0&&y.set(x,g=b?new Map:Ov(i)),y=g;return g};O0();const Xu={http:$y,xhr:zv,fetch:{get:O0}};O.forEach(Xu,(l,i)=>{if(l){try{Object.defineProperty(l,"name",{value:i})}catch{}Object.defineProperty(l,"adapterName",{value:i})}});const Sm=l=>`- ${l}`,Mv=l=>O.isFunction(l)||l===null||l===!1;function kv(l,i){l=O.isArray(l)?l:[l];const{length:s}=l;let c,f;const d={};for(let h=0;h<s;h++){c=l[h];let b;if(f=c,!Mv(c)&&(f=Xu[(b=String(c)).toLowerCase()],f===void 0))throw new he(`Unknown adapter '${b}'`);if(f&&(O.isFunction(f)||(f=f.get(i))))break;d[b||"#"+h]=f}if(!f){const h=Object.entries(d).map(([x,g])=>`adapter ${x} `+(g===!1?"is not supported by the environment":"is not available in the build"));let b=s?h.length>1?`since :
`+h.map(Sm).join(`
`):" "+Sm(h[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+b,"ERR_NOT_SUPPORT")}return f}const D0={getAdapter:kv,adapters:Xu};function fu(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new jl(null,l)}function wm(l){return fu(l),l.headers=vt.from(l.headers),l.data=uu.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),D0.getAdapter(l.adapter||Di.adapter,l)(l).then(function(c){return fu(l),c.data=uu.call(l,l.transformResponse,c),c.headers=vt.from(c.headers),c},function(c){return T0(c)||(fu(l),c&&c.response&&(c.response.data=uu.call(l,l.transformResponse,c.response),c.response.headers=vt.from(c.response.headers))),Promise.reject(c)})}const M0="1.13.2",Ro={};["object","boolean","number","function","string","symbol"].forEach((l,i)=>{Ro[l]=function(c){return typeof c===l||"a"+(i<1?"n ":" ")+l}});const jm={};Ro.transitional=function(i,s,c){function f(d,h){return"[Axios v"+M0+"] Transitional option '"+d+"'"+h+(c?". "+c:"")}return(d,h,b)=>{if(i===!1)throw new he(f(h," has been removed"+(s?" in "+s:"")),he.ERR_DEPRECATED);return s&&!jm[h]&&(jm[h]=!0,console.warn(f(h," has been deprecated since v"+s+" and will be removed in the near future"))),i?i(d,h,b):!0}};Ro.spelling=function(i){return(s,c)=>(console.warn(`${c} is likely a misspelling of ${i}`),!0)};function Uv(l,i,s){if(typeof l!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const c=Object.keys(l);let f=c.length;for(;f-- >0;){const d=c[f],h=i[d];if(h){const b=l[d],x=b===void 0||h(b,d,l);if(x!==!0)throw new he("option "+d+" must be "+x,he.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new he("Unknown option "+d,he.ERR_BAD_OPTION)}}const co={assertOptions:Uv,validators:Ro},tn=co.validators;let Ta=class{constructor(i){this.defaults=i||{},this.interceptors={request:new fm,response:new fm}}async request(i,s){try{return await this._request(i,s)}catch(c){if(c instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const d=f.stack?f.stack.replace(/^.+\n/,""):"";try{c.stack?d&&!String(c.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(c.stack+=`
`+d):c.stack=d}catch{}}throw c}}_request(i,s){typeof i=="string"?(s=s||{},s.url=i):s=i||{},s=Aa(this.defaults,s);const{transitional:c,paramsSerializer:f,headers:d}=s;c!==void 0&&co.assertOptions(c,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean)},!1),f!=null&&(O.isFunction(f)?s.paramsSerializer={serialize:f}:co.assertOptions(f,{encode:tn.function,serialize:tn.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),co.assertOptions(s,{baseUrl:tn.spelling("baseURL"),withXsrfToken:tn.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let h=d&&O.merge(d.common,d[s.method]);d&&O.forEach(["delete","get","head","post","put","patch","common"],z=>{delete d[z]}),s.headers=vt.concat(h,d);const b=[];let x=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(s)===!1||(x=x&&k.synchronous,b.unshift(k.fulfilled,k.rejected))});const g=[];this.interceptors.response.forEach(function(k){g.push(k.fulfilled,k.rejected)});let y,v=0,U;if(!x){const z=[wm.bind(this),void 0];for(z.unshift(...b),z.push(...g),U=z.length,y=Promise.resolve(s);v<U;)y=y.then(z[v++],z[v++]);return y}U=b.length;let D=s;for(;v<U;){const z=b[v++],k=b[v++];try{D=z(D)}catch(C){k.call(this,C);break}}try{y=wm.call(this,D)}catch(z){return Promise.reject(z)}for(v=0,U=g.length;v<U;)y=y.then(g[v++],g[v++]);return y}getUri(i){i=Aa(this.defaults,i);const s=R0(i.baseURL,i.url,i.allowAbsoluteUrls);return E0(s,i.params,i.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(i){Ta.prototype[i]=function(s,c){return this.request(Aa(c||{},{method:i,url:s,data:(c||{}).data}))}});O.forEach(["post","put","patch"],function(i){function s(c){return function(d,h,b){return this.request(Aa(b||{},{method:i,headers:c?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}Ta.prototype[i]=s(),Ta.prototype[i+"Form"]=s(!0)});let Bv=class k0{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(d){s=d});const c=this;this.promise.then(f=>{if(!c._listeners)return;let d=c._listeners.length;for(;d-- >0;)c._listeners[d](f);c._listeners=null}),this.promise.then=f=>{let d;const h=new Promise(b=>{c.subscribe(b),d=b}).then(f);return h.cancel=function(){c.unsubscribe(d)},h},i(function(d,h,b){c.reason||(c.reason=new jl(d,h,b),s(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const s=this._listeners.indexOf(i);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const i=new AbortController,s=c=>{i.abort(c)};return this.subscribe(s),i.signal.unsubscribe=()=>this.unsubscribe(s),i.signal}static source(){let i;return{token:new k0(function(f){i=f}),cancel:i}}};function Lv(l){return function(s){return l.apply(null,s)}}function Hv(l){return O.isObject(l)&&l.isAxiosError===!0}const Eu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Eu).forEach(([l,i])=>{Eu[i]=l});function U0(l){const i=new Ta(l),s=p0(Ta.prototype.request,i);return O.extend(s,Ta.prototype,i,{allOwnKeys:!0}),O.extend(s,i,null,{allOwnKeys:!0}),s.create=function(f){return U0(Aa(l,f))},s}const Ze=U0(Di);Ze.Axios=Ta;Ze.CanceledError=jl;Ze.CancelToken=Bv;Ze.isCancel=T0;Ze.VERSION=M0;Ze.toFormData=Ao;Ze.AxiosError=he;Ze.Cancel=Ze.CanceledError;Ze.all=function(i){return Promise.all(i)};Ze.spread=Lv;Ze.isAxiosError=Hv;Ze.mergeConfig=Aa;Ze.AxiosHeaders=vt;Ze.formToJSON=l=>C0(O.isHTMLForm(l)?new FormData(l):l);Ze.getAdapter=D0.getAdapter;Ze.HttpStatusCode=Eu;Ze.default=Ze;const{Axios:o5,AxiosError:s5,CanceledError:c5,isCancel:u5,CancelToken:f5,VERSION:d5,all:p5,Cancel:h5,isAxiosError:m5,spread:g5,toFormData:x5,AxiosHeaders:b5,HttpStatusCode:y5,formToJSON:v5,getAdapter:S5,mergeConfig:w5}=Ze,nn=Ze.create({baseURL:"https://jansanwadserver.onrender.com/api",headers:{"Content-Type":"application/json"}});nn.interceptors.request.use(l=>(l.data instanceof FormData&&delete l.headers["Content-Type"],l));const B0="/assets/vvcmcbuildingbanner-DtzkCcP_.png",L0="/assets/ajivir5-DJJi1rt9.jpeg";function qv(){const l=_n(),[i,s]=N.useState("password"),[c,f]=N.useState({username:"",password:""}),[d,h]=N.useState(!1),[b,x]=N.useState(""),[g,y]=N.useState(!1),[v,U]=N.useState("mobile"),[D,z]=N.useState(""),[k,C]=N.useState(["","","","","",""]),[B,q]=N.useState(""),[V,F]=N.useState(0),[W,ae]=N.useState(!1),[$,re]=N.useState(!1),ve=N.useRef([]),Oe=te=>P=>f(w=>({...w,[te]:P.target.value}));N.useEffect(()=>{if(V<=0){ae(!0);return}const te=setTimeout(()=>F(P=>P-1),1e3);return()=>clearTimeout(te)},[V]);const Z=te=>`${String(Math.floor(te/60)).padStart(2,"0")}:${String(te%60).padStart(2,"0")}`,ce=async te=>{if(te.preventDefault(),x(""),!c.username||!c.password){x("सर्व fields भरा ❌");return}try{h(!0);const P=await nn.post("/citizen/login",{username:c.username.trim(),password:c.password});if(!P.data.success){x(P.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(P.data.citizen)),localStorage.setItem("citizenToken",P.data.token||""),l("/my-appointments")}catch(P){x(P?.response?.data?.message||"Server Error ❌")}finally{h(!1)}},X=async()=>{const te=D.trim();if(!/^[0-9]{10}$/.test(te)){x("10 अंकी valid mobile number टाका!");return}x(""),re(!0);const P=Math.floor(1e5+Math.random()*9e5).toString();q(P),F(60),ae(!1),C(["","","","","",""]);const w=`Dear Citizen ${P} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`,L=`https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${te}&text=${encodeURIComponent(w)}`;fetch(L,{method:"GET",mode:"no-cors"}).catch(()=>{}),U("otp"),re(!1),setTimeout(()=>ve.current[0]?.focus(),120)},je=async()=>{const te=k.join("");if(te.length<6){x("6 अंकी OTP टाका!");return}if(V<=0){x("OTP expire झाला! पुन्हा पाठवा.");return}if(te!==B){x("❌ चुकीचा OTP! पुन्हा try करा."),C(["","","","","",""]),setTimeout(()=>ve.current[0]?.focus(),50);return}try{re(!0),x("");const P=await nn.post("/citizen/citizenLoginByMobile",{mobileNo:D.trim()});if(!P.data.success){x(P.data.message||"Login failed ❌");return}localStorage.setItem("citizenUser",JSON.stringify(P.data.citizen)),localStorage.setItem("citizenToken",P.data.token||""),l("/my-appointments")}catch(P){x(P?.response?.data?.message||"Server Error ❌")}finally{re(!1)}},Te=(te,P)=>{if(!/^[0-9]?$/.test(P))return;const w=[...k];w[te]=P,C(w),P&&te<5&&ve.current[te+1]?.focus()},_=(te,P)=>{P.key==="Backspace"&&!k[te]&&te>0&&ve.current[te-1]?.focus()},J=te=>{te.preventDefault();const P=te.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),w=[...k];P.split("").forEach((L,K)=>{w[K]=L}),C(w),ve.current[Math.min(P.length,5)]?.focus()},le=te=>{s(te),x(""),U("mobile"),C(["","","","","",""]),z(""),F(0),y(!1)};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${B0});
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
      `}),u.jsx("div",{className:"login-container",children:u.jsxs("div",{className:"login-card-wrapper",children:[u.jsxs("div",{className:"login-left",children:[u.jsxs("div",{className:"vvcmc-header",children:[u.jsx("div",{className:"vvcmc-logo",children:u.jsx("img",{src:d0,alt:"VVCMC Logo",style:{width:"50px",height:"50px",borderRadius:"50%",objectFit:"cover"}})}),u.jsxs("div",{className:"vvcmc-text",children:[u.jsx("h3",{children:"Vasai-Virar City Municipal Corporation"}),u.jsx("p",{children:"जन संवाद"})]})]}),u.jsx("div",{className:"login-heading",children:u.jsx("h1",{children:"Welcome Back"})}),u.jsx("div",{className:"login-subheading",children:"Mayor Appointment Portal वर login करा"}),u.jsxs("div",{className:"login-tabs",children:[u.jsx("button",{className:`login-tab ${i==="password"?"active":""}`,onClick:()=>le("password"),children:"🔒 Password Login"}),u.jsx("button",{className:`login-tab ${i==="otp"?"active":""}`,onClick:()=>le("otp"),children:"📱 OTP Login"})]}),b&&u.jsxs("div",{className:"login-error",children:["⚠️ ",b]}),i==="password"&&u.jsx("div",{children:u.jsxs("form",{onSubmit:ce,children:[u.jsxs("div",{className:"login-field",children:[u.jsx("label",{className:"login-label",children:"Username"}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"👤"}),u.jsx("input",{className:"login-input",type:"text",placeholder:"Username टाका",value:c.username,onChange:Oe("username"),autoComplete:"username",autoFocus:!0})]})]}),u.jsxs("div",{className:"login-field",children:[u.jsx("label",{className:"login-label",children:"Password"}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"🔒"}),u.jsx("input",{className:"login-input",type:g?"text":"password",placeholder:"Password टाका",value:c.password,onChange:Oe("password"),autoComplete:"current-password"}),u.jsx("button",{type:"button",className:"login-pass-toggle",onClick:()=>y(!g),tabIndex:-1,children:g?"👁️":"👁️‍🗨️"})]})]}),u.jsx("button",{type:"submit",className:"login-btn",disabled:d||!c.username||!c.password,children:d?"⏳ Logging in...":"🔐 Login"}),u.jsxs("div",{className:"login-footer",children:["Account नाही?"," ",u.jsx("span",{className:"login-link",onClick:()=>l("/register"),children:"Register करा"})]})]})}),i==="otp"&&u.jsxs("div",{children:[v==="mobile"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"login-field",children:[u.jsx("label",{className:"login-label",children:"Mobile Number"}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"otp-mobile-prefix",children:"🇮🇳 +91"}),u.jsx("input",{className:"login-input with-prefix",type:"tel",maxLength:10,placeholder:"10 अंकी नंबर",value:D,onChange:te=>z(te.target.value.replace(/\D/g,"").slice(0,10)),onKeyDown:te=>te.key==="Enter"&&X(),autoFocus:!0})]})]}),u.jsx("button",{className:"login-btn",onClick:X,disabled:D.length!==10||$,children:$?"⏳ पाठवत आहे...":"OTP पाठवा →"}),u.jsxs("div",{className:"login-footer",children:["Account नाही?"," ",u.jsx("span",{className:"login-link",onClick:()=>l("/register"),children:"Register करा"})]})]}),v==="otp"&&u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"otp-back-btn",onClick:()=>{U("mobile"),C(["","","","","",""]),x("")},children:"← मागे जा"}),u.jsxs("div",{style:{fontSize:13,color:"#64748b",marginBottom:16},children:[u.jsxs("span",{style:{color:"#f97316",fontWeight:700},children:["+91 ******",D.slice(-3)]})," ","वर OTP पाठवला"]}),u.jsx("div",{className:"otp-boxes",onPaste:J,children:k.map((te,P)=>u.jsx("input",{ref:w=>ve.current[P]=w,className:"otp-box",type:"tel",maxLength:1,value:te,placeholder:"·",onChange:w=>Te(P,w.target.value),onKeyDown:w=>_(P,w)},P))}),u.jsxs("div",{className:"otp-timer",children:[V>0?u.jsxs(u.Fragment,{children:["OTP expire होईल:"," ",u.jsx("strong",{style:{color:V<=15?"#dc2626":"#f97316"},children:Z(V)})]}):u.jsx("span",{style:{color:"#dc2626",fontWeight:600},children:"OTP expire झाला!"}),u.jsxs("div",{style:{marginTop:6},children:["OTP नाही मिळाला?"," ",u.jsx("button",{className:"resend-btn",onClick:X,disabled:!W,children:"पुन्हा पाठवा"})]})]}),u.jsx("button",{className:"login-btn",onClick:je,disabled:k.join("").length<6||$,children:$?"⏳ Verifying...":"✅ Verify & Login"})]})]})]}),u.jsxs("div",{className:"login-right",children:[u.jsxs("div",{className:"mayor-decorations",children:[u.jsx("div",{className:"mayor-icon mayor-icon-1",children:"🏛️"}),u.jsx("div",{className:"mayor-icon mayor-icon-2",children:"🤝"}),u.jsx("div",{className:"mayor-icon mayor-icon-3",children:"🏢"}),u.jsx("div",{className:"mayor-icon mayor-icon-4",children:"🏙️"})]}),u.jsxs("div",{className:"mayor-section",children:[u.jsxs("div",{className:"mayor-img-wrapper",children:[u.jsx("div",{className:"mayor-img-border",children:u.jsx("img",{src:L0,alt:"Mayor",className:"mayor-img"})}),u.jsx("div",{className:"mayor-chair-badge",children:"🪑"})]}),u.jsx("h2",{className:"mayor-name",children:"मा. श्री.अजीव पाटील"}),u.jsx("p",{className:"mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),u.jsx("div",{className:"mayor-progress",children:u.jsx("div",{className:"mayor-progress-bar"})})]})]})]})})]})}function Yv(){const l=_n(),[i,s]=N.useState({fullName:"",userName:"",mobileNumber:"",email:"",password:"",confirmPassword:""}),[c,f]=N.useState(!1),[d,h]=N.useState(""),[b,x]=N.useState(!1),[g,y]=N.useState(!1),[v,U]=N.useState(!1),D=k=>C=>s(B=>({...B,[k]:C.target.value})),z=async k=>{if(k.preventDefault(),h(""),!i.fullName||!i.mobileNumber||!i.password){h("सर्व required fields भरा ❌");return}if(!/^\d{10}$/.test(i.mobileNumber)){h("Mobile number 10 digits असावा ❌");return}if(i.password.length<6){h("Password किमान 6 characters असावा ❌");return}if(i.password!==i.confirmPassword){h("Passwords जुळत नाहीत ❌");return}try{f(!0);const C=await nn.post("/citizen/register",{fullName:i.fullName,userName:i.userName,mobileNumber:i.mobileNumber,address:i.address,pincode:i.pincode,email:i.email,password:i.password});if(!C.data.success){h(C.data.message||"Registration failed ❌");return}x(!0),setTimeout(()=>l("/login"),2e3)}catch(C){h(C?.response?.data?.message||"Server Error ❌")}finally{f(!1)}};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${B0});
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
      `}),u.jsx("div",{className:"login-container",children:u.jsxs("div",{className:"login-card-wrapper",children:[u.jsxs("div",{className:"login-left",children:[u.jsxs("div",{className:"vvcmc-header",children:[u.jsx("div",{className:"vvcmc-logo",children:"🏛️"}),u.jsxs("div",{className:"vvcmc-text",children:[u.jsx("h3",{children:"Vasai-Virar City Municipal Corporation"}),u.jsx("p",{children:"जन संवाद"})]})]}),u.jsx("div",{className:"login-heading",children:u.jsx("h1",{children:"Account तयार करा"})}),u.jsx("div",{className:"login-subheading",children:"Mayor Appointment बुक करण्यासाठी register करा"}),b?u.jsxs("div",{className:"login-success",children:["✅ Registration successful!",u.jsx("br",{}),u.jsx("span",{style:{fontSize:13,fontWeight:400},children:"Login page वर redirect होत आहे..."})]}):u.jsxs(u.Fragment,{children:[d&&u.jsxs("div",{className:"login-error",children:["⚠️ ",d]}),u.jsxs("form",{onSubmit:z,children:[u.jsxs("div",{className:"reg-grid",children:[u.jsxs("div",{className:"reg-field",children:[u.jsxs("label",{className:"login-label",children:["Full Name ",u.jsx("span",{className:"req",children:"*"})]}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"👤"}),u.jsx("input",{className:"login-input",type:"text",placeholder:"आपले पूर्ण नाव",value:i.fullName,onChange:D("fullName"),autoFocus:!0})]})]}),u.jsxs("div",{className:"reg-field",children:[u.jsx("label",{className:"login-label",children:"User Name"}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"🪪"}),u.jsx("input",{className:"login-input",type:"text",placeholder:"Username",value:i.userName,onChange:D("userName")})]})]}),u.jsxs("div",{className:"reg-field",children:[u.jsxs("label",{className:"login-label",children:["Mobile Number ",u.jsx("span",{className:"req",children:"*"})]}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"📱"}),u.jsx("input",{className:"login-input",type:"tel",placeholder:"10 digit mobile",value:i.mobileNumber,onChange:D("mobileNumber"),maxLength:10})]})]}),u.jsxs("div",{className:"reg-field",children:[u.jsx("label",{className:"login-label",children:"Email"}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"✉️"}),u.jsx("input",{className:"login-input",type:"email",placeholder:"Email (optional)",value:i.email,onChange:D("email")})]})]}),u.jsxs("div",{className:"reg-field",children:[u.jsx("label",{className:"login-label",children:"Address"}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"📱"}),u.jsx("input",{className:"login-input",type:"text",placeholder:"Address",value:i.address,onChange:D("address")})]})]}),u.jsxs("div",{className:"reg-field",children:[u.jsx("label",{className:"login-label",children:"Pincode"}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"📱"}),u.jsx("input",{className:"login-input",type:"text",placeholder:"Pincode",value:i.pincode,onChange:D("pincode"),maxLength:6})]})]}),u.jsxs("div",{className:"reg-field",children:[u.jsxs("label",{className:"login-label",children:["Password ",u.jsx("span",{className:"req",children:"*"})]}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"🔒"}),u.jsx("input",{className:"login-input",type:g?"text":"password",placeholder:"Min. 6 characters",value:i.password,onChange:D("password")}),u.jsx("button",{type:"button",className:"login-pass-toggle",onClick:()=>y(!g),tabIndex:-1,children:g?"👁️":"👁️‍🗨️"})]}),u.jsx("div",{className:"input-hint",children:"किमान 6 characters"})]}),u.jsxs("div",{className:"reg-field",children:[u.jsxs("label",{className:"login-label",children:["Confirm Password ",u.jsx("span",{className:"req",children:"*"})]}),u.jsxs("div",{className:"login-input-wrapper",children:[u.jsx("span",{className:"login-input-icon",children:"🔐"}),u.jsx("input",{className:"login-input",type:v?"text":"password",placeholder:"Password परत टाका",value:i.confirmPassword,onChange:D("confirmPassword")}),u.jsx("button",{type:"button",className:"login-pass-toggle",onClick:()=>U(!v),tabIndex:-1,children:v?"👁️":"👁️‍🗨️"})]})]})]}),u.jsx("button",{type:"submit",className:"login-btn",disabled:c||!i.fullName||!i.mobileNumber||!i.password||!i.confirmPassword,children:c?"⏳ Registering...":"✅ Register करा"})]}),u.jsxs("div",{className:"login-footer",children:["आधीच account आहे?"," ",u.jsx("span",{className:"login-link",onClick:()=>l("/login"),children:"Login करा"})]})]})]}),u.jsxs("div",{className:"login-right",children:[u.jsxs("div",{className:"mayor-decorations",children:[u.jsx("div",{className:"mayor-icon mayor-icon-1",children:"🏛️"}),u.jsx("div",{className:"mayor-icon mayor-icon-2",children:"🤝"}),u.jsx("div",{className:"mayor-icon mayor-icon-3",children:"🏢"}),u.jsx("div",{className:"mayor-icon mayor-icon-4",children:"🏙️"})]}),u.jsxs("div",{className:"mayor-section",children:[u.jsxs("div",{className:"mayor-img-wrapper",children:[u.jsx("div",{className:"mayor-img-border",children:u.jsx("img",{src:L0,alt:"Mayor",className:"mayor-img"})}),u.jsx("div",{className:"mayor-chair-badge",children:"🪑"})]}),u.jsx("h2",{className:"mayor-name",children:"मा. श्री.अजीव पाटील"}),u.jsx("p",{className:"mayor-title",children:"मा. महापौर, वसई विरार शहर महानगरपालिका"}),u.jsx("div",{className:"mayor-progress",children:u.jsx("div",{className:"mayor-progress-bar"})}),u.jsxs("div",{className:"mayor-info-card",children:[u.jsxs("div",{className:"mayor-info-item",children:[u.jsx("span",{className:"mayor-info-icon",children:"📅"}),u.jsx("span",{children:"Appointment सहज बुक करा"})]}),u.jsxs("div",{className:"mayor-info-item",children:[u.jsx("span",{className:"mayor-info-icon",children:"🔔"}),u.jsx("span",{children:"SMS द्वारे notification मिळवा"})]}),u.jsxs("div",{className:"mayor-info-item",children:[u.jsx("span",{className:"mayor-info-icon",children:"🛡️"}),u.jsx("span",{children:"Secure Government Portal"})]})]})]})]})]})})]})}const du=[{label:"Personal Details",icon:"👤"},{label:"Appointment",icon:"📅"},{label:"Details",icon:"ℹ️"},{label:"Photo",icon:"📷"},{label:"Review & Submit",icon:"📋"}];function to(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}):"—"}function pu(l){if(!l)return[];const i=l.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);if(!i)return[];const s=parseInt(i[1]),c=parseInt(i[2]),f=parseInt(i[3]),d=parseInt(i[4]),h=[];let b=s*60+c;const x=f*60+d;for(;b+15<=x;){const g=String(Math.floor(b/60)).padStart(2,"0"),y=String(b%60).padStart(2,"0"),v=String(Math.floor((b+15)/60)).padStart(2,"0"),U=String((b+15)%60).padStart(2,"0");h.push(`${g}:${y} - ${v}:${U}`),b+=15}return h}function Vv(){const l=_n(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[s,c]=N.useState(0),[f,d]=N.useState(!1),[h,b]=N.useState([]),[x,g]=N.useState(null),[y,v]=N.useState(null),[U,D]=N.useState("forward"),[z,k]=N.useState([]),[C,B]=N.useState(!1),[q,V]=N.useState(!1),[F,W]=N.useState(!1),[ae,$]=N.useState(!1),[re,ve]=N.useState(null),[Oe,Z]=N.useState(null),ce=(Q,ee="success")=>{g({msg:Q,type:ee}),setTimeout(()=>g(null),3500)},[X,je]=N.useState({username:i?.username||"",fullName:i?.fullName||"",mobileNumber:i?.mobileNumber||"",email:i?.email||"",address:"",pincode:"",preferredDate:"",slotTime:"",slotStart:"",slotEnd:"",microSlot:"",purpose:"",numberOfVisitors:"1",visitedBefore:!1,ward:"",visitorPhoto:null,photoPreview:null}),Te=Q=>ee=>je(fe=>({...fe,[Q]:ee.target.value})),_=N.useRef("");N.useEffect(()=>{_.current=X.microSlot},[X.microSlot]),N.useEffect(()=>{if(!i?._id)return;(async()=>{try{W(!0);const ee=await nn.get(`/citizen/by-id/${i._id}`);if(ee.data?.success&&ee.data?.citizen){const fe=ee.data.citizen;je(xe=>({...xe,username:fe.username||xe.username,fullName:fe.fullName||xe.fullName,mobileNumber:fe.mobileNumber||xe.mobileNumber,email:fe.email||xe.email,pincode:fe.pincode||xe.pincode,address:fe.address||xe.address,ward:ee.data.lastWard||xe.ward})),ee.data.lastPhoto&&Z(ee.data.lastPhoto),ve(ee.data.nextVisitNumber),$(!0)}}catch{}finally{W(!1)}})()},[]),N.useEffect(()=>{nn.get("/availability/get").then(Q=>{Q.data&&b(Array.isArray(Q.data)?Q.data:Q.data.data||[])}).catch(()=>{})},[]);const J=Q=>(Q||"").replace(/\s*-\s*/g,"-").trim(),le=Q=>{if(Q?.success===!1)return new Set;const ee=Q?.data?.slots||Q?.slots||[];return new Set(ee.filter(fe=>fe.booked).map(fe=>J(fe.microSlot)))},te=async(Q,ee,fe,xe)=>{try{const rn=Q.replace(/ /g,"%20"),Gt=ee.replace(/ /g,"%20"),We=await nn.get(`/citizen/micro-slots?date=${rn}&slotTime=${Gt}`),oa=le(We.data),Dn=fe.map(Xt=>({...Xt,booked:oa.has(J(Xt.microSlot))}));return k(Dn),V(Dn.length>0&&Dn.every(Xt=>Xt.booked)),xe&&oa.has(J(xe))&&(ce("⚠️ तुम्ही निवडलेला slot आत्ताच book झाला. कृपया दुसरा slot निवडा.","error"),je(Xt=>({...Xt,microSlot:""}))),oa}catch{return new Set}};N.useEffect(()=>{if(s!==1||!X.preferredDate||!X.slotTime){(!X.preferredDate||!X.slotTime)&&(k([]),V(!1));return}let Q=!1;const ee=X.preferredDate,fe=X.slotTime,xe=pu(fe).map(Gt=>({microSlot:Gt,booked:!1}));k(xe),V(!1),B(!0),te(ee,fe,xe,_.current).finally(()=>{Q||B(!1)});const rn=setInterval(()=>{if(Q)return;const Gt=pu(fe).map(We=>({microSlot:We,booked:!1}));te(ee,fe,Gt,_.current)},3e4);return()=>{Q=!0,clearInterval(rn)}},[X.preferredDate,X.slotTime,s]);const P=N.useRef(null),w=N.useRef(null),L=N.useRef(null),[K,I]=N.useState(!1),[ue,ge]=N.useState(""),Ee=async()=>{ge("");try{const Q=await navigator.mediaDevices.getUserMedia({video:!0});L.current=Q,I(!0),setTimeout(()=>{P.current&&(P.current.srcObject=Q,P.current.play())},100)}catch{ge("Camera access denied. Browser permission द्या.")}},tt=()=>{const Q=P.current,ee=w.current;!Q||!ee||(ee.width=Q.videoWidth,ee.height=Q.videoHeight,ee.getContext("2d").drawImage(Q,0,0),ee.toBlob(fe=>{const xe=new File([fe],`photo-${Date.now()}.jpg`,{type:"image/jpeg"}),rn=URL.createObjectURL(fe);je(Gt=>({...Gt,visitorPhoto:xe,photoPreview:rn})),He()},"image/jpeg"))},He=()=>{L.current&&(L.current.getTracks().forEach(Q=>Q.stop()),L.current=null),I(!1)},ra=new Date().toISOString().split("T")[0],On=h.filter(Q=>Q.date>=ra),Ui=On.find(Q=>Q.date===X.preferredDate)?.timeSlots||[],ln=s===0?!X.fullName||!X.mobileNumber||!X.address:s===1?!X.preferredDate||!X.slotTime||!X.microSlot:s===2?!X.purpose||!X.ward:s===3?!X.visitorPhoto:!1,Nl=()=>{D("forward"),c(Q=>Q+1)},El=()=>{D("back"),c(Q=>Q-1)},Lo=async()=>{if(!i){l("/login");return}try{d(!0);try{const Dn=pu(X.slotTime).map(Mn=>({microSlot:Mn,booked:!1})),Xt=X.preferredDate.replace(/ /g,"%20"),_a=X.slotTime.replace(/ /g,"%20"),Ho=await nn.get(`/citizen/micro-slots?date=${Xt}&slotTime=${_a}`),zl=le(Ho.data),qo=Dn.map(Mn=>({...Mn,booked:zl.has(J(Mn.microSlot))}));if(k(qo),zl.has(J(X.microSlot))){ce("❌ हा slot आत्ताच दुसऱ्याने book केला. कृपया दुसरा slot निवडा.","error"),je(Mn=>({...Mn,microSlot:""})),d(!1);return}}catch{}const Q=i?._id&&i._id!=="undefined"?i._id:"",ee=new FormData;ee.append("citizenId",Q),ee.append("fullName",X.fullName),ee.append("mobileNumber",X.mobileNumber),ee.append("email",X.email||""),ee.append("address",X.address),ee.append("pincode",X.pincode||""),ee.append("preferredDate",X.preferredDate),ee.append("slotTime",X.slotTime),ee.append("microSlot",X.microSlot),ee.append("purpose",X.purpose),ee.append("numberOfVisitors",X.numberOfVisitors),ee.append("visitedBefore",String(X.visitedBefore)),ee.append("ward",X.ward),ee.append("submittedById",Q),ee.append("submittedByName",i.fullName||""),X.visitorPhoto&&ee.append("visitorPhoto",X.visitorPhoto);const fe=await nn.post("/citizen/book-appointment",ee,{headers:{"Content-Type":void 0}});if(!fe.data.success){ce(fe.data.message||"Booking failed ❌","error");return}const xe=fe.data.data,rn=xe.mobileNumber||X.mobileNumber,Gt={pending:"Pending — Awaiting Mayor's Approval",approved:"Approved by Respected Mayor Ajiv Patil Sir",rejected:"Rejected by Admin",cancelled:"Cancelled"}[xe.status]||xe.status,We=`Dear ${xe.fullName}, Your appointment with Respected Mayor Ajiv Patil Sir at Vasai Virar City Municipal Corporation has been successfully booked. Appointment Status: ${Gt}. Date: ${formatShort(xe.preferredDate)}, Time Slot: ${xe.microSlot||xe.slotTime}, Token No: ${xe.tokenId}. Please carry this Token No on your visit day. VVCMC Jan Samvaad`,oa=`https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVCMCJS&mobileno=${rn}&text=${encodeURIComponent(We)}`;await fetch(oa),v(xe)}catch(Q){ce(Q?.response?.data?.message||"Server Error ❌","error")}finally{d(!1)}};return y?u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
          @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        `}),u.jsx("div",{className:"book-root",children:u.jsxs("div",{style:{background:"#fff",borderRadius:20,padding:"48px 40px",maxWidth:520,width:"100%",textAlign:"center",boxShadow:"0 8px 40px rgba(76,171,193,0.18)",border:"1.5px solid #b2e4ee",animation:"fadeUpIn .5s ease"},children:[u.jsx("div",{style:{width:90,height:90,borderRadius:"50%",background:"linear-gradient(135deg,#4CABC1,#66A962)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,margin:"0 auto 20px",animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both",boxShadow:"0 8px 24px rgba(76,171,193,0.35)"},children:"✅"}),u.jsx("h2",{style:{fontSize:26,fontWeight:800,color:"#187488",marginBottom:8,fontFamily:"'Plus Jakarta Sans',sans-serif",background:"linear-gradient(135deg,#4CABC1,#66A962)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Appointment Booked!"}),u.jsx("p",{style:{color:"#4a5568",marginBottom:24,fontSize:14,fontWeight:500},children:"तुमची appointment successfully book झाली आहे"}),u.jsx("div",{style:{background:"linear-gradient(135deg,#f0faf9,#f5fef5)",border:"1.5px solid #b2e4ee",borderRadius:12,padding:"20px 24px",marginBottom:24,textAlign:"left"},children:[["Token ID",y.tokenId],["Date",to(y.preferredDate)],["Slot",y.slotTime],["Your Time",y.microSlot||"—"],["Status","⏳ Pending — Admin approval बाकी आहे"]].map(([Q,ee])=>u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid #d4eff5",fontSize:13},children:[u.jsx("span",{style:{color:"#5a7a88",fontWeight:600},children:Q}),u.jsx("span",{style:{color:"#187488",fontWeight:700},children:ee})]},Q))}),y.qrCode&&u.jsxs("div",{style:{marginBottom:20},children:[u.jsx("p",{style:{fontSize:12,color:"#6b7280",marginBottom:8,fontWeight:600},children:"QR Code — भेटीच्या दिवशी दाखवा"}),u.jsx("img",{src:y.qrCode,alt:"QR",style:{width:130,height:130}})]}),u.jsx("button",{onClick:()=>l("/my-appointments"),style:{width:"100%",padding:"13px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#4CABC1,#49ACC3)",color:"#fff",fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)",transition:"transform .15s"},onMouseEnter:Q=>Q.target.style.transform="translateY(-1px)",onMouseLeave:Q=>Q.target.style.transform="none",children:"📋 My Appointments बघा"})]})})]}):u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),x&&u.jsx("div",{className:"toast",style:{background:x.type==="success"?"var(--teal)":"#dc2626"},children:x.msg}),u.jsx("div",{className:"book-root",children:u.jsxs("div",{className:"book-wrapper",children:[u.jsxs("div",{className:"book-titlebar",children:[u.jsx("h1",{children:"जनसंपर्क – Application Form"}),u.jsx("div",{className:"stepper",children:du.map((Q,ee)=>{const fe=ee<s?"done":ee===s?"active":"pending";return u.jsxs("div",{className:`step-tab ${fe}`,children:[u.jsx("div",{className:`step-dot ${fe}`,children:fe==="done"?"✓":ee+1}),Q.label]},ee)})})]}),u.jsx("div",{className:"step-progress-bar",children:u.jsx("div",{className:"step-progress-fill",style:{width:`${(s+1)/du.length*100}%`}})}),u.jsx("div",{className:"book-body",children:u.jsxs("div",{className:U==="forward"?"step-body-forward":"step-body-back",children:[s===0&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Personal Information"}),u.jsx("p",{className:"section-sub",children:"Please provide your basic details to proceed"}),F&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--teal)",fontSize:13,fontWeight:600,marginBottom:16},children:[u.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"माहिती लोड होत आहे..."]}),ae&&re!==null&&u.jsxs("div",{className:"visit-badge",style:{marginBottom:20,display:"inline-flex"},children:[u.jsx("span",{className:"badge-number",children:re}),u.jsx("span",{children:re===1?"हे या नागरिकाचे पहिले भेट असेल 🎉":`हे या नागरिकाचे ${re}वे भेट असेल`})]}),u.jsxs("div",{className:"f-grid-2",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"User Name"}),u.jsx("input",{className:"f-input",value:X.username,onChange:Te("username"),placeholder:"Username"})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Full Name ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("input",{className:"f-input",value:X.fullName,onChange:Te("fullName"),placeholder:"आपले पूर्ण नाव"})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Mobile Number ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("input",{className:"f-input",type:"tel",value:X.mobileNumber,onChange:Te("mobileNumber"),maxLength:10,placeholder:"10 digit mobile"})]})]}),u.jsxs("div",{className:"f-grid-2",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Email Address"}),u.jsx("input",{className:"f-input",type:"email",value:X.email,onChange:Te("email"),placeholder:"Email (optional)"})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Pincode"}),u.jsx("input",{className:"f-input",value:X.pincode,onChange:Te("pincode"),maxLength:6,placeholder:"Pincode"})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Address ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("input",{className:"f-input",value:X.address,onChange:Te("address"),placeholder:"पूर्ण पत्ता"})]})]}),u.jsx("p",{className:"form-note",children:"* In order to process your appointment, all fields marked with an asterisk (*) are required."})]}),s===1&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Appointment Scheduling"}),u.jsx("p",{className:"section-sub",children:"Select your preferred date, time slot, and 15-minute appointment window"}),On.length===0?u.jsxs("div",{className:"empty-box",children:[u.jsx("div",{style:{fontSize:36,marginBottom:8},children:"📅"}),u.jsx("p",{style:{color:"#92400e",fontWeight:700,margin:"0 0 4px",fontSize:15},children:"सध्या कोणत्याही dates available नाहीत"}),u.jsx("p",{style:{color:"#a16207",fontSize:13.5,margin:0,fontWeight:500},children:"Admin कडून availability add होण्याची वाट पाहा"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Available Dates ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("div",{className:"date-grid",children:On.map((Q,ee)=>u.jsxs("button",{type:"button",className:`date-btn${X.preferredDate===Q.date?" sel":""}`,onClick:()=>je(fe=>({...fe,preferredDate:Q.date,slotTime:"",slotStart:"",slotEnd:"",microSlot:""})),children:["📅 ",to(Q.date),u.jsxs("div",{className:"sub",children:[Q.timeSlots?.length," slot",Q.timeSlots?.length!==1?"s":""," available"]})]},ee))})]}),X.preferredDate&&u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Select Time Slot ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("div",{className:"slot-grid",children:Ui.map((Q,ee)=>{const fe=`${Q.start} - ${Q.end}`;return u.jsxs("button",{type:"button",className:`slot-btn${X.slotTime===fe?" sel":""}`,onClick:()=>je(xe=>({...xe,slotTime:fe,slotStart:Q.start,slotEnd:Q.end,microSlot:""})),children:["⏰ ",fe]},ee)})})]}),X.preferredDate&&X.slotTime&&u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["15-Minute Appointment Slot निवडा ",u.jsx("span",{className:"req",children:"*"})]}),C?u.jsxs("div",{style:{color:"var(--teal)",fontSize:13,fontWeight:600,padding:"12px 0",display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(58,154,175,0.3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}),"Slots loading..."]}):q?u.jsx("div",{style:{background:"#fee2e2",border:"1.5px solid #f87171",borderRadius:8,padding:"12px 16px",color:"#dc2626",fontWeight:700,fontSize:13},children:"❌ या slot साठी सर्व 15-minute appointments भरले आहेत. कृपया दुसरा slot निवडा."}):u.jsxs(u.Fragment,{children:[u.jsxs("select",{className:"f-input",style:{cursor:"pointer"},value:X.microSlot,onChange:Q=>{const ee=Q.target.value;if(z.find(xe=>xe.microSlot===ee)?.booked){ce("❌ हा slot आधीच book झाला आहे. कृपया दुसरा निवडा.","error");return}je(xe=>({...xe,microSlot:ee}))},children:[u.jsx("option",{value:"",children:"-- 15-minute slot निवडा --"}),z.map(Q=>u.jsxs("option",{value:Q.microSlot,disabled:Q.booked,children:[Q.booked?"🔴":"🟢"," ",Q.microSlot,Q.booked?" (Booked)":""]},Q.microSlot))]}),z.length>0&&u.jsxs("p",{style:{fontSize:12,color:"var(--text-sm)",marginTop:8,fontWeight:500},children:["🟢 Available  |  🔴 Booked  | ",u.jsx("strong",{children:z.filter(Q=>!Q.booked).length})," of ",u.jsx("strong",{children:z.length})," slots available"]}),X.microSlot&&u.jsxs("div",{className:"selected-box",style:{marginTop:10,marginBottom:0},children:["✅ तुमचा appointment time: ",u.jsx("strong",{children:X.microSlot})]})]})]}),X.preferredDate&&X.slotTime&&X.microSlot&&u.jsxs("div",{className:"selected-box",children:["📅 ",to(X.preferredDate),"  |  ⏰ ",X.slotTime,"  |  🕐 ",X.microSlot]})]}),u.jsxs("div",{className:"info-box",children:["ℹ️ ",u.jsx("strong",{children:"Date निवडण्यासाठी:"})," वरील available dates मधून date निवडा → time slot निवडा → 15-minute window निवडा"]})]}),s===2&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Visit Information"}),u.jsx("p",{className:"section-sub",children:"Provide details about your visit to the Mayor"}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Reason for Visit ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("textarea",{className:"f-input",rows:4,value:X.purpose,onChange:Te("purpose"),placeholder:"Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा",style:{resize:"vertical"}})]}),u.jsxs("div",{className:"f-grid-2",children:[u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Number of Visitors ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("input",{className:"f-input",type:"number",min:"1",max:"10",value:X.numberOfVisitors,onChange:Te("numberOfVisitors")})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Ward ",u.jsx("span",{className:"req",children:"*"})]}),u.jsxs("select",{className:"f-input",value:X.ward,onChange:Te("ward"),style:{cursor:"pointer"},children:[u.jsx("option",{value:"",children:"Select Ward"}),["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(Q=>u.jsx("option",{children:Q},Q))]}),X.ward&&ae&&u.jsx("p",{style:{fontSize:12,color:"#16a34a",fontWeight:600,marginTop:4},children:"✅ मागील भेटीवरून auto-filled"})]}),u.jsxs("div",{className:"field",children:[u.jsxs("label",{children:["Have you visited before? ",u.jsx("span",{className:"req",children:"*"})]}),u.jsx("div",{className:"radio-group",children:["No","Yes"].map(Q=>u.jsxs("label",{className:`radio-label${X.visitedBefore===(Q==="Yes")?" selected":""}`,children:[u.jsx("input",{type:"radio",name:"vb",value:Q,checked:X.visitedBefore===(Q==="Yes"),onChange:()=>je(ee=>({...ee,visitedBefore:Q==="Yes"})),style:{accentColor:"var(--teal)",width:15,height:15}}),Q]},Q))})]})]})]}),s===3&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Visitor Photo"}),u.jsx("p",{className:"section-sub",children:"Please upload or capture a clear photo for identification at the Mayor's office"}),Oe&&!X.photoPreview&&u.jsxs("div",{className:"last-photo-hint",children:[u.jsx("img",{src:`http://localhost:4200/${Oe}`,alt:"last visit",style:{width:48,height:48,borderRadius:"50%",objectFit:"cover",border:"2px solid #7ec89a",flexShrink:0},onError:Q=>{Q.target.style.display="none"}}),u.jsxs("div",{children:[u.jsx("p",{style:{margin:0,fontWeight:700,fontSize:13},children:"मागील भेटीचा फोटो उपलब्ध आहे"}),u.jsx("button",{type:"button",style:{marginTop:4,fontSize:12,color:"var(--teal)",fontWeight:700,background:"none",border:"none",cursor:"pointer",padding:0,textDecoration:"underline"},onClick:()=>{je(Q=>({...Q,photoPreview:`http://localhost:4200/${Oe}`,visitorPhoto:Oe}))},children:"हाच फोटो वापरा ↗"})]})]}),u.jsxs("div",{style:{display:"flex",gap:12,marginBottom:20},children:[u.jsxs("label",{className:"photo-btn-primary",children:["📁 Upload Photo",u.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:Q=>{const ee=Q.target.files[0];ee&&je(fe=>({...fe,visitorPhoto:ee,photoPreview:URL.createObjectURL(ee)}))}})]}),u.jsx("button",{type:"button",onClick:Ee,className:"photo-btn-secondary",children:"📷 Use Webcam"})]}),K?u.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",border:"2px solid var(--border)",marginBottom:16},children:[u.jsx("button",{type:"button",onClick:He,style:{position:"absolute",top:10,right:10,zIndex:10,width:30,height:30,borderRadius:"50%",background:"#ef4444",color:"#fff",border:"none",cursor:"pointer",fontWeight:800},children:"✕"}),u.jsx("video",{ref:P,autoPlay:!0,playsInline:!0,style:{width:"100%",maxHeight:340,objectFit:"cover",display:"block"}}),u.jsx("canvas",{ref:w,style:{display:"none"}}),u.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:16,background:"linear-gradient(transparent,rgba(0,0,0,0.55))",display:"flex",justifyContent:"center"},children:u.jsx("button",{type:"button",onClick:tt,style:{padding:"11px 30px",borderRadius:9,border:"none",background:"linear-gradient(135deg,var(--teal),var(--green))",color:"#fff",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",boxShadow:"0 4px 16px rgba(76,171,193,0.4)"},children:"📸 Capture Photo"})})]}):u.jsx("div",{style:{border:"2.5px dashed #b2d8e4",borderRadius:14,padding:36,textAlign:"center",background:"linear-gradient(135deg,#f7fcfe,#f5fef5)",marginBottom:16,transition:"all .2s"},children:X.photoPreview?u.jsxs(u.Fragment,{children:[u.jsx("img",{src:X.photoPreview,alt:"preview",style:{width:110,height:110,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginBottom:14,boxShadow:"0 4px 20px rgba(76,171,193,0.3)"}}),u.jsx("p",{style:{color:"var(--green)",fontWeight:700,fontSize:14,margin:"0 0 4px"},children:"✅ Photo selected"}),u.jsx("p",{style:{color:"#6a9aaa",fontSize:12.5,margin:0,fontWeight:500},children:'Click "Upload Photo" to change'})]}):u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{fontSize:44,marginBottom:12,color:"#b2d8e4"},children:"📷"}),u.jsx("p",{style:{color:"#6a9aaa",fontSize:14,margin:0,fontWeight:600},children:"Upload किंवा camera वापरून photo द्या"})]})}),ue&&u.jsx("p",{style:{color:"#ef4444",fontSize:13,marginTop:4,fontWeight:600},children:ue})]}),s===4&&u.jsxs("div",{children:[u.jsx("p",{className:"section-title",children:"Review & Submit"}),u.jsx("p",{className:"section-sub",children:"सर्व माहिती verify करा आणि submit करा"}),u.jsxs("div",{className:"review-grid",children:[[{title:"Personal Info",rows:[["Name",X.fullName],["Mobile",X.mobileNumber],["Email",X.email||"—"],["Address",X.address],["Pincode",X.pincode||"—"]]},{title:"Appointment",rows:[["Date",to(X.preferredDate)],["Slot",X.slotTime],["My Time",X.microSlot]]},{title:"Visit Details",rows:[["Purpose",X.purpose],["Visitors",X.numberOfVisitors],["Visited Before",X.visitedBefore?"Yes":"No"],["Ward",X.ward],...re!==null?[["Visit Number",`#${re}`]]:[]]}].map((Q,ee)=>u.jsxs("div",{className:"review-card",style:{animationDelay:`${ee*80}ms`},children:[u.jsx("div",{className:"review-card-title",children:Q.title}),Q.rows.map(([fe,xe])=>u.jsxs("div",{className:"review-row",children:[u.jsx("span",{className:"review-key",children:fe}),u.jsx("span",{className:"review-val",children:xe})]},fe))]},ee)),X.photoPreview&&u.jsxs("div",{className:"review-card",style:{textAlign:"center"},children:[u.jsx("div",{className:"review-card-title",children:"Visitor Photo"}),u.jsx("img",{src:X.photoPreview,alt:"v",style:{width:88,height:88,borderRadius:"50%",objectFit:"cover",border:"3px solid var(--teal)",marginTop:8,boxShadow:"0 4px 16px rgba(76,171,193,0.25)"}})]})]}),u.jsx("div",{style:{background:"linear-gradient(135deg,#fffbeb,#fef3c7)",border:"1.5px solid #fcd34d",borderRadius:10,padding:"13px 18px",margin:"16px 0 0",fontSize:13.5,color:"#92400e",fontWeight:600},children:"⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल."})]})]},s)}),u.jsxs("div",{className:"book-nav",children:[u.jsx("button",{className:"nav-cancel",onClick:()=>s>0?El():l(-1),children:s>0?"← Back":"CANCEL"}),s<du.length-1?u.jsx("button",{className:"nav-continue",disabled:ln,onClick:Nl,children:"CONTINUE →"}):u.jsx("button",{className:"nav-continue",disabled:f,onClick:Lo,children:f?u.jsxs(u.Fragment,{children:[u.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}})," Submitting..."]}):"✔ Submit Appointment"})]})]})})]})}function Gv(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"—"}function Xv(l){return l?new Date(l+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"—"}function Qv(l){return l?new Date(l).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}const Nm={pending:{bg:"#fef9c3",color:"#92400e",border:"#fde68a",label:"⏳ Pending"},approved:{bg:"#dcfce7",color:"#166534",border:"#86efac",label:"✅ Approved"},rejected:{bg:"#fee2e2",color:"#991b1b",border:"#fca5a5",label:"❌ Rejected"},expired:{bg:"#f3f4f6",color:"#6b7280",border:"#e5e7eb",label:"🕰️ Expired"}};function Em({name:l,photo:i,size:s=40}){const[c,f]=N.useState(!1),d=l?l.split(" ").map(g=>g[0]).join("").toUpperCase().slice(0,2):"?",h=["#0d9488","#0891b2","#7c3aed","#db2777","#ea580c","#16a34a"],b=l?l.charCodeAt(0)%h.length:0,x=i?i.startsWith("http")?i:`http://localhost:5000/${i}`:null;return x&&!c?u.jsx("img",{src:x,alt:l,onError:()=>f(!0),style:{width:s,height:s,borderRadius:"50%",objectFit:"cover",border:"2px solid #e2e8f0",flexShrink:0}}):u.jsx("div",{style:{width:s,height:s,borderRadius:"50%",background:h[b],color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:s*.35,fontWeight:700,fontFamily:"'DM Sans',sans-serif",flexShrink:0,border:"2px solid rgba(255,255,255,0.3)"},children:d})}function Zv({appt:l,onView:i}){const[s,c]=N.useState(!1),f=N.useRef();return N.useEffect(()=>{const d=h=>{f.current&&!f.current.contains(h.target)&&c(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),u.jsxs("div",{ref:f,style:{position:"relative",display:"flex",justifyContent:"center"},children:[u.jsx("button",{onClick:d=>{d.stopPropagation(),c(h=>!h)},style:{background:"none",border:"1px solid #e2e8f0",cursor:"pointer",padding:"4px 8px",borderRadius:6,color:"#6b7280",fontSize:18,lineHeight:1,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:d=>{d.target.style.borderColor="#16a34a",d.target.style.color="#16a34a"},onMouseLeave:d=>{d.target.style.borderColor="#e2e8f0",d.target.style.color="#6b7280"},title:"Actions",children:"⋮"}),s&&u.jsx("div",{style:{position:"absolute",right:0,top:"110%",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:100,minWidth:150,overflow:"hidden"},children:u.jsx("button",{onClick:d=>{d.stopPropagation(),i(l),c(!1)},style:{display:"block",width:"100%",padding:"10px 16px",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontSize:13,color:"#374151",fontFamily:"'DM Sans',sans-serif",fontWeight:500},onMouseEnter:d=>d.target.style.background="#f9fafb",onMouseLeave:d=>d.target.style.background="none",children:"👁 View Details"})})]})}const Jv=[10,25,50],zm="160px 1fr 130px 200px 150px 60px";function Kv(){const l=_n(),i=(()=>{try{return JSON.parse(localStorage.getItem("citizenUser")||"null")}catch{return null}})(),[s,c]=N.useState([]),[f,d]=N.useState(!0),[h,b]=N.useState(null),[x,g]=N.useState("all"),[y,v]=N.useState([]),[U,D]=N.useState(!1),[z,k]=N.useState(""),[C,B]=N.useState(1),[q,V]=N.useState(10);N.useEffect(()=>{if(!i){l("/login");return}F()},[]);const F=async()=>{try{d(!0);const Z=await nn.get("/citizen/my-appointments",{params:{citizenId:i._id,mobileNumber:i.mobileNumber}});Z.data.success&&c(Z.data.appointments||[])}catch{}finally{d(!1)}},W=s.filter(Z=>x==="all"||Z.status===x).filter(Z=>{if(!z)return!0;const ce=z.toLowerCase();return Z.tokenId?.toLowerCase().includes(ce)||Z.purpose?.toLowerCase().includes(ce)||Z.fullName?.toLowerCase().includes(ce)}),ae=Math.max(1,Math.ceil(W.length/q)),$=W.slice((C-1)*q,C*q),re=Z=>Nm[Z?.toLowerCase()]||Nm.pending,ve=()=>ae<=5?Array.from({length:ae},(Z,ce)=>ce+1):C<=3?[1,2,3,"...",ae]:C>=ae-2?[1,"...",ae-2,ae-1,ae]:[1,"...",C-1,C,C+1,"...",ae],Oe=()=>b(null);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
          grid-template-columns: ${zm};
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
          grid-template-columns: ${zm};
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
      `}),u.jsx("div",{className:"ma-root",children:u.jsxs("div",{className:"ma-inner",children:[u.jsxs("div",{className:"ma-header",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"ma-title",children:"My Appointments"}),u.jsxs("p",{className:"ma-sub",children:["Hello,",i?.fullName||`Citizen  ${i?.citizenId||""}`," 👋 — all your appointments are here."]})]}),u.jsxs("div",{className:"ma-actions",children:[u.jsx("button",{className:"ma-icon-btn",title:"Refresh",onClick:F,children:"↻"}),u.jsxs("button",{className:"ma-book-btn",onClick:()=>l("/book-appointment"),children:[u.jsx("span",{style:{fontSize:18,lineHeight:1},children:"+"})," New Appointment"]})]})]}),u.jsxs("div",{className:"filter-search-row",children:[u.jsxs("div",{className:"filter-tabs",children:[u.jsx("span",{className:"filter-label",children:"Status"}),[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"approved",label:"Approved"},{key:"rejected",label:"Rejected"},{key:"expired",label:"Expired"}].map(Z=>u.jsxs("button",{className:`ftab${x===Z.key?" active":""}`,onClick:()=>{g(Z.key),v([]),D(!1),B(1)},children:[Z.label," (",Z.key==="all"?s.length:s.filter(ce=>ce.status===Z.key).length,")"]},Z.key))]}),u.jsxs("div",{className:"search-wrap",children:[u.jsx("span",{className:"search-icon",children:"🔍"}),u.jsx("input",{className:"search-input",type:"text",placeholder:"Search appointment",value:z,onChange:Z=>{k(Z.target.value),B(1)}})]})]}),u.jsxs("div",{className:"table-card",children:[u.jsx("div",{className:"table-scroll-wrapper",children:u.jsxs("div",{className:"table-scroll-inner",children:[u.jsxs("div",{className:"tbl-head",children:[u.jsxs("div",{className:"tbl-head-cell",children:["# TOKEN ID ",u.jsx("span",{className:"sort-icon",children:"⇅"})]}),u.jsx("div",{className:"tbl-head-cell",children:"PURPOSE"}),u.jsxs("div",{className:"tbl-head-cell",children:["DATE ",u.jsx("span",{className:"sort-icon",children:"⇅"})]}),u.jsx("div",{className:"tbl-head-cell",children:"SLOT"}),u.jsx("div",{className:"tbl-head-cell",children:"APPOINTMENT_TIME"}),u.jsxs("div",{className:"tbl-head-cell",children:["STATUS ",u.jsx("span",{className:"sort-icon",children:"⇅"})]}),u.jsx("div",{className:"tbl-head-cell",children:"ACTIONS"})]}),f?u.jsxs("div",{style:{textAlign:"center",padding:"56px 0"},children:[u.jsx("div",{style:{width:34,height:34,border:"3px solid #e2e8f0",borderTopColor:"#16a34a",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 14px"}}),u.jsx("p",{style:{color:"#94a3b8",fontSize:14},children:"Appointments लोड होत आहेत..."})]}):$.length===0?u.jsxs("div",{className:"empty-box",children:[u.jsx("div",{style:{fontSize:48,marginBottom:14},children:"📅"}),u.jsx("p",{style:{color:"#374151",fontWeight:700,fontSize:16,marginBottom:6},children:x==="all"&&!z?"कोणतेही appointments नाहीत":`No ${x!=="all"?x:""} appointments found`}),u.jsx("p",{style:{color:"#94a3b8",fontSize:14,marginBottom:20},children:x==="all"&&!z?"Book your first appointment to get started.":"Try a different filter or search term."}),x==="all"&&!z&&u.jsx("button",{className:"ma-book-btn",style:{margin:"0 auto",display:"inline-flex"},onClick:()=>l("/book-appointment"),children:"+ Book Appointment"})]}):$.map((Z,ce)=>{const X=re(Z.status),je=y.includes(ce),Te=Z.purpose?Z.purpose.length>40?Z.purpose.slice(0,40)+"…":Z.purpose:"—";return u.jsxs("div",{className:`tbl-row${je?" row-checked":""}`,style:{animationDelay:`${ce*40}ms`},onClick:()=>b(Z),children:[u.jsx("div",{className:"cell-token",children:Z.tokenId||"—"}),u.jsxs("div",{className:"cell-purpose-wrap",children:[u.jsx(Em,{name:Z.fullName,photo:Z.visitorPhoto,size:38}),u.jsxs("div",{className:"cell-purpose-text",children:[u.jsx("div",{className:"purpose-title",children:Te}),u.jsx("div",{className:"purpose-sub",children:Z.fullName||"नागरिक"})]})]}),u.jsx("div",{className:"cell-date",children:Xv(Z.preferredDate)}),u.jsx("div",{className:"cell-slot",children:Z.slotTime||"—"}),u.jsx("div",{className:"cell-slot",children:Z.microSlot||"—"}),u.jsx("div",{children:u.jsx("span",{className:"status-badge",style:{background:X.bg,color:X.color,borderColor:X.border},children:X.label})}),u.jsx("div",{onClick:_=>_.stopPropagation(),children:u.jsx(Zv,{appt:Z,onView:b})})]},ce)})]})}),!f&&W.length>0&&u.jsxs("div",{className:"tbl-footer",children:[u.jsxs("div",{className:"footer-left",children:[u.jsx("span",{children:"Show"}),u.jsx("select",{className:"page-size-select",value:q,onChange:Z=>{V(Number(Z.target.value)),B(1)},children:Jv.map(Z=>u.jsx("option",{value:Z,children:Z},Z))}),u.jsxs("span",{children:["of ",u.jsx("strong",{children:W.length})," results"]}),y.length>0&&u.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:["· ",y.length," selected"]})]}),u.jsxs("div",{className:"pagination",children:[u.jsx("button",{className:"pg-btn",onClick:()=>B(Z=>Math.max(1,Z-1)),disabled:C===1,children:u.jsx("span",{className:"pg-arrow",children:"‹"})}),ve().map((Z,ce)=>Z==="..."?u.jsx("button",{className:"pg-btn pg-ellipsis",children:"…"},`ell-${ce}`):u.jsx("button",{className:`pg-btn${C===Z?" active":""}`,onClick:()=>B(Z),children:Z},Z)),u.jsx("button",{className:"pg-btn",onClick:()=>B(Z=>Math.min(ae,Z+1)),disabled:C===ae,children:u.jsx("span",{className:"pg-arrow",children:"›"})})]})]})]})]})}),h&&u.jsx("div",{className:"modal-overlay",onClick:Oe,children:u.jsxs("div",{className:"modal-card",onClick:Z=>Z.stopPropagation(),children:[u.jsxs("div",{className:"modal-header",children:[u.jsxs("div",{children:[u.jsx("p",{style:{margin:0,fontSize:10,opacity:.6,textTransform:"uppercase",letterSpacing:1},children:"Appointment Details"}),u.jsx("h3",{style:{margin:"4px 0 0",fontSize:19,fontWeight:800,fontFamily:"'Syne',sans-serif"},children:h.tokenId})]}),u.jsx("button",{type:"button",className:"modal-close",onClick:Oe,children:"✕"})]}),u.jsxs("div",{className:"modal-body",children:[u.jsx("div",{style:{textAlign:"center",marginBottom:20},children:u.jsx(Em,{name:h.fullName,photo:h.visitorPhoto,size:80})}),(()=>{const Z=re(h.status);return u.jsx("div",{style:{textAlign:"center",marginBottom:16},children:u.jsx("span",{className:"status-badge",style:{background:Z.bg,color:Z.color,borderColor:Z.border,fontSize:13,padding:"6px 20px"},children:Z.label})})})(),[["Name",h.fullName],["Mobile",h.mobileNumber],["Email",h.email||"—"],["Address",h.address||"—"],["Date",Gv(h.preferredDate)],["Slot",h.slotTime],["Purpose",h.purpose],["Visitors",h.numberOfVisitors],["Visited Before",h.visitedBefore?"Yes":"No"],["Ward",h.ward||"—"],["Booked On",Qv(h.createdAt)]].map(([Z,ce])=>ce?u.jsxs("div",{className:"modal-row",children:[u.jsx("span",{className:"modal-key",children:Z}),u.jsx("span",{className:"modal-val",children:ce})]},Z):null),h.adminNote&&u.jsxs("div",{style:{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:8,padding:"10px 14px",marginTop:12,fontSize:13,color:"#92400e"},children:[u.jsx("strong",{children:"Admin Note:"})," ",h.adminNote]}),h.replyDocument&&u.jsxs("div",{style:{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:13},children:[u.jsx("p",{style:{color:"#166534",fontWeight:700,margin:"0 0 6px"},children:"📎 Document from Admin"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[u.jsx("button",{onClick:()=>{if(h.replyDocument?.toLowerCase().includes(".pdf")||h.replyDocument?.toLowerCase().includes("inward_pdf")){const ce=`https://docs.google.com/gview?url=${encodeURIComponent(h.replyDocument)}&embedded=true`;window.open(ce,"_blank")}else window.open(h.replyDocument,"_blank")},style:{color:"#16a34a",fontWeight:600,fontSize:13,background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0},children:"📄 View Document"}),u.jsx("button",{onClick:async()=>{try{const ce=await(await fetch(h.replyDocument)).blob(),X=h.replyDocument?.toLowerCase().includes(".pdf")||h.replyDocument?.toLowerCase().includes("inward_pdf"),je=new Blob([ce],{type:X?"application/pdf":ce.type}),Te=window.URL.createObjectURL(je),_=document.createElement("a");_.href=Te,_.download=X?"document.pdf":"document",document.body.appendChild(_),_.click(),document.body.removeChild(_),window.URL.revokeObjectURL(Te)}catch(Z){console.error("Download failed",Z)}},style:{color:"#64748b",background:"none",border:"none",cursor:"pointer",fontSize:16},title:"Download",children:"⬇"})]})]}),h.qrCode&&u.jsxs("div",{style:{textAlign:"center",marginTop:20,paddingTop:16,borderTop:"1px solid #f1f5f9"},children:[u.jsx("p",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"QR Code — भेटीच्या दिवशी दाखवा"}),u.jsx("img",{src:h.qrCode,alt:"QR",style:{width:130,height:130}})]})]})]})})]})}function Fv(){const l=_n(),i=new Date().getFullYear(),s=()=>window.scrollTo({top:0,behavior:"smooth"});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsxs("footer",{className:"footer",children:[u.jsxs("div",{className:"footer-body",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsxs("div",{className:"footer-logo-row",children:[u.jsx("div",{className:"cn-logo-wrap",children:u.jsx("img",{src:f0,alt:"VVCMC"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"footer-brand-name",children:["Vasai-Virar City",u.jsx("br",{}),"Municipal Corporation"]}),u.jsx("div",{className:"footer-brand-sub",children:"VVCMC — Jan Samvad"})]})]}),u.jsx("p",{className:"footer-tagline",children:"For the citizens, by the citizens — committed to transparent, fast and digital public services."}),u.jsxs("div",{className:"footer-address",children:[u.jsx("div",{className:"footer-address-title",children:"Head Office"}),u.jsxs("div",{className:"footer-address-text",children:["Virat Nagar, Near MHADA Colony,",u.jsx("br",{}),"Virar West. PIN: 401303"]})]}),u.jsxs("div",{className:"footer-contacts",children:[u.jsxs("div",{className:"footer-contact-row",children:[u.jsx("span",{className:"footer-contact-icon",children:"📞"}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-contact-label",children:"Main Office"}),u.jsx("div",{className:"footer-contact-num",children:"0250-6630000"})]})]}),u.jsxs("div",{className:"footer-contact-row",children:[u.jsx("span",{className:"footer-contact-icon",children:"🚨"}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-contact-label",children:"Disaster Management"}),u.jsx("div",{className:"footer-contact-num",children:"0250-2334546 / 0250-2334547"})]})]}),u.jsxs("div",{className:"footer-contact-row",children:[u.jsx("span",{className:"footer-contact-icon",children:"📱"}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-contact-label",children:"Helpline"}),u.jsx("div",{className:"footer-contact-num",children:"7058911125 / 7058991430 / 8446427643"})]})]})]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"footer-col-title",children:[u.jsx("span",{className:"footer-col-title-dot"}),"Site Map"]}),u.jsxs("ul",{className:"footer-links",children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/"),children:"Home"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/book-appointment"),children:"Book Appointment"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/my-appointments"),children:"My Appointments"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/register"),children:"Register"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>l("/login"),children:"Login"})})]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"footer-col-title",children:[u.jsx("span",{className:"footer-col-title-dot"}),"Contact Us"]}),u.jsxs("a",{className:"footer-whatsapp-chip",href:"https://wa.me/919665877727",target:"_blank",rel:"noreferrer",children:[u.jsx("span",{children:"💬"})," WhatsApp Chatbot"]}),u.jsxs("div",{className:"footer-contact-row",style:{marginBottom:"20px"},children:[u.jsx("span",{className:"footer-contact-icon",children:"💬"}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-contact-label",children:"WhatsApp"}),u.jsx("div",{className:"footer-contact-num",children:"9665877727"})]})]}),u.jsxs("div",{className:"footer-col-title",style:{marginTop:"20px"},children:[u.jsx("span",{className:"footer-col-title-dot"}),"Follow Us"]}),u.jsxs("div",{className:"footer-social",children:[u.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Facebook",children:"𝑓"}),u.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Twitter",children:"𝕏"}),u.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"Instagram",children:"◎"}),u.jsx("a",{className:"footer-social-btn",href:"#","aria-label":"YouTube",children:"▶"})]})]})]}),u.jsx("div",{className:"footer-divider"}),u.jsxs("div",{className:"footer-bottom",children:[u.jsxs("div",{className:"footer-copy",children:["© ",i," Vasai-Virar City Municipal Corporation. All rights reserved."]}),u.jsxs("button",{className:"footer-back-top",onClick:s,children:[u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:u.jsx("path",{d:"M6 10V2M6 2L2 6M6 2L10 6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to Top"]})]}),u.jsx("div",{className:"footer-gold-strip",children:"Designed & Developed for Vasai Virar City Municipal Corporation (VVCMC) — Jan Samvad"})]})]})}function Cm({children:l}){return localStorage.getItem("citizenUser")?l:u.jsx(i0,{to:"/login",replace:!0})}function $v(){return u.jsxs(u.Fragment,{children:[u.jsx(ay,{}),u.jsxs(j1,{children:[u.jsx(za,{path:"/",element:u.jsx(uy,{})}),u.jsx(za,{path:"/login",element:u.jsx(qv,{})}),u.jsx(za,{path:"/register",element:u.jsx(Yv,{})}),u.jsx(za,{path:"/book-appointment",element:u.jsx(Cm,{children:u.jsx(Vv,{})})}),u.jsx(za,{path:"/my-appointments",element:u.jsx(Cm,{children:u.jsx(Kv,{})})}),u.jsx(za,{path:"*",element:u.jsx(i0,{to:"/",replace:!0})})]}),u.jsx(Fv,{})]})}var hu={exports:{}},mu={};var Tm;function Wv(){if(Tm)return mu;Tm=1;var l=jo();function i(x,g){return x===g&&(x!==0||1/x===1/g)||x!==x&&g!==g}var s=typeof Object.is=="function"?Object.is:i,c=l.useSyncExternalStore,f=l.useRef,d=l.useEffect,h=l.useMemo,b=l.useDebugValue;return mu.useSyncExternalStoreWithSelector=function(x,g,y,v,U){var D=f(null);if(D.current===null){var z={hasValue:!1,value:null};D.current=z}else z=D.current;D=h(function(){function C(W){if(!B){if(B=!0,q=W,W=v(W),U!==void 0&&z.hasValue){var ae=z.value;if(U(ae,W))return V=ae}return V=W}if(ae=V,s(q,W))return ae;var $=v(W);return U!==void 0&&U(ae,$)?(q=W,ae):(q=W,V=$)}var B=!1,q,V,F=y===void 0?null:y;return[function(){return C(g())},F===null?void 0:function(){return C(F())}]},[g,y,v,U]);var k=c(x,D[0],D[1]);return d(function(){z.hasValue=!0,z.value=k},[k]),b(k),k},mu}var Am;function Pv(){return Am||(Am=1,hu.exports=Wv()),hu.exports}Pv();function Iv(l){l()}function e2(){let l=null,i=null;return{clear(){l=null,i=null},notify(){Iv(()=>{let s=l;for(;s;)s.callback(),s=s.next})},get(){const s=[];let c=l;for(;c;)s.push(c),c=c.next;return s},subscribe(s){let c=!0;const f=i={callback:s,next:null,prev:i};return f.prev?f.prev.next=f:l=f,function(){!c||l===null||(c=!1,f.next?f.next.prev=f.prev:i=f.prev,f.prev?f.prev.next=f.next:l=f.next)}}}}var Rm={notify(){},get:()=>[]};function t2(l,i){let s,c=Rm,f=0,d=!1;function h(k){y();const C=c.subscribe(k);let B=!1;return()=>{B||(B=!0,C(),v())}}function b(){c.notify()}function x(){z.onStateChange&&z.onStateChange()}function g(){return d}function y(){f++,s||(s=l.subscribe(x),c=e2())}function v(){f--,s&&f===0&&(s(),s=void 0,c.clear(),c=Rm)}function U(){d||(d=!0,y())}function D(){d&&(d=!1,v())}const z={addNestedSub:h,notifyNestedSubs:b,handleChangeWrapper:x,isSubscribed:g,trySubscribe:U,tryUnsubscribe:D,getListeners:()=>c};return z}var n2=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",a2=n2(),l2=()=>typeof navigator<"u"&&navigator.product==="ReactNative",i2=l2(),r2=()=>a2||i2?N.useLayoutEffect:N.useEffect,o2=r2(),s2=Symbol.for("react-redux-context"),c2=typeof globalThis<"u"?globalThis:{};function u2(){if(!N.createContext)return{};const l=c2[s2]??=new Map;let i=l.get(N.createContext);return i||(i=N.createContext(null),l.set(N.createContext,i)),i}var f2=u2();function d2(l){const{children:i,context:s,serverState:c,store:f}=l,d=N.useMemo(()=>{const x=t2(f);return{store:f,subscription:x,getServerState:c?()=>c:void 0}},[f,c]),h=N.useMemo(()=>f.getState(),[f]);o2(()=>{const{subscription:x}=d;return x.onStateChange=x.notifyNestedSubs,x.trySubscribe(),h!==f.getState()&&x.notifyNestedSubs(),()=>{x.tryUnsubscribe(),x.onStateChange=void 0}},[d,h]);const b=s||f2;return N.createElement(b.Provider,{value:d},i)}var p2=d2;function ot(l){return`Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}var h2=typeof Symbol=="function"&&Symbol.observable||"@@observable",_m=h2,gu=()=>Math.random().toString(36).substring(7).split("").join("."),m2={INIT:`@@redux/INIT${gu()}`,REPLACE:`@@redux/REPLACE${gu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${gu()}`},mo=m2;function Qu(l){if(typeof l!="object"||l===null)return!1;let i=l;for(;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return Object.getPrototypeOf(l)===i||Object.getPrototypeOf(l)===null}function H0(l,i,s){if(typeof l!="function")throw new Error(ot(2));if(typeof i=="function"&&typeof s=="function"||typeof s=="function"&&typeof arguments[3]=="function")throw new Error(ot(0));if(typeof i=="function"&&typeof s>"u"&&(s=i,i=void 0),typeof s<"u"){if(typeof s!="function")throw new Error(ot(1));return s(H0)(l,i)}let c=l,f=i,d=new Map,h=d,b=0,x=!1;function g(){h===d&&(h=new Map,d.forEach((C,B)=>{h.set(B,C)}))}function y(){if(x)throw new Error(ot(3));return f}function v(C){if(typeof C!="function")throw new Error(ot(4));if(x)throw new Error(ot(5));let B=!0;g();const q=b++;return h.set(q,C),function(){if(B){if(x)throw new Error(ot(6));B=!1,g(),h.delete(q),d=null}}}function U(C){if(!Qu(C))throw new Error(ot(7));if(typeof C.type>"u")throw new Error(ot(8));if(typeof C.type!="string")throw new Error(ot(17));if(x)throw new Error(ot(9));try{x=!0,f=c(f,C)}finally{x=!1}return(d=h).forEach(q=>{q()}),C}function D(C){if(typeof C!="function")throw new Error(ot(10));c=C,U({type:mo.REPLACE})}function z(){const C=v;return{subscribe(B){if(typeof B!="object"||B===null)throw new Error(ot(11));function q(){const F=B;F.next&&F.next(y())}return q(),{unsubscribe:C(q)}},[_m](){return this}}}return U({type:mo.INIT}),{dispatch:U,subscribe:v,getState:y,replaceReducer:D,[_m]:z}}function g2(l){Object.keys(l).forEach(i=>{const s=l[i];if(typeof s(void 0,{type:mo.INIT})>"u")throw new Error(ot(12));if(typeof s(void 0,{type:mo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ot(13))})}function x2(l){const i=Object.keys(l),s={};for(let d=0;d<i.length;d++){const h=i[d];typeof l[h]=="function"&&(s[h]=l[h])}const c=Object.keys(s);let f;try{g2(s)}catch(d){f=d}return function(h={},b){if(f)throw f;let x=!1;const g={};for(let y=0;y<c.length;y++){const v=c[y],U=s[v],D=h[v],z=U(D,b);if(typeof z>"u")throw b&&b.type,new Error(ot(14));g[v]=z,x=x||z!==D}return x=x||c.length!==Object.keys(h).length,x?g:h}}function go(...l){return l.length===0?i=>i:l.length===1?l[0]:l.reduce((i,s)=>(...c)=>i(s(...c)))}function b2(...l){return i=>(s,c)=>{const f=i(s,c);let d=()=>{throw new Error(ot(15))};const h={getState:f.getState,dispatch:(x,...g)=>d(x,...g)},b=l.map(x=>x(h));return d=go(...b)(f.dispatch),{...f,dispatch:d}}}function y2(l){return Qu(l)&&"type"in l&&typeof l.type=="string"}var q0=Symbol.for("immer-nothing"),Om=Symbol.for("immer-draftable"),ft=Symbol.for("immer-state");function Kt(l,...i){throw new Error(`[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`)}var Rt=Object,bl=Rt.getPrototypeOf,xo="constructor",_o="prototype",zu="configurable",bo="enumerable",uo="writable",Ei="value",An=l=>!!l&&!!l[ft];function Ft(l){return l?Y0(l)||Do(l)||!!l[Om]||!!l[xo]?.[Om]||Mo(l)||ko(l):!1}var v2=Rt[_o][xo].toString(),Dm=new WeakMap;function Y0(l){if(!l||!Zu(l))return!1;const i=bl(l);if(i===null||i===Rt[_o])return!0;const s=Rt.hasOwnProperty.call(i,xo)&&i[xo];if(s===Object)return!0;if(!gl(s))return!1;let c=Dm.get(s);return c===void 0&&(c=Function.toString.call(s),Dm.set(s,c)),c===v2}function Oo(l,i,s=!0){Mi(l)===0?(s?Reflect.ownKeys(l):Rt.keys(l)).forEach(f=>{i(f,l[f],l)}):l.forEach((c,f)=>i(f,c,l))}function Mi(l){const i=l[ft];return i?i.type_:Do(l)?1:Mo(l)?2:ko(l)?3:0}var Mm=(l,i,s=Mi(l))=>s===2?l.has(i):Rt[_o].hasOwnProperty.call(l,i),Cu=(l,i,s=Mi(l))=>s===2?l.get(i):l[i],yo=(l,i,s,c=Mi(l))=>{c===2?l.set(i,s):c===3?l.add(s):l[i]=s};function S2(l,i){return l===i?l!==0||1/l===1/i:l!==l&&i!==i}var Do=Array.isArray,Mo=l=>l instanceof Map,ko=l=>l instanceof Set,Zu=l=>typeof l=="object",gl=l=>typeof l=="function",xu=l=>typeof l=="boolean";function w2(l){const i=+l;return Number.isInteger(i)&&String(i)===l}var En=l=>l.copy_||l.base_,Ju=l=>l.modified_?l.copy_:l.base_;function Tu(l,i){if(Mo(l))return new Map(l);if(ko(l))return new Set(l);if(Do(l))return Array[_o].slice.call(l);const s=Y0(l);if(i===!0||i==="class_only"&&!s){const c=Rt.getOwnPropertyDescriptors(l);delete c[ft];let f=Reflect.ownKeys(c);for(let d=0;d<f.length;d++){const h=f[d],b=c[h];b[uo]===!1&&(b[uo]=!0,b[zu]=!0),(b.get||b.set)&&(c[h]={[zu]:!0,[uo]:!0,[bo]:b[bo],[Ei]:l[h]})}return Rt.create(bl(l),c)}else{const c=bl(l);if(c!==null&&s)return{...l};const f=Rt.create(c);return Rt.assign(f,l)}}function Ku(l,i=!1){return Uo(l)||An(l)||!Ft(l)||(Mi(l)>1&&Rt.defineProperties(l,{set:no,add:no,clear:no,delete:no}),Rt.freeze(l),i&&Oo(l,(s,c)=>{Ku(c,!0)},!1)),l}function j2(){Kt(2)}var no={[Ei]:j2};function Uo(l){return l===null||!Zu(l)?!0:Rt.isFrozen(l)}var vo="MapSet",Au="Patches",km="ArrayMethods",V0={};function Ra(l){const i=V0[l];return i||Kt(0,l),i}var Um=l=>!!V0[l],zi,G0=()=>zi,N2=(l,i)=>({drafts_:[],parent_:l,immer_:i,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Um(vo)?Ra(vo):void 0,arrayMethodsPlugin_:Um(km)?Ra(km):void 0});function Bm(l,i){i&&(l.patchPlugin_=Ra(Au),l.patches_=[],l.inversePatches_=[],l.patchListener_=i)}function Ru(l){_u(l),l.drafts_.forEach(E2),l.drafts_=null}function _u(l){l===zi&&(zi=l.parent_)}var Lm=l=>zi=N2(zi,l);function E2(l){const i=l[ft];i.type_===0||i.type_===1?i.revoke_():i.revoked_=!0}function Hm(l,i){i.unfinalizedDrafts_=i.drafts_.length;const s=i.drafts_[0];if(l!==void 0&&l!==s){s[ft].modified_&&(Ru(i),Kt(4)),Ft(l)&&(l=qm(i,l));const{patchPlugin_:f}=i;f&&f.generateReplacementPatches_(s[ft].base_,l,i)}else l=qm(i,s);return z2(i,l,!0),Ru(i),i.patches_&&i.patchListener_(i.patches_,i.inversePatches_),l!==q0?l:void 0}function qm(l,i){if(Uo(i))return i;const s=i[ft];if(!s)return So(i,l.handledSet_,l);if(!Bo(s,l))return i;if(!s.modified_)return s.base_;if(!s.finalized_){const{callbacks_:c}=s;if(c)for(;c.length>0;)c.pop()(l);Z0(s,l)}return s.copy_}function z2(l,i,s=!1){!l.parent_&&l.immer_.autoFreeze_&&l.canAutoFreeze_&&Ku(i,s)}function X0(l){l.finalized_=!0,l.scope_.unfinalizedDrafts_--}var Bo=(l,i)=>l.scope_===i,C2=[];function Q0(l,i,s,c){const f=En(l),d=l.type_;if(c!==void 0&&Cu(f,c,d)===i){yo(f,c,s,d);return}if(!l.draftLocations_){const b=l.draftLocations_=new Map;Oo(f,(x,g)=>{if(An(g)){const y=b.get(g)||[];y.push(x),b.set(g,y)}})}const h=l.draftLocations_.get(i)??C2;for(const b of h)yo(f,b,s,d)}function T2(l,i,s){l.callbacks_.push(function(f){const d=i;if(!d||!Bo(d,f))return;f.mapSetPlugin_?.fixSetContents(d);const h=Ju(d);Q0(l,d.draft_??d,h,s),Z0(d,f)})}function Z0(l,i){if(l.modified_&&!l.finalized_&&(l.type_===3||l.type_===1&&l.allIndicesReassigned_||(l.assigned_?.size??0)>0)){const{patchPlugin_:c}=i;if(c){const f=c.getPath(l);f&&c.generatePatches_(l,f,i)}X0(l)}}function A2(l,i,s){const{scope_:c}=l;if(An(s)){const f=s[ft];Bo(f,c)&&f.callbacks_.push(function(){fo(l);const h=Ju(f);Q0(l,s,h,i)})}else Ft(s)&&l.callbacks_.push(function(){const d=En(l);l.type_===3?d.has(s)&&So(s,c.handledSet_,c):Cu(d,i,l.type_)===s&&c.drafts_.length>1&&(l.assigned_.get(i)??!1)===!0&&l.copy_&&So(Cu(l.copy_,i,l.type_),c.handledSet_,c)})}function So(l,i,s){return!s.immer_.autoFreeze_&&s.unfinalizedDrafts_<1||An(l)||i.has(l)||!Ft(l)||Uo(l)||(i.add(l),Oo(l,(c,f)=>{if(An(f)){const d=f[ft];if(Bo(d,s)){const h=Ju(d);yo(l,c,h,l.type_),X0(d)}}else Ft(f)&&So(f,i,s)})),l}function R2(l,i){const s=Do(l),c={type_:s?1:0,scope_:i?i.scope_:G0(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:i,base_:l,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let f=c,d=wo;s&&(f=[c],d=Ci);const{revoke:h,proxy:b}=Proxy.revocable(f,d);return c.draft_=b,c.revoke_=h,[b,c]}var wo={get(l,i){if(i===ft)return l;let s=l.scope_.arrayMethodsPlugin_;const c=l.type_===1&&typeof i=="string";if(c&&s?.isArrayOperationMethod(i))return s.createMethodInterceptor(l,i);const f=En(l);if(!Mm(f,i,l.type_))return _2(l,f,i);const d=f[i];if(l.finalized_||!Ft(d)||c&&l.operationMethod&&s?.isMutatingArrayMethod(l.operationMethod)&&w2(i))return d;if(d===bu(l.base_,i)){fo(l);const h=l.type_===1?+i:i,b=Du(l.scope_,d,l,h);return l.copy_[h]=b}return d},has(l,i){return i in En(l)},ownKeys(l){return Reflect.ownKeys(En(l))},set(l,i,s){const c=J0(En(l),i);if(c?.set)return c.set.call(l.draft_,s),!0;if(!l.modified_){const f=bu(En(l),i),d=f?.[ft];if(d&&d.base_===s)return l.copy_[i]=s,l.assigned_.set(i,!1),!0;if(S2(s,f)&&(s!==void 0||Mm(l.base_,i,l.type_)))return!0;fo(l),Ou(l)}return l.copy_[i]===s&&(s!==void 0||i in l.copy_)||Number.isNaN(s)&&Number.isNaN(l.copy_[i])||(l.copy_[i]=s,l.assigned_.set(i,!0),A2(l,i,s)),!0},deleteProperty(l,i){return fo(l),bu(l.base_,i)!==void 0||i in l.base_?(l.assigned_.set(i,!1),Ou(l)):l.assigned_.delete(i),l.copy_&&delete l.copy_[i],!0},getOwnPropertyDescriptor(l,i){const s=En(l),c=Reflect.getOwnPropertyDescriptor(s,i);return c&&{[uo]:!0,[zu]:l.type_!==1||i!=="length",[bo]:c[bo],[Ei]:s[i]}},defineProperty(){Kt(11)},getPrototypeOf(l){return bl(l.base_)},setPrototypeOf(){Kt(12)}},Ci={};for(let l in wo){let i=wo[l];Ci[l]=function(){const s=arguments;return s[0]=s[0][0],i.apply(this,s)}}Ci.deleteProperty=function(l,i){return Ci.set.call(this,l,i,void 0)};Ci.set=function(l,i,s){return wo.set.call(this,l[0],i,s,l[0])};function bu(l,i){const s=l[ft];return(s?En(s):l)[i]}function _2(l,i,s){const c=J0(i,s);return c?Ei in c?c[Ei]:c.get?.call(l.draft_):void 0}function J0(l,i){if(!(i in l))return;let s=bl(l);for(;s;){const c=Object.getOwnPropertyDescriptor(s,i);if(c)return c;s=bl(s)}}function Ou(l){l.modified_||(l.modified_=!0,l.parent_&&Ou(l.parent_))}function fo(l){l.copy_||(l.assigned_=new Map,l.copy_=Tu(l.base_,l.scope_.immer_.useStrictShallowCopy_))}var O2=class{constructor(l){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(i,s,c)=>{if(gl(i)&&!gl(s)){const d=s;s=i;const h=this;return function(x=d,...g){return h.produce(x,y=>s.call(this,y,...g))}}gl(s)||Kt(6),c!==void 0&&!gl(c)&&Kt(7);let f;if(Ft(i)){const d=Lm(this),h=Du(d,i,void 0);let b=!0;try{f=s(h),b=!1}finally{b?Ru(d):_u(d)}return Bm(d,c),Hm(f,d)}else if(!i||!Zu(i)){if(f=s(i),f===void 0&&(f=i),f===q0&&(f=void 0),this.autoFreeze_&&Ku(f,!0),c){const d=[],h=[];Ra(Au).generateReplacementPatches_(i,f,{patches_:d,inversePatches_:h}),c(d,h)}return f}else Kt(1,i)},this.produceWithPatches=(i,s)=>{if(gl(i))return(h,...b)=>this.produceWithPatches(h,x=>i(x,...b));let c,f;return[this.produce(i,s,(h,b)=>{c=h,f=b}),c,f]},xu(l?.autoFreeze)&&this.setAutoFreeze(l.autoFreeze),xu(l?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(l.useStrictShallowCopy),xu(l?.useStrictIteration)&&this.setUseStrictIteration(l.useStrictIteration)}createDraft(l){Ft(l)||Kt(8),An(l)&&(l=D2(l));const i=Lm(this),s=Du(i,l,void 0);return s[ft].isManual_=!0,_u(i),s}finishDraft(l,i){const s=l&&l[ft];(!s||!s.isManual_)&&Kt(9);const{scope_:c}=s;return Bm(c,i),Hm(void 0,c)}setAutoFreeze(l){this.autoFreeze_=l}setUseStrictShallowCopy(l){this.useStrictShallowCopy_=l}setUseStrictIteration(l){this.useStrictIteration_=l}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(l,i){let s;for(s=i.length-1;s>=0;s--){const f=i[s];if(f.path.length===0&&f.op==="replace"){l=f.value;break}}s>-1&&(i=i.slice(s+1));const c=Ra(Au).applyPatches_;return An(l)?c(l,i):this.produce(l,f=>c(f,i))}};function Du(l,i,s,c){const[f,d]=Mo(i)?Ra(vo).proxyMap_(i,s):ko(i)?Ra(vo).proxySet_(i,s):R2(i,s);return(s?.scope_??G0()).drafts_.push(f),d.callbacks_=s?.callbacks_??[],d.key_=c,s&&c!==void 0?T2(s,d,c):d.callbacks_.push(function(x){x.mapSetPlugin_?.fixSetContents(d);const{patchPlugin_:g}=x;d.modified_&&g&&g.generatePatches_(d,[],x)}),f}function D2(l){return An(l)||Kt(10,l),K0(l)}function K0(l){if(!Ft(l)||Uo(l))return l;const i=l[ft];let s,c=!0;if(i){if(!i.modified_)return i.base_;i.finalized_=!0,s=Tu(l,i.scope_.immer_.useStrictShallowCopy_),c=i.scope_.immer_.shouldUseStrictIteration()}else s=Tu(l,!0);return Oo(s,(f,d)=>{yo(s,f,K0(d))},c),i&&(i.finalized_=!1),s}var M2=new O2,F0=M2.produce;function $0(l){return({dispatch:s,getState:c})=>f=>d=>typeof d=="function"?d(s,c,l):f(d)}var k2=$0(),U2=$0,B2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?go:go.apply(null,arguments)};function Ym(l,i){function s(...c){if(i){let f=i(...c);if(!f)throw new Error(Cn(0));return{type:l,payload:f.payload,..."meta"in f&&{meta:f.meta},..."error"in f&&{error:f.error}}}return{type:l,payload:c[0]}}return s.toString=()=>`${l}`,s.type=l,s.match=c=>y2(c)&&c.type===l,s}var W0=class ji extends Array{constructor(...i){super(...i),Object.setPrototypeOf(this,ji.prototype)}static get[Symbol.species](){return ji}concat(...i){return super.concat.apply(this,i)}prepend(...i){return i.length===1&&Array.isArray(i[0])?new ji(...i[0].concat(this)):new ji(...i.concat(this))}};function Vm(l){return Ft(l)?F0(l,()=>{}):l}function ao(l,i,s){return l.has(i)?l.get(i):l.set(i,s(i)).get(i)}function L2(l){return typeof l=="boolean"}var H2=()=>function(i){const{thunk:s=!0,immutableCheck:c=!0,serializableCheck:f=!0,actionCreatorCheck:d=!0}=i??{};let h=new W0;return s&&(L2(s)?h.push(k2):h.push(U2(s.extraArgument))),h},q2="RTK_autoBatch",Gm=l=>i=>{setTimeout(i,l)},Y2=(l={type:"raf"})=>i=>(...s)=>{const c=i(...s);let f=!0,d=!1,h=!1;const b=new Set,x=l.type==="tick"?queueMicrotask:l.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Gm(10):l.type==="callback"?l.queueNotification:Gm(l.timeout),g=()=>{h=!1,d&&(d=!1,b.forEach(y=>y()))};return Object.assign({},c,{subscribe(y){const v=()=>f&&y(),U=c.subscribe(v);return b.add(y),()=>{U(),b.delete(y)}},dispatch(y){try{return f=!y?.meta?.[q2],d=!f,d&&(h||(h=!0,x(g))),c.dispatch(y)}finally{f=!0}}})},V2=l=>function(s){const{autoBatch:c=!0}=s??{};let f=new W0(l);return c&&f.push(Y2(typeof c=="object"?c:void 0)),f};function G2(l){const i=H2(),{reducer:s=void 0,middleware:c,devTools:f=!0,preloadedState:d=void 0,enhancers:h=void 0}=l||{};let b;if(typeof s=="function")b=s;else if(Qu(s))b=x2(s);else throw new Error(Cn(1));let x;typeof c=="function"?x=c(i):x=i();let g=go;f&&(g=B2({trace:!1,...typeof f=="object"&&f}));const y=b2(...x),v=V2(y);let U=typeof h=="function"?h(v):v();const D=g(...U);return H0(b,d,D)}function P0(l){const i={},s=[];let c;const f={addCase(d,h){const b=typeof d=="string"?d:d.type;if(!b)throw new Error(Cn(28));if(b in i)throw new Error(Cn(29));return i[b]=h,f},addAsyncThunk(d,h){return h.pending&&(i[d.pending.type]=h.pending),h.rejected&&(i[d.rejected.type]=h.rejected),h.fulfilled&&(i[d.fulfilled.type]=h.fulfilled),h.settled&&s.push({matcher:d.settled,reducer:h.settled}),f},addMatcher(d,h){return s.push({matcher:d,reducer:h}),f},addDefaultCase(d){return c=d,f}};return l(f),[i,s,c]}function X2(l){return typeof l=="function"}function Q2(l,i){let[s,c,f]=P0(i),d;if(X2(l))d=()=>Vm(l());else{const b=Vm(l);d=()=>b}function h(b=d(),x){let g=[s[x.type],...c.filter(({matcher:y})=>y(x)).map(({reducer:y})=>y)];return g.filter(y=>!!y).length===0&&(g=[f]),g.reduce((y,v)=>{if(v)if(An(y)){const D=v(y,x);return D===void 0?y:D}else{if(Ft(y))return F0(y,U=>v(U,x));{const U=v(y,x);if(U===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return U}}return y},b)}return h.getInitialState=d,h}var Z2=Symbol.for("rtk-slice-createasyncthunk");function J2(l,i){return`${l}/${i}`}function K2({creators:l}={}){const i=l?.asyncThunk?.[Z2];return function(c){const{name:f,reducerPath:d=f}=c;if(!f)throw new Error(Cn(11));const h=(typeof c.reducers=="function"?c.reducers(W2()):c.reducers)||{},b=Object.keys(h),x={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},g={addCase(V,F){const W=typeof V=="string"?V:V.type;if(!W)throw new Error(Cn(12));if(W in x.sliceCaseReducersByType)throw new Error(Cn(13));return x.sliceCaseReducersByType[W]=F,g},addMatcher(V,F){return x.sliceMatchers.push({matcher:V,reducer:F}),g},exposeAction(V,F){return x.actionCreators[V]=F,g},exposeCaseReducer(V,F){return x.sliceCaseReducersByName[V]=F,g}};b.forEach(V=>{const F=h[V],W={reducerName:V,type:J2(f,V),createNotation:typeof c.reducers=="function"};I2(F)?t5(W,F,g,i):P2(W,F,g)});function y(){const[V={},F=[],W=void 0]=typeof c.extraReducers=="function"?P0(c.extraReducers):[c.extraReducers],ae={...V,...x.sliceCaseReducersByType};return Q2(c.initialState,$=>{for(let re in ae)$.addCase(re,ae[re]);for(let re of x.sliceMatchers)$.addMatcher(re.matcher,re.reducer);for(let re of F)$.addMatcher(re.matcher,re.reducer);W&&$.addDefaultCase(W)})}const v=V=>V,U=new Map,D=new WeakMap;let z;function k(V,F){return z||(z=y()),z(V,F)}function C(){return z||(z=y()),z.getInitialState()}function B(V,F=!1){function W($){let re=$[V];return typeof re>"u"&&F&&(re=ao(D,W,C)),re}function ae($=v){const re=ao(U,F,()=>new WeakMap);return ao(re,$,()=>{const ve={};for(const[Oe,Z]of Object.entries(c.selectors??{}))ve[Oe]=F2(Z,$,()=>ao(D,$,C),F);return ve})}return{reducerPath:V,getSelectors:ae,get selectors(){return ae(W)},selectSlice:W}}const q={name:f,reducer:k,actions:x.actionCreators,caseReducers:x.sliceCaseReducersByName,getInitialState:C,...B(d),injectInto(V,{reducerPath:F,...W}={}){const ae=F??d;return V.inject({reducerPath:ae,reducer:k},W),{...q,...B(ae,!0)}}};return q}}function F2(l,i,s,c){function f(d,...h){let b=i(d);return typeof b>"u"&&c&&(b=s()),l(b,...h)}return f.unwrapped=l,f}var $2=K2();function W2(){function l(i,s){return{_reducerDefinitionType:"asyncThunk",payloadCreator:i,...s}}return l.withTypes=()=>l,{reducer(i){return Object.assign({[i.name](...s){return i(...s)}}[i.name],{_reducerDefinitionType:"reducer"})},preparedReducer(i,s){return{_reducerDefinitionType:"reducerWithPrepare",prepare:i,reducer:s}},asyncThunk:l}}function P2({type:l,reducerName:i,createNotation:s},c,f){let d,h;if("reducer"in c){if(s&&!e5(c))throw new Error(Cn(17));d=c.reducer,h=c.prepare}else d=c;f.addCase(l,d).exposeCaseReducer(i,d).exposeAction(i,h?Ym(l,h):Ym(l))}function I2(l){return l._reducerDefinitionType==="asyncThunk"}function e5(l){return l._reducerDefinitionType==="reducerWithPrepare"}function t5({type:l,reducerName:i},s,c,f){if(!f)throw new Error(Cn(18));const{payloadCreator:d,fulfilled:h,pending:b,rejected:x,settled:g,options:y}=s,v=f(l,d,y);c.exposeAction(i,v),h&&c.addCase(v.fulfilled,h),b&&c.addCase(v.pending,b),x&&c.addCase(v.rejected,x),g&&c.addMatcher(v.settled,g),c.exposeCaseReducer(i,{fulfilled:h||lo,pending:b||lo,rejected:x||lo,settled:g||lo})}function lo(){}function Cn(l){return`Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}const n5={user:null,isLoggedIn:!1},I0=$2({name:"auth",initialState:n5,reducers:{loginSuccess:(l,i)=>{l.user=i.payload,l.isLoggedIn=!0},logout:l=>{l.user=null,l.isLoggedIn=!1,localStorage.removeItem("authUser"),localStorage.removeItem("token"),localStorage.removeItem("userRole")}}}),{loginSuccess:j5,logout:N5}=I0.actions,a5=I0.reducer,l5=G2({reducer:{auth:a5}});zb.createRoot(document.getElementById("root")).render(u.jsx(yu.StrictMode,{children:u.jsx(p2,{store:l5,children:u.jsx(J1,{children:u.jsx($v,{})})})}));
