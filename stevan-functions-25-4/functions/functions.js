//FUNCTIONS


//Primer 1
// function sumNumbers() {
//     var sum = 0;

//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     return sum;
// }


// var result = sumNumbers(1,5,7,13);
// console.log(result);



//Primer 2
// function sumNumbers(arrayOfNumbers) {
//     var sum = 0;

//     for (var i = 0; i < arrayOfNumbers.length; i++) {
//         sum += arrayOfNumbers[i];
//     }

//     return sum;
// }

// var numbers = [32, 5, 12, 11]
// var result = sumNumbers(numbers);
// console.log(result);



//Primer 3
function sumNumbers(arrayOfNumbers, msg) {
    var sum = 0;

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }

    console.log(msg + sum);
    return sum;
}

var message = "Rezultat je : "
var numbers = [32, 5, 12, 11]
var result = sumNumbers(numbers, message);


