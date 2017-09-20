import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPage } from '../forgot/forgot';
import { SetUpPhoneNumberPage } from '../set-up-phone-number/set-up-phone-number';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  forgot(){
  	this.navCtrl.push(ForgotPage);
  }
  login(){
    this.navCtrl.push(SetUpPhoneNumberPage);
  }
}
