"use strict";!function(){var d="https://www.google.com",m=d+"/maps/reserve/",_={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:!0},bookings:{iconName:"__mdi:view_list",label:cjBasics.lang.i18n("cj_i18n_01753","Bookings"),newTabUrl:!0},packs:{iconName:"__mdi:library_books",label:cjBasics.lang.i18n("cj_i18n_01754","Packs"),newTabUrl:!0,divider:!0},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:!0}};function j(e){return"home"===e?m:m+e}cjce.registerTemplate("bm-p-reserve",function(e,n){var a,c,i,s,t="bookings",r=cjBasics.uniqueId.generate(),l={bm_cid:"reserve",bm_cst:"1",bm_wiz:"1",bm_iid:r,hl:cjBasics.lang.current};function o(e){t=e,(i.cjceSelectedId=e)in _&&a.cjceSetPageLabel(_[e].label)}function b(e){return cjBasics.urlParams.attach(j(e),l)}a=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"reserve",serviceLabel:cjBasics.lang.i18n("cj_i18n_01752","Reserve"),pageLabel:_[t].label,bmApis:n,onNewTab:function(){c.cjceGetCleanUrl(d).then(function(e){e=e||j(t);n.openTab(e)})}}),e.appendChild(a),s=a.cjceDrawerEl,i=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:t,items:_,onChange:function(e){o(e),e=e,a.cjceSetLoading(!0),c.src=b(e)},onNewTab:function(e){e=j(e=e),n.openTab(e)}}),s.appendChild(i),cjBasics.webRequest.catchAndStop([m+"merchant*"],function(e){n.openTab(e)}),cjBasics.webRequest.handleIframeHeaders([d+"/maps*bm_iid="+r+"*"],{disableOgs:d,handleFirefoxInject:!0,handleSecVariables:!0,handleSwCache:!0}),c=cjce.createElement("bm-iframe",{shadow:!n.darkMode,src:b(t),onLoad:function(){a.cjceSetLoading(!1)},onMessage:function(e){var n=e.bm_method,e=e.bm_value;"reserveUpdateView"===n&&o(e)}}),e.appendChild(c)})}();