import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteReifegradmodellPage } from './karte-reifegradmodell.page';

describe('KarteReifegradmodellPage', () => {
  let component: KarteReifegradmodellPage;
  let fixture: ComponentFixture<KarteReifegradmodellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteReifegradmodellPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteReifegradmodellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
