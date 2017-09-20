import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeathEndPage } from '../death-end/death-end';
import { HomePage } from '../home/home';
/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }
  end(){
  	this.navCtrl.setRoot(HomePage);
  }
  help(){
  	this.navCtrl.setRoot(DeathEndPage);
  }
}
