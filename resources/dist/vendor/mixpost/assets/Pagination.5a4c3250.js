import{N as _,o as t,c as a,e as b,F as s,r as g,H as p,g as n,O as u,f as m,t as i,w as v,b as d,i as h}from"./app.02c7459f.js";import{C,a as w}from"./ChevronLeft.9c963410.js";const N={class:"bg-white border border-gray-100 rounded-lg p-sm w-fit"},B={class:"flex flex-wrap items-center space-x-1"},O={__name:"Pagination",props:{meta:{type:Object,default:{current_page:1,from:1,last_page:1,per_page:2,to:1,total:0,links:[]}},links:{type:Object,default:{first:null,last:null,next:null,prev:null}}},setup(x){const f=x,l="px-sm py-xs rounded-md leading-4",y=_(()=>f.meta.links.map(r=>{const o=r.label.replace("&laquo; ","").replace(" &raquo;","");return{active:r.active,url:r.url,label:o,component:isNaN(parseInt(r.label))?{Next:C,Previous:w}[o]:null}}));return(r,o)=>(t(),a("div",N,[b("div",B,[(t(!0),a(s,null,g(d(y),(e,c)=>(t(),a(s,null,[e.url===null?(t(),a("div",{key:c,class:p([[l,{"!px-0":e.label==="...","!px-xs":e.component}],"text-gray-400"])},[e.component?(t(),n(u(e.component),{key:0})):(t(),a(s,{key:1},[m(i(e.label),1)],64))],2)):(t(),n(d(h),{key:`link-${c}`,disabled:"",class:p(["transition-colors ease-in-out duration-200",[l,{"bg-primary-500 text-white":e.active,"hover:text-primary-500 focus:text-primary-500":!e.active,"!px-xs":e.component}]]),href:e.url},{default:v(()=>[e.component?(t(),n(u(e.component),{key:0})):(t(),a(s,{key:1},[m(i(e.label),1)],64))]),_:2},1032,["class","href"]))],64))),256))])]))}};export{O as _};