

function createMovie(){
    var titleInput = document.querySelector(".movie-title");
    var durationInput = document.querySelector(".movie-length");
    var genreSelect = document.querySelector(".dropdown");
    
    var title = titleInput.value ;
    var duration = durationInput.value ;
    var genre = genreSelect.value ; 
///////
    if(!title || !duration || genre === '-' ){
        alert('Invalid input');
    }
    

    createMovie = new Movie (title, duration, genre);
    document.querySelector(".movie-list").innerHTML += createMovie.getData() +"<br >";
}


var movieButton = document.querySelector(".AddMovieButton");
movieButton.onclick = createMovie;

function createProgram (){
    var dateProgram1 = document.querySelector(".program-date")
    var dateProgram = dateProgram1.value;

    createProgram = new Program (date);
    document.querySelector(".listDate").innerHTML += createProgram.getData();
}
var programButton = document.querySelector(".AddProgramButton");
programButton = createProgram;

//     EASY PEAZY LEMON SQUIZY     //