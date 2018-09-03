var Movie = (function () {
    function Movie(movie_id, _name, _descreption, _image) {
        this.movie_id = movie_id;
        this.name = _name;
        this.descreption = _descreption;
        this.image = _image;
    }
    Movie.counter = 0;
    return Movie;
}());
export { Movie };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/models/Movie.js.map