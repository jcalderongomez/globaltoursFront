import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ILugar, Lugar } from '../interfaces/ILugar';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LugarService {
  apiUrl: string = environment.apiUrl;
  lugarUrl: string = `${this.apiUrl}lugares`;

  resultados:  Lugar[] = [];
  
  constructor(private http: HttpClient) { }

  getLugares()
  {
    this.http.get<ILugar>(this.lugarUrl)
    .subscribe(resp=>{
      console.log(resp.resultado);
      this.resultados = resp.resultado
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
