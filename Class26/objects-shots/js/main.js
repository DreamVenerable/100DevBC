//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

let counter = -1
let drink

function getDrink(){

    if (drink === document.querySelector('input').value){
        counter += 1
    } else {
        counter = 0
    }

    drink = document.querySelector('input').value.split(" ").join("")

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.drinks[counter].strDrinkThumb
            document.querySelector('h2').innerText = data.drinks[counter].strDrink
            document.querySelector('h3').innerText = data.drinks[counter].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        }) 
}
