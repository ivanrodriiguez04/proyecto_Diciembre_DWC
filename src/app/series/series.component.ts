import { Component, OnInit } from '@angular/core';
import { Serie } from '../modulo/serie';
import { ApiService } from '../servicios/api-service.service';
import { DetalleSerieComponent } from "../detalle-serie/detalle-serie.component";

@Component({
  selector: 'app-series',
  imports: [DetalleSerieComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {
  series: Serie[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerSeries().subscribe((data) => {
      this.series = data.results;
    });
  }
}
