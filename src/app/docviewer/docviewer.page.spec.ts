import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocviewerPage } from './docviewer.page';

describe('DocviewerPage', () => {
  let component: DocviewerPage;
  let fixture: ComponentFixture<DocviewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocviewerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
