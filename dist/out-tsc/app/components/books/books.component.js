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
import { AddUpdateBookComponent } from "../add-update-book/add-update-book.component";
import { NotificationsComponent } from "../notifications/notifications.component";
import { ConfirmationModalComponent } from "../confirmation-dialog/confirmation-dialog.component";
var BooksComponent = (function () {
    function BooksComponent(service) {
        var _this = this;
        this.service = service;
        this.service.booksListOnUpdate().subscribe(function (data) {
            _this.setNotification(data.error);
            _this.notification.show();
            _this.books = data.books;
            _this.bookToDelete = null;
        });
    }
    BooksComponent.prototype.setNotification = function (error) {
        this.alertClass = error ? 'alert-danger' : 'alert-success';
        this.alertType = error ? 'Error' : 'Success';
        this.alertMessage = error || 'Books list was updated successfully';
    };
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBooks().subscribe(function (books) {
            _this.books = books;
        });
    };
    BooksComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var a = this.confirm.onClose.subscribe(function (result) {
            console.log("confirm");
            if (result === true) {
                _this.service.deleteBook(_this.bookToDelete);
            }
        });
        console.log(a);
    };
    BooksComponent.prototype.onEdit = function (book) {
        this.selectedBook = book;
        this.addUpdateModal.openModal(this.selectedBook);
    };
    BooksComponent.prototype.onDelete = function (book) {
        this.bookToDelete = book;
        this.confirm.showConfirmationModal('Are you sure?', 'delete ' + book.title + '?');
    };
    __decorate([
        ViewChild('addUpdateModal'),
        __metadata("design:type", AddUpdateBookComponent)
    ], BooksComponent.prototype, "addUpdateModal", void 0);
    __decorate([
        ViewChild('notification'),
        __metadata("design:type", NotificationsComponent)
    ], BooksComponent.prototype, "notification", void 0);
    __decorate([
        ViewChild('confirm1'),
        __metadata("design:type", ConfirmationModalComponent)
    ], BooksComponent.prototype, "confirm", void 0);
    BooksComponent = __decorate([
        Component({
            selector: 'books',
            templateUrl: './movies.component.html',
            styleUrls: ['./movies.component.css']
        }),
        __metadata("design:paramtypes", [GlobalService])
    ], BooksComponent);
    return BooksComponent;
}());
export { BooksComponent };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/components/movies/movies.component.js.map