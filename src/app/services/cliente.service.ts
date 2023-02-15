import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calificacion } from '../models/calificacion';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseEndpoint='http://localhost:8080/calificaciones';
  
  private cabeceras: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
})
  constructor(private http: HttpClient) { }

  public listar(id: number): Observable<Calificacion[]>{
    return this.http.get<Calificacion[]>(`${this.baseEndpoint}/${id}`);
 }

 public ver(id: number): Observable<Calificacion>{
  return this.http.get<Calificacion>(`${this.baseEndpoint}/${id}`)
}

public crear(cliente: Calificacion): Observable<Calificacion>{
  return this.http.post<Calificacion>(this.baseEndpoint, cliente, {headers: this.cabeceras});
}

public editar(cliente: Calificacion): Observable<Calificacion>{
  return this.http.put<Calificacion>(`${this.baseEndpoint}/${cliente.id}`, cliente, {headers: this.cabeceras});
}

public eliminar(id: number): Observable<void>{
  return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
}
}
