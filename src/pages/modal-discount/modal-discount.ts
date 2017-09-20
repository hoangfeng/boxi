import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalDiscountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-discount',
  templateUrl: 'modal-discount.html',
})
export class ModalDiscountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDiscountPage');
  }
  close(){
  	this.view.dismiss();
  }

}
