import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.scss']
})
export class ShipDetailComponent implements OnInit {

  @Input() detailText: string;
  @Input() moreDetailText: string;

  private expanded: boolean;

  constructor() { }

  ngOnInit() {
    this.expanded = false;
  }

}
