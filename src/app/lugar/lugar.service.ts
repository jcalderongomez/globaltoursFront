import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
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
}
