import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteMerkmalvorteilnutzenPage } from './karte-merkmalvorteilnutzen.page';

describe('KarteMerkmalvorteilnutzenPage', () => {
  let component: KarteMerkmalvorteilnutzenPage;
  let fixture: ComponentFixture<KarteMerkmalvorteilnutzenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteMerkmalvorteilnutzenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteMerkmalvorteilnutzenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
