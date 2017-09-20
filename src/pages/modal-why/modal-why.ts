import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the ModalWhyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-why',
  templateUrl: 'modal-why.html',
})
export class ModalWhyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalWhyPage');
  }
  close(){
  	this.view.dismiss();
  }
  confirm(){  	
  	var data = 1;
    this.view.dismiss(data);  
  }
  chooseMethod(id){
  	  	document.getElementById("i1").style.display = "none";
  	  	document.getElementById("i2").style.display = "none";
  	  	document.getElementById("i3").style.display = "none";
  	  	document.getElementById("i4").style.display = "none";
  	  	document.getElementById("i5").style.display = "none";
  	  	document.getElementById("i6").style.display = "none";
  	  	document.getElementById("i7").style.display = "none";
  	  	document.getElementById("i8").style.display = "none";
  	  	document.getElementById("i9").style.display = "none";
  	  	document.getElementById(id).style.display="block";
  }

}
