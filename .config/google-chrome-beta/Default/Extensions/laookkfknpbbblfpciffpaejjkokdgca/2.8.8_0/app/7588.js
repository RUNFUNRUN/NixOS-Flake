(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7588],{99437:(e,t,o)=>{"use strict";o.d(t,{Z:()=>w});var n=o(20144),a=o(88026),r=o(51726),s=o.n(r),d=o(34952),l=o(7838),i=o(81452);let c={};const u={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};var p=o(28692),v=o(64398);n.ZP.use(a.Z,{name:"unreactive"}),n.ZP.use(s()),n.ZP.use(d.InlineSvgPlugin),n.ZP.use(p.og),n.ZP.prototype.$xhr=i.Z,n.ZP.prototype.$e=l.Z,n.ZP.directive("mobile-click",u),new n.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode,bookmarksSettings:m.models.bookmarksSettings})}),n.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin},pinia:v.Z});const w=n.ZP},3599:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var n=o(8081),a=o.n(n),r=o(23645),s=o.n(r)()(a());s.push([e.id,".full-screen-portals[data-v-3c658925]{position:absolute;inset:0 0 0 0}.full-screen-portals .toast-menu-portal[data-v-3c658925]>*{z-index:45}",""]);const d=s},24594:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var n=o(8081),a=o.n(n),r=o(23645),s=o.n(r)()(a());s.push([e.id,".dropdown-portal[data-v-941116ea]>*{z-index:50}.dropdown-portal[data-v-941116ea] .base-dropdown-container.app{--dropdown-color: var(--color-text);--dropdown-background-color: var(--color-accent-highlight)}.dropdown-portal[data-v-941116ea] .base-dropdown-container.dash{--dropdown-color: var(--color-text);--dropdown-background-color: var(--color-bg)}",""]);const d=s},7588:(e,t,o)=>{"use strict";o.r(t);var n=o(99437),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"full-screen-portals"},[t("portal-target",{staticClass:"toast-menu-portal",attrs:{"data-test":e.TOAST_MENU_PORTAL_DATA_TEST,name:"toast-menu-portal"}}),e._v(" "),t("dropdown-portal")],1)};a._withStripped=!0;const r={32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1};var s=o(72433),d=function(){return(0,this._self._c)("portal-target",{staticClass:"dropdown-portal",attrs:{"data-test":this.DROPDOWN_PORTAL_DATA_TEST,name:"dropdown-portal",multiple:""}})};d._withStripped=!0;const l={name:"DropdownPortal",components:{PortalTarget:s.YC},unreactive:()=>({DROPDOWN_PORTAL_DATA_TEST:"dropdown-portal"}),mounted(){this.setUpDropdownListeners()},destroyed(){this.removeDropdownListeners()},methods:{setUpDropdownListeners(){window.addEventListener("dragstart",this.emitDropdownCloseEvent),window.addEventListener("wheel",this.emitDropdownCloseEvent),window.addEventListener("touchmove",this.emitDropdownCloseEvent),window.addEventListener("keydown",this.checkScrollKeyAndEmitCloseEvent)},removeDropdownListeners(){window.removeEventListener("dragstart",this.emitDropdownCloseEvent),window.removeEventListener("wheel",this.emitDropdownCloseEvent),window.removeEventListener("touchmove",this.emitDropdownCloseEvent),window.removeEventListener("keydown",this.checkScrollKeyAndEmitCloseEvent)},emitDropdownCloseEvent(e){this.$e.$emit("dropdown:close",e)},checkScrollKeyAndEmitCloseEvent(e){r[e.keyCode]&&this.emitDropdownCloseEvent(e)}}};o(65406);var i=o(51900);const c={name:"FullScreenPortals",components:{DropdownPortal:(0,i.Z)(l,d,[],!1,null,"941116ea",null).exports,PortalTarget:s.YC},unreactive:()=>({TOAST_MENU_PORTAL_DATA_TEST:"dropdown-portal"})};o(82125);const m=(0,i.Z)(c,a,[],!1,null,"3c658925",null).exports;new n.Z({render:e=>e(m)}).$mount(".full-screen-portals")},82125:(e,t,o)=>{var n=o(3599);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,o(45346).Z)("08fb1950",n,!1,{})},65406:(e,t,o)=>{var n=o(24594);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,o(45346).Z)("0e60f724",n,!1,{})}}]);