# 👾 Desafio Técnico SEA Tecnologia

Esta documentação tem como objetivo relatar todo o processo realizado no teste de software da SEA Tecnologia. Irei explorar de forma exaustiva o software e apresentar as ferramentas usadas, métodos utilizados para encontrar os bugs e reportá-los, testando suas funcionalidades, usabilidade e compatibilidade entre diferentes dispositivos e navegadores, além de sugerir possíveis soluções para essas falhas.

Foram realizados testes manuais e testes automatizados, comparando as duas páginas fornecidas para o teste, uma sendo a de testes e a outra o protótipo. A ideia é comparar os dois e analisar se o site de teste está em conformidade com o site protótipo.

## ⚙️ Ferramentas utilizadas:

| Ferramenta       | Função                            |
|------------------|-----------------------------------|
| 📝 Obsidian    | Para fazer as anotações, visualização gráfica de todo o processo e auxiliar na criação da documentação presente no README     |
| 🛠️ ChromeDevTools    | Para inspecionar os elementos de código do site     |
| 🧪 Cypress     | Para testes simples de automação end-to-end (E2E) no site        |
| 💻 VScode    | Para edição de código     |
| 🌐 Node.JS    | Versão v22.14.0 para rodar o Cypress    |
| 🕵️‍♂️ Nikto         | Aplicação via terminal do Linux para varredura de possíveis vulnerabilidades no site |

---

Dividi os testes em três: **Testes de Funcionalidades**, **Testes de Desing**, **Testes de Segurança**. Optei por dividir em três, para melhor compreensão das falhas encontradas.

---

### ⚙️ Metodos adotados:

Para a realização dos testes feitos nas funcionalidades da página, foram utilizados três métodos, sendo eles:

🔴 **1** - Testes automatizados, utilizando o ChromeDevTools para visualizar os elementos do site e o Cypress para automatização no teste de alguns campos, editando os códigos que simulam os cenários de preenchimento dos campos. Dessa forma, algumas funcionalidades puderam ser testadas de forma automatizada.

🔴 **2** - Testes manuais na análise de elementos gráficos que estão em desconformidade com o protótipo, como fontes, textos, layouts, cores e imagens.

🔴 **3** - Teste básico de segurança utilizando o Nikto via distribuição Linux Mint.

---

Separei os três tipos de testes feitos em três arquivos .md aqui no repositório. Você pode conferir clicando nos links abaixo:

## [🛠️Testes de funcionalidades](TestesFunc.md)

## [🎨Testes de design](TestesDesign.md)

## [🛡️Testes de segurança](TestesSeguran.md)

**Passo a passo para iniciar o Cypress para testar a funcionalidade do site:**

- É necessário ter o VSCode e o Node instalados na máquina.

- Utilizei a versão v22.14.0 LTS do Node.js para rodar o Cypress.

- Após ter feito a instalação dos dois e abrir o repositório, faça o seguinte:

Abra o terminal e digite para criar o ambiente:

```bash
npm init -y
```

```bash
npm install cypress --save-dev
```

Após isso, digite o seguinte comando para rodar o Cypress:

```bash
npx cypress open
```

---

**Passo a passo para verificar vunerabilidade do site via terminal Linux com o Nikto:**

**1** - Para utilizar o Nikto, é necessário um ambiente Linux ou pode rodar via Git Bash. Optei por rodar via terminal Linux, pois já tinha uma máquina com Linux Mint instalado. Também é possível rodar o Nikto no Windows via WSL.

**2** - No terminal de sua preferência, digite o seguinte comando para instalar e iniciar o Nikto:

```bash
sudo apt install nikto
```
Após isso, digite o comando para clonar o repositório do Nikto:

```bash
git clone https://github.com/nikto/nikto.git
```

Depois:

```bash
cd nikto
```

E por fim:

```bash
perl program/nikto.pl -h https://analista-teste.seatecnologia.com.br/ -o relatorio.html -Format html
```

O -relatorio e -format criam um relatório da varredura feita.

---

**Você pode conferir o código que usei para fazer a simples automação dos testes dos campos de cadastro em: [Código de teste](cypress/e2e/teste-funcionalidades.cy.js)**
