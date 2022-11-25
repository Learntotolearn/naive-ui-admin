var re=Object.defineProperty,ie=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var J=(e,s,o)=>s in e?re(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,v=(e,s)=>{for(var o in s||(s={}))de.call(s,o)&&J(e,o,s[o]);if(H)for(var o of H(s))fe.call(s,o)&&J(e,o,s[o]);return e},K=(e,s)=>ie(e,ce(s));var S=(e,s,o)=>new Promise((k,d)=>{var m=n=>{try{r(o.next(n))}catch(_){d(_)}},f=n=>{try{r(o.throw(n))}catch(_){d(_)}},r=n=>n.done?k(n.value):Promise.resolve(n.value).then(m,f);r((o=o.apply(e,s)).next())});import{d as ee,o as c,c as I,a as pe,h as u,as as W,a8 as X,cv as _e,ar as te,cw as Y,aq as me,r as C,b as ge,a5 as N,ah as be,aB as ye,cx as ve,s as Be,N as ke,E as y,w as a,i as B,v as G,F as L,b7 as Z,az as U,j as V,t as j,ay as R,aG as Oe,aH as we,ab as Q,ac as Pe,cy as Fe,m as he,cz as Se,n as Ce,aE as Ne,aD as x,bO as Ve,ad as je,l as Ee,af as De,cA as Me,cB as ze,k as Ue}from"./index.63507569.js";import{s as Re,p as A,Q as Te}from"./propTypes.64613a94.js";import{D as Ae}from"./DownOutlined.c9b575fc.js";const Ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},$e=pe("path",{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",fill:"currentColor"},null,-1),Ge=[$e],Le=ee({name:"UpOutlined",render:function(s,o){return c(),I("svg",Ie,Ge)}});function Qe(e){return e==="NInput"?"\u8BF7\u8F93\u5165":["NPicker","NSelect","NCheckbox","NRadio","NSwitch","NDatePicker","NTimePicker"].includes(e)?"\u8BF7\u9009\u62E9":""}function We({emit:e,getProps:s,formModel:o,getSchema:k,formElRef:d,defaultFormModel:m,loadingSub:f,handleFormValues:r}){function n(){return S(this,null,function*(){var l;return(l=u(d))==null?void 0:l.validate()})}function _(l){return S(this,null,function*(){l&&l.preventDefault(),f.value=!0;const{submitFunc:g}=u(s);if(g&&W(g)){yield g();return}if(!!u(d))try{yield n(),f.value=!1,e("submit",o);return}catch(P){f.value=!1;return}})}function O(){return S(this,null,function*(){var l;yield(l=u(d))==null?void 0:l.restoreValidation()})}function E(){return S(this,null,function*(){const{resetFunc:l,submitOnReset:g}=u(s);if(l&&W(l)&&(yield l()),!u(d))return;Object.keys(o).forEach(w=>{o[w]=u(m)[w]||null}),yield O();const P=r(X(u(o)));e("reset",P),g&&(yield _())})}function D(){return u(d)?r(X(u(o))):{}}function M(l){return S(this,null,function*(){const g=u(k).map(b=>b.field).filter(Boolean);Object.keys(l).forEach(b=>{const P=l[b];g.includes(b)&&(o[b]=P)})})}return{handleSubmit:_,validate:n,resetFields:E,getFieldsValue:D,clearValidate:O,setFieldsValue:M}}function qe({defaultFormModel:e,getSchema:s,formModel:o}){function k(m){if(!_e(m))return{};const f={};for(const r of Object.entries(m)){let[,n]=r;const[_]=r;!_||te(n)&&n.length===0||W(n)||Y(n)||(me(n)&&(n=n.trim()),Re(f,_,n))}return f}function d(){const m=u(s),f={};m.forEach(r=>{const{defaultValue:n}=r;Y(n)||(f[r.field]=n,o[r.field]=n)}),e.value=f}return{handleFormValues:k,initDefault:d}}const He={labelWidth:{type:[Number,String],default:80},schemas:{type:[Array],default:()=>[]},layout:{type:String,default:"inline"},inline:{type:Boolean,default:!1},size:{type:String,default:"medium"},labelPlacement:{type:String,default:"left"},isFull:{type:Boolean,default:!0},showActionButtonGroup:A.bool.def(!0),showResetButton:A.bool.def(!0),resetButtonOptions:Object,showSubmitButton:A.bool.def(!0),submitButtonOptions:Object,showAdvancedButton:A.bool.def(!0),submitButtonText:{type:String,default:"\u67E5\u8BE2"},resetButtonText:{type:String,default:"\u91CD\u7F6E"},gridProps:Object,giProps:Object,baseGridStyle:{type:Object},collapsed:{type:Boolean,default:!1},collapsedRows:{type:Number,default:1}},Je=ee({name:"BasicUpload",components:{DownOutlined:Ae,UpOutlined:Le,QuestionCircleOutlined:Te},props:v({},He),emits:["reset","submit","register"],setup(e,{emit:s,attrs:o}){const k=C({}),d=ge({}),m=C({}),f=C(null),r=C(null),n=C(!0),_=C(!1),O=C(!1),E=N(()=>Object.assign({size:e.size,type:"primary"},e.submitButtonOptions)),D=N(()=>Object.assign({size:e.size,type:"default"},e.resetButtonOptions));function M(i){var h;const F=(h=i.componentProps)!=null?h:{},z=i.component;return v({clearable:!0,placeholder:Qe(u(z))},F)}const l=N(()=>{const i=v(v({},e),u(m)),F={rules:{}};return(i.schemas||[]).forEach(h=>{h.rules&&te(h.rules)&&(F.rules[h.field]=h.rules)}),v(v({},i),u(F))}),g=N(()=>{const{layout:i}=u(l);return i==="inline"}),b=N(()=>{const{gridProps:i}=u(l);return K(v({},i),{collapsed:g.value?n.value:!1,responsive:"screen"})}),P=N(()=>v(v(v({},o),e),u(l))),w=N(()=>{const i=u(f)||u(l).schemas;for(const F of i){const{defaultValue:z}=F;z&&(F.defaultValue=z)}return i}),{handleFormValues:$,initDefault:T}=qe({defaultFormModel:k,getSchema:w,formModel:d}),{handleSubmit:t,validate:p,resetFields:q,getFieldsValue:ne,clearValidate:oe,setFieldsValue:le}=We({emit:s,getProps:l,formModel:d,getSchema:w,formElRef:r,defaultFormModel:k,loadingSub:_,handleFormValues:$});function se(){n.value=!n.value}function ue(i){return S(this,null,function*(){m.value=ve(u(m)||{},i)})}const ae={getFieldsValue:ne,setFieldsValue:le,resetFields:q,validate:p,clearValidate:oe,setProps:ue,submit:t};return be(()=>w.value,i=>{u(O)||i!=null&&i.length&&(T(),O.value=!0)}),ye(()=>{T(),s("register",ae)}),{formElRef:r,formModel:d,getGrid:b,getProps:l,getBindValue:P,getSchema:w,getSubmitBtnOptions:E,getResetBtnOptions:D,handleSubmit:t,resetFields:q,loadingSub:_,isInline:g,getComponentProps:M,unfoldToggle:se}}});function Ke(e,s,o,k,d,m){const f=Q("QuestionCircleOutlined"),r=ke,n=je,_=Ee,O=Pe,E=De,D=Me,M=ze,l=Ue,g=Fe,b=he,P=Q("DownOutlined"),w=Q("UpOutlined"),$=Se,T=Ce;return c(),y(T,U(e.getBindValue,{model:e.formModel,ref:"formElRef"}),{default:a(()=>[B($,Oe(we(e.getGrid)),{default:a(()=>[(c(!0),I(L,null,G(e.getSchema,t=>(c(),y(g,U(t.giProps,{key:t.field}),{default:a(()=>[B(l,{label:t.label,path:t.field},Ne({default:a(()=>[t.slot?x(e.$slots,t.slot,{key:0,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):t.component==="NCheckbox"?(c(),y(E,{key:1,value:e.formModel[t.field],"onUpdate:value":p=>e.formModel[t.field]=p},{default:a(()=>[B(O,null,{default:a(()=>[(c(!0),I(L,null,G(t.componentProps.options,p=>(c(),y(_,{key:p.value,value:p.value,label:p.label},null,8,["value","label"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):t.component==="NRadioGroup"?(c(),y(M,{key:2,value:e.formModel[t.field],"onUpdate:value":p=>e.formModel[t.field]=p},{default:a(()=>[B(O,null,{default:a(()=>[(c(!0),I(L,null,G(t.componentProps.options,p=>(c(),y(D,{key:p.value,value:p.value},{default:a(()=>[V(j(p.label),1)]),_:2},1032,["value"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):(c(),y(Ve(t.component),U({key:3},e.getComponentProps(t),{value:e.formModel[t.field],"onUpdate:value":p=>e.formModel[t.field]=p,class:{isFull:t.isFull!=!1&&e.getProps.isFull}}),null,16,["value","onUpdate:value","class"])),t.suffix?x(e.$slots,t.suffix,{key:4,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):R("",!0)]),_:2},[t.labelMessage?{name:"label",fn:a(()=>[V(j(t.label)+" ",1),B(n,{trigger:"hover",style:Z(t.labelMessageStyle)},{trigger:a(()=>[B(r,{size:"18",class:"cursor-pointer text-gray-400"},{default:a(()=>[B(f)]),_:1})]),default:a(()=>[V(" "+j(t.labelMessage),1)]),_:2},1032,["style"])]),key:"0"}:void 0]),1032,["label","path"])]),_:2},1040))),128)),e.getProps.showActionButtonGroup?(c(),y(g,{key:0,span:e.isInline?"":24,suffix:!!e.isInline},{default:a(({overflow:t})=>[B(O,{align:"center",justify:e.isInline?"end":"start",style:Z({"margin-left":`${e.isInline?12:e.getProps.labelWidth}px`})},{default:a(()=>[e.getProps.showSubmitButton?(c(),y(b,U({key:0},e.getSubmitBtnOptions,{onClick:e.handleSubmit,loading:e.loadingSub}),{default:a(()=>[V(j(e.getProps.submitButtonText),1)]),_:1},16,["onClick","loading"])):R("",!0),e.getProps.showResetButton?(c(),y(b,U({key:1},e.getResetBtnOptions,{onClick:e.resetFields}),{default:a(()=>[V(j(e.getProps.resetButtonText),1)]),_:1},16,["onClick"])):R("",!0),e.isInline&&e.getProps.showAdvancedButton?(c(),y(b,{key:2,type:"primary",text:"","icon-placement":"right",onClick:e.unfoldToggle},{icon:a(()=>[t?(c(),y(r,{key:0,size:"14",class:"unfold-icon"},{default:a(()=>[B(P)]),_:1})):(c(),y(r,{key:1,size:"14",class:"unfold-icon"},{default:a(()=>[B(w)]),_:1}))]),default:a(()=>[V(" "+j(t?"\u5C55\u5F00":"\u6536\u8D77"),1)]),_:2},1032,["onClick"])):R("",!0)]),_:2},1032,["justify","style"])]),_:1},8,["span","suffix"])):R("",!0)]),_:3},16)]),_:3},16,["model"])}const et=Be(Je,[["render",Ke],["__scopeId","data-v-4f7dfd3d"]]);export{et as B};
