import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-karte-selbstbildfremdbild',
  templateUrl: './karte-selbstbildfremdbild.page.html',
  styleUrls: ['./karte-selbstbildfremdbild.page.scss'],
})
export class KarteSelbstbildfremdbildPage implements OnInit {

 textDefault: any;
  constructor(
    private storage: Storage,
     private translate: TranslateService 
    ) { }

  ngOnInit() {

this.storage.get('s24').then((val) => {
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
