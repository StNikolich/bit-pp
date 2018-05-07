
var jovica = {
    name: "Jovica",
    lastname: "Krivosija",
    age: 31,
    interests: ["programming", "guitar", "poker"],
    placeOfBirth: "Bihac",
    job: undefined,
    sleep: function(){
        return "sleeping...";
    }
}

var stevan = {
    name: 'Stevan' ,
    surname: 'Nikolich' ,
    interests: ['gambbling' , 'sports' , 'reading'],
    age: 29,
    job: false,
    eat: function() {
        console.log('eating junk food');
    }


}


//console.log(jovica.interests[0]);

//console.log(stevan.interests[2]);

//console.log(jovica.sleep());

//console.log(stevan.eat());

//console.log(stevan.job);

stevan.school = {
    middle: 'Gymnasium',
    high: 'Law school'
}

jovica.school = {
    middle: "Trgovinski tehnicar",
    high: "Economy in tourism"
}

//console.log(jovica);

//console.log(stevan);

//console.log(stevan.school.high);

stevan.placeOfBirth = 'Belgrade';

//console.log(stevan.placeOfBirth);

// task 1

var coffeeStevo = {
    name: 'doncaffee',
    strenght: 'strong',
    flavour: 'fuj',
    milk: 'no',
    sugar: 'as you wish'
}

var cofeeJovica = {
    name: "ristreto",
    strenght: "very strong",
    flavour: false,
    milk: false,
    sugar: "sweet"
}

//task2

var favoriteMovieJovica = {
    title: "The Good, The Bad and The Ugly",
    director: "Sergio Leone",
    actors: ["Clint Eastwood", "Josh Neki"],
    genre: "Spaghetti Western",
    popularity: "high"
}

var stevanFavoriteFilm = {
    title: 'Scarface' ,
    director: 'Someone' ,
    actors: ['Al Pacino' , ' and others'],
    genre: 'action' ,
    popularity: 'worldwide'
}

//console.log(stevanFavoriteFilm);

//task 3

function createProgram(desc, language, git, status){
    var program = {
        description: desc,
        programmingLanguage: language,
        gitRepository: git,
        status: isComplited,
        repo: function(){
            return ("http://...")
        },
        isJavaScript: function(){
            if (program.programmingLanguage === "JavaScript"){
                return true;
            } else{
                return false;
            }
        }
    }

    return program;
}

console.log(createProgram("cool program", "JavaScript", "www.github.com", true));

console.log(createProgram("cool program", "PhP", "www.github.com", true).isJavaScript());

//task4

var culinaryRecipeCreator = function(name, typeOfCuisine, complexity, listOfIngredients , PreparingTime , PreparingInstructions){
    var = recipe {
        nameOfRecipe: name,
        cuisine: typeOfCuisine,
        complex: complexity,
        ingredians: listOfIngredients,
        time: PreparingTime,
        instructions: PreparingInstructions,
        necessaryIngredients: function {
            return listOfIngredients ;
        } 
    }

}