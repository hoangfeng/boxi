import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DetailInfoPage } from '../detail-info/detail-info';
/**
 * Generated class for the ModalEstimatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-estimate',
  templateUrl: 'modal-estimate.html',
})
export class ModalEstimatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalEstimatePage');
  }
  close(){
  	this.view.dismiss();
  }
  showDetail(){
     var data = 1;
      this.view.dismiss(data);  
  }
}
