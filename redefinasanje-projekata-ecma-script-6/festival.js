"use strict";
(function () {


  //create constructor functions Genre, Movie, Program and Festival

  function Genre(name) {
    this.name = name;
  }

  Genre.prototype.getData = function () {
    const firstLetter = this.name[0].toUpperCase();
    const lastLetter = this.name[this.name.length - 1].toUpperCase();
    return `${firstLetter}${lastLetter}`;
  }


  function Movie(title, genre, length) {
    if (!genre || !(genre instanceof Genre)) {
      console.log("invalid input");
      return;
    }
    if (typeof length !== "number") {
      throw new Error("Movie length has to be number");
    }
    this.title = title;
    this.genre = genre;
    this.length = length;
  }

  Movie.prototype.getData = function () {
    return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
  }




  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
  }

  Program.prototype.countOfGenre = function (movie) {
    let count = 0;
    this.listOfMovies.forEach(function (element) {
      if (element.genre.name === movie.genre.name) {
        count++;
      }
    });
    return count;
  }

  Program.prototype.lengthOfAllMovie = function () {
    let sumOfMinutes = 0;
    this.listOfMovies.forEach(function (item) {
      sumOfMinutes += item.length;
    });
    return sumOfMinutes;
  }

  Program.prototype.addMovie = function (movie) {
    if (!movie || !(movie instanceof Movie)) {
      console.log("Invalid input!!!");
      return;
    }
    if (this.countOfGenre(movie) >= 4) {
      console.log(`there is already maximum movies of that genre! Movie ${movie.title} not added`);
      return;
    }
    const allMovieLength = this.lengthOfAllMovie() / 60;
    const movieInHours = movie.length / 60;
    if (allMovieLength + movieInHours > 8) {
      console.log(`Length of program exceeds 8 hours! Movie ${movie.title} not added to program`);
      return;
    }
    this.listOfMovies.push(movie);
  }

  Program.prototype.getTotalMovies = function () {
    return this.listOfMovies.length;
  };

  Program.prototype.getData = function () {
    const day = this.date.getDate();
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    const date = `${day}.${month}.${year}`;
    let resultStr = ` ${date}, ${this.lengthOfAllMovie()}min\n`;
    for (let i = 0; i < this.listOfMovies.length; i++) {
      if (i === this.listOfMovies.length - 1) {
        resultStr += `    ${this.listOfMovies[i].getData()}`;
      } else {
        resultStr += `    ${this.listOfMovies[i].getData()}\n`;
      }
    }
    return resultStr;
  }



  function Festival(name, maxMovies) {
    if (typeof maxMovies !== "number") {
      throw new Error("maxMovies has to be number");
    }
    
    this.name = name;
    this.maxMovies = maxMovies;
    this.listOfPrograms = [];
  }

  Festival.prototype.getNumOfMovies = function () {
    let count = 0;
    this.listOfPrograms.forEach(function (program) {
      count += program.getTotalMovies();
    });
    return count;
  }

  Festival.prototype.addProgram = function (program) {
    if (!program || !(program instanceof Program)) {
      console.log("Invalid input!!!");
      return;
    }
    if (this.getNumOfMovies() + program.listOfMovies.length > this.maxMovies) {
      console.log("You reached the maximum number of movies. Program has not added.");
      return;
    }
    this.listOfPrograms.push(program);
  }

  Festival.prototype.getData = function () {
    let resultsStr = this.name
    if (this.listOfPrograms.length === 0) {
      resultsStr += "\n \t Program to be announced";
      return resultsStr;
    }
    resultsStr += ` has ${this.getNumOfMovies()} movie titles \n`;
    this.listOfPrograms.forEach(function (program) {
      resultsStr += `${program.getData()} \n`;
    })
    return resultsStr;
  }
  //createMovie and createProgram functions

  function createMovie(title, genreString, length) {
    const genre = new Genre(genreString);
    return new Movie(title, genre, length);
  }

  function createProgram(date) {
    return new Program(date);
  }

  function createFestivalEvent() {
    const fest = new Festival("Fest", 7);
    const bitef = new Festival("Bitef", 8);

    const tuesdayProgram = createProgram("12/6/2018");
    const wednesdayProgram = createProgram("12/7/2018");

    const transporter = createMovie("Transporter", "action", 95);
    const punisher = createMovie("Punisher", "action", 105);
    const shutterIsland = createMovie("Shutter Island", "action", 138);
    const fightClub = createMovie("Fight Club", "action", 12555);
    const doniDarko = createMovie("Doni Darko", "action", 125);

    tuesdayProgram.addMovie(transporter);
    tuesdayProgram.addMovie(punisher);
    tuesdayProgram.addMovie(shutterIsland);
    tuesdayProgram.addMovie(fightClub);
    wednesdayProgram.addMovie(transporter);
    wednesdayProgram.addMovie(punisher);
    wednesdayProgram.addMovie(shutterIsland);
    wednesdayProgram.addMovie(fightClub);
    wednesdayProgram.addMovie(doniDarko);

    fest.addProgram(tuesdayProgram);
    fest.addProgram(wednesdayProgram);

    console.log(bitef.getData());
    console.log(fest.getData())
  }

  (function() {
    try {
      createFestivalEvent();
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  })();
})();
