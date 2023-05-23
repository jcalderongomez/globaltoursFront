import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLugarComponent } from './actualizar-lugar.component';

describe('ActualizarLugarComponent', () => {
  let component: ActualizarLugarComponent;
  let fixture: ComponentFixture<ActualizarLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
