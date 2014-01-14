var React = require('react');
var Foo = require('./foo');

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
        </head>
        <body>
          <div>{this.props.test}</div>
          <Foo>baz</Foo>
        </body>
      </html>
    )
  }
});
