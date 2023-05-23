import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategoria } from '../interfaces/ICategoria';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl: string = environment.apiUrl;
  categoriaUrl: string = `${this.apiUrl}/categorias`;

  resultados:  ICategoria[] = [];
  
  constructor(private http: HttpClient) { }

  listarCategorias()
  {
    this.http.get<ICategoria[]>(this.categoriaUrl)
    .subscribe(resp => {
      this.resultados = resp;
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
    return this.http.put(this.apiUrl+id, categoria);
  }

  deleteCliente(id: number)
  {
    return this.http.delete(this.apiUrl+id);  
  }
}
