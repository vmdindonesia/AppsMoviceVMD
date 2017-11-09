import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VMDAboutUsApi } from './../../../shared/sdk/services/custom/VMDAboutUs';

/**
 * Generated class for the EditAboutusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-aboutus',
  templateUrl: 'edit-aboutus.html',
})
export class EditAboutusPage {
  public EmployeeOfTeam: any;
  public HistoriOfTeam: any;
  public ContactPerson: any;
  public Address: any;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public VMDEdit: VMDAboutUsApi
  ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAboutusPage');
  }
  
  public Save() {
    this.VMDEdit.create({
      nameTeam: this.EmployeeOfTeam,
      historyTeam: this.HistoriOfTeam,
      contactPerson: this.ContactPerson,
      address: this.Address
    }).subscribe((result) => {
      console.log(result);
      this.navCtrl.setRoot('ProfilePage');
    })
  }


}
