import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the TopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topup',
  templateUrl: 'topup.html',
})
export class TopupPage {

  jumlah: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: HttpClient, public app: App, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupPage');
  }

  public async sendTopUp(){
    let token = await this.storage.get('token');
    this.http.post('http://mamafood.com/api/topupsaldo',{
      jumlah : this.jumlah,
      bukti_transfer : ''
    },{
      headers : {
        'Authorization' : token
      }
    }).subscribe((data) => {
      console.log(data)
    })
  }

  alertTopUp() {
    const confirm = this.alertCtrl.create({
      title: 'Top Up MAMA-PAY berhasil!',
      message: 'Tunggu konfirmasi dari kami...',
      buttons: [{
        text: "Ok",
        handler: () => { ProfilePage }
      }]
    });
    confirm.present();
  }

  
  
}
