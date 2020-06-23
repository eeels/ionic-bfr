import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteBeziehungsdreieckPage } from './karte-beziehungsdreieck.page';

describe('KarteBeziehungsdreieckPage', () => {
  let component: KarteBeziehungsdreieckPage;
  let fixture: ComponentFixture<KarteBeziehungsdreieckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteBeziehungsdreieckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteBeziehungsdreieckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
