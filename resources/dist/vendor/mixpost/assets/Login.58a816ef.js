import{d as b,T as k,q as V,c as u,a as o,b as e,e as l,k as y,w as t,F as f,o as d,Z as v,f as m,t as r,r as C,g as c,_ as p,aa as h,j,i as q,h as g,m as B,V as L}from"./app.02c7459f.js";import{_ as N}from"./Minimal.48f3be26.js";import{_ as S}from"./Panel.30e9fcce.js";import{_ as U}from"./Label.a11befde.js";import{_ as E}from"./Checkbox.52b731a7.js";import{_ as F}from"./Flex.d1bb12d6.js";const P={class:"w-full sm:max-w-lg mx-auto"},T=["onSubmit"],x={for:"email"},D={class:"w-full"},M={for:"password"},O={class:"w-full"},Z={class:"mt-md"},z={key:0,class:"text-center mt-2xl"},A={class:"text-black"},G=["href"],H=b({layout:N}),Y=Object.assign(H,{__name:"Login",setup(I){const $=B("routePrefix"),a=k({email:"",password:"",remember:!0}),w=()=>{a.post(route("mixpost.login"))},{enterpriseConsole:_}=V();return(s,n)=>(d(),u(f,null,[o(e(v),{title:s.$t("auth.sign_in")},null,8,["title"]),l("div",P,[l("form",{onSubmit:y(w,["prevent"])},[o(S,null,{title:t(()=>[m(r(s.$t("auth.login_account")),1)]),description:t(()=>[m(r(s.$t("auth.enter_details")),1)]),default:t(()=>[(d(!0),u(f,null,C(e(a).errors,i=>(d(),c(L,{message:i,class:"mb-xs"},null,8,["message"]))),256)),o(p,null,{title:t(()=>[l("label",x,r(s.$t("general.email")),1)]),default:t(()=>[l("div",D,[o(h,{modelValue:e(a).email,"onUpdate:modelValue":n[0]||(n[0]=i=>e(a).email=i),type:"email",id:"email",class:"w-full",required:""},null,8,["modelValue"])])]),_:1}),o(p,{class:"mt-md"},{title:t(()=>[l("label",M,r(s.$t("auth.password")),1)]),default:t(()=>[l("div",O,[o(h,{modelValue:e(a).password,"onUpdate:modelValue":n[1]||(n[1]=i=>e(a).password=i),type:"password",id:"password",class:"w-full",required:""},null,8,["modelValue"])])]),_:1}),l("div",Z,[o(U,null,{default:t(()=>[o(E,{checked:e(a).remember,"onUpdate:checked":n[2]||(n[2]=i=>e(a).remember=i)},null,8,["checked"]),m(" "+r(s.$t("auth.remember_me")),1)]),_:1})]),o(F,{class:"justify-between mt-lg"},{default:t(()=>[o(j,{disabled:e(a).processing,isLoading:e(a).processing,type:"submit"},{default:t(()=>[m(r(s.$t("auth.login")),1)]),_:1},8,["disabled","isLoading"]),s.$page.props.is_forgot_password_enabled?(d(),c(e(q),{key:0,href:s.route(`${e($)}.password.request`),class:"link-primary"},{default:t(()=>[m(r(s.$t("auth.forgot_password")),1)]),_:1},8,["href"])):g("",!0)]),_:1}),e(_).registration_url?(d(),u("div",z,[l("p",A,[m(r(s.$t("auth.dont_have_account"))+" ",1),l("a",{href:e(_).registration_url,class:"link-primary"},r(s.$t("auth.register_here")),9,G)])])):g("",!0)]),_:1})],40,T)])],64))}});export{Y as default};
