import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageCrisisComponent } from './components/manage-crisis/manage-crisis.component';
import { ManageHeroesComponent } from './components/manage-heroes/manage-heroes.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    HeroDetailComponent,
    CrisisCenterComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent,
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisisComponent,
    ManageHeroesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
