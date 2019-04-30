import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent {

  offerRideForm: FormGroup;
  submitted: Boolean = false;
  offerRideFormSubmitted: Boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.createOfferRide();
   }

   offerRide() {
    this.offerRideFormSubmitted = true;
   }

   goBack() {
    console.log('Implement go back functionality');
  }

   createOfferRide() {
     this.submitted = true;
     this.offerRideForm = this.formBuilder.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      departureTime: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required]
     });
   }

}
