import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { BookEditComponent } from "src/app/book-edit/book-edit.component";
import { BooksListComponent } from "src/app/books-list/books-list.component";

const routes: Routes = [
  { path: 'home', component : AppComponent},
  { path: 'add-book', component : BookEditComponent},
  { path: 'book-library', component : BooksListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
