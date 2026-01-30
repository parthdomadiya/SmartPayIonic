import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassrPage } from './passr.page';

describe('PassrPage', () => {
  let component: PassrPage;
  let fixture: ComponentFixture<PassrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PassrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
