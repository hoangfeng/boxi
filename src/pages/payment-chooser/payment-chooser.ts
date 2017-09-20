import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-chooser',
  templateUrl: 'payment-chooser.html',
})
export class PaymentChooserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentChooserPage');
  }
  done() {
	   this.navCtrl.pop();
  }
  chooseMethod(id){
  	  	document.getElementById("cash-tick").style.display ="none";
  	  	document.getElementById("debit-tick").style.display ="none";
  	  	document.getElementById("paypal-tick").style.display = "none";
  	  	document.getElementById(id).style.display="block";
  }
}
