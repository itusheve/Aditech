import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Observable";

import "rxjs/Rx";
import {Subject} from "rxjs/Subject";
import {Book} from "../models/Book";
import {Http, Response} from "@angular/http";


@Injectable()
export class GlobalService {

    private bookSubject = new Subject<any>();

    private books: Book[] = [
        {
            "id": 1,
            "author": "Dante Alighieri",
            "title": "the Divine Comedy",
            "date": new Date()
        },
        {
            "id": 2,
            "author": "Chinua Achebe",
            "title": "Things Fall Apart ",
            "date": new Date()
        },
        {
            "id": 3,
            "author": "Hans Christian Andersen",
            "title": '@@THIS is a BooK!!',
            "date": new Date()
        }
    ];

    constructor(private http: Http) {

    }

    getBooks(): Observable<Book[]> {

        return Observable.of(this.books);
    }

    addBook(book: Book) {

        let founded = this.books.find((b: Book) => {
            return b.title.toLowerCase() === book.title.toLowerCase();
        });
        if (founded) {
            this.bookSubject.next({books: this.books,error:'Book with the same title already exist'});
            return;
        }
        book.id = this.books[this.books.length - 1].id++;
        this.books.push(book);


        this.bookSubject.next({books: this.books});
    }

    updateBook(book: Book) {


        let foundedBook = this.books.find((b) => {
            return b.id == book.id;
        });

        foundedBook.title = book.title;
        foundedBook.author = book.author;
        foundedBook.date = book.date;

        this.bookSubject.next({books: this.books});
    }

    deleteBook(book: Book) {

        let index = this.books.findIndex(x => x.id == book.id);

        if (index > -1) {
            this.books.splice(index, 1);


            this.bookSubject.next({books: this.books});
        }
    }

    booksListOnUpdate(): Observable<Book[]> {
        return this.bookSubject.asObservable();
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    // getUserById(userId: number): Promise<User> {
    //     let users: User[] = this.getUsersFromStorage();
    //
    //     let user = users.find((u) => {
    //         return u.id == userId;
    //     });
    //
    //     return Promise.resolve(user);
    // }
    //
    // updateUser(userToUpdate: User) {
    //     let users: User[] = this.getUsersFromStorage();
    //
    //     let user = users.find((u) => {
    //         return u.id == userToUpdate.id;
    //     });
    //
    //     user.firstName = userToUpdate.firstName;
    //     user.lastName = userToUpdate.lastName;
    //     user.image = userToUpdate.image;
    //
    //     localStorage.setItem('users', JSON.stringify(users));
    //
    //     this.userSubject.next({users: users});
    // }
    //
    //
    // addUser(userToAdd: User) {
    //     let users: User[] = this.getUsersFromStorage();
    //
    //     userToAdd.id = users[users.length - 1].id++;
    //     users.push(userToAdd);
    //     localStorage.setItem('users', JSON.stringify(users));
    //
    //     this.userSubject.next({users: users});
    // }
    //
    // deleteUser(user: User) {
    //     let users: User[] = this.getUsersFromStorage();
    //     let index = users.findIndex(x => x.id == user.id);
    //
    //     if (index > -1) {
    //         users.splice(index, 1);
    //         localStorage.setItem('users', JSON.stringify(users));
    //
    //         this.userSubject.next({users: users});
    //     }
    // }


}
