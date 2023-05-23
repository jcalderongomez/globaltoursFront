import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { LugarRoutingModule } from './lugar-routing.module';
import { MaterialModule } from '../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearComponent,
    EliminarComponent,
    EditarComponent,
    HomeComponent,
    ListarComponent,
  ],
  imports: [
    CommonModule,
    LugarRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LugarModule { }
