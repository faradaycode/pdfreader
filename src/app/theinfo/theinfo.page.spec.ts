import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheinfoPage } from './theinfo.page';

describe('TheinfoPage', () => {
  let component: TheinfoPage;
  let fixture: ComponentFixture<TheinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
