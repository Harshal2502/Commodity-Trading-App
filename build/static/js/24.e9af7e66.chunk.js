(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[24],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"AddUser",(function(){return h}));var a=r(2),n=r(16),o=r(3),l=r(0),i=r.n(l),c=r(114),u=r(71),s=r(12),m=r(18),f=r(10);r(63);function p(){p=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,l=Object.create(o.prototype),i=new _(n||[]);return a(l,"_invoke",{value:x(e,r,i)}),l}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var m={};function f(){}function h(){}function d(){}var v={};c(v,o,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(C([])));g&&g!==t&&r.call(g,o)&&(v=g);var y=d.prototype=f.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;a(this,"_invoke",{value:function(a,o){function l(){return new t((function(n,l){!function a(n,o,l,i){var c=s(e[n],e,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,l,i)}),(function(e){a("throw",e,l,i)})):t.resolve(m).then((function(e){u.value=e,l(u)}),(function(e){return a("throw",e,l,i)}))}i(c.arg)}(a,o,n,l)}))}return n=n?n.then(l,l):l()}})}function x(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return L()}for(r.method=n,r.arg=o;;){var l=r.delegate;if(l){var i=P(l,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=s(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function P(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,P(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=d,a(y,"constructor",{value:d,configurable:!0}),a(d,"constructor",{value:h,configurable:!0}),h.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,l,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var l=new w(u(t,r,a,n),o);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},E(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=C,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return l.type="throw",l.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}var h=function(){var e=Object(m.c)((function(e){return e?{username:e.username}:{username:null}})).username,t=Object(l.useState)(!1),r=Object(o.a)(t,2),h=r[0],d=r[1],v=Object(l.useState)(!1),b=Object(o.a)(v,2),g=b[0],y=b[1],E=Object(l.useState)(!1),w=Object(o.a)(E,2),x=w[0],P=w[1],O=Object(u.a)({fullname:"",username:"",password:"",MCX_allow:!0,FONSE_allow:!0,brokereage_MCX:"200",brokereage_NFO:"200",profit_limit:"0",margin_limit:"500",admin:e}),N=Object(o.a)(O,2),_=N[0],C=N[1],L=function(e){var t=e.target,r=t.name,a=t.value;C(Object(n.a)({},r,a)),"MCX_allow"===r?d(!h):"FONSE_allow"===r&&y(!g)},k=function(){var e=Object(a.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),console.log(_),e.prev=2,e.next=5,Object(s.d)(_,_.admin);case 5:t=e.sent,f.b.success(t.message,{position:f.b.POSITION.TOP_RIGHT,autoClose:3e3,hideProgressBar:!1,pauseOnHover:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:P(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),j=[{value:"200",label:"Fix_Brkg"},{value:"0.1",label:"0.1 Paisa"},{value:"0.2",label:"0.2 Paisa"},{value:"0.3",label:"0.3 Paisa"},{value:"0.4",label:"0.4 Paisa"},{value:"0.5",label:"0.5 Paisa"},{value:"0.6",label:"0.6 Paisa"},{value:"0.7",label:"0.7 Paisa"},{value:"0.8",label:"0.8 Paisa"},{value:"0.9",label:"0.9 Paisa"},{value:"1",label:"1 Paisa"},{value:"1.5",label:"1.5 Paisa"},{value:"2",label:"2 Paisa"},{value:"2.5",label:"2.5 Paisa"},{value:"3",label:"3 Paisa"},{value:"3.5",label:"3.5 Paisa"},{value:"4",label:"4 Paisa"},{value:"4.5",label:"4.5 Paisa"},{value:"5",label:"5 Paisa"},{value:"6",label:"6 Paisa"},{value:"7",label:"7 Paisa"},{value:"8",label:"8 Paisa"},{value:"9",label:"9 Paisa"},{value:"10",label:"10 Paisa"}];return i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card "},i.a.createElement("div",{className:"card "},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Register a New User"),i.a.createElement("p",{className:"card-description"}," "),i.a.createElement("form",{className:"forms-sample"},i.a.createElement(c.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputUsername1"},"Full Name"),i.a.createElement(c.a.Control,{name:"fullname",value:_.fullname,onChange:L,type:"text",id:"exampleInputUsername1",placeholder:"Full name",size:"lg"})),i.a.createElement(c.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Unique User Code"),i.a.createElement(c.a.Control,{name:"username",value:_.username,onChange:L,type:"text",className:"form-control",id:"exampleInputEmail1",placeholder:"Unique User Code"})),i.a.createElement(c.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),i.a.createElement(c.a.Control,{name:"password",type:"password",value:_.password,onChange:L,className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),i.a.createElement(c.a.Group,null,i.a.createElement("label",null,"Select MCX"),i.a.createElement("select",{name:"MCX_allow",value:_.MCX_allow,onChange:L,class:"form-control"},i.a.createElement("option",{selected:!0,disabled:!0},"MCX Allow?"),i.a.createElement("option",{value:"true"},"Yes"),i.a.createElement("option",{value:"false"},"No"))),i.a.createElement(c.a.Group,null,i.a.createElement("label",null,"Select FONSE"),i.a.createElement("select",{name:"FONSE_allow",value:_.FONSE_allow,onChange:L,class:"form-control"},i.a.createElement("option",{selected:!0,disabled:!0},"FONSE Allow?"),i.a.createElement("option",{value:"true"},"Yes"),i.a.createElement("option",{value:"false"},"No"))),i.a.createElement(c.a.Group,null,i.a.createElement("label",null,"Brokerage for MCX"),i.a.createElement("select",{disabled:h,name:"brokereage_MCX",value:_.brokereage_MCX,onChange:L,class:"form-control"},i.a.createElement("option",{disabled:!0,selected:!0},"Select Brokerage for MCX"),null===j||void 0===j?void 0:j.map((function(e){return i.a.createElement("option",{value:e.value},e.label)})))),i.a.createElement(c.a.Group,null,i.a.createElement("label",null,"Brokerage for FONSE"),i.a.createElement("select",{disabled:g,name:"brokereage_NFO",value:_.brokereage_NFO,onChange:L,class:"form-control"},i.a.createElement("option",{disabled:!0,selected:!0},"Select Brokerage for NFO"),null===j||void 0===j?void 0:j.map((function(e){return i.a.createElement("option",{value:e.value},e.label)})))),i.a.createElement(c.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputConfirmPassword1"},"Profit Limit of User...! (0 = No Limit)"),i.a.createElement(c.a.Control,{name:"profit_limit",value:_.profit_limit,onChange:L,type:"number",className:"form-control",id:"exampleInputConfirmPassword1",placeholder:"0"})),i.a.createElement(c.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputConfirmPassword1"},"Margin Limit (X)"),i.a.createElement(c.a.Control,{name:"margin_limit",value:_.margin_limit,onChange:L,type:"number",className:"form-control",id:"exampleInputConfirmPassword1",placeholder:"500"})),i.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),k()},className:"btn btn-gradient-primary mr-2"},x?i.a.createElement("span",{className:"button-loader"}):"Register")))))))};t.default=h}}]);
//# sourceMappingURL=24.e9af7e66.chunk.js.map