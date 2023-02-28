import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookSearchAlternativeComponent } from './book-search-alternative/book-search-alternative.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'add', component: BookFormComponent },
  { path: 'book', component: BookPageComponent },
  { path: 'search', component: BookSearchAlternativeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
