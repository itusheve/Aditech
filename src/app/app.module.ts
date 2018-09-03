import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {GlobalService} from "./services/global.service";
import {ModalModule} from "ngx-bootstrap";
import * as $ from 'jquery';


import {NotificationsComponent} from './components/notifications/notifications.component';


import {HomeComponent} from './components/home/home.component';
import {MovieComponent} from "./components/movie/movie.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {AddUpdateMovieComponent} from "./components/add-update-movie/add-update-movie.component";
import {A2Edatetimepicker} from "ng2-eonasdan-datetimepicker";
import {TitlePipe} from './pipes/title/title.pipe';
import { ConfirmationModalComponent } from './components/confirmation-dialog/confirmation-dialog.component';


const appRoutes: Routes = [
    {path: '', component: MoviesComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        NotificationsComponent,
        MovieComponent,
        MoviesComponent,
        HomeComponent,
        AddUpdateMovieComponent,
        TitlePipe,
        ConfirmationModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        ModalModule.forRoot(),
        A2Edatetimepicker
    ],
    providers: [
        GlobalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
