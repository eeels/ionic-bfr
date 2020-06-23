import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-karte-empfehlungsdreieck',
  templateUrl: './karte-empfehlungsdreieck.page.html',
  styleUrls: ['./karte-empfehlungsdreieck.page.scss'],
})
export class KarteEmpfehlungsdreieckPage implements OnInit {
textDefault: any;
  constructor(
    private storage: Storage,
     private translate: TranslateService 
    ) { }

  ngOnInit() {

this.storage.get('s6').then((val) => {
                        if (val != null) {
                            //console.log('active', val); 
                             
                           
                        } else {
                           //console.log('not set') ;
                         this.textDefault= 'notset';
                         
                           }
                    });



  }
    getCurrentLang(){
return this.translate.currentLang;
  }
}
