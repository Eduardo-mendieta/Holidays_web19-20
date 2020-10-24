import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlojamientoUsuComponent } from './listar-alojamiento-usu.component';

describe('ListarAlojamientoUsuComponent', () => {
  let component: ListarAlojamientoUsuComponent;
  let fixture: ComponentFixture<ListarAlojamientoUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAlojamientoUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlojamientoUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
