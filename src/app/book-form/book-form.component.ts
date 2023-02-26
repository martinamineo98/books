import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookListComponent } from '../book-list/book-list.component';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent {

  book: any

  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  })  

  constructor(
    private bookListComponent: BookListComponent
  ) {}

  ngOnInit() {

  }

  onSubmit(e: any) {

    e.preventDefault()
    this.book = this.bookForm.value
    this.book.cover = '../../assets/cover.png'
    this.bookListComponent.addBook(this.book)
    this.bookForm.reset()
    
  }

}
