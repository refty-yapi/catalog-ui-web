(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{2029:function(e,t,r){Promise.resolve().then(r.bind(r,1918))},8033:function(e,t){"use strict";let r="https://api.refty.ai";t.Z=(e,t)=>void 0===t?fetch(r+e,t):fetch(r+e)},1918:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Property}});var n=r(7437),o=r(2265),s=r(4033),i=r(8033);function Property(){let e=(0,s.useSearchParams)().get("id"),[t,r]=(0,o.useState)(void 0);return((0,o.useEffect)(()=>{(async function(e){(0,i.Z)(e).then(e=>404===e.status?null:e.json()).then(e=>r(e))})("/property/".concat(e))},[e]),void 0===t)?(0,n.jsx)(n.Fragment,{children:"Loading..."}):null===t?(0,n.jsx)(n.Fragment,{children:"Sorry, we couldn't find the property you're searching for."}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl text-center",children:t.title}),(0,n.jsx)("pre",{children:JSON.stringify(t,null,2)})]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,s={},f=null,l=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:f,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(290)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=2029)}),_N_E=e.O()}]);