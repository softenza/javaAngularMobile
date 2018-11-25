import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReviewPage } from '../review/review';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html'
})
export class ReviewsPage {

  constructor(public navCtrl: NavController) {
  }
  goToReview(params){
    if (!params) params = {};
    this.navCtrl.push(ReviewPage);
  }
}
