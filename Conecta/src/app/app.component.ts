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
  showForm = false;

  onLoggedIn(value) {
    this.isLoggedIn = value;
  }

  onLoggedOut(value) {
    this.isLoggedIn = value
  }

  showUserHandler(showUser) {
    this.showForm = showUser;
  }

}
