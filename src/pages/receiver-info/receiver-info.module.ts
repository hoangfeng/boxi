import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiverInfoPage } from './receiver-info';

@NgModule({
  declarations: [
    ReceiverInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiverInfoPage),
  ],
})
export class ReceiverInfoPageModule {}
