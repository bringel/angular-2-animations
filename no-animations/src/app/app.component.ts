import { Component } from '@angular/core';
import { Ship } from './model/ship.model';
import { ships as shipData} from './data/spaceships';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private ships: Ship[];
  private selectedShip: Ship;

  constructor() {
    this.ships = [];
  }

  onAddShipClicked() {
    if(this.ships.length < shipData.length){
      this.ships.push(shipData[this.ships.length]);
    }
  }

  onRemoveShipClicked() {
    this.ships.pop();
  }

  shipSelected(index: number) {
    this.selectedShip = this.ships[index];
  }
}
