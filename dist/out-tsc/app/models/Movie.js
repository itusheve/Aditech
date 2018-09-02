var Movie = (function () {
    function Movie(_id, _author, _title, _date) {
        this.id = _id;
        this.author = _author;
        this.title = _title;
        this.date = _date;
    }
    Movie.counter = 0;
    return Movie;
}());
export { Movie };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/models/Movie.js.map