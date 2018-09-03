export class Movie {
    movie_id: number;
    name: string;
    text: string;
    image: object;


    static counter = 0;

    constructor(movie_id: number, _name: string, _text: string, _image: object) {
        this.movie_id = movie_id;
        this.name = _name;
        this.text = _text;
        this.image = _image;
    }
}
