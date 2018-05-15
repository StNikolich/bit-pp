// functions bind, call apply
var firstObj = {
    name: "Pera",
    surname: "Peric",
    sayName: function() {
        console.log("I am " + this.name + " " + this.surname) ;
    }
}
var secondObj = {
    name: "Zika",
    surname: "Zikic"
}
firstObj.sayName.call(secondObj);
var sayName = firstObj.sayName.bind(secondObj);
sayName();

var someObj = {
    name: "ime",
    sayName: function(who) {
        console.log(who + " " + "my name is " + this.name)
    }
}
var newObj = {
    name: "novi obj"
}
someObj.sayName.apply(newObj, ["fff"]);

// this in a variable
var thirdObj = {
    name: "Mika",
    surname: "Mikic",
    sayName: function() {
        var that = this;
        return function() {
            console.log(that.name);
        }
    }
}
thirdObj.sayName()();

// this as argument
var fourthObj = {
    name: "Mika",
    surname: "Mikic",
    sayName: function(that) {
        return function() {
            console.log(that.name);
        }
    }
}

fourthObj.sayName(fourthObj)();

//Inheritance
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
};

Person.prototype.getFullName = function () {
    return this.name + this.surname
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


function Developer(name , surname , job , salary , specialization) {
    this.specialization = specialization;
    Employee.call(this,name,surname,job,salary);
}
Developer.prototype.getSpecialization = function() {
    console.log(this.specialization);
}
function Manager(name , surname , job , salary , department) {
    this.department = department;
    Developer.call(this,name,surname,job,salary);
}
Manager.prototype.getDepartment = function() {
    console.log(this.department);
}
Manager.prototype.changeDepartment = function() {

}