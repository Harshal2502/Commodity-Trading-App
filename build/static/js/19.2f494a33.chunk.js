(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[19],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"Accounts",(function(){return s}));var n=r(2),a=r(5),o=r(0),c=r.n(o),i=r(16),l=r(17);function u(){u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,c=Object.create(o.prototype),i=new L(a||[]);return n(c,"_invoke",{value:x(e,r,i)}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var m={};function f(){}function h(){}function v(){}var p={};l(p,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==t&&r.call(g,o)&&(p=g);var b=v.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function c(){return new t((function(a,c){!function n(a,o,c,i){var l=d(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(s).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=N(c,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function N(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=d(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=l(v,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(b),l(b,i,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function s(){var e,t,r,s=Object(l.c)((function(e){return e?{username:e.username}:{username:null}})).username,d=Object(o.useState)(),m=Object(a.a)(d,2),f=m[0],h=m[1],v=Object(o.useState)(),p=Object(a.a)(v,2),y=p[0],g=p[1],b=Object(o.useState)(),E=Object(a.a)(b,2),w=(E[0],E[1]),x=Object(o.useState)(),N=Object(a.a)(x,2),j=N[0],O=N[1];Object(o.useEffect)((function(){L(),_()}),[]);var L=function(){var e=Object(n.a)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(s);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(n.a)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.y)(s);case 2:t=e.sent,console.log(t),O(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){k()}),[]);var k=function(){var e=Object(n.a)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.c)(s);case 2:t=e.sent,g(t.users);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"}," Account  "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Account ")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Your Account Details")))),c.a.createElement("div",{className:"col-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-inline"},c.a.createElement("select",{class:"form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9",onChange:function(e){w(e.target.value)},id:"subadmin_place_order_usercode"},c.a.createElement("option",{value:"all",selected:!0,disabled:!0},"Clients (All)"),null===y||void 0===y?void 0:y.map((function(e){return c.a.createElement("option",{value:e.username},e.username)}))),c.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary mb-2"},"Show"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Account (0)"),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," Payee Name "),c.a.createElement("th",null," Type "),c.a.createElement("th",null," Date "),c.a.createElement("th",null," Amount "))),c.a.createElement("tbody",null,j?j.map((function(e){var t,r,n,a=new Date(e.createdAt),o=a.getDate(),i=a.toLocaleString("default",{month:"short"}).toUpperCase(),l=a.getFullYear(),u="".concat(o).concat(i).concat(l);return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null," ",null===e||void 0===e||null===(t=e.payment_events)||void 0===t?void 0:t.payeename," "),c.a.createElement("td",null," ",null===e||void 0===e||null===(r=e.payment_events)||void 0===r?void 0:r.p_type," "),c.a.createElement("td",null," ",u," "),c.a.createElement("td",null," ",null===e||void 0===e||null===(n=e.payment_events)||void 0===n?void 0:n.price," ")))})):c.a.createElement("tr",null,c.a.createElement("td",null,"-"),c.a.createElement("td",null,"-"),c.a.createElement("td",{colSpan:"4"},"Nothing to see here yet!")))))))),c.a.createElement("div",{className:"col-12 grid-margin stretch-card",style:{marginBottom:0}},c.a.createElement("div",{className:"card btn btn-gradient-dark"},c.a.createElement("div",{className:"card-body text-center",style:{paddingBottom:0,paddingTop:"1rem",display:"flex",flexDirection:"row",justifyContent:"space-around"}},c.a.createElement("div",null,c.a.createElement("span",null,"Virtual Balance"),c.a.createElement("h4",null,null===f||void 0===f||null===(e=f.balance)||void 0===e?void 0:e.virtualbalance)),c.a.createElement("div",null,c.a.createElement("span",null,"Cash Balance"),c.a.createElement("h4",null,null===f||void 0===f||null===(t=f.balance)||void 0===t?void 0:t.cashbalance))))),c.a.createElement("div",{className:"col-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card btn btn-gradient-dark"},c.a.createElement("div",{style:{paddingTop:0,paddingBottom:"1rem"},className:"card-body text-center"},c.a.createElement("span",null," Available Balance "),c.a.createElement("h4",null,null===f||void 0===f||null===(r=f.balance)||void 0===r?void 0:r.availablebalance))))))}t.default=s}}]);
//# sourceMappingURL=19.2f494a33.chunk.js.map