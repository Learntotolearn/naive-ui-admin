import{B as y}from"./BasicUpload.211c6ba1.js";import{d as k,cE as U,r as V,u as j,b as d,o as w,c as q,a as f,i as e,w as u,j as r,h as _,x as N,_ as R,k as S,m as P,ac as T,n as $,cy as z,cz as G}from"./index.3cd9ff5d.js";import"./componentSetting.d8a0c79d.js";import"./DeleteOutlined.c7146117.js";import"./PlusOutlined.63df7643.js";const H={class:"n-layout-page-header"},J={style:{"margin-left":"80px"}},K=k({__name:"index",setup(L){const g=U(),F={name:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u59D3\u540D",trigger:"blur"},remark:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u5907\u6CE8",trigger:"blur"},images:{required:!0,type:"array",message:"\u8BF7\u4E0A\u4F20\u75C5\u4F8B\u56FE\u7247",trigger:"change"}},s=V(null),m=j(),{uploadUrl:E}=g,n=d({name:"",mobile:"",images:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]}),C=d({platform:"miniPrograms",timestamp:new Date().getTime(),token:"Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo="});function v(){s.value.validate(o=>{o?m.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):m.success("\u9A8C\u8BC1\u6210\u529F")})}function b(){s.value.restoreValidation()}function h(o){n.images=_(o)}return(o,a)=>{const i=N,p=R,l=S,c=P,A=T,B=$,D=z,x=G;return w(),q("div",null,[f("div",H,[e(i,{bordered:!1,title:"\u4E0A\u4F20\u56FE\u7247"},{default:u(()=>[r(" \u4E0A\u4F20\u56FE\u7247\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u56FE\u7247\u4FE1\u606F ")]),_:1})]),e(i,{bordered:!1,class:"mt-4 proCard"},{default:u(()=>[e(x,{cols:"2 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:u(()=>[e(D,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:u(()=>[e(B,{"label-width":80,model:n,rules:F,"label-placement":"left",ref_key:"formRef",ref:s,class:"py-8"},{default:u(()=>[e(l,{label:"\u9884\u7EA6\u59D3\u540D",path:"name"},{default:u(()=>[e(p,{value:n.name,"onUpdate:value":a[0]||(a[0]=t=>n.name=t),placeholder:"\u8F93\u5165\u59D3\u540D"},null,8,["value"])]),_:1}),e(l,{label:"\u9884\u7EA6\u53F7\u7801",path:"mobile"},{default:u(()=>[e(p,{placeholder:"\u7535\u8BDD\u53F7\u7801",value:n.mobile,"onUpdate:value":a[1]||(a[1]=t=>n.mobile=t)},null,8,["value"])]),_:1}),e(l,{label:"\u75C5\u4F8B\u56FE\u7247",path:"images"},{default:u(()=>[e(_(y),{action:`${_(E)}/v1.0/files`,headers:C,data:{type:0},name:"files",width:100,height:100,onUploadChange:h,value:n.images,"onUpdate:value":a[2]||(a[2]=t=>n.images=t),helpText:"\u5355\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC72MB\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F2010\u4E2A\u6587\u4EF6"},null,8,["action","headers","value"])]),_:1}),f("div",J,[e(A,null,{default:u(()=>[e(c,{type:"primary",onClick:v},{default:u(()=>[r("\u63D0\u4EA4\u9884\u7EA6")]),_:1}),e(c,{onClick:b},{default:u(()=>[r("\u91CD\u7F6E")]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{K as default};
