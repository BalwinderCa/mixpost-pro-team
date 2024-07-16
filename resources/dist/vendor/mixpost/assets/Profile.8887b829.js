import{u as z,o as i,c as _,F as y,r as S,g as x,V as O,a as t,w as e,f as n,t as o,b as s,e as r,h as b,_ as k,j as V,ck as ue,n as F,a5 as ce,T as H,aa as M,k as le,m as X,R as ae,ab as de,I as $,N as fe,ao as re,am as te,U as ne,A as K,ak as me,d as _e,Z as pe}from"./app.02c7459f.js";import{_ as ve}from"./Minimal.48f3be26.js";import{_ as T}from"./Radio.01e99c18.js";import{_ as oe}from"./Select.f31f226b.js";import{_ as D}from"./Flex.d1bb12d6.js";import{_ as Q}from"./InputHidden.3d1d6b03.js";import{_ as ge}from"./Panel.30e9fcce.js";import{_ as E}from"./SectionBorder.ea5c137e.js";import{_ as we}from"./PageHeader.ca32a0c2.js";import{u as he}from"./useRouter.01ffcfae.js";import{_ as $e}from"./BackToDashboardButton.5ab6a57e.js";import"./Eye.0ff3a7ea.js";const be=["value"],ye={key:0,class:"text-xs text-gray-500 mt-xs block"},ke={class:"font-medium"},xe=["label"],Ce=["value"],Ve={class:"flex items-center space-x-xs rtl:space-x-reverse"},Le={class:"flex items-center space-x-xs rtl:space-x-reverse"},Se={__name:"Preferences",props:{form:{type:Object,require:!0},locales:{type:Array,required:!0},timezone_list:{type:Object,required:!0}},setup(u){const a=u,g=z(),{t:l}=g,d=w=>a.locales.find(v=>v.long===w).direction||"ltr",h=w=>!["en-GB","fr-CA","ar-SA","de-DE","es-MX"].includes(w),{notify:c}=F(),f=()=>{a.form.put(route("mixpost.profile.updatePreferences"),{preserveScroll:!0,onSuccess(){ue.changeLocale(g,a.form.locale,d(a.form.locale)),c("success",l("profile.preferences_updated"))}})};return(w,v)=>(i(),_("div",null,[(i(!0),_(y,null,S(u.form.errors,m=>(i(),x(O,{message:m,class:"mb-xs"},null,8,["message"]))),256)),t(k,null,{title:e(()=>[n(o(s(l)("general.language")),1)]),default:e(()=>[r("div",null,[t(oe,{modelValue:u.form.locale,"onUpdate:modelValue":v[0]||(v[0]=m=>u.form.locale=m)},{default:e(()=>[(i(!0),_(y,null,S(u.locales,m=>(i(),_("option",{value:m.long},o(m.english)+" - "+o(m.native)+" - ("+o(m.long)+") "+o(h(m.long)?"[Beta]":""),9,be))),256))]),_:1},8,["modelValue"]),h(u.form.locale)?(i(),_("span",ye,[n(" \u{1F6A7} Language "),r("span",ke,o(u.form.locale),1),n(" is in beta and may not be fully translated or can contain errors. ")])):b("",!0)])]),_:1}),t(k,{class:"mt-lg"},{title:e(()=>[n(o(s(l)("general.timezone")),1)]),default:e(()=>[r("div",null,[t(oe,{modelValue:u.form.timezone,"onUpdate:modelValue":v[1]||(v[1]=m=>u.form.timezone=m)},{default:e(()=>[(i(!0),_(y,null,S(u.timezone_list,(m,L)=>(i(),_("optgroup",{label:L},[(i(!0),_(y,null,S(m,(P,U)=>(i(),_("option",{value:U},o(P),9,Ce))),256))],8,xe))),256))]),_:1},8,["modelValue"])])]),_:1}),t(k,{class:"mt-lg"},{title:e(()=>[n(o(s(l)("profile.time_format")),1)]),default:e(()=>[r("div",Ve,[r("label",null,[t(T,{checked:u.form.time_format,"onUpdate:checked":v[2]||(v[2]=m=>u.form.time_format=m),value:12},null,8,["checked"]),n(" 12 "+o(s(l)("profile.hour")),1)]),r("label",null,[t(T,{checked:u.form.time_format,"onUpdate:checked":v[3]||(v[3]=m=>u.form.time_format=m),value:24},null,8,["checked"]),n(" 24 "+o(s(l)("profile.hour")),1)])])]),_:1}),t(k,{class:"mt-lg"},{title:e(()=>[n(o(s(l)("profile.first_day_week")),1)]),default:e(()=>[r("div",Le,[r("label",null,[t(T,{checked:u.form.week_starts_on,"onUpdate:checked":v[4]||(v[4]=m=>u.form.week_starts_on=m),value:0},null,8,["checked"]),n(" "+o(s(l)("profile.sunday")),1)]),r("label",null,[t(T,{checked:u.form.week_starts_on,"onUpdate:checked":v[5]||(v[5]=m=>u.form.week_starts_on=m),value:1},null,8,["checked"]),n(" "+o(s(l)("profile.monday")),1)])])]),_:1}),t(V,{onClick:f,class:"mt-lg"},{default:e(()=>[n(o(s(l)("general.save")),1)]),_:1})]))}},Pe=["onSubmit"],Ue={for:"name"},Ae={for:"email"},Ie={__name:"UserAccount",setup(u){const{t:a}=z(),{user:g}=ce(),{notify:l}=F(),d=H({name:g.value.name,email:g.value.email}),h=()=>{d.put(route("mixpost.profile.updateUser"),{preserveScroll:!0,onSuccess(){l("success",a("account.account_updated"))}})};return(c,f)=>(i(),_("form",{onSubmit:le(h,["prevent"])},[(i(!0),_(y,null,S(s(d).errors,w=>(i(),x(O,{message:w,class:"mb-xs"},null,8,["message"]))),256)),t(k,null,{title:e(()=>[r("label",Ue,o(s(a)("general.name")),1)]),default:e(()=>[t(M,{type:"text",modelValue:s(d).name,"onUpdate:modelValue":f[0]||(f[0]=w=>s(d).name=w),error:s(d).errors.name,id:"name"},null,8,["modelValue","error"])]),_:1}),t(k,{class:"mt-lg"},{title:e(()=>[r("label",Ae,o(s(a)("general.email")),1)]),default:e(()=>[t(M,{type:"email",modelValue:s(d).email,"onUpdate:modelValue":f[1]||(f[1]=w=>s(d).email=w),error:s(d).errors.email,id:"email"},null,8,["modelValue","error"])]),_:1}),t(V,{type:"submit",class:"mt-lg"},{default:e(()=>[n(o(s(a)("general.save")),1)]),_:1})],40,Pe))}},ze={for:"password"},Re={__name:"ConfirmPassword",props:{show:{type:Boolean,default:!0}},emits:["close","confirm"],setup(u,{emit:a}){const g=X("routePrefix"),l=()=>{a("close")},d=H({password:""}),h=()=>{d.post(route(`${g}.profile.confirmPassword`),{preserveScroll:!0,onSuccess(){a("confirm"),d.reset(),l()}})};return(c,f)=>(i(),x(de,{show:u.show,"max-width":"lg",closeable:!0,"scrollable-body":!0,zIndexClass:"z-30",onClose:l},{header:e(()=>[n(o(c.$t("auth.confirm_password")),1)]),body:e(()=>[u.show?(i(),_(y,{key:0},[r("div",null,o(c.$t("profile.security_confirm_password")),1),t(k,{class:"mt-lg"},{title:e(()=>[r("label",ze,o(c.$t("auth.password")),1)]),footer:e(()=>[t(O,{message:s(d).errors.password},null,8,["message"])]),default:e(()=>[t(M,{modelValue:s(d).password,"onUpdate:modelValue":f[0]||(f[0]=w=>s(d).password=w),error:s(d).errors.password,type:"password",id:"password",class:"w-full",autocomplete:"password"},null,8,["modelValue","error"])]),_:1})],64)):b("",!0)]),footer:e(()=>[t(ae,{onClick:l,class:"mr-xs"},{default:e(()=>[n(o(c.$t("general.cancel")),1)]),_:1}),t(V,{onClick:h,disabled:s(d).processing,isLoading:s(d).processing,class:"mr-xs"},{default:e(()=>[n(o(c.$t("general.confirm")),1)]),_:1},8,["disabled","isLoading"])]),_:1},8,["show"]))}},je={class:"mt-lg"},Be={key:0,class:"mt-lg"},qe=["innerHTML"],Ne={class:"uppercase font-medium text-center"},Te={class:"text-gray-500"},De={class:"mt-md"},Ee={for:"code"},Me={key:1},Oe={key:0,class:"mt-lg"},Fe={class:"mt-xs bg-primary-50 rounded-lg p-md"},He={class:"mb-xs"},Ge={class:"font-medium"},Ke={__name:"TwoFactorAuth",setup(u){const{t:a}=z(),g=$({svg:"",secret_key:""}),l=$(!1),d=$(!1),h=$(""),c=$(!1),f=$(!1),w=$([]),v=$(!1),m=$(null),L=X("routePrefix"),{notify:P}=F(),U=fe(()=>d.value?!1:re().props.user_has_two_factor_auth_enabled||l.value===!0),ie=()=>{v.value=!0},Z=()=>{v.value=!1},R=$(!1),J=()=>{R.value=!0,axios.post(route(`${L}.profile.two-factor-auth.enable`)).then(p=>{c.value=!0,g.value=p.data}).catch(p=>A(p,J)).finally(()=>R.value=!1)},j=$(!1),W=()=>{j.value=!0,axios.post(route(`${L}.profile.two-factor-auth.confirm`),{code:h.value}).then(p=>{l.value=!0,d.value=!1,c.value=!1,w.value=p.data.recovery_codes,f.value=!0,h.value="",P("success",a("profile.two_factor_enabled"))}).catch(p=>A(p,W)).finally(()=>j.value=!1)},B=$(!1),Y=()=>{B.value=!0,axios.get(route(`${L}.profile.two-factor-auth.showRecoveryCodes`)).then(p=>{w.value=p.data.recovery_codes,f.value=!0}).catch(p=>A(p,Y)).finally(()=>B.value=!1)},q=$(!1),ee=()=>{q.value=!0,axios.post(route(`${L}.profile.two-factor-auth.regenerateRecoveryCodes`)).then(p=>{w.value=p.data.recovery_codes,f.value=!0}).catch(p=>A(p,ee)).finally(()=>q.value=!1)},N=$(!1),se=()=>{N.value=!0,axios.delete(route(`${L}.profile.two-factor-auth.disable`)).then(()=>{d.value=!0,P("success",a("profile.two_factor_disabled"))}).catch(p=>A(p,se)).finally(()=>N.value=!1)},A=(p,C)=>{if(p.response.status===422){p.response.data.errors.confirm_password&&(m.value=C,ie()),p.response.data.errors.code&&P("error",p.response.data.errors.code[0]);return}P("error",a("error.something_wrong"))};return(p,C)=>(i(),_(y,null,[r("div",null,[r("div",null,o(s(a)("profile.install_totp")),1),r("div",je,[s(U)?(i(),x(te,{key:0,variant:"success"},{default:e(()=>[n(o(s(a)("general.enabled")),1)]),_:1})):b("",!0),s(U)?b("",!0):(i(),x(te,{key:1,variant:"error"},{default:e(()=>[n(o(s(a)("general.disabled")),1)]),_:1}))]),c.value?(i(),_("div",Be,[t(D,{class:"w-full relative rounded-lg border border-gray-200 p-xs"},{default:e(()=>[r("div",{innerHTML:g.value.svg},null,8,qe),t(D,{class:"justify-center items-center w-full"},{default:e(()=>[r("div",Ne,[r("div",Te,o(s(a)("profile.secret_key")),1),r("div",null,o(g.value.secret_key),1)])]),_:1})]),_:1}),r("div",De,o(s(a)("profile.scan_qr_code")),1),t(k,{class:"mt-lg"},{title:e(()=>[r("label",Ee,o(s(a)("profile.code")),1)]),default:e(()=>[t(M,{modelValue:h.value,"onUpdate:modelValue":C[0]||(C[0]=G=>h.value=G),type:"text",id:"code",class:"w-full",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(D,null,{default:e(()=>[t(V,{onClick:W,disabled:j.value,isLoading:j.value,class:"mt-lg"},{default:e(()=>[n(o(s(a)("general.confirm")),1)]),_:1},8,["disabled","isLoading"]),t(ae,{onClick:C[1]||(C[1]=()=>{c.value=!1,h.value=""}),class:"mt-lg"},{default:e(()=>[n(o(s(a)("general.cancel")),1)]),_:1})]),_:1})])):b("",!0),s(U)?(i(),_("div",Me,[f.value?(i(),_("div",Oe,[r("div",null,o(s(a)("profile.store_recovery_codes")),1),r("div",Fe,[(i(!0),_(y,null,S(w.value,G=>(i(),_("div",He,[r("div",Ge,o(G),1)]))),256))])])):b("",!0),t(D,{class:"mt-lg"},{default:e(()=>[f.value?(i(),x(V,{key:0,onClick:ee,disabled:q.value,isLoading:q.value},{default:e(()=>[n(o(s(a)("profile.regenerate_recovery_codes")),1)]),_:1},8,["disabled","isLoading"])):b("",!0),f.value?b("",!0):(i(),x(V,{key:1,onClick:Y,disabled:B.value,isLoading:B.value},{default:e(()=>[n(o(s(a)("profile.show_recovery_codes")),1)]),_:1},8,["disabled","isLoading"])),t(ne,{onClick:se,disabled:N.value,isLoading:N.value},{default:e(()=>[n(o(s(a)("general.disable")),1)]),_:1},8,["disabled","isLoading"])]),_:1})])):b("",!0),!s(U)&&!c.value?(i(),x(V,{key:2,onClick:J,disabled:R.value,isLoading:R.value,class:"mt-lg"},{default:e(()=>[n(o(s(a)("general.enable")),1)]),_:1},8,["disabled","isLoading"])):b("",!0)]),t(Re,{show:v.value,onConfirm:C[2]||(C[2]=()=>{Z(),m.value&&m.value()}),onClose:Z},null,8,["show"])],64))}},Qe=["onSubmit"],Xe={for:"current_password"},Ze={for:"password"},Je={for:"password_confirmation"},We={__name:"Password",setup(u){const{t:a}=z(),{notify:g}=F(),l=H({current_password:"",password:"",password_confirmation:""}),d=()=>{l.put(route("mixpost.profile.updatePassword"),{preserveScroll:!0,onSuccess(){l.reset(),g("success",a("profile.password_changed"))}})};return(h,c)=>(i(),_("form",{onSubmit:le(d,["prevent"])},[(i(!0),_(y,null,S(s(l).errors,f=>(i(),x(O,{message:f,class:"mb-xs"},null,8,["message"]))),256)),t(k,{class:"mt-lg"},{title:e(()=>[r("label",Xe,o(s(a)("profile.current_password")),1)]),default:e(()=>[t(Q,{modelValue:s(l).current_password,"onUpdate:modelValue":c[0]||(c[0]=f=>s(l).current_password=f),error:s(l).errors.current_password,id:"current_password",required:""},null,8,["modelValue","error"])]),_:1}),t(k,{class:"mt-md"},{title:e(()=>[r("label",Ze,o(s(a)("profile.new_password")),1)]),default:e(()=>[t(Q,{modelValue:s(l).password,"onUpdate:modelValue":c[1]||(c[1]=f=>s(l).password=f),error:s(l).errors.password,id:"password",autocomplete:"new-password",required:""},null,8,["modelValue","error"])]),_:1}),t(k,{class:"mt-md"},{title:e(()=>[r("label",Je,o(s(a)("profile.confirm_new_password")),1)]),default:e(()=>[t(Q,{modelValue:s(l).password_confirmation,"onUpdate:modelValue":c[2]||(c[2]=f=>s(l).password_confirmation=f),error:s(l).password_confirmationpassword,id:"password_confirmation",autocomplete:"new-password",required:""},null,8,["modelValue","error"])]),_:1}),t(V,{type:"submit",class:"mt-lg"},{default:e(()=>[n(o(s(a)("general.save")),1)]),_:1})],40,Qe))}},Ye={class:"md:grid md:grid-cols-3 md:gap-lg"},es={class:"md:col-span-1 flex justify-between"},ss={class:"text-lg font-medium text-gray-900"},ts={class:"mt-xs text-gray-500"},os={class:"mt-lg md:mt-0 md:col-span-2"},I={__name:"ActionSection",setup(u){return(a,g)=>(i(),_("div",Ye,[r("div",es,[r("div",null,[r("h3",ss,[K(a.$slots,"title")]),r("p",ts,[K(a.$slots,"description")])])]),r("div",os,[t(ge,null,{default:e(()=>[K(a.$slots,"default")]),_:3})])]))}},ls={__name:"DeleteAccount",setup(u){const{t:a}=z(),g=X("confirmation"),{onError:l}=he(),d=()=>{g().title(a("profile.delete_account")).description(a("profile.delete_account_desc")).destructive().btnConfirmName(a("profile.delete_account")).onConfirm(c=>{c.isLoading(!0),h(c)}).show()},h=c=>{me.delete(re().props.delete_account_url,{onSuccess(){c.reset()},onError(f){c.isLoading(!1),l(f,()=>{c.isLoading(!0),h(c)})}})};return(c,f)=>(i(),x(ne,{onClick:d},{default:e(()=>[n(o(s(a)("profile.delete_account")),1)]),_:1}))}},as={class:"row-py w-full mx-auto !pt-0"},rs={class:"w-full mb-lg"},ns={class:"mt-2xl sm:mt-0"},is={class:"mt-2xl sm:mt-0"},us={class:"mt-2xl sm:mt-0"},cs={class:"mt-2xl sm:mt-0"},ds={class:"mt-2xl sm:mt-0"},fs=_e({layout:ve}),Cs=Object.assign(fs,{__name:"Profile",props:["settings","locales","timezone_list","user_has_two_factor_auth_enabled","is_delete_account_enabled"],setup(u){const g=H(u.settings);return(l,d)=>(i(),_(y,null,[t(s(pe),{title:l.$t("profile.edit_profile")},null,8,["title"]),t(we,{title:l.$t("profile.edit_profile"),class:"!px-0"},{default:e(()=>[t($e)]),_:1},8,["title"]),r("div",as,[r("div",rs,[r("div",ns,[t(I,null,{title:e(()=>[n(o(l.$t("profile.profile_information")),1)]),description:e(()=>[n(o(l.$t("profile.update_your_account")),1)]),default:e(()=>[t(Ie)]),_:1})]),t(E,{contrasted:!0}),r("div",is,[t(I,null,{title:e(()=>[n(o(l.$t("profile.preferences")),1)]),description:e(()=>[n(o(l.$t("profile.update_preferences")),1)]),default:e(()=>[t(Se,{form:s(g),timezone_list:u.timezone_list,locales:u.locales},null,8,["form","timezone_list","locales"])]),_:1})]),l.$page.props.is_two_factor_auth_enabled?(i(),_(y,{key:0},[t(E,{contrasted:!0}),r("div",us,[t(I,null,{title:e(()=>[n(o(l.$t("auth.two_factor_authentication")),1)]),description:e(()=>[n(o(l.$t("auth.security_using_two_factor")),1)]),default:e(()=>[t(Ke)]),_:1})])],64)):b("",!0),t(E,{contrasted:!0}),r("div",cs,[t(I,null,{title:e(()=>[n(o(l.$t("auth.update_password")),1)]),description:e(()=>[n(o(l.$t("auth.confirm_secure_password")),1)]),default:e(()=>[t(We)]),_:1})]),u.is_delete_account_enabled?(i(),_(y,{key:1},[t(E,{contrasted:!0}),r("div",ds,[t(I,null,{title:e(()=>[n(o(l.$t("profile.delete_account")),1)]),description:e(()=>[n(o(l.$t("profile.delete_account_desc")),1)]),default:e(()=>[t(ls)]),_:1})])],64)):b("",!0)])])],64))}});export{Cs as default};
