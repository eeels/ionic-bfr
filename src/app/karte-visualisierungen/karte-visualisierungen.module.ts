import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteVisualisierungenPage } from './karte-visualisierungen.page';

const routes: Routes = [
  {
    path: '',
    component: KarteVisualisierungenPage
  }
];

@NgModule({
  imports: [   TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteVisualisierungenPage]
})
export class KarteVisualisierungenPageModule {}
