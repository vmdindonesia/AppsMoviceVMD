import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationProfilePage } from './information-profile';

@NgModule({
  declarations: [
    InformationProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(InformationProfilePage),
  ],
})
export class InformationProfilePageModule {}
