// Rest operations
const student = {
  name: "Mwero",
  amd: 1570,
  marks: {
    eng: 80,
    mat: 92,
    swa: 72,
    sci: 88,
    ssre: 83,
  },
};
// const { marks, ...rest } = student;

// console.log({ marks });
// console.log({ rest });

// console.log({ student });

const hobbies = [
  "feeding",
  "playing football",
  "reading storybooks",
  "programming",
];

const [first,second,third, ...others] = hobbies
console.log(first)
console.log(others)

// used in functions to gathers all the passed functions args into a array
const sum = (...nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }

  return result;
};

let total = sum(12,2,10,89,11);

console.log(total)
