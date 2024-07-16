import{d as M,u as P,N as R,I as y,T as q,J as A,c as b,a as s,b as e,e as d,w as o,k as F,ab as U,F as W,l as D,o as w,Z as H,i as S,R as v,f as l,t as n,U as J,h,_ as V,aa as Z,V as G,aS as K,j as T,g as E,m as L,cg as Q,ak as X,n as Y}from"./app.02c7459f.js";import{_ as ee}from"./Admin.a768db28.js";import{u as oe}from"./usePageMode.8fc7471d.js";import{_ as se}from"./PageHeader.ca32a0c2.js";import{_ as ae}from"./Panel.30e9fcce.js";import{_ as te}from"./ColorPicker.162c0fab.js";import{E as re}from"./Eye.0ff3a7ea.js";import{T as le}from"./Trash.4a91c762.js";import{A as ne}from"./ArrowTopRightOnSquare.459d61de.js";import{_ as ce}from"./Flex.d1bb12d6.js";import"./QueueList.11778f30.js";const ue={class:"row-py w-full mx-auto"},ie={key:0,class:"flex"},me={class:"row-px"},de=["onSubmit"],pe={for:"name"},fe={class:"w-full"},_e=M({layout:ee}),Ve=Object.assign(_e,{__name:"CreateEdit",props:{mode:{required:!0,type:String,default:"create"},workspace:{type:Object}},setup(g){const p=g,{t:a}=P(),{notify:x}=Y(),k=L("routePrefix"),N=L("confirmation"),$=R(()=>i.value?a("workspace.create_workspace"):a("workspace.edit_workspace")),{isCreate:i,isEdit:f}=oe(),m=y(!1),_=y(""),c=q({name:f.value?p.workspace.name:"",hex_color:f.value?p.workspace.hex_color:""}),O=()=>{c.hex_color=_.value,m.value=!1},I=()=>{const r=Q();return r[D.exports.random(0,r.length-1)]};A(()=>{if(i.value){const r=I();c.hex_color=r,_.value=r}f.value&&(_.value=p.workspace.hex_color)});const C=(r=!1)=>{c.transform(t=>({...t,login:r})).post(route(`${k}.workspaces.store`))},j=()=>{c.put(route(`${k}.workspaces.update`,{workspace:p.workspace.uuid}),{onSuccess:()=>{x("success",a("workspace.workspace_updated"))}})},z=()=>{N().title(a("workspace.delete_workspace")).description(a("workspace.confirm_delete_workspace")).destructive().onConfirm(r=>{r.isLoading(!0),X.delete(route(`${k}.workspaces.delete`,{workspace:p.workspace.uuid}),{preserveScroll:!0,onSuccess(){x("success",a("workspace.workspace_deleted"))},onFinish(){r.reset()}})}).show()},B=()=>{i.value&&C(),f.value&&j()};return(r,t)=>(w(),b(W,null,[s(e(H),{title:e($)},null,8,["title"]),d("div",ue,[s(se,{title:e($)},{default:o(()=>[e(f)?(w(),b("div",ie,[s(e(S),{href:r.route("mixpost.switchWorkspace",{workspace:g.workspace.uuid,redirect:!0}),method:"post",as:"button",type:"button",class:"mr-xs"},{default:o(()=>[s(v,{size:"sm"},{icon:o(()=>[s(ne)]),default:o(()=>[l(" "+n(e(a)("general.open")),1)]),_:1})]),_:1},8,["href"]),s(e(S),{href:r.route(`${e(k)}.workspaces.view`,{workspace:g.workspace.uuid}),class:"mr-xs"},{default:o(()=>[s(v,{size:"sm"},{icon:o(()=>[s(re)]),default:o(()=>[l(" "+n(e(a)("general.view")),1)]),_:1})]),_:1},8,["href"]),s(J,{onClick:z,size:"sm"},{icon:o(()=>[s(le)]),_:1})])):h("",!0)]),_:1},8,["title"]),d("div",me,[d("form",{method:"post",onSubmit:F(B,["prevent"])},[s(ae,null,{title:o(()=>[l(n(e(a)("general.details")),1)]),default:o(()=>[s(V,null,{title:o(()=>[d("label",pe,n(e(a)("general.name")),1)]),default:o(()=>[d("div",fe,[s(Z,{modelValue:e(c).name,"onUpdate:modelValue":t[0]||(t[0]=u=>e(c).name=u),type:"text",id:"name",placeholder:e(a)("workspace.workspace_name"),class:"w-full",autocomplete:"off",autofocus:e(i),required:""},null,8,["modelValue","placeholder","autofocus"]),s(G,{message:e(c).errors.name,class:"mt-1"},null,8,["message"])])]),_:1}),s(V,{class:"mt-lg"},{title:o(()=>[l(" Color ")]),default:o(()=>[d("div",{onClick:t[1]||(t[1]=u=>m.value=!0),style:K({background:e(c).hex_color}),role:"button",type:"button",class:"w-xl h-xl rounded-md"},null,4)]),_:1}),s(ce,{class:"mt-lg"},{default:o(()=>[s(T,{type:"submit"},{default:o(()=>[l(n(e(i)?e(a)("general.create"):e(a)("general.update")),1)]),_:1}),e(i)?(w(),E(v,{key:0,onClick:t[2]||(t[2]=u=>C(!0)),type:"button",class:"ml-xs"},{default:o(()=>[l(n(e(a)("workspace.create_and_login")),1)]),_:1})):h("",!0)]),_:1})]),_:1})],40,de)])]),s(U,{show:m.value,"max-width":"md",onClose:t[5]||(t[5]=u=>m.value=!1)},{header:o(()=>[l(n(e(a)("workspace.change_workspace_color")),1)]),body:o(()=>[m.value?(w(),E(te,{key:0,modelValue:_.value,"onUpdate:modelValue":t[3]||(t[3]=u=>_.value=u)},null,8,["modelValue"])):h("",!0)]),footer:o(()=>[s(v,{onClick:t[4]||(t[4]=u=>m.value=!1),class:"mr-xs rtl:mr-0 rtl:ml-xs"},{default:o(()=>[l(n(e(a)("general.cancel")),1)]),_:1}),s(T,{onClick:O},{default:o(()=>[l(n(e(a)("general.done")),1)]),_:1})]),_:1},8,["show"])],64))}});export{Ve as default};