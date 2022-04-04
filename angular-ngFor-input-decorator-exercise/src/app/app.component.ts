import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: { username: string; id: number }[] = [
    { username: 'kaylaandrus', id: 10 },
    { username: 'kaylaandrus2', id: 11 },
    { username: 'kaylaandrus3', id: 12 },
  ];
  title = 'angular-ngFor-input-decorator-exercise';
}
