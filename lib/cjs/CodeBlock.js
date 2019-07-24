"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSyntaxHighlighter = _interopRequireDefault(require("react-syntax-highlighter"));

var styles = _interopRequireWildcard(require("react-syntax-highlighter/dist/esm/styles/hljs"));

var CodeBlock =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CodeBlock, _React$Component);

  function CodeBlock(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CodeBlock);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CodeBlock).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      var callback = _this.props.callback;

      _this.setState({
        codeStr: e.target.value
      }, function () {
        return callback(_this.state.codeStr);
      });
    });
    _this.state = {
      codeStr: ''
    };
    return _this;
  }

  (0, _createClass2["default"])(CodeBlock, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var code = this.props.code;

      if (code !== nextProps.code) {
        this.setState({
          code: nextProps.code
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var codeStr = this.state.codeStr;
      var _this$props = this.props,
          code = _this$props.code,
          className = _this$props.className,
          editer = _this$props.editer,
          _this$props$language = _this$props.language,
          language = _this$props$language === void 0 ? 'jsx' : _this$props$language,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? '' : _this$props$style,
          _this$props$showLineN = _this$props.showLineNumbers,
          showLineNumbers = _this$props$showLineN === void 0 ? false : _this$props$showLineN;
      var cls = (0, _classnames["default"])('precodebox', className);
      var codeStyle = styles[style] || styles.defaultStyle; // ['agate', 'ascetic', 'brownPaper']

      var lineNumberStyle = showLineNumbers ? {
        paddingLeft: 37
      } : {};
      var textareaStyle = Object.assign({}, codeStyle.hljs, lineNumberStyle);
      var value = codeStr || code;

      for (var key in codeStyle) {
        var obj = codeStyle[key];

        if (obj.fontWeight === 'bold') {
          obj.fontWeight = 400;
        }
      }

      return _react["default"].createElement("div", {
        className: cls
      }, editer && _react["default"].createElement("textarea", {
        value: value,
        className: "invisible",
        style: textareaStyle,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        }
      }), _react["default"].createElement(_reactSyntaxHighlighter["default"], {
        language: language,
        style: codeStyle,
        customStyle: {
          fontWight: 'normal'
        },
        showLineNumbers: showLineNumbers
      }, value));
    }
  }]);
  return CodeBlock;
}(_react["default"].Component);

;
var _default = CodeBlock;
exports["default"] = _default;
//# sourceMappingURL=CodeBlock.js.map