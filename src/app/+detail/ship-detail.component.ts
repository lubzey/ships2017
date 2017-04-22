// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ShipService } from '../ship.service';
import { Ship } from '../shared/models/ship';
import { CarouselComponent } from '../shared/carousel/carousel.component';

@Component({
  moduleId: module.id,
  selector: 'my-ship-detail',
  templateUrl: 'ship-detail.component.html',
  styleUrls: ['ship-detail.component.css']
})
export class ShipDetailComponent implements OnInit {
  @Input() ship: Ship;

  constructor(
    private ShipService: ShipService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.ShipService.getHero(id)
        .then(ship => this.ship = ship);
    });    
  }

  goBack(): void {
    this.location.back();
  }
}