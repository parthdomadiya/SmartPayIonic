import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VidPage } from './vid.page';

describe('VidPage', () => {
  let component: VidPage;
  let fixture: ComponentFixture<VidPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
