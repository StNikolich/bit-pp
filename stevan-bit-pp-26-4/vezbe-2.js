// 1. Write a program that calculates the maximum of two given numbers.
function isString(string) {
    if (typeof string === "string") {
        return true;
    } else {
        return false;
    }
}

console.log(isString(8888));

//2.

function isBlank(string) {
    if (string === '') {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank(''))

//3.

function multiString(ntimes, string) {
    var newString = '';
    for (var i = 0; i < ntimes; i++) {
        newString = newString + string;

    }
    return newString;
}
console.log(multiString(3, 'ha'));

//4.

function numOfletter(l, string) {
    count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === l) {
            count++;
        }

    }
    return count;
}

console.log(numOfletter('b', 'bombonjera'));


//5.

function firstPositionOfletter(letter, string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            return i + 1;
        }
    }
    return -1;
}

console.log(firstPositionOfletter('o', 'ohohohoh'));

//6. bolji nacin

function firstPositionOfletter(letter, string) {
    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === letter) {
            return i;
        }
    }
    return -1;
}

console.log(firstPositionOfletter('o', 'ohohohoh'));

//6.

function lastPositionOfletter(letter, string) {
    for (var i = 0; i < string.length; i++) {
        var lastPosition;
        if (string[i] === letter) {
            lastPosition = i;
        }
    }
    return lastPosition ? lastPosition : -1;
}

console.log(lastPositionOfletter('o', 'ohohohoh'));

//7.

function stringToArr(string) {
    var resultArr = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            resultArr[i] = null;
        } else {
            resultArr[i] = string[i];
        }
    }

    return resultArr;
}

console.log(stringToArr('dario '));

//8.

function isPrime(number) {
    for (var i = 2; i <= number; i++) {
        if (number % i === 0 && i !== number) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(25))

//9.

function separator(string, sepString = "-") {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            result += sepString;
        } else {
            result += string[i];
        }
    }
    return result;

}

console.log(separator('nije nama lako'));

//9 drugi nacin

function separator2(string, sepString = "-") {
    var result = "";
    if (sepString) {
        for (var i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                result += sepString;
            } else {
                result += string[i];
            }
        }
        return result;
    } else {
        for (var i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                result += "-";
            } else {
                result += string[i];
            }
        }
        return result;
    }

}

console.log(separator2('nije nama lako'));


//10.
function cutString(string, n) {
    var resultStr = '';
    for (var i = 0; i < n; i++) {
        resultStr += string[i];
        if (i === n - 1) {
            resultStr += "...";
        }
    }
    return resultStr;
}

console.log(cutString("blabalala", 3));

//11.

function arrToNum (arr) {
    var arrNum = [];
    var count = 0;
    var converted;
    for(var i = 0; i<arr.length; i++) {
        converted = Number(arr[i]);
        if (isFinite(converted)) {
            arrNum[count] = converted;
            count++;
        }
    }
    return arrNum;
}

console.log(arrToNum(["1", "21", undefined, "42", "1e+3", Infinity]));

//12

