import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  state = false;
  usuario = '';
  constructor() { }

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario");
  }

  stateHandler(newState) {
    this.state = newState;
  }

}
