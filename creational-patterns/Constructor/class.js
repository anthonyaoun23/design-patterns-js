"use strict";
// access to some of ecmascript 2015 features

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    console.log("completing task: " + this.name);
    this.completed = true;
  }
  save() {
    console.log("saving Task: " + this.name);
  }
}
// this does exactly the same thing as we do in task.js
// it just allows for more java devs to be comfortable
// you can use babel to transpile this code to ES5
// this file would come out something like the task.js file
