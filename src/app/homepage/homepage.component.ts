import { Component, Injectable } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

// Importing Books

import data from './../books.json'

// Book Interface

interface Book {
  id: number,
  title: string,
  author: string,
  description: string,
  cover: string
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  host: {'class': 'index'}
})

export class HomepageComponent {

  books: Book[] = this.initializeBooks()
  searchFilter: string = ''
  p: number = 1

  constructor(
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    this.sharedDataService.selectedSearchFilter.subscribe((searchFilter) => {
      this.searchFilter = searchFilter
      this.resetPagination()
    })
  }

  initializeBooks() {
    const books = []
    const localBooks = { ... localStorage }
    
    for (let book of data) {
      books.push(book)
    }
    
    for (let book in localBooks) {
      let parsedBook = JSON.parse(localBooks[book])

      if (!books.includes(parsedBook)) {
        books.push(parsedBook)
      }
    }

    return books
  }

  resetPagination() {
    this.p = 1
  }

  addBook(book: any) {
    book.id = this.books[this.books.length - 1].id + 1
    localStorage.setItem(book.id, JSON.stringify(book))
    this.books.push(book)
  }

  editBook(oldBook: any, newBook: any) {
    this.books[this.books.indexOf(oldBook)] = newBook
    localStorage.setItem(oldBook.id, JSON.stringify(newBook))
    this.resetPagination()
  } 

  deleteBook(book: any) {
    const booksLength = this.books.length
    localStorage.removeItem(book.id)

    if (booksLength > -1) {
      this.books.splice(booksLength, 1)
    }

    this.resetPagination()
  }

  setBook(book: any) {
    this.sharedDataService.setBook(book)
  }

}
