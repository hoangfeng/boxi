import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalEstimatePage } from './modal-estimate';

@NgModule({
  declarations: [
    ModalEstimatePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalEstimatePage),
  ],
})
export class ModalEstimatePageModule {}
