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
    let count = 0;
    if (shiftBy > 0) {
        while (count < shiftBy) {
        let last = arr[arr.length-1];
        for (let i = arr.length-1; i >= 0; i--) {
            arr[i] = arr[i-1];
            }
        arr[0] = last;
        count++
        }   
    } else {
        while (count > shiftBy) {
        let first = arr[0];
        for (let i = 0; i < arr.length-1; i++) {
            arr[i] = arr[i+1];
            }
        arr[arr.length-1] = first;
        count--
        }   
    }
    return arr
}