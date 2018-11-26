import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailpdgPage } from '../detailpdg/detailpdg';
import { ToppdgPage } from '../toppdg/toppdg';
import { BuypromopdgPage } from '../buypromopdg/buypromopdg';

/**
 * Generated class for the ProfpdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profpdg',
  templateUrl: 'profpdg.html',
})
export class ProfpdgPage {
  tab1Root = DetailpdgPage;
  tab2Root = ToppdgPage;
  tab3Root = BuypromopdgPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfpdgPage');
  }

}
