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

  getDriverEmails(){
    return new Promise((resolve, reject) => {
      firebase.database().ref('driver_details/').on('value', itemSnapshot => {
        let drivers = [];
        console.log(itemSnapshot.val());
        itemSnapshot.forEach(itemSnap => {
          if (itemSnap.val().avaialble === "yes") {
            console.log(itemSnap.val().email);
           // drivers.push(itemSnap.val().email);
           drivers.push(itemSnap.val());
          }
          return false;
        });
        resolve(drivers);
      }, (error) => {
        reject(error);
      });
    });
  }

  updateStatus(order_id,driver){
    let ref = "orders/"+order_id+"/";
    return new Promise((resolve, reject) => {
      firebase.database().ref(ref).on('value', itemSnapshot => {
        firebase.database().ref(ref).update({
          order_status: "on_the_way",
          driver_info: driver
        });

        console.log(itemSnapshot.val());
        resolve(true);
      }, (error) => {
        reject(error);
      });
  })
}
sendRejectmsg(order_id,msg){
  let ref = "orders/"+order_id+"/";
  return new Promise((resolve, reject) => {
    firebase.database().ref(ref).on('value', itemSnapshot => {
      firebase.database().ref(ref).update({
        'reject_msg' : msg,
        'order_status': "rejected"
      })

      console.log(itemSnapshot.val());
      resolve(true);
    }, (error) => {
      reject(error);
    });
})
}
updateDriver(order_id){
  // let ref = "driverdetails/"+order_id+"/";
  return new Promise((resolve, reject) => {
    firebase.database().ref('driver_details/').orderByChild('email').equalTo(order_id).once('value', function (snapshot) {
      var driverDetails = snapshot.val();
     
      console.log(snapshot.key);
      console.log(snapshot.val());
      let obj = snapshot.val();
      console.log(Object.keys(obj));
      let key = Object.keys(obj);
      let ref = "driver_details/"+key+"/";
      console.log(ref);
//  firebase.database().ref(ref).on('value', itemSnapshot => {
        firebase.database().ref(ref).update({
          avaialble: "no"
        });
    //  })
      resolve(driverDetails);
      return false;
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
