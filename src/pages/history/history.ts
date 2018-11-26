import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  data: any;

  jumlah: any;
  status: any;

  filter: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: HttpClient) {
  }

  ionViewDidEnter() {
    this.status = 300;
    this.onFilterChange();
  }

  public async ambil(){
    let token = await this.storage.get('token');
    return await this.http.get('http://mamafood.com/api/laporan/1', {
      headers: {
        Authorization: token
      }
    }).toPromise();
  }

  public async onFilterChange(){
    console.log(this.status);
    let data = await this.ambil();
    this.data = data;
    this.filter = [];
    if(this.status == 100){
      for(let i=0; i<this.data.length; i++){
        if(this.data[i].status_approval == 0){
          this.filter.push(this.data[i]);
        }
      }
    }
    
    else if(this.status == 200){
      for(let i=0; i<this.data.length; i++){
        if(this.data[i].status_approval == 1 && this.data[i].status_pesanan == 0){
          this.filter.push(this.data[i]);
        }
      }
    }

    else{
      for(let i=0; i<this.data.length; i++){
        if(this.data[i].status_approval == 1 && this.data[i].status_pesanan == 1){
          this.filter.push(this.data[i]);
        }
      }
    }
  }
}
