// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHol = 'Eid AlAdha'

favHol = 'Small Eid'.toUpperCase()

console.log(favHol)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'letters'
alert(str.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function num5(q,w,e,r,t){
    let num = 100 - q - w - e - r - t
    alert( Math.abs(num))
}

num5(10,20,30,40,50)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function num3(x,y,z){
    let min = Math.min(x,y,z)
    let max = Math.max(x,y,z)
    console.log(`Min is ${min}, Max is ${max}`)
}
num3(1,2,3)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails(){
//     let landed = Math.random()
//     landed > 0.5 ? console.log('Heads') : console.log('Tails')

// }
// headsOrTails()

const headsOrTails = _ => Math.random() > 0.5 ? 'Heads' : 'Tails'
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function num(n){
    for (let i = 0; i <= n; i++){
        let result = headsOrTails()
        console.log(result)
    }
}

num(10)