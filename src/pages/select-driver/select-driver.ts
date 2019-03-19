import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenericProvider } from '../../providers/generic/generic';
 import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
 import { MainPage } from '../main/main';
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
drivers:any;
order_id:any;
sel_driver:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private genericPro: GenericProvider, private localStorage: LocalStorageProvider) {
    this.order_id =  navParams.get('ordr');
    console.log(this.order_id);
  }

  ionViewDidLoad() {
    this.genericPro.getDriverEmails().then((driver)=>{
      this.drivers = driver;
      console.log(this.drivers);
      this.driver_emails = this.drivers.map(a => a.email);
      console.log(this.driver_emails);
      if(this.driver_emails <= 0){
        this.genericPro.presentToast('Currently all the drivers are busy');
      }
    })
   
    console.log('ionViewDidLoad SelectDriverPage');
  }
  seldriver() {
    console.log(this.sel_mail);
    // console.log(this.category);
  }

  done(){
    if(this.sel_mail){
      for (var i=0; i < this.drivers.length; i++) {
        if (this.drivers[i].email === this.sel_mail) {
          console.log(this.drivers[i]);
          this.sel_driver = this.drivers[i];
          delete this.sel_driver.password;
          delete this.sel_driver.avaialble;
        }
    }

      this.genericPro.updateStatus(this.order_id, this.sel_driver);
      this.genericPro.updateDriver(this.sel_mail).then(()=>{
        this.navCtrl.push(MainPage);
      })
    }
    else{
      this.genericPro.presentToast('Please select driver');
    }
  }
}
