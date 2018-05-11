(function() {
  console.log("hi");
  function Genre(name) {
    this.name = name;
    this.getData = function() {
      var firstNameChar = this.name.charAt(0).toUpperCase();
      var lastNameChar = this.name.charAt(this.name.length - 1).toUpperCase();
      return firstNameChar + lastNameChar;
    };
  }
  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function() {
      var movieData =
        this.title + " " + this.length + " min " + this.genre.getData();
      return movieData;
    };
  }
  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = function() {
        return this.listOfMovies.length;
    }
    this.addMovie = function(movie) {
      this.listOfMovies.push(movie);
      return this.listOfMovies;
    };
    this.totalMoviesLength = function() {
        var sumLength = 0;
        for(var i=0; i<this.listOfMovies.length; i++) {
            sumLength += this.listOfMovies[i].length;
        }
        return sumLength;
    }
    this.getData = function() {
        var programData = this.date.getDay() +"/"+ this.date.getMonth() +"/"+ this.date.getFullYear() + ", " +  this.totalMoviesLength() +" min" + '\n'; 
        for (var i = 0 ; i < this.listOfMovies.length ; i++) {
            programData += this.listOfMovies[i].getData() + '\n';
        }
        return programData;
    }
  }
  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalNumberOfMovies = function() {
        var sum = 0;
        for(var i=0; i<this.listOfPrograms.length; i++) {
            sum += this.listOfPrograms[i].numberOfMovies();
        }
    }
    this.addProgram = function(program) {
        this.listOfPrograms.push(program) ;
        return this.listOfPrograms;
    };
    this.getData = function() {
        var festData = this.name + " " + '\n';
        for(var i = 0 ; i < this.listOfPrograms.length ; i++) {
            festData += '\t' + this.listOfPrograms[i].getData() + '\n'
        }
        return festData;
    }
  }

  function createMovie (titleStr,length,genreStr) {
    var genre = new Genre(genreStr)
  return new Movie(titleStr,length,genre);
  }
  var lesi = createMovie("Lesi", 111, "comedi");
console.log(lesi) ;
var maratonci = createMovie("Maratonci", 166, "comedi");
console.log(maratonci) ;
var scarface = createMovie("Scarface", 150, "crimi");
console.log(scarface) ;
var tockovi = createMovie("Tockovi", 202, "drama");
console.log(tockovi) ;
var kum = createMovie("Kum", 252, "drama");
console.log(kum) ;


//   var drama = new Genre("drama");
//   //   console.log(drama.getData());

//   var tockovi = new Movie("Tockovi", drama, 113);
//   var kum = new Movie("Kum", drama, 202);
//   var scarface = new Movie ('Scarface' , drama , 150);
//   var maratonci = new Movie ('Maratonci' , drama , 166);

  var program1 = new Program("10/10/2019");
  program1.addMovie(tockovi)
  program1.addMovie(maratonci)

//   console.log(program1.getData());
  
  var program2 = new Program('9/3/2022');
  program2.addMovie(scarface);
  program2.addMovie(maratonci);

  var summerFest = new Festival ('Summer-Fest');
  summerFest.addProgram(program1)
  summerFest.addProgram(program2)

  console.log(summerFest.getData());
  
})();
