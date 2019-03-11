import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase'; 

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // firebase.initializeApp({
      //   apiKey: "AIzaSyDhJAToPf1u6UroHIp5FHQqYMG-fdv7GRA",
      //   authDomain: "decra-dev.firebaseapp.com",
      //   databaseURL: "https://decra-dev.firebaseio.com",
      //   projectId: "decra-dev",
      //   storageBucket: "decra-dev.appspot.com",
      //   messagingSenderId: "916249916936"
      // })
      firebase.initializeApp({
      apiKey: "AIzaSyCpKUUdY3ERnWwOd7433a5wh3MqACFpshI",
      authDomain: "decraapp-1539949113412.firebaseapp.com",
      databaseURL: "https://decraapp-1539949113412.firebaseio.com",
      projectId: "decraapp-1539949113412",
      storageBucket: "decraapp-1539949113412.appspot.com",
      messagingSenderId: "954074271017"
    })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

