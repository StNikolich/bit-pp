//1
function minMax(array) {
    var min = array[0];
    var max = array[0];
    var temp = array[0];
    var indexMin = 0;
    var indexMax = 0;

    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            indexMin = i;
        }
        if (max < array[i]) {
            max = array[i];
            indexMax = i;
        }
    }
    var temp = array[indexMin];
    array[indexMin] = array[indexMax];
    array[indexMax] = temp;

    return array;
}

console.log(minMax([1, 45, 23, -2, 6]))

//2
function arrayMap(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array[i] = 20;
        } else {
            array[i] = array[i] / 2 + 5;
        }
    }
    return array;
}

console.log(arrayMap([5, 7, 25, 0, 24]));
//3

var studentsArr =  [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var grade = [ 50, 39, 63, 72, 99, 51, 83, 59 ];

function gradeGenerator(stArr, grArr) {
    var outputArr = [];
    for (var i = 0; i<stArr.length; i++) {
        if (grArr[i] < 51) {
            outputArr[i] = stArr[i] + " acquired " + grArr[i] + " points and failed to complete exam";
        } else if (grArr[i] >50 && grArr[i] <61) {
            outputArr[i] = stArr[i] + " acquired " + grArr[i] + " points and earned 6";
        } else if (grArr[i] >60 && grArr[i] <71) {
            outputArr[i] = stArr[i] + " acquired " + grArr[i] + " points and earned 7";
        } else if (grArr[i] >70 && grArr[i] <81) {
            outputArr[i] = stArr[i] + " acquired " + grArr[i] + " points and earned 8";
        } else if (grArr[i] >80 && grArr[i] <91) {
            outputArr[i] = stArr[i] + " acquired " + grArr[i] + " points and earned 9";
        } else if (grArr[i] >90 && grArr[i] <101) {
            outputArr[i] = stArr[i] + " acquired " + grArr[i] + " points and earned 10";
        }
    }
    return outputArr;
}

console.log(gradeGenerator(studentsArr, grade));

//4
function sortAndDouble (array) {
    var newArray = [];
    var min = array[0];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                index = j;
            }
        } 
        newArray[i] = min*2;
        array[index] = 9007199254740991;
        min  = 9007199254740991;
    }
    return newArray;
}

console.log(sortAndDouble([5, 4, 8 , 3, 11, -2]));

//4 drugi nacin

function sortAndDoublee(arr) {
    var newArray = [],
        position = 0;

    //make a copy of arr
    for (var i = 0; i<arr.length; i++) {
        newArray[i] = arr[i];
    }
    //sort and double
    for(var i = 0; i < newArray.length; i++) {
        position = i;
        for(var j = i; j<newArray.length; j++) {
            if (newArray[position] > newArray[j]) {
                position = j;
            }
        }
        var temp = newArray[position];
        newArray[position] = newArray[i];
        newArray[i] = temp*2;
    }
    //return result
    return newArray;
}

console.log(sortAndDoublee([5, 4, 8 , 3, 11, -2]));


//5
function sortDesc (arr) {
    var position;
    for (var i = 0; i < arr.length; i ++) {
        position = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[position] < arr[j]) {
                position = j;
            }
        }
        var temp = arr[position];
        arr[position] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log(sortDesc([5, 4, 8 , 3, 11, -2]));

//6
function operation007() {
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 0; i < 1001; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        }    
    }
    for(var i = 0; i <= 500; i++) {
        if (i % 2 === 1) {
            sumOdd += i
        }
    }
    return (sumEven - sumOdd) * 12.5;
}

console.log(operation007());

//7
var arrA =  [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];

function makeString(arr){
    var resultString = "";
    for(var i = 0; i<arr.length; i++) {
        if (typeof arr[i] === "string") {
            if(arr[i].length >= 2) {
                for(var j = 0; j<2; j++) {
                    resultString += arr[i][j];
                }
            }
        }
    }
    return resultString;
} 

console.log(makeString(arrA));

//8
function reverseString(string) {
    newString = "";
    for(var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(reverseString("bas me briga"));
