//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
let array = []
function number(num) {

    for (let i = 0; i < num; i++){
        array[array.length] = array.push(i)
        console.log(array[i])
    }
    
}

number(5)
