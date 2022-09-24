////////////////////////////////////////////
// BLOCKCHAIN MODULE 1
////////////////////////////////////////////

// This is a comment. Only humans see me.
// First data type: string
// collection of characters
console.log(typeof "hello")

// 4 steps of programming
// 1. data types <> vocab
// 2. methods <> rules for part of speech
// 3. logic <> grammar/sentence structure
// 4. library <> templates

// Methods for string
console.log("hello".toUpperCase())

console.log("hello".toLowerCase())

// .replace()
console.log("TerraUST price: $1".replace("1", "0.05"))

// .split()
console.log("btc eth sol".split(" "))

// indexing
console.log("hello"[0])

// slicing
console.log("tesla to the moon!".slice(0, 5))

// second data type: number
console.log(typeof 10)
console.log(typeof 15.44354)
console.log(5 / 2)
console.log(2 ** 4)

// third data type: boolean
console.log(typeof true)
console.log(typeof false)

// comparators: >, <, <=, >=
console.log(1 < 2) //true
console.log(1 > 3) //false
console.log(2 <= 2) //true

// variable assignment
// ... variableName = ...

// immutable variable
const terraUSTPrice = 1
console.log("Terra UST Price:", terraUSTPrice)

// error because we try to reassign a const
// terraUSTPrice = 0.05

// mutable variable (var is the old let, not used much now)
let btcPrice = 60000
console.log("Bitcoin Price:", btcPrice)

btcPrice = 24000
console.log("Bitcoin Price:", btcPrice)


