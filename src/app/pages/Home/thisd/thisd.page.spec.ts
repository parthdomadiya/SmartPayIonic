import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThisdPage } from './thisd.page';

describe('ThisdPage', () => {
  let component: ThisdPage;
  let fixture: ComponentFixture<ThisdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
