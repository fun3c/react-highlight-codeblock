import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
      var cls = classnames('precodebox', className);
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

      return React.createElement("div", {
        className: cls
      }, editer && React.createElement("textarea", {
        value: value,
        className: "invisible",
        style: textareaStyle,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        }
      }), React.createElement(SyntaxHighlighter, {
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
}(React.Component);

;
export default CodeBlock;
//# sourceMappingURL=CodeBlock.js.map