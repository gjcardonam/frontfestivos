import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { Festivo } from '../entidades/festivo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FestivosService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}festivos`;
  }

  public verificar(año: number, mes: number, dia: number): Observable<any> {
    let urlT = `${this.url}/verificar/${año}/${mes}/${dia}`;
    return this.http.get(urlT, { responseType: 'text' });
  }

  public obtener(anno: number): Observable<Festivo[]> {
    let urlT = `${this.url}/obtener/${anno}`;
    return this.http.get<Festivo[]>(urlT);
  }
}


