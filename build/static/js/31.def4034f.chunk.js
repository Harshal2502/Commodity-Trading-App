(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[31],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"OrderBook",(function(){return d}));var n=r(20),a=r(1),o=r(4),i=r(0),l=r.n(i),c=r(12),u=r(17);function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(_){c=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),l=new j(a||[]);return n(i,"_invoke",{value:x(e,r,l)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var f={};function h(){}function v(){}function m(){}var p={};c(p,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==t&&r.call(g,o)&&(p=g);var E=m.prototype=h.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,l){var c=d(e[a],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=O(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=d(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=m,n(E,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:v,configurable:!0}),v.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(E),c(E,l,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function d(){var e=Object(u.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(i.useState)(),r=Object(o.a)(t,2),d=r[0],f=r[1],h=Object(i.useState)([]),v=Object(o.a)(h,2),m=v[0],p=v[1],y=Object(i.useState)([]),g=Object(o.a)(y,2),E=g[0],b=g[1];Object(i.useEffect)((function(){(function(){var t=Object(a.a)(s().mark((function t(){var r,a,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.D)(e);case 2:a=t.sent,o=(r=[]).concat.apply(r,Object(n.a)(a)),p(o),b(o);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var w=function(){var e=Object(a.a)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"!==d){e.next=3;break}return b(m),e.abrupt("return");case 3:b(m.filter((function(e){return e.order_status===d})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("div",{className:"page-header"},l.a.createElement("h3",{className:"page-title"}," OrderBook "),l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"OrderBook")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Orders")))),l.a.createElement("div",{className:"col-12 grid-margin stretch-card"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-inline"},l.a.createElement("select",{onChange:function(e){return f(e.target.value)},className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9"},l.a.createElement("option",{value:"all",selected:!0},"All Orders"),l.a.createElement("option",{value:"Pending"},"Pending"),l.a.createElement("option",{value:"Squaredoff"},"Executed"),l.a.createElement("option",{value:"Placed"},"Placed"),l.a.createElement("option",{value:"Cancelled"},"Cancelled"),l.a.createElement("option",{value:"Expired"},"Expired")),l.a.createElement("button",{onClick:function(e){e.preventDefault(),w()},className:"btn btn-gradient-primary mb-2"},"Show"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"OrderBook (",null===E||void 0===E?void 0:E.length,")"),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," Username "),l.a.createElement("th",null," Order ID "),l.a.createElement("th",null," Exchange "),l.a.createElement("th",null," Script | Expiry "),l.a.createElement("th",null," Type "),l.a.createElement("th",null," Trigger Price "),l.a.createElement("th",null," Quantity "),l.a.createElement("th",null," Placed on "),l.a.createElement("th",null," CF Status "),l.a.createElement("th",null," Status "))),null===E||void 0===E?void 0:E.map((function(e){var t,r,n,a,o,i,c,u,s;if(null!==e){var d=new Date(e.asset.expiredat),f=d.getDate(),h=d.toLocaleString("default",{month:"short"}).toUpperCase(),v=d.getFullYear(),m="".concat(f).concat(h).concat(v),p=new Date(e.triggerat),y=p.getDate(),g=p.toLocaleString("default",{month:"short"}).toUpperCase(),E=p.getFullYear(),b=p.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),w="".concat(y).concat(g).concat(E," (").concat(b,")");return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null," ",null!==(t=null===e||void 0===e?void 0:e.username)&&void 0!==t?t:"-"," "),l.a.createElement("td",null," ",null!==(r=null===e||void 0===e?void 0:e.order_id)&&void 0!==r?r:"-"," "),l.a.createElement("td",null," ",null!==(n=null===e||void 0===e?void 0:e.asset.exchange)&&void 0!==n?n:"-"," "),l.a.createElement("td",null," ",null!==(a=null===e||void 0===e?void 0:e.asset.symbol)&&void 0!==a?a:"-"," | ",null!==m&&void 0!==m?m:"-"," "),l.a.createElement("td",null," ",null!==(o=null===e||void 0===e?void 0:e.type)&&void 0!==o?o:"-"," "),l.a.createElement("td",null," ",null!==(i=null===e||void 0===e?void 0:e.triggerprice)&&void 0!==i?i:"-"," "),l.a.createElement("td",null," ",null!==(c=null===e||void 0===e?void 0:e.quantity)&&void 0!==c?c:"-"," "),l.a.createElement("td",null," ",null!==w&&void 0!==w?w:"-"," "),l.a.createElement("td",null," ",null!==(u=null===e||void 0===e?void 0:e.CFstatus)&&void 0!==u?u:"-"," "),l.a.createElement("td",null," ",null!==(s=null===e||void 0===e?void 0:e.order_status)&&void 0!==s?s:"-"," ")))}})))))))))}t.default=d}}]);
//# sourceMappingURL=31.def4034f.chunk.js.map