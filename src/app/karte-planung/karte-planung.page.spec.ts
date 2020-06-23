import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartePlanungPage } from './karte-planung.page';

describe('KartePlanungPage', () => {
  let component: KartePlanungPage;
  let fixture: ComponentFixture<KartePlanungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartePlanungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartePlanungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
