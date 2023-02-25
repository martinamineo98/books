import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() bookEvent = new EventEmitter<any>()

  p: number = 1
  books: Book[] = data

  sendBook (id: number) {
    this.bookEvent.emit(this.books[id])
  }

}
