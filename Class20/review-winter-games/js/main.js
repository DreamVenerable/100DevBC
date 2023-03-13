//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function getEvenNum(arr){
    let evenArr = []

    // arr.forEach( nums => {
    //     if (nums % 2 === 0){
    //         evenArr.push(nums)
    //     }
    // })

    // evenArr = arr.map( n => {
    //     if (n % 2 === 0) {
    //         return n
    //     }
    // })

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            evenArr.push(arr[i])
        }
    }
    return evenArr
}

getEvenNum([1,2,3,4,5,6,7,8,9,10])
