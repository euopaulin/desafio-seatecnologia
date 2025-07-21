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

🔴 **1** - Testes manuais, simulando um cenário real onde um usuário administrador do sistema iria preencher os campos necessários e cadastrar o novo funcionário. Esse foi o método mais utilizado nos testes.

🔴 **2** - Testes automatizados, utilizando o ChromeDevTools para visualizar os elementos do site e o Cypress para automatização no teste de alguns campos, editando os códigos que simulam os cenários de preenchimento dos campos. Dessa forma, algumas funcionalidades puderam ser testadas de forma automatizada.

---

Separei os dois tipos de testes feitos em dois arquivos md aqui no repositorio, covê pode conferir clicando nos links abaixo:

[<h2>🛠️Testes de funcionalidades</h2>](TestesFunc.md)

[<h2>🎨Testes de desing</h2>](TestesDesing.md)
