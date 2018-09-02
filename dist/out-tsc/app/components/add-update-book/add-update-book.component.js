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
var AddUpdateBookComponent = (function () {
    function AddUpdateBookComponent(modalService, service) {
        this.modalService = modalService;
        this.service = service;
        this.bookModel = new Movie(null, null, null, null);
        this.mode = 'new';
        this.btnText = 'Save';
        this.isFormSubmited = false;
        this.options = {
            format: "DD.MM.YYYY",
            maxDate: moment()
        };
    }
    AddUpdateBookComponent.prototype.ngOnInit = function () {
    };
    AddUpdateBookComponent.prototype.reset = function () {
        this.bookModel = new Movie(null, null, null, null);
        this.mode = 'new';
        this.btnText = 'Save';
    };
    AddUpdateBookComponent.prototype.openModal = function (book) {
        this.reset();
        if (book) {
            this.mode = 'edit';
            this.btnText = 'Update';
            this.bookModel.title = book.title;
            this.bookModel.author = book.author;
            this.bookModel.date = book.date;
            this.bookModel.id = book.id;
        }
        this.modalRef = this.modalService.show(this.modal);
    };
    AddUpdateBookComponent.prototype.saveOrUpdate = function (isValid) {
        this.isFormSubmited = true;
        if (!isValid)
            return;
        if (this.mode == 'edit') {
            this.service.updateBook(this.bookModel);
        }
        else {
            this.service.addBook(this.bookModel);
        }
        this.modalRef.hide();
    };
    __decorate([
        ViewChild('modal'),
        __metadata("design:type", TemplateRef)
    ], AddUpdateBookComponent.prototype, "modal", void 0);
    AddUpdateBookComponent = __decorate([
        Component({
            selector: 'app-add-update-book',
            templateUrl: './add-update-movie.component.html',
            styleUrls: ['./add-update-movie.component.css']
        }),
        __metadata("design:paramtypes", [BsModalService, GlobalService])
    ], AddUpdateBookComponent);
    return AddUpdateBookComponent;
}());
export { AddUpdateBookComponent };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/components/add-update-movie/add-update-movie.component.js.map