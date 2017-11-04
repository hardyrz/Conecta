import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-main',
  templateUrl: './body-main.component.html',
  styleUrls: ['./body-main.component.css']
})
export class BodyMainComponent implements OnInit {

  @Input() usuario = '';

  constructor() { }

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario");
  }

}
