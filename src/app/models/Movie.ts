export class Movie {
    movie_id: number;
    name: string;
    descreption: string;
    image: object;


    static counter = 0;

    constructor(movie_id: number, _name: string, _descreption: string, _image: object) {
        this.movie_id = movie_id;
        this.name = _name;
        this.descreption = _descreption;
        this.image = _image;
    }
}
