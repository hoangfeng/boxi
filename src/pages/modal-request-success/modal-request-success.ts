import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FindShipperPage } from '../find-shipper/find-shipper';
/**
 * Generated class for the ModalRequestSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-request-success',
  templateUrl: 'modal-request-success.html',
})
export class ModalRequestSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRequestSuccessPage');
  }
  close(){
  	this.view.dismiss();
  }
  findShipper(){
    var data = 1;
    this.view.dismiss(data);  
    
  }

}
