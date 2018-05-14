'use strict';

(function () {
console.log('Ciaooo');
function Person (name,surname) {
    this.name = name ;
    this.surname = surname ;
}
Person.prototype.getData = function() {
    var strName = this.name + ' ' + this.surname ;
    return strName ;
}

function Seat (number,category) {
    this.number = number || Math.floor(Math.random() * 90) + 10;
    this.category = category || "e";
}
Seat.prototype.getData = function () {
 var numAndCategory = this.number + ', ' + this.category.toUpperCase() ;
 return numAndCategory;

}
function Passenger (person , seat) {
    this.person = person;
    this.seat = seat ;
}
Passenger.prototype.getData = function() {
    this.seat.getData() + this.person.getData()
}
function Flight (relation , date ) {
    this.relation = relation ;
    this.date = new Date(date);
    this.listOfPassengers = [] ;

}
function Airport (name) {
    this.name = 'Nikola-Tesla' ;
    this.listOfFlights = [];
}

    var seat1 = new Seat(6, "e");
    console.log(seat1); 
})();