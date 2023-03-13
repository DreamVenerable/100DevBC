//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function MakeSkater(skaterName,skaterAge,skaterRank,skaterLevel){
    this.name = skaterName
    this.age = skaterAge
    this.rank = skaterRank
    this.level = skaterLevel
    this.x = function(){
        alert('x')
    }
    this.y = function(){
        alert('y')
    }
    this.z = function(){
        alert('z')
    }
}

let playerOne = new MakeSkater('Alex',18,'Gold 2', 7)