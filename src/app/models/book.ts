export class Book {
  title: string;
  author: string;
  date: Date;
  id: number;
  
  constructor(title: string, author: string, date: Date, id: number) {
    this.author = author;
    this.title =title;
    this.date = date;
    this.id = id;
  }
}