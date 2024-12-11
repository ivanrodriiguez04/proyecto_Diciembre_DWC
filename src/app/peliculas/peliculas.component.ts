import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { ApiService } from '../servicios/api-service.service';
import { Pelicula } from '../modulo/pelicula';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, DetallePeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = []; // Declara el arreglo con el tipo Pelicula[] e inicialízalo

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerPeliculas().subscribe(
      (data) => {
        console.log('Datos de películas obtenidos:', data); // Depuración
        this.peliculas = data.results; // Asigna los resultados al arreglo
      },
      (error) => {
        console.error('Error al obtener películas:', error); // Manejo de errores
      }
    );
  }
}
