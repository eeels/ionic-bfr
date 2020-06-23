import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteNetzwerkenPage } from './karte-netzwerken.page';

describe('KarteNetzwerkenPage', () => {
  let component: KarteNetzwerkenPage;
  let fixture: ComponentFixture<KarteNetzwerkenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteNetzwerkenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteNetzwerkenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
