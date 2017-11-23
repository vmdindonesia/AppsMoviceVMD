import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VMDBookingApi } from './../../shared/sdk/services/custom/VMDBooking';
import { VMDBooking } from './../../shared/sdk/models/VMDBooking';

/**
 * Generated class for the EditbookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editbooking',
  templateUrl: 'editbooking.html',
})
export class EditbookingPage {
 
   public data: any;

  public booking: any = VMDBooking;

  constructor(
    public navCtrl:NavController,
    public navParams: NavParams,
    public VMDbooking: VMDBookingApi,
    public alertCtrl: AlertController,
  ) {
    
  }

  ionViewDidLoad() {
    this.data = this.navParams.get('event');
    console.log(this.data, 'Hasil Get Id');
     this.VMDbooking.findById(this.data).subscribe((result) => {
      console.log(result, 'ini hasil get data by ID di VMDBooking Database')
      this.booking = result;
    })
  }

  update() {
        this.VMDbooking.replaceOrCreate(this.booking).subscribe((result) => {
          console.log(result, 'ini hasil edit'); 
          let confirm = this.alertCtrl.create({
            message: 'Your Data Have Been Updated!',
            buttons: [
              {
                text: 'Dismiss',
                handler: () => {
                  this.navCtrl.setRoot('PageProfileOnBookingPage')
                }
              }
            ]
          });
          confirm.present();
        })
    }
}
