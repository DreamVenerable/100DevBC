//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub2(a, b){
    alert(a - b)
}

sub2(2, 1)
//create a function that divides three numbers and console logs the quotient
function div3(a, b, c){
    console.log(a / b / c)
}

div3(20, 3, 2)
//create a function that multiplys three numbers and returns the product
function mult3(a, b, c){
    return a * b * c
}

mult3(2, 3, 4)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function num3(a, b, c){
    return a + b % c
}

num3(20, 3, 2)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function take4(a,b,c,d){
    if (a * b > 100){
        console.log(c + d)
    } else if (a * b < 100) {
        console.log(c - d)
    } else {
        alert(a * b * c % d)
    }
}

take4()
