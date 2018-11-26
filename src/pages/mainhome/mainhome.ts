import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { NotificationPage } from '../notification/notification';
import { WarungPage } from '../warung/warung';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { SearchmenuPage } from '../searchmenu/searchmenu';
import { MakananPage } from '../makanan/makanan';



/**
 * Generated class for the MainhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainhome',
  templateUrl: 'mainhome.html',
})
export class MainhomePage {

 
  makananpage:any;
  warungpage: any;
  searchmenupage: any;
  pedagang: any;
  makanan:any;

  arr: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public storage: Storage, public domSanitizer: DomSanitizer) {
    this.warungpage = WarungPage;
    this.makananpage = MakananPage;
    this.searchmenupage = SearchmenuPage;
  }

  
  ionViewDidLoad() {
    this.storage.get('token').then(val => {
      let res: Observable<any> = this.http.get('http://mamafood.com/api/datapedagang',{
        headers: {
          Authorization : val
        }
      })
      res.subscribe(data => {
        this.pedagang = data;
      })
    }).catch(data => {
      console.log(data)
    });;
    
    this.storage.get('token').then(val => {
      let res: Observable<any> = this.http.get('http://mamafood.com/api/menu',{
        headers: {
          Authorization : val
        }
      })
      res.subscribe(data => {
        let rarr = data;
        const n = rarr.length;
        for(let i = 0;i < rarr.length;i++){
          const x = i + Math.floor(Math.random() * (n - i))
          let tmp = rarr[x];
          rarr[x] = rarr[i];
          rarr[i] = tmp;
        }
        this.makanan = rarr.slice(0,5);
      })
    }).catch(data => {
      console.log(data)
    });;
    
    //console.log('ionViewDidLoad MainhomePage');
  }


}
