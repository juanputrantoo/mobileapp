import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
/**
 * Generated class for the NotifpdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifpdg',
  templateUrl: 'notifpdg.html',
})
export class NotifpdgPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: HttpClient) {
  }

  ionViewDidEnter() {
    // console.log('ionViewDidLoad NotifpdgPage');
    this.ambil();
  }

  public async ambil(){
    let token = await this.storage.get('token');
    this.http.get('http://mamafood.com/api/laporan/0', {
      headers: {
        Authorization: token
      }
    }).subscribe((data)=>{
      this.data = data;
      console.log(data);
    })
  }

  
}
