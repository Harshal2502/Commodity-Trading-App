(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[59],{150:function(t,e,r){"use strict";r.r(e),r.d(e,"PortFolio",(function(){return s}));var n=r(1),a=r(4),o=r(0),i=r.n(o),c=r(12),l=r(17);r(10),r(38),r(89);function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function s(t,e,r,a){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new j(a||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var h={};function d(){}function p(){}function v(){}var m={};l(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,o)&&(m=g);var E=v.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=f(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=v,n(E,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(E),l(E,c,"Generator"),l(E,o,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var s=function(){var t=Object(l.c)((function(t){return t?{username:t.username}:{username:null}})).username,e=Object(o.useState)([]),r=Object(a.a)(e,2),s=r[0],f=r[1],h=Object(o.useState)(0),d=Object(a.a)(h,2),p=d[0],v=d[1];Object(o.useEffect)((function(){y(),m()}),[]),Object(o.useEffect)((function(){var e=new WebSocket("ws://52.66.105.29:8020");e.onopen=function(){console.log("Balance Connection Established"),e.send(t)};var r=function(t){try{return JSON.parse("[".concat(t,"]"))}catch(e){return console.error("Error parsing data:",e),[]}};return e.onmessage=function(){var t=Object(n.a)(u().mark((function t(e){var n,a,o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.data,i=r(o),f(null===(n=i[0])||void 0===n?void 0:n.portfolio),v(null===(a=i[0])||void 0===a?void 0:a.forwardWeekPL);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onclose=function(){console.log("Balance Connection Closed")},function(){e.close()}}),[t]);var m=function(){var t=Object(n.a)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.pb)();case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(n.a)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(n.a)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),console.log(e.target.value),y();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," PortFolio "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(t){return t.preventDefault()}},"PortFolio")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Opened Positions")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"PortFolio (",null===s||void 0===s?void 0:s.length,")"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Exchange "),i.a.createElement("th",null," Script | Expiry "),i.a.createElement("th",null," Order Type"),i.a.createElement("th",null," Quantity "),i.a.createElement("th",null," Avarage Price "),i.a.createElement("th",null," Current Price "),i.a.createElement("th",null," Profit / Loss"),i.a.createElement("th",null," P/L with Brkg  "),i.a.createElement("th",null," Square Off "))),i.a.createElement("tbody",null,s&&s.length>0?s.map((function(t,e){var r,n,a,o,c,l,u=new Date(t.expiry),s=u.getDate(),f=u.toLocaleString("default",{month:"short"}).toUpperCase(),h=u.getFullYear(),d="".concat(s).concat(f).concat(h);return i.a.createElement("tr",null,i.a.createElement("td",null," ",null!==(r=t.exchange)&&void 0!==r?r:"XXXX"," "),i.a.createElement("td",null," ",null!==(n=t.symbol.split("-")[0])&&void 0!==n?n:"-"," | ",null!==d&&void 0!==d?d:"-"," "),i.a.createElement("td",null," ",null!==(a=t.order_type)&&void 0!==a?a:"TYPE"," "),i.a.createElement("td",null," ",null!==(o=t.quantity)&&void 0!==o?o:"000"," "),i.a.createElement("td",null," ",null!==(c=t.averagePrice)&&void 0!==c?c:"000.0"," "),i.a.createElement("td",null," ",null!==(l=t.currentPrice)&&void 0!==l?l:"000.0"," "),i.a.createElement("td",null," ",t.profitloss?t.profitloss:"000.0"," "),i.a.createElement("td",null," ",t.profitlosswithbrkg?t.profitlosswithbrkg:"000.0"," "),i.a.createElement("td",null," ",i.a.createElement("button",{onClick:g,value:t.order_id,className:"btn btn-primary"}," S/O ")," "))})):i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"10"}," No data Found "))))))))),i.a.createElement("div",{className:"col-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card btn btn-gradient-dark"},i.a.createElement("div",{style:{padding:"1rem"},className:"card-body text-center"},i.a.createElement("span",null," Total "),i.a.createElement("h4",null,null===p||void 0===p?void 0:p.toFixed(2)))))))};e.default=s}}]);
//# sourceMappingURL=59.9e74d359.chunk.js.map