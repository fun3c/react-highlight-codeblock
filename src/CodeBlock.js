import React from 'react';
import classnames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './styles/codeBlock.less';
class CodeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code:  ''
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
      code: e.target.value
    }, () => callback(this.state.code));
  }

  render() {
    const { code } = this.state;
    const { className, editer, language='jsx', style='', showLineNumbers=false } = this.props;
    const cls = classnames('precodebox', className);
    const preStyle = styles[style] || '';
    const lineNumberStyle = showLineNumbers ? { paddingLeft: 37 } : {};
    const enterStyle = Object.assign({}, preStyle.hljs, lineNumberStyle)

    return (
      <div className={cls}>
        {
          editer && <textarea
            value={code}
            className="invisible"
            style={enterStyle}
            onChange={e => this.onChange(e)}
          />
        }
        <SyntaxHighlighter
          language={language}
          style={preStyle}
          showLineNumbers={showLineNumbers}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }
};

export default CodeBlock;
