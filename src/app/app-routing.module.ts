import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/1/john doe/this is a fake title for a fake book', component: BookPageComponent },
  { path: 'books/2/john doe/this is a fake title for a fake book', component: BookPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
