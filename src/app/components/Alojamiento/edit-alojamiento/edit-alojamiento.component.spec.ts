import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlojamientoComponent } from './edit-alojamiento.component';

describe('EditAlojamientoComponent', () => {
  let component: EditAlojamientoComponent;
  let fixture: ComponentFixture<EditAlojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAlojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
