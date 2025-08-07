import { Component } from '@angular/core';
import { BookListComponent } from "./book-list/book-list.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule] //Replaced from "BookListComponent" to "RouterModule" instead, this will recognize the "routerLink" and <router-outlet>
})
export class AppComponent {
  title = 'biblioteca-app';
}
