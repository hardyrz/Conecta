import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']
})
export class NovedadComponent implements OnInit {

  @Input() image = '';
  @Input() title = '';
  @Input() text = '';

  constructor() { }

  ngOnInit() {
  }

}
