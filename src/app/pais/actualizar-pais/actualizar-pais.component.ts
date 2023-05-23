import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { PaisService } from '../pais.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-pais',
  templateUrl: './actualizar-pais.component.html',
  styleUrls: ['./actualizar-pais.component.css']
})
export class ActualizarPaisComponent implements OnInit {

  form: FormGroup;
  id: number;
  
  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<ActualizarPaisComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {
                  nombre: string, 
                  estado: string, 
                  id: number}, private service:PaisService, private router: Router) { 
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
  this.service.actualizarPais(this.id,this.form.value).subscribe((data)=>{
    this.router.navigate(['/categoria']);
    window.location.reload();
  })
  this.dialogRef.close();
}

  ngOnInit(): void {
  }

}
