/** function Person (name , surname , age ) {
    this.name= name;
    this.surname= surname;
    this.age= age;
     this.sayname = function() {
        console.log("I am " + this.name + " " + this.surname);
     }
     this.sayhello = function() {
         console.log(this.name + " say hello !")
     }
     this.changeName = function() {
         return (this.name[0] + this.surname[0]);
     }
     this.addSomething = function() {
         return (this.name + " " + this.surname + " ne zna sta pise ...");
     }
}

var luka = new Person ("Luka" , "Breberina" , 31);
luka.hair = "black";
console.log(luka);

luka.sayname();

var stevan = new Person ("Stevan" , "Nikolich" , 29);

stevan.sayname();

delete stevan.age;

console.log(stevan.surname);

stevan.sayhello();

console.log(stevan);
var kk = {
    name: "kkk",
    surname: "jjj"
}

console.log(stevan instanceof Person);
console.log(kk instanceof Person);
console.log(kk);



console.log(stevan);


stevan.age = 29;


console.log(luka === stevan);
console.log(luka.changeName());

console.log(stevan.changeName()); */

/*1.Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

'ff', 16, 8 -> 377*/

function convert(n, base1, base2) {
return parseInt(n, base1).toString(base2);
}
console.log(convert("ff", 16, 8));

// 2. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
function reverse(n) {
    return n.toString().split("").reverse().join("")
}
console.log(reverse(12345))

/* 3. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”*/

function sortIt (str) {
    return str.toLowerCase().split('').sort().join('')
}

console.log(sortIt('Webmaster'));

/* 4. 
Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
    "Republic Of Serbia" -> "Rbceilpu Of Sabeir" */
    
    function alph (str) {
        var newArr = str.toLowerCase().split(" ")
        var finalArr = []
        for(var i=0; i<newArr.length; i++) {
            var newElement = newArr[i].split("").sort().join("");
            finalArr.push(newElement)
        }
        return finalArr.join(" ")
    }
    console.log(alph("Republic Of Serbia"))

/* 5. 
Write a function to split a string and convert it into an array of words.

    "John Snow" -> [ 'John', 'Snow' ] */
    
    function strToArr (str) {
        return str.split(" ")
    }
 
    console.log(strToArr("John Snow"));


    /* 6. Write a function to convert a string to its abbreviated form. 

    "John Snow" -> 	"John S." */
    
    function conv(str) {
        var finalAr = [];
       var splitedStr = str.split(" ");
      var shortSurname = splitedStr[1][0] + ".";
      finalAr.push(splitedStr[0])
    return finalAr
    }
    console.log(conv("John Snow"))

    

