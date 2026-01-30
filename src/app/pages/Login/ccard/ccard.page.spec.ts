import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CcardPage } from './ccard.page';

describe('CcardPage', () => {
  let component: CcardPage;
  let fixture: ComponentFixture<CcardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
