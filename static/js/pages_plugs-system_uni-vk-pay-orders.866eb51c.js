(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_plugs-system_uni-vk-pay-orders"],{"0746":function(e,t,a){"use strict";a.r(t);var n=a("972c"),i=a.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(l);t["default"]=i.a},6019:function(e,t,a){"use strict";a.r(t);var n=a("c7a8"),i=a("0746");for(var l in i)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(l);var o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"7f801681",null,!1,n["a"],void 0);t["default"]=u.exports},"972c":function(e,t,a){"use strict";var n;a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=uni.vk,l={},o=[{label:"微信 - 小程序",value:"wxpay_mp-weixin",tagType:"success"},{label:"微信 - APP",value:"wxpay_app-plus",tagType:"success"},{label:"微信 - H5",value:"wxpay_h5",tagType:"success"},{label:"微信 - MWEB",value:"wxpay_mweb",tagType:"success"},{label:"微信 - 公众号",value:"wxpay_h5-weixin",tagType:"success"},{label:"支付宝 - 小程序",value:"alipay_mp-alipay",tagType:"primary"},{label:"支付宝 - APP",value:"alipay_app-plus",tagType:"primary"},{label:"支付宝 - H5",value:"alipay_h5",tagType:"primary"}],u=[{label:"商品订单",value:"goods"},{label:"充值订单",value:"recharge"},{label:"VIP购买订单",value:"vip"},{label:"其他订单",value:"other"}],r=[{label:"已关闭",value:-1,tagType:"info"},{label:"未支付",value:0,tagType:"info"},{label:"已支付",value:1,tagType:"success"},{label:"已部分退款",value:2,tagType:"warning"},{label:"已全额退款",value:3,tagType:"danger"}],s={data:function(){return{loading:!1,data:{},table1:{action:"admin/system_uni/pay-orders/sys/getList",columns:[{key:"button1",title:"回调通知状态",type:"text",width:120,fixed:"right"},{key:"out_trade_no",title:"商户订单号",type:"text",width:200},{key:"type",title:"订单类型",type:"select",width:100,data:u},{key:"pay_type",title:"支付类型",type:"tag",width:160,data:o},{key:"status",title:"订单状态",type:"tag",width:110,data:r},{key:"create_date",title:"创建时间",type:"time",width:140},{key:"pay_date",title:"支付时间",type:"time",width:140},{key:"total_fee",title:"总金额",type:"money",width:110},{key:"refund_fee",title:"总退款金额",type:"money",width:110,defaultValue:"-"},{key:"refund_num",title:"退款次数",type:"number",width:80,defaultValue:"-"},{key:"transaction_id",title:"支付平台订单号",type:"text",width:220,defaultValue:"-"},{key:"openid",title:"用户openid",type:"text",width:280,show:["detail"]},{key:"refund_list",title:"退款详情",type:"table",width:360,show:["detail"],columns:[{key:"out_refund_no",title:"退款单号",type:"text",minWidth:200},{key:"refund_date",title:"退款时间",type:"time",width:180},{key:"refund_fee",title:"退款金额",type:"money",width:140},{key:"refund_desc",title:"退款备注",type:"text",minWidth:180}]},{key:"original_data",title:"原始数据",type:"json",width:300,show:["detail"]}],multipleSelection:[],selectItem:""},queryForm1:{formData:{},columns:[{key:"out_trade_no",title:"商户订单号",type:"text",width:150,mode:"%%"},{key:"transaction_id",title:"支付平台订单号",type:"text",width:150,mode:"%%"},{key:"type",title:"订单类型",type:"select",width:150,mode:"=",data:u},{key:"status",title:"订单状态",type:"select",width:150,mode:"=",data:r},{key:"_add_time",title:"添加时间",type:"datetimerange",width:340,mode:"[]"},{key:"pay_type",title:"支付类型",type:"select",mode:"=",data:o},{key:"total_fee_min",title:"金额范围",type:"money",mode:">=",fieldName:"total_fee"},{key:"total_fee_max",title:"-",type:"money",mode:"<=",fieldName:"total_fee"}]}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n=this,i=n.vk,n.options=e,n.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){l["form1"]=i.pubfn.copyObject(n.form1)},pageTo:function(e){i.navigateTo(e)},resetForm:function(){i.pubfn.resetForm(l,n)},search:function(e){n.$refs.table1.query(e)},refresh:function(){n.$refs.table1.refresh()},getCurrentRow:function(){return n.$refs.table1.getCurrentRow()},currentChange:function(e){n.table1.selectItem=e},selectionChange:function(e){n.table1.multipleSelection=e},afreshNotice:function(e){i.callFunction({url:"admin/system_uni/pay-orders/sys/afreshNotice",title:"请求中...",data:{_id:e._id},success:function(e){n.refresh()}})}},watch:{},computed:{}};t.default=s},c7a8:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page-body"},[a("vk-data-table-query",{attrs:{columns:e.queryForm1.columns,"main-columns":["out_trade_no","transaction_id","type","status","_add_time"]},on:{search:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.queryForm1.formData,callback:function(t){e.$set(e.queryForm1,"formData",t)},expression:"queryForm1.formData"}}),a("vk-data-table",{ref:"table1",attrs:{action:e.table1.action,columns:e.table1.columns,"query-form-param":e.queryForm1,"right-btns":["detail_auto"],"row-no":!1,pagination:!0},on:{"current-change":function(t){arguments[0]=t=e.$handleEvent(t),e.currentChange.apply(void 0,arguments)},"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}},scopedSlots:e._u([{key:"button1",fn:function(t){var n=t.row;return[n.status<=0?a("v-uni-view",[e._v("-")]):n.user_order_success?a("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v("成功")]):1===n.status?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.afreshNotice(n)}}},[e._v("重新推送")]):n.refund_fee>0?a("v-uni-view",[e._v("失败，但已退款")]):a("v-uni-view",[e._v("未知")])]}}])})],1)},i=[]}}]);