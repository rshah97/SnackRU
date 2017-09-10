import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor(private inventory: InventoryService) { }

  ngOnInit() {
  }

  getAllItems() {
    return this.inventory.getAllSnacks();
    // this.inventory.getAllSnacks().sort()
  }

}
