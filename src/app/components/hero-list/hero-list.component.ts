import { Component, OnInit } from '@angular/core';

import { HeroService } from '../../providers/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroes = this.heroService.heroes
  }

}
