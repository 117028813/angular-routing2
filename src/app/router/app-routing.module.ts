import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../providers/auth-guard.service';

import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AdminComponent } from '../components/admin/admin.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { ManageCrisisComponent } from '../components/manage-crisis/manage-crisis.component';
import { ManageHeroesComponent } from '../components/manage-heroes/manage-heroes.component';
import { LoginComponent } from '../components/login/login.component';

import { heroRoutes } from "./hero-routes";
import { crisisRoutes } from "./crisis-routes";

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
  ...crisisRoutes,
  ...heroRoutes,
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
