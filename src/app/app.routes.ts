import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';

export const routes: Routes = [
    {path: 'books', component: BookListComponent},//these paths are used in the view/html
    {path: '', redirectTo: 'books', pathMatch: 'full'},//these paths are used in the view/html
    {path: 'add-book', component: AddBookComponent}
];
