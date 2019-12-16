(function(g){var window=this;var oCa=function(a,b){return g.Sb(a,b)},Y4=function(a){g.Zm(a,"zx",g.ub());
return a},Z4=function(a,b,c){g.wa(c)||(c=[String(c)]);
g.bn(a.g,b,c)},pCa=function(a,b){var c=[];
g.Lk(b,function(a){try{var b=g.ED.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.u(b)?g.DD(b)&&c.push(a):c.push(a)},a);
return c},qCa=function(a,b){var c=pCa(a,b);
(0,g.D)(c,function(a){g.ED.prototype.remove.call(this,a)},a)},rCa=function(a){if(a.Id){if(a.Id.locationOverrideToken)return{locationOverrideToken:a.Id.locationOverrideToken};
if(null!=a.Id.latitudeE7&&null!=a.Id.longitudeE7)return{latitudeE7:a.Id.latitudeE7,longitudeE7:a.Id.longitudeE7}}return null},sCa=function(a,b,c,d){var e=new g.Qm(null,void 0);
a&&g.Rm(e,a);b&&g.Sm(e,b);c&&g.Tm(e,c);d&&g.Um(e,d);return e},tCa=function(a){g.nG[a]&&(a=g.nG[a],(0,g.D)(a,function(a){g.lG[a]&&delete g.lG[a]}),a.length=0)},uCa=function(a){var b=g.kG();
if(b)if(b.clear(a),a)tCa(a);else for(var c in g.nG)tCa(c)},$4=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.Km;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",vCa(this,a.capabilities||""),wCa(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},vCa=function(a,b){a.capabilities.clear();
(0,g.Vd)(b.split(","),g.Ca(oCa,xCa)).forEach(function(b){a.capabilities.add(b)})},wCa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},a5=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},b5=function(a,b){return!!b&&(a.id==b||a.uuid==b)},yCa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},zCa=function(a){return new a5(a)},ACa=function(a){return g.wa(a)?(0,g.J)(a,zCa):[]},c5=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},d5=function(a){return g.wa(a)?"["+(0,g.J)(a,c5).join(",")+"]":"null"},e5=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},BCa=function(a){return(0,g.J)(a,function(a){return{key:a.id,
name:a.name}})},f5=function(a,b){return g.Ia(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},g5=function(a,b){return g.Ia(a,function(a){return b5(a,b)})},CCa=function(){var a=(0,g.wH)();
a&&qCa(a,a.g.be(!0))},h5=function(){var a=g.zH("yt-remote-connected-devices")||[];
g.eb(a);return a},DCa=function(a){if(g.Na(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.J)(a,function(a,b){return 0==b?a:a.substring(c.length)})},ECa=function(a){g.yH("yt-remote-connected-devices",a,86400)},j5=function(){if(i5)return i5;
var a=g.zH("yt-remote-device-id");a||(a=e5(),g.yH("yt-remote-device-id",a,31536E3));for(var b=h5(),c=1,d=a;g.Ma(b,d);)c++,d=a+"#"+c;return i5=d},k5=function(){var a=h5(),b=j5();
g.Ma(a,b);g.BH()&&g.gb(a,b);a=DCa(a);if(g.Na(a))try{g.VG("remote_sid")}catch(c){}else try{g.UG("remote_sid",a.join(","),-1)}catch(c){}},FCa=function(){return g.zH("yt-remote-session-browser-channel")},GCa=function(){return g.zH("yt-remote-local-screens")||[]},HCa=function(){g.yH("yt-remote-lounge-token-expiration",!0,86400)},ICa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.J)(GCa(),function(a){return a.loungeToken}),c=(0,g.J)(a,function(a){return a.loungeToken});
(0,g.ym)(c,function(a){return!g.Ma(b,a)})&&HCa();
g.yH("yt-remote-local-screens",a,31536E3)},JCa=function(a,b){g.yH("yt-remote-session-browser-channel",a);
g.yH("yt-remote-session-screen-id",b);var c=h5(),d=j5();g.Ma(c,d)||c.push(d);ECa(c);k5()},l5=function(a){a||(g.AH("yt-remote-session-screen-id"),g.AH("yt-remote-session-video-id"));
k5();a=h5();g.Ra(a,j5());ECa(a)},KCa=function(){if(!m5){var a=g.PD();
a&&(m5=new g.yD(a))}return m5?!!m5.get("yt-remote-use-staging-server"):!1},LCa=function(){var a=window.document.createElement("a");
g.gd(a,"http://web.archive.org/web/20181120230930/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.yb(a)},MCa=function(a,b,c){c=void 0===c?null:c;
var d=g.Od("SCRIPT");d.id=a;d.onload=function(){b&&(0,window.setTimeout)(b,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
c&&d.setAttribute("nonce",c);g.id(d,g.le("http://web.archive.org/web/20181120230930/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));a=window.document.getElementsByTagName("head")[0]||window.document.body;a.insertBefore(d,a.firstChild);return d},NCa=function(a){a=void 0===a?null:a;
var b=LCa(),c=window.document.getElementById(b),d=c&&g.uF(c,"loaded");d||c&&!d||(c=MCa(b,function(){g.uF(c,"loaded")||(g.tF(c,"loaded","true"),g.rG(b),g.uE(g.Ca(uCa,b),0))},a))},OCa=function(){var a=void 0===a?null:a;
window.spf?window.spf.script.load("http://web.archive.org/web/20181120230930/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):NCa(a)},n5=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},PCa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},o5=function(a){a.length?QCa(a.shift(),function(){o5(a)}):p5()},RCa=function(a){return"chrome-extension://"+a+q5},QCa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},r5=function(a){return 0<=window.navigator.userAgent.indexOf(a)},p5=function(){var a=PCa();
a&&a(!1,"No cast extension found")},s5=function(){if(SCa){var a=2,b=PCa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;QCa("//web.archive.org/web/20181120230930/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",p5,c)}},TCa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(s5(),a({command:"cast.sender.init"}))},UCa=function(){s5();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);o5(["//web.archive.org/web/20181120230930/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+q5,"//web.archive.org/web/20181120230930/https://www.gstatic.com/eureka/clank"+q5])},t5=function(a,b,c){g.L.call(this);
this.C=null!=c?(0,g.B)(a,c):a;this.Ad=b;this.B=(0,g.B)(this.BK,this);this.g=!1;this.l=0;this.o=this.Da=null;this.A=[]},u5=function(){},v5=function(a,b,c,d){this.g=a;
this.o=b;this.D=c;this.C=d||1;this.A=45E3;this.W=new g.fn(this);this.l=new g.xg;this.l.setInterval(250)},WCa=function(a,b,c){a.Gj=1;
a.qh=Y4(b.clone());a.Ui=c;a.B=!0;VCa(a,null)},w5=function(a,b,c,d,e){a.Gj=1;
a.qh=Y4(b.clone());a.Ui=null;a.B=c;e&&(a.UE=!1);VCa(a,d)},VCa=function(a,b){a.Dk=(0,g.H)();
x5(a);a.Oh=a.qh.clone();Z4(a.Oh,"t",a.C);a.gn=0;a.Uc=a.g.rs(a.g.Wm()?b:null);0<a.Ws&&(a.pq=new g.ql((0,g.B)(a.qG,a,a.Uc),a.Ws));a.W.T(a.Uc,"readystatechange",a.WV);var c=a.ri?g.$b(a.ri):{};a.Ui?(a.Yq="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Uc.send(a.Oh,a.Yq,a.Ui,c)):(a.Yq="GET",a.UE&&!g.Jd&&(c.Connection="close"),a.Uc.send(a.Oh,a.Yq,null,c));a.g.Cf(1)},ZCa=function(a,b,c){for(var d=!0;!a.bi&&a.gn<c.length;){var e=XCa(a,c);
if(e==y5){4==b&&(a.rh=4,z5(15),d=!1);break}else if(e==YCa){a.rh=4;z5(16);d=!1;break}else A5(a,e)}4==b&&0==c.length&&(a.rh=1,z5(17),d=!1);a.Jf=a.Jf&&d;d||(B5(a),C5(a))},XCa=function(a,b){var c=a.gn,d=b.indexOf("\n",c);
if(-1==d)return y5;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return YCa;d+=1;if(d+c>b.length)return y5;var e=b.substr(d,c);a.gn=d+c;return e},aDa=function(a,b){a.Dk=(0,g.H)();
x5(a);var c=b?window.location.hostname:"";a.Oh=a.qh.clone();g.Zm(a.Oh,"DOMAIN",c);g.Zm(a.Oh,"t",a.C);try{a.Kf=new window.ActiveXObject("htmlfile")}catch(n){B5(a);a.rh=7;z5(22);C5(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in D5)k=D5[l];else if(l in $Ca)k=D5[l]=$Ca[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=D5[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.jd(g.wc("b/12014412"),d+"</body></html>");a.Kf.open();a.Kf.write(g.$c(c));a.Kf.close();a.Kf.parentWindow.m=(0,g.B)(a.aV,a);a.Kf.parentWindow.d=(0,g.B)(a.dE,a,!0);a.Kf.parentWindow.rpcClose=(0,g.B)(a.dE,a,!1);c=a.Kf.createElement("DIV");a.Kf.parentWindow.document.body.appendChild(c);d=g.Mc(a.Oh.toString());d=g.ob(g.Jc(d));d=g.jd(g.wc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.fd(c,g.$c(d));a.g.Cf(1)},
x5=function(a){a.Vw=(0,g.H)()+a.A;
bDa(a,a.A)},bDa=function(a,b){if(null!=a.Uk)throw Error("WatchDog timer not null");
a.Uk=E5((0,g.B)(a.qV,a),b)},F5=function(a){a.Uk&&(g.x.clearTimeout(a.Uk),a.Uk=null)},C5=function(a){a.g.mA()||a.bi||a.g.Xp(a)},B5=function(a){F5(a);
g.gf(a.pq);a.pq=null;a.l.stop();g.mn(a.W);if(a.Uc){var b=a.Uc;a.Uc=null;b.abort();b.dispose()}a.Kf&&(a.Kf=null)},A5=function(a,b){try{a.g.VD(a,b),a.g.Cf(4)}catch(c){}},dDa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;cDa(a,b,function(e){e?c(!0):g.x.setTimeout(function(){dDa(a,b,c,d,f)},f)})}},cDa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{G5(d),c(!0)}catch(e){}};
d.onerror=function(){try{G5(d),c(!1)}catch(e){}};
d.onabort=function(){try{G5(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{G5(d),c(!1)}catch(e){}};
g.x.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},G5=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},eDa=function(a){this.g=a;
this.l=new u5},fDa=function(a){var b=H5(a.g,a.Zk,"/mail/images/cleardot.gif");
Y4(b);dDa(b.toString(),5E3,(0,g.B)(a.LJ,a),3,2E3);a.Cf(1)},J5=function(a){var b=a.g.H;
if(null!=b)z5(5),b?(z5(11),I5(a.g,a,!1)):(z5(12),I5(a.g,a,!0));else if(a.Ee=new v5(a,void 0,void 0,void 0),a.Ee.ri=a.Us,b=a.g,b=H5(b,b.Wm()?a.Ll:null,a.Vs),z5(5),!g.Hd||g.pc(10))Z4(b,"TYPE","xmlhttp"),w5(a.Ee,b,!1,a.Ll,!1);else{Z4(b,"TYPE","html");var c=a.Ee;a=!!a.Ll;c.Gj=3;c.qh=Y4(b.clone());aDa(c,a)}},K5=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new u5;this.F=a||null;this.H=null!=b?b:null;this.C=c||!1},gDa=function(a,b){this.g=a;
this.map=b;this.context=null},hDa=function(a){g.jf.call(this,"statevent",a)},iDa=function(a,b){g.jf.call(this,"timingevent",a);
this.size=b},jDa=function(a){g.jf.call(this,"serverreachability",a)},mDa=function(a){kDa(a);
if(3==a.g){var b=a.Im++,c=a.Io.clone();g.Zm(c,"SID",a.o);g.Zm(c,"RID",b);g.Zm(c,"TYPE","terminate");L5(a,c);b=new v5(a,a.o,b,void 0);b.Gj=2;b.qh=Y4(c.clone());(new window.Image).src=b.qh;b.Dk=(0,g.H)();x5(b)}lDa(a)},nDa=function(a){a.iK(1,0);
a.Io=H5(a,null,a.Ts);M5(a)},kDa=function(a){a.hh&&(a.hh.abort(),a.hh=null);
a.wc&&(a.wc.cancel(),a.wc=null);a.sg&&(g.x.clearTimeout(a.sg),a.sg=null);N5(a);a.ge&&(a.ge.cancel(),a.ge=null);a.kh&&(g.x.clearTimeout(a.kh),a.kh=null)},oDa=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new gDa(a.LQ++,b));2!=a.g&&3!=a.g||M5(a)},M5=function(a){a.ge||a.kh||(a.kh=E5((0,g.B)(a.bE,a),0),a.xj=0)},qDa=function(a,b){if(1==a.g){if(!b){a.Im=Math.floor(1E5*Math.random());
var c=a.Im++,d=new v5(a,"",c,void 0);d.ri=null;var e=O5(a),f=a.Io.clone();g.Zm(f,"RID",c);g.Zm(f,"CVER","1");L5(a,f);WCa(d,f,e);a.ge=d;a.g=2}}else 3==a.g&&(b?pDa(a,b):0==a.l.length||a.ge||pDa(a))},pDa=function(a,b){if(b)if(6<a.di){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.Im-1;var d=O5(a)}else c=b.D,d=b.Ui;else c=a.Im++,d=O5(a);var e=a.Io.clone();g.Zm(e,"SID",a.o);g.Zm(e,"RID",c);g.Zm(e,"AID",a.Xj);L5(a,e);c=new v5(a,a.o,c,a.xj+1);c.ri=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ge=c;WCa(c,e,d)},L5=function(a,b){if(a.zd){var c=a.zd.Tz();
c&&g.Hb(c,function(a,c){g.Zm(b,c,a)})}},O5=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.di&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.di?e:f-d;try{g.Hb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},rDa=function(a){a.wc||a.sg||(a.D=1,a.sg=E5((0,g.B)(a.aE,a),0),a.mj=0)},P5=function(a){if(a.wc||a.sg||3<=a.mj)return!1;
a.D++;a.sg=E5((0,g.B)(a.aE,a),sDa(a,a.mj));a.mj++;return!0},I5=function(a,b,c){a.Wq=c;
a.Tf=b.Dg;a.C||nDa(a)},N5=function(a){null!=a.fi&&(g.x.clearTimeout(a.fi),a.fi=null)},sDa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},Q5=function(a,b){if(2==b||9==b){var c=null;
a.zd&&(c=null);var d=(0,g.B)(a.MW,a);c||(c=new g.Qm("//web.archive.org/web/20181120230930/https://www.google.com/images/cleardot.gif"),Y4(c));cDa(c.toString(),1E4,d)}else z5(2);tDa(a,b)},tDa=function(a,b){a.g=0;
a.zd&&a.zd.Ry(b);lDa(a);kDa(a)},lDa=function(a){a.g=0;
a.Tf=-1;if(a.zd)if(0==a.A.length&&0==a.l.length)a.zd.Ur();else{g.Va(a.A);var b=g.Va(a.l);a.A.length=0;a.l.length=0;a.zd.Ur(b)}},H5=function(a,b,c){var d=g.$m(c);
if(""!=d.l)b&&g.Sm(d,b+"."+d.l),g.Tm(d,d.B);else{var e=window.location;d=sCa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.tl&&g.Hb(a.tl,function(a,b){g.Zm(d,b,a)});
g.Zm(d,"VER",a.di);L5(a,d);return d},E5=function(a,b){if(!g.ya(a))throw Error("Fn must not be null and must be a function");
return g.x.setTimeout(function(){a()},b)},z5=function(a){R5.dispatchEvent(new hDa(R5,a))},uDa=function(){},vDa=function(a,b){this.action=a;
this.params=b||{}},S5=function(a,b){g.L.call(this);
this.g=new g.yu(this.RU,0,this);g.M(this,this.g);this.Ad=5E3;this.l=0;if(g.ya(a))b&&(a=(0,g.B)(a,b));else if(a&&g.ya(a.handleEvent))a=(0,g.B)(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a},T5=function(a,b,c){this.J=a;
this.C=b;this.o=new g.xD;this.l=new S5(this.qX,this);this.g=this.bb=null;this.I=!1;this.B=null;this.H="";this.F=this.A=0;this.D=[];this.K=c||!1},wDa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.Wq,sessionId:a.g.o,arrayId:a.g.Xj}},xDa=function(a,b){a.F=b||0;
a.l.stop();a.g&&(3==a.g.g&&qDa(a.g),mDa(a.g));a.F=0},U5=function(a){return!!a.g&&3==a.g.g},yDa=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},V5=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.Mg(a)||"";b&&(this.port=":"+b);this.domain=g.Lg(a)||"";a=g.Fb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.xb(a,"10.0")&&(this.l=!1))},W5=function(a,b){var c=a.g;
if(g.u(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.Vg(c+b,{})},X5=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ca(a.A,d,!0),onError:g.Ca(a.o,e),Ed:g.Ca(a.B,e)};c&&(a.Sb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.LE(b,a)},CDa=function(){var a=zDa;
ADa();Y5.push(a);BDa(Y5)},Z5=function(a,b){ADa();
var c=Y5,d=DDa(a,String(b));g.Na(c)?EDa(d):(BDa(c),(0,g.D)(c,function(a){a(d)}))},ADa=function(){Y5||(Y5=g.y("yt.mdx.remote.debug.handlers_")||[],g.ta("yt.mdx.remote.debug.handlers_",Y5,void 0))},EDa=function(a){var b=($5+1)%50;
$5=b;a6[b]=a;b6||(b6=49==b)},BDa=function(a){var b=a6;
if(b[0]){var c=$5,d=b6?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.D)(a,function(a){a(e)})}while(d!=c);
a6=Array(50);$5=-1;b6=!1}},DDa=function(a,b){var c=((0,g.H)()-FDa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},c6=function(a){g.bG.call(this);
this.D=a;this.g=[]},GDa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},HDa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Vd)(a.g,function(a){return!!f5(b,a)});
for(var d=0,e=b.length;d<e;d++)c=GDa(a,b[d])||c;return c},IDa=function(a,b){var c=a.g.length;
a.g=(0,g.Vd)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},d6=function(a,b,c,d){g.bG.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.Da=window.NaN},f6=function(a){c6.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;e6(this);this.info("Initializing with "+d5(this.g))},JDa=function(a){if(a.g.length){var b=(0,g.J)(a.g,function(a){return a.id}),c=W5(a.o,"/pairing/get_lounge_token_batch");
X5(a.o,c,{screen_ids:b.join(",")},(0,g.B)(a.OK,a),(0,g.B)(a.NK,a))}},e6=function(a){var b=ACa(GCa());
b=(0,g.Vd)(b,function(a){return!a.uuid});
return HDa(a,b)},g6=function(a,b){ICa((0,g.J)(a.g,yCa));
b&&HCa()},i6=function(a,b){g.bG.call(this);
this.C=b;var c=g.zH("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Ma(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;h6("Initialized with "+g.Dg(this.g))},KDa=function(a,b,c){var d=W5(a.B,"/pairing/get_screen_availability");
X5(a.B,d,{lounge_token:b.token},(0,g.B)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.B)(function(){c(!1)},a))},j6=function(a,b){a:if(g.Mb(b)!=g.Mb(a.g))var c=!1;
else{c=g.Pb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(h6("Updated online screens: "+g.Dg(a.g)),a.g=b,a.R("screenChange"));LDa(a)},k6=function(a){(0,window.isNaN)(a.o)||g.wE(a.o);
a.o=g.uE((0,g.B)(a.Zv,a),0<a.A&&a.A<(0,g.H)()?2E4:1E4)},h6=function(a){Z5("OnlineScreenService",a)},MDa=function(a){var b={};
(0,g.D)(a.C(),function(a){a.token?b[a.token]=a.id:this.oc("Requesting availability of screen w/o lounge token.")});
return b},LDa=function(a){a=g.Pb(g.Ib(a.g,function(a){return a}));
g.eb(a);a.length?g.yH("yt-remote-online-screen-ids",a.join(","),60):g.AH("yt-remote-online-screen-ids")},l6=function(a){c6.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};NDa(this)},PDa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.ze();if(k=(c?g5(k,c):null)||g5(k,b)){k.uuid=b;var l=m6(a,k);KDa(a.l,l,function(a){e(a?l:null)})}else c?ODa(a,c,(0,g.B)(function(a){var f=m6(this,new a5({name:d,
screenId:c,loungeToken:a,dialId:b||""}));KDa(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},QDa=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},ODa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Sb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.LE(W5(a.C,"/pairing/get_lounge_token_batch"),e)},RDa=function(a){a.g=a.o.ze();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+d5(a.g))},NDa=function(a){n6(a);
a.o=new f6(a.C);a.o.subscribe("screenChange",(0,g.B)(a.cL,a));RDa(a);a.A=ACa(g.zH("yt-remote-automatic-screen-cache")||[]);n6(a);a.info("Initializing automatic screens: "+d5(a.A));a.l=new i6(a.C,(0,g.B)(a.ze,a,!0));a.l.subscribe("screenChange",(0,g.B)(function(){this.R("onlineScreenChange")},a))},m6=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=g5(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.yH("yt-remote-automatic-screen-cache",(0,g.J)(a.A,yCa)));n6(a);a.B[b.uuid]=b.id;g.yH("yt-remote-device-id-map",a.B,31536E3);return b},n6=function(a){a.B=g.zH("yt-remote-device-id-map")||{}},o6=function(a,b,c){g.bG.call(this);
this.K=c;this.H=a;this.l=b;this.o=null},p6=function(a,b){Z5(a.K,b)},q6=function(a,b){o6.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.B)(this.wX,this);this.B=(0,g.B)(this.CV,this);this.A=g.uE((0,g.B)(function(){SDa(this,null)},this),12E4)},TDa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Dg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.z,(0,g.B)(function(){p6(this,"Failed to send message: getMdxSessionStatus.")},a)):p6(a,"Sending yt message without session: "+g.Dg(b))},SDa=function(a,b){g.wE(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.B)(a.Yp,a),d=(0,g.B)(a.De,a);a.dA(b,c,d,5)}}else a.De(Error("Waiting for session status timed out."))},r6=function(a,b,c){o6.call(this,a,b,"DialSession");
this.A=this.F=null;this.I="";this.M=c;this.B=null;this.D=g.z;this.C=window.NaN;this.J=(0,g.B)(this.zX,this);this.g=g.z},UDa=function(a){a.g=a.H.yG(a.I,a.l.label,a.l.friendlyName,(0,g.B)(function(a){this.g=g.z;
this.Yp(a)},a),(0,g.B)(function(a){this.g=g.z;
this.De(a)},a))},VDa=function(a){var b={};
b.pairingCode=a.I;b.theme=a.M;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}KCa()&&(b.env_useStageMdx=1);return g.Tg(b)},s6=function(a,b){o6.call(this,a,b,"ManualSession");
this.g=g.uE((0,g.B)(this.Zj,this,null),150)},t6=function(a,b,c,d){g.bG.call(this);
this.l=a;this.D=b||"233637DE";this.C=c||"cl";this.F=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.B)(this.dU,this)},WDa=function(a,b){return b?g.Ia(a.o,function(a){return b5(b,a.label)},a):null},u6=function(a){Z5("Controller",a)},zDa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},v6=function(a){return a.B||!!a.o.length||!!a.g},w6=function(a,b,c){b!=a.g&&(g.gf(a.g),(a.g=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.l):a.R("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.B)(a.YD,a,b)),b.o?a.R("yt-remote-cast2-session-change",b.o):c&&a.g.Zj(null)):a.R("yt-remote-cast2-session-change",null))},XDa=function(a){var b=a.l.xG(),c=a.g&&a.g.l;
a=(0,g.J)(b,function(a){c&&b5(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=WDa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},cEa=function(a,b,c,d,e,f,k){YDa()?ZDa(b,e,f,k)&&(y6(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?$Da(a,c):(window.__onGCastApiAvailable=function(b,d){b?$Da(a,c):(z6("Failed to load cast API: "+d),A6(!1),y6(!1),g.AH("yt-remote-cast-available"),g.AH("yt-remote-cast-receiver"),aEa(),
c(!1))},d?OCa():r5("CriOS")?TCa():r5("Android")&&r5("Chrome/")&&window.navigator.presentation?UCa():window.chrome&&window.navigator.presentation&&!r5("Edge")?(s5(),o5(bEa.map(RCa))):p5())):x6("Cannot initialize because not running Chrome")},aEa=function(){x6("dispose");
var a=B6();a&&a.dispose();g.ta("yt.mdx.remote.cloudview.instance_",null,void 0);dEa(!1);g.pG(C6);C6.length=0},D6=function(){return!!g.zH("yt-remote-cast-installed")},eEa=function(){var a=g.zH("yt-remote-cast-receiver");
return a?a.friendlyName:null},fEa=function(){x6("clearCurrentReceiver");
g.AH("yt-remote-cast-receiver")},gEa=function(){return D6()?B6()?B6().getCastSession():(z6("getCastSelector: Cast is not initialized."),null):(z6("getCastSelector: Cast API is not installed!"),null)},F6=function(){D6()?B6()?E6()?(x6("Requesting cast selector."),B6().requestSession()):(x6("Wait for cast API to be ready to request the session."),C6.push(g.oG("yt-remote-cast2-api-ready",F6))):z6("requestCastSelector: Cast is not initialized."):z6("requestCastSelector: Cast API is not installed!")},G6=
function(a,b){E6()?B6().setConnectedScreenStatus(a,b):z6("setConnectedScreenStatus called before ready.")},YDa=function(){var a=0<=g.Fb.search(/ (CrMo|Chrome|CriOS)\//);
return g.MI||a},hEa=function(a,b){B6().init(a,b)},ZDa=function(a,b,c,d){var e=!1;
B6()||(a=new t6(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.yH("yt-remote-cast-available",a);g.sG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){x6("onReceiverSelected: "+a.friendlyName);
g.yH("yt-remote-cast-receiver",a);g.sG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){x6("onReceiverResumed: "+a.friendlyName);
g.yH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){x6("onSessionChange: "+c5(a));
a||g.AH("yt-remote-cast-receiver");g.sG("yt-remote-cast2-session-change",a)}),g.ta("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
x6("cloudview.createSingleton_: "+e);return e},B6=function(){return g.y("yt.mdx.remote.cloudview.instance_")},$Da=function(a,b){A6(!0);
y6(!1);hEa(a,function(a){a?(dEa(!0),g.rG("yt-remote-cast2-api-ready")):(z6("Failed to initialize cast API."),A6(!1),g.AH("yt-remote-cast-available"),g.AH("yt-remote-cast-receiver"),aEa());b(a)})},x6=function(a){Z5("cloudview",a)},z6=function(a){Z5("cloudview",a)},A6=function(a){x6("setCastInstalled_ "+a);
g.yH("yt-remote-cast-installed",a)},E6=function(){return!!g.y("yt.mdx.remote.cloudview.apiReady_")},dEa=function(a){x6("setApiReady_ "+a);
g.ta("yt.mdx.remote.cloudview.apiReady_",a,void 0)},y6=function(a){g.ta("yt.mdx.remote.cloudview.initializing_",a,void 0)},H6=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.D=0;this.g=null;this.hasNext=this.Xf=!1;this.H=this.F=this.l=this.A=0;this.o=window.NaN;this.B=!1;this.reset(a)},I6=function(a){a.audioTrackId=null;
a.g=null;a.playerState=-1;a.Xf=!1;a.hasNext=!1;a.D=0;a.C=(0,g.H)();a.A=0;a.l=0;a.F=0;a.H=0;a.o=window.NaN;a.B=!1},J6=function(a){return a.rb()?((0,g.H)()-a.C)/1E3:0},K6=function(a,b){a.D=b;
a.C=(0,g.H)()},L6=function(a){switch(a.playerState){case 1:case 1081:return((0,g.H)()-a.C)/1E3+a.D;
case -1E3:return 0}return a.D},M6=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&I6(a)},N6=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ac(a.g);b.hasPrevious=a.Xf;b.hasNext=a.hasNext;b.playerTime=a.D;b.playerTimeAt=a.C;b.seekableStart=a.A;b.seekableEnd=a.l;b.duration=a.F;b.loadedTime=a.H;b.liveIngestionTime=a.o;return b},P6=function(a,b){g.bG.call(this);
this.g=0;this.A=a;this.C=[];this.B=new g.NC;this.o=this.l=null;this.H=(0,g.B)(this.uR,this);this.D=(0,g.B)(this.Lm,this);this.F=(0,g.B)(this.tR,this);this.I=(0,g.B)(this.IR,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.gx,this),iEa(this))):c=3;0!=c&&(b?this.gx(c):g.uE((0,g.B)(function(){this.gx(c)},this),0));
var d=gEa();d&&O6(this,d);this.subscribe("yt-remote-cast2-session-change",this.I)},Q6=function(a){return new H6(a.A.getPlayerContextData())},iEa=function(a){(0,g.D)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Ca(this.XT,a),this))},a)},jEa=function(a){(0,g.D)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},R6=function(a,b){50>a.B.Hc()&&g.PC(a.B,b)},T6=function(a,b,c){var d=Q6(a);
K6(d,c);-1E3!=d.playerState&&(d.playerState=b);S6(a,d)},U6=function(a,b,c){a.A.sendMessage(b,c)},S6=function(a,b){jEa(a);
a.A.setPlayerContextData(N6(b));iEa(a)},O6=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.D),a.Lm(null));
a.o=b;a.o&&(Z5("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.D),a.o.media.length&&a.Lm(a.o.media[0]))},kEa=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=Q6(a);b.contentId!=d.videoId&&Z5("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;K6(d,a.l.getEstimatedTime());S6(a,d)}else Z5("CP","No cast media video. Ignoring state update.")},V6=function(a,b,c){return(0,g.B)(function(a){this.oc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.oc("Retrying "+b+" using MDx browser channel."),U6(this,b,c))},a)},W6=function(a,b,c){g.bG.call(this);
this.B=window.NaN;this.M=!1;this.I=this.H=this.J=this.K=window.NaN;this.U=[];this.A=this.D=this.o=this.fb=this.g=null;this.pa=a;this.U.push(g.LF(window,"beforeunload",(0,g.B)(this.FK,this)));this.l=[];this.fb=new H6;this.Z=b.id;this.g=lEa(this,c);this.g.subscribe("handlerOpened",this.yR,this);this.g.subscribe("handlerClosed",this.vR,this);this.g.subscribe("handlerError",this.wR,this);this.g.subscribe("handlerMessage",this.xR,this);yDa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.fb.videoId;g.BH()&&g.yH("yt-remote-session-video-id",a)},this)},X6=function(a){Z5("conn",a)},lEa=function(a,b){return new T5(W5(a.pa,"/bc"),b)},Y6=function(a,b){a.R("proxyStateChange",b)},mEa=function(a){a.B=g.uE((0,g.B)(function(){X6("Connecting timeout");
this.C(1)},a),2E4)},Z6=function(a){g.wE(a.B);
a.B=window.NaN},$6=function(a){g.wE(a.K);
a.K=window.NaN},nEa=function(a){a7(a);
a.J=g.uE((0,g.B)(function(){b7(this,"getNowPlaying")},a),2E4)},a7=function(a){g.wE(a.J);
a.J=window.NaN},pEa=function(a,b){b&&(Z6(a),$6(a));
b==(U5(a.g)&&(0,window.isNaN)(a.B))?b&&(Y6(a,1),b7(a,"getSubtitlesTrack")):b?(a.X()&&a.fb.reset(),Y6(a,1),b7(a,"getNowPlaying"),oEa(a)):a.C(1)},qEa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.fb.videoId&&(g.Vb(b.params)?a.fb.g=null:a.fb.g=b.params,a.R("remotePlayerChange"))},rEa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.fb.listId=b.params.listId||a.fb.listId;M6(a.fb,c,d);a.R("remoteQueueChange")},tEa=function(a,b){b.params=b.params||{};
rEa(a,b);sEa(a,b);a.R("autoplayDismissed")},sEa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
K6(a.fb,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.fb.playerState&&(c=-1E3);a.fb.playerState=c;c=Number(b.params.loadedTime);a.fb.H=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.fb.F=(0,window.isNaN)(c)?0:c;c=a.fb;var d=Number(b.params.liveIngestionTime);c.o=d;c.B=(0,window.isNaN)(d)?!1:!0;c=a.fb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=(0,window.isNaN)(d)?0:d;c.l=(0,window.isNaN)(e)?0:
e;1==a.fb.playerState?nEa(a):a7(a);a.R("remotePlayerChange")},uEa=function(a,b){if(-1E3!=a.fb.playerState){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.fb.playerState=c;c=(0,window.parseInt)(b.params.currentTime,10);K6(a.fb,(0,window.isNaN)(c)?0:c);a.R("remotePlayerChange")}},vEa=function(a,b){var c="true"==b.params.muted;
a.fb.volume=(0,window.parseInt)(b.params.volume,10);a.fb.muted=c;a.R("remotePlayerChange")},wEa=function(a,b){a.D=b.params.videoId;
a.R("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},xEa=function(a,b){var c="true"==b.params.hasNext;
a.fb.Xf="true"==b.params.hasPrevious;a.fb.hasNext=c;a.R("previousNextChange")},oEa=function(a){g.wE(a.I);
a.I=g.uE((0,g.B)(a.C,a,1),864E5)},b7=function(a,b,c){c?X6("Sending: action="+b+", params="+g.Dg(c)):X6("Sending: action="+b);
a.g.sendMessage(b,c)},c7=function(a){c6.call(this,"ScreenServiceProxy");
this.ld=a;this.l=[];this.l.push(this.ld.$_s("screenChange",(0,g.B)(this.uX,this)));this.l.push(this.ld.$_s("onlineScreenChange",(0,g.B)(this.uT,this)))},CEa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.jE("MDX_CONFIG")||b;CCa();k5();d7||(d7=new V5(b?b.loungeApiHost:void 0),KCa()&&(d7.g="/api/loungedev"));e7||(e7=g.y("yt.mdx.remote.deferredProxies_")||[],g.ta("yt.mdx.remote.deferredProxies_",e7,void 0));yEa();var c=f7();if(!c){var d=new l6(d7);g.ta("yt.mdx.remote.screenService_",d,void 0);c=f7();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);cEa(a,d,function(a){a?g7()&&G6(g7(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.sG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.y("yt.mdx.remote.initialized_")&&(g.ta("yt.mdx.remote.initialized_",!0,void 0),h7("Initializing: "+g.Dg(b)),i7.push(g.oG("yt-remote-cast2-availability-change",function(){g.sG("yt-remote-receiver-availability-change")})),i7.push(g.oG("yt-remote-cast2-receiver-selected",function(){j7(null);
g.sG("yt-remote-auto-connect","cast-selector-receiver")})),i7.push(g.oG("yt-remote-cast2-receiver-resumed",function(){g.sG("yt-remote-receiver-resumed","cast-selector-receiver")})),i7.push(g.oG("yt-remote-cast2-session-change",zEa)),i7.push(g.oG("yt-remote-connection-change",function(a){a?G6(g7(),"YouTube TV"):k7()||(G6(null,null),fEa())})),a=l7(),b.isAuto&&(a.id+="#dial"),g.rE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),h7(" -- with channel params: "+
g.Dg(a)),AEa(a),c.start(),g7()||BEa())},EEa=function(){var a=DEa();
D6()&&g.zH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},DEa=function(){var a=f7().ld.$_gos();
var b=m7();b&&n7()&&(f5(a,b)||a.push(b));return BCa(a)},o7=function(){var a=FEa();
!a&&D6()&&eEa()&&(a={key:"cast-selector-receiver",name:eEa()});return a},FEa=function(){var a=DEa(),b=m7();
b||(b=k7());return g.Ia(a,function(a){return b&&b5(b,a.key)?!0:!1})},m7=function(){var a=g7();
if(!a)return null;var b=f7().ze();return g5(b,a)},zEa=function(a){h7("remote.onCastSessionChange_: "+c5(a));
if(a){var b=m7();b&&b.id==a.id?G6(b.id,"YouTube TV"):(b&&p7(),q7(a,1))}else n7()&&p7()},p7=function(){E6()?B6().stopSession():z6("stopSession called before API ready.");
var a=n7();a&&(a.disconnect(1),r7(null))},s7=function(){var a=n7();
return!!a&&3!=a.getProxyState()},h7=function(a){Z5("remote",a)},f7=function(){if(!t7){var a=g.y("yt.mdx.remote.screenService_");
t7=a?new c7(a):null}return t7},g7=function(){return g.y("yt.mdx.remote.currentScreenId_")},GEa=function(a){g.ta("yt.mdx.remote.currentScreenId_",a,void 0)},HEa=function(){return g.y("yt.mdx.remote.connectData_")},j7=function(a){g.ta("yt.mdx.remote.connectData_",a,void 0)},n7=function(){return g.y("yt.mdx.remote.connection_")},r7=function(a){var b=n7();
j7(null);a||GEa("");g.ta("yt.mdx.remote.connection_",a,void 0);e7&&((0,g.D)(e7,function(b){b(a)}),e7.length=0);
b&&!a?g.sG("yt-remote-connection-change",!1):!b&&a&&g.sG("yt-remote-connection-change",!0)},k7=function(){var a=g.BH();
if(!a)return null;var b=f7().ze();return g5(b,a)},q7=function(a,b){m7()&&m7();
GEa(a.id);var c=new W6(d7,a,l7());c.connect(b,HEa());c.subscribe("beforeDisconnect",function(a){g.sG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){n7()&&r7(null)});
r7(c)},BEa=function(){var a=k7();
a?(h7("Resume connection to: "+c5(a)),q7(a,0)):(l5(),fEa(),h7("Skipping connecting because no session screen found."))},yEa=function(){var a=l7();
if(g.Vb(a)){a=j5();var b=g.zH("yt-remote-session-name")||"",c=g.zH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.ta("yt.mdx.remote.channelParams_",a,void 0)}},l7=function(){return g.y("yt.mdx.remote.channelParams_")||{}},AEa=function(a){a?(g.yH("yt-remote-session-app",a.app),g.yH("yt-remote-session-name",a.name)):(g.AH("yt-remote-session-app"),g.AH("yt-remote-session-name"));
g.ta("yt.mdx.remote.channelParams_",a,void 0)},u7=function(a,b,c){g.L.call(this);
this.B=a;this.l=b;this.o=new g.ZF(this);g.M(this,this.o);this.o.O(b,"onCaptionsTrackListChanged",this.NS);this.o.O(b,"captionschanged",this.sR);this.o.O(b,"captionssettingschanged",this.EF);this.o.O(b,"videoplayerreset",this.Zp);this.o.O(b,"mdxautoplaycancel",this.KJ);this.U=this.o.O(b,"onVolumeChange",this.GD);this.F=!1;this.g=c;c.subscribe("proxyStateChange",this.UD,this);c.subscribe("remotePlayerChange",this.Nm,this);c.subscribe("remoteQueueChange",this.Zp,this);c.subscribe("autoplayUpNext",this.sD,
this);c.subscribe("previousNextChange",this.RD,this);c.subscribe("nowAutoplaying",this.JD,this);c.subscribe("autoplayDismissed",this.rD,this);this.suggestion=null;this.H=new g.nQ(64);this.A=new g.yu(this.AF,500,this);g.M(this,this.A);this.C=new g.yu(this.BF,1E3,this);g.M(this,this.C);this.J=new t5(this.XW,0,this);g.M(this,this.J);this.D={};this.K=new g.yu(this.fG,1E3,this);g.M(this,this.K);this.I=new g.ql(this.wP,1E3,this);g.M(this,this.I);this.M=g.z;this.EF();this.Zp();this.Nm()},v7=function(a,b){var c=
a.B,d=a.l.getVideoData().lengthSeconds;
c.H=b||0;c.player.R("progresssync",b,d)},IEa=function(a){v7(a,0);
a.A.stop();w7(a,new g.nQ(64))},y7=function(a,b){if(x7(a)&&!a.F){var c=null;
b&&(c={style:a.l.Li()},g.cc(c,b));a.g.oF(a.l.getVideoData(1).videoId,c);a.D=Q6(a.g).g}},z7=function(a,b){var c=a.l.gg();
if(c){var d=c.xe();var e=c.listId.toString()}var f=a.l.getVideoData(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;var m=f.Pj;f=rCa(f);var n=Q6(c);l=l||0;var p={videoId:k,currentIndex:l};M6(n,k,l);g.u(b)&&(K6(n,b),p.currentTime=b);g.u(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.Dg(f));U6(c,"setPlaylist",p);e||S6(c,n);w7(a,new g.nQ(1))},JEa=function(a,b){if(b){var c=a.l.zc("captions","tracklist",{UA:1});
c&&c.length?(a.l.Td("captions","track",b),a.F=!1):(a.l.gk("captions"),a.F=!0)}else a.l.Td("captions","track",{})},x7=function(a){return Q6(a.g).videoId==a.l.getVideoData(1).videoId},w7=function(a,b){a.C.stop();
var c=a.H;if(!g.tQ(c,b)){var d=g.W(b,2);d!=g.W(a.H,2)&&g.EU(a.l,d);a.H=b;KEa(a.B,c,b)}},A7=function(a){g.V.call(this,{G:"div",
L:"ytp-remote",N:[{G:"div",L:"ytp-remote-display-status",N:[{G:"div",L:"ytp-remote-display-status-icon",N:[g.Yqa()]},{G:"div",L:"ytp-remote-display-status-text",aa:"{{statustext}}"}]}]});this.o=new g.yV(this,250);g.M(this,this.o);this.A=a;this.O(a,"presentingplayerstatechange",this.B);LEa(this,g.AU(a))},LEa=function(a,b){if(3==a.A.Qa()){var c={RECEIVER_NAME:a.A.zc("remote","currentReceiver").name};
c=g.W(b,128)?g.rV("Error on $RECEIVER_NAME",c):b.rb()||g.W(b,4)?g.rV("Playing on $RECEIVER_NAME",c):g.rV("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},B7=function(a,b){g.qY.call(this,"Play on",0,a,b);
this.o=a;this.H={};this.O(a,"onMdxReceiversChange",this.J);this.O(a,"presentingplayerstatechange",this.J);this.J()},C7=function(a){g.aV.call(this,a);
this.l={key:e5(),name:"This computer"};this.A=null;this.B=[];this.I=this.g=null;this.F=[this.l];this.o=this.l;this.C=new g.nQ(64);this.H=0;this.D=-1;if(!g.kN(g.X(this.player))){a=this.player;var b=g.nI(a);b&&(b=b.Mp())&&(b=new B7(a,b),g.M(this,b));b=new A7(a);g.M(this,b);g.SU(a,b.element,4)}},KEa=function(a,b,c){a.C=c;
a.player.R("presentingplayerstatechange",new g.yQ(c,b))},D7=function(a,b){if(b.key!=a.o.key)if(b.key==a.l.key)p7();
else{a.o=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.gg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Na(l).videoId}else k=[e];f=a.player.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Pj,index:Math.max(a.player.XB(),0),currentTime:0==f?void 0:f};(d=rCa(d))&&(c.locationInfo=d);d=c}else d=null;h7("Connecting to: "+g.Dg(b));"cast-selector-receiver"==b.key?(j7(d||null),E6()?B6().setLaunchParams(d||
null):z6("setLaunchParams called before ready.")):!d&&s7()&&g7()==b.key?g.sG("yt-remote-connection-change",!0):(p7(),j7(d||null),d=f7().ze(),(d=g5(d,b.key))&&q7(d,1))}},$Ca={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},D5={"'":"\\'"},MEa={},xCa={UY:"atp",x3:"ska",O2:"que",Y1:"mus",t3:"sus",f0:"dsp"};
$4.prototype.ro=function(){var a=new $4({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var m5,i5="",q5=n5("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",SCa=n5("loadCastFramework")||n5("loadCastApplicationFramework"),bEa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.C(t5,g.L);g.h=t5.prototype;g.h.AK=function(a){this.A=arguments;this.g=!1;this.Da?this.o=(0,g.H)()+this.Ad:this.Da=g.yg(this.B,this.Ad)};
g.h.stop=function(){this.Da&&(g.zg(this.Da),this.Da=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.V=function(){this.stop();t5.da.V.call(this)};
g.h.BK=function(){this.o?(this.Da=g.yg(this.B,this.o-(0,g.H)()),this.o=null):(this.Da=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};u5.prototype.stringify=function(a){return g.x.JSON.stringify(a,void 0)};
u5.prototype.parse=function(a){return g.x.JSON.parse(a,void 0)};g.h=v5.prototype;g.h.ri=null;g.h.Jf=!1;g.h.Uk=null;g.h.Vw=null;g.h.Dk=null;g.h.Gj=null;g.h.qh=null;g.h.Oh=null;g.h.Ui=null;g.h.Uc=null;g.h.gn=0;g.h.Kf=null;g.h.Yq=null;g.h.rh=null;g.h.Ml=-1;g.h.UE=!0;g.h.bi=!1;g.h.Ws=0;g.h.pq=null;var YCa={},y5={};g.h=v5.prototype;g.h.setTimeout=function(a){this.A=a};
g.h.WV=function(a){a=a.target;var b=this.pq;b&&3==g.Hx(a)?b.Il():this.qG(a)};
g.h.qG=function(a){try{if(a==this.Uc)a:{var b=g.Hx(this.Uc),c=this.Uc.l,d=this.Uc.getStatus();if(g.Hd&&!g.pc(10)||g.Jd&&!g.oc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.lf&&!g.Lx(this.Uc))break a;this.bi||4!=b||7==c||(8==c||0>=d?this.g.Cf(3):this.g.Cf(2));F5(this);var e=this.Uc.getStatus();this.Ml=e;var f=g.Lx(this.Uc);(this.Jf=200==e)?(4==b&&B5(this),this.B?(ZCa(this,b,f),g.lf&&this.Jf&&3==b&&(this.W.T(this.l,"tick",this.TV),this.l.start())):A5(this,f),this.Jf&&!this.bi&&(4==b?this.g.Xp(this):
(this.Jf=!1,x5(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.rh=3,z5(13)):(this.rh=0,z5(14)),B5(this),C5(this))}}catch(k){this.Uc&&g.Lx(this.Uc)}finally{}};
g.h.TV=function(){var a=g.Hx(this.Uc),b=g.Lx(this.Uc);this.gn<b.length&&(F5(this),ZCa(this,a,b),this.Jf&&4!=a&&x5(this))};
g.h.aV=function(a){E5((0,g.B)(this.ZU,this,a),0)};
g.h.ZU=function(a){this.bi||(F5(this),A5(this,a),x5(this))};
g.h.dE=function(a){E5((0,g.B)(this.YU,this,a),0)};
g.h.YU=function(a){this.bi||(B5(this),this.Jf=a,this.g.Xp(this),this.g.Cf(4))};
g.h.cancel=function(){this.bi=!0;B5(this)};
g.h.qV=function(){this.Uk=null;var a=(0,g.H)();0<=a-this.Vw?(2!=this.Gj&&this.g.Cf(3),B5(this),this.rh=2,z5(18),C5(this)):bDa(this,this.Vw-a)};g.h=eDa.prototype;g.h.Us=null;g.h.Ee=null;g.h.qq=!1;g.h.nA=null;g.h.Eo=null;g.h.bu=null;g.h.Vs=null;g.h.Xe=null;g.h.Dg=-1;g.h.Ll=null;g.h.Zk=null;g.h.connect=function(a){this.Vs=a;a=H5(this.g,null,this.Vs);z5(3);this.nA=(0,g.H)();var b=this.g.F;null!=b?(this.Ll=b[0],(this.Zk=b[1])?(this.Xe=1,fDa(this)):(this.Xe=2,J5(this))):(Z4(a,"MODE","init"),this.Ee=new v5(this,void 0,void 0,void 0),this.Ee.ri=this.Us,w5(this.Ee,a,!1,null,!0),this.Xe=0)};
g.h.LJ=function(a){if(a)this.Xe=2,J5(this);else{z5(4);var b=this.g;b.Tf=b.hh.Dg;Q5(b,9)}a&&this.Cf(2)};
g.h.rs=function(a){return this.g.rs(a)};
g.h.abort=function(){this.Ee&&(this.Ee.cancel(),this.Ee=null);this.Dg=-1};
g.h.mA=function(){return!1};
g.h.VD=function(a,b){this.Dg=a.Ml;if(0==this.Xe)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.Tf=this.Dg;Q5(c,2);return}this.Ll=c[0];this.Zk=c[1]}else c=this.g,c.Tf=this.Dg,Q5(c,2);else if(2==this.Xe)if(this.qq)z5(7),this.bu=(0,g.H)();else if("11111"==b){if(z5(6),this.qq=!0,this.Eo=(0,g.H)(),c=this.Eo-this.nA,!g.Hd||g.pc(10)||500>c)this.Dg=200,this.Ee.cancel(),z5(12),I5(this.g,this,!0)}else z5(8),this.Eo=this.bu=(0,g.H)(),this.qq=!1};
g.h.Xp=function(){this.Dg=this.Ee.Ml;if(this.Ee.Jf)0==this.Xe?this.Zk?(this.Xe=1,fDa(this)):(this.Xe=2,J5(this)):2==this.Xe&&((!g.Hd||g.pc(10)?!this.qq:200>this.bu-this.Eo)?(z5(11),I5(this.g,this,!1)):(z5(12),I5(this.g,this,!0)));else{0==this.Xe?z5(9):2==this.Xe&&z5(10);var a=this.g;a.Tf=this.Dg;Q5(a,2)}};
g.h.Wm=function(){return this.g.Wm()};
g.h.isActive=function(){return this.g.isActive()};
g.h.Cf=function(a){this.g.Cf(a)};g.h=K5.prototype;g.h.tl=null;g.h.ge=null;g.h.wc=null;g.h.Ts=null;g.h.Io=null;g.h.Hy=null;g.h.Vo=null;g.h.Im=0;g.h.LQ=0;g.h.zd=null;g.h.kh=null;g.h.sg=null;g.h.fi=null;g.h.hh=null;g.h.Wq=null;g.h.Xj=-1;g.h.iB=-1;g.h.Tf=-1;g.h.xj=0;g.h.mj=0;g.h.di=8;var R5=new g.Mf;g.C(hDa,g.jf);g.C(iDa,g.jf);g.C(jDa,g.jf);g.h=K5.prototype;g.h.connect=function(a,b,c,d,e){z5(0);this.Ts=b;this.tl=c||{};d&&g.u(e)&&(this.tl.OSID=d,this.tl.OAID=e);this.C?(E5((0,g.B)(this.bz,this,a),100),nDa(this)):this.bz(a)};
g.h.bz=function(a){this.hh=new eDa(this);this.hh.Us=null;this.hh.l=this.B;this.hh.connect(a)};
g.h.mA=function(){return 0==this.g};
g.h.bE=function(a){this.kh=null;qDa(this,a)};
g.h.aE=function(){this.sg=null;this.wc=new v5(this,this.o,"rpc",this.D);this.wc.ri=null;this.wc.Ws=0;var a=this.Hy.clone();g.Zm(a,"RID","rpc");g.Zm(a,"SID",this.o);g.Zm(a,"CI",this.Wq?"0":"1");g.Zm(a,"AID",this.Xj);L5(this,a);if(!g.Hd||g.pc(10))g.Zm(a,"TYPE","xmlhttp"),w5(this.wc,a,!0,this.Vo,!1);else{g.Zm(a,"TYPE","html");var b=this.wc,c=!!this.Vo;b.Gj=3;b.qh=Y4(a.clone());aDa(b,c)}};
g.h.VD=function(a,b){if(0!=this.g&&(this.wc==a||this.ge==a))if(this.Tf=a.Ml,this.ge==a&&3==this.g)if(7<this.di){try{var c=this.B.parse(b)}catch(f){c=null}if(g.wa(c)&&3==c.length)if(0==c[0])a:{if(!this.sg){if(this.wc)if(this.wc.Dk+3E3<this.ge.Dk)N5(this),this.wc.cancel(),this.wc=null;else break a;P5(this);z5(19)}}else this.iB=c[1],0<this.iB-this.Xj&&37500>c[2]&&this.Wq&&0==this.mj&&!this.fi&&(this.fi=E5((0,g.B)(this.nR,this),6E3));else Q5(this,11)}else b!=MEa.WZ.g&&Q5(this,11);else if(this.wc==a&&
N5(this),!g.E(b)){c=this.B.parse(b);g.wa(c);for(var d=0;d<c.length;d++){var e=c[d];this.Xj=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.Vo=e[2],e=e[3],null!=e?this.di=e:this.di=6,this.g=3,this.zd&&this.zd.Ty(),this.Hy=H5(this,this.Wm()?this.Vo:null,this.Ts),rDa(this)):"stop"==e[0]&&Q5(this,7):3==this.g&&("stop"==e[0]?Q5(this,7):"noop"!=e[0]&&this.zd&&this.zd.Sy(e),this.mj=0)}}};
g.h.nR=function(){null!=this.fi&&(this.fi=null,this.wc.cancel(),this.wc=null,P5(this),z5(20))};
g.h.Xp=function(a){if(this.wc==a){N5(this);this.wc=null;var b=2}else if(this.ge==a)this.ge=null,b=1;else return;this.Tf=a.Ml;if(0!=this.g)if(a.Jf)1==b?(b=(0,g.H)()-a.Dk,R5.dispatchEvent(new iDa(R5,a.Ui?a.Ui.length:0,b,this.xj)),M5(this),this.A.length=0):rDa(this);else{var c=a.rh,d;if(!(d=3==c||7==c||0==c&&0<this.Tf)){if(d=1==b)this.ge||this.kh||1==this.g||2<=this.xj?d=!1:(this.kh=E5((0,g.B)(this.bE,this,a),sDa(this,this.xj)),this.xj++,d=!0);d=!(d||2==b&&P5(this))}if(d)switch(c){case 1:Q5(this,5);
break;case 4:Q5(this,10);break;case 3:Q5(this,6);break;case 7:Q5(this,12);break;default:Q5(this,2)}}};
g.h.iK=function(a){if(!g.Ma(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.MW=function(a){a?z5(2):(z5(1),tDa(this,8))};
g.h.rs=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Bx;a.F=!1;return a};
g.h.isActive=function(){return!!this.zd&&this.zd.isActive(this)};
g.h.Cf=function(a){R5.dispatchEvent(new jDa(R5,a))};
g.h.Wm=function(){return!(!g.Hd||g.pc(10))};
g.h=uDa.prototype;g.h.Ty=function(){};
g.h.Sy=function(){};
g.h.Ry=function(){};
g.h.Ur=function(){};
g.h.Tz=function(){return{}};
g.h.isActive=function(){return!0};g.C(S5,g.L);g.h=S5.prototype;g.h.RU=function(){this.Ad=Math.min(3E5,2*this.Ad);this.o();this.l&&this.start()};
g.h.start=function(){var a=this.Ad+15E3*Math.random();g.zu(this.g,a);this.l=(0,g.H)()+a};
g.h.stop=function(){this.g.stop();this.l=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.Ad=5E3};g.C(T5,uDa);g.h=T5.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Zd=function(a){return this.o.Zd(a)};
g.h.R=function(a,b){return this.o.R.apply(this.o,arguments)};
g.h.dispose=function(){this.I||(this.I=!0,g.gf(this.o),xDa(this),g.gf(this.l),this.l=null)};
g.h.ha=function(){return this.I};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new K5(c?c.firstTestResults:null,c?c.secondTestResults:null,this.K),e=this.g;e&&(e.zd=null);d.zd=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.Xj):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.cc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.D.push(c):U5(this)&&oDa(this.g,c)};
g.h.Ty=function(){this.l.reset();this.B=null;this.A=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)oDa(this.g,a[b])}this.R("handlerOpened")};
g.h.Ry=function(a){var b=2==a&&401==this.g.Tf;4==a||b||this.l.start();this.R("handlerError",a)};
g.h.Ur=function(a){if(!this.l.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.Tz=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.F&&(a.ui=""+this.F);this.B&&g.cc(a,this.B);return a};
g.h.Sy=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),mDa(this.g)):this.R("handlerMessage",new vDa(a[0],a[1]))};
g.h.qX=function(){this.l.isActive();var a=this.g,b=0;a.wc&&b++;a.ge&&b++;0!=b||this.connect(this.B,this.A)};V5.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
V5.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
V5.prototype.B=function(a){a(Error("request timed out"))};var FDa=(0,g.H)(),Y5=null,a6=Array(50),$5=-1,b6=!1;g.C(c6,g.bG);c6.prototype.ze=function(){return this.g};
c6.prototype.contains=function(a){return!!f5(this.g,a)};
c6.prototype.get=function(a){return a?g5(this.g,a):null};
c6.prototype.info=function(a){Z5(this.D,a)};g.C(d6,g.bG);var NEa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=d6.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.Da)&&this.wG()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.Da)||(g.wE(this.Da),this.Da=window.NaN)};
g.h.V=function(){this.stop();d6.da.V.call(this)};
g.h.wG=function(){this.Da=window.NaN;this.g=g.LE(W5(this.C,"/pairing/get_screen"),{method:"POST",Sb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.B)(this.sX,this),onError:(0,g.B)(this.rX,this),Ed:(0,g.B)(this.tX,this)})};
g.h.sX=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.R("pairingComplete",new a5(c))};
g.h.rX=function(a){this.g=null;a.status&&404==a.status?this.l>=NEa.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=NEa[this.l],this.Da=g.uE((0,g.B)(this.wG,this),a),this.l++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.tX=function(){this.g=null;this.R("pairingFailed",Error("Server not responding"))};g.C(f6,c6);g.h=f6.prototype;g.h.start=function(){e6(this)&&this.R("screenChange");!g.zH("yt-remote-lounge-token-expiration")&&JDa(this);g.wE(this.l);this.l=g.uE((0,g.B)(this.start,this),1E4)};
g.h.add=function(a,b){e6(this);GDa(this,a);g6(this,!1);this.R("screenChange");b(a);a.token||JDa(this)};
g.h.remove=function(a,b){var c=e6(this);IDa(this,a)&&(g6(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.Sq=function(a,b,c,d){var e=e6(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,g6(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.V=function(){g.wE(this.l);f6.da.V.call(this)};
g.h.OK=function(a){e6(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}g6(this,!b);b&&Z5(this.D,"Missed "+b+" lounge tokens.")};
g.h.NK=function(a){Z5(this.D,"Requesting lounge tokens failed: "+a)};g.C(i6,g.bG);g.h=i6.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.zH("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.H)()-144E5<a?0:a)?k6(this):(this.A=(0,g.H)()+3E5,g.yH("yt-remote-fast-check-period",this.A),this.Zv())};
g.h.isEmpty=function(){return g.Vb(this.g)};
g.h.update=function(){h6("Updating availability on schedule.");var a=this.C(),b=g.Ib(this.g,function(b,d){return b&&!!g5(a,d)},this);
j6(this,b)};
g.h.V=function(){g.wE(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);i6.da.V.call(this)};
g.h.Zv=function(){g.wE(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=MDa(this);if(g.Mb(a)){var b=W5(this.B,"/pairing/get_screen_availability");this.l=X5(this.B,b,{lounge_token:g.Pb(a).join(",")},(0,g.B)(this.zU,this,a),(0,g.B)(this.yU,this))}else j6(this,{}),k6(this)};
g.h.zU=function(a,b){this.l=null;var c=g.Pb(MDa(this));if(g.fb(c,g.Pb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;j6(this,d);k6(this)}else this.oc("Changing Screen set during request."),this.Zv()};
g.h.yU=function(a){this.oc("Screen availability failed: "+a);this.l=null;k6(this)};
g.h.oc=function(a){Z5("OnlineScreenService",a)};g.C(l6,c6);g.h=l6.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.R("screenChange"),this.l.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.Sq=function(a,b,c,d){this.o.contains(a)?this.o.Sq(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Z5(this.D,a),d(Error(a)))};
g.h.ze=function(a){return a?this.g:g.Ua(this.g,(0,g.Vd)(this.A,function(a){return!this.contains(a)},this))};
g.h.xG=function(){return(0,g.Vd)(this.ze(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.yG=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new d6(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.B)(function(a){g.gf(f);d(m6(this,a))},this));
f.subscribe("pairingFailed",function(a){g.gf(f);e(a)});
f.start();return(0,g.B)(f.stop,f)};
g.h.vX=function(a,b,c,d){g.LE(W5(this.C,"/pairing/get_screen"),{method:"POST",Sb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.B)(function(a,d){var e=new a5(d.screen||{});if(!e.name||QDa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);QDa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(m6(this,e))},this),
onError:(0,g.B)(function(a){d(Error("pairing request failed: "+a.status))},this),
Ed:(0,g.B)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.gf(this.o);g.gf(this.l);l6.da.V.call(this)};
g.h.cL=function(){RDa(this);this.R("screenChange");this.l.update()};
l6.prototype.dispose=l6.prototype.dispose;g.C(o6,g.bG);g.h=o6.prototype;g.h.Yp=function(a){this.o=a;this.R("sessionScreen",this.o)};
g.h.De=function(a){this.ha()||(a&&p6(this,""+a),this.o=null,this.R("sessionScreen",null))};
g.h.info=function(a){Z5(this.K,a)};
g.h.AG=function(){return null};
g.h.jw=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.B)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.B)(function(){p6(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.jw("");o6.da.V.call(this)};g.C(q6,o6);g.h=q6.prototype;g.h.iw=function(a){if(this.g){if(this.g==a)return;p6(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);TDa(this)};
g.h.Zj=function(a){this.info("launchWithParams no-op for Cast: "+g.Dg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.B)(function(){this.De()},this),(0,g.B)(function(){this.De(Error("Failed to stop receiver app."))},this)):this.De(Error("Stopping cast device witout session."))};
g.h.jw=g.z;g.h.V=function(){this.info("disposeInternal");g.wE(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;q6.da.V.call(this)};
g.h.CV=function(a,b){if(!this.ha())if(b){var c=g.vx(b);if(g.za(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Dg(c));switch(d){case "mdxSessionStatus":SDa(this,c.screenId);break;default:p6(this,"Unknown youtube message: "+d)}}else p6(this,"Unable to parse message.")}else p6(this,"No data in message.")};
g.h.dA=function(a,b,c,d){PDa(this.H,this.l.label,a,this.l.friendlyName,(0,g.B)(function(e){e?b(e):0<=d?(p6(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.uE((0,g.B)(this.dA,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.AG=function(){return this.g};
g.h.wX=function(a){this.ha()||a||(p6(this,"Cast session died."),this.De())};g.C(r6,o6);g.h=r6.prototype;g.h.iw=function(a){this.A=a;this.A.addUpdateListener(this.J)};
g.h.Zj=function(a){this.B=a;this.D()};
g.h.stop=function(){this.g();this.g=g.z;g.wE(this.C);this.A?this.A.stop((0,g.B)(this.De,this,null),(0,g.B)(this.De,this,"Failed to stop DIAL device.")):this.De()};
g.h.V=function(){this.g();this.g=g.z;g.wE(this.C);this.A&&this.A.removeUpdateListener(this.J);this.A=null;r6.da.V.call(this)};
g.h.zX=function(a){this.ha()||a||(p6(this,"DIAL session died."),this.g(),this.g=g.z,this.De())};
g.h.Nt=function(a){this.I=e5();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,VDa(this));a(b);UDa(this)}else this.D=(0,g.B)(function(){g.wE(this.C);this.D=g.z;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,VDa(this));a(b);UDa(this)},this),this.C=g.uE((0,g.B)(function(){this.D()},this),100)};
g.h.rM=function(a,b,c){PDa(this.H,this.F.receiver.label,a,this.l.friendlyName,(0,g.B)(function(a){a&&a.token?(this.Yp(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Nt(b,c)},this),(0,g.B)(function(a){p6(this,"Failed to get DIAL screen: "+a);
this.Nt(b,c)},this))};g.C(s6,o6);s6.prototype.stop=function(){this.De()};
s6.prototype.iw=g.z;s6.prototype.Zj=function(){g.wE(this.g);this.g=window.NaN;var a=g5(this.H.ze(),this.l.label);a?this.Yp(a):this.De(Error("No such screen"))};
s6.prototype.V=function(){g.wE(this.g);this.g=window.NaN;s6.da.V.call(this)};g.C(t6,g.bG);g.h=t6.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);this.F||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.B)(this.XD,this),(0,g.B)(this.hU,this),d,e);c.customDialLaunchCallback=(0,g.B)(this.YR,this);window.chrome.cast.initialize(c,
(0,g.B)(function(){this.ha()||(window.chrome.cast.addReceiverActionListener(this.A),CDa(),this.l.subscribe("onlineScreenChange",(0,g.B)(this.zG,this)),this.o=XDa(this),window.chrome.cast.setCustomReceivers(this.o,g.z,(0,g.B)(function(a){this.oc("Failed to set initial custom receivers: "+g.Dg(a))},this)),this.R("yt-remote-cast2-availability-change",v6(this)),b(!0))},this),(0,g.B)(function(a){this.oc("Failed to initialize API: "+g.Dg(a));
b(!1)},this))};
g.h.uW=function(a,b){u6("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)u6("Unsetting old screen status: "+this.g.l.friendlyName),w6(this,null)}if(a&&b){if(!this.g){c=g5(this.l.ze(),a);if(!c){u6("setConnectedScreenStatus: Unknown screen.");return}var d=WDa(this,c);d||(u6("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.z,(0,g.B)(function(a){this.oc("Failed to set initial custom receivers: "+g.Dg(a))},this)));
u6("setConnectedScreenStatus: new active receiver: "+d.friendlyName);w6(this,new s6(this.l,d),!0)}this.g.jw(b)}else u6("setConnectedScreenStatus: no screen.")};
g.h.vW=function(a){this.ha()?this.oc("Setting connection data on disposed cast v2"):this.g?this.g.Zj(a):this.oc("Setting connection data without a session")};
g.h.yX=function(){this.ha()?this.oc("Stopping session on disposed cast v2"):this.g?(this.g.stop(),w6(this,null)):u6("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.B)(this.XD,this),(0,g.B)(this.DU,this))};
g.h.V=function(){this.l.unsubscribe("onlineScreenChange",(0,g.B)(this.zG,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Ra(g.y("yt.mdx.remote.debug.handlers_")||[],zDa);g.gf(this.g);t6.da.V.call(this)};
g.h.oc=function(a){Z5("Controller",a)};
g.h.YD=function(a,b){this.g==a&&(b||w6(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.dU=function(a,b){if(!this.ha())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),u6("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)u6("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{u6("onReceiverAction_: Casting to active receiver.");this.g.o&&this.R("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:w6(this,
new s6(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:w6(this,new r6(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:w6(this,new q6(this.l,a));break;default:this.oc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.oc("Stopping receiver w/o session: "+a.friendlyName)}else this.oc("onReceiverAction_ called without receiver.")};
g.h.YR=function(a){if(this.ha())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.oc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.oc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return u6("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.oc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);w6(this,new r6(this.l,b,this.C))}b=this.g;b.F=a;return b.F.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.B)(b.rM,b,(b.F.extraData||{}).screenId||null)):new window.Promise((0,g.B)(b.Nt,b))};
g.h.XD=function(a){if(!this.ha()){u6("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)u6("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),w6(this,new q6(this.l,b),!0);else{this.oc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=g5(this.l.ze(),c.label);
d&&b5(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(u6("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.gf(this.g),this.g=new q6(this.l,b),this.g.subscribe("sessionScreen",(0,g.B)(this.YD,this,this.g)),this.g.Zj(null));this.g.iw(a)}}};
g.h.xX=function(){return this.g?this.g.AG():null};
g.h.DU=function(a){this.ha()||(this.oc("Failed to estabilish a session: "+g.Dg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&w6(this,null))};
g.h.hU=function(a){u6("Receiver availability updated: "+a);if(!this.ha()){var b=v6(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;v6(this)!=b&&this.R("yt-remote-cast2-availability-change",v6(this))}};
g.h.zG=function(){this.ha()||(this.o=XDa(this),u6("Updating custom receivers: "+g.Dg(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.z,(0,g.B)(function(){this.oc("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",v6(this)))};
t6.prototype.setLaunchParams=t6.prototype.vW;t6.prototype.setConnectedScreenStatus=t6.prototype.uW;t6.prototype.stopSession=t6.prototype.yX;t6.prototype.getCastSession=t6.prototype.xX;t6.prototype.requestSession=t6.prototype.requestSession;t6.prototype.init=t6.prototype.init;t6.prototype.dispose=t6.prototype.dispose;var C6=[];g.h=H6.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";I6(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.Xf=a.hasPrevious,this.hasNext=a.hasNext,this.D=a.playerTime,this.C=a.playerTimeAt,this.A=a.seekableStart,this.l=a.seekableEnd,this.F=a.duration,this.H=a.loadedTime,this.o=a.liveIngestionTime,this.B=!(0,window.isNaN)(this.o))};
g.h.rb=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.getDuration=function(){return this.B?this.F+J6(this):this.F};
g.h.clone=function(){return new H6(N6(this))};g.C(P6,g.bG);g.h=P6.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.z,V6(this,"play")):U6(this,"play"),T6(this,1,L6(Q6(this))),this.R("remotePlayerChange")):R6(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.z,V6(this,"pause")):U6(this,"pause"),T6(this,2,L6(Q6(this))),this.R("remotePlayerChange")):R6(this,this.pause)};
g.h.vG=function(a){if(1==this.g){if(this.l){var b=Q6(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.rb()||3==b.playerState?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.z,V6(this,"seekTo",{newTime:a}))}else U6(this,"seekTo",{newTime:a});T6(this,3,a);this.R("remotePlayerChange")}else R6(this,g.Ca(this.vG,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.z,V6(this,"stopVideo")):U6(this,"stopVideo");var a=Q6(this);a.index=-1;a.videoId="";I6(a);S6(this,a);this.R("remotePlayerChange")}else R6(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=Q6(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.B)(function(){Z5("CP","set receiver volume: "+d)},this),(0,g.B)(function(){this.oc("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.B)(function(){Z5("CP","set receiver muted: "+b)},this),(0,g.B)(function(){this.oc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);U6(this,"setVolume",e)}c.muted=b;c.volume=a;S6(this,c)}else R6(this,g.Ca(this.setVolume,a,b))};
g.h.oF=function(a,b){if(1==this.g){var c=Q6(this),d={videoId:a};b&&(c.g={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Dg(b.style),g.cc(d,c.g));U6(this,"setSubtitlesTrack",d);S6(this,c)}else R6(this,g.Ca(this.oF,a,b))};
g.h.fx=function(a,b){if(1==this.g){U6(this,"setAudioTrack",{videoId:a,audioTrackId:b.Lb.id});var c=Q6(this);c.audioTrackId=b.Lb.id;S6(this,c)}else R6(this,g.Ca(this.fx,a,b))};
g.h.uG=function(a,b){if(1==this.g){if(a&&b){var c=Q6(this);M6(c,a,b);S6(this,c)}U6(this,"previous")}else R6(this,g.Ca(this.uG,a,b))};
g.h.tG=function(a,b){if(1==this.g){if(a&&b){var c=Q6(this);M6(c,a,b);S6(this,c)}U6(this,"next")}else R6(this,g.Ca(this.tG,a,b))};
g.h.wz=function(){1==this.g?U6(this,"dismissAutoplay"):R6(this,this.wz)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.R("proxyStateChange",a,this.g)}P6.da.dispose.call(this)};
g.h.V=function(){jEa(this);this.A=null;this.B.clear();O6(this,null);P6.da.V.call(this)};
g.h.gx=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)g.QC(this.B).apply(this);else 3==a&&this.dispose()}};
g.h.XT=function(a,b){this.R(a,b)};
g.h.uR=function(a){if(!a)this.Lm(null),O6(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=Q6(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)Z5("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,S6(this,b)}};
g.h.Lm=function(a){Z5("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.F);if(this.l=a)this.l.addUpdateListener(this.F),kEa(this),this.R("remotePlayerChange")};
g.h.tR=function(a){a?(kEa(this),this.R("remotePlayerChange")):this.Lm(null)};
g.h.IR=function(){var a=gEa();a&&O6(this,a)};
g.h.oc=function(a){Z5("CP",a)};g.C(W6,g.bG);g.h=W6.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.u(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.u(k)&&(l.currentIndex=k);c&&(this.fb.listId=c);this.fb.videoId=d;this.fb.index=k||0;this.fb.state=3;K6(this.fb,m);this.A="UNSUPPORTED";X6("Connecting with setPlaylist and params: "+g.Dg(l));this.g.connect({method:"setPlaylist",
params:g.Dg(l)},a,FCa())}else X6("Connecting without params"),this.g.connect({},a,FCa());mEa(this)};
g.h.dispose=function(){this.ha()||(this.R("beforeDispose"),Y6(this,3));W6.da.dispose.call(this)};
g.h.V=function(){Z6(this);a7(this);$6(this);g.wE(this.H);this.H=window.NaN;g.wE(this.I);this.I=window.NaN;this.o=null;g.MF(this.U);this.U.length=0;this.g.dispose();W6.da.V.call(this);this.A=this.D=this.l=this.fb=this.g=null};
g.h.FK=function(){this.C(2)};
g.h.yR=function(){X6("Channel opened");this.M&&(this.M=!1,$6(this),this.K=g.uE((0,g.B)(function(){X6("Timing out waiting for a screen.");this.C(1)},this),15E3));
JCa(wDa(this.g),this.Z)};
g.h.vR=function(){X6("Channel closed");(0,window.isNaN)(this.B)?l5(!0):l5();this.dispose()};
g.h.wR=function(a){l5();(0,window.isNaN)(this.F())?(X6("Channel error: "+a+" without reconnection"),this.dispose()):(this.M=!0,X6("Channel error: "+a+" with reconnection in "+this.F()+" ms"),Y6(this,2))};
g.h.xR=function(a){a.params?X6("Received: action="+a.action+", params="+g.Dg(a.params)):X6("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.vx(a.params.devices);this.l=(0,g.J)(a,function(a){return new $4(a)});
a=!!g.Ia(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
pEa(this,a);break;case "loungeScreenDisconnected":g.Sa(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
pEa(this,!1);break;case "remoteConnected":var b=new $4(g.vx(a.params.device));g.Ia(this.l,function(a){return b?a.id==b.id:!1})||g.Pa(this.l,b);
break;case "remoteDisconnected":b=new $4(g.vx(a.params.device));g.Sa(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":rEa(this,a);break;case "nowPlaying":tEa(this,a);break;case "onStateChange":sEa(this,a);break;case "onAdStateChange":uEa(this,a);break;case "onVolumeChanged":vEa(this,a);break;case "onSubtitlesTrackChanged":qEa(this,a);break;case "nowAutoplaying":wEa(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.D=a.params.videoId||null;this.R("autoplayUpNext",this.D);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":xEa(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:X6("Unrecognized action: "+a.action)}};
g.h.eW=function(){if(this.o){var a=this.o;this.o=null;this.fb.videoId!=a&&b7(this,"getNowPlaying")}};
W6.prototype.subscribe=W6.prototype.subscribe;W6.prototype.unsubscribeByKey=W6.prototype.Zd;W6.prototype.ga=function(){var a=3;this.ha()||(a=0,(0,window.isNaN)(this.F())?U5(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
W6.prototype.getProxyState=W6.prototype.ga;W6.prototype.C=function(a){X6("Disconnecting with "+a);Z6(this);this.R("beforeDisconnect",a);1==a&&l5();xDa(this.g,a);this.dispose()};
W6.prototype.disconnect=W6.prototype.C;W6.prototype.ea=function(){var a=this.fb;this.o&&(a=this.fb.clone(),M6(a,this.o,a.index));return N6(a)};
W6.prototype.getPlayerContextData=W6.prototype.ea;
W6.prototype.la=function(a){var b=new H6(a);b.videoId&&b.videoId!=this.fb.videoId&&(this.o=b.videoId,g.wE(this.H),this.H=g.uE((0,g.B)(this.eW,this),5E3));var c=[];this.fb.listId==b.listId&&this.fb.videoId==b.videoId&&this.fb.index==b.index||c.push("remoteQueueChange");this.fb.playerState==b.playerState&&this.fb.volume==b.volume&&this.fb.muted==b.muted&&L6(this.fb)==L6(b)&&g.Dg(this.fb.g)==g.Dg(b.g)||c.push("remotePlayerChange");this.fb.reset(a);(0,g.D)(c,function(a){this.R(a)},this)};
W6.prototype.setPlayerContextData=W6.prototype.la;W6.prototype.X=function(){var a=this.g.C.id,b=g.Ia(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
W6.prototype.getOtherConnectedRemoteId=W6.prototype.X;W6.prototype.F=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.H)():window.NaN};
W6.prototype.getReconnectTimeout=W6.prototype.F;W6.prototype.Y=function(){return this.A||"UNSUPPORTED"};
W6.prototype.getAutoplayMode=W6.prototype.Y;W6.prototype.ca=function(){return this.D||""};
W6.prototype.getAutoplayVideoId=W6.prototype.ca;W6.prototype.va=function(){if(!(0,window.isNaN)(this.F())){var a=this.g.l;g.Au(a.g);a.start()}};
W6.prototype.reconnect=W6.prototype.va;W6.prototype.ia=function(a,b){b7(this,a,b);oEa(this)};
W6.prototype.sendMessage=W6.prototype.ia;g.C(c7,c6);g.h=c7.prototype;g.h.ze=function(a){return this.ld.$_gs(a)};
g.h.contains=function(a){return!!this.ld.$_c(a)};
g.h.get=function(a){return this.ld.$_g(a)};
g.h.start=function(){this.ld.$_st()};
g.h.add=function(a,b,c){this.ld.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ld.$_r(a,b,c)};
g.h.Sq=function(a,b,c,d){this.ld.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.l.length;a<b;++a)this.ld.$_ubk(this.l[a]);this.l.length=0;this.ld=null;c7.da.V.call(this)};
g.h.uX=function(){this.R("screenChange")};
g.h.uT=function(){this.R("onlineScreenChange")};
l6.prototype.$_st=l6.prototype.start;l6.prototype.$_gspc=l6.prototype.vX;l6.prototype.$_gsppc=l6.prototype.yG;l6.prototype.$_c=l6.prototype.contains;l6.prototype.$_g=l6.prototype.get;l6.prototype.$_a=l6.prototype.add;l6.prototype.$_un=l6.prototype.Sq;l6.prototype.$_r=l6.prototype.remove;l6.prototype.$_gs=l6.prototype.ze;l6.prototype.$_gos=l6.prototype.xG;l6.prototype.$_s=l6.prototype.subscribe;l6.prototype.$_ubk=l6.prototype.Zd;var d7=null,e7=null,t7=null,i7=[];g.t(u7,g.L);g.h=u7.prototype;
g.h.V=function(){g.L.prototype.V.call(this);this.A.stop();this.C.stop();this.J.stop();this.M();this.g.unsubscribe("proxyStateChange",this.UD,this);this.g.unsubscribe("remotePlayerChange",this.Nm,this);this.g.unsubscribe("remoteQueueChange",this.Zp,this);this.g.unsubscribe("autoplayUpNext",this.sD,this);this.g.unsubscribe("previousNextChange",this.RD,this);this.g.unsubscribe("nowAutoplaying",this.JD,this);this.g.unsubscribe("autoplayDismissed",this.rD,this);this.g=this.B=null};
g.h.pC=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(x7(this)){if(!Q6(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":Q6(this.g).rb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.Il(c[0],c[1]);break;case "control_subtitles_set_track":y7(this,c[0]);break;case "control_set_audio_track":c=c[0],x7(this)&&this.g.fx(this.l.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.l.getCurrentTime();z7(this,0==c?void 0:c);break;case "control_seek":z7(this,c[0]);break;case "control_subtitles_set_track":y7(this,c[0]);break;case "control_set_audio_track":c=c[0],x7(this)&&this.g.fx(this.l.getVideoData(1).videoId,c)}};
g.h.sR=function(a){this.J.AK(a)};
g.h.XW=function(a){this.pC("control_subtitles_set_track",g.Vb(a)?null:a)};
g.h.EF=function(){var a=this.l.zc("captions","track");g.Vb(a)||y7(this,a)};
g.h.GD=function(a){if(x7(this)){this.g.unsubscribe("remotePlayerChange",this.Nm,this);var b=Math.round(a.volume);a=!!a.muted;var c=Q6(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.K.start();this.g.subscribe("remotePlayerChange",this.Nm,this)}};
g.h.NS=function(){g.Vb(this.D)||JEa(this,this.D);this.F=!1};
g.h.UD=function(a,b){this.C.stop();2==b&&this.BF()};
g.h.Nm=function(){if(x7(this)){this.A.stop();var a=Q6(this.g);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.D=1;break;case 1082:case 1083:this.B.D=0;break;default:this.B.D=-1}switch(a.playerState){case 1081:case 1:w7(this,new g.nQ(8));this.AF();break;case 1085:case 3:w7(this,new g.nQ(9));break;case 1083:case 0:w7(this,new g.nQ(2));this.I.stop();v7(this,this.l.getVideoData().lengthSeconds);break;case 1084:w7(this,new g.nQ(4));break;case 2:w7(this,new g.nQ(4));v7(this,L6(a));
break;case -1:w7(this,new g.nQ(64));break;case -1E3:w7(this,new g.nQ(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=Q6(this.g).g;var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.D=a,JEa(this,a));a=Q6(this.g);-1==a.volume||Math.round(this.l.getVolume())==a.volume&&this.l.isMuted()==a.muted||this.K.isActive()||this.fG()}else IEa(this)};
g.h.RD=function(){this.l.R("mdxpreviousnextchange")};
g.h.Zp=function(){x7(this)||IEa(this)};
g.h.KJ=function(){this.g.wz()};
g.h.sD=function(a){a&&(a=g.LE("/watch_queue_ajax",{method:"GET",cd:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.B)(this.dV,this)}))&&(this.M=(0,g.B)(a.abort,a))};
g.h.dV=function(a,b){var c=new g.bP(g.X(this.l),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.l.R("mdxautoplayupnext",c)};
g.h.JD=function(a){(0,window.isNaN)(a)||this.l.R("mdxnowautoplaying",a)};
g.h.rD=function(){this.l.R("mdxautoplaycanceled")};
g.h.wP=function(a,b){-1==Q6(this.g).playerState?z7(this,a):b&&this.g.vG(a)};
g.h.fG=function(){if(x7(this)){var a=Q6(this.g);this.o.Ga(this.U);a.muted?this.l.mute():this.l.hg();this.l.setVolume(a.volume);this.U=this.o.O(this.l,"onVolumeChange",this.GD)}};
g.h.AF=function(){this.A.stop();if(!this.g.ha()){var a=Q6(this.g);a.rb()&&w7(this,new g.nQ(8));v7(this,L6(a));this.A.start()}};
g.h.BF=function(){this.C.stop();this.A.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.C.start()};g.t(A7,g.V);A7.prototype.B=function(a){LEa(this,a.state)};g.t(B7,g.qY);B7.prototype.J=function(){var a=this.o.zc("remote","receivers");a&&1<a.length&&!this.o.zc("remote","quickCast")?(this.H=g.ib(a,this.C,this),g.rY(this,(0,g.J)(a,this.C)),a=this.o.zc("remote","currentReceiver"),this.Bf(this.C(a)),this.enable(!0)):this.enable(!1)};
B7.prototype.C=function(a){return a.key};
B7.prototype.Af=function(a){return"cast-selector-receiver"==a?"Cast...":this.H[a].name};
B7.prototype.Cd=function(a){g.qY.prototype.Cd.call(this,a);this.o.Td("remote","currentReceiver",this.H[a]);this.B.Rb()};g.t(C7,g.aV);g.h=C7.prototype;g.h.create=function(){CEa(g.cN(g.X(this.player)));this.B.push(g.oG("yt-remote-before-disconnect",this.oR,this));this.B.push(g.oG("yt-remote-connection-change",this.iU,this));this.B.push(g.oG("yt-remote-receiver-availability-change",this.SD,this));this.B.push(g.oG("yt-remote-auto-connect",this.gU,this));this.B.push(g.oG("yt-remote-receiver-resumed",this.fU,this));this.SD()};
g.h.load=function(){this.player.Fu();g.aV.prototype.load.call(this);this.A=new u7(this,this.player,this.g);var a=(a=HEa())?a.currentTime:0;var b=s7()?new P6(n7(),void 0):null;0==a&&b&&(a=L6(Q6(b)));0!=a&&(this.H=a||0,this.player.R("progresssync",a,void 0));KEa(this,this.C,this.C);g.zZ(this.player.app,6)};
g.h.unload=function(){this.player.R("mdxautoplaycanceled");this.o=this.l;g.hf(this.A,this.g);this.g=this.A=null;g.aV.prototype.unload.call(this);g.zZ(this.player.app,5)};
g.h.V=function(){g.pG(this.B);g.aV.prototype.V.call(this)};
g.h.Cm=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.A.pC.apply(this.A,[a].concat(g.ea(c)))};
g.h.wK=function(){return this.loaded?this.A.suggestion:null};
g.h.Xf=function(){return this.g?Q6(this.g).Xf:!1};
g.h.hasNext=function(){return this.g?Q6(this.g).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.kP=function(){var a=Q6(this.g),b=this.player.getVideoData();return{allowSeeking:g.X(this.player).experiments.g("web_player_mdx_allow_seeking_change_killswitch")?this.player.Jc():!a.isAdPlaying()&&this.player.Jc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.B?a.o+J6(a):a.o,isPeggedToLive:1>=(a.B?a.l+J6(a):a.l)-this.getCurrentTime(),loaded:a.H,seekableEnd:a.B?a.l+J6(a):a.l,seekableStart:0<a.A?a.A+J6(a):a.A}};
g.h.lP=function(){this.g&&this.g.tG()};
g.h.mP=function(){this.g&&this.g.uG()};
g.h.oR=function(a){1==a&&(this.I=this.g?Q6(this.g):null)};
g.h.iU=function(){var a=s7()?new P6(n7(),void 0):null;if(a){var b=this.o;this.loaded&&this.unload();this.g=a;this.I=null;b.key!=this.l.key&&(this.o=b,this.load())}else g.gf(this.g),this.g=null,this.loaded&&(this.unload(),(a=this.I)&&a.videoId==this.player.getVideoData().videoId&&this.player.VB(a.videoId,L6(a)));this.player.R("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.SD=function(){this.F=[this.l].concat(EEa());var a=o7()||this.l;D7(this,a);this.player.wa("onMdxReceiversChange")};
g.h.gU=function(){var a=o7();D7(this,a)};
g.h.fU=function(){this.o=o7()};
g.h.jP=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?F6():D7(this,b)),this.loaded?this.o:this.l;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&F6(),!0):!1}};
g.h.nP=function(){U6(this.g,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Cc=function(){return!1};g.TX.remote=C7;})(_yt_player);

/*
     FILE ARCHIVED ON 23:09:30 Nov 20, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:48:23 Sep 10, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.159
  esindex: 9.976
  load_resource: 64.982
  LoadShardBlock: 120.286 (3)
  exclusion.robots: 0.168
  RedisCDXSource: 1.578
  captures_list: 146.107
  PetaboxLoader3.resolve: 21.774
  CDXLines.iter: 11.083 (3)
  PetaboxLoader3.datanode: 70.122 (4)
*/