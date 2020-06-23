import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './data.service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 

 
  public appPages: any; 
  public allstorEl: any;  
  showLevel1 = null;
  showLevel2 = null;
  showLevel3 = null;

  constructor(
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private data: DataService,
    private translate: TranslateService // trans
  ) {
    this.initializeApp();
    this.data.getData().subscribe((resp) => {
          this.appPages = resp;
         
    });



this.platform.backButton.subscribe(() => {
// navigator['app'].exitApp();
 window.history.back();
})



this.allstorEl=[];
 translate.addLangs(["de", "en"]);
 this.translate.use('de');

  }








//ngOnInit
//ngAfterViewChecked
//ngAfterContentInit
onMenuOpen() {  
this.getIds();

} 
isElActive(el){
var isIn=this.allstorEl.includes(el)

return isIn;

}



getIds() {  
 this.storage.forEach( (value, key, index) => {
 this.allstorEl.push(key); 
 })
}


 changeLang(lang){

    this.translate.use(lang);
  }
  getCurrentLang(){
return this.translate.currentLang; 
  }
  initializeApp() {
     this.translate.setDefaultLang('de'); // trans
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }




  clearLevel() {
    this.showLevel1 = null;
    this.showLevel2 = null;
    this.showLevel3 = null;
  }

  toggleLevel1(idx: string) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  }

  toggleLevel2(idx: string) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel2 = null; 
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  }

  toggleLevel3(idx: string) {
    if (this.isLevel3Shown(idx)) {
      this.showLevel3 = null;
    } else {
      this.showLevel2 = idx;
      this.showLevel3 = idx;
    }
  }

  isLevel1Shown(idx: string) {
 
    return this.showLevel1 === idx;
  }

  isLevel2Shown(idx: string) {
    return this.showLevel2 === idx;
  }

  isLevel3Shown(idx: string) {
    return this.showLevel3 === idx;
  }
}
