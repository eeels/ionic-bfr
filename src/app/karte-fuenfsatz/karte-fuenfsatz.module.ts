import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteFuenfsatzPage } from './karte-fuenfsatz.page';

const routes: Routes = [
  {
    path: '',
    component: KarteFuenfsatzPage
  }
];

@NgModule({
  imports: [   TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteFuenfsatzPage]
})
export class KarteFuenfsatzPageModule {}
