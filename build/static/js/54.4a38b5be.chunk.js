(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[54],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"History",(function(){return s}));var n=r(1),a=r(4),o=r(0),i=r.n(o),l=r(12),c=r(17);function u(){u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),l=new j(a||[]);return n(i,"_invoke",{value:x(e,r,l)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var h={};function f(){}function m(){}function p(){}var v={};c(v,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==t&&r.call(y,o)&&(v=y);var E=p.prototype=f.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,l){var c=d(e[a],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=L(i,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=d(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return m.prototype=p,n(E,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(E),c(E,l,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var s=function(){var e=Object(c.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(o.useState)([]),r=Object(a.a)(t,2),s=r[0],d=r[1],h=Object(o.useState)(),f=Object(a.a)(h,2),m=f[0],p=f[1],v=Object(o.useState)([]),g=Object(a.a)(v,2),y=g[0],E=g[1];Object(o.useEffect)((function(){b()}),[]);var b=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.N)(e);case 2:r=t.sent,d(r.Orders),E(r.Orders);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," History "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"History")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Order's History")))),i.a.createElement("div",{className:"grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-inline"},i.a.createElement("select",{onChange:function(e){return p(e.target.value)},style:{width:"80%"},class:"form-control mb-2 mr-sm-2"},i.a.createElement("option",{value:"all",selected:!0}," All Orders "),i.a.createElement("option",{value:"Pending"}," Pending "),i.a.createElement("option",{value:"Squaredoff"}," Executed "),i.a.createElement("option",{value:"Placed"}," Placed "),i.a.createElement("option",{value:"Cancelled"}," Cancelled "),i.a.createElement("option",{value:"Expired"}," Expired ")),i.a.createElement("button",{onClick:function(e){e.preventDefault(),E("all"!==m?s.filter((function(e){return e.order_status===m})):s)},className:"btn btn-gradient-primary mb-2"}," Show "))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"OrderBook (",null===y||void 0===y?void 0:y.length,")"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Order ID "),i.a.createElement("th",null," Exchange "),i.a.createElement("th",null," Script | Expiry "),i.a.createElement("th",null," Type "),i.a.createElement("th",null," Quantity "),i.a.createElement("th",null," Brokerage "),i.a.createElement("th",null," Order Type "),i.a.createElement("th",null," Trigger Price "),i.a.createElement("th",null," Created At "),i.a.createElement("th",null," Placed on "),i.a.createElement("th",null," CF Status "),i.a.createElement("th",null," Status "))),null===y||void 0===y?void 0:y.map((function(e){var t,r,n,a,o,l,c,u,s=new Date(e.assetexpiredat),d=s.getDate(),h=s.toLocaleString("default",{month:"short"}).toUpperCase(),f=s.getFullYear(),m="".concat(d).concat(h).concat(f),p=new Date(e.createdat),v=p.getDate(),g=p.toLocaleString("default",{month:"short"}).toUpperCase(),y=p.getFullYear(),E=p.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),b="".concat(v).concat(g).concat(y," (").concat(E,")"),w=new Date(e.triggerat),x=w.getDate(),L=w.toLocaleString("default",{month:"short"}).toUpperCase(),O=w.getFullYear(),N=w.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),j="".concat(x).concat(L).concat(O," (").concat(N,")");return i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null," ",null!==(t=e.order_id)&&void 0!==t?t:"-"," "),i.a.createElement("td",null," ",null!==(r=e.exchange)&&void 0!==r?r:"-"," "),i.a.createElement("td",null," ",null!==(n=e.symbol.split("-")[0])&&void 0!==n?n:"-"," | ",null!==m&&void 0!==m?m:"-"," "),i.a.createElement("td",null," ",null!==(a=e.type)&&void 0!==a?a:"-"," "),i.a.createElement("td",null," ",null!==(o=e.quantity)&&void 0!==o?o:"-"," "),i.a.createElement("td",null,"MCX"===e.exchange&&e.brokereage_MCX,"NFO"===e.exchange&&e.brokereage_NFO,"Iot"===e.exchange&&e.brokereage_lot),i.a.createElement("td",null," ",null!==(l=e.order_type)&&void 0!==l?l:"-"," "),i.a.createElement("td",null," ",e.triggerprice?Math.round(100*e.triggerprice)/100:"-"," "),i.a.createElement("td",null," ",null!==b&&void 0!==b?b:"-"," "),i.a.createElement("td",null," ",e.triggerat?j:"-"," "),i.a.createElement("td",null," ",null!==(c=e.CFstatus)&&void 0!==c?c:"-"," "),i.a.createElement("td",null," ",null!==(u=e.order_status)&&void 0!==u?u:"-"," ")))})))))))))};t.default=s}}]);
//# sourceMappingURL=54.4a38b5be.chunk.js.map