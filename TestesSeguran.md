## 🕵️‍♂️ Testes de segurança

Nesse caso de teste foram realizados testes a respeito da segurança do site, bem como certificados, possíveis vulnerabilidades, informações do servidor e etc.

Foi utilizada a ferramenta Nikto para realizar a varredura.

## O que a varredura conseguiu buscar?

Essas são as informações que a ferramenta informou no terminal:

<p align="center">
    <img src="Images/Captura de tela_2025-07-22_21-09-25.png" alt="segur" heigt="500">
</p>

Agora vamos interpretar o que essas informações significam:

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

Apesar de o site estar usando HTTPS, o que já traz uma segurança a mais, é possível ver que o Nikto encontrou alguns problemas que devem ser levados em consideração para a segurança, ainda mais por se tratar de uma plataforma onde são inseridos dados sensíveis para o cadastro de diversos funcionários.

