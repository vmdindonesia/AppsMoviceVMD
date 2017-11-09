import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
  public photo: any = 'assets/image/VMD.jpg';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {
    
   
  }

 
  
  ionViewDidLoad() {
    this.storage.get('vmdStorage').then((result) => {
      console.log(result);
      this.iduser = result;
      this.namauser = this.iduser.user.username;
    })
  }

  bookinglist() {
    this.navCtrl.push('BookingListPage');
  }

 
}