import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





// NgxPaginationModule

import { NgxPaginationModule } from 'ngx-pagination';
import { BookPageComponent } from './book-page/book-page.component';
import { BookListComponent } from './book-list/book-list.component';

