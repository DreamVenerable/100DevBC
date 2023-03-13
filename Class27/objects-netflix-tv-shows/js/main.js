//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow{
    constructor(title, rating, genre, numOfEp) {
        this.title = title
        this.rating = rating
        this.genre  = genre
        this.numOfEp = numOfEp
    }
    play(){
        console.log('Starting')
    }
    favorite(){
        console.log('Added to favorites!')
    }
    skipIntro(){
        console.log('Skipped')
    }
}

let ozark = new NetflixShow('Ozark', '99%', 'Thriller', '28')