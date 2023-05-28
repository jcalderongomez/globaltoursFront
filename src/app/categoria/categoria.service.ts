import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Categoria, ICategoria } from '../interfaces/ICategoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl: string = `${environment.apiUrl}categorias/`;

  resultados:  Categoria[] = [];
  
  constructor(private http: HttpClient) { }

  getCategorias(){
    this.http.get<ICategoria>(this.apiUrl)
    .subscribe(resp=>{
      this.resultados = resp.resultado
    })
  }
  
  getCategoria(id: number){
    return this.http.get(this.apiUrl+id);
  }

  crearCategoria(categoria: ICategoria){
    return this.http.post(this.apiUrl, categoria);
  }
  
  actualizarCategoria(id: number, categoria: ICategoria)
  {   
    console.log(this.apiUrl+id, categoria);
    return this.http.put(this.apiUrl+id, categoria);
  }

  deleteCategoria(id: number)
  {
    return this.http.delete(this.apiUrl+id);  
  }
}
