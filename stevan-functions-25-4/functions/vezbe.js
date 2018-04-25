//Zadatak 1

// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(max(25,13));


// Zadatak 2

// function isOddNumber(a) {
//     if(a % 2 === 0) {
//         return false;
//     } else {
//         return true;
//     }

// }

// console.log(isOddNumber(9));


// Zadatak 3

// function isThreeDigits(a) {
//     if (a > 99 && a < 1000) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isThreeDigits(1222));


// Zadatak 4

// function mean(a,b,c,d) {
//     var arith = (a + b + c + d)/4;
//     return arith;
// }

// console.log(mean(5,5,5,5));


// Zadatak 5

function drawSquare(num) {
    var string = "";
    for (var i = 0; i < num; i++) {
        string += "*";
        for(var j = 0; j < num; j++) {
            string2 += "*\t";
            
        }
        
        
    }
}

drawSquare(5);


// Zadatak 7

// function numOfDigits(a) {
//     a = a + "";
//     return a.length
// }

// console.log(numOfDigits(123455345356465));


// Zadatak 8

// function numAppearances(num,array) {
//     var result = 0;
//     for( var i = 0; i < array.length; i++) {
//         if(num === array[i]) {
//             result++;
//         }
//     }

//     return result;
// }

//    console.log(numAppearances(3,[3,53,7686,3,76,3,6786,3,87686,3]);)


// Zadatak 9

// function sumOfOdd(array) {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 1) {
//             sum += array[i];
//         }
//     }

//     return sum;

// }

// console.log(sumOfOdd([1, 3, 4, 5, 7, 8, 2, 3, 4]));


// Zadatak 10

// function letterApp(letter, string) {
//     var numOfLetter = 0;
//     string = string.toLowerCase();

//     for(var i = 0; i < string.length; i++) {
//         if(letter === string[i]) {
//             numOfLetter++;
//         }
//     }

//     return numOfLetter;
// }

// console.log(letterApp("l","Lele traLalaL"));


// Zadatak 11

// function multiWord(num , string) {
//     var result = "";

//     for(var i=0 ; i < num ; i++) {
//         result += string;
//     }

//     return result;
// }

// console.log(multiWord(10, "Hello"));

