import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteGliederunguredestrukturPage } from './karte-gliederunguredestruktur.page';

describe('KarteGliederunguredestrukturPage', () => {
  let component: KarteGliederunguredestrukturPage;
  let fixture: ComponentFixture<KarteGliederunguredestrukturPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteGliederunguredestrukturPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteGliederunguredestrukturPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
