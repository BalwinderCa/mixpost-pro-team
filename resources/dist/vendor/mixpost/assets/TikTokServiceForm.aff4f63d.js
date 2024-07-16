import{u as k,I as $,o as h,g as V,w as e,e as a,a as t,t as c,b as m,f as r,_ as f,V as u,aa as y,j as x,ak as b,n as T}from"./app.02c7459f.js";import{_ as S}from"./Panel.30e9fcce.js";import{_ as w}from"./ReadDocHelp.d44d4963.js";import{_ as C}from"./ProviderIcon.ede0b558.js";import{_ as N}from"./Select.f31f226b.js";import{_ as U}from"./InputHidden.3d1d6b03.js";import{_ as B}from"./Checkbox.52b731a7.js";import{_ as I}from"./Flex.d1bb12d6.js";import{_ as j}from"./Label.a11befde.js";import{_}from"./LabelSuffix.39e31413.js";import"./Admin.a768db28.js";import"./QueueList.11778f30.js";import"./Eye.0ff3a7ea.js";const D={class:"flex items-center"},O={class:"mr-xs"},q=a("span",null,"TikTok",-1),E={href:"https://developers.tiktok.com/apps/",class:"link",target:"_blank"},F={for:"client_id"},K={for:"client_secret"},P=a("label",{for:"type"},"Share Type",-1),z=a("option",{value:"inbox"},"Inbox",-1),A=a("option",{value:"direct"},"Direct Post",-1),oe={__name:"TikTokServiceForm",props:{form:{required:!0,type:Object}},setup(o){const p=o,{t:n}=k(),{notify:g}=T(),s=$({}),v=()=>{s.value={},b.put(route("mixpost.services.update",{service:"tiktok"}),p.form,{preserveScroll:!0,onSuccess(){g("success",n("service.service_saved",{service:"TikTok"}))},onError:d=>{s.value=d}})};return(d,i)=>(h(),V(S,null,{title:e(()=>[a("div",D,[a("span",O,[t(C,{provider:"tiktok"})]),q])]),description:e(()=>[a("a",E,c(m(n)("service.create_app",{name:"TikTok"})),1),r(". "),t(w,{href:`${d.$page.props.mixpost.docs_link}/services/social/tik-tok/`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[t(f,{class:"mt-lg"},{title:e(()=>[a("label",F,[r("Client Key "),t(_,{danger:""},{default:e(()=>[r("*")]),_:1})])]),footer:e(()=>[t(u,{message:s.value["configuration.client_id"]},null,8,["message"])]),default:e(()=>[t(y,{modelValue:o.form.configuration.client_id,"onUpdate:modelValue":i[0]||(i[0]=l=>o.form.configuration.client_id=l),error:s.value["configuration.client_id"]!==void 0,type:"text",id:"client_id",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),t(f,{class:"mt-lg"},{title:e(()=>[a("label",K,[r("Client secret "),t(_,{danger:""},{default:e(()=>[r("*")]),_:1})])]),footer:e(()=>[t(u,{message:s.value["configuration.client_secret"]},null,8,["message"])]),default:e(()=>[t(U,{modelValue:o.form.configuration.client_secret,"onUpdate:modelValue":i[1]||(i[1]=l=>o.form.configuration.client_secret=l),error:s.value["configuration.client_secret"]!==void 0,id:"client_secret",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),t(f,{class:"mt-lg"},{title:e(()=>[P]),footer:e(()=>[t(u,{message:s.value["configuration.share_type"]},null,8,["message"])]),default:e(()=>[t(N,{modelValue:o.form.configuration.share_type,"onUpdate:modelValue":i[2]||(i[2]=l=>o.form.configuration.share_type=l),error:s.value["configuration.share_type"]!==void 0,id:"type"},{default:e(()=>[z,A]),_:1},8,["modelValue","error"])]),_:1}),t(f,{class:"mt-lg"},{title:e(()=>[r(c(m(n)("general.status")),1)]),footer:e(()=>[t(u,{message:s.value.active},null,8,["message"])]),default:e(()=>[t(I,{responsive:!1,class:"items-center"},{default:e(()=>[t(B,{checked:o.form.active,"onUpdate:checked":i[3]||(i[3]=l=>o.form.active=l),id:"active"},null,8,["checked"]),t(j,{for:"active",class:"!mb-0"},{default:e(()=>[r(c(m(n)("general.active")),1)]),_:1})]),_:1})]),_:1}),t(x,{onClick:v,class:"mt-lg"},{default:e(()=>[r(c(m(n)("general.save")),1)]),_:1})]),_:1}))}};export{oe as default};