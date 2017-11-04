import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLoggedIn = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  login() {
      this.onLoggedIn.emit(true);
  }

}
