import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { BookSearchResultsComponent } from './book-search-results/book-search-results.component';

const routes: Routes = [
  { path: 'book', component: BookPageComponent },
  { path: 'result', component: BookSearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
