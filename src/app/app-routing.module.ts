import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { BookSearchResultsComponent } from './book-search-results/book-search-results.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookSearchAlternativeComponent } from './book-search-alternative/book-search-alternative.component';

const routes: Routes = [
  { path: 'book', component: BookPageComponent },
  { path: 'result', component: BookSearchResultsComponent },
  { path: 'add', component: BookFormComponent },
  { path: 'search', component: BookSearchAlternativeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
