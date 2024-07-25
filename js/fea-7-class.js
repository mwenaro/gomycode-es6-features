//classes

// b4 claaeds
// 1. object leteral
let person = {};
person.age = 45;
person.name = "mwero";
console.log({ person });

// 2. the new Object
let person2 = new Object();
person2.gen = "m";
person2.isAdmin = false;
console.log({ person2 });

//3. the function Constructor
function Person3(fname, lname) {
  this.fname = lname;
  this.lname = lname;
}

let person3 = new Person3("Rashid", "Mangale");
console.log({ person3 });

// Now - es6 class
class Student {
  constructor(position, yob) {
    this.position = position;
    this.yob = yob;
  }

  //   getPosition
  getPosition() {
    return this.position;
  }

  // set Position
  setPosition(pos) {
    this.position = pos;
  }
}

let person4 = new Student('dev',1980)
console.log({person4})
