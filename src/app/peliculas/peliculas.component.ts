import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../modulo/pelicula';
import { ApiService } from '../servicios/api-service.service';
import { DetallePeliculaComponent } from "../detalle-pelicula/detalle-pelicula.component";

@Component({
  selector: 'app-peliculas',
  imports: [DetallePeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit{
  peliculas: Pelicula[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerPeliculas().subscribe((data) => {
      this.peliculas = data.results;
    });
  }
}
