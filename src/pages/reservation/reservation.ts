import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/User';
import { Reservation } from '../../app/models/Reservation';
import { ReservationsService } from '../../app/services/reservations.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html'
})
export class ReservationPage {
  user: User;
  reservations: Reservation[];
  selectedReservation: Reservation = new Reservation();
  unitCost: number = 1000;
  button: number = 0;
  error: String = '';
  costColor = 'primary';
  constructor(public navCtrl: NavController,
    public reservationService: ReservationsService,
    public navParams: NavParams) {
    this.selectedReservation = navParams.get('reservation');

    this.user = JSON.parse(Cookie.get('user'));

    if (this.selectedReservation == null) {
      this.selectedReservation = new Reservation();
      this.selectedReservation.user = this.user;
      this.selectedReservation.nbrRooms = 1;
    }

  }
  ngOnInit() {
  }


  reserver() {

    console.log('Button clicked = ' || this.button);
    if (this.button === 1) {
      this.selectedReservation.cost = this.unitCost * this.selectedReservation.nbrRooms;

      this.reservationService.reserver(this.selectedReservation)
        .subscribe(result => {
          this.selectedReservation = result;
          if (this.selectedReservation.error.startsWith('Success')) {
            this.selectedReservation = new Reservation();
            this.selectedReservation.nbrRooms = 1;
            this.selectedReservation.user = this.user;
          } else {
            // do nothing. Just display the error
            this.error = this.selectedReservation.error;
          }
        });
    } else if (this.button === 2) {
      this.reservationService.delete(this.selectedReservation)
        .subscribe(result => {
          if (result.startsWith('Success')) {
            this.selectedReservation = new Reservation();
            this.selectedReservation.nbrRooms = 1;
            this.selectedReservation.user = this.user;
          } else {
            // do nothing. Just display the error
            this.error = result;
          }
        });
    } else if (this.button === 3) {
      this.selectedReservation.status = 1;
      this.reservationService.confirmer(this.selectedReservation)
        .subscribe(result => {
          if (result.startsWith('Success')) {
            this.selectedReservation = new Reservation();
            this.selectedReservation.nbrRooms = 1;
            this.selectedReservation.user = this.user;
          } else {
            // do nothing. Just display the error
            this.error = result;
          }
        });
    } else if (this.button === 4) {
      this.selectedReservation.status = 2;
      this.reservationService.terminer(this.selectedReservation)
        .subscribe(result => {
          if (result.startsWith('Success')) {
            this.selectedReservation = new Reservation();
            this.selectedReservation.nbrRooms = 1;
            this.selectedReservation.user = this.user;
          } else {
            // do nothing. Just display the error
            this.error = result;
          }
        });
    }

  }

  updatePriceColor() {
    if (this.selectedReservation.nbrRooms < 10) {
      this.costColor = 'primary';
    } else if (this.selectedReservation.nbrRooms < 30) {
      this.costColor = 'secondary';
    } else if (this.selectedReservation.nbrRooms < 50) {
      this.costColor = 'dark';
    } else if (this.selectedReservation.nbrRooms < 70) {
      this.costColor = 'danger';
    } else {
      this.costColor = 'light';
    }
  }
}
