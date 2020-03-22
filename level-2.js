// Question 1 

for (let numberCount = 15; numberCount <= 25; numberCount++)
    if (!(numberCount % 2))
        console.log(numberCount);

    //16,18,20,22,24



    // Question 2 

function firstFunction() {
    console.log("I am a function");
}
var innerFunction = firstFunction

function outerFunction(firstOne) {
    firstOne();
}
outerFunction(innerFunction);
// I am a function