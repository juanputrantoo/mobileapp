import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ChangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  nama: String;
  email: String;
  noTelpon: String;
  Alamat: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, public http: HttpClient, public storage: Storage) {
    
  }

  

  

  ionViewDidLoad() {
    this.storage.get('token').then(val => {
      let res: Observable<any> = this.http.get('http://mamafood.com/api/token',{
        headers: {
          Authorization : val
        }
      })
      res.subscribe(data => {
        this.nama = data.nama;
        this.email = data.email;
        this.noTelpon = data.noTelpon;
      })
    }).catch(data => {
      console.log(data)
    });;
  }

  closeModal(){
    this.view.dismiss();
  }

  

}
