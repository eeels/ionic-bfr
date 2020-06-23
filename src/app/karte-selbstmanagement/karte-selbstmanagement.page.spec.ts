import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteSelbstmanagementPage } from './karte-selbstmanagement.page';

describe('KarteSelbstmanagementPage', () => {
  let component: KarteSelbstmanagementPage;
  let fixture: ComponentFixture<KarteSelbstmanagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteSelbstmanagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteSelbstmanagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
