var Reacter = require('./');

//Reacter.addExtension();

var test = Reacter.require('./views/jsx');

console.log(test({test: '<script>alert(\'foo\');</script>'}));
