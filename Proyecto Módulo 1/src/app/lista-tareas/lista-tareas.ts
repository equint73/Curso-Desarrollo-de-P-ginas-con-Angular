import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TareaItemComponent } from '../tarea-item/tarea-item';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [NgFor, TareaItemComponent],
  templateUrl: './lista-tareas.html',
  styleUrls: ['./lista-tareas.css']
})
export class ListaTareasComponent {
  tareas: string[] = [''];

  agregarTarea(valor: string) {
    if (valor.trim()) {
      this.tareas.push(valor.trim());
    }
  }
}
