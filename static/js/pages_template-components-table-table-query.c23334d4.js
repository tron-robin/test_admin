(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-components-table-table-query"],{"047b":function(e,t,n){"use strict";n.r(t);var o=n("caf1"),a=n("e006");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("44e3");var r=n("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"0ca34fb6",null,!1,o["a"],void 0);t["default"]=c.exports},"0583":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,"",""]),e.exports=t},"44e3":function(e,t,n){"use strict";var o=n("493d"),a=n.n(o);a.a},"493d":function(e,t,n){var o=n("0583");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("4f06").default;a("0f6b56e0",o,!0,{sourceMap:!1,shadowMode:!1})},a82f:function(e,t,n){"use strict";var o;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("841c");var a=uni.vk,i={},r={data:function(){return{loading:!1,data:{},table1:{action:"template/db_api/sys/getList",columns:[{key:"_id",title:"id",type:"text",width:220},{key:"user_id",title:"用户ID",type:"text",width:80,sortable:"custom"},{key:"money",title:"金额",type:"money",width:80,sortable:"custom"},{key:"remark",title:"备注",type:"text",width:80},{key:"_add_time",title:"添加时间",type:"time",width:160,sortable:"custom"},{key:"_add_time",title:"距离现在",type:"dateDiff",width:120}],multipleSelection:[],selectItem:""},queryForm1:{formData:{},columns:[{key:"user_id",title:"选择用户",type:"remote-select",placeholder:"请输入用户账号/昵称",action:"admin/select/kh/user"},{key:"money_1",type:"money",title:"最小金额",width:160,placeholder:"请输入最小金额",mode:">=",fieldName:"money"},{key:"money_2",type:"money",title:"最大金额",width:160,placeholder:"请输入最大金额",mode:"<=",fieldName:"money"},{key:"remark",title:"备注",type:"text",width:160,mode:"%%"},{key:"_add_time",title:"添加时间",type:"datetimerange",width:400,mode:"[]"}]}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o=this,a=o.vk,o.options=e,o.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){i["form1"]=a.pubfn.copyObject(o.form1)},resetForm:function(){a.pubfn.resetForm(i,o)},search:function(){o.$refs.table1.search()},refresh:function(){o.$refs.table1.refresh()},getCurrentRow:function(){return o.$refs.table1.getCurrentRow()},currentChange:function(e){o.table1.selectItem=e},selectionChange:function(e){o.table1.multipleSelection=e}},watch:{},filters:{},computed:{}};t.default=r},caf1:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page-body"},[n("vk-data-table-query",{attrs:{columns:e.queryForm1.columns,"main-columns":["user_id","_add_time"]},on:{search:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.queryForm1.formData,callback:function(t){e.$set(e.queryForm1,"formData",t)},expression:"queryForm1.formData"}}),n("vk-data-table",{ref:"table1",attrs:{action:e.table1.action,columns:e.table1.columns,"query-form-param":e.queryForm1,"right-btns":["detail_auto"],selection:!0,"row-no":!0,pagination:!0},on:{"current-change":function(t){arguments[0]=t=e.$handleEvent(t),e.currentChange.apply(void 0,arguments)},"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}})],1)},a=[]},e006:function(e,t,n){"use strict";n.r(t);var o=n("a82f"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a}}]);