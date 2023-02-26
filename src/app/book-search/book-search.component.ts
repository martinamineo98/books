import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent {

  searchFilter: string = ''

  constructor(
    public sharedDataService: SharedDataService
  ) {}

  setSearchFilter($event: any) {
    this.searchFilter = $event
    this.sharedDataService.setSearchFilter($event)
  }

}
