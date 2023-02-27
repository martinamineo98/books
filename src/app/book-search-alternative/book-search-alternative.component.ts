import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookListComponent } from '../book-list/book-list.component';

import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-book-search-alternative',
  templateUrl: './book-search-alternative.component.html',
  styleUrls: ['./book-search-alternative.component.css']
})

export class BookSearchAlternativeComponent {

  bookSearchForm = new FormGroup({
    category: new FormControl(''),
    str: new FormControl('')
  })

  constructor(
    private bookListComponent: BookListComponent,
    private sharedDataService: SharedDataService
  ) {}

  itContains(category: any, str: any) {
    const books = this.bookListComponent.books
    const newBooks = []

    for (let book of books) {
      for (let [key, value] of Object.entries(book)) {
        if (key === category) {
          if (value.toLowerCase().includes(str)) {
            newBooks.push(book)
          }
        }
      }
    }

    return newBooks
  }

  setBookResults(books: any) {
    this.sharedDataService.setBookResults(books)
  }

  onSubmit(e: any) {
    let category  = this.bookSearchForm.value.category
    let str = this.bookSearchForm.value.str

    this.setBookResults(this.itContains(category, str))

    e.preventDefault()
    this.bookSearchForm.reset()
  }

}
