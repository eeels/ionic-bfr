import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteArgumentPage } from './karte-argument.page';

describe('KarteArgumentPage', () => {
  let component: KarteArgumentPage;
  let fixture: ComponentFixture<KarteArgumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteArgumentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteArgumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
