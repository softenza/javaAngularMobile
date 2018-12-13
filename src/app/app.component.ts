import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InscriptionPage } from '../pages/inscription/inscription';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ReservationsPage } from '../pages/reservations/reservations';
import { User } from './models/User';
import { Cookie } from 'ng2-cookies/ng2-cookies';


//import { MenuPage } from '../pages/menu/menu';



@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = ConnexionPage;
  user: User = new User();

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   * check if the user is there in the cookie, otherwise initialize
   */
  ngOnInit() {
    this.user = JSON.parse(Cookie.get('user'));
    if (this.user == null) {
      this.user = new User();
    }
  }

  goToInscription(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(InscriptionPage);
  } goToConnexion(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ConnexionPage);
  } goToReservations(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ReservationsPage);
  }

  public logout() {
    Cookie.deleteAll();
    this.user = new User();
    this.navCtrl.setRoot(ConnexionPage);
  }

}
