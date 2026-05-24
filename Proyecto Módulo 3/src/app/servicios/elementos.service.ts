import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ElementosService {
  getAll() { return [{id:1, nombre:'Elemento 1'}]; }
}
