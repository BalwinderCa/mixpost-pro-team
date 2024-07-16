import{d as U,T as V,l as j,q as B,c as f,a as s,b as e,w as o,F as D,o as i,Z as N,e as u,f as n,t as m,_ as g,R as p,S as h,g as c,X as v,U as $,h as _,V as k,j as w,k as S,m as T,Y as q}from"./app.02c7459f.js";import{_ as E}from"./Admin.a768db28.js";import{_ as C}from"./Panel.30e9fcce.js";import{_ as x}from"./UploadButton.ca92b857.js";import{_ as F}from"./Settings.d5ef4aae.js";import"./QueueList.11778f30.js";import"./PageHeader.ca32a0c2.js";import"./Flex.d1bb12d6.js";import"./Tab.203b4d79.js";const O=["onSubmit"],M={class:"flex"},R=["src"],X={class:"flex"},Y=["src"],Z={class:"flex"},A=["src"],G={class:"flex"},H=["src"],I={class:"flex items-center mt-lg"},J=["href"],K=U({layout:E}),ie=Object.assign(K,{__name:"ThemeConfig",props:{configs:{required:!0,type:Object}},setup(b){const z=b,L=T("routePrefix"),t=V(j.exports.cloneDeep(z.configs)),P=()=>{t.put(route(`${L}.configs.theme.update`))},{enterpriseConsole:y}=B();return(a,r)=>{const d=q("tooltip");return i(),f(D,null,[s(e(N),{title:a.$t("theme.customization")},null,8,["title"]),s(F,null,{default:o(()=>[u("form",{method:"post",onSubmit:S(P,["prevent"])},[s(C,null,{title:o(()=>[n(m(a.$t("theme.customization")),1)]),description:o(()=>[n(m(a.$t("theme.change_logo_favicon")),1)]),default:o(()=>[s(g,null,{title:o(()=>[u("div",M,[s(x,{withPreload:!0,onUpload:r[0]||(r[0]=l=>{if(l.is_local_driver){e(t).logo_url=`/storage/${l.path}`;return}e(t).logo_url=l.url}),class:"mr-xs"},{default:o(()=>[s(p,{id:"logo"},{default:o(()=>[n(m(a.$t("theme.upload_logo")),1)]),_:1})]),_:1}),e(t).logo_url?h((i(),c($,{key:0,onClick:r[1]||(r[1]=l=>e(t).logo_url=""),size:"sm"},{default:o(()=>[s(v)]),_:1})),[[d,a.$t("theme.upload_logo")]]):_("",!0)])]),footer:o(()=>[s(k,{message:e(t).errors.logo_url},null,8,["message"])]),default:o(()=>[e(t).logo_url?(i(),f("img",{key:0,src:e(t).logo_url,class:"w-auto max-h-20 mt-xs",alt:"Logo"},null,8,R)):_("",!0)]),_:1}),s(g,{class:"mt-lg"},{title:o(()=>[u("div",X,[s(x,{withPreload:!0,onUpload:r[2]||(r[2]=l=>{if(l.is_local_driver){e(t).favicon_url=`/storage/${l.path}`;return}e(t).favicon_url=l.url}),class:"mr-xs"},{default:o(()=>[s(p,{id:"logo"},{default:o(()=>[n(m(a.$t("theme.upload_favicon"))+" (16 x 16 px) (png) ",1)]),_:1})]),_:1}),e(t).favicon_url?h((i(),c($,{key:0,onClick:r[3]||(r[3]=l=>e(t).favicon_url=""),size:"sm"},{default:o(()=>[s(v)]),_:1})),[[d,a.$t("theme.remove_favicon")]]):_("",!0)])]),footer:o(()=>[s(k,{message:e(t).errors.favicon_url},null,8,["message"])]),default:o(()=>[e(t).favicon_url?(i(),f("img",{key:0,src:e(t).favicon_url,class:"w-auto max-h-20 mt-xs",alt:"Logo"},null,8,Y)):_("",!0)]),_:1}),s(g,{class:"mt-lg"},{title:o(()=>[u("div",Z,[s(x,{withPreload:!0,onUpload:r[4]||(r[4]=l=>{if(l.is_local_driver){e(t).favicon_chrome_small_url=`/storage/${l.path}`;return}e(t).favicon_chrome_small_url=l.url}),class:"mr-xs"},{default:o(()=>[s(p,{id:"logo"},{default:o(()=>[n(m(a.$t("theme.upload_favicon"))+" (192 x 192 px) (png) ",1)]),_:1})]),_:1}),e(t).favicon_chrome_small_url?h((i(),c($,{key:0,onClick:r[5]||(r[5]=l=>e(t).favicon_chrome_small_url=""),size:"sm"},{default:o(()=>[s(v)]),_:1})),[[d,a.$t("theme.upload_favicon")]]):_("",!0)])]),footer:o(()=>[s(k,{message:e(t).errors.favicon_chrome_small_url},null,8,["message"])]),default:o(()=>[e(t).favicon_chrome_small_url?(i(),f("img",{key:0,src:e(t).favicon_chrome_small_url,class:"w-auto max-h-20 mt-xs",alt:"Logo"},null,8,A)):_("",!0)]),_:1}),s(g,{class:"mt-lg"},{title:o(()=>[u("div",G,[s(x,{withPreload:!0,onUpload:r[6]||(r[6]=l=>{if(l.is_local_driver){e(t).favicon_chrome_medium_url=`/storage/${l.path}`;return}e(t).favicon_chrome_medium_url=l.url}),class:"mr-xs"},{default:o(()=>[s(p,{id:"logo"},{default:o(()=>[n(m(a.$t("theme.upload_favicon"))+" (512 x 512 px) (png) ",1)]),_:1})]),_:1}),e(t).favicon_chrome_medium_url?h((i(),c($,{key:0,onClick:r[7]||(r[7]=l=>e(t).favicon_chrome_medium_url=""),size:"sm"},{default:o(()=>[s(v)]),_:1})),[[d,a.$t("theme.remove_favicon")]]):_("",!0)])]),footer:o(()=>[s(k,{message:e(t).errors.favicon_chrome_medium_url},null,8,["message"])]),default:o(()=>[e(t).favicon_chrome_medium_url?(i(),f("img",{key:0,src:e(t).favicon_chrome_medium_url,class:"w-auto max-h-20 mt-xs",alt:"Logo"},null,8,H)):_("",!0)]),_:1}),u("div",I,[s(w,{type:"submit",disabled:e(t).processing,isLoading:e(t).processing},{default:o(()=>[n(m(a.$t("general.save")),1)]),_:1},8,["disabled","isLoading"])])]),_:1})],40,O),e(y).url?(i(),c(C,{key:0,class:"mt-lg"},{title:o(()=>[n(m(a.$t("theme.theme_color")),1)]),description:o(()=>[n(m(a.$t("theme.rebrand_company")),1)]),default:o(()=>[u("a",{href:`${e(y).url}/configs/theme`},[s(w,null,{default:o(()=>[n(m(a.$t("theme.change_theme_color")),1)]),_:1})],8,J)]),_:1})):_("",!0)]),_:1})],64)}}});export{ie as default};