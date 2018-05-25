const dataModule = (() => {

    class Show {
        constructor(title, image) {
            this.title = title;
            this.image = image;
        }
    }
    
    function sendRequest(successHandler) {
        const request = $.ajax({
            url: "http://api.tvmaze.com/shows",
            method: "GET"
    });

request.done(function(response) {
    console.log(response)
    successHandler(response);
    });

    function filterMovies(response) {
        response.sort(function(curr, next) {
            curr = curr.rating.average;
            next = next.rating.average;
            return next - curr
        } );
        const top50 = response.slice(0,50);
        return top50;
        
    }
};
return sendRequest;
})();

