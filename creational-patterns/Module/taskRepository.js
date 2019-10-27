var repo = function() {
  var db = {};

  // do all db work here, and because of the way js clojures work,
  // only the method in the module will have access directly to the db instance

  // alternate method
  // revealing module pattern
  var get = function(id) {
    console.log("Getting task " + id);
    return {
      name: "new task from db"
    };
  };

  var save = function(task) {
    console.log("Saving " + task.name + " to the db");
  };
};

return {
  get: get,
  save: save
};

module.exports = repo();
