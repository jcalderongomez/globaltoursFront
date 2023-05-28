import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { IPais, Pais } from 'src/app/interfaces/IPais';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarPaisComponent } from '../actualizar-pais/actualizar-pais.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre','estado','acciones'];

  constructor(private paisService: PaisService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.paisService.getPaises();
  }

  get resultados(){
    return this.paisService.resultados;
  }

  actualizarPais(pais : Pais)
  {
    console.log(pais);
    this.dialog.open(ActualizarPaisComponent,{
      data:{
        nombre: pais.nombre,
        estado: pais.estado,
        id: pais.id
      }
    })

  }
}
