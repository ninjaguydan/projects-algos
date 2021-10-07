// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
const countdown = (num) => {
	let arr = []
	for (let i = num; i > -1; i--) {
		arr.push(i)
	}
	console.log(arr.length)
	return arr
}


// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function printReturn(arr) {
	if (arr.length != 2) {
		return null
	} 
	console.log(arr[0])
	return arr[1]
}

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
const firstPlus = (arr) => {
	if (Number.isInteger(arr[0])) {
		return arr[0] + arr.length
	}
	else {
		return null
	}
}


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

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
const lengthValue = (num1, num2) => {
	let newarr = []
	for (let i = 0; i < num1; i++) {
		newarr.push(num2)
		if (i == num2) {
			console.log("jinx!")
		}
	}
	return newarr
}


// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
function fitFirst(arr) {
	if ( arr[0] > arr.length ) {
		console.log("Too Big!")
	} else if ( arr[0] < arr.length ) {
		console.log("Too Small...")
	} else {
		console.log("Just Right.")
	}
}

// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
const biggie = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			arr[i] = "big"
		}	
	}
	return arr
}

// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr) {
	let min = arr[0]
	let max = arr[0]
	for (let i=0; i<arr.length;i++){
		if ( arr[i] < min ) {
			min = arr[i]
		}
		if ( arr[i] > max ) {
			max = arr[i]
		}
	}
	console.log(min)
	return max
}

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.
function printreturn(arr){
	console.log(arr[arr.length-2])
	for (i=0;i<arr.length;i++){
		if (arr[i] % 2 == 1) {
			return arr[i]
		}
	}
}

// Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
function double(arr){
	for(let i = 0; i < arr.length; i++) {
		arr[i] *= 2
	}
	return arr
}

// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function positives(arr) {
	let count = 0
	for (let i=0; i<arr.length;i++){
		if (arr[i] > 0) {
			count ++
		}
	}
	arr[arr.length-1] = count
	return arr
}

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
function evenOdd(arr){
	let odds = 0
	let evens = 0
	for (let i=0; i < arr.length; i++) {
		if (arr[i] % 2 == 1) {
			odds++
			if (odds == 3) {
				console.log("That's odd")
				odds = 0
			}
		} else {
			odds = 0
		}
		if (arr[i] % 2 == 0) {
			evens++
			if (evens == 3) {
				console.log("Even more so!")
				evens = 0
			}
		} else {
			evens = 0
		}
	}
}

// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.
function previous(arr){
	for (let i=arr.length-1;i > 0;i--){
		arr[i] = arr[i-1].length
	}
	return arr
}


// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
function reverse(arr){
	for (let i=0;i<arr.length/2;i++){
		let temp = arr[i]
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = temp
	}
	return arr
}


// Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swap(arr){
	for (let i=0;i<arr.length/2;i+=2) {
		let temp = arr[i]
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = temp
	}
	return arr
}