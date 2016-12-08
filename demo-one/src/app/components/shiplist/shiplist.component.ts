import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ship } from '../../model/ship.model';

@Component({
  selector: 'br-shiplist',
  templateUrl: './shiplist.component.html',
  styleUrls: ['./shiplist.component.scss']
})
export class ShiplistComponent implements OnInit {

  @Input() ships: Ship[];

  @Output() shipSelected = new EventEmitter<number>();

  private selected: number;

  constructor() { }

  ngOnInit() {
  }

  onShipClicked(index: number) {
    this.selected = index;
    this.shipSelected.emit(index);
  }
}
