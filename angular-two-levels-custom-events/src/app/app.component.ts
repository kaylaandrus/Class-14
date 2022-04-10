import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() book: { title: string; author: string };
  output: string = '';

  receiveBookEvent($event) {
    this.book = $event;
    this.output = `${this.book.title} by ${this.book.author}`;
  }
}
