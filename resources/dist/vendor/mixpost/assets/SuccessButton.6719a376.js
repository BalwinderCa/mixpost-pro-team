import{cc as d,o as s,c as n,H as l,A as r,h as a,a as c,cd as m,b as u}from"./app.02c7459f.js";const f=["type"],g={key:2,class:"absolute left-0 top-0 flex justify-center items-center w-full h-full bg-green-500"},h={__name:"SuccessButton",props:{type:{type:String,default:"button"},size:{type:String,default:"lg"},isLoading:{type:Boolean,default:!1},hiddenTextOnSmallScreen:{type:Boolean,default:!1}},setup(e){const o=e,{sizeClass:i}=d(o.size);return(t,x)=>(s(),n("button",{type:e.type,class:l([u(i),"relative inline-flex items-center bg-green-500 border border-transparent rounded-md font-medium text-xs text-white uppercase tracking-widest rtl:tracking-normal hover:bg-green-700 active:bg-green-700 focus:border-green-700 focus:shadow-outline-green disabled:bg-green-400 disabled:cursor-not-allowed transition ease-in-out duration-200"])},[t.$slots.icon?(s(),n("span",{key:0,class:l(["inline-flex",{"sm:mr-xs rtl:sm:mr-0 rtl:sm:ml-xs":t.$slots.default,"mr-0 sm:mr-xs rtl:sm:mr-0 rtl:sm:ml-xs":e.hiddenTextOnSmallScreen,"mr-xs rtl:mr-xs rtl:ml-xs":!e.hiddenTextOnSmallScreen&&t.$slots.default}])},[r(t.$slots,"icon")],2)):a("",!0),t.$slots.default?(s(),n("span",{key:1,class:l(["inline-flex items-center",{"hidden sm:inline":e.hiddenTextOnSmallScreen}])},[r(t.$slots,"default")],2)):a("",!0),e.isLoading?(s(),n("span",g,[c(m,{class:"animate-spin text-white"})])):a("",!0)],10,f))}};export{h as _};