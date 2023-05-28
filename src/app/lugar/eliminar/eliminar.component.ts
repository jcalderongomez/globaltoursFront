import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  id: any;
  lugar = {
    nombre:'',
    descripcion:'',
    gastoAproximado:'',
    imagen:'',
    pais: '',
    categoria: ''

  }
  constructor(private lugarService: LugarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.lugarService.getLugar(this.id).subscribe((data: any) => {
      this.lugar.nombre= data.result.nombre;
      this.lugar.descripcion= data.result.descripcion;
      this.lugar.gastoAproximado= data.result.gastoAproximado;
      this.lugar.imagen= data.result.imagen;
      this.lugar.pais= data.result.pais;
      this.lugar.categoria= data.result.catagoria;
    })
  }

  cancel(){
    this.router.navigate(['pais/listar']);
  }

  confirmar(){
    this.lugarService.deleteLugar(this.id).subscribe((data:any) => {
      this.router.navigate(['pais/listar'])
    })
  }
}
