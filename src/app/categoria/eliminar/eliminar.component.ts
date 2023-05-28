import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  id: any;
  categoria = {
    nombre:'',
    estado:''
  }
  constructor(private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.categoriaService.getCategoria(this.id).subscribe((data: any) => {
      this.categoria.nombre= data.resultado.nombre;
      this.categoria.estado= data.resultado.estado;
    })
  }

  cancel(){
    this.router.navigate(['categoria/listar']);
  }

  confirmar(){
    this.categoriaService.deleteCategoria(this.id).subscribe((data:any) => {
      this.router.navigate(['categoria/listar'])
    })
  }
}