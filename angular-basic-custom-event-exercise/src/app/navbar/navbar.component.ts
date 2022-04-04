import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() mySearch = new EventEmitter<string>();
  featureSelected = new EventEmitter<string>();

  onSearch(value: string) {
    this.mySearch.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
