import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteEmpfehlungsdreieckPage } from './karte-empfehlungsdreieck.page';

describe('KarteEmpfehlungsdreieckPage', () => {
  let component: KarteEmpfehlungsdreieckPage;
  let fixture: ComponentFixture<KarteEmpfehlungsdreieckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteEmpfehlungsdreieckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteEmpfehlungsdreieckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
