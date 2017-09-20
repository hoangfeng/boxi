import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPhoneNumberPage } from './confirm-phone-number';

@NgModule({
  declarations: [
    ConfirmPhoneNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPhoneNumberPage),
  ],
})
export class ConfirmPhoneNumberPageModule {}
