import{I as x,N as n,o as t,c as l,e,H as g,b as c,g as _,O as p,A as b,a as y,X as h,h as i,P as k,Q as s}from"./app.02c7459f.js";const C={key:0,class:"flex p-md rounded-md bg-alert"},w={class:"w-full flex items-center justify-between"},B={class:"flex items-center"},I={class:"text-alert-context"},j={__name:"Alert",props:{variant:{type:String,default:"info"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(a,{emit:d}){const o=a,r=x(!0),m=()=>{r.value=!1,d("close")},u=n(()=>({success:k,warning:s,error:s,info:s})[o.variant]),f=n(()=>({info:"bg-cyan-100 text-cyan-600",success:"bg-lime-100 text-lime-600",warning:"bg-orange-100 text-orange-600",error:"bg-red-100 text-red-600"})[o.variant]);return(v,N)=>r.value?(t(),l("div",C,[e("div",w,[e("div",B,[e("div",null,[e("div",{class:g([c(f),"w-8 h-8 rounded-full flex items-center justify-center mr-sm rtl:mr-0 rtl:ml-sm"])},[(t(),_(p(c(u))))],2)]),e("div",I,[b(v.$slots,"default")])]),a.closeable?(t(),l("button",{key:0,onClick:m,class:"ml-2xl"},[y(h,{class:"text-gray-200"})])):i("",!0)])])):i("",!0)}};export{j as _};
