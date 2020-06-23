import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteVisualisierungenPage } from './karte-visualisierungen.page';

describe('KarteVisualisierungenPage', () => {
  let component: KarteVisualisierungenPage;
  let fixture: ComponentFixture<KarteVisualisierungenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteVisualisierungenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteVisualisierungenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
