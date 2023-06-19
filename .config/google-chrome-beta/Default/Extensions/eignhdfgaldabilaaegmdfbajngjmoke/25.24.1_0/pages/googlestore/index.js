"use strict";cjce.registerTemplate("bm-p-googlestore",function(a,n){var e="https://store.google.com",i=cjBasics.uniqueId.generate(),c=n.account.onlyAccount?null:n.account.authuser,l={hl:cjBasics.lang.current,bm_cid:"googlestore",bm_cst:"2",bm_iid:i,bm_wiz:"1"};function r(a){a=cjBasics.urlParams.attach(e+a,{authuser:c});n.openTab(a)}function t(a){_.cjceSetLoading(!0),m.src=cjBasics.urlParams.attach(e+a,l)}function s(){t("/")}cjBasics.webRequest.handleIframeHeaders([e+"/*bm_iid="+i+"*"],{handleFirefoxInject:!0,handleSecVariables:!0});var o=[{newTabUrl:"/",id:"home",iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home")},{newTabUrl:"/cart",id:"cart",iconName:"__mdi:shopping_cart",label:cjBasics.lang.i18n("cj_i18n_01760","Cart")},{newTabUrl:"/order_history",id:"order_history",iconName:"__mdi:inbox",label:cjBasics.lang.i18n("cj_i18n_01759","Orders")},{newTabUrl:"/preferred_care",id:"preferred_care",iconName:"__mdi:local_hospital",label:cjBasics.lang.i18n("cj_i18n_07315","Preferred Care")},{newTabUrl:"/subscriptions",id:"subscriptions",iconName:"__mdi:autorenew",label:cjBasics.lang.i18n("cj_i18n_01089","Subscriptions")},{id:"nest",iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_07316","My Nest Home"),external:!0,shortcutId:"1016"},{newTabUrl:"/account",id:"account",iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings")},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_06647","Quick access")},{newTabUrl:"/ideas",id:"ideas",iconName:"__mdi:lightbulb",label:cjBasics.lang.i18n("cj_i18n_07317","Ideas")},{newTabUrl:"/repairhistory",id:"repairhistory",iconName:"__mdi:build",label:cjBasics.lang.i18n("cj_i18n_07318","Repair and replacement history")},{newTabUrl:"/authentication",id:"authentication",iconName:"__mdi:account_box",label:cjBasics.lang.i18n("cj_i18n_07319","Guest orders")},{newTabUrl:"/giftreturnsv",id:"giftreturnsv",iconName:"__mdi:card_giftcard",label:cjBasics.lang.i18n("cj_i18n_07320","Gift returns")},{newTabUrl:"/magazine/financing",id:"magazine/financing",iconName:"__mdi:credit_card",label:cjBasics.lang.i18n("cj_i18n_07321","Financing")},{newTabUrl:"/magazine/installation",id:"magazine/installation",iconName:"__mdi:build",label:cjBasics.lang.i18n("cj_i18n_07322","Installation")},{newTabUrl:"/magazine/locations",id:"magazine/locations",iconName:"__mdi:place",label:cjBasics.lang.i18n("cj_i18n_00802","Locations")},{newTabUrl:"/magazine/recycling",id:"magazine/recycling",iconName:"__mdi:autorenew",label:cjBasics.lang.i18n("cj_i18n_07323","Recycling")},{newTabUrl:"/magazine/refurbished_devices",id:"magazine/refurbished_devices",iconName:"__mdi:devices_other",label:cjBasics.lang.i18n("cj_i18n_07324","Refurbished devices")},{newTabUrl:"/magazine/repaircenter",id:"magazine/repaircenter",iconName:"__mdi:build",label:cjBasics.lang.i18n("cj_i18n_01805","Repair center")},{newTabUrl:"/magazine/sustainability",id:"magazine/sustainability",iconName:"__mdi:eco",label:cjBasics.lang.i18n("cj_i18n_01117","Sustainability")},{newTabUrl:"/magazine/trade_in",id:"magazine/trade_in",iconName:"__mdi:settings_backup_restore",label:cjBasics.lang.i18n("cj_i18n_07325","Trade-in")}],_=cjce.createElement("bm-ogb",{drawer:{color:!0},loading:!0,serviceIcon:"google_store",serviceLabel:cjBasics.lang.i18n("cj_i18n_00223","Google Store"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),searchbox:{color:!0,onClear:s,onSubmit:function(a){t("/search?q="+encodeURIComponent(a))},onMetaSubmit:function(a){a=cjBasics.urlParams.attach(e+"/search",{q:a,authuser:c}),n.openTab(a)}},bmApis:n,onNewTab:function(){m.cjceGetCleanUrl(e).then(function(a){a?n.openTab(a):r("/")})},onBack:s}),d=(a.appendChild(_),cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"home",items:o,onChange:function(a,e){t(e.newTabUrl)},onNewTab:function(a,e){var i;e.shortcutId?(i=cjgShortcuts.getUrl(e.shortcutId,n.account),n.openTab(i)):r(e.newTabUrl)}})),i=(_.cjceDrawerEl.appendChild(d),cjce.createElement("ccbm-iconbutton",{iconName:"__mdi:shopping_cart",label:cjBasics.lang.i18n("cj_i18n_01760","Cart"),onClick:function(){t("/cart")}})),i=(_.cjceAppendChild(i),cjBasics.urlParams.attach(e+"/",l)),m=cjce.createElement("bm-iframe",{src:i,onLoad:function(){_.cjceSetLoading(!1)},onMessage:function(a){var e=a.bm_method,a=a.bm_value;if("googlestoreViewData"===e){for(var i,n=a.pathname,c=0;c<o.length;c++){var l=o[c];if(n===l.newTabUrl){i=l;break}}e=i?i.label:cjBasics.lang.i18n("cj_i18n_00162","Back");_.cjceSetPageLabel(e),d.cjceSelectedId=i?i.id:null,_.cjceSetBackState(!i)}}});a.appendChild(m)});