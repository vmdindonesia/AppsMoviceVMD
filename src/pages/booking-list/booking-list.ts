import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VMDBookingApi } from './../../shared/sdk/services/custom/VMDBooking';
import { VMDBooking } from './../../shared/sdk/models/VMDBooking';
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
  public viewdata: any;
  public iduser: any;
  public id: any;
  public booking : any = VMDBooking ; 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public vmdbooking: VMDBookingApi,
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
      this.booking = result;
      this.iduser = this.booking.userId;
      console.log(this.iduser,'hasil id user')
      this.vmdbooking.find({
        where: {
          userId : this.iduser
        }
      }).subscribe((result) => {
        loader.dismiss();
        console.log(result );
        this.viewdata = result;
      })
    })  
  }

  editbooking(event){
    console.log(event)
    this.navCtrl.push('EditbookingPage' ,{event, firstpassed : this.iduser }  )
  }

}