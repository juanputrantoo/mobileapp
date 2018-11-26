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

/**
 * Generated class for the HomepdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-tambahmenu',
  templateUrl: 'tambahmenu.html',
})
export class TambahmenuPage {
  lastImage: string = null;
  loading: Loading;
  menus: any;
  plusmenu: any;

  /* Form Data */
  namaMenu: Observable<string>;
  hargaMenu: Observable<string>;
  deskripsiMenu: Observable<string>;
  progress: number;


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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahmenuPage');
    this.fetchMenus();
  }

  public async fetchMenus(){
    let token = await this.storage.get('token');
    this.http.get('http://mamafood.com/api/menu',{
      headers : {
        'Authorization' : token
      }
    }).subscribe((data) =>{
      this.menus = data;
    });
  }

  

  public takePicture(sourceType) {
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: 0
    };
    this.camera.getPicture(options).then((imagePath) => {
      if (sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.uploadImage(imagePath);
        /*this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            console.log(correctPath);
            console.log(currentName);
            const newFileName = this.createFileName();
            console.log(newFileName)
            this.copyFileToLocalDir(correctPath, currentName, newFileName);
          });*/
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      console.log(err);
      this.presentToast('Error while selecting image.');
    });
  }
    public presentActionSheet() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Gallery',
        buttons: [
          {
            text: 'Photos',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
          {
            text: 'Camera',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();
    }
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      console.log(error)
      this.presentToast(error);
    });
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  /*public uploadImage() {
    var url = "Give your API Path";
    var targetPath = this.pathForImage(this.lastImage);
    var filename = this.lastImage;
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };
    const fileTransfer: TransferObject = this.transfer.create();
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }*/

  private sendMenuRequest(content){
    //const content = await this.base64.encodeFile(fotoMenu);
    this.storage.get('token').then((token) => {
      let hreq : Observable<any> = this.http.post('http://mamafood.com/api/menu',{
        namaMenu: this.namaMenu,
        hargaMenu: this.hargaMenu,
        deskripsiMenu: this.deskripsiMenu,
        fotoMenu : content
      },{
        reportProgress : true,
        headers : {
          Authorization : token
        }
      });
      hreq.subscribe((event : HttpEvent<any>) => {
        console.log(event.type);
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request sent!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header received!');
            break;
          case HttpEventType.DownloadProgress:
            const kbLoaded = Math.round(event.loaded / 1024);
            this.progress = kbLoaded;
            console.log(`Download in progress! ${ kbLoaded }Kb loaded`);
            break;
          case HttpEventType.Response:
            console.log('😺 Done!', event.body);
        }
      })
    })
    
    
  }

  public uploadImage(content) {
    var targetPath = this.pathForImage(this.lastImage);
    var filename = this.lastImage;
    var post = this.sendMenuRequest(content)
    /*post.then((req) => {
      req.subscribe(() => {
        console.log('test')
      })
    });*/

    
   /*
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
    this.loading.dismissAll()
    this.presentToast('Image succesful uploaded.');
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');*/
  }


}
