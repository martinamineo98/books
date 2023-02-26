import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})

export class BookPageComponent {

  book: any

  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  })  

  constructor(
    private sharedDataService: SharedDataService,
    private bookListComponent: BookListComponent
  ) {}
  
  ngOnInit() {
    this.sharedDataService.selectedBook.subscribe((book) => {
      this.book = book
    })
  }

  deleteBook(book: any) {
    this.bookListComponent.deleteBook(book)
  }

  onSubmit(e: any) {
    e.preventDefault()

    let blockTitle: any = document.querySelector('.book-page .book-title')
    let blockAuthor: any = document.querySelector('.book-page .book-author')
    let blockDescription: any = document.querySelector('.book-page .book-description')

    let newBook = {
      id: this.book.id,
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      description: this.bookForm.value.description,
      cover: this.book.cover
    }

    this.bookListComponent.editBook(this.book, newBook)
    this.book = newBook
    
    blockTitle.textContent = newBook.title
    blockAuthor.textContent = newBook.author
    blockDescription.textContent = newBook.description

    this.bookForm.reset()
  }

  editBook(book: any) {
    let element = document.querySelector('.book-editing-block')
        element?.classList.toggle('show')
  }

}
