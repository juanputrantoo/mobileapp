import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the OrdermenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordermenu',
  templateUrl: 'ordermenu.html',
})
export class OrdermenuPage {
  namaMenu:any;

  cart: any;
  cartIds: any;

  pembayaran:any;
  pengambilan:any;
  idPedagang:any;

  idMenu:any;
  quantity:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage, public http: HttpClient) {
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
      
      console.log(data);
    });
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
      this.cartIds = Object.keys(this.cart);
    }
    this.storage.set('cart', this.cart);
  }


  async sendOrder(){
    let req = {
      jenis_pembayaran: this.pembayaran,
      jenis_pengambilan: this.pengambilan,
      id_pedagang: this.idPedagang,
      orders: []
    };
    for(let idMenu in this.cart){
      const order = this.cart[idMenu];
      req.orders.push({
        kuantitas: order.quantity,
        id_menu: idMenu
      });
    }
    let token = await this.storage.get('token');
    let meta = {
      headers: {
        Authorization : token,
        'Content-Type' : 'application/json'
      }
    };
    this.http.post('http://mamafood.com/api/order', req, meta)
      .subscribe((data) => {
        console.log(data);
      })
  }

}

interface Menu{
  namaMenu:any;
}
