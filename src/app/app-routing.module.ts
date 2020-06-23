import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  { path: 'barcode', 
  loadChildren: () => import('./barcode/barcode.module').then(m => m.BarcodePageModule),

},
  { path: 'list',  loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)},
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'imprint', loadChildren: './imprint/imprint.module#ImprintPageModule' },
  { path: 'karte-argument', loadChildren: './karte-argument/karte-argument.module#KarteArgumentPageModule' },
  { path: 'karte-argumentation', loadChildren: './karte-argumentation/karte-argumentation.module#KarteArgumentationPageModule' },
  { path: 'karte-beschwerdemanagement', loadChildren: './karte-beschwerdemanagement/karte-beschwerdemanagement.module#KarteBeschwerdemanagementPageModule' },
  { path: 'karte-beziehungsdreieck', loadChildren: './karte-beziehungsdreieck/karte-beziehungsdreieck.module#KarteBeziehungsdreieckPageModule' },
  { path: 'karte-empfehlungsdreieck', loadChildren: './karte-empfehlungsdreieck/karte-empfehlungsdreieck.module#KarteEmpfehlungsdreieckPageModule' },
  { path: 'karte-entscheidungskompetenz', loadChildren: './karte-entscheidungskompetenz/karte-entscheidungskompetenz.module#KarteEntscheidungskompetenzPageModule' },
  { path: 'karte-fuenfsatz', loadChildren: './karte-fuenfsatz/karte-fuenfsatz.module#KarteFuenfsatzPageModule' },
  { path: 'karte-gespraechsleitfaden', loadChildren: './karte-gespraechsleitfaden/karte-gespraechsleitfaden.module#KarteGespraechsleitfadenPageModule' },
  { path: 'karte-gliederunguredestruktur', loadChildren: './karte-gliederunguredestruktur/karte-gliederunguredestruktur.module#KarteGliederunguredestrukturPageModule' },
  { path: 'karte-gradderschlussfolgerung', loadChildren: './karte-gradderschlussfolgerung/karte-gradderschlussfolgerung.module#KarteGradderschlussfolgerungPageModule' },
  { path: 'karte-interessenupositionen', loadChildren: './karte-interessenupositionen/karte-interessenupositionen.module#KarteInteressenupositionenPageModule' },
  { path: 'karte-konfliktbewaeltigung', loadChildren: './karte-konfliktbewaeltigung/karte-konfliktbewaeltigung.module#KarteKonfliktbewaeltigungPageModule' },
  { path: 'karte-kundenzyklus', loadChildren: './karte-kundenzyklus/karte-kundenzyklus.module#KarteKundenzyklusPageModule' },
  { path: 'karte-lobukritik', loadChildren: './karte-lobukritik/karte-lobukritik.module#KarteLobukritikPageModule' },
  { path: 'karte-lokikinargument', loadChildren: './karte-lokikinargument/karte-lokikinargument.module#KarteLokikinargumentPageModule' },
  { path: 'karte-manuskripttechnik', loadChildren: './karte-manuskripttechnik/karte-manuskripttechnik.module#KarteManuskripttechnikPageModule' },
  { path: 'karte-merkmalvorteilnutzen', loadChildren: './karte-merkmalvorteilnutzen/karte-merkmalvorteilnutzen.module#KarteMerkmalvorteilnutzenPageModule' },
  { path: 'karte-moeglichkeitsraum', loadChildren: './karte-moeglichkeitsraum/karte-moeglichkeitsraum.module#KarteMoeglichkeitsraumPageModule' },
  { path: 'karte-motivation', loadChildren: './karte-motivation/karte-motivation.module#KarteMotivationPageModule' },
  { path: 'karte-netzwerken', loadChildren: './karte-netzwerken/karte-netzwerken.module#KarteNetzwerkenPageModule' },
  { path: 'karte-planung', loadChildren: './karte-planung/karte-planung.module#KartePlanungPageModule' },
  { path: 'karte-reifegradmodell', loadChildren: './karte-reifegradmodell/karte-reifegradmodell.module#KarteReifegradmodellPageModule' },
  { path: 'karte-selbstbildfremdbild', loadChildren: './karte-selbstbildfremdbild/karte-selbstbildfremdbild.module#KarteSelbstbildfremdbildPageModule' },
  { path: 'karte-selbstmanagement', loadChildren: './karte-selbstmanagement/karte-selbstmanagement.module#KarteSelbstmanagementPageModule' },
  { path: 'karte-senderuempfaenger', loadChildren: './karte-senderuempfaenger/karte-senderuempfaenger.module#KarteSenderuempfaengerPageModule' },
  { path: 'karte-steuerungszeichen', loadChildren: './karte-steuerungszeichen/karte-steuerungszeichen.module#KarteSteuerungszeichenPageModule' },
  { path: 'karte-visualisierungen', loadChildren: './karte-visualisierungen/karte-visualisierungen.module#KarteVisualisierungenPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 