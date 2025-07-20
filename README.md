# 👾 Desafio Técnico SEA Tecnologia

Essa documentação tem como objetivo relatar todo o processo feito no teste de software da SEA Tecnologia. Irei explicar as ferramentas usadas, métodos utilizados para encontrar as falhas e dizer possíveis soluções para essas falhas.

Foram realizados testes manuais e testes automatizados, comparando as duas páginas fornecidas para o teste, uma sendo a de testes e a outra o prototipo. A ideia é comparar os dois e analisar se a página de teste segue o mesmo desing e funcionalidades do prototipo.

---

## ⚙️ Ferramentas utilizadas:

| Ferramenta       | Função                            |
|------------------|-----------------------------------|
| 📝 Obsidian    | Para fazer as anotações, visualização gráfica de todo processo e auxiliar na criação da documentação presente no Readme      |
| 🛠️ ChromeDevTools    | Para inspecionar os elementos de código do site     |
| 🧪 Cypress     | Para testes simples de automatização end-to-end (E2E) na página         |
| 💻 VScode    | Para edição de código     |
| 🌐 Node.JS    | Para poder rodar o Cypress    |

---

Dividi os testes em dois: **Testes de Funcionalidades** e **Testes de Desing**. Opetei por dividor em dois, para melhor compreensão das falhas encontradas.

Começarei apresentando os testes de funcionalidades.

---

### Falhas de funcionalidades encontradas:

Para a realização dos testes feitos nas funcionalidades da página, foram utilizado dois metodos, sendo eles: 

**1** - Testes manuais, simulando um cenário real onde um usuário administrador do sistema iria preencher os campos necessários e cadastrar o novo funcionário. Esse foi o método mais utilizado nos testes.

**2** - Testes automatizados, utilizando o ChromeDevTools para visualizar os elementos do site e o Cypress para automatização no teste de alguns campos, editando os códigos que simulam os cenários de preenchimento dos campos. Dessa forma, algumas funcionalidades puderam ser testadas de forma automatizada.

---

De incio comecei testando o botão "Adicionar novo funcionario" e ocorreu tudo certo, esse botão funciona de acordo como o do prototipo.

![Adicionar novo funcionario](Images\image-1.png)

Após isso a página nos redireciou para outra tela onde devemos preencher os campos necessários para cadastrar um novo funcionário. Foi testado o campo do CPF e ao digitar mais do que 11 dígitos ele fornece um erro, então o campo do CPF está funcionando bem em questão de número máximo de dígitos. Também testei a limitação de dígitos mínimos e ao digitar menos que 11 é mostrado uma mensagem para que o usuário se atente ao número de caracteres mínimos.

![Mensagem caracteres CPF](<Images\Pasted image 20250719102034.png>)

A imagem abaixo mostrar um erro no Cypress, pois no código coloquei para ele digitar um número maior do que o permito para o campo do CPF. Fiz isso para confirmar que o limite de caracteres no CPF está funcionando corretamente.

![Limite de caracteres](<Images\Captura de tela 2025-07-19 093615.png>)

Porém no cadastro de CPF é possivel notar uma falha. Sabemos que CPF são somente números e no campo do CPF é possivel digitar letras, algo que foge do padrão do CPF. Esse erro possivelmente está associado com o JS da página que provavelmente não está habilitado para que o campo do CPF seja permitido apenas números.
Esse mesmo erro também acontece com o campo do RG.

Abaixo segue a imagem do teste automatizado utilizando caracteres alfabéticos.

![Letras CPF](<Images\cpf letras.png>)

Agora no campo do RG é possível encontrar um erro de limite de caracteres. Normalmente um RG tem entre 7 e 9 dígitos, porém na página o campo do RG permite digitar um número infinito de dígitos. Dessa forma, é bem provavel que o código JS também não está especificado o limite de caracteres para esse campo. Se esse for o caso, é bem provavel que o comando **"maxlength="** resolva o problema do limite de caracteres.

![Letras RG](<Images\rg letras.png>)

![RG](<Images\Pasted image 20250719100229.png>)

No campo de data de nascimento é possível notar há uma falha que faz com que o usuário possa escolher a data de nascimento no futuro. Por exemplo, é possível colocar a data de nascimento no dia 27/10/2027 sendo que estamos em 2025, algo que não faz sentido. Para resolver esse problema os Devs deve limitar a data para até um certo ano que seja o limite mínimo de idade para os cargos.

![Data](<Pasted image 20250719102124.png>)

![Data](<Pasted image 20250719101400.png>)
