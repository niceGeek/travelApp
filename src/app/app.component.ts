import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome and enjoy the ride';
  submitted: Boolean = false;

  /** Find ride */
  findRideClicked(): void {
    this.submitted = true;
    console.log('Find ride button clicked');
  }

  /** Offer ride */
  offerRideClicked(): void {
    this.submitted = true;
    console.log('Offerr ride button clicked');
  }
}
