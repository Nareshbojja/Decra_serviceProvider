import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenericProvider } from '../../providers/generic/generic';

/**
 * Generated class for the RejectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reject',
  templateUrl: 'reject.html',
})
export class RejectPage {
  rejectmsg:any;
  rorder_id :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public genericPro: GenericProvider) {
    this.rorder_id = navParams.get('ordr');
    console.log(this.rorder_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RejectPage');
  }
  doreject(){
    console.log(this.rejectmsg);
    this.genericPro.sendRejectmsg(this.rorder_id, this.rejectmsg);

  }

  

}
