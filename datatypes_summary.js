// Primitive:
// 7 types : String, Number, BigInt, Boolean, Undefined, Null, Symbol

//BigInt : 
const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId); // false, because it's symbols

const bigNumber = 353593735744309735783473543753375n

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
       name : "sonu",
       age : 20,
}

const myFunct = function(){
    console.log("hello world")
}

// console.log(typeof(bigNumber))
// console.log(typeof(outsideTemp))


// Reference (Non-Primitive):
// Array, Objects, Functions

// console.log(typeof(myFunct)) // function
// console.log(typeof(heros)) // object
// console.log(typeof(myObj)) // object

// STACK AND HEAP : 

// Stack - (Primitive) and Heap - (Non Primitive)

let myYoutube = "SonuTech"
let anotherName = myYoutube
// console.log(anotherName)
anotherName = "SpreadingGyan" // call by value
// console.log(anotherName)
// console.log(myYoutube)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}
let userTwo = userOne
userTwo.email = "sonu@gmail.com" // call by reference
console.log(userOne.email)
console.log(userTwo.email)
