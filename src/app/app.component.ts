import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasComponent } from "./peliculas/peliculas.component";
import { SeriesComponent } from "./series/series.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PeliculasComponent, SeriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_Diciembre';
}
