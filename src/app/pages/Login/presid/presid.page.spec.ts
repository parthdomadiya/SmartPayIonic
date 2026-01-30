import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresidPage } from './presid.page';

describe('PresidPage', () => {
  let component: PresidPage;
  let fixture: ComponentFixture<PresidPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
