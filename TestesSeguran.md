## 🕵️‍♂️ Testes de segurança

Nesse case de teste foram realizados teste a respeito da segunraça do site, bem como certificados, possiveis vunerabilidades e etc.

Foi utilizado a ferramenta Nikto para realizar a varredura.

## O que a varredura conseguiu buscar?

Essas são as informações que que a ferramenta informou no terminal:

<p align="center">
    <img src="Images/Captura de tela_2025-07-22_21-09-25.png" alt="segur" heigt="500">
</p>

Agora vamos interpretar o que essas informações querem dizer:

## 🔍 Informações sobre o alvo:

**IP do alvo:** 186.193.7.237

**Hostname:** *analista-teste.seatecnologia.com.br* Esse é o nome de domínio do servidor.

**Porta:** *443* Essa é a porta usada pelo HTTPS, indicando que o site está usando comunicação segura via SSL/TLS.

## 🖥️ Informações sobre o servidor

**Servidor:**
*nginx/1.14.1* O servidor web está rodando Nginx na versão 1.14.1.

## ❗ Quais são os ponteciais problemas de segurança que o Nikto encontrou?

**x-powered-by header:**

*tinyhttp* Isso significa que o cabeçalho x-powered-by indica qual software o servidor está usando. Isso pode ser uma informação sensível, pois um atacante pode fazer uso disso para identificar a tecnologia do servidor.

**access-control-allow-origin header:**

Isso indica que o servidor permite requisições de qualquer origem (CORS). Apesar de ser útil em algumas situações, isso pode ser perigoso se o site expõe dados sensíveis e permitir requisições de origens não confiáveis.

## ✅ Conclusão da varredura

Apesar do site está usando HTTPS que já traz uma segurança a mais para o site, é possivel ver que o Nikto encontrou alguns problemas que devem ser levado em consideração para a segurança, ainda mais por se tratar de uma plataforma onde são inseridos dados sensiveis para cadastro de diversos funcionarios.

