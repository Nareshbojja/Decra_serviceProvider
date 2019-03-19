import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenericProvider } from '../../providers/generic/generic';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import firebase from 'firebase/app';

/**
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {
  resEmail:any;
  myOrders :any;
  totolOrders:any;
  noOrders:boolean = false;
   constructor(public navCtrl: NavController, public navParams: NavParams, private genericPro: GenericProvider, private storagePro: LocalStorageProvider) {
    this.storagePro.getData('service_provier_details').then((val: any) => {
      console.log("" + val);
      this.resEmail = val.email;
     // console.log("ooo" + this.resEmail);
      this.getMYOrders(this.resEmail);
    
    })
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
        this.totolOrders = orders;
      }
      else{
        this.genericPro.presentToast("Sorry...You don't have any orders");
      }
      this.genericPro.hideLoader();
     console.log("myyy"+JSON.stringify(this.myOrders));

  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderHistoryPage');
  }
  next(){
    alert('yesss');
  }
  accepted(){
  console.log(this.totolOrders);
  this.getFilter("on_the_way");
  }
  timeup(){
    this.getFilter("time_up")
  }
  rejected(){
    this.getFilter("rejected")

  }
  finished(){
    this.getFilter("finished")
  }

  getFilter(status){
    let checkorder = [];
    for (var i=0; i < this.totolOrders.length; i++) {
     if (this.totolOrders[i].order_status === status) {
       console.log(this.totolOrders[i]);
       checkorder.push(this.totolOrders[i])
       console.log(checkorder);
       this.noOrders= false;
     }
     else{
       this.noOrders = true;
     }
   }
   this.myOrders = checkorder;
   return this.myOrders;
}
}
