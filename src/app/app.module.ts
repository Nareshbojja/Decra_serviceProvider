import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main'

import { StorageProvider } from '../providers/storage/storage';
import { IonicStorageModule } from '@ionic/Storage';
import { GenericProvider } from '../providers/generic/generic';
import firebase from 'firebase';
import { LocalStorageProvider } from '../providers/local-storage/local-storage'; 


@NgModule({
  declarations: [
    MyApp,
    HomePage,MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    GenericProvider,
    LocalStorageProvider
  ]
})
export class AppModule {}
