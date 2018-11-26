import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { OrdermenuPage } from '../ordermenu/ordermenu';

/**
 * Generated class for the MakananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-makanan',
  templateUrl: 'makanan.html',
})
export class MakananPage {

  ordermenu: any;

  namaMenu:any;
  deskripsiMenu:any;
  hargaMenu:any;
  fotoMenu:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage, public http: HttpClient, public domSanitizer: DomSanitizer) {

              this.ordermenu = OrdermenuPage;
  }

  ionViewDidLoad() {
    this.fetchMenus(this.navParams.get('idMenu'));
  }

  public async fetchMenus(idmenu){
    let token = await this.storage.get('token');
    this.http.get(`http://mamafood.com/api/menu/${idmenu}`,{
      headers : {
        'Authorization' : token
      }
    }).subscribe((data: Menu) =>{
      this.namaMenu = data.namaMenu;
      this.deskripsiMenu = data.deskripsiMenu;
      this.hargaMenu = data.hargaMenu;
      this.fotoMenu = data.fotoMenu;
    });
  }

}

interface Menu{
  namaMenu:any;
  deskripsiMenu:any;
  hargaMenu:any;
  fotoMenu:any;
}
