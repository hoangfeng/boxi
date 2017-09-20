import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDiscountPage } from './modal-discount';

@NgModule({
  declarations: [
    ModalDiscountPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDiscountPage),
  ],
})
export class ModalDiscountPageModule {}
