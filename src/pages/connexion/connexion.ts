import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { User } from '../../app/models/User';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { InscriptionPage } from '../inscription/inscription';
import { ReservationsPage } from '../reservations/reservations';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  user: User;
  constructor(public navCtrl: NavController, public userService: UsersService) {

    this.user = JSON.parse(Cookie.get('user'));
    if (this.user == null) {
      this.user = new User();
    } else {
      this.navCtrl.setRoot(ReservationsPage);
    }
  }

  login() {
    this.userService.login(this.user).subscribe(result => {
      this.user = result;
      if (this.user.error.startsWith('Success')) {
        //set the user in the cookie so you don't get to log in again
        Cookie.set('user', JSON.stringify(this.user));
        //forward to the default page
        this.navCtrl.setRoot(ReservationsPage);
      } else {
        // nothing to do. Error message will be displayed.
      }
    });
  }

  goToInscription() {
    this.navCtrl.setRoot(InscriptionPage);
  }

}
