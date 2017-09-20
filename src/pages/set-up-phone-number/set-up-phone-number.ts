import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPhoneNumberPage } from '../confirm-phone-number/confirm-phone-number';

/**
 * Generated class for the SetUpPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-up-phone-number',
  templateUrl: 'set-up-phone-number.html',
})
export class SetUpPhoneNumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetUpPhoneNumberPage');
  }
   goBack() {
	this.navCtrl.pop();
  }
  confirmPhoneNumber(){
  	this.navCtrl.push(ConfirmPhoneNumberPage);
  }

}
