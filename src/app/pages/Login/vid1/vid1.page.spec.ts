import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Vid1Page } from './vid1.page';

describe('Vid1Page', () => {
  let component: Vid1Page;
  let fixture: ComponentFixture<Vid1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Vid1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
