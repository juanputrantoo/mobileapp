import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchmenuPage } from './searchmenu';

@NgModule({
  declarations: [
    SearchmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchmenuPage),
  ],
})
export class SearchmenuPageModule {}
