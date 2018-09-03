var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from "ngx-bootstrap";
import { ViewChild } from "@angular/core";
import { GlobalService } from "../../services/global.service";
import { Movie } from "../../models/Movie";
import * as moment from 'moment';
var AddUpdateMovieComponent = (function () {
    function AddUpdateMovieComponent(modalService, service) {
        this.modalService = modalService;
        this.service = service;
        this.movieModel = new Movie(null, null, null, null);
        this.mode = 'new';
        this.btnText = 'Save';
        this.isFormSubmited = false;
        this.options = {
            format: "DD.MM.YYYY",
            maxDate: moment()
        };
    }
    AddUpdateMovieComponent.prototype.ngOnInit = function () {
    };
    AddUpdateMovieComponent.prototype.reset = function () {
        this.movieModel = new Movie(null, null, null, null);
        this.mode = 'new';
        this.btnText = 'Save';
    };
    AddUpdateMovieComponent.prototype.openModal = function (movie) {
        this.reset();
        if (movie) {
            this.mode = 'edit';
            this.btnText = 'Update';
            this.movieModel.name = movie.name;
            this.movieModel.text = movie.text;
            this.movieModel.image = movie.image;
            this.movieModel.movie_id = movie.movie_id;
        }
        this.modalRef = this.modalService.show(this.modal);
    };
    AddUpdateMovieComponent.prototype.saveOrUpdate = function (isValid) {
        this.isFormSubmited = true;
        if (!isValid)
            return;
        if (this.mode == 'edit') {
            this.service.updateMovie(this.movieModel);
        }
        else {
            this.service.addMovie(this.movieModel);
        }
        this.modalRef.hide();
    };
    __decorate([
        ViewChild('modal'),
        __metadata("design:type", TemplateRef)
    ], AddUpdateMovieComponent.prototype, "modal", void 0);
    AddUpdateMovieComponent = __decorate([
        Component({
            selector: 'app-add-update-movie',
            templateUrl: './add-update-movie.component.html',
            styleUrls: ['./add-update-movie.component.css']
        }),
        __metadata("design:paramtypes", [BsModalService, GlobalService])
    ], AddUpdateMovieComponent);
    return AddUpdateMovieComponent;
}());
export { AddUpdateMovieComponent };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/components/add-update-movie/add-update-movie.component.js.map