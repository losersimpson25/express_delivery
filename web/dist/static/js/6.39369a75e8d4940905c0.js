webpackJsonp([6],{"+sq6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("YlI6"),o=r("mtWM"),n=r.n(o),i={data:function(){return{CompOrder:[],listType:{noCompBtn:!1},titleList:[{id:1,columnTitle:"完成时间",prop:"completedData",sortable:!0},{id:2,columnTitle:"订单价格(元)",prop:"Price",sortable:!0},{id:3,columnTitle:"订单状态",prop:"orderState",sortable:!1}]}},components:{userOrderList:s.a},mounted:function(){this.getHistoryOrder()},methods:{getHistoryOrder:function(){var e=this,t=this.$loading({lock:!0,text:"正在加载..."});n.a.get("/users/historyOrder").then(function(r){var s=r.data;t.close(),"0"==s.status?e.CompOrder=s.result:console.log(s.msg)}).catch(function(e){console.log(e)})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){n.a.get("/users/deleteHistoryOrder?orderId="+e.orderId).then(function(e){var r=e.data;"0"==r.status?(t.$message({type:"success",message:"删除成功!"}),t.getHistoryOrder()):t.$message({type:"error",message:r.msg})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"historyOrder"},[t("person-title",[this._v("当前位置 :: 我的订单 >> "),t("em",[this._v("历史订单")])]),this._v(" "),t("div",{staticClass:"hidtoryOrder-cont"},[t("userOrderList",{attrs:{userOrder:this.CompOrder,listType:this.listType,titleList:this.titleList},on:{DeleteOrder:this.handleDelete}})],1)],1)},staticRenderFns:[]};var a=r("VU/8")(i,l,!1,function(e){r("BRyq")},null,null);t.default=a.exports},BRyq:function(e,t){},YlI6:function(e,t,r){"use strict";var s=r("6T4k"),o={props:{userOrder:Array,listType:{noCompBtn:Boolean},titleList:{id:Number,columnTitle:String,prop:String,sortable:Boolean}},data:function(){return{isnoCompBtn:this.listType.noCompBtn,tabletitleList:this.titleList,search:""}},computed:{theUserOrder:function(){var e=this;return this.userOrder.filter(function(t){return!e.search||t.goodsCode.toString().includes(e.search)||t.goodsTpye.toString().includes(e.search)||t.company.toString().includes(e.search)||t.orderId.toString().includes(e.search)})}},methods:{handleGotoNewOrde:function(){s.a.$emit("goNewOrder","newOrder"),this.$router.push({path:"newOrder"})}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-table",{staticClass:"userOrderList",staticStyle:{width:"100%"},attrs:{data:e.theUserOrder,"default-sort":{prop:"createTime",order:"descending"}}},[r("div",{staticClass:"emptyTip",attrs:{slot:"empty"},slot:"empty"},[e._v("\n        暂时没有订单 , 赶紧去\n        "),r("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.handleGotoNewOrde(t)}}},[e._v(" 发布订单 ")]),e._v("吧\n    ")]),e._v(" "),r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form",{staticClass:"userTable demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"订单号 :"}},[r("span",[e._v(e._s(t.row.orderId))])]),e._v(" "),r("el-form-item",{attrs:{label:"发布时间 :"}},[r("span",[e._v(e._s(t.row.createTime))])]),e._v(" "),t.row.completedData?r("el-form-item",{attrs:{label:"完成时间 :"}},[r("span",[e._v(e._s(t.row.completedData))])]):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"快递类型 :"}},[r("span",[e._v(e._s(t.row.goodsTpye))])]),e._v(" "),r("el-form-item",{attrs:{label:"快递大小 :"}},[r("span",[e._v(e._s(t.row.goodsSize))])]),e._v(" "),r("el-form-item",{attrs:{label:"订单价格 :"}},[r("span",[e._v(e._s(e._f("priceInit")(t.row.Price))+" 元")])]),e._v(" "),r("el-form-item",{attrs:{label:"快递数量 :"}},[r("span",[e._v(e._s(t.row.goodsNumber)+" 个")])]),e._v(" "),r("el-form-item",{attrs:{label:"快递公司 :"}},e._l(t.row.company,function(t){return r("span",{key:t},[e._v(e._s(t))])})),e._v(" "),r("el-form-item",{attrs:{label:"取货码 :"}},e._l(t.row.goodsCode,function(t){return r("span",{key:t},[e._v(e._s(t))])})),e._v(" "),"未接单"!=t.row.orderState?[r("el-form-item",{attrs:{label:"接单人员 :"}},[r("span",[e._v(e._s(t.row.courierPeople))])]),e._v(" "),r("el-form-item",{attrs:{label:"接单人电话 :"}},[r("span",[e._v(e._s(t.row.courierPhone))])]),e._v(" "),r("el-form-item",{attrs:{label:"接单时间 :"}},[r("span",[e._v(e._s(t.row.receivedDate))])])]:e._e(),e._v(" "),r("el-form-item",{attrs:{label:"备注 :"}},[r("span",[e._v(e._s(t.row.remarks))])])],2)]}}])}),e._v(" "),e._l(e.tabletitleList,function(e){return r("el-table-column",{key:e.id,attrs:{sortable:e.sortable,label:e.columnTitle,prop:e.prop}})}),e._v(" "),r("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[r("el-input",{attrs:{size:"mini",placeholder:"关键词:取货码 |订单号 |类型 |快递公司"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return[e.isnoCompBtn?[r("el-button",{key:"Cancel",staticClass:"btn-cancel",attrs:{size:"mini",type:"danger"},on:{click:function(r){e.$emit("CancelOrder",t.row)}}},[e._v("取消订单")]),e._v(" "),r("el-button",{key:"Success",staticClass:"btn-success",attrs:{size:"mini"},on:{click:function(r){e.$emit("completedOrder",t.row)}}},[e._v("确认送达")])]:[r("el-button",{key:"Delete",attrs:{size:"mini",type:"danger"},on:{click:function(r){e.$emit("DeleteOrder",t.row)}}},[e._v("删除订单")])]]}}])})],2)},staticRenderFns:[]};var i=r("VU/8")(o,n,!1,function(e){r("lFh1")},null,null);t.a=i.exports},lFh1:function(e,t){}});