var Task = require("./task");

var notificationService = function() {
  var message = "Notifying ";
  this.update = function(task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

var loggingService = function() {
  var message = "Logging ";
  this.update = function(task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

var auditingService = function() {
  var message = "Auditing ";
  this.update = function(task) {
    console.log(message + task.user + " for task " + task.name);
  };
};

function ObserverList() {
  this.observerList = [];
}
ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};
ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};
ObserverList.prototype.count = function() {
  return this.observerList.length;
};
var ObservableTask = function(data) {
  Task.call(this, data);
  this.observers = new ObserverList();
};
ObservableTask.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

ObservableTask.prototype.notify = function(context) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i)(context);
  }
};

ObservableTask.prototype.save = function() {
  this.notify(this);
  Task.prototype.save.call(this);
};
var task1 = new ObservableTask({
  name: "create a demo for constructors",
  user: "Jon"
});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);

task1.save();
