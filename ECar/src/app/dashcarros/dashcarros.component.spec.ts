import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcarrosComponent } from './dashcarros.component';

describe('DashcarrosComponent', () => {
  let component: DashcarrosComponent;
  let fixture: ComponentFixture<DashcarrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashcarrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
