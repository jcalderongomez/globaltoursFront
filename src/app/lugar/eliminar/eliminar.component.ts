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
      console.log(data);
      this.lugar.nombre=          data.resultado.nombre;
      this.lugar.descripcion=     data.resultado.descripcion;
      this.lugar.gastoAproximado= data.resultado.gastoAproximado;
      this.lugar.imagen=          data.resultado.imagen;
      this.lugar.pais=            data.resultado.pais;
      this.lugar.categoria=       data.resultado.catagoria;
    })
  }

  cancel(){
    this.router.navigate(['lugar/listar']);
  }

  confirmar(){
    this.lugarService.deleteLugar(this.id).subscribe((data:any) => {
      this.router.navigate(['lugar/listar'])
    })
  }
}
