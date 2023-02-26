import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})

export class BookPageComponent {

  book: any

  constructor(
    private sharedDataService: SharedDataService,
    private bookListComponent: BookListComponent
  ) {}
  
  ngOnInit() {
    this.sharedDataService.selectedBook.subscribe((book) => {
      this.book = book
    })
  }

  deleteBook(book: any) {
    this.bookListComponent.deleteBook(book)
  }

}
