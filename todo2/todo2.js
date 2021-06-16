//reverse the array
function revArr(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr
}

//rotate the array
function rotateArr(arr, shiftBy) {
    for (let i = 0; i < arr.length; i++) {
        
        console.log(arr)
    }
    return arr
}