import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-number',
  templateUrl: './notification-number.component.html',
  styleUrls: ['./notification-number.component.css']
})
export class NotificationNumberComponent implements OnInit {
  constructor() { }

  @Input() amount;

  ngOnInit() {
  }

}
