(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1810,949],{40063:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});let i={};const s={bind:function(t,e){let a,s;t.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{t.dataset.justBoundClickOutsideHandler=!1}),100);const n=t=>{s=!1,(t=>t&&t.clientX>window.innerWidth)(t)?s=!0:a=t.target},o=i=>{s||(e.modifiers.bubble||!t.contains(a)&&!t.contains(i.target)&&t!==a&&t!==i.target&&"true"!==t.dataset.justBoundClickOutsideHandler)&&e.value(i)};t.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),t.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),i[t.dataset.clickOutsideMouseupHandlerId]=o,i[t.dataset.clickOutsideMousedownHandlerId]=n,document.addEventListener("mouseup",o),document.addEventListener("mousedown",n)},unbind:function(t){var e,a;null!==(e=t.dataset)&&void 0!==e&&e.clickOutsideMouseupHandlerId&&null!==(a=t.dataset)&&void 0!==a&&a.clickOutsideMousedownHandlerId&&(document.removeEventListener("mouseup",i[t.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",i[t.dataset.clickOutsideMousedownHandlerId]),delete i[t.dataset.clickOutsideMouseupHandlerId],delete i[t.dataset.clickOutsideMousedownHandlerId],delete t.dataset.clickOutsideMouseupHandlerId,delete t.dataset.clickOutsideMousedownHandlerId,delete t.dataset.justBoundClickOutsideHandler)}}},94366:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(8081),s=a.n(i),n=a(23645),o=a.n(n)()(s());o.push([t.id,"\n/* stylelint-disable */\n.search-wrapper[data-v-1f7a829d] { margin-right: 0;\n}\n.icon-search[data-v-1f7a829d] { height: auto; width: auto;\n}\n.icon-search[data-v-1f7a829d]:before { top: 49%;\n}\n.search-wrapper:focus-within .icon-search[data-v-1f7a829d]:before { opacity: var(--opacity-stop-6);\n}\n.icon-clear[data-v-1f7a829d] { opacity: 0; transition: var(--a-default);\n}\n.search-wrapper:focus-within .icon-clear[data-v-1f7a829d] { opacity: var(--opacity-stop-3);\n}\n.search-wrapper:hover .icon-clear[data-v-1f7a829d] { opacity: var(--opacity-stop-4);\n}\n",""]);const r=o},15894:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(8081),s=a.n(i),n=a(23645),o=a.n(n)()(s());o.push([t.id,"\n/* stylelint-disable */\n.app-view-switch[data-v-4b11beca] { min-height: 0; position: relative; display: flex; flex-direction: column;\n}\n.app-view-switch.transitioning[data-v-4b11beca] { overflow: hidden !important;\n}\n.app-view-switch > div[data-v-4b11beca] { min-height: 0; display: flex; flex-direction: column;\n}\n.app-view-switch > div[data-v-4b11beca] > * { min-height: 0;\n}\n.slide-left-enter-active[data-v-4b11beca],\n\t.slide-left-leave-active[data-v-4b11beca],\n\t.slide-right-enter-active[data-v-4b11beca],\n\t.slide-right-leave-active[data-v-4b11beca] { transition: transform 300ms ease;\n}\n.slide-left-leave-active[data-v-4b11beca], .slide-right-leave-active[data-v-4b11beca] { position: absolute; inset: 0;\n}\n.slide-left-leave-to[data-v-4b11beca], .slide-right-enter[data-v-4b11beca] { transform: translateX(-100%);\n}\n.slide-left-enter[data-v-4b11beca], .slide-right-leave-to[data-v-4b11beca] { transform: translateX(100%);\n}\n\n",""]);const r=o},32694:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(8081),s=a.n(i),n=a(23645),o=a.n(n)()(s());o.push([t.id,"\n/* stylelint-disable */\n.note-list-item[data-v-3856f9d4] { margin: 4px calc(var(--app-padding) / 2); padding: 4px calc(var(--app-padding) / 2); display: flex; flex-direction: column; gap: 2px; border-color: transparent; border-radius: var(--border-radius); cursor: pointer; overflow: auto;\n}\n.note-list-item[data-v-3856f9d4]:hover { background: var(--color-stop-1);\n}\n.note-list-item.active[data-v-3856f9d4] { background: var(--color-stop-2);\n}\n.title[data-v-3856f9d4] { font-size: 0.9375rem; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.bottom-row[data-v-3856f9d4] { height: auto; display: flex; gap: 6px; align-items: baseline;\n}\n.date[data-v-3856f9d4] { flex-shrink: 0; opacity: var(--opacity-stop-4); font-size: .75rem;\n}\n.body[data-v-3856f9d4] { min-width: 0; flex-grow: 1; opacity: var(--opacity-stop-5); font-size: 0.8125rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n\n",""]);const r=o},54906:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(8081),s=a.n(i),n=a(23645),o=a.n(n)()(s());o.push([t.id,"\n/* stylelint-disable */\n.note-pad[data-v-37d1101b] { height: 100%; flex-grow: 1; display: flex; flex-direction: column; overflow-y: auto;\n}\n.button[data-v-37d1101b] { margin-left: 8px; padding: 6px 16px; font-size: .75rem;\n}\ntextarea[data-v-37d1101b] { height: 100%; padding: var(--app-padding); padding-top: 2px; border: none;\n}\n",""]);const r=o},1910:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(8081),s=a.n(i),n=a(23645),o=a.n(n)()(s());o.push([t.id,"\n/* stylelint-disable */\n[data-v-003a4dc8] .app { --header-height: 53px; --sidebar-width: 200px; height: 520px; padding: 0;\n}\n\t/* z-index: 0; is for a safari specific bug where overflow hidden does not work with position absolute */\n.app-content[data-v-003a4dc8] { height: 100%; position: relative; z-index: 0; display: flex; border-radius: var(--border-radius); overflow: hidden;\n}\n.app-view-switch[data-v-003a4dc8] { width: var(--sidebar-width) !important;\n}\n.list-switcher[data-v-003a4dc8] { border-right: 1px solid var(--color-stop-2);\n}\n.list[data-v-003a4dc8] { --app-padding: 17px;\n}\n.notes-list .app-header[data-v-003a4dc8] { padding: 0 12px 0 6px;\n}\n.deleted-list .app-header[data-v-003a4dc8] { padding: 0 var(--app-padding);\n}\n.icon-back[data-v-003a4dc8] { height: 12px; position: relative; left: -1px;\n}\n.app-search[data-v-003a4dc8] { flex-grow: 1;\n}\n.deleted-description[data-v-003a4dc8] { padding: 0 var(--app-padding) calc(var(--app-padding) - 6px); opacity: var(--opacity-stop-5); font-size: .75rem; line-height: 1.4; text-align: center;\n}\n.note-detail[data-v-003a4dc8] { height: 100%; width: 0; flex-grow: 1;\n}\n.last-edited-title[data-v-003a4dc8] { opacity: var(--opacity-stop-4); font-size: .8125rem;\n}\n.delete-confirm[data-v-003a4dc8] { max-width: 250px; padding: calc(var(--app-padding) / 2) var(--app-padding);\n}\n.touch .delete-confirm[data-v-003a4dc8] { max-width: unset; padding: calc(var(--toast-padding) / 2) var(--toast-padding);\n}\n.buttons[data-v-003a4dc8] { margin-top: 16px; display: flex; gap: 8px;\n}\n.touch .buttons > *[data-v-003a4dc8] { flex-grow: 1; text-align: center;\n}\n.button-neutral[data-v-003a4dc8] { --color-button: var(--color-stop-3); --color-button-hover: var(--color-stop-4); --color-button-active: var(--color-stop-4);\n}\n.note-detail[data-v-003a4dc8] .app-body { --app-padding: 25px; height: 0; padding-bottom: 0; flex-grow: 1; display: flex;\n}\n.fullscreen .list-switcher[data-v-003a4dc8] { --sidebar-width: 250px; margin-right: calc(0px - var(--sidebar-width)); transform: translateX(-100%); transition: var(--a-default);\n}\n.fullscreen.sidebar-open .list-switcher[data-v-003a4dc8] { margin-right: 0; transform: none;\n}\n.sidebar-toggle[data-v-003a4dc8] { opacity: 0; pointer-events: none; transition: var(--a-default);\n}\n.fullscreen .sidebar-toggle[data-v-003a4dc8] { opacity: 1; pointer-events: all;\n}\n.fullscreen.sidebar-open .sidebar-toggle .icon[data-v-003a4dc8] { opacity: var(--opacity-stop-5);\n}\n.fullscreen.sidebar-open .sidebar-toggle .icon-wrapper[data-v-003a4dc8]::after { background: var(--color-stop-2);\n}\n.fullscreen .note-pad[data-v-003a4dc8] textarea { padding: 50px max(calc((100% - 750px)/ 2), 50px);\n}\n@media screen and (max-width: 850px) {\n.note-detail .app-header[data-v-003a4dc8] { --sides-grow: 0 !important; --center-grow: 1 !important;\n}\n.sidebar-toggle[data-v-003a4dc8] { opacity: 1; pointer-events: all;\n}\n.note-detail[data-v-003a4dc8] .header-left, .note-detail[data-v-003a4dc8] .header-right { width: auto;\n}\n.list-switcher[data-v-003a4dc8] { position: absolute; top: 0; bottom: 0; z-index: 2; background: var(--color-bg); transform: translateX(-100%); transition: var(--a-default) !important;\n}\n.sidebar-open .list-switcher[data-v-003a4dc8] { transform: translateX(0);\n}\n}\n@media screen and (max-width: 450px) {\n[data-v-003a4dc8] .app { height: 100%;\n}\n}\n",""]);const r=o},90949:(t,e,a)=>{"use strict";a.r(e),a.d(e,{makeNotesStore:()=>u,useNotesStore:()=>p});var i=a(28692);class s{constructor(t){this.id=t.id,this.body=t.body,this.updatedDate=t.updatedDate,this.deleted=t.deleted,t.draft&&(this.draft=t.draft)}}class n{constructor(t){this.dataService=t}get(t){this.dataService.get(t)}create(t){return this.dataService.create(t.id,t)}update(t,e){return this.dataService.update(t,e)}}var o=a(34145),r=a(20144),d=a(84315),c=function(t,e,a,i){return new(a||(a=Promise))((function(s,n){function o(t){try{d(i.next(t))}catch(t){n(t)}}function r(t){try{d(i.throw(t))}catch(t){n(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(o,r)}d((i=i.apply(t,e||[])).next())}))};function l(t,e){const a={};return Object.values(t).filter((t=>t.deleted===e)).sort(((t,e)=>e.updatedDate-t.updatedDate)).forEach((t=>a[t.id]=new s(t))),a}const u=(t=(()=>({noteService:new n(new o.U("notes"))}))().noteService)=>(0,i.Q_)("notes",{state:()=>({data:{},loading:!1,loaded:!1,activeItemId:""}),getters:{getItems:t=>l(t.data,!1),getDeletedItems:t=>l(t.data,!0),getItemById:t=>e=>{const a=t.data[e];return a?new s(a):null}},actions:{clearActiveItem(){this.activeItemId=""},refresh(e=!1){this.loading=!0,t.get({success:t=>{t.forEach((t=>r.ZP.set(this.data,t.id,t))),this.loaded=!0,this.loading=!1},queryParams:{loadDeleted:e}})},create(){var t;const e=null===(t=Object.values(this.data).find((t=>t.draft&&!t.body.length)))||void 0===t?void 0:t.id,a={id:e||(0,d.uuidv4)(),body:"",draft:!0,updatedDate:Date.now(),deleted:!1};return r.ZP.set(this.data,a.id,a),a},update(e,a){return c(this,void 0,void 0,(function*(){const i={body:a,updatedDate:Date.now()},s=Object.assign(Object.assign({},this.data[e]),i),{draft:n}=s;return delete s.draft,r.ZP.set(this.data,e,s),n&&s.body?yield t.create(s):n||(yield t.update(e,i)),s}))},delete(e){const a={deleted:!0,updatedDate:Date.now()},i=Object.assign({},this.data[e],a);return i.draft?(r.ZP.delete(this.data,e),Promise.resolve()):(r.ZP.set(this.data,e,i),t.update(e,a))},restore(e){return c(this,void 0,void 0,(function*(){if(!this.data[e])throw new Error("No note found to restore with id: "+e);const a={deleted:!1,updatedDate:Date.now()},i=Object.assign(Object.assign({},this.data[e]),a);return r.ZP.set(this.data,e,i),yield t.update(e,a),i}))}}}),p=u()},34145:(t,e,a)=>{"use strict";a.d(e,{U:()=>n});var i=a(42935);const s=a(24960).Z;class n{constructor(t,{queryParams:e={},path:a="",mode:i="sync"}={}){this.type=t,this.queryParams=e,this.path=a,this.mode=i}get({path:t=this.path||this.type,mode:e=this.mode,success:a,failure:i,queryParams:n={}}){var o;t+=this.buildQueryString((null===(o=this.queryParams)||void 0===o?void 0:o.get)||{},n);const r=[this.type,{path:t,env:this.getEnv(),mode:e}];"server"===e?s.sendMessage({handler:"get",args:r}).then(a).catch(i):s.sendRecurringCrossTabMessage({msgId:this.type+":refreshed",handler:"get",args:r,success:a,failure:i})}create(t,e,{path:a=this.path||this.type,mode:i=this.mode}={}){const n=[this.type,t,e];return n.push({path:a,mode:i,env:this.getEnv()}),s.sendMessage({handler:"create",args:n})}update(t,e,{path:a=this.path||this.type,mode:i=this.mode,queryParams:n={}}={}){var o;const r=this.buildQueryString((null===(o=this.queryParams)||void 0===o?void 0:o.update)||{},n),d=[this.type,t,e];return d.push({path:a,mode:i,env:this.getEnv(),queryString:r}),s.sendMessage({handler:"update",args:d})}delete(t,{path:e=this.path||this.type,mode:a=this.mode}={}){const i=[this.type,t];return i.push({path:e,mode:a,env:this.getEnv()}),s.sendMessage({handler:"delete",args:i})}getEnv(){return{token:localStorage.getItem("token"),clientUuid:localStorage.getItem("client_uuid"),apiUrl:m.globals.urlRootApi,version:m.globals.version,tabId:i.Z}}buildQueryString(...t){const e=new URLSearchParams(Object.assign({},...t)).toString();return e?"?"+e:""}}},99587:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>E});var i=function(){var t=this,e=t._self._c;return e("app-popup",{ref:"popup",staticClass:"notes-app",class:{"sidebar-open":t.sidebarOpen},attrs:{position:"top-left",region:"bottom-right",width:t.condensed?550:750,fullscreen:t.viewStateStore.fullscreen,"hide-apps-exclusions":".apps .notes","data-test":"notes-app",focused:t.viewStateStore.focused},on:{"update:fullscreen":function(e){return t.$set(t.viewStateStore,"fullscreen",e)},close:t.closePopup},nativeOn:{click:function(e){return t.viewStateStore.focus()}}},[e("transition",{attrs:{name:"fade",mode:"out-in",duration:"100"}},[t.loadingStateActive?e("app-loading"):t.loaded?e("div",{staticClass:"app-content"},[e("app-view-switch-static",{staticClass:"list-switcher",attrs:{"order-key":t.activeView.order,"smooth-reflow":!1}},[t.deletedListActive?t.deletedListActive?e("app-view",{staticClass:"list deleted-list",scopedSlots:t._u([{key:"header",fn:function(){return[e("app-header",{scopedSlots:t._u([{key:"left",fn:function(){return[e("span",{staticClass:"icon-wrapper",on:{click:function(e){return t.setActiveView("list")}}},[e("inline-svg",{staticClass:"icon icon-back",attrs:{src:a(86043)}})],1)]},proxy:!0},{key:"center",fn:function(){return[t._v("\n\t\t\t\t\t\t\t\tDeleted\n\t\t\t\t\t\t\t")]},proxy:!0}])})]},proxy:!0},{key:"body",fn:function(){return[e("div",{staticClass:"deleted-description"},[t._v("\n\t\t\t\t\t\t\tAutomatically removed after 2 weeks\n\t\t\t\t\t\t")]),t._v(" "),e("base-item-list",t._l(t.notesStore.getDeletedItems,(function(a){return e("note-list-item",{key:a.id,class:{active:t.activeNoteId===a.id},attrs:{note:a},nativeOn:{click:function(e){t.activeNoteId=a.id}}})})),1)]},proxy:!0}])}):t._e():e("app-view",{staticClass:"list notes-list",scopedSlots:t._u([{key:"header",fn:function(){return[e("app-header",[e("app-search",{model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}}),t._v(" "),e("base-dropdown",{attrs:{"container-class":"app"}},[e("base-dropdown-option",{on:{click:function(e){return t.setActiveView("deleted")}}},[e("inline-svg",{staticClass:"icon icon-trash",attrs:{src:a(9241)}}),t._v(" "),e("span",{staticClass:"text"},[t._v("Deleted")])],1)],1)],1)]},proxy:!0},{key:"body",fn:function(){return[e("base-item-list",t._l(t.notes,(function(a){return e("note-list-item",{key:a.id,class:{active:t.activeNoteId===a.id},attrs:{note:a},nativeOn:{click:function(e){t.activeNoteId=a.id}}})})),1)]},proxy:!0}],null,!1,1303147309)})],1),t._v(" "),e("app-view",{staticClass:"note-detail",attrs:{overlay:t.condensed&&t.sidebarOpen},on:{overlayClick:function(e){t.sidebarOpen=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[e("app-header",{on:{close:t.closePopup},scopedSlots:t._u([{key:"left",fn:function(){return[e("app-header-control",{staticClass:"sidebar-toggle",attrs:{"data-test":"toggle-fullscreen-list-view"},on:{click:function(e){t.sidebarOpen=!t.sidebarOpen}}},[e("inline-svg",{staticClass:"icon icon-menu",attrs:{src:a(21121)}})],1)]},proxy:!0},{key:"center",fn:function(){return[e("span",{staticClass:"last-edited-title"},[t._v(t._s(t.activeNoteLastUpdatedDateString))])]},proxy:!0},{key:"right",fn:function(){return[e("app-header-control",{staticClass:"new",attrs:{"data-test":"new-note"},on:{click:t.createNote}},[e("inline-svg",{staticClass:"icon icon-plus",attrs:{src:a(76450)}})],1),t._v(" "),t.deletedListActive?e("app-header-control",{staticClass:"restore",attrs:{disabled:!t.activeNote},on:{click:t.restoreNote}},[e("inline-svg",{staticClass:"icon icon-restore",attrs:{src:a(78075)}})],1):e("base-dropdown",{ref:"delete-dropdown",class:{disabled:!t.activeNote},attrs:{"container-class":"app","data-test":"delete"},scopedSlots:t._u([{key:"toggle",fn:function(){return[e("div",{staticClass:"icon-wrapper more-toggle"},[e("inline-svg",{staticClass:"icon icon-trash",attrs:{src:a(9241)}})],1)]},proxy:!0}],null,!1,1720791346)},[t._v(" "),e("div",{staticClass:"delete-confirm"},[e("div",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t\t\t\t\tAre you sure you would like to delete this note?\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"buttons"},[e("div",{staticClass:"button button-confirm",attrs:{"data-test":"confirm-delete"},on:{click:t.deleteNote}},[t._v("Yes")]),t._v(" "),e("div",{staticClass:"button button-neutral",on:{click:t.closeDeleteConf}},[t._v("No")])])])]),t._v(" "),t.viewStateStore.fullscreen?e("app-header-control",{staticClass:"fullscreen u--mobile-hide",attrs:{"data-test":"toggle-fullscreen"},on:{click:t.exitFullscreen}},[e("inline-svg",{staticClass:"icon icon-collapse",attrs:{src:a(1465)}})],1):e("app-header-control",{staticClass:"fullscreen u--mobile-hide",attrs:{"data-test":"toggle-fullscreen"},on:{click:t.enterFullscreen}},[e("inline-svg",{staticClass:"icon icon-expand",attrs:{src:a(7386)}})],1)]},proxy:!0}])})]},proxy:!0},{key:"body",fn:function(){return[t.empty?e("app-empty",t._b({on:{buttonClick:function(e){t.deletedListActive?t.setActiveView("list"):t.createNote()}}},"app-empty",t.emptyStateProps,!1)):e("note-pad",{ref:"note-pad",attrs:{"active-note":t.activeNote}})]},proxy:!0}])})],1):t._e()],1)],1)};i._withStripped=!0;var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-view-switch app-view-switch-static",class:{transitioning:t.transitionActive}},[e("transition",{attrs:{name:t.transitionType,duration:300},on:{beforeLeave:t.beforeTransition,beforeEnter:t.beforeTransition,afterEnter:t.afterTransition}},[e("div",{key:t.orderKey},[t._t("default")],2)])],1)};s._withStripped=!0;const n={name:"AppViewSwitch",mixins:[a(52559).Z]};a(13166);var o=a(51900);const r=(0,o.Z)(n,s,[],!1,null,"4b11beca",null).exports;var d=a(90949),c=a(28692),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-pad"},[t.restoreBannerActive?e("div",{staticClass:"message"},[t._v("\n\t\tRestore this note to edit.\n\t\t"),e("span",{staticClass:"button restore-note",on:{click:t.restore}},[t._v("Restore")])]):t._e(),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.noteBody,expression:"noteBody"}],ref:"textarea",attrs:{placeholder:t.placeholder,"data-test":"textarea"},domProps:{value:t.noteBody},on:{keydown:t.onKeydown,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.stopPropagation(),t.blur.apply(null,arguments))},blur:t.onBlur,input:function(e){e.target.composing||(t.noteBody=e.target.value)}}})])};l._withStripped=!0;const u=["Type something cool!","Think of the possibilities…","Record some wisdom…","Use your words…","Type a tidbit…","This is your canvas…"],p="notes:sidebarOpen",M=new(a(64438).Z)("tab.notePad",.01),v={name:"NotePad",inject:["itemStore","viewStateStore"],props:{activeNote:{type:Object,required:!0}},data:()=>({noteBody:"",placeholder:u[m.utils.getRandomIntBetween(0,u.length-1)],restoreBannerActive:!1}),watch:{"activeNote.id":{handler(t){t&&this.activeNote&&(this.noteBody=this.activeNote.body),this.restoreBannerActive=!1},immediate:!0},"activeNote.updatedDate"(){this.noteBody=this.activeNote.body},noteBody(){clearTimeout(this.debounce),this.debounce=setTimeout((()=>{this.logIfEmptyDraftNoteCreated("debounce"),this.save()}),500)},"activeNote.deleted"(t){!t&&this.restoreBannerActive&&(this.restoreBannerActive=!1)}},methods:{onKeydown(t){this.activeNote.deleted?(t.preventDefault(),this.restoreBannerActive=!0):m.conditionalFeatures.featureEnabled("notes-degraded")&&(t.preventDefault(),m.cmd("modal.open","UPSELL_NOTES",{eventSource:"dash"}))},save(){this.viewStateStore.activeItemId=this.activeNote.id,this.noteBody!==this.activeNote.body&&this.itemStore.update(this.activeNote.id,this.noteBody)},restore(){this.itemStore.restore(this.activeNote.id),this.viewStateStore.setActiveView("list"),this.focus()},focus(){this.$refs.textarea.focus()},blur(){this.$refs.textarea.blur()},onBlur(){clearTimeout(this.debounce),this.logIfEmptyDraftNoteCreated("blur"),this.save()},logIfEmptyDraftNoteCreated(t){try{this.activeNote.draft&&!this.noteBody&&this.noteBody!==this.activeNote.body&&M.warn("Note create attempted with no body",{source:t,activeNoteSet:!!this.activeNote})}catch(t){console.error(t)}}}};a(83532);const h=(0,o.Z)(v,l,[],!1,null,"37d1101b",null).exports;var g=a(52313),y=a(44238),w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-list-item",attrs:{"data-test":"list-item"}},[e("div",{staticClass:"title",attrs:{"data-test":"list-title"}},[t._v("\n\t\t"+t._s(t.titlePreview||"Empty note")+"\n\t")]),t._v(" "),e("div",{staticClass:"bottom-row"},[e("span",{staticClass:"date"},[t._v("\n\t\t\t"+t._s(t.lastUpdatedDateString)+"\n\t\t")]),t._v(" "),e("span",{staticClass:"body",attrs:{"data-test":"list-body"}},[t._v("\n\t\t\t"+t._s(t.bodyPreview)+"\n\t\t")])])])};w._withStripped=!0;const I={name:"NoteListItem",props:{note:{type:Object,required:!0}},computed:{lastUpdatedDateString(){return m.utils.formatRelativeDate(new Date(this.note.updatedDate))},titlePreview(){return this.bodyContent.split("\n")[0].substring(0,30)??""},bodyPreview(){return this.bodyContent.length?this.isMultiLine?this.bodyContent.split("\n").slice(1).join(" ").substring(0,30):this.bodyContent.substring(30).split(" ").slice(1).join(" ").substring(0,30):""},bodyContent(){return this.note.body.replace(/ +/g," ").trim()},isMultiLine(){return this.note.body.includes("\n")}}};a(49522);const N=(0,o.Z)(I,w,[],!1,null,"3856f9d4",null).exports;var f=a(98389),L=a(1045),T=a(77260),D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-search"},[e("div",{staticClass:"search-wrapper"},[e("span",{staticClass:"input-wrapper"},[e("i",{staticClass:"icon icon-search"}),t._v(" "),t.value.length?e("span",{staticClass:"icon-clear-wrapper",on:{click:t.clear}},[e("inline-svg",{staticClass:"icon icon-clear",attrs:{src:a(21794)}})],1):t._e(),t._v(" "),e("input",{ref:"search",staticClass:"search-input notes-search",attrs:{type:"text",name:"search",placeholder:"Search"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.stopPropagation(),t.clearAndBlur.apply(null,arguments))}}})])])])};D._withStripped=!0;const j={name:"AppSearch",props:{value:{type:String,required:!0}},methods:{clear(){this.$emit("input",""),this.$refs.search.focus()},clearAndBlur(){this.$emit("input",""),this.$refs.search.blur()}}};a(67755);const b=(0,o.Z)(j,D,[],!1,null,"1f7a829d",null).exports;var x=a(96046),A=a(40272),S=a(14493),C=a(61876),O=a(27691);const z={name:"NotesApp",components:{BaseDropdown:C.Z,AppHeaderControl:O.Z,BaseItemList:S.default,BaseDropdownOption:A.Z,AppEmpty:L.Z,AppLoading:f.Z,NoteListItem:N,AppPopup:y.Z,AppView:g.Z,AppViewSwitchStatic:r,NotePad:h,AppHeader:T.Z,AppSearch:b},inject:["viewStateStore"],provide(){return{itemStore:this.notesStore}},data:()=>({loadingStateActive:!1,searchString:"",sidebarOpen:m.utils.getLocalStorageBool(p)}),computed:{...(0,c.Kc)(d.useNotesStore),condensed:()=>x.Z.windowDimensions.width<850,empty(){return this.loaded&&!Object.keys(this.notes).length},loading(){return this.notesStore.loading},loaded(){return this.notesStore.loaded},deletedListActive(){return"deleted"===this.activeViewId},emptyStateProps(){return this.searchString?{description:"No notes found.",buttonText:"New Note"}:this.deletedListActive?{description:"No deleted notes yet.",buttonText:"Back To List"}:{title:"Take quick notes and store wisdom to view later.",description:"No notes yet. Add a note to get started!",buttonText:"New Note"}},notes(){if(this.deletedListActive)return this.notesStore.getDeletedItems;if(this.searchString.length){const t={};return Object.values(this.notesStore.getItems).filter((t=>t.body.toLowerCase().includes(this.searchString.toLowerCase()))).forEach((e=>t[e.id]=e)),t}return this.notesStore.getItems},activeViewId(){return this.viewStateStore.activeViewId},activeView(){return this.viewStateStore.activeView},activeNoteId:{get(){return this.notesStore.activeItemId||this.firstNoteInListId},set(t){this.condensed&&m.utils.delay(100).then((()=>{this.sidebarOpen=!1})),this.notesStore.activeItemId=t,this.focusNotePad()}},firstNoteInListId(){var t;return null===(t=Object.values(this.notes)[0])||void 0===t?void 0:t.id},activeNote(){return this.notes[this.activeNoteId]},activeNoteLastUpdatedDateString(){if(!this.activeNote)return"";const t=new Date(this.activeNote.updatedDate);return m.utils.formatMonthDayRelative(t,!1)+m.utils.formatYearRelative(t)+" at "+m.utils.formatTime(t)}},watch:{sidebarOpen(t){localStorage.setItem(p,t)},activeNote(t){t||this.notesStore.clearActiveItem()},loaded:{handler(t){t&&(clearTimeout(this.loadingTimeout),this.loadingStateActive=!1)},immediate:!0},searchString(){this.notesStore.clearActiveItem()}},created(){this.loaded||(this.loadingTimeout=setTimeout((()=>{this.loadingStateActive=!0}),500),this.notesStore.refresh())},methods:{setActiveView(t){this.searchString="",this.viewStateStore.setActiveView(t),this.notesStore.clearActiveItem(),this.deletedListActive&&this.refreshDeletedNotes()},deleteNote(){this.notesStore.delete(this.activeNoteId),this.notesStore.clearActiveItem(),this.closeDeleteConf()},closeDeleteConf(){var t;null===(t=this.$refs["delete-dropdown"])||void 0===t||t.closeDropdown()},focusNotePad(){this.$nextTick((()=>this.$refs["note-pad"].focus()))},createNote(){var t;if(m.conditionalFeatures.featureEnabled("notes-degraded"))return null===(t=this.$refs["note-pad"])||void 0===t||t.blur(),void m.cmd("modal.open","UPSELL_NOTES",{eventSource:"dash"});this.searchString="";const e=this.notesStore.create();this.activeNoteId=e.id,this.deletedListActive&&this.setActiveView("list"),this.$nextTick(this.focusNotePad)},restoreNote(){this.notesStore.restore(this.activeNoteId),this.setActiveView("list"),this.$nextTick(this.focusNotePad)},refreshDeletedNotes(){this.notesStore.refresh(!0)},enterFullscreen(){this.viewStateStore.fullscreen=!0},exitFullscreen(){this.viewStateStore.fullscreen=!1},closePopup(){this.viewStateStore.togglePopup(!1)}}};a(53603);const E=(0,o.Z)(z,i,[],!1,null,"003a4dc8",null).exports},67755:(t,e,a)=>{var i=a(94366);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,a(45346).Z)("0f2df8d7",i,!1,{ssrId:!0})},13166:(t,e,a)=>{var i=a(15894);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,a(45346).Z)("fb6d4efc",i,!1,{ssrId:!0})},49522:(t,e,a)=>{var i=a(32694);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,a(45346).Z)("d09a54e0",i,!1,{ssrId:!0})},83532:(t,e,a)=>{var i=a(54906);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,a(45346).Z)("63eb3b50",i,!1,{ssrId:!0})},53603:(t,e,a)=>{var i=a(1910);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,a(45346).Z)("03ae6b80",i,!1,{ssrId:!0})},86043:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODkuMDQgNDkyIj48cGF0aCBkPSJNMTk4LjYxLDI0Ni4xLDM4Mi42Niw2MmEyNywyNywwLDAsMCwwLTM4LjA2TDM2Ni41NCw3Ljg2YTI3LDI3LDAsMCwwLTM4LjA2LDBMMTA5LjMzLDIyN2EyNy4xNSwyNy4xNSwwLDAsMCwwLDM4LjE5TDMyOC4yNyw0ODQuMTRhMjcsMjcsMCwwLDAsMzguMDcsMEwzODIuNDYsNDY4YTI3LDI3LDAsMCwwLDAtMzguMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjQ4KSIgLz48L3N2Zz4K"},21794:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K"},1465:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNDUxLjM3Ij48cGF0aCBkPSJNNDQzLjMxLDgxLjMxLDM1MC42MywxNzRsMzIuOTIsMzFjMTUuMTIsMTUuMTIsNC40MSw0MS0xNyw0MWgtMTEyYTI0LDI0LDAsMCwxLTI0LTI0VjExMGMwLTIxLjM4LDI1LjgtMzIuMDksNDAuOTItMTdsMzEuMDgsMzMsOTIuNjgtOTIuNjlhMTYsMTYsMCwwLDEsMjIuNjMsMGwyNS4zNywyNS4zOEExNiwxNiwwLDAsMSw0NDMuMzEsODEuMzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0yOC42MykiPjwvcGF0aD48cGF0aCBkPSJNNC42OSw0MjcuMzFsOTIuNjgtOTIuNjgtMzIuOTItMzFjLTE1LjEyLTE1LjEyLTQuNDEtNDEsMTctNDFoMTEyYTI0LDI0LDAsMCwxLDI0LDI0djExMmMwLDIxLjM4LTI1LjgsMzIuMDktNDAuOTIsMTdsLTMxLjA4LTMzTDUyLjY5LDQ3NS4zMWExNiwxNiwwLDAsMS0yMi42MywwTDQuNjksNDQ5Ljk0YTE2LDE2LDAsMCwxLDAtMjIuNjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0yOC42MykiLz48L3N2Zz4K"},7386:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNMjEyLjY4NiAzMTUuMzE0TDEyMCA0MDhsMzIuOTIyIDMxLjAyOWMxNS4xMiAxNS4xMiA0LjQxMiA0MC45NzEtMTYuOTcgNDAuOTcxaC0xMTJDMTAuNjk3IDQ4MCAwIDQ2OS4yNTUgMCA0NTZWMzQ0YzAtMjEuMzgyIDI1LjgwMy0zMi4wOSA0MC45MjItMTYuOTcxTDcyIDM2MGw5Mi42ODYtOTIuNjg2YzYuMjQ4LTYuMjQ4IDE2LjM3OS02LjI0OCAyMi42MjcgMGwyNS4zNzMgMjUuMzczYzYuMjQ5IDYuMjQ4IDYuMjQ5IDE2LjM3OCAwIDIyLjYyN3ptMjIuNjI4LTExOC42MjhMMzI4IDEwNGwtMzIuOTIyLTMxLjAyOUMyNzkuOTU4IDU3Ljg1MSAyOTAuNjY2IDMyIDMxMi4wNDggMzJoMTEyQzQzNy4zMDMgMzIgNDQ4IDQyLjc0NSA0NDggNTZ2MTEyYzAgMjEuMzgyLTI1LjgwMyAzMi4wOS00MC45MjIgMTYuOTcxTDM3NiAxNTJsLTkyLjY4NiA5Mi42ODZjLTYuMjQ4IDYuMjQ4LTE2LjM3OSA2LjI0OC0yMi42MjcgMGwtMjUuMzczLTI1LjM3M2MtNi4yNDktNi4yNDgtNi4yNDktMTYuMzc4IDAtMjIuNjI3eiIgLz48L3N2Zz4K"},21121:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQgMTI0Ij48cGF0aCBkPSJNMTEyIDZIMTJDNS40IDYgMCAxMS40IDAgMThzNS40IDEyIDEyIDEyaDEwMGM2LjYgMCAxMi01LjQgMTItMTJzLTUuNC0xMi0xMi0xMnpNMTEyIDUwSDEyQzUuNCA1MCAwIDU1LjQgMCA2MnM1LjQgMTIgMTIgMTJoMTAwYzYuNiAwIDEyLTUuNCAxMi0xMnMtNS40LTEyLTEyLTEyek0xMTIgOTRIMTJjLTYuNiAwLTEyIDUuNC0xMiAxMnM1LjQgMTIgMTIgMTJoMTAwYzYuNiAwIDEyLTUuNCAxMi0xMnMtNS40LTEyLTEyLTEyeiIvPjwvc3ZnPg=="},76450:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDQ4IDQ0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNDA4IDE4NGgtMTM2Yy00LjQxNzk2OSAwLTgtMy41ODIwMzEtOC04di0xMzZjMC0yMi4wODk4NDQtMTcuOTEwMTU2LTQwLTQwLTQwcy00MCAxNy45MTAxNTYtNDAgNDB2MTM2YzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhoLTEzNmMtMjIuMDg5ODQ0IDAtNDAgMTcuOTEwMTU2LTQwIDQwczE3LjkxMDE1NiA0MCA0MCA0MGgxMzZjNC40MTc5NjkgMCA4IDMuNTgyMDMxIDggOHYxMzZjMCAyMi4wODk4NDQgMTcuOTEwMTU2IDQwIDQwIDQwczQwLTE3LjkxMDE1NiA0MC00MHYtMTM2YzAtNC40MTc5NjkgMy41ODIwMzEtOCA4LThoMTM2YzIyLjA4OTg0NCAwIDQwLTE3LjkxMDE1NiA0MC00MHMtMTcuOTEwMTU2LTQwLTQwLTQwem0wIDAiPjwvcGF0aD48L3N2Zz4="},78075:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMSAyNCI+PHBhdGggZD0iTTE4LjU5MiA5SDMuMjc5YS41LjUgMCAwIDAtLjUuNUwzLjkwNCAyMmEyIDIgMCAwIDAgMiAySDE2LjA1YTIgMiAwIDAgMCAyLTJsMS4wNDMtMTIuNWEuNS41IDAgMCAwLS41LS41em0tMTIuNDEgMy41MTJjMC0uMzQ2LjMyNC0uNTA5LjY1Ni0uNTA5cy42NDUuMTYzLjY0NS41MWwuMDM4IDEuNzk3Yy45OTgtMS43MzUgMi40MDUtMi41MDQgNC42OTEtMi4wMDYgMi4yODcuNSAzLjI1OCAyLjYgMy4xMzQgNC42MjItLjEyMyAyLjAyMS0xLjY5MiAzLjcyNS0zLjU5OSA0LjA3OC0xLjkwNi4zNTMtNC4wNDgtLjY2My00LjgyNi0yLjUxOC0uMTMxLS4zMTcuMjk4LS44MjEuNi0uOTYuMzAyLS4xNC42MjIuMDUyLjg1NC4zMDcuODA1Ljg4NyAxLjI4IDEuNDMgMi42MTcgMS40M3MyLjI3LS43MyAyLjQ5LTEuOTA0Yy4yMi0xLjE3MyAwLTIuMzYtMS4wMDItMy4xNzEtMS4wMDEtLjgxMS0yLjc1NC0uNjM3LTMuNTcuNDk5bC43OTQuMDQyYy4zMzEgMCAuNTIxLjM3OC41MjEuNzI1IDAgLjM0Ni0uMTEyLjgwNy0uNDQzLjgwN0g3LjAxOWMtLjE1OSAwLS42MTMuMDUyLS43MjUtLjA2Ni0uMTEzLS4xMTgtLjExMi0uNzE0LS4xMTItLjg4di0yLjgwM3ptOC43ODMtOS4wNmEuMjUuMjUgMCAwIDEtLjI5My0uMTk4bC0uMjM4LTEuMjI5QTIuNSAyLjUgMCAwIDAgMTEuNTA1LjA0OUw2LjYgMWEyLjUgMi41IDAgMCAwLTEuOTggMi45MjlsLjIzNyAxLjIyOGEuMjQ4LjI0OCAwIDAgMS0uMTk2LjI5MmwtMy44MjIuNzU3YTEgMSAwIDAgMC0uNzk0IDEuMTdjLjExOS41MzQuNjMzLjg4IDEuMTcyLjc5NGwxOC41MTYtMy42NmExIDEgMCAwIDAtLjM4LTEuOTY0bC00LjM4OC45MDZ6bS04LjM4NS4xYS41LjUgMCAwIDEgLjM5Ny0uNTg1bDQuOTEyLS45NWEuNS41IDAgMCAxIC41ODUuMzk4bC4yMzggMS4yM2EuMjUuMjUgMCAwIDEtLjIuMjkzTDcuMTEgNC45NzNhLjI1LjI1IDAgMCAxLS4yOTMtLjE5OEw2LjU4IDMuNTUyeiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+Cg=="}}]);