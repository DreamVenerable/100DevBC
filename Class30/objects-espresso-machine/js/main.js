//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class Coffee{
    constructor(brand,type,color,price){
        this.brand = brand
        this.type = type
        this.color = color
        this.price  = price
    }
    power(){
        alert('On')
    }
    steam(){
        alert('bshhhhh...')
    }
    heat(){
        alert('Heating...')
    }
}