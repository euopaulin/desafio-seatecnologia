describe('Teste de cadastro de novo usuário', () => {
  it('Deve cadastrar um novo usuário', () => {
    // Acessa a página de cadastro de novo usuário
    cy.visit('https://analista-teste.seatecnologia.com.br/')

    //localiza o botão e clica nele
    cy.get('button.c-kUQtTK').click();

    //altera o botão de inativo para ativo
    cy.get('button.ant-switch').click()

    //Preenche o campo de nome
    cy.get('input[name="name"]').type('Paulo Henrique');

    //Preenche o campo do CPF
    cy.get('input[name="cpf"]').type('cpfnumeros');

    // Verifica se o campo CPF foi preenchido corretamente
     cy.get('input[name="cpf"]').should('have.value', 'cpfnumeros');

     //Verifica o campo do RG
     cy.get('input[name="rg"]').type('123456789121212131313142312412312312313431513513123');

     //Verifica o campo de Adicionar EPI
     cy.get('span.addEPI').click();
    });
  });