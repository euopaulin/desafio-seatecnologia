describe('Teste da página de cadastro de novos funcionarios', () => {
  it('Cadastrar um novo funcionario', () => {
    
    cy.visit('https://analista-teste.seatecnologia.com.br/')

    // localizar o botão de "Cadastrar novo funcionario" clicar nele
    cy.get('button.c-kUQtTK').click();

    //Os comandos abaixo vão preencher os campos do formulário de cadastro de novo funcionário
    cy.get('input[value="masculino"]').click();

    cy.get('input[name="name"]').type('Paulo Henrique');

    cy.get('input[name="cpf"]').type('12345678901');
    
    // Verificar se o campo CPF está preenchido corretamente
    cy.get('input[name="cpf"]').should('have.value', '12345678901');

    cy.get('input[name="rg"]').type('123456789121212131313142312412312312313431513513123');
  
    cy.get('input[name="birthDay"]').type('2000-08-14');

    // Alterar o botão de inativo para ativo
    cy.get('button.ant-switch').click()   
    
    //Esse comando vai verificar se o status do botão está ativo e irá retornar um log no cypress
    cy.get('button.ant-switch').then(($status) => {
        if ($status.text() === 'ativo') {
        cy.log('O status não está ativo');
        } else {
        cy.log('O status está ativo');
      }
    });

    // Verificar o campo de Adicionar EPI
    cy.get('span.addEPI').click();

    cy.get('.ant-select-selector').eq(1).click();

    cy.get('.ant-select-item-option-content').contains('Ativid 03').click();

    cy.get('.ant-select-selector').eq(2).click();

    cy.get('.ant-select-item-option-content').contains('Capacete de segurança').click();

    cy.get('input[name="caNumber"]').type('123456789');

    cy.get('button.c-dylnRB').eq(1).click();

    });
  });