(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[38],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"PortFolios",(function(){return s}));var n=r(2),a=r(5),o=r(0),i=r.n(o),c=r(16),l=r(17);function u(){u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new j(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var m={};function h(){}function d(){}function p(){}var v={};l(v,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==t&&r.call(g,o)&&(v=g);var E=p.prototype=h.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,c){var l=f(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=f(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=p,n(E,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(E),l(E,c,"Generator"),l(E,o,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}var s=function(){var e=Object(l.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(o.useState)("Clients (All)"),r=Object(a.a)(t,2),s=r[0],f=r[1],m=Object(o.useState)([]),h=Object(a.a)(m,2),d=h[0],p=h[1],v=Object(o.useState)([]),y=Object(a.a)(v,2),g=y[0];y[1];Object(o.useEffect)((function(){b(),w()}),[]);var E=function(){var e=Object(n.a)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"Clients (All)"===s){e.next=6;break}return e.next=4,Object(c.H)(s);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.c)(e);case 2:r=t.sent,p(r.users);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.I)(e);case 2:r=t.sent,console.log(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," PortFolio "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"PortFolio")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Opened Positions")))),i.a.createElement("div",{className:"col-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-inline"},i.a.createElement("select",{className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-3"},i.a.createElement("option",{selected:!0,disabled:!0},"Select Admin"),i.a.createElement("option",{value:"admin1"},"Admin 1"),i.a.createElement("option",{value:"admin2"},"Admin 2"),i.a.createElement("option",{value:"admin3"},"Admin 3"),i.a.createElement("option",{value:"admin4"},"Admin 4")),i.a.createElement("select",{onChange:function(e){var t=e.target.value;f(t)},class:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-3"},i.a.createElement("option",{selected:!0,disabled:!0,value:"none"},"Clients (All)"),null===d||void 0===d?void 0:d.map((function(e){return i.a.createElement("option",{value:e.username},e.username)}))),i.a.createElement("button",{type:"submit",onClick:function(e){return E(e)},className:"btn btn-gradient-primary mb-2"},"Show"))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"PortFolio (0)"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Exchange "),i.a.createElement("th",null," Script | Expiry "),i.a.createElement("th",null," Current Price "),i.a.createElement("th",null," Avarage Price "),i.a.createElement("th",null," Quantity "),i.a.createElement("th",null," Order Type"),i.a.createElement("th",null," Profit / Loss"),i.a.createElement("th",null," P/L with Brkg  "))),null===g||void 0===g?void 0:g.map((function(e){var t,r,n,a,o,c,l=new Date(e.expiry),u=l.getDate(),s=l.toLocaleString("default",{month:"short"}).toUpperCase(),f=l.getFullYear(),m="".concat(u).concat(s).concat(f);return i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,null!==(t=e.exchange)&&void 0!==t?t:"XXXX"),i.a.createElement("td",null,null!==(r=e.symbol.split("-")[0])&&void 0!==r?r:"-"," | ",null!==m&&void 0!==m?m:"-"),i.a.createElement("td",null,null!==(n=e.averagePrice)&&void 0!==n?n:"000.0"),i.a.createElement("td",null,null!==(a=e.currentPrice)&&void 0!==a?a:"000.0"),i.a.createElement("td",null,null!==(o=e.quantity)&&void 0!==o?o:"000"),i.a.createElement("td",null,null!==(c=e.order_type)&&void 0!==c?c:"TYPE"),i.a.createElement("td",null,e.profitloss?e.profitloss:"000.0"),i.a.createElement("td",null,e.profitlosswithbrkg?e.profitlosswithbrkg:"000.0")))}))))))),i.a.createElement("div",{className:"col-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card btn btn-gradient-dark"},i.a.createElement("div",{style:{padding:"1rem"},className:"card-body text-center"},i.a.createElement("span",null," Total "),i.a.createElement("h4",null,"59538.9"))))))};t.default=s}}]);
//# sourceMappingURL=38.be9b6f26.chunk.js.map