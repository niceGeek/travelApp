import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.component.html',
  styleUrls: ['./find-ride.component.css']
})
export class FindRideComponent implements OnInit{
  private driversURL = 'http://localhost:7001/travel-app-backend-1.0/resources/fahrer';
  private findRideForm: FormGroup;
  private submitted: Boolean = false;
  private findRideFormSubmitted: Boolean = false;
  private from: String;
  private to: String;
  private drivers: Observable<Object>;
  private result: any;
  // TODO: how about a constant of departures/destinations???
  // private const places = ['Kigali', 'Butare', 'Gitarama', 'Gikongoro', 'Cyangugu', 'Ruhengeri', 'Gisenyi', 'Byumba', '];

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
    this.createFindRideForm();
  }

  ngOnInit(): void {
    this.result = this.drivers;
  }

  findRides() {
    this.findRideFormSubmitted = true;
    this.from = this.findRideForm.get('departure').value;
    this.to = this.findRideForm.get('destination').value;
    this.result = this.http.get(this.driversURL).subscribe(
      (data) => {
        return console.log(data);
      }
    );
  return this.result;
    // this.drivers = this.http.get(this.driversURL).subscribe(() =>  console.log(JSON.stringify(this.drivers)));
      //console.log(JSON.stringify(this.drivers));
     // return this.drivers.pipe(catchError(this.handleError('findRides', '')));
  }

  goBack() {
    this.router.navigate(['/app-root']);
  }

  createFindRideForm() {
    this.submitted = true;
    this.findRideForm = this.formBuilder.group({
      departure: ['', Validators.required ],
      destination: ['', Validators.required ],
      departureDate: ['', Validators.required ],
      departureTime: ['', Validators.required ]
    });
  }

 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);
    console.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
