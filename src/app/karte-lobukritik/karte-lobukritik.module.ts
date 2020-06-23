import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { KarteLobukritikPage } from './karte-lobukritik.page';

const routes: Routes = [
  {
    path: '',
    component: KarteLobukritikPage
  }
];

@NgModule({
  imports: [   TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KarteLobukritikPage]
})
export class KarteLobukritikPageModule {}
