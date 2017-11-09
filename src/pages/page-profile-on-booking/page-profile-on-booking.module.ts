import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageProfileOnBookingPage } from './page-profile-on-booking';

@NgModule({
  declarations: [
    PageProfileOnBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(PageProfileOnBookingPage),
  ],
})
export class PageProfileOnBookingPageModule {}
