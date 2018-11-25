import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InscriptionPage } from '../pages/inscription/inscription';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ReservationsPage } from '../pages/reservations/reservations'; 


//import { MenuPage } from '../pages/menu/menu';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ConnexionPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToInscription(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InscriptionPage);
  }goToConnexion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConnexionPage);
  }goToReservations(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReservationsPage);
  }
}
