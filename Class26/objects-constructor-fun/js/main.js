//Create a constructor with 4 properties and 3 methods

function PizzaMachine(topping,size,crust,sauce){
    this.topping = topping
    this.size = size
    this.crust = crust
    this.sauce = sauce
    this.burnMouth = function(){
        alert('AAHHHHH')
    }
    this.deliveryTime = function(){
        console.log('Calculating...')
    }
    this.frisbee = function(){
        console.log('YEEEett!')
    }
}

const pizzaOne = new PizzaMachine(['Olives','Mushrooms'], 'Large', 'Filled', 'Extra')