import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosReservadosComponent } from './carros-reservados.component';

describe('CarrosReservadosComponent', () => {
  let component: CarrosReservadosComponent;
  let fixture: ComponentFixture<CarrosReservadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosReservadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosReservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
