// // zadatak 1
// var a = ["jan", "feb","mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"];
// console.log(a[5], a[9], a[0]);

// // zadatak 2
// var week = ["mon", "tue", "wen", "thu", "fri", "sut", "sun"];
// console.log(week[6]);

// // zadatak 3

// var b = [2, -4, 5, -2, -11];
// console.log(b[1], b[3], b[4]);

// // zadatak 4
// var c = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// console.log(c[1], c[4], c[5], c[6], c[8]);

// // zadatak 5

// var d = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// console.log(d[0][3]);
// console.log(d[2]);
// console.log(d[2][1]);

// // zadatak 6

// var i = 0;
// var sum = 0;
// while (i<1000) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum += i;
//     }
//     i++;
// }

// console.log(sum);

//zadatak 7

// var a = [2,2,1,3];
// var i = 0;
// var sum = 0;
// var prod = 1;
// while (i < a.length){
//     sum += a[i];
//     prod *= a[i];
//     i++;
// }
// console.log(sum, prod);

// // zadatak 8
// var evenArr = [],
//     oddArr = [];
// for (var i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         evenArr[evenArr.length] = i;
//     } else {
//         oddArr[oddArr.length] = i;
//     }
// }
// console.log(evenArr, oddArr);

// //zadatak 10 

// var sum = 0;
// for (var j = 0; j <= 20; j++) {
//     sum += j * j;
// }
// console.log(sum);


// // var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// // var i = 0;
// // var str = "";

// // while (i < x.length) {
// //     str += x[i];
// //     i++;
// // }
// // console.log(str);

// // //zadatak 9

// // var a = [
// //         [1, 2, 1, 24], 
// //         [8, 11, 9, 4], 
// //         [7, 0, 7, 27]
// //     ];

// // var j = 0;
// // while (j < a.length) {
// //     console.log(a[j]);
// //     j++;
// // }

var marks = [80, 77, 88, 95, 68];
var sum = 0;
var average = 0;
for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
    if (i === marks.length - 1) {
        average = sum / marks.length;
    }
}
console.log(average);

if (average < 60) {
    console.log("Grade is F");
} else if (average >= 60 && average < 70) {
    console.log("Grade is D");
}
else if (average >= 70 && average < 80) {
    console.log("Grade is C");
}
else if (average >= 80 && average < 90) {
    console.log("Grade is B");
}
else if (average >= 90 && average <= 100) {
    console.log("Grade is A");
}
else {
    console.log("Invalid grade");
}

for(var i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}


//task 1
// var a = [5, -4.2, 3, 7];
// var e = 20;
// var status = false;

// for(i = 0; i < a.length; i++){
//     if(a[i] === e){
//         status = true;
//         break;
//     }
// }

// if (status) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

//task 2
 
var x =[-3, 11, 5, 3.4, -8];

for(i = 0;i < x.length; i++){
    if(x[i] > 0){
        x[i] *= 2;
    }
} 
console.log(x);

//task 3

var arr = [4,2,2,-1,6];
var min = arr[0];
var index = 0;

for (i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
        index = i;
    }
}

console.log(min, index);

//task 4

var arr = [-5,2,2,-1,6];
var min = arr[0];
var index = 0; 

//find min
for (i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
        index = i;
    }
}

//define init secMin
var secMin;
if (index === 0) {
    secMin = arr[1]
} else {
    secMin = arr[0]
}

//find secMin
for(i=0; i< arr.length; i++) {
    if(secMin > arr[i] && i !== index) {
        secMin = arr[i];
    }
}

console.log(min, index);
console.log(secMin);

//task 5

var p = [3,11,-5,-3,2];
var sum = 0;
for(i = 0; i < p.length;i++){
    if(p[i] > 0){
        sum += p[i];
    }
}
console.log(sum);

//task 6

var z = [2,4,-2,7,7,-2,4,2];
var output = "The array is symmetric";

for(var i = 0, j = z.length - 1; i <= j; i++ , j--){
    if(z[i] !== z[j]){
        output = "The array isn't symmetric";
        break;
    }
}

console.log(output);

//task 7

var arr1 = [4,5,6,2],
    arr2 = [3,8,11,9],
    newArr = [],
    index = 0;

for (i=0; i<arr1.length; i++) {
    newArr[index] = arr1[i];
    index++;
    newArr[index] = arr2[i];
    index++;
}

console.log(newArr);

//task 8

var arrA = [4,5,6,2],
    arrB = [3,8,11,9],
    conArr = [],
    ind = arrA.length;
for (i=0; i<arrA.length; i++) {
    conArr[i] = arrA[i];
    if (i === arrA.length - 1) {
        for(i=0; i<arrB.length; i++) {
            conArr[ind] = arrB[i];
            ind++;
        }
    }
}

console.log(conArr);

//task 9

var arrC = [4,6,2,8,2,2],
    e = 2,
    arrD = [],
    inn = 0;

for(i=0; i<arrC.length; i++) {
    if (e === arrC[i]) {
        delete arrC[i];
    } else {
        arrD[inn] = arrC[i];
        inn++;
    }
}

console.log(arrC);
console.log(arrD);

//task 10

var e = 78,
    p = 3,
    arrE = [2,-2,33,12,5,8];

for (i=0;i<arrE.length;i++) {
    if (p>arrE.length) {
        console.log("index is greater then array length");
    } else if (i === p) {
        arrE[i] = e;
        break;
    }
}

console.log(arrE);