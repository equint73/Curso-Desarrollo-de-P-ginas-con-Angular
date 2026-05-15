import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  templateUrl: './tarea-item.html',
  styleUrls: ['./tarea-item.css']
})
export class TareaItemComponent {
  @Input() texto: string = '';
  @HostBinding('class') clase = 'd-block';
}
