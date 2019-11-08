import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosFavoritosComponent } from './carros-favoritos.component';

describe('CarrosFavoritosComponent', () => {
  let component: CarrosFavoritosComponent;
  let fixture: ComponentFixture<CarrosFavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosFavoritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
