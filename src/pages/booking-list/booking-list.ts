import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VMDBookingApi } from './../../shared/sdk/services/custom/VMDBooking';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the BookingListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-list',
  templateUrl: 'booking-list.html',
})
export class BookingListPage {

  public namefull: any;
  public alamat: any;
  public judulaplikasi: any;
  public descriptionapp: any;
  public userid: any;
  public viewdata: any;
  public iduser: any;
  public id: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public VMDBooking: VMDBookingApi,
    public storage: Storage,
    public loadingCtrl: LoadingController
  ) {
    
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    
    this.storage.get('vmdStorage').then((result) => {
      console.log(result);
      this.userid = result;
      this.iduser = this.userid.userId;
      console.log(this.iduser);
      this.VMDBooking.find({
        where: {
          userId: this.iduser
        }
      }).subscribe((result) => {
        loader.dismiss();
        console.log(result );
        this.viewdata = result;
      })
    })
  }
}