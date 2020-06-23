import { Component } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';
import {
    BarcodeScannerOptions,
    BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
    selector: "app-barcode",
    templateUrl: "barcode.page.html",
    styleUrls: ["barcode.page.scss"]
})
export class BarcodePage {
    menuData: any;
    encodeData: any;
    scannedData: {};
    barcodeScannerOptions: BarcodeScannerOptions;
    textDefault: any;
    btnRoute: any;

    constructor(private storage: Storage, private data: DataService, private barcodeScanner: BarcodeScanner, private translate: TranslateService) {

        this.encodeData = "Pdj55dhH";
        //Options
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };

        this.data.getData().subscribe((resp) => {
            console.log('dddddddd', resp);

            this.menuData = resp;
 console.log('ddffff', this.menuData);
        });

    }

    getMenuData(search) {
        var search = search;
        var data = this.menuData;
        var i = 0;
        for (i = 0; i < data.length; i++) {
            var json_data = data[i]['item'].filter(o => o.code === search);
            var result = Object.keys(json_data).map((key) => [key, json_data[key]]);
            return result;
        }

    }

    getCurrentLang() {
        return this.translate.currentLang;
    }

    scanCode() {
        

        this.barcodeScanner
            .scan()
            .then(barcodeData => {
              
                this.scannedData = barcodeData.text;
                //console.log(this.scannedData);

                var el = this.getMenuData(this.scannedData);
                console.log(el.length);
                if (el.length == 1) {
                    this.textDefault = 'Ihr Code wurde eingetragen für die Karte <h2>' + el[0][1]['name'] + '</h2> ';
                    this.btnRoute = el[0][1]['url'];
                    this.storage.set(el[0][1]['id'], this.btnRoute);
                    
        
                } else {
                    this.textDefault = 'Ihr Code ist ungültig'
                }


            })
            .catch(err => {
                console.log("Error", err);
            });
    }

}