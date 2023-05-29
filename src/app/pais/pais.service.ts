import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPais, Pais } from '../interfaces/IPais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  apiUrl: string = `${environment.apiUrl}paises/`;

  resultados: Pais[] = [];

  
  constructor(private http: HttpClient) { }

  getPaises()
  {
    this.http.get<IPais>(this.apiUrl)
    .subscribe(resp=>{
      this.resultados = resp.resultado
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
