import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // add this

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(
        private translate: TranslateService // trans
  ) {
    
  }


    getCurrentLang(){
return this.translate.currentLang;
  }

}
