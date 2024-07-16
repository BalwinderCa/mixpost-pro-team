import{d as w,u as $,I as x,J as b,N as C,c as u,a,b as e,e as l,w as t,F as f,o as s,Z as N,r as B,g,f as n,t as r,h,j as I,U as L,ak as T}from"./app.02c7459f.js";import{_ as V,D}from"./Admin.a768db28.js";import{_ as j}from"./PageHeader.ca32a0c2.js";import{_ as F}from"./Panel.30e9fcce.js";import{T as O,_ as q}from"./Tab.203b4d79.js";import{_ as A}from"./Alert.e0955a42.js";import{_ as E}from"./Textarea.b0fd3982.js";import{_ as J}from"./NoResult.90dab0cf.js";import"./QueueList.11778f30.js";import"./Flex.d1bb12d6.js";const M={class:"w-full mx-auto row-py"},S={class:"w-full row-px"},U={class:"mt-lg row-px w-full"},Z={class:"mt-md"},z=["href"],G=w({layout:V}),se=Object.assign(G,{__name:"Logs",props:{logs:{required:!0,type:Array}},setup(d){const p=d,{t:m}=$(),v=m("system.system_logs"),c=x(null);b(()=>{p.logs.length&&(c.value=p.logs[0].name)});const o=C(()=>{const i=p.logs.find(y=>y.name===c.value);return i||!1}),k=()=>{T.delete(route("mixpost.system.logs.clear"),{data:{filename:o.value.name}})};return(i,y)=>(s(),u(f,null,[a(e(N),{title:e(v)},null,8,["title"]),l("div",M,[a(j,{title:e(v)},null,8,["title"]),l("div",S,[a(O,null,{default:t(()=>[(s(!0),u(f,null,B(d.logs,_=>(s(),g(q,{key:_.name,onClick:H=>c.value=_.name,active:c.value===_.name},{icon:t(()=>[a(D)]),default:t(()=>[n(" "+r(_.name),1)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),l("div",U,[a(F,{class:"mt-lg"},{default:t(()=>[d.logs.length?(s(),u(f,{key:0},[e(o)?(s(),u(f,{key:0},[e(o).error?(s(),g(A,{key:0,closeable:!1,variant:"warning",class:"mb-md"},{default:t(()=>[n(r(e(o).error),1)]),_:1})):h("",!0),a(E,{value:e(o).contents,class:"h-96",readonly:""},null,8,["value"])],64)):h("",!0),l("div",Z,[l("a",{href:i.route("mixpost.system.logs.download",{filename:e(o).name}),target:"_blank"},[a(I,{class:"mr-xs rtl:mr-0 rtl:ml-xs"},{default:t(()=>[n(r(e(m)("general.download")),1)]),_:1})],8,z),a(L,{onClick:k},{default:t(()=>[n(r(e(m)("general.clean_up")),1)]),_:1})])],64)):(s(),g(J,{key:1},{default:t(()=>[n(r(e(m)("system.there_are_no_logs")),1)]),_:1}))]),_:1})])])],64))}});export{se as default};