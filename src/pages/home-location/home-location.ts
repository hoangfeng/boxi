import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions

} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Events } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';

/**
 * Generated class for the HomeLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-location',
  templateUrl: 'home-location.html',
})
export class HomeLocationPage {
  // map: GoogleMap;
  // mapElement: HTMLElement;
  constructor(public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps,public platform: Platform,public geolocation: Geolocation,private events: Events) {
  	// platform.ready().then(()=>{
   //  		this.loadMap();
   //  	});
  }

 //  ionViewDidLoad() {
 //    this.loadMap();
 //  }
 //   loadMap() {
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
}
