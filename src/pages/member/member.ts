import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { VMDMasterEmmployeeCredentialApi } from './../../shared/sdk/services/custom/VMDMasterEmmployeeCredential';
import { VMDMasteruserdataApi } from './../../shared/sdk/services/custom/VMDMasteruserdata';
/**
 * Generated class for the MemberPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})

export class MemberPage {
  public member: any;
  public member2: any;
  public listmember: any;
  public membername: any;
  public memberfullname: any;
  public memberemail: any;
  public id: any;
  public viewmember: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public VMDMasteruserdata: VMDMasteruserdataApi,
    public storage: Storage,
  ) {
  }

  ionViewDidLoad() {
    this.storage.get('vmdStorage').then((result) => {
      console.log(result);
      this.member = result;
      this.member2 = this.member.user.id
      console.log(this.member2);
      // this.VMDUserMember.find
      this.VMDMasteruserdata.find({
        where: {
          id: this.id
        }
      }).subscribe((result) => {
        console.log(result);
        this.viewmember = result;

      })
    });
  }
}

