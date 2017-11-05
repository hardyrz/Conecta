import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  state = false;
  usuario = '';
  @Output() showUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario");
  }

  stateHandler(newState) {
    this.state = newState;
  }

  showUserHandler() {
    this.showUser.emit(true)
  }

}
