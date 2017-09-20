import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentInputPage } from './payment-input';

@NgModule({
  declarations: [
    PaymentInputPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentInputPage),
  ],
})
export class PaymentInputPageModule {}
