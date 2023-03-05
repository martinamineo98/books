import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  host: {'class': 'book-form'}
})

export class BookFormComponent {

  book: any

  constructor(
    private homepageComponent: HomepageComponent
  ) {}

  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  })  

  onSubmit(e: any) {
    e.preventDefault()
    this.book = this.bookForm.value
    this.book.cover = '../../assets/cover.png'
    this.homepageComponent.addBook(this.book)
    this.bookForm.reset()
  }

}
