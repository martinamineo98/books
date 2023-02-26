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
  }

  addBook (book: any) {
    book.id = this.books.length + 1
    this.books.push(book)
    localStorage.setItem(book.id, JSON.stringify(book))
  }

  setBook(book: any) {
    this.sharedDataService.setBook(book)
  }

}
