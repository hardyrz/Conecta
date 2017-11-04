import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLoggedIn = new EventEmitter<boolean>();

  usuario: string = '';

  constructor() { }

  ngOnInit() {

  }

  login() {
      localStorage.setItem("usuario",this.usuario);
      this.onLoggedIn.emit(true);
  }

}
