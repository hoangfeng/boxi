import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController , ModalController } from 'ionic-angular';
import { HomeLocationPage} from '../home-location/home-location';

/**
 * Generated class for the ModalCancelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-cancel',
  templateUrl: 'modal-cancel.html',
})
export class ModalCancelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCancelPage');
  }
  close(){
  	this.view.dismiss();
  }
  confirm(){
    var data = 1;
    this.view.dismiss(data);  
  }
}
