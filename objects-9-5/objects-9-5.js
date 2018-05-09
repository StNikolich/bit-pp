/* 1. */
var duplicateArrElements = function (arr) {
    var resArr = [];
    arr.forEach(function (element) {
        resArr.push(element, element);
    });
    return resArr;
}

console.log(duplicateArrElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 2. */


var removeDuplicates = function (arr) {
    var uniqueArray = [];
    arr.forEach(function (element) {
        if (uniqueArray.indexOf(element) == -1) {
            uniqueArray.push(element)
        }
    });
    return uniqueArray;
    // for (var i = 0; i < arr.length; i++) {
    //     if (unique_array.indexOf(arr[i]) == -1) {
    //         unique_array.push(arr[i])
    //     }
    // }
    //return unique_array;
}

console.log(removeDuplicates([1, 2, 5, 4, 5, 2, 4, 5]));

/* 3. */

//a.

function hasOddNumber(arr) {
    return arr.length % 2 === 1;
}

console.log(hasOddNumber([1, 2, 3, 4]));

//b

function countElLessThenMiddle(arr) {
    var count = 0;
    if (arr.length % 2 === 0) {
        return "You need to enter array with odd number of elements";
    }
    var indexOfMiddle = Math.floor(arr.length / 2);
    arr.forEach(function (element) {
        if (element < arr[indexOfMiddle]) {
            count++;
        }
    })
    return count;
}


console.log(countElLessThenMiddle([1, 2, 3, 4, 3, 2, 1]));


/* 4 */

function findMin(arr){
    var min = Math.min(...arr);
    var indexOfMin = arr.lastIndexOf(min);
    resultObj = {
        minValue: min,
        minLastIndex: indexOfMin
    };
    return resultObj;
}

console.log(findMin([1,2,3,-5,4,5,6,7,-5]));

/* 5 */

function filterLessThenParam(arr,param){
    var resArr = [];
    arr.forEach(function(element){
        if (element < param) {
            resArr.push(element);
        }
    });
    return resArr;
}

console.log(filterLessThenParam([1,1,2,4,5,7,3],6));

/* 6 */

//a

var products = [
    {name: "Pineapple", price: 90}, 
    {name: "milk", price: 80}, 
    {name:"bananas", price: 150}
]

//b

function sumProductPrice(products) {
    var sum = 0;
    products.forEach(function(product){
        sum += product.price;
    })
    return sum;
}

console.log(sumProductPrice(products));

//c

function avgProductPrice(products) {
    var sum = 0;
    products.forEach(function(product){
        sum += product.price;
    })
    var avg = sum/products.length;
    return avg.toFixed(3);
}

console.log(avgProductPrice(products));

//d

function findMostExpensive(product) {
    var arrCopy = product.slice();
    arrCopy.sort(function(a,b){
        return a.price - b.price;
    });
    return arrCopy[arrCopy.length-1].name.toUpperCase(); 
}

console.log(findMostExpensive(products));

/* 7 */

//a

function areAllCapitals(string){
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== string[i].toUpperCase()) {
            return false;
        }
    }
    return true;
}

console.log(areAllCapitals("NEKI TEKST"));

//b

function hasDigits(string){
    for (var i = 0; i < string.length; i++) {
        if (!isNaN(parseInt(string[i]))) {
            return true;
        }
    }
    return false;
}

console.log(hasDigits("dhjhdeed 5ede"));


//c

function isHexaColor(string){
    return (typeof string === "string") && string.length === 6 && ! isNaN( parseInt(string, 16) );
}





    