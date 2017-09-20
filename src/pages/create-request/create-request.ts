import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions ,Modal} from 'ionic-angular';
import { ModalEstimatePage } from '../modal-estimate/modal-estimate';
import { ModalDiscountPage } from '../modal-discount/modal-discount';
import { PaymentChooserPage } from '../payment-chooser/payment-chooser';
import { ReceiverInfoPage } from '../receiver-info/receiver-info';
import { DetailInfoPage } from '../detail-info/detail-info';
/**
 * Generated class for the CreateRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-request',
  templateUrl: 'create-request.html',
})
export class CreateRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRequestPage');
  }
  estimate(){  	      
  	const estimateModal = this.modal.create('ModalEstimatePage');
    
  	estimateModal.present();
    estimateModal.onDidDismiss( (data) => {
      this.navCtrl.push(DetailInfoPage);
    });
  }
  discount(){
    const discountModal = this.modal.create('ModalDiscountPage');
    discountModal.present();
  }
  methodChooser() {
     this.navCtrl.push(PaymentChooserPage);
  
  }
  receiver(){
     this.navCtrl.push(ReceiverInfoPage);
  }
}
