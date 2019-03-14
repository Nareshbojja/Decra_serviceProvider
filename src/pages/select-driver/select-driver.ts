import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenericProvider } from '../../providers/generic/generic';
 import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
 import { HomePage } from '../home/home'
 /**
 * Generated class for the SelectDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-driver',
  templateUrl: 'select-driver.html',
})
export class SelectDriverPage {
driver_emails :any;
sel_mail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private genericPro: GenericProvider, private localStorage: LocalStorageProvider) {
  }

  ionViewDidLoad() {
    this.genericPro.getDriverEmails().then((driver)=>{
      this.driver_emails = driver;
      console.log(this.driver_emails.length);
      console.log("driver"+this.driver_emails);
    })
    console.log('ionViewDidLoad SelectDriverPage');
  }
  seldriver() {
    console.log(this.sel_mail);
    // console.log(this.category);
  }

  done(){
    if(this.sel_mail){
      this.genericPro.updateDriver(this.sel_mail).then(()=>{
        this.navCtrl.push(HomePage);
      })
    }
    else{
      this.genericPro.presentToast('Please select driver');
    }
  }
}
