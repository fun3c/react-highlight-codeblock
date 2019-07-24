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
    // const { code } = this.props;
    // this.setState({
    //     ...this.state.codeStr,
    //     codeStr: nextProps.code
    //   });
  }
  componentDidMount() {
    const { code } = this.props;
    this.setState({
      ...this.state.codeStr,
      codeStr: code
    });
  }
  onChange = (e) => {
    const { callback } = this.props;
    this.setState({
      codeStr: e.target.value
    }, () => callback(this.state.codeStr));
  }

  render() {
    const { codeStr } = this.state;
    const { className, editer, language='jsx', style='', showLineNumbers=false } = this.props;
    const cls = classnames('precodebox', className);
    const preStyle = styles[style] || '';
    const lineNumberStyle = showLineNumbers ? { paddingLeft: 37 } : {};
    const enterStyle = Object.assign({}, preStyle.hljs, lineNumberStyle)
    
    return (
      <div className={cls}>
        {
          editer && <textarea
            value={codeStr}
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
          {codeStr}
        </SyntaxHighlighter>
      </div>
    );
  }
};

export default CodeBlock;
