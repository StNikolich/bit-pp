const dataModule = (function() {

  const festival = createFestival();

  function Festival() {
    this.listOfAllMovies = [];
    this.listOfPrograms = [];
  }

  function createFestival() {
    return new Festival();
  }





  function Movie(title, length, genre) {

    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
  }


  Movie.prototype.getGenreCode = function() {
    const firstLetter = this.genre[0].toUpperCase();
    const lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    return `${firstLetter}${lastLetter}`;
  };

  Movie.prototype.getData = function() {
    return `${this.title}, ${this.length}min, ${this.getGenreCode()}`;
  };


  function createMovie(title, length, genre) {
    return new Movie(title, length, genre);
  }

  function addMovie(movie) {
    return festival.listOfAllMovies.push(movie) - 1;
  }

  function isValidateMovie(title, length, genre) {
    if (!title || !genre || !length) {
      return false;
    }
    return true;
  }





  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
  }

  Program.prototype.lengthOfAllMovie = function() {
    let sumOfMinutes = 0;
    this.listOfMovies.forEach(function(item) {
      sumOfMinutes += item.length;
    });
    return sumOfMinutes;
  }

  Program.prototype.addMovie = function(movie) {
    if (!movie || !(movie instanceof Movie)) {
      console.log("Invalid input!!!");
      return;
    }
    this.listOfMovies.push(movie);
  }

  Program.prototype.getTotalMovies = function() {
    return this.listOfMovies.length;
  };

  Program.prototype.getData = function() {
    const day = this.date.getDate();
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    const date = `${day}.${month}.${year}`;
    let resultStr = date;
    if (this.getTotalMovies() === 0) {
      resultStr += ", Program to be announced.";
      return resultStr;
    }
    resultStr += `, ${this.getTotalMovies()} movies, duration: ${this.lengthOfAllMovie()}min`;
    return resultStr;
  }

  function isValidProgram(dateString) {
    if (!dateString) {
      return false;
    }
    const date = new Date(dateString);

    if (date.getTime() < Date.now()) {
      return false;
    }
    hasProgramWithSameDate = festival.listOfPrograms.some(function(program) {
      return date.getTime() === program.date.getTime();
    });

    if (hasProgramWithSameDate) {
      return false;
    }
    return true;
  }

  function createProgram(dateString) {
    const date = new Date(dateString);
    return new Program(date);
  }

  function addProgram(program){
    return festival.listOfPrograms.push(program) - 1;
  }


  function addMovieToProgram(movieIndex, programIndex) {

    const movie = festival.listOfAllMovies[movieIndex];
    const program = festival.listOfPrograms[programIndex];
    const oldProgramData = program.getData();

    program.addMovie(movie);

    return {
      program,
      oldProgramData
    };
  }



  return {
    createFestival,
    isValidateMovie,
    createMovie,
    addMovie,
    isValidProgram,
    createProgram,
    addProgram,
    addMovieToProgram

  };


})();
