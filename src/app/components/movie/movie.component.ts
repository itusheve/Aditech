import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

    @Input() Movie;
    @Output() edit: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    editMovie() {
        this.edit.emit(this.Movie);
    }

    deleteBook() {
        this.delete.emit(this.Movie);
    }

    ngOnInit() {
    }

}
