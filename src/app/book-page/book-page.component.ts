import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})

export class BookPageComponent {

  book: any

  constructor(
    private sharedDataService: SharedDataService
  ) {}
  
  ngOnInit(): void {
    this.sharedDataService.selectedBook.subscribe((book) => {
      this.book = book
      console.log(this.book)
    })
  }

}
