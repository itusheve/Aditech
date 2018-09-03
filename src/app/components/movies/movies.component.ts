import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {Movie} from "../../models/Movie";
import {AddUpdateMovieComponent} from "../add-update-movie/add-update-movie.component";
import {NotificationsComponent} from "../notifications/notifications.component";
import {ConfirmationModalComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {AfterViewInit} from "@angular/core";


@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit {
    @ViewChild('addUpdateModal') addUpdateModal: AddUpdateMovieComponent;
    @ViewChild('notification') notification: NotificationsComponent;
    @ViewChild('confirm1') confirm: ConfirmationModalComponent;
    movies: Movie[];
    selectedMovie: Movie;
    movieToDelete: Movie;

    alertType: string;
    alertMessage: string;
    alertClass: string;

    constructor(private service: GlobalService) {
        this.service.moviesListOnUpdate().subscribe((data: any) => {
            this.setNotification(data.error);
            this.notification.show();
            this.movies = data.movies;
            this.movieToDelete = null;
        });

    }

    setNotification(error: any) {
        this.alertClass = error ? 'alert-danger' : 'alert-success';
        this.alertType = error ? 'Error' : 'Success';
        this.alertMessage = error || 'Movies list was updated successfully';

    }

    ngOnInit() {
        this.service.getMovies().subscribe((movies: Movie[]) => {
            this.movies = movies;
        });

    }

    ngAfterViewInit() {
      let a = this.confirm.onClose.subscribe(result => {
            console.log("confirm");
            if (result === true) {
                this.service.deleteMovie(this.movieToDelete);
            }
        });
      console.log(a);
    }

    onEdit(movie: Movie) {
        this.selectedMovie = movie;
        this.addUpdateModal.openModal(this.selectedMovie);
    }

    onDelete(movie: Movie) {
        this.movieToDelete = movie;
        this.confirm.showConfirmationModal('Are you sure?', 'delete ' + movie.name + '?');

    }


}
