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
  allShips: Ship[];

  constructor(
    private router: Router,
    private ShipService: ShipService) { }


  getShips(): void {
    this.ShipService.getShips().then(ships => {
       this.ships = ships;
       this.allShips = ships;
    });
  }

  ngOnInit(): void {
    this.getShips();
  }

  search(terms: string): void {
    this.ships = this.allShips.filter(ship => terms == '' || ship.name.toLowerCase().indexOf(terms.toLowerCase()) != -1);
  }

  gotoDetail(ship: Ship): void {
    let link = ['/detail', ship.id];
    this.router.navigate(link);
  }
}