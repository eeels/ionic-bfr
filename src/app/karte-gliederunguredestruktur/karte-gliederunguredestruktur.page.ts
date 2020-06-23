import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-karte-gliederunguredestruktur',
  templateUrl: './karte-gliederunguredestruktur.page.html',
  styleUrls: ['./karte-gliederunguredestruktur.page.scss'],
})
export class KarteGliederunguredestrukturPage implements OnInit {
textDefault: any;
  constructor(
    private storage: Storage,
     private translate: TranslateService 
    ) { }

  ngOnInit() {

this.storage.get('s10').then((val) => {
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
