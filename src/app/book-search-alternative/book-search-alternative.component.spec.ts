import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchAlternativeComponent } from './book-search-alternative.component';

describe('BookSearchAlternativeComponent', () => {
  let component: BookSearchAlternativeComponent;
  let fixture: ComponentFixture<BookSearchAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSearchAlternativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSearchAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
