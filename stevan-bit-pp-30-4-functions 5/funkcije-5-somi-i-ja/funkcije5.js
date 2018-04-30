/* 1.
Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

function replacePlaces(array) {
    var min = array[0];
    var max = array[0];
    var posMin = 0;
    var posMax = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            posMin = i;
        }
        if (array[i] > max) {
            max = array[i];
            posMax = i;
        }
    }

    array[posMin] = max;
    array[posMax] = min;

    return array;
}

console.log(replacePlaces([3, 500, 12, 149, 53, 414, 1, 19]));


/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function divAndAdd(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] / 2 + 5;
        if (array[i] === 0) {
            array[i] = 20;
        }
    }
    return array;
}
console.log(divAndAdd([3, 500, -10, 149, 53, 414, 1, 19]));

/* Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function gradesStudents(points, students) {
    var matches = "";
    var failed = ''
    for (var i = 0; i < points.length; i++) {
        var grade = 5;

        if (points[i] >= 51 && points[i] <= 60) {
            grade = 6;
        } else if (points[i] >= 61 && points[i] <= 70) {
            grade = 7;
        } else if (points[i] >= 71 && points[i] <= 80) {
            grade = 8;
        }
        else if (points[i] >= 81 && points[i] <= 90) {
            grade = 9;
        }
        else if (points[i] >= 91 && points[i] <= 100) {
            grade = 10;
        }

        if (grade === 5) {
            matches += students[i] + ' acquired ' + points[i] + ' points' + ' and failed to complete the exam. \n'
        } else {
            matches += students[i] + ' acquired ' + points[i] + ' points' + ' and earned ' + grade + ". \n ";
        }
    }
    return matches;
}
console.log(gradesStudents([50, 39, 63, 72, 99, 51, 83, 59], ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"]));

/* Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

function ascInput(array) {
    for (var i = 0; i < array.length - 1; i++){
        var position = i;
        for (var j = i; j < array.length; j++){
            if (array[position] > array[j]) {
                position = j;
            }
        }
        
        var tmp = array[i];
        array[i] = array[position] * 2;
        array[position] = tmp;
    }
    array[array.length -1] *= 2;
    return array;
}
console.log(ascInput([13, 11, 15, 5, 6, 1, 8, 12]));

function addEvenSubOdd(evenArr,oddArr){
    var sumEven = 0;
    for(var i = 1; i < evenArr.length; i++);
        if (evenArr[i] % 2 === 0){
         sumEven += evenArr [i];
    }
    return sumEven;
}
console.log(addEvenSubOdd(1000));




function name(firstEnd, secondEnd) {
    for(var i = 1; i <= firstEnd; i++) {

    }
    for(var i = 1; i <= secondEnd; i++) }

}

name(500, 1000);