import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailprodukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailproduk',
  templateUrl: 'detailproduk.html',
})
export class DetailprodukPage {

  public picture: any;
  public header: any;
  public titleProduct: any;
  public description: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.picture = this.navParams.get ('picture')
    this.header = this.navParams.get('header');
    this.titleProduct = this.navParams.get('titleProduct');
    this.description = this.navParams.get('description');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailprodukPage');
  }
  
  booking() {
    this.navCtrl.push('BookingSystemPage');
  }

}
