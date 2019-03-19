import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenericProvider } from '../../providers/generic/generic';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import firebase from 'firebase/app';
import { SelectDriverPage } from '../select-driver/select-driver';
import { MoreinfoPage } from '../moreinfo/moreinfo';
import { OrderHistoryPage } from '../order-history/order-history';
import { RejectPage } from '../reject/reject';

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
     // console.log("ooo" + this.resEmail);
      this.getMYOrders(this.resEmail);
    
    })
    // let resEmail  = JSON.stringify(myDetails.email);

  }
  myyynext(){
    alert('ye8888ss');
  }
  getMYOrders(myEmail){
    this.genericPro.showLoader();
    firebase.database().ref('orders/').on('value', itemSnapshot => {
      let orders = [];
      console.log(itemSnapshot.val());
      itemSnapshot.forEach(itemSnap => {
        if (myEmail == itemSnap.val().provider_email) {
         console.log(itemSnap.val().provider_email);
          orders.push(itemSnap.val());
        }

        return false;
      });
      if(this.myOrders !== "" || this.myOrders !== null){
        this.myOrders = orders;
      }
      else{
        this.genericPro.presentToast("Sorry...You don't have any orders");
      }
      this.genericPro.hideLoader();
     console.log("myyy"+JSON.stringify(this.myOrders));

  })
}
reject(ordr_id){
this.navCtrl.push(RejectPage,{
  'ordr' : ordr_id
});
}
selctDriver(o_id){
    console.log(o_id);
  //send status update as notification to the user 
  this.navCtrl.push(SelectDriverPage,{
    'ordr' : o_id
  });
}
viewMore(order_id){
  let viewOrd:any;
  console.log(order_id);
  this.myOrders.forEach(ord => {
    console.log(ord);
    if(order_id == ord.order_id){
      viewOrd = ord;
    }
  });

  this.navCtrl.push(MoreinfoPage,{
    vOrder : viewOrd
  });
}
ordershist(){
  this.navCtrl.push(OrderHistoryPage);
}
  ionViewDidLoad() {

    console.log('ionViewDidLoad MainPage');
  }

}
