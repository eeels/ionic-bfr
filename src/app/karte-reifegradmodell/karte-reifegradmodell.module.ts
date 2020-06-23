import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteReifegradmodellPage } from './karte-reifegradmodell.page';

const routes: Routes = [
  {
    path: '',
    component: KarteReifegradmodellPage
  }
];

@NgModule({
  imports: [   TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteReifegradmodellPage]
})
export class KarteReifegradmodellPageModule {}
