import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReservationsPage } from '../pages/reservations/reservations';
import { ReviewsPage } from '../pages/reviews/reviews';
import { ClientsPage } from '../pages/clients/clients';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ConnexionPage } from '../pages/connexion/connexion';
import { LoginPage } from '../pages/login/login';
import { ReviewPage } from '../pages/review/review';
import { ReservationPage } from '../pages/reservation/reservation';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReservationsService } from './services/reservations.service';
import { UsersService } from './services/users.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ReservationsPage,
    ReviewsPage,
    ClientsPage,
    TabsControllerPage,
    InscriptionPage,
    ConnexionPage,
    LoginPage,
    ReviewPage,
    ReservationPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReservationsPage,
    ReviewsPage,
    ClientsPage,
    TabsControllerPage,
    InscriptionPage,
    ConnexionPage,
    LoginPage,
    ReviewPage,
    ReservationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsersService,
    ReservationsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}