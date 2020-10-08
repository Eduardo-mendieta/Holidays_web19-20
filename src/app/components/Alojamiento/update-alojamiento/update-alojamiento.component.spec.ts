import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlojamientoComponent } from './update-alojamiento.component';

describe('UpdateAlojamientoComponent', () => {
  let component: UpdateAlojamientoComponent;
  let fixture: ComponentFixture<UpdateAlojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAlojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
