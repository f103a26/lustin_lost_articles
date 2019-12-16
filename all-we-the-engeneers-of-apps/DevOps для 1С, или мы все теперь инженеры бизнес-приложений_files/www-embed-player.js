




/*
     FILE ARCHIVED ON 7:45:35 Sep 10, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 7:45:35 Sep 10, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function t(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function la(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=la(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=la(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function ma(){ma=function(){};
ja.Symbol||(ja.Symbol=na)}
function oa(a,b){this.f=a;ia(this,"description",{configurable:!0,writable:!0,value:b})}
oa.prototype.toString=function(){return this.f};
var na=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new oa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function pa(){ma();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(aa(this))}});
pa=function(){}}
function ra(a){pa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||ta});
ka("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=ja.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.B),reject:g(this.j)}};
b.prototype.B=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.C(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.A(g):this.l(g)}};
b.prototype.A=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.D(h,g):this.l(g)};
b.prototype.j=function(g){this.w(2,g)};
b.prototype.l=function(g){this.w(1,g)};
b.prototype.w=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.m()};
b.prototype.m=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.C=function(g){var h=this.i();g.aa(h.resolve,h.reject)};
b.prototype.D=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,p){return"function"==typeof v?function(D){try{l(v(D))}catch(K){n(K)}}:p}
var l,n,q=new b(function(v,p){l=v;n=p});
this.aa(k(g,l),k(h,n));return q};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.aa=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=r(g),n=l.next();!n.done;n=l.next())d(n.value).aa(h,k)})};
b.all=function(g){var h=r(g),k=h.next();return k.done?d([]):new b(function(l,n){function q(D){return function(K){v[D]=K;p--;0==p&&l(v)}}
var v=[],p=0;do v.push(void 0),p++,d(k.value).aa(q(v.length-1),n),k=h.next();while(!k.done)})};
return b});
ka("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=r(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!sa(k,g)){var l=new c;ia(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!sa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&sa(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&sa(k,g)&&sa(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&sa(k,g)&&sa(k[g],this.f)?delete k[g][this.f]:!1};
return b});
ka("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ra(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&sa(h.g,l))for(var q=0;q<n.length;q++){var v=n[q];if(k!==k&&v.key!==v.key||k===v.key)return{id:l,list:n,index:q,u:v}}return{id:l,list:n,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(r([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
pa();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ka("Set",function(a){function b(c){this.f=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
pa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ba(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return ua});
ka("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==la(this,b,"includes").indexOf(b,c||0)}});
var u=this||self;function w(a){return void 0!==a}
function x(a){return"string"==typeof a}
function y(a,b,c){a=a.split(".");c=c||u;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&w(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function z(a,b){for(var c=a.split("."),d=b||u,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ga:A=Ha;return A.apply(null,arguments)}
function Ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var B=Date.now||function(){return+new Date};
function Ka(a,b){y(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var E=window;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(F,Error);F.prototype.name="CustomError";function La(a,b){this.f=a===Ma&&b||"";this.g=Na}
La.prototype.J=!0;La.prototype.I=function(){return this.f};
La.prototype.toString=function(){return"Const{"+this.f+"}"};
var Na={},Ma={},Oa=new La(Ma,"");var Pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(x(a))return x(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Qa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=x(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ra=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=x(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Sa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ta(a,b){a:{var c=a.length;for(var d=x(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:x(a)?a.charAt(c):a[c]}
function Ua(a,b){var c=Pa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Wa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ya(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Za(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function $a(a){var b=ab,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function bb(a){for(var b in a)return!1;return!0}
function cb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function db(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function eb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function fb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=fb(a[c]);return b}return a}
var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gb.length;f++)c=gb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ib(a,b,c){this.g=a===jb&&b||"";this.f=a===jb&&c||null;this.h=kb}
ib.prototype.J=!0;ib.prototype.I=function(){return this.g.toString()};
ib.prototype.ha=!0;ib.prototype.ea=function(){return 1};
function lb(a){if(a instanceof ib&&a.constructor===ib&&a.h===kb)return a.g;za(a);return"type_error:TrustedResourceUrl"}
var kb={},jb={};var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function nb(a,b){if(b)a=a.replace(ob,"&amp;").replace(pb,"&lt;").replace(qb,"&gt;").replace(rb,"&quot;").replace(sb,"&#39;").replace(tb,"&#0;");else{if(!ub.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ob,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(rb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(tb,"&#0;"))}return a}
var ob=/&/g,pb=/</g,qb=/>/g,rb=/"/g,sb=/'/g,tb=/\x00/g,ub=/[\x00&<>"']/;function H(a,b){this.f=a===vb&&b||"";this.g=wb}
H.prototype.J=!0;H.prototype.I=function(){return this.f.toString()};
H.prototype.ha=!0;H.prototype.ea=function(){return 1};
function xb(a){if(a instanceof H&&a.constructor===H&&a.g===wb)return a.f;za(a);return"type_error:SafeUrl"}
var yb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function zb(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);yb.test(a)||(a="about:invalid#zClosurez");return new H(vb,a)}
var wb={},vb={};var Ab;a:{var Bb=u.navigator;if(Bb){var Cb=Bb.userAgent;if(Cb){Ab=Cb;break a}}Ab=""};function Db(){this.f="";this.h=Eb;this.g=null}
Db.prototype.ha=!0;Db.prototype.ea=function(){return this.g};
Db.prototype.J=!0;Db.prototype.I=function(){return this.f.toString()};
function Fb(a){if(a instanceof Db&&a.constructor===Db&&a.h===Eb)return a.f;za(a);return"type_error:SafeHtml"}
var Eb={};function Gb(a,b){var c=new Db;c.f=a;c.g=b;return c}
Gb("<!DOCTYPE html>",0);var Hb=Gb("",0);Gb("<br>",0);function Ib(a,b){var c=b instanceof H?b:zb(b);a.href=xb(c)}
function Kb(a){var b=new ib(jb,Oa instanceof La&&Oa.constructor===La&&Oa.g===Na?Oa.f:"type_error:Const",null);a.src=b.f?b.f:lb(b).toString()}
function Lb(a,b){a.src=lb(b);if(null===wa)b:{var c=u.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&va.test(c)){wa=c;break b}wa=""}c=wa;c&&a.setAttribute("nonce",c)}
;function Mb(a){return a=nb(a,void 0)}
function Nb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ob=-1!=Ab.indexOf("Trident")||-1!=Ab.indexOf("MSIE"),Pb;var Qb;if(u.document&&Ob){var Rb=u.document;Qb=Rb?Rb.documentMode:void 0}else Qb=void 0;Pb=Qb;var Sb={},Tb=null;function Ub(a){this.f=a||{cookie:""}}
m=Ub.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');w(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(B()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=mb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=w(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vb=new Ub("undefined"==typeof document?null:document);function Wb(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(x(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||u.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Xb[b]?b=Xb[b]:(b=String(b),Xb[b]||(c=/function\s+([^\(]+)/m.exec(b),Xb[b]=c?c[1]:"[Anonymous]"),b=Xb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Xb={};var Yb=!Ob||9<=Number(Pb);function Zb(a,b){this.x=w(a)?a:0;this.y=w(b)?b:0}
m=Zb.prototype;m.clone=function(){return new Zb(this.x,this.y)};
m.equals=function(a){return a instanceof Zb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function $b(a,b){this.width=a;this.height=b}
m=$b.prototype;m.clone=function(){return new $b(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ac(a){var b=document;return x(a)?b.getElementById(a):a}
function bc(a,b){Ya(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:cc.hasOwnProperty(d)?a.setAttribute(cc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function dc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Yb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Mb(g.name),'"');if(g.type){f.push(' type="',Mb(g.type),'"');var h={};hb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(x(g)?f.className=g:Aa(g)?f.className=g.join(" "):bc(f,g));2<d.length&&ec(e,f,d);return f}
function ec(a,b,c){function d(g){g&&b.appendChild(x(g)?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ba(f)||Da(f)&&0<f.nodeType?d(f):G(fc(f)?Va(f):f,d)}}
function fc(a){if(a&&"number"==typeof a.length){if(Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ca(a))return"function"==typeof a.item}return!1}
function gc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function hc(a){ic();return new ib(jb,a,null)}
var ic=xa;var jc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(jc)[a]||null}
function kc(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)kc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function lc(a){var b=[],c;for(c in a)kc(c,a[c],b);return b.join("&")}
function mc(a,b){var c=lc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var nc=/#|$/;function oc(a,b){var c=a.search(nc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function pc(a){var b=qc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function rc(){var a=[];pc(function(b){a.push(b)});
return a}
var qc={cb:"allow-forms",eb:"allow-modals",fb:"allow-orientation-lock",gb:"allow-pointer-lock",hb:"allow-popups",ib:"allow-popups-to-escape-sandbox",jb:"allow-presentation",kb:"allow-same-origin",lb:"allow-scripts",mb:"allow-top-navigation",nb:"allow-top-navigation-by-user-activation"},sc=Xa(function(){return rc()});
function tc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};G(sc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function uc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var vc=(new Date).getTime();function wc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function xc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(q){for(var v=g,p=0;64>p;p+=4)v[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=v[p-3]^v[p-8]^v[p-14]^v[p-16],v[p]=(q<<1|q>>>31)&4294967295;q=e[0];var D=e[1],K=e[2],qa=e[3],Ac=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Ja=qa^D&(K^qa);var Jb=1518500249}else Ja=D^K^qa,Jb=1859775393;else 60>p?(Ja=D&K|qa&(D|K),Jb=2400959708):(Ja=D^K^qa,Jb=3395469782);Ja=((q<<5|q>>>27)&4294967295)+Ja+Ac+Jb+v[p]&4294967295;Ac=qa;qa=K;K=(D<<30|D>>>2)&4294967295;D=q;q=Ja}e[0]=e[0]+q&4294967295;e[1]=
e[1]+D&4294967295;e[2]=e[2]+K&4294967295;e[3]=e[3]+qa&4294967295;e[4]=e[4]+Ac&4294967295}
function c(q,v){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],D=0,K=q.length;D<K;++D)p.push(q.charCodeAt(D));q=p}v||(v=q.length);p=0;if(0==l)for(;p+64<v;)b(q.slice(p,p+64)),p+=64,n+=64;for(;p<v;)if(f[l++]=q[p++],n++,64==l)for(l=0,b(f);p+64<v;)b(q.slice(p,p+64)),p+=64,n+=64}
function d(){var q=[],v=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=v&255,v>>>=8;b(f);for(p=v=0;5>p;p++)for(var D=24;0<=D;D-=8)q[v++]=e[p]>>D&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,wa:function(){for(var q=d(),v="",p=0;p<q.length;p++)v+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return v}}}
;function yc(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),zc(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=zc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function zc(a){var b=xc();b.update(a);return b.wa().toLowerCase()}
;function Bc(a){var b=wc(String(u.location.href)),c=u.__OVERRIDE_SID;null==c&&(c=(new Ub(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?u.__SAPISID:u.__APISID,null==b&&(b=(new Ub(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(u.location.href);return d&&b&&c?[c,yc(wc(d),b,a||null)].join(" "):null}return null}
;function Cc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Cc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Dc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Ec(a){u.setTimeout(function(){throw a;},0)}
var Fc;
function Gc(){var a=u.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==Ab.indexOf("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Kb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Fb(Hb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(k){if(("*"==h||k.origin==h)&&
k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&-1==Ab.indexOf("Trident")&&-1==Ab.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(w(c.next)){c=c.next;var e=c.la;c.la=null;e()}};
return function(e){d.next={la:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){u.setTimeout(e,0)}}
;function Hc(){this.g=this.f=null}
var Jc=new Cc(function(){return new Ic},function(a){a.reset()});
Hc.prototype.add=function(a,b){var c=Jc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Hc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Ic(){this.next=this.scope=this.f=null}
Ic.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Ic.prototype.reset=function(){this.next=this.scope=this.f=null};function Kc(a,b){Lc||Mc();Nc||(Lc(),Nc=!0);Oc.add(a,b)}
var Lc;function Mc(){if(u.Promise&&u.Promise.resolve){var a=u.Promise.resolve(void 0);Lc=function(){a.then(Pc)}}else Lc=function(){var b=Pc;
!Ca(u.setImmediate)||u.Window&&u.Window.prototype&&-1==Ab.indexOf("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(Fc||(Fc=Gc()),Fc(b)):u.setImmediate(b)}}
var Nc=!1,Oc=new Hc;function Pc(){for(var a;a=Oc.remove();){try{a.f.call(a.scope)}catch(b){Ec(b)}Dc(Jc,a)}Nc=!1}
;function Qc(){this.g=-1}
;function Rc(){this.g=64;this.f=[];this.l=[];this.w=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
C(Rc,Qc);Rc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Sc(a,b,c){c||(c=0);var d=a.w;if(x(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Rc.prototype.update=function(a,b){if(null!=a){w(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Sc(this,a,d),d+=this.g;if(x(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Sc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Sc(this,e);f=0;break}}this.h=f;this.j+=b}};
Rc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Sc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function L(){this.g=this.g;this.w=this.w}
L.prototype.g=!1;L.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Tc(a,b){a.g?w(void 0)?b.call(void 0):b():(a.w||(a.w=[]),a.w.push(w(void 0)?A(b,void 0):b))}
L.prototype.o=function(){if(this.w)for(;this.w.length;)this.w.shift()()};
function Uc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Vc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?Vc.apply(null,d):Uc(d)}}
;function Wc(a){if(a.classList)return a.classList;a=a.className;return x(a)&&a.match(/\S+/g)||[]}
function Xc(a,b){if(a.classList)var c=a.classList.contains(b);else c=Wc(a),c=0<=Pa(c,b);return c}
function Yc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Xc(a,"inverted-hdpi")&&(a.className=Qa(Wc(a),function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Zc="StopIteration"in u?u.StopIteration:{message:"StopIteration",stack:""};function $c(){}
$c.prototype.next=function(){throw Zc;};
$c.prototype.G=function(){return this};
function ad(a){if(a instanceof $c)return a;if("function"==typeof a.G)return a.G(!1);if(Ba(a)){var b=0,c=new $c;c.next=function(){for(;;){if(b>=a.length)throw Zc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function bd(a,b){if(Ba(a))try{G(a,b,void 0)}catch(c){if(c!==Zc)throw c;}else{a=ad(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Zc)throw c;}}}
function cd(a){if(Ba(a))return Va(a);a=ad(a);var b=[];bd(a,function(c){b.push(c)});
return b}
;function dd(a,b){this.h={};this.f=[];this.H=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof dd)for(c=ed(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ed(a){fd(a);return a.f.concat()}
m=dd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||gd;fd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function gd(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.H=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.H++,this.f.length>2*this.g&&fd(this),!0):!1};
function fd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.H++);this.h[a]=b};
m.forEach=function(a,b){for(var c=ed(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new dd(this)};
m.G=function(a){fd(this);var b=0,c=this.H,d=this,e=new $c;e.next=function(){if(c!=d.H)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Zc;var f=d.f[b++];return a?f:d.h[f]};
return e};function hd(a){var b=[];id(new jd,a,b);return b.join("")}
function jd(){}
function id(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),id(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),kd(d,c),c.push(":"),id(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":kd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ld={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},md=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function kd(a,b){b.push('"',a.replace(md,function(c){var d=ld[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ld[c]=d);return d}),'"')}
;function nd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function M(a){this.f=0;this.w=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=xa)try{var b=this;a.call(void 0,function(c){od(b,2,c)},function(c){od(b,3,c)})}catch(c){od(this,3,c)}}
function pd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
pd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var qd=new Cc(function(){return new pd},function(a){a.reset()});
function rd(a,b,c){var d=qd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function sd(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return td(this,Ca(a)?a:null,Ca(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;function ud(a,b){return td(a,null,b,void 0)}
M.prototype.cancel=function(a){0==this.f&&Kc(function(){var b=new vd(a);wd(this,b)},this)};
function wd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?wd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):xd(c),yd(c,e,3,b)))}a.h=null}else od(a,3,b)}
function zd(a,b){a.g||2!=a.f&&3!=a.f||Ad(a);a.i?a.i.next=b:a.g=b;a.i=b}
function td(a,b,c,d){var e=rd(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);!w(k)&&h instanceof vd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;zd(a,e);return e.f}
M.prototype.A=function(a){this.f=0;od(this,2,a)};
M.prototype.B=function(a){this.f=0;od(this,3,a)};
function od(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.B;if(d instanceof M){zd(d,rd(e||xa,f||null,a));var g=!0}else if(nd(d))d.then(e,f,a),g=!0;else{if(Da(d))try{var h=d.then;if(Ca(h)){Bd(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.w=c,a.f=b,a.h=null,Ad(a),3!=b||c instanceof vd||Cd(a,c))}}
function Bd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ad(a){a.l||(a.l=!0,Kc(a.m,a))}
function xd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.m=function(){for(var a;a=xd(this);)yd(this,a,this.f,this.w);this.l=!1};
function yd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Dd(b,c,d);else try{b.h?b.g.call(b.context):Dd(b,c,d)}catch(e){Ed.call(null,e)}Dc(qd,b)}
function Dd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Cd(a,b){a.j=!0;Kc(function(){a.j&&Ed.call(null,b)})}
var Ed=Ec;function vd(a){F.call(this,a)}
C(vd,F);vd.prototype.name="cancel";function N(a){L.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
C(N,L);m=N.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Fd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Ta(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.N(b)}}
m.N=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=xa):(c&&Ua(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.M=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Gd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.N(c)}}return 0!=e}return!1};
function Gd(a,b,c){Kc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.o=function(){N.L.o.call(this);this.clear();this.i.length=0};function Hd(a){this.f=a}
Hd.prototype.set=function(a,b){w(b)?this.f.set(a,hd(b)):this.f.remove(a)};
Hd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hd.prototype.remove=function(a){this.f.remove(a)};function Id(a){this.f=a}
C(Id,Hd);function Jd(a){this.data=a}
function Kd(a){return!w(a)||a instanceof Jd?a:new Jd(a)}
Id.prototype.set=function(a,b){Id.L.set.call(this,a,Kd(b))};
Id.prototype.g=function(a){a=Id.L.get.call(this,a);if(!w(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Id.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!w(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ld(a){this.f=a}
C(Ld,Id);Ld.prototype.set=function(a,b,c){if(b=Kd(b)){if(c){if(c<B()){Ld.prototype.remove.call(this,a);return}b.expiration=c}b.creation=B()}Ld.L.set.call(this,a,b)};
Ld.prototype.g=function(a){var b=Ld.L.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<B()||c&&c>B())Ld.prototype.remove.call(this,a);else return b}};function Md(){}
;function Nd(){}
C(Nd,Md);Nd.prototype.clear=function(){var a=cd(this.G(!0)),b=this;G(a,function(c){b.remove(c)})};function Od(a){this.f=a}
C(Od,Nd);m=Od.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.G=function(a){var b=0,c=this.f,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Pd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
C(Pd,Od);function Qd(a,b){this.g=a;this.f=null;if(Ob&&!(9<=Number(Pb))){Rd||(Rd=new dd);this.f=Rd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Rd.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
C(Qd,Nd);var Sd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Rd=null;function Td(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Sd[b]})}
m=Qd.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Td(a),b);Ud(this)};
m.get=function(a){a=this.f.getAttribute(Td(a));if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Td(a));Ud(this)};
m.G=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ud(this)};
function Ud(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Vd(a,b){this.g=a;this.f=b+"::"}
C(Vd,Nd);Vd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Vd.prototype.get=function(a){return this.g.get(this.f+a)};
Vd.prototype.remove=function(a){this.g.remove(this.f+a)};
Vd.prototype.G=function(a){var b=this.g.G(!0),c=this,d=new $c;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Wd(){this.g=[];this.f=-1}
Wd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Wd.prototype.get=function(a){return!!this.g[a]};
function Xd(a){-1==a.f&&(a.f=Sa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at /save/http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function Yd(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Zd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",Zd,void 0);function O(a){Yd(Zd,arguments)}
function P(a,b){return a in Zd?Zd[a]:b}
function $d(a){return P(a,void 0)}
function ae(){return P("PLAYER_CONFIG",{})}
;function be(){var a=ce;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function de(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;function ee(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
function Q(a,b,c,d,e){var f=z("yt.logging.errors.log");f?f(a,b,c,d,e):(f=P("ERRORS",[]),f.push([a,b,c,d,e]),O("ERRORS",f))}
function fe(a){Q(a,"WARNING",void 0,void 0,void 0)}
;function ge(a){var b=[];Ya(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function he(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Wa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?fe(h):Q(h)}}return b}
function ie(a,b){return je(a,b||{},!0)}
function je(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=he(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return mc(a,e)+d}
;function ke(a){var b=le;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(me(b),ne(b));b.ca_type="image";a&&(b.bid=a);return b}
function me(a){var b={};b.dt=vc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?E:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!E.navigator&&"unknown"!==typeof E.navigator.javaEnabled&&!!E.navigator.javaEnabled&&E.navigator.javaEnabled();E.screen&&(b.u_h=E.screen.height,b.u_w=E.screen.width,b.u_ah=E.screen.availHeight,b.u_aw=E.screen.availWidth,b.u_cd=E.screen.colorDepth);
E.navigator&&E.navigator.plugins&&(b.u_nplug=E.navigator.plugins.length);E.navigator&&E.navigator.mimeTypes&&(b.u_nmime=E.navigator.mimeTypes.length);return b}
function ne(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(q){}try{var e=b.outerWidth;var f=b.outerHeight}catch(q){}try{var g=b.innerWidth;var h=b.innerHeight}catch(q){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new $b(l.clientWidth,l.clientHeight)).round()}catch(q){n=new $b(-12245933,-12245933)}k=n;n={};l=new Wd;u.SVGElement&&
u.document.createElementNS&&l.set(0);c=tc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);u.crypto&&u.crypto.subtle&&l.set(3);u.TextDecoder&&u.TextEncoder&&l.set(4);l=Xd(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!E.WebGLRenderingContext,n}
var le=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ge(ke(a))},void 0);B();function oe(a,b){var c=R(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function R(a){return P("EXPERIMENT_FLAGS",{})[a]}
;var pe=w(XMLHttpRequest)?function(){return new XMLHttpRequest}:w(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function qe(){if(!pe)return null;var a=pe();return"open"in a?a:null}
function re(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function S(a,b){Ca(a)&&(a=ee(a));return window.setTimeout(a,b)}
function T(a){window.clearTimeout(a)}
;var se={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},te="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ue=!1;
function ve(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(jc),d=d.match(jc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=!!R("web_ajax_ignore_global_headers_if_set");for(var f in se)e=P(se[f]),!e||!c&&!we(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||we(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(R("pass_biscotti_id_in_header_ajax")||R("pass_biscotti_id_in_header_ajax_tv"))&&(c||
we(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=ge(ke(void 0)));return b}
function xe(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=he(b),f={};G(te,function(g){e[g]&&(f[g]=e[g])});
return je(a,f||{},!1)}
function we(a,b){var c=P("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=Pa(c,b):!1:!0}
function ye(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ze(a,b);var d=Ae(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&T(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||u;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.ja&&b.ja.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.oa&&0<b.timeout&&(f=S(function(){e||(e=!0,T(f),b.oa.call(b.context||u))},b.timeout))}else Be(a,b)}
function Be(a,b){var c=b.format||"JSON";a=ze(a,b);var d=Ae(a,b),e=!1,f,g=Ce(a,function(h){if(!e){e=!0;f&&T(f);var k=re(h),l=null,n=400<=h.status&&500>h.status,q=500<=h.status&&600>h.status;if(k||n||q)l=De(c,h,b.rb);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||u;k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.ja&&b.ja.call(n,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.O&&0<b.timeout&&(f=S(function(){e||(e=!0,g.abort(),T(f),b.O.call(b.context||u,g))},b.timeout));
return g}
function ze(a,b){b.ub&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.bb;d&&(d[c]&&delete d[c],a=ie(a,d));return a}
function Ae(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.F,g=$d("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.tb||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.F&&b.F[g]||(f||(f={}),f[c]=d);f&&x(e)&&(e=he(e),hb(e,f),e=b.qa&&"JSON"==b.qa?JSON.stringify(e):lc(e));f=e||f&&!bb(f);!ue&&f&&"POST"!=b.method&&(ue=!0,Q(Error("AJAX request with postData should use POST")));
return e}
function De(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ee(b):null)d={},G(b.getElementsByTagName("*"),function(e){d[e.tagName]=Fe(e)})}c&&Ge(d);
return d}
function Ge(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Gb(a[b],null);a[c]=d}else Ge(a[b])}}
function Ee(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fe(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ce(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ee(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=qe();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=xe(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ve(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var He={},Ie=0;
function Je(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ab,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),yb.test(a)||(a="about:invalid#zClosurez"),a=new H(vb,a)),b=xb(a).toString(),"about:invalid#zClosurez"===b?a="":(b instanceof Db?a=b:(d="object"==typeof b,a=null,d&&b.ha&&(a=b.ea()),b=nb(d&&b.J?b.I():String(b)),a=Gb(b,a)),a=Fb(a).toString(),a=encodeURIComponent(String(hd(a)))),/^[\s\xa0]*$/.test(a)||(a=dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ce(a,b,"POST",e,d):P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ce(a,b,"GET","",d):Ke(a,b)||Le(a,b))}
function Ke(a,b){var c=Zd.EXPERIMENT_FLAGS;if(!c||!c.web_use_beacon_api_for_ad_click_server_pings)return!1;c=I(J(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===oc(a,"ae")&&"1"===oc(a,"act")?Me(a)?(b&&b(),!0):!1:!1}
function Me(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Le(a,b){var c=new Image,d=""+Ie++;He[d]=c;c.onload=c.onerror=function(){b&&He[d]&&b();delete He[d]};
c.src=a}
;var Ne={},Oe=0;
function Pe(a,b,c,d,e,f){f=f||{};f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Oe||(R("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=Wb(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&Ca(window.yterr)&&window.yterr(a),Ne[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={bb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},F:{url:P("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.F.stack=e);for(var g in f)b.F["client."+g]=f[g];if(g=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var h in g)b.F[h]=g[h];Be(P("ECATCHER_REPORT_HOST","")+"/error_204",b);Ne[a.message]=!0;Oe++}}
;var Qe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Qe,void 0);function Re(a){Yd(Qe,arguments)}
;function Se(a){a&&(a.dataset?a.dataset[Te("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ue(a,b){return a?a.dataset?a.dataset[Te(b)]:a.getAttribute("data-"+b):null}
var Ve={};function Te(a){return Ve[a]||(Ve[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var We=z("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.N;N.prototype.publish=N.prototype.M;N.prototype.clear=N.prototype.clear;y("ytPubsubPubsubInstance",We,void 0);var Xe=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",Xe,void 0);var Ye=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",Ye,void 0);var Ze=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",Ze,void 0);
function $e(a,b){var c=af();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Xe[d]&&b.apply(window,e)};
try{Ze[a]?f():S(f,0)}catch(g){Q(g)}},void 0);
Xe[d]=!0;Ye[a]||(Ye[a]=[]);Ye[a].push(d);return d}return 0}
function bf(a){var b=af();b&&("number"==typeof a?a=[a]:x(a)&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete Xe[c]}))}
function cf(a,b){var c=af();c&&c.publish.apply(c,arguments)}
function df(a){var b=af();if(b)if(b.clear(a),a)ef(a);else for(var c in Ye)ef(c)}
function af(){return z("ytPubsubPubsubInstance")}
function ef(a){Ye[a]&&(a=Ye[a],G(a,function(b){Xe[b]&&delete Xe[b]}),a.length=0)}
;var ff=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,gf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function hf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ff,""),c=c.replace(gf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else jf(a,b,c)}
function jf(a,b,c){c=void 0===c?null:c;var d=kf(a),e=document.getElementById(d),f=e&&Ue(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=$e(d,b),b=""+(b[Ea]||(b[Ea]=++Fa)),lf[b]=f),g||(e=mf(a,d,function(){Ue(e,"loaded")||(Se(e),cf(d),S(Ia(df,d),0))},c)))}
function mf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,hc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function nf(a){a=kf(a);var b=document.getElementById(a);b&&(df(a),b.parentNode.removeChild(b))}
function of(a,b){if(a&&b){var c=""+(b[Ea]||(b[Ea]=++Fa));(c=lf[c])&&bf(c)}}
function kf(a){var b=document.createElement("a");Ib(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Nb(a)}
var lf={};function pf(){}
function qf(a,b){return rf(a,1,b)}
;function sf(){}
t(sf,pf);function rf(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function tf(a){if(!isNaN(a)){var b=z("yt.scheduler.instance.cancelJob");b?b(a):T(a)}}
sf.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
sf.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
ya(sf);sf.getInstance();var uf=[],vf=!1;function wf(){if("1"!=Za(ae(),"args","privembed")){var a=function(){vf=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
hf("//static.doubleclick.net/instream/ad_status.js",a);uf.push(qf(function(){vf||"google_ad_status"in window||(of("//static.doubleclick.net/instream/ad_status.js",a),vf=!0,O("DCLKSTAT",3))},5E3))}}
function xf(){return parseInt(P("DCLKSTAT",0),10)}
;function yf(){this.g=!1;this.f=null}
yf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,hf(b,function(){f.g=!1;if(window.botguard)zf(f,c,d);else{nf(b);var g=Error("Unable to load Botguard");g.params="from "+b;fe(g)}},e)):a&&(eval(a),window.botguard?zf(this,c,d):fe(Error("Unable to load Botguard from JS")))};
function zf(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){fe(d)}c&&c(b)}
yf.prototype.dispose=function(){this.f=null};var Af=window,U=Af.ytcsi&&Af.ytcsi.now?Af.ytcsi.now:Af.performance&&Af.performance.timing&&Af.performance.now?function(){return Af.performance.timing.navigationStart+Af.performance.now()}:function(){return(new Date).getTime()};var Bf=new yf,Cf=!1,Df=0,Ef="";function Ff(a){R("botguard_periodic_refresh")?Df=U():R("botguard_always_refresh")&&(Ef=a)}
function Gf(a){if(a){if(Bf.g)return!1;if(R("botguard_periodic_refresh"))return 72E5<U()-Df;if(R("botguard_always_refresh"))return Ef!=a}else return!1;return!Cf}
function Hf(){return!!Bf.f}
function If(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Bf.f?Bf.f.invoke(void 0,void 0,a):null}
;var Jf=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Jf},void 0);var Kf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Lf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Kf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Mf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Lf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Lf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Lf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ab=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",ab,void 0);var Nf=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Nf,void 0);
function Of(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return $a(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Da(e[4])&&Da(d)&&db(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Pf=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Of(a,b,c,d);if(e)return e;e=++Nf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Lf(h);if(!gc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Lf(h);
h.currentTarget=a;return c.call(a,h)};
g=ee(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Pf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ab[e]=[a,b,c,g,d];return e}
function Qf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in ab){var c=ab[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Pf()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ab[b]}}))}
;var Rf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Sf(a){this.A=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.C=V(window,"mousemove",A(this.D,this));a=A(this.B,this);Ca(a)&&(a=ee(a));this.K=window.setInterval(a,25)}
C(Sf,L);Sf.prototype.D=function(a){w(a.f)||Mf(a);var b=a.f;w(a.g)||Mf(a);this.f=new Zb(b,a.g)};
Sf.prototype.B=function(){if(this.f){var a=Rf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.A();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
Sf.prototype.o=function(){window.clearInterval(this.K);Qf(this.C)};var Tf={};
function Uf(a){var b=void 0===a?{}:a;a=void 0===b.Ba?!0:b.Ba;b=void 0===b.Qa?!1:b.Qa;if(null==z("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?B()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&Vf();V(document,"keydown",Vf);V(document,"keyup",Vf);V(document,"mousedown",Vf);V(document,"mouseup",Vf);a&&(b?V(window,"touchmove",function(){Wf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Wf("resize",200)}),V(window,"scroll",function(){Wf("scroll",200)})));
new Sf(function(){Wf("mouse",100)});
V(document,"touchstart",Vf,{passive:!0});V(document,"touchend",Vf,{passive:!0})}}
function Wf(a,b){Tf[a]||(Tf[a]=!0,qf(function(){Vf();Tf[a]=!1},b))}
function Vf(){null==z("_lact",window)&&Uf();var a=B();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function Xf(){var a=z("_lact",window);return null==a?-1:Math.max(B()-a,0)}
;var Yf=Math.pow(2,16)-1,Zf=null,$f=0,ag={log_event:"events",log_interaction:"interactions"},bg=Object.create(null);bg.log_event="GENERIC_EVENT_LOGGING";bg.log_interaction="INTERACTION_LOGGING";var cg=new Set(["log_event"]),dg={},eg=0,fg=0,W=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",W,void 0);var gg=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",gg,void 0);var hg=z("ytLoggingTransportDispatchedStats_")||{};
y("ytLoggingTransportDispatchedStats_",hg,void 0);y("ytytLoggingTransportCapturedTime_",z("ytLoggingTransportCapturedTime_")||{},void 0);function ig(){T(eg);T(fg);fg=0;if(!bb(W)){for(var a in W){var b=dg[a];b&&(jg(a,b),delete W[a])}bb(W)||kg()}}
function kg(){R("web_gel_timeout_cap")&&!fg&&(fg=S(ig,6E4));T(eg);eg=S(ig,P("LOGGING_BATCH_TIMEOUT",oe("web_gel_debounce_ms",1E4)))}
function lg(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function jg(a,b){var c=ag[a],d=hg[a]||{};hg[a]=d;var e=Math.round(U());for(l in W[a]){var f=fb,g=b.f;g={client:{hl:g.Ia,gl:g.Ha,clientName:g.Fa,clientVersion:g.Ga,configInfo:g.Ea}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(g.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=lg(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=gg[l])a:{var k=
l;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:h}]}delete gg[l];f.requestTimeMs=e;if(g=$d("EVENT_ID"))h=(P("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>Yf&&(h=1),O("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,Zf&&$f&&R("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Zf,
roundtripMs:$f}),Zf=g,$f=0;mg(b,a,f,{retry:cg.has(a),onSuccess:A(ng,this,U())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function ng(a){$f=Math.round(U()-a)}
;var og=z("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",og,void 0);
function pg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||U());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Xf())};R("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,og[b]=b in og?og[b]+1:0,a.sequence={index:og[b],groupKey:b},d.sb&&delete og[d.P]);(d=d.da)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),gg[d.token]=a,d=lg("log_event",d.token)):d=lg("log_event");d.push(e);c&&(dg.log_event=new c);d.length>=(oe("web_logging_max_batch")||
100)?ig():kg()}
;function qg(a){this.f=a}
function rg(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=rg(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
qg.prototype.toString=function(){return JSON.stringify(rg(this))};
var sg=1;function tg(a,b){this.version=a;this.args=b}
;function ug(a,b){this.topic=a;this.f=b}
ug.prototype.toString=function(){return this.topic};var vg=z("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.N;N.prototype.publish=N.prototype.M;N.prototype.clear=N.prototype.clear;y("ytPubsub2Pubsub2Instance",vg,void 0);var wg=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",wg,void 0);var xg=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",xg,void 0);var yg=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",yg,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function zg(a,b){var c=Ag();c&&c.publish.call(c,a.toString(),a,b)}
function Bg(a){var b=Cg,c=Ag();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(wg[d])try{if(f&&b instanceof ug&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.H){var l=new h;h.H=l.version}var n=h.H}catch(q){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Va(k.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+q.message,q;}a.call(window,f)}catch(q){Q(q)}},yg[b.toString()]?z("yt.scheduler.instance")?qf(g):S(g,0):g())});
wg[d]=!0;xg[b.toString()]||(xg[b.toString()]=[]);xg[b.toString()].push(d);return d}
function Dg(){var a=Eg,b=Bg(function(c){a.apply(void 0,arguments);Fg(b)});
return b}
function Fg(a){var b=Ag();b&&("number"==typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete wg[c]}))}
function Ag(){return z("ytPubsub2Pubsub2Instance")}
;function Gg(a){tg.call(this,1,arguments);this.csn=a}
t(Gg,tg);var Cg=new ug("screen-created",Gg),Hg=[],Ig=0;function Jg(a,b,c){var d=Kg;b={csn:a,parentVe:rg(b),childVes:Ra(c,function(f){return rg(f)})};
c=r(c);for(var e=c.next();!e.done;e=c.next())e=rg(e.value),(bb(e)||!e.trackingParams&&!e.veType)&&Pe(Error("Child VE logged with no data"),"WARNING");c={da:void 0,P:a};"UNDEFINED_CSN"==a?Lg("visualElementAttached",b,c):pg("visualElementAttached",b,d,c)}
function Lg(a,b,c){Hg.push({Pa:a,payload:b,options:c});Ig||(Ig=Dg())}
function Eg(a){if(Hg){for(var b=r(Hg),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,pg(c.Pa,c.payload,null,c.options));Hg.length=0}Ig=0}
;function Mg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.pb||P("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().ob:b=Bc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function Ng(a){a=Object.assign({},a);delete a.Authorization;var b=Bc();if(b){var c=new Rc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!Tb){Tb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Sb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Tb[k]&&(Tb[k]=h)}}}c=Sb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Og(a,b,c,d){Vb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Pg(){var a=new Pd;(a=a.isAvailable()?new Vd(a,"yt.innertube"):null)||(a=new Qd("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Ld(a):null;this.g=document.domain||window.location.hostname}
Pg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,B()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(hd(b))}catch(f){return}else e=escape(b);Og(a,e,c,this.g)};
Pg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Vb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Pg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Vb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Qg=new Pg;function Rg(a,b,c,d){if(d)return null;d=Qg.get("nextId",!0)||1;var e=Qg.get("requests",!0)||{};e[d]={method:a,request:b,authState:Ng(c),requestTime:Math.round(U())};Qg.set("nextId",d+1,86400,!0);Qg.set("requests",e,86400,!0);return d}
function Sg(a){var b=Qg.get("requests",!0)||{};delete b[a];Qg.set("requests",b,86400,!0)}
function Tg(a){var b=Qg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Ng(Mg(!1));db(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),mg(a,d.method,e,{}));delete b[c]}}Qg.set("requests",b,86400,!0)}}
;function Kg(a){var b=this;this.f=a||{Ca:$d("INNERTUBE_API_KEY"),Da:$d("INNERTUBE_API_VERSION"),Ea:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Fa:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ga:$d("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ia:$d("INNERTUBE_CONTEXT_HL"),Ha:$d("INNERTUBE_CONTEXT_GL"),Ja:$d("INNERTUBE_HOST_OVERRIDE")||"",Ka:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};rf(function(){Tg(b)},0,5E3)}
function mg(a,b,c,d){!P("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",F:c,qa:"JSON",O:function(){d.O()},
oa:d.O,onSuccess:function(v,p){if(d.onSuccess)d.onSuccess(p)},
na:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,p){if(d.onError)d.onError(p)},
vb:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ja;g&&(f=g);g=a.f.Ka||!1;var h=Mg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=ie(""+f+("/youtubei/"+a.f.Da+"/"+b),{alt:"json",key:a.f.Ca}),l;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Rg(b,c,h,g))){var n=e.onSuccess,q=e.na;e.onSuccess=function(v,p){Sg(l);n(v,p)};
c.na=function(v,p){Sg(l);q(v,p)}}try{R("use_fetch_for_op_xhr")?ye(k,e):(e.method="POST",e.F||(e.F={}),Be(k,e))}catch(v){if("InvalidAccessError"==v)l&&(Sg(l),l=0),Q(Error("An extension is blocking network request."),"WARNING");
else throw v;}l&&rf(function(){Tg(a)},0,5E3)}
;var Ug=B().toString();
function Vg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=B();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ug)for(a=1,b=0;b<Ug.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ug.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Wg=z("ytLoggingTimeDocumentNonce_")||Vg();y("ytLoggingTimeDocumentNonce_",Wg,void 0);function Xg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Yg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Zg(a){return P(Yg(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",Zg,void 0);function $g(){var a=Zg(0),b;a?b=new qg({veType:a,youtubeData:void 0}):b=null;return b}
function ah(a){a=void 0===a?0:a;var b=P(Xg(a));b||0!=a||(R("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=P("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",ah,void 0);function bh(a,b,c){c=void 0===c?0:c;if(a!==P(Xg(c))||b!==P(Yg(c)))O(Xg(c),a),O(Yg(c),b),0==c&&(b=function(){setTimeout(function(){a&&pg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Wg,clientScreenNonce:a},Kg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
y("yt_logging_screen.setCurrentScreen",bh,void 0);function ch(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=I(J(3,window.location.href));g&&f.push(g);g=I(J(3,d));if(0<=Pa(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),Ib(f,d),d=f.href),d){g=d.match(jc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&(b.itct||b.ved)&&
(b.csn=b.csn||ah()),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e="ST-"+Nb(d).toString(36),b=b?lc(b):"",Og(e,b,k||5))}else k="ST-"+Nb(d).toString(36),b=b?lc(b):"",Og(k,b,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var q=void 0===q?window:q;c=q.location;a=mc(a,l)+n;a=a instanceof H?a:zb(a);c.href=xb(a)}return!0}
;function dh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||eb(b);this.assets=a.assets||{};this.attrs=a.attrs||eb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
dh.prototype.clone=function(){var a=new dh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==za(c)?a[b]=eb(c):a[b]=c}return a};function eh(){L.call(this);this.f=[]}
t(eh,L);eh.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.qb)}L.prototype.o.call(this)};var fh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function gh(a){a=a||"";if(window.spf){var b=a.match(fh);spf.style.load(a,b?b[1]:"",void 0)}else hh(a)}
function hh(a){var b=ih(a),c=document.getElementById(b),d=c&&Ue(c,"loaded");d||c&&!d||(c=jh(a,b,function(){Ue(c,"loaded")||(Se(c),cf(b),S(Ia(df,b),0))}))}
function jh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=hc(a);d.rel="stylesheet";d.href=a.f?a.f:lb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ih(a){var b=document.createElement("A");Ib(b,new H(vb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Nb(a)}
;function kh(a,b,c,d){L.call(this);var e=this;this.l=this.X=a;this.U=b;this.A=!1;this.api={};this.V=this.C=null;this.D=new N;Tc(this,Ia(Uc,this.D));this.i={};this.R=this.W=this.h=this.ca=this.f=null;this.K=!1;this.j=this.B=null;this.Y={};this.ta=["onReady"];this.ba=null;this.ka=NaN;this.S={};this.m=d;lh(this);this.Z("WATCH_LATER_VIDEO_ADDED",this.Ma.bind(this));this.Z("WATCH_LATER_VIDEO_REMOVED",this.Na.bind(this));this.Z("onAdAnnounce",this.va.bind(this));this.ua=new eh(this);Tc(this,Ia(Uc,this.ua));
this.T=0;c?this.T=S(function(){e.loadNewVideoConfig(c)},0):d&&(mh(this),nh(this))}
t(kh,L);m=kh.prototype;m.getId=function(){return this.U};
m.loadNewVideoConfig=function(a){if(!this.g){this.T&&(T(this.T),this.T=0);a instanceof dh||(a=new dh(a));this.ca=a;this.f=a.clone();mh(this);this.W||(this.W=oh(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=uc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=uc(Number(a)||a);nh(this);this.A&&ph(this)}};
function mh(a){var b;a.m?b=a.m.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.U,a.f.attrs.id=a.U);a.l.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
m.ya=function(){return this.ca};
function ph(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function qh(a){var b=!0,c=rh(a);c&&a.f&&(a=sh(a),b=Ue(c,"version")==a);return b&&!!z("yt.player.Application.create")}
function nh(a){if(!a.g&&!a.K){var b=qh(a);if(b&&"html5"==(rh(a)?"html5":null))a.R="html5",a.A||th(a);else if(uh(a),a.R="html5",b&&a.j)a.X.appendChild(a.j),th(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.B=function(){c=!0;var d=z("yt.player.Application.create"),e=a.f?a.f.clone():void 0;d(a.X,e,a.m);th(a)};
a.K=!0;b?a.B():(hf(sh(a),a.B),gh(a.m?a.m.cssUrl:a.f.assets.css),vh(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function rh(a){var b=ac(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function th(a){if(!a.g){var b=rh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||wh(a)):a.ka=S(function(){th(a)},50)}}
function wh(a){lh(a);a.A=!0;var b=rh(a);b.addEventListener&&(a.C=xh(a,b,"addEventListener"));b.removeEventListener&&(a.V=xh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=xh(a,b,e))}for(var f in a.i)a.C(f,a.i[f]);ph(a);a.W&&a.W(a.api);a.D.M("onReady",a.api)}
function xh(a,b,c){var d=b[c];return function(){try{return a.ba=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ba=e,fe(e))}}}
function lh(a){a.A=!1;if(a.V)for(var b in a.i)a.V(b,a.i[b]);for(var c in a.S)T(parseInt(c,10));a.S={};a.C=null;a.V=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Z.bind(a);a.api.removeEventListener=a.Sa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.za.bind(a);a.api.getPlayerType=a.Aa.bind(a);a.api.getCurrentVideoConfig=a.ya.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.La.bind(a)}
m.La=function(){return this.A};
m.Z=function(a,b){var c=this,d=oh(this,b);if(d){if(!(0<=Pa(this.ta,a)||this.i[a])){var e=yh(this,a);this.C&&this.C(a,e)}this.D.subscribe(a,d);"onReady"==a&&this.A&&S(function(){d(c.api)},0)}};
m.Sa=function(a,b){if(!this.g){var c=oh(this,b);c&&Fd(this.D,a,c)}};
function oh(a,b){var c=b;if("string"==typeof b){if(a.Y[b])return a.Y[b];c=function(){var d=z(b);d&&d.apply(u,arguments)};
a.Y[b]=c}return c?c:null}
function yh(a,b){var c="ytPlayer"+b+a.U;a.i[b]=c;u[c]=function(d){var e=S(function(){if(!a.g){a.D.M(b,d);var f=a.S,g=String(e);g in f&&delete f[g]}},0);
cb(a.S,String(e))};
return c}
m.va=function(a){cf("a11y-announce",a)};
m.Ma=function(a){cf("WATCH_LATER_VIDEO_ADDED",a)};
m.Na=function(a){cf("WATCH_LATER_VIDEO_REMOVED",a)};
m.Aa=function(){return this.R||(rh(this)?"html5":null)};
m.za=function(){return this.ba};
function uh(a){a.cancel();lh(a);a.R=null;a.f&&(a.f.loaded=!1);var b=rh(a);b&&(qh(a)||!vh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.X;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&of(sh(this),this.B);T(this.ka);this.K=!1};
m.o=function(){uh(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){Q(b)}this.Y=null;for(var a in this.i)u[this.i[a]]=null;this.ca=this.f=this.api=null;delete this.X;delete this.l;L.prototype.o.call(this)};
function vh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function sh(a){return a.m?a.m.jsUrl:a.f.assets.js}
;var zh={},Ah="player_uid_"+(1E9*Math.random()>>>0);function Bh(a){delete zh[a.getId()]}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Ch(){var a=P("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function Dh(){var a=Ch(),b;for(b in a)tf(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function Eh(a,b){tg.call(this,1,arguments)}
t(Eh,tg);function Fh(a,b){tg.call(this,1,arguments)}
t(Fh,tg);var Gh=new ug("aft-recorded",Eh),Hh=new ug("timing-sent",Fh);function Ih(){var a;(a=z("ytcsi.data_"))||(a={tick:{},info:{}},Ka("ytcsi.data_",a));return a}
function Jh(){var a=Ih();a.info||(a.info={});return a.info}
function Kh(){var a=Ih();a.tick||(a.tick={});return a.tick}
function Lh(){var a=Ih().nonce;a||(a=Vg(),Ih().nonce=a);return a}
;function Mh(a,b,c){c=void 0===c?{}:c;var d=Kg;P("ytLoggingEventsDefaultDisabled",!1)&&Kg==Kg&&(d=null);pg(a,b,d,c)}
;var Nh=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",Nh,void 0);var Oh=0;function Ph(a){Nh[a]=Nh[a]||{count:0};var b=Nh[a];b.count++;b.time=U();Oh||(Oh=rf(Qh,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;Pe(c,b)}return!0}return!1}
function Qh(){var a=U(),b;for(b in Nh)6E4<a-Nh[b].time&&delete Nh[b];Oh=0}
;function Rh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Sh(a)||c.some(function(e){return!Sh(e)}))throw Error("Only objects may be merged.");
c=r(c);for(d=c.next();!d.done;d=c.next())Th(a,d.value);return a}
function Th(a,b){for(var c in b)if(Sh(b[c])){if(c in a&&!Sh(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Th(a[c],b[c])}else if(Uh(b[c])){if(c in a&&!Uh(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Vh(a[c],b[c])}else a[c]=b[c];return a}
function Vh(a,b){for(var c=r(b),d=c.next();!d.done;d=c.next())d=d.value,Sh(d)?a.push(Th({},d)):Uh(d)?a.push(Vh([],d)):a.push(d);return a}
function Sh(a){return"object"===typeof a&&!Array.isArray(a)}
function Uh(a){return"object"===typeof a&&Array.isArray(a)}
;function Wh(a){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack)}
t(Wh,Error);var Y={},Xh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="getHomeRequestId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav=
"kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.prt="playbackRequiresTap",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",
Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Yh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Zh={},$h=(Zh.mver="MEASUREMENT_VERSION_",Zh.pis="PLAYER_INITIALIZED_STATE_",Zh.yt_pt="LATENCY_PLAYER_",Zh.pa="LATENCY_ACTION_",Zh.yt_vst="VIDEO_STREAM_TYPE_",Zh),ai="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
function bi(){return!!R("csi_on_gel")||!!Ih().useGel}
function ci(){var a=Ih();if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;var di={vc:!0},ei=!1;
function fi(){Jh().yt_lt="hot_bg";if(bi()){var a="hot_bg";var b=ci();if(b.gelInfos)b.gelInfos.info_yt_lt=!0;else{var c={};b.gelInfos=(c.info_yt_lt=!0,c)}if("yt_lt"in Xh){b=Xh.yt_lt;0<=Pa(Yh,b)&&(a=!!a);"yt_lt"in $h&&"string"===typeof a&&(a=$h.yt_lt+a.toUpperCase());b=b.split(".");for(var d=c={},e=0;e<b.length-1;e++){var f=b[e];d[f]={};d=d[f]}d[b[b.length-1]]=a;a=Rh({},c)}else 0<=Pa(ai,"yt_lt")||(a=new Wh("Unknown label logged with GEL CSI"),a.params="yt_lt",fe(a)),a=void 0;a&&bi()&&(b=ci(),"gelInfos"in
b||(b.gelInfos={}),Rh(b.gelInfos,a),b=Lh(),c=Object.keys(a).join(""),Ph("info_"+c+"_"+b)||(a.clientActionNonce=b,Mh("latencyActionInfo",a)))}}
function gi(){var a=Kh();if(a.aft)return a.aft;for(var b=P("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
A(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||xa,X);function hi(){var a=Kh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Jh().yt_pvis}
function ii(){Dh();if(!bi()){var a=Kh(),b=Jh(),c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&Aa(a[f])){var d=f.slice(1);if(d in di){var e=Ra(a[f],function(l){return Math.round(l-c)});
b["all_"+d]=e.join()}delete a[f]}e=P("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:P("TIMING_ACTION",void 0)};d=fi.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var g=window.location.protocol+z("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?b.h5jse=Math.round(b.h5jse-g.responseEnd):delete b.h5jse}a.aft=gi();hi()&&"youtube"==e&&(fi(),e=a.vc,g=a.pbs,delete a.aft,b.aft=Math.round(g-e));for(var h in b)"_"!=h.charAt(0)&&(f[h]=b[h]);a.ps=Rf();h={};e=[];for(var k in a)"_"!=
k.charAt(0)&&(g=Math.round(a[k]-c),h[k]=g,e.push(k+"."+g));f.rt=e.join(",");(a=z("ytdebug.logTiming"))&&a(f,h);ji(f,!!b.ap);zg(Hh,new Fh(h.aft+(d||0),void 0))}}
function ji(a,b){if(R("debug_csi_data")){var c=z("yt.timing.csiData");c||(c=[],y("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;Me(d,e)||Je(d,void 0,void 0,void 0,e)}else Je(d);Ka("yt.timing.pingSent_",!0)}
;function ki(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function li(a,b,c){x(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return mi(a)}
function mi(a,b,c){if(Da(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function ni(a,b,c,d){if(Da(a)&&!Aa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};x(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function oi(a){a=void 0===a?!1:a;L.call(this);this.f=new N(a);Tc(this,Ia(Uc,this.f))}
C(oi,L);oi.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
oi.prototype.j=function(a,b){this.g||this.f.M.apply(this.f,arguments)};function pi(a,b,c){oi.call(this);this.h=a;this.i=b;this.l=c}
t(pi,oi);function qi(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(hd(a),d.i))}}
pi.prototype.o=function(){this.i=this.h=null;oi.prototype.o.call(this)};function ri(a){L.call(this);this.f=a;this.f.subscribe("command",this.ra,this);this.h={};this.j=!1}
t(ri,L);m=ri.prototype;m.start=function(){this.j||this.g||(this.j=!0,qi(this.f,"RECEIVING"))};
m.ra=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":x(d.event)&&(a=d.event,a in this.h||(c=A(this.Ua,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":x(d.event)&&si(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=ti(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=ui(a,c))&&this.j&&!this.g&&qi(this.f,a,c))}}};
m.Ua=function(a,b){this.j&&!this.g&&qi(this.f,a,this.fa(a,b))};
m.fa=function(a,b){if(null!=b)return{value:b}};
function si(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.o=function(){var a=this.f;a.g||Fd(a.f,"command",this.ra,this);this.f=null;for(var b in this.h)si(this,b);L.prototype.o.call(this)};function vi(a,b){ri.call(this,b);this.i=a;this.start()}
t(vi,ri);vi.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
vi.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function ti(a,b){switch(a){case "loadVideoById":return b=mi(b),[b];case "cueVideoById":return b=mi(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=ni(b),[b];case "cuePlaylist":return b=ni(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ui(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
vi.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ri.prototype.fa.call(this,a,b)};
vi.prototype.o=function(){ri.prototype.o.call(this);delete this.i};function wi(a,b,c){L.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.A="*";this.i=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h)&&x(e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.A=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Pa(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
t(wi,L);wi.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.A)}catch(e){Q(e,"WARNING")}}};
wi.prototype.o=function(){window.removeEventListener("message",this.m);L.prototype.o.call(this)};function xi(){var a=this.g=new wi(!!P("WIDGET_ID_ENFORCE")),b=A(this.Ra,this);a.j=b;a.l=null;this.g.channel="widget";if(a=P("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=xi.prototype;m.Ra=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,yi(this,a)),this.j[a]=!0)):this.ma(a,b,c)};
m.ma=function(){};
function yi(a,b){return A(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.xa=function(){this.l=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");G(this.i,this.sa,this);this.i=[]};
m.ga=function(){return null};
function zi(a,b){a.sendMessage("infoDelivery",b)}
m.sa=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.sa({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function Ai(a){xi.call(this);this.f=a;this.h=[];this.addEventListener("onReady",A(this.Oa,this));this.addEventListener("onVideoProgress",A(this.Ya,this));this.addEventListener("onVolumeChange",A(this.Za,this));this.addEventListener("onApiChange",A(this.Ta,this));this.addEventListener("onPlaybackQualityChange",A(this.Va,this));this.addEventListener("onPlaybackRateChange",A(this.Wa,this));this.addEventListener("onStateChange",A(this.Xa,this));this.addEventListener("onWebglSettingsChanged",A(this.ab,
this))}
t(Ai,xi);m=Ai.prototype;m.ma=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ki(a)){var d=b;if(Da(d[0])&&!Aa(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=mi.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=li.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=ni.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);ki(a)&&zi(this,this.ga())}};
m.Oa=function(){var a=A(this.xa,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.ga=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ua(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0==e.search("get")||0==e.search("is")){var f=0;0==e.search("get")?f=3:0==e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=B()/1E3;return b};
m.Xa=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());zi(this,a)};
m.Va=function(a){zi(this,{playbackQuality:a})};
m.Wa=function(a){zi(this,{playbackRate:a})};
m.Ta=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Za=function(){zi(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Ya=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());zi(this,a)};
m.ab=function(){var a={sphericalProperties:this.f.getSphericalProperties()};zi(this,a)};
m.dispose=function(){xi.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function Bi(a,b,c){L.call(this);this.f=a;this.i=c;this.j=V(window,"message",A(this.l,this));this.h=new pi(this,a,b);Tc(this,Ia(Uc,this.h))}
t(Bi,L);Bi.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,x(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
Bi.prototype.o=function(){Qf(this.j);this.f=null;L.prototype.o.call(this)};function Ci(){var a=eb(Di),b;return ud(new M(function(c,d){a.onSuccess=function(e){re(e)?c(e):d(new Ei("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new Ei("Unknown request error","net.unknown",e))};
a.O=function(e){d(new Ei("Request timed out","net.timeout",e))};
b=Be("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof vd&&b.abort();
return sd(c)})}
function Ei(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(Ei,F);function Fi(){this.g=0;this.f=null}
Fi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),nd(a)?a:Gi(a)):2===this.g&&b?(a=b.call(c,this.f),nd(a)?a:Hi(a)):this};
Fi.prototype.getValue=function(){return this.f};
Fi.prototype.$goog_Thenable=!0;function Hi(a){var b=new Fi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Gi(a){var b=new Fi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Ii(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ji;this.isTimeout=a instanceof Ei&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof vd}
t(Ii,F);Ii.prototype.name="BiscottiError";function Ji(){F.call(this,"Biscotti ID is missing from server")}
t(Ji,F);Ji.prototype.name="BiscottiMissingError";var Di={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ki=null;function ce(){if("1"===Za(ae(),"args","privembed"))return sd(Error("Biscotti ID is not available in private embed mode"));Ki||(Ki=ud(Ci().then(Li),function(a){return Mi(2,a)}));
return Ki}
function Li(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ji;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ji;a=a.id;de(a);Ki=Gi(a);Ni(18E5,2);return a}
function Mi(a,b){var c=new Ii(b);de("");Ki=Hi(c);0<a&&Ni(12E4,a-1);throw c;}
function Ni(a,b){S(function(){ud(Ci().then(Li,function(c){return Mi(b,c)}),xa)},a)}
function Oi(){try{var a=z("yt.ads.biscotti.getId_");return a?a():ce()}catch(b){return sd(b)}}
;function Pi(a){if("1"!==Za(ae(),"args","privembed")){a&&be();try{Oi().then(function(){},function(){}),S(Pi,18E5)}catch(b){Q(b)}}}
;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Qi(){this.f=P("ALT_PREF_COOKIE_NAME","PREF");var a=Vb.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=Qi.prototype;m.get=function(a,b){Ri(a);Si(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Ri(a);Si(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){Ri(a);Si(a);delete Z[a]};
m.save=function(){Og(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Si(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ri(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ti(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(Qi);var Ui=null,Vi=null,Wi=null,Xi={};function Yi(a){var b=a.id;a=a.ve_type;var c=sg++;a=new qg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Xi[b]=a;b=ah();c=$g();b&&c&&Jg(b,c,[a])}
function Zi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(bh(b,a),a=$g()))for(var c in Xi){var d=Xi[c];d&&Jg(b,a,[d])}}
function $i(a){Xi[a.id]=new qg({trackingParams:a.tracking_params})}
function aj(a){var b=ah(),c=Xi[a.id];if(b&&c){a=Kg;c={csn:b,ve:rg(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={da:void 0,P:b};"UNDEFINED_CSN"==b?Lg("visualElementGestured",c,d):pg("visualElementGestured",c,a,d)}}
function bj(a){a=a.ids;var b=ah();if(b)for(var c=0;c<a.length;c++){var d=Xi[a[c]];if(d){var e=Kg;d={csn:b,ve:rg(d),eventType:1};var f={da:void 0,P:b};"UNDEFINED_CSN"==b?Lg("visualElementShown",d,f):pg("visualElementShown",d,e,f)}}}
;y("yt.setConfig",O,void 0);y("yt.config.set",O,void 0);y("yt.setMsg",Re,void 0);y("yt.msgs.set",Re,void 0);y("yt.logging.errors.log",Pe,void 0);
y("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);Pi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=P("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);P("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";b=x(b)?ac(b):b;var d=Ah+"_"+(b[Ea]||(b[Ea]=++Fa)),e=zh[d];e&&(void 0===f||f)?e.loadNewVideoConfig(a):(e=new kh(b,d,a,void 0),zh[d]=e,cf("player-added",e.api),Tc(e,Ia(Bh,e)));a=e.api;Ui=a;a.addEventListener("onScreenChanged",
Zi);a.addEventListener("onLogClientVeCreated",Yi);a.addEventListener("onLogServerVeCreated",$i);a.addEventListener("onLogVeClicked",aj);a.addEventListener("onLogVesShown",bj);var f=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Wi=new Ai(a):P("ENABLE_POST_API")&&x(f)&&x(c)&&(Vi=new Bi(window.parent,f,c),Wi=new vi(a,Vi.h));c=$d("BG_P");Gf(c)&&(P("BG_I")||P("BG_IU"))&&(Cf=!0,Bf.initialize(P("BG_I",null),P("BG_IU",null),c,Ff,void 0));wf()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){Je(a+"mac_204?action_fcts=1");return!0},void 0);
var cj=ee(function(){var a=Kh(),b;(b=!R("use_first_tick"))||(b=!("ol"in Kh()));if(b){b="ol";X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b));b=Rf();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=Ch();if(b=a.ol)tf(b),a.ol=0;a=ci();a.gelTicks&&(a.gelTicks.tick_ol=!0);Rf();bi()?(a=Lh(),Ph("tick_ol_"+a)||Mh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},{timestamp:void 0}),a=!0):a=!1;if(a=!a)a=!z("yt.timing.pingSent_");if(a&&(b=P("TIMING_ACTION",void 0),a=Kh(),z("ytglobal.timingready_")&&
b&&a._start&&(b=gi()))){ei||(zg(Gh,new Eh(Math.round(b-a._start),void 0)),ei=!0);b=!0;var c=P("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&ii()}}a=Qi.getInstance();c=!!((Ti("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&Xc(document.body,"exp-invert-logo")&&(b&&!Xc(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):Xc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":
"inverted-hdpi")):!b&&Xc(document.body,"inverted-hdpi")&&Yc());c!=b&&(c="f"+(Math.floor(119/31)+1),d=Ti(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:(b=d.toString(16),Z[c]=b.toString()),a.save())}),dj=ee(function(){var a=Ui;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();P("PL_ATT")&&Bf.dispose();a=0;for(var b=uf.length;a<b;a++)tf(uf[a]);uf.length=0;nf("//static.doubleclick.net/instream/ad_status.js");vf=!1;O("DCLKSTAT",0);Vc(Wi,Vi);if(a=Ui)a.removeEventListener("onScreenChanged",Zi),a.removeEventListener("onLogClientVeCreated",Yi),a.removeEventListener("onLogServerVeCreated",$i),a.removeEventListener("onLogVeClicked",aj),a.removeEventListener("onLogVesShown",bj),a.destroy();Xi={}});
window.addEventListener?(window.addEventListener("load",cj),window.addEventListener("unload",dj)):window.attachEvent&&(window.attachEvent("onload",cj),window.attachEvent("onunload",dj));Ka("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Hf);Ka("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||If);Ka("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||xf);
Ka("yt.player.exports.navigate",z("yt.player.exports.navigate")||ch);Ka("yt.util.activity.init",z("yt.util.activity.init")||Uf);Ka("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||Xf);Ka("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||Vf);}).call(this);
