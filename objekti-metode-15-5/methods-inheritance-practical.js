

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
}



function Employee(name, surname, job, salary) {
    this.job = job;
    this.salary = salary;
    Person.call(this, name, surname);
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary;
}

Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function () {
    this.salary = this.salary * 1.1;
}

function Developer(name, surname, job, salary, specialization) {
    this.specialization = specialization;
    Employee.call(this, name, surname, job, salary);
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

function Manager(name, surname, job, salary, department) {
    this.department = department;
    Employee.call(this, name, surname, job, salary);
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}
Manager.prototype.changeDepartment = function (newValue) {
    this.department = newValue;
}


var ukiDeveloper = new Developer ("Uros", "Miletic", "Vrsni programer", 2200, "frontend");

ukiDeveloper.increaseSalary();
ukiDeveloper.getSalary();
ukiDeveloper.getSpecialization();






