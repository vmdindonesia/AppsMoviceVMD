import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { LoopBackConfig } from '../../shared/sdk';
import { FileUploadOptions } from '@ionic-native/file-transfer';
import { UUID } from 'angular2-uuid';


/**
 * Generated class for the PageProfileOnBookingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-profile-on-booking',
  templateUrl: 'page-profile-on-booking.html',
})
export class PageProfileOnBookingPage {

  public iduser: any;
  public namauser: any;
  public photo: any;
  public transfer: any;
  public imagefile: any;
  public optionFile: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public camera: Camera,
    public alertCtrl: AlertController
  ) {
    if (this.photo == null || this.photo == undefined) {
      this.photo = 'assets/image/VMD.jpg';
    } else {
      this.photo = LoopBackConfig.getPath() + 'api/containers/storage/User/download';
    }
  }

  ionViewDidLoad() {
    this.storage.get('vmdStorage').then((result) => {
      console.log(result);
      this.iduser = result;
      this.namauser = this.iduser.user.realm;
    })
  }

  bookinglist() {
    this.navCtrl.push('BookingListPage');
  }

  public takePicture(isCamera): any {

    this.camera.getPicture({
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: isCamera ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      saveToPhotoAlbum: false,
      cameraDirection: 1
    }).then((imageData) => {
      
      this.photo = imageData;

      const options: FileUploadOptions = {
        fileKey: 'file',
        fileName: isCamera ? 'IMG_' + UUID.UUID() + this.photo.substr(this.photo.lastIndexOf('/') + 1) : 'IMG_' + UUID.UUID() + '.jpg',
        chunkedMode: false,
        mimeType: 'image/jpg'
      };

      // this.optionFile = options;
      // console.log(this.optionFile);
      this.navCtrl.push('PhotopagePage', { firstPassed :this.photo, setting: options});

      // const fileTransfer: FileTransferObject = this.transfer.create();
      // fileTransfer.upload(this.photo, LoopBackConfig.getPath() + '/api/containers/User/upload', options)
      //   .then((data) => {
      //     console.log(data, 'Data Sukses')
      //     console.log('Sukses Upload Foto')

      //   });

    }, (err) => {
    
        let alert = this.alertCtrl.create({
          subTitle: (err == 'Camera cancelled.') ? 'Camera cancelled.' : 'Camera cancelled.',
          buttons: [
            {
              text: 'Dismiss',
              handler: () => {
              }
            }]
        });
        alert.present();
      });
  }

  testphotopage(){
    this.navCtrl.push('PhotopagePage')
  }
}