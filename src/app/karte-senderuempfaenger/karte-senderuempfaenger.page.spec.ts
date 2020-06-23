import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteSenderuempfaengerPage } from './karte-senderuempfaenger.page';

describe('KarteSenderuempfaengerPage', () => {
  let component: KarteSenderuempfaengerPage;
  let fixture: ComponentFixture<KarteSenderuempfaengerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteSenderuempfaengerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteSenderuempfaengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
