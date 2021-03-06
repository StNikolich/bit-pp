"use strict";

(function () {

  function Person(name, surname) {
    if (!name || !surname) {
      throw new Error("Name and Surname are required");
    }
    if (typeof name !== "string" || typeof surname !== "string") {
      throw new Error("Name and surname need to be string type");
    }
    this.name = name;
    this.surname = surname;
  }

  Person.prototype.getData = function () {
    return `${this.name} ${this.surname}`;
  }



  function Seat(number, category) {
    this.category = category || "e";
    if (this.category !== "b" && this.category !== "e") {
      throw new Error("Invalid category input");
    }
    this.number = number || Math.floor(Math.random() * 91 + 10);
  }

  Seat.prototype.getData = function () {
    if (this.category === "e") {
      return `${this.number}, economy`;
    } else if (this.category === "b") {
      return `${this.number}, business`;
    }
  }


    function Passenger(person, seat) {
      if (!person || !(person instanceof Person)) {
        throw new Error("Invalid person input");
      }
      if (!(seat instanceof Seat)) {
        throw new Error("Invalid seat input");
      }
      this.person = person;
      this.seat = seat;
    }

    Passenger.prototype.getData = function () {
      return `${this.seat.getData()}, ${this.person.getData()}`;
    }



    function Flight(relation, date) {
      if (!relation || !date) {
        throw new Error("Relation and date are required");
      }
      this.relation = relation;
      this.date = new Date(date);
      this.listOfPassengers = [];
    }

    Flight.prototype.formatRelation = function () {
      const arrRelation = this.relation.split("-");
      let resArr = [[], []];
      let count = 0;
      const vowels = ["a", "e", "i", "o", "u"];
      arrRelation.forEach(function (city) {
        let trimmed = city.trim();

        for (let i = 0; i < trimmed.length; i++) {
          let condition = vowels.every(function (vowel) {
            return trimmed[i] !== vowel;
          });
          if (condition) {
            resArr[count].push(trimmed[i].toUpperCase());
          }
        }
        count++;
      });
      const firstArr = resArr[0];
      const secondArr = resArr[1];
      return `${firstArr[0]}${firstArr[firstArr.length - 1]} - ${secondArr[0]}${secondArr[secondArr.length - 1]}`;
    }

    Flight.prototype.addPassenger = function (passenger) {
      if (!passenger || !(passenger instanceof Passenger)) {
        throw new Error("Invalid passenger input");
      }
      const isSameSeat = this.listOfPassengers.some(function (passeng) {
        return (passeng.seat.number === passenger.seat.number)
      })

      if (isSameSeat) {
        throw new Error("This seat number is already taken");
      }

      for (let i = 0; i < this.listOfPassengers.length; i++) {
        if (this.listOfPassengers[i].person.getData() === passenger.person.getData()) {
          this.listOfPassengers[i].seat.number = passenger.seat.number;
          this.listOfPassengers[i].seat.category = passenger.seat.category;
          return;
        }
      };

      if (this.listOfPassengers.length > 100) {
        throw new Error("This flight has already have maximum number of passengers");
      }

      this.listOfPassengers.push(passenger);
    }

    Flight.prototype.getData = function () {
      const day = this.date.getDate();
      const month = this.date.getMonth() + 1;
      const year = this.date.getFullYear();
      const date = day + "." + month + "." + year;
      let resString = ` ${date}, ${this.formatRelation()}\n`;
      for (let i = 0; i < this.listOfPassengers.length; i++) {
        if (i === this.listOfPassengers.length - 1) {
          resString += `    ${this.listOfPassengers[i].getData()}`;
        } else {
          resString += `    ${this.listOfPassengers[i].getData()}\n`;
        }
      }
      return resString;
    }

    Flight.prototype.getTotalBusinessPassengers = function(){
      let count = 0;
      this.listOfPassengers.forEach(function(passenger){
        if (passenger.seat.category === 'b') {
          count++;
        }
      })
      return count;
    }

    function Airport() {
      this.name = "Nikola Tesla";
      this.listOfFlights = [];
    }

    Airport.prototype.addFlight = function (flight) {
      if (!flight || !(flight instanceof Flight)) {
        throw new Error("Invalid flight input");
      }
      this.listOfFlights.push(flight);
    }

    Airport.prototype.getTotalPassengers = function () {
      let count = 0;
      this.listOfFlights.forEach(function (flight) {
        count += flight.listOfPassengers.length;
      });
      return count;
    }

    Airport.prototype.getData = function () {
      let resString = `Airport: ${this.name}, total passengers: ${this.getTotalPassengers()}, total business passengers: ${this.getTotalBusinessPassengers()}\n`;
      this.listOfFlights.forEach(function (flight) {
        resString += `${flight.getData()}\n`;
      });
      return resString;
    }

    Airport.prototype.getTotalBusinessPassengers = function(){
      let sum = 0;
      this.listOfFlights.forEach(function(flight){
        sum += flight.getTotalBusinessPassengers();
      });
      return sum;
    }


    function createFlight(relation, date) {
      return new Flight(relation, date);
    }

    function createPassenger(name, surname, seatNumber, category) {
      const person = new Person(name, surname);
      const seat = new Seat(seatNumber, category);
      return new Passenger(person, seat);
    }




    //testing

    function createAirport() {
      const nikolaTesla = new Airport();
      const belgradeNewYork = createFlight("Belgrade - New York", "Oct 25 2017");
      const barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017");
      const johnSnow = createPassenger("John", "Snow", 1, "b");
      const cerseiLannister = createPassenger("Cersei", "Lannister", 2, "b");
      const cerseiLanniste = createPassenger("Cersei", "Lannister", 6, "e");
      const daenerysTargaryen = createPassenger("Daenerys", "Targaryen", 14);
      const tyrionLannister = createPassenger("Tyrion", "Lannister");
      const jonSnow = createPassenger("Jon", "Snow", 3, "b");

      belgradeNewYork.addPassenger(johnSnow);
      belgradeNewYork.addPassenger(cerseiLannister);
      belgradeNewYork.addPassenger(jonSnow);
      barcelonaBelgrade.addPassenger(daenerysTargaryen);
      barcelonaBelgrade.addPassenger(tyrionLannister);
      nikolaTesla.addFlight(belgradeNewYork);
      nikolaTesla.addFlight(barcelonaBelgrade);
      console.log(nikolaTesla.getData());
    }

    (function () {
      try {
        createAirport();
      } catch (e) {
        console.log(`Error: ${e.message}`);
      }
    })();


  }) ();
