var w=Object.defineProperty,V=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(t,a,o)=>a in t?w(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,_=(t,a)=>{for(var o in a||(a={}))C.call(a,o)&&g(t,o,a[o]);if(p)for(var o of p(a))I.call(a,o)&&g(t,o,a[o]);return t},h=(t,a)=>V(t,k(a));import{_ as S,d as q,b as x,c as B,e as E,f as F}from"./index.472ba73a.js";import{i as R,S as O,n as $,p as J,r as y,U as T,I as L,o as M,x as U,a as v,w as z,C as d,h as A,s as G}from"./vendor.f9fdd043.js";import{s as H}from"./index.6c162138.js";const K={name:"add",props:{},components:{designForm:q},setup(t){const a=R(),o=O(),n=o.query.formName,c=o.query.id,f=o.query.formId,l=o.query.type||1,r=$({loading:!1,formData:{},type:parseInt(l)});f&&(r.loading=!0,x(f).then(e=>{e.data.code===200&&(r.formData=H(e.data.data[0].formData)),r.loading=!1}).catch(e=>{throw r.loading=!1,new Error("\u83B7\u53D6\u8868\u5355\u8BBE\u8BA1\u6570\u636E\u5931\u8D25")})),c&&B(c,n).then(e=>{if(e.data.code===200){const s=e.data.data[0];u(s,0),a.value.setValue(s)}});const m=()=>{const e=a.value.getValue();a.value.validate(s=>{if(s)c?N(e):D(e);else return console.log("error submit"),!1})},D=e=>{u(e,1),E(e,n).then(s=>{s.data.code===200?d({message:"\u4FDD\u5B58\u6210\u529F\uFF01",type:"success"}):d.error(s.data.message)})},N=e=>{u(e,1),F(e,n,c).then(s=>{s.data.code===200?d({message:"\u4FEE\u6539\u6210\u529F\uFF01",type:"success"}):d.error(s.data.message)})},u=(e,s)=>{const b=["cascader","checkbox","tableList"];console.log(e),b.forEach(i=>{s===0?e[i]&&(e[i]=JSON.parse(e[i])):s===1&&(e[i]=JSON.stringify(e[i]))})};return h(_({},J(r)),{submit:m,formName:a})}},P={class:"add-form-demo"},Q=A("h3",null,"\u65B0\u589E/\u7F16\u8F91/\u67E5\u770B\u6570\u636E",-1),W=G("\u63D0\u4EA4");function X(t,a,o,n,c,f){const l=y("design-form"),r=y("el-button"),m=T("loading");return L((M(),U("div",P,[Q,v(l,{formData:t.formData,ref:"formName",type:t.type},null,8,["formData","type"]),v(r,{type:"primary",onClick:n.submit},{default:z(()=>[W]),_:1},8,["onClick"])])),[[m,t.loading]])}var ae=S(K,[["render",X]]);export{ae as default};
