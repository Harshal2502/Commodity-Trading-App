(window["webpackJsonpbroker-trade"]=window["webpackJsonpbroker-trade"]||[]).push([[1],{117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(128),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o,r=n(132);var a=((o=r)&&o.__esModule?o:{default:o}).default,l=a.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=a.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=a.canUseDOM?window.NodeList:{},t.canUseDOM=a.canUseDOM;t.default=l},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){return[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]).filter(l)};var o=/input|select|textarea|button|object|iframe/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var n=window.getComputedStyle(e),o=n.getPropertyValue("display");return t?"contents"!==o&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,n):"none"===o}catch(r){return console.warn("Failed to inspect element style"),!1}}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),r(t))return!1;t=t.parentNode}return!0}(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(s).forEach((function(e){return e.removeAttribute("aria-hidden")})));s=null},t.log=function(){0},t.assertNodeList=u,t.setElement=function(e){var t=e;if("string"===typeof t&&l.canUseDOM){var n=document.querySelectorAll(t);u(n,t),t=n}return s=t||s},t.validateElement=i,t.hide=function(e){var t=!0,n=!1,o=void 0;try{for(var r,a=i(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.setAttribute("aria-hidden","true")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},t.show=function(e){var t=!0,n=!1,o=void 0;try{for(var r,a=i(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.removeAttribute("aria-hidden")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=function(){s=null};var o,r=n(62),a=(o=r)&&o.__esModule?o:{default:o},l=n(120);var s=null;function u(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function i(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(r.openInstances.length),r.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){r=new o};var o=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},r=new o;t.default=r},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),l=h(a),s=h(n(31)),u=h(n(14)),i=h(n(129)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(123)),f=n(120),d=h(f),p=n(72);function h(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var y=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",O=f.canUseDOM&&void 0!==s.default.createPortal,C=function(e){return document.createElement(e)},g=function(){return O?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var E=function(e){function t(){var e,n,r;v(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.removePortal=function(){!O&&s.default.unmountComponentAtNode(r.node);var e=w(r.props.parentSelector);e&&e.contains(r.node)?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=g()(r,l.default.createElement(i.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},m(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){f.canUseDOM&&(O||(this.node=C("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!O&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(f.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=n.prevParent,s=n.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&!O&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&O?(!this.node&&O&&(this.node=C("div")),g()(l.default.createElement(i.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);E.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(d.default),u.default.instanceOf(f.SafeHTMLCollection),u.default.instanceOf(f.SafeNodeList),u.default.arrayOf(u.default.instanceOf(d.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func},E.defaultProps={isOpen:!1,portalClassName:y,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return l.default.createElement("div",e,t)},contentElement:function(e,t){return l.default.createElement("div",e,t)}},E.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(E),t.default=E},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),s=m(n(14)),u=v(n(130)),i=m(n(131)),c=v(n(123)),f=v(n(133)),d=n(120),p=m(d),h=m(n(124));function v(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function m(e){return e&&e.__esModule?e:{default:e}}n(134);var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName,l=e.parentSelector,s=l&&l().ownerDocument||document;a&&f.remove(s.body,a),r&&f.remove(s.getElementsByTagName("html")[0],r),o&&b>0&&0===(b-=1)&&c.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(u.returnFocus(n.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),h.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(u.setupScopedFocus(n.node),u.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,i.default)(n.content,e),n.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===("undefined"===typeof t?"undefined":r(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"===typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName,a=e.parentSelector,l=a&&a().ownerDocument||document;r&&f.add(l.body,r),o&&f.add(l.getElementsByTagName("html")[0],o),n&&(b+=1,c.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,l=e.children,s=n?{}:a.content,u=r?{}:a.overlay;if(this.shouldBeClosed())return null;var i={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},u,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),f=this.props.contentElement(c,l);return this.props.overlayElement(i,f)}}]),t}(l.Component);O.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},O.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(d.SafeHTMLCollection),s.default.instanceOf(d.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=O,e.exports=t.default},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){l=[]},t.log=function(){0},t.handleBlur=i,t.handleFocus=c,t.markForFocusLater=function(){l.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==l.length&&(t=l.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){l.length>0&&l.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",i,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",i),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",i),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",i),document.detachEvent("onFocus",c))};var o,r=n(122),a=(o=r)&&o.__esModule?o:{default:o};var l=[],s=null,u=!1;function i(){u=!0}function c(){if(u){if(u=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,a.default)(s)[0]||s).focus()}),0)}}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,r=t.shiftKey,l=n[0],s=n[n.length-1],u=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return t.activeElement.shadowRoot?e(t.activeElement.shadowRoot):t.activeElement}();if(e===u){if(!r)return;o=s}s!==u||r||(o=l);l===u&&r&&(o=s);if(o)return t.preventDefault(),void o.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==i||"Chrome"==i[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var c=n.indexOf(u);c>-1&&(c+=r?-1:1);if("undefined"===typeof(o=n[c]))return t.preventDefault(),void(o=r?s:l).focus();t.preventDefault(),o.focus()};var o,r=n(122),a=(o=r)&&o.__esModule?o:{default:o};e.exports=t.default},132:function(e,t,n){var o;!function(){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in o)a(e,o[t]);var n=document.body;for(var l in r)a(n,r[l]);o={},r={}},t.log=function(){0};var o={},r={};function a(e,t){e.classList.remove(t)}t.add=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),n.add(e)}));var n,a},t.remove=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&n.remove(e)}));var n,a}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[l,s],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}l=s=null,u=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(u.length);for(var e=[l,s],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var o,r=n(124),a=(o=r)&&o.__esModule?o:{default:o};var l=void 0,s=void 0,u=[];function i(){0!==u.length&&u[u.length-1].focusContent()}a.default.subscribe((function(e,t){l||s||((l=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),l.style.position="absolute",l.style.opacity="0",l.setAttribute("tabindex","0"),l.addEventListener("focus",i),(s=l.cloneNode()).addEventListener("focus",i)),(u=t).length>0?(document.body.firstChild!==l&&document.body.insertBefore(l,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(l.parentElement&&l.parentElement.removeChild(l),s.parentElement&&s.parentElement.removeChild(s))}))}}]);
//# sourceMappingURL=1.603dfdb6.chunk.js.map