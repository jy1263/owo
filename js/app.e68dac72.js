(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d402ce0"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2395:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},a=[],i={name:"App"},s=i,c=(n("7c55"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,null,null),l=u.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("Social",{staticClass:"social"})],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topper"},[n("img",{staticClass:"pfp",attrs:{alt:"Vue logo",src:"https://github.com/jy1263.png"}}),n("div",{staticClass:"title"},[t._v("Hi, I'm Amy. A student based in Sydney who likes to mess around with music stuff. "),n("br"),t._v(" Here's a lil page for my accounts.")])])}],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social"},[n("a",{attrs:{href:"https://github.com/jy1263"}},[t._v("Github")]),n("a",{attrs:{href:"https://twitter.com/jy126orjy126"}},[t._v("Twitter")]),n("a",{attrs:{href:"https://www.instagram.com/owotter.jy1263/"}},[t._v("Instagram")]),n("a",{attrs:{href:"https://github.com/jy1263/jy1263.github.io"}},[t._v("This Repository")]),n("a",{attrs:{href:"https://app.matter.online/artists/@owotter"}},[t._v("Matter Music")]),n("a",{attrs:{href:"https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pCaGNeQBQDagLPsoQaD41A"}},[t._v("Spotify")]),n("a",{attrs:{href:"https://soundcloud.com/owotter"}},[t._v("Soundcloud")]),n("a",{attrs:{href:"https://soundcloud.com/owotterwip"}},[t._v("WIP Soundcloud")]),n("a",{attrs:{href:"https://www.youtube.com/watch?v=ucbx9we6EHk"}},[t._v("If it isn't clear enough")])])}],b={name:"Social",props:{msg:String},data:function(){return{links:[{name:"Github",link:"https://github.com/jy1263/"},{name:"Twitter",link:"https://twitter.com/jy126orjy126/"},{name:"Instagram",link:"https://www.instagram.com/owotter.jy1263/"},{name:"This Repository",link:"https://github.com/jy1263/jy1263.github.io"}]}},mounted:function(){},methods:{}},g=b,w=(n("5d10"),Object(c["a"])(g,m,v,!1,null,"4d473730",null)),y=w.exports,_={name:"Home",components:{Social:y}},j=_,k=(n("edb8"),Object(c["a"])(j,d,h,!1,null,"0843eef8",null)),O=k.exports;o["a"].use(p["a"]);var S=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],P=new p["a"]({mode:"history",base:"",routes:S}),E=P,x=n("2f62");o["a"].use(x["a"]);var A=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:E,store:A,render:function(t){return t(l)}}).$mount("#app")},"5d10":function(t,e,n){"use strict";var o=n("e671"),r=n.n(o);r.a},"7c55":function(t,e,n){"use strict";var o=n("2395"),r=n.n(o);r.a},a64b:function(t,e,n){},e671:function(t,e,n){},edb8:function(t,e,n){"use strict";var o=n("a64b"),r=n.n(o);r.a}});
//# sourceMappingURL=app.e68dac72.js.map