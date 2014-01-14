var fs = require('fs');
var React = require('react');
var transform = require('./transform');

var CACHE = {};

/**
 * Pulled from joyent/node/lib/module.js#453
 */
function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

function addExtension() {
  require.extensions['.jsx'] = function (module, filename) {
    var content = fs.readFileSync(filename, 'utf8');
    content = transform(content);
    module._compile(stripBOM(content), filename);
  };
}

function createRenderFn(classMod) {
  function render(props) {
    var renderedResult;
    React.renderComponentToString(
      classMod(props),
      function (str) {
        renderedResult = str;
      }
    );
    return renderedResult;
  }
  return render;
}

function internalRequire(requirePath) {
  var reactClass = CACHE[requirePath];
  if (reactClass) {
    return reactClass;
  }

  var classMod;
  try {
    classMod = require(requirePath);
  } catch(err) {
    err.message += ' - Use React.addExtension() to add support for jsx files';
    throw err;
  }

  reactClass = createRenderFn(classMod);

  CACHE[requirePath] = reactClass;

  return reactClass;
}

module.exports = {
  addExtension: addExtension,
  require: internalRequire
};
