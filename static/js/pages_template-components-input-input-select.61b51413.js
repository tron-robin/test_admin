(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-components-input-input-select"],{"786f":function(e,t,a){"use strict";a.r(t);var l=a("a770"),n=a.n(l);for(var i in l)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(i);t["default"]=n.a},"809e":function(e,t,a){"use strict";a.r(t);var l=a("b88a"),n=a("786f");for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);var u=a("f0c5"),o=Object(u["a"])(n["default"],l["b"],l["c"],!1,null,"29d8fb9a",null,!1,l["a"],void 0);t["default"]=o.exports},a770:function(e,t,a){"use strict";var l;a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;uni.vk;var n={data:function(){return{data:{},form1:{}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l=this,l.vk,l.options=e,l.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){}},filters:{},computed:{}};t.default=n},b88a:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("vk-data-page-header",{attrs:{title:"Input 表单输入",subTitle:"select 下拉选择"}}),a("v-uni-view",{staticClass:"page-body"},[a("v-uni-view",{staticClass:"mt15"},[a("vk-data-input-select",{staticClass:"width-box",attrs:{localdata:[{value:1,label:"选项1"},{value:2,label:"选项2"}],size:"small",clearable:!0,placeholder:"请选择"},model:{value:e.form1.value1,callback:function(t){e.$set(e.form1,"value1",t)},expression:"form1.value1"}})],1),a("v-uni-view",{staticClass:"mt15"},[a("vk-data-input-select",{staticClass:"width-box",attrs:{group:!0,localdata:[{label:"分组1",children:[{value:1,label:"选项1"},{value:2,label:"选项2"}]},{label:"分组2",children:[{value:3,label:"选项3"},{value:4,label:"选项4"}]}],size:"small",clearable:!0,placeholder:"请选择"},model:{value:e.form1.value2,callback:function(t){e.$set(e.form1,"value2",t)},expression:"form1.value2"}})],1),a("v-uni-view",{staticClass:"mt15 tips"},[e.form1?a("v-uni-view",{staticClass:"mt15 json-view"},[a("pre",[e._v(e._s(e.form1))])]):e._e()],1)],1)],1)},n=[]}}]);