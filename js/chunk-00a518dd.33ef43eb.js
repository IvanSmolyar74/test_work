(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00a518dd"],{"4a23":function(t,e,n){"use strict";var s=n("d4c7"),o=n.n(s);o.a},d4c7:function(t,e,n){},ee9c:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drop-down"},[n("b-form-select",{staticClass:"mt-3",attrs:{options:t.options,size:"sm"},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an Symbol --")])]},proxy:!0}]),model:{value:t.currentSymbol,callback:function(e){t.currentSymbol=e},expression:"currentSymbol"}}),n("ul",{staticClass:"drop-down__list list"},[n("li",{staticClass:"list__content"},[t._v(t._s(t.currentSymbol))])])],1)},o=[],l={name:"DropDown",data:function(){return{currentSymbol:"BTCUSDT",options:[{value:"BTCUSDT",text:"BTCUSDT"},{value:"BNBBTC",text:"BNBBTC"},{value:"ETHBTC",text:"ETHBTC"}]}},watch:{currentSymbol:function(t){this.$bus.$emit("symbol",t)}}},c=l,a=(n("4a23"),n("2877")),r=Object(a["a"])(c,s,o,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-00a518dd.33ef43eb.js.map