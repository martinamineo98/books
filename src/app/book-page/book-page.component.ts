import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})

export class BookPageComponent {
  constructor(
    private dataService: DataService,
  ) { }

  selectedBook: any;

  ngOnInit() {
    this.dataService.selectedBook$.subscribe((book) => {
      this.selectedBook = book;
      console.log('detail', book);
    });
  }
}
