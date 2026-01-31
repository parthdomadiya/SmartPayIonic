import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardinfoPage } from './cardinfo.page';

describe('CardinfoPage', () => {
  let component: CardinfoPage;
  let fixture: ComponentFixture<CardinfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
