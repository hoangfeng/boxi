import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { DeathEndPage } from '../pages/death-end/death-end';
import { Geolocation } from '@ionic-native/geolocation';
import { PaymentInfoPage } from '../pages/payment-info/payment-info';
import { CreateRequestPage } from '../pages/create-request/create-request';
import { Events } from 'ionic-angular';
import { HistoryPage } from '../pages/history/history';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private geolocation: Geolocation,public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Tạo đơn hàng', component: CreateRequestPage,icon: 'home'},
      { title: 'BOXiPay', component: PaymentInfoPage ,icon:'cash'},
      { title: 'Lịch sử đơn hàng', component: DeathEndPage  ,icon:'time'},
      { title: 'Lộ trình đơn hàng', component: HistoryPage  ,icon:'notifications'},
      { title: 'Cài đặt', component: DeathEndPage  ,icon:'settings'},
      { title: 'Trợ Giúp', component: DeathEndPage  ,icon:'help-circle'},
      { title: 'Thoát', component: WelcomePage  ,icon:'exit'}
    ];
    
  }
  
  initializeApp() {
      this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.           
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#FFCC38');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openPersonalInfo(){
    this.nav.setRoot(PersonalInfoPage);
  }
  menuClosed() {
    this.events.publish('menu:closed', '');
  }

  menuOpened() {
      this.events.publish('menu:opened', '');
  }

}
