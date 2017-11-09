import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  
  public username: any;
  
  constructor(public navCtrl: NavController,
     public actionSheetCtrl: ActionSheetController,
     public loadingCtrl: LoadingController,
     public navparams: NavParams
    )
    
    {
      this.username = this.navparams.get('name'); //fungsi ini digunakan untuk menarik data variable
       this.presentLoading();
     }
    
     ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
    }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 800
    });
    loader.present();
}

  team_our() {
    this.navCtrl.push('TeamPage');
  }

  product_our() {
    this.navCtrl.push('ProductPage');
  }

  aboutus() {
    this.navCtrl.push('ProfilePage');
  }

}

