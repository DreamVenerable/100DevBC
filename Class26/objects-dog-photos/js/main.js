//Get a dog photo from the dog.ceo api and place the photo in the DOM
 fetch()
    .then(res => res.json())
    .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    })