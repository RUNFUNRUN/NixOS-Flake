function devhttpclient(){var Q='bootstrap',R='begin',S='gwt.codesvr.devhttpclient=',T='gwt.codesvr=',U='devhttpclient',V='startup',W='DUMMY',X=0,Y=1,Z='undefined',$='readystatechange',_=10,ab='script',bb='javascript',cb='Failed to load ',db='moduleStartup',eb='scriptTagAdded',fb='moduleRequested',gb='meta',hb='name',ib='devhttpclient::',jb='',kb='::',lb='gwt:property',mb='content',nb='=',ob='gwt:onPropertyErrorFn',pb='Bad handler "',qb='" for "gwt:onPropertyErrorFn"',rb='gwt:onLoadErrorFn',sb='" for "gwt:onLoadErrorFn"',tb='#',ub='?',vb='/',wb='img',xb='clear.cache.gif',yb='baseUrl',zb='devhttpclient.nocache.js',Ab='base',Bb='//',Cb='locale',Db='en',Eb='locale=',Fb=7,Gb='&',Hb='__gwt_Locale',Ib='_',Jb='Unexpected exception in locale detection, using default: ',Kb=2,Lb=3,Mb=4,Nb='selectingPermutation',Ob='devhttpclient.devmode.js',Pb='fr',Qb='0D24F14F4551FB58E855A20078C30175',Rb='27F21FFC62FACE6CC8FDE8D740D95FED',Sb='de',Tb='3067CD6F0CC6D4831F485F2BA4DD99BD',Ub='ja',Vb='8A2ACB29C39977F12715FB23068A5E19',Wb=':',Xb='.cache.js',Yb='loadExternalRefs',Zb='end',$b='http:',_b='file:',ac='_gwt_dummy_',bc='__gwtDevModeHook:devhttpclient',cc='Ignoring non-whitelisted Dev Mode URL: ',dc=':moduleBase',ec='head';var q=window;var r=document;t(Q,R);function s(){var a=q.location.search;return a.indexOf(S)!=-1||a.indexOf(T)!=-1}
function t(a,b){if(q.__gwtStatsEvent){q.__gwtStatsEvent({moduleName:U,sessionId:q.__gwtStatsSessionId,subSystem:V,evtGroup:a,millis:(new Date).getTime(),type:b})}}
devhttpclient.__sendStats=t;devhttpclient.__moduleName=U;devhttpclient.__errFn=null;devhttpclient.__moduleBase=W;devhttpclient.__softPermutationId=X;devhttpclient.__computePropValue=null;devhttpclient.__getPropMap=null;devhttpclient.__installRunAsyncCode=function(){};devhttpclient.__gwtStartLoadingFragment=function(){return null};devhttpclient.__gwt_isKnownPropertyValue=function(){return false};devhttpclient.__gwt_getMetaProperty=function(){return null};var u=null;var v=q.__gwt_activeModules=q.__gwt_activeModules||{};v[U]={moduleName:U};devhttpclient.__moduleStartupDone=function(e){var f=v[U].bindings;v[U].bindings=function(){var a=f?f():{};var b=e[devhttpclient.__softPermutationId];for(var c=X;c<b.length;c++){var d=b[c];a[d[X]]=d[Y]}return a}};var w;function A(){B();return w}
function B(){if(w){return}w=q.document;if(!w){w=q.document}}
function C(f){function g(a){function b(){if(typeof r.readyState==Z){return typeof r.body!=Z&&r.body!=null}return /loaded|complete/.test(r.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(r.removeEventListener){r.removeEventListener($,d,false)}if(e){clearInterval(e)}}}
if(r.addEventListener){r.addEventListener($,d,false)}var e=setInterval(function(){d()},_)}
function h(a){var b=A();var c=b.body;var d=b.createElement(ab);d.language=bb;d.src=a;if(devhttpclient.__errFn){d.onerror=function(){devhttpclient.__errFn(U,new Error(cb+a))}}c.appendChild(d);t(db,eb)}
t(db,fb);g(function(){h(f)})}
devhttpclient.__startLoadingFragment=function(a){return G(a)};devhttpclient.__installRunAsyncCode=function(a){var b=A();var c=b.body;var d=b.createElement(ab);d.language=bb;d.text=a;c.appendChild(d);c.removeChild(d)};function D(){var c={};var d;var e;var f=r.getElementsByTagName(gb);for(var g=X,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(hb),k;if(j){j=j.replace(ib,jb);if(j.indexOf(kb)>=X){continue}if(j==lb){k=i.getAttribute(mb);if(k){var l,m=k.indexOf(nb);if(m>=X){j=k.substring(X,m);l=k.substring(m+Y)}else{j=k;l=jb}c[j]=l}}else if(j==ob){k=i.getAttribute(mb);if(k){try{d=eval(k)}catch(a){alert(pb+k+qb)}}}else if(j==rb){k=i.getAttribute(mb);if(k){try{e=eval(k)}catch(a){alert(pb+k+sb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};u=d;devhttpclient.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(tb);if(b==-1){b=a.length}var c=a.indexOf(ub);if(c==-1){c=a.length}var d=a.lastIndexOf(vb,Math.min(c,b));return d>=X?a.substring(X,d+Y):jb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=r.createElement(wb);b.src=a+xb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(yb);if(a!=null){return a}return jb}
function h(){var a=r.getElementsByTagName(ab);for(var b=X;b<a.length;++b){if(a[b].src.indexOf(zb)!=-1){return e(a[b].src)}}return jb}
function i(){var a=r.getElementsByTagName(Ab);if(a.length>X){return a[a.length-Y].href}return jb}
function j(){var a=r.location;return a.href==a.protocol+Bb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==jb){k=h()}if(k==jb){k=i()}if(k==jb&&j()){k=e(r.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return devhttpclient.__moduleBase+a}
function H(){var i=[];var j=X;function k(a,b){var c=i;for(var d=X,e=a.length-Y;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var l=[];var m=[];function n(a){var b=m[a](),c=l[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(u){u(a,d,b)}throw null}
m[Cb]=function(){var b=null;var c=Db;try{if(!b){var d=location.search;var e=d.indexOf(Eb);if(e>=X){var f=d.substring(e+Fb);var g=d.indexOf(Gb,e);if(g<X){g=d.length}b=d.substring(e+Fb,g)}}if(!b){b=__gwt_getMetaProperty(Cb)}if(!b){b=q[Hb]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Cb,b)){var h=b.lastIndexOf(Ib);if(h<X){b=null;break}b=b.substring(X,h)}}catch(a){alert(Jb+a)}q[Hb]=c;return b||Db};l[Cb]={'de':X,'default':Y,'en':Kb,'fr':Lb,'ja':Mb};__gwt_isKnownPropertyValue=function(a,b){return b in l[a]};devhttpclient.__getPropMap=function(){var a={};for(var b in l){if(l.hasOwnProperty(b)){a[b]=n(b)}}return a};devhttpclient.__computePropValue=n;q.__gwt_activeModules[U].bindings=devhttpclient.__getPropMap;t(Q,Nb);if(s()){return G(Ob)}var o;try{k([Pb],Qb);k([Db],Rb);k([Sb],Tb);k([Ub],Vb);o=i[n(Cb)];var p=o.indexOf(Wb);if(p!=-1){j=parseInt(o.substring(p+Y),_);o=o.substring(X,p)}}catch(a){}devhttpclient.__softPermutationId=j;return G(o+Xb)}
function I(){if(!q.__gwt_stylesLoaded){q.__gwt_stylesLoaded={}}t(Yb,R);t(Yb,Zb)}
D();devhttpclient.__moduleBase=F();v[U].moduleBase=devhttpclient.__moduleBase;var J=H();if(q){var K=!!(q.location.protocol==$b||q.location.protocol==_b);q.__gwt_activeModules[U].canRedirect=K;function L(){var b=ac;try{q.sessionStorage.setItem(b,b);q.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(K&&L()){var M=bc;var N=q.sessionStorage[M];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(N)){if(N&&(window.console&&console.log)){console.log(cc+N)}N=jb}if(N&&!q[M]){q[M]=true;q[M+dc]=F();var O=r.createElement(ab);O.src=N;var P=r.getElementsByTagName(ec)[X];P.insertBefore(O,P.firstElementChild||P.children[X]);return false}}}I();t(Q,Zb);C(J);return true}
devhttpclient.succeeded=devhttpclient();