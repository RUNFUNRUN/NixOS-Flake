(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[202],{86834:(e,t,r)=>{"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=n(r(92067)),l=o(r(5558)),i=o(r(98728)),s=n(r(72392)),u=n(r(51628)),c=o(r(53982));function d(){var e=new a.HandlebarsEnvironment;return s.extend(e,a),e.SafeString=l.default,e.Exception=i.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},92067:(e,t,r)=>{"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=d;var n=r(72392),a=o(r(98728)),l=r(12638),i=r(90881),s=o(r(8037)),u=r(56293);t.VERSION="4.7.7",t.COMPILER_REVISION=8,t.LAST_COMPATIBLE_COMPILER_REVISION=7,t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var c="[object Object]";function d(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},l.registerDefaultHelpers(this),i.registerDefaultDecorators(this)}d.prototype={constructor:d,logger:s.default,log:s.default.log,registerHelper:function(e,t){if(n.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple helpers");n.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(n.toString.call(e)===c)n.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(n.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple decorators");n.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var f=s.default.log;t.log=f,t.createFrame=n.createFrame,t.logger=s.default},90881:(e,t,r)=>{"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){n.default(e)};var o,n=(o=r(75670))&&o.__esModule?o:{default:o}},75670:(e,t,r)=>{"use strict";t.__esModule=!0;var o=r(72392);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,n){var a=e;return t.partials||(t.partials={},a=function(n,a){var l=r.partials;r.partials=o.extend({},l,t.partials);var i=e(n,a);return r.partials=l,i}),t.partials[n.args[0]]=n.fn,a}))},e.exports=t.default},98728:(e,t)=>{"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var n=t&&t.loc,a=void 0,l=void 0,i=void 0,s=void 0;n&&(a=n.start.line,l=n.end.line,i=n.start.column,s=n.end.column,e+=" - "+a+":"+i);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=a,this.endLineNumber=l,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=i,this.endColumn=s))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},12638:(e,t,r)=>{"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){n.default(e),a.default(e),l.default(e),i.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var n=o(r(57342)),a=o(r(16822)),l=o(r(4905)),i=o(r(97405)),s=o(r(35702)),u=o(r(77593)),c=o(r(53978))},57342:(e,t,r)=>{"use strict";t.__esModule=!0;var o=r(72392);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var n=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return n(this);if(o.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):n(this);if(r.data&&r.ids){var l=o.createFrame(r.data);l.contextPath=o.appendContextPath(r.data.contextPath,r.name),r={data:l}}return a(t,r)}))},e.exports=t.default},16822:(e,t,r)=>{"use strict";t.__esModule=!0;var o,n=r(72392),a=(o=r(98728))&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new a.default("Must pass iterator to #each");var r,o=t.fn,l=t.inverse,i=0,s="",u=void 0,c=void 0;function d(t,r,a){u&&(u.key=t,u.index=r,u.first=0===r,u.last=!!a,c&&(u.contextPath=c+t)),s+=o(e[t],{data:u,blockParams:n.blockParams([e[t],t],[c+t,null])})}if(t.data&&t.ids&&(c=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(u=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var f=e.length;i<f;i++)i in e&&d(i,i,i===e.length-1);else if(global.Symbol&&e[global.Symbol.iterator]){for(var p=[],h=e[global.Symbol.iterator](),v=h.next();!v.done;v=h.next())p.push(v.value);for(f=(e=p).length;i<f;i++)d(i,i,i===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&d(r,i-1),r=e,i++})),void 0!==r&&d(r,i-1,!0);return 0===i&&(s=l(this)),s}))},e.exports=t.default},4905:(e,t,r)=>{"use strict";t.__esModule=!0;var o,n=(o=r(98728))&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new n.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},97405:(e,t,r)=>{"use strict";t.__esModule=!0;var o,n=r(72392),a=(o=r(98728))&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},35702:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],o=0;o<arguments.length-1;o++)t.push(arguments[o]);var n=1;null!=r.hash.level?n=r.hash.level:r.data&&null!=r.data.level&&(n=r.data.level),t[0]=n,e.log.apply(e,t)}))},e.exports=t.default},77593:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},53978:(e,t,r)=>{"use strict";t.__esModule=!0;var o,n=r(72392),a=(o=r(98728))&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var o=t.data;return t.data&&t.ids&&((o=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:o,blockParams:n.blockParams([e],[o&&o.contextPath])})}))},e.exports=t.default},8572:(e,t,r)=>{"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.extend.apply(void 0,[Object.create(null)].concat(t))};var o=r(72392)},56293:(e,t,r)=>{"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:o.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:o.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return function(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,n.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(a).forEach((function(e){delete a[e]}))};var o=r(8572),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(8037)),a=Object.create(null)},15005:(e,t)=>{"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){return"function"!=typeof e?e:function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},8037:(e,t,r)=>{"use strict";t.__esModule=!0;var o=r(72392),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=o.indexOf(n.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=n.lookupLevel(e),"undefined"!=typeof console&&n.lookupLevel(n.level)<=e){var t=n.methodMap[e];console[t]||(t="log");for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];console[t].apply(console,o)}}};t.default=n,e.exports=t.default},53982:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){var t="undefined"!=typeof global?global:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default},51628:(e,t,r)=>{"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=l.COMPILER_REVISION;if(!(t>=l.LAST_COMPATIBLE_COMPILER_REVISION&&t<=l.COMPILER_REVISION)){if(t<l.LAST_COMPATIBLE_COMPILER_REVISION){var o=l.REVISION_CHANGES[r],n=l.REVISION_CHANGES[t];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+o+") or downgrade your runtime to an older version ("+n+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new a.default("No environment passed to template");if(!e||!e.main)throw new a.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0],o={strict:function(e,t,r){if(!e||!(t in e))throw new a.default('"'+t+'" not defined in '+e,{loc:r});return o.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r||Object.prototype.hasOwnProperty.call(e,t)||u.resultIsAllowed(r,o.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(null!=(e[n]&&o.lookupProperty(e[n],t)))return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:n.escapeExpression,invokePartial:function(r,o,l){l.hash&&(o=n.extend({},o,l.hash),l.ids&&(l.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,o,l);var i=n.extend({},l,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,r,o,i);if(null==s&&t.compile&&(l.partials[l.name]=t.compile(r,e.compilerOptions,t),s=l.partials[l.name](o,i)),null!=s){if(l.indent){for(var u=s.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=l.indent+u[c];s=u.join("\n")}return s}throw new a.default("The partial "+l.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,o,n){var a=this.programs[e],l=this.fn(e);return t||n||o||r?a=c(this,e,l,t,r,o,n):a||(a=this.programs[e]=c(this,e,l)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=n.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function l(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;l._setup(r),!r.partial&&e.useData&&(n=f(t,n));var a=void 0,i=e.useBlockParams?[]:void 0;function s(t){return""+e.main(o,t,o.helpers,o.partials,n,i,a)}return e.useDepths&&(a=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(s=p(e.main,s,o,r.depths||[],n,i))(t,r)}return l.isTop=!0,l._setup=function(a){if(a.partial)o.protoAccessControl=a.protoAccessControl,o.helpers=a.helpers,o.partials=a.partials,o.decorators=a.decorators,o.hooks=a.hooks;else{var l=n.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(r){var o=e[r];e[r]=function(e,t){var r=t.lookupProperty;return s.wrapHelper(e,(function(e){return n.extend({lookupProperty:r},e)}))}(o,t)}))}(l,o),o.helpers=l,e.usePartial&&(o.partials=o.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(o.decorators=n.extend({},t.decorators,a.decorators)),o.hooks={},o.protoAccessControl=u.createProtoAccessControl(a);var c=a.allowCallsToHelperMissing||r;i.moveHelperToHooks(o,"helperMissing",c),i.moveHelperToHooks(o,"blockHelperMissing",c)}},l._child=function(t,r,n,l){if(e.useBlockParams&&!n)throw new a.default("must pass block params");if(e.useDepths&&!l)throw new a.default("must pass parent depths");return c(o,t,e[t],r,0,n,l)},l},t.wrapProgram=c,t.resolvePartial=function(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e},t.invokePartial=function(e,t,r){var o=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var i=void 0;if(r.fn&&r.fn!==d&&function(){r.data=l.createFrame(r.data);var e=r.fn;i=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=l.createFrame(r.data),r.data["partial-block"]=o,e(t,r)},e.partials&&(r.partials=n.extend({},r.partials,e.partials))}(),void 0===e&&i&&(e=i),void 0===e)throw new a.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=d;var o,n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(72392)),a=(o=r(98728))&&o.__esModule?o:{default:o},l=r(92067),i=r(12638),s=r(15005),u=r(56293);function c(e,t,r,o,n,a,l){function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=l;return!l||t==l[0]||t===e.nullContext&&null===l[0]||(i=[t].concat(l)),r(e,t,e.helpers,e.partials,n.data||o,a&&[n.blockParams].concat(a),i)}return(i=p(r,i,e,l,o,a)).program=t,i.depth=l?l.length:0,i.blockParams=n||0,i}function d(){return""}function f(e,t){return t&&"root"in t||((t=t?l.createFrame(t):{}).root=e),t}function p(e,t,r,o,a,l){if(e.decorator){var i={};t=e.decorator(t,i,r,o&&o[0],a,l,o),n.extend(t,i)}return t}},5558:(e,t)=>{"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},72392:(e,t)=>{"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return n.test(e)?e.replace(o,a):e},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,n=/[&<>"'`=]/;function a(e){return r[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var i=Object.prototype.toString;t.toString=i;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===i.call(e)}),t.isFunction=s;var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===i.call(e)};t.isArray=u},40202:(e,t,r)=>{e.exports=r(86834).default}}]);