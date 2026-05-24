import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';

  login() {
    console.log('Intento de login:', this.usuario, this.clave);
  }
}
