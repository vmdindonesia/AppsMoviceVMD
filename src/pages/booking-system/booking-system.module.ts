import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingSystemPage } from './booking-system';

@NgModule({
  declarations: [
    BookingSystemPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingSystemPage),
  ],
})
export class BookingSystemPageModule {}
