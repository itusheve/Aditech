var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { GlobalService } from "../../services/global.service";
import { AddUpdateMovieComponent } from "../add-update-movie/add-update-movie.component";
import { NotificationsComponent } from "../notifications/notifications.component";
import { ConfirmationModalComponent } from "../confirmation-dialog/confirmation-dialog.component";
var MoviesComponent = (function () {
    function MoviesComponent(service) {
        var _this = this;
        this.service = service;
        this.service.moviesListOnUpdate().subscribe(function (data) {
            _this.setNotification(data.error);
            _this.notification.show();
            _this.movies = data.movies;
            _this.movieToDelete = null;
        });
    }
    MoviesComponent.prototype.setNotification = function (error) {
        this.alertClass = error ? 'alert-danger' : 'alert-success';
        this.alertType = error ? 'Error' : 'Success';
        this.alertMessage = error || 'Movies list was updated successfully';
    };
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMovies().subscribe(function (movies) {
            _this.movies = movies;
        });
    };
    MoviesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var a = this.confirm.onClose.subscribe(function (result) {
            console.log("confirm");
            if (result === true) {
                _this.service.deleteMovie(_this.movieToDelete);
            }
        });
        console.log(a);
    };
    MoviesComponent.prototype.onEdit = function (movie) {
        this.selectedMovie = movie;
        this.addUpdateModal.openModal(this.selectedMovie);
    };
    MoviesComponent.prototype.onDelete = function (movie) {
        this.movieToDelete = movie;
        this.confirm.showConfirmationModal('Are you sure?', 'delete ' + movie.title + '?');
    };
    __decorate([
        ViewChild('addUpdateModal'),
        __metadata("design:type", AddUpdateMovieComponent)
    ], MoviesComponent.prototype, "addUpdateModal", void 0);
    __decorate([
        ViewChild('notification'),
        __metadata("design:type", NotificationsComponent)
    ], MoviesComponent.prototype, "notification", void 0);
    __decorate([
        ViewChild('confirm1'),
        __metadata("design:type", ConfirmationModalComponent)
    ], MoviesComponent.prototype, "confirm", void 0);
    MoviesComponent = __decorate([
        Component({
            selector: 'movies',
            templateUrl: './movies.component.html',
            styleUrls: ['./movies.component.css']
        }),
        __metadata("design:paramtypes", [GlobalService])
    ], MoviesComponent);
    return MoviesComponent;
}());
export { MoviesComponent };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/components/movies/movies.component.js.map