import { Component, Input } from '@angular/core';
import { Serie } from '../modulo/serie';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css'],
})
export class DetalleSerieComponent {
  @Input() serie!: Serie;
}
