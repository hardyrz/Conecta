import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  usuario = ""
  user;
  @Output() goBack = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario");
    this.user = {
      name: '' + this.usuario,
      mail: '' + this.usuario + '@gmail.com',
      phone: '422528466'
    }
  }

  goBackHandler() {
    this.goBack.emit(true);
  }
}
