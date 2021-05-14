import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ofertas',
    component: OffersComponent
  },
  {
    path: 'cv',
    component: CvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
