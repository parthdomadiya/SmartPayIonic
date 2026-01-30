import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidencePage } from './residence.page';

describe('ResidencePage', () => {
  let component: ResidencePage;
  let fixture: ComponentFixture<ResidencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
