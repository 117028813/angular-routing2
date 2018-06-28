import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../providers/auth-guard.service';

import { CrisisListComponent } from '../components/crisis-list/crisis-list.component';
import { HeroListComponent } from '../components/hero-list/hero-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { CrisisCenterComponent } from '../components/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from '../components/crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from '../components/crisis-center-home/crisis-center-home.component';
import { AdminComponent } from '../components/admin/admin.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { ManageCrisisComponent } from '../components/manage-crisis/manage-crisis.component';
import { ManageHeroesComponent } from '../components/manage-heroes/manage-heroes.component';
import { LoginComponent } from '../components/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'crisis',
        component: ManageCrisisComponent
      },
      {
        path: 'heroes',
        component: ManageHeroesComponent
      }
    ]
  },
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: '',
            component: CrisisCenterHomeComponent
          },
          {
            path: ':id',
            component: CrisisDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
