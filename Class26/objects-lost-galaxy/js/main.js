//Create a pizza object that has four properties and three methods

function PizzaMaker (topping, size, price, shape){
    this.topping = topping
    this.size = size
    this.price = price
    this.shape = shape
    this.cut = function(){
        console.log('Pizza is cut!')
    }
    this.cook = function(){
        console.log('Pizza is cooked')
    }
    this.burnMouth = function(){
        console.log('F;lkjhg')
    }
};

const pizzaOne = new PizzaMaker(['cheese', 'olives', 'mushrooms', 'herbs'], 'Large', 15, 'Circle')
