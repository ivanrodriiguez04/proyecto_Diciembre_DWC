import { Component, Input } from '@angular/core';
import { Pelicula } from '../modulo/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  imports: [],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent {
  @Input() pelicula!: Pelicula;
}
