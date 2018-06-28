import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroService } from '../../providers/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.hero = this.heroService.getHero(parseInt(this.route.snapshot.paramMap.get('id')))
  }

  gotoHeroes(hero) {
    const heroId = hero.id
    this.router.navigate(['/heroes', {id: heroId, data: 'foo'}])
  }

}
