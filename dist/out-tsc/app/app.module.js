var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { GlobalService } from "./services/global.service";
import { ModalModule } from "ngx-bootstrap";
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from "./components/movie/movie.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { AddUpdateMovieComponent } from "./components/add-update-movie/add-update-movie.component";
import { A2Edatetimepicker } from "ng2-eonasdan-datetimepicker";
import { TitlePipe } from './pipes/title/title.pipe';
import { ConfirmationModalComponent } from './components/confirmation-dialog/confirmation-dialog.component';
var appRoutes = [
    { path: '', component: MoviesComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/app.module.js.map