import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRequestSuccessPage } from './modal-request-success';

@NgModule({
  declarations: [
    ModalRequestSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRequestSuccessPage),
  ],
})
export class ModalRequestSuccessPageModule {}
