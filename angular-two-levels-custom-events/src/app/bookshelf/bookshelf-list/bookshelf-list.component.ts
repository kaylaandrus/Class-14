import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css'],
})
export class BookshelfListComponent implements OnInit {
  @Output() bookEvent = new EventEmitter<{ title: string; author: string }>();
  books = [
    {
      title: 'Harry Potter and the Sorcerers Stone',
      author: 'JK Rowling',
    },
    {
      title: 'A Court of Thorns and Roses',
      author: 'Sarah J Maas',
    },
    {
      title: 'Life of Pi',
      author: 'Yann Martel',
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
    {
      title: 'The Road',
      author: 'Cormac McCarthy',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  sendBookEvent(book) {
    this.bookEvent.emit(book);
  }
}
