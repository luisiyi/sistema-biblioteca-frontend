import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//ng g s book --skip-tests
export class BookService {

  private urlBase = "http://localhost:8080/bookstore-app/books";
  private clientHttp = inject(HttpClient);

  getBookList(): Observable<Book[]>{
    return this.clientHttp.get<Book[]>(this.urlBase)
  }

  addBook(book: Book): Observable<Object>{
    return this.clientHttp.post(this.urlBase, book)
  }
}
