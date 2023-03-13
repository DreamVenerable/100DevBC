// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'Water'
favDrink = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWord = 'oranges are not apples, but an apple can be a pear, or can it?'
if( multiWord.search('apple') !== -1 ){
    console.log('yes')
} else {
    console.log('no')
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps(){
    let num = Math.random()
    if (num < .33){
        return 'rock'
    }else if (num < .66){
        return 'paper'
    } else {
        return 'scissors'
    }
}
rps()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function vsBot(choice){
    let botChoice = rps()
    if ((choice === 'rock' && botChoice === 'scissors') || 
        (choice === 'paper' && botChoice === 'rock') || 
        (choice === 'scissors' && botChoice === 'paper')){
        return 'Won'
    }else if(choice === botChoice){
        return 'Tied'
    }else{
        return 'Lost'
    }
}
vsBot()
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function arrayOfChoices(choices){
    choices.forEach( x => console.log(vsBot(x)) )
}
arrayOfChoices(['rock','paper','scissors'])