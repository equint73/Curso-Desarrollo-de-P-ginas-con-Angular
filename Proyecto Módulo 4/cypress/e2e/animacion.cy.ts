
describe('Animación', () => {
  it('cambia de estado al presionar', () => {
    cy.visit('/animacion');
    cy.contains('Cambiar').click();
    cy.contains('Estado: B');
  });
});
