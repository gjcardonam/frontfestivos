import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { Festivo } from '../entidades/festivo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TablaFestivosService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}festivos`;
  }

  public obtener(año: number): Observable<Festivo[]> {
    let urlT = `${this.url}/obtener/${año}`;
    return this.http.get<Festivo[]>(urlT);
  }
}
