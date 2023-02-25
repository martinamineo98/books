import { Component } from '@angular/core';
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
  showBookPage: boolean = false
}
