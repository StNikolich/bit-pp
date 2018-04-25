//task1

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}    
console.log (max(13,8));
  


console.log(max(8, 6, 78, 9));

//task2

function isOdd(a) {
    if (a % 2 === 0) {
        return false
    } else {
        return true
    }
}

console.log(isOdd(6));

//task3

function isThreeDigit(a) {
    var string = "" + a;
    if (string.length === 3) {
        return true;
    } else {
        return false;
    }
}

console.log(isThreeDigit(2554));

//task4

function arithOfFourNum(a, b, c, d) {
    return (a + b + c + d) / 4;
}

console.log(arithOfFourNum(2, 5, 4, 6));

//task7

function numOfDig(a) {
    var string = "" + a;
    return string.length;
}

console.log(numOfDig(12546));

//task8

function numOfDigInArr(num, arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++
        }
    }
    return count;
}

console.log(numOfDigInArr(5, [1, 2, 5, 4, 5, 4, 6, 5, 4, 5, 4]));

//task9

function sumOfOdd(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOfOdd([1, 5, 4, 7, 8, 9]));

//task10

function numOfA(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter.toLowerCase() || string[i] === letter.toUpperCase()) {
            count++;
        }
    }
    return count;
}

console.log(numOfA("apokalipsA", "a"));

//task11

function multOfString(string, numberOfTimes) {
    var newString = "";
    for (i = 0; i < numberOfTimes; i++) {
        newString += string;
    }
    return newString;
}

console.log(multOfString("bla", 5));

//task 5
function makeSquare(a, b, symbol) {
    var string = "";
    var string2 = "";
    var space = " "

    for (var j = 0; j < a; j++) {
        string += "*";
    }

    for (var k = 0; k < a; k++) {
        if (k === 0 || k === a - 1) {
            string2 += "*";
        } else {
            string2 += " ";
        }
    }

    for (var i = 0; i < b; i++) {
        if (i === 0 || i === b - 1) {
            console.log(string);
        } else {
            console.log(string2);
        }
    }
}

makeSquare(6, 12);

//task 6

function makeChart() {

    function makeSingleChart(num) {
        var string = "";
        for (var i = 0; i < num; i++) {
            string += "*";
        }
        return string;
    }

    for (var i = 0; i < arguments.length; i++) {
        console.log(makeSingleChart(arguments[i]));
    }
}


makeChart(2, 8, 3, 9);
