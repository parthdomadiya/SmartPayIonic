import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcardPage } from './ecard.page';

describe('EcardPage', () => {
  let component: EcardPage;
  let fixture: ComponentFixture<EcardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
