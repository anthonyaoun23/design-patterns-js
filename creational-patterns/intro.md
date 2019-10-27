## Creational design patterns
Used to Construct New Objects
Adapting Creation to the Situation

### Constructor Pattern
Use to create new objects with their own object scope
Create new objects out of existing objects

### The new keyword
This creates a constructor function when it is put infront of a function
- creates a brand new object
- links to an object prototype
- Binds 'this' to the new object scope
- Implicitly returns this

```
// constructor pattern
// create objects from functions
function ObjectName(param1, param2){
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function () {
        return this.param1 + ' ' + this.param2
    }
    // the NEW keyword implicitly adds:
    return this;
    // ^
}

```

### Drawbacks
```
function ObjectName(param1, param2){
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function () {
        return this.param1 + ' ' + this.param2
    }
}
// this.toString is recreated all 4 times when we created 4 objects
// this is because we have not created Prototypes:
// an encapsulation of properties that an object links to
// this will make this pattern more efficient because we will not create the toString function every time we create this object
```

Creating prototypes make every object creating of that type to link back to the prototype... it will not recreate the same functions and properties for itself, it will link to the function that lives in its prototype's function definition


