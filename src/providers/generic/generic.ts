import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
// import { StorageProvider } from '../storage/storage';
import firebase from 'firebase/app';

/*
  Generated class for the GenericProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GenericProvider {
  public loading;
  public reguser;
  constructor(public toastCtrl: ToastController,public loadingCtrl: LoadingController,
   // private storagePro: StorageProvider
    ) {
    console.log('Hello GenericProvider Provider');
  }
  public getCurrentUserDetails(uid) {
    return new Promise((resolve, reject) => {
      let ref = "serviceProvider_details/" + uid
      firebase.database().ref(ref).on('value', itemSnapshot => {
        this.reguser = itemSnapshot.val();
        resolve(this.reguser);
        return false;
      }, (error) => {
        reject(error);
      });
    });
  }

  getMyOrders(myEmail){
    return new Promise((resolve, reject) => {
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

        resolve(orders);
      }, (error) => {
        reject(error);
      });
    });
  }
  public showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  public hideLoader() {
    this.loading.dismiss();
  }

  public presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
