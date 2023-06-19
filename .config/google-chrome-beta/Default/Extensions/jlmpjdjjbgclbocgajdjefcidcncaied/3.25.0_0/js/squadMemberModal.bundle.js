"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[982,561],{83341:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(94184),o=r.n(n),a=r(35776),l=r(86548),c=r(89136),i=r(36876);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}const s=e=>{let t=e.className,r=e.content,n=e.Icon,s=e.iconProps;const m=!(0,c.Z)([i.Mq.replace("@media ","")],[!0],!1);return a.default.createElement("span",{className:o()("flex items-center tablet:ml-2 tablet:gap-0.5 tablet:typo-footnote ml-1 typo-caption2 font-bold capitalize",t)},"function"==typeof n&&a.default.createElement(n,u({size:m?l.J.XXSmall:void 0},s)),r)}},64975:(e,t,r)=>{r.d(t,{H:()=>s,Z:()=>m});var n=r(94184),o=r.n(n),a=r(35776),l=r(49003);const c=["children","placeholder","className","canFetchMore","isFetchingNextPage","fetchNextPage"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s=e=>{var t;return!e.isLoading&&!e.isFetchingNextPage&&e.hasNextPage&&(null===(t=e.data)||void 0===t?void 0:t.pages.length)>0};const m=function(e){let t=e.children,r=e.placeholder,n=e.className,s=e.canFetchMore,m=e.isFetchingNextPage,d=e.fetchNextPage,f=u(e,c);const p=(0,l.Z)({fetchPage:d,canFetchMore:s});return a.default.createElement("div",i({},f,{className:o()("flex relative flex-col",n)}),t,m&&r,a.default.createElement("div",{className:"absolute bottom-0 left-0 w-px h-px opacity-0 pointer-events-none",ref:p}))}},68875:(e,t,r)=>{r.r(t),r.d(t,{ContextMenu:()=>m,default:()=>s});var n=r(35776),o=r(42343),a=r(57751),l=r(77314);const c=["options"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e){return n.default.createElement(a.Z,null,n.default.createElement(o.v2,e))}const m=e=>{let t=e.options,r=u(e,c);return n.default.createElement(s,i({disableBoundariesCheck:!0,className:"menu-primary",animation:"fade"},r),t.map((e=>{let t=e.text,r=e.icon,a=e.action,c=e.anchorProps;return n.default.createElement(o.ck,{key:t,className:"typo-callout",onClick:a},n.default.createElement(l.Z,{condition:!!c,wrapper:e=>n.default.createElement("a",c,e)},n.default.createElement("span",{className:"flex gap-2 items-center w-full typo-callout"},r," ",t)))})))}},74485:(e,t,r)=>{r.r(t),r.d(t,{SquadMemberModal:()=>W,default:()=>Q});var n=r(35776),o=r(58953),a=r(47393),l=r(70516),c=r(64975),i=r(42343);var u,s=r(86484),m=r.n(s),d=r(62835),f=r(77553),p=r(25782),b=r(86548),y=r(60622),h=r(36070),v=r(79182),g=r(69282),P=r(77405),x=r(39572),O=r(68875),k=r(33793),E=r(32713);function w(e,t,r,n,o,a,l){try{var c=e[a](l),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,o)}!function(e){e.PromoteToAdmin="Make admin",e.PromoteToModerator="Promote to moderator",e.DemoteToModerator="Demote to moderator",e.DemoteToMember="Demote to member",e.BlockMember="Block member"}(u||(u={}));const M={[u.PromoteToAdmin]:(e,t)=>`${e} will get the same permissions as you have. Making someone an admin will not replace you as the admin of ${t}. You can reverse this decision later.`,[u.PromoteToModerator]:e=>`${e} will now get moderator permissions and be able to remove posts and members from your Squad. You can reverse this decision later.`,[u.DemoteToModerator]:e=>`${e} will no longer have admin permissions. You can always reverse this decision later.`,[u.DemoteToMember]:e=>`${e} will lose the moderator permissions and become a regular member.`,[u.BlockMember]:(e,t)=>`${e} will be blocked and will no longer have access to ${t}. They will not be able to rejoin unless you unblock them.`},j={[u.BlockMember]:"Member has been blocked"},S=(e,t)=>{const r={text:u.PromoteToAdmin,icon:n.default.createElement(h.r7,{size:b.J.Small}),action:t(a.Pt.Admin,u.PromoteToAdmin)},o={text:u.PromoteToModerator,icon:n.default.createElement(h.tB,{size:b.J.Small}),action:t(a.Pt.Moderator,u.PromoteToModerator)},l={text:u.DemoteToModerator,icon:n.default.createElement(y.Z,{size:b.J.Small}),action:t(a.Pt.Moderator,u.DemoteToModerator)},c={text:u.DemoteToMember,icon:n.default.createElement(v.Z,{size:b.J.Small}),action:t(a.Pt.Member,u.DemoteToMember)};return e.role===a.Pt.Admin?[l,c]:e.role===a.Pt.Moderator?[r,c]:[r,o]};function N(e){let t=e.squad,r=e.member,o=e.onUpdateRole;const l=(0,n.useContext)(d.ZP).user,c=(0,g.G)().showPrompt,i=(0,E.sW)().displayToast,s=function(){var e,a=(e=m().mark((function e(a,l){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({title:`${l}?`,description:M[l](r.user.name,t.name),okButton:{title:l,className:"btn-primary-cabbage"},content:n.default.createElement(P.z,{user:r.user,disableTooltip:!0,className:{container:"py-3 px-6 justify-center",textWrapper:"max-w-fit"}}),promptSize:x.Cg.Small,className:{buttons:"mt-6"}});case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,o({sourceId:t.id,memberId:r.user.id,role:a});case 7:j[l]&&i(j[l]);case 8:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function l(e){w(a,n,o,l,c,"next",e)}function c(e){w(a,n,o,l,c,"throw",e)}l(void 0)}))});return function(e,t){return a.apply(this,arguments)}}(),h=(0,n.useMemo)((()=>{if(!r)return[];const e=(e,t)=>()=>s(e,t),o=[],c=(0,k.P4)(t,a.gm.MemberRoleUpdate);if(c){const t=S(r,e);o.push(...t)}o.push({text:"Report member",icon:n.default.createElement(f.Z,{size:b.J.Small}),anchorProps:{href:`${p.o2}#user_id=${l.id}&reportee_id=${null==r?void 0:r.user.id}&squad_id=${t.id}`,className:"flex items-center w-full",rel:"noopener noreferrer",target:"_blank"}});return(c||(0,k.P4)(t,a.gm.MemberRemove)&&r.role===a.Pt.Member)&&o.push({text:u.BlockMember,icon:n.default.createElement(y.Z,{size:b.J.Small}),action:e(a.Pt.Blocked,u.BlockMember)}),o}),[r]);return n.default.createElement(O.ContextMenu,{options:h,id:"squad-member-menu-context"})}var A=r(15098),C=r(72107),T=r(64505),z=r(52250),Z=r(8370),B=r(26990),I=r(85708),q=r(36583),$=r(23576);function F(e,t,r,n,o,a,l){try{var c=e[a](l),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,o)}const L=function(e){let t=e.member,r=e.onUnblock,o=e.onOptionsClick;const l=(0,g.G)().showPrompt,c=(0,E.sW)().displayToast,i=(0,d.Eu)().user,u=t.role,s=t.user,f=function(){var e,t=(e=m().mark((function e(t){var o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o={title:"Unblock member?",description:`${s.name} will now have access to join your Squad and can then post, upvote and comment`,okButton:{title:"Unblock",className:"btn-primary-cabbage"},content:n.default.createElement(P.z,{disableTooltip:!0,user:s,className:{container:"py-3 px-6 justify-center",textWrapper:"max-w-fit"}}),promptSize:x.Cg.Small,className:{buttons:"mt-6"}},e.next=4,l(o);case 4:if(!e.sent){e.next=7;break}r(t),c("Member is now unblocked");case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function l(e){F(a,n,o,l,c,"next",e)}function c(e){F(a,n,o,l,c,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();if(u===a.Pt.Blocked)return n.default.createElement(q.i,{content:"Unblock"},n.default.createElement(B.z,{className:"my-auto btn-tertiary",icon:n.default.createElement(y.Z,null),onClick:f}));const p=n.default.createElement(q.i,{content:"Member options"},n.default.createElement(B.z,{buttonSize:B.q.Small,className:"m-auto mr-0 btn-tertiary",iconOnly:!0,onClick:o,icon:n.default.createElement(I.Z,null)})),b=i.id===s.id;return u!==a.Pt.Member?n.default.createElement(n.default.Fragment,null,n.default.createElement($.Z,{className:b?"mr-10":"mr-2",role:t.role}),b?null:p):b?null:p},U=["squad"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D.apply(this,arguments)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function R(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var X;!function(e){e.AllMembers="Squad members",e.BlockedMembers="Blocked members"}(X||(X={}));const H=e=>{let t=e.squad;const r=(0,T.J)({squad:t,origin:A.aP.SquadMembersList}),o=r.copying,l=r.trackAndCopyLink;return(0,k.P4)(t,a.gm.Invite)?n.default.createElement("button",{type:"button",disabled:o,className:"flex justify-start items-center py-3 px-6 hover:bg-theme-hover",onClick:()=>{l()}},n.default.createElement(z.bA,{className:"mr-4 w-12 h-12 bg-theme-float rounded-10"},n.default.createElement(C.Z,{size:b.J.Large,className:"text-salt-90"})),n.default.createElement("p",{className:"text-salt-90 typo-callout"},"Copy invitation link")):null};function W(e){let t=e.squad,r=R(e,U);const u=_((0,n.useState)(null),2),s=u[0],m=u[1],d=_((0,n.useState)(null),2),f=d[0],p=d[1],h=function(e){let t=e.id;const r=(0,i.av)({id:t}).show;return{onMenuClick:e=>{const t=e.currentTarget.getBoundingClientRect(),n=t.right,o=t.bottom;r(e,{position:{x:n,y:o+4}})}}}({id:"squad-member-menu-context"}).onMenuClick,v=(0,Z.n)({squad:t,membersQueryParams:{role:s},membersQueryEnabled:!0}),g=v.members,P=v.membersQueryResult,x=v.onUnblock,O=v.onUpdateRole;return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Z,D({},r,{kind:o.u_.Kind.FixedCenter,title:"Squad members",tabs:Object.values(X),header:(0,k.P4)(t,a.gm.ViewBlockedMembers)?n.default.createElement(o.u_.Header.Tabs,{onTabClick:e=>m(e===X.BlockedMembers?a.Pt.Blocked:null)}):null,scrollingProps:{isFetchingNextPage:P.isFetchingNextPage,canFetchMore:(0,c.H)(P),fetchNextPage:P.fetchNextPage},userListProps:{additionalContent:(e,r)=>n.default.createElement(L,{member:g[r],onUnblock:()=>x({sourceId:t.id,memberId:e.id}),onOptionsClick:e=>((e,t)=>{p(t),h(e)})(e,g[r])}),emptyPlaceholder:n.default.createElement(z.bA,{className:"flex-col h-full"},n.default.createElement(y.Z,{secondary:!0,size:b.J.XXXLarge}),n.default.createElement("p",{className:"text-theme-label-secondary typo-body"},"No blocked members found")),isLoading:P.isLoading,initialItem:s===a.Pt.Blocked?void 0:n.default.createElement(H,{squad:t})},users:null==g?void 0:g.map((e=>e.user))})),n.default.createElement(N,{squad:t,member:f,onUpdateRole:O}))}const Q=W},70516:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(35776),o=r(58953),a=r(41664),l=r.n(a),c=r(98710);const i=5;function u(e){let t=e.placeholderAmount;const r=t<=i?t:i;return n.default.createElement("div",{className:"flex flex-col"},Array(r).fill(0).map(((e,t)=>n.default.createElement(c.x,{key:t}))))}var s=r(77405),m=r(64975);const d=["placeholderAmount","scrollingProps","users","additionalContent","initialItem","isLoading","emptyPlaceholder"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const b=function(e){let t=e.placeholderAmount,r=e.scrollingProps,o=e.users,a=e.additionalContent,c=e.initialItem,i=e.isLoading,b=e.emptyPlaceholder,y=p(e,d);const h=n.default.createElement(u,{placeholderAmount:t});return null!=o&&o.length?n.default.createElement(m.Z,f({},r,{"aria-label":"users-list",placeholder:h}),!!c&&c,o.map(((e,t)=>n.default.createElement(l(),{key:e.username,href:e.permalink},n.default.createElement(s.z,f({},y,{tag:"a",href:e.permalink,user:e}),null==a?void 0:a(e,t)))))):i?h:null!=b?b:h},y=["users","title","header","scrollingProps","placeholderAmount","size","userListProps"];function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const x=function(e){let t=e.users,r=e.title,a=e.header,l=e.scrollingProps,c=e.placeholderAmount,i=e.size,u=void 0===i?o.u_.Size.Medium:i,s=e.userListProps,m=P(e,y);const d=(0,n.useRef)(),f=v((0,n.useState)(),2),p=f[0],g=f[1];return n.default.createElement(o.u_,h({contentRef:e=>g(e),kind:o.u_.Kind.FlexibleCenter,size:u},m),null!=a?a:n.default.createElement(o.u_.Header,{title:r}),n.default.createElement(o.u_.Body,{className:"py-2 px-0",ref:d},n.default.createElement(b,h({},s,{users:t,scrollingProps:l,scrollingContainer:d.current,appendTooltipTo:p,placeholderAmount:c}))))}},23576:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(35776),o=r(94184),a=r.n(o),l=r(47393),c=r(36070),i=r(83341);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}const s={[l.Pt.Moderator]:c.tB,[l.Pt.Admin]:c.r7},m=e=>{let t=e.role,r=e.className,o=e.iconProps;const l=s[t];if(!l)return null;return n.default.createElement(i.Z,{className:a()("text-theme-color-cabbage",r),content:t,Icon:e=>n.default.createElement(l,u({secondary:!0},e)),iconProps:o})}},57751:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(35776);const o=function(e){let t=e.children;return(0,n.createPortal)(t,document.body)}}}]);