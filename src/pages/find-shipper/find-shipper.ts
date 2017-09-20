import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackShipperPage } from '../track-shipper/track-shipper';
/**
 * Generated class for the FindShipperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-shipper',
  templateUrl: 'find-shipper.html',
})
export class FindShipperPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindShipperPage');
  }
  confirm() {
	   this.navCtrl.push(TrackShipperPage);
  }
}
