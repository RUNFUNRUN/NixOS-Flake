"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[5140],{85140:(e,i,t)=>{t.r(i),t.d(i,{default:()=>n,useTabsViewStateStore:()=>o});const o=(0,t(95756).v)("tabs",{list:{defaultView:!0,order:1},detail:{order:2}}),n=o},95756:(e,i,t)=>{t.d(i,{v:()=>c});var o=t(28692),n=t(20144),r=t(96046),s=t(63139),a=function(e,i,t,o){return new(t||(t=Promise))((function(n,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function a(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(s,a)}u((o=o.apply(e,i||[])).next())}))};const u=e=>Object.keys(e).find((i=>{var t;return null===(t=e[i])||void 0===t?void 0:t.defaultView})),c=(e,i)=>{const t=(0,o.Q_)(e+"ViewState",{state:()=>{var t;return{activeViewId:null!==(t=u(i))&&void 0!==t?t:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,fullscreen:!1,popupActive:!1,name:e}},getters:{activeView(e){const t=i[e.activeViewId];if(t)return t;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>s.Z.isOnTop(e)},actions:{focus(){s.Z.add(e)},setActiveView(e){return a(this,void 0,void 0,(function*(){if(yield this.beforeViewChange())if("default"===e){const e=u(i);if(!e)throw new Error("No view found with defaultView: true");this.activeViewId=e}else this.activeViewId=e}))},togglePopup(e){return a(this,void 0,void 0,(function*(){(yield this.beforeViewChange())&&(!e&&this.fullscreen&&(this.fullscreen=!1),yield n.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,this.popupActive||(this.resetBeforeViewChange(),this.confirmationProps=null,yield this.setActiveView("default")))}))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},setConfirmation(e){return a(this,void 0,void 0,(function*(){return new Promise((i=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>i(!0),this.confirmationProps.cancel=()=>i(!1)})).finally((()=>{this.confirmationProps=null}))}))}}}),c=(0,o.Jk)(t());return(0,n.YP)(c.popupActive,(i=>{i?s.Z.add(e):s.Z.remove(e)})),(0,n.YP)(c.confirmationProps,(i=>{(null==i?void 0:i.dashboardOverlay)&&s.Z.add(e,!0),r.Z.dashboardOverlayActive=!!(null==i?void 0:i.dashboardOverlay)})),t}}}]);