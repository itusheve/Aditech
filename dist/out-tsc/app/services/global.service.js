var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";
var GlobalService = (function () {
    function GlobalService(http) {
        this.http = http;
        this.movieSubject = new Subject();
        this.movies = [
            {
                "movie_id": 1,
                "name": "Dante Alighieri",
                "descreption": "the Divine Comedy",
                "image": new Image()
            },
            {
                "movie_id": 2,
                "name": "Chinua Achebe",
                "descreption": "Things Fall Apart ",
                "image": new Image()
            },
            {
                "movie_id": 3,
                "name": "Hans Christian Andersen",
                "descreption": '@@THIS is a BooK!!',
                "image": new Image()
            }
        ];
    }
    GlobalService.prototype.getMovies = function () {
        return Observable.of(this.movies);
    };
    GlobalService.prototype.addMovie = function (movie) {
        var founded = this.movies.find(function (b) {
            return b.name.toLowerCase() === movie.name.toLowerCase();
        });
        if (founded) {
            this.movieSubject.next({ movies: this.movies, error: 'Movie with the same title already exist' });
            return;
        }
        movie.movie_id = this.movies[this.movies.length - 1].movie_id++;
        this.movies.push(movie);
        this.movieSubject.next({ movies: this.movies });
    };
    GlobalService.prototype.updateMovie = function (movie) {
        var foundedMovie = this.movies.find(function (b) {
            return b.movie_id == movie.movie_id;
        });
        foundedMovie.name = movie.name;
        foundedMovie.descreption = movie.descreption;
        foundedMovie.image = movie.image;
        this.movieSubject.next({ movies: this.movies });
    };
    GlobalService.prototype.deleteMovie = function (movie) {
        var index = this.movies.findIndex(function (x) { return x.movie_id == movie.movie_id; });
        if (index > -1) {
            this.movies.splice(index, 1);
            this.movieSubject.next({ movies: this.movies });
        }
    };
    GlobalService.prototype.moviesListOnUpdate = function () {
        return this.movieSubject.asObservable();
    };
    GlobalService.prototype.handleError = function (error) {
        return Observable.throw(error.statusText);
    };
    GlobalService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], GlobalService);
    return GlobalService;
}());
export { GlobalService };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/services/global.service.js.map