// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const str = 'This is a sentence?'
alert(str.endsWith('?'))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let str2 = 'word apple cat jr.dev rain jr.dev'
str2 = str2.replace(/jr.dev/g, 'software developer')
console.log(str2)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor(){
    let val = Math.random()
    if (val < .33){
        return 'rock'
    }else if (val < .66){
        return 'paper'
    }else{
        return 'scissor'
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function vsBot(choice){
    let botChoices = rockPaperScissor()
    if(choice === botChoices){
        return 'Tie'
    }else if(choice === 'rock' && botChoices === 'scissor' || 
            choice === 'paper' && botChoices === 'rock' || 
            choice === 'scissor' && botChoices === 'paper'){
        return 'Win'
    }else if(choice !== 'rock' || choice !== 'paper' || choice !== 'scissor'){
        return 'Invalid Input'
    }else{
        return 'Loss'
    }
}
vsBot('rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function getArr(arr){
    for (let i = 0; i < arr; i++){
        console.log( vsBot('rock') )
    }
}