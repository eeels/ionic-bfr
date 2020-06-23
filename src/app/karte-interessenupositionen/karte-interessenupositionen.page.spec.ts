import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteInteressenupositionenPage } from './karte-interessenupositionen.page';

describe('KarteInteressenupositionenPage', () => {
  let component: KarteInteressenupositionenPage;
  let fixture: ComponentFixture<KarteInteressenupositionenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteInteressenupositionenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteInteressenupositionenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
