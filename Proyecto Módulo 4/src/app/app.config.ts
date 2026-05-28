import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgxMapboxGLModule.withConfig({
        accessToken: 'TU_TOKEN_MAPBOX'
      })
    )
  ]
};
