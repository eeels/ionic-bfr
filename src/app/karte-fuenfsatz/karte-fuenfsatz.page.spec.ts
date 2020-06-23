import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteFuenfsatzPage } from './karte-fuenfsatz.page';

describe('KarteFuenfsatzPage', () => {
  let component: KarteFuenfsatzPage;
  let fixture: ComponentFixture<KarteFuenfsatzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteFuenfsatzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteFuenfsatzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
