import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleSerieComponent } from '../detalle-serie/detalle-serie.component';
import { ApiService } from '../servicios/api-service.service';
import { Serie } from '../modulo/serie';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule, DetalleSerieComponent],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  series: Serie[] = []; // Declara el arreglo con el tipo Serie[] e inicialízalo

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerSeries().subscribe(
      (data) => {
        console.log('Datos de series obtenidos:', data); // Depuración
        this.series = data.results; // Asigna los resultados al arreglo
      },
      (error) => {
        console.error('Error al obtener series:', error); // Manejo de errores
      }
    );
  }
}
