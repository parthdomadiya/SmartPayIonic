import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsearchPage } from './psearch.page';

describe('PsearchPage', () => {
  let component: PsearchPage;
  let fixture: ComponentFixture<PsearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
