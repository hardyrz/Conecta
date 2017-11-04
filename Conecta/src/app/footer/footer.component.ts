import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  state = false;
  constructor() { }

  ngOnInit() {
  }

  stateHandler(newState) {
    this.state = newState;
  }

}
