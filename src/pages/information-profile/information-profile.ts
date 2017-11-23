import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { VMDMasteruserdataApi } from './../../shared/sdk/services/custom/VMDMasteruserdata';
import { VMDMasterEmmployeeCredentialApi } from './../../shared/sdk/services/custom/VMDMasterEmmployeeCredential';
;

/**
 * Generated class for the InformationProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information-profile',
  templateUrl: 'information-profile.html',
})
export class InformationProfilePage {
  public vartiga: any;
  public vardua: any;
  public varsatu: any;
  public loginStage: any = "in";
  public formStage: any = "in";
  public variable: any;
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public VMDUserLogin: VMDMasteruserdataApi,
    public VMDMasterEmmployeeCredential: VMDMasterEmmployeeCredentialApi,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    this.storage.get('vmdStorage').then((result)=>{
  //ambil data dari (vmdstorage;adalah storagenya).lalu hasilnya adalah result(hasil)
      console.log(result);
      this.varsatu = result;
      this.vardua = this.varsatu.userId;
      console.log(this.vardua, 'ini hasil vardua');
      this.vartiga = this.varsatu.user.hakUser;
      console.log(this.vartiga, 'ini hasil vartiga');
      if (this.vartiga == 'admin'){
        this.VMDUserLogin.find()
        .subscribe((result)=> {
        console.log(result, 'ini hasil IF');
        this.variable = result;
        }
      )} else {
        this.VMDUserLogin.find({
          where : {
            userId : this.vardua
          }
        })
        .subscribe((result)=> {
          console.log(result, 'hasil else');
          this.variable = result;
        })
      } 
  })
};
}