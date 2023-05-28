import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.css']
})
export class ActualizarCategoriaComponent implements OnInit {

  form: FormGroup;
  id: number;
  
  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<ActualizarCategoriaComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {
                  nombre: string, 
                  estado: string, 
                  id: number}, private service:CategoriaService, private router: Router) { 
                    this.id = data.id;
                    this.form = fb.group({
                      nombre: [data.nombre, Validators.required],
                      estado: [data.estado, Validators.required]
                    })
                  }
cerrar(){
  this.dialogRef.close();
}


guardar(){
  this.form.value.id= this.id;
  this.service.actualizarCategoria(this.id,this.form.value).subscribe((data)=>{
    this.router.navigate(['/categoria']);
    window.location.reload();
  })
  this.dialogRef.close();
}

  ngOnInit(): void {
  }

}
