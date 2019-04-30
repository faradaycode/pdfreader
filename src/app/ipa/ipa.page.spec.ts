import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaPage } from './ipa.page';

describe('IpaPage', () => {
  let component: IpaPage;
  let fixture: ComponentFixture<IpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
