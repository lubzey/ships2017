import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ship } from '.././shared/models/ship';
import { ShipService } from '.././shared/services/ship.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  ships: Ship[] = [];

  constructor(
    private router: Router,
    private ShipService: ShipService) {
  }

  ngOnInit(): void {
    this.ShipService.getShortShips()
      .then(ships => this.ships = ships);
  }

  gotoDetail(ship: Ship): void {
    let link = ['/detail', ship.id];
    this.router.navigate(link);
  }
}