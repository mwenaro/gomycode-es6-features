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

