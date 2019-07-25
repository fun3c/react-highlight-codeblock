# React Highlight CodeBlock

[![](https://travis-ci.org/fun3c/react-highlight-codeblock.svg?branch=master)](https://travis-ci.org/fun3c/react-highlight-codeblock)
[![](https://img.shields.io/npm/dt/react-highlight-codeblock.svg)](https://travis-ci.org/fun3c/react-highlight-codeblock)
[![](https://img.shields.io/npm/l/react-highlight-codeblock.svg)](https://travis-ci.org/fun3c/react-highlight-codeblock)
[![](https://img.shields.io/github/followers/fun3c.svg)](https://travis-ci.org/fun3c/react-highlight-codeblock)
[![](https://img.shields.io/github/forks/fun3c/react-highlight-codeblock.svg)](https://travis-ci.org/fun3c/react-highlight-codeblock)




Syntax highlighting component based on `react-syntax-highlighter` development.

### Install

`npm install react-highlight-codeblock --save`



### Usage
`import CodeBlock from 'react-highlight-codeblock'`

### Syntax highlighting of single code snippet

```js
<CodeBlock
    code={strCode}
    callback={code => console.log(code)}
    editer={true}
    language="html"
    style="monokai"
    showLineNumbers={false}
/>
```

#### props
- `code` - code snippet presentation and editing.
- `editer` - default to false, is it editable.
- `style` - the style to highlight code in. Available options [here for hljs](https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD).do not use the default style.
- `language` - the language to highlight code in. Available options [here for hljs](https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD) .
- `callback` is used with the `editer` attribute as a post-edit callback function.
- `showLineNumbers` if this is enabled line numbers will be shown next to the code block.