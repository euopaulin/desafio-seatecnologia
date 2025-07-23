# ⚙️ Testes de funcionalidades 

A página fornecida para o teste trata-se de um site para gerenciamento e cadastro de novos funcionários.

## 👷 Teste de cadastro de novo funcionario: ##

De início, comecei testando o botão 'Adicionar novo funcionário', que tem como objetivo cadastrar novos funcionários com seus dados pessoais e de acordo com o EPI que ele utiliza em sua função. Quando clico no botão, ocorre tudo certo e o botão funciona de acordo com o do protótipo.

<p align="center">
  <img src="Images/image-1.png" alt="Adicionar novo funcionario" width="800"/>
</p>

Para chegar nesse botão de forma automatizada, utilizei o seguinte código no Cypress:

```bash
 cy.get('button.c-kUQtTK').click();
```
*Usei o Chrome DevTools para identificar a classe do botão 'Adicionar Funcionário', que é 'c-kUQtTK'. Em seguida, fiz a referência no código para que, ao rodá-lo, o Cypress procurasse esse botão no site e, assim que o encontrasse, realizasse a ação de clicar. O mesmo foi feito com os outros códigos de automação presentes nesta documentação.*

---

## 📝 Campo de mome e CPF ##

Após isso, a página nos redireciona para outra tela onde devemos preencher os campos necessários para cadastrar um novo funcionário. Para testar os campos, foram utilizados tanto o teste manual quanto o automatizado com o uso do Cypress.

Foi testado o campo do CPF e, ao digitar mais do que 11 dígitos, ele fornece um erro. Então, o campo do CPF está funcionando bem em relação ao número máximo de dígitos. Também testei a limitação de dígitos mínimos e, ao digitar menos que 11, é exibida uma mensagem para que o usuário se atente ao número de caracteres mínimos.

Porém, como pode ser visto na imagem abaixo, eu realizei o teste digitando caracteres alfabéticos, algo que pode ser considerado uma falha para esse campo. Elaborarei isso mais à frente.

<p align="center">
  <img src="Images/Pasted image 20250719102034.png" alt="Mensagem caracteres CPF" width="700"/>
</p>

Na imagem abaixo, a automação falha ao verificar que o CPF digitado contém caracteres maiores do que o número máximo de caracteres permitido, o que indica que o número máximo de caracteres está sendo aplicado corretamente.

<p align="center">
  <img src="Images/Captura de tela 2025-07-19 093615.png" alt="Erro CPF" width="800"/>
</p>

Código utilizado para realizar essa automação:

```bash
 cy.get('input[name="cpf"]').should('have.value', '1234567890111');
```
Esse código, além de preencher o campo, também valida se o valor é o correto.

Porém, no cadastro de CPF, é possível notar uma falha. Sabemos que o CPF deve conter apenas números, mas no campo do CPF é possível digitar letras, algo que foge do padrão do CPF. Esse erro possivelmente está associado com o JavaScript da página, que provavelmente não está habilitado para restringir o campo do CPF a apenas números. Esse mesmo erro também ocorre no campo do RG.

Uma solução que sugiro para essa falha é a equipe do front-end coloque um filtro para garantir que somente números possam ser digitados.

Abaixo segue a imagem do teste automatizado utilizando caracteres alfabéticos.

<p align="center">
  <img src="Images/cpf letras.png" alt="Letras CPF" width="800"/>
</p>

Para realizar esse teste, bastou eu alterar o código anterior para digitar no campo de CPF com números, porém colocando para que digitasse 'cpfnumeros'

```bash
  cy.get('input[name="cpf"]').type('12345678901')
```

Falha como essa compromete muito o funcionamento do site e a função de cadastrar novos funcionários, pois abre brecha para que usuários sejam cadastrados com CPFs errados, sendo, assim, uma falha crítica para o site.

---

## 📝 Campo de RG ##

Agora, no campo do RG, é possível encontrar um erro de limite de caracteres. Normalmente, um RG tem entre 7 e 9 dígitos, porém no campo do RG é permitido digitar um número infinito de dígitos. Dessa forma, é bem provável que o código JS também não esteja configurado para especificar o limite de caracteres para esse campo. Se esse for o caso, é bem provável que o comando **'maxlength='** resolva o problema do limite de caracteres.

