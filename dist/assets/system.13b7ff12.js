var S=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var m=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&m(e,n,t[n]);if(r)for(var n of r(t))A.call(t,n)&&m(e,n,t[n]);return e},y=(e,t)=>b(e,h(t));import R from"./BasicSetting.0d1b6170.js";import $ from"./RevealSetting.b39d4a12.js";import w from"./EmailSetting.209fa143.js";import{d as z,b as D,a7 as L,s as N,o as a,c as E,i as u,w as s,F as V,v as j,E as c,ay as i,x,cy as I,ab as p,cz as q,aa as G,j as B,t as g,cR as H}from"./index.63507569.js";const J=[{name:"\u57FA\u672C\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u5E38\u89C4\u8BBE\u7F6E",key:1},{name:"\u663E\u793A\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u663E\u793A\u8BBE\u7F6E",key:2},{name:"\u90AE\u4EF6\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u90AE\u4EF6\u8BBE\u7F6E",key:3}],K=z({components:{BasicSetting:R,RevealSetting:$,EmailSetting:w},setup(){const e=D({type:1,typeTitle:"\u57FA\u672C\u8BBE\u7F6E"});function t(n){e.type=n.key,e.typeTitle=n.name}return y(d({},L(e)),{switchType:t,typeTabList:J})}});function M(e,t,n,O,P,Q){const f=H,_=x,l=I,F=p("BasicSetting"),k=p("RevealSetting"),C=p("EmailSetting"),v=q;return a(),E("div",null,[u(v,{"x-gap":24},{default:s(()=>[u(l,{span:"6"},{default:s(()=>[u(_,{bordered:!1,size:"small",class:"proCard"},{default:s(()=>[(a(!0),E(V,null,j(e.typeTabList,o=>(a(),c(f,{class:G(["thing-cell",{"thing-cell-on":e.type===o.key}]),key:o.key,onClick:U=>e.switchType(o)},{header:s(()=>[B(g(o.name),1)]),description:s(()=>[B(g(o.desc),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1}),u(l,{span:"18"},{default:s(()=>[u(_,{bordered:!1,size:"small",title:e.typeTitle,class:"proCard"},{default:s(()=>[e.type===1?(a(),c(F,{key:0})):i("",!0),e.type===2?(a(),c(k,{key:1})):i("",!0),e.type===3?(a(),c(C,{key:2})):i("",!0)]),_:1},8,["title"])]),_:1})]),_:1})])}const te=N(K,[["render",M],["__scopeId","data-v-7108b9a9"]]);export{te as default};
