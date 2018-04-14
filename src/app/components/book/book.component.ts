import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    @Input() Book;
    @Output() edit: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    editBook() {
        this.edit.emit(this.Book);
    }

    deleteBook() {
        this.delete.emit(this.Book);
    }

    ngOnInit() {
    }

}
