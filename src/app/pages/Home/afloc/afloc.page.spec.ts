import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AflocPage } from './afloc.page';

describe('AflocPage', () => {
  let component: AflocPage;
  let fixture: ComponentFixture<AflocPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AflocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
