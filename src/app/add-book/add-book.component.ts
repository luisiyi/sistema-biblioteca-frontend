import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule], //Two Way Data Binding
  templateUrl: './add-book.component.html'
})
export class AddBookComponent {
  book: Book = new Book();

  private bookService = inject(BookService);
  private router = inject(Router);

  onSubmit(){
    this.saveBook();
  }

  saveBook(){
    this.bookService.addBook(this.book).subscribe({
      next: (datos) => {
        this.goToBooksList();
      },
      error: (error: any) => {console.log(error)}
    });
  }

  goToBooksList(){
    this.router.navigate(['/books'])
  }

}
