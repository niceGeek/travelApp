import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FindRideComponent } from '../app/find-ride/find-ride.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'find-ride', component: FindRideComponent },
  { path: 'offer-ride', component: OfferRideComponent },
  // { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}