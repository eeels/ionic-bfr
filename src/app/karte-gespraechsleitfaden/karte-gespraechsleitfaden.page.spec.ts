import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteGespraechsleitfadenPage } from './karte-gespraechsleitfaden.page';

describe('KarteGespraechsleitfadenPage', () => {
  let component: KarteGespraechsleitfadenPage;
  let fixture: ComponentFixture<KarteGespraechsleitfadenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteGespraechsleitfadenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteGespraechsleitfadenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
