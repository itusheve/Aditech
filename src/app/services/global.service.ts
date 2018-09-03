import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Observable";

import "rxjs/Rx";
import {Subject} from "rxjs/Subject";
import {Movie} from "../models/Movie";
import {Http, Response} from "@angular/http";


@Injectable()
export class GlobalService {

    private movieSubject = new Subject<any>();

    private movies: Movie[] = [
        {
            "movie_id": 1,
            "name": "Dante Alighieri",
            "text": "the Divine Comedy",
            "image": new Image()
        },
        {
            "movie_id": 2,
            "name": "Chinua Achebe",
            "text": "Things Fall Apart ",
            "image": new Image()
        },
        {
            "movie_id": 3,
            "name": "Hans Christian Andersen",
            "text": '@@THIS is a BooK!!',
            "image": new Image()
        }
    ];

    constructor(private http: Http) {

    }

    getMovies(): Observable<Movie[]> {

        return Observable.of(this.movies);
    }

    addMovie(movie: Movie) {

        let founded = this.movies.find((b: Movie) => {
            return b.name.toLowerCase() === movie.name.toLowerCase();
        });
        if (founded) {
            this.movieSubject.next({movies: this.movies,error:'Movie with the same title already exist'});
            return;
        }
        movie.movie_id = this.movies[this.movies.length - 1].movie_id++;
        this.movies.push(movie);


        this.movieSubject.next({movies: this.movies});
    }

    updateMovie(movie: Movie) {


        let foundedMovie = this.movies.find((b) => {
            return b.movie_id == movie.movie_id;
        });

        foundedMovie.name = movie.name;
        foundedMovie.text = movie.text;
        foundedMovie.image = movie.image;

        this.movieSubject.next({movies: this.movies});
    }

    deleteMovie(movie: Movie) {

        let index = this.movies.findIndex(x => x.movie_id == movie.movie_id);

        if (index > -1) {
            this.movies.splice(index, 1);


            this.movieSubject.next({movies: this.movies});
        }
    }

    moviesListOnUpdate(): Observable<Movie[]> {
        return this.movieSubject.asObservable();
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    // getUserById(userId: number): Promise<User> {
    //     let users: User[] = this.getUsersFromStorage();
    //
    //     let user = users.find((u) => {
    //         return u.id == userId;
    //     });
    //
    //     return Promise.resolve(user);
    // }
    //
    // updateUser(userToUpdate: User) {
    //     let users: User[] = this.getUsersFromStorage();
    //
    //     let user = users.find((u) => {
    //         return u.id == userToUpdate.id;
    //     });
    //
    //     user.firstName = userToUpdate.firstName;
    //     user.lastName = userToUpdate.lastName;
    //     user.image = userToUpdate.image;
    //
    //     localStorage.setItem('users', JSON.stringify(users));
    //
    //     this.userSubject.next({users: users});
    // }
    //
    //
    // addUser(userToAdd: User) {
    //     let users: User[] = this.getUsersFromStorage();
    //
    //     userToAdd.id = users[users.length - 1].id++;
    //     users.push(userToAdd);
    //     localStorage.setItem('users', JSON.stringify(users));
    //
    //     this.userSubject.next({users: users});
    // }
    //
    // deleteUser(user: User) {
    //     let users: User[] = this.getUsersFromStorage();
    //     let index = users.findIndex(x => x.id == user.id);
    //
    //     if (index > -1) {
    //         users.splice(index, 1);
    //         localStorage.setItem('users', JSON.stringify(users));
    //
    //         this.userSubject.next({users: users});
    //     }
    // }


}
