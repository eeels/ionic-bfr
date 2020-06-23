import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteMoeglichkeitsraumPage } from './karte-moeglichkeitsraum.page';

describe('KarteMoeglichkeitsraumPage', () => {
  let component: KarteMoeglichkeitsraumPage;
  let fixture: ComponentFixture<KarteMoeglichkeitsraumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteMoeglichkeitsraumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteMoeglichkeitsraumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
