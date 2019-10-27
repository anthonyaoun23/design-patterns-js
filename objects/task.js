// var task = Object.create(Object.prototype);
var task = { title: "My title", description: "My description" };

// task.title = "My task";
// task.description = "My description";
task.toString = function() {
  return this.title + " " + this.description;
};

console.log(task.toString());
