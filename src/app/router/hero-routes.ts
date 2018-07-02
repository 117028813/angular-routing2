import { Routes } from "@angular/router";

import { HeroListComponent } from "../components/hero-list/hero-list.component";
import { HeroDetailComponent } from "../components/hero-detail/hero-detail.component";

const heroRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent
  }
]

export {heroRoutes}
