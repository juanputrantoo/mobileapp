import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { Firebase } from '@ionic-native/firebase';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { MainhomePage } from '../pages/mainhome/mainhome';
import { NotificationPage } from '../pages/notification/notification';
import { HistoryPage } from '../pages/history/history';
import { ProfilePage } from '../pages/profile/profile';
import { DetailPage } from '../pages/detail/detail';
import { RegmerPage } from '../pages/regmer/regmer';
import { TopupPage } from '../pages/topup/topup';
import { EditPage } from '../pages/edit/edit';
import { TopmoneyPage } from '../pages/topmoney/topmoney';
import { TransPage } from '../pages/trans/trans';
import { TopconfirmPage } from '../pages/topconfirm/topconfirm';
import { TopuploadPage } from '../pages/topupload/topupload';
import { WarungPage } from '../pages/warung/warung';
import { TabpedagangPage } from '../pages/tabpedagang/tabpedagang';
import { NotifpdgPage } from '../pages/notifpdg/notifpdg';
import { HispdgPage } from '../pages/hispdg/hispdg';
import { ProfpdgPage } from '../pages/profpdg/profpdg';
import { TambahmenuPage } from '../pages/tambahmenu/tambahmenu';
import { DetailpdgPage } from '../pages/detailpdg/detailpdg';
import { ToppdgPage } from '../pages/toppdg/toppdg';
import { BuypromopdgPage } from '../pages/buypromopdg/buypromopdg';
import { TambahmenuregmerPage } from '../pages/tambahmenuregmer/tambahmenuregmer';
import { OrdermenuPage } from '../pages/ordermenu/ordermenu';
import { ChangemethodPage } from '../pages/changemethod/changemethod';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { SearchmenuPage } from '../pages/searchmenu/searchmenu';
import { MakananPage } from '../pages/makanan/makanan';
import { CartPage } from '../pages/cart/cart';
import { ListpesananPage } from '../pages/listpesanan/listpesanan';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { HomepdgPage } from '../pages/homepdg/homepdg';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SignupPage,
    MainhomePage,
    NotificationPage,
    HistoryPage,
    ProfilePage,
    DetailPage,
    RegmerPage,
    TopupPage,
    EditPage,
    TransPage,
    TopmoneyPage,
    TopconfirmPage,
    TopuploadPage,
    HomepdgPage,
    WarungPage,
    TabpedagangPage,
    NotifpdgPage,
    HispdgPage,
    ProfpdgPage,
    TambahmenuPage,
    DetailpdgPage,
    ToppdgPage,
    BuypromopdgPage,
    TambahmenuregmerPage,
    OrdermenuPage,
    ChangemethodPage,
    ConfirmationPage,
    SearchmenuPage,
    MakananPage,
    CartPage,
    ListpesananPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom'}),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SignupPage,
    MainhomePage,
    NotificationPage,
    HistoryPage,
    ProfilePage,
    DetailPage,
    RegmerPage,
    TopupPage,
    EditPage,
    TransPage,
    TopmoneyPage,
    TopconfirmPage,
    TopuploadPage,
    HomepdgPage,
    WarungPage,
    TabpedagangPage,
    NotifpdgPage,
    HispdgPage,
    ProfpdgPage,
    TambahmenuPage,
    DetailpdgPage,
    ToppdgPage,
    BuypromopdgPage,
    TambahmenuregmerPage,
    OrdermenuPage,
    ChangemethodPage,
    ConfirmationPage,
    SearchmenuPage,
    MakananPage,
    CartPage,
    ListpesananPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath, 
//    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Base64
  ]
})
export class AppModule {}
