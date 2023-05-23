import { Component, OnInit } from '@angular/core';
import { LugarService } from '../lugar.service';
import { ILugar } from 'src/app/interfaces/ILugar';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarLugarComponent } from '../actualizar-lugar/actualizar-lugar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre','descripcion','gastoAproximado','imagenUrl','pais','categoria','acciones'];

  constructor(private lugarService: LugarService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.lugarService.listarLugares();
  }

  get resultados(){
    return this.lugarService.resultados;
  }

  actualizarLugar(lugar : ILugar)
  {
    console.log(lugar);
    this.dialog.open(ActualizarLugarComponent,{
      data:{
        nombre: lugar.nombre,
        descripcion: lugar.descripcion,
        gastoAproximado : lugar.gastoAproximado,
        imagenUrl: lugar.imagenUrl,
        pais: lugar.pais,
        categoria: lugar.categoria,
        id: lugar.id
      }
    })

  }
}
