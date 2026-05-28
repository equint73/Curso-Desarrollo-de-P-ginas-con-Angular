
# Evaluación del Proyecto - Módulo 4
Autor: Ricardo Ariel Anariba

## Requisitos del módulo
- Mapbox con `ngx-mapbox-gl` y `@types/mapbox-gl@0.49.0`
- Marker con popover (mensaje) al click
- Componente con animación
- Directiva personalizada para tracking de clicks con inyección de `ElementRef`
- Redux con NgRx, contadores visibles y reactivos
- Tests unitarios de reducers con Jasmine
- Cypress con al menos 3 pruebas
- Integración con CircleCI

## Configuración
1. `npm install`
2. En `src/environments/environment.ts` agrega tu token de Mapbox en `mapboxToken`.
3. `npm start`

## Comandos
- `npm test`
- `npm run cypress:open`
- `npm run e2e`
