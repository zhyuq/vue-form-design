import{e as _,u as g,r as B,y as F,z as D,a as b,o as c,c as m,b as i,w as n,F as E,f as k,g as x,d as h,t as C,A as q,k as L,E as f}from"./index.3ab26249.js";const w={class:"form-list-page"},v=h("\u5220\u9664"),U=_({__name:"formList",setup(A){g().changeBreadcrumb([{label:"\u7CFB\u7EDF\u5DE5\u5177"},{label:"\u8868\u5355\u7BA1\u7406"}]);const p=B(),u=F(),o=D({pageIndex:1,total:0,pageSize:20,tableData:{columns:[{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"60px"},{prop:"name",label:"\u8868\u5355\u540D\u79F0"},{label:"\u72B6\u6001",prop:"status",config:{tagList:{1:"success",0:"info"},dictKey:"status"}},{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateDate"},{label:"\u64CD\u4F5C",prop:"control",width:"340px"}]},requestUrl:"getFormList",btnGroup:[{label:"\u4FEE\u6539",type:1},{label:"\u641C\u7D22\u8BBE\u7F6E",type:2},{label:"\u5217\u8868\u8BBE\u7F6E",type:3},{label:"\u6DFB\u52A0\u6570\u636E",type:4},{label:"\u67E5\u770B",type:5}],searchData:{list:[{name:"text",type:"input",control:{modelValue:"",placeholder:"\u8868\u5355\u540D\u79F0"},config:{},item:{label:"\u8868\u5355\u540D\u79F0",showLabel:!1}},{name:"status",type:"select",control:{modelValue:"",appendToBody:!0,placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},options:[],config:{addAll:!0,type:"async",source:2,request:"get",sourceFun:""},item:{label:"\u72B6\u6001",showLabel:!1}}],form:{labelWidth:"",class:"",size:"small",name:"form1660211919743"}}}),d=(r,e)=>{const t={formId:e.formId,id:e.id};switch(r){case 1:u.push({path:"/designform",query:t});break;case 2:u.push({path:"/designform",query:Object.assign({},t,{type:"search"})});break;case 3:u.push({path:"/designform/table",query:t});break;case 4:u.push({path:"/designform/form",query:{tid:e.id}});break;case 5:u.push({path:"/designform/list",query:{tid:e.id}});break;case 6:L("delForm",{id:e.id}).then(s=>{var a;s.data.code===200&&(f.success("\u5220\u9664\u6210\u529F"),(a=p.value)==null||a.getListData())}).catch(s=>{f.error(s.data||"\u5220\u9664\u5931\u8D25")});break}},y=(r,e)=>[4,5].includes(r.type)&&!e.formId;return(r,e)=>{const t=b("el-button"),s=b("el-popconfirm");return c(),m("div",w,[i(q,{searchData:o.searchData,tableData:o.tableData,requestUrl:o.requestUrl,ref_key:"tableListEl",ref:p},{control:n(a=>[(c(!0),m(E,null,k(o.btnGroup,l=>(c(),x(t,{size:"small",link:"",key:l.type,onClick:z=>d(l.type,a.row),disabled:y(l,a.row)},{default:n(()=>[h(C(l.label),1)]),_:2},1032,["onClick","disabled"]))),128)),i(s,{title:"\u786E\u5B9A\u5220\u9664\u8BE5\u8BB0\u5F55?","confirm-button-text":"\u786E\u8BA4","cancel-button-text":"\u53D6\u6D88",onConfirm:l=>d(6,a.row)},{reference:n(()=>[i(t,{size:"small",link:""},{default:n(()=>[v]),_:1})]),_:2},1032,["onConfirm"])]),_:1},8,["searchData","tableData","requestUrl"])])}}});export{U as default};