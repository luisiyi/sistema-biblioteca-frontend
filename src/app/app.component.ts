import { Component } from '@angular/core';
import { BookListComponent } from "./book-list/book-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [BookListComponent]
})
export class AppComponent {
  title = 'biblioteca-app';
}
