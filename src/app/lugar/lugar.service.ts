import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ILugar } from '../interfaces/ILugar';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LugarService {
  apiUrl: string = environment.apiUrl;
  lugarUrl: string = `${this.apiUrl}`;

  resultados:  ILugar[] = [];
  
  constructor(private http: HttpClient) { }

  listarLugares()
  {
    this.http.get<ILugar[]>(this.lugarUrl)
    .subscribe(resp => {
      this.resultados = resp;
    })
  }
  
  getLugar(id: number){
    return this.http.get(this.apiUrl+id);
  }

  crearLugar(lugar: ILugar){
    return this.http.post(this.apiUrl, lugar);
  }
  
  actualizarLugar(id: number, lugar: ILugar)
  {   
    return this.http.put(this.apiUrl+id, lugar);
  }

  deleteLugar(id: number)
  {
    return this.http.delete(this.apiUrl+id);  
  }
}
