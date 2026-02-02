import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmoneyPage } from './smoney.page';

describe('SmoneyPage', () => {
  let component: SmoneyPage;
  let fixture: ComponentFixture<SmoneyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
