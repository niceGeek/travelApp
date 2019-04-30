import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FindRideComponent } from './find-ride/find-ride.component';
import { AppRoutingModule } from './app-routing.module';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

// Defining routes constant
const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'find-ride', component: FindRideComponent },
  { path: 'offer-ride', component: OfferRideComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FindRideComponent,
    OfferRideComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // for debugging purposes only
    ),
    AppRoutingModule,
    // Import HttpClientModule after BrowserModule. See docs.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
