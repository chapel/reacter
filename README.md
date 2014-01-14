reacter
=======

React in your node ftw

A simple wrapper around React to allow for easy compiling of React components.

It has an optional opt-in dynamic jsx transformer through require.extensions, this allows you to require jsx files directly but it is optional and you should compile your jsx files to pure js.

# Usage

```js
// index.js

var Reacter = require('reacter');

var component = Reacter.require('./component');

component('foo');
```

```js
// component.jsx

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
        </head>
        <body>
          <div>{this.props}</div>
        </body>
      </html>
    )
  }
});
```

```html
<html data-reactid=".r[12f6g]" data-react-checksum="1269905059">
  <head data-reactid=".r[12f6g].[0]"></head>
  <body data-reactid=".r[12f6g].[1]">
    <div data-reactid=".r[12f6g].[1].[0]">foo</div>
  </body>
</html>
```
