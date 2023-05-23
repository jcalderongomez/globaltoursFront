import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LugarService } from '../lugar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-lugar',
  templateUrl: './actualizar-lugar.component.html',
  styleUrls: ['./actualizar-lugar.component.css']
})
export class ActualizarLugarComponent implements OnInit {

  form: FormGroup;
  id: number;
  
  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<ActualizarLugarComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {
                  nombre: string, 
                  descripcion: string,
                  gastoAproximado: string,
                  imagen: string,
                  pais: string,
                  categoria: string,
                  
                  id: number}, private service:LugarService, private router: Router) { 
                    this.id = data.id;
                    this.form = fb.group({
                      nombre: [data.nombre, Validators.required],
                      descripcion: [data.descripcion, Validators.required],
                      gastoAproximado: [data.gastoAproximado, Validators.required],
                      imagen: [data.imagen, Validators.required],
                      pais: [data.pais, Validators.required],
                      categoria: [data.categoria, Validators.required],
                    })
                  }
cerrar(){
  this.dialogRef.close();
}


guardar(){
  this.form.value.id= this.id;
  this.service.actualizarLugar(this.id,this.form.value).subscribe((data)=>{
    this.router.navigate(['/categoria']);
    window.location.reload();
  })
  this.dialogRef.close();
}

  ngOnInit(): void {
  }

}
