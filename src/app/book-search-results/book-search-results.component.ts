import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-search-results',
  templateUrl: './book-search-results.component.html',
  styleUrls: ['./book-search-results.component.css'],
  host: {'class': 'book-search-results-list'}
})

export class BookSearchResultsComponent {

  books: any
  p: number = 1

  constructor(
    private sharedDataService: SharedDataService,
    private bookListComponent: BookListComponent
  ) {}

  ngOnInit() {
    this.sharedDataService.selectedBookResults.subscribe((books) => this.books = books)
    console.log(this.books)
  }

  setBook(book: any) {
    this.bookListComponent.setBook(book)
  }

}
