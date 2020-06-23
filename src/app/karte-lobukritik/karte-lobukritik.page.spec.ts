import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteLobukritikPage } from './karte-lobukritik.page';

describe('KarteLobukritikPage', () => {
  let component: KarteLobukritikPage;
  let fixture: ComponentFixture<KarteLobukritikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteLobukritikPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteLobukritikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
