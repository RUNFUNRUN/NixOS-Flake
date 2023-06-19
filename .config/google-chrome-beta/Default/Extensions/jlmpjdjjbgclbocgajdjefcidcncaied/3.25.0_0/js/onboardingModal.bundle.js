"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[108],{21832:(e,t,r)=>{r.d(t,{w:()=>d});var n=r(35776),a=r(94184),l=r.n(a);const o={knob:"pC7qPQgBxYa1kns0GxtmqA=="};function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const s=(0,r(32256).Z)("span","relative flex items-center justify-center z-2 px-3"),u="transform transition-transform text-base",f="text-theme-label-tertiary",m="scale-125";function d(e){let t=e.className,r=e.inputId,a=e.name,i=e.checked,d=e.onToggle,p=e.leftContent,h=e.rightContent;const y=(0,n.useRef)(),g=(0,n.useRef)(),b=c((0,n.useState)(0),2),v=b[0],E=b[1],w=c((0,n.useState)(0),2),x=w[0],O=w[1];(0,n.useEffect)((()=>{if(null==y||!y.current||null==g||!g.current)return;const e=y.current.getBoundingClientRect().width;E(e);const t=g.current.getBoundingClientRect().width;O(t)}),[null==y?void 0:y.current,null==g?void 0:g.current]);const C=l()(u,i?f:m),F=l()(u,i?m:f),N=i?x:v,S=Math.abs(x-v);return n.default.createElement("label",{className:l()("group relative flex h-9 w-fit cursor-pointer typo-callout font-bold",t),htmlFor:r},n.default.createElement("input",{id:r,name:a,type:"checkbox",className:"absolute w-0 h-0 opacity-0",checked:i,onChange:d}),n.default.createElement(s,{ref:y,className:i&&"text-theme-label-tertiary"},"string"==typeof p?p:n.default.cloneElement(p,{className:l()(p.props.className,C)})),n.default.createElement(s,{ref:g,className:!i&&"text-theme-label-tertiary"},"string"==typeof h?h:n.default.cloneElement(h,{className:l()(h.props.className,F)})),n.default.createElement("span",{className:"absolute inset-0 my-auto h-7 bg-cabbage-50 rounded-10 opacity-24 group-hover:opacity-32"}),n.default.createElement("span",{className:l()("absolute  top-0 h-full rounded-xl z-1",o.knob),style:{width:`${N}px`,transform:i?`translateX(calc(100% + ${S}px))`:"translateX(0)"}}))}},20335:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Pe});var n=r(35776),a=r(38061),l=r(26990),o=r(58953),c=r(52250),i=r(897),s=r(94184),u=r.n(s),f=r(32256),m=r(93428);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){let t=e.style,r=void 0===t?{}:t,a=e.className,l=e.children;return n.default.createElement("div",{className:u()("h-full bg-gradient-to-l from-[#C73EF407] to-[#3C44FF]",a),style:p(p({},r),{},{paddingLeft:"28px"})},l)}const g="absolute right-0 bottom-0 pt-6 pl-7 rounded-14 w-36",b=(0,f.Z)("span","flex flex-1 p-2 pl-4 w-full h-full rounded-tl-14"),v=n.default.createElement(b,{className:"bg-gradient-to-l from-[#00000044] to-[#000000]",style:{boxShadow:"-8px -8px 22px #00000040"}},n.default.createElement(m.Z,{className:"w-6 h-3",style:{fill:"#FFFFFF"}})),E=n.default.createElement(y,{className:g},v),w=n.default.createElement(b,{className:"bg-gradient-to-l from-[#FFFFFF44] to-[#FFFFFF]",style:{boxShadow:"-8px -8px 22px #FFFFFF40"}},n.default.createElement(m.Z,{className:"w-6 h-3",style:{fill:"#000000"}})),x=y,O=["option","onChange"];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function F(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const N={dark:E,light:n.default.createElement(y,{className:g},w),auto:n.default.createElement(x,{className:"grid grid-cols-2 gap-4 pt-6 ml-auto w-36 rounded-14"},w,v)};const S=function(e){let t=e.option,r=e.onChange,a=F(e,O);return n.default.createElement("label",{htmlFor:t.value,className:"flex overflow-hidden relative flex-row items-center pl-4 w-full h-24 rounded-14 hover:cursor-pointer bg-theme-divider-tertiary"},n.default.createElement(i.R,C({},a,{name:"theme",id:t.value,value:t.value,onChange:()=>r(t.value),className:"my-0.5 truncate"}),t.label),N[t.value])};var k=r(33007);const j=function(e){let t=e.topIcon,r=e.title,a=e.description,l=e.children,c=e.className,i=void 0===c?{}:c;return n.default.createElement(o.u_.Body,{className:u()("flex flex-col pt-8 px-0 pb-0",i.container)},t,"string"!=typeof r?r:n.default.createElement(k.k,null,r),a&&n.default.createElement("p",{className:"px-6 mt-3 text-center text-theme-label-secondary typo-body"},a),n.default.createElement("div",{className:u()("flex-1",i.content)},l))};var P=r(39572);const z=function(){const e=(0,n.useContext)(a.ZP),t=e.themeMode,r=e.setTheme,i=(0,n.useContext)(P.LO).onRequestClose;return n.default.createElement(o.u_.StepsWrapper,{view:k.X.Theme},(e=>{let s=e.activeStepIndex,u=e.previousStep,f=e.nextStep;return n.default.createElement(n.default.Fragment,null,n.default.createElement(j,{title:"Your eyes don’t lie",description:"daily.dev looks good in dark mode or in light mode, the choice is yours!",className:{content:"grid grid-cols-1 gap-6 mt-11 px-11"}},a.np.map((e=>n.default.createElement(S,{key:e.label,option:e,value:t,onChange:r,checked:e.value===t})))),n.default.createElement(o.u_.Footer,{justify:c.WD.Between},n.default.createElement(l.z,{className:"btn-tertiary",onClick:0===s?i:u},1===s?"Close":"Back"),n.default.createElement(l.z,{className:"bg-theme-color-cabbage",onClick:f},"Next")))}))};var _=r(21144),A=r(53699),I=r(63031);const M=(0,f.Z)("div","group-hover:z-0 absolute inset-0 w-full h-full rounded-14 bg-theme-status-cabbage transition-transform"),T={grid:n.default.createElement(n.default.Fragment,null,n.default.createElement(M,{className:"-z-1 opacity-64 group-hover:-rotate-12"}),n.default.createElement(M,{className:"opacity-24 -z-2 group-hover:-rotate-[24deg]"})),list:n.default.createElement(M,{className:"hidden group-hover:flex opacity-64"})},L={grid:{container:"justify-center w-full aspect-square hover:bg-theme-color-cabbage",check:"top-1 right-1",text:"typo-callout"},list:{container:"pl-4 w-full h-[3.75rem]",check:"right-4",text:"typo-body"}},R=e=>{let t=e.layout,r=e.isActive;const a=u()("absolute rounded-full",L[t].check,r&&"bg-theme-status-invert-cabbage");return r?n.default.createElement(I.Z,{className:a}):t===_.pN.List?n.default.createElement(A.Z,{className:a}):null};const Z=function(e){let t=e.topic,r=e.isActive,a=e.topicLayout,l=void 0===a?_.pN.Grid:a,o=e.onClick;const c=T[l];return n.default.createElement("button",{type:"button",onClick:o,className:u()("relative flex max-w-[8rem] min-w-[8rem] tablet:min-w-full items-center rounded-14 typo-callout group transition-[background] hover:shadow-2-black",r?"bg-theme-color-cabbage":"bg-theme-divider-tertiary",L[l].container)},c,n.default.createElement(R,{layout:l,isActive:r}),n.default.createElement("span",{className:u()("z-1 p-1 w-full break-words",L[l].text)},null==t?void 0:t.title))};var B=r(26346),D=r(47307),V=r(67625),X=r(15098),q=r(36583);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const Y={grid:"tablet:grid-cols-3 grid-cols-2",list:"grid-cols-1"};const J=function(){const e=U((0,n.useState)(null),2),t=e[0],r=e[1],a=U((0,n.useState)({}),2),i=a[0],s=a[1],f=(0,n.useContext)(B.Z),m=f.onboardingFiltersLayout,d=f.onboardingMinimumTopics,p=(0,V.ZP)().tagsCategories,h=(0,D.Z)({origin:X.aP.TagsFilter}),y=h.onFollowTags,g=h.onUnfollowTags,b=(0,n.useContext)(P.LO).onRequestClose;return n.default.createElement(o.u_.StepsWrapper,{view:k.X.Topics},(e=>{let a=e.activeStepIndex,f=e.previousStep,h=e.nextStep;return n.default.createElement(n.default.Fragment,null,n.default.createElement(j,{title:"Choose topics to follow",description:"Pick topics you are interested in. You can always change these later.",className:{container:"px-0 pb-0",content:"p-4 mt-1 mb-4 flex flex-row justify-center overflow-x-hidden"}},n.default.createElement("div",{className:u()("grid gap-4 w-fit tablet:w-full",Y[m])},null==p?void 0:p.map((e=>n.default.createElement(Z,{key:e.title,topic:e,isActive:i[e.id],topicLayout:m,onClick:n=>((e,n)=>{const a=!i[n],l=a?y:g,o=p.find((e=>e.id===n));l({tags:o.tags,category:o.title});const c=W(W({},i),{},{[n]:a});s(c),e.currentTarget.blur(),t&&r(null)})(n,e.id)}))))),n.default.createElement(o.u_.Footer,{justify:c.WD.Between},n.default.createElement(l.z,{className:"btn-tertiary",onClick:0===a?b:f},0===a?"Close":"Back"),n.default.createElement(q.i,{forceLoad:!0,content:t,visible:!!t,container:{className:"w-36 text-center",paddingClassName:"py-4 px-3"}},n.default.createElement(l.z,{className:"bg-theme-color-cabbage",onClick:e=>((e,t)=>{const n=i,a=Object.values(n).filter((e=>!!e)).length>=d;return a?t(e):(r(a?null:`Choose at least ${d} ${"topic"+(d>1?"s":"")} to follow`),null)})(e,h)},"Next"))))}))};var Q,K,ee=r(84558),te=r(21832),re=r(86548);function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ne.apply(this,arguments)}const ae=function(e){return n.createElement("svg",ne({width:"1em",height:"1em",viewBox:"0 0 306 254",xmlns:"http://www.w3.org/2000/svg",className:"icon"},e),Q||(Q=n.createElement("defs",null,n.createElement("linearGradient",{x1:"100%",y1:"15.55%",x2:"8.707%",y2:"84.45%",id:"cards_svg__a"},n.createElement("stop",{stopColor:"#383C47",offset:"0%"}),n.createElement("stop",{stopColor:"#383C47",offset:"0%"}),n.createElement("stop",{stopColor:"#17191F",offset:"100%"})))),K||(K=n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M8 0h77a8 8 0 018 8v103a8 8 0 01-8 8H8a8 8 0 01-8-8V8a8 8 0 018-8zm0 135h77a8 8 0 018 8v103a8 8 0 01-8 8H8a8 8 0 01-8-8V143a8 8 0 018-8zm107 0h77a8 8 0 018 8v103a8 8 0 01-8 8h-77a8 8 0 01-8-8V143a8 8 0 018-8zm106 0h77a8 8 0 018 8v103a8 8 0 01-8 8h-77a8 8 0 01-8-8V143a8 8 0 018-8zM115 0h77a8 8 0 018 8v103a8 8 0 01-8 8h-77a8 8 0 01-8-8V8a8 8 0 018-8zm106 0h77a8 8 0 018 8v103a8 8 0 01-8 8h-77a8 8 0 01-8-8V8a8 8 0 018-8z",fill:"url(#cards_svg__a)"}),n.createElement("rect",{fill:"#5F6571",x:9,y:58,width:75,height:50,rx:8}),n.createElement("rect",{fill:"#5F6571",x:9,y:11,width:75,height:10,rx:5}),n.createElement("rect",{fill:"#5F6571",x:9,y:26,width:55,height:10,rx:5}),n.createElement("g",{opacity:.8,transform:"translate(116 11)",fill:"#5F6571"},n.createElement("rect",{y:47,width:75,height:50,rx:8}),n.createElement("rect",{width:75,height:10,rx:5}),n.createElement("rect",{y:15,width:55,height:10,rx:5})),n.createElement("g",{opacity:.7,transform:"translate(222 11)",fill:"#5F6571"},n.createElement("rect",{y:47,width:75,height:50,rx:8}),n.createElement("rect",{width:75,height:10,rx:5}),n.createElement("rect",{y:15,width:55,height:10,rx:5})),n.createElement("g",{opacity:.6,transform:"translate(222 146)",fill:"#5F6571"},n.createElement("rect",{y:47,width:75,height:50,rx:8}),n.createElement("rect",{width:75,height:10,rx:5}),n.createElement("rect",{y:15,width:55,height:10,rx:5})),n.createElement("g",{opacity:.5,transform:"translate(116 146)",fill:"#5F6571"},n.createElement("rect",{y:47,width:75,height:50,rx:8}),n.createElement("rect",{width:75,height:10,rx:5}),n.createElement("rect",{y:15,width:55,height:10,rx:5})),n.createElement("g",{opacity:.3,transform:"translate(9 146)",fill:"#5F6571"},n.createElement("rect",{y:47,width:75,height:50,rx:8}),n.createElement("rect",{width:75,height:10,rx:5}),n.createElement("rect",{y:15,width:55,height:10,rx:5})))))};var le,oe;function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ce.apply(this,arguments)}const ie=function(e){return n.createElement("svg",ce({width:"1em",height:"1em",viewBox:"0 0 288 262",xmlns:"http://www.w3.org/2000/svg",className:"icon"},e),le||(le=n.createElement("defs",null,n.createElement("linearGradient",{x1:"100%",y1:"8.62%",x2:"8.707%",y2:"91.38%",id:"list_svg__a"},n.createElement("stop",{stopColor:"#383C47",offset:"0%"}),n.createElement("stop",{stopColor:"#383C47",offset:"0%"}),n.createElement("stop",{stopColor:"#17191F",offset:"100%"})))),oe||(oe=n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M8 0h272a8 8 0 018 8v30a8 8 0 01-8 8H8a8 8 0 01-8-8V8a8 8 0 018-8zm0 54h272a8 8 0 018 8v30a8 8 0 01-8 8H8a8 8 0 01-8-8V62a8 8 0 018-8zm0 54h272a8 8 0 018 8v30a8 8 0 01-8 8H8a8 8 0 01-8-8v-30a8 8 0 018-8zm0 54h272a8 8 0 018 8v30a8 8 0 01-8 8H8a8 8 0 01-8-8v-30a8 8 0 018-8zm0 54h272a8 8 0 018 8v30a8 8 0 01-8 8H8a8 8 0 01-8-8v-30a8 8 0 018-8z",fill:"url(#list_svg__a)"}),n.createElement("rect",{fill:"#5F6571",x:11,y:18,width:187,height:10,rx:5}),n.createElement("rect",{fill:"#5F6571",opacity:.4,x:11,y:180,width:195,height:10,rx:5}),n.createElement("rect",{fill:"#5F6571",x:11,y:72,width:158,height:10,rx:5}),n.createElement("rect",{fill:"#5F6571",opacity:.3,x:11,y:234,width:177,height:10,rx:5}),n.createElement("rect",{fill:"#5F6571",opacity:.7,x:11,y:126,width:167,height:10,rx:5}))))};function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se.apply(this,arguments)}const ue=e=>n.default.createElement(re.Z,se({},e,{IconPrimary:ae,IconSecondary:ie}));function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return me(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return me(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const de=function(){const e=(0,n.useContext)(a.ZP),t=e.insaneMode,r=e.toggleInsaneMode,i=fe((0,n.useState)(t),2),s=i[0],f=i[1],m=(0,n.useContext)(P.LO).onRequestClose;return(0,n.useEffect)((()=>{t!==s&&setTimeout((()=>{r()}),300)}),[s,t]),n.default.createElement(o.u_.StepsWrapper,{view:k.X.Layout},(e=>{let r=e.activeStepIndex,a=e.previousStep,i=e.nextStep;return n.default.createElement(n.default.Fragment,null,n.default.createElement(j,{title:"Cards or list?",description:"Customize the look of your feed by choosing whether to view posts as cards or as a list.",className:{container:"items-center",content:u()("relative flex flex-col items-center w-4/5 pt-8 overflow-y-hidden",t&&"p-8")}},n.default.createElement("img",{className:"absolute top-2 left-2",src:ee.n.feedFilters.recommended,alt:"Pointing at the recommended layout"}),n.default.createElement(te.w,{inputId:"feed_layout",name:"feed_layout",leftContent:"Cards",rightContent:"List",checked:s,onToggle:()=>f(!s)}),n.default.createElement(ue,{style:{width:"100%",height:"100%"},secondary:t})),n.default.createElement(o.u_.Footer,{justify:c.WD.Between},n.default.createElement(l.z,{className:"btn-tertiary",onClick:0===r?m:a},0===r?"Close":"Back"),n.default.createElement(l.z,{className:"bg-theme-color-cabbage",onClick:i},"Next")))}))};var pe=r(23833),he=r(62835),ye=r(87328);const ge=function(e){let t=e.onClose;const r=(0,he.Eu)(),a=r.showLogin,i=r.user;return n.default.createElement(o.u_.StepsWrapper,{view:k.X.Intro},(e=>{let r=e.nextStep;return n.default.createElement(n.default.Fragment,null,n.default.createElement(j,{title:n.default.createElement(k.k,null,"Make the feed,",n.default.createElement("span",{className:"ml-1 text-theme-color-cabbage"},"your feed.")),description:"Supercharge your feed with content you'll love reading!",className:{container:"overflow-hidden",content:"relative flex flex-col items-center"}},n.default.createElement("span",{className:"flex flex-1"}),n.default.createElement("div",{style:{backgroundImage:`url(${ee.n.feedFilters.yourFeed})`},className:"absolute -top-4 w-full h-full bg-cover"}),!i&&n.default.createElement("span",{className:"flex py-10"},"Already a member?",n.default.createElement(pe.D,{className:"z-0 ml-1.5 font-bold",onClick:()=>a(ye.IP.Onboarding,{isLogin:!0})},"Log in"))),n.default.createElement(o.u_.Footer,{justify:c.WD.Between},n.default.createElement(l.z,{className:"btn-tertiary",onClick:t},"Skip"),n.default.createElement(l.z,{className:"bg-theme-color-cabbage",onClick:r},"Continue")))}))};var be=r(38e3),ve=r(89647),Ee=r(48185),we=r(49788),xe=r(27052),Oe=r(69282);const Ce=["onRegistrationSuccess","onRequestClose","mode","shouldSkipIntro"];function Fe(){return Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fe.apply(this,arguments)}function Ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ke(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const je={title:"Quit personalization?",description:"You will lose any personalization preferences you have chosen if you quit. Continue to personalize your feed?",okButton:{title:"Quit"},cancelButton:{title:"Continue"},className:{cancel:"btn-secondary",ok:"btn-primary-ketchup"}};const Pe=function(e){let t=e.onRegistrationSuccess,r=e.onRequestClose,a=e.mode,l=void 0===a?ve.LM.Manual:a,c=e.shouldSkipIntro,i=void 0!==c&&c,s=ke(e,Ce);const u=(0,n.useContext)(be.ZP).trackEvent,f=(0,Oe.G)().showPrompt,m=Ne((0,n.useState)(!1),2),d=m[0],p=m[1],h=(0,n.useContext)(B.Z),y=h.onboardingSteps,g=h.onboardingMinimumTopics,b=Ne((0,n.useState)(i?y[0]:k.X.Intro),2),v=b[0],E=b[1],w=Ne((0,n.useState)(we.u.Default),2),x=w[0],O=w[1],C=(e,t)=>t?r(e):f(je).then((t=>{t&&(e=>{d&&u({event_name:ye.FF.CloseSignUp,extra:JSON.stringify({trigger:X.Pv.CreateFeedFilters,screenValue:x})}),l===ve.LM.Auto&&u({event_name:X.s6.OnboardingSkip,extra:JSON.stringify({screen_value:v})}),r(e)})(e)})),F=(0,Ee.Z)({onDiscard:C}),N=F.onContainerChange,S=F.formRef,j={intro:null,topics:n.default.createElement(J,{key:k.X.Topics}),layout:n.default.createElement(de,{key:k.X.Layout}),theme:n.default.createElement(z,{key:k.X.Theme})};(0,n.useEffect)((()=>{u({event_name:X.s6.Impression,target_type:X.Lm.MyFeedModal,target_id:_.o0.OnboardingVersion,extra:JSON.stringify({origin:l,steps:y,mandating_categories:g})})}),[]);const P=(0,n.useMemo)((()=>{const e=[];return i||e.push({key:k.X.Intro}),y.forEach((t=>{e.push({key:t})})),e}),[y,i]),A=d?n.default.createElement(n.default.Fragment,null,n.default.createElement(xe.Z,{className:"top-2 right-2 z-2",style:{position:"absolute"},onClick:C}),n.default.createElement(we.Z,{className:"h-full",onClose:C,formRef:S,onSuccessfulLogin:t,onSuccessfulRegistration:t,trigger:X.Pv.CreateFeedFilters,onDisplayChange:e=>O(e)})):n.default.createElement(n.default.Fragment,null,n.default.createElement(ge,{onClose:C}),y.map((e=>j[e])));return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.u_,Fe({},s,{kind:o.u_.Kind.FixedCenter,size:o.u_.Size.Small,overlayRef:N,steps:d?null:P,onViewChange:e=>{e||p(!0),E(e)},onTrackNext:X.s6.ClickOnboardingNext,onTrackPrev:X.s6.ClickOnboardingBack,onRequestClose:C}),A))}}}]);