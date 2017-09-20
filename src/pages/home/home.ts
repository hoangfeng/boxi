import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions

} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";
import { Nav, Platform,NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Events } from 'ionic-angular';
import { HomeLocationPage } from '../home-location/home-location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // map: GoogleMap;
  // mapElement: HTMLElement;
  constructor(private googleMaps: GoogleMaps,public platform: Platform,public geolocation: Geolocation,private events: Events,public navCtrl: NavController) {

  }

  ionViewDidLoad() {
   // this.loadMap();
  }

 // loadMap() {
 //    this.mapElement = document.getElementById('map');

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
 //              lat: 21.036207,
 //              lng: 105.815829
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

  selectLocation(){
    this.navCtrl.setRoot(HomeLocationPage);
  }
}