(function() {
  console.log("hi");
  function Genre(name) {
    this.name = name;
  }
  Genre.prototype.getData = function() {
    var firstNameChar = this.name.charAt(0).toUpperCase();
    var lastNameChar = this.name.charAt(this.name.length - 1).toUpperCase();
    return firstNameChar + lastNameChar;
  };
  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
  }
  Movie.prototype.getData = function() {
    var movieData =
      this.title + " " + this.length + " min " + this.genre.getData();
    return movieData;
  };
  
  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];

  }

Program.prototype.numberOfMovies = function() {
  return this.listOfMovies.length;
};
Program.prototype.addMovie = function(movie) {
  this.listOfMovies.push(movie);
  return this.listOfMovies;
};
Program.prototype.totalMoviesLength = function() {
  var sumLength = 0;
  for(var i=0; i<this.listOfMovies.length; i++) {
      sumLength += this.listOfMovies[i].length;
  };
  return sumLength;
};
Program.prototype.getData = function() {
  var date = this.date;
  var programData = this.date.getDate() +"."+ (this.date.getMonth() + 1) +"."+ this.date.getFullYear() + ", Program duration: " +  this.totalMoviesLength() +" min" + '\n'; 
  for (var i = 0 ; i < this.listOfMovies.length ; i++) {
      programData += '\t' + '\t' + this.listOfMovies[i].getData() + '\n';
  };
  return programData;
};
  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
  }

  Festival.prototype.totalNumberOfMovies = function() {
    var sum = 0;
    for(var i=0; i<this.listOfPrograms.length; i++) {
        sum += this.listOfPrograms[i].numberOfMovies();
    }
    return sum;
}
  Festival.prototype.addProgram = function(program) {
    this.listOfPrograms.push(program) ;
    return this.listOfPrograms;
};
Festival.prototype.getData = function() {
  var festData = this.name + " " + 'has ' + this.totalNumberOfMovies() + " movie titles" + '\n';
  for(var i = 0 ; i < this.listOfPrograms.length ; i++) {
      festData += '\t' + this.listOfPrograms[i].getData() + '\n'
  }
  return festData;
}

  function createMovie (titleStr,genreStr,length) {
    var genre = new Genre(genreStr)
  return new Movie(titleStr,genre,length);
  }

  function createProgram (date) {
    return new Program(date);
  }
  var lesi = createMovie("Lesi", "comedi", 111);
console.log(lesi) ;
var maratonci = createMovie("Maratonci", "comedi", 166);
console.log(maratonci) ;
var scarface = createMovie("Scarface", "crimi", 150);
console.log(scarface) ;
var tockovi = createMovie("Tockovi", "drama", 202);
console.log(tockovi) ;
var kum = createMovie("Kum", "drama", 252);
console.log(kum) ;

var program1 = createProgram("10/10/2019");
var program2 = createProgram("12/12/2022");
program2.addMovie(scarface);
program2.addMovie(maratonci);
program1.addMovie(lesi);
program1.addMovie(tockovi);
var fest = new Festival ('Beofest');
fest.addProgram(program1);
fest.addProgram(program2);
console.log(fest);
console.log(fest.getData());





//   var drama = new Genre("drama");
//   //   console.log(drama.getData());

//   var tockovi = new Movie("Tockovi", drama, 113);
//   var kum = new Movie("Kum", drama, 202);
//   var scarface = new Movie ('Scarface' , drama , 150);
//   var maratonci = new Movie ('Maratonci' , drama , 166);

//   var program1 = new Program("10/10/2019");
//   program1.addMovie(tockovi)
//   program1.addMovie(maratonci)

// //   console.log(program1.getData());
  
//   var program2 = new Program('9/3/2022');
//   program2.addMovie(scarface);
//   program2.addMovie(maratonci);

//   var summerFest = new Festival ('Summer-Fest');
//   summerFest.addProgram(program1)
//   summerFest.addProgram(program2)

//   console.log(summerFest.getData());
  
})();
