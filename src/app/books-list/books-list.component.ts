import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  public myBooksList: Book[];
  constructor() { }

  ngOnInit() {
    this.myBooksList = [  
       new Book( 'Book 1','this book is soo intersting 1',new Date(),1),
       new Book('Book 2','this book is soo intersting 1',new Date(),2),
       new Book('Book 3','this book is soo intersting 1',new Date(),3)
    ];
  }

  public deleteBookP(book: Book){
    const index: number = this.myBooksList.indexOf(book);
    if (index !== -1) {
        this.myBooksList.splice(index, 1);
    }  
  }

}