Código de automação utilizado:
```bash
 cy.get('input[name="rg"]').type('123456789121212131313142312');
```

Essa também é uma falha crítica para o site e seu objetivo, pois isso torna o cadastro de RG do funcionário vulnerável e muito suscetível a erros.

<p align="center">
  <img src="Images/Pasted image 20250719100229.png" alt="Letras RG" width="470"/>
</p>

---

## 📝 Campo de data de nascimento ##

No campo de data de nascimento, é possível notar que há uma falha que permite ao usuário escolher uma data de nascimento no futuro em relação à data atual. Por exemplo, é possível colocar a data de nascimento no dia 27/10/2027, sendo que estamos em 2025, algo que não faz sentido. Para resolver esse problema, os desenvolvedores devem limitar a data no back-end para até um certo ano que seja o limite mínimo de idade para os cargos.

Mais uma falha crítica no sistema de cadastro do site, que torna o funcionamento vulnerável.


<p align="center">
  <img src="Images/Pasted image 20250719102124.png" alt="Data" width="300">
</p>

<p align="center">
  <img src="Images/Pasted image 20250719101400.png" alt="Data2" width="300">
</p>

Código para automação do campo de data de nascimento:
```bash
  cy.get('input[name="birthDay"]').type('14/08/2000');
```

Algo que difere do protótipo é que, no campo de data de nascimento, é possível notar que existe somente o campo onde será inserida a data, não sendo possível selecionar o calendário. Já no de testes, é possível selecionar a data no calendário, não apenas digitando. Talvez, nesse quesito, o site de testes seja até mais completo, porém não funciona, visto que existem falhas.

Imagem de referência do protótipo:

<p align="center">
  <img src="Images/Pasted image 20250719101549.png" alt="Data3" width="400">
</p>

---

## 📝 Campo de escolher o sexo ##

O campo de alteração de sexo parece funcionar bem, não identifiquei nenhum problema.

<p align="center">
  <img src="Images/Pasted image 20250719100650.png" alt="Sexo" width="350">
</p>

Código de automação para selecionar o botão de sexo masculino:
```bash
  cy.get('input[value="feminino"]').click();
```

---

No campo onde selecionamos os EPIs que o trabalhador usará nas atividades, é possível notar que há um erro quando é informado o CA. O campo não possui limite de caracteres, semelhante à falha encontrada nos campos de RG e CPF anteriormente.

<p align="center">
  <img src="Images/Pasted image 20250719101034.png" alt="EPI" width="600">
</p>

Também notei que não é possível adicionar o EPI. O botão 'Adicionar EPI' na versão de testes não funciona e também possui um layout diferente do mesmo botão no protótipo.

Abaixo está uma comparação entre os dois:

## 📝Protótipo: ##

<p align="center">
  <img src="Images/Pasted image 20250719103517.png" alt="Protótipo" width="800">
</p>

<h2> 🧪Teste: </h2>

<p align="center">
  <img src="Images/Pasted image 20250719104624.png" alt="Teste" width="800">
</p>

---

## Página Inicial ##

Na página inicial, na parte onde são listados os funcionários, não consigo excluir os que criei. Simplesmente, o botão com a funcionalidade de excluir ou modificar não aparece.

<p align="center">
  <img src="Images/Captura de tela 2025-07-19 104811.png" alt="Excluir" width="570">
</p>

Era para aparecer algo assim, como no protótipo:

<p align="center">
  <img src="Images/Captura de tela 2025-07-19 105029.png" alt="Excluir" width="570">
</p>

Ao inspecionar o site com o Chrome DevTools e verificar a aba de 'Conexão', é possível notar que há uma fonte que não foi carregada. O erro '400 Bad Request' é retornado.

<p align="center">
  <img src="Images/Pasted image 20250721080904.png" alt="Erro" width="600">
</p>

Esse erro de falha no carregamento da fonte acontece devido a um erro de sintaxe na URL da fonte. Faltou o '&' antes de *'display=swap'*.

Ao copiar e corrigir o link da fonte e pesquisar, é possível notar que o link existe e a fonte está no ar, como a imagem abaixo mostra:

