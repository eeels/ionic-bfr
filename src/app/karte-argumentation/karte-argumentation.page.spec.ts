import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteArgumentationPage } from './karte-argumentation.page';

describe('KarteArgumentationPage', () => {
  let component: KarteArgumentationPage;
  let fixture: ComponentFixture<KarteArgumentationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteArgumentationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteArgumentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
