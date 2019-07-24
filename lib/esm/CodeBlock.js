import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import classnames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/codeBlock.css";

var CodeBlock =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CodeBlock, _React$Component);

  function CodeBlock(props) {
    var _this;

    _classCallCheck(this, CodeBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CodeBlock).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
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

  _createClass(CodeBlock, [{
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
      var cls = classnames('precodebox', className);
      var preStyle = styles[style] || '';
      var lineNumberStyle = showLineNumbers ? {
        paddingLeft: 37
      } : {};
      var enterStyle = Object.assign({}, preStyle.hljs, lineNumberStyle);
      return React.createElement("div", {
        className: cls
      }, editer && React.createElement("textarea", {
        value: codeStr,
        className: "invisible",
        style: enterStyle,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        }
      }), React.createElement(SyntaxHighlighter, {
        language: language,
        style: preStyle,
        showLineNumbers: showLineNumbers
      }, codeStr));
    }
  }]);

  return CodeBlock;
}(React.Component);

;
export default CodeBlock;
//# sourceMappingURL=CodeBlock.js.map