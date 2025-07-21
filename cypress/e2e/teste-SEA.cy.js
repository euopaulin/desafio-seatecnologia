describe('Teste da página de cadastro de novos funcionarios', () => {
  it('Cadastrar um novo funcionario', () => {
    // Para acessar o site:
    cy.visit('https://analista-teste.seatecnologia.com.br/')

    // localizar o botão e clicar nele
    cy.get('button.c-kUQtTK').click();

    // Alterar o botão de inativo para ativo
    cy.get('button.ant-switch').click()

    // Preencher o campo de nome
    cy.get('input[name="name"]').type('Paulo Henrique');

    // Preencher o campo do CPF
    cy.get('input[name="cpf"]').type('12345678901');

    // Verificar se o campo CPF foi preenchido corretamente
     cy.get('input[name="cpf"]').should('have.value', '12345678901');

     // Verificar o campo do RG
     cy.get('input[name="rg"]').type('123456789121212131313142312412312312313431513513123');

     // Verificar o campo de Adicionar EPI
     cy.get('span.addEPI').click();
    });
  });