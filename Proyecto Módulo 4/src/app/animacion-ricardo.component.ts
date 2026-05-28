
/* Autor: Ricardo Ariel Anariba */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RegistroClicksDirective } from './registro-clicks.directive';

@Component({
  standalone: true,
  imports: [CommonModule, RegistroClicksDirective],
  animations: [
    trigger('cambio', [
      state('a', style({ backgroundColor: '#3f51b5', transform: 'scale(1.0)' })),
      state('b', style({ backgroundColor: '#43a047', transform: 'scale(1.2)' })),
      transition('a <=> b', [animate('250ms ease-in-out')])
    ])
  ],
  template: `
  <div class="panel">
    <h2>Componente con Animación</h2>
    <div class="anim-box" [@cambio]="estado">Estado: {{estado.toUpperCase()}}</div>
    <button appRegistroClicks data-tracking-tag="animacion-toggle" (click)="toggle()">Cambiar</button>
  </div>
  `
})
export class AnimacionRicardoComponent {
  estado: 'a' | 'b' = 'a';
  toggle() { this.estado = this.estado === 'a' ? 'b' : 'a'; }
}
