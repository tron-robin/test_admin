(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-element-popup-dialog"],{"3c56":function(t,e,i){"use strict";i.r(e);var l=i("8e4f"),n=i("fce0");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);var o=i("f0c5"),s=Object(o["a"])(n["default"],l["b"],l["c"],!1,null,"9968947c",null,!1,l["a"],void 0);e["default"]=s.exports},"8e4f":function(t,e,i){"use strict";i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-body"},[i("div",{staticStyle:{padding:"40rpx","font-size":"70rpx","font-family":"kaiti"}},[t._v("弹窗功能演示")]),i("el-row",[i("el-col",{staticStyle:{padding:"40rpx"},attrs:{span:24}},[i("div",{staticStyle:{padding:"40rpx 0rpx","font-size":"40rpx","font-family":"simsun"}},[t._v("基本用法:")]),i("el-button",{attrs:{type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogVisible1=!0}}},[t._v("点击打开 Dialog")]),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible1,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.dialogVisible1=e}}},[i("span",[t._v("这是一段信息")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogVisible1=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogVisible1=!1}}},[t._v("确 定")])],1)])],1)],1),i("el-row",[i("el-col",{staticStyle:{padding:"40rpx"},attrs:{span:24}},[i("div",{staticStyle:{padding:"40rpx 0rpx","font-size":"40rpx","font-family":"simsun"}},[t._v("嵌套表格:")]),i("el-button",{attrs:{type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogTableVisible=!0}}},[t._v("打开嵌套表格的 Dialog")]),i("el-dialog",{attrs:{title:"收货地址",visible:t.dialogTableVisible},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.dialogTableVisible=e}}},[i("el-table",{attrs:{data:t.gridData}},[i("el-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),i("el-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),i("el-table-column",{attrs:{property:"address",label:"地址"}})],1)],1)],1)],1),i("el-row",[i("el-col",{staticStyle:{padding:"40rpx"},attrs:{span:24}},[i("div",{staticStyle:{padding:"40rpx 0rpx","font-size":"40rpx","font-family":"simsun"}},[t._v("嵌套表单:")]),i("el-button",{attrs:{type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogFormVisible=!0}}},[t._v("打开嵌套表单的 Dialog")]),i("el-dialog",{attrs:{title:"收货地址",visible:t.dialogFormVisible},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.dialogFormVisible=e}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"活动名称","label-width":t.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"活动区域","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[i("el-option",{attrs:{label:"区域一",value:"shanghai"}}),i("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogFormVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)],1),i("el-row",[i("el-col",{staticStyle:{padding:"40rpx"},attrs:{span:24}},[i("div",{staticStyle:{padding:"40rpx 0rpx","font-size":"40rpx","font-family":"simsun"}},[t._v("多层嵌套:")]),i("el-button",{attrs:{type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.outerVisible=!0}}},[t._v("点击打开外层 Dialog")]),i("el-dialog",{attrs:{title:"外层 Dialog",visible:t.outerVisible},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.outerVisible=e}}},[i("el-dialog",{attrs:{width:"30%",title:"内层 Dialog",visible:t.innerVisible,"append-to-body":!0},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.innerVisible=e}}}),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.outerVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.innerVisible=!0}}},[t._v("打开内层 Dialog")])],1)],1)],1)],1),i("el-row",[i("el-col",{staticStyle:{padding:"40rpx"},attrs:{span:24}},[i("div",{staticStyle:{padding:"40rpx 0rpx","font-size":"40rpx","font-family":"simsun"}},[t._v("居中布局:")]),i("el-button",{attrs:{type:"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.centerDialogVisible=!0}}},[t._v("点击打开 Dialog")]),i("el-dialog",{attrs:{title:"提示",visible:t.centerDialogVisible,width:"30%",center:!0},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.centerDialogVisible=e}}},[i("span",[t._v("需要注意的是内容是默认不居中的")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.centerDialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.centerDialogVisible=!1}}},[t._v("确 定")])],1)])],1)],1)],1)},n=[]},b7c2:function(t,e,i){"use strict";var l;i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.vk,a={data:function(){return{centerDialogVisible:!1,outerVisible:!1,innerVisible:!1,dialogVisible1:!1,gridData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],dialogTableVisible:!1,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px",data:{},form1:{}}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l=this,n=l.vk,l.options=t,l.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(t){},pageTo:function(t){n.navigateTo(t)},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))}},filters:{},computed:{}};e.default=a},fce0:function(t,e,i){"use strict";i.r(e);var l=i("b7c2"),n=i.n(l);for(var a in l)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return l[t]}))}(a);e["default"]=n.a}}]);