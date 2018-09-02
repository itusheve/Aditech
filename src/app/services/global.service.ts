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
            "id": 1,
            "author": "Dante Alighieri",
            "title": "the Divine Comedy",
            "date": new Date()
        },
        {
            "id": 2,
            "author": "Chinua Achebe",
            "title": "Things Fall Apart ",
            "date": new Date()
        },
        {
            "id": 3,
            "author": "Hans Christian Andersen",
            "title": '@@THIS is a BooK!!',
            "date": new Date()
        }
    ];

    constructor(private http: Http) {

    }

    getMovies(): Observable<Movie[]> {

        return Observable.of(this.movies);
    }

    addMovie(movie: Movie) {

        let founded = this.movies.find((b: Movie) => {
            return b.title.toLowerCase() === movie.title.toLowerCase();
        });
        if (founded) {
            this.movieSubject.next({movies: this.movies,error:'Movie with the same title already exist'});
            return;
        }
        movie.id = this.movies[this.movies.length - 1].id++;
        this.movies.push(movie);


        this.movieSubject.next({movies: this.movies});
    }

    updateMovie(movie: Movie) {


        let foundedBook = this.movies.find((b) => {
            return b.id == movie.id;
        });

        foundedBook.title = movie.title;
        foundedBook.author = movie.author;
        foundedBook.date = movie.date;

        this.movieSubject.next({movies: this.movies});
    }

    deleteMovie(movie: Movie) {

        let index = this.movies.findIndex(x => x.id == movie.id);

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
