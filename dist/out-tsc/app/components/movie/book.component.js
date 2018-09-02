var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
var BookComponent = (function () {
    function BookComponent() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
    }
    BookComponent.prototype.editBook = function () {
        this.edit.emit(this.Movie);
    };
    BookComponent.prototype.deleteBook = function () {
        this.delete.emit(this.Movie);
    };
    BookComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BookComponent.prototype, "Movie", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BookComponent.prototype, "edit", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BookComponent.prototype, "delete", void 0);
    BookComponent = __decorate([
        Component({
            selector: 'book',
            templateUrl: './book.component.html',
            styleUrls: ['./movie.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());
export { BookComponent };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/components/movie/book.component.js.map