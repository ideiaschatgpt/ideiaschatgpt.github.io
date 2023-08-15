/*! This file is auto-generated */
!function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return P}});var r=window.wp.i18n,n=(e,t)=>{let r,n,a=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(r=e.namespace.replace(/^\/|\/$/g,""),n=e.endpoint.replace(/^\//,""),a=n?r+"/"+n:r),delete e.namespace,delete e.endpoint,t({...e,path:a})},a=window.wp.url;function o(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}const s=({path:e,url:t,...r},n)=>({...r,url:t&&(0,a.addQueryArgs)(t,n),path:e&&(0,a.addQueryArgs)(e,n)}),i=e=>e.json?e.json():Promise.reject(e),c=e=>{const{next:t}=(e=>{if(!e)return{};const t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}})(e.headers.get("link"));return t};var d=async(e,t)=>{if(!1===e.parse)return t(e);if(!(e=>{const t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),r=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||r})(e))return t(e);const r=await P({...s(e,{per_page:100}),parse:!1}),n=await i(r);if(!Array.isArray(n))return n;let a=c(r);if(!a)return n;let o=[].concat(n);for(;a;){const t=await P({...e,path:void 0,url:a,parse:!1}),r=await i(t);o=o.concat(r),a=c(t)}return o};const p=new Set(["PATCH","PUT","DELETE"]),u="GET",h=(e,t=!0)=>Promise.resolve(((e,t=!0)=>t?204===e.status?null:e.json?e.json():Promise.reject(e):e)(e,t)).catch((e=>l(e,t)));function l(e,t=!0){if(!t)throw e;return(e=>{const t={code:"invalid_json",message:(0,r.__)("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((()=>{throw t}))})(e).then((e=>{const t={code:"unknown_error",message:(0,r.__)("An unknown error occurred.")};throw e||t}))}const f={Accept:"application/json, */*;q=0.1"},w={credentials:"include"},m=[(e,t)=>("string"!=typeof e.url||(0,a.hasQueryArg)(e.url,"_locale")||(e.url=(0,a.addQueryArgs)(e.url,{_locale:"user"})),"string"!=typeof e.path||(0,a.hasQueryArg)(e.path,"_locale")||(e.path=(0,a.addQueryArgs)(e.path,{_locale:"user"})),t(e)),n,(e,t)=>{const{method:r=u}=e;return p.has(r.toUpperCase())&&(e={...e,headers:{...e.headers,"X-HTTP-Method-Override":r,"Content-Type":"application/json"},method:"POST"}),t(e)},d],g=e=>{if(e.status>=200&&e.status<300)return e;throw e};let y=e=>{const{url:t,path:n,data:a,parse:o=!0,...s}=e;let{body:i,headers:c}=e;return c={...f,...c},a&&(i=JSON.stringify(a),c["Content-Type"]="application/json"),window.fetch(t||n||window.location.href,{...w,...s,body:i,headers:c}).then((e=>Promise.resolve(e).then(g).catch((e=>l(e,o))).then((e=>h(e,o)))),(e=>{if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:(0,r.__)("You are probably offline.")}}))};function _(e){return m.reduceRight(((e,t)=>r=>t(r,e)),y)(e).catch((t=>"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(_.nonceEndpoint).then(g).then((e=>e.text())).then((t=>(_.nonceMiddleware.nonce=t,_(e))))))}_.use=function(e){m.unshift(e)},_.setFetchHandler=function(e){y=e},_.createNonceMiddleware=function(e){const t=(e,r)=>{const{headers:n={}}=e;for(const a in n)if("x-wp-nonce"===a.toLowerCase()&&n[a]===t.nonce)return r(e);return r({...e,headers:{...n,"X-WP-Nonce":t.nonce}})};return t.nonce=e,t},_.createPreloadingMiddleware=function(e){const t=Object.fromEntries(Object.entries(e).map((([e,t])=>[(0,a.normalizePath)(e),t])));return(e,r)=>{const{parse:n=!0}=e;let s=e.path;if(!s&&e.url){const{rest_route:t,...r}=(0,a.getQueryArgs)(e.url);"string"==typeof t&&(s=(0,a.addQueryArgs)(t,r))}if("string"!=typeof s)return r(e);const i=e.method||"GET",c=(0,a.normalizePath)(s);if("GET"===i&&t[c]){const e=t[c];return delete t[c],o(e,!!n)}if("OPTIONS"===i&&t[i]&&t[i][c]){const e=t[i][c];return delete t[i][c],o(e,!!n)}return r(e)}},_.createRootURLMiddleware=e=>(t,r)=>n(t,(t=>{let n,a=t.url,o=t.path;return"string"==typeof o&&(n=e,-1!==e.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(o=o.replace("?","&")),a=n+o),r({...t,url:a})})),_.fetchAllMiddleware=d,_.mediaUploadMiddleware=(e,t)=>{if(!function(e){const t=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&t}(e))return t(e);let n=0;const a=e=>(n++,t({path:`/wp/v2/media/${e}/post-process`,method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((()=>n<5?a(e):(t({path:`/wp/v2/media/${e}?force=true`,method:"DELETE"}),Promise.reject()))));return t({...e,parse:!1}).catch((t=>{const n=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&n?a(n).catch((()=>!1!==e.parse?Promise.reject({code:"post_process",message:(0,r.__)("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t))):l(t,e.parse)})).then((t=>h(t,e.parse)))},_.createThemePreviewMiddleware=e=>(t,r)=>("string"!=typeof t.url||(0,a.hasQueryArg)(t.url,"wp_theme_preview")||(t.url=(0,a.addQueryArgs)(t.url,{wp_theme_preview:e})),"string"!=typeof t.path||(0,a.hasQueryArg)(t.path,"wp_theme_preview")||(t.path=(0,a.addQueryArgs)(t.path,{wp_theme_preview:e})),r(t));var P=_;(window.wp=window.wp||{}).apiFetch=t.default}();