import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteKonfliktbewaeltigungPage } from './karte-konfliktbewaeltigung.page';

describe('KarteKonfliktbewaeltigungPage', () => {
  let component: KarteKonfliktbewaeltigungPage;
  let fixture: ComponentFixture<KarteKonfliktbewaeltigungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteKonfliktbewaeltigungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteKonfliktbewaeltigungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
