var Task = function(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log("completing task: " + this.name);
};

Task.prototype.save = function() {
  console.log("saving task: " + this.name);
};

var myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
  //super()
  Task.call(this, name);
  this.priority = priority;
};

var ut = new UrgentTask("This is urgent", 1);
// UrgentTask does not have Task as a prototype so we cannot call complete() or save()
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function() {
  console.log("notifying important people");
};

UrgentTask.prototype.save = function() {
  this.notify();
  console.log("do special stuff before saving");
  Task.prototype.save.call(this);
};
var ut2 = new UrgentTask("This is urgent 2", 2);

ut2.complete();
ut2.save();
