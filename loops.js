//// Loops

// While

// var i = 0;

// while (i < 10) {
//     i++;

// }

// console.log(i);


// var numbers = [3, 4, -1, 5, -2, 0, -6];
// var i = 0;
// while (i < numbers.length) {

//     if (numbers[i] < 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }


// var y = numbers.length - 1;
// while (y >= 0) {
//     console.log(numbers[y]);
//     y--;
// }


// zadatak 1 

// var i = 0;
// var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var odd = [];
// var even= [];
// var oddIndex = 0;
// var evenIndex = 0;

// while (i < nums.length) {
//     if (nums[i] % 2 === 0) {
//         even[evenIndex++] = nums[i];
//         continue;
//     }

//     odd[oddIndex++] = nums[i];
//     i++;
// }
// console.log("odd:", odd);
// console.log("even:", even);



//zadatak2

// var i = 0;
// var sum = 0;
// while (i < 1000) {

//     if (i % 3 === 0 && i % 5 === 0) {
//        sum = sum + i; 
//     }
//     i++;
// }

// console.log(sum);


//zadatak3

// var i = 0;
// var a = [1,3,4,6,8];
// var sum2 = 0;
// var pro = 1;

// while (i < a.length) {
//     sum2 += a[i];
//     pro *= a[i];
//     i++;

// }

// console.log(sum2);
// console.log(pro);





//// Do-while loop
// var i = 10;
// do {
//     i++;
// } while (i<10);

// console.log(i);



////For loop

// var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (i === 2 || i === 6) { //da preskocimo iteraciju
//         continue;
//     }
//     sum += nums[i]
// }
// console.log(sum);


// mnozenje unazad

// var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var pro = 1;
// for (var i = nums.length - 1; i >= 0; i--) {
//     pro *= nums[i];
//     console.log("Current element", nums[i]);
// }

// console.log(pro);



// niz u nizu
// var nums = [1,2,[9,10,11,12,13],3,4,5];

// for (let i = 0; i < nums[2].length; i++) {
//     console.log(nums[2][i]);
// }



//prikazi sve elemente

// var nums = [[1,12,13,],[2,3,4,5],[9,10,11]];

// for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums[i].length; j++) {
//         console.log(nums[i][j]);             
//     }
// }


// stampaj 5 puta po 5 *
// var res = '\n';
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         res += '*\t'; 
//     }
//     res += '\n'
// }

// console.log(res);



////For-in loop

// var a = ['a','b','c','x','y','z'];

// for (var i in a) {
//     console.log(a[i]);
// }


//zadatak 4

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var singleString = '';

// for (let i = 0; i < x.length; i++) {
    
//     singleString += " " + x[i];
// }
// console.log(singleString);


// zadatak 5

// var a = [
//     [1, 2, 1, 24], 
//     [8, 11, 9, 4], 
//     [7, 0, 7, 27]
//     ];

// for (var i = 0; i < a.length; i++) {

//     for (var j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }
// }


//zadatak 6
var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var squ = 0;
var sum = 0;

for (var i = 0; i < x.length; i++) {
    squ = x[i] * x[i];
    sum += squ;
    console.log(squ);
}

console.log("sum =",sum);



