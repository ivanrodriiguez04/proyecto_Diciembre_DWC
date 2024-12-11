import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';

export const routes: Routes = [
    {path:'peliculas',component:PeliculasComponent},
    {path:'series',component:SeriesComponent},
];
