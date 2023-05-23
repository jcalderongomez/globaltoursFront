import { Component, OnInit } from '@angular/core';
import { LugarService } from '../lugar.service';
import { ILugar } from 'src/app/interfaces/ILugar';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre','descripcion','gastoAproximado','imagenUrl','pais','categoria','acciones'];

  constructor(private lugarService: LugarService) { }

  ngOnInit(): void {
    this.lugarService.listarLugares();
  }

  get resultados(){
    return this.lugarService.resultados;
  }

  actualizarLugar(lugar : ILugar)
  {

  }
}
