(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31f8af38"],{cf2a:function(t,s,r){"use strict";r.r(s);var a=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"order"},[t._m(0),t.orders.length>0?r("div",{staticClass:"order-content"},[t._l(t.orders,(function(s,a){return r("div",{key:a,staticClass:"content"},[r("ul",[r("li",{staticClass:"order-info"},[r("div",{staticClass:"order-id"},[t._v("订单编号: "+t._s(s[0].order_id))]),r("div",{staticClass:"order-time"},[t._v("订单时间: "+t._s(t._f("dateFormat")(s[0].order_time)))])]),t._m(1,!0),t._l(s,(function(s,a){return r("li",{key:a,staticClass:"product-list"},[r("div",{staticClass:"pro-img"},[r("router-link",{attrs:{to:{path:"/goods/details",query:{productID:s.product_id}}}},[r("img",{attrs:{src:t.$target+s.product_picture}})])],1),r("div",{staticClass:"pro-name"},[r("router-link",{attrs:{to:{path:"/goods/details",query:{productID:s.product_id}}}},[t._v(t._s(s.product_name))])],1),r("div",{staticClass:"pro-price"},[t._v(t._s(s.product_price)+"元")]),r("div",{staticClass:"pro-num"},[t._v(t._s(s.product_num))]),r("div",{staticClass:"pro-total pro-total-in"},[t._v(t._s(s.product_price*s.product_num)+"元")])])}))],2),r("div",{staticClass:"order-bar"},[r("div",{staticClass:"order-bar-left"},[r("span",{staticClass:"order-total"},[t._v(" 共 "),r("span",{staticClass:"order-total-num"},[t._v(t._s(t.total[a].totalNum))]),t._v(" 件商品 ")])]),r("div",{staticClass:"order-bar-right"},[r("span",[r("span",{staticClass:"total-price-title"},[t._v("合计：")]),r("span",{staticClass:"total-price"},[t._v(t._s(t.total[a].totalPrice)+"元")])])])])])})),r("div",{staticStyle:{"margin-top":"-40px"}})],2):r("div",{staticClass:"order-empty"},[t._m(2)])])},e=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"order-header"},[r("div",{staticClass:"order-header-content"},[r("p",[r("i",{staticClass:"el-icon-s-order",staticStyle:{"font-size":"30px",color:"#ff6700"}}),t._v(" 我的订单 ")])])])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("li",{staticClass:"header"},[r("div",{staticClass:"pro-img"}),r("div",{staticClass:"pro-name"},[t._v("商品名称")]),r("div",{staticClass:"pro-price"},[t._v("单价")]),r("div",{staticClass:"pro-num"},[t._v("数量")]),r("div",{staticClass:"pro-total"},[t._v("小计")])])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"empty"},[r("h2",[t._v("您的订单还是空的！")]),r("p",[t._v("快去购物吧！")])])}],i=(r("d3b7"),{data:function(){return{orders:[],total:[]}},activated:function(){var t=this;this.$axios.post("/api/user/order/getOrder",{user_id:this.$store.getters.getUser.user_id}).then((function(s){"001"===s.data.code?t.orders=s.data.orders:t.notifyError(s.data.msg)})).catch((function(t){return Promise.reject(t)}))},watch:{orders:function(t){for(var s=[],r=0;r<t.length;r++){for(var a=t[r],e=0,i=0,o=0;o<a.length;o++){var c=a[o];e+=c.product_num,i+=c.product_price*c.product_num}s.push({totalNum:e,totalPrice:i})}this.total=s}}}),o=i,c=(r("e21e"),r("2877")),d=Object(c["a"])(o,a,e,!1,null,"72ffa740",null);s["default"]=d.exports},d1bc:function(t,s,r){},e21e:function(t,s,r){"use strict";var a=r("d1bc"),e=r.n(a);e.a}}]);
//# sourceMappingURL=chunk-31f8af38.c97f9785.js.map