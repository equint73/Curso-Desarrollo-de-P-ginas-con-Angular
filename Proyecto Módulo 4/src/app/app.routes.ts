import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AnimacionRicardoComponent } from './animacion-ricardo.component';
import { MapaRicardoComponent } from './mapa-ricardo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animacion', component: AnimacionRicardoComponent },
  { path: 'mapa', component: MapaRicardoComponent }
];
