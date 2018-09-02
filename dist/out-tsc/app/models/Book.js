var Book = (function () {
    function Book(_id, _author, _title, _date) {
        this.id = _id;
        this.author = _author;
        this.title = _title;
        this.date = _date;
    }
    Book.counter = 0;
    return Book;
}());
export { Book };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/models/Movie.js.map