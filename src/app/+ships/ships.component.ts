import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ship } from '../shared/models/ship';
import { ShipService } from '../shared/services/ship.service';

@Component({
  moduleId: module.id,
  selector: 'ships',
  templateUrl: 'ships.component.html',
  styleUrls: ['ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships: Ship[];

  constructor(
    private router: Router,
    private ShipService: ShipService) { }


  getHeroes(): void {
    this.ShipService.getShips().then(ships => this.ships = ships);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(ship: Ship): void {
    let link = ['/detail', ship.id];
    this.router.navigate(link);
  }
}