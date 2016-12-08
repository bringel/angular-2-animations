import { Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition, animate, group } from '@angular/core';
import { Ship } from '../../model/ship.model';

@Component({
  selector: 'br-shiplist',
  templateUrl: './shiplist.component.html',
  styleUrls: ['./shiplist.component.scss'],
  animations: [
      trigger('flyIn', [
        transition('void => *', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          group([
            animate('500ms', style({transform: 'translateX(0)'})),
            animate('250ms 250ms', style({opacity: 1}))
          ])
        ]),
        transition('* => void', animate('500ms', style({transform: 'translateX(-100%)'})))
      ])
  ]
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
