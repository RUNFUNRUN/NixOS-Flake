"use strict";!function(){var o,n,r=window,s=r.location,e="undefined"!=typeof chrome&&chrome||{};r.top!==r.self&&"https://lens.google.com"===s.origin&&(o=e.runtime.getURL("PATH/").replace("/PATH/",""),"object"!=typeof(e=s.ancestorOrigins)||1===e.length&&e[0]===o)&&function e(){var t=s.search;n!==t&&(r.parent.postMessage({bm_method:"lensUpdateView",bm_value:new URLSearchParams(t).get("p")},o),n=t),setTimeout(e,100)}()}();