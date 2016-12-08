import { Component, trigger, state, style, animate, transition, keyframes } from '@angular/core';
import { Ship } from './model/ship.model';
import { ships as shipData} from './data/spaceships';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('hoverTrigger', [
      state('hovered', style({})),
      transition('* => hovered', animate('250ms', keyframes([
        style({transform: 'rotate(15deg)', offset: 0.25}),
        style({transform: 'rotate(-15deg)', offset: 0.75}),
        style({transform: 'rotate(0)', offset: 1})
      ])))
    ])
  ]
})
export class AppComponent {

  private ships: Ship[];
  private selectedShip: Ship;
  private addButtonHoverState: string;
  private removeButtonHoverState: string;

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

  onAddButtonHover() {
    this.addButtonHoverState = 'hovered';
  }

  onAddButtonUnHovered() {
    this.addButtonHoverState = '';
  }

  onRemoveButtonHover() {
    this.removeButtonHoverState = 'hovered';
  }

  onRemoveButtonUnHovered() {
    this.removeButtonHoverState = '';
  }
}
