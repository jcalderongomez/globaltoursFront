import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes= [
  {
    path: '', component: HomeComponent, 
    children: [
      { path: 'listar', component: ListarComponent },
      { path: 'crear', component: CrearComponent },
      { path: 'editar/:id', component: EditarComponent },
      { path: 'eliminar/:id', component: EliminarComponent },
      { path: '**', redirectTo: 'listar' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaisRoutingModule { }
