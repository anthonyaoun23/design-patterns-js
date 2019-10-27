var taskHandler = require("./taskHandler");
var myrepo = require("./repo");

myrepo.save("fromMain");
myrepo.save("fromMain");
myrepo.save("fromMain");
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();

// commonjs
// modules are cached after the first time they are loaded. This means (among other things)
// that every call to require('foo') will get exactly the same object returned, if it would
// resolve to the same file

// If you want to have a module execute code multiple times, then export a function, and call that function

// mongoose, mongodb, express do the following
// module.exports = new repo;
// instead of module.exports = repo();
