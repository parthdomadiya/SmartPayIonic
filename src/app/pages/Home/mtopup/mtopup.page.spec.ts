import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtopupPage } from './mtopup.page';

describe('MtopupPage', () => {
  let component: MtopupPage;
  let fixture: ComponentFixture<MtopupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MtopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
