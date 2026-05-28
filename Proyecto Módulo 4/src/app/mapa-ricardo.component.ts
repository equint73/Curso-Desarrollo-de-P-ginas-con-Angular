import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@Component({
  selector: 'app-mapa-ricardo',
  standalone: true,
  imports: [CommonModule, NgxMapboxGLModule],
  templateUrl: './mapa-ricardo.component.html',
  styleUrls: ['./mapa-ricardo.component.css']
})
export class MapaRicardoComponent {}
