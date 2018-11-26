import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { OrdermenuPage } from '../ordermenu/ordermenu';
import { CartPage } from '../cart/cart';


/**
 * Generated class for the WarungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-warung',
  templateUrl: 'warung.html',
})
export class WarungPage {
  currentNumber = 0;
  menus: any;
  menuscart:any;
  namaPedagang: any;
  order:any;
  cartpage:any;
  cart:any;
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public storage: Storage, public http: HttpClient, public domSanitizer: DomSanitizer) {
                this.order = OrdermenuPage;
                this.cartpage = CartPage;
                // this.getData(this.navParams.get('idPedagang'));
  }

  // getData(idpedagang){
  //   this.menus = this.http.get(`http://mamafood.com/api/menupedagang/${idpedagang}`);
  //   this.menus.subscribe(data => {
  //     this.items = data;
  //   })
  // }
  // doRefresh(refresher){
  //   console.log(refresher);
  //   this.menus.subscribe(data => {
  //     this.items = data;
  //     refresher.complete();
  //   })
  // }

  ionViewDidEnter() {
    this.storage.set("cart",{});
    this.storage.set("idPedagang", this.navParams.get('idPedagang'));
    this.fetchMenus(this.navParams.get('idPedagang'));
    (async () => {
      this.cart = await this.getCart();
    })();
  }

  public async fetchMenus(idpedagang){
    let token = await this.storage.get('token');
    this.http.get(`http://mamafood.com/api/menupedagang/${idpedagang}`,{
      headers : {
        'Authorization' : token
      }
    }).subscribe((data) =>{
      this.menus = data;
    });
  }

  async getCart(){
    let cart = await this.storage.get('cart');
    return cart;
  }

  increment (menu) {
    if(this.cart[menu.idMenu]){
      this.cart[menu.idMenu].quantity++;
    }else{
      this.cart[menu.idMenu] = {
        quantity : 1,
        menu: menu
      };
    }
    this.storage.set('cart', this.cart);
  }
  
  decrement (menu) {
    if(this.cart[menu.idMenu].quantity > 1){
      this.cart[menu.idMenu].quantity--;
      this.storage.set('cart', this.cart);
    }else{
      delete this.cart[menu.idMenu];
    }
    this.storage.set('cart', this.cart);
  }

  
}
