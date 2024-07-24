// 3 string teplate literals & delimeters
let fname = "Mwero",
lname = "Abdalla"

let fullName = fname + " "+ lname //old ways  -concatnation
let newFullName = `${fname} ${lname}`  // back tics and delimeters

const getFullName = (name1 , name2) => `${name1} ${name2}`

console.log("Hello Mr getFullName('Jason', 'Statum')")
console.log(`Hello Mr ${getFullName('Jason', 'Statum')}`)
console.log("23 + 45 = "+ (23 + 45))
console.log(`23 + 45 = ${23 + 45}`)
/*Merits 
    - can easily include variables 
    - you can perform operations 
    - you can run functions
    - can create a multi-line string
*/

let mulStr = "Helo String 1" +
"\nLine 2"+
"\nLine 3"

console.log(mulStr)
const newMulStr = `Hello there from line 1
Line 2 is here
Line 3 is also here

Line five coming along
`


console.log(newMulStr)
console.log(fullName, newFullName)