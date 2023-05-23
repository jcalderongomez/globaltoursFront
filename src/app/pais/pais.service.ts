import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPais } from '../interfaces/IPais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  apiUrl: string = environment.apiUrl;
  categoriaUrl: string = `${this.apiUrl}/paises`;

  resultados:  IPais[] = [];
  
  constructor(private http: HttpClient) { }

  listarPaises()
  {
    this.http.get<IPais[]>(this.categoriaUrl)
    .subscribe(resp => {
      this.resultados = resp;
    })
  }

  getPais(id: number){
    return this.http.get(this.apiUrl+id);
  }

  crearPais(pais: IPais){
    return this.http.post(this.apiUrl, pais);
  }

  actualizarPais(id: number, pais: IPais){      
    return this.http.put(this.apiUrl+id, pais);
  }

  deletePais(id: number){
    return this.http.delete(this.apiUrl+id);
  }
}
