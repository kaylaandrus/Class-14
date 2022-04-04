import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchInput')
  displayEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  displayContent() {
    this.displayEmitter.emit;
  }
}
