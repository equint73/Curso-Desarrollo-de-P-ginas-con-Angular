
import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllTagCounts } from './store/tracking.selectors';
import { RegistroClicksDirective } from './registro-clicks.directive';

@Component({
  standalone: true,
  imports: [CommonModule, RegistroClicksDirective],
  template: `
  <div class="panel">
    <h2>Demostración de Tracking de Clicks</h2>
    <button appRegistroClicks data-tracking-tag="inicio-boton-a" class="badge">Botón A</button>
    <button appRegistroClicks data-tracking-tag="inicio-boton-b" class="badge">Botón B</button>
    <button appRegistroClicks data-tracking-tag="inicio-boton-c" class="badge">Botón C</button>
  </div>

  <div class="panel">
    <h2>Contadores de tracking</h2>
    <div *ngFor="let item of tagCounts() | keyvalue">
      <span class="badge">{{item.key}}: {{item.value}}</span>
    </div>
  </div>
  `
})
export class HomeComponent {
  private store = inject(Store);
  tagCounts = computed(() => this.store.selectSignal(selectAllTagCounts)());
}
