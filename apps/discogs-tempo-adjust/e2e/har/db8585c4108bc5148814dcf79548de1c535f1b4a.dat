(function(){'use strict';var r,aa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a},ca=globalThis;
function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
var ea=Object.setPrototypeOf;function fa(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;ea(a,b);a.Ca=b.prototype}
da("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
da("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;fa(b,Error);b.prototype.name="SuppressedError";return b});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ha=ha||{},t=this||self;function v(a,b,c){a=a.split(".");c=c||t;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ia(a,b){var c=w("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function w(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function ja(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function ka(a){var b=ja(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function la(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function ma(a){return Object.prototype.hasOwnProperty.call(a,na)&&a[na]||(a[na]=++oa)}
var na="closure_uid_"+(Math.random()*1E9>>>0),oa=0;function pa(a,b,c){return a.call.apply(a.bind,arguments)}
function qa(a,b,c){qa=pa;return qa.apply(null,arguments)}
function ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function sa(){return Date.now()}
function ta(a){return a}
function ua(a,b){function c(){}
c.prototype=b.prototype;a.Ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function va(a,...b){b=b.filter(Boolean).join("&");if(!b)return a;const c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function wa(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function xa(a){a=a.o;if(!a)return"";let b=wa("uap",a.platform)+wa("uapv",a.platformVersion)+wa("uafv",a.uaFullVersion)+wa("uaa",a.architecture)+wa("uam",a.model)+wa("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(c=>encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
var ya=class{constructor({url:a,Fi:b}){this.i=a;this.o=b;this.j=(new Date).getTime()-17040672E5;this.h={};const c=/[?&]([^&=]+)=([^&]*)/g;for(;b=c.exec(a);)this.h[b[1]]=b[2]}};function za(a,b){if(b!==null&&b!==void 0){if(typeof b!=="object"&&typeof b!=="function")throw new TypeError("Object expected.");if(c===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var c=b[Symbol.dispose]}if(typeof c!=="function")throw new TypeError("Object not disposable.");a.stack.push({value:b,dispose:c,async:!1})}return b}
function Aa(a){function b(f){a.error=a.gb?new SuppressedError(f,a.error,"An error was suppressed during disposal."):f;a.gb=!0}
function c(){for(;d=a.stack.pop();)try{if(!d.async&&e===1)return e=0,a.stack.push(d),Promise.resolve().then(c);if(d.dispose){var f=d.dispose.call(d.value);if(d.async)return e|=2,Promise.resolve(f).then(c,function(g){b(g);return c()})}else e|=1}catch(g){b(g)}if(e===1)return a.gb?Promise.reject(a.error):Promise.resolve();
if(a.gb)throw a.error;}
var d,e=0;c()}
;function Ba(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ua(Ba,Error);Ba.prototype.name="CustomError";/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let Ca=globalThis.trustedTypes,Da;function Ea(){let a=null;if(!Ca)return a;try{const b=c=>c;
a=Ca.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(b){}return a}
function Fa(){Da===void 0&&(Da=Ea());return Da}
;var Ga=class{constructor(a){this.h=a}toString(){return this.h+""}};function Ha(a){const b=Fa();a=b?b.createScriptURL(a):a;return new Ga(a)}
function Ia(a){if(a instanceof Ga)return a.h;throw Error("");}
;function Ja(a){return a.toString().indexOf("`")===-1}
Ja(a=>a``)||Ja(a=>a`\0`)||Ja(a=>a`\n`)||Ja(a=>a`\u0000`);var Ka=class{constructor(a){this.h=a}toString(){return this.h}},La=new Ka("about:invalid#zClosurez");class Ma{constructor(a){this.We=a}}function Na(a){return new Ma(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}
const Oa=[Na("data"),Na("http"),Na("https"),Na("mailto"),Na("ftp"),new Ma(a=>/^[^:]*([/?#]|$)/.test(a))];
function Pa(a,b=Oa){if(a instanceof Ka)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Ma&&d.We(a))return new Ka(a)}}
var Qa=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Ra(a){if(a instanceof Ka)if(a instanceof Ka)a=a.h;else throw Error("");else a=Qa.test(a)?a:void 0;return a}
;function Sa(a,b){b=Ra(b);b!==void 0&&(a.href=b)}
;function Ta(a,b=`unexpected value ${a}!`){throw Error(b);}
;var Ua=class{constructor(a){this.h=a}toString(){return this.h+""}};function Va(a=document){a=a.querySelector?.("script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;var Wa=class{constructor(a){this.h=a}toString(){return this.h+""}};function Xa(a){const b=Fa();a=b?b.createScript(a):a;return new Wa(a)}
function Ya(a){if(a instanceof Wa)return a.h;throw Error("");}
;function Za(a){const b=Va(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function $a(a,b){a.src=Ia(b);Za(a)}
;var ab=class{constructor(a){this.h=a}toString(){return this.h}};function bb(a){var b="true".toString(),c=[cb`data-`];if(c.length===0)throw Error("");if(c.map(d=>{if(d instanceof ab)d=d.h;else throw Error("");return d}).every(d=>"data-loaded".indexOf(d)!==0))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;const db="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function eb(a,b){if(b instanceof Ga)a.href=Ia(b).toString(),a.rel="stylesheet";else{if(db.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Ra(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function fb(a,b){return Array.prototype.indexOf.call(a,b,void 0)}
function gb(a,b){Array.prototype.forEach.call(a,b,void 0)}
function hb(a,b){return Array.prototype.filter.call(a,b,void 0)}
function ib(a,b){return Array.prototype.map.call(a,b,void 0)}
function jb(a,b){return Array.prototype.reduce.call(a,b,{duration:0})}
function kb(a,b){a:{const c=a.length,d=typeof a==="string"?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);let c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a){const b=a.length;if(b>0){const c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]}
function nb(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ka(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function ob(a,b){return a>b?1:a<b?-1:0}
;function pb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function qb(a){var b=w("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};let c,d;var e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(f){d="Not available",e=!0}b=rb(a);if(!(!e&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){e=a.message;if(e==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)e=a.constructor.name;else if(e=a.constructor,sb[e])e=sb[e];else{e=String(e);if(!sb[e]){const f=/function\s+([^\(]+)/m.exec(e);sb[e]=f?f[1]:"[Anonymous]"}e=sb[e]}e='Unknown Error of type "'+e+'"'}else e="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(e+=": "+a.toString())}return{message:e,name:a.name||"UnknownError",lineNumber:c,fileName:d,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function rb(a,b){b||(b={});b[tb(a)]=!0;let c=a.stack||"";var d=a.cause;d&&!b[tb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=rb(d,b));a=a.errors;if(Array.isArray(a)){d=1;let e;for(e=0;e<a.length&&!(d>4);e++)b[tb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=rb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function tb(a){let b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var sb={};function ub(a){return decodeURIComponent(a.replace(/\+/g," "))}
function vb(a){let b=0;for(let c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;const wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xb(a){return a?decodeURI(a):a}
function yb(a){return xb(a.match(wb)[3]||null)}
function zb(a){return xb(a.match(wb)[5]||null)}
function Ab(a){var b=a.match(wb);a=b[5];var c=b[6];b=b[7];let d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Bb(a){const b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Cb(a,b){if(a){a=a.split("&");for(let c=0;c<a.length;c++){const d=a[c].indexOf("=");let e,f=null;d>=0?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?ub(f):"")}}}
function Db(a,b,c){if(Array.isArray(b))for(let d=0;d<b.length;d++)Db(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Eb(a){const b=[];for(const c in a)Db(c,a[c],b);return b.join("&")}
function Fb(a,b){b=Eb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);let d=a.indexOf("?"),e;d<0||d>c?(d=c,e=""):e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Gb(a,b,c,d){const e=c.length;for(;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
const Hb=/#|$/,Ib=/[?&]($|#)/;function Jb(a,b){const c=a.search(Hb);let d=0,e;const f=[];for(;(e=Gb(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ib,"$1")}
;function Kb(){try{return!!window?.top?.location.href&&!1}catch(a){return!0}}
;var x=class extends Error{constructor(a,b,c=Error()){super();this.code=a;b+=":";c instanceof Error?(this.message=b+c.message,this.stack=c.stack||""):(this.message=b+String(c),this.stack="");Object.setPrototypeOf(this,new.target.prototype)}};function Lb(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Mb(a){for(let b=0,c=arguments.length;b<c;++b){const d=arguments[b];ka(d)?Mb.apply(null,d):Lb(d)}}
;function y(){this.F=this.F;this.M=this.M}
y.prototype.F=!1;y.prototype.dispose=function(){this.F||(this.F=!0,this.X())};
y.prototype[Symbol.dispose]=function(){this.dispose()};
function Nb(a,b){a.addOnDisposeCallback(ra(Lb,b))}
y.prototype.addOnDisposeCallback=function(a,b){this.F?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
y.prototype.X=function(){if(this.M)for(;this.M.length;)this.M.shift()()};function Ob(a="bevasrsg"){return new Promise(b=>{const c=window===window.top?window:Kb()?window:window.top;let d=c[a];d?.bevasrs?b(new Pb(d.bevasrs)):(d||(d={nqfbel:[]},c[a]=d),d.nqfbel.push(e=>{b(new Pb(e))}))})}
function Qb(a){a.h!==void 0&&(a.i.forEach(b=>{a.h?.removeEventListener(b,a.j)}),a.h=void 0)}
class Pb extends y{constructor(a){super();this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Fb=this.vm.p;this.j=this.Tb.bind(this);this.addOnDisposeCallback(()=>void Qb(this))}snapshot(a){return this.vm.s({...(a.Ia&&{c:a.Ia}),
...(a.Ec&&{s:a.Ec}),...(a.bd!==void 0&&{p:a.bd})})}Tb(a){this.vm.e(a)}ec(a,b){return this.vm.c(a,b,!1)}Yb(){return this.vm.l()}};function Rb(a){const b={Ia:a.c,Lc:a.e,ff:a.mc??!1,gf:a.me??!1};a.co&&(b.cc={kd:a.co.c,he:a.co.a,zf:a.co.s});return b}
function Sb(a){return async()=>{const b=await a();return{f:()=>b.Eb.promise,
c:c=>{if(c>150)var d=!1;else try{b.cache=new Tb(c,b.logger),d=!0}catch(e){Ub(b,new x(22,"GBJ:init",e)),d=!1}return d},
m:c=>b.Za(Rb(c)),
mws:c=>b.uc(Rb(c))}}}
function Vb(a,b,c="bevasrsg"){b={s:f=>a.snapshot({...(f.c&&{Ia:f.c}),...(f.s&&{Ec:f.s}),Di:f.p??!0}),
e:f=>void a.Tb?.(f),
c:(f,g)=>a.ec(f,g),
p:a.Fb,l:()=>a.Yb(),
wpc:b?Sb(b):void 0};const d=window===window.top?window:Kb()?window:window.top;let e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(const f of e.nqfbel)f(b);e.nqfbel=void 0}else e={bevasrs:b,nqfbel:void 0},d[c]=e}
;function Wb(a){const b=[];Xb(a,Yb,6).forEach(c=>{Zb(c,2)<=53&&b.push(Zb(c,1))});
return b}
function $b(a){const b=[];Xb(a,Yb,6).forEach(c=>{Zb(c,2)>53&&b.push(Zb(c,1))});
return b}
;function ac(a){a.then(()=>{},()=>{})}
var bc=class extends y{constructor(){super(...arguments);this.R=1}share(){if(this.F)throw Error("E:AD");this.R++;return this}dispose(){--this.R||super.dispose()}};function cc(a){return{fieldType:2,fieldName:a}}
function dc(a){return{fieldType:3,fieldName:a}}
;var fc=class{constructor(a){this.h=a;ec(a,"/client_streamz/bg/frs",dc("mk"))}record(a,b){this.h.record("/client_streamz/bg/frs",a,b)}},hc=class{constructor(a){this.h=a;ec(a,"/client_streamz/bg/wrl",dc("mn"),cc("ac"),cc("sc"),dc("rk"),dc("mk"))}record(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)}},kc=class{constructor(a){this.i=a;ic(a,"/client_streamz/bg/ec",dc("en"),dc("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/ec",[a,b])}},lc=class{constructor(a){this.h=a;ec(a,"/client_streamz/bg/el",
dc("en"),dc("mk"))}record(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)}},mc=class{constructor(a){this.i=a;ic(a,"/client_streamz/bg/cec",cc("ec"),dc("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/cec",[a,b])}},nc=class{constructor(a){this.i=a;ic(a,"/client_streamz/bg/po/csc",cc("cs"),dc("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/po/csc",[a,b])}},oc=class{constructor(a){this.i=a;ic(a,"/client_streamz/bg/po/ctav",dc("av"),dc("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/po/ctav",[a,b])}},pc=class{constructor(a){this.i=
a;ic(a,"/client_streamz/bg/po/cwsc",dc("su"),dc("mk"))}h(a,b){jc(this.i,"/client_streamz/bg/po/cwsc",[a,b])}};let qc;function rc(a){return(qc||(qc=new TextEncoder)).encode(a)}
;function sc(a){t.setTimeout(()=>{throw a;},0)}
;function tc(a){const b=[];let c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;var uc=ia(610401301,!1),vc=ia(748402147,!0),wc=ia(824656860,ia(1,!0));function xc(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var yc;const zc=t.navigator;yc=zc?zc.userAgentData||null:null;function Ac(a){if(!uc||!yc)return!1;for(let b=0;b<yc.brands.length;b++){const {brand:c}=yc.brands[b];if(c&&c.indexOf(a)!=-1)return!0}return!1}
function A(a){return xc().indexOf(a)!=-1}
;function Bc(){return uc?!!yc&&yc.brands.length>0:!1}
function Cc(){return Bc()?!1:A("Opera")}
function Dc(){return A("Firefox")||A("FxiOS")}
function Ec(){return Bc()?Ac("Chromium"):(A("Chrome")||A("CriOS"))&&!(Bc()?0:A("Edge"))||A("Silk")}
;function Fc(){return uc?!!yc&&!!yc.platform:!1}
function Gc(){return A("iPhone")&&!A("iPod")&&!A("iPad")}
;function Hc(a){Hc[" "](a);return a}
Hc[" "]=function(){};var Ic=Cc(),Jc=Bc()?!1:A("Trident")||A("MSIE"),Kc=A("Edge"),Lc=A("Gecko")&&!(xc().toLowerCase().indexOf("webkit")!=-1&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Mc=xc().toLowerCase().indexOf("webkit")!=-1&&!A("Edge");Mc&&A("Mobile");Fc()||A("Macintosh");Fc()||A("Windows");(Fc()?yc.platform==="Linux":A("Linux"))||Fc()||A("CrOS");var Nc=Fc()?yc.platform==="Android":A("Android");Gc();A("iPad");A("iPod");Gc()||A("iPad")||A("iPod");xc().toLowerCase().indexOf("kaios");Dc();const Oc=Gc()||A("iPod"),Pc=A("iPad");!A("Android")||Ec()||Dc()||Cc()||A("Silk");Ec();const Qc=A("Safari")&&!(Ec()||(Bc()?0:A("Coast"))||Cc()||(Bc()?0:A("Edge"))||(Bc()?Ac("Microsoft Edge"):A("Edg/"))||(Bc()?Ac("Opera"):A("OPR"))||Dc()||A("Silk")||A("Android"))&&!(Gc()||A("iPad")||A("iPod"));const Rc={};let Sc=null;function Tc(a,b){ka(a);b===void 0&&(b=0);Uc();b=Rc[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Vc(a){const b=a.length;let c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);const d=new Uint8Array(c);let e=0;Wc(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Wc(a,b){function c(e){for(;d<a.length;){const f=a.charAt(d++),g=Sc[f];if(g!=null)return g;if(!/^[\s\xa0]*$/.test(f))throw Error("Unknown base64 encoding at char: "+f);}return e}
Uc();let d=0;for(;;){const e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Uc(){if(!Sc){Sc={};var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"];for(let c=0;c<5;c++){const d=a.concat(b[c].split(""));Rc[c]=d;for(let e=0;e<d.length;e++){const f=d[e];Sc[f]===void 0&&(Sc[f]=e)}}}}
;const Xc=/[-_.]/g,Yc={"-":"+",_:"/",".":"="};function Zc(a){return Yc[a]||""}
var $c={};function ad(){return bd||(bd=new cd(null,$c))}
function dd(a){ed($c);var b=a.h;if(!(b==null||b!=null&&b instanceof Uint8Array))if(typeof b==="string"){b=Xc.test(b)?b.replace(Xc,Zc):b;b=atob(b);const c=new Uint8Array(b.length);for(let d=0;d<b.length;d++)c[d]=b.charCodeAt(d);b=c}else ja(b),b=null;return b==null?b:a.h=b}
function fd(a){return new Uint8Array(dd(a)||0)}
var cd=class{sizeBytes(){const a=dd(this);return a?a.length:0}constructor(a,b){ed(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}};let bd;function ed(a){if(a!==$c)throw Error("illegal external caller");}
;let gd=void 0;function hd(a){a=Error(a);pb(a,"warning");return a}
function id(a,b){if(a!=null){var c=gd??(gd={});var d=c[a]||0;d>=b||(c[a]=d+1,a=Error(),pb(a,"incident"),sc(a))}}
;function jd(a,b=!1){return b&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol()}
var C=jd("jas",!0),kd=jd(),ld=jd(),md=jd(),nd=jd(),od=jd(),pd=jd(),qd=jd("m_m",!0),rd=jd(),sd=jd();[...Object.values({Gh:1,Fh:2,Eh:4,Kh:8,Mh:16,Ih:32,Uf:64,Ch:128,Zf:256,Lh:512,ag:1024,Dh:2048,Jh:4096,Hh:8192})];var td;const ud=[];ud[C]=7;td=Object.freeze(ud);var vd={};function wd(a,b){return b===void 0?a.h!==xd&&!!(2&(a.U[C]|0)):!!(2&b)&&a.h!==xd}
const xd={};function yd(a,b){if(a!=null)if(typeof a==="string")a=a?new cd(a,$c):ad();else if(a.constructor!==cd)if(a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new cd(new Uint8Array(a),$c):ad();else{if(!b)throw Error();a=void 0}return a}
var zd=Object.freeze({});function Ad(a,b,c){const d=b&128?0:-1,e=a.length;var f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;const g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(const h in a)!isNaN(h)&&c(+h,a[h])}}
var Bd={};function Cd(a){a.ci=!0;return a}
;var Dd=Cd(a=>typeof a==="number"),Ed=Cd(a=>typeof a==="string");
function Fd(){var a=Gd;return Cd(b=>{for(const c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Hd=Cd(a=>a!=null&&typeof a==="object"&&typeof a.then==="function"),Id=Cd(a=>!!a&&(typeof a==="object"||typeof a==="function"));function Jd(a){if(Ed(a)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a))throw Error(String(a));}else if(Dd(a)&&!Number.isSafeInteger(a))throw Error(String(a));return BigInt(a)}
var Md=Cd(a=>a>=Kd&&a<=Ld);
const Kd=BigInt(Number.MIN_SAFE_INTEGER),Ld=BigInt(Number.MAX_SAFE_INTEGER);let Nd=0,Od=0,Pd;function Qd(a){const b=a>>>0;Nd=b;Od=(a-b)/4294967296>>>0}
function Rd(a){if(a<0){Qd(0-a);a=Nd;var b=Od;b=~b;a?a=~a+1:b+=1;const [c,d]=[a,b];Nd=c>>>0;Od=d>>>0}else Qd(a)}
function Sd(a,b){const c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Td(a,b)}
function Td(a,b){b>>>=0;a>>>=0;var c;b<=2097151?c=""+(4294967296*b+a):c=""+(BigInt(b)<<BigInt(32)|BigInt(a));return c}
function Ud(){var a=Nd,b=Od,c;b&2147483648?c=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):c=Td(a,b);return c}
function Vd(a){a.length<16?Rd(Number(a)):(a=BigInt(a),Nd=Number(a&BigInt(4294967295))>>>0,Od=Number(a>>BigInt(32)&BigInt(4294967295)))}
;const Wd=typeof BigInt==="function"?BigInt.asIntN:void 0,Xd=typeof BigInt==="function"?BigInt.asUintN:void 0,Yd=Number.isSafeInteger,Zd=Number.isFinite,$d=Math.trunc;function ae(a){return a.displayName||a.name||"unknown type name"}
function be(a){if(a!=null&&typeof a!=="boolean")throw Error(`Expected boolean but got ${ja(a)}: ${a}`);return a}
const ce=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function de(a){switch(typeof a){case "bigint":return!0;case "number":return Zd(a);case "string":return ce.test(a);default:return!1}}
function ee(a){if(typeof a!=="number")throw hd("int32");if(!Zd(a))throw hd("int32");return a|0}
function fe(a){return a==null?a:ee(a)}
function ge(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Zd(a)?a|0:void 0}
function he(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Zd(a)?a>>>0:void 0}
function ie(a){var b=wc?1024:0;if(!de(a))throw hd("int64");const c=typeof a;switch(b){case 512:switch(c){case "string":return je(a);case "bigint":return String(Wd(64,a));default:return ke(a)}case 1024:switch(c){case "string":return le(a);case "bigint":return Jd(Wd(64,a));default:return me(a)}case 0:switch(c){case "string":return je(a);case "bigint":return Jd(Wd(64,a));default:return ne(a)}default:return Ta(b,"Unknown format requested type for int64")}}
function oe(a){return a==null?a:ie(a)}
function ne(a){de(a);a=$d(a);if(!Yd(a)){Rd(a);var b=Nd,c=Od;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=Sd(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function ke(a){de(a);a=$d(a);Yd(a)?a=String(a):(Rd(a),a=Ud());return a}
function je(a){de(a);var b=$d(Number(a));if(Yd(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));a.indexOf(".");b=a.length;(a[0]==="-"?b<20||b===20&&a<="-9223372036854775808":b<19||b===19&&a<="9223372036854775807")||(Vd(a),a=Ud());return a}
function le(a){var b=$d(Number(a));if(Yd(b))return Jd(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Jd(Wd(64,BigInt(a)))}
function me(a){return Yd(a)?Jd(ne(a)):Jd(ke(a))}
function pe(a){if(a==null)return a;if(typeof a==="bigint")return Md(a)?a=Number(a):(a=Wd(64,a),a=Md(a)?Number(a):String(a)),a;if(de(a))return typeof a==="number"?ne(a):je(a)}
function qe(a){const b=typeof a;if(a==null)return a;if(b==="bigint")return Jd(Wd(64,a));if(de(a))return b==="string"?le(a):me(a)}
function re(a){if(a==null)return a;const b=typeof a;if(b==="bigint")return String(Wd(64,a));if(de(a)){if(b==="string")return je(a);if(b==="number")return ne(a)}}
function se(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(Xd(64,a));if(de(a)){if(b==="string")return de(a),b=$d(Number(a)),Yd(b)&&b>=0?a=String(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a.indexOf("."),a[0]==="-"?b=!1:(b=a.length,b=b<20?!0:b===20&&a<="18446744073709551615"),b||(Vd(a),a=Td(Nd,Od))),a;if(b==="number")return de(a),a=$d(a),a>=0&&Yd(a)||(Rd(a),a=Sd(Nd,Od)),a}}
function te(a){if(typeof a!=="string")throw Error();return a}
function ue(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function ve(a){return a==null||typeof a==="string"?a:void 0}
function we(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${ae(b)} but got ${a&&ae(a.constructor)}`);}
function xe(a,b,c){if(a!=null&&a[qd]===vd)return a;if(Array.isArray(a)){var d=a[C]|0;c=d|c&32|c&2;c!==d&&(a[C]=c);return new b(a)}}
;const ye={};function ze(a){return a}
;function Ae(a){const b=ta(ld);return b?a[b]:void 0}
const Be={wi:!0};function Ce(a,b){b<100||id(nd,1)}
;function De(a,b,c,d){const e=d!==void 0;d=!!d;var f=ta(ld),g;!e&&f&&(g=a[f])&&g.Le(Ce);f=[];var h=a.length;let k;g=4294967295;let l=!1;const m=!!(b&64),n=m?b&128?0:-1:void 0;b&1||(k=h&&a[h-1],k!=null&&typeof k==="object"&&k.constructor===Object?(h--,g=h):k=void 0,!m||b&128||e||(l=!0,g=(Ee??ze)(g-n,n,a,k,void 0)+n));b=void 0;for(var u=0;u<h;u++){let p=a[u];if(p!=null&&(p=c(p,d))!=null)if(m&&u>=g){const z=u-n;(b??(b={}))[z]=p}else f[u]=p}if(k)for(let p in k){h=k[p];if(h==null||(h=c(h,d))==null)continue;
u=+p;let z;m&&!Number.isNaN(u)&&(z=u+n)<g?f[z]=h:(b??(b={}))[p]=h}b&&(l?f.push(b):f[g]=b);e&&ta(ld)&&Ae(a);return f}
function Fe(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Md(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[C]|0;return a.length===0&&b&1?void 0:De(a,b,Fe)}if(a!=null&&a[qd]===vd)return Ge(a);if(a instanceof cd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{let c="",d=0;const e=b.length-10240;for(;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);a=a.h=btoa(c)}return a}return}return a}
let Ee;function He(a,b){if(b){Ee=b==null||b===ze||b[rd]!==ye?ze:b;try{return Ge(a)}finally{Ee=void 0}}return Ge(a)}
function Ge(a){a=a.U;return De(a,a[C]|0,Fe)}
;let Ie,Je;function Ke(a){switch(typeof a){case "boolean":return Ie||(Ie=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Je||(Je=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function Le(a,b,c,d=0){if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");e=a[C]|0;if(vc&&1&e)throw Error("rfarr");2048&e&&!(2&e)&&Me();if(e&256)throw Error("farr");if(e&64)return(e|d)!==e&&(a[C]=e|d),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1;const k=c[g];if(k!=null&&typeof k==="object"&&k.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var h in k)if(f=
+h,f<g)c[f+b]=k[h],delete k[h];else break;e=e&-16760833|(g&1023)<<14;break a}}if(b){h=Math.max(b,f-(e&128?0:-1));if(h>1024)throw Error("spvt");e=e&-16760833|(h&1023)<<14}}}a[C]=e|64|d;return a}
function Me(){if(vc)throw Error("carr");id(pd,5)}
;function Ne(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[C]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=Oe(a,c,!1,b&&!(c&16)):(a[C]|=34,c&4&&Object.freeze(a)));return a}if(a!=null&&a[qd]===vd)return b=a.U,c=b[C]|0,wd(a,c)?a:Pe(a,b,c)?Qe(a,b):Oe(b,c);if(a instanceof cd)return a}
function Qe(a,b,c){a=new a.constructor(b);c&&(a.h=xd);a.i=xd;return a}
function Oe(a,b,c,d){d??(d=!!(34&b));a=De(a,b,Ne,d);d=32;c&&(d|=2);b=b&16769217|d;a[C]=b;return a}
function Re(a){const b=a.U,c=b[C]|0;return wd(a,c)?Pe(a,b,c)?Qe(a,b,!0):new a.constructor(Oe(b,c,!1)):a}
function Se(a){if(a.h!==xd)return!1;var b=a.U;b=Oe(b,b[C]|0);b[C]|=2048;a.U=b;a.h=void 0;a.i=void 0;return!0}
function Te(a){if(!Se(a)&&wd(a,a.U[C]|0))throw Error();}
function Ue(a,b){b===void 0&&(b=a[C]|0);b&32&&!(b&4096)&&(a[C]=b|4096)}
function Pe(a,b,c){return c&2?!0:c&32&&!(c&4096)?(b[C]=c|2,a.h=xd,!0):!1}
;const Ve=Jd(0),We={};function Xe(a,b,c,d,e){Object.isExtensible(a);b=Ye(a.U,b,c,e);if(b!==null||d&&a.i!==xd)return b}
function Ye(a,b,c,d){if(b===-1)return null;const e=b+(c?0:-1),f=a.length-1;let g,h;if(!(f<1+(c?0:-1))){if(e>=f)if(g=a[f],g!=null&&typeof g==="object"&&g.constructor===Object)c=g[b],h=!0;else if(e===f)c=g;else return;else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function E(a,b,c,d){Te(a);const e=a.U;Ze(e,e[C]|0,b,c,d);return a}
function Ze(a,b,c,d,e){const f=c+(e?0:-1);var g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){const h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;d!==void 0&&(g=(b??(b=a[C]|0))>>14&1023||536870912,c>=g?d!=null&&(a[g+(e?0:-1)]={[c]:d}):a[f]=d);return b}
function $e(a,b,c){a=Ye(a,b,c);return Array.isArray(a)?a:td}
function af(a,b){2&b&&(a|=2);return a|1}
function bf(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function cf(a){return yd(a,!0)}
function df(a){a=Xe(a,1,void 0,void 0,cf);return a==null?ad():a}
function ef(a,b,c){Te(a);const d=a.U;let e=d[C]|0;if(b==null)return Ze(d,e,3),a;if(!Array.isArray(b))throw hd();let f=b===td?7:b[C]|0,g=f;var h=bf(f);let k=h||Object.isFrozen(b);h||(f=0);k||(b=[...b],g=0,f=ff(f,e),k=!1);f|=5;h=(4&f?512&f?512:1024&f?1024:0:void 0)??(wc?1024:0);f|=h;for(let l=0;l<b.length;l++){const m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=[...b],g=0,f=ff(f,e),k=!1),b[l]=n)}f!==g&&(k&&(b=[...b],f=ff(f,e)),b[C]=f);Ze(d,e,3,b);return a}
function gf(a,b,c,d){Te(a);const e=a.U;Ze(e,e[C]|0,b,c===""?void 0:c,d);return a}
function hf(a,b,c,d){Te(a);a=a.U;var e=a[C]|0;if(d==null){var f=a[kd]??(a[kd]=new Map);if(jf(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=a[kd]??(a[kd]=new Map);const g=jf(f,a,e,c);g!==b&&(g&&(e=Ze(a,e,g)),f.set(c,b))}Ze(a,e,b,d)}
function jf(a,b,c,d){let e=a.get(d);if(e!=null)return e;e=0;for(let f=0;f<d.length;f++){const g=d[f];Ye(b,g)!=null&&(e!==0&&(c=Ze(b,c,e)),e=g)}a.set(d,e);return e}
function kf(a,b,c,d,e){let f=!1;d=Ye(a,d,e,g=>{const h=xe(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!wd(d)&&Ue(a,b),d}
function lf(a,b,c,d){let e=a.U,f=e[C]|0;b=kf(e,f,b,c,d);if(b==null)return b;f=e[C]|0;if(!wd(a,f)){const g=Re(b);g!==b&&(Se(a)&&(e=a.U,f=e[C]|0),b=g,f=Ze(e,f,c,b,d),Ue(e,f))}return b}
function Xb(a,b,c){var d=void 0===zd?2:4;var e=a.U,f=e,g=e[C]|0,h=wd(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Se(a)&&(f=a.U,g=f[C]|0);h=$e(f,c);var l=h===td?7:h[C]|0,m=af(l,g);if(a=!(4&m)){var n=h,u=g;const p=!!(2&m);p&&(u|=2);let z=!p,D=!0,B=0,M=0;for(;B<n.length;B++){const K=xe(n[B],b,u);if(K instanceof b){if(!p){const Y=wd(K);z&&(z=!Y);D&&(D=Y)}n[M++]=K}}M<B&&(n.length=M);m|=4;m=D?m&-4097:m|4096;m=z?m|8:m&-9}m!==l&&(h[C]=m,2&m&&Object.freeze(h));if(k&&!(8&m||!h.length&&(e===1||(e!==4?0:2&m||!(16&
m)&&32&g)))){bf(m)&&(h=[...h],m=ff(m,g),g=Ze(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)n=b[l],m=Re(n),n!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;h[C]=m}k=b=m;e===1||(e!==4?0:2&b||!(16&b)&&32&g)?bf(b)||(b|=!h.length||a&&!(4096&b)||32&g&&!(4096&b||16&b)?2:256,b!==k&&(h[C]=b),Object.freeze(h)):(e===2&&bf(b)&&(h=[...h],k=0,b=ff(b,g),g=Ze(f,g,c,h)),bf(b)||(d||(b|=16),b!==k&&(h[C]=b)));2&b||!(4096&b||16&b)||Ue(f,g);return h}
function mf(a,b){a!=null?we(a,b):a=void 0;return a}
function nf(a,b,c,d,e){d=mf(d,b);E(a,c,d,e);d&&!wd(d)&&Ue(a.U);return a}
function of(a,b,c,d){Te(a);const e=a.U;let f=e[C]|0;if(d==null)return Ze(e,f,c),a;if(!Array.isArray(d))throw hd();let g=d===td?7:d[C]|0,h=g;const k=bf(g),l=k||Object.isFrozen(d);let m=!0,n=!0;for(let p=0;p<d.length;p++){var u=d[p];we(u,b);k||(u=wd(u),m&&(m=!u),n&&(n=u))}k||(g=m?13:5,g=n?g&-4097:g|4096);l&&g===h||(d=[...d],h=0,g=ff(g,f));g!==h&&(d[C]=g);f=Ze(e,f,c,d);2&g||!(4096&g||16&g)||Ue(e,f);return a}
function ff(a,b){return a=(2&b?a|2:a&-3)&-273}
function Zb(a,b,c=0){return ge(Xe(a,b))??c}
function pf(a,b,c=Ve){return(wc?Xe(a,b,void 0,void 0,qe):qe(Xe(a,b)))??c}
function qf(a,b,c="",d){return ve(Xe(a,b,d))??c}
function rf(a){a=Xe(a,1);return(a==null?a:Zd(a)?a|0:void 0)??0}
function F(a,b,c){return E(a,b,ue(c))}
function sf(a,b,c){if(c!=null){if(!Zd(c))throw hd("enum");c|=0}return E(a,b,c)}
;function tf(a){if(!a)return uf||(uf=new vf(0,0));if(!/^\d+$/.test(a))return null;Vd(a);return new vf(Nd,Od)}
var vf=class{constructor(a,b){this.i=a>>>0;this.h=b>>>0}};let uf;function wf(a){if(!a)return xf||(xf=new yf(0,0));if(!/^-?\d+$/.test(a))return null;Vd(a);return new yf(Nd,Od)}
var yf=class{constructor(a,b){this.i=a>>>0;this.h=b>>>0}};let xf;function zf(a,b,c){for(;c>0||b>127;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}
function Af(a,b){a.h.push(b>>>0&255);a.h.push(b>>>8&255);a.h.push(b>>>16&255);a.h.push(b>>>24&255)}
function Bf(a,b){for(;b>127;)a.h.push(b&127|128),b>>>=7;a.h.push(b)}
var Cf=class{constructor(){this.h=[]}length(){return this.h.length}end(){const a=this.h;this.h=[];return a}writeUint8(a){this.h.push(a>>>0&255)}writeInt8(a){this.h.push(a>>>0&255)}};function Df(a,b){b.length!==0&&(a.j.push(b),a.i+=b.length)}
function Ef(a,b){Bf(a.h,b*8+2);b=a.h.end();Df(a,b);b.push(a.i);return b}
function Ff(a,b){var c=b.pop();for(c=a.i+a.h.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++}
function Gf(a,b,c){if(c!=null){switch(typeof c){case "string":tf(c)}Bf(a.h,b*8+1);switch(typeof c){case "number":a=a.h;Qd(c);Af(a,Nd);Af(a,Od);break;case "bigint":c=BigInt.asUintN(64,c);c=new vf(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));a=a.h;b=c.h;Af(a,c.i);Af(a,b);break;default:c=tf(c),a=a.h,b=c.h,Af(a,c.i),Af(a,b)}}}
var Hf=class{constructor(){this.j=[];this.i=0;this.h=new Cf}};function If(){const a=class{constructor(){throw Error();}};Object.setPrototypeOf(a,a.prototype);return a}
var Jf=If(),Kf=If(),Lf=If(),Mf=If(),Nf=If(),Of=If(),Pf=If();function Qf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");b[C]|=32;return new a(b)}
var G=class{constructor(a,b,c){this.U=Le(a,b,c,2048)}toJSON(){return He(this)}serialize(a){return JSON.stringify(He(this,a))}clone(){const a=this.U,b=a[C]|0;return Pe(this,a,b)?Qe(this,a,!0):new this.constructor(Oe(a,b,!1))}};G.prototype[qd]=vd;G.prototype.toString=function(){return this.U.toString()};var H=class{constructor(a,b){this.Hc=a;a=ta(Jf);this.h=!!a&&b===a||!1}};function Rf(a,b,c,d,e){b=Sf(b,d);b!=null&&(c=Ef(a,c),e(b,a),Ff(a,c))}
const Tf=new H(Rf,Jf),Uf=new H(Rf,Jf);var Vf=Symbol(),Wf=Symbol();let Xf,Yf;
function Zf(a){var b=$f,c=ag,d=a[Vf];if(d)return d;d={};d.Ph=a;d.ud=Ke(a[0]);var e=a[1];let f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Ve=!0,Xf??(Xf=e),Yf??(Yf=a[f+1]),e=a[f+=2]));const g={};for(;e&&bg(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);let m;var k=void 0;e instanceof H?m=e:(m=Tf,f--);if(m?.h){e=a[++f];k=a;var l=f;typeof e==="function"&&(e=e(),k[l]=e);k=e}e=a[++f];l=h+1;typeof e==="number"&&
e<0&&(l-=e,e=a[++f]);for(;h<l;h++){const n=g[h];k?c(d,h,m,k,n):b(d,h,m,n)}}return a[Vf]=d}
function bg(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function Sf(a,b){if(a instanceof G)return a.U;if(Array.isArray(a))return Le(a,b[0],b[1])}
;function $f(a,b,c){a[b]=c.Hc}
function ag(a,b,c,d){let e,f;const g=c.Hc;a[b]=(h,k,l)=>g(h,k,l,f||(f=Zf(d).ud),e||(e=cg(d)))}
function cg(a){let b=a[Wf];if(!b){const c=Zf(a);b=(d,e)=>dg(d,e,c);
a[Wf]=b}return b}
function dg(a,b,c){Ad(a,a[C]|0,(d,e)=>{if(e!=null){var f=eg(c,d);f?f(b,e,d):d<500||id(od,3)}});
(a=Ae(a))&&a.Le((d,e,f)=>{Df(b,b.h.end());for(d=0;d<f.length;d++)Df(b,dd(f[d])||new Uint8Array(0))})}
function eg(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof H?c:[Uf,c]:[c,void 0];var d=c[0].Hc;if(c=c[1]){const e=cg(c),f=Zf(c).ud;c=a.Ve?Yf(f,e):(g,h,k)=>d(g,h,k,f,e)}else c=d;
return a[b]=c}}
;function fg(a,b,c){if(Array.isArray(b)){var d=b[C]|0;if(d&4)return b;for(var e=0,f=0;e<b.length;e++){const g=a(b[e]);g!=null&&(b[f++]=g)}f<e&&(b.length=f);a=d|1;c&&(a=(a|4)&-1537);a!==d&&(b[C]=a);c&&a&2&&Object.freeze(b);return b}}
function gg(a,b,c){b=b==null||typeof b==="number"?b:b==="NaN"||b==="Infinity"||b==="-Infinity"?Number(b):void 0;b!=null&&(Bf(a.h,c*8+1),a=a.h,c=Pd||(Pd=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Nd=c.getUint32(0,!0),Od=c.getUint32(4,!0),Af(a,Nd),Af(a,Od))}
function hg(a,b,c){b=re(b);if(b!=null){switch(typeof b){case "string":wf(b)}if(b!=null)switch(Bf(a.h,c*8),typeof b){case "number":a=a.h;Rd(b);zf(a,Nd,Od);break;case "bigint":c=BigInt.asUintN(64,b);c=new yf(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));zf(a.h,c.i,c.h);break;default:c=wf(b),zf(a.h,c.i,c.h)}}}
function ig(a,b,c){b=ge(b);if(b!=null&&b!=null)if(Bf(a.h,c*8),a=a.h,c=b,c>=0)Bf(a,c);else{for(b=0;b<9;b++)a.h.push(c&127|128),c>>=7;a.h.push(1)}}
function jg(a,b,c){b=b==null||typeof b==="boolean"?b:typeof b==="number"?!!b:void 0;b!=null&&(Bf(a.h,c*8),a.h.h.push(b?1:0))}
function kg(a,b,c){b=ve(b);b!=null&&(b=rc(b),Bf(a.h,c*8+2),Bf(a.h,b.length),Df(a,a.h.end()),Df(a,b))}
function lg(a,b,c,d,e){b=Sf(b,d);b!=null&&(c=Ef(a,c),e(b,a),Ff(a,c))}
var mg=new H(jg,Kf),ng=new H(kg,Lf),og=function(a,b,c=Jf){return new H(b,c)}(function(a,b,c,d,e){if(a.h()!==2)return!1;
var f=a.i;d=Le(void 0,d[0],d[1]);var g=b[C]|0;if(g&2)throw Error();const h=g&128?Bd:void 0;let k=$e(b,c,h),l=k===td?7:k[C]|0,m=af(l,g);if(2&m||bf(m)||16&m)m===l||bf(m)||(k[C]=m),k=[...k],l=0,m=ff(m,g),Ze(b,g,c,k,h);m&=-13;m!==l&&(k[C]=m);k.push(d);f.call(a,d,e);return!0},function(a,b,c,d,e){if(Array.isArray(b)){for(let f=0;f<b.length;f++)lg(a,b[f],c,d,e);
a=b[C]|0;a&1||(b[C]=a|1)}}),pg=new H(lg,Jf);class qg{constructor(a){var b=rg;this.ctor=a;this.isRepeated=0;this.h=lf;this.defaultValue=void 0;this.i=b.df!=null?Bd:void 0}register(){Hc(this)}};function sg(a){return b=>Qf(a,b)}
;function tg(a,b){return ef(a,b,ee)}
var ug=class extends G{constructor(a){super(a)}};var vg=class extends G{constructor(a){super(a)}},wg=[1,2,3];var xg=class extends G{constructor(a){super(a)}},yg=[1,2,3];var zg=class extends G{constructor(a){super(a)}};var Ag=class extends G{constructor(a){super(a)}};var Bg=class extends G{constructor(a){super(a)}},Cg=[1,2,3];var Dg=class extends G{constructor(a){super(a)}};Dg.prototype.j=function(a){return function(){const b=new Hf;dg(this.U,b,Zf(a));Df(b,b.h.end());const c=new Uint8Array(b.i),d=b.j,e=d.length;let f=0;for(let g=0;g<e;g++){const h=d[g];c.set(h,f);f+=h.length}b.j=[c];return c}}([0,
ng,[0,Cg,pg,[0,ng,-1,mg],pg,[0,ng,-1,new H(ig,Mf),mg],pg,[0,ng]],new H(function(a,b,c){b=fg(ve,b,!0);if(b!=null)for(let g=0;g<b.length;g++){var d=a,e=c,f=b[g];f!=null&&(f=rc(f),Bf(d.h,e*8+2),Bf(d.h,f.length),Df(d,d.h.end()),Df(d,f))}},Lf),
og,[0,og,[0,wg,new H(kg,Lf),new H(ig,Mf),new H(jg,Kf)],[0,yg,new H(hg,Nf),new H(gg,Pf),pg,[0,og,[0,new H(gg,Pf),new H(hg,Nf)]]]],new H(function(a,b,c){Gf(a,c,se(b))},Of),
new H(function(a,b,c){b=fg(se,b,!1);if(b!=null)for(let d=0;d<b.length;d++)Gf(a,c,b[d])},Of)]);var Eg=class extends G{constructor(a){super(a)}};function Fg(a){var b=new Dg;b=F(b,1,a.i);var c=Gg(a);b=ef(b,c,te);c=[];const d=[];for(var e of a.h.keys())d.push(e.split(","));for(e=0;e<d.length;e++){const u=d[e];var f=a.j,g=Hg(a,u)||[],h=[];for(var k=0;k<g.length;k++){var l=g[k],m=l&&l.h;l=new xg;switch(f){case 3:m=Number(m);Number.isFinite(m)&&hf(l,1,yg,oe(m));break;case 2:m=Number(m);if(m!=null&&typeof m!=="number")throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);hf(l,2,yg,m)}h.push(l)}f=h;for(g=0;g<f.length;g++){k=
f[g];h=new zg;h=nf(h,xg,2,k);k=[];l=Ig(a);for(m=0;m<l.length;m++){var n=l[m];const p=u[m],z=new vg;switch(n){case 3:hf(z,1,wg,ue(String(p)));break;case 2:n=Number(p);Number.isFinite(n)&&hf(z,2,wg,fe(n));break;case 1:hf(z,3,wg,be(p==="true"))}k.push(z)}of(h,vg,1,k);c.push(h)}}of(b,zg,4,c);return b}
;function Jg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Kg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var u=g,p=0;p<64;p+=4)u[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;p<80;p++)n=u[p-3]^u[p-8]^u[p-14]^u[p-16],u[p]=(n<<1|n>>>31)&4294967295;n=e[0];var z=e[1],D=e[2],B=e[3],M=e[4];for(p=0;p<80;p++){if(p<40)if(p<20){var K=B^z&(D^B);var Y=1518500249}else K=z^D^B,Y=1859775393;else p<60?(K=z&D|B&(z|D),Y=2400959708):(K=z^D^B,Y=3395469782);K=((n<<5|n>>>27)&4294967295)+K+M+Y+u[p]&4294967295;M=B;B=D;D=(z<<30|z>>>2)&4294967295;z=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+M&4294967295}
function c(n,u){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var p=[],z=0,D=n.length;z<D;++z)p.push(n.charCodeAt(z));n=p}u||(u=n.length);p=0;if(l==0)for(;p+64<u;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<u;)if(f[l++]=n[p++],m++,l==64)for(l=0,b(f);p+64<u;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],u=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var p=63;p>=56;p--)f[p]=u&255,u>>>=8;b(f);for(p=u=0;p<5;p++)for(var z=24;z>=0;z-=8)n[u++]=e[p]>>z&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,te:function(){for(var n=d(),u="",p=0;p<n.length;p++)u+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return u}}}
;function Lg(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,Mg(Jg(d),a,c||null)].join(" "):null}
function Mg(a,b,c){var d=[];let e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],gb(d,function(h){e.push(h)}),Ng(e.join(" "));
const f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=Ng(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Ng(a){const b=Kg();b.update(a);return b.te().toLowerCase()}
;function Og(a){this.h=a||{cookie:""}}
r=Og.prototype;r.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{qc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){let d;var e=!1;let f;if(typeof c==="object"){f=c.sameSite;e=c.secure||!1;d=c.domain||void 0;var g=c.path||void 0;var h=c.qc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=d?";domain="+d:"";g=g?";path="+g:"";e=e?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+e+(f!=null?
";samesite="+f:"")};
r.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=d[e].trim();if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){const d=this.get(a)!==void 0;this.set(a,"",{qc:0,path:b,domain:c});return d};
r.Rb=function(){return Pg(this).keys};
r.Wa=function(){return Pg(this).values};
r.clear=function(){const a=Pg(this).keys;for(let b=a.length-1;b>=0;b--)this.remove(a[b])};
function Pg(a){a=(a.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=a[f].trim(),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Qg=new Og(typeof document=="undefined"?null:document);function Rg(){var a=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__1PSAPISID||t.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new Og(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function Sg(a,b,c,d){(a=t[a])||typeof document==="undefined"||(a=(new Og(document)).get(b));return a?Lg(a,c,d):null}
function Tg(a){var b=Jg(t?.location.href);const c=[];if(Rg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d,e=(d=b)?t.__SAPISID:t.__APISID;e||typeof document==="undefined"||(e=new Og(document),e=e.get(d?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(d=e?Lg(e,d?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=Sg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Sg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;var Ug=class{async compress(a){var b=new CompressionStream("gzip");const c=(new Response(b.readable)).arrayBuffer();b=b.writable.getWriter();await b.write((new TextEncoder).encode(a));await b.close();return new Uint8Array(await c)}isSupported(a){return a<1024?!1:typeof CompressionStream!=="undefined"}};var Vg=class extends G{constructor(a){super(a)}};var Wg=class{constructor(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=()=>sa();
this.i=this.h()}setInterval(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()}start(){this.enabled=!0;this.timer||(this.timer=setTimeout(()=>{this.tick()},this.intervalMs),this.i=this.h())}stop(){this.enabled=!1;
this.timer&&(clearTimeout(this.timer),this.timer=void 0)}tick(){if(this.enabled){const a=Math.max(this.h()-this.i,0);a<this.intervalMs*.8?this.timer=setTimeout(()=>{this.tick()},this.intervalMs-a):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0}};var Xg=class extends G{constructor(a){super(a)}};var Yg=class extends G{constructor(a){super(a)}};function Zg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=Zg.prototype;r.clone=function(){return new Zg(this.x,this.y)};
r.equals=function(a){return a instanceof Zg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function $g(a,b){this.width=a;this.height=b}
r=$g.prototype;r.clone=function(){return new $g(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function ah(a,b){for(const c in a)b.call(void 0,a[c],c,a)}
function bh(a){const b=[];let c=0;for(const d in a)b[c++]=a[d];return b}
function ch(a){var b=dh;for(const c in b)if(a.call(void 0,b[c],c,b))return c}
function eh(a){for(const b in a)return!1;return!0}
function fh(a,b){if(a!==null&&b in a)throw Error(`The object already contains the key "${b}"`);a[b]=!0}
function gh(a){return a!==null&&"privembed"in a?a.privembed:!1}
function hh(a,b){for(const c in a)if(!(c in b)||a[c]!==b[c])return!1;for(const c in b)if(!(c in a))return!1;return!0}
function ih(a){const b={};for(const c in a)b[c]=a[c];return b}
function jh(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=jh(a[c]);return b}
const kh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lh(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<kh.length;f++)c=kh[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function mh(a,b){this.h=a===nh&&b||""}
mh.prototype.toString=function(){return this.h};
var nh={};new mh(nh,"");function cb(a){return new ab(a[0].toLowerCase())}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function oh(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function ph(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function qh(a){let b;for(;b=a.firstChild;)a.removeChild(b)}
function rh(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function sh(a,b){let c=0;for(;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var th=class extends G{constructor(a){super(a)}kc(){return rf(this)}};var uh=class extends G{constructor(a){super(a)}};function vh(a){of(wh,uh,1,a)}
var xh=class extends G{constructor(a){super(a)}},yh=sg(xh);var zh=class extends G{constructor(a){super(a)}};var Ah=["platform","platformVersion","architecture","model","uaFullVersion"];const wh=new xh;let Bh=null;function Ch(a,b=Ah){if(!Bh){a=a.navigator?.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));vh((a.brands||[]).map(d=>{var e=new uh;e=F(e,1,d.brand);return F(e,2,d.version)}));
typeof a.mobile==="boolean"&&E(wh,2,be(a.mobile));Bh=a.getHighEntropyValues(b)}const c=new Set(b);return Bh.then(d=>{const e=wh.clone();c.has("platform")&&F(e,3,d.platform);c.has("platformVersion")&&F(e,4,d.platformVersion);c.has("architecture")&&F(e,5,d.architecture);c.has("model")&&F(e,6,d.model);c.has("uaFullVersion")&&F(e,7,d.uaFullVersion);return e.serialize()}).catch(()=>wh.serialize())}
;function Dh(a){return sf(a,1,1)}
var Eh=class extends G{constructor(a){super(a)}};var Fh=class extends G{constructor(a){super(a,4)}};var Gh=class extends G{constructor(a){super(a,36)}};var Hh=class extends G{constructor(a){super(a,19)}Xb(a){return sf(this,2,a)}};function Ih(a,b){nf(a.h,Eh,1,b);rf(b)||Dh(b);a.Qa||(b=Jh(a),qf(b,5)||F(b,5,a.locale));a.j&&(b=Jh(a),lf(b,xh,9)||nf(b,xh,9,a.j))}
function Jh(a){var b=lf(a.h,Eh,1);b||(b=new Eh,Ih(a,b));a=b;b=lf(a,zh,11);b||(b=new zh,nf(a,zh,11,b));return b}
function Kh(a,b){a.i=b}
function Lh(a){const b=a.Qa?void 0:window;b?Ch(b,Ah).then(c=>{a.j=yh(c??"[]");c=Jh(a);nf(c,xh,9,a.j);return!0}).catch(()=>!1):Promise.resolve(!1)}
function Mh(a,b,c=0,d=0,e=null,f=0,g=0){if(!a.Qa){var h=Jh(a);var k=new th;k=sf(k,1,a.i);k=E(k,2,be(a.isFinal));d=E(k,3,fe(d>0?d:void 0));f=E(d,4,fe(f>0?f:void 0));g=E(f,5,fe(g>0?g:void 0));f=g.U;d=f[C]|0;g=wd(g,d)?g:Pe(g,f,d)?Qe(g,f):new g.constructor(Oe(f,d,!0));nf(h,th,10,g)}a=a.h.clone();h=Date.now().toString();a=E(a,4,oe(h));b=b.slice();b=of(a,Gh,3,b);e&&(a=new Xg,e=E(a,13,fe(e)),a=new Yg,e=nf(a,Xg,2,e),a=new Fh,e=nf(a,Yg,1,e),e=sf(e,2,9),nf(b,Fh,18,e));c&&E(b,14,oe(c));return b}
var Nh=class{constructor(a,b=!1){this.Qa=b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Hh;Number.isInteger(a)&&this.h.Xb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Ih(this,new Eh)}Xb(a){this.h.Xb(a);return this}};function Oh(a,b,c,d){this.o=a;this.u=b;this.h=this.j=a;this.M=c||0;this.A=d||2}
Oh.prototype.i=0;Oh.prototype.reset=function(){this.h=this.j=this.o;this.i=0};
Oh.prototype.getValue=function(){return this.j};
function Ph(a){a.h=Math.min(a.u,a.h*a.A);a.j=Math.min(a.u,a.h+(a.M?Math.round(a.M*(Math.random()-.5)*2*a.h):0));a.i++}
;var rg=class extends G{constructor(a){super(a,8)}},Qh=sg(rg);var Rh;Rh=new qg(class extends G{constructor(a){super(a)}});function Sh(){return"https://play.google.com/log?format=json&hasfast=true"}
function Th(a,b){return a.za?b?()=>{b().then(()=>{a.flush()})}:()=>{a.flush()}:()=>{}}
function Uh(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Vh(a){a.H||(a.H=Sh());try{return(new URL(a.H)).toString()}catch(b){return(new URL(a.H,window.location.origin)).toString()}}
function Wh(a){Xh(a,(b,c)=>{b=new URL(b);b.searchParams.set("format","json");let d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch{}d||(a.R=!1);return d})}
function Yh(a,b,c=null,d=a.withCredentials){const e={},f=new URL(Vh(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ke:1,Bc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function Xh(a,b){if(a.h.length!==0){var c=new URL(Vh(a));c.searchParams.delete("format");var d=a.tb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){const e=a.h.slice(0,32),f=Mh(a.j,e,a.o,a.A,a.kb,a.ba,a.V);if(!b(c.toString(),f)){++a.A;break}a.o=0;a.A=0;a.ba=0;a.V=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
var Zh=class extends y{constructor(a){super();this.componentId="";this.h=[];this.Da="";this.pageId=null;this.Ha=this.fa=-1;this.D=this.experimentIds=null;this.V=this.ba=this.A=this.o=0;this.Sa=1;this.timeoutMillis=0;this.ia=!1;this.logSource=a.logSource;this.tb=a.tb||(()=>{});
this.j=new Nh(a.logSource,a.Qa);this.network=a.network||null;this.kb=a.kb||null;this.bufferSize=1E3;this.H=a.Ff||null;this.sessionIndex=a.sessionIndex||null;this.Ob=a.Ob||!1;this.logger=null;this.withCredentials=!a.Kc;this.Qa=a.Qa||!1;this.R=!this.Qa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.za=typeof URLSearchParams!=="undefined"&&!!(new URL(Sh())).searchParams&&!!(new URL(Sh())).searchParams.set;const b=Dh(new Eh);Ih(this.j,b);this.u=new Oh(1E4,3E5,.1);a=Th(this,a.hd);
this.i=new Wg(this.u.getValue(),a);this.na=new Wg(6E5,a);this.Ob||this.na.start();this.Qa||(document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Uh(this)}),document.addEventListener("pagehide",()=>{Uh(this)}))}X(){Uh(this);
this.i.stop();this.na.stop();super.X()}log(a){if(this.za){a=a.clone();var b=this.Sa++;a=E(a,21,oe(b));this.componentId&&F(a,26,this.componentId);b=a;{var c=Xe(b,1);const d=typeof c;c=c==null?c:d==="bigint"?String(Wd(64,c)):de(c)?d==="string"?je(c):ne(c):void 0}c==null&&(c=Date.now(),c=Number.isFinite(c)?c.toString():"0",E(b,1,oe(c)));(wc?pe(Xe(b,15,void 0,void 0,qe)):pe(Xe(b,15)))==null&&E(b,15,oe((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),nf(b,Vg,16,c));
b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Ob||this.i.enabled||this.i.start()}}flush(a,b){if(this.h.length===0)a&&a();else if(this.ia&&this.R)this.j.i=3,Wh(this);else{var c=Date.now();if(this.Ha>c&&this.fa<c)b&&b("throttled");else{this.network&&(typeof this.network.kc==="function"?Kh(this.j,this.network.kc()):this.j.i=0);var d=Mh(this.j,this.h,this.o,this.A,this.kb,this.ba,this.V),e=this.tb();if(e&&this.Da===e)b&&b("stale-auth-token");else{this.h=[];
this.i.enabled&&this.i.stop();this.o=0;c=d.serialize();let f;this.D&&this.D.isSupported(c.length)&&(f=this.D.compress(c));const g=Yh(this,c,e),h=m=>{this.u.reset();this.i.setInterval(this.u.getValue());if(m){var n=null;try{var u=JSON.stringify(JSON.parse(m.replace(")]}'\n","")));n=Qh(u)}catch(p){}if(n){m=Number(pf(n,1,Jd("-1")));m>0&&(this.fa=Date.now(),this.Ha=this.fa+m);(m=ta(ld))&&n.U[m]?.[175237375]!=null&&id(md,3);if(ta(sd)&&ta(ld)&&void 0===sd&&(m=n.U,u=m[ld])&&(u=u.xi))try{u(m,175237375,Be)}catch(p){sc(p)}n=
Rh.ctor?Rh.h(n,Rh.ctor,175237375,Rh.i):Rh.h(n,175237375,null,Rh.i);if(n=n===null?void 0:n)n=Zb(n,1,-1),n!==-1&&(this.u=new Oh(n<1?1:n,3E5,.1),this.i.setInterval(this.u.getValue()))}}a&&a();this.A=0},k=(m,n)=>{var u=Xb(d,Gh,3);
var p=Number(pf(d,14));Ph(this.u);this.i.setInterval(this.u.getValue());m===401&&e&&(this.Da=e);p&&(this.o+=p);n===void 0&&(n=this.isRetryable(m));n&&(this.h=u.concat(this.h),this.Ob||this.i.enabled||this.i.start());b&&b("net-send-failed",m);++this.A},l=()=>{this.network&&this.network.send(g,h,k)};
f?f.then(m=>{g.Bc["Content-Encoding"]="gzip";g.Bc["Content-Type"]="application/binary";g.body=m;g.ke=2;l()},()=>{l()}):l()}}}}isRetryable(a){return 500<=a&&a<600||a===401||a===0}};var $h=class{constructor(){this.de=typeof AbortController!=="undefined"}async send(a,b,c){const d=this.de?new AbortController:void 0,e=d?setTimeout(()=>{d.abort()},a.timeoutMillis):void 0;
try{const f=await fetch(a.url,{method:a.requestType,headers:{...a.Bc},...(a.body&&{body:a.body}),...(a.withCredentials&&{credentials:"include"}),signal:a.timeoutMillis&&d?d.signal:null});f.status===200?b?.(await f.text()):c?.(f.status)}catch(f){switch(f?.name){case "AbortError":c?.(408);break;default:c?.(400)}}finally{clearTimeout(e)}}kc(){return 4}};function ai(a,b){a.buildLabel=b;return a}
function bi(a){a.network=new ci;return a}
function di(a,b){a.h=b}
function ei(a){a.i=!0;return a}
function fi(a){a.network||(a.network=new $h);const b=new Zh({logSource:a.logSource,tb:a.tb?a.tb:Tg,sessionIndex:a.sessionIndex,Ff:a.eb,Qa:!1,Ob:!1,Kc:a.j,hd:a.hd,network:a.network});Nb(a,b);if(a.buildLabel){var c=a.buildLabel,d=Jh(b.j);F(d,7,c)}b.D=new Ug;a.componentId&&(b.componentId=a.componentId);a.kb&&(b.kb=a.kb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new Vg),c=b.experimentIds,d=d.serialize(),F(c,4,d)):b.experimentIds&&E(b.experimentIds,4));a.i&&(b.ia=b.R);
Lh(b.j);a.bufferSize&&(b.bufferSize=a.bufferSize);a.network.Xb&&a.network.Xb(a.logSource);a.network.sf&&a.network.sf(b);return b}
var gi=class extends y{constructor(){super();this.logSource=1828;this.sessionIndex="0";this.eb="https://play.google.com/log?format=json&hasfast=true";this.network=this.buildLabel=null;this.componentId="";this.h=this.kb=null;this.i=!1;this.pageId=null;this.bufferSize=void 0}Kc(){this.j=!0;return this}};var hi=class extends y{constructor(a){super();this.logSource=1828;this.componentId="";a||(a=new gi,a.componentId="",Nb(this,a),a=fi(a));this.h=a}flush(a){a=a||[];if(a.length){var b=new Eg;const f=[];for(let g=0;g<a.length;g++){const h=a[g],k=Fg(h);f.push(k);h.clear()}of(b,Dg,1,f);a=b;b=this.h;if(a instanceof Gh)b.log(a);else try{var c=new Gh,d=a.serialize();var e=F(c,8,d);b.log(e)}catch{}this.h.flush()}}};var ii=class{constructor(a){this.h=a}};function Ig(a){return a.fields.map(b=>b.fieldType)}
function Hg(a,...b){b=ji(b);return a.h.has(b)?a.h.get(b):void 0}
function Gg(a){return a.fields.map(b=>b.fieldName)}
function ji(...a){return a?a.join(","):"key"}
var ki=class{constructor(a,b,c){this.i=a;this.j=b;this.fields=c||[];this.h=new Map}clear(){this.h.clear()}};var li=class extends ki{constructor(a,b){super(a,3,b)}};var mi=class extends ki{constructor(a,b){super(a,2,b)}record(a,...b){b=[b];const c=Hg(this,b);c?c.push(new ii(a)):(b=ji([b]),this.h.set(b,[new ii(a)]))}};function ni(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ni.prototype.stopPropagation=function(){this.j=!0};
ni.prototype.preventDefault=function(){this.defaultPrevented=!0};function oi(a,b){ni.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ua(oi,ni);
oi.prototype.init=function(a,b){const c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&oi.Ca.preventDefault.call(this)};
oi.prototype.stopPropagation=function(){oi.Ca.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
oi.prototype.preventDefault=function(){oi.Ca.preventDefault.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pi="closure_listenable_"+(Math.random()*1E6|0);var qi=0;function ri(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++qi;this.Wb=this.dc=!1}
function si(a){a.Wb=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null}
;function ti(a){this.src=a;this.listeners={};this.h=0}
ti.prototype.add=function(a,b,c,d,e){const f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);const g=ui(a,b,d,e);g>-1?(b=a[g],c||(b.dc=!1)):(b=new ri(b,this.src,f,!!d,e),b.dc=c,a.push(b));return b};
ti.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;const e=this.listeners[a];b=ui(e,b,c,d);return b>-1?(si(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function vi(a,b){const c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(si(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function ui(a,b,c,d){for(let e=0;e<a.length;++e){const f=a[e];if(!f.Wb&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1}
;var wi="closure_lm_"+(Math.random()*1E6|0),xi={},yi=0;function zi(a,b,c,d,e){if(d&&d.once)Ai(a,b,c,d,e);else if(Array.isArray(b))for(let f=0;f<b.length;f++)zi(a,b[f],c,d,e);else c=Bi(c),a&&a[pi]?a.listen(b,c,la(d)?!!d.capture:!!d,e):Ci(a,b,c,!1,d,e)}
function Ci(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");const g=la(e)?!!e.capture:!!e;let h=Di(a);h||(a[wi]=h=new ti(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ei();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Fi(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");yi++}}
function Ei(){function a(c){return b.call(a.src,a.listener,c)}
const b=Gi;return a}
function Ai(a,b,c,d,e){if(Array.isArray(b))for(let f=0;f<b.length;f++)Ai(a,b[f],c,d,e);else c=Bi(c),a&&a[pi]?Hi(a,b,c,la(d)?!!d.capture:!!d,e):Ci(a,b,c,!0,d,e)}
function Ii(a,b,c,d,e){if(Array.isArray(b))for(let f=0;f<b.length;f++)Ii(a,b[f],c,d,e);else(d=la(d)?!!d.capture:!!d,c=Bi(c),a&&a[pi])?a.i.remove(String(b),c,d,e):a&&(a=Di(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ui(b,c,d,e)),(c=a>-1?b[a]:null)&&Ji(c))}
function Ji(a){if(typeof a!=="number"&&a&&!a.Wb){var b=a.src;if(b&&b[pi])vi(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fi(c),d):b.addListener&&b.removeListener&&b.removeListener(d);yi--;(c=Di(b))?(vi(c,a),c.h==0&&(c.src=null,b[wi]=null)):si(a)}}}
function Fi(a){return a in xi?xi[a]:xi[a]="on"+a}
function Gi(a,b){if(a.Wb)a=!0;else{b=new oi(b,this);const c=a.listener,d=a.handler||a.src;a.dc&&Ji(a);a=c.call(d,b)}return a}
function Di(a){a=a[wi];return a instanceof ti?a:null}
var Ki="__closure_events_fn_"+(Math.random()*1E9>>>0);function Bi(a){if(typeof a==="function")return a;a[Ki]||(a[Ki]=function(b){return a.handleEvent(b)});
return a[Ki]}
;function Li(){y.call(this);this.i=new ti(this);this.na=this;this.ba=null}
ua(Li,y);Li.prototype[pi]=!0;r=Li.prototype;r.addEventListener=function(a,b,c,d){zi(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Ii(this,a,b,c,d)};
function Mi(a,b){var c=a.ba;if(c){var d=[];for(var e=1;c;c=c.ba)d.push(c),++e}a=a.na;c=b.type||b;typeof b==="string"?b=new ni(b,a):b instanceof ni?b.target=b.target||a:(e=b,b=new ni(c,a),lh(b,e));e=!0;let f,g;if(d)for(g=d.length-1;!b.j&&g>=0;g--)f=b.h=d[g],e=Ni(f,c,!0,b)&&e;b.j||(f=b.h=a,e=Ni(f,c,!0,b)&&e,b.j||(e=Ni(f,c,!1,b)&&e));if(d)for(g=0;!b.j&&g<d.length;g++)f=b.h=d[g],e=Ni(f,c,!1,b)&&e}
r.X=function(){Li.Ca.X.call(this);this.removeAllListeners();this.ba=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Hi(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();let c=0;for(const d in b.listeners)if(!a||d==a){const e=b.listeners[d];for(let f=0;f<e.length;f++)++c,si(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Ni(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();let e=!0;for(let f=0;f<b.length;++f){const g=b[f];if(g&&!g.Wb&&g.capture==c){const h=g.listener,k=g.handler||g.src;g.dc&&vi(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Oi=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function Pi(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
class Qi{constructor(a,b){this.j=a;this.o=b;this.i=0;this.h=null}get(){let a;this.i>0?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class Ri{constructor(){this.i=this.h=null}add(a,b){const c=Si.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var Si=new Qi(()=>new Ti,a=>a.reset());
class Ti{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let Ui,Vi=!1,Wi=new Ri,Yi=(a,b)=>{Ui||Xi();Vi||(Ui(),Vi=!0);Wi.add(a,b)},Xi=()=>{const a=Promise.resolve(void 0);
Ui=()=>{a.then(Zi)}};
function Zi(){let a;for(;a=Wi.remove();){try{a.h.call(a.scope)}catch(b){sc(b)}Pi(Si,a)}Vi=!1}
;function $i(){}
function aj(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function bj(a){this.ha=0;this.Ed=void 0;this.qb=this.Ua=this.parent_=null;this.lc=this.Mc=!1;if(a!=$i)try{const b=this;a.call(void 0,function(c){cj(b,2,c)},function(c){cj(b,3,c)})}catch(b){cj(this,3,b)}}
function dj(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
dj.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ej=new Qi(function(){return new dj},function(a){a.reset()});
function fj(a,b,c){const d=ej.get();d.i=a;d.h=b;d.context=c;return d}
function gj(a){return new bj(function(b,c){c(a)})}
bj.prototype.then=function(a,b,c){return hj(this,Oi(typeof a==="function"?a:null),Oi(typeof b==="function"?b:null),c)};
bj.prototype.$goog_Thenable=!0;function ij(a,b,c,d){jj(a,fj(b||$i,c||null,d))}
r=bj.prototype;r.finally=function(a){a=Oi(a);return new bj((b,c)=>{ij(this,d=>{a();b(d)},d=>{a();
c(d)})})};
r.Fc=function(a,b){return hj(this,null,Oi(a),b)};
r.catch=bj.prototype.Fc;r.cancel=function(a){if(this.ha==0){const b=new kj(a);Yi(function(){lj(this,b)},this)}};
function lj(a,b){if(a.ha==0)if(a.parent_){var c=a.parent_;if(c.Ua){var d=0,e=null,f=null;for(let g=c.Ua;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.ha==0&&d==1?lj(c,b):(f?(d=f,d.next==c.qb&&(c.qb=d),d.next=d.next.next):mj(c),nj(c,e,3,b)))}a.parent_=null}else cj(a,3,b)}
function jj(a,b){a.Ua||a.ha!=2&&a.ha!=3||oj(a);a.qb?a.qb.next=b:a.Ua=b;a.qb=b}
function hj(a,b,c,d){const e=fj(null,null,null);e.child=new bj(function(f,g){e.i=b?function(h){try{const k=b.call(d,h);f(k)}catch(k){g(k)}}:f;
e.h=c?function(h){try{const k=c.call(d,h);k===void 0&&h instanceof kj?g(h):f(k)}catch(k){g(k)}}:g});
e.child.parent_=a;jj(a,e);return e.child}
r.Df=function(a){this.ha=0;cj(this,2,a)};
r.Ef=function(a){this.ha=0;cj(this,3,a)};
function cj(a,b,c){if(a.ha==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.ha=1;a:{var d=c,e=a.Df,f=a.Ef;if(d instanceof bj){ij(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(la(d))try{const k=d.then;if(typeof k==="function"){pj(d,k,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.Ed=c,a.ha=b,a.parent_=null,oj(a),b!=3||c instanceof kj||qj(a,c))}}
function pj(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
let h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function oj(a){a.Mc||(a.Mc=!0,Yi(a.Ee,a))}
function mj(a){let b=null;a.Ua&&(b=a.Ua,a.Ua=b.next,b.next=null);a.Ua||(a.qb=null);return b}
r.Ee=function(){let a;for(;a=mj(this);)nj(this,a,this.ha,this.Ed);this.Mc=!1};
function nj(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.lc;a=a.parent_)a.lc=!1;if(b.child)b.child.parent_=null,rj(b,c,d);else try{b.j?b.i.call(b.context):rj(b,c,d)}catch(e){sj.call(null,e)}Pi(ej,b)}
function rj(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function qj(a,b){a.lc=!0;Yi(function(){a.lc&&sj.call(null,b)})}
var sj=sc;function kj(a){Ba.call(this,a)}
ua(kj,Ba);kj.prototype.name="cancel";function tj(a,b){Li.call(this);this.j=a||1;this.h=b||t;this.o=qa(this.Bf,this);this.u=sa()}
ua(tj,Li);r=tj.prototype;r.enabled=!1;r.Ga=null;r.setInterval=function(a){this.j=a;this.Ga&&this.enabled?(this.stop(),this.start()):this.Ga&&this.stop()};
r.Bf=function(){if(this.enabled){const a=sa()-this.u;a>0&&a<this.j*.8?this.Ga=this.h.setTimeout(this.o,this.j-a):(this.Ga&&(this.h.clearTimeout(this.Ga),this.Ga=null),Mi(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ga||(this.Ga=this.h.setTimeout(this.o,this.j),this.u=sa())};
r.stop=function(){this.enabled=!1;this.Ga&&(this.h.clearTimeout(this.Ga),this.Ga=null)};
r.X=function(){tj.Ca.X.call(this);this.stop();delete this.h};function ec(a,b,...c){a.i.has(b)||a.i.set(b,new mi(b,c))}
function ic(a,b,...c){a.i.has(b)||a.i.set(b,new li(b,c))}
function uj(a){a.h.enabled||a.h.start();a.u++;a.u>=a.j&&a.o()}
function vj(a){for(let b=0;b<a.length;b++)a[b].clear()}
function wj(a,b){return a.D.has(b)?void 0:a.i.get(b)}
function jc(a,b,...c){if((b=wj(a,b))&&b instanceof li){c=[c];var d=0,e;(e=(e=Hg(b,[c]))&&e.length?e[0]:void 0)&&(d=e.h);d+=1;c=ji([c]);b.h.set(c,[new ii(d)]);uj(a)}}
var xj=class extends y{constructor(a){super();this.H=a;this.u=0;this.j=100;this.A=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new tj(this.flushInterval);this.h.listen("tick",this.o,!1,this);Nb(this,this.h)}sendIsolatedPayload(a){this.A=a;this.j=1}o(){const a=[...this.i.values()].filter(b=>b.h.size);
a.length&&this.H.flush(a,this.A);vj(a);this.u=0;this.h.enabled&&this.h.stop()}record(a,b,...c){(a=wj(this,a))&&a instanceof mi&&(a.record(b,c),uj(this))}};function yj(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function zj(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}}
;var Aj=class extends Error{constructor(a,b){super(b);this.code=a;this.metadata={};this.name="RpcError";Object.setPrototypeOf(this,new.target.prototype)}toString(){let a=`RpcError(${zj(this.code)||String(this.code)})`;this.message&&(a+=": "+this.message);return a}};function Bj(){}
Bj.prototype.serialize=function(a){const b=[];Cj(this,a,b);return b.join("")};
function Cj(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");var e="";for(var f=0;f<b;f++)c.push(e),Cj(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Dj(d,c),c.push(":"),Cj(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Dj(b,c);break;
case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ej={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Fj=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Dj(a,b){b.push('"',a.replace(Fj,function(c){let d=Ej[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ej[c]=d);return d}),'"')}
;function Gj(){Li.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.V="";this.j=this.R=this.A=this.H=!1;this.D=0;this.u=null;this.ia="";this.fa=!1}
ua(Gj,Li);var Hj=/^https?$/i,Ij=["POST","PUT"],Jj=[];function Kj(a,b,c,d,e,f,g){const h=new Gj;Jj.push(h);b&&h.listen("complete",b);Hi(h,"ready",h.pe);f&&(h.D=Math.max(0,f));g&&(h.fa=g);h.send(a,c,d,e)}
r=Gj.prototype;r.pe=function(){this.dispose();lb(Jj,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.V+"; newUri="+a);b=b?b.toUpperCase():"GET";this.V=a;this.o="";this.H=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=Oi(qa(this.wd,this));try{this.getStatus(),this.R=!0,this.J.open(b,String(a),!0),this.R=!1}catch(f){this.getStatus();Lj(this,f);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function")for(const f of d.keys())c.set(f,d.get(f));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(f=>"content-type"==f.toLowerCase());
e=t.FormData&&a instanceof t.FormData;!(fb(Ij,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const [f,g]of c)this.J.setRequestHeader(f,g);this.ia&&(this.J.responseType=this.ia);"withCredentials"in this.J&&this.J.withCredentials!==this.fa&&(this.J.withCredentials=this.fa);try{this.u&&(clearTimeout(this.u),this.u=null),this.D>0&&(this.getStatus(),this.u=setTimeout(this.Cf.bind(this),this.D)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(f){this.getStatus(),
Lj(this,f)}};
r.Cf=function(){typeof ha!="undefined"&&this.J&&(this.o="Timed out after "+this.D+"ms, aborting",this.getStatus(),Mi(this,"timeout"),this.abort(8))};
function Lj(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Mj(a);Nj(a)}
function Mj(a){a.H||(a.H=!0,Mi(a,"complete"),Mi(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,Mi(this,"complete"),Mi(this,"abort"),Nj(this))};
r.X=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Nj(this,!0));Gj.Ca.X.call(this)};
r.wd=function(){this.F||(this.R||this.A||this.j?Oj(this):this.jf())};
r.jf=function(){Oj(this)};
function Oj(a){if(a.h&&typeof ha!="undefined")if(a.A&&(a.J?a.J.readyState:0)==4)setTimeout(a.wd.bind(a),0);else if(Mi(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Pj(a))Mi(a,"complete"),Mi(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Mj(a)}}finally{Nj(a)}}}
function Nj(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);const c=a.J;a.J=null;b||Mi(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function Pj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.V).match(wb)[1]||null,!a&&t.self&&t.self.location&&(a=t.self.location.protocol.slice(0,-1)),b=!Hj.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};var ci=class{send(a,b=()=>{},c=()=>{}){Kj(a.url,d=>{d=d.target;
if(Pj(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Bc,a.timeoutMillis,a.withCredentials)}kc(){return 1}};var Rj=class{constructor(a,b){this.logger=a;this.event=b;this.startTime=Qj()}done(){this.logger.j(this.event,Qj()-this.startTime)}};function Sj(a,b,c){const d=Qj();b=b();a.j(c,Qj()-d);return b}
var Tj=class extends bc{constructor(){super(...arguments)}},Uj=class extends Tj{o(){}h(){}j(){}wa(){}i(){}D(){}u(){}A(){}},Vj=class extends Tj{constructor(a){super();this.logger=a;this.addOnDisposeCallback(()=>void this.logger.dispose())}update(a){this.logger.dispose();
this.logger=a}h(a){this.logger.h(a)}j(a,b){this.logger.j(a,b)}wa(a){this.logger.wa(a)}i(){this.logger.i()}D(a){this.logger.D(a)}u(a){this.logger.u(a)}A(a){this.logger.A(a)}o(a){this.logger.o(a)}};function Wj(a,b,c,d){a=ei(bi(ai(new gi,a))).Kc();b.length&&di(a,tg(new ug,b));d!==void 0&&(a.eb=d);const e=new hi(fi(a));Nb(e,a);const f=new xj({flush(g){try{e.flush(g)}catch(h){c(h)}}});f.addOnDisposeCallback(()=>{setTimeout(()=>{try{f.o()}finally{e.dispose()}})});
f.j=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Xj(a){if(a.timer===void 0){const b=Math.max(0,a.h+a.i-Qj());a.timer=setTimeout(()=>{try{a.callback()}finally{a.h=Qj(),a.timer=void 0}},b)}}
class Yj extends y{constructor(a,b){super();this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(()=>void clearTimeout(this.timer))}}
class Zj extends Tj{constructor(a,b){super();this.metrics=a;this.qa=b}o(a){this.metrics.xf.record(a,this.qa)}h(a){this.metrics.eventCount.h(a,this.qa)}j(a,b){this.metrics.De.record(b,a,this.qa)}wa(a){this.metrics.errorCount.h(a,this.qa)}D(a){this.metrics.If.h(a,this.qa)}u(a){this.metrics.le.h(a,this.qa)}A(a){this.metrics.Hf.h(a,this.qa)}}function ak(a,b=[]){return new bk(a,b)}
var bk=class extends Zj{constructor(a,b=[]){const c={qa:a.qa||"_",Nc:a.Nc||[],Rc:a.Rc|0,eb:a.eb,wc:a.wc||(()=>{}),
Hb:a.Hb||((e,f)=>Wj(e,f,c.wc,c.eb))},d=c.Hb("53",c.Nc.concat(b));
super({xf:new fc(d),errorCount:new mc(d),eventCount:new kc(d),De:new lc(d),Gi:new hc(d),If:new nc(d),le:new oc(d),Hf:new pc(d)},c.qa);this.options=c;this.service=d;this.V=!a.Hb;this.H=new Yj(()=>void this.service.o(),c.Rc);
this.addOnDisposeCallback(()=>{this.H.dispose();this.V&&this.service.dispose()});
b.slice().sort(ob)}i(){Xj(this.H)}};function Qj(){return globalThis.performance?.now?.()??Date.now()}
;var ck=class extends G{constructor(a){super(a)}};var dk=class extends G{constructor(a){super(a)}};var ek=class extends G{constructor(a){super(a,0,"bfkj")}},fk=function(a){return Cd(b=>b instanceof a&&!wd(b))}(ek);
ek.df="bfkj";var Yb=class extends G{constructor(a){super(a)}};var gk=class extends G{constructor(a){super(a)}},hk=sg(gk);class ik{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}}
;function jk(a,b){if(a.disable)return new Uj;b=b?Wb(b):[];return ak({qa:a.qa,Nc:a.Ge,Rc:a.ef,eb:a.eb,wc:a.wc,Hb:a.Hb},b)}
class kk extends y{constructor(a){super();this.j=Math.floor(Math.random()*200);this.h=new gk;let b;if("challenge"in a&&fk(a.challenge)){b=qf(a.challenge,4,void 0,Bd);var c=qf(a.challenge,5,void 0,Bd);qf(a.challenge,7,void 0,Bd)&&(this.h=hk(qf(a.challenge,7,void 0,Bd)))}else({program:b,globalName:c}=a);this.addOnDisposeCallback(async()=>{const {wf:l}=await this.i;l?.()});
this.logger=jk(a.Bb||{},this.h);Nb(this,this.logger);const d=new ik;this.i=d.promise;this.logger.h("t");const e=this.logger.share(),f=new Rj(e,"t"),g=(l,m,n,u)=>{if(!this.logger.F){var p="k";m?p="h":n&&(p="u");p!=="k"?u!==0&&(this.logger.h(p),this.logger.j(p,l)):this.j<=0?(this.logger.h(p),this.logger.j(p,l),this.j=Math.floor(Math.random()*200)):this.j--}},h=(l,m,n,u)=>{Promise.resolve().then(()=>{f.done();
e.i();e.dispose();d.resolve({ee:l,wf:m,mf:n,ne:u})})};
if(!t[c])throw this.logger.wa(25),Error("EGOU");if(!t[c].a)throw this.logger.wa(26),Error("ELIU");try{const l=t[c].a;c=[];const m=[];var k=Wb(this.h);for(let p=0;p<k.length;p++)c.push(k[p]),m.push(1);const n=$b(this.h);for(k=0;k<n.length;k++)c.push(n[k]),m.push(2);const [u]=l(b,h,!0,a.Od,g,[c,m],qf(this.h,5),!1);this.o=u;this.Fb=d.promise.then(()=>{})}catch(l){throw this.logger.wa(28),l;
}}snapshot(a){if(this.F)throw Error("Already disposed");this.logger.h("n");const b=this.logger.share();return this.i.then(({ee:c})=>new Promise(d=>{const e=new Rj(b,"n");c(f=>{e.done();b.o(f.length);b.i();b.dispose();d(f)},[a.Ia,
a.Ec,a.Rd,a.bd])}))}Hd(a){if(this.F)throw Error("Already disposed");
this.logger.h("n");const b=Sj(this.logger,()=>this.o([a.Ia,a.Ec,a.Rd,a.bd]),"n");
this.logger.o(b.length);this.logger.i();return b}Tb(a){this.i.then(({mf:b})=>{b?.(a)})}ec(a,b){return this.i.then(({ne:c})=>c?.(a,b,!1))}Yb(){return this.logger.share()}}
;function lk(a){if(!a)return null;a=ve(Xe(a,4,void 0,We));return a===null||a===void 0?null:Ha(a)}
;function mk(){nk.instance||(nk.instance=new nk);return nk.instance}
function ok(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return pk(b,c);let e;(e=a.promises)[d]||(e[d]=new Promise((f,g)=>{pk(b,c).then(()=>{a.h=d;f()},h=>{delete a.promises[d];
g(h)})}));
return a.promises[d]}
function qk(a,b){return ok(a,lf(b,ck,1,Bd),lf(b,dk,2,Bd),qf(b,3,void 0,Bd))}
var nk=class{constructor(){this.promises={};this.h=null}};function pk(a,b){return b?rk(b):a?sk(a):Promise.resolve()}
function rk(a){return new Promise((b,c)=>{const d=ph("SCRIPT"),e=lk(a);$a(d,e);d.onload=()=>{rh(d);b()};
d.onerror=()=>{rh(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function sk(a){return new Promise(b=>{const c=ph("SCRIPT");if(a){var d=ve(Xe(a,6,void 0,We));d=d===null||d===void 0?null:Xa(d)}else d=null;c.textContent=Ya(d);Za(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);rh(c);b()})}
;function tk(a,b){return gf(a,1,ue(b))}
function uk(a,b){return gf(a,2,ue(b))}
var vk=class extends G{constructor(a){super(a)}};async function wk(a,b,c,d=mk(),e=Promise.resolve(void 0),f){await 0;let g;for(;;){let h=null;if(g){xk(a,7);try{h=await yk(g.snapshot({}),f.se,()=>Promise.resolve("E:CTO"))}catch(m){h="E:UCE"}}let k;
const l=new Oh(g?f.ze:f.Ae,f.Be,f.Ce,f.ye);for(let m=1;m<=f.maxAttempts;m++){if(m!==1){xk(a,0);a.h=new zk(l.getValue(),f.Gc,f.Ld);const n=await a.h.promise;a.h=void 0;n===1?(m=1,l.reset()):Ph(l)}try{let n;c?n=c:(xk(a,5),n=await yk(Ak(b,d.h,h),f.Je,()=>Promise.reject(Error("RGF:Fetch timed out"))));
xk(a,3);await yk(qk(d,n),f.Ye,()=>Promise.reject(Error("DTZ:Script timed out")));
xk(a,8);await e;const u=new kk({challenge:n,Bb:a.options.Bb,Od:a.options.Od});await yk(u.Fb,f.uf,()=>Promise.reject(Error("QEG:Setup timed out")));
k=u;break}catch(n){a.handleError(n),Bk(a)}}if(a.F)break;k&&(c=void 0,Ck(a,g),g=k,Dk(a,k),Bk(a));xk(a,2);a.h=new zk(f.Bd,f.Gc,f.Ld);a.isPaused&&a.h.pause();await a.h.promise;a.h=void 0;if(a.F)break}g?.dispose()}
function Ek(a){a.D=Error("Cancelled by dispose");a.u.resolve();ac(a.A.promise);a.A.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(async()=>{a.i?.dispose();a.i=void 0});
a.o=[];a.h?.i();ac(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
function Fk(a,b){const c=a.xc;a.xc=()=>{c();b()}}
function Dk(a,b){a.F||(a.i=b,a.logger.update(b.Yb()),a.u.resolve(),a.A.resolve(void 0),a.xc())}
function Ck(a,b){b&&(Promise.all(a.o).then(()=>void b.dispose()),a.o=[])}
function xk(a,b){a.R=b;a.options.li?.(b)}
function Bk(a){a.F||(a.j.resolve(),a.j=new ik)}
var Ik=class extends y{constructor(a){super();this.options=a;this.A=new ik;this.Fb=this.A.promise;this.u=new ik;this.R=1;this.j=new ik;this.o=[];this.isPaused=!1;this.xc=a.xc||(()=>{});
this.logger=new Vj(jk(a.Bb||{}));wk(this,a.Ma,a.Pe,a.yi,a.Ai,{...Gk,...(a.Ib||{})});this.addOnDisposeCallback(()=>void Ek(this))}async snapshot(a){if(this.F)throw Error("Already disposed");
this.i||this.D||await this.u.promise;if(this.i)return await this.i.snapshot(a);throw this.D;}pause(){this.F||this.isPaused||(this.isPaused=!0,this.h&&this.h.pause())}resume(){!this.F&&this.isPaused&&(this.isPaused=!1,this.h&&this.h.resume())}async checkForRefresh(){if(this.F)throw Error("Already disposed");if(this.h){var a=this.h;a.isExpired()?(Hk(a),a.Cc(0),a=!0):a=!1;a&&await this.j.promise}else await this.j.promise}async H(){if(this.F)throw Error("Already disposed");this.h?.i();await this.j.promise}Tb(a){this.i?.Tb?.(a)}ec(a,
b){return this.i?.ec?.(a,b)??Promise.resolve()}handleError(a){this.F||(this.D=a,this.u.resolve(),this.options.vc?.(a))}Yb(){return this.logger.share()}},Gk={Bd:432E5,Gc:3E5,Ld:10,se:1E4,Je:3E4,Ye:3E4,uf:6E4,Ae:1E3,ze:6E4,Be:6E5,Ce:.25,ye:2,maxAttempts:10};function yk(a,b,c){let d;const e=new Promise(f=>{d=setTimeout(f,b)});
return Promise.race([a.finally(()=>void clearTimeout(d)),
e.then(c)])}
function Jk(a,b){a.endTimeMs=Date.now()+b;a.tick()}
function Hk(a){a.h&&(clearTimeout(a.h),a.h=null)}
class zk{constructor(a,b,c){this.endTimeMs=0;this.h=null;this.isPaused=!1;this.tick=()=>{if(!this.isPaused){var d=this.endTimeMs-Date.now();d<=this.j?(this.h=null,this.Cc(0)):this.h=setTimeout(this.tick,Math.min(d,this.Gc))}};
this.Gc=b;this.j=c;this.promise=new Promise(d=>{this.Cc=d});
Jk(this,a)}pause(){this.isPaused||(this.isPaused=!0,Hk(this))}resume(){this.isPaused&&(this.isPaused=!1,this.tick())}i(){Hk(this);this.endTimeMs=0;this.isPaused=!1;this.Cc(1)}isExpired(){return Date.now()>this.endTimeMs}};function Kk(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
const Lk=Math.imul??((a,b)=>a*b|0);
function Mk(a,b=0,c=a.length,d){let e=0;for(d&&(e=Mk(d));b<c;b++)e=Lk(31,e)+(typeof a==="string"?a.charCodeAt(b):a[b])|0;return e}
const Nk=[196,200,224,18];function Ok(a){const [b,c]=[Mk(a,0,a.length>>1,Nk),Mk(a,a.length>>1)];return b.toString(16)+c.toString(16)}
function Pk(a,b){var c=[Mk(b,0,b.length>>1,void 0),Mk(b,b.length>>1)];a=new Uint32Array(a.buffer);b=a[0];const [d,e]=c;for(c=1;c<a.length;c+=2){var f=b,g=c,h=d,k=e;for(let l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[c]^=f[0];c+1<a.length&&(a[c+1]^=f[1])}}
function Qk(a,b,c,d,e){const f=(4-(Nk.length+c.length)%4)%4,g=new Uint8Array(4+f+Nk.length+4+c.length),h=new DataView(g.buffer);let k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(Nk,k);k+=Nk.length;h.setUint32(k,e);g.set(c,k+4);Pk(g,d);return a.la(b,l=>void globalThis.sessionStorage.removeItem(l))?Kk(b,Tc(g))?"s":"t":"i"}
function Rk(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];let d;try{d=Vc(c),Pk(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<Nk.length;c++)if(d[b++]!==Nk[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function Sk(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new Tk(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Tk(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Tk(a)):new Tk(a,c,b)}
class Tk{constructor(a,b=0,c=[]){this.maxItems=a;this.h=b;this.i=c}serialize(){return String(this.h)+","+this.i.join()}la(a,b){let c=void 0;if(this.i[this.h]!==a){const d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=Kk("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a}}
var Tb=class{constructor(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=Sk(a))}h(a,b,c,d){const e=this.index?Sj(this.logger,()=>Qk(this.index,Ok(a),b,c,d),"W"):"u";
this.logger.A(e)}i(a,b){const [c,d]=this.index?Sj(this.logger,()=>Rk(Ok(a),b),"R"):["u"];
this.logger.u(c);return d}};var Uk={toString:function(a){let b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Vk(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Wk(a);let c=2654435769,d=2654435769,e=314159265;const f=a.length;let g=f,h=0;for(;g>=12;g-=12,h+=12)c+=Xk(a,h),d+=Xk(a,h+4),e+=Xk(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Uk.toString(e)}
function Wk(a){const b=[];for(let c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Xk(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Yk(a,b){const c=setTimeout(()=>{a.j.resolve()},b);
a.addOnDisposeCallback(()=>void clearTimeout(c))}
var Zk=class extends y{constructor(a){super();this.logger=a;this.j=new ik}uc(a,b){const c=this.Za(a);b?.(c);return Sj(this.logger,()=>Tc(c,2),this.i)}Uc(a,b,c){return Sj(this.logger,()=>b?this.uc(a,c):this.Za(a,c),this.h)}},$k=class extends Zk{constructor(a,b,c,d){super(a);
this.o=b;this.A=c;this.h="m";this.i="x";this.u=0;Yk(this,d)}Za(a,b){this.logger.h(this.h);++this.u>=this.A&&this.j.resolve();const c=a();a=Sj(this.logger,()=>this.o(c),"C");
if(a===void 0)throw new x(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new x(18,"ODM:Invalid");b?.(a);return a}},al=class extends Zk{constructor(a,b,c){super(a);this.o=b;this.h="f";this.i="z";Yk(this,c)}Za(){return this.o}},bl=class extends Zk{constructor(a,b,c){super(a);this.o=b;this.h="w";this.i="z";Yk(this,c)}Za(){return Sj(this.logger,()=>Vc(this.o),"d")}uc(){return this.o}};
function cl(a,b){var c=`${b(a.error.message)}:${b(a.error.stack)}`.substring(0,2048);b=c.length+1;c=dl(c);const d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
var el=class extends Zk{constructor(a,b){super(a);this.error=b;this.h="e";this.i="y"}Za(){if(this.o)return this.o;this.o=cl(this,a=>"_"+Vk(a));
return cl(this,a=>a)}},fl=class extends Zk{constructor(a,b){super(a);
this.clientState=b;this.h="S";this.i="q"}Za(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([0,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);b=b.length;for(let d=b;d<c.length;++d)c[d]^=c[d%b];this.logger.D(this.clientState);return a}};function dl(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):tc(a)}
;var gl={Ke:3E4,yf:2E4};function Ub(a,b){a.logger.wa(b.code);a.onError(b);return b}
async function hl(a){let b=void 0;a.j++;const c=new ik;a.vm instanceof Ik&&a.vm.o.push(c.promise);if(a.gd){const f=new ik;setTimeout(()=>void f.resolve());
await f.promise}const d=a.logger.share();try{a.state=5;const f=[],g=await yk(a.vm.snapshot({Ia:{},Rd:f}),a.Ib.yf,()=>Promise.reject(new x(15,"MDA:Timeout")));
if(a.F)throw new x(a.h?20:32,"MDA:Disposed");const h=f[0];a.state=6;const k=await yk(il(a.Ma,g),a.Ib.Ke,()=>Promise.reject(new x(10,"BWB:Timeout")));
if(a.F)throw new x(a.h?20:32,"BWB:Disposed");a.state=7;b=Sj(d,()=>{const l=jl(a,k,c,h);l.j.promise.then(()=>void a.o());
return l},"i")}catch(f){b?.dispose();
if(!a.i){const g=kl(a,f);c.resolve();var e;if(e=a.vm instanceof Ik&&a.j<2)a:if(f instanceof x)e=f.code!==32&&f.code!==20&&f.code!==10;else{if(f instanceof Aj)switch(f.code){case 2:case 13:case 14:case 4:break;default:e=!1;break a}e=!0}if(e){const h=setTimeout(()=>void a.o(),(1+Math.random()*.25)*(a.h?6E4:1E3));
a.addOnDisposeCallback(()=>void clearTimeout(h));
return}a.i=g}d.wa(a.h?13:14);a.Eb.reject(a.i);return}finally{d.dispose()}a.state=8;a.j=0;a.h?.dispose();a.h=b;a.Eb.resolve()}
function kl(a,b){if(!(b instanceof x))if(b instanceof Aj){const c=Error(b.toString());c.stack=b.stack;b=new x(11,"EBH:Error",c)}else b=new x(12,"BSO:Unknown",b);return Ub(a,b)}
function jl(a,b,c,d){const e=(he(Xe(b,2))??0)*1E3;if(e<=0)throw new x(31,"TTM:Invalid");if(qf(b,4))return new bl(a.logger,qf(b,4),e);if(!(he(Xe(b,3))??0))return new al(a.logger,fd(df(b)),e);if(!d)throw new x(4,"PMD:Undefined");d=d(fd(df(b)));if(typeof d!=="function")throw new x(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new $k(a.logger,d,he(Xe(b,3))??0,e);a.addOnDisposeCallback(()=>void c.resolve());
return a}
function ll(a,b,c){try{if(a.F)throw new x(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;return ml(a,b,c)??nl(a,b,c)??ol(a,b,c)}catch(d){if(!b.gf)throw pl(a,d);return ql(a,c,d)}}
function pl(a,b){b=b instanceof x?b:new x(5,"TVD:error",b);return Ub(a,b)}
function ml(a,b,c){return a.h?.Uc(()=>rl(a,b),c,d=>{if(a.h instanceof $k&&b.cc?.zf)try{a.cache?.h(rl(a,b),d,b.cc.kd,a.u-120)}catch(e){Ub(a,new x(24,"ELX:write",e))}})}
function nl(a,b,c){if(b.cc?.he)try{const d=a.cache?.i(rl(a,b),b.cc.kd);return d?c?Sj(a.logger,()=>Tc(d,2),"a"):d:void 0}catch(d){Ub(a,new x(23,"RXO:read",d))}}
function ol(a,b,c){const d={stack:[],error:void 0,gb:!1};try{if(!b.ff)throw new x(29,"SDF:notready");return za(d,new fl(a.logger,a.state)).Uc(()=>rl(a,b),c)}catch(e){d.error=e,d.gb=!0}finally{Aa(d)}}
function ql(a,b,c){const d={stack:[],error:void 0,gb:!1};try{const e=pl(a,c);return za(d,new el(a.logger,e)).Uc(()=>[],b)}catch(e){d.error=e,d.gb=!0}finally{Aa(d)}}
function rl(a,b){return b.Lc?b.Lc:b.Ia?Sj(a.logger,()=>b.Lc=dl(b.Ia),"c"):[]}
class sl extends y{constructor(a){super();this.Eb=new ik;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Ma=a.Ma;this.Ib={...gl,...(a.Ib||{})};this.logger=a.vm.Yb();this.onError=a.onError??(()=>{});
this.gd=a.gd||!1;if(tl(a)){const d=this.vm;this.o=()=>d.H().catch(e=>{this.i=e=Ub(this,new x(this.h?20:32,"TRG:Disposed",e));this.h?.dispose();this.h=void 0;this.Eb.reject(e)});
Fk(d,()=>void hl(this));
d.R===2&&hl(this)}else this.o=a.ki,hl(this);const b=this.logger.share();b.h("o");const c=new Rj(b,"o");this.Eb.promise.then(()=>{c.done();b.i();b.dispose()},()=>void b.dispose());
this.addOnDisposeCallback(()=>{this.h?(this.h.dispose(),this.h=void 0):this.i?this.logger.i():(this.i=Ub(this,new x(32,"TNP:Disposed")),this.logger.i(),this.Eb.reject(this.i))});
Nb(this,this.logger)}Za(a){return ll(this,{...a},!1)}uc(a){return ll(this,{...a},!0)}}const tl=function(a){return Cd(b=>{if(!Id(b))return!1;for(const [c,d]of Object.entries(a)){const e=c,f=d;if(!(e in b)){if(f.di===!0)continue;return!1}if(!f(b[e]))return!1}return!0})}({vm:function(a){return Cd(b=>b instanceof a)}(Ik)},"");var wl=class{constructor(){if(!ul){ul=new xj(new vl);var a=I("client_streamz_web_flush_count",-1);a!==-1&&(ul.j=a)}this.i=a=ul;ic(a,"/client_streamz/youtube/aba/gac",cc("type"),cc("sequence"))}h(a,b){jc(this.i,"/client_streamz/youtube/aba/gac",[a,b])}};var xl=window;function yl(a){var b=zl;if(b)for(const c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Al(){const a=[];yl(b=>{a.push(b)});
return a}
;var zl={Jf:"allow-forms",Kf:"allow-modals",Lf:"allow-orientation-lock",Mf:"allow-pointer-lock",Nf:"allow-popups",Of:"allow-popups-to-escape-sandbox",Pf:"allow-presentation",Qf:"allow-same-origin",Rf:"allow-scripts",Sf:"allow-top-navigation",Tf:"allow-top-navigation-by-user-activation"};const Bl=aj(()=>Al());
function Cl(){const a=document.createElement("iframe"),b={};gb(Bl(),c=>{a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Dl(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;let El=(new Date).getTime();var Fl=sg(class extends G{constructor(a){super(a)}});function Gl(){var a=Hl;Il.instance||(Il.instance=new Il(a));return Il.instance}
function Jl(a,b){return a.u?a.u:a.u=new Promise(async c=>{const d=window.AbortController?new window.AbortController:void 0,e=d?.signal;let f=!1;try{d&&(a.j=a.Fa.ra(()=>{d.abort()},b||2E4)),await fetch("/generate_204",{method:"HEAD",
signal:e}),f=!0}catch{f=!1}finally{a.u=void 0,a.j&&(a.Fa.sa(a.j),a.j=0),f!==a.h&&(a.h=f,a.h?Mi(a,"networkstatus-online"):Mi(a,"networkstatus-offline")),c(f)}})}
function Kl(a){a.A=a.Fa.ra(async()=>{a.h?window.navigator?.onLine||await Jl(a):await Jl(a);Kl(a)},3E4)}
var Il=class extends Li{constructor(a){super();this.A=this.j=0;this.Fa=a??{ra:(b,c)=>setTimeout(b,c),
sa:b=>{clearTimeout(b)}};
this.h=window.navigator?.onLine??!0;this.o=async()=>{await Jl(this)};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Kl(this)}dispose(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Fa.sa(this.A);delete Il.instance}va(){return this.h}};function Ll(a){a.h===-1&&(a.h=a.data.reduce((b,c,d)=>b+(c?2**d:0),0));
return a.h}
var Ml=class{constructor(){this.data=[];this.h=-1}set(a,b=!0){0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)}get(a){return!!this.data[a]}};function Nl(){this.blockSize=-1}
;function Ol(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(let a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
ua(Ol,Nl);Ol.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Pl(a,b,c){c||(c=0);const d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];let f=a.h[3],g=a.h[4];let h;for(let l=0;l<80;l++){if(l<40)if(l<20){var k=f^c&(e^f);h=1518500249}else k=c^e^f,h=1859775393;else l<60?(k=c&e|f&(c|e),h=2400959708):
(k=c^e^f,h=3395469782);k=(b<<5|b>>>27)+k+g+h+d[l]&4294967295;g=f;f=e;e=(c<<30|c>>>2)&4294967295;c=b;b=k}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Ol.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Pl(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Pl(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Pl(this,e);f=0;break}}this.i=f;this.o+=b}};
Ol.prototype.digest=function(){const a=[];var b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Pl(this,this.u);b=0;for(c=0;c<5;c++)for(let d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ql(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Rl(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Sl(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ql(a).match(/\S+/g)||[],b=fb(a,b)>=0);return b}
function Tl(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Sl(a,"inverted-hdpi")&&Rl(a,Array.prototype.filter.call(a.classList?a.classList:Ql(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Ul(){}
Ul.prototype.next=function(){return Vl};
const Vl={done:!0,value:void 0};Ul.prototype.ob=function(){return this};function Wl(a){if(a instanceof Xl||a instanceof Yl||a instanceof Zl)return a;if(typeof a.next=="function")return new Xl(()=>a);
if(typeof a[Symbol.iterator]=="function")return new Xl(()=>a[Symbol.iterator]());
if(typeof a.ob=="function")return new Xl(()=>a.ob());
throw Error("Not an iterator or iterable.");}
class Xl{constructor(a){this.h=a}ob(){return new Yl(this.h())}[Symbol.iterator](){return new Zl(this.h())}i(){return new Zl(this.h())}}class Yl extends Ul{constructor(a){super();this.h=a}next(){return this.h.next()}[Symbol.iterator](){return new Zl(this.h)}i(){return new Zl(this.h)}}class Zl extends Xl{constructor(a){super(()=>a);
this.j=a}next(){return this.j.next()}};function J(a){y.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
ua(J,y);r=J.prototype;r.subscribe=function(a,b,c){let d=this.i[a];d||(d=this.i[a]=[]);const e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){const d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.ac(a)}return!1};
r.ac=function(a){const b=this.h[a];if(b){const c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=()=>{}):(c&&lb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.nb=function(a,b){var c=this.i[a];if(c){const e=Array(arguments.length-1);var d=arguments.length;let f;for(f=1;f<d;f++)e[f-1]=arguments[f];if(this.A)for(f=0;f<c.length;f++)d=c[f],$l(this.h[d+1],this.h[d+2],e);else{this.o++;try{for(f=0,d=c.length;f<d&&!this.F;f++){const g=c[f];this.h[g+1].apply(this.h[g+2],e)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.ac(c)}}return f!=0}return!1};
function $l(a,b,c){Yi(function(){a.apply(b,c)})}
r.clear=function(a){if(a){const b=this.i[a];b&&(b.forEach(this.ac,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.X=function(){J.Ca.X.call(this);this.clear();this.j.length=0};function am(a){this.h=a}
am.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Bj).serialize(b))};
am.prototype.get=function(a){let b;try{b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
am.prototype.remove=function(a){this.h.remove(a)};function bm(a){this.h=a}
ua(bm,am);function cm(a){this.data=a}
function dm(a){return a===void 0||a instanceof cm?a:new cm(a)}
bm.prototype.set=function(a,b){bm.Ca.set.call(this,a,dm(b))};
bm.prototype.i=function(a){a=bm.Ca.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
bm.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function em(a){this.h=a}
ua(em,bm);em.prototype.set=function(a,b,c){if(b=dm(b)){if(c){if(c<sa()){em.prototype.remove.call(this,a);return}b.expiration=c}b.creation=sa()}em.Ca.set.call(this,a,b)};
em.prototype.i=function(a){const b=em.Ca.i.call(this,a);if(b){const c=b.creation,d=b.expiration;if(d&&d<sa()||c&&c>sa())em.prototype.remove.call(this,a);else return b}};function fm(){}
;function gm(){}
ua(gm,fm);gm.prototype[Symbol.iterator]=function(){return Wl(this.ob(!0)).i()};
gm.prototype.clear=function(){const a=Array.from(this);for(const b of a)this.remove(b)};function hm(a){this.h=a;this.i=null}
ua(hm,gm);r=hm.prototype;r.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
r.set=function(a,b){im(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){im(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){im(this);this.h.removeItem(a)};
r.ob=function(a){im(this);var b=0,c=this.h,d=new Ul;d.next=function(){if(b>=c.length)return Vl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){im(this);this.h.clear()};
r.key=function(a){im(this);return this.h.key(a)};
function im(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||sc(Error("Storage mechanism: Storage unavailable"))}
;function jm(){let a=null;try{a=t.localStorage||null}catch(b){}hm.call(this,a)}
ua(jm,hm);function km(a,b){this.i=a;this.h=b+"::"}
ua(km,gm);km.prototype.set=function(a,b){this.i.set(this.h+a,b)};
km.prototype.get=function(a){return this.i.get(this.h+a)};
km.prototype.remove=function(a){this.i.remove(this.h+a)};
km.prototype.ob=function(a){const b=this.i[Symbol.iterator](),c=this,d=new Ul;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function lm(a){if(a.Wa&&typeof a.Wa=="function")return a.Wa();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(ka(a)){const b=[],c=a.length;for(let d=0;d<c;d++)b.push(a[d]);return b}return bh(a)}
function mm(a){if(a.Rb&&typeof a.Rb=="function")return a.Rb();if(!a.Wa||typeof a.Wa!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(ka(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(const d in a)b[c++]=d;return b}}}
function nm(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(ka(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else{const d=mm(a),e=lm(a),f=e.length;for(let g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function om(a){this.i=this.A=this.j="";this.D=null;this.u=this.h="";this.o=!1;let b;a instanceof om?(this.o=a.o,pm(this,a.j),this.A=a.A,this.i=a.i,qm(this,a.D),this.h=a.h,rm(this,a.M.clone()),this.u=a.u):a&&(b=String(a).match(wb))?(this.o=!1,pm(this,b[1]||"",!0),this.A=sm(b[2]||""),this.i=sm(b[3]||"",!0),qm(this,b[4]),this.h=sm(b[5]||"",!0),rm(this,b[6]||"",!0),this.u=sm(b[7]||"")):(this.o=!1,this.M=new tm(null,this.o))}
om.prototype.toString=function(){const a=[];var b=this.j;b&&a.push(um(b,wm,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.A)&&a.push(um(b,wm,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.D,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(um(c,c.charAt(0)=="/"?xm:ym,!0));(c=this.M.toString())&&a.push("?",c);(c=this.u)&&a.push("#",um(c,zm));return a.join("")};
om.prototype.resolve=function(a){const b=this.clone();let c=!!a.j;c?pm(b,a.j):c=!!a.A;c?b.A=a.A:c=!!a.i;c?b.i=a.i:c=a.D!=null;var d=a.h;if(c)qm(b,a.D);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");const f=[];for(let g=0;g<e.length;){const h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||
f.length==1&&f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.M.toString()!=="";c?rm(b,a.M.clone()):c=!!a.u;c&&(b.u=a.u);return b};
om.prototype.clone=function(){return new om(this)};
function pm(a,b,c){a.j=c?sm(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function qm(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.D=b}else a.D=null}
function rm(a,b,c){b instanceof tm?(a.M=b,Am(a.M,a.o)):(c||(b=um(b,Bm)),a.M=new tm(b,a.o))}
function sm(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function um(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,Cm),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Cm(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var wm=/[#\/\?@]/g,ym=/[#\?:]/g,xm=/[#\?]/g,Bm=/[#\?@]/g,zm=/#/g;function tm(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function Dm(a){a.h||(a.h=new Map,a.i=0,a.j&&Cb(a.j,function(b,c){a.add(ub(b),c)}))}
r=tm.prototype;r.add=function(a,b){Dm(this);this.j=null;a=Em(this,a);let c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
r.remove=function(a){Dm(this);a=Em(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
r.clear=function(){this.h=this.j=null;this.i=0};
function Fm(a,b){Dm(a);b=Em(a,b);return a.h.has(b)}
r.forEach=function(a,b){Dm(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
r.Rb=function(){Dm(this);const a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[];for(let d=0;d<b.length;d++){const e=a[d];for(let f=0;f<e.length;f++)c.push(b[d])}return c};
r.Wa=function(a){Dm(this);let b=[];if(typeof a==="string")Fm(this,a)&&(b=b.concat(this.h.get(Em(this,a))));else{a=Array.from(this.h.values());for(let c=0;c<a.length;c++)b=b.concat(a[c])}return b};
r.set=function(a,b){Dm(this);this.j=null;a=Em(this,a);Fm(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
r.get=function(a,b){if(!a)return b;a=this.Wa(a);return a.length>0?String(a[0]):b};
r.toString=function(){if(this.j)return this.j;if(!this.h)return"";const a=[],b=Array.from(this.h.keys());for(let d=0;d<b.length;d++){var c=b[d];const e=encodeURIComponent(String(c));c=this.Wa(c);for(let f=0;f<c.length;f++){let g=e;c[f]!==""&&(g+="="+encodeURIComponent(String(c[f])));a.push(g)}}return this.j=a.join("&")};
r.clone=function(){const a=new tm;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function Em(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function Am(a,b){b&&!a.o&&(Dm(a),a.j=null,a.h.forEach(function(c,d){const e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(Em(this,e),mb(c)),this.i=this.i+c.length))},a));
a.o=b}
r.extend=function(a){for(let b=0;b<arguments.length;b++)nm(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let L={};var Gm=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";L.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
L.Zc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Hm={pb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Im={pb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){return[].concat.apply([],a)}};
L.tf=function(){Gm?(L.mb=Uint8Array,L.Ka=Uint16Array,L.Vd=Int32Array,L.assign(L,Hm)):(L.mb=Array,L.Ka=Array,L.Vd=Array,L.assign(L,Im))};
L.tf();var Jm=!0;try{new Uint8Array(1)}catch(a){Jm=!1}
function Km(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new L.mb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;let Lm={};Lm=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};let Mm={};for(var Nm,Om=[],Pm=0;Pm<256;Pm++){Nm=Pm;for(var Qm=0;Qm<8;Qm++)Nm=Nm&1?3988292384^Nm>>>1:Nm>>>1;Om[Pm]=Nm}Mm=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Om[(a^b[d])&255];return a^-1};let Rm={};Rm={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Sm(a){for(var b=a.length;--b>=0;)a[b]=0}
var Tm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Um=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Vm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Wm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Xm=Array(576);Sm(Xm);var Ym=Array(60);Sm(Ym);var Zm=Array(512);Sm(Zm);var $m=Array(256);Sm($m);var an=Array(29);Sm(an);var bn=Array(30);Sm(bn);function cn(a,b,c,d,e){this.Id=a;this.Ie=b;this.He=c;this.we=d;this.cf=e;this.qd=a&&a.length}
var dn,en,fn;function gn(a,b){this.md=a;this.Ab=0;this.bb=b}
function hn(a,b){a.Z[a.pending++]=b&255;a.Z[a.pending++]=b>>>8&255}
function jn(a,b,c){a.ga>16-c?(a.pa|=b<<a.ga&65535,hn(a,a.pa),a.pa=b>>16-a.ga,a.ga+=c-16):(a.pa|=b<<a.ga&65535,a.ga+=c)}
function kn(a,b,c){jn(a,c[b*2],c[b*2+1])}
function ln(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function mn(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=ln(d[e]++,e))}
function nn(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.fb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ta[512]=1;a.Ra=a.Gb=0;a.Aa=a.matches=0}
function on(a){a.ga>8?hn(a,a.pa):a.ga>0&&(a.Z[a.pending++]=a.pa);a.pa=0;a.ga=0}
function pn(a,b,c){on(a);hn(a,c);hn(a,~c);L.pb(a.Z,a.window,b,c,a.pending);a.pending+=c}
function qn(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function rn(a,b,c){for(var d=a.aa[c],e=c<<1;e<=a.Pa;){e<a.Pa&&qn(b,a.aa[e+1],a.aa[e],a.depth)&&e++;if(qn(b,d,a.aa[e],a.depth))break;a.aa[c]=a.aa[e];c=e;e<<=1}a.aa[c]=d}
function sn(a,b,c){var d=0;if(a.Aa!==0){do{var e=a.Z[a.Nb+d*2]<<8|a.Z[a.Nb+d*2+1];var f=a.Z[a.Qc+d];d++;if(e===0)kn(a,f,b);else{var g=$m[f];kn(a,g+256+1,b);var h=Tm[g];h!==0&&(f-=an[g],jn(a,f,h));e--;g=e<256?Zm[e]:Zm[256+(e>>>7)];kn(a,g,c);h=Um[g];h!==0&&(e-=bn[g],jn(a,e,h))}}while(d<a.Aa)}kn(a,256,b)}
function tn(a,b){var c=b.md,d=b.bb.Id,e=b.bb.qd,f=b.bb.we,g,h=-1;a.Pa=0;a.wb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.aa[++a.Pa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Pa<2;){var k=a.aa[++a.Pa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ra--;e&&(a.Gb-=d[k*2+1])}b.Ab=h;for(g=a.Pa>>1;g>=1;g--)rn(a,c,g);k=f;do g=a.aa[1],a.aa[1]=a.aa[a.Pa--],rn(a,c,1),d=a.aa[1],a.aa[--a.wb]=g,a.aa[--a.wb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.aa[1]=k++,rn(a,c,1);while(a.Pa>=
2);a.aa[--a.wb]=a.aa[1];g=b.md;k=b.Ab;d=b.bb.Id;e=b.bb.qd;f=b.bb.Ie;var l=b.bb.He,m=b.bb.cf,n,u=0;for(n=0;n<=15;n++)a.La[n]=0;g[a.aa[a.wb]*2+1]=0;for(b=a.wb+1;b<573;b++){var p=a.aa[b];n=g[g[p*2+1]*2+1]+1;n>m&&(n=m,u++);g[p*2+1]=n;if(!(p>k)){a.La[n]++;var z=0;p>=l&&(z=f[p-l]);var D=g[p*2];a.Ra+=D*(n+z);e&&(a.Gb+=D*(d[p*2+1]+z))}}if(u!==0){do{for(n=m-1;a.La[n]===0;)n--;a.La[n]--;a.La[n+1]+=2;a.La[m]--;u-=2}while(u>0);for(n=m;n!==0;n--)for(p=a.La[n];p!==0;)d=a.aa[--b],d>k||(g[d*2+1]!==n&&(a.Ra+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),p--)}mn(c,h,a.La)}
function un(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function vn(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do kn(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(kn(a,l,a.ja),g--),kn(a,16,a.ja),jn(a,g-3,2)):g<=10?(kn(a,17,a.ja),jn(a,g-3,3)):(kn(a,18,a.ja),jn(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function wn(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var xn=!1;function yn(a,b,c){a.Z[a.Nb+a.Aa*2]=b>>>8&255;a.Z[a.Nb+a.Aa*2+1]=b&255;a.Z[a.Qc+a.Aa]=c&255;a.Aa++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[($m[c]+256+1)*2]++,a.fb[(b<256?Zm[b]:Zm[256+(b>>>7)])*2]++);return a.Aa===a.Sb-1}
;function zn(a,b){a.msg=Rm[b];return b}
function An(a){for(var b=a.length;--b>=0;)a[b]=0}
function Bn(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(L.pb(a.output,b.Z,b.Ub,c,a.Cb),a.Cb+=c,b.Ub+=c,a.cd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Ub=0))}
function Cn(a,b){var c=a.xa>=0?a.xa:-1,d=a.v-a.xa,e=0;if(a.level>0){a.K.Jc===2&&(a.K.Jc=wn(a));tn(a,a.oc);tn(a,a.hc);un(a,a.ta,a.oc.Ab);un(a,a.fb,a.hc.Ab);tn(a,a.jd);for(e=18;e>=3&&a.ja[Wm[e]*2+1]===0;e--);a.Ra+=3*(e+1)+5+5+4;var f=a.Ra+3+7>>>3;var g=a.Gb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)jn(a,b?1:0,3),pn(a,c,d);else if(a.strategy===4||g===f)jn(a,2+(b?1:0),3),sn(a,Xm,Ym);else{jn(a,4+(b?1:0),3);c=a.oc.Ab+1;d=a.hc.Ab+1;e+=1;jn(a,c-257,5);jn(a,d-1,5);jn(a,e-4,4);for(f=0;f<e;f++)jn(a,
a.ja[Wm[f]*2+1],3);vn(a,a.ta,c-1);vn(a,a.fb,d-1);sn(a,a.ta,a.fb)}nn(a);b&&on(a);a.xa=a.v;Bn(a.K)}
function N(a,b){a.Z[a.pending++]=b}
function Dn(a,b){a.Z[a.pending++]=b>>>8&255;a.Z[a.pending++]=b&255}
function En(a,b){var c=a.td,d=a.v,e=a.ya,f=a.vd,g=a.v>a.ma-262?a.v-(a.ma-262):0,h=a.window,k=a.cb,l=a.Ja,m=a.v+258,n=h[d+e-1],u=h[d+e];a.ya>=a.pd&&(c>>=2);f>a.B&&(f=a.B);do{var p=b;if(h[p+e]===u&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.zb=b;e=p;if(p>=f)break;n=h[d+e-1];u=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function Fn(a){var b=a.ma,c;do{var d=a.Td-a.B-a.v;if(a.v>=b+(b-262)){L.pb(a.window,a.window,b,b,0);a.zb-=b;a.v-=b;a.xa-=b;var e=c=a.nc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ja[--e],a.Ja[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.oa===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,L.pb(c,e.input,e.jb,g,f),e.state.wrap===1?e.I=Lm(e.I,c,g,f):e.state.wrap===2&&(e.I=Mm(e.I,c,g,f)),e.jb+=g,e.lb+=g,c=g);a.B+=c;if(a.B+a.la>=3)for(d=a.v-a.la,a.P=a.window[d],
a.P=(a.P<<a.Oa^a.window[d+1])&a.Na;a.la&&!(a.P=(a.P<<a.Oa^a.window[d+3-1])&a.Na,a.Ja[d&a.cb]=a.head[a.P],a.head[a.P]=d,d++,a.la--,a.B+a.la<3););}while(a.B<262&&a.K.oa!==0)}
function Gn(a,b){for(var c;;){if(a.B<262){Fn(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.Oa^a.window[a.v+3-1])&a.Na,c=a.Ja[a.v&a.cb]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.ma-262&&(a.T=En(a,c));if(a.T>=3)if(c=yn(a,a.v-a.zb,a.T-3),a.B-=a.T,a.T<=a.Sc&&a.B>=3){a.T--;do a.v++,a.P=(a.P<<a.Oa^a.window[a.v+3-1])&a.Na,a.Ja[a.v&a.cb]=a.head[a.P],a.head[a.P]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.P=a.window[a.v],a.P=(a.P<<a.Oa^a.window[a.v+1])&a.Na;else c=yn(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(Cn(a,!1),a.K.S===0))return 1}a.la=a.v<2?a.v:2;return b===4?(Cn(a,!0),a.K.S===0?3:4):a.Aa&&(Cn(a,!1),a.K.S===0)?1:2}
function Hn(a,b){for(var c,d;;){if(a.B<262){Fn(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.Oa^a.window[a.v+3-1])&a.Na,c=a.Ja[a.v&a.cb]=a.head[a.P],a.head[a.P]=a.v);a.ya=a.T;a.yd=a.zb;a.T=2;c!==0&&a.ya<a.Sc&&a.v-c<=a.ma-262&&(a.T=En(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.zb>4096)&&(a.T=2));if(a.ya>=3&&a.T<=a.ya){d=a.v+a.B-3;c=yn(a,a.v-1-a.yd,a.ya-3);a.B-=a.ya-1;a.ya-=2;do++a.v<=d&&(a.P=(a.P<<a.Oa^a.window[a.v+3-1])&a.Na,a.Ja[a.v&a.cb]=a.head[a.P],a.head[a.P]=a.v);
while(--a.ya!==0);a.hb=0;a.T=2;a.v++;if(c&&(Cn(a,!1),a.K.S===0))return 1}else if(a.hb){if((c=yn(a,0,a.window[a.v-1]))&&Cn(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.hb=1,a.v++,a.B--}a.hb&&(yn(a,0,a.window[a.v-1]),a.hb=0);a.la=a.v<2?a.v:2;return b===4?(Cn(a,!0),a.K.S===0?3:4):a.Aa&&(Cn(a,!1),a.K.S===0)?1:2}
function In(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){Fn(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=yn(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=yn(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(Cn(a,!1),a.K.S===0))return 1}a.la=0;return b===4?(Cn(a,!0),a.K.S===0?3:4):
a.Aa&&(Cn(a,!1),a.K.S===0)?1:2}
function Jn(a,b){for(var c;;){if(a.B===0&&(Fn(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=yn(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(Cn(a,!1),a.K.S===0))return 1}a.la=0;return b===4?(Cn(a,!0),a.K.S===0?3:4):a.Aa&&(Cn(a,!1),a.K.S===0)?1:2}
function Kn(a,b,c,d,e){this.Oe=a;this.bf=b;this.hf=c;this.af=d;this.Me=e}
var Ln;Ln=[new Kn(0,0,0,0,function(a,b){var c=65535;for(c>a.Ba-5&&(c=a.Ba-5);;){if(a.B<=1){Fn(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.xa+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,Cn(a,!1),a.K.S===0)return 1;if(a.v-a.xa>=a.ma-262&&(Cn(a,!1),a.K.S===0))return 1}a.la=0;if(b===4)return Cn(a,!0),a.K.S===0?3:4;a.v>a.xa&&Cn(a,!1);return 1}),
new Kn(4,4,8,4,Gn),new Kn(4,5,16,8,Gn),new Kn(4,6,32,32,Gn),new Kn(4,4,16,16,Hn),new Kn(8,16,32,32,Hn),new Kn(8,16,128,128,Hn),new Kn(8,32,128,256,Hn),new Kn(32,128,258,1024,Hn),new Kn(32,258,258,4096,Hn)];
function Mn(){this.K=null;this.status=0;this.Z=null;this.wrap=this.pending=this.Ub=this.Ba=0;this.G=null;this.Ea=0;this.method=8;this.yb=-1;this.cb=this.ed=this.ma=0;this.window=null;this.Td=0;this.head=this.Ja=null;this.vd=this.pd=this.strategy=this.level=this.Sc=this.td=this.ya=this.B=this.zb=this.v=this.hb=this.yd=this.T=this.xa=this.Oa=this.Na=this.Oc=this.nc=this.P=0;this.ta=new L.Ka(1146);this.fb=new L.Ka(122);this.ja=new L.Ka(78);An(this.ta);An(this.fb);An(this.ja);this.jd=this.hc=this.oc=
null;this.La=new L.Ka(16);this.aa=new L.Ka(573);An(this.aa);this.wb=this.Pa=0;this.depth=new L.Ka(573);An(this.depth);this.ga=this.pa=this.la=this.matches=this.Gb=this.Ra=this.Nb=this.Aa=this.Sb=this.Qc=0}
function Nn(a,b){if(!a||!a.state||b>5||b<0)return a?zn(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return zn(a,a.S===0?-5:-2);c.K=a;var d=c.yb;c.yb=b;if(c.status===42)if(c.wrap===2)a.I=0,N(c,31),N(c,139),N(c,8),c.G?(N(c,(c.G.text?1:0)+(c.G.Xa?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),N(c,c.G.time&255),N(c,c.G.time>>8&255),N(c,c.G.time>>16&255),N(c,c.G.time>>24&255),N(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),N(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(N(c,c.G.extra.length&255),N(c,c.G.extra.length>>8&255)),c.G.Xa&&(a.I=Mm(a.I,c.Z,c.pending,0)),c.Ea=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),N(c,3),c.status=113);else{var e=8+(c.ed-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Dn(c,e+(31-e%31));c.v!==0&&(Dn(c,a.I>>>16),Dn(c,a.I&65535));a.I=1}if(c.status===69)if(c.G.extra){for(e=c.pending;c.Ea<(c.G.extra.length&65535)&&(c.pending!==c.Ba||
(c.G.Xa&&c.pending>e&&(a.I=Mm(a.I,c.Z,c.pending-e,e)),Bn(a),e=c.pending,c.pending!==c.Ba));)N(c,c.G.extra[c.Ea]&255),c.Ea++;c.G.Xa&&c.pending>e&&(a.I=Mm(a.I,c.Z,c.pending-e,e));c.Ea===c.G.extra.length&&(c.Ea=0,c.status=73)}else c.status=73;if(c.status===73)if(c.G.name){e=c.pending;do{if(c.pending===c.Ba&&(c.G.Xa&&c.pending>e&&(a.I=Mm(a.I,c.Z,c.pending-e,e)),Bn(a),e=c.pending,c.pending===c.Ba)){var f=1;break}f=c.Ea<c.G.name.length?c.G.name.charCodeAt(c.Ea++)&255:0;N(c,f)}while(f!==0);c.G.Xa&&c.pending>
e&&(a.I=Mm(a.I,c.Z,c.pending-e,e));f===0&&(c.Ea=0,c.status=91)}else c.status=91;if(c.status===91)if(c.G.comment){e=c.pending;do{if(c.pending===c.Ba&&(c.G.Xa&&c.pending>e&&(a.I=Mm(a.I,c.Z,c.pending-e,e)),Bn(a),e=c.pending,c.pending===c.Ba)){f=1;break}f=c.Ea<c.G.comment.length?c.G.comment.charCodeAt(c.Ea++)&255:0;N(c,f)}while(f!==0);c.G.Xa&&c.pending>e&&(a.I=Mm(a.I,c.Z,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.G.Xa?(c.pending+2>c.Ba&&Bn(a),c.pending+2<=c.Ba&&(N(c,a.I&
255),N(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(Bn(a),a.S===0)return c.yb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return zn(a,-5);if(c.status===666&&a.oa!==0)return zn(a,-5);if(a.oa!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?Jn(c,b):c.strategy===3?In(c,b):Ln[c.level].Me(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.yb=-1),0;if(d===2&&(b===1?(jn(c,2,3),kn(c,256,Xm),c.ga===16?(hn(c,c.pa),c.pa=0,c.ga=0):c.ga>=8&&
(c.Z[c.pending++]=c.pa&255,c.pa>>=8,c.ga-=8)):b!==5&&(jn(c,0,3),pn(c,0,0),b===3&&(An(c.head),c.B===0&&(c.v=0,c.xa=0,c.la=0))),Bn(a),a.S===0))return c.yb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(N(c,a.I&255),N(c,a.I>>8&255),N(c,a.I>>16&255),N(c,a.I>>24&255),N(c,a.lb&255),N(c,a.lb>>8&255),N(c,a.lb>>16&255),N(c,a.lb>>24&255)):(Dn(c,a.I>>>16),Dn(c,a.I&65535));Bn(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;let On={};On=function(){this.input=null;this.lb=this.oa=this.jb=0;this.output=null;this.cd=this.S=this.Cb=0;this.msg="";this.state=null;this.Jc=2;this.I=0};var Pn=Object.prototype.toString;
function Qn(a){if(!(this instanceof Qn))return new Qn(a);a=this.options=L.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new On;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=zn(b,-2);else{e===8&&(e=9);var k=new Mn;b.state=k;k.K=b;k.wrap=h;k.G=null;k.ed=e;k.ma=1<<k.ed;k.cb=k.ma-1;k.Oc=f+7;k.nc=1<<k.Oc;k.Na=k.nc-1;k.Oa=~~((k.Oc+3-1)/3);k.window=new L.mb(k.ma*2);k.head=new L.Ka(k.nc);k.Ja=new L.Ka(k.ma);k.Sb=1<<f+6;k.Ba=k.Sb*4;k.Z=new L.mb(k.Ba);k.Nb=1*k.Sb;k.Qc=3*k.Sb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.lb=b.cd=0;b.Jc=2;c=b.state;c.pending=0;c.Ub=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.yb=0;if(!xn){d=Array(16);for(f=g=0;f<28;f++)for(an[f]=g,e=0;e<1<<Tm[f];e++)$m[g++]=f;$m[g-1]=f;for(f=g=0;f<16;f++)for(bn[f]=g,e=0;e<1<<Um[f];e++)Zm[g++]=f;for(g>>=7;f<30;f++)for(bn[f]=g<<7,e=0;e<1<<Um[f]-7;e++)Zm[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Xm[e*2+1]=8,e++,d[8]++;for(;e<=255;)Xm[e*2+1]=9,e++,d[9]++;for(;e<=279;)Xm[e*2+1]=7,e++,d[7]++;for(;e<=287;)Xm[e*2+1]=8,e++,d[8]++;mn(Xm,287,d);for(e=0;e<30;e++)Ym[e*2+1]=5,Ym[e*2]=ln(e,5);dn=new cn(Xm,Tm,257,286,15);en=new cn(Ym,
Um,0,30,15);fn=new cn([],Vm,0,19,7);xn=!0}c.oc=new gn(c.ta,dn);c.hc=new gn(c.fb,en);c.jd=new gn(c.ja,fn);c.pa=0;c.ga=0;nn(c);c=0}else c=zn(b,-2);c===0&&(b=b.state,b.Td=2*b.ma,An(b.head),b.Sc=Ln[b.level].bf,b.pd=Ln[b.level].Oe,b.vd=Ln[b.level].hf,b.td=Ln[b.level].af,b.v=0,b.xa=0,b.B=0,b.la=0,b.T=b.ya=2,b.hb=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(Rm[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.G=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Km(a.dictionary):
Pn.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=Lm(a.I,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(An(l.head),l.v=0,l.xa=0,l.la=0),c=new L.mb(l.ma),L.pb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.oa;d=a.jb;e=a.input;a.oa=g;a.jb=0;a.input=f;for(Fn(l);l.B>=3;){f=l.v;g=l.B-2;do l.P=(l.P<<l.Oa^l.window[f+3-1])&l.Na,l.Ja[f&l.cb]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.B=2;Fn(l)}l.v+=l.B;l.xa=l.v;l.la=l.B;l.B=0;l.T=l.ya=2;l.hb=0;a.jb=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Rm[b]);this.Nh=!0}}
Qn.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Km(a):Pn.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.jb=0;c.oa=c.input.length;do{c.S===0&&(c.output=new L.mb(d),c.Cb=0,c.S=d);a=Nn(c,e);if(a!==1&&a!==0)return Rn(this,a),this.ended=!0,!1;if(c.S===0||c.oa===0&&(e===4||e===2))if(this.options.to==="string"){var f=L.Zc(c.output,c.Cb);b=f;f=f.length;if(f<65537&&(b.subarray&&Jm||!b.subarray))b=
String.fromCharCode.apply(null,L.Zc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=L.Zc(c.output,c.Cb),this.chunks.push(b)}while((c.oa>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=zn(c,-2):(c.state=null,a=d===113?zn(c,-3):0)):a=-2,Rn(this,a),this.ended=!0,a===0;e===2&&(Rn(this,0),c.S=0);return!0};
function Rn(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):L.nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function Sn(a){var b=b||{};b.gzip=!0;b=new Qn(b);b.push(a,!0);if(b.err)throw b.msg||Rm[b.err];return b.result}
;function Tn(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Xa(a):null:null}
function Un(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?Ha(a):null:null}
;function Vn(a){return Ha(a===null?"null":a===void 0?"undefined":a)}
;var Wn=class{constructor(a){this.name=a}};var Xn=new Wn("rawColdConfigGroup");var Yn=new Wn("rawHotConfigGroup");var Zn=class extends G{constructor(a){super(a)}};var $n=class extends G{constructor(a){super(a)}setTrackingParams(a){return E(this,1,yd(a,!1))}};var ao=new Wn("continuationCommand");var bo=new Wn("webCommandMetadata");var co=new Wn("signalServiceEndpoint");var eo={Yf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Vf:"EMBEDDED_PLAYER_MODE_DEFAULT",Xf:"EMBEDDED_PLAYER_MODE_PFP",Wf:"EMBEDDED_PLAYER_MODE_PFL"};var fo=new Wn("feedbackEndpoint");var Gd={ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED",Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RETURNED_TO_VIDEO_AFTER_FAILED_ATTEMPT_TO_BACKGROUND",wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_AUTO_ZOOM",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_CONTROL",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_TREATMENT",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DISABLE_PLAYER_OPEN_ON_FULLSCREEN",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_RECONNECT_WITH_RETRY",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SINGLE_COLUMN_GRID_TRIGGERED",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_CONNECTION_TIMEOUT",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_GHOST_LOADING_ELIGIBLE",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_STREAMED_GET_WATCH_SUPPORTED"};var go=new Wn("shareEndpoint"),ho=new Wn("shareEntityEndpoint"),io=new Wn("shareEntityServiceEndpoint"),jo=new Wn("webPlayerShareEntityServiceEndpoint");var ko=new Wn("playlistEditEndpoint");var lo=new Wn("modifyChannelNotificationPreferenceEndpoint");var mo=new Wn("undoFeedbackEndpoint");var no=new Wn("unsubscribeEndpoint");var oo=new Wn("subscribeEndpoint");function po(){var a=qo;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",a)}
function ro(a){v("yt.ads.biscotti.lastId_",a)}
;function so(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;const to=t.window,uo=to?.yt?.config_||to?.ytcfg?.data_||{};v("yt.config_",uo);function vo(...a){so(uo,arguments)}
function O(a,b){return a in uo?uo[a]:b}
function wo(a){const b=uo.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;const xo=[];function yo(a){xo.forEach(b=>b(a))}
function P(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zo(b)}}:a}
function zo(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),vo("ERRORS",b));yo(a)}
function Ao(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=O("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),vo("ERRORS",f))}
;const Bo=/^[\w.]*$/,Co={q:!0,search_query:!0};function Do(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(h.length===1&&h[0]||h.length===2)try{const k=Eo(h[0]||""),l=Eo(h[1]||"");if(k in c){const m=c[k];Array.isArray(m)?nb(m,l):c[k]=[m,l]}else c[k]=l}catch(k){var d=k,e=h[0];const l=String(Do);d.args=[{key:e,value:h[1],query:a,method:Fo===l?"unchanged":l}];Co.hasOwnProperty(e)||Ao(d)}}return c}
const Fo=String(Do);function Go(a){const b=[];ah(a,(c,d)=>{const e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];gb(c,f=>{f==""?b.push(e):b.push(`${e}=${encodeURIComponent(String(f))}`)})});
return b.join("&")}
function Ho(a){a.charAt(0)==="?"&&(a=a.substring(1));return Do(a,"&")}
function Io(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Ho(a.length>1?a[1]:a[0])):{}}
function Jo(a,b){return Ko(a,b||{},!0)}
function Ko(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ho(e[1]||"");for(const f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Fb(a,e)+d}
function Lo(a){if(!b)var b=window.location.href;const c=a.match(wb)[1]||null,d=yb(a);c&&d?(a=a.match(wb),b=b.match(wb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?yb(b)===d&&(Number(b.match(wb)[4]||null)||null)===(Number(a.match(wb)[4]||null)||null):!0;return a}
function Eo(a){return a&&a.match(Bo)?a:ub(a)}
;function Mo(a=w("yt.ads.biscotti.lastId_")||""){var b=No,c=Object,d=c.assign;a:{try{var e=b.h.top.location.href}catch(Y){e=2;break a}e=e?e===b.i.location.href?0:1:2}e={dt:El,flash:"0",frm:e};try{e.u_tz=-(new Date).getTimezoneOffset();try{var f=xl.history.length}catch(Y){f=0}e.u_his=f;e.u_h=xl.screen?.height;e.u_w=xl.screen?.width;e.u_ah=xl.screen?.availHeight;e.u_aw=xl.screen?.availWidth;e.u_cd=xl.screen?.colorDepth}catch(Y){}f=b.h;let g,h,k,l,m,n,u,p,z;try{var D=f.screenX;g=f.screenY}catch(Y){}try{h=
f.outerWidth,k=f.outerHeight}catch(Y){}try{l=f.innerWidth,m=f.innerHeight}catch(Y){}try{n=f.screenLeft,u=f.screenTop}catch(Y){}try{l=f.innerWidth,m=f.innerHeight}catch(Y){}try{p=f.screen.availWidth,z=f.screen.availTop}catch(Y){}D=[n,u,D,g,p,z,h,k,l,m];try{var B=(b.h.top||window).document,M=B.compatMode=="CSS1Compat"?B.documentElement:B.body;var K=(new $g(M.clientWidth,M.clientHeight)).round()}catch(Y){K=new $g(-12245933,-12245933)}M=K;K=new Ml;"SVGElement"in t&&"createElementNS"in t.document&&K.set(0);
B=Cl();B["allow-top-navigation-by-user-activation"]&&K.set(1);B["allow-popups-to-escape-sandbox"]&&K.set(2);t.crypto&&t.crypto.subtle&&K.set(3);"TextDecoder"in t&&"TextEncoder"in t&&K.set(4);K=Ll(K);B=M.height;M=M.width;D=D.join();b=b.i;c=d.call(c,e,{bc:K,bih:B,biw:M,brdim:D,vis:b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]??0,wgl:!!xl.WebGLRenderingContext});c.ca_type="image";a&&(c.bid=a);return c}
const No=new class{constructor(a,b){this.h=a;this.i=b}}(window,window.document);v("yt.ads_.signals_.getAdSignalsString",function(a){return Go(Mo(a))});sa();navigator.userAgent.indexOf(" (CrKey ");const Oo="XMLHttpRequest"in t?()=>new XMLHttpRequest:null;
function Po(){if(!Oo)return null;const a=Oo();return"open"in a?a:null}
function Qo(a){switch(Ro(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function Ro(a){return a&&"status"in a?a.status:-1}
;function So(a,b){typeof a==="function"&&(a=P(a));return window.setTimeout(a,b)}
;var To="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[...To];function R(a){a=Uo(a);return typeof a==="string"&&a==="false"?!1:!!a}
function I(a,b){a=Uo(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Vo(){const a=Uo("html5_web_po_experiment_ids");return Array.isArray(a)?ib(a,b=>Number(b||0)):[Number(a||0)]}
function Wo(a){a=Uo(a);return a!==void 0?String(a):""}
function Uo(a){return O("EXPERIMENT_FLAGS",{})[a]}
function Xo(){const a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=O("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&b[d]===void 0&&a.push({key:d,value:String(c[d])});return a}
;const Yo={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Zo=["app","debugcss","debugjs","expflag","force_ad_params","force_ad_encrypted","force_viral_ad_response_params","forced_experiments","innertube_snapshots","innertube_goldens","internalcountrycode","internalipoverride","absolute_experiments","conditional_experiments","sbb","sr_bns_address",...To];let $o=!1;
function ap(a,b,c="GET",d="",e,f,g,h=!1,k){const l=Po();if(!l)return null;const m=()=>{(l&&"readyState"in l?l.readyState:0)===4&&b&&P(b)(l)};
"onloadend"in l?l.addEventListener("loadend",m,!1):l.onreadystatechange=m;R("debug_forward_web_query_parameters")&&(a=bp(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=cp(a,e))for(const n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k&&"onprogress"in l&&(l.onprogress=()=>{k(l.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Ao(n)}}l.send(d);return l}
function cp(a,b={}){const c=Lo(a),d=O("INNERTUBE_CLIENT_NAME"),e=R("web_ajax_ignore_global_headers_if_set");for(const h in Yo){let k=O(Yo[h]);const l=h==="X-Goog-AuthUser"||h==="X-Goog-PageId";h!=="X-Goog-Visitor-Id"||k||(k=O("VISITOR_DATA"));var f;if(!(f=!k)){if(!(f=c||(yb(a)?!1:!0))){f=a;var g;if(g=R("add_auth_headers_to_remarketing_google_dot_com_ping")&&h==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))g=yb(f),g=g!==null?g.split(".").reverse():null,g=g===null?
!1:g[1]==="google"?!0:g[2]==="google"?g[0]==="au"&&g[1]==="com"?!0:g[0]==="uk"&&g[1]==="co"?!0:!1:!1;g&&(f=zb(f)||"",f=f.split("/"),f="/"+(f.length>1?f[1]:""),g=f==="/pagead");f=g?!0:!1}f=!f}f||e&&b[h]!==void 0||d==="TVHTML5_UNPLUGGED"&&l||(b[h]=k)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!yb(a)){let h;try{h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch{}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&yb(a)||(b["X-YouTube-Ad-Signals"]=Go(Mo()));return b}
function dp(a,b){b.method="POST";b.postParams||(b.postParams={});return ep(a,b)}
function ep(a,b){const c=b.format||"JSON";a=fp(a,b);var d=gp(a,b);let e=!1,f;const g=hp(a,h=>{if(!e){e=!0;f&&window.clearTimeout(f);var k=Qo(h),l=null,m=400<=h.status&&h.status<500,n=500<=h.status&&h.status<600;if(k||m||n)l=ip(a,c,h,b.convertToSafeHtml);k&&(k=jp(c,h,l));l=l||{};m=b.context||t;k?b.onSuccess&&b.onSuccess.call(m,h,l):b.onError&&b.onError.call(m,h,l);b.onFinish&&b.onFinish.call(m,h,l)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){const h=b.onTimeout;f=So(()=>{e||(e=!0,g.abort(),window.clearTimeout(f),h.call(b.context||t,g))},d)}return g}
function fp(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Jo(a,b);return a}
function gp(a,b){const c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=O("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||yb(a)&&!b.withCredentials&&yb(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Ho(e),lh(e,f),e=b.postBodyFormat&&
b.postBodyFormat==="JSON"?JSON.stringify(e):Eb(e));f=e||f&&!eh(f);!$o&&f&&b.method!=="POST"&&($o=!0,zo(Error("AJAX request with postData should use POST")));return e}
function ip(a,b,c,d){let e=null;switch(b){case "JSON":let f;try{f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ao(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?kp(a):null)e={},gb(a.getElementsByTagName("*"),g=>{e[g.tagName]=lp(g)})}d&&mp(e);
return e}
function mp(a){if(la(a))for(const c in a){var b;(b=c==="html_content")||(b=c.length-5,b=b>=0&&c.indexOf("_html",b)==b);if(b){b=a[c];const d=Fa();b=d?d.createHTML(b):b;a[c]=new Ua(b)}else mp(a[c])}}
function jp(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function kp(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function lp(a){let b="";gb(a.childNodes,c=>{b+=c.nodeValue});
return b}
function bp(a){var b=window.location.search,c=yb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Lo(a)&&(c=document.location.hostname);var d=zb(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;const e=Ho(b),f={};gb(Zo,g=>{e[g]&&(f[g]=e[g])});
return Ko(a,f||{},!1)}
var hp=ap;const np=[{Tc:a=>`Cannot read property '${a.key}'`,
yc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Tc:a=>`Cannot call '${a.key}'`,
yc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Tc:a=>`${a.key} is not defined`,
yc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var qp={Ya:[],Va:[{callback:op,weight:500},{callback:pp,weight:500}]};function op(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function pp(a){if(!a.stack)return!0;const b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function rp(){if(!sp){var a=sp=new tp;a.Ya.length=0;a.Va.length=0;up(a,qp)}return sp}
function up(a,b){b.Ya&&a.Ya.push.apply(a.Ya,b.Ya);b.Va&&a.Va.push.apply(a.Va,b.Va)}
var tp=class{constructor(){this.Va=[];this.Ya=[]}},sp;const vp=new J;function wp(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=xp(d);if(e===Infinity)break;const f=e>>3;switch(e&7){case 0:e=xp(d);if(f===2)return e;break;case 1:if(f===2)return;c+=8;break;case 2:e=xp(d);if(f===2)return a.substr(c,e);c+=e;break;case 5:if(f===2)return;c+=4;break;default:return}}while(c<b)}
function xp(a){let b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function yp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=zp(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=wp(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?zp(`${f}.ve`,g,h,k):0;d+=f;d+=zp(e,a[e],b,c);if(d>500)break}}else c[b]=Ap(a),d+=c[b].length;else c[b]=Ap(a),d+=c[b].length;return d}
function zp(a,b,c,d){c+=`.${a}`;a=Ap(b);d[c]=a;return c.length+a.length}
function Ap(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function Bp(){if(!t.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return t.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":t.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":t.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":t.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
var Cp=class{constructor(a){this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",b=>{b.preventDefault();this.i=b});
a.addEventListener("appinstalled",()=>{this.h=!0},{once:!0})}};function Dp(a){const b={};var c=[];"USER_SESSION_ID"in uo&&c.push({key:"u",value:O("USER_SESSION_ID")});if(c=Tg(c))b.Authorization=c,c=a=a?.sessionIndex,c===void 0&&(c=Number(O("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in uo||(b["X-Origin"]=window.location.origin),a===void 0&&"DELEGATED_SESSION_ID"in uo&&(b["X-Goog-PageId"]=O("DELEGATED_SESSION_ID"));return b}
var Ep=class{constructor(){this.Jd=!0}};var Fp={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Gp(a,b,c,d="youtube.com",e=!1){Qg.set(""+a,b,{qc:c,path:"/",domain:d,secure:e})}
function Hp(a){return Qg.get(""+a,void 0)}
function Ip(a,b="/",c="youtube.com"){Qg.remove(""+a,b,c)}
function Jp(){if(!Qg.isEnabled())return!1;if(Qg.h.cookie)return!0;Qg.set("TESTCOOKIESENABLED","1",{qc:60});if(Qg.get("TESTCOOKIESENABLED")!=="1")return!1;Qg.remove("TESTCOOKIESENABLED");return!0}
;const Kp=w("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",Kp);function Lp(){Mp||(Mp=new Np);return Mp}
function Op(a){return!!((Pp(`f${Math.floor(a/31)+1}`)||0)&1<<a%31)}
function Qp(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error(`ExpectedRegexMatch: ${a}`);}
function Rp(a){if(!/^\w+$/.test(a))throw Error(`ExpectedRegexMismatch: ${a}`);}
function Pp(a){a=Kp[a]!==void 0?Kp[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
var Np=class{constructor(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");const a=Hp(this.h);a&&this.parse(a)}get(a,b){Rp(a);Qp(a);a=Kp[a]!==void 0?Kp[a].toString():null;return a!=null?a:b?b:""}set(a,b){Rp(a);Qp(a);if(b==null)throw Error("ExpectedNotNull");Kp[a]=b.toString()}remove(a){Rp(a);Qp(a);delete Kp[a]}clear(){for(const a in Kp)delete Kp[a]}parse(a){a=decodeURIComponent(a).split("&");for(let c=0;c<a.length;c++){var b=a[c].split("=");const d=b[0];(b=
b[1])&&(Kp[d]=b.toString())}}},Mp;const Sp={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Tp={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Up(){const a=t.navigator;return a?a.connection:void 0}
function Vp(){var a=Up();if(a){var b=Sp[a.type||"unknown"]||"CONN_UNKNOWN";a=Sp[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Wp(){var a=Up();if(a?.effectiveType)return Tp.hasOwnProperty(a.effectiveType)?Tp[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;var S=class extends Error{constructor(a,...b){super(a);this.args=[...b];Object.setPrototypeOf(this,new.target.prototype)}};function Xp(){try{return Yp(),!0}catch(a){return!1}}
function Yp(a="unknown"){if(O("DATASYNC_ID")!==void 0)return O("DATASYNC_ID");throw new S("Datasync ID not set",a);}
;function Zp(a,b){return Hl.Ta(a,0,b)}
var $p=class{ra(a,b){return this.Ta(a,1,b)}H(a){const b=w("yt.scheduler.instance.addImmediateJob");b?b(a):a()}};var aq=I("web_emulated_idle_callback_delay",300);const bq=1E3/60-3,cq=[8,5,4,3,2,1,0];function dq(a,b){try{b()}catch(c){a.wa(c)}}
function eq(a){if(a.i[8].length){if(a.V)return 4;if(fq(a))return 3}for(let b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?fq(a)?3:2:1;return 0}
function gq(a){a.R.length=0;for(let b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
function fq(a){return!a.isHidden()&&a.na}
function hq(a){for(const b of cq)if(a.i[b].length)return!0;return!1}
function iq(a,b,c){a.V&&a.A===4&&a.h||a.stop();a.u=!0;b=sa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(g){e.wa(g)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&dq(a,f);d=a.ia?0:1;d=a.o>d?a.o:d;if(!(sa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--){const g=c.i[e];for(;g.length;){const h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}}c=null}c&&dq(a,c)}while(c&&sa()<b)}a.u=!1;jq(a);a.D=bq;hq(a)&&a.start()}
function kq(a){a.stop();a.u=!0;var b=sa();const c=a.i[8];for(;c.length;){const d=c.shift(),e=a.j[d];delete a.j[d];e&&dq(a,e)}jq(a);a.u=!1;hq(a)&&a.start();b=sa()-b;a.D-=b}
function jq(a){for(let b=0,c=a.R.length;b<c;b++){const d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
var lq=class extends y{constructor(a={}){super();this.i=[];this.j={};this.fa=this.h=0;this.ba=this.u=!1;this.R=[];this.V=this.ia=!1;for(const b of cq)this.i[b]=[];this.o=0;this.Xd=a.timeout||1;this.D=bq;this.A=0;this.za=this.Zd.bind(this);this.Wd=this.ce.bind(this);this.Sa=this.Ha.bind(this);this.Jb=this.Yd.bind(this);this.Ic=this.be.bind(this);this.Da=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.na=a.useRaf!==!1&&!!window.requestAnimationFrame)&&
document.addEventListener("visibilitychange",this.za)}H(a){const b=sa();dq(this,a);a=sa()-b;this.u||(this.D-=a)}Ta(a,b,c){++this.fa;if(b===10)return this.H(a),this.fa;const d=this.fa;this.j[d]=a;this.u&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.ba||this.u||(this.h!==0&&eq(this)!==this.A&&this.stop(),this.start()));return d}sa(a){delete this.j[a]}isHidden(){return!!document.hidden||!1}wa(a){const b=w("yt.logging.errors.log");b&&b(a)}Yd(a){let b=void 0;a&&(b=a.timeRemaining());this.ia=
!0;iq(this,b);this.ia=!1}ce(){iq(this)}Ha(){kq(this)}be(a){this.V=!0;const b=eq(this);b===4&&b!==this.A&&(this.stop(),this.start());iq(this,void 0,a);this.V=!1}Zd(){this.isHidden()||kq(this);this.h&&(this.stop(),this.start())}start(){this.ba=!1;if(this.h===0)switch(this.A=eq(this),this.A){case 1:var a=this.Jb;this.h=this.Da?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,aq);break;case 2:this.h=window.setTimeout(this.Wd,this.Xd);break;case 3:this.h=window.requestAnimationFrame(this.Ic);
break;case 4:this.h=window.setTimeout(this.Sa,0)}}pause(){this.stop();this.ba=!0}stop(){if(this.h){switch(this.A){case 1:var a=this.h;this.Da?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}}X(){gq(this);this.stop();this.na&&document.removeEventListener("visibilitychange",this.za);super.X()}};const mq=w("yt.scheduler.instance.timerIdMap_")||{},nq=I("kevlar_tuner_scheduler_soft_state_timer_ms",800);let oq=0,pq=0;function qq(){let a=w("ytglobal.schedulerInstanceInstance_");if(!a||a.F)a=new lq(O("scheduler")||{}),v("ytglobal.schedulerInstanceInstance_",a);return a}
function rq(){sq();const a=w("ytglobal.schedulerInstanceInstance_");a&&(Lb(a),v("ytglobal.schedulerInstanceInstance_",null))}
function sq(){gq(qq());for(const a in mq)mq.hasOwnProperty(a)&&delete mq[Number(a)]}
function tq(a,b,c){if(!c)return c=c===void 0,-qq().Ta(a,b,c);const d=window.setTimeout(()=>{const e=qq().Ta(a,b);mq[d]=e},c);
return d}
function uq(a){qq().H(a)}
function vq(a){const b=qq();if(a<0)b.sa(-a);else{var c=mq[a];c?(b.sa(c),delete mq[a]):window.clearTimeout(a)}}
function wq(){xq()}
function xq(){window.clearTimeout(oq);qq().start()}
function yq(){qq().pause();window.clearTimeout(oq);oq=window.setTimeout(wq,nq)}
function zq(){window.clearTimeout(pq);pq=window.setTimeout(()=>{Aq(0)},nq)}
function Aq(a){zq();var b=qq();b.o=a;b.start()}
function Bq(a){zq();var b=qq();b.o>a&&(b.o=a,b.start())}
function Cq(){window.clearTimeout(pq);var a=qq();a.o=0;a.start()}
;function Dq(){Eq.instance||(Eq.instance=new Eq);return Eq.instance}
var Eq=class extends $p{Ta(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);const d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):So(a,c||0)}sa(a){if(a===void 0||!Number.isNaN(Number(a))){var b=w("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=w("yt.scheduler.instance.start");a&&a()}pause(){const a=w("yt.scheduler.instance.pause");a&&a()}},Hl=Dq();
w("yt.scheduler.initialized")||(v("yt.scheduler.instance.dispose",rq),v("yt.scheduler.instance.addJob",tq),v("yt.scheduler.instance.addImmediateJob",uq),v("yt.scheduler.instance.cancelJob",vq),v("yt.scheduler.instance.cancelAllJobs",sq),v("yt.scheduler.instance.start",xq),v("yt.scheduler.instance.pause",yq),v("yt.scheduler.instance.setPriorityThreshold",Aq),v("yt.scheduler.instance.enablePriorityThreshold",Bq),v("yt.scheduler.instance.clearPriorityThreshold",Cq),v("yt.scheduler.initialized",!0));const Fq=class{constructor(a){const b=new jm;this.h=(a=b.isAvailable()?a?new km(b,a):b:null)?new em(a):null;this.j=document.domain||window.location.hostname}i(){return!!this.h}set(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i())try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Bj).serialize(b))}catch(f){return}else e=escape(b);Gp(a,e,c,this.j)}get(a,b){var c=void 0,d=!this.i();if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Hp(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),
c=void 0}return c}remove(a){this.i()&&this.h.remove(a);Ip(a,"/",this.j)}};const Gq=(()=>{let a;return()=>{a||(a=new Fq("ytidb"));return a}})();
function Hq(){return Gq()?.get("LAST_RESULT_ENTRY_KEY",!0)}
;const Iq=[];let Jq,Kq=!1;function Lq(){({handleError:a=Mq,logEvent:b=Nq}={});var a;for(Jq=new Oq(a,b);Iq.length>0;){var b=Iq.shift();switch(b.type){case "ERROR":Jq.wa(b.payload);break;case "EVENT":Jq.logEvent(b.eventType,b.payload)}}}
function Pq(a){Kq||(Jq?Jq.wa(a):(Iq.push({type:"ERROR",payload:a}),Iq.length>10&&Iq.shift()))}
function Qq(a,b){Kq||(Jq?Jq.logEvent(a,b):(Iq.push({type:"EVENT",eventType:a,payload:b}),Iq.length>10&&Iq.shift()))}
;function Rq(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Sq(a){return a.substr(0,a.indexOf(":"))||a}
;var Tq=Oc||Pc;function Uq(a){const b=xc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;const Vq={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},Wq={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Xq={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var T=class extends S{constructor(a,b={},c=Vq[a],d=Wq[a],e=Xq[a]){super(c,{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a,...b});this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}},Yq=class extends T{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Vq.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Yq.prototype)}},Zq=class extends Error{constructor(a,b){super();this.index=a;this.objectStore=
b;Object.setPrototypeOf(this,Zq.prototype)}};const $q=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function ar(a,b,c,d){b=Sq(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new T("QUOTA_EXCEEDED",a);if(Qc&&e.name==="UnknownError")return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Zq)return new T("MISSING_INDEX",{...a,objectStore:e.objectStore,index:e.index});if(e.name==="InvalidStateError"&&$q.some(f=>e.message.includes(f)))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new T("UNKNOWN_ABORT",a,e.message);e.args=[{...a,name:"IdbError",xd:e.name}];e.level="WARNING";return e}
function br(a,b,c){const d=Hq();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d?.hasSucceededOnce}})}
;function cr(a){if(!a)throw Error();throw a;}
function dr(a){return a}
var er=class{constructor(a){this.h=a}};function fr(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof gr?hr(a,b,f,d,e):d(f)}catch(f){e(f)}}
function ir(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof gr?hr(a,b,f,d,e):d(f)}catch(f){e(f)}}
function hr(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof gr?hr(a,b,f,d,e):d(f)},f=>{e(f)})}
var gr=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if(this.state.status==="PENDING"){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if(this.state.status==="PENDING"){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new gr(new er((b,c)=>{const d=[];let e=a.length;e===0&&b(d);for(let f=0;f<a.length;++f)gr.resolve(a[f]).then(g=>{d[f]=g;e--;e===0&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new gr(new er((b,c)=>{a instanceof gr?a.then(b,c):b(a)}))}static reject(a){return new gr(new er((b,c)=>{c(a)}))}then(a,b){const c=a??dr,d=b??cr;
return new gr(new er((e,f)=>{this.state.status==="PENDING"?(this.h.push(()=>{fr(this,this,c,e,f)}),this.i.push(()=>{ir(this,this,d,e,f)})):this.state.status==="FULFILLED"?fr(this,this,c,e,f):this.state.status==="REJECTED"&&ir(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function jr(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch{}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function kr(a){return new Promise((b,c)=>{jr(a,b,c)})}
function lr(a){return new gr(new er((b,c)=>{jr(a,b,c)}))}
;function mr(a,b){return new gr(new er((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;const nr=window;var U=nr.ytcsi&&nr.ytcsi.now?nr.ytcsi.now:nr.performance&&nr.performance.timing&&nr.performance.now&&nr.performance.timing.navigationStart?()=>nr.performance.timing.navigationStart+nr.performance.now():()=>(new Date).getTime();function or(){return R("idb_immediate_commit")}
async function pr(a,b,c,d){const e={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?e.mode=c:Object.assign(e,c);a.transactionCount++;c=e.ka?3:1;let f=0,g;for(;!g;){f++;const m=Math.round(U());try{var h=a.h.transaction(b,e.mode),k=d,l=!!e.commit;const n=new qr(h),u=await rr(n,k,l),p=Math.round(U());sr(a,m,p,f,void 0,b.join(),e);return u}catch(n){k=Math.round(U());const u=ar(n,a.h.name,b.join(),a.h.version);if(u instanceof T&&!u.h||f>=c)sr(a,m,k,f,u,b.join(),e),g=u}}return Promise.reject(g)}
function tr(a,b,c){a=a.h.createObjectStore(b,c);return new ur(a)}
function vr(a,b,c){return pr(a,[b],{mode:"readwrite",ka:!0,commit:or()},d=>{d=d.objectStore(b);return lr(d.h.put(c,void 0))})}
function sr(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Qq("QUOTA_EXCEEDED",{dbName:Sq(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Qq("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),wr(a,!1,d,f,b,g.tag),Pq(e)):wr(a,!0,d,f,b,g.tag)}
function wr(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){Qq("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var xr=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}add(a,b,c){return pr(this,[a],{mode:"readwrite",ka:!0,commit:or()},d=>d.objectStore(a).add(b,c))}clear(a){return pr(this,[a],{mode:"readwrite",
ka:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
this.options?.closed&&this.options.closed()}count(a,b){return pr(this,[a],{mode:"readonly",ka:!0,commit:or()},c=>c.objectStore(a).count(b))}delete(a,b){return pr(this,[a],{mode:"readwrite",
ka:!0,commit:or()&&!(b instanceof IDBKeyRange)},c=>c.objectStore(a).delete(b))}get(a,b){return pr(this,[a],{mode:"readonly",
ka:!0,commit:or()},c=>c.objectStore(a).get(b))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function yr(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function zr(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ar(a).then(d=>mr(d,c))}
function Br(a,b){return zr(a,{query:b},c=>c.delete().then(()=>Cr(c))).then(()=>{})}
var ur=class{constructor(a){this.h=a}add(a,b){return lr(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return lr(this.h.clear()).then(()=>{})}count(a){return lr(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?Br(this,a):lr(this.h.delete(a))}get(a){return lr(this.h.get(a))}index(a){try{return new Dr(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Zq(a,this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function rr(a,b,c){const d=new Promise((e,f)=>{try{const g=b(a);c&&a.commit();g.then(h=>{e(h)}).catch(f)}catch(g){f(g),a.abort()}});
return Promise.all([d,a.done]).then(([e])=>e)}
var qr=class{constructor(a){this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.aborted){d=T;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(h===null)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.aborted=!0;throw new T("EXPLICIT_ABORT");}commit(){this.aborted||this.h.commit?.()}objectStore(a){a=this.h.objectStore(a);let b=this.i.get(a);b||(b=new ur(a),this.i.set(a,b));return b}};function Er(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return Ar(a).then(f=>mr(f,c))}
var Dr=class{constructor(a){this.h=a}count(a){return lr(this.h.count(a))}delete(a){return Er(this,{query:a},b=>b.delete().then(()=>Cr(b)))}get(a){return lr(this.h.get(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function Ar(a){return lr(a).then(b=>b?new Fr(a,b):null)}
function Cr(a){a.cursor.continue(void 0);return Ar(a.request)}
var Fr=class{constructor(a,b){this.request=a;this.cursor=b}delete(){return lr(this.cursor.delete()).then(()=>{})}getValue(){return this.cursor.value}update(a){return lr(this.cursor.update(a))}};function Gr(a,b,c){return new Promise((d,e)=>{let f;f=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.je,h=c.blocking,k=c.Af,l=c.upgrade,m=c.closed;let n;const u=()=>{n||(n=new xr(f.result,{closed:m}));return n};
f.addEventListener("upgradeneeded",p=>{try{if(p.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(f.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&p.dataLoss!=="none"&&Qq("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Sq(a)});const z=u(),D=new qr(f.transaction);l&&l(z,B=>p.oldVersion<B&&p.newVersion>=B,D);
D.done.catch(B=>{e(B)})}catch(z){e(z)}});
f.addEventListener("success",()=>{const p=f.result;h&&p.addEventListener("versionchange",()=>{h(u())});
p.addEventListener("close",()=>{Qq("IDB_UNEXPECTEDLY_CLOSED",{dbName:Sq(a),dbVersion:p.version});k&&k()});
d(u())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function Hr(a,b,c={}){return Gr(a,b,c)}
async function Ir(a,b={}){try{const c=self.indexedDB.deleteDatabase(a),d=b.je;d&&c.addEventListener("blocked",()=>{d()});
await kr(c)}catch(c){throw ar(c,a,"",-1);}}
;function Jr(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Kr(a,b){if(!b)throw br("openWithToken",Sq(a.name));return a.open()}
var Lr=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}i(a,b,c={}){return Hr(a,b,c)}delete(a={}){return Ir(this.name,a)}open(){if(!this.j)throw Jr(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Af:b,upgrade:this.options.upgrade},d=async()=>{var e=Error().stack??"";try{const h=await this.i(this.name,this.options.version,c);var f=h,g=this.options;const k=[];for(const l of Object.keys(g.Db)){const {Kb:m,ti:n=Number.MAX_VALUE}=g.Db[l];!(f.h.version>=m)||f.h.version>=n||f.h.objectStoreNames.contains(l)||k.push(l)}if(k.length!==0){const l=Object.keys(this.options.Db),m=h.objectStoreNames();if(this.u<I("ytidb_reopen_db_retries",0))return this.u++,h.close(),Pq(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:this.name,expectedObjectStores:l,foundObjectStores:m})),d();if(this.o<I("ytidb_remake_db_retries",1))return this.o++,await this.delete(),Pq(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:this.name,expectedObjectStores:l,foundObjectStores:m})),d();throw new Yq(m,l);}return h}catch(h){if(h instanceof DOMException?h.name==="VersionError":"DOMError"in self&&h instanceof DOMError?h.name==="VersionError":h instanceof Object&&"message"in h&&h.message==="An attempt was made to open a database using a lower version than the existing version."){e=
await this.i(this.name,void 0,{...c,upgrade:void 0});f=e.h.version;if(this.options.version!==void 0&&f>this.options.version+1)throw e.close(),this.j=!1,Jr(this,f);return e}b();h instanceof Error&&!R("ytidb_async_stack_killswitch")&&(h.stack=`${h.stack}\n${e.substring(e.indexOf("\n")+1)}`);throw ar(h,this.name,"",this.options.version??-1);}};
return this.h=a=d()}};const Mr=new Lr("YtIdbMeta",{Db:{databases:{Kb:1}},upgrade(a,b){b(1)&&tr(a,"databases",{keyPath:"actualName"})}});async function Nr(a,b){return pr(await Kr(Mr,b),["databases"],{ka:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return lr(d.h.put(a,void 0)).then(()=>{})})})}
async function Or(a,b){return a?(await Kr(Mr,b)).delete("databases",a):void 0}
async function Pr(a,b){const c=[];b=await Kr(Mr,b);await pr(b,["databases"],{ka:!0,mode:"readonly"},d=>{c.length=0;return zr(d.objectStore("databases"),{},e=>{a(e.getValue())&&c.push(e.getValue());return Cr(e)})});
return c}
function Qr(a){return Pr(b=>b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0,a)}
function Rr(a,b,c){return Pr(d=>c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier),b)}
async function Sr(a){const b=Yp("YtIdbMeta hasAnyMeta other");return(await Pr(c=>c.userIdentifier!==void 0&&c.userIdentifier!==b,a)).length>0}
;let Tr;const Ur=new class{constructor(){}}(new class{constructor(){}});
async function Vr(){if(Hq()?.hasSucceededOnce)return!0;var a;if(a=Tq)a=/WebKit\/([0-9]+)/.exec(xc()),a=!!(a&&parseInt(a[1],10)>=600);a&&(a=/WebKit\/([0-9]+)/.exec(xc()),a=!(a&&parseInt(a[1],10)>=602));if(!(a=a||Kc)){try{a=self;var b=!!(a.indexedDB&&a.IDBIndex&&a.IDBKeyRange&&a.IDBObjectStore)}catch(c){b=!1}a=!b}if(a||!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return!1;try{return await Nr({actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0},
Ur),await Or("yt-idb-test-do-not-use",Ur),!0}catch(c){return!1}}
function Wr(){if(Tr!==void 0)return Tr;Kq=!0;return Tr=Vr().then(a=>{Kq=!1;if(Gq()?.i()){var b={hasSucceededOnce:Hq()?.hasSucceededOnce||a};Gq()?.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Xr(){return w("ytglobal.idbToken_")||void 0}
function Yr(){const a=Xr();return a?Promise.resolve(a):Wr().then(b=>{b?(v("ytglobal.idbToken_",Ur),b=Ur):b=void 0;return b})}
;let Zr=0;function $r(a,b){Zr||(Zr=Hl.ra(async()=>{const c=await Yr();if(c){var d=!0;try{const e=await Rr(a,c,b);if(e.length){const f=e[0];await Ir(f.actualName);await Or(f.actualName,c)}else d=!1}catch(e){Pq(e),d=!1}Hl.sa(Zr);Zr=0;d&&$r(a,b)}}))}
async function as(){const a=await Yr();return a?Sr(a):!1}
new ik;function bs(a){if(!Xp())throw a=new T("AUTH_INVALID",{dbName:a}),Pq(a),a;const b=Yp();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
async function cs(a,b,c,d){var e=Error().stack??"";const f=await Yr();if(!f)throw b=br("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(b.stack=`${b.stack}\n${e.substring(e.indexOf("\n")+1)}`),Pq(b),b;Rq(a);e=c?{actualName:a,publicName:a,userIdentifier:void 0}:bs(a);try{return await Nr(e,f),await Hr(e.actualName,b,d)}catch(g){try{await Or(e.actualName,f)}catch{}throw g;}}
function ds(a,b,c={}){return cs(a,b,!1,c)}
function es(a,b,c={}){return cs(a,b,!0,c)}
async function gs(a,b={}){const c=await Yr();c&&(Rq(a),a=bs(a),await Ir(a.actualName,b),await Or(a.actualName,c))}
function hs(a,b,c){a=a.map(async d=>{await Ir(d.actualName,b);await Or(d.actualName,c)});
return Promise.all(a).then(()=>{})}
async function is(){var a={};const b=await Yr();if(b){Rq("LogsDatabaseV2");var c=await Qr(b);await hs(c,a,b)}}
async function js(a,b={}){const c=await Yr();c&&(Rq(a),await Ir(a,b),await Or(a,c))}
;function ks(a,b){let c;return()=>{c||(c=new ls(a,b));return c}}
var ls=class extends Lr{constructor(a,b){super(a,b);this.options=b;Rq(a)}i(a,b,c={}){return(this.options.shared?es:ds)(a,b,{...c})}delete(a={}){return(this.options.shared?js:gs)(this.name,a)}};function ms(a,b){return ks(a,b)}
;var ns=ms("ytGcfConfig",{Db:{coldConfigStore:{Kb:1},hotConfigStore:{Kb:1}},shared:!1,upgrade(a,b){b(1)&&(yr(tr(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),yr(tr(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},version:1});function ps(a){return Kr(ns(),a)}
async function qs(a,b,c){a={config:a,hashData:b,timestamp:U()};c=await ps(c);await c.clear("hotConfigStore");return await vr(c,"hotConfigStore",a)}
async function rs(a,b,c,d){a={config:a,hashData:b,configData:c,timestamp:U()};d=await ps(d);await d.clear("coldConfigStore");return await vr(d,"coldConfigStore",a)}
async function ss(a){a=await ps(a);let b=void 0;await pr(a,["coldConfigStore"],{mode:"readwrite",ka:!0},c=>Er(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.getValue()}));
return b}
async function ts(a){a=await ps(a);let b=void 0;await pr(a,["hotConfigStore"],{mode:"readwrite",ka:!0},c=>Er(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.getValue()}));
return b}
;var us=class extends y{constructor(){super();this.i=[];this.h=[];const a=w("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[...a],this.h=a):(this.h=[],v("yt.gcf.config.hotUpdateCallbacks",this.h))}X(){for(const b of this.i){var a=this.h;const c=a.indexOf(b);c>=0&&a.splice(c,1)}this.i.length=0;super.X()}};async function vs(a,b,c){if(R("start_client_gcf")){c&&(a.j=c,v("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);const d=Xr();d&&(c||(c=(await ts(d))?.config),await qs(c,b,d));if(c){a=a.i;for(const e of a.h)e(c)}}}
async function ws(a,b,c){R("start_client_gcf")&&(a.coldHashData=b,v("yt.gcf.config.coldHashData",a.coldHashData||null),a=Xr())&&(c||(c=(await ss(a))?.config),c&&await rs(c,b,c.configData,a))}
function xs(){if(!ys.instance){var a=new ys;ys.instance=a}a=ys.instance;var b=U()-a.h;if(!(a.h!==0&&b<I("send_config_hash_timer"))){b=w("yt.gcf.config.coldConfigData");var c=w("yt.gcf.config.hotHashData"),d=w("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
var ys=class{constructor(){this.h=0;this.i=new us}sc(){return w("yt.gcf.config.hotConfigGroup")??O("RAW_HOT_CONFIG_GROUP")}o(a){this.hotHashData=a;v("yt.gcf.config.hotHashData",this.hotHashData||null)}};function zs(){return"INNERTUBE_API_KEY"in uo&&"INNERTUBE_API_VERSION"in uo}
function As(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),Qe:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sd:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ai:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),Se:O("INNERTUBE_CONTEXT_HL"),Re:O("INNERTUBE_CONTEXT_GL"),Te:O("INNERTUBE_HOST_OVERRIDE")||"",Ue:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),bi:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Bs(a){const b={client:{hl:a.Se,gl:a.Re,clientName:a.sd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Qe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Xo();c.length>0&&(b.request={internalExperimentFlags:c});c=a.sd;c!=="WEB"&&c!=="MWEB"&&c!==1&&c!==2||!b||(b.client.mainAppWebInfo=b.client.mainAppWebInfo??{},b.client.mainAppWebInfo.webDisplayMode=
Bp());(c=w("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:c});R("web_log_memory_total_kbytes")&&t.navigator?.deviceMemory&&(c=t.navigator?.deviceMemory,b&&(b.client.memoryTotalKbytes=`${c*1E6}`));a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Vp())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=Wp())&&b&&(b.client.effectiveConnectionType=a);if(R("start_client_gcf")){var d=xs();d&&(a=
d.coldConfigData,c=d.coldHashData,d=d.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),c&&(b.client.configInfo.coldHashData=c),d&&(b.client.configInfo.hotHashData=d)))}O("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user={...b.user,serializedDelegationContext:a});a=O("INNERTUBE_CONTEXT");
R("enable_persistent_device_token")&&a?.client?.rolloutToken&&(b.client.rolloutToken=a?.client?.rolloutToken);a=Object;c=a.assign;d=b.client;var e=O("DEVICE","");const f={};for(const [g,h]of Object.entries(Ho(e))){e=g;const k=h;e==="cbrand"?f.deviceMake=k:e==="cmodel"?f.deviceModel=k:e==="cbr"?f.browserName=k:e==="cbrver"?f.browserVersion=k:e==="cos"?f.osName=k:e==="cosver"?f.osVersion=k:e==="cplatform"&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function Cs(a,b,c={}){let d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||O("AUTHORIZATION");b||(a?b=`Bearer ${w("gapi.auth.getToken")().Oh}`:(Ep.instance||(Ep.instance=new Ep),a=Dp(),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d={...d,...a}));b&&(d.Authorization=b);return d}
;const Ds=typeof TextEncoder!=="undefined"?new TextEncoder:null,Es=Ds?a=>Ds.encode(a):a=>{a=tc(a);
const b=new Uint8Array(a.length);for(let c=0;c<b.length;c++)b[c]=a[c];return b};var Fs={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Gs={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Hs(a){this.version=1;this.args=a}
Hs.prototype.serialize=function(){return{version:this.version,args:this.args}};function Is(a,b){this.topic=a;this.h=b}
Is.prototype.toString=function(){return this.topic};const Js=w("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.ac;J.prototype.publish=J.prototype.nb;J.prototype.clear=J.prototype.clear;v("ytPubsub2Pubsub2Instance",Js);const Ks=w("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",Ks);const Ls=w("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",Ls);const Ms=w("ytPubsub2Pubsub2IsAsync")||{};v("ytPubsub2Pubsub2IsAsync",Ms);
v("ytPubsub2Pubsub2SkipSubKey",null);function Ns(a,b){const c=Os();c&&c.publish.call(c,a.toString(),a,b)}
function Ps(a){var b=Qs;const c=Os();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=w("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(Ks[d])try{if(f&&b instanceof Is&&b!=e)try{{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");let l;try{if(!h.Pd){const m=new h;h.Pd=m.version}l=h.Pd}catch(m){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
mb(k.args))}catch(m){throw m.message="yt.pubsub2.Data.deserialize(): "+m.message,m;}}}catch(l){throw l.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+l.message,l;}a.call(window,f)}catch(l){zo(l)}},Ms[b.toString()]?w("yt.scheduler.instance")?Hl.ra(g):So(g,0):g())});
Ks[d]=!0;Ls[b.toString()]||(Ls[b.toString()]=[]);Ls[b.toString()].push(d);return d}
function Rs(){var a=Ss;const b=Ps(function(c){a.apply(void 0,arguments);Ts(b)});
return b}
function Ts(a){const b=Os();b&&(typeof a==="number"&&(a=[a]),gb(a,c=>{b.unsubscribeByKey(c);delete Ks[c]}))}
function Os(){return w("ytPubsub2Pubsub2Instance")}
;function Us(a,b,c={sampleRate:.1}){Math.random()<Math.min(.02,c.sampleRate/100)&&Ns("meta_logging_csi_event",{timerName:a,Ei:b})}
;let Vs=void 0,Ws=void 0;function Xs(){Ws||(Ws=Un(O("WORKER_SERIALIZATION_URL")));return Ws||void 0}
function Ys(){const a=Xs();Vs||a===void 0||(Vs=new Worker(Ia(a),void 0));return Vs}
;const Zs=I("max_body_size_to_compress",5E5),$s=I("min_body_size_to_compress",500);let at=!0,bt=0,ct=0;const dt=I("compression_performance_threshold_lr",250);let et=!1;const ft=new Map;let gt=1;function ht(){if(typeof Worker==="function"&&Xs()&&!et){var a=c=>{c=c.data;if(c.op==="gzippedGelBatch"){var d=ft.get(c.key);d&&(jt(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),ft.delete(c.key))}},b=Ys();
b&&(b.addEventListener("message",a),b.onerror=()=>{ft.clear()},et=!0)}}
function kt(a,b,c,d,e=!1){const f={startTime:U(),ticks:{},infos:{}};if(at)try{const h=lt(b);if(h!=null&&(h>Zs||h<$s))d(a,c);else{if(R("gzip_gel_with_worker")){et||ht();const k=Ys();if(k&&!e){ft.set(gt,{latencyPayload:f,url:a,options:c,sendFn:d});k.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:gt});gt++;return}}var g=Sn(Es(b));jt(g,f,a,c,d)}}catch(h){Ao(h),d(a,c)}else d(a,c)}
function jt(a,b,c,d,e){const f=U();b.ticks.gelc=f;ct++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=dt&&(bt++,at=!1);R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Us("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function mt(a){U();if(at){if(!a.body)return a;try{const b=typeof a.body==="string"?a.body:JSON.stringify(a.body);let c=b;if(typeof b==="string"){const d=lt(b);if(d!=null&&(d>Zs||d<$s))return a;c=Sn(Es(b));U()}a.headers={"Content-Encoding":"gzip",...(a.headers||{})};a.body=c;return a}catch(b){return Ao(b),a}}else return a}
function lt(a){try{return(new Blob(a.split(""))).size}catch(b){return Ao(b),null}}
;function nt(a){a=Object.assign({},a);delete a.Authorization;const b=Tg();if(b){const c=new Ol;c.update(O("INNERTUBE_API_KEY"));c.update(b);a.hash=Tc(c.digest(),3)}return a}
;let ot;function pt(){ot||(ot=new Fq("yt.innertube"));return ot}
function qt(a,b,c,d){if(d)return null;d=pt().get("nextId",!0)||1;const e=pt().get("requests",!0)||{};e[d]={method:a,request:b,authState:nt(c),requestTime:Math.round(U())};pt().set("nextId",d+1,86400,!0);pt().set("requests",e,86400,!0);return d}
function rt(a){const b=pt().get("requests",!0)||{};delete b[a];pt().set("requests",b,86400,!0)}
function st(a){const b=pt().get("requests",!0);if(b){for(const d in b){const e=b[d];if(!(Math.round(U())-e.requestTime<6E4)){var c=e.authState;const f=nt(Cs(!1));hh(c,f)&&(c=e.request,"requestTimeMs"in c&&(c.requestTimeMs=Math.round(U())),tt(a,e.method,c,{}));delete b[d]}}pt().set("requests",b,86400,!0)}}
;function ut(a){return!!a.W||a.bc}
function vt(a){ut(a)&&!a.Pb&&(a.h=!0,a.jc&&Math.random()<=a.fc&&a.ea.oe(a.W),wt(a),a.da.va()&&a.j(),a.da.listen(a.Xc,a.j.bind(a)),a.da.listen(a.Wc,a.o.bind(a)))}
function wt(a){if(!ut(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ea.od("QUEUED",a.W).then(b=>{b&&!xt(a,b,a.zd)?a.Fa.ra(async()=>{b.id!==void 0&&await a.ea.Yc(b.id,a.W);wt(a)}):a.da.va()&&a.j()})}
async function zt(a,b){if(!ut(a))throw Error("IndexedDB is not supported: immediateSend");b.id!==void 0&&(await a.ea.Ze(b.id,a.W)||a.ub(Error("The request cannot be found in the database.")));xt(a,b,a.Dd)?(b.skipRetry||(b=At(a,b)),b&&(b.skipRetry&&b.id!==void 0&&await a.ea.sb(b.id,a.W),a.sendFn(b.url,b.options,!!b.skipRetry))):(a.ub(Error("Networkless Logging: Stored logs request expired age limit")),b.id!==void 0&&await a.ea.sb(b.id,a.W))}
function Bt(a,b){a.Ud&&!a.da.va()?a.Ud(b):a.handleError(b)}
function xt(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function At(a,b){if(!ut(a))throw Error("IndexedDB is not supported: updateRequestHandlers");const c=b.options.onError?b.options.onError:()=>{};
b.options.onError=async(e,f)=>{const g=Ct(f),h=Dt(f);h&&a.Y&&a.Y("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(a.Y&&a.Y("nwl_consider_error_code")&&g||a.Y&&!a.Y("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.zc)if(a.da.Dc&&await a.da.Dc(),!a.da.va()){c(e,f);a.Y&&a.Y("nwl_consider_error_code")&&b?.id!==void 0&&await a.ea.Yc(b.id,a.W,!1);return}a.Y&&a.Y("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.zc||(a.potentialEsfErrorCounter++,
b?.id!==void 0&&(b.sendCount<a.Gd?(await a.ea.Yc(b.id,a.W,!0,h?!1:void 0),a.Fa.ra(()=>{a.da.va()&&a.j()},a.Fd)):await a.ea.sb(b.id,a.W)),c(e,f))};
const d=b.options.onSuccess?b.options.onSuccess:()=>{};
b.options.onSuccess=async(e,f)=>{b?.id!==void 0&&await a.ea.sb(b.id,a.W);a.da.ib&&a.Y&&a.Y("vss_network_hint")&&a.da.ib(!0);d(e,f)};
return b}
var Et=class{constructor(a){this.bc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=()=>{};
this.ub=()=>{};
this.now=Date.now;this.Pb=!1;this.Kd=a.Kd??100;this.Gd=a.Gd??1;this.Dd=a.Dd??2592E6;this.zd=a.zd??12E4;this.Fd=a.Fd??5E3;this.W=a.W??void 0;this.jc=!!a.jc;this.fc=a.fc??.1;this.zc=a.zc??10;a.handleError&&(this.handleError=a.handleError);a.ub&&(this.ub=a.ub);a.Pb&&(this.Pb=a.Pb);a.bc&&(this.bc=a.bc);this.Y=a.Y;this.Fa=a.Fa;this.ea=a.ea;this.da=a.da;this.sendFn=a.sendFn;this.Xc=a.Xc;this.Wc=a.Wc;ut(this)&&(!this.Y||this.Y("networkless_logging"))&&vt(this)}writeThenSend(a,b={}){if(ut(this)&&this.h){const c=
{url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ea.set(c,this.W).then(d=>{c.id=d;this.da.va()&&zt(this,c)}).catch(d=>{zt(this,c);
Bt(this,d)})}else this.sendFn(a,b)}sendThenWrite(a,b={},c){if(ut(this)&&this.h){const d={url:a,
options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y&&this.Y("nwl_skip_retry")&&(d.skipRetry=c);if(this.da.va()||this.Y&&this.Y("nwl_aggressive_send_then_write")&&!d.skipRetry){if(!d.skipRetry){const e=b.onError?b.onError:()=>{};
b.onError=async(f,g)=>{await this.ea.set(d,this.W).catch(h=>{Bt(this,h)});
e(f,g)}}this.sendFn(a,b,d.skipRetry)}else this.ea.set(d,this.W).catch(e=>{this.sendFn(a,b,d.skipRetry);
Bt(this,e)})}else this.sendFn(a,b,this.Y&&this.Y("nwl_skip_retry")&&c)}sendAndWrite(a,b={}){if(ut(this)&&this.h){const c={url:a,
options:b,timestamp:this.now(),status:"NEW",sendCount:0};let d=!1;const e=b.onSuccess?b.onSuccess:()=>{};
c.options.onSuccess=(f,g)=>{c.id!==void 0?this.ea.sb(c.id,this.W):d=!0;this.da.ib&&this.Y&&this.Y("vss_network_hint")&&this.da.ib(!0);e(f,g)};
this.sendFn(c.url,c.options,void 0,!0);this.ea.set(c,this.W).then(f=>{c.id=f;d&&this.ea.sb(c.id,this.W)}).catch(f=>{Bt(this,f)})}else this.sendFn(a,b,void 0,!0)}j(){if(!ut(this))throw Error("IndexedDB is not supported: throttleSend");
this.i||(this.i=this.Fa.ra(async()=>{const a=await this.ea.od("NEW",this.W);a?(await zt(this,a),this.i&&(this.i=0,this.j())):this.o()},this.Kd))}o(){this.Fa.sa(this.i);
this.i=0}};function Ct(a){return(a=a?.error?.code)&&a>=400&&a<=599?!1:!0}
function Dt(a){a=a?.error?.code;return!(a!==400&&a!==415)}
;let Ft;
function Gt(){if(Ft)return Ft();Ft=ms("LogsDatabaseV2",{Db:{LogsRequestsStore:{Kb:2}},shared:!1,upgrade(a,b,c){b(2)&&tr(a,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});b(3);b(5)&&(c=c.objectStore("LogsRequestsStore"),c.h.indexNames.contains("newRequest")&&c.h.deleteIndex("newRequest"),yr(c,"newRequestV2",["status","interface","timestamp"]));b(7)&&a.h.objectStoreNames.contains("sapisid")&&a.h.deleteObjectStore("sapisid");b(9)&&a.h.objectStoreNames.contains("SWHealthLog")&&a.h.deleteObjectStore("SWHealthLog")},version:9});
return Ft()}
;function Ht(a){return Kr(Gt(),a)}
async function It(a,b){const c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}};b=await Ht(b);a={...a,options:JSON.parse(JSON.stringify(a.options)),interface:O("INNERTUBE_CONTEXT_CLIENT_NAME",0)};a=await vr(b,"LogsRequestsStore",a);c.ticks.tc=U();Jt(c);return a}
async function Kt(a,b){const c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}};b=await Ht(b);var d=O("INNERTUBE_CONTEXT_CLIENT_NAME",0),e=[a,d,0];d=[a,d,U()];const f=IDBKeyRange.bound(e,d);let g="prev";R("use_fifo_for_networkless")&&(g="next");let h=void 0;e=a==="NEW"?"readwrite":"readonly";R("use_readonly_for_get_most_recent_by_status_killswitch")&&(e="readwrite");await pr(b,["LogsRequestsStore"],{mode:e,ka:!0},k=>Er(k.objectStore("LogsRequestsStore").index("newRequestV2"),
{query:f,direction:g},l=>{l.getValue()&&(h=l.getValue(),a==="NEW"&&(h.status="QUEUED",l.update(h)))}));
c.ticks.tc=U();Jt(c);return h}
async function Lt(a,b){return pr(await Ht(b),["LogsRequestsStore"],{mode:"readwrite",ka:!0},c=>{const d=c.objectStore("LogsRequestsStore");return d.get(a).then(e=>{if(e)return e.status="QUEUED",lr(d.h.put(e,void 0)).then(()=>e)})})}
async function Mt(a,b,c=!0,d){return pr(await Ht(b),["LogsRequestsStore"],{mode:"readwrite",ka:!0},e=>{const f=e.objectStore("LogsRequestsStore");return f.get(a).then(g=>g?(g.status="NEW",c&&(g.sendCount+=1),d!==void 0&&(g.options.compress=d),lr(f.h.put(g,void 0)).then(()=>g)):gr.resolve(void 0))})}
async function Nt(a,b){return(await Ht(b)).delete("LogsRequestsStore",a)}
async function Ot(a){a=await Ht(a);const b=U()-2592E6;await pr(a,["LogsRequestsStore"],{mode:"readwrite",ka:!0},c=>zr(c.objectStore("LogsRequestsStore"),{},d=>{if(d.getValue().timestamp<=b)return d.delete().then(()=>Cr(d))}))}
async function Pt(){await is()}
function Jt(a){R("nwl_csi_killswitch")||Us("networkless_performance",a,{sampleRate:1})}
;var Qt={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationPlayablesMetrics:533,liveCreationStreamWebrtcStats:288,liveCreationWebrtcError:526,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,
visualElementShown:72,visualElementHidden:73,visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,
spacecastSummaryRequested:88,spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,
vrCopresencePartyStats:153,vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,
buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,
buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,
transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,
outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,
ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,
watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,
deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,
ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,
watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,
tvhtml5UnexpectedRestart:319,tvhtml5DeviceStorageStats:535,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,
appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,
webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,
parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,
prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,
sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,
parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,
biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,producerMediaServicesResetDetails:522,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,
youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,
crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,
embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527,watchZoomStateChange:528,metadataEditorEvent:529,kidsPrismaDeeplinksEvent:530,creationOrchestrationEvent:531,coordinatedSamplingTriggered:532,dnaRecapScreenshotEvent:534,
mdxLocalNetworkPermissionRequestEvent:536,mdxLocalNetworkPermissionResponseEvent:537,sessionReplayEvent:538,sessionReplayStatusEvent:539,loggingReliabilityProbe:540,keyValueStoreStatsEvent:541};var Rt=ms("ServiceWorkerLogsDatabase",{Db:{SWHealthLog:{Kb:1}},shared:!0,upgrade:(a,b)=>{b(1)&&yr(tr(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function St(a){return Kr(Rt(),a)}
async function Tt(a){a=await St(a);const b=U()-2592E6;await pr(a,["SWHealthLog"],{mode:"readwrite",ka:!0},c=>zr(c.objectStore("SWHealthLog"),{},d=>{if(d.getValue().timestamp<=b)return d.delete().then(()=>Cr(d))}))}
async function Ut(a){await (await St(a)).clear("SWHealthLog")}
;const Vt={};let Wt=0;function Xt(a){const b=new Image,c=""+Wt++;Vt[c]=b;b.onload=b.onerror=()=>{delete Vt[c]};
({}).zi&&(b.referrerPolicy="no-referrer");b.src=a}
;let Yt;function Zt(){Yt||(Yt=new Fq("yt.offline"));return Yt}
function $t(a){if(R("offline_error_handling")){var b=Zt().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Zt().set("errors",b,2592E3,!0)}}
;function au(){if(!bu.instance){const a=w("yt.networkRequestMonitor.instance")||new bu;v("yt.networkRequestMonitor.instance",a);bu.instance=a}return bu.instance}
var bu=class{constructor(){this.h=new Map;this.i=!1}requestComplete(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)}isEndpointCFR(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null}removeParams(a){return a.split("?")[0]}};bu.prototype.removeParams=bu.prototype.removeParams;bu.prototype.isEndpointCFR=bu.prototype.isEndpointCFR;bu.prototype.requestComplete=bu.prototype.requestComplete;bu.getInstance=au;function cu(){if(!du.instance){const a=w("yt.networkStatusManager.instance")||new du;v("yt.networkStatusManager.instance",a);du.instance=a}return du.instance}
var du=class extends Li{constructor(){super();this.j=!1;this.h=Gl();this.h.listen("networkstatus-online",()=>{if(this.j&&R("offline_error_handling")){var a=Zt().get("errors",!0);if(a){for(const b in a)if(a[b]){const c=new S(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;zo(c)}Zt().set("errors",{},2592E3,!0)}}})}va(){return this.h.va()}ib(a){this.h.h=a}Ne(){const a=window.navigator.onLine;
return a===void 0?!0:a}xe(){this.j=!0}listen(a,b){return this.h.listen(a,b)}Dc(a){return Jl(this.h,a)}};du.prototype.sendNetworkCheckRequest=du.prototype.Dc;du.prototype.listen=du.prototype.listen;du.prototype.enableErrorFlushing=du.prototype.xe;du.prototype.getWindowStatus=du.prototype.Ne;du.prototype.networkStatusHint=du.prototype.ib;du.prototype.isNetworkAvailable=du.prototype.va;du.getInstance=cu;function eu(a,b){a.rateLimit?a.h?(Hl.sa(a.u),a.u=Hl.ra(()=>{a.o!==b&&(Mi(a,b),a.o=b,a.h=U())},a.rateLimit-(U()-a.h))):(Mi(a,b),a.o=b,a.h=U()):Mi(a,b)}
var fu=class extends Li{constructor(a={}){super();this.h=this.u=0;this.j=cu();const b=w("yt.networkStatusManager.instance.listen").bind(this.j);b&&(a.rateLimit?(this.rateLimit=a.rateLimit,b("networkstatus-online",()=>{eu(this,"publicytnetworkstatus-online")}),b("networkstatus-offline",()=>{eu(this,"publicytnetworkstatus-offline")})):(b("networkstatus-online",()=>{Mi(this,"publicytnetworkstatus-online")}),b("networkstatus-offline",()=>{Mi(this,"publicytnetworkstatus-offline")})))}va(){const a=w("yt.networkStatusManager.instance.isNetworkAvailable");
return a?a.bind(this.j)():!0}ib(a){const b=w("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)}async Dc(a){const b=w("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(this.j);return R("skip_network_check_if_cfr")&&au().isEndpointCFR("generate_204")?new Promise(c=>{this.ib(window.navigator?.onLine||!0);c(this.va())}):b?b(a):!0}};let gu;function hu(){let a=w("yt.networklessRequestController.instance");a||(a=new iu,v("yt.networklessRequestController.instance",a),R("networkless_logging")&&Yr().then(b=>{a.W=b;vt(a);a.u.resolve();a.jc&&Math.random()<=a.fc&&a.W&&Tt(a.W);R("networkless_immediately_drop_sw_health_store")&&ju(a)}));
return a}
async function ju(a){if(!a.W)throw br("clearSWHealthLogsDb");Ut(a.W).catch(b=>{a.handleError(b)})}
var iu=class extends Et{constructor(){gu||(gu=new fu({gi:!0,Vh:!0}));super({ea:{oe:Ot,sb:Nt,od:Kt,Ze:Lt,Yc:Mt,set:It},da:gu,handleError:(a,b,c)=>{const d=c?.error?.code;d===400||d===415?(a=new S(a.message,b,c?.error?.code),Ao(a,void 0,void 0,void 0,!0)):zo(a)},
ub:Ao,sendFn:ku,now:U,Ud:$t,Fa:Dq(),Xc:"publicytnetworkstatus-online",Wc:"publicytnetworkstatus-offline",jc:!0,fc:.1,zc:I("potential_esf_error_limit",10),Y:R,Pb:!(Xp()&&lu())});this.u=new ik;R("networkless_immediately_drop_all_requests")&&Pt();js("LogsDatabaseV2")}writeThenSend(a,b){b||(b={});b=mu(a,b);Xp()||(this.h=!1);super.writeThenSend(a,b)}sendThenWrite(a,b,c){b||(b={});b=mu(a,b);Xp()||(this.h=!1);super.sendThenWrite(a,b,c)}sendAndWrite(a,b){b||(b={});b=mu(a,b);Xp()||(this.h=!1);super.sendAndWrite(a,
b)}awaitInitialization(){return this.u.promise}};
function ku(a,b,c,d=!1){b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_request_time_ms_header")?b.headers&&Lo(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U()))):b.postParams?.requestTimeMs&&(b.postParams.requestTimeMs=Math.round(U()));if(c&&Object.keys(b).length===0){if(a)if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ap(a,void 0,"GET","",void 0,void 0,!1,!1);else{b:{try{c:{var e=new ya({url:a});if(e.h.dsh==="1")var f=null;else{var g=e.h.ae;if(g==="1"){const u=e.h.adurl;if(u)try{f=
{version:3,ue:decodeURIComponent(u),ge:va(e.i,"act=1","ri=1",xa(e))};break c}catch(p){}}f=g==="2"?{version:4,ue:va(e.i,"dct=1","suid="+e.j,"ri=1"),ge:va(e.i,"act=1","ri=1","suid="+e.j)}:null}}if(f){const u=zb(a);var h;if(!(h=!u||!u.endsWith("/aclk"))){{const p=a.search(Hb);let z=Gb(a,0,"ri",p);if(z<0)var k=null;else{var l=a.indexOf("&",z);if(l<0||l>p)l=p;k=ub(a.slice(z+3,l!==-1?l:0))}}h=k!=="1"}var m=!h;break b}}catch(u){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,
"")){var n=!0;break b}}catch(u){}n=!1}c=n?!0:!1}else c=!1;c||Xt(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),kt(a,b.postBody,b,ep,d)):kt(a,JSON.stringify(b.postParams),b,dp,d):ep(a,b)}
function mu(a,b){R("use_event_time_ms_header")&&Lo(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function lu(){return yb(document.location.toString())!=="www.youtube-nocookie.com"}
;let nu=!1;const ou=t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:nu};v("ytNetworklessLoggingInitializationOptions",ou);async function pu(){await Yr()&&(Xp()||R("nwl_init_require_datasync_id_killswitch"))&&lu()&&(nu=!0,ou.isNwlInitialized=nu,await hu().awaitInitialization())}
;function tt(a,b,c,d){!O("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Ao(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new S("innertube xhrclient not ready",b,c,d);zo(e);throw e;}const f={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:()=>{d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:(n,u)=>{if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:n=>{if(d.onSuccess)d.onSuccess(n)},
onProgress:n=>{if(d.onProgress)d.onProgress(n)},
onError:(n,u)=>{if(d.onError)d.onError(u)},
onFetchError:n=>{if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};f.headers["Content-Type"]||(f.headers["Content-Type"]="application/json");let g="";(e=a.config_.Te)&&(g=e);const h=a.config_.Ue||!1,k=Cs(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&h&&(f.headers["x-origin"]=window.location.origin);const l=Jo(`${g}${`/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`}`,{alt:"json"}),m=(n=!1)=>{let u;if(d.retry&&g!="www.youtube-nocookie.com"&&(n||R("skip_ls_gel_retry")||f.headers["Content-Type"]!==
"application/json"||(u=qt(b,c,k,h)),u)){const p=f.onSuccess,z=f.onFetchSuccess;f.onSuccess=(D,B)=>{rt(u);p(D,B)};
c.onFetchSuccess=(D,B)=>{rt(u);z(D,B)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)f.method="POST",d.networklessOptions.writeThenSend?hu().writeThenSend(l,f):hu().sendAndWrite(l,f);
else if(d.compress){const p=!d.networklessOptions.writeThenSend;if(f.postBody){let z=f.postBody;typeof z!=="string"&&(z=JSON.stringify(f.postBody));kt(l,z,f,ep,p)}else kt(l,JSON.stringify(f.postParams),f,dp,p)}else dp(l,f)}catch(p){if(p.name==="InvalidAccessError")u&&(rt(u),u=0),Ao(Error("An extension is blocking network request."));else throw p;}u&&Zp(()=>{st(a)},5E3)};
(w("ytNetworklessLoggingInitializationOptions")?ou.isNwlInitialized:nu)?Wr().then(n=>{m(n)}):m(!1)}
var qu=class{constructor(a){this.config_=null;a?this.config_=a:zs()&&(this.config_=As());Zp(()=>{st(this)},5E3)}isReady(){!this.config_&&zs()&&(this.config_=As());
return!!this.config_}};let ru=0;const su=Mc?"webkit":Lc?"moz":Jc?"ms":Ic?"o":"";v("ytDomDomGetNextId",w("ytDomDomGetNextId")||(()=>++ru));const tu={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function uu(a){if(document.body&&document.documentElement){const b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
class vu{constructor(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(let d in a)d in tu||(this[d]=a[d]);this.scale=a.scale;this.rotation=a.rotation;var b=a.target||a.srcElement;b&&b.nodeType==3&&(b=b.parentNode);this.target=b;
var c=a.relatedTarget;if(c)try{c=c.nodeName?c:null}catch(d){c=null}else this.type=="mouseover"?c=a.fromElement:this.type=="mouseout"&&(c=a.toElement);this.relatedTarget=c;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(d){}}preventDefault(){this.event&&
(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())}stopPropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())}stopImmediatePropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())}};const dh=t.ytEventsEventsListeners||{};v("ytEventsEventsListeners",dh);const wu=t.ytEventsEventsCounter||{count:0};v("ytEventsEventsCounter",wu);
function xu(a,b,c,d={}){a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ch(e=>{const f=typeof e[4]==="boolean"&&e[4]==!!d,g=la(e[4])&&la(d)&&hh(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function yu(a,b,c,d={}){if(!a||!a.addEventListener&&!a.attachEvent)return"";let e=xu(a,b,c,d);if(e)return e;e=++wu.count+"";const f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);let g;g=f?h=>{h=new vu(h);if(!sh(h.relatedTarget,k=>k==a))return h.currentTarget=a,h.type=b,c.call(a,h)}:h=>{h=new vu(h);
h.currentTarget=a;return c.call(a,h)};
g=P(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),zu()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent(`on${b}`,g);dh[e]=[a,b,c,g,d];return e}
function Au(a){a&&(typeof a=="string"&&(a=[a]),gb(a,b=>{if(b in dh){var c=dh[b];const d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?zu()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent(`on${e}`,f);delete dh[b]}}))}
const zu=aj(function(){let a=!1;try{const b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(b){}return a});function Bu(a){this.D=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.R=yu(window,"mousemove",qa(this.V,this));a=qa(this.H,this);typeof a==="function"&&(a=P(a));this.ba=window.setInterval(a,25)}
ua(Bu,y);Bu.prototype.V=function(a){a.h===void 0&&uu(a);var b=a.h;a.i===void 0&&uu(a);this.h=new Zg(b,a.i)};
Bu.prototype.H=function(){if(this.h){var a=U();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;b=0;for(c=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.D();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
Bu.prototype.X=function(){window.clearInterval(this.ba);Au(this.R)};const Cu={};function Du({mi:a=!1,Wh:b=!0}={}){if(w("_lact",window)==null){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);c==-1&&Eu();Fu(a,b);new Bu(()=>{Gu("mouse",100)})}}
function Fu(a=!1,b=!0){var c=window;yu(c.document,"keydown",Eu);yu(c.document,"keyup",Eu);yu(c.document,"mousedown",Eu);yu(c.document,"mouseup",Eu);a?yu(c,"touchmove",()=>{Gu("touchmove",200)},{passive:!0}):(yu(c,"resize",()=>{Gu("resize",200)}),b&&yu(c,"scroll",()=>{Gu("scroll",200)}));
yu(c.document,"touchstart",Eu,{passive:!0});yu(c.document,"touchend",Eu,{passive:!0})}
function Gu(a,b){Cu[a]||(Cu[a]=!0,Hl.ra(()=>{Eu();Cu[a]=!1},b))}
function Eu(){w("_lact",window)==null&&Du();var a=Date.now();v("_lact",a,window);w("_fact",window)==-1&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function Hu(){const a=w("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;const Iu=t.ytPubsubPubsubInstance||new J,Ju=t.ytPubsubPubsubSubscribedKeys||{},Ku=t.ytPubsubPubsubTopicToKeys||{},Lu=t.ytPubsubPubsubIsSynchronous||{};function Mu(a,b){const c=Nu();if(c&&b){const d=c.subscribe(a,function(){const e=arguments,f=()=>{Ju[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,e)};
try{Lu[a]?f():So(f,0)}catch(g){zo(g)}},void 0);
Ju[d]=!0;Ku[a]||(Ku[a]=[]);Ku[a].push(d);return d}return 0}
function Ou(a){const b=Nu();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),gb(a,c=>{b.unsubscribeByKey(c);delete Ju[c]}))}
function Pu(a,b){const c=Nu();c&&c.publish.apply(c,arguments)}
function Qu(a){const b=Nu();if(b)if(b.clear(a),a)Ru(a);else for(let c in Ku)Ru(c)}
function Nu(){return t.ytPubsubPubsubInstance}
function Ru(a){Ku[a]&&(a=Ku[a],gb(a,b=>{Ju[b]&&delete Ju[b]}),a.length=0)}
J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.ac;J.prototype.publish=J.prototype.nb;J.prototype.clear=J.prototype.clear;v("ytPubsubPubsubInstance",Iu);v("ytPubsubPubsubTopicToKeys",Ku);v("ytPubsubPubsubIsSynchronous",Lu);v("ytPubsubPubsubSubscribedKeys",Ju);var Su=Symbol("injectionDeps"),Tu=class{constructor(a){this.name=a}toString(){return`InjectionToken(${this.name})`}},Uu=class{constructor(a){this.key=a}};function Vu(a,b){a.i.set(b.Vb,b);const c=a.j.get(b.Vb);if(c)try{c.Cc(a.resolve(b.Vb))}catch(d){c.si(d)}}
function Wu(a,b,c,d=!1){if(c.indexOf(b)>-1)throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(d.Nd!==void 0)var e=d.Nd;else if(d.Gf)e=d[Su]?Xu(a,d[Su],c):[],e=d.Gf(...e);else if(d.dd){e=d.dd;const f=e[Su]?Xu(a,e[Su],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.Ci||a.h.set(b,e);return e}
function Xu(a,b,c){return b?b.map(d=>d instanceof Uu?Wu(a,d.key,c,!0):Wu(a,d,c)):[]}
var Yu=class{constructor(){this.i=new Map;this.j=new Map;this.h=new Map}resolve(a){return a instanceof Uu?Wu(this,a.key,[],!0):Wu(this,a,[])}};let Zu;function $u(){Zu||(Zu=new Yu);return Zu}
;let av=window;function bv(){return"h5vcc"in av&&av.h5vcc.traceEvent?.traceBegin&&av.h5vcc.traceEvent?.traceEnd?1:"performance"in av&&av.performance.mark&&av.performance.measure?2:0}
function cv(a){const b=bv();switch(b){case 1:av.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:av.performance.mark(`${a}-start`);break;case 0:break;default:Ta(b,"unknown trace type")}}
function dv(a){var b=bv();switch(b){case 1:av.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;av.performance.mark(c);av.performance.measure(a,b,c);break;case 0:break;default:Ta(b,"unknown trace type")}}
;var ev=R("web_enable_lifecycle_monitoring")&&bv()!==0,fv=R("web_enable_lifecycle_monitoring");function gv(a){var b=Array.from(a.h.keys()).sort((c,d)=>a.getPriority(a.h[d])-a.getPriority(a.h[c]));
for(const c of b)b=a.h[c],b.jobId===void 0||b.Ac||(a.scheduler.sa(b.jobId),a.scheduler.Ta(b.Pc,10))}
var hv=class{constructor(a){this.scheduler=Dq();this.i=new ik;this.h=a;for(let c=0;c<this.h.length;c++){const d=this.h[c];a=()=>{d.Pc();this.h[c].Ac=!0;this.h.every(e=>e.Ac===!0)&&this.i.resolve()};
var b=this.getPriority(d);b=this.scheduler.Ta(a,b);this.h[c]={...d,Pc:a,jobId:b}}}cancel(){for(const a of this.h)a.jobId===void 0||a.Ac||this.scheduler.sa(a.jobId),a.Ac=!0;this.i.resolve()}getPriority(a){return a.priority??0}};function iv(a,b,c){fv&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function jv(a,b){const c=b.filter(e=>(a.i??e.priority??0)===10),d=b.filter(e=>(a.i??e.priority??0)!==10);
return a.A.Bi?async(...e)=>{await kv(c,...e);lv(a,d,...e)}:(...e)=>{mv(c,...e);
lv(a,d,...e)}}
async function kv(a,...b){const c=Dq();for(const d of a){let e;c.H(()=>{nv(d.name);const f=ov(()=>d.callback(...b));
Hd(f)?e=R("web_lifecycle_error_handling_killswitch")?f.then(()=>{pv(d.name)}):f.then(()=>{pv(d.name)},g=>{window.onerror?.(g.message,"",0,0,g);
pv(d.name)}):pv(d.name)});
e&&await e}}
function lv(a,b,...c){b=b.map(d=>({Pc:()=>{nv(d.name);ov(()=>d.callback(...c));
pv(d.name)},
priority:a.i??d.priority??0}));
b.length&&(a.o=new hv(b))}
function mv(a,...b){const c=Dq();for(const d of a)c.H(()=>{nv(d.name);ov(()=>d.callback(...b));
pv(d.name)})}
function nv(a){ev&&a&&cv(a)}
function pv(a){ev&&a&&dv(a)}
var qv=class{constructor(a){this.state=a;this.plugins=[];this.i=void 0;this.A={};ev&&cv(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}uninstall(...a){a.forEach(b=>{b=this.plugins.indexOf(b);b>-1&&this.plugins.splice(b,1)})}transition(a,b){ev&&dv(this.state);
var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.to===a):d.from===this.state&&d.to===a);
if(c){this.o&&(gv(this.o),this.o=void 0);iv(this,a,b);this.state=a;ev&&cv(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c(jv(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function ov(a){if(R("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){window.onerror?.(b.message,"",0,0,b)}}
;function rv(){sv||(sv=new tv);return sv}
var tv=class extends qv{constructor(){super("none");this.h=null;this.i=10;this.transitions=[{from:"none",to:"application_navigating",action:this.j},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:()=>{}},
{from:"none",to:"none",action:()=>{}}]}j(a,b){this.h=Zp(()=>{this.currentState==="application_navigating"&&this.transition("none")},5E3);
a(b?.event)}u(a,b){this.h&&(Hl.sa(this.h),this.h=null);a(b?.event)}},sv;let uv=[];v("yt.logging.transport.getScrapedGelPayloads",function(){return uv});function vv(a,b){const c=wv(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(d.length<=1&&wv(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(xv(b.auth,h[0])){var f=b.isJspb;xv(f===void 0?"undefined":f?"true":"false",h[1])&&xv(b.cttAuthInfo,h[2])&&(f=b.tier,f=f===void 0?"undefined":JSON.stringify(f),xv(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function xv(a,b){return a===void 0||a==="undefined"?!0:a===b}
var yv=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=wv(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);R("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=vv(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):
c.push(...this.store[b[d]].splice(0,a.sizeLimit)));a?.sizeLimit&&c.length<a?.sizeLimit&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=vv(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=vv(this,a);let b=0;for(let c=0;c<a.length;c++)b+=this.store[a[c]]?.length||0;return b}};yv.prototype.getSequenceCount=yv.prototype.getSequenceCount;
yv.prototype.extractMatchingEntries=yv.prototype.extractMatchingEntries;yv.prototype.smartExtractMatchingEntries=yv.prototype.smartExtractMatchingEntries;yv.prototype.storePayload=yv.prototype.storePayload;function wv(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function zv(a,b){if(a)return a[b.name]}
;var Av=new Tu("FinchConfigManagerService");const Bv=I("initial_gel_batch_timeout",2E3),Cv=I("gel_queue_timeout_max_ms",6E4),Dv=I("gel_min_batch_size",5);let Ev=void 0;class Fv{constructor(){this.o=this.h=this.i=0;this.j=!1}}const Gv=new Fv,Hv=new Fv,Iv=new Fv,Jv=new Fv;let Kv,Lv=!0;const Mv=t.ytLoggingTransportTokensToCttTargetIds_||{};v("ytLoggingTransportTokensToCttTargetIds_",Mv);let Nv={};function Ov(){let a=w("yt.logging.ims");a||(a=new yv,v("yt.logging.ims",a));return a}
function Pv(a,b){if(a.endpoint==="log_event"){Qv(a);var c=Rv(a),d=Sv(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=Qt[d||""];var f=$u().resolve(new Uu(ys))?.sc()?.loggingHotConfig?.eventLoggingConfig?.payloadPolicies;if(f)for(let g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!R("web_payload_policy_disabled_killswitch"))return;f=Tv(e.tier);if(f===400){Uv(a,b);return}}Nv[c]=!0;c={cttAuthInfo:c,isJspb:!1,tier:f};Ov().storePayload(c,a.payload);
Vv(b,c,d==="gelDebuggingEvent")}}
function Vv(a,b,c=!1){a&&(Ev=new a);a=I("tvhtml5_logging_max_batch_ads_fork")||I("tvhtml5_logging_max_batch")||I("web_logging_max_batch")||100;const d=U(),e=Wv(!1,b.tier),f=e.o;c&&(e.j=!0);c=0;b&&(c=Ov().getSequenceCount(b));const g=()=>{Xv({writeThenSend:!0},void 0,!1,b.tier)};
c>=1E3?g():c>=a?Kv||(Kv=Yv(()=>{g();Kv=void 0},0)):d-f>=10&&(Zv(!1,b.tier),e.o=d)}
function Uv(a,b){if(a.endpoint==="log_event"){R("more_accurate_gel_parser")&&Ov().storePayload({isJspb:!1},a.payload);Qv(a);var c=Rv(a),d=new Map;d.set(c,[a.payload]);var e=Sv(a.payload)||"";b&&(Ev=new b);return new bj((f,g)=>{Ev&&Ev.isReady()?$v(d,Ev,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Rv(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;const c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Mv[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Xv(a={},b,c=!1,d){new bj((e,f)=>{const g=Wv(c,d),h=g.j;g.j=!1;aw(g.i);aw(g.h);g.h=0;Ev&&Ev.isReady()?d===void 0&&R("enable_web_tiered_gel")?bw(e,f,a,b,c,300,h):bw(e,f,a,b,c,d,h):(Zv(c,d),e())})}
function bw(a,b,c={},d,e=!1,f=200,g=!1){var h=Ev;const k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=R("enable_web_tiered_gel")?Ov().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ov().extractMatchingEntries(e),k.set(d,f);else for(const m of Object.keys(Nv))d=R("enable_web_tiered_gel")?Ov().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Ov().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),
d.length>0&&k.set(m,d),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete Nv[m];$v(k,h,a,b,c,!1,g)}
function Zv(a=!1,b=200){const c=()=>{Xv({writeThenSend:!0},void 0,a,b)},d=Wv(a,b);
var e=d===Jv||d===Iv?5E3:Cv;R("web_gel_timeout_cap")&&!d.h&&(e=Yv(()=>{c()},e),d.h=e);
aw(d.i);e=O("LOGGING_BATCH_TIMEOUT",I("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Lv&&(e=Bv);e=Yv(()=>{I("gel_min_batch_size")>0?Ov().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Dv&&c():c()},e);
d.i=e}
function $v(a,b,c,d,e={},f,g){const h=Math.round(U());let k=a.size;const l=cw(g);for(const [m,n]of a){a=m;g=n;const u=jh({context:Bs(b.config_||As())});if(!ka(g)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}u.events=g;(g=Mv[a])&&dw(u,a,g);delete Mv[a];const p=a==="visitorOnlyApprovedKey";ew(u,h,p);R("always_send_and_write")&&(e.writeThenSend=!1);const z=M=>{R("start_client_gcf")&&Hl.ra(async()=>{await fw(M)});
k--;k||c()};
let D=0;const B=()=>{D++;if(e.bypassNetworkless&&D===1)try{tt(b,l,u,gw({writeThenSend:!0},p,z,B,f)),Lv=!1}catch(M){zo(M),d()}k--;k||c()};
try{tt(b,l,u,gw(e,p,z,B,f)),Lv=!1}catch(M){zo(M),d()}}}
function gw(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Qh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};hw()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function ew(a,b,c){hw()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&((c=O("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),vo("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function dw(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Qv(a){var b=Wo("il_payload_scraping")==="enable_il_payload_scraping";if(!w("yt.logging.transport.enableScrapingForTest"))if(b)uv=[],v("yt.logging.transport.enableScrapingForTest",!0),v("yt.logging.transport.scrapedPayloadsForTesting",uv),v("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),v("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),v("yt.logging.transport.scrapeClientEvent",
!0);else return;b=w("yt.logging.transport.scrapedPayloadsForTesting");const c=w("yt.logging.transport.payloadToScrape"),d=w("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(let e=0;e<c.length;e++)a&&a.payload[c[e]]&&(d?b.push(a.payload):b.push((a?.payload)[c[e]]));v("yt.logging.transport.scrapedPayloadsForTesting",b)}
function hw(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Yv(a,b){return R("transport_use_scheduler")===!1?So(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Zp(()=>{rv().currentState==="none"?a():rv().install({none:{callback:a}})},b):Zp(a,b)}
function aw(a){R("transport_use_scheduler")?Hl.sa(a):window.clearTimeout(a)}
async function fw(a){a=a?.responseContext?.globalConfigGroup;var b=zv(a,Yn),c=a?.hotHashData;const d=zv(a,Xn),e=a?.coldHashData,f=$u().resolve(new Uu(ys));f&&(c&&(b?await vs(f,c,b):await vs(f,c)),e&&(d?await ws(f,e,d):await ws(f,e)));b=a?.rawFinchStaticConfigGroup;(a=a?.finchStaticHashData)?(c=$u().resolve(new Uu(Av)))?await c.ni({config:b||{},Rh:a||""}):(b||a)&&Ao(new S("FinchConfigManagerService is not present, but Finch config data is present.")):b&&Ao(new S("Finch config data is present, but hash is missing."))}
function Wv(a,b=200){return a?b===300?Jv:Hv:b===300?Iv:Gv}
function Sv(a){a=Object.keys(a);for(const b of a)if(Qt[b])return b}
function Tv(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function cw(a=!1){return a&&R("vss_through_gel_video_stats")?"video_stats":"log_event"}
;const iw=t.ytLoggingGelSequenceIdObj_||{};v("ytLoggingGelSequenceIdObj_",iw);
function jw(a,b,c,d={}){const e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Hu();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,iw[b]=b in iw?iw[b]+1:0,a.sequence={index:iw[b],groupKey:b},d.endOfSequence&&delete iw[d.sequenceGroup]);R("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
Uv:Pv)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function Nq(a,b,c={}){let d=qu;O("ytLoggingEventsDefaultDisabled",!1)&&qu===qu&&(d=null);jw(a,b,d,c)}
;var kw=new Set,lw=0,mw=0,nw=0,ow=[];const pw=[],qw=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Mq(a){rw(a)}
function V(a){rw(a,"WARNING")}
function sw(a){a instanceof Error?rw(a):(a=la(a)?JSON.stringify(a):String(a),a=new S(a),a.name="RejectedPromiseError",V(a))}
function rw(a,b="ERROR",c,d,e,f={},g=!1,h){f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION");tw(a,f,b,g,h)}
function tw(a,b,c="ERROR",d=!1,e){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(R("console_log_js_exceptions")||["test","dev","autopush","staging"].includes(O("SERVER_VERSION"))){var f=[];f.push(`Name: ${a.name}`);f.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&f.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&f.push(`Error args: ${JSON.stringify(a.args)}`);f.push(`File name: ${a.fileName}`);f.push(`Stacktrace: ${a.stack}`);f=f.join("\n");window.console.log(f,
a)}if(!(lw>=5)){f=[];for(g of pw)try{g()&&f.push(g())}catch(B){}var g=f;g=[...ow,...g];var h=qb(a);f=h.message||"Unknown Error";const z=h.name||"UnknownError";var k=h.stack||a.i||"Not available";if(k.startsWith(`${z}: ${f}`)){var l=k.split("\n");l.shift();k=l.join("\n")}l=h.lineNumber||"Not available";h=h.fileName||"Not available";let D=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var m=0;m<a.args.length&&!(D=yp(a.args[m],`params.${m}`,b,D),D>=500);m++);else if(a.hasOwnProperty("params")&&
a.params){const B=a.params;if(typeof a.params==="object")for(m in B){if(!B[m])continue;const M=`params.${m}`,K=Ap(B[m]);b[M]=K;D+=M.length+K.length;if(D>500)break}else b.params=Ap(B)}if(g.length)for(m=0;m<g.length&&!(D=yp(g[m],`params.context.${m}`,b,D),D>=500);m++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:f,name:z,lineNumber:l,fileName:h,stack:k,params:b,sampleWeight:1};m=Number(a.columnNumber);isNaN(m)||(b.lineNumber=`${b.lineNumber}:${m}`);
if(a.level==="IGNORED")var n=0;else a:{a=rp();for(n of a.Ya)if(b.message&&b.message.match(n.ii)){n=n.weight;break a}for(var u of a.Va)if(u.callback(b)){n=u.weight;break a}n=1}b.sampleWeight=n;n=b;for(var p of np)if(p.yc[n.name]){u=p.yc[n.name];for(const B of u)if(u=n.message.match(B.regexp)){n.params["params.error.original"]=u[0];a=B.groups;b={};for(m=0;m<a.length;m++)b[a[m]]=u[m+1],n.params[`params.error.${a[m]}`]=u[m+1];n.message=p.Tc(b);break}}n.params||(n.params={});p=rp();n.params["params.errorServiceSignature"]=
`msg=${p.Ya.length}&cb=${p.Va.length}`;n.params["params.serviceWorker"]="false";t.document&&t.document.querySelectorAll&&(n.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new mh(nh,"sample")).constructor!==mh&&(n.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(n);n.sampleWeight===0||kw.has(n.message)||(d?uw(n,c):vw(n,c,e))}}}
function uw(a,b="ERROR"){ww(b,a);xw(a)}
function vw(a,b="ERROR",c){if(b==="ERROR"){vp.nb("handleError",a);if(R("record_app_crashed_web")&&nw===0&&a.sampleWeight===1){nw++;const d={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(d.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}});Nq("appCrashed",d)}mw++}else b==="WARNING"&&vp.nb("handleWarning",a);R("kevlar_gel_error_routing")&&(c=yw(b,a,c))&&(Nq("clientError",c),(b==="ERROR"||R("errors_flush_gel_always_killswitch"))&&Xv(void 0,
void 0,!1));R("suppress_error_204_logging")||ww(b,a);xw(a)}
function xw(a){try{kw.add(a.message)}catch(b){}lw++}
function yw(a,b,c={}){a:{for(d of qw)if(Uq(d.toLowerCase())){var d=!0;break a}d=!1}if(!d){var e={stackTrace:b.stack};b.fileName&&(e.filename=b.fileName);d=b.lineNumber&&b.lineNumber.split?b.lineNumber.split(":"):[];d.length!==0&&(d.length!==1||isNaN(Number(d[0]))?d.length!==2||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(e.lineNumber=Number(d[0]),e.columnNumber=Number(d[1])):e.lineNumber=Number(d[0]));d={level:"ERROR_LEVEL_UNKNOWN",message:b.message,errorClassName:b.name,sampleWeight:b.sampleWeight};
a==="ERROR"?d.level="ERROR_LEVEL_ERROR":a==="WARNING"&&(d.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:e};c.pageUrl=window.location.href;c.kvPairs=[];O("FEXP_EXPERIMENTS")&&(c.experimentIds=O("FEXP_EXPERIMENTS"));e=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!wo("web_disable_gel_stp_ecatcher_killswitch")&&e)for(const g of Object.keys(e))c.kvPairs.push({key:g,value:String(e[g])});if(b=b.params)for(var f of Object.keys(b))c.kvPairs.push({key:`client.${f}`,value:String(b[f])});
f=O("SERVER_NAME");b=O("SERVER_VERSION");f&&b&&(c.kvPairs.push({key:"server.name",value:f}),c.kvPairs.push({key:"server.version",value:b}));(f=O("PLAYER_CLIENT_VERSION"))&&c.kvPairs.push({key:"client.player.version",value:f});return{errorMetadata:c,stackTrace:a,logMessage:d}}}
function ww(a,b){const c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:O("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);for(const e of Object.keys(c))a.postParams[`client.${e}`]=c[e];if(b=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(var d of Object.keys(b))a.postParams[d]=
b[d];(d=O("LAVA_VERSION"))&&(a.postParams["lava.version"]=d);d=O("SERVER_NAME");b=O("SERVER_VERSION");d&&b&&(a.postParams["server.name"]=d,a.postParams["server.version"]=b);(d=O("PLAYER_CLIENT_VERSION"))&&(a.postParams["client.player.version"]=d)}ep(`${O("ECATCHER_REPORT_HOST","")}/error_204`,a)}
function zw(a,...b){a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push(...b)}
;function Aw(a){for(const b of a.register.values())b.Ad("ABORTED")}
class Bw{constructor(){this.register=new Map}clear(){Aw(this);this.register.clear()}}var Cw=new Bw;let Dw=Date.now().toString();
function Ew(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Dw)for(a=1,b=0;b<Dw.length;b++)d[a%16]^=d[(a-1)%16]/4^Dw.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Fw;let Gw=t.ytLoggingDocDocumentNonce_;Gw||(Gw=Ew(),v("ytLoggingDocDocumentNonce_",Gw));Fw=Gw;var Hw=class{constructor(a){this.h=a}getAsJson(){const a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new $n;
this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&E(a,2,fe(this.h.veType)),this.h.veCounter!==void 0&&E(a,6,fe(this.h.veCounter)),this.h.elementIndex!==void 0&&E(a,3,fe(this.h.elementIndex)),this.h.isCounterfactual&&E(a,5,be(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();nf(a,$n,7,b)}this.h.youtubeData!==void 0&&nf(a,Zn,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&
!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function Iw(a=0){return O("client-screen-nonce-store",{})[a]}
function Jw(a,b=0){let c=O("client-screen-nonce-store");c||(c={},vo("client-screen-nonce-store",c));c[b]=a}
function Kw(a=0){return a===0?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function Lw(a=0){return O(Kw(a))}
v("yt_logging_screen.getRootVeType",Lw);function Mw(a=0){a=Lw(a);var b;a?b=new Hw({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):b=null;return b}
function Nw(){let a=O("csn-to-ctt-auth-info");a||(a={},vo("csn-to-ctt-auth-info",a));return a}
function Ow(){return Object.values(O("client-screen-nonce-store",{})).filter(a=>a!==void 0)}
function Pw(a=0){a=Iw(a);if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
v("yt_logging_screen.getCurrentCsn",Pw);function Qw(a,b,c){const d=Nw();(c=Pw(c))&&delete d[c];b&&(d[a]=b)}
function Rw(a){return Nw()[a]}
v("yt_logging_screen.getCttAuthInfo",Rw);v("yt_logging_screen.setCurrentScreen",function(a,b,c=0,d){if(a!==Iw(c)||b!==O(Kw(c)))if(Qw(a,d,c),Jw(a,c),vo(Kw(c),b),b=()=>{setTimeout(()=>{a&&Nq("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Fw,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Sw(){const a=ih(Tw);let b;return(new bj((c,d)=>{a.onSuccess=e=>{Qo(e)?c(new Uw(e)):d(new Vw(`Request failed, status=${Ro(e)}`,"net.badstatus",e))};
a.onError=e=>{d(new Vw("Unknown request error","net.unknown",e))};
a.onTimeout=e=>{d(new Vw("Request timed out","net.timeout",e))};
b=ep("//googleads.g.doubleclick.net/pagead/id",a)})).Fc(c=>{c instanceof kj&&b?.abort();
return gj(c)})}
var Vw=class extends Ba{constructor(a,b,c){super(`${a}, errorCode=${b}`);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}},Uw=class{constructor(a){this.xhr=a}};function Ww(a,b=null){a.ha=2;a.h=b}
function Xw(a,b=null){a.ha=1;a.h=b}
class Yw{constructor(){this.ha=0;this.h=null}then(a,b,c){return this.ha===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Zw(a):this.ha===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:$w(a):this}getValue(){return this.h}isRejected(){return this.ha==2}}Yw.prototype.$goog_Thenable=!0;function $w(a=null){const b=new Yw;Ww(b,a);return b}
function Zw(a=null){const b=new Yw;Xw(b,a);return b}
;function ax(a){const b=O("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(Ab(a)));return a}
function bx(a){const b={};R("json_condensed_response")&&(b.prettyPrint="false");return a=Ko(a,b||{},!1)}
function cx(a,b="POST"){a={method:b,mode:Lo(a)?"same-origin":"cors",credentials:Lo(a)?"same-origin":"include"};b={};const c={};for(const d of Object.keys(b))b[d]&&(c[d]=b[d]);Object.keys(c).length>0&&(a.headers=c);return a}
;function dx(){return Rg()||(Oc||Pc)&&Uq("applewebkit")&&!Uq("version")&&(!Uq("safari")||Uq("gsa/"))||Nc&&Uq("version/")?!0:O("EOM_VISITOR_DATA")?!1:!0}
;function ex(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function fx(a){var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");let c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(d){return b}if(c)a:for(const d in eo)if(eo[d]==c.embeddedPlayerMode){b=eo[d];break a}return b}
;class gx extends Ba{constructor(a){super(a.message||a.description||a.name);this.isMissing=a instanceof hx;this.isTimeout=a instanceof Vw&&a.errorCode=="net.timeout";this.isCanceled=a instanceof kj}}gx.prototype.name="BiscottiError";class hx extends Ba{constructor(){super("Biscotti ID is missing from server")}}hx.prototype.name="BiscottiMissingError";const Tw={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};let ix=null;
function jx(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!dx())return Error("User has not consented - not fetching biscotti id.");const a=O("PLAYER_VARS",{});if(gh(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(fx(a)==="EMBEDDED_PLAYER_MODE_PFL")return Error("Biscotti id fetching has been disabled for pfl.")}
function qo(){const a=jx();if(a!==void 0)return gj(a);ix||(ix=Sw().then(kx).Fc(b=>lx(2,b)));
return ix}
function kx(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new hx;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new hx;a=a.id;ro(a);ix=Zw(a);mx(18E5,2);return a}
function lx(a,b){b=new gx(b);ro("");ix=$w(b);a>0&&mx(12E4,a-1);throw b;}
function mx(a,b){So(function(){Sw().then(kx,c=>lx(b,c)).Fc($i)},a)}
function nx(){try{const a=w("yt.ads.biscotti.getId_");return a?a():qo()}catch(a){return gj(a)}}
;function ox(a){a&&(a.dataset?a.dataset[px()]="true":bb(a))}
function qx(a){return a?a.dataset?a.dataset[px()]:a.getAttribute("data-loaded"):null}
const rx={};function px(){return rx.loaded||(rx.loaded="loaded".replace(/\-([a-z])/g,(a,b)=>b.toUpperCase()))}
;class sx{constructor(a){a=a||{};const b={},c={};this.url=a.url||"";this.args=a.args||ih(b);this.assets=a.assets||{};this.attrs=a.attrs||ih(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}clone(){const a=new sx;for(const b in this)if(this.hasOwnProperty(b)){const c=this[b];ja(c)=="object"?a[b]=ih(c):a[b]=c}return a}};var tx=["att/get"],ux=["share/get_share_panel"],vx=["share/get_web_player_share_panel"],wx=["feedback"],xx=["notification/modify_channel_preference"],yx=["browse/edit_playlist"],zx=["subscription/subscribe"],Ax=["subscription/unsubscribe"];const Bx=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",Bx);function Cx(a){so(Bx,arguments)}
;function Dx(a,b,c=null){Ex(a,b,c)}
function Fx(a){a=Gx(a);const b=document.getElementById(a);b&&(Qu(a),b.parentNode.removeChild(b))}
function Hx(a,b){a&&b&&(a=`${ma(b)}`,(a=Ix[a])&&Ou(a))}
function Ex(a,b,c=null){const d=Gx(typeof a==="string"?a:a.toString());let e=document.getElementById(d);var f=e&&qx(e);const g=e&&!f;f?b&&b():(b&&(f=Mu(d,b),b=`${ma(b)}`,Ix[b]=f),g||(e=Jx(a,d,()=>{qx(e)||(ox(e),Pu(d),So(()=>{Qu(d)},0))},c)))}
function Jx(a,b,c,d=null){const e=ph("SCRIPT");e.id=b;e.onload=()=>{c&&setTimeout(c,0)};
e.onreadystatechange=()=>{switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);$a(e,typeof a==="string"?Vn(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Gx(a){const b=document.createElement("a");Sa(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return`js-${vb(a)}`}
const Ix={};function Kx(a){const b=Lx(a);let c=document.getElementById(b);const d=c&&qx(c);d||c&&!d||(c=Mx(a,b,()=>{if(!qx(c)){ox(c);Pu(b);const e=ra(Qu,b);So(e,0)}}))}
function Mx(a,b,c){const d=document.createElement("link");d.id=b;d.onload=()=>{c&&setTimeout(c,0)};
a=Vn(a);eb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Lx(a){const b=ph("A");Sa(b,new Ka(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return`css-${vb(a)}`}
;function Nx(a,...b){if(!Ox(a)||b.some(c=>!Ox(c)))throw Error("Only objects may be merged.");
for(const c of b)Px(a,c)}
function Px(a,b){for(const c in b)if(Ox(b[c])){if(c in a&&!Ox(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Px(a[c],b[c])}else if(Qx(b[c])){if(c in a&&!Qx(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Rx(a[c],b[c])}else a[c]=b[c];return a}
function Rx(a,b){for(const c of b)Ox(c)?a.push(Px({},c)):Qx(c)?a.push(Rx([],c)):a.push(c);return a}
function Ox(a){return typeof a==="object"&&!Array.isArray(a)}
function Qx(a){return typeof a==="object"&&Array.isArray(a)}
;const Sx="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Tx(a,b){var c=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=yb(window.location.href);d&&c.push(d);d=yb(a);if(fb(c,d)>=0||!d&&a.lastIndexOf("/",0)==0)if(c=document.createElement("a"),Sa(c,a),a=c.href)if(a=Ab(a),a=Bb(a))if(!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Pw()},b)),e){var e=parseInt(e,10);isFinite(e)&&e>0&&Ux(a,b,e)}else Ux(a,b)}
function Ux(a,b,c){a=Vx(a);b=b?Eb(b):"";c=c||5;dx()&&Gp(a,b,c)}
function Vx(a){for(let b of Sx)a=Jb(a,b);return"ST-"+vb(a).toString(36)}
;function Wx(a){let b=0;for(let c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;class Xx extends Hs{constructor(a){super(arguments);this.csn=a}}const Qs=new Is("screen-created",Xx),Yx=[];let Zx=0;const $x=new Map,ay=new Map,by=new Map;
function cy(a,b,c,d,e=!1,f={}){Object.assign(f,dy({cttAuthInfo:Rw(b)||void 0},b));for(const h of d){var g=h.getAsJson();(eh(g)||!g.trackingParams&&!g.veType)&&V(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){const k=ey(h,b);if(g.veType&&!ay.has(k)&&!by.has(k)&&!e){if(!R("il_attach_cache_limit")||$x.size<1E3){$x.set(k,[a,b,c,h]);return}R("il_attach_cache_limit")&&$x.size>1E3&&V(new S("IL Attach cache exceeded limit"))}g=ey(c,b);$x.has(g)?fy(c,b):by.set(g,!0)}}d=d.filter(h=>
{h.csn!==b?(h.csn=b,h=!0):h=!1;return h});
c={csn:b,parentVe:c.getAsJson(),childVes:ib(d,h=>h.getAsJson())};
b==="UNDEFINED_CSN"?gy("visualElementAttached",f,c):a?jw("visualElementAttached",c,a,f):Nq("visualElementAttached",c,f)}
function gy(a,b,c){Yx.push({nf:a,payload:c,fi:void 0,options:b});Zx||(Zx=Rs())}
function Ss(a){if(Yx){for(const b of Yx)b.payload&&(b.payload.csn=a.csn,Nq(b.nf,b.payload,b.options));Yx.length=0}Zx=0}
function ey(a,b){return`${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`}
function fy(a,b){a=ey(a,b);$x.has(a)&&(b=$x.get(a)||[],cy(b[0],b[1],b[2],[b[3]],!0,{}),$x.delete(a))}
function dy(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;class hy{flush(a=[],b=!1){if(R("enable_client_streamz_web"))for(const c of a)a=Fg(c),this.h&&nf(a,Bg,2,this.h),a={serializedIncrementBatch:Tc(a.j())},Nq("streamzIncremented",a,{sendIsolatedPayload:b})}}var vl=class extends hy{constructor(){super()}},iy=class extends hy{constructor(a){super();var b=new Bg;var c=new Ag;c=F(c,1,"botguard");a=F(c,2,a);a=mf(a,Ag);hf(b,1,Cg,a);a&&!wd(a)&&Ue(b.U);this.h=b}};let ul;const jy=new Map;function ky(){try{return!!self.localStorage}catch{return!1}}
;function ly(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function my(a){if(ky()){var b=Object.keys(window.localStorage);for(const c of b)b=ly(c),b===void 0||a.includes(b)||self.localStorage.removeItem(c)}}
function ny(){if(!ky())return!1;const a=Yp();var b=Object.keys(window.localStorage);for(const c of b)if(b=ly(c),b!==void 0&&b!==a)return!0;return!1}
;function oy(){let a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch{a=!0}return(O("INNERTUBE_CLIENT_NAME")==="WEB"||O("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function py(){try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");vo("LOGIN_INFO","");window.sessionStorage.setItem("from_switch_account","1");var a;let c=qy;c||(c=document.querySelector("#persist_identity"));if(a=c){var b=a.src?(new URL(a.src)).origin:"*";a.contentWindow?.postMessage({action:"clear"},b)}}catch{}}
function ry(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))py();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))py();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof om?a.clone():new om(a)).h.endsWith("/youtubeoptions");b&&py()}if(O("LOGGED_IN",!0)&&oy()){b=O("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=yb(window.location.href);c&&b.push(c);c=yb(a);fb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=Ab(a),(b=Bb(b))?(b=Vx(b),b=(b=Hp(b)||null)?Ho(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;oy()?(d||(d=O("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Tx(a,b)}}
let qy=null;function sy(a,b={},c=!1){const d=O("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Tx(a,b);if(c)return!1;ry(a);b=window;a=Fb(a,{});ry(a);a=Pa(a+"",Oa)||La;b=b.location;a=Ra(a);a!==void 0&&(b.href=a);return!0}
;function ty(a){if(gh(O("PLAYER_VARS",{}))!="1"){a&&po();try{nx().then(()=>{},()=>{}),So(ty,18E5)}catch(b){zo(b)}}}
;var uy=class{constructor(){this.h={}}contains(a){return Object.prototype.hasOwnProperty.call(this.h,a)}get(a){if(this.contains(a))return this.h[a]}set(a,b){this.h[a]=b}Rb(){return Object.keys(this.h)}remove(a){delete this.h[a]}};new class{constructor(){this.mappings=new uy}get(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Ta(b,void 0)}}return a}};const vy=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function wy(){var a=window.location.href;if(R("kevlar_disable_theme_param"))return null;const b=zb(a);if(R("enable_dark_theme_only_on_shorts")&&b?.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{const c=Io(a).theme;return vy.get(c)||null}catch(c){}return null}
;function xy(a){const b=new ek;if(a.interpreterJavascript){var c=Tn(a.interpreterJavascript);c=Ya(c).toString();var d=new ck;F(d,6,c);nf(b,ck,1,d,Bd)}else a.interpreterUrl&&(c=Un(a.interpreterUrl),c=Ia(c).toString(),d=new dk,F(d,4,c),nf(b,dk,2,d,Bd));a.interpreterHash&&gf(b,3,ue(a.interpreterHash),Bd);a.program&&gf(b,4,ue(a.program),Bd);a.globalName&&gf(b,5,ue(a.globalName),Bd);a.clientExperimentsStateBlob&&gf(b,7,ue(a.clientExperimentsStateBlob),Bd);return b}
function yy(a){const b={};a=a.split("&");for(const c of a)a=c.split("="),a.length===2&&(b[a[0]]=a[1]);return b}
function zy(a){return Number(a.t)||7200}
;async function Ay(){var a=window;await Ob(By());const b=a.bgevmc;if(!b)throw Error("BGE Controls not exposed");return{pause:()=>{b.p()},
resume:()=>{b.r()},
checkForRefresh:()=>b.cr()}}
function By(){return R("bg_st_hr")?"havuokmhhs-0":`${"havuokmhhs"}-${Math.floor(globalThis.performance?.timeOrigin||0)}`}
function Cy(a){window.bgens=a}
class Dy{constructor(a){this.h=a}bindInnertubeChallengeFetcher(a){this.h.bicf(a)}registerChallengeFetchedCallback(a){this.h.bcr(a)}getLatestChallengeResponse(){return this.h.blc()}}function Ey(){return new Promise(a=>{const b=window;b.ntpevasrs!==void 0?a(new Dy(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(c=>{a(new Dy(c))}))})}
;const Fy=[];var Gy=function(a,...b){if(b.length===0)return Ha(a[0]);let c=a[0];for(let d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Ha(c)}`https://static.doubleclick.net/instream/ad_status.js`;
let Hy=!1;function Iy(){if(dx()){var a=O("PLAYER_VARS",{});if(gh(a)!="1"&&fx(a)!=="EMBEDDED_PLAYER_MODE_PFL"){var b=()=>{Hy=!0;"google_ad_status"in window?vo("DCLKSTAT",1):vo("DCLKSTAT",2)};
try{const c=Va(document);Dx(Gy,b,c)}catch(c){}Fy.push(Hl.ra(()=>{if(!(Hy||"google_ad_status"in window)){try{Hx(Gy.toString(),b)}catch(c){}Hy=!0;vo("DCLKSTAT",3)}},5E3))}}}
function Jy(){const a=Number(O("DCLKSTAT",0));return isNaN(a)?0:a}
;var W=class{constructor(a){this.h=a}};[new W("b.f_"),new W("j.s_"),new W("r.s_"),new W("e.h_"),new W("i.s_"),new W("s.t_"),new W("p.h_"),new W("s.i_"),new W("f.i_"),new W("a.b_"),new W("a.o_"),new W("g.o_"),new W("p.i_"),new W("p.m_"),new W("n.k_"),new W("i.f_"),new W("a.s_"),new W("m.c_"),new W("n.h_"),new W("o.p_"),new W("m.p_"),new W("o.a_"),new W("d.p_"),new W("e.i_")].reduce((a,b)=>{a[b.h]=b;return a},{});function Ky(a){return w("ytcsi."+(a||"")+"data_")||Ly(a)}
function My(){const a=Ky();a.info||(a.info={});return a.info}
function Ny(a){a=Ky(a);a.metadata||(a.metadata={});return a.metadata}
function Oy(a){a=Ky(a);a.tick||(a.tick={});return a.tick}
function Py(a){a=Ky(a);if(a.gel){const b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Qy(a){a=Py(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ry(){const a=Py();a.preLoggedGelInfos||(a.preLoggedGelInfos=[]);return a.preLoggedGelInfos}
function Sy(a){let b=Ky(a).nonce;b||(b=Ew(),Ky(a).nonce=b);return b}
function Ly(a){const b={tick:{},info:{}};v("ytcsi."+(a||"")+"data_",b);return b}
;function Ty(){let a=w("ytcsi.debug");a||(a=[],v("ytcsi.debug",a),v("ytcsi.reference",{}));return a}
function Uy(a){a=a||"";const b=Vy();if(b[a])return b[a];const c=Ty(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
function Vy(){const a=w("ytcsi.reference");if(a)return a;Ty();return w("ytcsi.reference")}
;var Wy={auto_search:"LATENCY_ACTION_AUTO_SEARCH",ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",cast_splash:"LATENCY_ACTION_CAST_SPLASH",channel_activity:"LATENCY_ACTION_FAMILY_CENTER_CHANNEL_ACTIVITY",channels:"LATENCY_ACTION_CHANNELS",chips:"LATENCY_ACTION_CHIPS",commerce_transaction:"LATENCY_ACTION_COMMERCE_TRANSACTION",direct_playback:"LATENCY_ACTION_DIRECT_PLAYBACK",editor:"LATENCY_ACTION_EDITOR",
embed:"LATENCY_ACTION_EMBED",embed_no_video:"LATENCY_ACTION_EMBED_NO_VIDEO",entity_key_serialization_perf:"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",entity_key_deserialization_perf:"LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",explore:"LATENCY_ACTION_EXPLORE",favorites:"LATENCY_ACTION_FAVORITES",home:"LATENCY_ACTION_HOME",inboarding:"LATENCY_ACTION_INBOARDING",landing:"LATENCY_ACTION_LANDING",learning:"LATENCY_ACTION_LEARNING",learning_journey_browse:"LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",
learning_journey_watch:"LATENCY_ACTION_LEARNING_JOURNEY_WATCH",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",live_pagination:"LATENCY_ACTION_LIVE_PAGINATION",management:"LATENCY_ACTION_MANAGEMENT",mini_app:"LATENCY_ACTION_MINI_APP_PLAY",notification_settings:"LATENCY_ACTION_FAMILY_CENTER_NOTIFICATION_SETTINGS",onboarding:"LATENCY_ACTION_ONBOARDING",parent_profile_settings:"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",parent_tools_collection:"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",parent_tools_dashboard:"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",
player_att:"LATENCY_ACTION_PLAYER_ATTESTATION",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",profile_settings:"LATENCY_ACTION_KIDS_PROFILE_SETTINGS",profile_switcher:"LATENCY_ACTION_LOGIN",projects:"LATENCY_ACTION_PROJECTS",reel_watch:"LATENCY_ACTION_REEL_WATCH",results:"LATENCY_ACTION_RESULTS",red:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",premium:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",privacy_policy:"LATENCY_ACTION_FAMILY_CENTER_PRIVACY_POLICY",review:"LATENCY_ACTION_REVIEW",
search_overview_answer:"LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",search_ui:"LATENCY_ACTION_SEARCH_UI",search_suggest:"LATENCY_ACTION_SUGGEST",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",secret_code:"LATENCY_ACTION_KIDS_SECRET_CODE",seek:"LATENCY_ACTION_PLAYER_SEEK",settings:"LATENCY_ACTION_SETTINGS",store:"LATENCY_ACTION_STORE",supervision_dashboard:"LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_DASHBOARD",bedtime_reminder_settings:"LATENCY_ACTION_FAMILY_CENTER_BEDTIME_REMINDER_SETTINGS",break_reminder_settings:"LATENCY_ACTION_FAMILY_CENTER_BREAK_REMINDER_SETTINGS",
supervision_settings_dashboard:"LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_SETTINGS_DASHBOARD",time_management:"LATENCY_ACTION_FAMILY_CENTER_TIME_MANAGEMENT",update_profile:"LATENCY_ACTION_FAMILY_CENTER_UPDATE_PROFILE",viewing_permissions:"LATENCY_ACTION_FAMILY_CENTER_VIEWING_PERMISSIONS",shorts_settings:"LATENCY_ACTION_FAMILY_CENTER_SHORTS_SETTINGS",privacy_settings:"LATENCY_ACTION_FAMILY_CENTER_PRIVACY_SETTINGS",tenx:"LATENCY_ACTION_TENX",video_preview:"LATENCY_ACTION_VIDEO_PREVIEW",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",
watch:"LATENCY_ACTION_WATCH",watch_it_again:"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING",voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT",cast_load_by_entity_to_watch:"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",networkless_performance:"LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
gel_compression:"LATENCY_ACTION_GEL_COMPRESSION",gel_jspb_serialize:"LATENCY_ACTION_GEL_JSPB_SERIALIZE",attestation_challenge_fetch:"LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"};function Xy(a){return Wy[a]||"LATENCY_ACTION_UNKNOWN"}
;var Yy=class extends Hs{constructor(a,b){super(arguments);this.timer=b}},Zy=new Is("aft-recorded",Yy);v("ytLoggingGelSequenceIdObj_",t.ytLoggingGelSequenceIdObj_||{});const $y=t.ytLoggingLatencyUsageStats_||{};v("ytLoggingLatencyUsageStats_",$y);function az(){bz.instance||(bz.instance=new bz);return bz.instance}
function cz(a,b){$y[b]=$y[b]||{count:0};var c=$y[b];c.count++;c.time=U();a.h||(a.h=Zp(()=>{const d=U();for(const e in $y)$y[e]&&d-$y[e].time>6E4&&delete $y[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||V(c)),!0):!1}
var bz=class{constructor(){this.h=0}tick(a,b,c,d){cz(this,`tick_${a}_${b}`)||Nq("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})}info(a,b,c){const d=Object.keys(a).join("");cz(this,`info_${d}_${b}`)||(a=Object.assign({},a),a.clientActionNonce=b,Nq("latencyActionInfo",a,{cttAuthInfo:c}))}jspbInfo(){}span(a,b,c){const d=Object.keys(a).join("");cz(this,`span_${d}_${b}`)||(a.clientActionNonce=b,Nq("latencyActionSpan",a,{cttAuthInfo:c}))}};const dz=window;class ez{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
function fz(){var a;R("csi_use_performance_navigation_timing")?(a=X?.getEntriesByType?.("navigation")?.[0]?.toJSON?.())?(a.requestStart=gz(a.requestStart),a.responseEnd=gz(a.responseEnd),a.redirectStart=gz(a.redirectStart),a.redirectEnd=gz(a.redirectEnd),a.domainLookupEnd=gz(a.domainLookupEnd),a.connectStart=gz(a.connectStart),a.connectEnd=gz(a.connectEnd),a.responseStart=gz(a.responseStart),a.secureConnectionStart=gz(a.secureConnectionStart),a.domainLookupStart=gz(a.domainLookupStart),a.isPerformanceNavigationTiming=
!0):a=X.timing:a=R("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function gz(a){return Math.round(hz()+a)}
function hz(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=dz.performance||dz.mozPerformance||dz.msPerformance||dz.webkitPerformance||new ez;let iz=!1,jz=!1;
var kz={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj",
'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},lz=qa(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||$i,X);
function mz(){const a=Ry(),b=Qy();var c=void 0;for(var d=0;d<a.length;d++){const h=a[d];if(h.loadType){c=h.loadType;break}}if(Ny().loadType==="cold"&&(b.loadType==="cold"||c==="cold")){c=Oy();d=Py();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||typeof c[e]==="number"&&Z(e,nz(e));var f={},g=!1;e=h=>{Nx(b,h);Nx(f,h);g=!0};
for(const h of a)e(h);g&&oz(f)}}
function pz(a,b){Z("_start",a,b)}
function oz(a,b){if(!R("web_csi_action_sampling_enabled")||!Ky(b).actionDisabled){var c=Uy(b||"");Nx(c.info,a);a.loadType&&(c=a.loadType,Ny(b).loadType=c);Nx(Qy(b),a);c=Sy(b);b=Ky(b).cttAuthInfo;az().info(a,c,b)}}
function qz(){return($u().resolve(new Uu(ys))?.sc()?.loggingHotConfig?.csiConfig?.debugTicks??[]).map(a=>Object.values(a)[0])}
function Z(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Ky(c).actionDisabled){var d=Sy(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){$u().resolve(new Uu(ys))?.sc()&&!jz&&(jz=!0,Z("gcfl",U(),c));e=$u().resolve(new Uu(ys))?.sc()?.loggingHotConfig?.csiConfig?.debugSampleWeight||0;var f;if(f=e!==0)b:{f=qz();if(f.length>0)for(let h=0;h<f.length;h++)if(a===f[h]){f=!0;break b}f=!1}f?(e=Wx(d)%e!==0,Ky(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,oz(f,c)),Ky(c).debugTicksExcludedLogged=
!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=` (${c})`),f===void 0||R("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=R("csi_use_performance_navigation_timing")?f-X.timeOrigin:f-(X.timeOrigin||X.timing.navigationStart);try{X.mark(e,{startTime:f})}catch(h){}}e=Uy(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(var g of e.callback[a])g();g=Py(c);g.gelTicks&&(g.gelTicks[a]=!0);e=Oy(c);g=b||U();e[a]=g;e=Ky(c).cttAuthInfo;a==="_start"?
(a=az(),cz(a,`baseline_${d}`)||Nq("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):az().tick(a,d,b,e);rz(c);return g}}}
function sz(){const a=X.getEntriesByType?.("mark");a&&a.forEach(b=>{b.name.startsWith("mark_")&&X.clearMarks?.(b.name)})}
function tz(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=su+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function uz(){var a=O("TIMING_INFO",{});const b={},c=(d,e,f)=>{e=e.match("_rid")?e.split("_rid")[0]:e;typeof f==="number"&&(f=JSON.stringify(f));d.requestIds?d.requestIds.push({endpoint:e,id:f}):d.requestIds=[{endpoint:e,id:f}]};
for(const [d,e]of Object.entries(a)){a=d;const f=e;switch(a){case "GetBrowse_rid":c(b,a,f);break;case "GetGuide_rid":c(b,a,f);break;case "GetHome_rid":c(b,a,f);break;case "GetPlayer_rid":c(b,a,f);break;case "GetSearch_rid":c(b,a,f);break;case "GetSettings_rid":c(b,a,f);break;case "GetTrending_rid":c(b,a,f);break;case "GetWatchNext_rid":c(b,a,f);break;case "yt_red":b.isRedSubscriber=!!f;break;case "yt_ad":b.isMonetized=!!f}}return b}
function vz(a,b){a=document.querySelector(a);if(!a)return!1;var c="";const d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Va(document)&&a.setAttribute("nonce",Va(document));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=hz(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function wz(){const a=window.location.protocol;var b=X.getEntriesByType("resource");b=hb(b,c=>c.name.indexOf(`${a}//fonts.gstatic.com/s/`)===0);
(b=jb(b,(c,d)=>d.duration>c.duration?d:c))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",gz(b.startTime)),Z("wffe",gz(b.responseEnd)))}
function xz(a){var b=nz("aft",a);if(b)return b;b=O((a||"")+"TIMING_AFT_KEYS",["ol"]);const c=b.length;for(let d=0;d<c;d++){const e=nz(b[d],a);if(e)return e}return NaN}
function yz(a){v("ytglobal.timing"+(a||"")+"ready_",!0)}
function nz(a,b){if(a=Oy(b)[a])return typeof a==="number"?a:a[a.length-1]}
function rz(a){const b=nz("_start",a),c=xz(a),d=!iz;b&&c&&d&&(Ns(Zy,new Yy(Math.round(c-b),a)),iz=!0)}
function zz(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=kb(a,c=>c.name==="first-paint"))return gz(a.startTime)}let b;
R("csi_use_performance_navigation_timing")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.ji;return b?Math.max(0,b):0}
;function Az(a,b){P(()=>{Uy("").info.actionType=a;b&&vo("TIMING_AFT_KEYS",b);vo("TIMING_ACTION",a);var c=uz();Object.keys(c).length>0&&oz(c);c={isNavigation:!0,actionType:Xy(O("TIMING_ACTION"))};var d=O("PREVIOUS_ACTION");d&&(c.previousAction=Xy(d));if(d=O("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=O("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Pw())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=tz();if(d===1||d===-1)c.isVisible=!0;Ny();My();c.loadType="cold";d=My();var e=fz();let f=hz();const g=O("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&pz(f));d=zz();d>0&&Z("fpt",d);d=fz();d.isPerformanceNavigationTiming&&oz({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),
Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=hz()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&wz();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in kz)kz.hasOwnProperty(h)&&(e=kz[h],vz(h,e)&&d.push(e));if(d.length>0){c.resourceInfo=[];for(const k of d)c.resourceInfo.push({resourceCache:k})}oz(c);
mz();yz();h=O("TIMING_ACTION");w("ytglobal.timingready_")&&h&&Bz()&&xz()&&rz()})()}
function Cz(){var a={};P(()=>{Dz();var b=a.sampleRate;if(!R("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=Sy("attestation_challenge_fetch");b=Wx(c)%b!==0}b&&(Ky("attestation_challenge_fetch").actionDisabled=!0);Uy("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(Ky("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);vo("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");P(pz)(a.startTime,"attestation_challenge_fetch");
b={actionType:Xy("attestation_challenge_fetch")};a.hi&&(b.previousAction=Xy(O("TIMING_ACTION")));(c=Pw())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);Ez(b,"attestation_challenge_fetch");yz("attestation_challenge_fetch")})()}
function Dz(){P(()=>{Bz("attestation_challenge_fetch")&&Fz("aa",void 0,"attestation_challenge_fetch");const a=Vy();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;const b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};Ty().push(b);a.attestation_challenge_fetch=b;Ly("attestation_challenge_fetch");lz();sz()})()}
function Bz(a){return P(()=>Gz("_start",a))()}
function Ez(a,b,c=!1){P(oz)(a,b,c)}
function Fz(a,b,c){return P(Z)(a,b,c)}
function Gz(a,b){return P(()=>{const c=Oy(b);return a in c})()}
function Hz(a){if(!R("universal_csi_network_ticks"))return"";a=zb(a)||"";const b=Object.keys(Fs);for(let c=0;c<b.length;c++){const d=b[c];if(a.includes(d))return d}return""}
function Iz(a){if(!R("universal_csi_network_ticks"))return()=>{};
const b=Fs[a];return b?(Jz(b),()=>{var c=R("universal_csi_network_ticks")?(c=Gs[a])?Jz(c):!1:!1;return c}):()=>{}}
function Jz(a){return P(()=>{if(Gz(a))return!1;Fz(a,void 0,void 0);return!0})()}
function Kz(a){P(()=>{if(!Bz("attestation_challenge_fetch")||Gz(a,"attestation_challenge_fetch"))return!1;Fz(a,void 0,"attestation_challenge_fetch");return!0})()}
function Lz(){P(()=>{const a=Sy();requestAnimationFrame(()=>{setTimeout(()=>{a===Sy()&&Fz("ol",void 0,void 0)},0)})})()}
const Mz=window;Mz.ytcsi&&(Mz.ytcsi.infoGel=Ez,Mz.ytcsi.tick=Fz);function Nz(a,b){a.h=b}
async function Oz(a){t.ytAtRC?Hl.Ta(async()=>{if(t.ytAtRC){a.i.h(2,a.j++);var d=await a.Qb(Pz(null));t.ytAtRC&&t.ytAtRC(JSON.stringify(d))}else a.i.h(6,a.j++)},2,I("att_init_delay",0)):a.i.h(1,a.j++);
var b=await Ey();b.bindInnertubeChallengeFetcher(d=>{a.i.h(3,a.j++);return a.Qb(Pz(d))});
b.registerChallengeFetchedCallback(d=>{d=d.challenge;if(!d)throw Error("BGE_MACR");d={challenge:d,rb:yy(d),vm:c,bgChallenge:new ek};d=Promise.resolve(d);a.h=d});
const c=await Ob(By());b=b.getLatestChallengeResponse().challenge;if(!b)throw Error("BGE_MACIL");return{challenge:b,rb:yy(b),vm:c,bgChallenge:new ek}}
async function Qz(a){var b=Pz(mk().h);let c;try{c=await Rz(a,b)}catch(f){return V(Error("Failed to fetch attestation challenge after 5 attempts; not retrying for 24h.")),Sz(a,864E5),{challenge:"",rb:{},vm:void 0,bgChallenge:void 0}}b=c.kf;const d=c.lf;Sz(a,zy(d)*1E3);a=void 0;let e;if("c1a"in d&&c.bgChallenge){e=xy(c.bgChallenge);try{await qk(mk(),e)}catch(f){return V(f),{challenge:b,rb:d,vm:a,bgChallenge:e}}try{a=new kk({challenge:e,Bb:{qa:"aGIf"}}),await a.Fb}catch(f){V(f),a=void 0}}return{challenge:b,
rb:d,vm:a,bgChallenge:e}}
function Pz(a){const b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
async function Rz(a,b){let c=void 0,d=0;for(;d<5;){if(d>0){const e=1E3*Math.pow(2,d-1)+Math.random()*1E3;await new Promise(f=>{Zp(()=>{f(void 0)},e)})}try{a.i.h(4,a.j++);
const e=await a.Qb(b);return Tz(e)}catch(e){c=e,e instanceof Error&&V(e)}d++}throw c;}
function Sz(a,b){const c=Date.now()+b,d=async()=>{const e=c-Date.now();e<1E3?await Uz(a):Zp(d,Math.min(e,6E4))};
d()}
async function Vz(a,b){Cy(2);try{const c=await a.network.Qb(b);c?c.challenge&&!c.bgChallenge?Cy(1):Cy(4):Cy(3);return c}catch(c){Cy(3)}}
function Tz(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");const b=a.challenge,c=yy(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return{...a,kf:b,lf:c}}
async function Uz(a){const b=await Promise.race([a.h,null]);var c=Qz(a);a.h=c;b?.vm?.dispose()}
var Xz=class{constructor(a,b,c){this.network=a;this.options=b;this.M=c;this.j=0;this.h=null;this.i=new wl;b.Md?Nz(this,Oz(this)):b.preload&&Nz(this,new Promise(d=>{Zp(()=>{d(Qz(this))},0)}))}async u(){return!!await Promise.race([this.h,
null])}async o(a,b,c){this.h===null&&Nz(this,Qz(this));let d=!1;const e={};return Promise.race([(async()=>{this.options.Xh&&this.options.Md&&await (await Ay())?.checkForRefresh();var f=await this.h;e.challenge=f.challenge;if(f.vm){var g={c:f.challenge,e:a,...b};try{d=!0;let h;(h=await f.vm.snapshot({Ia:g}))?e.webResponse=h:e.error="ATTESTATION_ERROR_VM_NO_RESPONSE"}catch{e.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR"}}else"c1a"in f.rb&&(e.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");a==="ENGAGEMENT_TYPE_PLAYBACK"&&
(f=f.rb,g={},f.c6a&&(g.reportingStatus=String(Number(f.c)^Jy())),f.c6b&&(g.broadSpectrumDetectionResult=String(Number(f.c)^Number(O("CATSTAT",0)))),e.adblockReporting=g);return e})(),
Wz(c,()=>{const f=Object.assign({},e);d&&(f.error="ATTESTATION_ERROR_VM_TIMEOUT");return f})])}async Qb(a){const b=this.M;
if(!b||b.va())return Vz(this,a);Kz("att_pna");return new Promise(c=>{Hi(b,"publicytnetworkstatus-online",()=>{Vz(this,a).then(c)})})}};
function Wz(a,b){return new Promise(c=>{Zp(()=>{c(b())},a)})}
;const Yz={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function Zz(a){if(a.length===1)return a[0];var b=Yz.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Yz).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
;var bA=class{constructor(){this.h=$z.instance}Qb(a){Kz("att_fsr");return aA(this.h,a).then(b=>{Kz("att_frr");return b})}};var cA=new Tu("INNERTUBE_TRANSPORT_TOKEN");async function dA(){var a=$u().resolve(cA);if(a){if(a=await eA(a)){if(a.errorMetadata){V(Error(`Datasync IDs fetch responded with ${a.errorMetadata.status}: ${a.error}`));return}return a.Sh}V(Error("Network request to get Datasync IDs failed."))}else V(Error("InnertubeTransportService unavailable in fetchDatasyncIds"))}
;function fA(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){const c=Number(b.expirationSeconds);setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Gp("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
var gA=class{constructor(){this.h={};if(this.i=Jp()){const a=Hp("CONSISTENCY");a&&fA(this,{encryptedTokenJarContents:a})}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");b=b.xb.context?.request?.consistencyTokenJars||[];if(a=a.responseContext?.consistencyTokenJar){for(const c of b)delete this.h[c.encryptedTokenJarContents];fA(this,a)}}};const hA=window.location.hostname.split(".").slice(-2).join(".");function iA(a){return a.localStorage===void 0?new Fq("yt-client-location"):a.localStorage}
function jA(){kA=w("yt.clientLocationService.instance");kA||(kA=new lA,v("yt.clientLocationService.instance",kA));return kA}
var lA=class{constructor(){this.i=-1;let a=O("LOCATION_PLAYABILITY_TOKEN");O("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=iA(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.h=void 0)}setLocationOnInnerTubeContext(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*
1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.j||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.j||this.locationPlayabilityToken}handleResponse(a){a=a.responseContext?.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.h=void 0,O("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=iA(this))&&this.localStorage.set("yt-location-playability-token",
a,15552E3):Gp("YT_CL",JSON.stringify({loctok:a}),15552E3,hA,!0))}clearLocationPlayabilityToken(a){a==="TVHTML5"?(this.localStorage=iA(this))&&this.localStorage.remove("yt-location-playability-token"):Ip("YT_CL");this.j=void 0;this.i!==-1&&(clearTimeout(this.i),this.i=-1)}getCurrentPositionFromGeolocation(){if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));let a=!1,b=1E4;O("INNERTUBE_CLIENT_NAME")==="MWEB"&&(a=!0,
b=15E3);return new Promise((c,d)=>{navigator.geolocation.getCurrentPosition(e=>{this.h=e;c(e)},e=>{d(e)},{enableHighAccuracy:a,
maximumAge:0,timeout:b})})}createUnpluggedLocationInfo(a){const b={};
a=a.coords;a?.latitude&&(b.latitudeE7=Math.floor(a.latitude*1E7));a?.longitude&&(b.longitudeE7=Math.floor(a.longitude*1E7));a?.accuracy&&(b.locationRadiusMeters=Math.round(a.accuracy));return b}createLocationInfo(a){const b={};a=a.coords;a?.latitude&&(b.latitudeE7=Math.floor(a.latitude*1E7));a?.longitude&&(b.longitudeE7=Math.floor(a.longitude*1E7));return b}},kA;function mA(a,b=!1,c=!1){var d=O("INNERTUBE_CONTEXT");if(!d)return rw(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=jh(d);R("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=O("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;e.screenPixelDensity=
Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());Lp();var f="USER_INTERFACE_THEME_LIGHT";Op(165)?f="USER_INTERFACE_THEME_DARK":Op(174)?f="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(f="USER_INTERFACE_THEME_DARK");f=wy()||f;e.userInterfaceTheme=f;if(!b){if(f=
Vp())e.connectionType=f;R("web_log_effective_connection_type")&&(f=Wp())&&(d.client.effectiveConnectionType=f)}R("web_log_memory_total_kbytes")&&t.navigator?.deviceMemory&&(d.client.memoryTotalKbytes=`${t.navigator?.deviceMemory*1E6}`);if(R("web_gcf_hashes_innertube")){var g=xs();if(g){f=g.coldConfigData;const m=g.coldHashData;g=g.hotHashData;d.client.configInfo=d.client.configInfo||{};f&&(d.client.configInfo.coldConfigData=f);m&&(d.client.configInfo.coldHashData=m);g&&(d.client.configInfo.hotHashData=
g)}}f=Io(t.location.href);!R("web_populate_internal_geo_killswitch")&&f.internalcountrycode&&(e.internalGeo=f.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=t.location.href,R("kevlar_woffle")&&Cp.instance&&(f=Cp.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!f.h&&f.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=Bp(),e.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!R("web_lr_app_quality_killswitch")&&(f=O("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:f})),f=O("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:f}));if(!R("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch{}h=void 0}h&&(e.timeZone=h)}(h=O("EXPERIMENTS_TOKEN",
""))?e.experimentsToken=h:delete e.experimentsToken;e=Xo();gA.instance||(gA.instance=new gA);h=bh(gA.instance.h);d.request={...d.request,internalExperimentFlags:e,consistencyTokenJars:h};!R("web_prequest_context_killswitch")&&(e=O("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=e);h=Lp();e=Op(58);h=h.get("gsml","");d.user={...d.user};e&&(d.user.enableSafetyMode=e);h&&(d.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?c&&(b=Pw())&&(d.clientScreenNonce=b):!b&&(b=Pw())&&
(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=w("yt.mdx.remote.remoteClient_"))d.remoteClient=a;jA().setLocationOnInnerTubeContext(d);try{var k=Mo(),l=k.bid;delete k.bid;d.adSignalsInfo={params:[],bid:l};for(const [m,n]of Object.entries(k))k=m,l=n,d.adSignalsInfo.params?.push({key:k,value:`${l}`});if(d.client?.clientName==="TVHTML5"||d.client?.clientName==="TVHTML5_UNPLUGGED"){const m=O("INNERTUBE_CONTEXT");m.adSignalsInfo&&(d.adSignalsInfo.advertisingId=m.adSignalsInfo.advertisingId,
d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=m.adSignalsInfo.limitAdTracking)}}catch(m){rw(m)}return d}
;function nA(a){const b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1);O("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=O("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=
O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=O("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));(a=O("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a);return b}
;function oA(a){return()=>new a}
;var pA=class{u(a,b={},c=Fp){var d={context:mA(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e)return this.h(d,e,b),b=`/youtubei/v1/${Zz(this.j())}`,(e=zv(a.commandMetadata,bo)?.apiUrl)&&(b=e),b=bx(ax(b)),a={command:a,...(void 0)},d={input:b,ab:cx(b),xb:d,config:a},d.config.Lb?d.config.Lb.identity=c:d.config.Lb={identity:c},d;c=new S("Error: Failed to create Request from Command.",a);rw(c)}get o(){return!1}},qA=class extends pA{};const rA={GET_DATASYNC_IDS:oA(class extends qA{u(){return{input:"/getDatasyncIdsEndpoint",ab:cx("/getDatasyncIdsEndpoint","GET"),xb:{}}}j(){return[]}i(){}h(){}})};const sA="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store manifest player_preload shorts_prefetch".split(" "),tA=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PanelResponse"];
function uA(a,b,c){var d=vA;if($z.instance!==void 0){if(c=$z.instance,a=[d!==c.o,a!==c.da,b!==c.i,!1,!1,!1,!1],a.some(e=>e))throw new S("InnerTubeTransportService is already initialized",a);
}else $z.instance=new $z(d,a,b,c)}
function aA(a,b){var c=`/youtubei/v1/${Zz(tx)}`,d={Lb:{identity:Fp}};let e=()=>{};
e=Iz(Hz(c));b.context||(b.context=mA(void 0,!0));return new bj(async f=>{var g=ax(c);g=Lo(g)?"same-origin":"cors";g=a.i.Jd?wA(d,g):await xA(d,g);var h=bx(ax(c));h={input:h,ab:cx(h),xb:b,config:d};f(yA(a,h,g,e))})}
function eA(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};const c=zA(a,b);return c?new bj(async(d,e)=>{const f=(await c).u(b,void 0,Fp);f?(ry(f.input),e=f.ab?.mode==="cors"?"cors":void 0,e=a.i.Jd?wA(f.config,e):await xA(f.config,e),d(yA(a,f,e))):e(new S("Error: Failed to build request for command.",b))}):gj(new S("Error: No request builder found for command.",b))}
function zA(a,b){a:{a=a.o;var c=zv(b,co)?.signal;if(c&&a.Zb&&(c=a.Zb[c])){var d=c();break a}if((c=zv(b,ao)?.request)&&a.re&&(c=a.re[c])){d=c();break a}for(d in b)if(a.ld[d]&&(b=a.ld[d])){d=b();break a}d=void 0}if(d!==void 0)return Promise.resolve(d)}
function wA(a,b){a=Dp({sessionIndex:a?.Lb?.sessionIndex});return{...nA(b),...a}}
async function xA(a,b){a=Dp({sessionIndex:a?.Lb?.sessionIndex});if(!(a instanceof bj)){var c=new bj($i);cj(c,2,a);a=c}a=await a;return Promise.resolve({...nA(b),...a})}
async function yA(a,b,c,d=()=>{}){await AA(b);
const e=b.config?.requestKey;if(e&&a.h.has(e))var f=a.h.get(e);else f=JSON.stringify(b.xb),b.ab={...b.ab,headers:{...(b.ab?.headers??{}),...c}},c={...b.ab},b.ab.method==="POST"&&(c={...c,body:f}),b.config?.qf&&Fz(b.config.qf),f=a.da.fetch(b.input,c,b.config),e&&a.h.set(e,f);(f=await f)&&R("web_streaming_player")&&Array.isArray(f)&&(f=f[0].playerResponse);if(f&&"error"in f&&f?.error?.details){c=f.error.details;for(const g of c)(c=g["@type"])&&tA.indexOf(c)>-1&&(delete g["@type"],f=g)}e&&a.h.has(e)&&
a.h.delete(e);b.config?.rf&&Fz(b.config.rf);BA(a,f,b);b.config?.pf&&Fz(b.config.pf);d();return f||void 0}
async function AA(a){if(a?.xb?.context){a=a.xb.context;for(const b of[])await b.oi(a)}}
function BA(a,b,c){if(b&&!b?.sequenceMetaData?.skipProcessing&&a.j)for(const d of sA)a.j[d]&&a.j[d].handleResponse(b,c)}
var $z=class{constructor(a,b,c,d){this.o=a;this.da=b;this.i=c;this.j=d;this.h=new Map;a.Zb||(a.Zb={});a.Zb={...rA,...a.Zb}}};var CA=class extends qA{j(){return zx}get o(){return!0}i(a){return zv(a,oo)||void 0}h(a,b,c={}){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)}};var DA=class extends qA{j(){return Ax}get o(){return!0}i(a){return zv(a,no)||void 0}h(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)}};var EA=class extends qA{constructor(a){super();this.M=a}j(){return ux}i(a){return zv(a,ho)||zv(a,io)||zv(a,go)}h(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);b.clientParamIdentifier&&this.M?.h(b.clientParamIdentifier)&&(a.clientParams=this.M.i(b.clientParamIdentifier))}};EA[Su]=[new Tu("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN")];var FA=class extends qA{j(){return wx}get o(){return!0}i(a){return zv(a,fo)||void 0}h(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))}};var GA=class extends qA{j(){return wx}i(a){return zv(a,mo)}get o(){return!0}h(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)}};var HA=class extends qA{j(){return xx}i(a){return zv(a,lo)||void 0}h(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)}};var IA=class extends qA{j(){return yx}i(a){return zv(a,ko)||void 0}h(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)}};var JA=class extends qA{j(){return vx}i(a){return zv(a,jo)}h(a,b,c={}){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)}};let KA=t.caches,LA;function MA(a){const b=a.indexOf(":");return b===-1?{xd:a}:{xd:a.substring(0,b),datasyncId:a.substring(b+1)}}
async function NA(){return LA!==void 0?LA:LA=new Promise(async a=>{try{await KA.open("test-only"),await KA.delete("test-only")}catch(b){if(b instanceof Error&&b.name==="SecurityError"){a(!1);return}}a("caches"in window)})}
async function OA(a){if(await NA()){var b=[],c=await KA.keys();for(const d of c)({datasyncId:c}=MA(d)),!c||a.includes(c)||b.push(KA.delete(d));Promise.all(b).then(d=>d.some(e=>e))}}
async function PA(){if(!await NA())return!1;const a=Yp("cache contains other");var b=await KA.keys();for(const c of b)if({datasyncId:b}=MA(c),b&&b!==a)return!0;return!1}
;function QA(){try{return!!self.sessionStorage}catch{return!1}}
;function RA(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function SA(a){if(QA()){var b=Object.keys(window.sessionStorage);for(const c of b)b=RA(c),b===void 0||a.includes(b)||self.sessionStorage.removeItem(c)}}
function TA(){if(!QA())return!1;const a=Yp();var b=Object.keys(window.sessionStorage);for(const c of b)if(b=RA(c),b!==void 0&&b!==a)return!0;return!1}
;function UA(){dA().then(a=>{a&&($r(a),OA(a),my(a),SA(a))})}
function VA(){var a=new fu;Hl.ra(async()=>{if(!R("ytidb_clear_optimizations_killswitch")){var b=Yp("clear");if(b.startsWith("V")&&b.endsWith("||")){b=[b];$r(b);OA(b);my(b);SA(b);return}b=ny();const c=TA(),d=await PA(),e=await as();if(!(b||c||d||e))return}a.va()?UA():Hi(a,"publicytnetworkstatus-online",UA)})}
;function WA(a){return new Promise(b=>{window.setTimeout(b,a)})}
async function Ak(a,b,c){Cz();Fz("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new Aj(9,"Missing fetcher");const d=await a.h(b,c);b=d?.bgChallenge;if(!b)throw new Aj(15,"Missing field");a.i=d;a.j.forEach(e=>{e(d)});
a=xy(b);Fz("att_fc",void 0,"attestation_challenge_fetch");Dz();return a}
async function il(a,b){const c=new Oh(100,3E5,.25,2);let d=void 0;for(;c.i<10;)try{return c.i>0&&await WA(c.getValue()),await XA(a,b)}catch(e){d=e instanceof Aj?e:new Aj(9,e instanceof Error?e.message:"Unknown"),Ph(c)}if(d)throw d;throw new Aj(9,"Unknown error");}
function XA(a,b){b=tk(uk(new vk,b),a.requestKey);const c=new ik,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=()=>{if(Qo(d)){const e=Fl(d.responseText);c.resolve(e)}else c.reject(new Aj(yj(Ro(d)),d.statusText))};
d.onerror=()=>{c.reject(new Aj(yj(Ro(d)),d.statusText))};
d.send(b.serialize());return c.promise}
var YA=class{constructor(a,b,c){this.requestKey=a;this.o=b;this.i=c;this.u=()=>new XMLHttpRequest;
this.h=void 0;this.j=[]}getLatestChallengeResponse(){return this.i}};function ZA(a){const b={bicf:d=>{a.h=d},
blc:()=>a.getLatestChallengeResponse(),
bcr:d=>{a.j.push(d)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(const d of c.ntpqfbel)d(b);c.ntpqfbel=void 0}
;function $A(a){if(a instanceof Error){var b=w("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function aB(a,b){a=new bB(a,b);cB(a);b?.Uh||dB(a)}
function cB(a){if(!a.vm){var b={maxAttempts:5,Bd:a.ttlSeconds*1E3};a.Mb.ytcsi?.tick?.("pot_ist");a.vm=a.Qd({Ma:a.Ma,Bb:{disable:R("html5_web_po_disable_remote_logging"),qa:"aGIf",Ge:Vo(),ef:R("wpo_dis_lfdms")?0:1E3,Hb:d=>{var e=jy.get(d);e||(e=new iy(d),e=new xj(e),jy.set(d,e));return e}},
Ib:b,Pe:a.bgChallenge,vc:$A});a.h=Date.now();Fk(a.vm,()=>{a.h=Date.now()});
a.Mb.bgevmc={p:()=>{a.vm?.pause()},
r:()=>{a.vm?.resume()},
cr:()=>a.vm?.checkForRefresh()??Promise.resolve()};
Vb(a.vm,async()=>dB(a),By());
var c=a.j.bind(a);a.Vc&&a.ttlSeconds>0&&a.Vc.then(d=>{d.listen("publicytnetworkstatus-online",c)});
a.Cd(c)}}
function dB(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new sl({vm:a.vm,Ma:a.Ma,gd:!0,onError:$A,Ib:a.Sd});return a.i}
var bB=class{constructor(a,b){this.h=0;this.Mb=b?.Mb??window;this.Vc=b?.Vc;this.requestKey=b?.requestKey??(Wo("par_bir_key")||"O43z0dpjhgX20SCx4KAo");this.Qd=b?.Qd??(d=>new Ik(d));
const c=b?.Zh??((d,e,f)=>new YA(d,e,f));
this.bgChallenge=xy(a.bgChallenge);this.ttlSeconds=zy(yy(a.challenge||""));this.Ma=c(this.requestKey,R("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(t.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);this.Sd=b?.Sd;ZA(this.Ma);this.Cd=b?.Cd??(d=>{zi(this.Mb.document,"visibilitychange",()=>{this.Mb.document.visibilityState==="visible"&&d()})})}j(){Date.now()>
this.h+this.ttlSeconds*1E3&&this.vm?.H()}};
function eB(a){try{const b=JSON.parse(a);if(b.bgChallenge)return b}catch(b){}}
function fB(a=window){var b={},c=a.ytAtR;b?.rd?.ri();if(c){if(c=eB(c))b?.rd?.Ad("SUCCESS"),aB(c,b);a.ytAtR=void 0}else a.ytAtRC=d=>{if(d=eB(d))b?.rd?.Ad("SUCCESS"),aB(d,b),a.ytAtRC=void 0}}
;const gB=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function hB(a,b,c,d,e,f){c?(a.state=2,Dx(Vn(c),()=>{window.trayride?iB(a,d,e):(a.state=3,Fx(c),V(new S("BL:ULB",`${c}`)))},f)):b?(f=ph("SCRIPT"),b instanceof Wa?(f.textContent=Ya(b),Za(f)):f.textContent=b,f.nonce=Va(document),document.head.appendChild(f),document.head.removeChild(f),window.trayride?iB(a,d,e):(a.state=4,V(new S("BL:ULBJ")))):V(new S("BL:ULV"))}
function iB(a,b,c){a.state=5;const d=!!a.h&&gB.includes(yb(a.h)||"");try{const e=new kk({program:b,globalName:"trayride",Bb:{disable:!R("att_web_record_metrics")||!R("att_skip_metrics_for_cookieless_domains_ks")&&d,qa:"aGIf"}});e.Fb.then(()=>{a.state=6;c&&c(b)});
a.i(e)}catch(e){a.state=7,e instanceof Error&&V(e)}}
var jB=class{constructor(){this.state=1;this.vm=null;this.h=void 0}initialize(a,b,c,d){this.h=d;if(a.program){var e;d=a.interpreterUrl??null;a.interpreterSafeScript?e=Tn(a.interpreterSafeScript):e=a.interpreterScript??null;a.interpreterSafeUrl&&(d=Un(a.interpreterSafeUrl).toString());hB(this,e,d,a.program,b,c)}else V(Error("BL:CIP"))}isLoading(){return this.state===2}invoke(a={}){return this.j()?this.o({Ia:a}):null}dispose(){this.i(null);this.state=8}j(){return!!this.vm}o(a){return this.vm.Hd(a)}i(a){Lb(this.vm);
this.vm=a}};function kB(){const a=w("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(b=>b in a)?a:null}
;var lB=class extends jB{i(a){kB()?.bgvma();if(a){const b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Hd.bind(a)};v("yt.abuse.playerAttLoader",b);v("yt.abuse.playerAttLoaderRun",c=>a.snapshot(c))}else v("yt.abuse.playerAttLoader",null),v("yt.abuse.playerAttLoaderRun",null)}j(){return!!kB()}o(a){return kB().bgvmc(a)}};var mB=new Tu("AUTH_SERVICE_TOKEN");var nB=class extends qv{constructor(){super("document_active");this.i=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.j},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.j},{from:"document_disposed",to:"document_disposed",action:()=>{}},
{from:"flush_logs",to:"document_active",action:this.j}];window.addEventListener("pagehide",a=>{this.transition("document_disposed",{event:a})});
window.addEventListener("beforeunload",a=>{this.transition("document_disposed_preventable",{event:a})})}D(a,b){if(!this.h.get("document_disposed_preventable")&&(a(b?.event),b?.event?.defaultPrevented||b?.event?.returnValue)){b.event.returnValue||(b.event.returnValue=!0);
b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")}u(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b?.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))}M(a,b){a(b?.event);this.transition("document_active")}j(){this.h=new Map}};var oB=class extends qv{constructor(){super("document_visibility_unknown");this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.j},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.j},{from:"document_foregrounded",to:"document_visible",action:this.j},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.j},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.j}];document.addEventListener("visibilitychange",a=>{document.visibilityState==="visible"?this.transition("document_visible",{event:a}):this.transition("document_hidden",{event:a})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",a=>{this.transition("document_backgrounded",{event:a})}),window.addEventListener("focus",a=>{this.transition("document_foregrounded",{event:a})}))}j(a,b){a(b?.event);
R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")}h(a,b){a(b?.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")}u(a,b){a(b?.event)}M(a,b){a(b?.event)}};var pB=class{constructor(){this.o=new nB;this.u=new oB}install(...a){a.forEach(b=>{this.o.install(b)});
a.forEach(b=>{this.u.install(b)})}};function qB(a,b,c,d=0){if(!b)return!1;d=Pw(d);if(!d)return!1;a=a.client;b=new Hw({trackingParams:b});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=ey(b,d);ay.set(f,!0);fy(b,d)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=dy({cttAuthInfo:Rw(d)||void 0,automatedLogEventSource:void 0},d);b={csn:d,ve:b.getAsJson(),gestureType:e};c&&(b.clientData=c);d==="UNDEFINED_CSN"?gy("visualElementGestured",f,b):a?jw("visualElementGestured",b,a,f):Nq("visualElementGestured",b,f);return!0}
function rB(a,b,c,d=0){const e=Pw(d);b=b||Mw(d);e&&b&&(a=a.client,d=dy({cttAuthInfo:Rw(e)||void 0},e),c={csn:e,ve:b.getAsJson(),clientData:c},e==="UNDEFINED_CSN"?gy("visualElementStateChanged",d,c):a?jw("visualElementStateChanged",c,a,d):Nq("visualElementStateChanged",c,d))}
function sB(a,b){if(b===void 0){const c=Ow();for(let d=0;d<c.length;d++)c[d]!==void 0&&sB(a,c[d])}else a.i.forEach((c,d)=>{(d=a.h.get(d))&&cy(a.client,b,d,c)}),a.i.clear(),a.h.clear()}
var tB=class{constructor(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}clickCommand(a,b,c=0){return qB(this,a.clickTrackingParams,b,c)}stateChanged(a,b,c=0){this.visualElementStateChanged(new Hw({trackingParams:a}),b,c)}visualElementStateChanged(a,b,c=0){c===0&&this.j.has(c)?this.o.push([a,b]):rB(this,a,b,c)}};var vB=class extends pB{constructor(){super();this.install({document_disposed:{callback:this.h}});R("combine_ve_grafts")&&this.install({document_disposed:{callback:this.i}});this.install({flush_logs:{callback:this.j}});R("web_log_cfg_cee_ks")||Zp(uB)}j(){Nq("finalPayload",{csn:Pw()})}h(){Aw(Cw)}i(){var a=sB;tB.instance||(tB.instance=new tB);a(tB.instance)}};
function uB(){const a=O("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Fd();for(const c of a)b(c)&&Nq("genericClientExperimentEvent",{eventType:c});delete uo.CLIENT_EXPERIMENT_EVENTS}}
;var wB=class extends S{constructor(){super("JSON parsing failed after fetch",[]);this.errorType=1;Object.setPrototypeOf(this,new.target.prototype)}};function xB(a,b,c){if(a.h){const d=zb(Jb(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=mt(c));return new window.Request(b,a)}
var yB=class{constructor(a){this.h=a}async fetch(a,b,c){a=xB(this,a,b);return fetch(a).then(d=>this.handleResponse(d,c)).catch(d=>{V(d);
if(c?.Fe&&d instanceof wB&&d.errorType===1)return Promise.reject(d)})}handleResponse(a,b){let c;
c=a.text().then(d=>{if(b?.Xe&&a.ok)return Qf(b.Xe,d);d=d.replace(")]}'","");let e;if(b?.Fe&&d)try{e=JSON.parse(d)}catch(f){throw new wB;}return e??JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Yh(),c=c.then(d=>{V(new S("Error: API fetch failed",a.status,a.url,d));return{...d,errorMetadata:{status:a.status}}}));
return c}};yB[Su]=[new Uu(new Tu("NETWORK_SLI_TOKEN"))];var zB=new Tu("NETWORK_MANAGER_TOKEN");function AB(){let a=w("ytglobal.storage_");a||(a=new BB,v("ytglobal.storage_",a));return a}
var BB=class{async estimate(){const a=navigator;if(a.storage?.estimate)return a.storage.estimate();if(a.webkitTemporaryStorage?.queryUsageAndQuota)return CB()}};function CB(){const a=navigator;return new Promise((b,c)=>{a.webkitTemporaryStorage?.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((d,e)=>{b({usage:d,quota:e})},d=>{c(d)}):c(Error("webkitTemporaryStorage is not supported."))})}
v("ytglobal.storageClass_",BB);function DB(a,b){AB().estimate().then(c=>{a.h("idbQuotaExceeded",{...b,isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:EB(c?.usage),deviceStorageQuotaMbytes:EB(c?.quota)})})}
class Oq{constructor(a,b){this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=.2}wa(a){this.handleError(a)}logEvent(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":DB(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":this.h("idbTransactionAborted",
{...b,hasWindowUnloaded:this.i})}}}function EB(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var vA={ld:{feedbackEndpoint:oA(FA),modifyChannelNotificationPreferenceEndpoint:oA(HA),playlistEditEndpoint:oA(IA),shareEntityEndpoint:oA(EA),subscribeEndpoint:oA(CA),undoFeedbackEndpoint:oA(GA),unsubscribeEndpoint:oA(DA),webPlayerShareEntityServiceEndpoint:oA(JA)}};function FB(){const a=$u();Vu(a,{Vb:zB,dd:yB});Vu(a,{Vb:mB,dd:Ep});const b=jA(),c=a.resolve(mB),d=a.resolve(zB),e={};b&&(e.client_location=b);uA(d,c,e);Vu(a,{Vb:cA,Nd:$z.instance})}
;const GB=new Map;function HB(a,b,c,d=()=>{},e=null){b=new IB(a,b,c,d,e);
GB.set(a,b)}
function JB(a){if(!a.onReadyPatchApplied){var b=a.addEventListener;a.addEventListener=(c,d)=>{c==="onReady"?Promise.resolve().then(()=>{d(a)}):b.call(a,c,d)};
a.onReadyPatchApplied=!0}}
function KB(a){if(w("yt.player.Application.create"))Promise.resolve().then(()=>{LB(a)});
else{MB(Un(a.webPlayerContextConfig.trustedJsUrl),()=>{LB(a)},()=>{a.F||a.vc()});
const b=a.webPlayerContextConfig.trustedCssUrl;b&&NB(Un(b))}}
function LB(a){if(!a.F){var b=w("yt.player.Application.create");try{a.api=b(a.container,{args:a.playerVars},a.webPlayerContextConfig,void 0).getInternalApi(),JB(a.api),a.api.isReady=()=>!0,a.h(a.api)}catch(c){throw a.vc(),c;
}}}
var IB=class extends y{constructor(a,b,c,d,e){super();this.container=a;this.webPlayerContextConfig=b;this.h=c;this.vc=d;this.playerVars=e;KB(this)}X(){this.api&&this.api.destroy();qh(this.container);super.X()}};function NB(a){const b=`ytp-${a.toString()}`;if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;eb(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function MB(a,b,c){const d=`ytp-${a.toString()}`,e=document.getElementById(d);if(e)e.dataset.failed?c():e.dataset.loaded?b():(e.addEventListener("error",()=>{c()}),e.addEventListener("load",()=>{b()}));
else{var f=document.createElement("script");f.id=d;f.addEventListener("error",()=>{f.dataset.failed="true";c()});
f.addEventListener("load",()=>{f.dataset.loaded="true";b()});
$a(f,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(f,a.firstChild)}}
;function OB(a){O("ENABLE_WEBVIEW_API")&&window.ytwebviewplayer&&(window.addEventListener("message",b=>{try{const d=JSON.parse(b.data),e=d.methodName,f=d.args||[];a:{for(const g of f)if(String(g).includes("javascript:")){var c=!0;break a}c=!1}if(c)throw Error(`Dangerous call to "${e}" with [${f}].`);if(e&&typeof a[e]==="function")a[e](...f);else throw Error(`Unknown API method: "${e}".`);}catch(d){rw(d)}}),a.addEventListener("onReady",()=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onPlayerReady"}))}),
a.addEventListener("onStateChange",b=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onStateChange",
state:b}))}),a.addEventListener("onError",b=>{window.ytwebviewplayer.postMessage(JSON.stringify({type:"onError",
errorCode:b}))}))}
;const PB={["api.invalidparam"]:2,auth:150,["drm.auth"]:150,["heartbeat.net"]:150,["heartbeat.servererror"]:150,["heartbeat.stop"]:150,["html5.unsupportedads"]:5,["fmt.noneavailable"]:5,["fmt.decode"]:5,["fmt.unplayable"]:5,["html5.missingapi"]:5,["html5.unsupportedlive"]:5,["drm.unavailable"]:5,["mrm.blocked"]:151,["embedder.identity.denied"]:152,["embedder.identity.missing.referrer"]:153};const QB=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function RB(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function SB(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};for(const d of QB)a[d]&&(b[d]=a[d]);if(a=a.embedConfig||a.embed_config)if(typeof a==="string")b.embed_config=a;else if(la(a))try{const d=JSON.stringify(a);b.embed_config=d}catch(d){console.error("Invalid embedConfig JSON",d)}return b}
function TB(a,b,c,d){if(la(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){const e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function UB(a,b,c){a.o.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function VB(a){if(a.h)if(a.j)a.sendMessage("alreadyInitialized");else if(a.D){a.j=!0;a.D=!1;a.sendMessage("initialDelivery",WB(a));a.sendMessage("onReady");Fz("ep_init_ar");for(const b of a.H)XB(a,b);a.H=[]}}
function XB(a,b,c=a.h){if(c){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{const d=JSON.stringify(b);c.postMessage(d,a.targetOrigin)}catch(d){V(d)}}}
function WB(a){if(!a.api)return null;const b=a.api.getApiInterface();lb(b,"getVideoData");const c={apiInterface:b};for(let e=0,f=b.length;e<f;e++){const g=b[e];if(g.search("get")===0||g.search("is")===0){var d=0;g.search("get")===0?d=3:g.search("is")===0&&(d=2);d=g.charAt(d).toLowerCase()+g.substring(d+1);try{const h=a.api[g]();c[d]=h}catch(h){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
function YB(a,b){a.sendMessage("infoDelivery",b)}
function ZB(a,b,c){return d=>{b==="onError"?a.api.logApiCall(`${b} invocation`,c,d):a.api.logApiCall(`${b} invocation`,c);a.sendMessage(b,d)}}
var cC=class extends y{constructor(){var a=$B,b=aC;super();this.api=a;this.j=this.D=!1;this.H=[];this.R={};this.o=[];this.i=[];this.ba=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.V=R("web_player_split_event_bus_iframe");this.A=O("POST_MESSAGE_ORIGIN")||`${document.location.protocol}//${document.location.hostname}`;this.u=c=>{this.onMessage(c)};
bC.addEventListener("message",this.u);if(a=O("WIDGET_ID"))this.sessionId=a;b&&this.u(b);UB(this,"onReady",()=>{this.D=!0;var c=this.api.getVideoData();c.isPlayable||(this.ba=!0,this.errorCode=(c=c.errorCode)?PB[c]||5:5,this.sendMessage("onError",Number(this.errorCode)));VB(this);this.h||this.j||window.parent===window||!this.sessionId||XB(this,{event:"readyToListen"},window.parent)});
UB(this,"onVideoProgress",this.Sa.bind(this));UB(this,"onVolumeChange",this.Jb.bind(this));UB(this,"onApiChange",this.fa.bind(this));UB(this,"onPlaybackQualityChange",this.za.bind(this));UB(this,"onPlaybackRateChange",this.Da.bind(this));UB(this,"onStateChange",this.Ha.bind(this));UB(this,"onWebglSettingsChanged",this.Ic.bind(this));UB(this,"onCaptionsTrackListChanged",this.ia.bind(this));UB(this,"captionssettingschanged",this.na.bind(this))}sendMessage(a,b){a={event:a,info:b===void 0?null:b};this.j?
XB(this,a):this.H.push(a)}Ha(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};
this.api.getVideoUrl&&(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());YB(this,a)}za(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&
(a.preferredQuality=this.api.getPreferredQuality());YB(this,a)}Da(a){YB(this,{playbackRate:a})}fa(){const a=this.api.getOptions(),b={namespaces:a};for(let c=0,d=a.length;c<d;c++){const e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(let g=0,h=f.length;g<h;g++){const k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)}Jb(){YB(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})}Sa(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),
videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());YB(this,a)}Ic(){YB(this,{sphericalProperties:this.api.getSphericalProperties()})}ia(){if(this.api.getCaptionTracks){const a={captionTracks:this.api.getCaptionTracks()};YB(this,a)}}na(){if(this.api.getSubtitlesUserSettings){const a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};
YB(this,a)}}onMessage(a){if(!(this.A!=="*"&&a.origin!==this.A||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.A=this.targetOrigin=a);this.h=c;this.sessionId=b;VB(this);break;case "command":c=b.func;var d=b.args;if(c==="addEventListener"&&d)b=d[0],c=a.origin,b==="onReady"?this.api.logApiCall(`${b} invocation`,c):b==="onError"&&this.ba&&(this.api.logApiCall(`${b} invocation`,
c,this.errorCode),this.errorCode=void 0),this.api.logApiCall(`${b} registration`,c),this.R[b]||b==="onReady"||(a=ZB(this,b,c),this.i.push({eventType:b,listener:a,origin:c}),this.V?this.api.handleExternalCall("addEventListener",[b,a],c):this.api.addEventListener(b,a),this.R[b]=!0);else if(b=c,c=d,a=a.origin,this.api.isExternalMethodAvailable(b,a)){c=c||[];if(c.length>0&&RB(b)){var e=c;if(la(e[0])&&!Array.isArray(e[0]))d=e[0];else switch(d={},b){case "loadVideoById":case "cueVideoById":d=SB(e[0],e[1]!==
void 0?Number(e[1]):void 0,e[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":d=e[0];typeof d==="string"&&(d={mediaContentUrl:d,startSeconds:e[1]!==void 0?Number(e[1]):void 0,suggestedQuality:e[2]});b:{if((e=d.mediaContentUrl)&&(e=/\/([ve]|embed)\/([^#?]+)/.exec(e))&&e[2]){e=e[2];break b}e=null}d.videoId=e;d=SB(d);break;case "loadPlaylist":case "cuePlaylist":d=TB(e[0],e[1],e[2],e[3])}c.length=1;c[0]=d}this.api.handleExternalCall(b,c,a);RB(b)&&YB(this,WB(this))}}}}X(){super.X();bC.removeEventListener("message",
this.u);for(var a=0;a<this.o.length;a++){var b=this.o[a];this.api.removeEventListener(b.eventType,b.listener)}this.o=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.V?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]}};let bC=window;function dC(a,b,c){a.F||(b={id:a.id,command:b},c&&(b.data=c),eC.postMessage(JSON.stringify(b),a.origin))}
function fC(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function gC(a,b){switch(a){case "loadVideoById":return[SB(b)];case "cueVideoById":return[SB(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[TB(b)];case "cuePlaylist":return[TB(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function hC(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
var jC=class extends y{constructor(a,b){var c=$B;super();this.api=c;this.id=a;this.origin=b;this.h={};this.j=R("web_player_split_event_bus_iframe");this.i=d=>{this.onMessage(d)};
iC.addEventListener("message",this.i);dC(this,"RECEIVING")}addListener(a,b){if(!(a in this.h)){var c=this.o.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}}o(a,b){this.F||dC(this,a,fC(a,b))}removeListener(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])}addEventListener(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)}removeEventListener(a,b,c){this.j?a==="onReady"?
this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)}onMessage(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.F){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;
default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=gC(c,b||{}),b=this.api.handleExternalCall(c,b,a||null),(b=hC(c,b))&&dC(this,c,b))}}}}}}X(){iC.removeEventListener("message",this.i);for(const a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);super.X()}};let iC=window,eC=window.parent;let kC=new lB;function lC(){return kC.j()}
function mC(a={}){return kC.invoke(a)}
;function nC(a){a.Da=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(const c in a.H)a.H.hasOwnProperty(c)&&clearTimeout(Number(c));a.H={};a.u=null;a.ia=null;b=a.api;for(const c in b)b.hasOwnProperty(c)&&(b[c]=null);b.addEventListener=(c,d)=>{a.addEventListener(c,d)};
b.removeEventListener=(c,d)=>{a.removeEventListener(c,d)};
b.destroy=()=>{a.dispose()};
b.getLastError=()=>a.getLastError();
b.getPlayerType=()=>a.getPlayerType();
b.getCurrentVideoConfig=()=>a.Ha;
b.loadNewVideoConfig=c=>{a.loadNewVideoConfig(c)};
b.isReady=()=>a.isReady()}
function oC(a){let b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);a.i?.id===a.elementId&&(a.elementId=`${a.elementId}-player`,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
function pC(a){if(!a.F&&!a.V){var b=qC(a);if(b&&(rC(a)?"html5":null)==="html5")a.ba="html5",a.isReady()||sC(a);else if(tC(a),a.ba="html5",b&&a.j&&a.o)a.o.appendChild(a.j),sC(a);else{a.config&&(a.config.loaded=!0);let c=!1;a.D=()=>{c=!0;let d;d=uC(a,"player_bootstrap_method")?w("yt.player.Application.createAlternate")||w("yt.player.Application.create"):w("yt.player.Application.create");const e=a.config?vC(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,void 0);sC(a)};
a.V=!0;b?a.D():(Dx(wC(a),a.D),(b=xC(a))&&Kx(b||""),yC(a)&&!c&&v("yt.player.Application.create",null))}}}
function zC(a){a.config&&a.config.loaded!==!0&&(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1?a.api.loadVideoByPlayerVars(a.config.args??null):a.api.cueVideoByPlayerVars(a.config.args))}
function vC(a){const b={};for(const c of Object.keys(a)){const d=a[c];b[c]=typeof d==="object"?ih(d):d}return b}
function AC(a,b){let c=b;if(typeof b==="string"){if(a.za[b])return a.za[b];c=(...d)=>{const e=w(b);if(e)try{e.apply(t,d)}catch(f){throw d=new S("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.za[b]=c}return c?c:null}
function rC(a){let b=oh(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector(`#${a.elementId}`));return b}
function wC(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function qC(a){let b=!0;const c=rC(a);c&&a.config&&(b=c.dataset.version===wC(a));return b&&!!w("yt.player.Application.create")}
function uC(a,b){let c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.serializedExperimentFlags:a.config?.args&&(c=a.config.args.fflags);return(c||"").split("&").includes(`${b}=true`)}
function sC(a){if(!a.F){const b=rC(a);let c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,!uC(a,"html5_remove_not_servable_check_killswitch")&&b?.isNotServable&&a.config&&b?.isNotServable(a.config.args?.video_id)||BC(a)):a.Sa=setTimeout(()=>{sC(a)},50)}}
function tC(a){a.cancel();nC(a);a.ba=null;a.config&&(a.config.loaded=!1);const b=rC(a);b&&(qC(a)||!yC(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));a.o&&qh(a.o)}
function xC(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function yC(a){a=a.config?.args?.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function BC(a){nC(a);a.Da=!0;const b=rC(a);if(b){a.u=CC(a,b,"addEventListener");a.ia=CC(a,b,"removeEventListener");let c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());const d=a.api;for(let e=0;e<c.length;e++){const f=c[e];d[f]||(d[f]=CC(a,b,f))}}for(const c in a.h)a.h.hasOwnProperty(c)&&a.u&&a.u(c,a.h[c]);zC(a);a.na&&a.na(a.api);a.R.nb("onReady",a.api)}
function CC(a,b,c){const d=b[c];return(...e)=>{try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new S("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function DC(a,b){const c=d=>{const e=()=>{if(!a.F)try{a.R.nb(b,d??void 0)}catch(g){var f=new S("PlayerProxy error when creating global callback",{error:g.message,event:b,playerId:a.A,data:d,originalStack:g.stack,componentStack:g.qe});f.level="WARNING";throw f;}};
if(uC(a,"web_player_publish_events_immediately"))e();else{const f=setTimeout(()=>{e();var g=a.H,h=String(f);h in g&&delete g[h]},0);
fh(a.H,String(f))}};
return a.h[b]=c}
var EC=class extends y{constructor(a,b,c,d){super();this.A=b;this.webPlayerContextConfig=d;this.Da=!1;this.api={};this.ia=this.u=null;this.R=new J;this.h={};this.ba=this.na=this.elementId=this.Ha=this.config=null;this.V=!1;this.j=this.D=null;this.za={};this.Jb=["onReady"];this.lastError=null;this.Sa=NaN;this.H={};this.fa=0;this.i=this.o=a;Nb(this,this.R);nC(this);c?this.fa=setTimeout(()=>{this.loadNewVideoConfig(c)},0):d&&(oC(this),pC(this))}getId(){return this.A}loadNewVideoConfig(a){if(!this.F){this.fa&&
(clearTimeout(this.fa),this.fa=0);
var b=a||{};b instanceof sx||(b=new sx(b));this.config=b;this.setConfig(a);pC(this);this.isReady()&&zC(this)}}setConfig(a){this.Ha=a;this.config=vC(a);oC(this);this.na||(this.na=AC(this,this.config.args?.jsapicallback||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};if(this.config?.attrs){a=this.config.attrs;const b=a.width;b&&this.i&&(this.i.style.width=Dl(Number(b)||b));(a=a.height)&&this.i&&(this.i.style.height=Dl(Number(a)||a))}}isReady(){return this.Da}addEventListener(a,
b){const c=AC(this,b);c&&(fb(this.Jb,a)>=0||this.h[a]||(b=DC(this,a),this.u&&this.u(a,b)),this.R.subscribe(a,c),a==="onReady"&&this.isReady()&&setTimeout(()=>{c(this.api)},0))}removeEventListener(a,b){this.F||(b=AC(this,b))&&this.R.unsubscribe(a,b)}getPlayerType(){return this.ba||(rC(this)?"html5":null)}getLastError(){return this.lastError}cancel(){this.D&&Hx(wC(this),this.D);
clearTimeout(this.Sa);this.V=!1}X(){tC(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new S("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.za=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ha=this.config=this.api=null;delete this.o;delete this.i;super.X()}};const FC={},GC="player_uid_"+(Math.random()*1E9>>>0);function HC(a,b){var c="player";c=typeof c==="string"?oh(c):c;const d=`${GC}_${ma(c)}`;let e=FC[d];e=new EC(c,d,a,b);FC[d]=e;e.addOnDisposeCallback(()=>{delete FC[e.getId()]});
return e.api}
;let $B=null,IC=null,aC;function JC(a){$B=a;$B.addEventListener("onVideoDataChange",KC);$B.addEventListener("onReady",LC);a=O("POST_MESSAGE_ID","player");const b=O("POST_MESSAGE_ORIGIN");O("ENABLE_JS_API")?IC=new cC:O("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(IC=new jC(a,b));aC=void 0}
function MC(){Iy();R("ytidb_create_logger_embed_killswitch")||Lq();vB.h||(vB.h=new vB);vB.h.install({flush_logs:{callback:()=>{Xv()}}});
Tq||pu();FB();Hl.ra(()=>{VA()});
const a=I("att_init_delay",200);R("enable_rta_manager")&&setTimeout(()=>{R("attmusi")&&fB(window);var b=new bA;var c={preload:!R("enable_rta_npi"),Md:R("attmusi")};c=c??{preload:!0};const d=c.Th?void 0:new fu;Xz.instance=new Xz(b,c,d);b=Xz.instance;if(R("attmusi")&&R("attmusi_ue")){b={s:b.o.bind(b),ir:b.u.bind(b)};c=window;c.attmp=b;if(c.attmq!==void 0)for(var e of c.attmq)e(b);c.attmq=void 0}else e=b.o.bind(b),v("yt.aba.att",e),e=b.u.bind(b),v("yt.aba.att2",e)},a);
Zp(()=>{if(R("enable_zw_ping")){var b=O("INNERTUBE_CLIENT_NAME","UNKNOWN_INTERFACE"),c="/establish_zw";b==="WEB_EMBEDDED_PLAYER"?c="/embed/establish_zw":b==="TVHTML5"&&(c="https://www.youtube.com/tv/establish_zw");O("COOKIELESS",!1)&&b==="WEB_EMBEDDED_PLAYER"?(b=new Headers,b.set("X-Goog-Visitor-Id",O("VISITOR_DATA")),fetch(c,{method:"GET",mode:"no-cors",headers:b})):fetch(c,{method:"GET",mode:"no-cors",credentials:"include"})}})}
function NC(){Lz();const a=Lp();var b=Op(119),c=window.devicePixelRatio>1;if(document.body&&Sl(document.body,"exp-invert-logo"))if(c&&!Sl(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Sl(d,"inverted-hdpi")){const f=Ql(d);Rl(d,f+(f.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Sl(document.body,"inverted-hdpi")&&Tl();if(b!=c){b=`f${Math.floor(119/31)+1}`;d=Pp(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Kp[b]:(c=d.toString(16),Kp[b]=
c.toString());b=!0;R("web_secure_pref_cookie_killswitch")&&(b=!1);c=a.h;d=[];for(e in Kp)Kp.hasOwnProperty(e)&&d.push(`${e}=`+encodeURIComponent(String(Kp[e])));var e=d.join("&");Gp(c,e,63072E3,a.i,b)}}
function KC(){OC()}
function LC(){Fz("ep_init_pr");OC()}
function OC(){var a=$B.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function PC(){$B&&$B.sendAbandonmentPing&&$B.sendAbandonmentPing();O("PL_ATT")&&kC.dispose();var a=Hl;for(let b=0,c=Fy.length;b<c;b++)a.sa(Fy[b]);Fy.length=0;Fx(Gy.toString());Hy=!1;vo("DCLKSTAT",0);Mb(IC);$B&&($B.removeEventListener("onVideoDataChange",KC),$B.destroy(),$B=null)}
;Fz("ep_init_eps");v("yt.setConfig",vo);v("yt.config.set",vo);v("yt.setMsg",Cx);v("yt.msgs.set",Cx);v("yt.logging.errors.log",rw);
v("writeEmbed",function(){Fz("ep_init_wes");var a=O("PLAYER_CONFIG");if(!a){var b=O("PLAYER_VARS");b&&(a={args:b})}ty(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});b=document.referrer;window!==window.top&&b&&b!==document.URL&&(a.args.loaderUrl=b);b=O("WEB_PLAYER_CONTEXT_CONFIGS")?.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!b.serializedForcedExperimentIds){const c=Io(window.location.href);c.forced_experiments&&
(b.serializedForcedExperimentIds=c.forced_experiments)}a.args?.autoplay?Az("watch",["pbs","pbu","pbp"]):a.args&&ex(a.args)?Az("video_preview",["ol"]):Az("embed_no_video",["ep_init_ar"]);R("embeds_use_player_instances_library")||O("ENABLE_WEBVIEW_API")?(HB(document.getElementById("player"),b,c=>{O("ENABLE_WEBVIEW_API")?(c=c.getTrustedApi(),JB(c),OB(c)):JC(c)},()=>{throw Error("Unable to load player JS");
},a.args),O("ENABLE_WEBVIEW_API")||MC()):(a=HC(a,b),JC(a),MC());
Fz("ep_init_wee")});
v("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||lC);v("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||mC);v("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||Jy);v("yt.player.exports.navigate",w("yt.player.exports.navigate")||sy);v("yt.util.activity.init",w("yt.util.activity.init")||Du);v("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||Hu);
v("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||Eu);window.addEventListener("load",P(function(){NC()}));
window.addEventListener("pageshow",P(function(a){a.persisted||NC()}));
window.addEventListener("pagehide",P(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?PC():a.persisted||PC()}));
v("yt.logging.errors.log",rw);gb(O("ERRORS")||[],a=>{rw.apply(null,a)});
vo("ERRORS",[]);up(rp(),{});
window.onerror=function(a,b="Unknown file",c=0,d,e,f){var g=!1,h=wo("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(let k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}g&&(g=!1,e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new S(h),e.name="UnhandledWindowError",e.message=h,e.fileName=b,e.lineNumber=c,
isNaN(d)?delete e.columnNumber:e.columnNumber=d),R("wiz_enable_component_stack_propagation_killswitch")||(a=e,f?.componentStack||!(a=a.qe))||(f||(f={}),f.componentStack=a),f&&zw(e,f),g?rw(e):V(e))};
sj=sw;window.addEventListener("unhandledrejection",a=>{if(a.reason instanceof Error){const b=a.reason;zw(b,{source:"unhandledrejection"});b.name==="AbortError"&&(b.level="WARNING")}sw(a.reason);a.preventDefault()});
(function(){if(O("ENABLE_JS_API")){var a=b=>{aC=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
Fz("ep_init_epe");}).call(this);
