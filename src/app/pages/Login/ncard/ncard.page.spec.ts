import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NcardPage } from './ncard.page';

describe('NcardPage', () => {
  let component: NcardPage;
  let fixture: ComponentFixture<NcardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
