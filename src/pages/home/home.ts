import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GenericProvider } from '../../providers/generic/generic';
 import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import firebase from 'firebase';
import { MainPage } from '../main/main'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sdata = {
    "email": "service@gmail.com", "password": "123123"
  }
  loginData: any;
  constructor(public navCtrl: NavController, private genericPro: GenericProvider, private localStorage: LocalStorageProvider) {

  }
  Login() {
  
    if (this.sdata.email === undefined || this.sdata.email === "") {
      this.genericPro.presentToast('Please enter your email ID');
    }
    else if (this.sdata.password === undefined || this.sdata.password === "") {
      this.genericPro.presentToast('Please enter your password');
    }
    else {
      this.genericPro.showLoader();
      firebase.auth().signInWithEmailAndPassword(this.sdata.email, this.sdata.password).then(res => {
        if (res) {
          var resEmail;
         console.log(res);
          resEmail = res.email;

          var de = firebase.auth().currentUser.uid;
          //console.log(de);
          this.genericPro.getCurrentUserDetails(de).then(result => {
            console.log(result);
           // this.storagePro.remove("user_data");  
            this.loginData = result;
            this.genericPro.hideLoader();
            if (this.loginData == null) {
              this.genericPro.presentToast("Sorry, user not found");
            }
            else{
                this.localStorage.setData("service_provier_details",this.loginData);
                //this.events.publish('loggedin');
                    this.navCtrl.setRoot(MainPage);
            }
          }
          )
        }
        else {
          alert("Err");
          this.genericPro.presentToast("Login failed");
        }
      }).catch(err => {
        this.genericPro.hideLoader();
        this.genericPro.presentToast(err);
      })
    }
  }
}
