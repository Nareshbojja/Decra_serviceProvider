import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoreinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moreinfo',
  templateUrl: 'moreinfo.html',
})
export class MoreinfoPage {
order_det:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order_det = navParams.get('vOrder');
    console.log(this.order_det);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreinfoPage');
  }

}
