import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotopagePage } from './photopage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

@NgModule({
  declarations: [
    PhotopagePage,
  ],
  imports: [
    IonicPageModule.forChild(PhotopagePage),
  ],
  providers:[
    FileTransfer, 
    FileTransferObject
  ]
})
export class PhotopagePageModule {}
