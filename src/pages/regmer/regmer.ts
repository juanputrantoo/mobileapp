import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading, AlertController, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { TambahmenuregmerPage } from '../tambahmenuregmer/tambahmenuregmer';
import { MainhomePage } from '../mainhome/mainhome';

/**
 * Generated class for the RegmerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-regmer',
  templateUrl: 'regmer.html',
})
export class RegmerPage {
  lastImage: string = null;
  loading: Loading;
  progress: number;
  deskripsiMenu: any;
  namaMenu: any;
  hargaMenu: any;

  tambahMenu: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, public http: HttpClient, public storage: Storage, public alertCtrl: AlertController, public app: App) {
    this.tambahMenu = TambahmenuregmerPage;
  }

  

  ionViewDidLoad() {
    
  }

  public async signuppdg(){
    let token = await this.storage.get('token');
    this.http.post('http://mamafood.com/api/signuppedagang',{
      // body
    },{
      headers : {
        'Authorization' : token
      }
    }).subscribe((data) =>{
      console.log(data)
    });
  }

  signupmessage() {
    const confirm = this.alertCtrl.create({
      title: 'Sign Up Pedagang',
      message: 'Terima kasih Mama! Tunggu konfirmasi dari kami ya',
      buttons: [{
        text: "OK",
        handler: () => { this.keluar() }
      }]
    });
    confirm.present();
  }

  keluar(){
    var nav = this.app.getRootNav();
    nav.setRoot(MainhomePage);
  }
}
