"use strict";cjce.registerTemplate("bm-p-vault",function(e,a){var i="https://vault.google.com/"+a.wizPath;function n(e,n){n=i+n.newTabUrl;a.openTab(n)}var l=cjce.createElement("bm-ogb",{serviceIcon:"vault",serviceLabel:cjBasics.lang.i18n("cj_i18n_00616","Vault"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:a,onNewTab:function(){a.openTab(i)}}),l=(e.appendChild(l),cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"})),e=(e.appendChild(l),[{label:cjBasics.lang.i18n("cj_i18n_01444","Retention"),iconName:"__mdi:dashboard",newTabUrl:"retention"},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01443","Matters")},{label:cjBasics.lang.i18n("cj_i18n_01441","All matters"),iconName:"__mdi:library_books",newTabUrl:"matters"},{label:cjBasics.lang.i18n("cj_i18n_01445","My matters"),iconName:"__mdi:person",newTabUrl:"matters/open/owned_by_me"},{label:cjBasics.lang.i18n("cj_i18n_00002","Shared with me"),iconName:"__mdi:people",newTabUrl:"matters/open/shared_with_me"},{label:cjBasics.lang.i18n("cj_i18n_01447","Closed"),iconName:"__mdi:bigtop_done",newTabUrl:"matters/closed/owned_by_anyone"},{label:cjBasics.lang.i18n("cj_i18n_00005","Bin"),iconName:"__mdi:delete",newTabUrl:"matters/deleted/owned_by_anyone"},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01442","Reports")},{label:cjBasics.lang.i18n("cj_i18n_01448","Audit"),iconName:"__mdi:assignment",newTabUrl:"reports/audit"},{label:cjBasics.lang.i18n("cj_i18n_01449","Domain Holds"),iconName:"__mdi:business",newTabUrl:"reports/domainholds"},{label:cjBasics.lang.i18n("cj_i18n_01450","User Holds"),iconName:"__mdi:person",newTabUrl:"reports/userholds"},{label:cjBasics.lang.i18n("cj_i18n_01451","Group Holds"),iconName:"__mdi:people",newTabUrl:"reports/groupholds"}]),e=cjce.createElement("bm-navlist",{compact:!0,items:e,onClick:n,onNewTab:n});l.appendChild(e)});