# 👾 Desafio Técnico SEA Tecnologia

Essa documentação tem como objetivo relatar todo o processo feito no teste de software da SEA Tecnologia. Irei explorar e explicar as ferramentas usadas, métodos utilizados para encontrar os bugs e reporta-los, testando sua funcionalidades, usababilidade e compatibilidade entre diferentes dispositivos e navegadores, além de sugerir possíveis soluções para essas falhas.

Foram realizados testes manuais e testes automatizados, comparando as duas páginas fornecidas para o teste, uma sendo a de testes e a outra o prototipo. A ideia é comparar os dois e analisar se o site de teste está em conformidade com o site prototipo.

---

## ⚙️ Ferramentas utilizadas:

| Ferramenta       | Função                            |
|------------------|-----------------------------------|
| 📝 Obsidian    | Para fazer as anotações, visualização gráfica de todo processo e auxiliar na criação da documentação presente no Readme      |
| 🛠️ ChromeDevTools    | Para inspecionar os elementos de código do site     |
| 🧪 Cypress     | Para testes simples de automação end-to-end (E2E) na site         |
| 💻 VScode    | Para edição de código     |
| 🌐 Node.JS    | Versão v22.14.0 para rodar o Cypress    |

---

Dividi os testes em dois: **Testes de Funcionalidades** e **Testes de Desing**. Opetei por dividor em dois, para melhor compreensão das falhas encontradas.

Começarei apresentando os testes de funcionalidades.

---

### Falhas de funcionalidades encontradas:

Para a realização dos testes feitos nas funcionalidades da página, foram utilizado dois metodos, sendo eles: 

🔴 **1** - Testes manuais, simulando um cenário real onde um usuário administrador do sistema iria preencher os campos necessários e cadastrar o novo funcionário. Esse foi o método mais utilizado nos testes.

🔴 **2** - Testes automatizados, utilizando o ChromeDevTools para visualizar os elementos do site e o Cypress para automatização no teste de alguns campos, editando os códigos que simulam os cenários de preenchimento dos campos. Dessa forma, algumas funcionalidades puderam ser testadas de forma automatizada.

---

Separei os dois tipos de testes feitos em dois arquivos md aqui no repositorio, covê pode conferir clicando nos links abaixo:

## [🛠️Testes de funcionalidades](TestesFunc.md)

## [🎨Testes de desing](TestesDesing.md)

---

**Passo a passo para iniciar o Cypress para testar a funcionalidade do site:**

**1** - É necessario ter o VScode e Node instalado na máquina.

**2** - Utilizei a versão v22.14.0 LTS do Node.js para rodar o Cypress.

**3** - Após ter feito a instalação do dois e abrir o repositorio, faça o seguinte:

Abra o terminal e digite:

Criará o ambiente:

```bash
npm init -y
```

```bash
npm install cypress --save-dev
```

Após isso digite o seguinte comando para rodar o Cypress:

```bash
npx cypress open
```

Você pode conferir o código que usei para fazer a simples automação dos testes dos campos de cadastro, em: [Código de teste](cypress/e2e/teste-SEA.cy.js)
