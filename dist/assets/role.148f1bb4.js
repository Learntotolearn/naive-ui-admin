var J=Object.defineProperty;var b=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var E=(a,t,u)=>t in a?J(a,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[t]=u,F=(a,t)=>{for(var u in t||(t={}))Q.call(t,u)&&E(a,u,t[u]);if(b)for(var u of b(t))W.call(t,u)&&E(a,u,t[u]);return a};var B=(a,t,u)=>new Promise((_,m)=>{var d=l=>{try{i(u.next(l))}catch(c){m(c)}},h=l=>{try{i(u.throw(l))}catch(c){m(c)}},i=l=>l.done?_(l.value):Promise.resolve(l.value).then(d,h);i((u=u.apply(a,t)).next())});import{B as X}from"./TableAction.vue_vue_type_script_lang.3d3a181c.js";import{T as C}from"./TableAction.ad5115b3.js";import{aI as Y,B as T,y as Z,d as ee,f as ue,r as s,u as te,b as w,aB as ae,d1 as ne,N as oe,o as le,c as se,a as x,i as n,w as o,j as v,h as y,t as A,d6 as ie,x as ce,m as re,d3 as de,ac as pe,cH as fe}from"./index.3cd9ff5d.js";import{P as _e}from"./PlusOutlined.63df7643.js";import"./vuedraggable.umd.0e356a9c.js";import"./useDesignSetting.bfde7fbf.js";import"./propTypes.14f2bd60.js";import"./FormOutlined.49aa5d2a.js";import"./ReloadOutlined.2768aeab.js";import"./componentSetting.d8a0c79d.js";import"./index.53f64cba.js";import"./DownOutlined.509f2fc9.js";function me(){return Y.request({url:"/role/list",method:"GET"})}const he=[{title:"id",key:"id"},{title:"\u89D2\u8272\u540D\u79F0",key:"name"},{title:"\u8BF4\u660E",key:"explain"},{title:"\u662F\u5426\u9ED8\u8BA4\u89D2\u8272",key:"isDefault",render(a){return T(Z,{type:a.isDefault?"success":"error"},{default:()=>a.isDefault?"\u662F":"\u5426"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"create_date"}],ve={class:"n-layout-page-header"},ye={class:"py-3 menu-list"},Me=ee({__name:"role",setup(a){const t=ue(),u=s(null),_=te(),m=s(),d=s(!1),h=s(!1),i=s(!1),l=s(""),c=s([]),r=s([]),p=s(["console","step-form"]),K=w({pageSize:5,name:"xiaoMa"}),M=w({width:250,title:"\u64CD\u4F5C",key:"action",fixed:"right",render(e){return T(C,{style:"button",actions:[{label:"\u83DC\u5355\u6743\u9650",onClick:V.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"\u7F16\u8F91",onClick:U.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"\u5220\u9664",onClick:H.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}]})}}),R=e=>B(this,null,function*(){return F(F({},y(K)),e),yield me()});function N(e){console.log(e)}function S(){m.value.reload()}function L(e){e.preventDefault(),h.value=!0,u.value.validate(f=>{f?_.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):(_.success("\u65B0\u5EFA\u6210\u529F"),setTimeout(()=>{d.value=!1,S()})),h.value=!1})}function U(e){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",e),t.push({name:"basic-info",params:{id:e.id}})}function H(e){console.log("\u70B9\u51FB\u4E86\u5220\u9664",e),_.info("\u70B9\u51FB\u4E86\u5220\u9664")}function V(e){l.value=`\u5206\u914D ${e.name} \u7684\u83DC\u5355\u6743\u9650`,p.value=e.menu_keys,d.value=!0}function q(e){p.value=[p.value,...e]}function I(e){r.value=e}function P(){r.value.length?r.value=[]:r.value=c.value.map(e=>e.key)}function $(){i.value?(p.value=[],i.value=!1):(p.value=ie(c.value),i.value=!0)}return ae(()=>B(this,null,function*(){const e=yield ne();r.value=e.list.map(f=>f.key),c.value=e.list})),(e,f)=>{const D=ce,j=oe,k=re,z=de,G=pe,O=fe;return le(),se("div",null,[x("div",ve,[n(D,{bordered:!1,title:"\u89D2\u8272\u6743\u9650\u7BA1\u7406"},{default:o(()=>[v(" \u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002 ")]),_:1})]),n(D,{bordered:!1,class:"mt-4 proCard"},{default:o(()=>[n(y(X),{columns:y(he),request:R,"row-key":g=>g.id,ref_key:"actionRef",ref:m,actionColumn:M,"onUpdate:checkedRowKeys":N},{tableTitle:o(()=>[n(k,{type:"primary"},{icon:o(()=>[n(j,null,{default:o(()=>[n(y(_e))]),_:1})]),default:o(()=>[v(" \u6DFB\u52A0\u89D2\u8272 ")]),_:1})]),action:o(()=>[n(y(C))]),_:1},8,["columns","row-key","actionColumn"])]),_:1}),n(O,{show:d.value,"onUpdate:show":f[0]||(f[0]=g=>d.value=g),"show-icon":!1,preset:"dialog",title:l.value},{action:o(()=>[n(G,null,{default:o(()=>[n(k,{type:"info",ghost:"","icon-placement":"left",onClick:P},{default:o(()=>[v(" \u5168\u90E8"+A(r.value.length?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1}),n(k,{type:"info",ghost:"","icon-placement":"left",onClick:$},{default:o(()=>[v(" \u5168\u90E8"+A(i.value?"\u53D6\u6D88":"\u9009\u62E9"),1)]),_:1}),n(k,{type:"primary",loading:h.value,onClick:L},{default:o(()=>[v("\u63D0\u4EA4")]),_:1},8,["loading"])]),_:1})]),default:o(()=>[x("div",ye,[n(z,{"block-line":"",cascade:"",checkable:"","virtual-scroll":!0,data:c.value,expandedKeys:r.value,"checked-keys":p.value,style:{"max-height":"950px",overflow:"hidden"},"onUpdate:checkedKeys":q,"onUpdate:expandedKeys":I},null,8,["data","expandedKeys","checked-keys"])])]),_:1},8,["show","title"])])}}});export{Me as default};
