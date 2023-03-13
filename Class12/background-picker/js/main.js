document.querySelector('#purple').addEventListener('click', partyPurple)
document.querySelector('#green').addEventListener('click', partyGreen)
document.querySelector('#blue').addEventListener('click', partyBlue)
document.querySelector('#teal').addEventListener('click', partyTeal)

function partyPurple() {
  document.querySelector('body').style.background = 'purple'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.background = 'green'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.background = 'blue'
  document.querySelector('body').style.color = 'white'
}

function partyTeal() {
  document.querySelector('body').style.background = 'teal'
  document.querySelector('body').style.color = 'white'
}
