import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  @Output() deleteBook: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public edit(selectedBook)
  {
  }
  
  public delete(selectedBook)
  {
     this.deleteBook.emit(selectedBook);
  }

}