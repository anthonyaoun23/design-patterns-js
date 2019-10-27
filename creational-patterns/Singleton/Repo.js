var repo = function() {
  var called = 0;

  var save = function(task) {
    called++;
    console.log("Saving " + task + " Called " + called + " times");
  };
  console.log("newing up task repo");
  return {
    save: save
  };
};

module.exports = repo();
// instanciating the repo when exporting it effectively creates a singleton pattern
// since the require('./Repo') caches the export
