import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  id: any;
  pais = {
    nombre:'',
    estado:''
  }
  constructor(private paisService: PaisService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.paisService.getPais(this.id).subscribe((data: any) => {
      console.log(data);
      this.pais.nombre= data.resultado.nombre;
      this.pais.estado= data.resultado.estado;
    })
  }

  cancel(){
    this.router.navigate(['pais/listar']);
  }

  confirmar(){
    this.paisService.deletePais(this.id).subscribe((data:any) => {
      this.router.navigate(['pais/listar'])
    })
  }
}
