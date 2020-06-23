import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteGradderschlussfolgerungPage } from './karte-gradderschlussfolgerung.page';

describe('KarteGradderschlussfolgerungPage', () => {
  let component: KarteGradderschlussfolgerungPage;
  let fixture: ComponentFixture<KarteGradderschlussfolgerungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteGradderschlussfolgerungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteGradderschlussfolgerungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
