import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../modulo/pelicula';
import { Serie } from '../modulo/serie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey = 'cf72ce548013a49de0147ea2b127a557';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  obtenerPeliculas(): Observable<{ results: Pelicula[] }> {
    return this.http.get<{ results: Pelicula[] }>(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=es-ES&page=1`
    );
  }

  obtenerSeries(): Observable<{ results: Serie[] }> {
    return this.http.get<{ results: Serie[] }>(
      `${this.baseUrl}/tv/popular?api_key=${this.apiKey}&language=es-ES&page=1`
    );
  }}
