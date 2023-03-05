import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { HomepageComponent } from '../homepage/homepage.component';

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
  styleUrls: ['./book-list.component.css'],
  host: {'class': 'book-list'}
})

export class BookListComponent {

  @Input() books: any
  @Input() p: number = 1
  @Input() searchFilter: string = ''

  constructor(
    private homepageComponent: HomepageComponent
  ) {}

  setBook(book: any) {
    this.homepageComponent.setBook(book)
  }

}
