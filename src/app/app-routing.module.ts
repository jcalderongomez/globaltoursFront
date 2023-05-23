import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compartido/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'categoria', 
    loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)},  
  { path: 'pais', 
    loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule)},  
  { path: 'lugar', 
    loadChildren: () => import('./lugar/lugar.module').then(m => m.LugarModule)},  
  { path:'**', redirectTo : '' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
