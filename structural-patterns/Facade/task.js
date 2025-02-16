var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
};

var TaskService = (function() {
  return {
    complete: function(task) {
      task.completed = true;
      console.log("completing task: " + task.name);
    },
    setCompleteDate: function(task) {
      task.completedDate = new Date();
      console.log(task.name + " completed on " + task.completedDate);
    },
    notifyCompletion: function(task, user) {
      console.log("notifying " + user + " of the completion of " + task.name);
    },
    save: function(task) {
      console.log("saving Task: " + task.name);
    }
  };
})();

// var myTask = new Task({
//   name: "My Task",
//   priority: 1,
//   project: "Courses",
//   user: "Jon",
//   completed: false
// });

// TaskService.complete(myTask);
// if (myTask.completed == true) {
//   TaskService.setCompleteDate(myTask);
//   TaskService.notifyCompletion(myTask, myTask.user);
//   TaskService.save(myTask);
// }

// Create a wrapper/facade on top of this service to make our interaction look better
// Difference between facade and decorator: decorator: adds/manipulates functionality
// facade: cover up/create interface for interaction with service

var TaskServiceWrapper = (function() {
  var completeAndNotify = function(task) {
    TaskService.complete(myTask);
    if (myTask.completed == true) {
      TaskService.setCompleteDate(myTask);
      TaskService.notifyCompletion(myTask, myTask.user);
      TaskService.save(myTask);
    }
  };
  return {
    completeAndNotify: completeAndNotify
  };
})();

var myTask = new Task({
  name: "My Task",
  priority: 1,
  project: "Courses",
  user: "Jon",
  completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
