// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood
favFood = 'Pizza'
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let strin = 'cat'
alert(strin[1])
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function num3(a,b,c) {
    alert(a/b*c)
}
num3()
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function num1(a) {
    //console.log(a/a/a)
    console.log( Math.cbrt(a).toFixed(4))
}
num1()
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkMonth(month) {
    let monthLowerCase = month.toLowerCase()
    monthLowerCase === 'june' || 
    monthLowerCase === 'july' || 
    monthLowerCase === 'august' 
    ? alert('YAY') 
    : alert('Booo')
}
checkMonth()
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}
skipFive(31)