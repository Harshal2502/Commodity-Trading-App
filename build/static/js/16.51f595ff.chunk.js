(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[16],{115:function(e,t,r){},149:function(e,t,r){"use strict";r.r(t),r.d(t,"OrderBook",(function(){return s}));var n=r(2),a=r(5),o=r(0),c=r.n(o),i=r(16),l=r(17);r(115);function u(){u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new k(a||[]);return n(c,"_invoke",{value:x(e,r,i)}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var f={};function h(){}function p(){}function m(){}var v={};l(v,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(N([])));y&&y!==t&&r.call(y,o)&&(v=y);var E=m.prototype=h.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function c(){return new t((function(a,c){!function n(a,o,c,i){var l=d(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(s).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=O(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=d(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m,n(E,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(E),l(E,i,"Generator"),l(E,o,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var s=function(){var e=Object(l.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(o.useState)([]),r=Object(a.a)(t,2),s=r[0],d=r[1],f=Object(o.useState)(),h=Object(a.a)(f,2),p=h[0],m=h[1],v=Object(o.useState)(!1),g=Object(a.a)(v,2),y=g[0],E=g[1];Object(o.useEffect)((function(){N(),k(),b()}),[]);var b=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.A)(e);case 2:r=t.sent,console.log("array",r),d(r.Orders);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.w)(e);case 2:r=t.sent,d(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.o)(e);case 2:r=t.sent,d(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.n)(e);case 2:r=t.sent,d(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.G)(e);case 2:r=t.sent,d(r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.x)(e);case 2:r=t.sent,d(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.s)(e);case 2:if(200!=(r=t.sent).status||0===r.data.length){t.next=8;break}return t.next=6,Object(i.R)(e,r.data);case 6:200===t.sent.status&&b();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(n.a)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.t)(e);case 2:if(r=t.sent,console.log(r),200!=r.status||0===r.data.length){t.next=9;break}return t.next=7,Object(i.S)(e,r.data);case 7:200===t.sent.status&&b();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"}," OrderBook "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"OrderBook")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Orders")))),c.a.createElement("div",{className:"grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-inline"},c.a.createElement("select",{onChange:function(e){return m(e.target.value)},style:{width:"80%"},class:"form-control mb-2 mr-sm-2"},c.a.createElement("option",{selected:!0,disabled:!0},"Please Select"),c.a.createElement("option",{value:"order"},"Order Status (All)"),c.a.createElement("option",{value:"pending"},"Pending"),c.a.createElement("option",{value:"excuted"},"Executed"),c.a.createElement("option",{value:"placed"},"Placed"),c.a.createElement("option",{value:"cancelled"},"Cancelled"),c.a.createElement("option",{value:"expired"},"Expired")),c.a.createElement("button",{onClick:function(e){e.preventDefault(),E(!0),"pending"===p?j():"order"===p?b():"excuted"===p?L():"placed"===p?w():"expired"===p?x():"cancelled"===p&&O(),E(!1)},className:"btn btn-gradient-primary mb-2"},"Show"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"OrderBook (",null===s||void 0===s?void 0:s.length,")"),y?c.a.createElement("div",{style:{textAlign:"center",margin:"1.5rem"}},c.a.createElement("span",{className:"loader"})):"",c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," Order ID "),c.a.createElement("th",null," Exchange "),c.a.createElement("th",null," Script | Expiry "),c.a.createElement("th",null," Type "),c.a.createElement("th",null," Order Type "),c.a.createElement("th",null," Trigger Price "),c.a.createElement("th",null," Quantity "),c.a.createElement("th",null," Brokerage "),c.a.createElement("th",null," P/L"),c.a.createElement("th",null," Created At "),c.a.createElement("th",null," Placed on "),c.a.createElement("th",null," CF Status "),c.a.createElement("th",null," Status "))),null===s||void 0===s?void 0:s.map((function(e){var t,r,n,a,o,i,l,u,s,d=new Date(e.assetexpiredat),f=d.getDate(),h=d.toLocaleString("default",{month:"short"}).toUpperCase(),p=d.getFullYear(),m="".concat(f).concat(h).concat(p),v=new Date(e.createdat),g=v.getDate(),y=v.toLocaleString("default",{month:"short"}).toUpperCase(),E=v.getFullYear(),b=v.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),w="".concat(g).concat(y).concat(E," (").concat(b,")"),x=new Date(e.triggerat),O=x.getDate(),j=x.toLocaleString("default",{month:"short"}).toUpperCase(),L=x.getFullYear(),k=x.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),N="".concat(O).concat(j).concat(L," (").concat(k,")");return c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null," ",null!==(t=e.order_id)&&void 0!==t?t:"-"," "),c.a.createElement("td",null," ",null!==(r=e.exchange)&&void 0!==r?r:"-"," "),c.a.createElement("td",null," ",null!==(n=e.symbol)&&void 0!==n?n:"-"," | ",null!==m&&void 0!==m?m:"-"," "),c.a.createElement("td",null," ",null!==(a=e.type)&&void 0!==a?a:"-"," "),c.a.createElement("td",null," ",null!==(o=e.order_type)&&void 0!==o?o:"-"," "),c.a.createElement("td",null," ",e.triggerprice?Math.round(100*e.triggerprice)/100:"-"," "),c.a.createElement("td",null," ",null!==(i=e.quantity)&&void 0!==i?i:"-"," "),c.a.createElement("td",null,"MCX"===e.exchange&&e.brokereage_MCX,"NFO"===e.exchange&&e.brokereage_NFO,"Iot"===e.exchange&&e.brokereage_lot),c.a.createElement("td",null," ",null!==(l=e.PL)&&void 0!==l?l:"-"," "),c.a.createElement("td",null," ",null!==w&&void 0!==w?w:"-"," "),c.a.createElement("td",null," ",e.triggerat?N:"-"," "),c.a.createElement("td",null," ",null!==(u=e.CFstatus)&&void 0!==u?u:"-"," "),c.a.createElement("td",null," ",null!==(s=e.order_status)&&void 0!==s?s:"-"," ")))})))))))))};t.default=s}}]);
//# sourceMappingURL=16.51f595ff.chunk.js.map