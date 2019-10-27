var Task = require("./task");
// create copies of Task object
var task1 = new Task("create a demo for constructors");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singletons");
var task4 = new Task();

task1.complete();
task2.save();
task3.save();
task4.save();
