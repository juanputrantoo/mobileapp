import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Platform, App, Nav, MenuController } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the DetailpdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailpdg',
  templateUrl: 'detailpdg.html',
})
export class DetailpdgPage {
  nama: String;
  email: String;
  noTelpon: String;
  idSaldo: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public alertCtrl: AlertController, public platform: Platform, public http: HttpClient, public storage: Storage, public app: App, public menuCtrl: MenuController) {
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
    this.storage.get('token').then(vgal => {
      let res2: Observable<any> = this.http.get('http://mamafood.com/api/saldouser',{
        headers: {
          Authorization : vgal
        }
      })
      res2.subscribe(data => {
        this.idSaldo = data.jumlah;
      })
    });;
    // console.log('ionViewDidLoad DetailpdgPage');
  }

  logoutConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Yakin keluar dari masakan mama?',
      buttons: [{
        text: "Yes",
        handler: () => { this.exitApp() }
      }, {
        text: "Cancel",
        role: 'cancel'
      }]
    });
    confirm.present();
  }

  exitApp(){
    console.log("logout");
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
    
  }

  openModal(){
    const myModal = this.modal.create(EditPage);

    myModal.present();
  }
}
