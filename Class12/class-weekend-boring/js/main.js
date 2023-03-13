document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()

  if (day === 'sunday' || day === 'saturday') {
    document.querySelector('#placeToSee').innerHTML = 'Weekend Yay!'
  } else if (day === 'tuesday' || day === 'thursday') {
      document.querySelector('#placeToSee').innerHTML = 'Class!'
    } else {
        document.querySelector('#placeToSee').innerHTML = 'Nothing'
      }
}