<p align="center">
  <img src="Images/Pasted image 20250721081348.png" alt="Fonte" width="600">
</p>

Esse é um erro que pode ser facilmente corrigido no código front-end, na parte onde está linkada a busca da fonte vinculada

## Fitro de funcionários ativos ##

Há um erro em relação ao filtro de funcionários ativos. Quando filtrado apenas por funcionários ativos, é possível notar que, mesmo o funcionário 'Sea Teste', que está como 'Ativid 2', acaba sumindo quando o filtro é ativado, algo que não era para acontecer.

Antes de ativar o filtro:

<p align="center">
  <img src="Images/Pasted image 20250721081923.png" alt="Before Filter" width="800">
</p>

Após ativar o filtro para apenas funcionários ativos:

<p align="center">
  <img src="Images/Pasted image 20250721082126.png" alt="After Filter" width="500">
</p>

É possível notar que o funcionário "Sea Teste" sumiu.

O campo de adicionar documento parece estar funcionando bem, consegui anexar um documento sem problemas.

<p align="center">
  <img src="Images/Pasted image 20250721082738.png" alt="Documento" width="800">
</p>

Quando cadastrado muitos funcionarios é possivel notar que onde é mostrado os usuários cadastrados acaba bugando e não tem uma função de scroll para poder ir até o ultimo funcionario cadastrado.

<p align="center">
  <img src="Images/Captura de tela_2025-07-22_20-49-40.png" alt="lista" width="700">
</p>

Minha sugestão para esse problema é que no código fosse inserido a opção de scroll para poder rolar até o fim do menu de funcionarios cadastrados.

O menu do quanto esquerdo não está funcionando, quando seleciono alguma opção que não seja a que já estamos, nada acontece.

<p align="center">
  <img src="Images/Pasted image 20250721082908.png" alt="Menu" width="75">
</p>

E por fim, o ultimo erro que percebi foi que ao marca como etapa concluída e clicar em próximo, nada acontece. No protótipo quando fazemos esse procedimento, é nos enviado para outra etapa.

<p align="center">
  <img src="Images/Pasted image 20250721083144.png" alt="Próximo" width="400">
</p>

---

## Teste em diferentes navegadores e mobile ##

Realizei abrir o site no celular android e a visualização dele em mobile é completamente confusa e fora do padrão do protótipo. A visualização mobile chega a ser impossivel de navegar pelo site, se tornando inoperante.

<p align="center">
  <img src="Images/Printmobile1.jpg" alt="Mobile" width="400">
  <img src="Images/Printmobile2.jpg" alt="Mobile" width="400">
</p>

Utilizei três códigos de automação no Cypress para simular a resolução dos dispositivos móveis de diferentes SO's.

Para o IOS utilizei:

```bash
  cy.viewport('iphone-6');
```

Para tablet:

```bash
  cy.viewport('ipad-2');
```

E para android:

```bash
  cy.viewport('samsung-note9');
```

Essa é uma falha critica para o bom funcionamento do site, pois assim impossibilidade o usuário de utilizar a plataforma já que não tem usabilidade nenhuma.

---

Também foi realizado o teste em diversos navegadores como o Chrome, Firefox, Edege e Opera.
Nos três navegadores a usabilidade é a mesma e os mesmos problemas persistem.

---

## ✅ Conclusão dos testes feitos:

Com os testes realizados, tanto os automatizados quanto os manuais, foi possível encontrar vários erros no site. Erros esses que comprometem a usabilidade, a experiência do usuário e até mesmo a segurança. Um usuário teria muita dificuldade para cadastrar um novo funcionário devido aos diversos bugs encontrados.

Minha sugestão é que a equipe de back-end faça as correções nos códigos dos campos de inserção de dados e que, além disso, sejam criados novos campos de inserção de dados, como: número de telefone do funcionário ou e-mail para contato.

Sugiro também que deva ser feita uma modificação o mais breve possível, para que o site seja responsivo para aparelhos móveis, pois, com o que existe hoje, é impossível de usar em dispositivos móveis.

## ⚠️ Falhas críticas: 

As falhas que considero mais críticas são os problemas de validação (CPF, RG, Data de Nascimento), layout no mobile e usabilidade no back-end (filtro e exclusão de funcionários).