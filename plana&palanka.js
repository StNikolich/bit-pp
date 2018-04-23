var months = ['j', 'f', 'm', 'a', 'm', 'jun', 'jul', 'avg.', 's', 'o', 'n', 'd'];
console.log(months[0], months[5], months[9]);

var day = ['pon', 'uto', 'sre', 'cet', 'pet', 'sub', 'ned']
console.log(day[6])

var negative = [-1, 2, 5, -8, 10]
console.log(negative[0], negative[3])

var modulo = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(modulo[1], modulo[4], modulo[5], modulo[6], modulo[8]);

/*if (modulo[3] % 3 === 0)*/

/*var z = [[1,2,1,24] , [8,11,9,4] , [7,0,7,27] , [7,4,28,14], [3,10,26,7]];

console.log(z[0][3]);
console.log(z[2])
console.log(z[2][1])

var numbers = [3,4,-1,5,-2,0,-6]
var i = numbers.lenght -1;
while (i >= 0){
    if (numbers[i] % 3 ===0)
    console.log("jeste");
}*/
var number = 1;
var sum = 0;
while (number < 1000) {
    if (number % 3 === 0 && number % 5 === 0) {

        sum += number;
    }
    number++;
}
console.log(sum)

var c = [2, 4, 6, 8];
var sum = 1;
var index = c.length - 1;


/*while (index < 4) {
    sum += c[index];
    index++;
}

console.log(sum)*/

while (index >= 0) {
    sum *= c[index];
    index--;

}
console.log(sum)

/* 4.*/
var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var index = 0;
var string = "";

while (index < x.length) {
    string = string + x[index];
    index++;
}
console.log(string)

/*5.*/
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

/*6.*/

var f =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19, 20];
var square = 1;
var sum = 0;

for(var i = 0; i < 20; i++){
    square = f[i] * f[i];
    sum += square;
    
    console.log(square);
}
console.log(sum);


