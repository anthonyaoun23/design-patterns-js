var task = {
  title: "my title",
  description: "my description"
};

Object.defineProperty(task, "toString", {
  value: function() {
    return this.title + " " + this.description;
  },
  writable: false,
  enumerable: true,
  configurable: true
});

// Object.create for inheritance
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, "toString", {
  value: function() {
    return this.title + " is urgent";
  },
  writable: false,
  enumerable: true,
  configurable: true
});

// writable was set to false in task object, but was redefined in the object itself so
// it's own definition will take precedence

// urgentTask is now it's own type of object

console.log(task.toString());
