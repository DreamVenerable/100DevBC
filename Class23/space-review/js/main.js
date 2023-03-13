//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr1 = [1,2,3,4,5].reduce( (acc, c) => acc + c, 0)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = nums => arr1.map( num => num**2 )
 
//Create a function that takes string
//Print the reverse of that string to the console
let unoRev = str => console.log( str.split('').reverse().join(''))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palinCheck = str => alert(str === str.split('').reverse().join(''))