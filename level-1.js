// question 1
var myDog = "My dog name is Mara";


// question 2
var person = {
    age: 10
};


// question 3
var outOfStock = true;
if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}
// Out of stock

// question 4
var numbers = [8, 23, 5, 31, 22];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 8 23 5 31 22

// question 5
for (var numberCount = 15; numberCount <= 25; numberCount++) {
    console.log(numberCount);
}
// 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25

// question 6
for (var numberCount = 15; numberCount <= 25; numberCount++) {
    if (numberCount == 20) {
        console.log(numberCount)
    }
}
// 20

// question 7
var map = [{
        countryName: "Oslo",
        populationNumber: 90,
        insideCity: true
    },
    {
        countryName: "Stavanger",
        populationNumber: 50,
        insideCity: false
    }
];
for (var i = 0; i < map.length; i++) {
    console.log(map[i].populationNumber);
    console.log(map[i].insideCity);
}
// 90 true 50 false

// question 8
function whatIDontLike(petNameDog) {
    console.log("I don't like " + petNameDog)
}
whatIDontLike("Tara")
    // I don't like Tara


// Tasy gray 9
function MyToArguments(dog1, dog2) {
    console.log(dog2);
}
MyToArguments("Mara", "Tara");
// Tara


// question 10
var MyFirstBook = [];

function MyName(nameOne) {
    MyFirstBook[0] = "unu";
    console.log(nameOne);
}
MyName("Ina")
    // Ina