const name = "sonu"
const repoCount = 50
// console.log(name + repoCount + " value")
// console.log(`Hello! My name is ${name} and my repo count is ${repoCount}`) // string interpolation

const gamename = new String("sonu-hc-kumar")
// console.log(gamename)
// console.log(gamename[0])
// console.log(gamename.__proto__) // prototype of the string object

// console.log(gamename.length) // length of the string
// console.log(gamename.toUpperCase()) // convert to uppercase
// console.log(gamename.charAt(2)) // get character at index 2
// console.log(gamename.indexOf("u")) // get index of character u

const newString = gamename.substring(0,4) // get substring from index 0 to 4
// console.log(newString)

const anotherString = gamename.slice(-3,5) // get substring from index -8 to 4
// console.log(anotherString) 

const newString2 = "    sonu    "
console.log(newString2)
console.log(newString2.trim()) // remove whitespace from both sides

const url = "https://sonu%20kumar.com"
console.log(url.replace('%20','-')) // replace %20 with -
console.log(url.includes('sonu')) // check if string includes sonu
console.log(url.includes('ram')) // check if string includes ram

console.log(gamename.split('-')) // split string by -
