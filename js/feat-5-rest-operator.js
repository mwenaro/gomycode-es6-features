// 5 . Rest operator
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

  const {address,firstName, ...rest} = user
  console.log(rest)