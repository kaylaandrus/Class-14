import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() mySearchEvent: EventEmitter<string> = new EventEmitter<string>();
  mySearch: string = '';

  constructor() {}

  ngOnInit(): void {}

  onMySearchEvent() {
    this.mySearchEvent.emit(this.mySearch);
  }
}
