// *Variables*
// Declare a variable, assign it a value, and alert the value
const val = 40
alert(val)
// Create a variable, divide it by 10, and console log the value
let nums = 50
nums = nums / 10
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function mult3(a,b,c){
    alert(a*b*c)
}
mult3(1,2,3)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNum(a,b,c,d){
    let prod = a + b - c - d
    console.log(prod)
}

fourNum(1,2,3,4)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNum(a,b,c){
    let prob = 100
    prob = prob + a - b / c
    if (prob > 25){
        console.log('WE HAVE A WINNNA')
    }
}

threeNum(2,3,4)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function takeDay(day){
    if (day === 'sunday' || day === 'saturday'){
        alert('Weekend!')
    }   else if (day === 'monday' || day === 'tuesday' || day === 'thursday' || day === 'friday'){
            alert('Week Day.')
        }   else if (day === ""){
                alert('Try again!')
                takeDay(prompt('What day?'))
            }   else {
                    alert('Try again!')
                    takeDay(prompt('What day?'))
                }
}

takeDay(prompt('What day?').toLowerCase())
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
let i = 0
function takeNumber(number){
    while (i <= number){
        console.log(i)
        i += 3
    }
}

takeNumber(Number(prompt('Pick a number?')))