import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteMoeglichkeitsraumPage } from './karte-moeglichkeitsraum.page';

const routes: Routes = [
  {
    path: '',
    component: KarteMoeglichkeitsraumPage
  }
];

@NgModule({
  imports: [   TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteMoeglichkeitsraumPage]
})
export class KarteMoeglichkeitsraumPageModule {}
