
describe('Home tracking', () => {
  it('incrementa contadores al hacer click', () => {
    cy.visit('/');
    cy.contains('Botón A').click();
    cy.contains('inicio-boton-a: 1');
  });
});
