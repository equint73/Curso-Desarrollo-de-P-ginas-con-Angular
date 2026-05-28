
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';

import { trackingReducer } from './app/store/tracking.reducer';

const routes: Routes = [
  { path: '', loadComponent: () => import('./app/home.component').then(m => m.HomeComponent) },
  { path: 'mapa', loadComponent: () => import('./app/mapa-ricardo.component').then(m => m.MapaRicardoComponent) },
  { path: 'animacion', loadComponent: () => import('./app/animacion-ricardo.component').then(m => m.AnimacionRicardoComponent) },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideStore({ tracking: trackingReducer })
  ]
}).catch(err => console.error(err));
