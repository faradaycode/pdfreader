import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtkPage } from './mtk.page';

describe('MtkPage', () => {
  let component: MtkPage;
  let fixture: ComponentFixture<MtkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
