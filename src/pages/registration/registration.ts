import { VMDMasteruserdataApi } from './../../shared/sdk/services/custom/VMDMasteruserdata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { VMDMasterEmmployeeCredentialApi } from './../../shared/sdk/services/custom/VMDMasterEmmployeeCredential';


@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  public dataTemp: any;
  public name: any;
  public realm: any;
  public address: any;
  public no_phone: any;
  public tempatLahir: any;
  public tglLahir: any;
  public statusPerkawinan: any;
  public username: any;
  public password: any;
  public email: any;
  public idUser: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public VMDUserRegistration: VMDMasterEmmployeeCredentialApi,
    public VMDMasteruserdata: VMDMasteruserdataApi
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  showAlert() {
    this.VMDUserRegistration.create({
      realm: this.realm,
      username: this.username,
      password: this.password,
      email: this.email
    }).subscribe((result) => {
      this.dataTemp = result;
      this.idUser = this.dataTemp.id;

      this.VMDMasteruserdata.create({
        userId: this.idUser,
        fullname: this.realm,
        address: this.address,
        no_telp: this.no_phone,
        tglLahir: this.tglLahir,
        statusPerkawinan: this.statusPerkawinan,
        tempatLahir: this.tempatLahir
      }).subscribe((result) => {
        console.log('Sukses Register');
        let confirm = this.alertCtrl.create({
          message: 'Your Account Have Been Save!',
          buttons: [
            {
              text: 'Dismiss',
              handler: () => {
                this.navCtrl.setRoot('LoginPage')
              }
            }
          ]
        });
        confirm.present();
      })
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
