import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private book$ = new BehaviorSubject<any>({});
  selectedBook$ = this.book$.asObservable();
  
  constructor() { }

  setBook(book: any) {
    this.book$.next(book);
  }

}
