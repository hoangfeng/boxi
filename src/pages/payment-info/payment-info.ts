import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentInputPage } from '../payment-input/payment-input';
/**
 * Generated class for the PaymentInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-info',
  templateUrl: 'payment-info.html',
})
export class PaymentInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentInfoPage');
  }
  paymentInput() {
	this.navCtrl.push(PaymentInputPage);
  }
  chooseMethod(id){
  	  	document.getElementById("cash-tick").style.display ="none";
  	  	document.getElementById("debit-tick").style.display ="none";
  	  	document.getElementById("paypal-tick").style.display = "none";
  	  	document.getElementById(id).style.display="block";
  }
}
