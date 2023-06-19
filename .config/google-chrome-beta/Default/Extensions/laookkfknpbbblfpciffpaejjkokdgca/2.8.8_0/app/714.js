(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[714],{32121:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(8081),s=i.n(a),r=i(23645),n=i.n(r)()(s());n.push([t.id,"\n/* stylelint-disable */\n.resize-wrapper[data-v-51387419] { position: relative;\n}\n.resize-wrapper.tr-height[data-v-51387419] { transition: height var(--duration) ease;\n}\n.resize-wrapper.tr-width[data-v-51387419] { display: flex; justify-content: center; transition: width var(--duration) ease;\n}\n.resize-wrapper.tr-height.tr-width[data-v-51387419] { transition: height var(--duration) ease, width var(--duration) ease;\n}\n.resize-wrapper.hide-overflow[data-v-51387419] { overflow: hidden;\n}\n.resize-wrapper.tr-width > div[data-v-51387419] { width: fit-content;\n}\n[data-v-51387419] .smooth-height-fade-enter-active { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n[data-v-51387419] .smooth-height-fade-leave-active { position: absolute !important; top: 0; right: 0; left: 0; transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n[data-v-51387419] .smooth-height-fade-enter,[data-v-51387419] .smooth-height-fade-leave-to { opacity: 0;\n}\n[data-v-51387419] .smooth-width-fade-enter-active { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n[data-v-51387419] .smooth-width-fade-leave-active { position: absolute; top: 0; left: 50%; transform: translateX(-50%); transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n[data-v-51387419] .smooth-width-fade-enter,[data-v-51387419] .smooth-width-fade-leave-to { opacity: 0;\n}\n[data-v-51387419] .smooth-height-slide-left-enter-active,[data-v-51387419] .smooth-height-slide-left-leave-active,[data-v-51387419] .smooth-height-slide-right-enter-active,[data-v-51387419] .smooth-height-slide-right-leave-active { transition: transform 300ms ease;\n}\n[data-v-51387419] .smooth-height-slide-left-leave-active,[data-v-51387419] .smooth-height-slide-right-leave-active { position: absolute; top: 0; right: 0; left: 0;\n}\n[data-v-51387419] .smooth-height-slide-left-leave-to,[data-v-51387419] .smooth-height-slide-right-enter { transform: translateX(-100%);\n}\n[data-v-51387419] .smooth-height-slide-left-enter,[data-v-51387419] .smooth-height-slide-right-leave-to { transform: translateX(100%);\n}\n",""]);const o=n},80714:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>h});var a=function(){var t=this,e=t._self._c;return e("div",{ref:"wrapper",staticClass:"resize-wrapper",class:{"tr-height":t.height,"tr-width":t.width,"hide-overflow":t.hideOverflow&&(t.resizing||t.transitionActive)},style:{"--duration":t.resizeDuration+"ms","--transition-duration":(null===t.transitionDuration?t.duration:t.transitionDuration)+"ms",height:t.wrapperHeight,width:t.wrapperWidth},attrs:{"data-smooth-reflow-id":t.id,"data-test":"smooth-reflow","data-test-transitioning":t.resizing||t.transitionActive}},[t.transitionGroup?e("transition-group",t._g(t._b({directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}],attrs:{tag:"div"}},"transition-group",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2):e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}]},[e("transition",t._g(t._b({},"transition",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2)],1)],1)};a._withStripped=!0;var s=i(61706),r=i(42223),n=i(96046);const o={name:"SmoothReflow",directives:{ResizeSensor:s.Z},mixins:[r.Z],props:{height:{type:Boolean,default:!0},width:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},awaitAppsReady:{type:Boolean,default:!1},duration:{type:Number,default:500},transitionDuration:{type:Number,default:null},nested:{type:Boolean,default:!1},hideOverflow:{type:Boolean,default:!1},transition:{type:String,default:"smooth-height-fade"},transitionGroup:{type:Boolean,default:!1},debug:{type:Boolean,default:!1},firstTransitionDisabled:{type:Boolean,default:!1}},data:()=>({id:Math.random().toString(36).substring(7),wrapperHeightPx:null,wrapperWidthPx:null,auto:!0,resizing:!1,transitionActive:!1,ancestors:[],resizedOnce:!1}),computed:{awaitingAppsReady(){return this.awaitAppsReady&&!n.Z.appsReady},transitionDisabled(){return this.auto||this.disabled||this.awaitingAppsReady},transitionProps(){return{name:this.transition,duration:this.awaitingAppsReady?0:null===this.transitionDuration?this.duration:this.transitionDuration}},wrapperHeight(){return!this.height||this.transitionDisabled?"auto":this.wrapperHeightPx+"px"},wrapperWidth(){return this.width?this.transitionDisabled?"auto":this.wrapperWidthPx+"px":""},resizeDuration(){return this.firstTransitionDisabled&&!this.resizedOnce?0:null===this.transitionDuration?this.duration:this.transitionActive?this.transitionDuration:this.duration}},watch:{transitionDisabled(t){t||this.setExplicitDimensions()}},created(){this.transitionHooks={beforeEnter:this.beforeEnter,enter:this.enter,afterEnter:this.afterEnter,enterCancelled:this.enterCancelled,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.afterLeave,leaveCancelled:this.leaveCancelled},this.$e.$on("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$on("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},mounted(){this.nested?(this.$nextTick(this.findSmoothReflowAncestors),setTimeout((()=>{this.auto=!1,this.setExplicitDimensions()}),500)):(this.auto=!1,this.setExplicitDimensions())},destroyed(){this.$e.$off("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$off("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},methods:{async handleResize(t){this.transitionDisabled||this.height&&!this.width&&this.wrapperHeightPx===t.height||!this.height&&this.width&&this.wrapperWidthPx===t.width||this.height&&this.width&&this.wrapperHeightPx===t.height&&this.wrapperWidthPx===t.width||(this.resizing=!0,clearTimeout(this.timeout),this.nested&&this.ancestors.length&&(this.ancestors.forEach((t=>this.$e.$emit("pauseSmoothReflow:"+t))),await this.$nextTick()),this.height&&(this.wrapperHeightPx=t.height),this.width&&(this.wrapperWidthPx=t.width),this.timeout=setTimeout((()=>{this.nested&&this.ancestors.length&&this.ancestors.forEach((t=>this.$e.$emit("resumeSmoothReflow:"+t))),this.resizing=!1,this.afterResize()}),this.duration))},findSmoothReflowAncestors(){let t,e=!0;for(;e;)t=(t&&t.parentElement||this.$el.parentElement).closest("[data-smooth-reflow-id]"),t?this.ancestors.push(t.getAttribute("data-smooth-reflow-id")):e=!1},pauseSmoothReflow(){this.auto=!0},resumeSmoothReflow(){this.auto=!1,this.setExplicitDimensions()},setExplicitDimensions(){this.$refs.wrapper&&(this.height&&(this.wrapperHeightPx=this.$refs.wrapper.clientHeight),this.width&&(this.wrapperWidthPx=this.$refs.wrapper.clientWidth))},afterResize(){this.resizedOnce=!0,this.$emit("afterResize")},beforeEnter(t){this.transitionActive=!0,this.$emit("beforeEnter",t)},enter(t){this.$emit("enter",t)},afterEnter(t){this.transitionActive=!1,this.$emit("afterEnter",t)},enterCancelled(t){this.$emit("afterEnter",t)},beforeLeave(t){this.transitionActive=!0,this.$emit("beforeLeave",t)},leave(t){this.$emit("leave",t)},afterLeave(t){this.transitionActive=!1,this.$emit("afterLeave",t)},leaveCancelled(t){this.$emit("leaveCancelled",t)}}};i(68866);const h=(0,i(51900).Z)(o,a,[],!1,null,"51387419",null).exports},68866:(t,e,i)=>{var a=i(32121);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("f2afe32c",a,!1,{ssrId:!0})}}]);