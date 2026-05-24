import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { PanelComponent } from './paginas/panel/panel.component';

@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent,
    LoginComponent,
    PanelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
