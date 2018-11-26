import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  CreateButton: any;
  nama : string;
  email : string;
  password : string;
  noTelpon : string;
  Alamat : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public http: HttpClient) {
    this.CreateButton = TabsPage;
  }


  
  postRegister() {
    let form = {
      nama : this.nama,
      password : this.password,
      noTelpon : this.noTelpon,
      email : this.email,
      Alamat : this.Alamat
    };
    this.http.post('http://mamafood.com/api/signup', form,{
      headers : {
        'Content-Type' : 'application/json'
      }
    }).subscribe(res => {
      this.navCtrl.push(HomePage);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
