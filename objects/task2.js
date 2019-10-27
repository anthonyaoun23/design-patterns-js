var task = {
  title: "my title",
  description: "my description"
};

// Object.defineProperty(task, "toString", {
//   value: function() {
//     return this.title + " " + this.description;
//   },
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// writable
// task.toString = "hi";
// would break because task.toString() is not a function

Object.defineProperty(task, "toString", {
  value: function() {
    return this.title + " " + this.description;
  },
  writable: false,
  enumerable: true,
  configurable: true
});

// writable: false,
// now, setting task.toString = x would not be allowed

// enumerable
// enumerable: false
Object.keys(task);
// doesn't return toString as a key
// you can easily change this
Object.defineProperty(task, "toString", {
  enumerable: true
});
// now toString will return as a key
// however this would not work if writable: false

console.log(task.toString());
