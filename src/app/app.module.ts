import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { HomeLocationPage } from '../pages/home-location/home-location';
import { ListPage } from '../pages/list/list';


import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { NavigatePage } from '../pages/navigate/navigate';
import { LoginPage } from '../pages/login/login';
import { ForgotPage } from '../pages/forgot/forgot';
import { SetUpPhoneNumberPage } from '../pages/set-up-phone-number/set-up-phone-number';
import { ConfirmPhoneNumberPage } from '../pages/confirm-phone-number/confirm-phone-number';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { PaymentInfoPage } from '../pages/payment-info/payment-info';
import { PaymentInputPage } from '../pages/payment-input/payment-input';
import { DeathEndPage } from '../pages/death-end/death-end';
import { CreateRequestPage } from '../pages/create-request/create-request';
import { PaymentChooserPage } from '../pages/payment-chooser/payment-chooser';
import { FindShipperPage } from '../pages/find-shipper/find-shipper';
import { TrackShipperPage } from '../pages/track-shipper/track-shipper';
import { ReceiverInfoPage } from '../pages/receiver-info/receiver-info';
import { OverviewPage }  from '../pages/overview/overview';
import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMaps} from '@ionic-native/google-maps';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HistoryPage } from '../pages/history/history';
import { DetailInfoPage } from '../pages/detail-info/detail-info';
// import { Google-Maps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    SignupPage,
    NavigatePage,
    LoginPage,
    ForgotPage,
    SetUpPhoneNumberPage,
    ConfirmPhoneNumberPage,
    PersonalInfoPage,
    DeathEndPage,
    PaymentInfoPage,
    PaymentInputPage,
    CreateRequestPage,
    HomeLocationPage,
    HistoryPage,
    DetailInfoPage,
    PaymentChooserPage,
    FindShipperPage,
    TrackShipperPage,
    ReceiverInfoPage,
    OverviewPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    SignupPage,
    NavigatePage,
    LoginPage,
    ForgotPage,
    SetUpPhoneNumberPage,
    ConfirmPhoneNumberPage,
    PersonalInfoPage,
    DeathEndPage,
    PaymentInfoPage,
    PaymentInputPage,
    CreateRequestPage,
    HomeLocationPage,
    HistoryPage,
    DetailInfoPage,
    PaymentChooserPage,
    FindShipperPage,
    TrackShipperPage,
    ReceiverInfoPage,
    OverviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps, 
    Geolocation,      
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
