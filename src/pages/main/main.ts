import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenericProvider } from '../../providers/generic/generic';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import firebase from 'firebase/app';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  public myOrders: any;
  public resEmail: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private genericPro: GenericProvider, private storagePro: LocalStorageProvider) {
    // let myDetails:any = this.storagePro.getData('');
    this.storagePro.getData('service_provier_details').then((val: any) => {
      console.log("" + val);
      this.resEmail = val.email;
      console.log("ooo" + this.resEmail);
      this.getMYOrders(this.resEmail);
    
    })
    // let resEmail  = JSON.stringify(myDetails.email);

  }

  getMYOrders(myEmail){
    firebase.database().ref('orders/').on('value', itemSnapshot => {
      let orders = [];
      //console.log(JSON.stringify(this.reguser));
      itemSnapshot.forEach(itemSnap => {
        if (myEmail == itemSnap.val().provider_email) {
          console.log(itemSnap.val().provider_email);
          orders.push(itemSnap.val());
        }

        return false;
      });
      this.myOrders = orders;
      console.log("myyy"+JSON.stringify(this.myOrders));

  })
}
  ionViewDidLoad() {

    console.log('ionViewDidLoad MainPage');
  }

}
