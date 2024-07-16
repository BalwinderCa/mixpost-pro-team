import{d as x,T as D,N as F,c as C,a as o,b as t,e as r,w as e,k as M,j as G,F as T,o as c,Z as R,g as h,h as k,f as m,t as n,_ as f,V as p,aa as v,r as Z,m as $}from"./app.02c7459f.js";import{u as z}from"./useRouter.01ffcfae.js";import{_ as A}from"./Admin.a768db28.js";import{_ as H}from"./PageHeader.ca32a0c2.js";import{u as J}from"./usePageMode.8fc7471d.js";import{_ as K}from"./WebhookAction.cfe5e2ef.js";import{_ as w}from"./Panel.30e9fcce.js";import{_ as y}from"./Select.f31f226b.js";import{_ as q}from"./Checkbox.52b731a7.js";import{_ as P}from"./LabelSuffix.39e31413.js";import{_ as S}from"./Label.a11befde.js";import{_ as N}from"./Flex.d1bb12d6.js";import{_ as Q}from"./ChangeSecret.8e212731.js";import"./QueueList.11778f30.js";import"./Trash.4a91c762.js";import"./Alert.e0955a42.js";import"./VerticalGroup.b44ff91a.js";const W={class:"w-full mx-auto row-py"},X={class:"row-px"},Y=["onSubmit"],I={for:"name"},ee={for:"callback_url"},te={for:"method"},oe=r("option",{value:"post"},"POST",-1),ae=r("option",{value:"get"},"GET",-1),se=r("option",{value:"put"},"PUT",-1),le=r("option",{value:"delete"},"DELETE",-1),re={for:"content_type"},de=r("option",{value:"application/json"},"application/json",-1),ne=r("option",{value:"application/x-www-form-urlencoded"},"application/x-www-form-urlencoded ",-1),ie={for:"max_attempts"},me=r("option",{value:"1"},"1",-1),ue=r("option",{value:"2"},"2",-1),ce=r("option",{value:"3"},"3",-1),fe={for:"secret"},pe={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-sm"},_e={class:"flex items-center mt-lg"},he=x({layout:A}),Be=Object.assign(he,{__name:"CreateEdit",props:{mode:{required:!0,type:String,default:"create"},record:{type:Object},events:{type:Object}},setup(_){const u=_,V=$("routePrefix");$("confirmation"),$("authPasswordConfirmation");const{isCreate:g,isEdit:i}=J(),{onError:E}=z(),a=D({name:i.value?u.record.name:"",callback_url:i.value?u.record.callback_url:"",method:i.value?u.record.method:"post",content_type:i.value?u.record.content_type:"application/json",max_attempts:i.value?u.record.max_attempts:1,secret:i.value?u.record.secret:"",events:i.value?u.record.events:[],active:i.value?u.record.active:!0}),B=F(()=>a.method==="post"||a.method==="put"||a.method==="delete"),U=(s=!1)=>{a.transform(l=>({...l,login:s})).post(route(`${V}.system.webhooks.store`),{onError:l=>{E(l,U)}})},j=()=>{a.put(route(`${V}.system.webhooks.update`,{webhook:u.record.id}),{preserveScroll:!0,onError:s=>{E(s,j)}})},L=()=>{g.value&&U(),i.value&&j()};return(s,l)=>(c(),C(T,null,[o(t(R),{title:_.mode==="create"?s.$t("webhook.create_webhook"):s.$t("webhook.edit_webhook")},null,8,["title"]),r("div",W,[o(H,{title:_.mode==="create"?s.$t("webhook.create_webhook"):s.$t("webhook.edit_webhook")},{default:e(()=>[t(i)?(c(),h(K,{key:0,record:_.record,edit:!1},null,8,["record"])):k("",!0)]),_:1},8,["title"]),r("div",X,[r("form",{method:"post",onSubmit:M(L,["prevent"])},[o(w,null,{title:e(()=>[m(n(s.$t("general.details")),1)]),default:e(()=>[o(f,{class:"form-field"},{title:e(()=>[r("label",I,[m(n(s.$t("general.name"))+" ",1),o(P,{danger:!0},{default:e(()=>[m("*")]),_:1})])]),footer:e(()=>[o(p,{message:t(a).errors.name},null,8,["message"])]),default:e(()=>[o(v,{modelValue:t(a).name,"onUpdate:modelValue":l[0]||(l[0]=d=>t(a).name=d),type:"text",id:"name",placeholder:s.$t("general.name"),autofocus:t(g),required:""},null,8,["modelValue","placeholder","autofocus"])]),_:1}),o(f,{class:"form-field mt-lg"},{title:e(()=>[r("label",ee,[m(n(s.$t("webhook.callback_url"))+" ",1),o(P,{danger:!0},{default:e(()=>[m("*")]),_:1})])]),footer:e(()=>[o(p,{message:t(a).errors.callback_url},null,8,["message"])]),default:e(()=>[o(v,{modelValue:t(a).callback_url,"onUpdate:modelValue":l[1]||(l[1]=d=>t(a).callback_url=d),type:"url",id:"callback_url",placeholder:"https://example.com/webhook",required:""},null,8,["modelValue"])]),_:1}),o(f,{class:"form-field mt-lg"},{title:e(()=>[r("label",te,n(s.$t("webhook.method")),1)]),footer:e(()=>[o(p,{message:t(a).errors.method},null,8,["message"])]),default:e(()=>[o(y,{modelValue:t(a).method,"onUpdate:modelValue":l[2]||(l[2]=d=>t(a).method=d),id:"method",required:""},{default:e(()=>[oe,ae,se,le]),_:1},8,["modelValue"])]),_:1}),t(B)?(c(),h(f,{key:0,class:"form-field mt-lg"},{title:e(()=>[r("label",re,n(s.$t("webhook.content_type")),1)]),footer:e(()=>[o(p,{message:t(a).errors.content_type},null,8,["message"])]),default:e(()=>[o(y,{modelValue:t(a).content_type,"onUpdate:modelValue":l[3]||(l[3]=d=>t(a).content_type=d),id:"content_type",required:""},{default:e(()=>[de,ne]),_:1},8,["modelValue"])]),_:1})):k("",!0),o(f,{class:"form-field mt-lg"},{title:e(()=>[r("label",ie,n(s.$t("webhook.max_attempts")),1)]),footer:e(()=>[o(p,{message:t(a).errors.max_attempts},null,8,["message"])]),default:e(()=>[o(y,{modelValue:t(a).max_attempts,"onUpdate:modelValue":l[4]||(l[4]=d=>t(a).max_attempts=d),id:"max_attempts",required:""},{default:e(()=>[me,ue,ce]),_:1},8,["modelValue"])]),_:1}),o(f,{class:"form-field mt-lg"},{title:e(()=>[m(n(s.$t("general.status")),1)]),footer:e(()=>[o(p,{message:t(a).errors.active},null,8,["message"])]),default:e(()=>[o(N,{class:"items-center"},{default:e(()=>[o(q,{checked:t(a).active,"onUpdate:checked":l[5]||(l[5]=d=>t(a).active=d),id:"active"},null,8,["checked"]),o(S,{for:"active",class:"!mb-0"},{default:e(()=>[m(n(s.$t("general.active")),1)]),_:1})]),_:1})]),_:1})]),_:1}),o(w,{class:"mt-lg"},{title:e(()=>[m(n(s.$t("general.security")),1)]),default:e(()=>[t(g)?(c(),h(f,{key:0},{title:e(()=>[r("label",fe,n(s.$t("webhook.secret"))+" ("+n(s.$t("general.optional"))+")",1)]),footer:e(()=>[o(p,{message:t(a).errors.secret},null,8,["message"])]),default:e(()=>[o(v,{modelValue:t(a).secret,"onUpdate:modelValue":l[6]||(l[6]=d=>t(a).secret=d),type:"text",id:"secret",placeholder:s.$t("webhook.secret")},null,8,["modelValue","placeholder"])]),_:1})):k("",!0),t(i)?(c(),h(Q,{key:1,webhookId:_.record.id},null,8,["webhookId"])):k("",!0)]),_:1}),o(w,{class:"mt-lg"},{title:e(()=>[m(n(s.$t("webhook.events")),1)]),default:e(()=>[r("div",pe,[(c(!0),C(T,null,Z(_.events,(d,b)=>(c(),h(N,{key:b,responsive:!1,class:"items-center"},{default:e(()=>[o(q,{checked:t(a).events,"onUpdate:checked":l[7]||(l[7]=O=>t(a).events=O),value:b,id:b},null,8,["checked","value","id"]),o(S,{for:b,class:"!mb-0"},{default:e(()=>[m(n(d),1)]),_:2},1032,["for"])]),_:2},1024))),128))])]),_:1}),r("div",_e,[o(G,{type:"submit",isLoading:t(a).processing,disabled:t(a).processing},{default:e(()=>[m(n(t(g)?s.$t("general.create"):s.$t("general.update")),1)]),_:1},8,["isLoading","disabled"])])],40,Y)])])],64))}});export{Be as default};