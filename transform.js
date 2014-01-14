var block = require('jstransform/src/docblock');
var transform = require('react-tools').transform;

var jsxPragma = '/** @jsx React.DOM */';

module.exports = function (data) {
  var isJSX = typeof block.parseAsObject(block.extract(data)).jsx !== 'undefined';

  if (isJSX) {
    return transform(data);
  } else {
    return transform(jsxPragma + data).replace(jsxPragma, '');
  }
};
