import { Component, inject } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

//ng g c edit-book --skip-tests
@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule], //it allows the Two way data binding in Angular.
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent {
  book: Book = new Book();
  id!: number;

  private bookService = inject(BookService);
  private rout = inject(ActivatedRoute);
  private router = inject(Router)

  ngOnInit(){
    this.id = this.rout.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe({
      next: (data) => this.book = data,
      error: (errors: any) => console.log(errors)
    })
  }

  onSubmit(){
    //edit book
    this.saveBook();
  }

  saveBook(){
    this.bookService.editBook(this.id, this.book).subscribe({
      next: (data) => this.goToBookList(),
      error: (errors) => console.log(errors)
    });
  }

  goToBookList(){
    this.router.navigate(['/books'])
  }

}
