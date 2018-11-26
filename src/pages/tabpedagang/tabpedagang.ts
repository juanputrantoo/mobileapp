import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomepdgPage } from '../homepdg/homepdg';
import { NotifpdgPage } from '../notifpdg/notifpdg';
import { HispdgPage } from '../hispdg/hispdg';
import { ProfpdgPage } from '../profpdg/profpdg';

/**
 * Generated class for the TabpedagangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabpedagang',
  templateUrl: 'tabpedagang.html',
})
export class TabpedagangPage {

  tab1 = HomepdgPage;
  tab2 = NotifpdgPage;
  tab3 = HispdgPage;
  tab4 = ProfpdgPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabpedagangPage');
  }

}