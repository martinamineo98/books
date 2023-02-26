import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import data from './../books.json'

interface Book {
  id: number,
  title: string,
  author: string,
  description: string,
  cover: string
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {

  p: number = 1
  books: Book[] = data
  searchFilter: string = ''

  constructor(
    private sharedDataService: SharedDataService,
    public router: Router
  ) {}

  ngOnInit() {
    const books = { ... localStorage }

    for (let book in books) {
      this.books.push(JSON.parse(books[book]))
    }

    this.sharedDataService.selectedSearchFilter.subscribe((searchFilter) => {
      this.searchFilter = searchFilter
      this.p = 1
    })

  }

  addBook (book: any) {
    book.id = this.books[this.books.length - 1].id + 1
    this.books.push(book)
    localStorage.setItem(book.id, JSON.stringify(book))
  }

  setBook(book: any) {
    this.sharedDataService.setBook(book)
  }
  
  deleteBook (book: any) {
    const bookIndex = this.books.indexOf(book)
    localStorage.removeItem(book.id)

    if (bookIndex > -1) {
      this.books.splice(bookIndex, 1)
    }

    this.p = 1
  }

  editBook (book: any) {
    this.books[this.books.indexOf(book)] = book
    localStorage.setItem(book.id, JSON.stringify(book))

    this.p = 1
  }

}
