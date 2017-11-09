import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil-company',
  templateUrl: 'profil-company.html',
})
export class ProfilCompanyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilCompanyPage');
  }
  website() {
    this.navCtrl.push('WebsitePage');
  }
  android() {
    this.navCtrl.push('AndroidPage');
  }
  ios() {
    this.navCtrl.push('IosPage');
}
}
