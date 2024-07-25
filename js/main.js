// Spread operator (...)
let mwero = { name:"Mwero", age:56}
// deep copying
// let abdalla = mwero
//shallow copy
// let abdalla = Object.assign({},mwero)

// shallow copy using spread operator
let abdalla = {...mwero} // {name""Mwero", age:56}

console.log({mwero, abdalla})

// abdalla.name ="Abdalla"
abdalla = {...abdalla, name:"Abdalla"}

console.log({mwero, abdalla})
// mwero.gen = "m"
mwero = {...mwero, gen:"m"}

console.log({mwero, abdalla})


//use to copy elements of array/objects
