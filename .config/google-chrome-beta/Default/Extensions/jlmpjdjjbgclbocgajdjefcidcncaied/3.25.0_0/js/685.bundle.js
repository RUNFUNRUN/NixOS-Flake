"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[685],{1796:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(86484),a=n.n(r),o=n(35776),u=n(94184),l=n.n(u),i=n(62835),c=n(30435),s=n(69065),f=n(38050),d=n(82546),m=n(32210),p=n(25763),v=n(18608),y=n(43197);function h(e,t,n,r,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}const b=function(e){let t=e.parentComment,n=e.input,r=e.children,u=e.errorMessage,b=e.onInput,g=e.sendComment,x=e.parentSelector,E=e.useUserMentionOptions,w=e.isComment,k=void 0===w||w;const O=t.authorImage,I=t.authorName,C=t.publishDate,S=t.contentHtml,N=t.editContent,M=t.post,P=(0,o.useContext)(i.ZP).user,j=E.onMentionClick,D=E.onMentionKeypress,z=E.offset,Z=E.mentions,A=E.mentionQuery,T=E.selected,L=E.commentRef,q=E.onInputClick;(0,o.useEffect)((()=>{const e=L.current;if(!e)return;e.focus();const t=n||N;t&&(e.value=t,e.setSelectionRange(e.value.length,e.value.length)),e.setAttribute("data-min-height",e.offsetHeight.toString()),(0,p.n)(e)}),[]);const K=function(){var e,t=(e=a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,y.qc)(t)&&D(t.key,t);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){h(o,r,a,u,l,"next",e)}function l(e){h(o,r,a,u,l,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}();(0,o.useEffect)((()=>{var e;null!=Z&&Z.length||null==L||null===(e=L.current)||void 0===e||e.focus()}),[Z,L]);const B=null!=C?C:M.createdAt;return o.default.createElement(o.default.Fragment,null,o.default.createElement("article",{className:"flex flex-col items-stretch rounded-8 break-words-overflow typo-callout"},o.default.createElement("header",{className:"flex items-center mb-2"},o.default.createElement(f.YY,{size:"large",rounded:k?"full":void 0,user:{image:O,username:I},nativeLazyLoading:!0}),o.default.createElement("div",{className:"flex flex-col ml-2"},o.default.createElement("div",{className:"truncate typo-callout"},I),o.default.createElement("time",{dateTime:B.toString(),className:"text-theme-label-tertiary typo-callout"},(0,c.Pe)(B)))),k&&o.default.createElement(d.Z,{content:S})),k&&o.default.createElement("div",{className:"flex items-center px-2 h-11"},o.default.createElement("div",{className:"ml-3 w-px h-full bg-theme-divider-tertiary"}),o.default.createElement("div",{className:"ml-6 text-theme-label-secondary typo-caption1"},"Reply to"," ",o.default.createElement("strong",{className:"font-bold text-theme-label-primary"},I))),o.default.createElement("div",{className:l()("flex relative flex-1",k?"pl-2":"mt-3")},k&&o.default.createElement(f.YY,{user:P,size:"small",nativeLazyLoading:!0}),o.default.createElement("textarea",{className:l()("flex-1 text-theme-label-primary bg-transparent border-none caret-theme-label-link break-words typo-subhead resize-none",s.Z.textarea,k&&"ml-3"),defaultValue:n,ref:L,placeholder:"Share your thoughts",onInput:e=>{const t=e.target;(0,p.n)(t),b((0,v.X)(t.value)),D(e.data,e)},onKeyDown:e=>{if((e.ctrlKey||e.metaKey)&&e.key===y.SO.Enter&&null!=n&&n.length)return g(e);return(e.key===y.SO.Enter||y.IJ.includes(e.key))&&null!=Z&&Z.length?e.preventDefault():e.stopPropagation()},onKeyUp:K,onClick:q,onPaste:e=>{e.preventDefault();const t=e.clipboardData.getData("text/plain");document.queryCommandSupported("insertText")?document.execCommand("insertText",!1,t):document.execCommand("paste",!1,t)},tabIndex:0,"aria-label":"New comment box","aria-multiline":!0})),o.default.createElement(m.l,{elementRef:L,offset:z,mentions:Z,selected:T,query:A,appendTo:x,onMentionClick:j}),o.default.createElement("div",{className:"my-2 mx-3 text-theme-status-error typo-caption1",style:{minHeight:"1rem"}},u&&o.default.createElement("span",{role:"alert"},u)),r)}},41718:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(35776),a=n(58953),o=n(1796),u=n(52250),l=n(26990),i=n(19366),c=n(23833),s=n(25782),f=n(25763);const d=["tabName","children","submitAction"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const v=function(e){let t=e.tabName,n=e.children,v=e.submitAction,y=p(e,d);const h=y.parentComment.post,b=(0,f.v)({postId:h.id,sourceId:h.source.id,onInput:y.onInput});return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.u_.Body,{view:t},r.default.createElement(o.Z,m({},y,{useUserMentionOptions:b}),n)),r.default.createElement(a.u_.Footer,{justify:u.WD.Between,view:t},r.default.createElement(l.z,{className:"btn-tertiary",buttonSize:l.q.Small,icon:r.default.createElement(i.Z,null),onClick:b.onInitializeMention}),r.default.createElement("div",{className:"-ml-2 w-px h-6 border border-opacity-24 border-theme-divider-tertiary"}),r.default.createElement(c.D,{tag:"a",href:s.dT,className:"typo-caption1",defaultTypo:!1,target:"_blank"},"Markdown supported"),v))}},11491:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(35776),a=n(50540),o=n(39572),u=n(58953);const l=["tabName","children"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s=e=>{let t=e.tabName,n=e.children,s=c(e,l);const f=(0,r.useContext)(o.LO).activeView;return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.u_.Body,{view:t},r.default.createElement(a.Z,i({},s,{enabled:f===t}))),r.default.createElement(u.u_.Footer,{view:t},n))}},25763:(e,t,n)=>{n.d(t,{n:()=>g,v:()=>x});var r=n(86484),a=n.n(r),o=n(88767),u=n(35776),l=n(45909),i=n(50562),c=n(62835),s=n(17291),f=n(18608),d=n(43197),m=n(38577),p=n(77803);function v(e,t,n,r,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){v(o,r,a,u,l,"next",e)}function l(e){v(o,r,a,u,l,"throw",e)}u(void 0)}))}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const g=e=>{const t=e.getAttribute("data-min-height"),n=parseInt(t,10);e.style.height="auto",e.style.height=`${Math.max(e.scrollHeight,n)}px`};function x(e){let t=e.postId,n=e.sourceId,r=e.onInput;const v=(0,u.useRef)(null),b=(0,u.useContext)(c.ZP).user,x=(0,o.useQueryClient)(),E=h((0,u.useState)(0),2),w=E[0],k=E[1],O=h((0,u.useState)([0,0]),2),I=O[0],C=O[1],S=h((0,u.useState)([0,0]),2),N=S[0],M=S[1],P=h((0,u.useState)(),2),j=P[0],D=P[1],z=["user-mention",t,n,j],Z=(0,p.Y)().requestMethod,A=(0,o.useQuery)(z,(()=>Z(i.B3,l.IP,{postId:t,query:j,sourceId:n},{requestKey:JSON.stringify(z)})),{enabled:!!b&&void 0!==j,refetchOnWindowFocus:!1,refetchOnMount:!1}),T=A.data,L=void 0===T?{recommendedMentions:[]}:T,q=A.refetch,K=(L||{}).recommendedMentions,B=h((0,s.Z)(q,100),1)[0],F=function(){var e=y(a().mark((function e(t){var n,r,o,u,l,i,c,s,f,p,y;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Y3)();case 2:if(n=v.current,r=(0,d.FN)(n),o=h(r,2),u=o[0],l=o[1],i=(0,d.qx)(n,[u,l]),c=h(i,3),s=c[0],f=c[1],p=c[2],s){e.next=8;break}return null==t||t(),e.abrupt("return");case 8:if(y=(0,d.gW)(n),f!==j){e.next=11;break}return e.abrupt("return");case 11:D(f),M([p,l]),C(y);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=e=>{if(null==K||!K.length)return;const t=v.current,n=`@${j}`,a=`@${e}`;(0,d.Oc)(t,N,n,a);const o=(0,d.kC)(t.value,N);t.focus(),t.selectionEnd=o+a.length,D(void 0),x.setQueryData(z,[]),r(t.value),g(t),v.current.focus()},Y=e=>{const t=(0,d.oz)(e,N),n=""===j&&""===t||j===t||0===e.value.length?void 0:t;D(n),B()},$=()=>{F((()=>D(void 0)))},J=function(){var e=y(a().mark((function e(t,n){var r,o,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d.JW.includes(t)){e.next=2;break}return e.abrupt("return",$());case 2:if(r=t===d.SO.Backspace||n.inputType&&d.$q.includes(n.inputType),o=t===d.SO.Enter||n.inputType===d.z7.InsertLineBreak,void 0!==j){e.next=8;break}if((0,f.bJ)(null!=t?t:"")||"@"===t||r){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",F());case 8:if(!d.IJ.includes(t)){e.next=11;break}return(a=t)===d.CD.Up&&w>0?k(w-1):a===d.CD.Down&&w<K.length-1&&k(w+1),e.abrupt("return",n.preventDefault());case 11:if(" "!==t){e.next=13;break}return e.abrupt("return",D(void 0));case 13:if(!o){e.next=16;break}return n.preventDefault(),e.abrupt("return",R(K[w].username));case 16:return e.next=18,(0,m.Y3)();case 18:if(!r){e.next=20;break}return e.abrupt("return",Y(v.current));case 20:return u=(0,f.xJ)(t)?void 0:(0,d.oz)(v.current,N),D(u),u&&B(),e.abrupt("return",null);case 24:case"end":return e.stop()}var a}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=()=>{if(void 0!==j||!v.current)return;const e=v.current,t=e.selectionStart,n=e.value.substring(0,t),r=e.value.substring(t);e.value=`${n} @ ${r}`,e.focus(),e.selectionEnd=t+2,e.dispatchEvent(new InputEvent("input",{data:"@"}))};return(0,u.useEffect)((()=>{var e;const t=e=>{if(e.stopPropagation(),void 0===j)return;const t=e.target,n="textarea"===t.tagName.toLocaleLowerCase(),r=(0,d.tD)(t,"tippy-content");n||r||D(void 0)},n=null===(e=v.current)||void 0===e?void 0:e.getRootNode();return null==n||n.addEventListener("mousedown",t),()=>{null==n||n.removeEventListener("mousedown",t)}}),[j]),(0,u.useEffect)((()=>{k(0)}),[j]),(0,u.useMemo)((()=>({commentRef:v,offset:I,selected:w,mentions:K,mentionQuery:j,onInputClick:$,onMentionClick:R,onMentionKeypress:J,onInitializeMention:H})),[v,I,w,K,j])}},69065:(e,t,n)=>{n.d(t,{Z:()=>r});const r={textarea:"pHs55g3CTxDyGKaBpi3tcg=="}}}]);