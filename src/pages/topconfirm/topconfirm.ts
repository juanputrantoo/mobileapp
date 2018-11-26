import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopuploadPage } from '../topupload/topupload';

/**
 * Generated class for the TopconfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topconfirm',
  templateUrl: 'topconfirm.html',
})
export class TopconfirmPage {

  uploadButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.uploadButton = TopuploadPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopconfirmPage');
  }

}
