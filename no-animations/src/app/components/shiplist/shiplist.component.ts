import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../../model/ship.model';

@Component({
  selector: 'br-shiplist',
  templateUrl: './shiplist.component.html',
  styleUrls: ['./shiplist.component.scss']
})
export class ShiplistComponent implements OnInit {

  @Input() ships: Ship[];

  constructor() { }

  ngOnInit() {
  }

}
