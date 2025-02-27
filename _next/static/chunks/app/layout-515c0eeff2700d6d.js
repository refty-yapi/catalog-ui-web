(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{985:function(e,l,t){Promise.resolve().then(t.bind(t,8868)),Promise.resolve().then(t.t.bind(t,3385,23))},8868:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return D}});var a=t(3827),s=t(7907),n=t(8792),r=t(4692),i=t(8053);let c=()=>(0,a.jsxs)("header",{className:"flex items-center justify-between p-4 rounded-bl-lg rounded-br-lg sticky top-0 z-50 ".concat(i.M.darkBg),children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("img",{src:"/logo.webp",alt:"Refty",className:"h-8 w-8 mr-2"}),(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("span",{className:"text-lg font-bold ".concat(i.M.inverseTxt),children:"Refty"})})]}),(0,a.jsx)(r.K,{onClick:()=>{},isDark:!1,children:"⭐️ Save Search"})]});var o=t(4090),u=t(8745),d=t(5460);function m(){let[e,l]=(0,o.useState)(null),t=(0,s.useRouter)();(0,o.useEffect)(()=>{let e=localStorage.getItem("user");e&&l(JSON.parse(e))},[]);let n=async()=>{localStorage.removeItem("user"),document.cookie="auth_token=; Max-Age=0; path=/",sessionStorage.clear(),t.push("/auth")};return e?(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xl font-bold mt-16 mb-4",children:"Profile"}),(0,a.jsxs)("p",{children:["Email: ",e.email]}),e.name&&(0,a.jsxs)("p",{children:["Name: ",e.name]}),(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)(r.K,{isDark:!0,onClick:n,children:"Logout"})})]}):null}let x=e=>{let{value:l,onChange:t,options:s}=e;return(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)("select",{value:l,onChange:e=>t(e.target.value),className:"block w-full p-2 border rounded"+i.M.mainBg,children:s.map(e=>(0,a.jsx)("option",{value:e.value,children:e.label},e.value))})})},h=e=>{let{value:l,onChange:t}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Purpose"}),(0,a.jsx)(x,{value:l,onChange:e=>{t(e)},options:[{value:"for-rent",label:"For Rent"},{value:"for-sale",label:"For Sale"},{value:"",label:"All"}]})]})},p=e=>{let{onPriceChange:l}=e,[t,s]=(0,o.useState)(""),[n,r]=(0,o.useState)("");return(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Price Range"}),(0,a.jsxs)("div",{className:"flex space-x-4 mt-1",children:[(0,a.jsx)("input",{type:"number",value:t,onChange:e=>{s(e.target.value),l(e.target.value,n)},placeholder:"Min",className:"p-2 border rounded w-1/2"}),(0,a.jsx)("input",{type:"number",value:n,onChange:e=>{r(e.target.value),l(t,e.target.value)},placeholder:"Max",className:"p-2 border rounded w-1/2"})]})]})},v=e=>{let{value:l,onChange:t}=e;return(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Rooms"}),(0,a.jsx)(x,{value:l,onChange:t,options:[{value:"studio",label:"Studio"},{value:"1",label:"1 BR"},{value:"2",label:"2 BR"},{value:"3",label:"3 BR"},{value:"4",label:"4 BR"},{value:"5",label:"5 BR"},{value:"6",label:"6 BR"},{value:"7",label:"7 BR"},{value:"7+",label:"7+"}]})]})},j=e=>{let{value:l,onChange:t}=e;return(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Furnishing"}),(0,a.jsx)(x,{value:l,onChange:t,options:[{value:"furnished",label:"Furnished"},{value:"unfurnished",label:"Unfurnished"},{value:"partly",label:"Partly"}]})]})},f=e=>{let{onAreaChange:l}=e,[t,s]=(0,o.useState)(""),[n,r]=(0,o.useState)("");return(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Area"}),(0,a.jsxs)("div",{className:"flex space-x-4 mt-1",children:[(0,a.jsx)("input",{type:"number",value:t,onChange:e=>{s(e.target.value),l(e.target.value,n)},placeholder:"Min",className:"p-2 border rounded w-1/2"}),(0,a.jsx)("input",{type:"number",value:n,onChange:e=>{r(e.target.value),l(t,e.target.value)},placeholder:"Max",className:"p-2 border rounded w-1/2"})]})]})},g=e=>{let{value:l,onChange:t}=e;return(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Completion Status"}),(0,a.jsx)(x,{value:l,onChange:t,options:[{value:"completed",label:"Completed"},{value:"under-construction",label:"Under-Construction"},{value:"",label:"All"}]})]})},b=e=>{let{onApplyFilters:l}=e,[t,s]=(0,o.useState)({purpose:"for-rent",minPrice:"",maxPrice:"",city:"Dubai",district:["All Districts"],rooms:"studio",furnishing:"furnished",minArea:"",maxArea:"",completionStatus:"completed"});return(0,o.useEffect)(()=>{s({...t,district:["All Districts"]})},[t.city]),(0,a.jsxs)("div",{className:"p-6 space-y-4",children:[(0,a.jsx)(h,{value:t.purpose,onChange:e=>s({...t,purpose:e})}),(0,a.jsx)(p,{onPriceChange:(e,l)=>s({...t,minPrice:e,maxPrice:l})}),(0,a.jsx)(v,{value:t.rooms,onChange:e=>s({...t,rooms:e})}),(0,a.jsx)(j,{value:t.furnishing,onChange:e=>s({...t,furnishing:e})}),(0,a.jsx)(f,{onAreaChange:(e,l)=>s({...t,minArea:e,maxArea:l})}),(0,a.jsx)(g,{value:t.completionStatus,onChange:e=>s({...t,completionStatus:e})}),(0,a.jsx)(r.K,{isDark:!0,onClick:()=>{l(t)},children:"Apply Filters"})]})};var y=t(9381),N=t(3203);function C(e){let{userId:l,onClose:t}=e,{saved:s}=(0,y.Z)(l),[n,i]=(0,o.useState)("Properties");return(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"rounded-md w-100",children:[(0,a.jsxs)("h2",{className:"text-lg font-bold mb-4",children:["Saved ",n]}),(0,a.jsx)("ul",{children:0===s.length?(0,a.jsx)("p",{children:"You haven't selected any favorite properties yet"}):(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4",children:s.map(e=>(0,a.jsx)(N.Z,{property:e,onClick:t},e.adId))})}),(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)(r.K,{onClick:t,isDark:!0,children:"Close"})})]})})}let k=e=>{let{onClose:l,type:t}=e;return(0,o.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),(0,a.jsx)(u.M,{children:(0,a.jsx)(d.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 z-10 flex justify-center items-center",onClick:l,children:(0,a.jsx)(d.E.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:50,opacity:0},className:"".concat(i.M.mainBg," w-full h-full max-h-screen overflow-y-auto p-5 relative"),onClick:e=>e.stopPropagation(),children:(0,a.jsx)("div",{className:"mt-16 mb-16",children:(e=>{switch(e){case"collections":return(0,a.jsx)("div",{children:"Strategy content"});case"saved":return(0,a.jsx)(C,{userId:"123",onClose:l});case"search":l();case"filter":return(0,a.jsx)(b,{onApplyFilters:e=>{console.log(e),l()}});case"profile":return(0,a.jsx)(m,{});default:return null}})(t)})})})})},S=[{id:1,type:"collections",title:"Collections",icon:"⚡️"},{id:2,type:"saved",title:"Saved",icon:"⭐️"},{id:3,type:"search",title:"Search",icon:"\uD83D\uDD0D"},{id:4,type:"filter",title:"Filter",icon:"⚙️"},{id:5,type:"profile",title:"Profile",icon:"\uD83D\uDC64 "}],w=e=>{let{onOpen:l,MenuItem:t,className:s}=e;return(0,a.jsxs)("button",{onClick:()=>l(),className:s,children:[(0,a.jsx)("p",{className:"text-center text-xs sm:text-sm md:text-base lg:text-lg",children:t.icon}),(0,a.jsx)("p",{className:"text-center text-xs sm:text-sm md:text-base lg:text-lg",children:t.title})]})},M=()=>{let[e,l]=(0,o.useState)(!1),[t,s]=(0,o.useState)(null),n=e=>{t===e?(l(!1),s(null)):(s(e),l(!0))},r=()=>{l(!1),s(null)};return(0,a.jsxs)("footer",{children:[(0,a.jsx)("nav",{className:"fixed bottom-0 px-5 w-full shadow-lg flex items-center justify-center z-40 ".concat(i.M.footerBg," ").concat(i.M.inverseTxt),children:S.map(e=>{let l=t===e.type;return(0,a.jsx)(w,{onOpen:()=>n(e.type),MenuItem:e,className:"flex-grow flex-shrink py-2 py-2 items-center\n                  ".concat(l?"".concat(i.M.txt," ").concat(i.M.actionBgColor):"".concat(i.M.inverseTxt," ").concat(i.M.darkBg)," \n                ")},e.id)})}),e&&(0,a.jsx)(k,{type:t,onClose:()=>r()})]})};function D(e){let{children:l}=e,t="/auth"===(0,s.usePathname)();return(0,a.jsxs)("div",{className:"flex flex-col min-h-screen",children:[!t&&(0,a.jsx)(c,{}),(0,a.jsx)("main",{className:"flex-grow",children:l}),!t&&(0,a.jsx)(M,{})]})}},3385:function(){}},function(e){e.O(0,[768,429,538,971,69,744],function(){return e(e.s=985)}),_N_E=e.O()}]);