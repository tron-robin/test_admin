(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-components-form-form-inline"],{"0f2b":function(e,t,n){"use strict";n.r(t);var o=n("986b"),a=n("52d4");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var l=n("f0c5"),r=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"2a1aa3c2",null,!1,o["a"],void 0);t["default"]=r.exports},"52d4":function(e,t,n){"use strict";n.r(t);var o=n("75cf"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},"75cf":function(e,t,n){"use strict";var o;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=uni.vk,i={data:function(){return{form1:{data:{radio:1,checkbox:[1,2]},props:{action:"template/test/sys/test",columns:[{key:"text",title:"text类型字段",type:"text"},{key:"user_id",title:"用户选择器",type:"remote-select",placeholder:"请输入用户账号",action:"admin/select/kh/user"},{key:"money",title:"money类型字段",type:"money"},{key:"select",title:"select类型字段",type:"select",data:[{value:1,label:"选项1"},{value:2,label:"选项2"}]},{key:"number",title:"number类型字段",type:"number"},{key:"switch",title:"switch类型字段",type:"switch"},{key:"radio",title:"radio类型字段",type:"radio",data:[{value:1,label:"选项1"},{value:2,label:"选项2"}]},{key:"checkbox",title:"checkbox类型字段",type:"checkbox",data:[{value:1,label:"选项1"},{value:2,label:"选项2"}]},{key:"textarea",title:"textarea类型字段",type:"textarea",autosize:{minRows:6,maxRows:10},maxlength:200,showWordLimit:!0,width:820}],rules:{},formType:"",show:!1,loading:!1}}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o=this,a=o.vk,o.options=e,o.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){},onCancel:function(){console.log("关闭"),a.menuTabs.closeCurrent()},onFormSuccess:function(){console.log("表单提交成功")}},filters:{},computed:{}};t.default=i},"986b":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("vk-data-page-header",{attrs:{title:"Form 表单",subTitle:"行内表单"}}),n("v-uni-view",{staticClass:"page-body",staticStyle:{"max-width":"1200px",margin:"0 auto"}},[n("vk-data-form",{attrs:{rules:e.form1.props.rules,action:e.form1.props.action,"form-type":e.form1.props.formType,columns:e.form1.props.columns,loading:e.form1.props.loading,"label-width":"140px",inline:!0,columnsNumber:2},on:{"update:loading":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form1.props,"loading",t)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel.apply(void 0,arguments)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.onFormSuccess.apply(void 0,arguments)}},model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1),n("v-uni-view",{staticClass:"tips mt15"},[e.form1.data?n("v-uni-view",{staticClass:"mt15 json-view"},[n("v-uni-view",{staticStyle:{"font-size":"14px"}},[e._v("表单数据")]),n("pre",[e._v(e._s(e.form1.data))])],1):e._e()],1)],1)},a=[]}}]);