import { Component } from '@angular/core';
import { Ship } from './model/ship.model';
import { ships } from './data/spaceships';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private ships: Ship[];
  private selectedShip: Ship;

  constructor() {
    this.ships = ships;
  }

  shipSelected(index: number) {
    this.selectedShip = this.ships[index];
  }
}
