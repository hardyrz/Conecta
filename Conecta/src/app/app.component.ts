import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn = false;
  amountNotification = 1;
  usuario = '';

  onLoggedIn(value) {
    this.isLoggedIn = value;
  }

}
