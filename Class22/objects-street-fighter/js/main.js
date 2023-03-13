//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function FighterMaker(hp,mp,spd,atk,dex){
    this.health = hp
    this.mana = mp
    this.speed = spd
    this.attack = atk
    this.agilty = dex
    this.dodge = function(){
        console.log('Dodged')
    }
    this.crit = function(){
        console.log('Critical Hit')
    }
    this.heal = function(){
        console.log('Patched up!')
    }
}

let margret = new FighterMaker(100, 200, 10, 10, 10)