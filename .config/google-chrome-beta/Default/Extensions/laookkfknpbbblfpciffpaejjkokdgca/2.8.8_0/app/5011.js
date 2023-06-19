(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[5011],{65550:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n=new(i(20144).ZP.extend({name:"GlobalKeyEventManager",data:()=>({events:{}}),methods:{registerEventListener(t,e,i,n){this.events.hasOwnProperty(e)?this.events[e].hasOwnProperty(i)||(this.events[e][i]=[]):(this.events[e]={},this.events[e][i]=[],this._addListener(e)),this.events[e][i].push({id:t,handler:n})},removeEventListener(t,e,i){if(!this.events.hasOwnProperty(e))return void(m.utils.isDev()&&console.warn(`No event listeners registered with event type: ${e} to remove`));if(!this.events[e].hasOwnProperty(i))return void(m.utils.isDev()&&console.warn(`No event listeners registered with keyCode: ${i} to remove`));let n=this.events[e][i].findIndex((e=>e.id===t));-1!==n?(this.events[e][i].splice(n,1),this._cleanupIfEmpty(e,i)):m.utils.isDev()&&console.warn(`No event listeners registered with id: ${t} to remove`)},_cleanupIfEmpty(t,e){this.events[t][e].length||delete this.events[t][e],Object.keys(this.events[t]).length||(delete this.events[t],this._removeListener(t))},_addListener(t){window.addEventListener(t,this._eventRouter)},_removeListener(t){window.removeEventListener(t,this._eventRouter)},_eventRouter(t){if(m.tourActive)return;if(!this.events.hasOwnProperty(t.type))return;if(!this.events[t.type].hasOwnProperty(t.keyCode))return;let e=this.events[t.type][t.keyCode];e[e.length-1].handler(t)}}}))},51281:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var n=i(8081),s=i.n(n),a=i(23645),o=i.n(a)()(s());o.push([t.id,"\n/* stylelint-disable */\n.app-popup[data-v-c6a81e44] { --window-edge-padding: 11px; --origin-inset: 0px; --top: auto; --bottom: auto; --right: auto; --left: auto; height: calc(100vh - (var(--origin-inset) + var(--window-edge-padding))); width: var(--width); position: absolute !important; z-index: 2; top: var(--top); bottom: var(--bottom); right: var(--right); left: var(--left); pointer-events: none;\n}\n.app-popup.focused[data-v-c6a81e44] { z-index: 4;\n}\n.app[data-v-c6a81e44] { height: auto; min-height: auto; max-height: 100%; max-width: none; position: absolute !important; top: var(--app-top); bottom: var(--app-bottom); right: 0; left: 0; display: flex; flex-direction: column; align-items: stretch; background-color: var(--color-bg); border-radius: var(--border-radius); pointer-events: auto;\n}\n.fullscreen:not(.animating) .app[data-v-c6a81e44], .fullscreen:not(.animating) .app[data-v-c6a81e44] > * { border-radius: 0;\n}\n.animating .app[data-v-c6a81e44] { transition: transform 0.2s ease, opacity 0.2s ease, top 0.2s ease-in-out, right 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out;\n}\n.animating .app[data-v-c6a81e44] > * { opacity: 0;\n}\n.app[data-v-c6a81e44] > * { transition: opacity var(--opacity-anim-duration) ease-in-out;\n}\n.nipple-top-left[data-v-c6a81e44]:after, .nipple-bottom-left[data-v-c6a81e44]:after { left: var(--nipple-displacement);\n}\n.nipple-top-right[data-v-c6a81e44]:after, .nipple-bottom-right[data-v-c6a81e44]:after { right: var(--nipple-displacement);\n}\n\t\t/* This needs to be in this component (or general stylesheet) or else the transition won't work when the component is async. I don't know why. */\n.slide-down-fade-enter-active[data-v-c6a81e44], .slide-down-fade-leave-active[data-v-c6a81e44], .slide-up-fade-enter-active[data-v-c6a81e44], .slide-up-fade-leave-active[data-v-c6a81e44] { transition: transform 0.2s ease, opacity, 0.2s ease, inset 0s;\n} /* inset 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.slide-down-fade-enter[data-v-c6a81e44], .slide-down-fade-leave-to[data-v-c6a81e44] { opacity: 0; transform: translateY(-3px);\n}\n.slide-up-fade-enter[data-v-c6a81e44], .slide-up-fade-leave-to[data-v-c6a81e44] { opacity: 0; transform: translateY(3px);\n}\n@media screen and (max-width: 450px) {\n.app-popup[data-v-c6a81e44] { height: var(--app-max-height); max-width: 95vw !important; position: fixed !important;\n}\n.top-row .app-popup[data-v-c6a81e44] { top: var(--app-offset);\n}\n.bottom-row .app-popup[data-v-c6a81e44] { bottom: var(--app-offset);\n}\n.top-left .app-popup[data-v-c6a81e44], .bottom-left .app-popup[data-v-c6a81e44] { right: auto; left: var(--app-offset);\n}\n.top-right .app-popup[data-v-c6a81e44], .bottom-right .app-popup[data-v-c6a81e44] { right: var(--app-offset); left: auto;\n}\n.slide-down-fade-enter-active[data-v-c6a81e44], .slide-down-fade-leave-active[data-v-c6a81e44], .slide-up-fade-enter-active[data-v-c6a81e44], .slide-up-fade-leave-active[data-v-c6a81e44] { transition: transform 0.2s ease, opacity, 0.2s ease, inset 0s;\n} /* inset 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.slide-down-fade-enter[data-v-c6a81e44], .slide-down-fade-leave-to[data-v-c6a81e44] { opacity: 0; transform: translateY(calc(var(--app-translate-amount) * -1));\n}\n.slide-up-fade-enter[data-v-c6a81e44], .slide-up-fade-leave-to[data-v-c6a81e44] { opacity: 0; transform: translateY(var(--app-translate-amount));\n}\n}\n\n",""]);const r=o},44238:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.updateContentMaxHeight,expression:"updateContentMaxHeight"}],ref:"app-wrapper",staticClass:"app-popup nipple",class:[{animating:t.animating,fullscreen:t.fullscreenClass,focused:t.focused},t.nippleClass],style:[{"--width":t.width+"px","--content-max-height":null===t.dimensions.maxHeight?"":t.dimensions.maxHeight+"px","--nipple-displacement":t.shiftedNippleDisplacement+"px"},t.positionCss]},[e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.updateDimensions,expression:"updateDimensions"}],ref:"app",staticClass:"app popup",style:[t.fullScreenStyle,{overflow:t.overflow}],attrs:{"data-test":"app-popup"}},[t._t("default")],2)])};n._withStripped=!0;var s=i(61706),a=i(65550),o=i(96046);const r={name:"AppPopup",doNotWaitForMount:!0,directives:{ResizeSensor:s.Z},unreactive:()=>({halfNippleWidth:m.constants.nippleWidthPx/2}),provide(){return{appDimensions:this.dimensions}},props:{nippleDisplacement:{type:Number,default:m.constants.nippleDisplacementPx},width:{type:Number,default:300},overflow:{type:String,default:"auto"},position:{type:String,required:!0},detailedPosition:{type:Object,default:null},region:{type:[String,Array],required:!0},fullscreenAnimDuration:{type:Number,default:200},fullscreen:{type:Boolean,default:!1},hideAppsExclusions:{type:String,default:""},focused:{type:Boolean,default:!1}},data:()=>({flipHorizontalPosition:!1,shiftByPx:0,instantTransition:!1,inset:{top:null,right:null,bottom:null,left:null},animating:!1,fullscreenClass:!1,dimensions:{maxHeight:null,width:null,height:null}}),computed:{windowWidth:()=>o.Z.windowDimensions.width,fullScreenStyle(){const t={...this.inset,position:this.positionFixed?"fixed !important":"absolute","transition-duration":this.instantTransition?"0s":this.fullscreenAnimDuration+"ms","--opacity-anim-duration":this.fullscreenAnimDuration/2+"ms"};return this.positionFixed&&Object.assign(t,{width:"auto !important",height:"auto !important","max-height":"100vh",overflow:"hidden"}),t},positionFixed(){return null!==this.inset.left},positionArray(){const t=this.position.split("-");return this.flipHorizontalPosition&&(t[1]=m.utils.getOppositePosition(t[1])),t},nippleClass(){return["nipple"].concat(this.positionArray.map(m.utils.getOppositePosition)).join("-")},positionCss(){const t=m.utils.getOppositePosition(this.positionArray[0]),e=this.detailedPosition||{[t]:this.$mobile?"0":"100%",[m.utils.getOppositePosition(this.positionArray[1])]:"50%"};return Object.entries(e).reduce(((t,[e,i])=>(["left","right"].includes(e)?"number"==typeof i?i=i-(this.flipHorizontalPosition?this.width-2*this.nippleDisplacement:0)-this.shiftByPx:"string"==typeof i&&(i=`calc(${i} - ${this.nippleDisplacement-this.shiftByPx}px)`):(t["--app-"+e]=0,t["--app-"+m.utils.getOppositePosition(e)]="auto"),t["--"+e]="number"==typeof i?i+"px":i,t)),{"--origin-inset":`var(--${t})`})},shiftedNippleDisplacement(){return this.nippleDisplacement-this.halfNippleWidth-this.shiftByPx}},watch:{fullscreen(t){t?(a.Z.registerEventListener("exitFullscreen","keyup",27,(()=>{this.$emit("update:fullscreen",!1)})),this.enterFullscreen()):(a.Z.removeEventListener("exitFullscreen","keyup",27),this.exitFullscreen())},async windowWidth(){this.shiftByPx=0,await this.$nextTick(),this.shiftByPx=this.getShiftPx()}},mounted(){this.flipHorizontalPosition=this.shouldFlipHorizontalPosition(),this.$nextTick((()=>this.shiftByPx=this.getShiftPx())),this.hideOverlappingWidgets(),this.updateContentMaxHeight(),this.updateDimensions()},created(){a.Z.registerEventListener("closeApp","keyup",27,this.close)},destroyed(){a.Z.removeEventListener("closeApp","keyup",27),m.widgetManager.refocusOverlap(this.region)},methods:{updateDimensions({height:t,width:e}={}){if(void 0===t||void 0===e){const i=this.$refs.app;t=i.clientHeight,e=i.clientHeight}this.dimensions.height=t,this.dimensions.width=e},updateContentMaxHeight({height:t}={}){var e;void 0===t&&(t=null===(e=this.$refs["app-wrapper"])||void 0===e?void 0:e.clientHeight),this.dimensions.maxHeight=t},shouldFlipHorizontalPosition(){const t=this.$refs.app&&this.$refs.app.getBoundingClientRect();return!!t&&t.left<0&&t.right-window.innerWidth>t.left},getShiftPx(){const t=m.constants.dashboardSidePaddingPx,e=this.$refs.app&&this.$refs.app.getBoundingClientRect();return e?"left"===this.positionArray[1]?e.left<t?e.left-t:Math.max(e.right-(window.innerWidth-t),0):e.right>window.innerWidth-t?window.innerWidth-e.right-t:Math.max(-1*(e.left-t),0):0},close(){this.$emit("close")},hideOverlappingWidgets(){var t,e;let i=(null===(t=this.$refs.view)||void 0===t?void 0:t.scrollHeight)||(null===(e=this.$refs.loading)||void 0===e?void 0:e.scrollHeight);i&&m.widgetManager.unfocusOverlap(this.region,i)},async enterFullscreen(){m.widgetManager.hideApps({exemptionSelectors:this.hideAppsExclusions}),this.animating=!0,await m.utils.delay(this.fullscreenAnimDuration/2),this.fullscreenClass=!0,this.instantTransition=!0,this.inset=this.getFixedRectInset(),await m.utils.doubleRaf(),this.instantTransition=!1,this.inset={left:0,right:0,top:0,bottom:0},await m.utils.delay(this.fullscreenAnimDuration),this.animating=!1,await m.utils.delay(this.fullscreenAnimDuration/2)},async exitFullscreen(){m.widgetManager.showApps(),this.animating=!0,await m.utils.delay(this.fullscreenAnimDuration/2),this.instantTransition=!0,this.inset={left:null,right:null,top:null,bottom:null},await this.$nextTick();const t=this.getFixedRectInset();this.inset={left:0,right:0,top:0,bottom:0},await m.utils.doubleRaf(),this.instantTransition=!1,this.fullscreenClass=!1,this.inset=t,await m.utils.delay(this.fullscreenAnimDuration),this.instantTransition=!0,this.inset={left:null,right:null,top:null,bottom:null},await m.utils.doubleRaf(),this.instantTransition=!1,this.animating=!1,await m.utils.delay(this.fullscreenAnimDuration/2)},getFixedRectInset(){const t=this.$refs.app;if(!t)return{left:0,right:0,top:0,bottom:0};let e=t.getBoundingClientRect();return{top:e.y+"px",right:window.innerWidth-e.right+"px",bottom:window.innerHeight-e.bottom+"px",left:e.x+"px"}}}};i(83038);const p=(0,i(51900).Z)(r,n,[],!1,null,"c6a81e44",null).exports},83038:(t,e,i)=>{var n=i(51281);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,i(45346).Z)("c05b5532",n,!1,{ssrId:!0})},49710:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K"}}]);