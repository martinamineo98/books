
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedDataService {

  private book = new BehaviorSubject<any>({})
  selectedBook = this.book.asObservable()
  
  private searchFilter = new BehaviorSubject<string>('')
  selectedSearchFilter = this.searchFilter.asObservable()

  private bookResults = new BehaviorSubject<any>('')
  selectedBookResults = this.bookResults.asObservable()

  constructor() {}

  setBook(book: any) {
    this.book.next(book)
  }

  setSearchFilter(str: string) {
    this.searchFilter.next(str)
  }

  setBookResults(books: any) {
    this.bookResults.next(books)
  }
  
}
