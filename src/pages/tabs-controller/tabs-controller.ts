import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReservationsPage } from '../reservations/reservations';
import { ReviewsPage } from '../reviews/reviews';
import { ClientsPage } from '../clients/clients';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ReservationsPage;
  tab2Root: any = ReviewsPage;
  tab3Root: any = ClientsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
