var A=Object.defineProperty,D=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var i=(u,e,o)=>e in u?A(u,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[e]=o,p=(u,e)=>{for(var o in e||(e={}))C.call(e,o)&&i(u,o,e[o]);if(c)for(var o of c(e))S.call(e,o)&&i(u,o,e[o]);return u},m=(u,e)=>D(u,b(e));import{d as M,r as T,u as v,b as P,a7 as h,s as V,o as k,E as $,w as l,i as n,j as d,a as w,_ as y,k as N,m as R,ac as x,n as j,cy as q,cz as z}from"./index.63507569.js";const U={originator:{required:!0,message:"\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u90AE\u7BB1",trigger:"blur"}},G=M({setup(){const u=T(null),e=v(),o=P({formValue:{originator:""}});function s(){u.value.validate(r=>{r?e.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):e.success("\u9A8C\u8BC1\u6210\u529F")})}return m(p({formRef:u},h(o)),{rules:U,formSubmit:s})}});function H(u,e,o,s,r,I){const t=y,a=N,_=R,f=x,B=j,F=q,E=z;return k(),$(E,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:l(()=>[n(F,null,{default:l(()=>[n(B,{"label-width":120,model:u.formValue,rules:u.rules,ref:"formRef"},{default:l(()=>[n(a,{label:"\u53D1\u4EF6\u4EBA\u90AE\u7BB1",path:"originator"},{default:l(()=>[n(t,{value:u.formValue.originator,"onUpdate:value":e[0]||(e[0]=g=>u.formValue.originator=g),placeholder:"\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u90AE\u7BB1"},null,8,["value"])]),_:1}),n(a,{label:"SMTP\u670D\u52A1\u5668\u5730\u5740"},{default:l(()=>[n(t,{placeholder:"\u8BF7\u8F93\u5165SMTP\u670D\u52A1\u5668\u5730\u5740"})]),_:1}),n(a,{label:"SMTP\u670D\u52A1\u5668\u7AEF\u53E3"},{default:l(()=>[n(t,{placeholder:"\u8BF7\u8F93\u5165SMTP\u670D\u52A1\u5668\u7AEF\u53E3"})]),_:1}),n(a,{label:"SMTP\u7528\u6237\u540D"},{default:l(()=>[n(t,{placeholder:"\u8BF7\u8F93\u5165SMTP\u7528\u6237\u540D"})]),_:1}),n(a,{label:"SMTP\u5BC6\u7801"},{default:l(()=>[n(t,{type:"password",placeholder:"\u8BF7\u8F93\u5165SMTP\u5BC6\u7801"})]),_:1}),n(a,{label:"\u90AE\u4EF6\u6D4B\u8BD5"},{default:l(()=>[n(_,null,{default:l(()=>[d("\u90AE\u4EF6\u6D4B\u8BD5")]),_:1})]),_:1}),w("div",null,[n(f,null,{default:l(()=>[n(_,{type:"primary",onClick:u.formSubmit},{default:l(()=>[d("\u66F4\u65B0\u90AE\u4EF6\u4FE1\u606F")]),_:1},8,["onClick"])]),_:1})])]),_:1},8,["model","rules"])]),_:1})]),_:1})}const L=V(G,[["render",H]]);export{L as default};
