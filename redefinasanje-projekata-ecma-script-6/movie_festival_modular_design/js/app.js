const mainModule = (function (ui, data) {

    const createMovieButton = document.querySelector("#create-movie"),
        createProgramButton = document.querySelector("#create-program"),
        addMovieToProgramButton = document.querySelector("#add-movie");

    createMovieButton.addEventListener("click", function () {
        const movieErrorElement = document.querySelector("#movie-error");
        //collect data
        const formData = ui.collectMovieData();
        //validate data
        if (!data.isValidateMovie(formData.title, formData.length, formData.genre)) {
            movieErrorElement.textContent = "Invalid input!";
            return;
        }
        //create Movie and add it to Festival.listOfAllMovies
        const createdMovie = data.createMovie(formData.title, formData.length, formData.genre);
        const index = data.addMovie(createdMovie);
        //update ui
        ui.updateMovieList(createdMovie, index);
        ui.clearInputs();
    });


    createProgramButton.addEventListener("click", function(){
      const programErrorElement = document.querySelector("#program-error");
      //collect form data
      const formData = ui.collectProgramData();
      //validate data
      if(!data.isValidProgram(formData.date)) {
        programErrorElement.textContent = "Invalid input!";
        return;
      }
      //create Program and add it to Festival.ListOfAllPrograms
      const createdProgram = data.createProgram(formData.date);
      const index = data.addProgram(createdProgram);
      //update ui
      ui.updateProgramList(createdProgram, index);
    });


    addMovieToProgramButton.addEventListener("click", function(){
      //collect data
      const formData = ui.collectAddMovieFormData();
      //add Movie to Program
      const updatedProgram = data.addMovieToProgram(formData.movieIndex, formData.programIndex);
      //update ui data
      ui.updateProgramData(updatedProgram.program, updatedProgram.oldProgramData);

    });

})(uiModule, dataModule);
