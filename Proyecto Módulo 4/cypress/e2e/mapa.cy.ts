
describe('Mapa', () => {
  it('muestra mensaje al clickear el marker', () => {
    cy.visit('/mapa');
    cy.contains('Mapa con Marker');
  });
});
