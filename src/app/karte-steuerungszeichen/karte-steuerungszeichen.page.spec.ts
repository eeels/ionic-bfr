import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteSteuerungszeichenPage } from './karte-steuerungszeichen.page';

describe('KarteSteuerungszeichenPage', () => {
  let component: KarteSteuerungszeichenPage;
  let fixture: ComponentFixture<KarteSteuerungszeichenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteSteuerungszeichenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteSteuerungszeichenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
