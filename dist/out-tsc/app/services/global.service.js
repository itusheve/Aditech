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
    }
    GlobalService.prototype.getMovies = function () {
        return Observable.of(this.movies);
    };
    GlobalService.prototype.addMovie = function (movie) {
        var founded = this.movies.find(function (b) {
            return b.title.toLowerCase() === movie.title.toLowerCase();
        });
        if (founded) {
            this.movieSubject.next({ movies: this.movies, error: 'Movie with the same title already exist' });
            return;
        }
        movie.id = this.movies[this.movies.length - 1].id++;
        this.movies.push(movie);
        this.movieSubject.next({ movies: this.movies });
    };
    GlobalService.prototype.updateMovie = function (movie) {
        var foundedBook = this.movies.find(function (b) {
            return b.id == movie.id;
        });
        foundedBook.title = movie.title;
        foundedBook.author = movie.author;
        foundedBook.date = movie.date;
        this.movieSubject.next({ movies: this.movies });
    };
    GlobalService.prototype.deleteMovie = function (movie) {
        var index = this.movies.findIndex(function (x) { return x.id == movie.id; });
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