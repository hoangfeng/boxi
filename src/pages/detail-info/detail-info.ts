import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PaymentChooserPage } from '../payment-chooser/payment-chooser';
import { ModalDiscountPage } from '../modal-discount/modal-discount';
import { ModalRequestSuccessPage } from '../modal-request-success/modal-request-success';
import { ReceiverInfoPage } from '../receiver-info/receiver-info';
import { FindShipperPage } from '../find-shipper/find-shipper';
/**
 * Generated class for the DetailInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-info',
  templateUrl: 'detail-info.html',
})
export class DetailInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailInfoPage');
  }
   methodChooser() {
	   this.navCtrl.push(PaymentChooserPage);
  }
   discount(){
    const discountModal = this.modal.create('ModalDiscountPage');
    discountModal.present();
  }
  receiver(){
     this.navCtrl.push(ReceiverInfoPage);
  }
  confirm(){
    const mrModal = this.modal.create('ModalRequestSuccessPage');
    mrModal.present();

    mrModal.onDidDismiss( (data) => {
      this.navCtrl.push(FindShipperPage);
    }); 
    
  }
}
