(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"18":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(2)),i=a(62),c=a(69),s=_interopRequireDefault(a(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(229);var u=function(e){function TagPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TagPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TagPage.__proto__||Object.getPrototypeOf(TagPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"tagList":[{"name":"tag-1","active":!1},{"name":"tag-2","active":!1},{"name":"tag-3","active":!0},{"name":"tag-4","active":!0}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TagPage,n.default.Component),l(TagPage,[{"key":"onClick","value":function onClick(e){var t=this.state.tagList,a=this.state.tagList.findIndex(function(t){return t.name===e.name}),l=!t[a].active,r="您点击的 tag 标签名是："+e.name+"，点击前是否选中："+e.active+"，点击后："+l;t[a].active=l,this.setState({"tagList":t}),n.default.getEnv()===n.default.ENV_TYPE.WEB?alert(r):n.default.showModal({"content":r,"showCancel":!1}),console.log(e)}},{"key":"render","value":function render(){var e=this;return r.default.createElement(i.View,{"className":"page"},r.default.createElement(s.default,{"title":"Tag 标签"}),r.default.createElement(i.View,{"className":"doc-body"},r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"空心标签"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"circle":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,null,"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"circle":!0,"active":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"active":!0},"标签"))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"实心标签"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"type":"primary","circle":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"type":"primary"},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"type":"primary","circle":!0,"active":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"type":"primary","active":!0},"标签"))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"点击事件"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},this.state.tagList.map(function(t,a){return r.default.createElement(i.View,{"className":"subitem","key":a},r.default.createElement(c.AtTag,{"name":t.name,"type":"primary","active":t.active,"circle":a%2==0,"onClick":e.onClick.bind(e)},"tag-",a+1))})))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"不可点击态"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"type":"primary","circle":!0,"disabled":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"type":"primary","disabled":!0},"标签"))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"空心标签（小）"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","circle":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small"},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","circle":!0,"active":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","active":!0},"标签"))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"实心标签（小）"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","type":"primary","circle":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","type":"primary"},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","type":"primary","circle":!0,"active":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","type":"primary","active":!0},"标签"))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"不可点击态（小）"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","type":"primary","circle":!0,"disabled":!0},"标签")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(c.AtTag,{"size":"small","type":"primary","disabled":!0},"标签")))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),TagPage}();t.default=u},"229":function(e,t,a){},"64":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(1),r=(_interopRequireDefault(n),_interopRequireDefault(a(2))),i=_interopRequireDefault(a(63)),c=a(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(65);var s=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.Component),l(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(c.View,{"className":"doc-header"},r.default.createElement(c.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=s,s.defaultProps={"title":"标题"},s.propTypes={"title":i.default.string}},"65":function(e,t,a){}}]);