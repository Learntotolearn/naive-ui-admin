import{d as h,r as B,u as D,o as n,c as w,i as a,w as e,aw as o,E as l,j as d,a as k,_ as E,x as C,m as F,av as u,s as N}from"./index.3cd9ff5d.js";const V={class:"card content-box"},A={class:"box"},j=h({__name:"index",setup(I){const t=B(),c=D(),i=()=>{c.success("\u590D\u5236\u6210\u529F:"+t.value)},p=()=>{c.success("\u9632\u6296"),console.log(t.value)},v=()=>{c.success("\u8282\u6D41"),console.log(t.value)};return(M,r)=>{const m=E,s=C,_=F,f=u("copy"),x=u("debounce"),g=u("throttle"),y=u("draggable");return n(),w("div",V,[a(s,null,{default:e(()=>[a(m,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",value:t.value,"onUpdate:value":r[0]||(r[0]=b=>t.value=b),style:{width:"500px"}},null,8,["value"])]),_:1}),a(s,null,{default:e(()=>[o((n(),l(_,{type:"primary",onClick:i},{default:e(()=>[d("\u590D\u5236")]),_:1})),[[f,t.value]])]),_:1}),a(s,null,{default:e(()=>[o((n(),l(_,{type:"primary"},{default:e(()=>[d("\u9632\u6296\u6309\u94AE")]),_:1})),[[x,p]])]),_:1}),a(s,null,{default:e(()=>[o((n(),l(_,{type:"primary"},{default:e(()=>[d("\u8282\u6D41\u6309\u94AE")]),_:1})),[[g,v]])]),_:1}),o(k("div",A,null,512),[[y]])])}}});const U=N(j,[["__scopeId","data-v-ec7aadba"]]);export{U as default};