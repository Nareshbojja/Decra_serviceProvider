import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google: any;
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/interval';

/**
 * Generated class for the MoreinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moreinfo',
  templateUrl: 'moreinfo.html',
})
export class MoreinfoPage {
order_det:any;
user_loc:any;
remainingSeconds: number;
runTimer: boolean;
hasStarted: boolean;
hasFinished: boolean;
displayTime: string;
myCount:any;

timeInSeconds: number;

@ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order_det = navParams.get('vOrder');
    console.log(this.order_det);
    this.user_loc = this.order_det.u_latlng;
    console.log("loc"+ this.user_loc);
    this.tiner();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreinfoPage');
  }

  tiner(){
    setTimeout(start, 1000);

    var i = 1;
    // var num = document.getElementById('number');
    
    function start() {
      setInterval(increase, 1000);
    }
    
    function increase() {
        if (i < 10000) {
          i++;
          this.myCount = i;
          console.log(this.myCount);
        }
    }
  }
  
  ionViewDidEnter(){
    //Set latitude and longitude of some place
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: this.user_loc,
      zoom: 22,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      fullscreenControl: false

    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    console.log(this.order_det.u_latlng);
    this.addMarker(this.order_det.u_latlng);

  }
  addMarker(latln){
    let values = latln;
    var latlng = new google.maps.LatLng(values);

    console.log(values);
    console.log(this.map.getCenter());
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      position: this.user_loc,
      mapTypeControl:false,
      center: this.user_loc
    
    });
  
    //let content = "<h4>Information!</h4>";          
  
    //this.addInfoWindow(myMarker, content);
  
  }
  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  
  initTimer() {
    if(!this.timeInSeconds) { this.timeInSeconds = 0; }
 
    this.runTimer = false;
    this.hasStarted = false;
    this.hasFinished = false;
    this.remainingSeconds = this.timeInSeconds;
    this.displayTime = this.getSecondsAsDigitalClock(this.remainingSeconds);
 }
 startTimer() {
    this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
 }
 timerTick() {
  setTimeout(() => {
      if (!this.runTimer) { return; }
      this.remainingSeconds--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingSeconds);
      if (this.remainingSeconds > 0) {
          this.timerTick();
      }
      else {
          this.hasFinished = true;
      }
  }, 1000);
}
getSecondsAsDigitalClock(inputSeconds: number) {
  var sec_num = parseInt(inputSeconds.toString(), 10);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);
  var hoursString = '';
  var minutesString = '';
  var secondsString = '';
  hoursString = (hours < 10) ? "0" + hours : hours.toString();
  minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
  secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
  return hoursString + ':' + minutesString + ':' + secondsString;
}

}
