import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {BsModalService} from "ngx-bootstrap";
import {ViewChild} from "@angular/core";

import {GlobalService} from "../../services/global.service";
import {Movie} from "../../models/Movie";
import * as moment from 'moment';

@Component({
    selector: 'app-add-update-movie',
    templateUrl: './add-update-movie.component.html',
    styleUrls: ['./add-update-movie.component.css']
})
export class AddUpdateMovieComponent implements OnInit {
    movieModel: any = new Movie(null, null, null, null);
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
        this.movieModel = new Movie(null, null, null, null);
        this.mode = 'new';
        this.btnText = 'Save';
    }

    openModal(movie: Movie) {
        this.reset();

        if (movie) {
            this.mode = 'edit';
            this.btnText = 'Update';

            this.movieModel.title = movie.title;
            this.movieModel.author = movie.author;


            this.movieModel.date = movie.date;
            this.movieModel.id = movie.id;

        }
        this.modalRef = this.modalService.show(this.modal);
    }

    saveOrUpdate(isValid: boolean) {
        this.isFormSubmited = true;
        if (!isValid) return;
        if (this.mode == 'edit') {
            this.service.updateMovie(this.movieModel);

        } else {
            this.service.addMovie(this.movieModel);
        }


        this.modalRef.hide();
    }


}
