import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteMotivationPage } from './karte-motivation.page';

const routes: Routes = [
  {
    path: '',
    component: KarteMotivationPage
  }
];

@NgModule({
  imports: [   TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteMotivationPage]
})
export class KarteMotivationPageModule {}
