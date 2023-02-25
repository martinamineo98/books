import { Component } from '@angular/core';
import data from './../books.json'
import { DataService } from '../data.service';

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

  constructor(
    private dataService: DataService,
  ) { }

  setBook(book: any) {
    this.dataService.setBook(book);
    console.log('setBook', book);
  }
}
