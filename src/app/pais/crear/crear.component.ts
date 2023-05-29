import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../pais.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  crearPais: FormGroup

  constructor(private fb: FormBuilder,
    private paisService: PaisService,
    private router: Router) { 
    this.crearPais = this.fb.group({
      nombre: ['', Validators.required],
      estado: ['', Validators.compose([
        Validators.required
      ])]
    });
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.crearPais.value);
    this.paisService.crearPais(this.crearPais.value).subscribe((data:any) => {
      this.router.navigate(['../pais']);
    });
  }

  cancel(){
    this.router.navigate(['../paises']);
  }
}
