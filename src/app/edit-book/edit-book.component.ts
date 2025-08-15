import { Component, inject } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

//ng g c edit-book --skip-tests
@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [],
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent {
  book: Book = new Book();
  id!: number;

  private bookService = inject(BookService);
  private router = inject(ActivatedRoute);

  ngOnInit(){
    this.id = this.router.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe({
      next: (data) => this.book = data,
      error: (errors: any) => console.log(errors)
    })
  }


}
