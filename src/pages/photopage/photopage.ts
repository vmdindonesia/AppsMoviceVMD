import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { LoopBackConfig } from '../../shared/sdk';

/**
 * Generated class for the PhotopagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photopage',
  templateUrl: 'photopage.html',
})
export class PhotopagePage {
  public second: any;
  public first: string;
  public namauser: any;
  public iduser: any;
  public transfer: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public filetransfer: FileTransfer
  ) {
  }

  ionViewDidLoad() {
    this.storage.get('vmdStorage').then((result) => {
      console.log(result);
      this.iduser = result;
      this.namauser = this.iduser.user.realm;

      this.first = this.navParams.get('firstPassed');
      this.second = this.navParams.get('setting');

      console.log(this.first, 'Hasil 1');
      console.log(this.second, 'Hasil 2');
    })
  }

  savephoto() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(this.first, LoopBackConfig.getPath() + '/api/containers/User/upload', this.second)
      .then((data) => {
        console.log(data, 'Data Sukses')
        console.log('Sukses Upload Foto')

      });
  }

}
