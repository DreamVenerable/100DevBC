//Write your pseduo code first! 
// Take C temp num > Convert > output


document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#cel').value
    temp = temp * 1.8 + 32
    document.querySelector('#tempInF').innerText = temp
}