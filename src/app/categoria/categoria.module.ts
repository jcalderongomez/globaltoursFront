import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { ActualizarCategoriaComponent } from './actualizar-categoria/actualizar-categoria.component';

@NgModule({
  declarations: [
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    HomeComponent,
    ListarComponent,
    ActualizarCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CategoriaModule { }
