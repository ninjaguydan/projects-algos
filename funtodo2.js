// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function greater(arr) {
    if (arr.length < 2) {
        return null
    }
    let value = arr[1]
    let new_arr = []
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            new_arr.push(arr[i])
            counter += 1
        }
    }
    console.log(counter)
    return new_arr
}