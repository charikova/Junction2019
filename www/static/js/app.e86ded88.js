(function(t){function e(e){for(var a,o,c=e[0],i=e[1],l=e[2],f=0,d=[];f<c.length;f++)o=c[f],s[o]&&d.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==s[i]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"15a9":function(t,e,n){"use strict";var a=n("e637"),s=n.n(a);s.a},"1bac":function(t,e,n){"use strict";var a=n("a611"),s=n.n(a);s.a},"1d19":function(t,e,n){},4184:function(t,e,n){},4656:function(t,e,n){},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"68875","./br.js":"68875","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("e956"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("0298"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("06db"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("23be"),n("7c0e"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),s=n("d42c"),r=n("6baf"),o=(n("37d5"),n("d56f")),c=n("2f62"),i=n("bc3a"),l=n.n(i),u="http://".concat("healthierlives.tk",":").concat("80","/api/"),f=function(){return{user:{},activeMenu:"Your statistics",login:!0,openedPanel:!1,statistics:[],products:[]}},d=f(),b={headers:{"Content-Type":"application/json"}},p={},m={login:function(t,e){t.getters;var n=t.commit;return l.a.post("".concat(u,"login"),e,b).then(function(t){var e=t.data;return n("setUser",e),!0}).catch(function(t){throw t})},getStatistics:function(t){t.getters;var e=t.commit,n=t.state,a={headers:{"Content-Type":"application/json",Authorization:n.user.token}};return l.a.get("".concat(u,"statistics"),a).then(function(t){var n=t.data;return e("setStatistics",n),!0}).catch(function(t){throw t})},getProducts:function(t,e){t.getters;var n=t.commit,a=t.state,s={headers:{"Content-Type":"application/json",Authorization:a.user.token}};return l.a.post("".concat(u,"products"),e,s).then(function(t){var e=t.data;return n("setProducts",e),!0}).catch(function(t){throw t})}},g={setUser:function(t,e){t.user=e,localStorage.setItem("token",t.user.token)},openPanel:function(t,e){t.openedPanel=e},logout:function(t){t.user={},t.login=!0,localStorage.setItem("token","")},setMenuName:function(t,e){t.activeMenu=e},setStatistics:function(t,e){t.statistics=e},setProducts:function(t,e){t.products=e,console.log(t.products)}},h={state:d,getters:p,actions:m,mutations:g},j=("http://".concat("healthierlives.tk",":").concat("80","/api/"),function(){return{}}),v=j(),y={},O={},k={},_={state:v,getters:y,actions:O,mutations:k};function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){C(t,e,n[e])})}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a["a"].use(c["a"]);var P,S,$=function(){return w({},h.state,_.state)},x=$(),M=w({},h.getters,_.getters),E=w({},h.actions,_.actions),z=w({},_.mutations,h.mutations),L=new c["a"].Store({getters:M,actions:E,mutations:z,state:x}),I=(n("82c1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-app",{attrs:{id:"app",params:t.f7params}},[t.login?t._e():n("main-page"),t.login?n("login"):t._e(),n("left-menu")],1)}),D=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticStyle:{background:"white"}},[t.loaded?t._e():n("div",{staticStyle:{width:"100%",height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[n("f7-preloader",{attrs:{size:42}})],1),t.loaded?n("div",{staticClass:"stats"},[n("div",{staticClass:"stats-section"},[n("f7-swiper",{ref:"swiperRef",attrs:{navigation:"",params:{initialSlide:2,on:{slideChange:t.slideChange}}}},t._l(t.months,function(t,e){return n("f7-swiper-slide",{key:e+"-key"},[n("div",{staticClass:"stats-section-chart"},[n("CircleDiagram",{attrs:{proteins:t.proteins,carbohydrates:t.carbohydrates,fats:t.fats,month:t.month}})],1)])}),1)],1),n("div",{staticClass:"stats-section"},[n("div",{staticClass:"stats-row",on:{click:t.sugarClick}},[n("div",{staticClass:"stats-label"},[t._v("Sugar")]),n("div",{staticClass:"stats-number",staticStyle:{"border-color":"#ff6e7d"}},[t._v("\n          "+t._s(Math.round(t.monthData.sugar))+"\n        ")])]),n("div",{staticClass:"stats-row"},[n("progress-bar",{attrs:{percents:Math.round(t.monthData.fats_saturated/t.monthData.fats*100),name:"Saturated fats"}}),n("div",{staticClass:"stats-number",staticStyle:{"border-color":"#ff6e7d"}},[t._v("\n          "+t._s(Math.round(t.monthData.fats_saturated))+"\n        ")])],1)]),n("div",{staticClass:"stats-section"},[n("div",{staticClass:"stats-section-title"},[t._v("Food additives")]),t._l(t.monthData.top,function(e){return n("div",{staticClass:"stats-row"},[n("div",{on:{click:function(n){return t.openListE(e)}}},[n("span",{staticClass:"stats-label",style:"background-color: "+e.color},[t._v(t._s(e.e))]),n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.name))])]),n("div",{staticClass:"stats-number",style:"border-color: "+e.color},[t._v("\n          "+t._s(e.count)+"\n        ")])])})],2)]):t._e()])},A=[],N=n("1fca"),R={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(54, 162, 235)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},Y={extends:N["a"],props:["proteins","carbohydrates","fats","month"],mounted:function(){var t={datasets:[{data:[Math.round(this.proteins),Math.round(this.fats),Math.round(this.carbohydrates)],backgroundColor:[R.green,R.yellow,R.red],label:"Dataset 1"}],labels:["Proteins","Fats","Carbohydrates"]};this.renderChart(t,this.chartoptions)},data:function(){return{chartoptions:{responsive:!0,legend:{position:"bottom"},title:{display:!0,text:this.month},animation:{animateScale:!0,animateRotate:!0}}}}},H=Y,U=n("2877"),F=Object(U["a"])(H,P,S,!1,null,null,null),q=F.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"barRef",staticClass:"stats-progress"},[n("div",{staticClass:"stats-progress-bar",style:"width: "+t.percentsReal+"%; background: "+t.color}),n("div",{staticClass:"stats-progress-text"},[t._v("\n    "+t._s(t.name)+"\n  ")])])},G=[],J={name:"progressBar",props:["percents","name"],computed:{color:function(){return"#ff6e7d"}},data:function(){return{percentsReal:0}},mounted:function(){var t=this;setTimeout(function(){t.percentsReal=t.percents},1)},watch:{percents:function(){var t=this;setTimeout(function(){t.percentsReal=t.percents},1)}}},K=J,Q=(n("7bcf"),Object(U["a"])(K,B,G,!1,null,"556b11ca",null)),V=Q.exports;function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){X(t,e,n[e])})}return t}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Z={name:"profile",components:{ProgressBar:V,CircleDiagram:q},methods:{sugarClick:function(){this.$f7router.navigate("/purchases/sugar")},slideChange:function(){var t=this.$refs.swiperRef.swiper;t&&(this.currentMonth=this.monthNames[t.activeIndex])},openListE:function(t){var e=this;this.$store.dispatch("getProducts",{name:t.e,month:this.currentMonth}).then(function(){e.$f7router.navigate("listE",{reloadAll:!0})})}},mounted:function(){var t=this;this.$store.dispatch("getStatistics").then(function(){t.loaded=!0})},data:function(){return{loaded:!1,monthNames:["August","September","October"],currentMonth:"October"}},computed:{monthData:function(){var t=this,e=this.$store.state.statistics.find(function(e){return e.month===t.currentMonth});return e.top=e.top.map(function(t){return W({},t,{color:t.danger_level>3?"#ff6e7d":"#ffc935"})}),e},months:function(){var t=this;return this.monthNames.map(function(e){return t.$store.state.statistics.find(function(t){return t.month===e})})}}},tt=Z,et=(n("82af"),Object(U["a"])(tt,T,A,!1,null,"a0777ff2",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticStyle:{background:"white"}},[n("div",{staticClass:"products"},[n("div",{staticClass:"products-description"},[t._v("\n          "+t._s(t.description)+"\n      ")])])])},st=[],rt={name:"products",mounted:function(){this.$store.commit("setMenuName","Purchases"),console.log(this.$f7route.params.subject)},computed:{description:function(){return"sugar"===this.$f7route.params.subject?"Products with high level of sugar you have bought this month":""}},data:function(){return{products:[{name:"Chipseki",img:""}]}}},ot=rt,ct=(n("15a9"),Object(U["a"])(ot,at,st,!1,null,"6c860807",null)),it=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"profile-page"},[n("div",[n("f7-list",{attrs:{form:""}},[n("f7-list-input",{attrs:{label:"Name",type:"text",placeholder:"Your name",value:t.name,"clear-button":""}}),n("f7-list-input",{attrs:{label:"E-mail",type:"email",value:t.email,placeholder:"Your e-mail","clear-button":""}}),n("f7-list",{attrs:{"simple-list":""}},t._l(t.tags,function(t){return n("f7-list-item",{attrs:{title:t.name}},[n("f7-toggle",{attrs:{checked:t.flag}})],1)}),1),n("f7-button",{staticClass:"login-button",attrs:{round:""},on:{click:t.save}},[t._v("Save")])],1)],1)])},ut=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-panel",{ref:"panel",staticClass:"panel-menu",attrs:{left:"",resizable:""},on:{"panel:close":t.close}},[n("account")],1)},dt=[],bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"main-page",staticStyle:{background:"white"},attrs:{"color-theme":"green"}},[n("div",{staticClass:"profile"},[n("div",{staticClass:"profile-name"},[n("div",{staticClass:"profile-name-image"},[t._v("\n                "+t._s(t.user.name&&t.user.name.slice(0,1))+"\n            ")]),n("div",{staticClass:"profile-name-text"},[t._v("\n                "+t._s(t.user.name)+"\n            ")])]),n("div",{staticClass:"profile-actions"},[n("f7-button",{attrs:{raised:""},on:{click:t.logOut}},[t._v("Log out")])],1)]),n("f7-list",{attrs:{"simple-list":""}},t._l(t.links,function(e,a){return n("div",{key:"key-"+a,staticClass:"item-menu",on:{click:function(n){return t.navigateLink(e)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])}),0)],1)},pt=[];function mt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){gt(t,e,n[e])})}return t}function gt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ht={name:"account",computed:mt({},Object(c["b"])(["user"])),data:function(){return{links:[{title:"Your statistics",link:"/"},{title:"Recommended recipes",link:"/recipes"},{title:"Profile",link:"/profile"}]}},methods:{logOut:function(){var t=this;this.$store.commit("openPanel",!1),setTimeout(function(){return t.$store.commit("logout")},300),pe.$f7.views.main.router.navigate("/",{reloadAll:!0})},navigateLink:function(t){this.$store.commit("setMenuName",t.title),pe.$f7.views.main.router.navigate(t.link,{reloadAll:!0}),this.$store.commit("openPanel",!1)}}},jt=ht,vt=(n("1bac"),Object(U["a"])(jt,bt,pt,!1,null,"3da063cd",null)),yt=vt.exports;function Ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){kt(t,e,n[e])})}return t}function kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _t={name:"leftMenu",components:{Account:yt},computed:Ot({},Object(c["b"])(["openedPanel"])),methods:{close:function(){this.$store.commit("openPanel",!1)}},watch:{openedPanel:function(t){t?this.$refs.panel.open():this.$refs.panel.close()}}},wt=_t,Ct=(n("d0d7"),Object(U["a"])(wt,ft,dt,!1,null,"5da2ef6f",null)),Pt=Ct.exports;function St(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){$t(t,e,n[e])})}return t}function $t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var xt={name:"settings",components:{LeftMenu:Pt},data:function(){return{email:"",name:"",tags:[{name:"vegan",flag:!0},{name:"vegetarian",flag:!0},{name:"gluten",flag:!1},{name:"lactose",flag:!0},{name:"no-sugar",flag:!1}]}},computed:St({},Object(c["b"])(["user"])),methods:{save:function(){}}},Mt=xt,Et=(n("d5f4"),Object(U["a"])(Mt,lt,ut,!1,null,"0ef5c512",null)),zt=Et.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-block-title",[t._v("Products")]),n("f7-list",{attrs:{"media-list":""}},t._l(t.products,function(t,e){return n("f7-list-item",{key:e+"-key",attrs:{link:t.picture_url,title:t.name_eng||t.name_fin,text:t.ing_eng||t.ing_fin}},[n("img",{attrs:{slot:"media",src:t.picture_url+"?fit=clip&h=40&w=40",width:"40"},slot:"media"})])}),1)],1)},It=[];function Dt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){Tt(t,e,n[e])})}return t}function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var At={name:"listE",computed:Dt({},Object(c["b"])(["products"]))},Nt=At,Rt=Object(U["a"])(Nt,Lt,It,!1,null,"9d2d493c",null),Yt=Rt.exports,Ht=[{path:"/",component:nt},{path:"/purchases/:subject",component:it},{path:"/profile",component:zt},{path:"/listE",component:Yt}],Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"main-page login",attrs:{"color-theme":"green"}},[n("div",{staticClass:"k-choice-login"},[n("f7-block",{staticClass:"k-choice-login-block"},[n("div",{staticClass:"k-choice-login-logo"}),n("f7-col",{attrs:{tag:"p"}},[n("f7-col",{attrs:{tag:"span"}},[n("f7-button",{staticClass:"k-choice-login-button",attrs:{round:"",raised:""},on:{click:t.openLogin}},[t._v("Log in")])],1),n("f7-col",{attrs:{tag:"span"}},[n("f7-button",{staticClass:"k-choice-login-button",attrs:{round:"",raised:""}},[t._v("Sign up")])],1)],1)],1)],1),n("f7-login-screen",{staticClass:"openLogin",attrs:{"color-theme":"green",opened:t.openedLogin&&t.$store.state.login}},[n("f7-navbar",{staticClass:"login-navbar"},[n("f7-nav-title",[t._v("Log In")]),n("div",{staticClass:"close"},[n("i",{staticClass:"f7-icons",on:{click:function(e){t.openedLogin=!1}}},[t._v("close")])])],1),n("f7-page",{attrs:{"login-screen":""}},[n("div",{staticClass:"login-popup"},[n("f7-list",{staticClass:"login-form",attrs:{form:""}},[n("f7-list-input",{attrs:{label:"CardId",type:"text",placeholder:"Your cardId",value:t.cardId},on:{input:function(e){t.cardId=e.target.value}}})],1),n("f7-button",{staticClass:"login-button",attrs:{round:""},on:{click:t.logIn}},[t._v("Log In")])],1)])],1)],1)},Ft=[],qt={name:"login",data:function(){return{openedLogin:!1,cardId:""}},methods:{openLogin:function(){this.openedLogin=!this.openedLogin},logIn:function(){var t=this;this.cardId&&this.$store.dispatch("login",{card_id:this.cardId}).then(function(){t.openedLogin=!1,setTimeout(function(){return t.$store.state.login=!1},300)}).catch(function(){var e=t.$f7.toast.create({text:"CardId undefined",position:"center",closeTimeout:1e3,cssClass:"text-align-center"});e.open()})}}},Bt=qt,Gt=(n("c485"),Object(U["a"])(Bt,Ut,Ft,!1,null,"899cb884",null)),Jt=Gt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("header-main",[t._v("\n       "+t._s(t.activeMenu)+"\n    ")]),n("f7-view",{attrs:{id:"main-view",router:!0,"push-state":!0,main:""}})],1)},Qt=[],Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-navbar",{ref:"navbar",staticClass:"k-header-navbar"},[n("f7-nav-left",[n("i",{staticClass:"f7-icons",on:{click:t.openPanel}},[t._v("menu")])]),n("f7-nav-title",{staticClass:"k-title"},[t._t("default")],2)],1)},Wt=[],Xt={name:"HeaderMain",mounted:function(){this.$refs.navbar.size()},methods:{openPanel:function(){this.$store.commit("openPanel",!0)}}},Zt=Xt,te=(n("edd9"),Object(U["a"])(Zt,Vt,Wt,!1,null,"4aa93d10",null)),ee=te.exports;function ne(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){ae(t,e,n[e])})}return t}function ae(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var se={name:"mainPage",components:{LeftMenu:Pt,Account:yt,Login:Jt,HeaderMain:ee},computed:ne({},Object(c["b"])(["activeMenu","login"]))},re=se,oe=Object(U["a"])(re,Kt,Qt,!1,null,"a2958450",null),ce=oe.exports;function ie(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){le(t,e,n[e])})}return t}function le(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ue={components:{LeftMenu:Pt,MainPage:ce,Login:Jt},data:function(){return{popupOpened:!1,isIE:this.$device.ie,isLogin:!1,f7params:{id:"io.framework7.hack",name:"Hack",theme:"ios",routes:Ht,pushState:!0,history:!0,on:{routeChanged:function(t,e,n){localStorage.setItem("routersHistory",n.history)}}}}},computed:ie({},Object(c["b"])(["login","exit"])),mounted:function(){localStorage.getItem("token")&&(console.log(localStorage.getItem("token")),this.$store.state.user.token=localStorage.getItem("token"))}},fe=ue,de=Object(U["a"])(fe,I,D,!1,null,null,null),be=de.exports;n("9e46");s["a"].use(r["a"]),a["a"].component(o["a"].name,o["a"]);var pe=e["default"]=new a["a"]({template:"<App/>",components:{app:be},store:L,data:function(){return{theme:"ios"}},render:function(t){return t(be)}}).$mount("#app")},6887:function(t,e,n){},7935:function(t,e,n){},"7bcf":function(t,e,n){"use strict";var a=n("4184"),s=n.n(a);s.a},"82af":function(t,e,n){"use strict";var a=n("4656"),s=n.n(a);s.a},8495:function(t,e,n){},"9e46":function(t,e,n){},a611:function(t,e,n){},c485:function(t,e,n){"use strict";var a=n("8495"),s=n.n(a);s.a},d0d7:function(t,e,n){"use strict";var a=n("1d19"),s=n.n(a);s.a},d5f4:function(t,e,n){"use strict";var a=n("7935"),s=n.n(a);s.a},e637:function(t,e,n){},edd9:function(t,e,n){"use strict";var a=n("6887"),s=n.n(a);s.a}});
//# sourceMappingURL=app.e86ded88.js.map