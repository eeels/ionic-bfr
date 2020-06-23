import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteKundenzyklusPage } from './karte-kundenzyklus.page';

describe('KarteKundenzyklusPage', () => {
  let component: KarteKundenzyklusPage;
  let fixture: ComponentFixture<KarteKundenzyklusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteKundenzyklusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteKundenzyklusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
