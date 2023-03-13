let deckId = ''
let war = false
let p1Score = 0 
let p2score = 0

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    deckId = data.deck_id
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

document.querySelector('button').addEventListener('click', drawCards)

function drawCards(){

let player1Card, player2Card, drawNumCards, addScore

  if(war === false){
    player1Card = 0
    player2Card = 1
    drawNumCards = 2
    addScore = 2
  }else if(war === true){
    player1Card = 3
    player2Card = 7
    drawNumCards = 8
    addScore = 10
  }

  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawNumCards}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#player1').src = data.cards[player1Card].image
      document.querySelector('#player2').src = data.cards[player2Card].image
      let player1Val = convertToNum(data.cards[player1Card].value)
      let player2Val = convertToNum(data.cards[player2Card].value)
      if(player1Val > player2Val){
        document.querySelector('#result').innerText = 'Player 1 Wins!'
        p1Score += addScore
        document.querySelector('#p1').innerText = `Number of Cards Won: ${p1Score}`
        war = false
      }else if (player1Val < player2Val){
        document.querySelector('#result').innerText = 'Player 2 Wins!'
        p2score += addScore
        document.querySelector('#p2').innerText = `Number of Cards Won: ${p2score}`
        war = false
      }else {
        document.querySelector('#result').innerText = 'WAR!'
        war = true
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

}

function convertToNum(val){
  if(val === 'ACE'){
    return 14
  } else if(val === 'KING'){
    return 13
  } else if(val === 'QUEEN'){
    return 12
  } else if(val === 'JACK'){
    return 11
  } else {
    return Number(val)
  }
}

