//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Young Sheldon', 'Peaky Blinders', 'Ozark']
tvShows.forEach( x => console.log(x))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numberBasket = [1,2,3,4,5]
let evenNumBasket = numberBasket.filter( (num) => num % 2 === 0 )

// let evenNumBasket = arr => arr.filter( (num) => num % 2 === 0 )
// console.log( num )

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secondNum(arr){
    let sort = arr.sort( (a,b) => a-b)
    alert(sort[1] + sort[sort.length - 2])
}

secondNum( numberBasket )
