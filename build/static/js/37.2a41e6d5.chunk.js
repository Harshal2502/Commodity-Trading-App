(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[37],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"OrderBook",(function(){return p}));var r=n(20),a=n(15),c=n(2),o=n(5),l=n(0),i=n.n(l),u=n(118),s=n(16),m=n(17),d=n(12);n(84);function f(){f=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(C){i=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var c=t&&t.prototype instanceof d?t:d,o=Object.create(c.prototype),l=new N(a||[]);return r(o,"_invoke",{value:j(e,n,l)}),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=u;var m={};function d(){}function p(){}function b(){}var v={};i(v,c,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(S([])));g&&g!==t&&n.call(g,c)&&(v=g);var y=b.prototype=d.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){var a;r(this,"_invoke",{value:function(r,c){function o(){return new t((function(a,o){!function r(a,c,o,l){var i=s(e[a],e,c);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,l)}),(function(e){r("throw",e,o,l)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,l)}))}l(i.arg)}(r,c,a,o)}))}return a=a?a.then(o,o):o()}})}function j(e,t,n){var r="suspendedStart";return function(a,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw c;return L()}for(n.method=a,n.arg=c;;){var o=n.delegate;if(o){var l=x(o,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var i=s(e,t,n);if("normal"===i.type){if(r=n.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r="completed",n.method="throw",n.arg=i.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var c=a.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=b,r(y,"constructor",{value:b,configurable:!0}),r(b,"constructor",{value:p,configurable:!0}),p.displayName=i(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,i(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(O.prototype),i(O.prototype,o,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,a,c){void 0===c&&(c=Promise);var o=new O(u(t,n,r,a),c);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(y),i(y,l,"Generator"),i(y,c,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],o=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var l=n.call(c,"catchLoc"),i=n.call(c,"finallyLoc");if(l&&i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}function p(){var e=Object(m.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(l.useState)(!1),n=Object(o.a)(t,2),p=n[0],b=n[1],v=Object(l.useState)({_id:"0x1234",Exchange:"Exchange",InstrumentIdentifier:"Instrument",LastTradeTime:"0000.00",ServerTime:"0000",AverageTradedPrice:"0000.00",BuyPrice:"0000.00",BuyQty:"0",Close:"0000.00",High:"0000.00",Low:"0000.00",LastTradePrice:"0000.00",LastTradeQty:"0000.00",Open:"0000.00",OpenInterest:"0000",QuotationLot:"0000",SellPrice:"0000.00",SellQty:"0",TotalQtyTraded:"0000",Value:"0000.00",PreOpen:"false",PriceChange:"0000",PriceChangePercentage:"00.00",OpenInterestChange:"0000",MessageType:"RealtimeResult",__v:0}),h=Object(o.a)(v,2),g=h[0],y=h[1],E=Object(l.useState)(),O=Object(o.a)(E,2),j=(O[0],O[1],Object(l.useState)("market")),x=Object(o.a)(j,2),w=x[0],k=x[1],N=Object(l.useState)(0),S=Object(o.a)(N,2),L=S[0],C=S[1],_=Object(l.useState)(),P=Object(o.a)(_,2),T=P[0],A=P[1],F=Object(l.useState)(""),I=Object(o.a)(F,2),G=I[0],B=I[1],D=Object(l.useState)(),Q=Object(o.a)(D,2),R=Q[0],J=Q[1],M=Object(l.useState)([]),U=Object(o.a)(M,2),Y=U[0],H=U[1],W=Object(l.useState)([]),q=Object(o.a)(W,2),V=q[0],z=q[1],K=Object(l.useState)(),X=Object(o.a)(K,2),Z=X[0],$=X[1],ee=Object(l.useState)([]),te=Object(o.a)(ee,2),ne=te[0],re=te[1],ae=Object(l.useState)(""),ce=Object(o.a)(ae,2),oe=ce[0],le=ce[1],ie=Object(l.useState)([]),ue=Object(o.a)(ie,2),se=ue[0],me=ue[1],de=Object(l.useState)(),fe=Object(o.a)(de,2),pe=fe[0],be=fe[1],ve=Object(l.useState)(),he=Object(o.a)(ve,2),ge=he[0],ye=he[1],Ee=Object(l.useState)(),Oe=Object(o.a)(Ee,2),je=Oe[0],xe=Oe[1],we=Object(l.useState)([]),ke=Object(o.a)(we,2),Ne=ke[0],Se=ke[1],Le=Object(l.useState)([]),Ce=Object(o.a)(Le,2);Ce[0],Ce[1];Object(l.useEffect)((function(){_e()}),[]);var _e=function(){var t=Object(c.a)(f().mark((function t(){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.c)(e);case 2:n=t.sent,me(n.users);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(l.useEffect)((function(){(function(){var e=Object(c.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.C)();case 3:t=e.sent,re(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.useEffect)((function(){(function(){var e=Object(c.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G||"Exchange"===G){e.next=13;break}return e.prev=1,e.next=4,Object(s.E)(G);case 4:t=e.sent,z(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:e.next=14;break;case 13:J();case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[G]),Object(l.useEffect)((function(){(function(){var e=Object(c.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z){e.next=13;break}return e.prev=1,e.next=4,Object(s.K)(G,Z);case 4:t=e.sent,H(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:e.next=15;break;case 13:H([]),J();case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[Z]),Object(l.useEffect)((function(){Pe()}),[oe]);var Pe=function(){var e=Object(c.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.D)(G,Z,oe);case 3:t=e.sent,J(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Te=function(){var t=Object(c.a)(f().mark((function t(){var n,r,c,o,l,i,u,m,d,p,b,v,h,g,y;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("pending"!==je){t.next=9;break}return t.next=3,Object(s.u)(e);case 3:r=t.sent,console.log(r),c=(n=[]).concat.apply(n,Object(a.a)(r.pendingOrders)),Se(c),t.next=39;break;case 9:if("all"!==je){t.next=17;break}return t.next=12,Object(s.r)(e);case 12:l=t.sent,i=(o=[]).concat.apply(o,Object(a.a)(l.pendingOrders)),Se(i),t.next=39;break;case 17:if("excuted"!==je){t.next=25;break}return t.next=20,Object(s.v)(e);case 20:m=t.sent,d=(u=[]).concat.apply(u,Object(a.a)(m.pendingOrders)),Se(d),t.next=39;break;case 25:if("market"!==je){t.next=33;break}return t.next=28,Object(s.q)(e);case 28:b=t.sent,v=(p=[]).concat.apply(p,Object(a.a)(b.pendingOrders)),Se(v),t.next=39;break;case 33:if("limit"!==je){t.next=39;break}return t.next=36,Object(s.p)(e);case 36:g=t.sent,y=(h=[]).concat.apply(h,Object(a.a)(g.pendingOrders)),Se(y);case 39:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ae=function(){var e=Object(c.a)(f().mark((function e(t){var n,r,a,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){var t=parseInt(e.substring(0,2)),n={JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11}[e.substring(2,5)],r=parseInt(e.substring(5,9));return new Date(r,n,t).getTime()}(pe),r="market"==w?"market":"limit",a="market"==w?g.SellPrice:ge,e.next=6,Object(s.Q)(T,L,oe,G,a,n,t,r,g);case 6:c=e.sent,d.b.info(c.message,{position:d.b.POSITION.TOP_RIGHT,autoClose:3e3,hideProgressBar:!1,pauseOnHover:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(e){k(e)},Ie={control:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{width:"8rem",borderRadius:8,borderColor:t.isFocused?"#9d58ff":"#ced4da",boxShadow:t.isFocused?"0 0 0 0.2rem #c67bff":"none","&:hover":{borderColor:"#80bdff"}})},option:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:t.isFocused?"#c67bff":"transparent",color:t.isFocused?"#fff":"#333","&:hover":{backgroundColor:"#c67bff",color:"#fff"}})}},Ge={control:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{width:"9rem",borderRadius:8,borderColor:t.isFocused?"#9d58ff":"#ced4da",boxShadow:t.isFocused?"0 0 0 0.2rem #c67bff":"none","&:hover":{borderColor:"#80bdff"}})},option:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:t.isFocused?"#c67bff":"transparent",color:t.isFocused?"#fff":"#333","&:hover":{backgroundColor:"#c67bff",color:"#fff"}})}},Be=null===V||void 0===V?void 0:V.map((function(e){return{value:e,label:e}})),De=null===Y||void 0===Y?void 0:Y.map((function(e){return{value:e,label:e}}));return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," OrderBook "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"OrderBook")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Orders")))),i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-inline"},i.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary mb-2",onClick:function(e){e.preventDefault(),b(!p)}},"Place New Order"))),i.a.createElement("div",{className:"col-12 grid-margin stretch-card",style:{display:p?"block":"none"}},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-inline"},i.a.createElement("div",{style:{paddingLeft:0},className:"select orderbook-select input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-2"},i.a.createElement("select",{onChange:function(e){B(e.target.value)},name:"slct",id:"slct"},i.a.createElement("option",null,"Exchange"),null===ne||void 0===ne?void 0:ne.map((function(e){return i.a.createElement("option",null,e)})))),i.a.createElement("div",{className:"input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-2"},i.a.createElement(u.a,{options:Be,isSearchable:!0,placeholder:"Identifier",styles:Ie,onChange:function(e){J(),$(e.value)}})),i.a.createElement("div",{style:{paddingLeft:"2.5rem"},className:"input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-3"},i.a.createElement(u.a,{options:De,isSearchable:!0,placeholder:"Instrument",styles:Ge,onChange:function(e){J(),le(e.value)}})),i.a.createElement("div",{style:{paddingLeft:0},className:"select orderbook-select input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-2"},i.a.createElement("select",{onChange:function(e){return be(e.target.value)},id:"search_symboll_expiry_orderbook"},i.a.createElement("option",{value:"none"},"Get Expiry"),R&&R.map((function(e){return i.a.createElement("option",{value:e},e)})))),i.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),function(){var e=new WebSocket("ws://52.66.105.29:8000");e.onopen=function(){console.log("WebSocket connection established")},e.onmessage=function(){var e=Object(c.a)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.data,r=function(e){try{return JSON.parse("[".concat(e,"]"))}catch(t){return console.error("Error parsing data:",t),[]}}(n),y(r[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.onclose=function(){console.log("WebSocket connection closed")}}()},className:"btn btn-gradient-primary mb-2"},"Get Live Price")),i.a.createElement("form",{className:"form-inline"},i.a.createElement("nav",{className:"nav nav-tabs consize",role:"tablist"},i.a.createElement("div",null,i.a.createElement("div",{className:"tab-buttons"},i.a.createElement("button",{className:"tab-button ".concat("market"===w?"active":""),onClick:function(e){e.preventDefault(),Fe("market")}},i.a.createElement("span",null,"Market")),i.a.createElement("button",{className:"tab-button ".concat("limit"===w?"active":""),onClick:function(e){e.preventDefault(),Fe("limit")}},"Limit")),i.a.createElement("div",{className:"tab-content",style:{padding:"1rem 0rem 0.5rem"}},"market"===w&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",color:"#333",textAlign:"center"}},i.a.createElement("p",null,":: Buy :: ",i.a.createElement("br",null)," ",g.BuyPrice),i.a.createElement("p",null,":: Sell :: ",i.a.createElement("br",null)," ",g.SellPrice))),"limit"===w&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("input",{onChange:function(e){return ye(e.target.value)},type:"number",style:{width:"9rem"},placeholder:"Limit",min:"0"})))))),i.a.createElement("div",{className:"input-group mb-2 mr-sm-1  col-md-10 col-lg-6 col-xl-3"},i.a.createElement("select",{className:"form-control",onChange:function(e){A(e.target.value)},id:"subadmin_place_order_usercode"},i.a.createElement("option",{value:"all",selected:!0,disabled:!0},"Clients (All)"),null===se||void 0===se?void 0:se.map((function(e){return i.a.createElement("option",{value:e.username},e.username)})))),i.a.createElement("div",{className:"input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-3"},i.a.createElement("input",{type:"number",onChange:function(e){C(e.target.value)},className:"form-control",id:"subadmin_order_qty",min:"0",placeholder:"Order Quantity"})),i.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),Ae("buy")},className:"btn btn-success mb-2 "},"Buy"),i.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),Ae("sell")},className:"btn btn-danger mb-2"},"Sell"))))),i.a.createElement("div",{className:"col-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-inline"},i.a.createElement("select",{className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-3"},i.a.createElement("option",{selected:!0,disabled:!0},"Select Admin"),i.a.createElement("option",{value:"admin1"},"Admin 1"),i.a.createElement("option",{value:"admin2"},"Admin 2"),i.a.createElement("option",{value:"admin3"},"Admin 3"),i.a.createElement("option",{value:"admin4"},"Admin 4")),i.a.createElement("select",{className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-3"},i.a.createElement("option",{value:"clients1"},"Clients 1"),i.a.createElement("option",{value:"clients2"},"Clients 2"),i.a.createElement("option",{value:"clients3"},"Clients 3"),i.a.createElement("option",{value:"clients4"},"Clients 4")),i.a.createElement("select",{onChange:function(e){return xe(e.target.value)},className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-3"},i.a.createElement("option",{value:"all",selected:!0},"Order Status (All)"),i.a.createElement("option",{value:"pending"},"Pending"),i.a.createElement("option",{value:"excuted"},"Excuted"),i.a.createElement("option",{value:"market"},"Market"),i.a.createElement("option",{value:"limit"},"Limit")),i.a.createElement("button",{onClick:function(e){e.preventDefault(),Te()},className:"btn btn-gradient-primary mb-2"},"Show"))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"OrderBook (0)"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Username "),i.a.createElement("th",null," Symbol "),i.a.createElement("th",null," Exchange "),i.a.createElement("th",null," Expiry "),i.a.createElement("th",null," Type "))),null===Ne||void 0===Ne?void 0:Ne.map((function(e){var t,n,r,a,c;if(null!==e)return i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null," ",null!==(t=null===e||void 0===e?void 0:e.username)&&void 0!==t?t:"-"," "),i.a.createElement("td",null," ",null!==(n=null===e||void 0===e?void 0:e.symbol)&&void 0!==n?n:"-"," "),i.a.createElement("td",null," ",null!==(r=null===e||void 0===e?void 0:e.exchange)&&void 0!==r?r:"-"," "),i.a.createElement("td",null," ",null!==(a=null===e||void 0===e?void 0:e.expiredat)&&void 0!==a?a:"-"," "),i.a.createElement("td",null," ",null!==(c=null===e||void 0===e?void 0:e.type)&&void 0!==c?c:"-"," ")))})))))))))}t.default=p}}]);
//# sourceMappingURL=37.2a41e6d5.chunk.js.map