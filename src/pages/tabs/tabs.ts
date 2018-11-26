import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, AlertController, Platform } from 'ionic-angular';
import { MainhomePage } from '../mainhome/mainhome';
import { NotificationPage } from '../notification/notification';
import { HistoryPage } from '../history/history';
import { ProfilePage} from '../profile/profile';
/**
 * Generated class for the TabtabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({priority: 'high', segment: 'tabs'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = MainhomePage;
  tab2Root = NotificationPage;
  tab3Root = HistoryPage;
  tab4Root = ProfilePage;   
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public platform: Platform) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
