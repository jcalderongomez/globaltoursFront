import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { MatDialog } from '@angular/material/dialog';
import { Categoria, ICategoria } from 'src/app/interfaces/ICategoria';
import { ActualizarCategoriaComponent } from '../actualizar-categoria/actualizar-categoria.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre','estado','acciones'];

  constructor(private categoriaService: CategoriaService,
    private dialog: MatDialog) { }

    ngOnInit(): void {
      this.categoriaService.getCategorias();
    }

    get resultados(){
      return this.categoriaService.resultados;
    }
  
    actualizarCategoria(categoria : Categoria){
      console.log(categoria);
      this.dialog.open(ActualizarCategoriaComponent,{
        data:{
          nombre: categoria.nombre,
          estado: categoria.estado,
          id: categoria.id
        }
      })
    }
}
