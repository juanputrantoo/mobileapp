import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { TabpedagangPage } from '../tabpedagang/tabpedagang';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  SignUpButton: any;
  LogIn: any;
  username: string;
  password: string;
  message: string;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: HttpClient, public storage: Storage) {
    this.SignUpButton = SignupPage;
    this.LogIn = TabpedagangPage;
  
  }

  login(){
    let lg : Observable<any> = this.http.post('http://mamafood.com/api/login',{
      username : this.username,
      password : this.password
    });
    lg.subscribe((data) => {
      if(data.token){
        this.storage.set('token',data.token);
        let loader = this.loadingCtrl.create({
          spinner: "dots",
          content: "Makanan Mama Menunggu...",
          duration:2000
        });
        loader.present();
        this.http.get('http://mamafood.com/api/token',{
          headers : {
            'Authorization' :   data.token
          }
        }).subscribe((user) => {
          if(parseInt(user['role']) === 1){
            this.navCtrl.push(TabpedagangPage);
          }else{
            this.navCtrl.push(TabsPage);
          }
         
        });
      }else{
        this.message = data.message;
      }
    })
  }


  // test(){
  //   let lg : Observable<any> = this.http.get('http://172.20.10.4/mamafood2/api/test',{
  //     headers : {
  //       Authorization : 'juanputranto.e94b97ff5fcb5f433a4587f577ddf8419e4ca5ad851e17719381761d539ae0dc'
  //     }
  //   });
  //   lg.subscribe((data) => {
  //     console.log(data);
  //   })
    
  // }

  // loading(){
  // 	let loader = this.loadingCtrl.create({
  // 		spinner: "dots",
  // 		content: "Makanan Mama Menunggu...",
  // 		duration:3000
  // 	});
  //   loader.present();
    
  // 	this.navCtrl.push(TabsPage);
  // }



  
}
