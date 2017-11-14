import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageProfileOnBookingPage } from './page-profile-on-booking';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject  } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    PageProfileOnBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(PageProfileOnBookingPage),
  ],
  providers: [
    Camera,
    FileTransfer,
    File,
    FileTransferObject
  ],
})
export class PageProfileOnBookingPageModule {}
