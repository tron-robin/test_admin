(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-edit"],{"0cfe":function(e,t,i){"use strict";i.r(t);var a=i("2974"),l=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=l.a},2974:function(e,t,i){"use strict";i("7a82");var a=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,o=a(i("d0ff"));i("d9e2"),i("d401"),i("a434"),i("4e82");var s=uni.vk,n={},r={data:function(){var e=this;return{page:{title:"",submitText:"",pickerOptions:s.pubfn.elementUtil.datePickerRangeOptions(),backPage:"/pages/goods/list"},form1:{type:0,is_free_delivery:!0,exp_time_mode:0,goods_detail_mode:0,exp_time_rule:[],exp_time_range:[],spec_list:[],sku_list:[],is_on_bird:!1,is_on_sale:!0,initial_sell_count:0,is_real:!0,is_new:!0,sort:0,cart_rule:{step:1,min:1,max:1e5,step_strictly:!1},limit_buy_rule:{activity_limit_num:0,every_day_limit_num:0,limit_time:[]},integral_rule:{is_calc:!1,is_fixed_calc:!1,proportion_value:"",fixed_value:"",is_level_k:!0}},formData1:{action:"admin/business/sys.goods.addUpdate",columns:[{key:"",title:"商品类型",type:"bar-title"},{key:"type",title:"",type:"radio",showLabel:!1,itemWidth:80,optionType:"button",data:[{value:0,label:"实物商品（需物流）"},{value:1,label:"电子卡券（无需物流）"}],disabled:["update"]},{key:"",title:"基本信息",type:"bar-title"},{key:"name",title:"商品名",type:"text",width:600,maxlength:20,showWordLimit:!0,tips:"一个好的商品名称会增加商品的销量！20字以内"},{key:"category_ids",title:"选择分类",type:"cascader",width:600,action:"admin/business/sys.goodsCategory.kh_getList",props:{list:"rows",value:"_id",label:"name",children:"children",checkStrictly:!0,emitPath:!1,multiple:!0},tips:"准确选择商品分类有助于完善商品信息与数据分析。"},{key:"goods_desc",title:"详细描述",type:"text",width:600,maxlength:60,showWordLimit:!0,tips:"在商品详情页标题下面展示卖点信息，60字以内"},{key:"keywords",title:"商品关键字",type:"text",width:600,maxlength:60,showWordLimit:!0},{key:"",title:"商品配送方式",type:"bar-title",showRule:"type==0"},{key:"is_free_delivery",title:"运费",type:"radio",itemWidth:80,data:[{value:!0,label:"包邮"},{value:!1,label:"不包邮"}],showRule:"type==0"},{key:"freight_id",title:"运费模板",type:"remote-select",placeholder:"请选择运费模板",width:400,action:"admin/business/sys.freight.getList",props:{list:"rows",value:"_id",label:"name"},showAll:!0,showRule:"type==0&&is_free_delivery==false"},{key:"",title:"有效期",type:"bar-title",showRule:"type==1"},{key:"exp_time_mode",title:"",type:"text",showRule:"type==1"},{key:"",title:"图片信息",type:"bar-title"},{key:"goods_thumb",title:"商品缩略图",type:"file-select",placeholder:"请选择图片",fileType:"image",tips:"建议尺寸：800*800像素，限1张",imageFit:"cover"},{key:"goods_banner_imgs",title:"商品轮播图",type:"file-select",placeholder:"请选择图片",fileType:"image",multiple:!0,multipleLimit:9,tips:"建议尺寸：800*800像素，最多上传9张",imageFit:"cover"},{key:"",title:"商品详情介绍",type:"bar-title",showRule:"type==0"},{key:"goods_detail_mode",title:"展示方式",type:"radio",itemWidth:80,data:[{value:0,label:"简易模式（纯图片）"},{value:1,label:"富文本模式（图片+文字）"}]},{key:"goods_detail_imgs",title:"商品详情图",type:"file-select",placeholder:"请选择图片",fileType:"image",imageFit:"contain",multiple:!0,multipleLimit:20,tips:"建议尺寸：800*任意，最多上传20张",showRule:"goods_detail_mode==0"},{key:"goods_detail_body",title:"商品详情图文",type:"editor",width:"750px",showRule:"goods_detail_mode==1"},{key:"goods_tags",title:"商品标签",type:"tag"},{key:"goods_services",title:"商品服务",type:"tag"},{key:"goods_sku",title:"",type:"goods-sku",showLabel:!1,props:{spec_list:"spec_list",sku_list:"sku_list"}},{key:"",title:"商品配置",type:"bar-title"},{key:"is_on_sale",title:"是否上架",type:"switch"},{key:"is_new",title:"是否新品",type:"switch"},{key:"is_best",title:"是否精品",type:"switch"},{key:"is_hot",title:"是否热销",type:"switch"},{key:"disable_vip",title:"禁用会员价",type:"switch",tips:"禁用后，该商品不能使用会员价进行优惠！"},{key:"disable_coupon",title:"禁用优惠券",type:"switch",tips:"禁用后，该商品不能使用优惠券进行优惠！"},{key:"",title:"购物车规则",type:"bar-title"},{key:"cart_rule",title:"",type:"object",width:600,showLabel:!1,columns:[{key:"step",title:"购物车步长",type:"number",controls:!0,width:180,tips:"每按一次+后，增加的数量X"},{key:"min",title:"最少起购量",type:"number",controls:!0,width:180,tips:"用户购买时，每单最低需购买的数量"},{key:"max",title:"每单最多购",type:"number",controls:!0,width:180,tips:"用户购买时，每单最多可购买的数量"},{key:"step_strictly",title:"必须是步长的倍数",type:"switch",labelWidth:140,tips:"如需要用户下单必须是X的倍数（如必须是3的倍数，3，6，9，...），则开启此项"}]},{key:"",title:"商品限购规则",type:"bar-title"},{key:"limit_buy_rule",title:"",type:"object",width:600,showLabel:!1,columns:[{key:"every_day_limit_num",title:"常规每日限购",type:"number",controls:!0,width:180,tips:"0代表不限购"},{key:"activity_limit_num",title:"活动内总限购",type:"number",controls:!0,width:180,tips:"0代表不限购"},{key:"limit_time",title:"限购时间区间",type:"date",dateType:"datetimerange",width:400,tips:"表示用于计算总限购活动的时间区间，注意：若当前时间不在此区间则用户无法购买。若不设置，则视为时间区间为永久生效"}]},{key:"",title:"积分规则",type:"bar-title"},{key:"integral_rule",title:"",type:"object",width:180,showLabel:!1,columns:[{key:"is_calc",title:"是否赠送积分",type:"switch",activeValue:!0,inactiveValue:!1,tips:"积分在付款后就会获得，若商品发生退款，积分会扣除，若积分不够扣除，则用户无法申请退款（商家主动退款依然可以，此时积分会清0）"},{key:"is_fixed_calc",title:"积分计算方式",type:"radio",itemWidth:80,data:[{value:!1,label:"百分比"},{value:!0,label:"固定值"}],showRule:function(e){return s.pubfn.getData(e,"integral_rule.is_calc",!1)}},{key:"proportion_value",title:"百分比",type:"percentage",width:180,tips:"购买后按付款金额*百分比计算积分",showRule:function(e){return s.pubfn.getData(e,"integral_rule.is_calc",!1)&&0==s.pubfn.getData(e,"integral_rule.is_fixed_calc")}},{key:"fixed_value",title:"固定值",type:"number",width:180,tips:"购买后赠送多少积分",showRule:function(e){return s.pubfn.getData(e,"integral_rule.is_calc",!1)&&1==s.pubfn.getData(e,"integral_rule.is_fixed_calc")}},{key:"is_level_k",title:"受VIP影响",type:"switch",activeValue:!0,inactiveValue:!1,tips:"开启后，会乘以VIP等级中的积分倍率",showRule:function(e){return s.pubfn.getData(e,"integral_rule.is_calc",!1)}}]},{key:"",title:"其他信息",type:"bar-title"},{key:"initial_sell_count",title:"初始销量",type:"number",width:150},{key:"seller_note",title:"商家备注",type:"textarea",width:600,autosize:{minRows:4,maxRows:10},maxlength:200,showWordLimit:!0,tips:"此备注仅商家可见"},{key:"sort",title:"排序值",type:"number",width:600,tips:"值越大，商品显示越在前面。"}],rules:{name:[{required:!0,message:"商品名称为必填字段",trigger:"blur"},{min:2,max:20,message:"商品名长度为2-20个字符",trigger:"blur"}],sku_list:[{required:!0,message:"商品规格为必填字段",trigger:"blur"}],is_on_sale:[{required:!0,message:"是否上架为必填字段",trigger:["blur","change"]}],goods_thumb:[{required:!0,message:"请上传商品缩略图",trigger:["blur","change"]}],goods_banner_imgs:[{required:!0,message:"请上传商品banner图",trigger:["blur","change"]}],freight_id:[{required:!0,message:"请选择运费模板",trigger:"blur"}],exp_time_range:[{validator:function(t,i,a){var l=e.form1;1===l.type&&1===l.exp_time_mode&&s.pubfn.isNull(i)?a(new Error("请选择时间范围")):a()},trigger:["blur","change"]}],exp_time_rule:[{validator:function(t,i,a){var l=e.form1;1===l.type&&2===l.exp_time_mode&&s.pubfn.isNull(i)?a(new Error("请输入有效期")):a()},trigger:["blur","change"]}]},formType:"",show:!1,loading:!1,beforeAction:function(){for(var e=(0,o.default)(l.form1.sku_list),t=0;t<e.length;t++){var i=e[t];(i.disabled||s.pubfn.isNullAll(i.price,i.stock,i.weight))&&(e.splice(t,1),t--)}return{sku_list:e}}}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l=this,s=l.vk,l.options=e,l.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){n["form1"]=s.pubfn.copyObject(l.form1),l.formData1.formType=e.mode,l.form1.mode=e.mode,"update"===e.mode?(l.page.title="商品编辑",l.page.submitText="修改",s.callFunction({url:"admin/business/sys.goods.pub_findGoodsInfo",title:"请求中...",data:{_id:e._id},success:function(e){var t=s.pubfn.copyObject(l.form1);l.form1=s.pubfn.objectAssign(t,e.info)}})):(l.page.title="商品添加",l.page.submitText="添加",l.form1.spec_list=[{name:"默认",list:[{name:"默认"}]}],e._id?s.callFunction({url:"admin/business/sys.goods.pub_findGoodsInfo",title:"请求中...",data:{_id:e._id},success:function(e){var t=s.pubfn.copyObject(l.form1),i=e.info;delete i._id,delete i._add_time,delete i._add_time_str,delete i.on_sale_time,delete i.update_time,delete i.delete_time,delete i.seller_note,i.initial_sell_count=0,i.total_sell_count=0,i.real_sell_count=0,i.comment_count=0,i.view_count=0,i.name=i.name+"-copy",l.form1=s.pubfn.objectAssign(t,i),l.getSortMax()}}):l.getSortMax())},getSortMax:function(){s.callFunction({url:"admin/business/sys.goods.getMaxSort",data:{},success:function(e){l.form1.sort=e.sort+1}})},pageTo:function(e){s.navigateTo(e)},pageBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("update"==e.formType){var t=this.getOpenerEventChannel();t.emit&&t.emit("update",e.data.info)}else if("add"==e.formType){var i=this.getOpenerEventChannel();i.emit&&i.emit("add")}var a=getCurrentPages();a.length>1&&a[0].route!==l.$page.route?s.navigateBack():l.page.backPage&&s.navigateTo(l.page.backPage),setTimeout((function(){s.menuTabs.closeTabs("/pages/goods/edit")}),600)},resetForm:function(){s.pubfn.resetForm(n,l)},submitForm:function(){l.form1.mode=l.options.mode,"copy"==l.options.mode&&(l.form1.mode="add"),l.$refs.form1.submitForm()},formSuccess:function(e){"add"==l.formData1.formType?l.$alert("商品添加成功","提示",{confirmButtonText:"好的",callback:function(t){l.pageBack(e)}}):l.$alert("商品修改成功","提示",{confirmButtonText:"好的",callback:function(t){l.pageBack(e)}})}},watch:{},computed:{}};t.default=r},"42cd":function(e,t,i){"use strict";i.r(t);var a=i("dc44"),l=i("0cfe");for(var o in l)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return l[e]}))}(o);i("5e7e");var s=i("f0c5"),n=Object(s["a"])(l["default"],a["b"],a["c"],!1,null,"5e01beb5",null,!1,a["a"],void 0);t["default"]=n.exports},"5e7e":function(e,t,i){"use strict";var a=i("f35c"),l=i.n(a);l.a},dc44:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("vk-data-page-header",{attrs:{title:e.page.title,"show-back":!0},on:{back:function(t){arguments[0]=t=e.$handleEvent(t),e.pageBack()}}}),i("v-uni-view",{staticClass:"page-body"},[i("vk-data-form",{ref:"form1",attrs:{rules:e.formData1.rules,action:e.formData1.action,"form-type":e.formData1.formType,columns:e.formData1.columns,"label-width":"100px","footer-show":!1,loading:e.formData1.loading,"before-action":e.formData1.beforeAction},on:{"update:loading":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.formData1,"loading",t)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.formSuccess.apply(void 0,arguments)}},scopedSlots:e._u([{key:"exp_time_mode",fn:function(t){var a=t.form,l=t.keyName;return[i("v-uni-view",{},[i("v-uni-view",[i("el-form-item",{attrs:{prop:"exp_time_mode","inline-message":!0}},[i("el-radio",{attrs:{label:0},model:{value:a[l],callback:function(t){e.$set(a,l,t)},expression:"form[keyName]"}},[i("v-uni-text",[e._v("长期有效")]),i("v-uni-text",{staticStyle:{"margin-left":"20px",color:"#909399","font-size":"12px"}},[e._v("更改有效期仅对新付款订单有效")])],1)],1)],1),i("v-uni-view",{staticStyle:{"margin-top":"10px"}},[i("el-form-item",{attrs:{prop:"exp_time_range","inline-message":!0}},[i("el-radio",{attrs:{label:1},model:{value:a[l],callback:function(t){e.$set(a,l,t)},expression:"form[keyName]"}},[i("v-uni-text",[e._v("固定时间")]),i("vk-data-input-date-time",{staticStyle:{"margin-left":"20px"},attrs:{type:"datetimerange",size:"small"},model:{value:a.exp_time_range,callback:function(t){e.$set(a,"exp_time_range",t)},expression:"form.exp_time_range"}})],1)],1)],1),i("v-uni-view",{staticStyle:{"margin-top":"10px"}},[i("el-form-item",{attrs:{prop:"exp_time_rule","inline-message":!0}},[i("el-radio",{attrs:{label:2},model:{value:a[l],callback:function(t){e.$set(a,l,t)},expression:"form[keyName]"}},[i("v-uni-text",[e._v("购买后")]),i("vk-data-input-number",{staticStyle:{"margin-left":"32px"},attrs:{precision:0,width:"120px",size:"small",placeholder:"多少"},model:{value:a.exp_time_rule[0],callback:function(t){e.$set(a.exp_time_rule,0,t)},expression:"form.exp_time_rule[0]"}}),i("v-uni-text",{staticStyle:{"margin-left":"5px"}},[e._v("天后生效，有效期")]),i("vk-data-input-number",{staticStyle:{"margin-left":"5px"},attrs:{precision:0,width:"120px",size:"small",placeholder:"多少"},model:{value:a.exp_time_rule[1],callback:function(t){e.$set(a.exp_time_rule,1,t)},expression:"form.exp_time_rule[1]"}}),i("v-uni-text",{staticStyle:{"margin-left":"5px"}},[e._v("天")])],1)],1)],1)],1)]}}]),model:{value:e.form1,callback:function(t){e.form1=t},expression:"form1"}})],1),i("v-uni-view",{staticClass:"page-footer"},[i("el-button",{staticClass:"footer-back-btn",attrs:{plain:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pageBack()}}},[e._v("返回")]),i("el-button",{staticClass:"footer-update-btn",staticStyle:{"margin-left":"50px"},attrs:{loading:e.formData1.loading,type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitForm.apply(void 0,arguments)}}},[e._v(e._s(e.page.submitText))])],1)],1)},l=[]},e9ee:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";.padding-10[data-v-5e01beb5]{padding:10px}.marginLeft-10[data-v-5e01beb5]{margin-left:10px}.footer-update-btn[data-v-5e01beb5]{width:80px}.footer-back-btn[data-v-5e01beb5]{margin-left:20px;width:80px}\n/* 上传组件开始 */[data-v-5e01beb5] .sku-image .vk-data-upload .el-upload-dragger{height:60px}[data-v-5e01beb5] .sku-image .vk-data-upload .el-upload--picture-card{width:60px;height:60px}[data-v-5e01beb5] .sku-image .vk-data-upload .el-upload{width:60px;height:60px;line-height:60px}[data-v-5e01beb5] .sku-image .vk-data-upload .el-upload-list--picture-card .el-upload-list__item{width:60px;height:60px;line-height:60px}[data-v-5e01beb5] .sku-image .vk-data-upload .el-upload-list--picture-card .el-upload-list__item-thumbnail{width:60px;height:60px;line-height:60px}[data-v-5e01beb5] .sku-image .vk-data-upload .avatar{width:60px;height:60px}[data-v-5e01beb5] .sku-image .el-upload--picture-card i{font-size:14px;color:#8c939d}.hoverStyle[data-v-5e01beb5]:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}',""]),e.exports=t},f35c:function(e,t,i){var a=i("e9ee");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var l=i("4f06").default;l("ae59e442",a,!0,{sourceMap:!1,shadowMode:!1})}}]);