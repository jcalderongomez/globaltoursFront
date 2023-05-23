import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { PaisRoutingModule } from './pais-routing.module';
import { MaterialModule } from '../material/material.module';
import { ActualizarPaisComponent } from './actualizar-pais/actualizar-pais.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponent,
    EliminarComponent,
    EditarComponent,
    HomeComponent,
    ListarComponent,
    ActualizarPaisComponent
    
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PaisModule { }
