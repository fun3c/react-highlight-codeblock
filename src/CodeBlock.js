import React from 'react';
import classnames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './styles/codeBlock.less';
class CodeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeStr:  ''
    };
  }
  componentWillReceiveProps(nextProps) {
    const { code } = this.props;
    if (code !== nextProps.code) {
      this.setState({ code: nextProps.code });
    }
  }
  onChange = (e) => {
    const { callback } = this.props;
    this.setState({
      codeStr: e.target.value
    }, () => callback(this.state.codeStr));
  }

  render() {
    const { codeStr } = this.state;
    const { code, className, editer, language='jsx', style='', showLineNumbers=false } = this.props;
    const cls = classnames('precodebox', className);
    const codeStyle = styles[style] || styles.defaultStyle; // ['agate', 'ascetic', 'brownPaper']
    const lineNumberStyle = showLineNumbers ? { paddingLeft: 37 } : {};
    const textareaStyle = Object.assign({}, codeStyle.hljs, lineNumberStyle)
    const value = codeStr || code;
    for (let key in codeStyle) {
      const obj = codeStyle[key];
      if (obj.fontWeight === 'bold') {
        obj.fontWeight = 400;
      }
    }
    return (
      <div className={cls}>
        {
          editer && <textarea
            value={value}
            className="invisible"
            style={textareaStyle}
            onChange={e => this.onChange(e)}
          />
        }
        <SyntaxHighlighter
          language={language}
          style={codeStyle}
          customStyle={{fontWight: 'normal'}}
          showLineNumbers={showLineNumbers}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    );
  }
};

export default CodeBlock;
