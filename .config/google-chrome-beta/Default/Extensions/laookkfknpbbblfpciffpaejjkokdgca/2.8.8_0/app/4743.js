(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[4743,714],{42223:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});const s={data:()=>({componentsMounted:{}}),unreactive:()=>({uid:m.utils.shortId()}),beforeCreate(){const t=this.$options.components;Object.keys(t).forEach((e=>{const i=t[e];"function"==typeof i&&(t[e]=function(){this.$set(this.componentsMounted,e,!1);const t=`${e}:${this.uid}:mounted`,s=()=>this.componentsMounted[e]=!0;return this.$e.$once(t,s),i(arguments).then((i=>{const o=i.default;return o&&o.doNotWaitForMount&&(this.$delete(this.componentsMounted,e),this.$e.$off(t,s)),i}))}.bind(this))}))},created(){this.$e.$on("widgets:timeoutExceeded",this.onWidgetTimeout)},mounted(){if(Object.keys(this.componentsMounted).length){const t=this.$watch("componentsMounted",(e=>{Object.values(e).every((t=>t))&&(this.onAllComponentsMounted(),t())}),{deep:!0,immediate:!0})}else this.onAllComponentsMounted()},destroyed(){this.stopListeningToWidgetTimeout()},methods:{stopListeningToWidgetTimeout(){this.$e.$off("widgets:timeoutExceeded",this.onWidgetTimeout)},getContextUid(){return this.$vnode&&this.$vnode.context&&this.$vnode.context.uid||""},onAllComponentsMounted(){this.onAllComponentsMountedOverride?this.onAllComponentsMountedOverride():this.widgetId?m.widgetManager.appReady(this.widgetId):this.emitComponentMounted(),this.stopListeningToWidgetTimeout()},emitComponentMounted(){this.$e.$emit(`${this.$options.name}:${this.getContextUid()}:mounted`)},onWidgetTimeout(){const t=Object.keys(this.componentsMounted).filter((t=>!this.componentsMounted[t]));t.length&&console.warn(`${this.$options.name} is awaiting ${t.join(", ")} to mount.`)}}}},7353:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(8081),o=i.n(s),n=i(23645),a=i.n(n)()(o());a.push([t.id,".permission-overlay[data-v-124be135]{display:flex;position:absolute;z-index:1000;flex-direction:column;background:rgb(0 0 0/var(--opacity-stop-4));-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);inset:0}.upper[data-v-124be135],.lower[data-v-124be135]{flex:1 1 100%}.upper[data-v-124be135]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-end;text-align:center}.center[data-v-124be135]{flex:0 0 300px}.title[data-v-124be135]{padding-bottom:10px;font-size:2.25rem}.description[data-v-124be135]{color:var(--color-stop-6);font-size:1.5rem}.arrow-wrapper[data-v-124be135]{align-self:center}.arrow-wrapper.top[data-v-124be135]{order:-1;animation:oscillate-124be135 1.1s infinite;rotate:180deg}.arrow-wrapper.right[data-v-124be135]{align-self:flex-end;margin-right:260px}.action-buttons-wrapper[data-v-124be135]{position:absolute;inset:0}.action-buttons-wrapper .privacy[data-v-124be135]{margin-top:2.25rem;color:var(--color-stop-5);font-size:.975rem}.action-buttons-wrapper .privacy a[data-v-124be135]{border-bottom:1px solid currentcolor;color:currentcolor}.action-buttons-wrapper .button-row[data-v-124be135]{display:flex;justify-content:center;margin-top:24px;gap:20px}.action-buttons-wrapper .button-row .dash-button[data-v-124be135]{padding:11px 34px}.icon[data-v-124be135]{--icon-size: 50px;margin-top:10px;animation:oscillate-124be135 1.1s infinite}@keyframes oscillate-124be135{50%{transform:translateY(-10px)}}.slide-down-fade-enter[data-v-124be135],.slide-down-fade-leave-to[data-v-124be135]{transform:translateY(-50px)}.slide-down-fade-enter-active[data-v-124be135],.slide-down-fade-leave-active[data-v-124be135]{transition-duration:500ms}",""]);const r=a},32121:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(8081),o=i.n(s),n=i(23645),a=i.n(n)()(o());a.push([t.id,"\n/* stylelint-disable */\n.resize-wrapper[data-v-51387419] { position: relative;\n}\n.resize-wrapper.tr-height[data-v-51387419] { transition: height var(--duration) ease;\n}\n.resize-wrapper.tr-width[data-v-51387419] { display: flex; justify-content: center; transition: width var(--duration) ease;\n}\n.resize-wrapper.tr-height.tr-width[data-v-51387419] { transition: height var(--duration) ease, width var(--duration) ease;\n}\n.resize-wrapper.hide-overflow[data-v-51387419] { overflow: hidden;\n}\n.resize-wrapper.tr-width > div[data-v-51387419] { width: fit-content;\n}\n[data-v-51387419] .smooth-height-fade-enter-active { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n[data-v-51387419] .smooth-height-fade-leave-active { position: absolute !important; top: 0; right: 0; left: 0; transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n[data-v-51387419] .smooth-height-fade-enter,[data-v-51387419] .smooth-height-fade-leave-to { opacity: 0;\n}\n[data-v-51387419] .smooth-width-fade-enter-active { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n[data-v-51387419] .smooth-width-fade-leave-active { position: absolute; top: 0; left: 50%; transform: translateX(-50%); transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n[data-v-51387419] .smooth-width-fade-enter,[data-v-51387419] .smooth-width-fade-leave-to { opacity: 0;\n}\n[data-v-51387419] .smooth-height-slide-left-enter-active,[data-v-51387419] .smooth-height-slide-left-leave-active,[data-v-51387419] .smooth-height-slide-right-enter-active,[data-v-51387419] .smooth-height-slide-right-leave-active { transition: transform 300ms ease;\n}\n[data-v-51387419] .smooth-height-slide-left-leave-active,[data-v-51387419] .smooth-height-slide-right-leave-active { position: absolute; top: 0; right: 0; left: 0;\n}\n[data-v-51387419] .smooth-height-slide-left-leave-to,[data-v-51387419] .smooth-height-slide-right-enter { transform: translateX(-100%);\n}\n[data-v-51387419] .smooth-height-slide-left-enter,[data-v-51387419] .smooth-height-slide-right-leave-to { transform: translateX(100%);\n}\n",""]);const r=a},77140:(t,e,i)=>{"use strict";i.d(e,{H:()=>o});var s=i(74957);const o={tabs:{query:t=>new Promise((e=>chrome.tabs.query(t,e))),create:t=>new Promise((e=>chrome.tabs.create(t,e))),update:(t,e)=>new Promise((i=>chrome.tabs.update(t,e,i))),group:t=>new Promise((e=>chrome.tabs.group(t,e))),move:(t,e)=>new Promise((i=>chrome.tabs.move(t,e,i))),moveToWindow:(t,e)=>{return i=void 0,s=void 0,a=function*(){t&&e&&(yield o.tabs.move(t,{windowId:e,index:-1}))},new((n=void 0)||(n=Promise))((function(t,e){function o(t){try{d(a.next(t))}catch(t){e(t)}}function r(t){try{d(a.throw(t))}catch(t){e(t)}}function d(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(t){t(i)}))).then(o,r)}d((a=a.apply(i,s||[])).next())}));var i,s,n,a}},windows:{create:t=>new Promise((e=>chrome.windows.create(t,e))),remove:t=>new Promise((e=>{const i=()=>{chrome.sessions.onChanged.removeListener(i),e()};chrome.sessions.onChanged.addListener(i),chrome.windows.remove(t,(()=>{}))})),update:(t,e)=>new Promise((i=>chrome.windows.update(t,e,i))),get:t=>new Promise((e=>chrome.windows.get(t,{},e))),getAll:()=>new Promise((t=>chrome.windows.getAll(t)))},sessions:{restoreWindow:t=>new Promise((e=>chrome.sessions.restore(t,(t=>{(null==t?void 0:t.window)?e(null==t?void 0:t.window):(null==t?void 0:t.tab)?chrome.windows.get(t.tab.windowId||0,{},e):e(void 0)})))),getRecentlyClosedWindowSessionIds:()=>new Promise((t=>chrome.sessions.getRecentlyClosed({},(e=>{const i=[];e.forEach((t=>{var e;"window"in t&&(null===(e=t.window)||void 0===e?void 0:e.sessionId)&&i.push(t.window.sessionId)})),t(i)})))),getLastClosedSessionId:()=>new Promise((t=>chrome.sessions.getRecentlyClosed({maxResults:1},(e=>{var i,s,o,n;const a=(null===(s=null===(i=e[0])||void 0===i?void 0:i.window)||void 0===s?void 0:s.sessionId)||(null===(n=null===(o=e[0])||void 0===o?void 0:o.tab)||void 0===n?void 0:n.sessionId);if(!a)throw new Error("Could not get session ID from closed window");t(a)}))))},permissions:{request:t=>new Promise((e=>{s.Z.isFirefox()?s.Z.getBrowser().permissions.request({permissions:t}).then(e):chrome.permissions.request({permissions:t},e)})),contains:t=>new Promise((e=>{s.Z.isFirefox()?s.Z.getBrowser().permissions.contains({permissions:t}).then(e):chrome.permissions.contains({permissions:t},e)}))}}},4743:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"permission-overlay dark"},[e("transition",{attrs:{name:"slide-down-fade",mode:"out-in"}},[t.contentVisible?e("div",{staticClass:"upper"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),e("smooth-reflow",[t.browserRequestOpen?t._e():e("div",{staticClass:"action-buttons-wrapper"},[e("div",{staticClass:"privacy"},[t._v("We value and protect your privacy. Learn more in our "),e("a",{attrs:{href:"https://momentumdash.com/legal/privacy",target:"_blank"}},[t._v("Privacy Policy.")])]),t._v(" "),e("div",{staticClass:"button-row"},[e("div",{staticClass:"dash-button dash-button-neutral",on:{click:function(e){return t.resolvePermissionRequest(!1)}}},[t._v("Go back")]),t._v(" "),e("div",{staticClass:"dash-button dash-button-primary",on:{click:t.requestPermissions}},[t._v("Continue")])])])]),t._v(" "),e("smooth-reflow",{staticClass:"arrow-wrapper",class:t.iconStyling},[t.browserRequestOpen?e("div",[e("div",{staticClass:"icon"},[e("inline-svg",{staticClass:"icon",attrs:{src:i(75356)}})],1)]):t._e()])],1):t._e()]),t._v(" "),e("div",{staticClass:"center"}),t._v(" "),e("div",{staticClass:"lower"})],1)};s._withStripped=!0;var o=i(77140),n=i(74957);const a={name:"PermissionRequest",components:{SmoothReflow:i(80714).default},props:{title:{type:String,default:"Momentum requires additional permissions."},description:{type:String,default:"The desired feature needs new permissions."},permissions:{type:Array,default:()=>[]},resolve:{type:Function,default:()=>{}}},data:()=>({browserRequestOpen:!1,contentVisible:!1}),unreactive:()=>({browser:n.Z.getBrowser()}),computed:{iconStyling:()=>({top:n.Z.isWindowsOS()||n.Z.isFirefox(),right:n.Z.isFirefox()})},mounted(){m.widgetManager.hideApps({lock:!0}),this.contentVisible=!0},destroyed(){m.widgetManager.showApps({unlock:!0})},methods:{requestPermissions(){this.browserRequestOpen=!0,o.H.permissions.request(this.permissions).then((t=>this.resolvePermissionRequest(t)),(t=>{console.error(t),this.resolvePermissionRequest(!1)}))},async resolvePermissionRequest(t){this.contentVisible=!1,await this.$nextTick(),this.resolve(t),this.$emit("dismiss")}}};i(41012);const r=(0,i(51900).Z)(a,s,[],!1,null,"124be135",null).exports},80714:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=function(){var t=this,e=t._self._c;return e("div",{ref:"wrapper",staticClass:"resize-wrapper",class:{"tr-height":t.height,"tr-width":t.width,"hide-overflow":t.hideOverflow&&(t.resizing||t.transitionActive)},style:{"--duration":t.resizeDuration+"ms","--transition-duration":(null===t.transitionDuration?t.duration:t.transitionDuration)+"ms",height:t.wrapperHeight,width:t.wrapperWidth},attrs:{"data-smooth-reflow-id":t.id,"data-test":"smooth-reflow","data-test-transitioning":t.resizing||t.transitionActive}},[t.transitionGroup?e("transition-group",t._g(t._b({directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}],attrs:{tag:"div"}},"transition-group",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2):e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}]},[e("transition",t._g(t._b({},"transition",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2)],1)],1)};s._withStripped=!0;var o=i(61706),n=i(42223),a=i(96046);const r={name:"SmoothReflow",directives:{ResizeSensor:o.Z},mixins:[n.Z],props:{height:{type:Boolean,default:!0},width:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},awaitAppsReady:{type:Boolean,default:!1},duration:{type:Number,default:500},transitionDuration:{type:Number,default:null},nested:{type:Boolean,default:!1},hideOverflow:{type:Boolean,default:!1},transition:{type:String,default:"smooth-height-fade"},transitionGroup:{type:Boolean,default:!1},debug:{type:Boolean,default:!1},firstTransitionDisabled:{type:Boolean,default:!1}},data:()=>({id:Math.random().toString(36).substring(7),wrapperHeightPx:null,wrapperWidthPx:null,auto:!0,resizing:!1,transitionActive:!1,ancestors:[],resizedOnce:!1}),computed:{awaitingAppsReady(){return this.awaitAppsReady&&!a.Z.appsReady},transitionDisabled(){return this.auto||this.disabled||this.awaitingAppsReady},transitionProps(){return{name:this.transition,duration:this.awaitingAppsReady?0:null===this.transitionDuration?this.duration:this.transitionDuration}},wrapperHeight(){return!this.height||this.transitionDisabled?"auto":this.wrapperHeightPx+"px"},wrapperWidth(){return this.width?this.transitionDisabled?"auto":this.wrapperWidthPx+"px":""},resizeDuration(){return this.firstTransitionDisabled&&!this.resizedOnce?0:null===this.transitionDuration?this.duration:this.transitionActive?this.transitionDuration:this.duration}},watch:{transitionDisabled(t){t||this.setExplicitDimensions()}},created(){this.transitionHooks={beforeEnter:this.beforeEnter,enter:this.enter,afterEnter:this.afterEnter,enterCancelled:this.enterCancelled,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.afterLeave,leaveCancelled:this.leaveCancelled},this.$e.$on("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$on("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},mounted(){this.nested?(this.$nextTick(this.findSmoothReflowAncestors),setTimeout((()=>{this.auto=!1,this.setExplicitDimensions()}),500)):(this.auto=!1,this.setExplicitDimensions())},destroyed(){this.$e.$off("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$off("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},methods:{async handleResize(t){this.transitionDisabled||this.height&&!this.width&&this.wrapperHeightPx===t.height||!this.height&&this.width&&this.wrapperWidthPx===t.width||this.height&&this.width&&this.wrapperHeightPx===t.height&&this.wrapperWidthPx===t.width||(this.resizing=!0,clearTimeout(this.timeout),this.nested&&this.ancestors.length&&(this.ancestors.forEach((t=>this.$e.$emit("pauseSmoothReflow:"+t))),await this.$nextTick()),this.height&&(this.wrapperHeightPx=t.height),this.width&&(this.wrapperWidthPx=t.width),this.timeout=setTimeout((()=>{this.nested&&this.ancestors.length&&this.ancestors.forEach((t=>this.$e.$emit("resumeSmoothReflow:"+t))),this.resizing=!1,this.afterResize()}),this.duration))},findSmoothReflowAncestors(){let t,e=!0;for(;e;)t=(t&&t.parentElement||this.$el.parentElement).closest("[data-smooth-reflow-id]"),t?this.ancestors.push(t.getAttribute("data-smooth-reflow-id")):e=!1},pauseSmoothReflow(){this.auto=!0},resumeSmoothReflow(){this.auto=!1,this.setExplicitDimensions()},setExplicitDimensions(){this.$refs.wrapper&&(this.height&&(this.wrapperHeightPx=this.$refs.wrapper.clientHeight),this.width&&(this.wrapperWidthPx=this.$refs.wrapper.clientWidth))},afterResize(){this.resizedOnce=!0,this.$emit("afterResize")},beforeEnter(t){this.transitionActive=!0,this.$emit("beforeEnter",t)},enter(t){this.$emit("enter",t)},afterEnter(t){this.transitionActive=!1,this.$emit("afterEnter",t)},enterCancelled(t){this.$emit("afterEnter",t)},beforeLeave(t){this.transitionActive=!0,this.$emit("beforeLeave",t)},leave(t){this.$emit("leave",t)},afterLeave(t){this.transitionActive=!1,this.$emit("afterLeave",t)},leaveCancelled(t){this.$emit("leaveCancelled",t)}}};i(68866);const d=(0,i(51900).Z)(r,s,[],!1,null,"51387419",null).exports},41012:(t,e,i)=>{var s=i(7353);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,i(45346).Z)("48a40820",s,!1,{})},68866:(t,e,i)=>{var s=i(32121);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,i(45346).Z)("f2afe32c",s,!1,{ssrId:!0})},75356:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTE2LjYgOC42TDEyIDEzLjIgNy40IDguNiA2IDEwbDYgNiA2LTZ6Ii8+PC9zdmc+"}}]);