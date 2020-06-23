


 import { Component } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage{
    menuData: any;
    encodeData: any;
    scannedData: {};
    textDefault: any;
    btnRoute: any;
allstorEl=[];
    constructor(private storage: Storage, private data: DataService,  private translate: TranslateService) {
 
    }

isElActive(el){
var isIn=this.allstorEl.includes(el)
 //console.log('id:', isIn);
return isIn;

}

 ionViewWillEnter(){
this.storage.forEach( (value, key, index) => {
 this.allstorEl.push(key); 
 })

        this.data.getData().subscribe((resp) => {
    

            this.menuData = resp;
            this.menuData = this.menuData[0]['item'];



 //console.log('menudata:', this.menuData[0]['item']);

 //console.log('storage:', this.allstorEl);

        });
  }

    getCurrentLang() {
        return this.translate.currentLang;
    }


  

  

}