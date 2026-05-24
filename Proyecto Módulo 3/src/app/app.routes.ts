import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { PanelComponent } from './paginas/panel/panel.component';

export const rutas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'panel', component: PanelComponent },
];
