import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VMDTeamApi } from './../../../shared/sdk/services/custom/VMDTeam';

/**
 * Generated class for the EditTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-team',
  templateUrl: 'edit-team.html',
})
export class EditTeamPage {
  public id : any;
  public fullname: any;
  public nophone: any;
  public position : any;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public VMDedit : VMDTeamApi
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTeamPage');
  }

  public save() {
    
       
        this.VMDedit.create ({
        position : this.position,
        fullname : this.fullname,
        nophone : this.nophone 
      }).subscribe((result) => {
          console.log(result);
        })

      }
    }
    
