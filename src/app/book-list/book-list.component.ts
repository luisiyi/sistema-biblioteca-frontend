import { Component, inject } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  books!: Book[];

  private bookService = inject(BookService)

  ngOnInit(){
    //load the books
    this.getBooks();
  }

  private getBooks(): void{
    this.bookService.getBookList().subscribe(
      {
        next: (data) =>{
          this.books = data;
        },
        error: (error) => {
          console.error("Error at getting the books", error)
        }
      }
    )
  }

}
