import{I as b,J as y,ae as C,l as v,ak as x,c as p,a as s,b as B,e as r,w as a,h as k,F as $,m,o,Z as D,f,t as u,r as j,g as w}from"./app.02c7459f.js";import{u as N}from"./useRouter.01ffcfae.js";import{_ as O}from"./PageHeader.ca32a0c2.js";import{_ as V}from"./WebhookAction.cfe5e2ef.js";import{_ as I}from"./Panel.30e9fcce.js";import{_ as S}from"./Flex.d1bb12d6.js";import{_ as T}from"./Pagination.5a4c3250.js";import{_ as F}from"./NoResult.90dab0cf.js";import{_ as P,a as q}from"./WebhookDeliveryItemView.1fe87c93.js";import{T as E,_ as h}from"./Tab.203b4d79.js";import"./Trash.4a91c762.js";import"./QueueList.11778f30.js";import"./ChevronLeft.9c963410.js";import"./Clock.cf8064ed.js";import"./SectionTitle.7cbe1738.js";import"./SectionBorder.ea5c137e.js";import"./Refresh.d1d5f060.js";const J={class:"w-full mx-auto row-py"},L={class:"text-gray-500"},M={class:"row-px"},R={class:"w-full mt-lg"},W={class:"w-full md:w-1/2 border-r border-gray-100"},Z={class:"w-full md:w-1/2"},z={key:0,class:"mt-lg"},ue={__name:"WebhookDeliveries",props:{filter:{type:Object,default:{}},webhook:{type:Object,required:!0},deliveries:{type:Object}},setup(e){const c=e;m("routePrefix");const g=m("workspaceCtx");m("confirmation"),m("authPasswordConfirmation"),N();const n=b({status:c.filter.status}),d=b(null);y(()=>{c.deliveries.data.length&&_(c.deliveries.data[0])});const _=t=>{d.value=t};return C(()=>v.exports.cloneDeep(n.value),v.exports.throttle(()=>{x.get(route("mixpost.webhooks.deliveries.index",{workspace:g.id,webhook:c.webhook.id}),v.exports.pickBy(n.value),{preserveState:!0,preserveScroll:!0,only:["deliveries","filter"]})},300)),(t,l)=>(o(),p($,null,[s(B(D),{title:t.$t("webhook.deliveries")},null,8,["title"]),r("div",J,[s(O,{title:t.$t("webhook.deliveries")},{description:a(()=>[f(u(e.webhook.name)+" ",1),r("div",L,u(e.webhook.callback_url),1)]),default:a(()=>[s(V,{record:e.webhook,create:!1,deliveries:!1},null,8,["record"])]),_:1},8,["title"]),r("div",M,[r("div",R,[s(E,null,{default:a(()=>[s(h,{onClick:l[0]||(l[0]=i=>n.value.status=null),active:!t.$page.props.filter.status},{default:a(()=>[f(u(t.$t("general.all")),1)]),_:1},8,["active"]),s(h,{onClick:l[1]||(l[1]=i=>n.value.status="success"),active:t.$page.props.filter.status==="success"},{default:a(()=>[f(u(t.$t("general.succeeded")),1)]),_:1},8,["active"]),s(h,{onClick:l[2]||(l[2]=i=>n.value.status="error"),active:t.$page.props.filter.status==="error"},{default:a(()=>[f(u(t.$t("general.failed")),1)]),_:1},8,["active"])]),_:1})]),s(I,{class:"mt-lg","with-padding":!1},{default:a(()=>[s(S,{gap:"gap-0"},{default:a(()=>[r("div",W,[(o(!0),p($,null,j(e.deliveries.data,i=>(o(),w(P,{key:i.id,item:i,active:d.value&&d.value.id===i.id,onClick:A=>_(i)},null,8,["item","active","onClick"]))),128)),e.deliveries.meta.total?k("",!0):(o(),w(F,{key:0,class:"py-md px-md"}))]),r("div",Z,[d.value?(o(),w(q,{key:0,webhookId:e.webhook.id,delivery:d.value},null,8,["webhookId","delivery"])):k("",!0)])]),_:1})]),_:1}),e.deliveries.meta.links.length>3?(o(),p("div",z,[s(T,{meta:e.deliveries.meta,links:e.deliveries.links},null,8,["meta","links"])])):k("",!0)])])],64))}};export{ue as default};
