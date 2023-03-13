//Create an array of movie titles. Loop through the array and each element to the h2.
let array1 = ['Your Name', 'Inception']

array1.forEach( (a) => document.querySelector('h2').innerText += ` ${a}` )

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let array2 = [1, 2, 3, 4, 5, 6, 7]

array2.forEach( (element, i) => {
    array2[i] = element + 3
})

//Find the average of all the numbers from question two

let sum = 0

array2.forEach( (num) => sum += num)

console.log( sum / array2.length )