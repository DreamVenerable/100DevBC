//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
const fighter = {
    hp: 100,
    mp: 150,
    spd: 10,
    atk: 10,
    dex: 10,
    dodge(){
        if (dex > spd) {
            return 'dodged'
        }
    },
    crit(){},
    heal(){}
}