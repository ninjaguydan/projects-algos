// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = "Daniel";
var temp = myNumber;
myNumber = myName;
myName = temp;


// Print integers from -52 to 1066 using a FOR loop.
for (let i = -52; i < 1067; i++) {
    console.log(i)
}


// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful() {
    console.log("good morning!");
}
for (let i = 0; i < 98; i++) {
    beCheerful();
}


//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (let i = -300; i < 1; i = i + 3) {
    if (i == -3 || i == -6) {
        continue
    }
    console.log(i);   
}


// Print integers from 2000 to 5280, using a WHILE.
i = 2000;
while (i < 5281) {
    console.log(i);
    i++;
}


//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
function isBirthday(num1, num2) {
    if (num1 == 1 && num2 == 4) {
        console.log("How did you know?")
    } 
    else if (num1 == 4 && num2 == 1) {
        console.log("How did you know?")
    } else {
        console.log("Just another day...")
    }
}

//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
function isLeapYear(num) {
    if (num % 400 == 0) {
        console.log("It's a leap year!")
    }
    else if (num % 4 == 0 && num % 100 != 0) {
        console.log("It's a leap year!")
    } else {
        console.log("not a leap year...")
    }
}


//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
var count = 0;
for (let i = 512; i < 4097; i++) {
    if (i % 5 == 0) {
        console.log(i);
        count += 1
    }
}
console.log("Loop ran " + count + " times!")


//Print multiples of 6 up to 60,000, using a WHILE.
var i = 0;
while (i < 60000) {
    if (i % 6 == 0) {
        console.log(i)
    }
    i++;
}


// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for (let i = 1; i < 100; i++) {
    if (i % 10 == 0) {
        console.log("Dojo")
    }
    else if (i % 5 == 0) {
        console.log("Coding")
    }
    else {
        console.log(i)
    }
}


// Your function will be given an input parameter incoming. Please console.log this value.
function log(incoming) {
    console.log(incoming)
}


// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
let sum = 0
for (let i = -3000000; i <= 3000000; i++) {
    if (i % 2 == 1) {
        sum += i
    }
}
console.log(sum)


// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
var i = 2016;
while (i > 0) {
    console.log(i);
    i-=4;
}


// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
function countdown(lownum, highnum, mult) {
    for (let i = highnum; i > lownum; i--) {
        if (i % mult == 0) {
            console.log(i)
        }
    }
}

