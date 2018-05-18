// Method Pop()!

Array.prototype.myPop = function() {
 var newArr = [];
 for(var i = 0 ; i < this.length - 1 ; i ++) {
     newArr[newArr.length] = this[i]; 
 }
 return newArr;
}

console.log([1,2,3,4,5].myPop());


//Method Push()!


Array.prototype.myPush = function(item){
    this[this.length] = item
    return this.length;
}
var arr = [1,2,3,4,5,6];
arr.myPush(7);
console.log(arr);


//Method join()!
Array.prototype.myJoin = function() {
  var  str = "";
    var app =", "
   for(var i = 0; i < this.length;i++ ){
       
       if(this[i] == this[0]){
           str += this[i];
           continue;
       }
      
           str +=app +this[i];

   }
   return str;
}    
var newString = ["ovo","je","neki","nadrkani","planjanin"];
console.log(newString.myJoin());


// Method filter() 

Array.prototype.myFilter = function(backcall) {
    var filteredArr = "";
    
        for(var i = 0 ; i < this.length ; i ++) {
        if(backcall(this[i])){
            filteredArr += this[i];
        }
    }
    return filteredArr;
}

var someArr =[1,2,3,4,5,6];
console.log(someArr.myFilter(function(item){
    return item % 2 === 0;
}));


Array.prototype.myIndexOf = function(item){
    for(var i = 0;i < this.length ; i++){
        if(item === this[i]){
            return i;
        }
        
            return -1;
        
    }
    };


var something =["ako","ovo","ne","radi"];

console.log(something.myIndexOf("nesto"));