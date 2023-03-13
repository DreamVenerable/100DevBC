//Write your pseduo code first! 
// Take the celcius temp number, then convert it to Ferin temp, then display the ferin temp



document.querySelector('#convert').addEventListener('click', convert)

function convert(){
    let temp = document.querySelector('#cel').value
    temp = temp * 1.8 + 32
    document.querySelector('#tempInF').innerText = temp
}