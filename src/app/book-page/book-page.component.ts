import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})

export class BookPageComponent {

  book: any

  receiveBook ($event: any) {
    this.book = $event
    console.log(this.book)
  }
  
}
