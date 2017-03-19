// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Ship } from '../shared/models/ship';
import { CarouselComponent } from '../shared/carousel/carousel.component';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Ship;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });    
  }

  goBack(): void {
    this.location.back();
  }
}