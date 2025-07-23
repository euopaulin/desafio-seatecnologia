//Esse código é para testar a responsividade do site em diferentes dispositivos móveis

describe('Teste de compatibilidade do site na versão mobile', () => {
    it('Vetificar a responsividade do site no IOS', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')

        cy.viewport('iphone-6');

    });

    it('Teste em tablet', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')

        cy.viewport('ipad-2');
    });

    it('Teste em Android', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/')

        cy.viewport('samsung-note9');
    })
});