(function(){'use strict';var n,ca=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},p=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var q=da(this);function r(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var k=a[d];if(!(k in c))break a;c=c[k]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&p(c,a,{configurable:!0,writable:!0,value:b})}}
var t;if(typeof Object.setPrototypeOf=="function")t=Object.setPrototypeOf;else{var v;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;v=fa.a;break a}catch(a){}v=!1}t=v?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=t;
function ia(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function x(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:ia(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function y(){this.j=!1;this.h=null;this.m=void 0;this.g=1;this.A=this.l=0;this.i=null}
function z(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}
y.prototype.o=function(a){this.m=a};
function B(a,b){a.i={P:b,R:!0};a.g=a.l||a.A}
y.prototype.return=function(a){this.i={return:a};this.g=this.A};
function C(a,b,c){a.g=c;return{value:b}}
function ja(a){this.g=new y;this.h=a}
function ka(a,b){z(a.g);var c=a.g.h;if(c)return D(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return E(a)}
function D(a,b,c,d){try{var k=b.call(a.g.h,c);if(!(k instanceof Object))throw new TypeError("Iterator result "+k+" is not an object");if(!k.done)return a.g.j=!1,k;var g=k.value}catch(f){return a.g.h=null,B(a.g,f),E(a)}a.g.h=null;d.call(a.g,g);return E(a)}
function E(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.j=!1,{value:b.value,done:!1}}catch(c){a.g.m=void 0,B(a.g,c)}a.g.j=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.R)throw b.P;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function la(a){this.next=function(b){z(a.g);a.g.h?b=D(a,a.g.h.next,b,a.g.o):(a.g.o(b),b=E(a));return b};
this.throw=function(b){z(a.g);a.g.h?b=D(a,a.g.h["throw"],b,a.g.o):(B(a.g,b),b=E(a));return b};
this.return=function(b){return ka(a,b)};
this[Symbol.iterator]=function(){return this}}
function ma(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,k){function g(f){f.done?d(f.value):Promise.resolve(f.value).then(b,c).then(g,k)}
g(a.next())})}
function F(a){return ma(new la(new ja(a)))}
r("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+k++,g)}
function c(g,f){this.g=g;p(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",k=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");p(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(ia(this))}});
return a});
function na(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
r("Promise",function(a){function b(f){this.h=0;this.i=void 0;this.g=[];this.o=!1;var e=this.j();try{f(e.resolve,e.reject)}catch(h){e.reject(h)}}
function c(){this.g=null}
function d(f){return f instanceof b?f:new b(function(e){e(f)})}
if(a)return a;c.prototype.h=function(f){if(this.g==null){this.g=[];var e=this;this.i(function(){e.l()})}this.g.push(f)};
var k=q.setTimeout;c.prototype.i=function(f){k(f,0)};
c.prototype.l=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var e=0;e<f.length;++e){var h=f[e];f[e]=null;try{h()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(f){this.i(function(){throw f;})};
b.prototype.j=function(){function f(l){return function(m){h||(h=!0,l.call(e,m))}}
var e=this,h=!1;return{resolve:f(this.K),reject:f(this.l)}};
b.prototype.K=function(f){if(f===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.M(f);else{a:switch(typeof f){case "object":var e=f!=null;break a;case "function":e=!0;break a;default:e=!1}e?this.J(f):this.m(f)}};
b.prototype.J=function(f){var e=void 0;try{e=f.then}catch(h){this.l(h);return}typeof e=="function"?this.N(e,f):this.m(f)};
b.prototype.l=function(f){this.A(2,f)};
b.prototype.m=function(f){this.A(1,f)};
b.prototype.A=function(f,e){if(this.h!=0)throw Error("Cannot settle("+f+", "+e+"): Promise already settled in state"+this.h);this.h=f;this.i=e;this.h===2&&this.L();this.C()};
b.prototype.L=function(){var f=this;k(function(){if(f.I()){var e=q.console;typeof e!=="undefined"&&e.error(f.i)}},1)};
b.prototype.I=function(){if(this.o)return!1;var f=q.CustomEvent,e=q.Event,h=q.dispatchEvent;if(typeof h==="undefined")return!0;typeof f==="function"?f=new f("unhandledrejection",{cancelable:!0}):typeof e==="function"?f=new e("unhandledrejection",{cancelable:!0}):(f=q.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.i;return h(f)};
b.prototype.C=function(){if(this.g!=null){for(var f=0;f<this.g.length;++f)g.h(this.g[f]);this.g=null}};
var g=new c;b.prototype.M=function(f){var e=this.j();f.B(e.resolve,e.reject)};
b.prototype.N=function(f,e){var h=this.j();try{f.call(e,h.resolve,h.reject)}catch(l){h.reject(l)}};
b.prototype.then=function(f,e){function h(w,A){return typeof w=="function"?function(aa){try{l(w(aa))}catch(ba){m(ba)}}:A}
var l,m,u=new b(function(w,A){l=w;m=A});
this.B(h(f,l),h(e,m));return u};
b.prototype.catch=function(f){return this.then(void 0,f)};
b.prototype.B=function(f,e){function h(){switch(l.h){case 1:f(l.i);break;case 2:e(l.i);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.g==null?g.h(h):this.g.push(h);this.o=!0};
b.resolve=d;b.reject=function(f){return new b(function(e,h){h(f)})};
b.race=function(f){return new b(function(e,h){for(var l=x(f),m=l.next();!m.done;m=l.next())d(m.value).B(e,h)})};
b.all=function(f){var e=x(f),h=e.next();return h.done?d([]):new b(function(l,m){function u(aa){return function(ba){w[aa]=ba;A--;A==0&&l(w)}}
var w=[],A=0;do w.push(void 0),A++,d(h.value).B(u(w.length-1),m),h=e.next();while(!h.done)})};
return b});
function G(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa=typeof Object.assign=="function"?Object.assign:function(a,b){if(a==null)throw new TypeError("No nullish arg");a=Object(a);for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var k in d)G(d,k)&&(a[k]=d[k])}return a};
r("Object.assign",function(a){return a||oa});
r("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
r("WeakMap",function(a){function b(h){this.g=(e+=Math.random()+1).toString();if(h){h=x(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){var l=typeof h;return l==="object"&&h!==null||l==="function"}
function k(h){if(!G(h,f)){var l=new c;p(h,f,{value:l})}}
function g(h){var l=Object[h];l&&(Object[h]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&k(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),m=new a([[h,2],[l,3]]);if(m.get(h)!=2||m.get(l)!=3)return!1;m.delete(h);m.set(l,4);return!m.has(h)&&m.get(l)==4}catch(u){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();g("freeze");g("preventExtensions");g("seal");var e=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");k(h);if(!G(h,f))throw Error("WeakMap key fail: "+h);h[f][this.g]=l;return this};
b.prototype.get=function(h){return d(h)&&G(h,f)?h[f][this.g]:void 0};
b.prototype.has=function(h){return d(h)&&G(h,f)&&G(h[f],this.g)};
b.prototype.delete=function(h){return d(h)&&G(h,f)&&G(h[f],this.g)?delete h[f][this.g]:!1};
return b});
r("Map",function(a){function b(){var e={};return e.previous=e.next=e.head=e}
function c(e,h){var l=e[1];return na(function(){if(l){for(;l.head!=e[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}
function d(e,h){var l=h&&typeof h;l=="object"||l=="function"?g.has(h)?l=g.get(h):(l=""+ ++f,g.set(h,l)):l="p_"+h;var m=e[0][l];if(m&&G(e[0],l))for(e=0;e<m.length;e++){var u=m[e];if(h!==h&&u.key!==u.key||h===u.key)return{id:l,list:m,index:e,entry:u}}return{id:l,list:m,index:-1,entry:void 0}}
function k(e){this[0]={};this[1]=b();this.size=0;if(e){e=x(e);for(var h;!(h=e.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var e=Object.seal({x:4}),h=new a(x([[e,"s"]]));if(h.get(e)!="s"||h.size!=1||h.get({x:4})||h.set({x:4},"t")!=h||h.size!=2)return!1;var l=h.entries(),m=l.next();if(m.done||m.value[0]!=e||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(u){return!1}}())return a;
var g=new WeakMap;k.prototype.set=function(e,h){e=e===0?0:e;var l=d(this,e);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=h:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:e,value:h},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
k.prototype.delete=function(e){e=d(this,e);return e.entry&&e.list?(e.list.splice(e.index,1),e.list.length||delete this[0][e.id],e.entry.previous.next=e.entry.next,e.entry.next.previous=e.entry.previous,e.entry.head=null,this.size--,!0):!1};
k.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
k.prototype.has=function(e){return!!d(this,e).entry};
k.prototype.get=function(e){return(e=d(this,e).entry)&&e.value};
k.prototype.entries=function(){return c(this,function(e){return[e.key,e.value]})};
k.prototype.keys=function(){return c(this,function(e){return e.key})};
k.prototype.values=function(){return c(this,function(e){return e.value})};
k.prototype.forEach=function(e,h){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,e.call(h,m[1],m[0],this)};
k.prototype[Symbol.iterator]=k.prototype.entries;var f=0;return k});
r("Set",function(a){function b(c){this.g=new Map;if(c){c=x(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(x([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var k=d.entries(),g=k.next();if(g.done||g.value[0]!=c||g.value[1]!=c)return!1;g=k.next();return g.done||g.value[0]==c||g.value[0].x!=4||g.value[1]!=g.value[0]?!1:k.next().done}catch(f){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var k=this;this.g.forEach(function(g){return c.call(d,g,g,k)})};
return b});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var k=d.length,g=0;g<k;g++){var f=d[g];if(b.call(c,f,g,d)){b=f;break a}}b=void 0}return b}});
r("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(e){return e};
var k=[],g=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof g=="function"){b=g.call(b);for(var f=0;!(g=b.next()).done;)k.push(c.call(d,g.value,f++))}else for(g=b.length,f=0;f<g;f++)k.push(c.call(d,b[f],f));return k}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var H=this||self;function I(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function pa(a){return Object.prototype.hasOwnProperty.call(a,qa)&&a[qa]||(a[qa]=++ra)}
var qa="closure_uid_"+(Math.random()*1E9>>>0),ra=0;function J(a,b){a=a.split(".");for(var c=H,d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function sa(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Y=function(d,k,g){for(var f=Array(arguments.length-2),e=2;e<arguments.length;e++)f[e-2]=arguments[e];return b.prototype[k].apply(d,f)}}
;var ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ua=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,k=typeof a==="string"?a.split(""):a,g=0;g<d;g++)g in k&&b.call(c,k[g],g,a)};
function va(a,b){b=ta(a,b);b>=0&&Array.prototype.splice.call(a,b,1)}
function wa(a){return Array.prototype.concat.apply([],arguments)}
function xa(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function ya(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
ya.prototype.get=function(){if(this.h>0){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};function za(a){H.setTimeout(function(){throw a;},0)}
;function Aa(){this.h=this.g=null}
Aa.prototype.add=function(a,b){var c=Ba.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Aa.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Ba=new ya(function(){return new Ca},function(a){return a.reset()});
function Ca(){this.next=this.scope=this.g=null}
Ca.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Ca.prototype.reset=function(){this.next=this.scope=this.g=null};var Da,Ea=!1,Fa=new Aa;function Ga(a){Da||Ha();Ea||(Da(),Ea=!0);Fa.add(a,void 0)}
function Ha(){var a=Promise.resolve(void 0);Da=function(){a.then(Ia)}}
function Ia(){for(var a;a=Fa.remove();){try{a.g.call(a.scope)}catch(c){za(c)}var b=Ba;b.j(a);b.h<100&&(b.h++,a.next=b.g,b.g=a)}Ea=!1}
;function K(){this.i=this.i;this.j=this.j}
K.prototype.i=!1;K.prototype.dispose=function(){this.i||(this.i=!0,this.D())};
K.prototype[Symbol.dispose]=function(){this.dispose()};
K.prototype.addOnDisposeCallback=function(a,b){this.i?b!==void 0?a.call(b):a():(this.j||(this.j=[]),b&&(a=a.bind(b)),this.j.push(a))};
K.prototype.D=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function Ja(a){var b={},c;for(c in a)b[c]=a[c];return b}
;var Ka=/&/g,La=/</g,Ma=/>/g,Na=/"/g,Oa=/'/g,Pa=/\x00/g,Qa=/[\x00&<>"']/;/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function L(a){this.g=a}
L.prototype.toString=function(){return this.g};
var Ra=new L("about:invalid#zClosurez");function Sa(a){this.S=a}
function M(a){return new Sa(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ta=[M("data"),M("http"),M("https"),M("mailto"),M("ftp"),new Sa(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Ua=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;var Va={X:0,V:1,W:2,0:"FORMATTED_HTML_CONTENT",1:"EMBEDDED_INTERNAL_CONTENT",2:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function N(a,b){b=Error.call(this,a+" cannot be used with intent "+Va[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIframeIntentError"}
var O=Error;N.prototype=ca(O.prototype);N.prototype.constructor=N;if(ha)ha(N,O);else for(var P in O)if(P!="prototype")if(Object.defineProperties){var Wa=Object.getOwnPropertyDescriptor(O,P);Wa&&Object.defineProperty(N,P,Wa)}else N[P]=O[P];N.H=O.prototype;function Xa(a){Qa.test(a)&&(a.indexOf("&")!=-1&&(a=a.replace(Ka,"&amp;")),a.indexOf("<")!=-1&&(a=a.replace(La,"&lt;")),a.indexOf(">")!=-1&&(a=a.replace(Ma,"&gt;")),a.indexOf('"')!=-1&&(a=a.replace(Na,"&quot;")),a.indexOf("'")!=-1&&(a=a.replace(Oa,"&#39;")),a.indexOf("\x00")!=-1&&(a=a.replace(Pa,"&#0;")));return a}
;var Ya,Q;a:{for(var Za=["CLOSURE_FLAGS"],R=H,$a=0;$a<Za.length;$a++)if(R=R[Za[$a]],R==null){Q=null;break a}Q=R}var ab=Q&&Q[610401301];Ya=ab!=null?ab:!1;function S(){var a=H.navigator;return a&&(a=a.userAgent)?a:""}
var T,bb=H.navigator;T=bb?bb.userAgentData||null:null;function cb(){return Ya?!!T&&T.brands.length>0:!1}
function db(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function eb(){for(var a=S(),b=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);a=db(c);if(cb())a:{if(Ya&&T)for(b=0;b<T.brands.length;b++)if((c=T.brands[b].brand)&&c.indexOf("Chromium")!=-1){b=!0;break a}b=!1}else b=(S().indexOf("Chrome")!=-1||S().indexOf("CriOS")!=-1)&&(cb()||S().indexOf("Edge")==-1)||S().indexOf("Silk")!=-1;return b?a(["Chrome","CriOS","HeadlessChrome"]):""}
function fb(){if(cb()){var a=T.brands.find(function(b){return b.brand==="Chromium"});
if(!a||!a.version)return NaN;a=a.version.split(".")}else{a=eb();if(a==="")return NaN;a=a.split(".")}return a.length===0?NaN:Number(a[0])}
;function U(a){K.call(this);this.o=1;this.l=[];this.m=0;this.g=[];this.h={};this.A=!!a}
sa(U,K);n=U.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var k=this.o;this.g[k]=a;this.g[k+1]=b;this.g[k+2]=c;this.o=k+3;d.push(k);return k};
function gb(a,b,c){var d=V;if(a=d.h[a]){var k=d.g;(a=a.find(function(g){return k[g+1]==b&&k[g+2]==c}))&&d.F(a)}}
n.F=function(a){var b=this.g[a];if(b){var c=this.h[b];this.m!=0?(this.l.push(a),this.g[a+1]=function(){}):(c&&va(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.G=function(a,b){var c=this.h[a];if(c){var d=Array(arguments.length-1),k=arguments.length,g;for(g=1;g<k;g++)d[g-1]=arguments[g];if(this.A)for(g=0;g<c.length;g++)k=c[g],hb(this.g[k+1],this.g[k+2],d);else{this.m++;try{for(g=0,k=c.length;g<k&&!this.i;g++){var f=c[g];this.g[f+1].apply(this.g[f+2],d)}}finally{if(this.m--,this.l.length>0&&this.m==0)for(;c=this.l.pop();)this.F(c)}}return g!=0}return!1};
function hb(a,b,c){Ga(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.F,this),delete this.h[a])}else this.g.length=0,this.h={}};
n.D=function(){U.H.D.call(this);this.clear();this.l.length=0};var ib=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jb(a){var b=a.match(ib);a=b[1];var c=b[2],d=b[3];b=b[4];var k="";a&&(k+=a+":");d&&(k+="//",c&&(k+=c+"@"),k+=d,b&&(k+=":"+b));return k}
function kb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)kb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
var lb=/#|$/;var mb=["https://www.google.com"];function nb(){var a=this;this.g=[];this.h=function(){Promise.all(a.g.map(function(b){document.requestStorageAccessFor(b)})).then(function(){window.removeEventListener("click",a.h)})}}
function ob(){return F(function(a){var b=a.return;var c=fb()>=119;return b.call(a,c&&!!navigator.permissions&&!!navigator.permissions.query&&"requestStorageAccessFor"in document)})}
function pb(){var a=new nb,b=["https://www.youtube.com"];b=b===void 0?mb:b;F(function(c){switch(c.g){case 1:return C(c,ob(),2);case 2:if(!c.m){c.g=3;break}return C(c,Promise.all(b.map(function(d){var k;return F(function(g){if(g.g==1)return g.l=2,C(g,navigator.permissions.query({name:"top-level-storage-access",requestedOrigin:d}),4);g.g!=2?(k=g.m,k.state==="prompt"&&a.g.push(d),g.g=0,g.l=0):(g.l=0,g.i=null,g.g=0)})})),4);
case 4:a.g.length>0&&window.addEventListener("click",a.h);case 3:return c.return()}})}
;var W={},qb=[],V=new U,rb={};function sb(){for(var a=x(qb),b=a.next();!b.done;b=a.next())b=b.value,b()}
function tb(a,b){return a.tagName.toLowerCase().substring(0,3)==="yt:"?a.getAttribute(b):a.dataset?a.dataset[b]:a.getAttribute("data-"+b)}
function ub(a){V.G.apply(V,arguments)}
;function vb(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function wb(a){return a.search("get")===0||a.search("is")===0}
;var xb=window;
function X(a,b){this.v={};this.playerInfo={};this.videoTitle="";this.j=this.g=null;this.h=0;this.m=!1;this.l=[];this.i=null;this.C={};this.options=null;this.A=this.T.bind(this);if(!a)throw Error("YouTube player element ID required.");this.id=pa(this);b=Object.assign({title:"video player",videoId:"",width:640,height:360},b||{});var c=document;if(a=typeof a==="string"?c.getElementById(a):a){xb.yt_embedsEnableRsaforFromIframeApi&&pb();c=a.tagName.toLowerCase()==="iframe";b.host||(b.host=c?jb(a.src):
"https://www.youtube.com");this.options=b||{};b=[this.options,window.YTConfig||{}];for(var d=0;d<b.length;d++)b[d].host&&(b[d].host=b[d].host.toString().replace("http://","https://"));if(!c){b=document.createElement("iframe");c=a.attributes;d=0;for(var k=c.length;d<k;d++){var g=c[d].value;g!=null&&g!==""&&g!=="null"&&b.setAttribute(c[d].name,g)}b.setAttribute("frameBorder","0");b.setAttribute("allowfullscreen","");b.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
b.setAttribute("referrerPolicy","strict-origin-when-cross-origin");b.setAttribute("title","YouTube "+Y(this,"title"));(c=Y(this,"width"))&&b.setAttribute("width",c.toString());(c=Y(this,"height"))&&b.setAttribute("height",c.toString());this.j=a;(c=a.parentNode)&&c.replaceChild(b,a);a=yb(this,b);c=""+Y(this,"host")+zb(this)+"?";d=[];for(var f in a)kb(f,a[f],d);f=c+d.join("&");if(xb.yt_embedsEnableIframeSrcWithIntent){var e=e===void 0?Ta:e;a:if(e=e===void 0?Ta:e,f instanceof L)e=f;else{for(a=0;a<e.length;++a)if(c=
e[a],c instanceof Sa&&c.S(f)){e=new L(f);break a}e=void 0}e=e||Ra;b.removeAttribute("srcdoc");f="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");b.setAttribute("sandbox","");for(a=0;a<f.length;a++)b.sandbox.supports&&!b.sandbox.supports(f[a])||b.sandbox.add(f[a]);if(e instanceof L)if(e instanceof L)e=e.g;else throw Error("");else e=Ua.test(e)?e:void 0;e!==void 0&&(b.src=e);b.sandbox.add("allow-presentation",
"allow-top-navigation")}else b.src=f;a=b}this.g=a;this.g.id||(this.g.id="widget"+pa(this.g));W[this.g.id]=this;if(window.postMessage){this.i=new U;Ab(this);b=Y(this,"events");for(var h in b)b.hasOwnProperty(h)&&this.addEventListener(h,b[h]);for(var l in rb)rb.hasOwnProperty(l)&&Bb(this,l)}}}
n=X.prototype;n.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
n.getIframe=function(){return this.g};
n.addEventListener=function(a,b){var c=b;typeof b==="string"&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);Cb(this,a);return this};
function Bb(a,b){b=b.split(".");if(b.length===2){var c=b[1];"player"===b[0]&&Cb(a,c)}}
n.destroy=function(){this.g&&this.g.id&&(W[this.g.id]=null);var a=this.i;a&&typeof a.dispose=="function"&&a.dispose();if(this.j){a=this.j;var b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Z&&(Z[this.id]=null);this.options=null;this.g&&this.o&&this.g.removeEventListener("load",this.o);this.j=this.g=null};
function Db(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.m?a.sendMessage(b):a.l.push(b)}
n.T=function(){Eb(this)||clearInterval(this.h)};
function Eb(a){if(!a.g||!a.g.contentWindow)return!1;a.sendMessage({event:"listening"});return!0}
function Ab(a){Fb(a,a.id,String(Y(a,"host")));var b=Number(xb.yt_embedsWidgetPollIntervalMs)||250;a.h=setInterval(a.A,b);a.g&&(a.o=function(){clearInterval(a.h);a.h=setInterval(a.A,b)},a.g.addEventListener("load",a.o))}
function Gb(a){var b=a.getBoundingClientRect();a=Math.max(0,Math.min(b.bottom,window.innerHeight||document.documentElement.clientHeight)-Math.max(b.top,0))*Math.max(0,Math.min(b.right,window.innerWidth||document.documentElement.clientWidth)-Math.max(b.left,0));a=(b=b.height*b.width)?a/b:0;return document.visibilityState==="hidden"||a<.5?1:a<.75?2:a<.85?3:a<.95?4:a<1?5:6}
function Cb(a,b){a.C[b]||(a.C[b]=!0,Db(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";a=JSON.stringify(a);var b=jb(this.g.src||"").replace("http:","https:");if(this.g.contentWindow)try{this.g.contentWindow.postMessage(a,b)}catch(c){if(c.name&&c.name==="SyntaxError")c.message&&c.message.indexOf("target origin ''")>0||console&&console.warn&&console.warn(c);else throw c;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};
function zb(a){if((a=String(Y(a,"videoId")))&&(a.length!==11||!a.match(/^[a-zA-Z0-9\-_]+$/)))throw Error("Invalid video id");return"/embed/"+a}
function yb(a,b){var c=Y(a,"playerVars");c?c=Ja(c):c={};window!==window.top&&document.referrer&&(c.widget_referrer=document.referrer.substring(0,256));var d=Y(a,"embedConfig");if(d){if(I(d))try{d=JSON.stringify(d)}catch(k){console.error("Invalid embed config JSON",k)}c.embed_config=d}c.enablejsapi=window.postMessage?1:0;window.location.host&&(c.origin=window.location.protocol+"//"+window.location.host);c.widgetid=a.id;window.location.href&&ua(["debugjs","debugcss"],function(k){var g=window.location.href;
var f=g.search(lb);b:{var e=0;for(var h=k.length;(e=g.indexOf(k,e))>=0&&e<f;){var l=g.charCodeAt(e-1);if(l==38||l==63)if(l=g.charCodeAt(e+h),!l||l==61||l==38||l==35)break b;e+=h+1}e=-1}if(e<0)g=null;else{h=g.indexOf("&",e);if(h<0||h>f)h=f;e+=k.length+1;g=decodeURIComponent(g.slice(e,h!==-1?h:0).replace(/\+/g," "))}g!==null&&(c[k]=g)});
window.location.href&&(c.forigin=window.location.href);a=window.location.ancestorOrigins;c.aoriginsup=a===void 0?0:1;a&&a.length>0&&(c.aorigins=Array.from(a).join(","));window.document.referrer&&(c.gporigin=window.document.referrer);b&&(c.vf=Gb(b));return c}
function Hb(a,b){if(I(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Y(a,"title"))))}}
function Ib(a,b){b=x(b);for(var c=b.next(),d={};!c.done;d={u:void 0},c=b.next())d.u=c.value,a[d.u]||(d.u==="getCurrentTime"?a[d.u]=function(){var k=this.playerInfo.currentTime;if(this.playerInfo.playerState===1){var g=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;g>0&&(k+=Math.min(g,1))}return k}:vb(d.u)?a[d.u]=function(k){return function(){this.playerInfo={};
this.v={};Db(this,k.u,arguments);return this}}(d):wb(d.u)?a[d.u]=function(k){return function(){var g=k.u,f=0;
g.search("get")===0?f=3:g.search("is")===0&&(f=2);return this.playerInfo[g.charAt(f).toLowerCase()+g.substring(f+1)]}}(d):a[d.u]=function(k){return function(){Db(this,k.u,arguments);
return this}}(d))}
n.getVideoEmbedCode=function(){var a=""+Y(this,"host")+zb(this),b=Number(Y(this,"width")),c=Number(Y(this,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Xa(a);d=Xa(d!=null?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.v.namespaces?a?this.v[a]?this.v[a].options||[]:[]:this.v.namespaces||[]:[]};
n.getOption=function(a,b){if(this.v.namespaces&&a&&b&&this.v[a])return this.v[a][b]};
function Y(a,b){a=[a.options,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(d!==void 0)return d}return null}
var Z=null,Jb=null;function Kb(a){if(a.tagName.toLowerCase()!=="iframe"){var b=tb(a,"videoid");b&&(b={videoId:b,width:tb(a,"width"),height:tb(a,"height")},new X(a,b))}}
function Fb(a,b,c){Z||(Z={},Jb=new Set,Lb.addEventListener("message",function(d){a:if(Jb.has(d.origin)){try{var k=JSON.parse(d.data)}catch(e){break a}var g=Z[k.id];if(g&&d.origin===g.O)switch(d=g.U,d.m=!0,d.m&&(ua(d.l,d.sendMessage,d),d.l.length=0),g=k.event,k=k.info,g){case "apiInfoDelivery":if(I(k))for(var f in k)k.hasOwnProperty(f)&&(d.v[f]=k[f]);break;case "infoDelivery":Hb(d,k);break;case "initialDelivery":I(k)&&(clearInterval(d.h),d.playerInfo={},d.v={},Ib(d,k.apiInterface),Hb(d,k));break;case "alreadyInitialized":clearInterval(d.h);
break;case "readyToListen":Eb(d);break;default:d.i.i||(f={target:d,data:k},d.i.G(g,f),ub("player."+g,f))}}}));
Z[b]={U:a,O:c};Jb.add(c)}
var Lb=window;J("YT.PlayerState.UNSTARTED",-1);J("YT.PlayerState.ENDED",0);J("YT.PlayerState.PLAYING",1);J("YT.PlayerState.PAUSED",2);J("YT.PlayerState.BUFFERING",3);J("YT.PlayerState.CUED",5);J("YT.get",function(a){return W[a]});
J("YT.scan",sb);J("YT.subscribe",function(a,b,c){V.subscribe(a,b,c);rb[a]=!0;for(var d in W)W.hasOwnProperty(d)&&Bb(W[d],a)});
J("YT.unsubscribe",function(a,b,c){gb(a,b,c)});
J("YT.Player",X);X.prototype.destroy=X.prototype.destroy;X.prototype.setSize=X.prototype.setSize;X.prototype.getIframe=X.prototype.getIframe;X.prototype.addEventListener=X.prototype.addEventListener;X.prototype.getVideoEmbedCode=X.prototype.getVideoEmbedCode;X.prototype.getOptions=X.prototype.getOptions;X.prototype.getOption=X.prototype.getOption;qb.push(function(a){var b=a;b||(b=document);a=xa(b.getElementsByTagName("yt:player"));b=xa((b||document).querySelectorAll(".yt-player"));ua(wa(a,b),Kb)});
typeof YTConfig!=="undefined"&&YTConfig.parsetags&&YTConfig.parsetags!=="onload"||sb();var Mb=H.onYTReady;Mb&&Mb();var Nb=H.onYouTubeIframeAPIReady;Nb&&Nb();var Ob=H.onYouTubePlayerAPIReady;Ob&&Ob();}).call(this);
