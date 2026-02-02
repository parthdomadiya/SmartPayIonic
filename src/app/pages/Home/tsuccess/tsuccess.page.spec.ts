import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TsuccessPage } from './tsuccess.page';

describe('TsuccessPage', () => {
  let component: TsuccessPage;
  let fixture: ComponentFixture<TsuccessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
