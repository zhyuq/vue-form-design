import{_ as Se,a as xe,b as Ne}from"./vueFile.vue_vue_type_script_setup_true_lang.8b04fff5.js";import{e as ge,r as ue,B as ve,l as de,a as _,o as r,c as h,m as d,i as k,F as I,f as q,g as v,w as u,d as E,t as fe,p as x,b as e,C as Ee,D as Ue,G as $e,H as Ae,s as Ve,z as ke,I as Fe,n as be,v as Le,J as Te,k as ie,u as Ie,y as Oe,L as Pe,x as qe,_ as Ce,E as Q,q as Re}from"./index.3ab26249.js";import{s as ee,o as se}from"./form.d7b94745.js";const he=[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],re={type:"fixed",source:0,request:"get",sourceFun:""},Be=[{title:"\u57FA\u7840\u5B57\u6BB5",children:[{type:"input",label:"\u5355\u884C\u6587\u672C",icon:"input",control:{modelValue:""},config:{}},{type:"textarea",label:"\u591A\u884C\u6587\u672C",icon:"textarea",control:{modelValue:""},config:{}},{type:"radio",label:"\u5355\u9009\u6846\u7EC4",icon:"radio",control:{modelValue:""},options:he,config:re},{type:"checkbox",label:"\u591A\u9009\u6846\u7EC4",icon:"checkbox",control:{modelValue:[]},options:he,config:re},{type:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",icon:"select",control:{modelValue:[],appendToBody:!0},options:he,config:re},{type:"datePicker",label:"\u65E5\u671F\u9009\u62E9\u5668",icon:"date",control:{modelValue:"",type:"date"},config:{}},{type:"timePicker",label:"\u65F6\u95F4\u9009\u62E9\u5668",icon:"time",control:{modelValue:""},config:{}},{type:"colorPicker",label:"\u53D6\u8272\u5668",icon:"color",control:{modelValue:""},config:{}},{type:"switch",label:"\u5F00\u5173",icon:"switch",control:{modelValue:!1},config:{}},{type:"inputNumber",label:"\u8BA1\u6570\u5668",icon:"number",control:{modelValue:""},config:{}},{type:"cascader",label:"\u7EA7\u8054\u9009\u62E9\u5668",icon:"cascader",control:{modelValue:[]},options:[],config:re},{type:"rate",label:"\u8BC4\u5206",icon:"rate",control:{modelValue:""},config:{}},{type:"slider",label:"\u6ED1\u5757",icon:"slider",control:{modelValue:""},config:{}},{type:"txt",label:"\u6587\u5B57",icon:"text",control:{modelValue:""},config:{}},{type:"title",label:"\u6807\u9898",icon:"title",control:{modelValue:"\u6807\u9898"},config:{}}]},{title:"\u9AD8\u7EA7\u5B57\u6BB5",children:[{type:"table",label:"\u5B50\u8868",icon:"table",list:[],tableData:[],control:{border:!0},config:{}},{type:"component",label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",icon:"component",control:{modelValue:""},config:{}},{type:"upload",label:"\u56FE\u7247/\u6587\u4EF6",icon:"image",control:{modelValue:[]},config:{}},{type:"tinymce",label:"tinymce\u5BCC\u6587\u672C",icon:"tinymce",control:{modelValue:""},config:{}}]},{title:"\u5E03\u5C40\u5B57\u6BB5",children:[{type:"grid",label:"\u683C\u6805\u5E03\u5C40",icon:"grid",columns:[{attr:{span:12},list:[]},{attr:{span:12},list:[]}],control:{},config:{}},{type:"tabs",label:"\u6807\u7B7E\u9875",icon:"tabs",columns:[{label:"Tab1",list:[]}],control:{},config:{}},{type:"card",label:"\u5361\u7247\u5E03\u5C40",icon:"card",list:[],control:{},config:{},item:{}},{type:"divider",label:"\u5206\u5272\u7EBF",icon:"divider",control:{},config:{}},{type:"div",label:"div\u5BB9\u5668",icon:"div",control:{},config:{},list:[]}]}],ze={class:"components-list"},Ke={key:0},He=k("div",{class:"title"},"\u5DF2\u6709\u8868\u5355\u5B57\u6BB5",-1),Je={class:"content"},Me={class:"title"},We=["title"],je=ge({__name:"dragControl",props:{formData:{default:()=>({list:[],form:{}})},searchData:{default:()=>[]},searchDesign:{type:Boolean,default:!1}},emits:["update:searchData"],setup(X,{emit:K}){const F=X,N=ue(F.searchData);ve(()=>F.searchData,A=>{N.value=A});const B=de(()=>F.searchDesign?Be.slice(0,1):Be),o=A=>JSON.parse(JSON.stringify(A)),z=(A,U)=>{if(U){const y=JSON.parse(JSON.stringify(A));delete y.rules,delete y.customRules,N.value.push(y)}else F.searchData.forEach((y,O)=>{y.name===A.name&&N.value.splice(O,1)});K("update:searchData",N.value)},c=A=>{let U=!1;return F.searchData.forEach(y=>{y.name===A&&(U=!0)}),U},t=de(()=>{const A=[];return R(F.formData.list,A),A}),Y=["txt","title","table","component","upload"],R=(A,U)=>{A&&A.forEach(y=>{y.type==="grid"||y.type==="tabs"?y.columns.forEach(O=>{R(O.list,U)}):y.type==="card"?R(y.list,U):Y.indexOf(y.type)===-1&&U.push(y)})};return(A,U)=>{var O;const y=_("el-checkbox");return r(),h("div",ze,[X.searchDesign&&((O=d(t))==null?void 0:O.length)?(r(),h("div",Ke,[He,k("div",Je,[(r(!0),h(I,null,q(d(t),$=>(r(),v(y,{key:$.name,checked:c($.name),onChange:H=>z($,H)},{default:u(()=>[E(fe($.item.label),1)]),_:2},1032,["checked","onChange"]))),128))])])):x("",!0),(r(!0),h(I,null,q(d(B),($,H)=>(r(),h("div",{key:H},[k("div",Me,fe($.title),1),e(d(Ue),{itemKey:"key123",tag:"ul",modelValue:$.children,"onUpdate:modelValue":w=>$.children=w,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:o},{item:u(({element:w})=>[k("li",{class:Ee([w.type])},[k("i",{class:Ee(`icon-${w.icon}`)},null,2),k("span",{title:w.label},fe(w.label),9,We)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])}}}),Ge={class:"sidebar-tools"},Qe=k("h3",null,"\u901A\u7528\u5C5E\u6027",-1),Xe=E("="),Ye=E("\u9690\u85CF(\u9ED8\u8BA4)"),Ze=E("\u7981\u7528"),eu=k("h3",null,"\u6807\u7B7E\u914D\u7F6E\u9879",-1),uu=["onClick"],lu=E("\u589E\u52A0\u6807\u7B7E"),au={key:2},tu=k("h3",null,"\u9009\u9879\u914D\u7F6E",-1),ou={key:0},nu=["onClick"],su=E("\u65B0\u589E"),ru=E("\u52A8\u6001\u9009\u9879"),iu=E("\u6570\u636E\u6E90"),du=E("\u65B9\u6CD5\u51FD\u6570 "),cu=E("\u63A5\u53E3\u5B57\u5178 "),pu=k("h3",null,"\u6821\u9A8C\u8BBE\u7F6E",-1),mu={key:0},fu=["onClick"],hu=E("\u5FEB\u901F\u6DFB\u52A0"),vu=E("\u7F16\u5199\u6821\u9A8C\u89C4\u5219 "),bu=E("\u5FC5\u586B "),gu={key:4},yu=k("h3",null,"\u5176\u4ED6\u5C5E\u6027",-1),_u=E("\u6DFB\u52A0\u5C5E\u6027 "),Du=E("\u6DFB\u52A0\u65F6\u83B7\u53D6\u8BF7\u6C42 "),Eu=E("\u7F16\u8F91\u8868\u5355\u6837\u5F0F "),Fu=ge({__name:"formControlAttr",props:{formData:null,dataSource:{default:()=>[]}},emits:["openDialog","update:formData"],setup(X,{emit:K}){var oe,Z,S,me;const F=X,N=$e(F.formData,"form"),B=ue(F.formData.config||{}),o=Ae(),z=Ve(),c=ke({formAttr:[{label:"\u6570\u636E\u6E90",placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90",value:N.value.formId,type:"select",options:F.dataSource,key:"dataSource",hide:z.query.type==="search"},{label:"\u8868\u5355\u540D\u79F0",value:N.value.name,key:"name"},{label:"\u8868\u5355\u6807\u7B7E\u5BBD\u5EA6",value:N.value.labelWidth,placeholder:"\u8868\u5355label\u5BBD\uFF0C\u5982180px",key:"labelWidth"},{label:"\u8868\u5355\u6837\u5F0F\u540D\u79F0",value:N.value.class,placeholder:"\u989D\u5916\u6DFB\u52A0\u7684\u8868\u5355class\u7C7B\u540D",key:"class"},{label:"\u7EC4\u4EF6\u5C3A\u5BF8",value:N.value.size,type:"select",key:"size",options:[{label:"large",value:"large"},{label:"default",value:"default"},{label:"small",value:"small"}]},{label:"\u63D0\u4EA4\u6309\u94AE",value:(Z=(oe=B.value)==null?void 0:oe.formBtn)==null?void 0:Z.confirm,placeholder:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u7A7A\u4E0D\u663E\u793A",path:"formBtn",key:"confirm"},{label:"\u53D6\u6D88\u8FD4\u56DE\u6309\u94AE",value:(me=(S=B.value)==null?void 0:S.formBtn)==null?void 0:me.cancel,placeholder:"\u53D6\u6D88\u8FD4\u56DE\u6309\u94AE\u6587\u6848\uFF0C\u7A7A\u4E0D\u663E\u793A",path:"formBtn",key:"cancel"}],dataSourceList:{},customRulesList:[...Fe,{type:"rules",label:"\u81EA\u5B9A\u4E49\u6B63\u5219"},{type:"methods",label:"\u81EA\u5B9A\u4E49\u65B9\u6CD5"}],isSearch:z.query.type==="search",attrList:[]});ve(()=>F.dataSource,a=>{c.formAttr[0].options=a});const t=de(()=>o.controlAttr);ve(()=>t.value,a=>{var n;a&&((n=Object.keys(a))==null?void 0:n.length)>0?Y():c.attrList=[]});const Y=()=>{const{control:a={},className:n="",type:p,name:D,config:C={},item:b={},attr:g={}}=t.value;let T=!1;if(p==="table"){const V=t.value&&t.value.list;V&&V.length>0&&(T=V[0].type==="index")}c.attrList=[{label:"\u81EA\u5B9A\u4E49Class",value:n,placeholder:"\u6837\u5F0F\u7C7B\u540D",path:"config.className"},{label:"\u5B57\u6BB5\u6807\u8BC6",value:D,type:Object.keys(c.dataSourceList).length>0?"select":"text",placeholder:"\u5B57\u6BB5\u552F\u4E00\u6807\u8BC6\uFF0C\u5BF9\u5E94\u6570\u636E\u5E93",dict:c.dataSourceList,path:"name",vHide:["grid","tabs","card","title","gridChild","tableColumn","divider","txt","div"],eventName:"filedNameKey"},{label:"\u5360\u4F4D\u5185\u5BB9",value:a.placeholder,placeholder:"placeholder",path:"control.placeholder",vShow:["password","input","textarea","select","date","number","datePicker","tinymce","timePicker"]},{label:"label\u503C",value:b.label,path:"item.label",vHide:["table","grid","tabs","title","gridChild","div"]},{label:"\u9690\u85CFlabel",value:b.showLabel,path:"item.showLabel",type:"switch",vHide:["table","grid","tabs","title","gridChild","divider","card","div"]},{label:"\u5E2E\u52A9\u4FE1\u606F",value:C.help,path:"config.help",vHide:["table","grid","tabs","gridChild","divider","div"]},{label:"\u8868\u5355\u6805\u683C",value:C.span,placeholder:"\u8868\u5355\u533A\u57DF\u6805\u683C\u5BBD",path:"config.span",vHide:["table","grid","gridChild","divider"],isNum:!0},{label:"\u6587\u672C\u503C",value:a.modelValue,placeholder:"\u652F\u6301html",path:"control.modelValue",vShow:["txt"],inputStyle:"textarea"},{label:"\u8BBE\u4E3A\u5BC6\u7801",value:p,type:"select",dict:{\u6587\u672C:"input",\u5BC6\u7801:"password"},path:"type",vShow:["input","password"],vIf:c.isSearch},{label:"\u6587\u672C\u57DF\u9AD8\u5EA6",value:a.rows,placeholder:"\u8F93\u5165\u6846\u884C\u6570",path:"control.rows",vShow:["textarea"],isNum:!0},{label:"\u524D\u7F00",value:C.prepend,placeholder:"\u6587\u672C\u524D\u7F00",path:"config.prepend",vShow:["input","password"]},{label:"\u540E\u7F00",value:C.append,placeholder:"\u6587\u672C\u540E\u7F00",path:"config.append",vShow:["input","password"]},{label:"\u662F\u5426\u591A\u9009",value:a.multiple,path:"control.multiple",type:"switch",vShow:["select"],eventName:"selectMultiple"},{label:"\u662F\u5426\u7981\u7528",value:a.disabled,path:"control.disabled",type:"switch",vShow:["input","password","textarea","radio","checkbox","select","date","switch","number","cascader","upload","rate","tinymce"],vIf:c.isSearch},{label:"\u662F\u5426\u7981\u7528\u7F16\u8F91",value:C.editDisabled,path:"config.editDisabled",type:"switch",vShow:["input","password","textarea","radio","checkbox","select","date","switch","number","cascader","upload"],vIf:c.isSearch},{label:"\u6DFB\u52A0\u9875\u9690\u85CF",value:C.disabledAdd,path:"config.disabledAdd",type:"switch",vIf:c.isSearch},{label:"\u7F16\u8F91\u9875\u9690\u85CF",value:C.disabledEdit,path:"config.disabledEdit",type:"switch",vIf:c.isSearch},{label:"\u8BE6\u60C5\u9875\u9690\u85CF",value:C.disabledDetail,path:"config.disabledDetail",type:"switch",vIf:c.isSearch},{label:"\u6807\u9898",value:a.modelValue,path:"control.modelValue",vShow:["title"]},{label:"\u5360\u636E\u7684\u5217\u6570span",value:g.span,path:"attr.span",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570offset",value:g.offset,path:"attr.offset",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"\u5411\u53F3\u79FB\u52A8\u683C\u6570push",value:g.push,path:"attr.push",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"\u5411\u5DE6\u79FB\u52A8\u683C\u6570pull",value:g.pull,path:"attr.pull",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"\u5E8F\u53F7\u5217",value:T,type:"switch",vShow:["table"],eventName:"tableColumn1"},{label:"\u7EC4\u4EF6\u540D",value:C.template,placeholder:"\u5168\u5C40\u6CE8\u518C\u7684\u7EC4\u4EF6\u540D\u79F0",path:"config.componentName",vShow:["component"]},{label:"\u4E0A\u4F20\u5730\u5740",value:a.action,placeholder:"\u56FE\u7247/\u6587\u4EF6\u4E0A\u4F20\u5730\u5740",path:"control.action",vShow:["upload"]},{label:"\u6587\u4EF6\u5B57\u6BB5\u540D",value:a.name,placeholder:"\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D",path:"control.name",vShow:["upload"]},{label:"\u5217\u8868\u7C7B\u578B",value:a.listType,type:"select",dict:{text:"text",picture:"picture","picture-card":"picture-card"},path:"control.listType",vShow:["upload"]},{label:"\u63D0\u793A\u6587\u5B57",value:C.tip,placeholder:"\u63D0\u793A\u8BF4\u660E\u6587\u5B57",path:"config.tip",vShow:["upload"]},{label:"\u6309\u94AE\u6587\u672C",value:C.btnText,placeholder:"\u4E0A\u4F20\u6309\u94AE\u6587\u672C",path:"config.btnText",vShow:["upload"]},{label:"direction",type:"select",dict:{horizontal:"horizontal",vertical:"vertical"},value:a.direction,path:"control.direction",vShow:["divider"]},{label:"border-style",value:a.borderStyle,path:"control.borderStyle",vShow:["divider"]},{label:"content-position",type:"select",dict:{left:"left",right:"right",center:"center"},value:a.contentPosition,path:"control.contentPosition",vShow:["divider"]},{label:"\u6700\u5C0F\u503C",value:a.min,path:"control.min",vShow:["slider"],eventName:"formatNumber",isNum:!0},{label:"\u6700\u5927\u503C",value:a.max,path:"control.max",vShow:["rate","slider"],eventName:"formatNumber",isNum:!0},{label:"\u6B65\u957F",value:a.step,path:"control.step",vShow:["slider"],eventName:"formatNumber",isNum:!0},{label:"type",value:a.type,path:"control.type",vShow:["datePicker"],type:"select",placeholder:"\u663E\u793A\u7C7B\u578B",dict:{year:"year",month:"month",date:"date",datetime:"datetime",week:"week",datetimerange:"datetimerange",daterange:"daterange",monthrange:"monthrange"}},{label:"format",value:a.format,path:"control.format",vShow:["datePicker","timePicker"],placeholder:"\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F"},{label:"color-format",value:a.colorFormat,path:"control.colorFormat",type:"select",placeholder:"\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F",dict:{hsl:"hsl",hsv:"hsv",hex:"hex",rgb:"rgb"},vShow:["colorPicker"]},{label:"\u6587\u672C\u9AD8\u5EA6",value:a.height,path:"control.height",placeholder:"\u6587\u672C\u9AD8\u5EA6(\u9884\u89C8\u67E5\u770B\u6548\u679C)",vShow:["tinymce"]},{label:"\u6587\u672C\u5BBD\u5EA6",value:a.width,path:"control.width",placeholder:"\u6587\u672C\u5BBD\u5EA6(\u9884\u89C8\u67E5\u770B\u6548\u679C)",vShow:["tinymce"]},{label:"\u56FE\u7247\u4E0A\u4F20\u5730\u5740",value:a.imgUrl,path:"control.imgUrl",placeholder:"\u56FE\u7247\u4E0A\u4F20\u5730\u5740",vShow:["tinymce"]},{label:"\u9644\u4EF6\u4E0A\u4F20\u5730\u5740",value:a.blobUrl,path:"control.blobUrl",placeholder:"\u9644\u4EF6\u4E0A\u4F20\u5730\u5740",vShow:["tinymce"]},{label:"\u663E\u793A\u6A21\u5F0F",value:C.style,path:"config.style",placeholder:"\u663E\u793A\u98CE\u683C(\u9884\u89C8\u67E5\u770B\u6548\u679C)",type:"select",dict:{default:"default",simple:"simple"},vShow:["tinymce"]}],c.attrList=c.attrList.filter(V=>{let J=!0;return V.vShow&&(J=V.vShow.indexOf(p)!==-1),V.vHide&&(J=V.vHide.indexOf(p)===-1),V.vIf&&(J=!1),J})},R=(a,n)=>{switch(a.eventName){case"selectMultiple":n?t.value.control.modelValue=[]:t.value.control.modelValue="";break;case"tableColumn1":le(n);break;case"formatNumber":break;case"filedNameKey":for(const D in c.dataSourceList)if(c.dataSourceList[D]===n){t.value.item.label=D,t.value.name=n;return}break}const p=a.isNum?parseInt(n):n;a.path&&A(t.value,a.path,p)},A=(a,n,p)=>{let D=a;const C=n.split(".");let b=0;for(b;b<C.length-1;b++){const V=C[b];if(V in D)D=D[V];else throw new Error(`${V} is undefined`)}const g=C[b],T=D[C[b]];return p!==void 0&&(D[g]=p),{obj:D,key:g,value:T}},U=(a,n)=>{n==="tabs"?t.value.columns.splice(a,1):t.value.options.splice(a,1)},y=a=>{t.value.type==="cascader"?O():a==="tabs"?t.value.columns.push({label:"\u6807\u7B7E\u540D\u79F0",list:[]}):t.value.options.push({label:"",value:""})},O=()=>{let a=t.value.control;t.value.type==="cascader"&&(a=t.value.options),K("openDialog",a,n=>{t.value.type==="cascader"?t.value.options=n:(t.value.control={},Object.assign(t.value.control,n))})},$=a=>{var n;(n=t.value.item)!=null&&n.rules||(t.value.item.rules=[]),a?t.value.item.rules.push({required:!0,message:"\u5FC5\u586B\u9879",trigger:"change"}):t.value.item.rules.splice(0,1)},H=()=>{var a,n;(a=t.value.item)!=null&&a.rules||(t.value.item.rules=[]),K("openDialog",(n=t.value.item)==null?void 0:n.rules,p=>{Object.assign(t.value.item.rules,p)})},w=(a,n)=>{if(a&&a.length===0||Object.keys(t.value).length===0)return!1;const p=a.indexOf(t.value.type);return n?p!==-1:p===-1},le=a=>{const n={name:"index",type:"index",item:{label:"\u5E8F\u53F7"},control:{},config:{}};a?t.value.list.unshift(n):t.value.list.splice(0,1)},ce=de(()=>{var n;const a=t.value&&((n=t.value.item)==null?void 0:n.rules);return a&&a.length>0}),ae=()=>{t.value.customRules||(t.value.customRules=[]),t.value.customRules.push({type:"required",message:"\u5FC5\u586B\u9879",trigger:"blur"})},f=a=>{t.value.customRules&&t.value.customRules.splice(a,1)},i=()=>{var a;K("openDialog",((a=F.formData.config)==null?void 0:a.style)||"","css")},m=a=>{const n=a||z.query.formId;n&&ie("formFiled",{id:n}).then(p=>{p.data.code===200&&p.data.data.forEach(D=>{c.dataSourceList[D.label]=D.name})}).catch(p=>{console.log(p)})},P=(a,n)=>{switch(a.key==="dataSource"&&(m(a.value),o.setActiveKey(""),o.setControlAttr({})),a.key){case"confirm":case"cancel":case"addLoad":a.key==="addLoad"?B.value.addLoad=n:(B.value.submitBtn||(B.value.submitBtn={}),B.value.submitBtn[a.key]=a.value),K("update:formData",Object.assign(F.formData,{config:B.value}));break;default:N.value[a.key]=a.value}},pe=a=>{switch(a){case 0:return"\u6570\u636E\u6E90\u63A5\u53E3URL";case 1:return"\u65B9\u6CD5\u540D\u79F0";case 2:return"\u5B57\u5178key\uFF0C\u9ED8\u8BA4\u4E3A\u5B57\u6BB5\u6807\u8BC6"}return""},te=(a,n)=>{const p=Fe.filter(D=>D.type===n);p&&p.length&&(a.message=p[0].message)};return m(),(a,n)=>{const p=_("el-option"),D=_("el-select"),C=_("el-switch"),b=_("el-input"),g=_("el-form-item"),T=_("el-col"),V=_("el-radio"),J=_("el-radio-group"),G=_("el-button"),ne=_("el-tab-pane"),M=_("QuestionFilled"),W=_("el-icon"),j=_("el-tooltip"),ye=_("el-tabs"),we=_("el-checkbox"),_e=_("el-form");return r(),h("div",Ge,[e(ye,{modelValue:"first"},{default:u(()=>[e(ne,{label:"\u5B57\u6BB5\u5C5E\u6027",name:"first"},{default:u(()=>[e(_e,{size:"small",class:"form"},{default:u(()=>[Qe,(r(!0),h(I,null,q(c.attrList,(l,L)=>(r(),v(g,{key:L,label:l.label},{default:u(()=>[l.type==="select"?(r(),v(D,{key:0,placeholder:l.placeholder,modelValue:l.value,"onUpdate:modelValue":s=>l.value=s,filterable:l.path==="name","allow-create":l.path==="name",onChange:s=>R(l,s)},{default:u(()=>[(r(!0),h(I,null,q(l.dict,(s,De)=>(r(),v(p,{key:s,value:s,label:l.path==="name"?`${De}(${s})`:De},null,8,["value","label"]))),128))]),_:2},1032,["placeholder","modelValue","onUpdate:modelValue","filterable","allow-create","onChange"])):l.type==="switch"?(r(),v(C,{key:1,modelValue:l.value,"onUpdate:modelValue":s=>l.value=s,onChange:s=>R(l,s)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(r(),v(b,{key:2,type:l.inputStyle,modelValue:l.value,"onUpdate:modelValue":s=>l.value=s,placeholder:l.placeholder,onChange:s=>R(l,s)},null,8,["type","modelValue","onUpdate:modelValue","placeholder","onChange"]))]),_:2},1032,["label"]))),128)),d(t).config?(r(),h(I,{key:0},[e(g,{label:"\u8054\u52A8\u6761\u4EF6"},{default:u(()=>[e(T,{span:9},{default:u(()=>[e(b,{placeholder:"\u6807\u8BC6\u540D\u79F0",modelValue:d(t).config.linkKey,"onUpdate:modelValue":n[0]||(n[0]=l=>d(t).config.linkKey=l)},null,8,["modelValue"])]),_:1}),e(T,{span:2,offset:1},{default:u(()=>[Xe]),_:1}),e(T,{span:9,offset:1},{default:u(()=>[e(b,{placeholder:"\u5173\u8054\u503C",modelValue:d(t).config.linkValue,"onUpdate:modelValue":n[1]||(n[1]=l=>d(t).config.linkValue=l)},null,8,["modelValue"])]),_:1})]),_:1}),w(["input","textarea","radio","checkbox","select","date","switch","number","cascader","slider","datePicker","timePicker","colorPicker","inputNumber","rate"],!0)?be((r(),v(g,{key:0,label:"\u8054\u52A8\u7ED3\u679C"},{default:u(()=>[e(J,{class:"option-radio",modelValue:d(t).config.linkResult,"onUpdate:modelValue":n[2]||(n[2]=l=>d(t).config.linkResult=l)},{default:u(()=>[e(V,{label:"hidden"},{default:u(()=>[Ye]),_:1}),e(V,{label:"disabled"},{default:u(()=>[Ze]),_:1})]),_:1},8,["modelValue"])]),_:1},512)),[[Le,d(t).config.linkKey]]):x("",!0)],64)):x("",!0),w(["tabs"],!0)?(r(),h(I,{key:1},[eu,(r(!0),h(I,null,q(d(t).columns,(l,L)=>(r(),v(g,{key:L},{default:u(()=>[e(T,{span:12},{default:u(()=>[e(b,{placeholder:"\u6807\u7B7E\u914D\u7F6E\u9879",modelValue:l.label,"onUpdate:modelValue":s=>l.label=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(T,{span:2,offset:1},{default:u(()=>[k("i",{class:"icon-del",onClick:s=>U(L,"tabs")},null,8,uu)]),_:2},1024)]),_:2},1024))),128)),e(g,null,{default:u(()=>[e(G,{onClick:n[3]||(n[3]=l=>y("tabs"))},{default:u(()=>[lu]),_:1})]),_:1})],64)):x("",!0),w(["radio","select","checkbox","cascader"],!0)?(r(),h("div",au,[tu,w("select",!0)?(r(),v(g,{key:0,label:"\u6DFB\u52A0\u5168\u90E8\u9879"},{default:u(()=>[e(b,{placeholder:"\u8BF7\u8F93\u5165\u5168\u90E8\u9879\u6587\u6848",modelValue:d(t).config.addAll,"onUpdate:modelValue":n[4]||(n[4]=l=>d(t).config.addAll=l)},null,8,["modelValue"])]),_:1})):x("",!0),e(ye,{modelValue:d(t).config.type,"onUpdate:modelValue":n[9]||(n[9]=l=>d(t).config.type=l)},{default:u(()=>[e(ne,{label:"\u56FA\u5B9A\u9009\u9879",name:"fixed"},{default:u(()=>[d(t).type!=="cascader"?(r(),h("div",ou,[(r(!0),h(I,null,q(d(t).options,(l,L)=>(r(),v(g,{key:L},{default:u(()=>[e(T,{span:10},{default:u(()=>[e(b,{placeholder:"\u9009\u9879\u6807\u7B7E",modelValue:l.label,"onUpdate:modelValue":s=>l.label=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(T,{span:10,offset:1},{default:u(()=>[e(b,{placeholder:"\u9009\u9879\u503C",modelValue:l.value,"onUpdate:modelValue":s=>l.value=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(T,{span:2,offset:1},{default:u(()=>[k("i",{class:"icon-del",onClick:s=>U(L)},null,8,nu)]),_:2},1024)]),_:2},1024))),128))])):x("",!0),e(g,null,{default:u(()=>[e(G,{onClick:y},{default:u(()=>[su]),_:1})]),_:1})]),_:1}),e(ne,{name:"async"},{label:u(()=>[e(j,{content:"\u9009\u7528\u52A8\u6001\u9009\u9879\u65F6\u8BF7\u5220\u9664\u56FA\u5B9A\u9009\u9879\u6570\u636E",placement:"top"},{default:u(()=>[k("span",null,[ru,e(W,null,{default:u(()=>[e(M)]),_:1})])]),_:1})]),default:u(()=>[e(J,{class:"option-radio",modelValue:d(t).config.source,"onUpdate:modelValue":n[5]||(n[5]=l=>d(t).config.source=l),onChange:n[6]||(n[6]=l=>d(t).config.sourceFun="")},{default:u(()=>[e(V,{label:0},{default:u(()=>[iu]),_:1}),e(V,{label:1},{default:u(()=>[du,e(j,{content:"\u9002\u7528\u4E8E\u5BFC\u51FA\u4E3A\u5355\u72EC\u7684vue\u6587\u4EF6\uFF0C\u5728\u5F53\u524D\u6587\u4EF6\u4F7F\u7528provide\u5F62\u5F0F\u5C06\u65B9\u6CD5\u4F20\u9012",placement:"top"},{default:u(()=>[e(W,null,{default:u(()=>[e(M)]),_:1})]),_:1})]),_:1}),e(V,{label:2},{default:u(()=>[cu,e(j,{content:"\u4ECE\u5F53\u524D\u6570\u636E\u63A5\u53E3dict\u91CC\u5339\u914D\uFF0C\u53EF\u51CF\u5C11\u8BF7\u6C42\u6570\uFF0C\u5B9E\u9645\u9879\u76EE\u4E5F\u4E0D\u662F\u6BCF\u4E2A\u9009\u9879\u90FD\u6709\u5355\u72EC\u7684\u63A5\u53E3\u3002\u6B64\u8BBE\u7F6E\u9700\u8981\u5F00\u542F\u8868\u5355\u5C5E\u6027-\u6DFB\u52A0\u65F6\u83B7\u53D6\u8BF7\u6C42",placement:"top"},{default:u(()=>[e(W,null,{default:u(()=>[e(M)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(g,null,{default:u(()=>[e(b,{modelValue:d(t).config.sourceFun,"onUpdate:modelValue":n[8]||(n[8]=l=>d(t).config.sourceFun=l),placeholder:pe(d(t).config.source)},Te({_:2},[d(t).config.source?void 0:{name:"prepend",fn:u(()=>[e(D,{modelValue:d(t).config.request,"onUpdate:modelValue":n[7]||(n[7]=l=>d(t).config.request=l),style:{width:"80px"}},{default:u(()=>[e(p,{label:"get",value:"get"}),e(p,{label:"post",value:"post"})]),_:1},8,["modelValue"])])}]),1032,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])):x("",!0),!c.isSearch&&w(["txt","title","table","grid","tabs","card","switch","gridChild","tableColumn","divider","div"])?(r(),h(I,{key:3},[pu,w(["input","password","component"],!0)?(r(),h("div",mu,[(r(!0),h(I,null,q(d(t).customRules,(l,L)=>(r(),v(g,{key:l.type},{default:u(()=>[e(b,{modelValue:l.message,"onUpdate:modelValue":s=>l.message=s,placeholder:"\u6821\u9A8C\u63D0\u793A\u4FE1\u606F"},{prepend:u(()=>[e(D,{modelValue:l.type,"onUpdate:modelValue":s=>l.type=s,style:{width:"80px"},onChange:s=>te(l,s)},{default:u(()=>[(r(!0),h(I,null,q(c.customRulesList,s=>(r(),v(p,{key:s.type,label:s.label,value:s.type},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),append:u(()=>[k("i",{class:"icon-del",onClick:s=>f(L)},null,8,fu)]),_:2},1032,["modelValue","onUpdate:modelValue"]),l.type==="rules"?(r(),v(b,{key:0,placeholder:"\u6B63\u5219\u8868\u8FBE\u5F0F",modelValue:l.rules,"onUpdate:modelValue":s=>l.rules=s},null,8,["modelValue","onUpdate:modelValue"])):x("",!0),l.type==="methods"?(r(),v(b,{key:1,placeholder:"\u65B9\u6CD5\u540D\u79F0",modelValue:l.methods,"onUpdate:modelValue":s=>l.methods=s},null,8,["modelValue","onUpdate:modelValue"])):x("",!0)]),_:2},1024))),128)),e(g,null,{default:u(()=>[e(G,{onClick:ae},{default:u(()=>[hu]),_:1}),e(G,{onClick:H},{default:u(()=>[vu,e(j,{content:"\u53EF\u53C2\u8003UI\u7EC4\u4EF6\u8868\u5355\u6821\u9A8C\uFF0C<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>\u8BE6\u60C5\u70B9\u51FB</a>",placement:"top","raw-content":""},{default:u(()=>[e(W,null,{default:u(()=>[e(M)]),_:1})]),_:1})]),_:1})]),_:1})])):(r(),v(g,{key:1},{default:u(()=>{var l,L;return[e(we,{modelValue:d(ce),onChange:$},{default:u(()=>[bu]),_:1},8,["modelValue"]),((l=d(t).item)==null?void 0:l.rules)&&((L=d(t).item)==null?void 0:L.rules[0])?(r(),v(b,{key:0,placeholder:"\u81EA\u5B9A\u4E49\u5FC5\u586B\u9519\u8BEF\u63D0\u793A",modelValue:d(t).item.rules[0].message,"onUpdate:modelValue":n[10]||(n[10]=s=>d(t).item.rules[0].message=s)},null,8,["modelValue"])):x("",!0)]}),_:1}))],64)):x("",!0),w(["grid","card","gridChild","divider","div"])?(r(),h("div",gu,[yu,e(G,{size:"small",onClick:O},{default:u(()=>[_u,e(j,{content:"\u53EF\u6DFB\u52A0\u5F53\u524D\u7EC4\u4EF6\u6240\u6709prop\u5C5E\u6027",placement:"top"},{default:u(()=>[e(W,null,{default:u(()=>[e(M)]),_:1})]),_:1})]),_:1})])):x("",!0)]),_:1})]),_:1}),e(ne,{label:"\u8868\u5355\u5C5E\u6027",name:"second"},{default:u(()=>[e(_e,{size:"small",class:"form"},{default:u(()=>[(r(!0),h(I,null,q(c.formAttr.filter(l=>!l.hide),(l,L)=>(r(),v(g,{label:l.label,key:L},{default:u(()=>[l.type==="select"?(r(),v(D,{key:0,modelValue:l.value,"onUpdate:modelValue":s=>l.value=s,placeholder:l.placeholder,onChange:s=>P(l)},{default:u(()=>[(r(!0),h(I,null,q(l.options,s=>(r(),v(p,{label:s.label||s.name,key:s.label||s.name,value:s.value||s.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","onChange"])):(r(),v(b,{key:1,modelValue:l.value,"onUpdate:modelValue":s=>l.value=s,placeholder:l.placeholder,onChange:s=>P(l)},null,8,["modelValue","onUpdate:modelValue","placeholder","onChange"]))]),_:2},1032,["label"]))),128)),e(g,null,{label:u(()=>[Du,e(j,{content:"\u65B0\u589E\u8868\u5355\u6570\u636E\u65F6\uFF0C\u4ECE\u63A5\u53E3\u83B7\u53D6\u65B0\u589E\u521D\u59CB\u6570\u636E",placement:"top"},{default:u(()=>[e(W,null,{default:u(()=>[e(M)]),_:1})]),_:1})]),default:u(()=>[e(C,{modelValue:B.value.addLoad,"onUpdate:modelValue":n[11]||(n[11]=l=>B.value.addLoad=l),onChange:n[12]||(n[12]=l=>P({key:"addLoad"},l))},null,8,["modelValue"])]),_:1}),e(g,null,{default:u(()=>[e(G,{onClick:i},{default:u(()=>[Eu,e(j,{content:"\u5F53\u524D\u8868\u5355\u5E94\u7528\u9875\u7684\u6837\u5F0F\uFF0C\u7C7B\u4F3C\u4E8E.vue\u6587\u4EF6\u4E2D\u7684<style scoped>\u4E2D\u7684\u6837\u5F0F",placement:"top"},{default:u(()=>[e(W,null,{default:u(()=>[e(M)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),Cu={style:{"text-align":"right","margin-bottom":"5px"}},Bu=E("\u65E0\u6570\u636E\u6E90\u521B\u5EFA"),Au=E("\u521B\u5EFA\u8868\u5355 "),Vu={key:1,class:"design-container"},ku={class:"main-body"},wu={class:"main-form"},Su={key:0,class:"empty-tips"},xu={key:0,id:"editJson"},Nu={class:"dialog-footer"},Uu=E(" \u786E\u5B9A "),$u={class:"dialog-footer"},Lu=E(" \u63D0\u4EA4 "),Tu=E(" \u53D6\u6D88 "),qu=ge({__name:"index",setup(X){var ae;Ie().changeBreadcrumb([{label:"\u7CFB\u7EDF\u5DE5\u5177"},{label:"\u8868\u5355\u8BBE\u8BA1"}]);const F=Ae(),N=Oe(),B=Ve(),o=ke({formData:{list:[],form:{labelWidth:"",class:"",size:"default",name:"form"+new Date().getTime(),formId:B.query.formId||""}},visibleDialog:!1,dialogType:"",editor:{},loading:!1,drawerDirection:"rtl",formDataPreview:{},previewVisible:!1,searchDesign:((ae=B.query)==null?void 0:ae.type)==="search",formDataList:{},formDataTemp:{}}),z=ue(),c=ue({visible:!0,loading:!0,tableData:[]}),t=f=>{N.push({path:"/designform",query:{formId:f}})},Y=()=>{ie("datasource").then(f=>{c.value.loading=!1,c.value.tableData=f.data.data})},R=()=>{t()};Y();const A=()=>{const f=B.query.id;f&&(o.loading=!0,ie("getFormById",{id:f}).then(i=>{if(i.data.code===200){const m=i.data.data;o.searchDesign?(m.searchData&&(o.formData=ee(m.searchData)),o.formDataList=ee(m.formData),o.formDataTemp=m):m.formData&&(o.formData=ee(m.formData))}o.loading=!1}).catch(i=>{Q.info(i.data||"\u52A0\u8F7D\u5F02\u5E38"),o.loading=!1}))},U=f=>{switch(o.dialogType="",f){case"del":o.formData.list=[],F.setActiveKey(""),F.setControlAttr({});break;case"eye":F.setActiveKey(""),F.setControlAttr({}),o.previewVisible=!0;let i=se(o.formData);const m=o.formData.form.name,P=new RegExp(`get${m}ControlByName`,"g");i=i.replace(P,`getPreview${m}ControlByName`),o.formDataPreview=ee(i),o.formDataPreview.form.name=`Preview${m}`;break;case"json":$(o.formData);break;case"save":O();break;case"vue":z.value.open(o.formData);break;case"import":$({});break}},y=()=>{try{const f=o.editor.getValue();let i=f;o.dialogType!=="css"&&(i=ee(f)),typeof o.dialogType=="function"?o.dialogType(i):o.dialogType==="css"?(o.formData.config||(o.formData.config={}),o.formData.config.style=i):o.formData=i,o.visibleDialog=!1}catch{}},O=()=>{var f;if(B.query.formId){const i={searchData:o.formDataTemp.searchData,tableData:o.formDataTemp.tableData,formData:se(o.formData),id:B.query.id,formId:((f=o.formData.form)==null?void 0:f.formId)||B.query.formId,name:o.formData.form.name};o.searchDesign&&Object.assign(i,{searchData:se(o.formData),formData:o.formDataTemp.formData}),o.loading=!0,ie("saveForm",i).then(m=>{m.data.code===200?(Q({message:"\u4FDD\u5B58\u6210\u529F\uFF01",type:"success"}),N.push({path:"/designform/formlist"})):Q.error(m.data),o.loading=!1}).catch(m=>{Q.info(m.data||"\u4FDD\u5B58\u5F02\u5E38"),o.loading=!1}),B.query.id||window.sessionStorage.removeItem("formMenuList")}F.setActiveKey(""),F.setControlAttr({})},$=(f,i)=>{o.drawerDirection=i?"ltr":"rtl",o.dialogType=i,o.visibleDialog=!0;let m=se(f,!0);i==="css"&&(m=f);const P=i==="css"?"css":"";Re(()=>{o.editor=Ne(m,"",P)})},H=f=>{w(),f()},w=()=>{o.visibleDialog=!1,o.dialogType=""},le=ue(),ce=()=>{le.value.validate((f,i)=>{if(f)Q.success("\u6821\u9A8C\u901A\u8FC7"),console.log(i);else return Q.error("\u6821\u9A8C\u4E0D\u901A\u8FC7"),!1})};return A(),Pe(()=>{Object.keys(o.editor).length!==0&&(o.editor.destroy(),o.editor.container.remove())}),(f,i)=>{const m=_("el-button"),P=_("el-table-column"),pe=_("el-table"),te=_("el-dialog"),oe=_("el-drawer"),Z=qe("loading");return f.$route.query.new?(r(),v(te,{key:0,modelValue:c.value.visible,"onUpdate:modelValue":i[1]||(i[1]=S=>c.value.visible=S),title:"\u9009\u62E9\u6570\u636E\u6E90",width:"600px","custom-class":"source-dialog","append-to-body":!0,"before-close":R},{default:u(()=>[k("div",Cu,[e(m,{type:"primary",onClick:i[0]||(i[0]=S=>t())},{default:u(()=>[Bu]),_:1})]),be((r(),v(pe,{data:c.value.tableData,border:"",style:{width:"100%"}},{default:u(()=>[e(P,{prop:"name",label:"\u8868\u5355\u540D\u79F0"}),e(P,{label:"\u64CD\u4F5C"},{default:u(S=>[e(m,{size:"small",onClick:me=>t(S.row.id),type:"primary"},{default:u(()=>[Au]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Z,c.value.loading]])]),_:1},8,["modelValue"])):(r(),h("div",Vu,[e(je,{formData:o.formDataList,searchData:o.formData.list,"onUpdate:searchData":i[2]||(i[2]=S=>o.formData.list=S),searchDesign:o.searchDesign},null,8,["formData","searchData","searchDesign"]),k("div",ku,[e(Se,{onClick:U}),be((r(),h("div",wu,[o.formData.list.length===0?(r(),h("div",Su," \u4ECE\u5DE6\u4FA7\u62D6\u62FD\u6765\u6DFB\u52A0\u5B57\u6BB5 ")):x("",!0),e(Ce,{type:4,formData:o.formData},null,8,["formData"])])),[[Z,o.loading]])]),e(Fu,{formData:o.formData,"onUpdate:formData":i[3]||(i[3]=S=>o.formData=S),dataSource:c.value.tableData,onOpenDialog:$},null,8,["formData","dataSource"]),e(oe,{modelValue:o.visibleDialog,"onUpdate:modelValue":i[4]||(i[4]=S=>o.visibleDialog=S),size:"60%",direction:o.drawerDirection,"custom-class":"json-dialog","append-to-body":!0,"before-close":H},{default:u(()=>[o.visibleDialog?(r(),h("div",xu)):x("",!0),k("div",Nu,[e(m,{type:"primary",size:"small",onClick:y},{default:u(()=>[Uu]),_:1})])]),_:1},8,["modelValue","direction"]),o.searchDesign?x("",!0):(r(),v(xe,{key:0,ref_key:"vueFileEl",ref:z},null,512)),e(te,{modelValue:o.previewVisible,"onUpdate:modelValue":i[6]||(i[6]=S=>o.previewVisible=S),title:"\u9884\u89C8",fullscreen:!0},{footer:u(()=>[k("div",$u,[e(m,{size:"small",type:"primary",onClick:ce},{default:u(()=>[Lu]),_:1}),e(m,{size:"small",onClick:i[5]||(i[5]=S=>o.previewVisible=!1)},{default:u(()=>[Tu]),_:1})])]),default:u(()=>[o.previewVisible?(r(),v(Ce,{key:0,"form-data":o.formDataPreview,type:1,ref_key:"previewForm",ref:le},null,8,["form-data"])):x("",!0)]),_:1},8,["modelValue"])]))}}});export{qu as default};