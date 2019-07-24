# React Highlight CodeBlock

[![NPM version](https://img.shields.io/npm/v/brick.js.svg?style=flat)](https://www.npmjs.org/package/brick.js) [![Build Status](https://travis-ci.org/brick-js/brick.js.svg?branch=master)](https://travis-ci.org/brick-js/brick.js)

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