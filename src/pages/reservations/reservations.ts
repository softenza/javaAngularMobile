import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../app/models/User';
import { Reservation } from '../../app/models/Reservation';
import { ReservationsService } from '../../app/services/reservations.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ReservationPage } from '../reservation/reservation';

@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html'
})
export class ReservationsPage {

  user: User;
  reservations: Reservation[];
  constructor(public navCtrl: NavController, public reservationService: ReservationsService) {
  }
  ngOnInit() {
    this.user = JSON.parse(Cookie.get('user'));

    if (this.user != null) {
      if (this.user.role === 1) {
        this.getAllReservations();
      } else {
        this.getUserReservations();
      }
    }
  }

  getAllReservations() {
    this.reservationService.getAllReservations()
      .subscribe(result => {
        this.reservations = result;
      });
  }
  getUserReservations() {
    this.reservationService.getUserReservations(this.user)
      .subscribe(result => {
        this.reservations = result;
      });
  }

  goToReservation(data: Reservation) {
    this.navCtrl.push(ReservationPage, {
      reservation: data
    });
  }

   newReservation() {
    this.navCtrl.push(ReservationPage, { 
    });
  }
}
