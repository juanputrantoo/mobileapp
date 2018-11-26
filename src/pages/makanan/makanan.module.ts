import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakananPage } from './makanan';

@NgModule({
  declarations: [
    MakananPage,
  ],
  imports: [
    IonicPageModule.forChild(MakananPage),
  ],
})
export class MakananPageModule {}
