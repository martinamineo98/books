import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: 'book', component: BookPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
