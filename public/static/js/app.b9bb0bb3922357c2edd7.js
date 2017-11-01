webpackJsonp([12],[,,,,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),a=o(8),r=o(11),i=o(15),u=o(4);o.n(u);n.a.config.productionTip=!1,r.a.beforeEach(function(t,e,o){"/logout"===t.path&&(i.a.dispatch("setDefaultUser"),o("/login")),Object(u.isEmpty)(i.a.state.user)||"/"===t.path&&i.a.state.user.tkn.length>0&&o("/admin"),o()}),new n.a({el:"#app",router:r.a,store:i.a,template:"<App/>",components:{App:a.a}})},,,function(t,e,o){"use strict";var n=o(9),a=o(10),r=o(2),i=r(n.a,a.a,!1,null,null,null);e.a=i.exports},function(t,e,o){"use strict";e.a={name:"Shop-App"}},function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},a=[],r={render:n,staticRenderFns:a};e.a=r},function(t,e,o){"use strict";function n(t){return function(){return o(13)("./"+t+".vue")}}var a=o(0),r=o(12);a.a.use(r.a),e.a=new r.a({routes:[{path:"/login",name:"ShopLogin",component:n("admin/ShopLogin")},{path:"/logout",name:"ShopLogout"},{path:"/admin",name:"ShopAdmin",component:n("admin/ShopAdmin"),children:[{path:"add",name:"ShopAdminAdd",component:n("products/ShopAdd")},{path:":categoria?",name:"ShopAdminList",component:n("products/ShopList")},{path:"edit/:id",name:"ShopAdminEdit",component:n("products/ShopEdit")}]},{path:"/",name:"ShopHome",component:n("ShopHome"),children:[{path:":categoria?",name:"ShopList",component:n("products/ShopList")}]}]})},,function(t,e,o){function n(t){var e=a[t];return e?o.e(e[1]).then(function(){return o(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./ShopFooter.vue":[18,10],"./ShopHeader.vue":[19,5],"./ShopHome.vue":[22,0],"./admin/ShopAdmin.vue":[23,3],"./admin/ShopLogin.vue":[24,1],"./alert/ShopAlert.vue":[20,9],"./products/ShopAdd.vue":[25,8],"./products/ShopCart.vue":[17,7],"./products/ShopEdit.vue":[26,2],"./products/ShopItem.vue":[21,6],"./products/ShopList.vue":[27,4]};n.keys=function(){return Object.keys(a)},n.id=13,t.exports=n},,function(t,e,o){"use strict";var n=o(0),a=o(16);n.a.use(a.a),e.a=new a.a.Store({state:{apiUrl:"http://localhost:3333",cart:[],user:{},products:[{id:1,nome:"Produto X",descricao:"ashdksahdkjsahdkjsahdkjashd",valor:100,categoria:"Categoria A",img:"http://via.placeholder.com/318x180"},{id:2,nome:"Produto Y",descricao:"ashdksahdkjsahdkjsahdkjashd",valor:160,categoria:"Categoria A",img:"http://via.placeholder.com/318x180"},{id:3,nome:"Produto Z",descricao:"ashdksahdkjsahdkjsahdkjashd",valor:190,categoria:"Categoria A",img:"http://via.placeholder.com/318x180"}]},mutations:{SET_USER_TKN:function(t,e){t.user.tkn=e.token,t.user.menu=e.user.menu},SET_USER_DEFAULT:function(t){t.user={tkn:"",menu:[{label:"Cart",link:"/",icon:"fa fa-shopping-cart fa-2x"},{label:"Login",link:"/login",icon:"fa fa-sign-in fa-2x"}]}},SET_PRODUCTS:function(t,e){t.products=e},ADD_ITEM_CART:function(t,e){t.cart.unshift(e)},REMOVE_ITEM_CART:function(t,e){var o=t.cart.indexOf(e);t.cart.splice(o,1)}},getters:{getUrl:function(t){return t.apiUrl},getUser:function(t){return t.user},getProducts:function(t){return t.products},getCart:function(t){return t.cart}},actions:{setDefaultUser:function(t){(0,t.commit)("SET_USER_DEFAULT")}}})}],[5]);
//# sourceMappingURL=app.b9bb0bb3922357c2edd7.js.map