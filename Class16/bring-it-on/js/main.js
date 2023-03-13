// *Variables*
// Create a variable and console log the value
const num1 = 1
console.log(num1)
// Create a variable, add 10 to it, and alert the value
let num2
num2 = num2 + 10
alert(num2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(a,b,c,d){
    alert(a - b - c - d)
}

sub4(7,6,5,4)
// Create a function that divides one number by another and returns the remainder
function div(a,b){
    return a % b
}

console.log(div(6,4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add2(a,b){
    if(a+b > 50){
        alert("Jumanji")
    }
}

add2(21,30)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult3(a,b,c){
    let prod = a*b*c
    if(prod % 3 === 0){
        alert("ZEBRA")
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNum(word, num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
    
}

wordNum("Hey Sweety", 7)