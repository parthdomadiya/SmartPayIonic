import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThisPage } from './this.page';

describe('ThisPage', () => {
  let component: ThisPage;
  let fixture: ComponentFixture<ThisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
