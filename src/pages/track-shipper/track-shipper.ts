import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, ModalOptions } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions

} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Events } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { ModalCancelPage } from '../modal-cancel/modal-cancel';
import { OverviewPage }  from '../overview/overview';
import { ModalWhyPage } from '../modal-why/modal-why';
import { HomePage } from '../home/home';

/**
 * Generated class for the TrackShipperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-shipper',
  templateUrl: 'track-shipper.html',
})
export class TrackShipperPage {
  // map: GoogleMap;
  // mapElement: HTMLElement;
  constructor(public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps,public platform: Platform,public geolocation: Geolocation,private events: Events , public modal: ModalController) {
  // 	platform.ready().then(()=>{
		// this.loadMap();
	// });
  }

  // ionViewDidLoad() {
  //   this.loadMap();
  // }
 //  loadMap() {
 //    this.mapElement = document.getElementById('map');
 //    let lat_gps =0;
 //    let lon_gps = 0;

 //   this.geolocation.getCurrentPosition().then((resp) => {
	//  // resp.coords.latitude
	//  // resp.coords.longitude
	// }).catch((error) => {
	//  // alert('Error getting location '+ error);
	// });

 //    let mapOptions: GoogleMapOptions = {
 //      camera: {
 //        target: {
 //         lat: 21.036207,
 //         lng: 105.815829
 //        },
 //        zoom: 18,
 //        tilt: 30
 //      }
 //    };
 //    	// lat: 21.036207,
 //     //    lng: 105.815829
 //    this.map = this.googleMaps.create(this.mapElement, mapOptions);

 //    // Wait the MAP_READY before using any methods.
 //    this.map.one(GoogleMapsEvent.MAP_READY)
 //      .then(() => {
 //        console.log('Map is ready!');

 //        // Now you can use all methods safely.
 //        this.map.addMarker({
 //            title: 'Ionic',
 //            icon: 'blue',
 //            animation: 'DROP',
 //            position: {
 //              lat: 43.0741904,
 //              lng: -89.3809802
 //            }
 //          })
 //          .then(marker => {
 //            marker.on(GoogleMapsEvent.MARKER_CLICK)
 //              .subscribe(() => {
 //                alert('clicked');
 //              });
 //          });

 //      });
 //      this.events.subscribe('menu:opened', () => {
 //          this.map.setClickable( false );
 //      });

 //      this.events.subscribe('menu:closed', () => {
 //          this.map.setClickable( true );
 //      });

 //  }
  skip(){
    this.navCtrl.push(OverviewPage);
  }
  cancel(){
    const opt : ModalOptions ={      
      enableBackdropDismiss: true
    };
    const cancelModal = this.modal.create('ModalCancelPage',null,opt);
    cancelModal.present();

     cancelModal.onDidDismiss( (data) => {
      if(data == 1){
        const whyModal = this.modal.create('ModalWhyPage',null,opt);
        whyModal.present();
        whyModal.onDidDismiss( (data) => {
          if(data == 1){
            this.navCtrl.setRoot(HomePage);  
          }          
        });
      }
    });
  }

 
}
