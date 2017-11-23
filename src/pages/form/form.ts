import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { VMDMasteruserdataApi } from './../../shared/sdk/services/custom/VMDMasteruserdata';
import { VMDMasteruserdata } from './../../shared/sdk/models/VMDMasteruserdata';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  dataid: any;
  dataupdate: any;

  public masterData: any = VMDMasteruserdata;


  constructor(
    public navCtrl: NavController,
    public event: Events,
    public VMDMasterUserdata: VMDMasteruserdataApi,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    this.dataid = this.navParams.get('data');
    console.log(this.dataid, 'kontol')

    this.VMDMasterUserdata.findById(this.dataid).subscribe((result) => {
      console.log(result, 'memek')
      this.masterData = result;
    });
  }
  public showAlert() {
    this.VMDMasterUserdata.findById(this.dataid).subscribe((result) => {
      this.dataupdate = result;
      console.log(this.dataupdate, 'data update');

      console.log(this.masterData, 'MASTER DATA');
      this.VMDMasterUserdata.replaceOrCreate(this.masterData)
        .subscribe(result => {
          console.log(result, 'HASIL');
        });

    });
  }

}
