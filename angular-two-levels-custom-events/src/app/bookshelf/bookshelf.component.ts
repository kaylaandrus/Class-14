import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit {
  @Output() bookSendEvent = new EventEmitter<{
    title: string;
    author: string;
  }>();
  @Input() book: { title: string; author: string };

  sendBook($event) {
    this.book = $event;
    // console.log(this.book);
    // send to app
    this.bookSendEvent.emit(this.book);
  }

  constructor() {}

  ngOnInit(): void {}
}
