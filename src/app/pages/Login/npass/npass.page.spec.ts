import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NpassPage } from './npass.page';

describe('NpassPage', () => {
  let component: NpassPage;
  let fixture: ComponentFixture<NpassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
