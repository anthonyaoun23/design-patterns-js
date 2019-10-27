var repo = function() {
  var get = function(id) {
    console.log("Getting task " + id);
    return {
      name: "new task from db"
    };
  };

  var save = function(task) {
    console.log("Saving " + task.name + " to the db");
  };

  console.log("newing up a task");
  return {
    get: get,
    save: save
  };
};

module.exports = repo;
