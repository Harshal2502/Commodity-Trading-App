(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[25],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"OrderBook",(function(){return f}));var n=r(15),a=r(2),o=r(5),i=r(0),c=r.n(i),l=r(16),u=r(17);function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var d={};function h(){}function p(){}function m(){}var v={};l(v,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==t&&r.call(g,o)&&(v=g);var b=m.prototype=h.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,c){var l=f(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=f(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,n(b,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function f(){var e=Object(u.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(i.useState)([]),r=Object(o.a)(t,2),f=(r[0],r[1]),d=Object(i.useState)(),h=Object(o.a)(d,2),p=h[0],m=h[1],v=Object(i.useState)([]),y=Object(o.a)(v,2),g=y[0],b=y[1];Object(i.useEffect)((function(){E()}),[]);var E=function(){var t=Object(a.a)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.c)(e);case 2:r=t.sent,f(r.users);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(a.a)(s().mark((function t(){var r,a,o,i,c,u,f,d,h,m,v,y,g,E,w;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("pending"!==p){t.next=9;break}return t.next=3,Object(l.u)(e);case 3:a=t.sent,console.log(a),o=(r=[]).concat.apply(r,Object(n.a)(a.pendingOrders)),b(o),t.next=39;break;case 9:if("all"!==p){t.next=17;break}return t.next=12,Object(l.r)(e);case 12:c=t.sent,u=(i=[]).concat.apply(i,Object(n.a)(c.pendingOrders)),b(u),t.next=39;break;case 17:if("excuted"!==p){t.next=25;break}return t.next=20,Object(l.v)(e);case 20:d=t.sent,h=(f=[]).concat.apply(f,Object(n.a)(d.pendingOrders)),b(h),t.next=39;break;case 25:if("market"!==p){t.next=33;break}return t.next=28,Object(l.q)(e);case 28:v=t.sent,y=(m=[]).concat.apply(m,Object(n.a)(v.pendingOrders)),b(y),t.next=39;break;case 33:if("limit"!==p){t.next=39;break}return t.next=36,Object(l.p)(e);case 36:E=t.sent,w=(g=[]).concat.apply(g,Object(n.a)(E.pendingOrders)),b(w);case 39:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"}," OrderBook "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"OrderBook")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Orders")))),c.a.createElement("div",{className:"col-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-inline"},c.a.createElement("select",{onChange:function(e){return m(e.target.value)},className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9"},c.a.createElement("option",{value:"all",selected:!0},"Order Status (All)"),c.a.createElement("option",{value:"pending"},"Pending"),c.a.createElement("option",{value:"excuted"},"Excuted"),c.a.createElement("option",{value:"market"},"Market"),c.a.createElement("option",{value:"limit"},"Limit")),c.a.createElement("button",{onClick:function(e){e.preventDefault(),w()},className:"btn btn-gradient-primary mb-2"},"Show"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"OrderBook (0)"),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," Username "),c.a.createElement("th",null," Symbol "),c.a.createElement("th",null," Exchange "),c.a.createElement("th",null," Expiry "),c.a.createElement("th",null," Type "))),null===g||void 0===g?void 0:g.map((function(e){var t,r,n,a,o;if(null!==e)return c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null," ",null!==(t=null===e||void 0===e?void 0:e.username)&&void 0!==t?t:"-"," "),c.a.createElement("td",null," ",null!==(r=null===e||void 0===e?void 0:e.symbol)&&void 0!==r?r:"-"," "),c.a.createElement("td",null," ",null!==(n=null===e||void 0===e?void 0:e.exchange)&&void 0!==n?n:"-"," "),c.a.createElement("td",null," ",null!==(a=null===e||void 0===e?void 0:e.expiredat)&&void 0!==a?a:"-"," "),c.a.createElement("td",null," ",null!==(o=null===e||void 0===e?void 0:e.type)&&void 0!==o?o:"-"," ")))})))))))))}t.default=f}}]);
//# sourceMappingURL=25.6b09c269.chunk.js.map