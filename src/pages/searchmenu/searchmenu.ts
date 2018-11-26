import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { OrdermenuPage } from '../ordermenu/ordermenu';
import { CartPage } from '../cart/cart';
/**
 * Generated class for the SearchmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchmenu',
  templateUrl: 'searchmenu.html',
})
export class SearchmenuPage {
  searchTerm: String = '';
  menus:any;
  order:any;
  cartpage: any;
  menusempty:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient, 
    private camera: Camera, 
    private transfer: Transfer, 
    private file: File,
    private filePath: FilePath, 
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public base64: Base64,
    public storage: Storage,
    public domSanitizer: DomSanitizer) {

      this.order = OrdermenuPage;
      this.cartpage = CartPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepdgPage');
    this.fetchMenus();
  }

  public async fetchMenus(){
    this.storage.get('token').then(val => {
      let res: Observable<any> = this.http.get('http://mamafood.com/api/menu',{
        headers: {
          Authorization : val
        }
      })
      res.subscribe(data => {
        this.menusempty = data;
        this.menus = data;
      })
    }).catch(data => {
      console.log(data)
    });;
  }

  initializeItems() {
    this.menus = this.menusempty;
  }

  getItems(ev: any) {

    this.initializeItems();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.menus = this.menus.filter((menu:any) => {
        return (menu.namaMenu.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
}
