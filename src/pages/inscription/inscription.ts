import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { User } from '../../app/models/User'; 
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ReservationsPage } from '../reservations/reservations';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {
  user: User = new User();
  constructor(public navCtrl: NavController, public userService: UsersService) {
  }

  register() {
    this.userService.register(this.user).subscribe(result => {
      this.user = result;
      if (this.user.error.startsWith('Success')) {
        Cookie.set('user', JSON.stringify(this.user));
        this.navCtrl.setRoot(ReservationsPage);
      }
    });
  }
}
