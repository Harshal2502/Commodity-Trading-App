(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[48],{185:function(e,t,r){"use strict";r.r(t);var n=r(20),a=r(1),o=r(4),i=r(0),c=r.n(i),l=r(12),u=r(17),s=r(10);function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:O(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h={};function f(){}function m(){}function v(){}var p={};l(p,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==t&&r.call(g,o)&&(p=g);var b=v.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function O(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return m.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.default=function(){var e=Object(u.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(i.useState)(),r=Object(o.a)(t,2),h=(r[0],r[1],Object(i.useState)([])),f=Object(o.a)(h,2),m=(f[0],f[1],Object(i.useState)(!1)),v=Object(o.a)(m,2),p=v[0],y=v[1],g=Object(i.useState)(!1),b=Object(o.a)(g,2),E=b[0],w=b[1],O=Object(i.useState)([]),j=Object(o.a)(O,2),x=j[0],L=j[1],N=Object(i.useState)(""),S=Object(o.a)(N,2),_=S[0],k=S[1],P=Object(i.useState)([]),T=Object(o.a)(P,2),D=T[0],C=T[1],F=Object(i.useState)(),G=Object(o.a)(F,2),I=G[0],U=G[1];Object(i.useEffect)((function(){(function(){var t=Object(a.a)(d().mark((function t(){var r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.jb)(e);case 2:r=t.sent,C(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var Y=function(){var e=Object(a.a)(d().mark((function e(){var t,r,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,Object(l.y)(_);case 3:null!==(t=e.sent)&&(a=(r=[]).concat.apply(r,Object(n.a)(t)),L(a)),w(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(a.a)(d().mark((function e(t,r,a){var o,i,c,u;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(a),y(!0),e.next=4,Object(l.r)(r,t.target.value);case 4:return i=e.sent,s.b.info(i.status,{position:s.b.POSITION.TOP_RIGHT,autoClose:3e3,hideProgressBar:!1,pauseOnHover:!0}),y(!1),e.next=9,Object(l.y)(_);case 9:c=e.sent,u=(o=[]).concat.apply(o,Object(n.a)(c)),L(u);case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"}," Manage Orders "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}}," Manage Orders ")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"}," All Orders Details ")))),c.a.createElement("div",{className:"col-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-inline"},c.a.createElement("select",{onChange:function(e){return k(e.target.value)},className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9"},c.a.createElement("option",{selected:!0,disabled:!0},"Select Master"),null===D||void 0===D?void 0:D.map((function(e){return c.a.createElement("option",{value:e},e)}))),c.a.createElement("button",{onClick:function(e){e.preventDefault(),Y()},className:"btn btn-gradient-primary mb-2"},E?c.a.createElement("span",{className:"button-loader"}):"Show"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"}," OrderDetails (",null===x||void 0===x?void 0:x.length,")"),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," Username "),c.a.createElement("th",null," Order ID "),c.a.createElement("th",null," Exchange "),c.a.createElement("th",null," Script | Expiry "),c.a.createElement("th",null," Type "),c.a.createElement("th",null," Trigger Price "),c.a.createElement("th",null," Quantity "),c.a.createElement("th",null," Placed on "),c.a.createElement("th",null," CF Status "),c.a.createElement("th",null," Status "),c.a.createElement("th",null," Discard "))),null===x||void 0===x?void 0:x.map((function(e,t){var r,n,a,o,i,l,u,s,d,h=new Date(e.asset.expiredat),f=h.getDate(),m=h.toLocaleString("default",{month:"short"}).toUpperCase(),v=h.getFullYear(),y="".concat(f).concat(m).concat(v),g=new Date(e.triggerat),b=g.getDate(),E=g.toLocaleString("default",{month:"short"}).toUpperCase(),w=g.getFullYear(),O=g.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),j="".concat(b).concat(E).concat(w," (").concat(O,")");return c.a.createElement("tbody",{key:e.order_id},c.a.createElement("tr",null,c.a.createElement("td",null," ",null!==(r=null===e||void 0===e?void 0:e.username)&&void 0!==r?r:"-"," "),c.a.createElement("td",null," ",null!==(n=null===e||void 0===e?void 0:e.order_id)&&void 0!==n?n:"-"," "),c.a.createElement("td",null," ",null!==(a=null===e||void 0===e?void 0:e.asset.exchange)&&void 0!==a?a:"-"," "),c.a.createElement("td",null," ",null!==(o=null===e||void 0===e?void 0:e.asset.symbol)&&void 0!==o?o:"-"," | ",null!==y&&void 0!==y?y:"-"," "),c.a.createElement("td",null," ",null!==(i=null===e||void 0===e?void 0:e.type)&&void 0!==i?i:"-"," "),c.a.createElement("td",null," ",null!==(l=null===e||void 0===e?void 0:e.triggerprice)&&void 0!==l?l:"-"," "),c.a.createElement("td",null," ",null!==(u=null===e||void 0===e?void 0:e.quantity)&&void 0!==u?u:"-"," "),c.a.createElement("td",null," ",null!==j&&void 0!==j?j:"-"," "),c.a.createElement("td",null," ",null!==(s=null===e||void 0===e?void 0:e.CFstatus)&&void 0!==s?s:"-"," "),c.a.createElement("td",null," ",null!==(d=null===e||void 0===e?void 0:e.order_status)&&void 0!==d?d:"-"," "),c.a.createElement("td",null," ",c.a.createElement("button",{disabled:p,onClick:function(r){return A(r,e.username,t)},value:e.order_id,className:"btn btn-primary"}," ",p&&I===t?c.a.createElement("span",{className:"button-loader"}):"Terminate"," ")," ")))})))))))))}}}]);
//# sourceMappingURL=48.80391f3d.chunk.js.map