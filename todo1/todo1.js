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