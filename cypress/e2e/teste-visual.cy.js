describe('Teste dos elementos visuais da página de cadastro de novos funcionários', () => {
    it('Verificar elementos visuais', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')

        cy.get('descriptionImage')
            .should('be.visible')
    });
});