import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteLokikinargumentPage } from './karte-lokikinargument.page';

describe('KarteLokikinargumentPage', () => {
  let component: KarteLokikinargumentPage;
  let fixture: ComponentFixture<KarteLokikinargumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteLokikinargumentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteLokikinargumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
