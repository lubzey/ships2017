import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  moduleId: module.id,
  selector: 'ships',
  templateUrl: 'ships.component.html',
  styleUrls: ['ships.component.css']
})
export class ShipsComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) { }


  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}