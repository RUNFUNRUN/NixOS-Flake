"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[5985,8200],{99437:(e,t,o)=>{o.d(t,{Z:()=>g});var n=o(20144),s=o(88026),a=o(51726),i=o.n(a),l=o(34952),d=o(7838),c=o(81452);let u={};const r={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),u[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",u[e.dataset.mobileClickHandlerId]),delete u[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};var b=o(28692),Z=o(64398);n.ZP.use(s.Z,{name:"unreactive"}),n.ZP.use(i()),n.ZP.use(l.InlineSvgPlugin),n.ZP.use(b.og),n.ZP.prototype.$xhr=c.Z,n.ZP.prototype.$e=d.Z,n.ZP.directive("mobile-click",r),new n.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode,bookmarksSettings:m.models.bookmarksSettings})}),n.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin},pinia:Z.Z});const g=n.ZP},18955:(e,t,o)=>{o.r(t);var n=o(99437),s=o(54699);if(!m.modals){const e=new n.Z({render:e=>e(s.Z)}).$mount();document.querySelector(".apps .full").appendChild(e.$el)}},40531:(e,t,o)=>{o.d(t,{Fl:()=>a,Jr:()=>d,ax:()=>l});var n=o(99437);const s=new n.Z.observable({}),a=new Proxy(s,{get:(e,t)=>(e.hasOwnProperty(t)||n.Z.set(e,t,m.models.customization.getComputedSetting(t)),e[t]),set:()=>(console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'),!1)}),i=new n.Z.observable({}),l=new Proxy(i,{get:(e,t)=>(e.hasOwnProperty(t)||n.Z.set(e,t,m.models.customization.get(t)),e[t]),set:(e,t,o)=>(m.models.customization.save(t,o),n.Z.set(e,t,o),!0)});function d(e={}){Object.entries(e).forEach((([e,t])=>n.Z.set(i,e,t))),m.models.customization.save(e)}m.models.customization.on("change",(e=>{e&&("balanceModeStr"in e.changed&&Object.entries(m.models.customization.attributes).forEach((([e,t])=>n.Z.set(s,e,t))),Object.entries(e.changed).forEach((([e,t])=>{s[e]=m.models.customization.getComputedSetting(e),n.Z.set(i,e,t)})))})),m.on("customization:update",(e=>{e.forEach((e=>{const t=m.models.customization.getComputedSetting(e);n.Z.set(s,e,t),n.Z.set(i,e,t)}))}))}}]);