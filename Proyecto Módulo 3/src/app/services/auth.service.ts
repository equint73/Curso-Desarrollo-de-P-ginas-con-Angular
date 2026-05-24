import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario = 'admin';
  private clave = '1234';

  login(user: string, pass: string): boolean {
    return user === this.usuario && pass === this.clave;
  }
}
