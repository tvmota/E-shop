webpackJsonp([9],{20:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(65),r=s(66),n=s(2),a=n(i.a,r.a,!1,null,null,null);t.default=a.exports},65:function(e,t,s){"use strict";t.a={name:"Shop-Alert",props:{msg:{type:String,required:!1},msgClass:{type:String,required:!0},visibility:{type:Boolean,required:!0}},methods:{close:function(){this.$emit("update:visibility",!1)}}}},66:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility,expression:"visibility"}],class:e.msgClass},[s("p",[e._v(e._s(e.msg))]),e._v(" "),s("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.close}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},r=[],n={render:i,staticRenderFns:r};t.a=n}});
//# sourceMappingURL=9.d6223611a852796d11ca.js.map