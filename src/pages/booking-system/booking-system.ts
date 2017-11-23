import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VMDBookingApi } from './../../shared/sdk/services/custom/VMDBooking';
import { VMDBooking } from './../../shared/sdk/models/VMDBooking';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the BookingSystemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-system',
  templateUrl: 'booking-system.html',
})
export class BookingSystemPage {


  public user1: any;
  public iduser: any;
  public fullname1: any;
  public address1: any;
  public application1: any;
  public description1: any;
  public thisid :any;

public vmdbooking : any = VMDBooking ;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public VMDbooking: VMDBookingApi,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    this.storage.get('vmdStorage').then((result) => {
      console.log(result);
      this.vmdbooking = result;
      this.iduser = this.vmdbooking.userId;
    })
  }

  booking() {
    this.VMDbooking.create(this.vmdbooking).subscribe((result) => {
      console.log(result);
    })
    {
      let alert = this.alertCtrl.create({
        title: 'Berhasil',
        subTitle: 'Data Anda Telah Tersimpan',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.setRoot('PageProfileOnBookingPage');
            }
          }
        ]
      });
      alert.present();
    }
  }
}
