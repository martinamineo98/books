import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';

// Import HomepageComponent

import { HomepageComponent } from '../homepage/homepage.component';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-book-search-alternative',
  templateUrl: './book-search-alternative.component.html',
  styleUrls: ['./book-search-alternative.component.css'],
  host: {'class': 'book-search-alternative'}
})

export class BookSearchAlternativeComponent {

  books: any[] = this.homepageComponent.books
  p: number = 1

  form = new FormGroup({
    cat: new FormControl(''),
    str: new FormControl('')
  })

  constructor(
    private sharedDataService: SharedDataService,
    private homepageComponent: HomepageComponent
  ) {}

  resetBooks() {
    this.books = this.homepageComponent.initializeBooks()
  }

  onSubmit(e: any) {
    this.resetBooks()

    let cat = this.form.value.cat
    let str = this.form.value.str

    e.preventDefault()
    this.itContains(cat, str)
    this.form.reset()
  }

  itContains(cat: any, str: any) {
    const foundBooks = []

    for (let book of this.books) {
      for (let [k, value] of Object.entries(book)) {
        if (k === cat) {
          
          // Fix to unknown type error
          let v: any = value

          if (v.toLowerCase().includes(str)) {
            foundBooks.push(book)
          }
        }
      }
    }

    this.books = foundBooks
    this.homepageComponent.resetPagination()
  }

}
