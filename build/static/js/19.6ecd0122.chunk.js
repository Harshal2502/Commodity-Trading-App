(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[19],{201:function(e,t,r){"use strict";r.r(t);var n=r(20),a=r(1),o=r(4),c=r(0),i=r.n(c),l=r(12),u=r(17),s=r(10);function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new N(a||[]);return n(c,"_invoke",{value:O(e,r,i)}),c}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var f={};function h(){}function m(){}function v(){}var p={};l(p,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==t&&r.call(b,o)&&(p=b);var g=v.prototype=h.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function c(){return new t((function(a,c){!function n(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(d).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}})}function O(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=j(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(g),l(g,i,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}t.default=function(){var e=Object(u.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(c.useState)(),r=Object(o.a)(t,2),f=(r[0],r[1],Object(c.useState)([])),h=Object(o.a)(f,2),m=(h[0],h[1],Object(c.useState)(!1)),v=Object(o.a)(m,2),p=v[0],y=v[1],b=Object(c.useState)(!1),g=Object(o.a)(b,2),E=g[0],w=g[1],O=Object(c.useState)([]),j=Object(o.a)(O,2),x=j[0],L=j[1],N=Object(c.useState)(""),S=Object(o.a)(N,2),k=S[0],_=S[1],P=Object(c.useState)(""),T=Object(o.a)(P,2),C=T[0],D=T[1],F=Object(c.useState)([]),G=Object(o.a)(F,2),I=G[0],M=G[1],U=Object(c.useState)([]),Y=Object(o.a)(U,2),A=Y[0],H=Y[1],J=Object(c.useState)(),q=Object(o.a)(J,2),B=q[0],Q=q[1];Object(c.useEffect)((function(){(function(){var t=Object(a.a)(d().mark((function t(){var r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.kb)(e);case 2:r=t.sent,H(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.useEffect)((function(){(function(){var e=Object(a.a)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.jb)(C);case 2:t=e.sent,M(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[C]);var R=function(){var e=Object(a.a)(d().mark((function e(){var t,r,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,Object(l.y)(k);case 3:null!==(t=e.sent)&&(a=(r=[]).concat.apply(r,Object(n.a)(t)),L(a)),w(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(a.a)(d().mark((function e(t,r,a){var o,c,i,u;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(a),y(!0),e.next=4,Object(l.r)(r,t.target.value);case 4:return c=e.sent,s.b.info(c.status,{position:s.b.POSITION.TOP_RIGHT,autoClose:3e3,hideProgressBar:!1,pauseOnHover:!0}),y(!1),e.next=9,Object(l.y)(k);case 9:i=e.sent,u=(o=[]).concat.apply(o,Object(n.a)(i)),L(u);case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," Manage Orders "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}}," Manage Orders ")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"}," All Orders Details ")))),i.a.createElement("div",{className:"col-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-inline"},i.a.createElement("select",{onChange:function(e){return D(e.target.value)},className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-4 col-xl-4"},i.a.createElement("option",{selected:!0,disabled:!0},"Select SuperMaster"),null===A||void 0===A?void 0:A.map((function(e){return i.a.createElement("option",{value:e,key:e}," ",e," ")}))),i.a.createElement("select",{onChange:function(e){return _(e.target.value)},className:"form-control mb-2 mr-sm-2 col-md-10 col-lg-4 col-xl-4"},i.a.createElement("option",{selected:!0,disabled:!0},"Select Master"),null===I||void 0===I?void 0:I.map((function(e){return i.a.createElement("option",{value:e,key:e}," ",e," ")}))),i.a.createElement("button",{onClick:function(e){e.preventDefault(),R()},className:"btn btn-gradient-primary mb-2"},E?i.a.createElement("span",{className:"button-loader"}):"Show"))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"}," OrderDetails (",null===x||void 0===x?void 0:x.length,")"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Username "),i.a.createElement("th",null," Order ID "),i.a.createElement("th",null," Exchange "),i.a.createElement("th",null," Script | Expiry "),i.a.createElement("th",null," Type "),i.a.createElement("th",null," Trigger Price "),i.a.createElement("th",null," Quantity "),i.a.createElement("th",null," Placed on "),i.a.createElement("th",null," CF Status "),i.a.createElement("th",null," Status "),i.a.createElement("th",null," Discard "))),null===x||void 0===x?void 0:x.map((function(e,t){var r,n,a,o,c,l,u,s,d,f=new Date(e.asset.expiredat),h=f.getDate(),m=f.toLocaleString("default",{month:"short"}).toUpperCase(),v=f.getFullYear(),y="".concat(h).concat(m).concat(v),b=new Date(e.triggerat),g=b.getDate(),E=b.toLocaleString("default",{month:"short"}).toUpperCase(),w=b.getFullYear(),O=b.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),j="".concat(g).concat(E).concat(w," (").concat(O,")");return i.a.createElement("tbody",{key:e.order_id},i.a.createElement("tr",null,i.a.createElement("td",null," ",null!==(r=null===e||void 0===e?void 0:e.username)&&void 0!==r?r:"-"," "),i.a.createElement("td",null," ",null!==(n=null===e||void 0===e?void 0:e.order_id)&&void 0!==n?n:"-"," "),i.a.createElement("td",null," ",null!==(a=null===e||void 0===e?void 0:e.asset.exchange)&&void 0!==a?a:"-"," "),i.a.createElement("td",null," ",null!==(o=null===e||void 0===e?void 0:e.asset.symbol)&&void 0!==o?o:"-"," | ",null!==y&&void 0!==y?y:"-"," "),i.a.createElement("td",null," ",null!==(c=null===e||void 0===e?void 0:e.type)&&void 0!==c?c:"-"," "),i.a.createElement("td",null," ",null!==(l=null===e||void 0===e?void 0:e.triggerprice)&&void 0!==l?l:"-"," "),i.a.createElement("td",null," ",null!==(u=null===e||void 0===e?void 0:e.quantity)&&void 0!==u?u:"-"," "),i.a.createElement("td",null," ",null!==j&&void 0!==j?j:"-"," "),i.a.createElement("td",null," ",null!==(s=null===e||void 0===e?void 0:e.CFstatus)&&void 0!==s?s:"-"," "),i.a.createElement("td",null," ",null!==(d=null===e||void 0===e?void 0:e.order_status)&&void 0!==d?d:"-"," "),i.a.createElement("td",null," ",i.a.createElement("button",{disabled:p,onClick:function(r){return z(r,e.username,t)},value:e.order_id,className:"btn btn-primary"}," ",p&&B===t?i.a.createElement("span",{className:"button-loader"}):"Terminate"," ")," ")))})))))))))}}}]);
//# sourceMappingURL=19.6ecd0122.chunk.js.map