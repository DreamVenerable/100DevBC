// *Variables*
// Create a variable and console log the value
const favDrink = 'Coffee'
console.log(favDrink)
// Create a variable, add 10 to it, and alert the value
let num = 0
num = num + 10
alert(num)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num1, num2, num3, num4) {
    const minsum = num1 - num2 - num3 - num4
    alert(minsum)
}
sub4(10, 1, 2, 4)
// Create a function that divides one number by another and returns the remainder
function divrem(num1, num2) {
    return num1 % num2
}
divrem(26, 3)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add2(a, b){
    const sum = a + b
    if (sum > 50) {
        alert('Jumanji')
    }
}
add2(50, 1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult(a, b, c){
    const product = a * b * c
    if (product % 3 === 0) {
        alert('ZEBRA')
    }
}
mult(1, 2, 3)