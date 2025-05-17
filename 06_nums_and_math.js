const score = 400
// console.log(score)

// const balance = new Number(100) // create a number object
// console.log(balance)

// console.log(balance.toString().length) // convert number to string and get length
// console.log(balance.toFixed(2)) // convert number to string with 2 decimal places

// const otherNum = 23.8966
// console.log(otherNum.toPrecision(3)) // convert number to string with 3 significant digits

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) // convert number to string with locale format

// MATHS:
// console.log(Math)
// console.log(Math.abs(-4)) // absolute value
// console.log(Math.ceil(4.2)) // round up
// console.log(Math.floor(4.9)) // round down
// console.log(Math.round(4.5)) // round to nearest integer
// console.log(Math.max(1,2,3,4,5,9)) // maximum value
// console.log(Math.min(1,2,3,4,5,9)) // minimum value

console.log(Math.random()) // random number between 0 and 1
console.log(Math.random() * 10) // random number between 0 and 10
console.log(Math.floor(Math.random() * 10)) // random integer between 0 and 10

const min = 10
const max = 20
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min // random integer between min and max
console.log(randomNum) // random integer between 10 and 20