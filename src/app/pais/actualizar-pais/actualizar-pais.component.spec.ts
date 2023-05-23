import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPaisComponent } from './actualizar-pais.component';

describe('ActualizarPaisComponent', () => {
  let component: ActualizarPaisComponent;
  let fixture: ComponentFixture<ActualizarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
