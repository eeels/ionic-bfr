import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteEntscheidungskompetenzPage } from './karte-entscheidungskompetenz.page';

describe('KarteEntscheidungskompetenzPage', () => {
  let component: KarteEntscheidungskompetenzPage;
  let fixture: ComponentFixture<KarteEntscheidungskompetenzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteEntscheidungskompetenzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteEntscheidungskompetenzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
