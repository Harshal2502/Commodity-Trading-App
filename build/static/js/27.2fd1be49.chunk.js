(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[27],{168:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(5),l=r(0),c=r.n(l),o=r(17),i=r(16);function u(){u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(C){i=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var l=t&&t.prototype instanceof h?t:h,c=Object.create(l.prototype),o=new O(a||[]);return n(c,"_invoke",{value:x(e,r,o)}),c}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var d={};function h(){}function f(){}function p(){}var v={};i(v,l,(function(){return this}));var E=Object.getPrototypeOf,y=E&&E(E(j([])));y&&y!==t&&r.call(y,l)&&(v=y);var g=p.prototype=h.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,l){function c(){return new t((function(a,c){!function n(a,l,c,o){var i=m(e[a],e,l);if("throw"!==i.type){var u=i.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,c,o)}),(function(e){n("throw",e,c,o)})):t.resolve(s).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,o)}))}o(i.arg)}(n,l,a,c)}))}return a=a?a.then(c,c):c()}})}function x(e,t,r){var n="suspendedStart";return function(a,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw l;return S()}for(r.method=a,r.arg=l;;){var c=r.delegate;if(c){var o=k(c,r);if(o){if(o===d)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var i=m(e,t,r);if("normal"===i.type){if(n=r.done?"completed":"suspendedYield",i.arg===d)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n="completed",r.method="throw",r.arg=i.arg)}}}function k(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=m(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var l=a.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:f,configurable:!0}),f.displayName=i(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),i(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,l){void 0===l&&(l=Promise);var c=new w(s(t,r,n,a),l);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(g),i(g,o,"Generator"),i(g,l,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var o=r.call(l,"catchLoc"),i=r.call(l,"finallyLoc");if(o&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(){var e=Object(o.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(l.useState)("Clients (All)"),r=Object(a.a)(t,2),s=r[0],m=r[1],d=Object(l.useState)([]),h=Object(a.a)(d,2),f=h[0],p=h[1],v=Object(l.useState)([]),E=Object(a.a)(v,2),y=E[0],g=E[1],b=Object(l.useState)("market"),w=Object(a.a)(b,2),x=w[0],k=w[1],N=function(e){k(e)};Object(l.useEffect)((function(){O()}),[]);var L=function(){var e=Object(n.a)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"Clients (All)"===s){e.next=7;break}return e.next=4,Object(i.A)(s);case 4:r=e.sent,g(r),console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.c)(e);case 2:r=t.sent,p(r.users);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"}," Summary  "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Summary ")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Bill Summary")))),c.a.createElement("div",null,c.a.createElement("div",{className:"tab-buttons"},c.a.createElement("button",{className:"tab-button ".concat("market"===x?"active":""),onClick:function(e){e.preventDefault(),N("market")}},c.a.createElement("span",null,"Script-Wise")),c.a.createElement("button",{className:"tab-button ".concat("limit"===x?"active":""),onClick:function(e){e.preventDefault(),N("limit")}},"Client-Wise")),c.a.createElement("div",{className:"tab-content",style:{padding:"1rem 0rem 0.5rem"}},"market"===x&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-inline"},c.a.createElement("select",{onChange:function(e){var t=e.target.value;m(t)},class:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9"},c.a.createElement("option",{selected:!0,disabled:!0,value:"none"},"Clients (All)"),null===f||void 0===f?void 0:f.map((function(e){return c.a.createElement("option",{value:e.username},e.username)}))),c.a.createElement("button",{type:"submit",onClick:function(e){return L(e)},className:"btn btn-gradient-primary mb-2"},"Show"))))),c.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Summary (",y.length,")"),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," Exchange "),c.a.createElement("th",null," Script | Expiry "),c.a.createElement("th",null," Current Price "),c.a.createElement("th",null," Avarage Price "),c.a.createElement("th",null," Quantity "),c.a.createElement("th",null," Order Type"),c.a.createElement("th",null," Profit / Loss"),c.a.createElement("th",null," P/L with Brkg  "))),null===y||void 0===y?void 0:y.map((function(e){var t,r,n,a,l,o,i=new Date(e.expiry),u=i.getDate(),s=i.toLocaleString("default",{month:"short"}).toUpperCase(),m=i.getFullYear(),d="".concat(u).concat(s).concat(m);return c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,null!==(t=e.exchange)&&void 0!==t?t:"XXXX"),c.a.createElement("td",null,null!==(r=e.symbol.split("-")[0])&&void 0!==r?r:"-"," | ",null!==d&&void 0!==d?d:"-"),c.a.createElement("td",null,null!==(n=e.averagePrice)&&void 0!==n?n:"000.0"),c.a.createElement("td",null,null!==(a=e.currentPrice)&&void 0!==a?a:"000.0"),c.a.createElement("td",null,null!==(l=e.quantity)&&void 0!==l?l:"000"),c.a.createElement("td",null,null!==(o=e.order_type)&&void 0!==o?o:"TYPE"),c.a.createElement("td",null,e.profitloss?e.profitloss:"000.0"),c.a.createElement("td",null,e.profitlosswithbrkg?e.profitlosswithbrkg:"000.0")))})))))))),"limit"===x&&c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{className:"table",style:{backgroundColor:"white",borderRadius:"5px"}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," ",c.a.createElement("h6",null,"UserCode")," "),c.a.createElement("th",null," ",c.a.createElement("h6",null,"Net Total")," "),c.a.createElement("th",null," ",c.a.createElement("h6",null,"Brokrage")," "),c.a.createElement("th",null," ",c.a.createElement("h6",null,"Net Total With Brkg")," "))),c.a.createElement("tbody",null,c.a.createElement("tr",{style:{color:"red"},key:"entry"},c.a.createElement("td",null,"DEMOC"),c.a.createElement("td",null,"-210.00"),c.a.createElement("td",null,"239.58"),c.a.createElement("td",null,"-469.58")),c.a.createElement("tr",{key:"entry"},c.a.createElement("td",null,"HARESH123"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00")),c.a.createElement("tr",{key:"entry"},c.a.createElement("td",null,"ABC5555"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00")),c.a.createElement("tr",{key:"entry"},c.a.createElement("td",null,"ASHOK"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00")),c.a.createElement("tr",{key:"entry"},c.a.createElement("td",null,"MIRAJ022"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00")),c.a.createElement("tr",{key:"entry"},c.a.createElement("td",null,"AD01"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00"),c.a.createElement("td",null,"0.00"))))))),c.a.createElement("div",{className:"col-12 grid-margin stretch-card",style:{marginBottom:0}},c.a.createElement("div",{className:"card btn btn-gradient-dark"},c.a.createElement("div",{className:"card-body text-center",style:{paddingBottom:0,paddingTop:"1rem",display:"flex",flexDirection:"row",justifyContent:"space-around"}},c.a.createElement("div",null,c.a.createElement("span",null,"Net Total with Brkg"),c.a.createElement("h4",null,"59538.9")),c.a.createElement("div",null,c.a.createElement("span",null,"Net Total with Brkg"),c.a.createElement("h4",null,"59538.9"))))),c.a.createElement("div",{className:"col-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card btn btn-gradient-dark"},c.a.createElement("div",{style:{paddingTop:0,paddingBottom:"1rem"},className:"card-body text-center"},c.a.createElement("span",null,"Net Total with Brkg"),c.a.createElement("h4",null,"59538.9")))))}}}]);
//# sourceMappingURL=27.2fd1be49.chunk.js.map