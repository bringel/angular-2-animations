import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'br-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.scss'],
  animations: [
    trigger('expandToggle', [
      state('collapsed', style({height: '*'})),
      state('expanded', style({height: '200px'})),
      transition('collapsed <=> expanded', animate('250ms'))
    ])
  ]
})
export class ShipDetailComponent implements OnInit {

  @Input() detailText: string;
  @Input() moreDetailText: string;

  private expanded: boolean;

  constructor() { }

  private get expandedState(): string {
    return this.expanded? 'expanded' : 'collapsed';
  }

  ngOnInit() {
    this.expanded = false;
  }

  onExpandedClicked() {
    this.expanded = !this.expanded;
  }
}
