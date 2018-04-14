import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {BsModalService} from "ngx-bootstrap";
import {ViewChild} from "@angular/core";

import {GlobalService} from "../../services/global.service";
import {Book} from "../../models/Book";
import * as moment from 'moment';

@Component({
    selector: 'app-add-update-book',
    templateUrl: './add-update-book.component.html',
    styleUrls: ['./add-update-book.component.css']
})
export class AddUpdateBookComponent implements OnInit {
    bookModel: any = new Book(null, null, null, null);
    mode: string = 'new';
    modalRef: BsModalRef;
    btnText: string = 'Save';
    isFormSubmited = false;
    @ViewChild('modal') modal: TemplateRef<any>;
    options = {
        format: "DD.MM.YYYY",
        maxDate: moment()
    };

    constructor(private modalService: BsModalService, private service: GlobalService) {
    }

    ngOnInit() {
    }

    reset() {
        this.bookModel = new Book(null, null, null, null);
        this.mode = 'new';
        this.btnText = 'Save';
    }

    openModal(book: Book) {
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
    }

    saveOrUpdate(isValid: boolean) {
        this.isFormSubmited = true;
        if (!isValid) return;
        if (this.mode == 'edit') {
            this.service.updateBook(this.bookModel);

        } else {
            this.service.addBook(this.bookModel);
        }


        this.modalRef.hide();
    }


}
