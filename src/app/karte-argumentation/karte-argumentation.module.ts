import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteArgumentationPage } from './karte-argumentation.page';

const routes: Routes = [
  {
    path: '',
    component: KarteArgumentationPage
  }
];

@NgModule({
  imports: [
      TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteArgumentationPage]
})
export class KarteArgumentationPageModule {}
