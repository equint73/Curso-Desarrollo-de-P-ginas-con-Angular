import { Component } from '@angular/core';
import { ListaTareasComponent } from './lista-tareas/lista-tareas'; // ✅ tu ruta real

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTareasComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'TAREA MODULO 1 ANGULAR RICARDO ANARIBA';
}
