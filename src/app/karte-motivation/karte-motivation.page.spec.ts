import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteMotivationPage } from './karte-motivation.page';

describe('KarteMotivationPage', () => {
  let component: KarteMotivationPage;
  let fixture: ComponentFixture<KarteMotivationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteMotivationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteMotivationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
