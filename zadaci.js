

/*8.*/

var grades = [80, 77, 88, 95, 68];
var sumMarks = 0;

for (var i = 0; i < grades.length; i++) {
    sumMarks += grades[i];
}
var average = sumMarks / grades.length;
console.log(average);

if (average < 60) {
    console.log('grade : F');
} else if (average < 70) {
    console.log('grade : D');
} else if (average < 80) {
    cosole.log('grade : C');
} else if (average < 90) {
    console.log('grade : B');
} else {
    console.log('grade A')
}

/*9*/

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0 && i & 5 === 0) {
        cosole.log('FizzBuzz');
    } else {
        console.log(i)
    }
}


/*7.*/

var sum = 0;
var niz = [5, 10, 155, 20, 25];

for (var i = 0; i < niz.length; i++) {
    sum = sum + niz[i] * niz[i];
}
console.log(sum)



/*1. dodatni*/

var a = [5, -4.2, 3, 7];
var e = 3;
var status = false;

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        status = true;
        break;
    }
}
console.log(status);
if (status === true) {
    console.log('yes');
} else {
    console.log('no')
}



/*2. dodatni*/

var a = [-3, 11, 5, 3.4, -8];
for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i] * 2;
    }
}
console.log(a);



/*3* dodatni*/


var a = [-23, 2, 2, -1, 9];
var index = 0;
var min = a[0];

for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        index = i;
    }
}

console.log(min);
console.log(index);