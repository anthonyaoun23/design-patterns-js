// this pattern is used in the gulp-load-plugin npm package
// this way, all the repos are instantiated when this repoFactory is required.
var repoFactory = function() {
  var repos = this;
  var repoList = [
    { name: "task", source: "./taskRepository" },
    { name: "user", source: "./userRepository" },
    { name: "project", source: "./projectRepository" }
  ];

  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)();
  });
};

module.exports = new repoFactory();
