import { Component, inject } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  books!: Book[];

  private bookService = inject(BookService)
  private router = inject(Router);

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

  editBook(id: number){
    this.router.navigate(['edit-book', id]);
  }

}
