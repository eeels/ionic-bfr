import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteEntscheidungskompetenzPage } from './karte-entscheidungskompetenz.page';

const routes: Routes = [
  {
    path: '',
    component: KarteEntscheidungskompetenzPage
  }
];

@NgModule({
  imports: [   TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteEntscheidungskompetenzPage]
})
export class KarteEntscheidungskompetenzPageModule {}
