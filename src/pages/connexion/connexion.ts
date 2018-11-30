import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../app/services/users.service';
import { User } from '../../app/models/User';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ReservationPage } from '../reservation/reservation';
import { InscriptionPage } from '../inscription/inscription';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  user: User = new User();
  constructor(public navCtrl: NavController, public userService: UsersService) {

  }

  login() {
    this.userService.login(this.user).subscribe(result => {
      this.user = result;
      if(this.user.error.startsWith('Success')){
        //set the user in the cookie so you don't get to log in again
        Cookie.set('user',JSON.stringify(this.user));
        //forward to the default page
        this.navCtrl.setRoot(ReservationPage);
      }else{
        // nothing to do. Error message will be displayed.
      }
    });
  }

  goToInscription(){
    this.navCtrl.setRoot(InscriptionPage);
  }

}
