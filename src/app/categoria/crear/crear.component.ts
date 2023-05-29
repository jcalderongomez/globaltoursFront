import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
    crearCategoria: FormGroup

    constructor(private fb: FormBuilder,
      private categoriaService: CategoriaService,
      private router: Router) { 
      this.crearCategoria = this.fb.group({
        nombre: ['', Validators.required],
        estado: false
      });
    }
    
    ngOnInit(): void {
    }

    onSubmit(){
      console.log(this.crearCategoria.value);
      this.categoriaService.crearCategoria(this.crearCategoria.value).subscribe((data:any) => {
        alert("hola");
        this.router.navigate(['../categoria']);

      });
    }

    cancel(){
      this.router.navigate(['categoria/listar']);
    }
  }
