var React = require('react');

module.exports = React.createClass({
  render: function () {
    return React.DOM.html(
      {},
      React.DOM.head({}),
      React.DOM.body(
        {},
        React.DOM.div({}, 'test')
      )
    );
  }
});
