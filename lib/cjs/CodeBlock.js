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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    key: "componentDidMount",
    value: function componentDidMount() {
      var code = this.props.code;
      this.setState(_objectSpread({}, this.state.codeStr, {
        codeStr: code
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var codeStr = this.state.codeStr;
      var _this$props = this.props,
          className = _this$props.className,
          editer = _this$props.editer,
          _this$props$language = _this$props.language,
          language = _this$props$language === void 0 ? 'jsx' : _this$props$language,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? '' : _this$props$style,
          _this$props$showLineN = _this$props.showLineNumbers,
          showLineNumbers = _this$props$showLineN === void 0 ? false : _this$props$showLineN;
      var cls = (0, _classnames["default"])('precodebox', className);
      var preStyle = styles[style] || '';
      var lineNumberStyle = showLineNumbers ? {
        paddingLeft: 37
      } : {};
      var enterStyle = Object.assign({}, preStyle.hljs, lineNumberStyle);
      return _react["default"].createElement("div", {
        className: cls
      }, editer && _react["default"].createElement("textarea", {
        value: codeStr,
        className: "invisible",
        style: enterStyle,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        }
      }), _react["default"].createElement(_reactSyntaxHighlighter["default"], {
        language: language,
        style: preStyle,
        showLineNumbers: showLineNumbers
      }, codeStr));
    }
  }]);
  return CodeBlock;
}(_react["default"].Component);

;
var _default = CodeBlock;
exports["default"] = _default;
//# sourceMappingURL=CodeBlock.js.map