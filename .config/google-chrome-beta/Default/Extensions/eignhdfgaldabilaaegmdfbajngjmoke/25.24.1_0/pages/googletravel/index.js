"use strict";cjce.registerTemplate("bm-p-googletravel",function(e,n){var i,c,s,l,r,o,d,a,t,h="trips",m=!cjBasics.webRequest.wrifSupported,b=cjBasics.uniqueId.generate(),u="https://www.google.com",g="https://consent.google.com",_={bm_cid:"googletravel",bm_cst:"1",bm_iid:b,bm_udm:n.darkMode?"1":null,bm_wiz:"1",hl:cjBasics.lang.current},j=n.account.authuser,p=("0"!==j&&(_.authuser=j),"subscriptions/list/hotels"),v="flights/saves",f="transit/tickets",B="settings",w=["flights","explore","transit/",p,v,f],T=[v,p,f,B],k={trips:{iconName:"__mdi:cjg_trips",label:cjBasics.lang.i18n("cj_i18n_00307","Trips"),newTabUrl:!0},explore:{iconName:"__mdi:cjg_travel_explore",label:cjBasics.lang.i18n("cj_i18n_00061","Explore"),newTabUrl:!0},"things-to-do":{iconName:"__mdi:camera_alt",label:cjBasics.lang.i18n("cj_i18n_06628","Things to do"),newTabUrl:!0},flights:{iconName:"__mdi:travel",label:cjBasics.lang.i18n("cj_i18n_00414","Flights"),newTabUrl:!0},hotels:{iconName:"__mdi:hotel",label:cjBasics.lang.i18n("cj_i18n_01030","Hotels"),newTabUrl:!0,external:!1},holidayrentals:{iconName:"__mdi:house",label:cjBasics.lang.i18n("cj_i18n_06630","Holiday rentals"),newTabUrl:!0,external:!1},packages:{iconName:"__mdi:beach_access",label:cjBasics.lang.i18n("cj_i18n_01751","Packages"),newTabUrl:!0},"transit/":{iconName:"__mdi:directions_transit",label:cjBasics.lang.i18n("cj_i18n_06629","Trains"),newTabUrl:!0,divider:!0},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:!0},relatedHeader:{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_06647","Quick access")},"flights/saves":{iconName:"__mdi:timeline",label:cjBasics.lang.i18n("cj_i18n_01125","Tracked flight prices"),newTabUrl:!0},"subscriptions/list/hotels":{iconName:"__mdi:timeline",label:cjBasics.lang.i18n("cj_i18n_06627","Tracked hotel prices"),newTabUrl:!0},"transit/tickets":{iconName:"__mdi:local_activity",label:cjBasics.lang.i18n("cj_i18n_06626","Your train tickets"),newTabUrl:!0},save:{label:cjBasics.lang.i18n("cj_i18n_06669","Favourite itineraries"),iconName:"__mdi:bookmarks",external:!m&&!n.servicesDatabase.save}};function x(e){var a="/travel/";return"holidayrentals"===e?cjBasics.urlParams.attach(a+"hotels",_)+"&hrf=YAE":cjBasics.urlParams.attach(a+e,_)}function N(e){e=u+"/search?q="+encodeURIComponent(e);"0"!==n.account.authuser&&(e+="&authuser="+n.account.authuser),n.openTab(e)}function C(e,a){var t=u,i={},e=("save"===e?t+="/collections":"holidayrentals"===e?(t+="/travel/hotels",i.hrf="YAE"):t+="/travel/"+e,n.account.authuser),e=("0"!==e&&(i.authuser=e),cjBasics.urlParams.attach(t,i));n.openTab(e)}function U(e,a){var t="hotels"===e||"holidayrentals"===e,a=((!(t&&("hotels"===h||"holidayrentals"===h))||t&&a)&&(o.cjceSelectedId=e,i.cjceSetPageLabel(k[e].label)),c.hidden="flights"!==e,s.hidden="flights"!==e,l.hidden=!t,r.hidden="transit/"!==e,-1!==T.indexOf(e));i.cjceSetBackState(a),h=e}function S(e){U((e=e).startsWith("/flights/saves")||e.startsWith("/travel/flights/saves")?v:e.startsWith("/flights/explore")||e.startsWith("/travel/explore")||e.startsWith("/travel/flights/explore")?"explore":e.startsWith("/travel/subscriptions/list/hotels")?p:-1!==e.indexOf("/travel/transit")?-1!==e.indexOf("/travel/transit/tickets")?f:"transit/":e.startsWith("/flights")||e.startsWith("/travel/flights")?"flights":e.startsWith("/travel/settings")?B:e.startsWith("/travel/guide")||e.startsWith("/travel/things-to-do")?"things-to-do":e.startsWith("/travel/hotels")?"hotels":"trips")}function q(){return cjce.createElement("bm-navlist",{selectedId:m?null:h,items:k,onChange:y,onClick:m?C:y,onNewTab:C})}function y(e,a){var t;"save"===e?(o.cjceSelectedId=h,n.pageManager.navigate("save",{listId:"dt_fav_itineraries"})):(e!==h&&"hotels"!==e&&"holidayrentals"!==e&&i.cjceSetLoading(!0),t=x(e),a||h!==(a=e)&&(-1!==w.indexOf(a)||-1!==w.indexOf(h))?d.src=u+t:d.cjceSendFrameCommand({method:"bmCstUpdateState",value:t},u),U(e,!0))}delete k.packages,a={onSubmit:N,submitInNewTab:!0},i=cjce.createElement("bm-ogb",{loading:!m,serviceIcon:"travel",serviceLabel:cjBasics.lang.i18n("cj_i18n_00308","Travel"),pageLabel:m?cjBasics.lang.i18n("cj_i18n_00291","Home"):cjBasics.lang.i18n("cj_i18n_00307","Trips"),drawer:!m,onBack:function(){d.cjceSendFrameCommand({method:"bmCstNavigateBack"},u)},searchbox:m?a:null,bmApis:n,onNewTab:function(){k[h],m?C(h):d.cjceGetCleanUrl(u).then(function(e){e?n.openTab(e):C(h)})}}),e.appendChild(i),(s=cjce.createElement("ccbm-iconbutton",{iconName:k.explore.iconName,label:k.explore.label,onClick:function(){y("explore")}})).hidden=!0,i.cjceAppendChild(s),(c=cjce.createElement("ccbm-iconbutton",{iconName:k[v].iconName,label:k[v].label,onClick:function(){y(v)}})).hidden=!0,i.cjceAppendChild(c),(l=cjce.createElement("ccbm-iconbutton",{iconName:k[p].iconName,label:k[p].label,onClick:function(){y(p)}})).hidden=!0,i.cjceAppendChild(l),(r=cjce.createElement("ccbm-iconbutton",{iconName:k[f].iconName,label:k[f].label,onClick:function(){y(f)}})).hidden=!0,i.cjceAppendChild(r),o=q(),m?((a=cjce.createElement("cjmd-container",{shadow:"thinOnScroll"})).appendChild(o),e.appendChild(a),a=i.cjceSearchboxEl,n.setOnPageDisplayHandler(a.select)):(i.cjceDrawerEl.appendChild(o),t=cjBasics.webRequest.addListener("onBeforeRequest",function(e){delete k["transit/tickets"],delete k["transit/"],k.holidayrentals.divider=!0;var a=q();return o.parentNode.replaceChild(a,o),o=a,t.removeListener(),{cancel:!0}},{types:["xmlhttprequest"],urls:[u+"/u/?/travel/transit/geofencing*",u+"/travel/transit/geofencing*"]},["blocking"]),cjBasics.ajax(u+"/travel/transit/trip/a?authuser="+j).catch(function(){}),cjBasics.webRequest.handleIframeHeaders([u+"/*bm_iid="+b+"*","https://search.google.com/*bm_iid="+b+"*",g+"/*bm_iid="+b+"*",g+"/*bm_iid%3D"+b+"*"],{disableOgs:u,handleFirefoxInject:!0,handleSecVariables:!0,handleSwCache:!0,useMobileUserAgent:!0}),cjBasics.webRequest.addListener("onBeforeRequest",function(e){if(e.initiator===u&&(e.url.startsWith(u)&&-1===e.url.indexOf("bm_cid")))return{redirectUrl:cjBasics.urlParams.attach(e.url,_)}},{types:["sub_frame"],urls:[u+"/travel*",u+"/flights*"]},["blocking"]),cjBasics.webRequest.catchAndStop(["https://accounts.google.com/AccountChooser*"+encodeURIComponent("bm_iid="+b)+"*"],function(){n.pageManager.navigate("accountchooser"),y(h,!0)}),cjBasics.webRequest.catchAndStop([u+"/maps*",u+"/search*"],function(e){n.openTab(e),y(h,!0)}),cjBasics.webRequest.addListener("onBeforeRequest",function(e){if(-1!==e.url.indexOf("/m=kg1Y1d"))return{cancel:!0}},{types:["script"],urls:["https://www.gstatic.com/_/mss/boq-travel/_/js/k=boq-travel.TravelFrontendUi_mobile_ms*"]},["blocking"]),d=cjce.createElement("bm-iframe",{onMessage:function(e){var a;"googletravelOpenUrl"===e.bm_method?(a=cjBasics.cleanBmUrl(e.bm_value),n.openTab(a)):"googletravelUpdatePath"===e.bm_method&&(S(e.bm_value),i.cjceSetLoading(!1))},src:u+x(h),solid:!0,shadow:!0,onLoad:function(){i.cjceSetLoading(!1)}}),e.appendChild(d),n.setOnPageDisplayHandler(function(e){e&&e.navId&&y(e.navId)}))});