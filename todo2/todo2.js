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

//filter range
function filterRange(arr, min, max) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > min && arr[i] < max) {
			for(let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
			i--;
		}
	}
}


//concat
function concat(arr1, arr2) {
    let newArr= [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i])
    }
    return newArr
}