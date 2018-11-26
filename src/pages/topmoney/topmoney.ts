import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopconfirmPage } from '../topconfirm/topconfirm';

/**
 * Generated class for the TopmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topmoney',
  templateUrl: 'topmoney.html',
})
export class TopmoneyPage {
  nButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nButton = TopconfirmPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopmoneyPage');
  }

}
