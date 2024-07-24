// 4.1 destruring objects
const user = {
  firstName: "Mwero",
  lastName: "Abdalla",
  age: 56,
  address:{
    box:19,
    town:"Mazeras",
    code:80114
  }
};

let fName = user.firstName,
lName = user.lastName
console.log(fName, lName)

// destructuring
// const {age, lastName,firstName} = user
// console.log(age, lastName, firstName)
const {address:{town}} = user
console.log(town)