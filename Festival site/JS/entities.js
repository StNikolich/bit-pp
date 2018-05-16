function Movie (title,duration,genre) {
    this.title = title ;
    this.duration = duration ;
    this.genre = genre;
}
Movie.prototype.getData = function() {
    var firstLastLetter = this.title + ' ' + this.duration + ' min ' + this.genre[0].toUpperCase() + this.genre[this.genre.length - 1].toUpperCase();
    return firstLastLetter;
}


function Program (date){
    this.date = new Date(date);
}
Program.prototype.getData = function(){
 var day = this.date.getDate();
 var month = this.date.getMonth();
 var year = this.date.getFullYear();
 var fullDate = day+"/"+month+"/"+year+" there are 2 movies!"
 return fullDate;   
}


